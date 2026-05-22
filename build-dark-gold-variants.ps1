$ErrorActionPreference = 'Stop'

$workspace = Split-Path -Parent $MyInvocation.MyCommand.Path
$baseFile = Join-Path $workspace 'kktc-sirket-kurma-siyah-altin.html'
$packageRoot = Join-Path $workspace 'musteriye-gonderim-paketleri'
$timestamp = Get-Date -Format 'yyyyMMdd-HHmmss'
$outputRoot = Join-Path $packageRoot "dark-gold-paketleri-$timestamp"
$masterZip = "$outputRoot.zip"

if (!(Test-Path $packageRoot)) {
  New-Item -ItemType Directory -Path $packageRoot | Out-Null
}

New-Item -ItemType Directory -Path $outputRoot | Out-Null

$baseHtml = Get-Content -LiteralPath $baseFile -Raw

$logoSearch = @"
      <div class="logo-text">Kaya Plus</div>
      <div class="logo-sub" data-tr="Şirket Kurma ve Mali Danışmanlık" data-en="Company Formation and Financial Advisory" data-ru="Регистрация компаний и финансовый консалтинг" data-fa="تأسيس الشركات والاستشارات المالية">Şirket Kurma ve Mali Danışmanlık</div>
"@

$logoReplace = @"
      <div class="logo-text">Kaya Plus Muhasebe</div>
      <div class="logo-sub" data-tr="Kurumsal muhasebe ve mali dan&#305;&#351;manl&#305;k" data-en="Corporate accounting and financial advisory" data-ru="Corporate accounting and financial advisory" data-fa="Corporate accounting and financial advisory">Kurumsal muhasebe ve mali dan&#305;&#351;manl&#305;k</div>
"@

$heroSearch = @"
    <h1 class="hero-title">
      <span data-tr="Kaya Plus" data-en="Kaya Plus" data-ru="Kaya Plus" data-fa="كايا بلس">Kaya Plus</span><br>
      <span class="gold-text" data-tr="Şirket Kurma ve Mali Danışmanlık" data-en="Company Formation and Financial Advisory" data-ru="Регистрация компаний и финансовый консалтинг" data-fa="تأسيس الشركات والاستشارات المالية">Şirket Kurma ve Mali Danışmanlık</span>
    </h1>
    <p class="hero-sub" data-tr="Kaya Plus; KKTC'de şirket kurma, yönetme, muhasebe, vergi, bordro, kuruluş, tescil ve mali danışmanlık başlıklarında yerli ve yabancı müvekkillere gerçek ofis altyapısı, düzenli süreç takibi ve güven veren danışmanlık desteği sunar." data-en="Kaya Plus provides local and foreign clients in the TRNC with real office infrastructure, disciplined process follow-up and trusted advisory support across company formation, management, accounting, tax, payroll, registration and financial consulting." data-ru="Kaya Plus предоставляет местным и иностранным клиентам в ТРСК реальную офисную инфраструктуру, регулярное сопровождение процессов и внушающую доверие консультационную поддержку по регистрации и управлению компаниями, бухгалтерии, налогам, payroll и финансовому консалтингу." data-fa="تقدم كايا بلس للعملاء المحليين والأجانب في شمال قبرص بنية مكتبية حقيقية ومتابعة منتظمة للإجراءات ودعماً استشارياً موثوقاً في تأسيس الشركات وإدارتها والمحاسبة والضرائب والرواتب والتسجيل والاستشارات المالية.">Kaya Plus; KKTC'de şirket kurma, yönetme, muhasebe, vergi, bordro, kuruluş, tescil ve mali danışmanlık başlıklarında yerli ve yabancı müvekkillere gerçek ofis altyapısı, düzenli süreç takibi ve güven veren danışmanlık desteği sunar.</p>
"@

$heroReplace = @"
    <h1 class="hero-title">
      <span data-tr="Kurumsal Muhasebe ve Mali" data-en="Corporate Accounting and Financial" data-ru="Corporate Accounting and Financial" data-fa="Corporate Accounting and Financial">Kurumsal Muhasebe ve Mali</span><br>
      <span class="gold-text" data-tr="Dan&#305;&#351;manl&#305;k" data-en="Advisory" data-ru="Advisory" data-fa="Advisory">Dan&#305;&#351;manl&#305;k</span>
    </h1>
    <p class="hero-sub" data-tr="KKTC'de &#351;irket kurulu&#351;u, muhasebe, bordro, vergi ve resmi s&#252;re&#231;lerde profesyonel dan&#305;&#351;manl&#305;k hizmeti sunuyoruz." data-en="We provide professional advisory support across company formation, accounting, payroll, tax and official processes in the TRNC." data-ru="We provide professional advisory support across company formation, accounting, payroll, tax and official processes in the TRNC." data-fa="We provide professional advisory support across company formation, accounting, payroll, tax and official processes in the TRNC.">KKTC'de &#351;irket kurulu&#351;u, muhasebe, bordro, vergi ve resmi s&#252;re&#231;lerde profesyonel dan&#305;&#351;manl&#305;k hizmeti sunuyoruz.</p>
    <div class="hero-actions">
      <a href="#contact" class="btn-hero-primary" data-tr="&#304;leti&#351;ime Ge&#231;" data-en="Get in Touch" data-ru="Get in Touch" data-fa="Get in Touch">&#304;leti&#351;ime Ge&#231;</a>
    </div>
"@

function New-VariantCss {
  param(
    [Parameter(Mandatory = $true)] $Variant
  )

  return @"
<style id="$($Variant.slug)-reference-polish">
html[data-theme] body {
  background:
    radial-gradient(circle at 14% 12%, $($Variant.glow1) 0%, transparent 28%),
    radial-gradient(circle at 82% 16%, $($Variant.glow2) 0%, transparent 24%),
    linear-gradient(180deg, $($Variant.pageTop) 0%, $($Variant.pageBottom) 100%) !important;
  color: $($Variant.bodyText) !important;
}

html[data-theme] body::before {
  background-image:
    linear-gradient($($Variant.gridLine) 1px, transparent 1px),
    linear-gradient(90deg, $($Variant.gridLine) 1px, transparent 1px) !important;
  background-size: 28px 28px !important;
}

html[data-theme] body::after {
  top: 10%;
  right: -110px;
  width: 460px;
  height: 460px;
  background: radial-gradient(circle, $($Variant.halo) 0%, transparent 72%) !important;
}

html[data-theme] .intro-overlay,
html[data-theme] .theme-preview-chip,
html[data-theme] #header nav,
html[data-theme] #header .header-actions,
html[data-theme] .mobile-nav {
  display: none !important;
}

html[data-theme] #header,
html[data-theme] #header.scrolled,
html[data-theme] #header:not(.scrolled) {
  position: relative;
  top: auto;
  left: auto;
  right: auto;
  height: auto;
  width: 100%;
  justify-content: center;
  padding: 42px 24px 10px !important;
  background: transparent !important;
  box-shadow: none !important;
  backdrop-filter: none !important;
  border-bottom: 0 !important;
}

html[data-theme] #header .logo {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0;
  text-align: center;
}

html[data-theme] #header .logo-mark {
  display: none !important;
}

html[data-theme] #header .logo,
html[data-theme] #header.scrolled .logo,
html[data-theme] #header:not(.scrolled) .logo,
html[data-theme] .logo-text {
  color: $($Variant.logoColor) !important;
}

html[data-theme] .logo-text {
  font-family: 'Playfair Display', serif;
  font-size: clamp(30px, 3vw, 44px);
  line-height: 1.02;
  letter-spacing: -0.03em;
}

html[data-theme] .logo-sub,
html[data-theme] #header .logo-sub,
html[data-theme] #header:not(.scrolled) .logo-sub {
  display: block !important;
  margin-top: 8px;
  color: $($Variant.logoSub) !important;
  font-size: 15px;
  font-weight: 400;
  letter-spacing: 0;
  text-transform: none;
}

html[data-theme] #hero {
  background: transparent !important;
  min-height: auto;
  padding: 52px 24px 96px !important;
}

html[data-theme] .hero-bg,
html[data-theme] .hero-pattern,
html[data-theme] .hero-glow,
html[data-theme] .hero-badge,
html[data-theme] .hero-focus-grid,
html[data-theme] .hero-stats {
  display: none !important;
}

html[data-theme] .hero-content {
  width: min(1280px, calc(100% - 8px));
  max-width: 1280px;
  margin: 0 auto;
  padding: clamp(42px, 5.5vw, 74px) clamp(34px, 5vw, 70px) !important;
  border-radius: 32px;
  background: linear-gradient(180deg, $($Variant.surfaceTop) 0%, $($Variant.surfaceBottom) 100%) !important;
  border: 1px solid $($Variant.borderStrong) !important;
  box-shadow: 0 32px 82px $($Variant.shadowStrong) !important;
}

html[data-theme] .hero-title,
html[data-theme] .hero-title span {
  color: $($Variant.title) !important;
  -webkit-text-fill-color: $($Variant.title) !important;
}

html[data-theme] .hero-title .gold-text {
  color: $($Variant.titleEmphasis) !important;
  -webkit-text-fill-color: $($Variant.titleEmphasis) !important;
}

html[data-theme] .hero-title {
  font-size: clamp(58px, 7vw, 92px) !important;
  line-height: 1.02;
  letter-spacing: -0.05em;
  max-width: 9.4ch;
  margin-bottom: 28px;
  text-wrap: balance;
}

html[data-theme] .hero-sub {
  max-width: 980px;
  margin-bottom: 34px;
  color: $($Variant.subtitle) !important;
  font-size: clamp(19px, 2.2vw, 28px);
  line-height: 1.65;
  font-weight: 400;
}

html[data-theme] .hero-actions {
  display: flex !important;
  gap: 16px;
  margin-bottom: 0;
}

html[data-theme] .btn-hero-primary {
  min-height: 58px;
  padding: 0 36px;
  border-radius: 16px;
  background: linear-gradient(135deg, $($Variant.buttonStart), $($Variant.buttonEnd)) !important;
  color: $($Variant.buttonText) !important;
  box-shadow: 0 22px 48px $($Variant.buttonShadow) !important;
  border: 1px solid $($Variant.buttonBorder) !important;
  font-size: 18px;
  font-weight: 600;
}

html[data-theme] .btn-hero-primary:hover {
  transform: translateY(-1px);
  filter: brightness(1.03);
}

html[data-theme] .section-shell,
html[data-theme] .portal-card,
html[data-theme] .service-hub-card,
html[data-theme] .formation-card,
html[data-theme] .sector-card,
html[data-theme] .tax-panel,
html[data-theme] .news-item,
html[data-theme] .quiz-container,
html[data-theme] .type-card,
html[data-theme] .calc-form,
html[data-theme] .calc-result,
html[data-theme] .testi-card,
html[data-theme] .law-item,
html[data-theme] .process-step,
html[data-theme] .stat-card,
html[data-theme] .contact-card,
html[data-theme] .form-card,
html[data-theme] .contact-visual-card,
html[data-theme] .office-gallery-card,
html[data-theme] .accounting-showcase-card,
html[data-theme] .accounting-intro,
html[data-theme] .accounting-support-card,
html[data-theme] .team-card,
html[data-theme] .faq-item,
html[data-theme] .mission-panel,
html[data-theme] .map-embed,
html[data-theme] .corporate-lead-copy,
html[data-theme] .accounting-detail-card,
html[data-theme] .section-visual-panel,
html[data-theme] .accounting-intro-copy,
html[data-theme] .accounting-intro-framework,
html[data-theme] .accounting-intro-trust-card,
html[data-theme] .accounting-highlight-item,
html[data-theme] .support-flow-item,
html[data-theme] .contact-visual-body {
  background: linear-gradient(180deg, $($Variant.softSurfaceTop) 0%, $($Variant.softSurfaceBottom) 100%) !important;
  border-color: $($Variant.borderSoft) !important;
  box-shadow: 0 22px 54px $($Variant.cardShadow) !important;
}

html[data-theme] .accounting-showcase-copy,
html[data-theme] .accounting-support-copy,
html[data-theme] .accounting-intro-badge,
html[data-theme] .accounting-card-photo-badge,
html[data-theme] .sector-card-fallback,
html[data-theme] #form-wrap,
html[data-theme] .quiz-body,
html[data-theme] .quiz-option,
html[data-theme] .topic-chip,
html[data-theme] .micro-list span,
html[data-theme] .registration-paper,
html[data-theme] .registration-badge,
html[data-theme] .registration-check-item,
html[data-theme] .section-visual-points span,
html[data-theme] .live-support-lead-card,
html[data-theme] .live-support-chip,
html[data-theme] .live-support-composer,
html[data-theme] .live-support-end,
html[data-theme] .section-visual-art,
html[data-theme] .table-wrap,
html[data-theme] .comp-table,
html[data-theme] .framework-point,
html[data-theme] .contact-visual-stat,
html[data-theme] input,
html[data-theme] select,
html[data-theme] textarea {
  background: $($Variant.panelFill) !important;
  border-color: $($Variant.borderSoft) !important;
  color: $($Variant.bodyText) !important;
}

html[data-theme] .section-title,
html[data-theme] .section-title.light,
html[data-theme] .team-hero-title,
html[data-theme] .quiz-header-title,
html[data-theme] .process-step-title,
html[data-theme] .form-title,
html[data-theme] .law-name {
  color: $($Variant.sectionTitle) !important;
  -webkit-text-fill-color: $($Variant.sectionTitle) !important;
}

html[data-theme] .section-tag,
html[data-theme] .footer-col-title,
html[data-theme] .card-kicker,
html[data-theme] .hero-title .gold-text,
html[data-theme] .topic-chip strong {
  color: $($Variant.accentText) !important;
  -webkit-text-fill-color: $($Variant.accentText) !important;
}

html[data-theme] .hero-sub,
html[data-theme] .section-sub,
html[data-theme] p,
html[data-theme] li,
html[data-theme] .faq-q,
html[data-theme] .faq-a,
html[data-theme] .type-desc,
html[data-theme] .testi-text,
html[data-theme] .testi-country,
html[data-theme] .contact-card-label,
html[data-theme] .contact-card-val,
html[data-theme] .contact-card-val a,
html[data-theme] .calc-result-sub,
html[data-theme] .calc-result-row-label,
html[data-theme] .stat-label,
html[data-theme] .form-sub,
html[data-theme] .form-label,
html[data-theme] .law-desc,
html[data-theme] .quiz-header-sub,
html[data-theme] label,
html[data-theme] input::placeholder,
html[data-theme] textarea::placeholder {
  color: $($Variant.bodyText) !important;
  -webkit-text-fill-color: $($Variant.bodyText) !important;
}

@media (max-width: 900px) {
  html[data-theme] #header,
  html[data-theme] #header.scrolled,
  html[data-theme] #header:not(.scrolled) {
    padding: 30px 18px 6px !important;
  }

  html[data-theme] #hero {
    padding: 34px 18px 72px !important;
  }

  html[data-theme] .hero-content {
    width: min(100%, calc(100% - 2px));
    padding: 30px 22px !important;
    border-radius: 24px;
  }

  html[data-theme] .hero-title {
    font-size: clamp(42px, 10vw, 62px) !important;
    max-width: 10ch;
  }

  html[data-theme] .hero-sub {
    font-size: 18px;
  }

  html[data-theme] .btn-hero-primary {
    width: 100%;
    justify-content: center;
  }
}
</style>
"@
}

$variants = @(
  @{
    slug = 'dark-gold'
    label = 'Dark Gold'
    file = 'kktc-sirket-kurma-dark-gold.html'
    pageTop = '#12100d'
    pageBottom = '#1b1611'
    glow1 = 'rgba(212,173,79,0.24)'
    glow2 = 'rgba(246,237,212,0.08)'
    gridLine = 'rgba(212,173,79,0.03)'
    halo = 'rgba(212,173,79,0.18)'
    surfaceTop = 'rgba(35,30,24,0.98)'
    surfaceBottom = 'rgba(26,22,18,0.96)'
    softSurfaceTop = 'rgba(28,24,20,0.96)'
    softSurfaceBottom = 'rgba(22,19,15,0.94)'
    panelFill = 'rgba(250,230,185,0.06)'
    borderStrong = 'rgba(212,173,79,0.26)'
    borderSoft = 'rgba(212,173,79,0.14)'
    shadowStrong = 'rgba(0,0,0,0.34)'
    cardShadow = 'rgba(0,0,0,0.24)'
    logoColor = '#f5efe1'
    logoSub = 'rgba(242,226,191,0.84)'
    title = '#ffffff'
    titleEmphasis = '#f0cf7a'
    sectionTitle = '#f5ead2'
    subtitle = 'rgba(243,233,215,0.82)'
    bodyText = '#d7ba7d'
    accentText = '#efc96d'
    buttonStart = '#d7af49'
    buttonEnd = '#b8891f'
    buttonText = '#17120d'
    buttonShadow = 'rgba(212,173,79,0.28)'
    buttonBorder = 'rgba(255,244,214,0.20)'
  },
  @{
    slug = 'dark-charcoal'
    label = 'Dark Charcoal'
    file = 'kktc-sirket-kurma-dark-charcoal.html'
    pageTop = '#0a0a0a'
    pageBottom = '#14110f'
    glow1 = 'rgba(194,154,60,0.20)'
    glow2 = 'rgba(255,255,255,0.06)'
    gridLine = 'rgba(194,154,60,0.028)'
    halo = 'rgba(194,154,60,0.16)'
    surfaceTop = 'rgba(28,28,28,0.98)'
    surfaceBottom = 'rgba(21,20,19,0.96)'
    softSurfaceTop = 'rgba(24,23,22,0.96)'
    softSurfaceBottom = 'rgba(17,16,15,0.94)'
    panelFill = 'rgba(236,214,168,0.05)'
    borderStrong = 'rgba(194,154,60,0.24)'
    borderSoft = 'rgba(194,154,60,0.13)'
    shadowStrong = 'rgba(0,0,0,0.38)'
    cardShadow = 'rgba(0,0,0,0.28)'
    logoColor = '#f1ece3'
    logoSub = 'rgba(222,205,169,0.80)'
    title = '#ffffff'
    titleEmphasis = '#d8b062'
    sectionTitle = '#efe2c4'
    subtitle = 'rgba(233,224,204,0.78)'
    bodyText = '#c8ae76'
    accentText = '#ddb76c'
    buttonStart = '#d2aa50'
    buttonEnd = '#9e7425'
    buttonText = '#0d0d0d'
    buttonShadow = 'rgba(194,154,60,0.26)'
    buttonBorder = 'rgba(255,240,199,0.16)'
  },
  @{
    slug = 'ottoman-gold'
    label = 'Ottoman Gold'
    file = 'kktc-sirket-kurma-ottoman-gold.html'
    pageTop = '#140f0a'
    pageBottom = '#21170f'
    glow1 = 'rgba(230,180,76,0.24)'
    glow2 = 'rgba(253,241,206,0.08)'
    gridLine = 'rgba(230,180,76,0.03)'
    halo = 'rgba(230,180,76,0.18)'
    surfaceTop = 'rgba(41,30,20,0.98)'
    surfaceBottom = 'rgba(32,24,17,0.96)'
    softSurfaceTop = 'rgba(34,26,19,0.96)'
    softSurfaceBottom = 'rgba(24,18,13,0.94)'
    panelFill = 'rgba(255,231,183,0.06)'
    borderStrong = 'rgba(230,180,76,0.24)'
    borderSoft = 'rgba(230,180,76,0.14)'
    shadowStrong = 'rgba(0,0,0,0.34)'
    cardShadow = 'rgba(0,0,0,0.26)'
    logoColor = '#f8efdd'
    logoSub = 'rgba(245,221,169,0.82)'
    title = '#fffdf8'
    titleEmphasis = '#f2cd7a'
    sectionTitle = '#f5e8c8'
    subtitle = 'rgba(244,226,190,0.82)'
    bodyText = '#ddb66a'
    accentText = '#f0c66d'
    buttonStart = '#efc96d'
    buttonEnd = '#b97e1d'
    buttonText = '#1c140c'
    buttonShadow = 'rgba(230,180,76,0.30)'
    buttonBorder = 'rgba(255,245,214,0.18)'
  },
  @{
    slug = 'champagne-noir'
    label = 'Champagne Noir'
    file = 'kktc-sirket-kurma-champagne-noir.html'
    pageTop = '#161210'
    pageBottom = '#221b17'
    glow1 = 'rgba(220,190,127,0.20)'
    glow2 = 'rgba(255,250,236,0.10)'
    gridLine = 'rgba(220,190,127,0.03)'
    halo = 'rgba(220,190,127,0.16)'
    surfaceTop = 'rgba(39,33,29,0.98)'
    surfaceBottom = 'rgba(31,27,24,0.96)'
    softSurfaceTop = 'rgba(33,29,26,0.96)'
    softSurfaceBottom = 'rgba(25,22,19,0.94)'
    panelFill = 'rgba(255,245,223,0.06)'
    borderStrong = 'rgba(220,190,127,0.22)'
    borderSoft = 'rgba(220,190,127,0.12)'
    shadowStrong = 'rgba(0,0,0,0.34)'
    cardShadow = 'rgba(0,0,0,0.24)'
    logoColor = '#fbf4e8'
    logoSub = 'rgba(244,227,194,0.84)'
    title = '#fffaf1'
    titleEmphasis = '#e8c685'
    sectionTitle = '#f4ebdd'
    subtitle = 'rgba(246,235,214,0.80)'
    bodyText = '#dbc398'
    accentText = '#ecd39a'
    buttonStart = '#e1c78e'
    buttonEnd = '#af8553'
    buttonText = '#1a1613'
    buttonShadow = 'rgba(220,190,127,0.26)'
    buttonBorder = 'rgba(255,250,236,0.18)'
  },
  @{
    slug = 'bronze-executive'
    label = 'Bronze Executive'
    file = 'kktc-sirket-kurma-bronze-executive.html'
    pageTop = '#160f0c'
    pageBottom = '#241610'
    glow1 = 'rgba(186,121,70,0.24)'
    glow2 = 'rgba(244,228,204,0.08)'
    gridLine = 'rgba(186,121,70,0.03)'
    halo = 'rgba(186,121,70,0.16)'
    surfaceTop = 'rgba(42,26,19,0.98)'
    surfaceBottom = 'rgba(32,21,16,0.96)'
    softSurfaceTop = 'rgba(36,24,18,0.96)'
    softSurfaceBottom = 'rgba(27,18,14,0.94)'
    panelFill = 'rgba(248,219,189,0.05)'
    borderStrong = 'rgba(186,121,70,0.24)'
    borderSoft = 'rgba(186,121,70,0.14)'
    shadowStrong = 'rgba(0,0,0,0.34)'
    cardShadow = 'rgba(0,0,0,0.24)'
    logoColor = '#f7efe8'
    logoSub = 'rgba(233,199,166,0.82)'
    title = '#fffaf6'
    titleEmphasis = '#e0ab77'
    sectionTitle = '#f3dfcf'
    subtitle = 'rgba(240,221,204,0.80)'
    bodyText = '#cd9f7c'
    accentText = '#dfac83'
    buttonStart = '#d8a06b'
    buttonEnd = '#9b5b33'
    buttonText = '#1f130f'
    buttonShadow = 'rgba(186,121,70,0.28)'
    buttonBorder = 'rgba(255,238,220,0.18)'
  },
  @{
    slug = 'midnight-gold'
    label = 'Midnight Gold'
    file = 'kktc-sirket-kurma-midnight-gold.html'
    pageTop = '#0b0e13'
    pageBottom = '#131821'
    glow1 = 'rgba(215,171,76,0.18)'
    glow2 = 'rgba(200,220,255,0.08)'
    gridLine = 'rgba(215,171,76,0.025)'
    halo = 'rgba(215,171,76,0.15)'
    surfaceTop = 'rgba(24,29,39,0.98)'
    surfaceBottom = 'rgba(17,22,31,0.96)'
    softSurfaceTop = 'rgba(20,25,34,0.96)'
    softSurfaceBottom = 'rgba(15,19,27,0.94)'
    panelFill = 'rgba(234,210,163,0.05)'
    borderStrong = 'rgba(215,171,76,0.22)'
    borderSoft = 'rgba(215,171,76,0.12)'
    shadowStrong = 'rgba(0,0,0,0.36)'
    cardShadow = 'rgba(0,0,0,0.24)'
    logoColor = '#f4f2ef'
    logoSub = 'rgba(219,212,196,0.80)'
    title = '#ffffff'
    titleEmphasis = '#e3bf6d'
    sectionTitle = '#f0ece2'
    subtitle = 'rgba(231,227,218,0.78)'
    bodyText = '#cfba8b'
    accentText = '#e6c77e'
    buttonStart = '#d8b15c'
    buttonEnd = '#8e6a28'
    buttonText = '#10141b'
    buttonShadow = 'rgba(215,171,76,0.26)'
    buttonBorder = 'rgba(255,247,228,0.14)'
  }
)

foreach ($variant in $variants) {
  $html = [regex]::Replace(
    $baseHtml,
    '(?s)<div class="logo-text">Kaya Plus</div>\s*<div class="logo-sub"[^>]*>.*?</div>',
    $logoReplace.Trim()
  )

  $html = [regex]::Replace(
    $html,
    '(?s)(<div class="hero-content">\s*)<h1 class="hero-title">.*?</h1>\s*<p class="hero-sub"[^>]*>.*?</p>',
    '$1' + $heroReplace.Trim()
  )

  $html = $html.Replace('</head>', "$(New-VariantCss -Variant $variant)`r`n</head>")

  $outputFile = Join-Path $workspace $variant.file
  Set-Content -LiteralPath $outputFile -Value $html -Encoding UTF8

  $packageDir = Join-Path $outputRoot $variant.slug
  New-Item -ItemType Directory -Path $packageDir | Out-Null

  Copy-Item -LiteralPath (Join-Path $workspace 'assets') -Destination (Join-Path $packageDir 'assets') -Recurse
  Copy-Item -LiteralPath $outputFile -Destination (Join-Path $packageDir $variant.file)
  Copy-Item -LiteralPath $outputFile -Destination (Join-Path $packageDir 'index.html')

  $readme = @"
$($variant.label) paketi.

1. Zip dosyasini cikarin.
2. Paket klasoru icindeki index.html dosyasini acin.
3. Gorseller ve diger yerel dosyalar assets klasoru icinde bulunur.
"@
  Set-Content -LiteralPath (Join-Path $packageDir 'README.txt') -Value $readme -Encoding UTF8

  Compress-Archive -LiteralPath $packageDir -DestinationPath "$packageDir.zip"
}

Compress-Archive -LiteralPath $outputRoot -DestinationPath $masterZip

Write-Output "OUTPUT_ROOT=$outputRoot"
Write-Output "MASTER_ZIP=$masterZip"
