const SOURCE_DEFINITIONS = [
  { type: 'xml', url: 'https://mb.gov.ct.tr/kur/gunluk.xml' },
  { type: 'xml', url: 'https://www.mb.gov.ct.tr/kur/gunluk.xml' },
  { type: 'html', url: 'https://mb.gov.ct.tr/en/veriler/doviz_kurlari/kur_sorgulama' },
  { type: 'html', url: 'https://www.mb.gov.ct.tr/en/veriler/doviz_kurlari/kur_sorgulama' },
];

const TRACKED_CODES = ['USD', 'EUR', 'GBP'];

module.exports = async (req, res) => {
  if (req.method && req.method !== 'GET') {
    res.setHeader('Allow', 'GET');
    return res.status(405).json({ error: 'method_not_allowed' });
  }

  try {
    const { body, sourceUrl, sourceType } = await fetchLatestRatesSource();
    const payload =
      sourceType === 'html'
        ? buildExchangeRatesPayloadFromHtml(body, sourceUrl)
        : buildExchangeRatesPayload(body, sourceUrl);

    res.setHeader('Content-Type', 'application/json; charset=utf-8');
    res.setHeader('Cache-Control', 's-maxage=300, stale-while-revalidate=900');
    return res.status(200).json(payload);
  } catch (error) {
    return res.status(502).json({
      error: 'exchange_rates_unavailable',
      message: error instanceof Error ? error.message : 'Unknown exchange rate error.',
    });
  }
};

async function fetchLatestRatesSource() {
  const failures = [];

  for (const source of SOURCE_DEFINITIONS) {
    try {
      const response = await fetch(source.url, {
        headers: {
          Accept:
            source.type === 'html'
              ? 'text/html,application/xhtml+xml,text/plain;q=0.9,*/*;q=0.8'
              : 'application/xml,text/xml,text/plain;q=0.9,*/*;q=0.8',
          'User-Agent': 'KayaPlusRates/1.0',
        },
      });

      if (!response.ok) {
        throw new Error(`HTTP ${response.status}`);
      }

      const body = await response.text();
      if (!body || !body.includes('<')) {
        throw new Error(`Empty ${source.type.toUpperCase()} response.`);
      }

      return { body, sourceUrl: source.url, sourceType: source.type };
    } catch (error) {
      failures.push(`${source.url}: ${error instanceof Error ? error.message : 'Request failed.'}`);
    }
  }

  throw new Error(failures.join(' | '));
}

function buildExchangeRatesPayload(xml, sourceUrl) {
  const officialDate = extractOfficialDate(xml);
  const currencies = extractTrackedCurrencies(xml);

  for (const code of TRACKED_CODES) {
    if (!currencies[code]?.buy || !currencies[code]?.sell) {
      throw new Error(`Missing required rate for ${code}.`);
    }
  }

  return {
    source: 'KKTC Merkez Bankasi',
    sourceUrl,
    officialDate,
    fetchedAt: new Date().toISOString(),
    refreshIntervalMinutes: 15,
    currencies,
  };
}

function buildExchangeRatesPayloadFromHtml(html, sourceUrl) {
  const officialDate = extractOfficialDateFromHtml(html);
  const currencies = extractTrackedCurrenciesFromHtml(html);

  for (const code of TRACKED_CODES) {
    if (!currencies[code]?.buy || !currencies[code]?.sell) {
      throw new Error(`Missing required HTML rate for ${code}.`);
    }
  }

  return {
    source: 'KKTC Merkez Bankasi',
    sourceUrl,
    officialDate,
    fetchedAt: new Date().toISOString(),
    refreshIntervalMinutes: 15,
    currencies,
  };
}

function extractTrackedCurrencies(xml) {
  const currencies = {};
  const currencyBlockDefinitions = [
    { regex: /<Resmi_Kur\b([^>]*)>([\s\S]*?)<\/Resmi_Kur>/gi, codeTags: ['Sembol'] },
    { regex: /<Currency\b([^>]*)>([\s\S]*?)<\/Currency>/gi, codeTags: ['CurrencyCode', 'Kod', 'Code', 'Currency'] },
  ];

  for (const definition of currencyBlockDefinitions) {
    for (const match of xml.matchAll(definition.regex)) {
      const attributes = match[1] || '';
      const block = match[2] || '';
      const code =
        extractAttribute(attributes, 'CurrencyCode') ||
        extractAttribute(attributes, 'Kod') ||
        extractTagValue(block, definition.codeTags);

      if (!code) continue;

      const normalizedCode = code.trim().toUpperCase();
      if (!TRACKED_CODES.includes(normalizedCode)) continue;

      currencies[normalizedCode] = {
        code: normalizedCode,
        unit: Number.parseInt(extractTagValue(block, ['Unit', 'Birim']), 10) || 1,
        buy: normalizeRate(extractTagValue(block, ['ForexBuying', 'DovizAlis', 'Doviz_Alis', 'Buying'])),
        sell: normalizeRate(extractTagValue(block, ['ForexSelling', 'DovizSatis', 'Doviz_Satis', 'Selling'])),
        effectiveBuy: normalizeRate(extractTagValue(block, ['BanknoteBuying', 'EfektifAlis', 'Efektif_Alis'])),
        effectiveSell: normalizeRate(extractTagValue(block, ['BanknoteSelling', 'EfektifSatis', 'Efektif_Satis'])),
        name:
          extractTagValue(block, ['CurrencyName', 'Isim', 'Name']) ||
          normalizedCode,
      };
    }
  }

  if (Object.keys(currencies).length) {
    return currencies;
  }

  const rowBlockRegex = /<ROW\b[^>]*>([\s\S]*?)<\/ROW>/gi;
  for (const match of xml.matchAll(rowBlockRegex)) {
    const block = match[1] || '';
    const code = extractTagValue(block, ['CurrencyCode', 'Kod', 'Code', 'Sembol']);
    if (!code) continue;

    const normalizedCode = code.trim().toUpperCase();
    if (!TRACKED_CODES.includes(normalizedCode)) continue;

    currencies[normalizedCode] = {
      code: normalizedCode,
      unit: Number.parseInt(extractTagValue(block, ['Unit', 'Birim']), 10) || 1,
      buy: normalizeRate(extractTagValue(block, ['ForexBuying', 'DovizAlis', 'Doviz_Alis', 'Buying'])),
      sell: normalizeRate(extractTagValue(block, ['ForexSelling', 'DovizSatis', 'Doviz_Satis', 'Selling'])),
      effectiveBuy: normalizeRate(extractTagValue(block, ['BanknoteBuying', 'EfektifAlis', 'Efektif_Alis'])),
      effectiveSell: normalizeRate(extractTagValue(block, ['BanknoteSelling', 'EfektifSatis', 'Efektif_Satis'])),
      name:
        extractTagValue(block, ['CurrencyName', 'Isim', 'Name']) ||
        normalizedCode,
    };
  }

  return currencies;
}

function extractOfficialDate(xml) {
  const officialDateTagMatch = xml.match(/<Kur_Tarihi>([^<]+)<\/Kur_Tarihi>/i);
  if (officialDateTagMatch?.[1]) {
    const parsed = normalizeDate(officialDateTagMatch[1], 'DMY');
    if (parsed) return parsed;
  }

  const trDateMatch = xml.match(/<Tarih_Date\b[^>]*\bTarih="([^"]+)"/i);
  if (trDateMatch?.[1]) {
    const parsed = normalizeDate(trDateMatch[1], 'DMY');
    if (parsed) return parsed;
  }

  const enDateMatch = xml.match(/<Tarih_Date\b[^>]*\bDate="([^"]+)"/i);
  if (enDateMatch?.[1]) {
    const parsed = normalizeDate(enDateMatch[1], 'MDY');
    if (parsed) return parsed;
  }

  const dateTagMatch = xml.match(/<(?:Date|Tarih)>([^<]+)<\/(?:Date|Tarih)>/i);
  if (dateTagMatch?.[1]) {
    const parsed = normalizeDate(dateTagMatch[1], 'DMY') || normalizeDate(dateTagMatch[1], 'MDY');
    if (parsed) return parsed;
  }

  return new Date().toISOString().slice(0, 10);
}

function extractTrackedCurrenciesFromHtml(html) {
  const text = stripHtml(html);
  const patterns = {
    USD: /1\s+US\s+DOLLAR\s*\(USD\)\s*([0-9.,]+)\s*([0-9.,]+)\s*([0-9.,]+)\s*([0-9.,]+)/i,
    EUR: /1\s+EURO\s*\(EUR\)\s*([0-9.,]+)\s*([0-9.,]+)\s*([0-9.,]+)\s*([0-9.,]+)/i,
    GBP: /1\s+BRITISH\s+POUND\s*\(GBP\)\s*([0-9.,]+)\s*([0-9.,]+)\s*([0-9.,]+)\s*([0-9.,]+)/i,
  };

  return Object.entries(patterns).reduce((acc, [code, pattern]) => {
    const match = text.match(pattern);
    if (!match) return acc;

    acc[code] = {
      code,
      unit: 1,
      buy: normalizeRate(match[1]),
      sell: normalizeRate(match[2]),
      effectiveBuy: normalizeRate(match[3]),
      effectiveSell: normalizeRate(match[4]),
      name: code,
    };
    return acc;
  }, {});
}

function extractOfficialDateFromHtml(html) {
  const text = stripHtml(html);
  const match = text.match(/(\d{2}[./-]\d{2}[./-]\d{4})\s*-\s*Official Exchange Rates Effective/i);
  if (match?.[1]) {
    const normalized = normalizeDate(match[1], 'DMY');
    if (normalized) return normalized;
  }

  return new Date().toISOString().slice(0, 10);
}

function extractTagValue(block, tags) {
  for (const tag of tags) {
    const match = block.match(new RegExp(`<${tag}>([\\s\\S]*?)<\\/${tag}>`, 'i'));
    if (match?.[1]) {
      return decodeXmlEntities(match[1].trim());
    }
  }

  return '';
}

function extractAttribute(attributes, attributeName) {
  const match = attributes.match(new RegExp(`${attributeName}="([^"]+)"`, 'i'));
  return match?.[1] ? decodeXmlEntities(match[1].trim()) : '';
}

function normalizeRate(value) {
  if (!value) return '';
  const normalized = String(value).replace(/\s+/g, '').replace(',', '.');
  const number = Number.parseFloat(normalized);
  if (!Number.isFinite(number)) return '';
  return number.toFixed(4);
}

function normalizeDate(value, order = 'DMY') {
  if (!value) return '';

  const normalized = String(value).trim();
  const shortMatch = normalized.match(/^(\d{2})[./-](\d{2})[./-](\d{4})$/);
  if (shortMatch) {
    const [, first, second, year] = shortMatch;
    const day = order === 'MDY' ? second : first;
    const month = order === 'MDY' ? first : second;
    return `${year}-${month}-${day}`;
  }

  const slashMatch = normalized.match(/^(\d{4})[./-](\d{2})[./-](\d{2})$/);
  if (slashMatch) {
    const [, year, month, day] = slashMatch;
    return `${year}-${month}-${day}`;
  }

  return '';
}

function decodeXmlEntities(value) {
  return value
    .replace(/&amp;/g, '&')
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>');
}

function stripHtml(value) {
  return decodeXmlEntities(
    String(value || '')
      .replace(/<script[\s\S]*?<\/script>/gi, ' ')
      .replace(/<style[\s\S]*?<\/style>/gi, ' ')
      .replace(/<[^>]+>/g, ' ')
      .replace(/\s+/g, ' ')
      .trim()
  );
}
