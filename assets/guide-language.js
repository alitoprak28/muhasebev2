const GUIDE_LANGUAGE_STORAGE_KEY = "kaya_plus_lang";

const guideLiteralTranslations = {
  "Şirket Kurma ve Mali Danışmanlık": {
    en: "Company Formation and Financial Advisory",
    ru: "Регистрация компаний и финансовый консалтинг",
    fa: "تأسيس الشركات والاستشارات المالية",
  },
  "Muhasebe ve Mali Danışmanlık": {
    en: "Accounting and Financial Advisory",
    ru: "Бухгалтерский и финансовый консалтинг",
    fa: "المحاسبة والاستشارات المالية",
  },
  "Ana Sayfa": {
    en: "Home",
    ru: "Главная",
    fa: "الرئيسية",
  },
  "Neden Kaya Plus?": {
    en: "Why Kaya Plus?",
    ru: "Почему Kaya Plus?",
    fa: "لماذا كايا بلس؟",
  },
  "Hizmetler": {
    en: "Services",
    ru: "Услуги",
    fa: "الخدمات",
  },
  "Yasalar / Vergiler": {
    en: "Laws / Taxes",
    ru: "Законы / Налоги",
    fa: "القوانين / الضرائب",
  },
  "Haberler": {
    en: "News",
    ru: "Новости",
    fa: "الأخبار",
  },
  "KKTC'de Şirket Kurma": {
    en: "Starting a Company in TRNC",
    ru: "Открытие компании в ТРСК",
    fa: "تأسيس شركة في شمال قبرص",
  },
  "Şirket Kurmanın Temel Şartları": {
    en: "Basic Company Formation Requirements",
    ru: "Основные условия регистрации компании",
    fa: "الشروط الأساسية لتأسيس الشركة",
  },
  "Ekibimiz": {
    en: "Our Team",
    ru: "Наша команда",
    fa: "فريقنا",
  },
  "İletişim": {
    en: "Contact Us",
    ru: "Свяжитесь с нами",
    fa: "تواصل معنا",
  },
  "© 2026 Kaya Plus Muhasebe ve Mali Danışmanlık": {
    en: "© 2026 Kaya Plus Accounting and Financial Advisory",
    ru: "© 2026 Kaya Plus Бухгалтерский и финансовый консалтинг",
    fa: "© 2026 كايا بلس للمحاسبة والاستشارات المالية",
  },
  "Lefkoşa, Kuzey Kıbrıs": {
    en: "Nicosia, Northern Cyprus",
    ru: "Никосия, Северный Кипр",
    fa: "نيقوسيا، شمال قبرص",
  },

  "Kuruluş Rehberi": {
    en: "Formation Guide",
    ru: "Гид по регистрации",
    fa: "دليل التأسيس",
  },
  "Şube Rehberi": {
    en: "Branch Guide",
    ru: "Гид по филиалу",
    fa: "دليل الفرع",
  },
  "Karşılaştırma Sayfası": {
    en: "Comparison Page",
    ru: "Страница сравнения",
    fa: "صفحة المقارنة",
  },
  "Rehber Merkezi": {
    en: "Guide Center",
    ru: "Центр руководств",
    fa: "مركز الأدلة",
  },

  "Gerçek ofis altyapısı, net süreç yönetimi ve güven veren danışmanlık çizgisi": {
    en: "A real office infrastructure, clear process management and a trust-building advisory approach",
    ru: "Реальная офисная инфраструктура, чёткое управление процессами и консультационный подход, вызывающий доверие",
    fa: "بنية مكتبية حقيقية وإدارة واضحة للمسار ونهج استشاري يبعث على الثقة",
  },
  "Kaya Plus; yalnızca işlem yapan bir ofis gibi değil, muhasebe, vergi, bordro ve kuruluş başlıklarını daha okunabilir hale getiren bir çalışma zemini gibi konumlanır. Bu sayfada markanın neden güven verdiğini kısa başlıklarla görebilirsiniz.": {
    en: "Kaya Plus positions itself not as an office that only handles transactions, but as a working structure that makes accounting, tax, payroll and company setup topics clearer. On this page you can quickly see why the brand creates trust.",
    ru: "Kaya Plus позиционирует себя не как офис, который просто выполняет операции, а как рабочую систему, которая делает бухгалтерию, налоги, payroll и регистрацию компании более понятными. На этой странице вы кратко увидите, почему бренду доверяют.",
    fa: "تتموضع كايا بلس ليس كمكتب ينجز المعاملات فقط، بل كمنظومة عمل تجعل موضوعات المحاسبة والضرائب والرواتب وتأسيس الشركات أكثر وضوحًا. في هذه الصفحة يمكنك أن ترى بسرعة لماذا يمنح هذا الاسم الثقة.",
  },
  "Duruş": {
    en: "Positioning",
    ru: "Подход",
    fa: "النهج",
  },
  "Yaklaşım": {
    en: "Approach",
    ru: "Подход",
    fa: "الأسلوب",
  },
  "Profil": {
    en: "Profile",
    ru: "Профиль",
    fa: "الملف",
  },
  "Görünür ve ulaşılabilir ofis yapısı": {
    en: "A visible and reachable office structure",
    ru: "Открытая и доступная офисная структура",
    fa: "هيكل مكتبي ظاهر وسهل الوصول",
  },
  "Kararı sadeleştiren net rehberlik": {
    en: "Clear guidance that simplifies decisions",
    ru: "Ясное сопровождение, упрощающее решения",
    fa: "إرشاد واضح يبسّط القرار",
  },
  "Yerli ve yabancı yatırımcı odağı": {
    en: "A focus on local and foreign investors",
    ru: "Ориентация на местных и иностранных инвесторов",
    fa: "تركيز على المستثمر المحلي والأجنبي",
  },
  "Kurumsal güven ilk temasla başlar": {
    en: "Corporate trust starts with the first contact",
    ru: "Корпоративное доверие начинается с первого контакта",
    fa: "الثقة المؤسسية تبدأ من أول تواصل",
  },
  "Ofis görünürlüğü, iletişim netliği ve düzenli süreç disiplini birlikte okunduğunda marka daha sağlam hissedilir.": {
    en: "When office visibility, clear communication and disciplined process management come together, the brand feels stronger.",
    ru: "Когда сочетаются видимость офиса, ясная коммуникация и дисциплина процесса, бренд воспринимается значительно сильнее.",
    fa: "عندما تجتمع وضوح هوية المكتب وصفاء التواصل وانضباط المسار، تبدو العلامة أكثر رسوخًا.",
  },
  "Markayı değil, çalışma biçimini görmek isteyenler için": {
    en: "For those who want to see not the brand, but the way of working",
    ru: "Для тех, кто хочет увидеть не бренд, а способ работы",
    fa: "لمن يريد أن يرى أسلوب العمل لا مجرد العلامة",
  },
  "Ekibimizi, hizmet yapımızı ve iletişim kanallarımızı ayrı sayfalarda daha rahat inceleyebilirsiniz.": {
    en: "You can review our team, service structure and communication channels more comfortably on dedicated pages.",
    ru: "Нашу команду, структуру услуг и каналы связи можно удобнее изучить на отдельных страницах.",
    fa: "يمكنك استعراض فريقنا وهيكل خدماتنا وقنوات التواصل معنا بشكل أوضح في صفحات منفصلة.",
  },
  "Ekiple İletişime Geç": {
    en: "Contact the Team",
    ru: "Связаться с командой",
    fa: "تواصل مع الفريق",
  },

  "Muhasebe, vergi ve mali danışmanlık hizmet alanlarımız": {
    en: "Our accounting, tax and financial advisory service areas",
    ru: "Наши направления бухгалтерских, налоговых и финансово-консультационных услуг",
    fa: "مجالات خدماتنا في المحاسبة والضرائب والاستشارات المالية",
  },
  "İşletmenin günlük kayıt düzeninden stratejik vergi planına, bordro takibinden kuruluş sürecine kadar ihtiyaç duyduğu başlıkları tek çatı altında yönetiyoruz.": {
    en: "We manage the topics a business needs under one roof, from daily record order to strategic tax planning, from payroll tracking to company formation.",
    ru: "Мы объединяем под одной крышей все нужные бизнесу направления: от повседневного учета до стратегического налогового планирования, от payroll до регистрации компании.",
    fa: "ندير تحت سقف واحد كل ما يحتاجه النشاط، من نظام السجلات اليومية إلى التخطيط الضريبي الاستراتيجي، ومن متابعة الرواتب إلى تأسيس الشركة.",
  },
  "Operasyon": {
    en: "Operations",
    ru: "Операции",
    fa: "العمليات",
  },
  "Uyum": {
    en: "Compliance",
    ru: "Комплаенс",
    fa: "الامتثال",
  },
  "Karar": {
    en: "Decision Support",
    ru: "Поддержка решений",
    fa: "دعم القرار",
  },
  "Muhasebe ve mali işler": {
    en: "Accounting and financial operations",
    ru: "Бухгалтерия и финансовые операции",
    fa: "المحاسبة والشؤون المالية",
  },
  "Vergi, tasdik ve resmi takip": {
    en: "Tax, certification and official follow-up",
    ru: "Налоги, заверение и официальное сопровождение",
    fa: "الضرائب والتصديقات والمتابعة الرسمية",
  },
  "Danışmanlık ve yapılandırma desteği": {
    en: "Advisory and structuring support",
    ru: "Консалтинг и поддержка по структурированию",
    fa: "الدعم الاستشاري وإعادة الهيكلة",
  },
  "İşletmenin diline göre hizmet çerçevesi": {
    en: "A service framework shaped around the business language",
    ru: "Формат услуги, выстроенный под язык бизнеса",
    fa: "إطار خدمة يتشكل وفق لغة النشاط",
  },
  "Her şirket aynı desteğe ihtiyaç duymaz; biz önce ihtiyacı ayırır, sonra doğru hizmet omurgasını kurarız.": {
    en: "Not every company needs the same support; we first separate the need, then build the right service backbone.",
    ru: "Не каждой компании нужна одинаковая поддержка; мы сначала выделяем потребность, а затем строим правильную сервисную основу.",
    fa: "ليست كل شركة بحاجة إلى الدعم نفسه؛ نحن نحدد الاحتياج أولاً ثم نبني العمود الخدمي المناسب.",
  },

  "İş dünyası için güncel mevzuat ve resmi duyurular": {
    en: "Current legislation and official updates for business",
    ru: "Актуальное законодательство и официальные уведомления для бизнеса",
    fa: "التشريعات الحالية والإعلانات الرسمية لقطاع الأعمال",
  },
  "Vergi duyuruları, çalışma hayatı düzenlemeleri, kur akışı ve resmi tarihler gibi kararları etkileyen başlıkları tek odaklı sayfada topladık. Bu yapı ana sayfayı uzatmadan güncel takip mantığını korur.": {
    en: "We gathered decision-shaping topics such as tax notices, labor regulations, exchange flow and official dates on a single focused page. This keeps the current-tracking logic without stretching the homepage.",
    ru: "Мы собрали на одной странице темы, влияющие на решения: налоговые уведомления, трудовые изменения, курсы и официальные даты. Так сохраняется логика актуального контроля без перегрузки главной страницы.",
    fa: "جمعنا في صفحة مركزة واحدة الموضوعات التي تؤثر في القرارات مثل الإشعارات الضريبية وتنظيمات العمل وحركة الأسعار والتواريخ الرسمية، بحيث نحافظ على منطق المتابعة الحالية دون إطالة الصفحة الرئيسية.",
  },
  "Mevzuat": {
    en: "Legislation",
    ru: "Законодательство",
    fa: "التشريعات",
  },
  "Takvim": {
    en: "Calendar",
    ru: "Календарь",
    fa: "التقويم",
  },
  "Kur": {
    en: "Rates",
    ru: "Курсы",
    fa: "الأسعار",
  },
  "Resmi duyuru ve değişiklik akışı": {
    en: "Official announcement and change flow",
    ru: "Поток официальных уведомлений и изменений",
    fa: "تدفق الإعلانات والتغييرات الرسمية",
  },
  "Vergi ve başvuru tarihlerine ön bakış": {
    en: "An early view of tax and filing dates",
    ru: "Предварительный взгляд на налоговые и заявочные сроки",
    fa: "نظرة أولية على تواريخ الضرائب والتقديم",
  },
  "Planlamayı etkileyen günlük başlıklar": {
    en: "Daily topics that affect planning",
    ru: "Ежедневные темы, влияющие на планирование",
    fa: "عناوين يومية تؤثر في التخطيط",
  },
  "Doğru bilgi doğru zamanda değerlidir": {
    en: "The right information is valuable at the right time",
    ru: "Правильная информация ценна в нужный момент",
    fa: "المعلومة الصحيحة تكون أثمن في الوقت الصحيح",
  },
  "Özellikle vergi, bordro ve resmi tarih başlıklarında erken fark edilen değişim işletmenin karar kalitesini yükseltir.": {
    en: "Especially in tax, payroll and official-date topics, changes spotted early improve the quality of business decisions.",
    ru: "Особенно в вопросах налогов, payroll и официальных дат раннее замеченное изменение повышает качество решений бизнеса.",
    fa: "خصوصًا في موضوعات الضرائب والرواتب والتواريخ الرسمية، فإن ملاحظة التغيير مبكرًا ترفع جودة قرارات الشركة.",
  },

  "Şirket kuruluşu, yabancı şirket ve uluslararası yapı seçenekleri": {
    en: "Company setup, foreign company and international structure options",
    ru: "Регистрация компании, иностранные компании и международные структуры",
    fa: "خيارات تأسيس الشركات والشركات الأجنبية والهياكل الدولية",
  },
  "KKTC'de yeni şirket kuracak, yabancı şirket şubesi açacak veya uluslararası yapı düşünen yatırımcı için ilk ayrım; faaliyet yönünü, pazarını ve resmi beklentileri doğru okumaktır. Bu sayfa ana seçenekleri tek yerde toplar.": {
    en: "For an investor planning a new company in the TRNC, opening a foreign branch or considering an international structure, the first distinction is to correctly read the business direction, market and official expectations. This page gathers the main options in one place.",
    ru: "Для инвестора, который собирается открыть новую компанию в ТРСК, филиал иностранной компании или международную структуру, первый шаг — правильно определить направление деятельности, рынок и официальные ожидания. Эта страница собирает основные варианты в одном месте.",
    fa: "بالنسبة للمستثمر الذي يخطط لتأسيس شركة جديدة في شمال قبرص أو فتح فرع لشركة أجنبية أو دراسة هيكل دولي، فإن الخطوة الأولى هي قراءة اتجاه النشاط والسوق والمتطلبات الرسمية بشكل صحيح. تجمع هذه الصفحة الخيارات الرئيسية في مكان واحد.",
  },
  "Yerel Yapı": {
    en: "Local Structure",
    ru: "Местная структура",
    fa: "هيكل محلي",
  },
  "Yabancı Model": {
    en: "Foreign Model",
    ru: "Иностранная модель",
    fa: "نموذج أجنبي",
  },
  "Uluslararası": {
    en: "International",
    ru: "Международный",
    fa: "دولي",
  },
  "Yerel limited ve klasik kurulum zemini": {
    en: "Local limited and classic setup ground",
    ru: "Местное Ltd и классическая база регистрации",
    fa: "الشركة المحلية المحدودة وأرضية التأسيس التقليدية",
  },
  "Şube ve yabancı sermaye kurgusu": {
    en: "Branch and foreign-capital structure",
    ru: "Филиал и модель иностранного капитала",
    fa: "هيكل الفرع ورأس المال الأجنبي",
  },
  "UİŞ ve dış pazar odaklı yapı": {
    en: "IBC and an external-market focused structure",
    ru: "МБК и структура, ориентированная на внешний рынок",
    fa: "شركة الأعمال الدولية وهيكل موجه للأسواق الخارجية",
  },
  "Yapıları Karşılaştır": {
    en: "Compare Structures",
    ru: "Сравнить структуры",
    fa: "قارن الهياكل",
  },
  "Temel Şartları Gör": {
    en: "See the Basic Requirements",
    ru: "Посмотреть базовые условия",
    fa: "اعرض الشروط الأساسية",
  },
  "Doğru yapı seçimi tüm akışı değiştirir": {
    en: "Choosing the right structure changes the entire flow",
    ru: "Правильный выбор структуры меняет весь процесс",
    fa: "اختيار الهيكل الصحيح يغيّر المسار بالكامل",
  },
  "Vergi, tescil, banka, resmi süreç ve sonraki muhasebe düzeni seçilen yapıya göre farklılaşır.": {
    en: "Tax, registration, banking, official procedures and the later accounting setup all vary according to the chosen structure.",
    ru: "Налоги, регистрация, банки, официальные процедуры и последующий бухгалтерский порядок различаются в зависимости от выбранной структуры.",
    fa: "تختلف الضرائب والتسجيل والبنك والإجراءات الرسمية والنظام المحاسبي اللاحق بحسب الهيكل المختار.",
  },

  "Şirket kurmanın temel şartlarını ve yasal çerçevesini tek sayfada görün": {
    en: "See the basic company formation requirements and legal framework on one page",
    ru: "Посмотрите базовые требования и правовую рамку регистрации компании на одной странице",
    fa: "اعرض الشروط الأساسية والإطار القانوني لتأسيس الشركة في صفحة واحدة",
  },
  "Bu sayfa; KKTC'de şirket kurmak isteyen girişimciler, yabancı yatırımcılar ve kurulum sürecini doğru sırayla görmek isteyen işletmeler için temel şartları ve temel yasaları sade bir akışta toplar.": {
    en: "This page brings together the basic requirements and core laws in a simple flow for entrepreneurs, foreign investors and businesses that want to see the setup process in the right order in the TRNC.",
    ru: "Эта страница в простом потоке собирает базовые условия и основные законы для предпринимателей, иностранных инвесторов и компаний, которые хотят увидеть процесс регистрации в ТРСК в правильной последовательности.",
    fa: "تجمع هذه الصفحة الشروط الأساسية والقوانين الجوهرية في مسار مبسط لرواد الأعمال والمستثمرين الأجانب والشركات التي تريد رؤية عملية التأسيس بالترتيب الصحيح في شمال قبرص.",
  },
  "Kuruluş": {
    en: "Formation",
    ru: "Регистрация",
    fa: "التأسيس",
  },
  "Hukuk": {
    en: "Legal",
    ru: "Юридическая часть",
    fa: "القانون",
  },
  "Yatırımcı": {
    en: "Investor",
    ru: "Инвестор",
    fa: "المستثمر",
  },
  "Hissedar, direktör, sekreter, kayıtlı adres": {
    en: "Shareholders, directors, secretary, registered address",
    ru: "Акционеры, директор, секретарь, зарегистрированный адрес",
    fa: "المساهمون والمدير والسكرتير والعنوان المسجل",
  },
  "Fasıl 113 ve bağlı düzenlemeler": {
    en: "Cap 113 and related regulations",
    ru: "Глава 113 и связанные положения",
    fa: "الفصل 113 والتنظيمات المرتبطة به",
  },
  "Yerli ve yabancı sermaye için açık çerçeve": {
    en: "A clear framework for local and foreign capital",
    ru: "Понятная рамка для местного и иностранного капитала",
    fa: "إطار واضح لرأس المال المحلي والأجنبي",
  },
  "Kuruluş Dosyanı Değerlendir": {
    en: "Review Your Formation File",
    ru: "Оценить ваш регистрационный файл",
    fa: "قيّم ملف تأسيسك",
  },
  "Şirket Kurma Bölümüne Dön": {
    en: "Return to the Company Formation Section",
    ru: "Вернуться к разделу о регистрации компании",
    fa: "العودة إلى قسم تأسيس الشركة",
  },
  "Temel şartlar yalnızca form değil, doğru yapı kararının başlangıcıdır": {
    en: "Basic requirements are not just paperwork; they are the start of choosing the right structure",
    ru: "Базовые требования — это не только формы, а начало правильного структурного решения",
    fa: "الشروط الأساسية ليست مجرد نماذج، بل هي بداية قرار الهيكل الصحيح",
  },
  "Kuruluş dosyası ne kadar erken netleşirse banka, vergi, resmi kayıt ve sonraki muhasebe düzeni o kadar sorunsuz ilerler.": {
    en: "The earlier the formation file becomes clear, the smoother the bank, tax, official registration and later accounting setup proceed.",
    ru: "Чем раньше проясняется регистрационный файл, тем спокойнее проходят банковские, налоговые, регистрационные и последующие бухгалтерские шаги.",
    fa: "كلما اتضح ملف التأسيس مبكرًا، سار البنك والضريبة والتسجيل الرسمي والنظام المحاسبي اللاحق بسلاسة أكبر.",
  },

  "KKTC vergi, şirketler, ticaret ve finans mevzuatını açılır rehber yapısında tek yerde görün": {
    en: "See TRNC tax, company, trade and finance legislation in one expandable guide",
    ru: "Смотрите налоговое, корпоративное, торговое и финансовое законодательство ТРСК в одном раскрывающемся справочнике",
    fa: "اعرض تشريعات الضرائب والشركات والتجارة والتمويل في شمال قبرص داخل دليل واحد قابل للفتح والإغلاق",
  },
  "Vergi yasaları ile şirket kuruluşu, yabancı yatırım, bankacılık ve sigorta çerçevesini tek sayfada topladık. Böylece hangi mevzuatın hangi konuya temas ettiğini daha hızlı ayırabilir, ilgili başlığı açıp özet kapsamı kolayca okuyabilirsiniz.": {
    en: "We gathered tax laws together with company formation, foreign investment, banking and insurance frameworks on one page. This lets you quickly separate which legislation touches which topic and open the relevant heading to read a concise scope.",
    ru: "Мы собрали на одной странице налоговые законы вместе с рамками регистрации компаний, иностранных инвестиций, банковского дела и страхования. Так можно быстрее понять, какое законодательство относится к какой теме, и открыть нужный раздел для краткого обзора.",
    fa: "جمعنا القوانين الضريبية مع أطر تأسيس الشركات والاستثمار الأجنبي والبنوك والتأمين في صفحة واحدة، بحيث يمكنك تمييز التشريع المرتبط بكل موضوع بسرعة وفتح العنوان المناسب لقراءة ملخصه بسهولة.",
  },
  "Ana Küme": {
    en: "Main Cluster",
    ru: "Основной блок",
    fa: "الكتلة الرئيسية",
  },
  "Kapsam": {
    en: "Scope",
    ru: "Охват",
    fa: "النطاق",
  },
  "Yapı": {
    en: "Format",
    ru: "Формат",
    fa: "البنية",
  },
  "Vergi + Kurumsal Mevzuat": {
    en: "Tax + Corporate Legislation",
    ru: "Налоги + корпоративное законодательство",
    fa: "الضرائب + التشريعات المؤسسية",
  },
  "15 temel başlık": {
    en: "15 core headings",
    ru: "15 основных разделов",
    fa: "15 عنوانًا أساسيًا",
  },
  "Açılır ve kapanır içerik": {
    en: "Expandable content",
    ru: "Раскрывающийся и сворачивающийся контент",
    fa: "محتوى قابل للفتح والإغلاق",
  },
  "Dosyanızı Değerlendirelim": {
    en: "Let Us Review Your File",
    ru: "Давайте оценим ваш файл",
    fa: "دعنا نقيم ملفك",
  },
  "Ana sayfadaki bölüme dön": {
    en: "Return to the homepage section",
    ru: "Вернуться к разделу на главной",
    fa: "العودة إلى القسم في الصفحة الرئيسية",
  },
  "Her başlık kısa özet ve kapsam maddeleriyle açılır": {
    en: "Each heading expands with a short summary and scope items",
    ru: "Каждый раздел раскрывается с кратким обзором и пунктами охвата",
    fa: "يفتح كل عنوان مع ملخص قصير ونقاط نطاق المحتوى",
  },
  "Vergi usulünden KDV'ye, şirket kuruluşundan bankacılık ve sigortacılık mevzuatına kadar temel çerçeveyi aynı sayfada okuyabilirsiniz.": {
    en: "From tax procedure to VAT, and from company formation to banking and insurance legislation, you can read the core framework on the same page.",
    ru: "От налогового администрирования до НДС и от регистрации компаний до банковского и страхового законодательства — базовую рамку можно прочитать на одной странице.",
    fa: "من الإجراءات الضريبية إلى ضريبة القيمة المضافة، ومن تأسيس الشركات إلى تشريعات البنوك والتأمين، يمكنك قراءة الإطار الأساسي كله في الصفحة نفسها.",
  },

  "Kaya Plus ekibi nasıl çalışır ve müvekkil dosyalarına hangi uzmanlıklarla destek verir?": {
    en: "How does the Kaya Plus team work and with which expert roles does it support client files?",
    ru: "Как работает команда Kaya Plus и какими специализациями поддерживает клиентские файлы?",
    fa: "كيف يعمل فريق كايا بلس وبأي خبرات يدعم ملفات العملاء؟",
  },
  "Bu sayfa, Kaya Plus ekibinin hangi uzmanlık rolleriyle çalıştığını, müvekkil dosyalarını nasıl yönettiğini ve hangi proje başlıklarında değer ürettiğini sade şekilde anlatır.": {
    en: "This page simply explains the specialist roles within the Kaya Plus team, how client files are managed and in which project areas the team creates value.",
    ru: "Эта страница в простой форме объясняет, какими ролями работает команда Kaya Plus, как она управляет клиентскими файлами и в каких проектах создаёт ценность.",
    fa: "تشرح هذه الصفحة ببساطة الأدوار التخصصية داخل فريق كايا بلس، وكيف تُدار ملفات العملاء، وفي أي مجالات مشاريع يخلق الفريق قيمة.",
  },
  "Güçlü Alanlar": {
    en: "Core Strengths",
    ru: "Сильные стороны",
    fa: "مجالات القوة",
  },
  "Müvekkil Profili": {
    en: "Client Profile",
    ru: "Профиль клиента",
    fa: "ملف العميل",
  },
  "Net süreç yönetimi": {
    en: "Clear process management",
    ru: "Чёткое управление процессами",
    fa: "إدارة واضحة للمسار",
  },
  "Muhasebe, vergi, bordro, kuruluş": {
    en: "Accounting, tax, payroll, company formation",
    ru: "Бухгалтерия, налоги, payroll, регистрация",
    fa: "المحاسبة والضرائب والرواتب وتأسيس الشركات",
  },
  "Yerli ve yabancı yatırımcı": {
    en: "Local and foreign investors",
    ru: "Местные и иностранные инвесторы",
    fa: "المستثمرون المحليون والأجانب",
  },
  "Gerçek ofis, gerçek ekip, düzenli takip": {
    en: "A real office, a real team and consistent follow-up",
    ru: "Реальный офис, реальная команда и регулярное сопровождение",
    fa: "مكتب حقيقي وفريق حقيقي ومتابعة منتظمة",
  },
  "Kaya Plus yaklaşımı; dosyayı ilk görüşmeden resmi sürece ve sonraki mali düzene kadar aynı güven çizgisinde taşımaya dayanır.": {
    en: "The Kaya Plus approach is built on carrying a file with the same line of trust from the first meeting to the official process and the later financial routine.",
    ru: "Подход Kaya Plus основан на том, чтобы вести файл по одной доверительной линии от первой встречи до официального процесса и последующего финансового порядка.",
    fa: "يقوم نهج كايا بلس على حمل الملف على خط الثقة نفسه من أول اجتماع إلى الإجراءات الرسمية ثم إلى النظام المالي اللاحق.",
  },

  "Kaya Plus ekibine doğrudan ulaşın": {
    en: "Reach the Kaya Plus team directly",
    ru: "Свяжитесь с командой Kaya Plus напрямую",
    fa: "تواصل مباشرة مع فريق كايا بلس",
  },
  "Telefon, e-posta, WhatsApp, Facebook ve ofis kanallarımız üzerinden bizimle doğrudan iletişime geçebilirsiniz. İlk görüşmede ihtiyacınızı netleştirip doğru hizmet başlığına yönlenebiliriz.": {
    en: "You can contact us directly through our phone, email, WhatsApp, Facebook and office channels. In the first conversation we can clarify your need and guide you to the right service area.",
    ru: "Вы можете связаться с нами напрямую по телефону, e-mail, WhatsApp, Facebook и через офисные каналы. В первой беседе мы уточним вашу потребность и направим вас к нужной услуге.",
    fa: "يمكنك التواصل معنا مباشرة عبر الهاتف أو البريد الإلكتروني أو واتساب أو فيسبوك أو من خلال قنوات المكتب. في أول تواصل نحدد احتياجك بوضوح ونوجهك إلى مجال الخدمة المناسب.",
  },
  "Telefon": {
    en: "Phone",
    ru: "Телефон",
    fa: "الهاتف",
  },
  "E-posta": {
    en: "Email",
    ru: "Эл. почта",
    fa: "البريد الإلكتروني",
  },
  "Konum": {
    en: "Location",
    ru: "Локация",
    fa: "الموقع",
  },
  "Küçük Kaymaklı, Lefkoşa": {
    en: "Küçük Kaymaklı, Nicosia",
    ru: "Кючюк Каймаклы, Никосия",
    fa: "كوجوك كايمكلي، نيقوسيا",
  },
  "Gerçek ofis, gerçek iletişim": {
    en: "A real office, real communication",
    ru: "Реальный офис, реальная коммуникация",
    fa: "مكتب حقيقي وتواصل حقيقي",
  },
  "İlk temasta net ve ulaşılabilir bir iletişim hattı kurmayı öncelikli görüyoruz.": {
    en: "We prioritize establishing a clear and reachable communication line from the very first contact.",
    ru: "Мы считаем приоритетом установить ясный и доступный канал связи уже с первого контакта.",
    fa: "نعتبر من أولوياتنا بناء قناة تواصل واضحة ويسهل الوصول إليها من أول تواصل.",
  },
  "Hemen Ara": {
    en: "Call Now",
    ru: "Позвонить сейчас",
    fa: "اتصل الآن",
  },
  "E-posta Gönder": {
    en: "Send Email",
    ru: "Отправить e-mail",
    fa: "أرسل بريدًا إلكترونيًا",
  },

  "Uluslararası İşletme Şirketi (UİŞ) kimin için doğru yapı olabilir?": {
    en: "For whom can an International Business Company (IBC) be the right structure?",
    ru: "Для кого Международная бизнес-компания (IBC) может быть правильной структурой?",
    fa: "لمن يمكن أن تكون شركة الأعمال الدولية (IBC) الهيكل الصحيح؟",
  },
  "KKTC dışında faaliyet hedefleyen, operasyonunu sınır ötesi iş akışıyla kurmak isteyen ve yapısını yerel pazar yerine uluslararası modele göre kurgulayan yatırımcılar için UİŞ güçlü bir seçenek olabilir.": {
    en: "For investors targeting activity outside the TRNC, building operations through a cross-border flow and structuring their business for an international model rather than the local market, an IBC can be a strong option.",
    ru: "Для инвесторов, нацеленных на деятельность за пределами ТРСК, выстраивающих операции в трансграничном формате и ориентирующих структуру на международную модель, а не на местный рынок, IBC может быть сильным вариантом.",
    fa: "يمكن أن تكون شركة الأعمال الدولية خيارًا قويًا للمستثمرين الذين يستهدفون نشاطًا خارج شمال قبرص، ويريدون بناء عملياتهم عبر تدفق عمل عابر للحدود، ويصممون هيكلهم وفق نموذج دولي بدلًا من السوق المحلي.",
  },
  "Odak": {
    en: "Focus",
    ru: "Фокус",
    fa: "التركيز",
  },
  "Uluslararası faaliyet": {
    en: "International activity",
    ru: "Международная деятельность",
    fa: "نشاط دولي",
  },
  "Yurt dışı merkezli gelir kurgusu": {
    en: "An income structure centered outside the country",
    ru: "Доходная модель, ориентированная на зарубежные рынки",
    fa: "هيكل دخل متمركز خارج البلاد",
  },
  "Karar Sorusu": {
    en: "Decision Question",
    ru: "Ключевой вопрос",
    fa: "سؤال القرار",
  },
  "Yerel mi, global mi?": {
    en: "Local or global?",
    ru: "Локально или глобально?",
    fa: "محلي أم عالمي؟",
  },
  "UİŞ İçin Görüşme Al": {
    en: "Book an IBC Consultation",
    ru: "Записаться на консультацию по IBC",
    fa: "احجز استشارة لـ IBC",
  },
  "Diğer Yapılarla Karşılaştır": {
    en: "Compare with Other Structures",
    ru: "Сравнить с другими структурами",
    fa: "قارن بهياكل أخرى",
  },
  "UİŞ kararı günlük iş modelinden başlar": {
    en: "The IBC decision starts with the daily business model",
    ru: "Решение по IBC начинается с повседневной бизнес-модели",
    fa: "قرار IBC يبدأ من نموذج العمل اليومي",
  },
  "Fatura akışı, müşteri kitlesi, banka kurgusu ve operasyon coğrafyası doğru okunmadan yalnızca vergi avantajına bakarak karar vermek sağlıklı olmaz.": {
    en: "It is not healthy to decide only on tax advantage without correctly reading invoice flow, customer base, banking setup and the geography of operations.",
    ru: "Нездорово принимать решение только по налоговому преимуществу, не разобравшись в потоке счетов, клиентской базе, банковской схеме и географии операций.",
    fa: "ليس من الصحي اتخاذ القرار بناءً على الميزة الضريبية فقط دون قراءة تدفق الفواتير وقاعدة العملاء وبنية البنوك وجغرافيا العمليات بشكل صحيح.",
  },

  "KKTC’de yabancı şirket şubesi ne zaman doğru tercih olur?": {
    en: "When is a foreign company branch in TRNC the right choice?",
    ru: "Когда филиал иностранной компании в ТРСК является правильным выбором?",
    fa: "متى يكون فرع شركة أجنبية في شمال قبرص هو الاختيار الصحيح؟",
  },
  "Mevcut bir ana şirketin kurumsal yapısını koruyarak KKTC’de varlık göstermek isteyen işletmeler için şube modeli güçlü bir seçenek olabilir. Ancak bu yapı her yatırımcı için değil, belirli senaryolar için doğrudur.": {
    en: "The branch model can be a strong option for businesses that want to operate in the TRNC while preserving the corporate structure of an existing parent company. But this structure is not right for every investor; it is right for specific scenarios.",
    ru: "Модель филиала может быть сильным вариантом для бизнеса, который хочет присутствовать в ТРСК, сохраняя корпоративную структуру существующей материнской компании. Но такая структура подходит не каждому инвестору, а только определённым сценариям.",
    fa: "يمكن أن يكون نموذج الفرع خيارًا قويًا للشركات التي تريد التواجد في شمال قبرص مع الحفاظ على الهيكل المؤسسي للشركة الأم القائمة. لكن هذا الهيكل ليس مناسبًا لكل مستثمر، بل لسيناريوهات محددة.",
  },
  "Ana Mantık": {
    en: "Core Logic",
    ru: "Основная логика",
    fa: "المنطق الأساسي",
  },
  "Mevcut şirketten uzantı": {
    en: "An extension of the existing company",
    ru: "Продолжение существующей компании",
    fa: "امتداد للشركة القائمة",
  },
  "Karar Alanı": {
    en: "Decision Area",
    ru: "Зона решения",
    fa: "مجال القرار",
  },
  "Şube mi, yeni tüzel kişi mi?": {
    en: "A branch or a new legal entity?",
    ru: "Филиал или новое юрлицо?",
    fa: "فرع أم كيان قانوني جديد؟",
  },
  "Resmi hazırlık disiplini": {
    en: "Discipline in official preparation",
    ru: "Дисциплина официальной подготовки",
    fa: "انضباط التحضير الرسمي",
  },
  "Şube Yapısını Değerlendir": {
    en: "Assess the Branch Structure",
    ru: "Оценить структуру филиала",
    fa: "قيّم هيكل الفرع",
  },
  "Diğer Modellerle Kıyasla": {
    en: "Compare with Other Models",
    ru: "Сравнить с другими моделями",
    fa: "قارن مع النماذج الأخرى",
  },
  "Şube modeli belge ağırlıklı ilerler": {
    en: "The branch model proceeds with a heavy document focus",
    ru: "Модель филиала продвигается через документоориентированный процесс",
    fa: "يتقدم نموذج الفرع بمسار ثقيل من حيث المستندات",
  },
  "Ana şirket evrakları, temsil düzeni ve resmi onay akışı baştan iyi planlanmadığında süreç uzayabilir. Bu yüzden şube modeli belge disiplinine en çok ihtiyaç duyan yapılardan biridir.": {
    en: "If parent company documents, representation order and official approval flow are not planned well from the start, the process can drag on. That is why the branch model is one of the structures that most needs document discipline.",
    ru: "Если документы материнской компании, порядок представительства и поток официальных согласований изначально не выстроены хорошо, процесс может затянуться. Поэтому модель филиала особенно нуждается в документной дисциплине.",
    fa: "إذا لم تُخطط وثائق الشركة الأم ونظام التمثيل وتدفق الموافقات الرسمية جيدًا منذ البداية فقد يطول المسار. لذلك يُعد نموذج الفرع من أكثر الهياكل احتياجًا إلى انضباط المستندات.",
  },

  "Yerel limited mi, UİŞ mi, yabancı şirket şubesi mi?": {
    en: "Local limited, IBC or foreign company branch?",
    ru: "Местное Ltd, IBC или филиал иностранной компании?",
    fa: "شركة محلية محدودة أم IBC أم فرع شركة أجنبية؟",
  },
  "Bu üç yapı birbirinin yerine geçen ezber seçenekler değildir. Doğru karar; pazar yönü, operasyon merkezi, ortaklık düzeni ve şirketin KKTC’de nasıl konumlanacağına göre verilir.": {
    en: "These three structures are not memorized options that replace one another. The right decision depends on market direction, operation center, partnership setup and how the company will be positioned in the TRNC.",
    ru: "Эти три структуры — не шаблонные варианты, заменяющие друг друга. Правильное решение принимается с учетом направления рынка, операционного центра, партнерской схемы и того, как компания будет позиционироваться в ТРСК.",
    fa: "هذه الهياكل الثلاثة ليست خيارات نمطية تحل محل بعضها. القرار الصحيح يُتخذ بحسب اتجاه السوق ومركز العمليات وترتيب الشراكة وكيفية تموضع الشركة في شمال قبرص.",
  },
  "Yerel Limited": {
    en: "Local Limited",
    ru: "Местное Ltd",
    fa: "شركة محلية محدودة",
  },
  "KKTC iç pazarına yakın": {
    en: "Close to the TRNC domestic market",
    ru: "Близко к внутреннему рынку ТРСК",
    fa: "قريب من السوق المحلي في شمال قبرص",
  },
  "UİŞ": {
    en: "IBC",
    ru: "IBC",
    fa: "IBC",
  },
  "Uluslararası odaklı": {
    en: "Internationally focused",
    ru: "Ориентировано на международный рынок",
    fa: "ذو توجه دولي",
  },
  "Yabancı Şube": {
    en: "Foreign Branch",
    ru: "Иностранный филиал",
    fa: "فرع أجنبي",
  },
  "Ana şirket uzantısı": {
    en: "An extension of the parent company",
    ru: "Продолжение материнской компании",
    fa: "امتداد للشركة الأم",
  },
  "En iyi yapı en popüler olan değil, en uyumlu olandır": {
    en: "The best structure is not the most popular one, but the most compatible one",
    ru: "Лучшая структура — не самая популярная, а самая совместимая с вашей задачей",
    fa: "أفضل هيكل ليس الأكثر شيوعًا بل الأكثر ملاءمة",
  },
  "Bir yapının başka yatırımcı için doğru olması, sizin dosyanız için de doğru olduğu anlamına gelmez. Kriterleri birlikte okumak gerekir.": {
    en: "A structure being right for another investor does not mean it is also right for your file. The criteria need to be read together.",
    ru: "То, что структура подходит другому инвестору, не означает, что она подходит и вашему делу. Критерии нужно оценивать вместе.",
    fa: "كون الهيكل مناسبًا لمستثمر آخر لا يعني أنه مناسب أيضًا لملفك. يجب قراءة المعايير معًا.",
  },
  "Medya | Kaya Plus": {
    en: "Media | Kaya Plus",
    ru: "Медиа | Kaya Plus",
    fa: "الوسائط | كايا بلس",
  },
  "Kaya Plus ofis fotoğrafları: karşılama alanı, çalışma ofisleri ve yönetici odası görünümleri.": {
    en: "Kaya Plus office photos: reception area, workspaces and executive office views.",
    ru: "Фотографии офиса Kaya Plus: зона ресепшн, рабочие пространства и кабинет руководителя.",
    fa: "صور مكتب كايا بلس: منطقة الاستقبال، ومساحات العمل، وإطلالات مكتب الإدارة.",
  },
  "Medya": {
    en: "Media",
    ru: "Медиа",
    fa: "الوسائط",
  },
  "Ofisimiz": {
    en: "Our Office",
    ru: "Наш офис",
    fa: "مكتبنا",
  },
  "Kuzey Kıbrıs'ta modern, profesyonel çalışma ortamımız": {
    en: "Our modern, professional working environment in Northern Cyprus",
    ru: "Наша современная профессиональная рабочая среда на Северном Кипре",
    fa: "بيئة عملنا الحديثة والاحترافية في شمال قبرص",
  },
  "Büyüt": {
    en: "Zoom",
    ru: "Увеличить",
    fa: "تكبير",
  },
  "Öne çıkan": {
    en: "Featured",
    ru: "Избранное",
    fa: "الأبرز",
  },
  "Galeri": {
    en: "Gallery",
    ru: "Галерея",
    fa: "المعرض",
  },
  "Dış cephe": {
    en: "Exterior",
    ru: "Внешний фасад",
    fa: "الواجهة الخارجية",
  },
  "Karşılama alanı": {
    en: "Reception area",
    ru: "Зона ресепшн",
    fa: "منطقة الاستقبال",
  },

  "Hemen Ara": {
    en: "Call Now",
    ru: "Позвонить сейчас",
    fa: "اتصل الآن",
  },
};

const guideAttrTranslations = {
  "Menu": {
    en: "Menu",
    ru: "Меню",
    fa: "القائمة",
  },
  "Language switcher": {
    en: "Language switcher",
    ru: "Переключатель языка",
    fa: "مبدل اللغة",
  },
  "Kaya Plus ofis girişi": {
    en: "Kaya Plus office entrance",
    ru: "Вход в офис Kaya Plus",
    fa: "مدخل مكتب كايا بلس",
  },
  "Kaya Plus ofis içi görünümü": {
    en: "Interior view of the Kaya Plus office",
    ru: "Внутренний вид офиса Kaya Plus",
    fa: "منظر داخلي لمكتب كايا بلس",
  },
  "Mali danışmanlık çalışma alanı": {
    en: "Financial advisory workspace",
    ru: "Рабочее пространство финансового консалтинга",
    fa: "مساحة عمل للاستشارات المالية",
  },
  "Güncel duyurular ve masaüstü takibi": {
    en: "Current updates and desktop monitoring",
    ru: "Актуальные уведомления и контроль рабочего стола",
    fa: "التحديثات الحالية ومتابعة سطح المكتب",
  },
  "Kıbrıs ve uluslararası işletme temalı görsel": {
    en: "Cyprus and international business themed visual",
    ru: "Визуал на тему Кипра и международного бизнеса",
    fa: "صورة بطابع قبرص والأعمال الدولية",
  },
  "KKTC'de şirket kuruluşu için güven veren kurumsal iş birliği görseli": {
    en: "A corporate collaboration visual that conveys trust for company formation in the TRNC",
    ru: "Визуал корпоративного сотрудничества, вызывающий доверие к регистрации компании в ТРСК",
    fa: "صورة تعاون مؤسسي توحي بالثقة لتأسيس شركة في شمال قبرص",
  },
  "Vergi ve belge planlaması yapan çalışma masası": {
    en: "A desk used for tax and document planning",
    ru: "Рабочий стол для налогового и документного планирования",
    fa: "مكتب مخصص لتخطيط الضرائب والمستندات",
  },
  "Belge ve planlama yapan profesyonel ekip": {
    en: "A professional team handling documents and planning",
    ru: "Профессиональная команда, работающая с документами и планированием",
    fa: "فريق محترف يعمل على المستندات والتخطيط",
  },
  "Evrak inceleyen ve imza sürecine hazırlanan profesyonel": {
    en: "A professional reviewing documents and preparing for the signature process",
    ru: "Специалист, проверяющий документы и готовящийся к этапу подписи",
    fa: "محترف يراجع المستندات ويستعد لمرحلة التوقيع",
  },
  "Karar masasında evrak ve notlarla çalışan profesyoneller": {
    en: "Professionals working with documents and notes at a decision table",
    ru: "Профессионалы, работающие с документами и заметками за столом решений",
    fa: "محترفون يعملون على مستندات وملاحظات على طاولة القرار",
  },
  "Kaya Plus yönetici odası": {
    en: "Kaya Plus executive office",
    ru: "Кабинет руководителя Kaya Plus",
    fa: "مكتب الإدارة في كايا بلس",
  },
  "Kaya Plus dış cephe tabelası": {
    en: "Kaya Plus exterior sign",
    ru: "Наружная вывеска Kaya Plus",
    fa: "اللافتة الخارجية لكايا بلس",
  },
  "Kaya Plus karşılama alanı": {
    en: "Kaya Plus reception area",
    ru: "Зона ресепшн Kaya Plus",
    fa: "منطقة الاستقبال في كايا بلس",
  },
  "Lobi üst görünüm": {
    en: "Upper lobby view",
    ru: "Вид на лобби сверху",
    fa: "منظر علوي للردهة",
  },
  "Lobi girişi": {
    en: "Lobby entrance",
    ru: "Вход в лобби",
    fa: "مدخل الردهة",
  },
  "Yönetici masası ve sertifikalar": {
    en: "Executive desk and certificates",
    ru: "Рабочий стол руководителя и сертификаты",
    fa: "مكتب الإدارة والشهادات",
  },
  "Yönetici odası tam görünüm": {
    en: "Full executive office view",
    ru: "Полный вид кабинета руководителя",
    fa: "عرض كامل لمكتب الإدارة",
  },
  "Yönetici odası yan açı": {
    en: "Executive office side angle",
    ru: "Боковой ракурс кабинета руководителя",
    fa: "زاوية جانبية لمكتب الإدارة",
  },
  "Arşiv odası": {
    en: "Archive room",
    ru: "Архивная комната",
    fa: "غرفة الأرشيف",
  },
  "Fotoğraf görüntüleyici": {
    en: "Photo viewer",
    ru: "Просмотр фотографий",
    fa: "عارض الصور",
  },
  "Kapat": {
    en: "Close",
    ru: "Закрыть",
    fa: "إغلاق",
  },
  "Önceki fotoğraf": {
    en: "Previous photo",
    ru: "Предыдущее фото",
    fa: "الصورة السابقة",
  },
  "Sonraki fotoğraf": {
    en: "Next photo",
    ru: "Следующее фото",
    fa: "الصورة التالية",
  },
};

const guideTextSelector = [
  ".brand-sub",
  ".topbar-links a",
  ".guide-mobile-nav a",
  ".eyebrow",
  "h1",
  ".lead",
  ".fact-label",
  ".fact-card strong",
  ".hero-media-badge strong",
  ".hero-media-badge span",
  ".hero-actions a",
  ".section-head h2",
  ".section-head p",
  ".cta-band h3",
  ".cta-band p",
  ".btn-primary",
  ".btn-secondary",
  ".page-footer-row span",
  ".media-hero-eyebrow",
  ".media-hero-overlay p",
  ".media-hero-hint",
  ".media-label",
  ".media-feat-caption",
].join(", ");

function translateGuideText(lang) {
  document.querySelectorAll(guideTextSelector).forEach((el) => {
    const base = el.dataset.i18nBase || el.textContent.trim();
    if (!base) return;
    if (!el.dataset.i18nBase) el.dataset.i18nBase = base;
    const locale = guideLiteralTranslations[base];
    el.textContent = lang === "tr" ? base : ((locale && locale[lang]) || base);
  });

  document.querySelectorAll("img[alt]").forEach((img) => {
    const base = img.dataset.i18nAltBase || img.getAttribute("alt") || "";
    if (!base) return;
    if (!img.dataset.i18nAltBase) img.dataset.i18nAltBase = base;
    const locale = guideAttrTranslations[base];
    img.setAttribute("alt", lang === "tr" ? base : ((locale && locale[lang]) || base));
  });

  document.querySelectorAll("[aria-label]").forEach((el) => {
    const base = el.dataset.i18nAriaBase || el.getAttribute("aria-label") || "";
    if (!base) return;
    if (!el.dataset.i18nAriaBase) el.dataset.i18nAriaBase = base;
    const locale = guideAttrTranslations[base];
    el.setAttribute("aria-label", lang === "tr" ? base : ((locale && locale[lang]) || base));
  });

  const baseTitle = document.documentElement.dataset.i18nTitleBase || document.title;
  if (!document.documentElement.dataset.i18nTitleBase) {
    document.documentElement.dataset.i18nTitleBase = baseTitle;
  }
  const titleLocale = guideLiteralTranslations[baseTitle];
  document.title = lang === "tr" ? baseTitle : ((titleLocale && titleLocale[lang]) || baseTitle);

  const meta = document.querySelector('meta[name="description"]');
  if (meta) {
    const baseDesc = meta.dataset.i18nBase || meta.content;
    if (!meta.dataset.i18nBase) meta.dataset.i18nBase = baseDesc;
    const descLocale = guideLiteralTranslations[baseDesc];
    meta.content = lang === "tr" ? baseDesc : ((descLocale && descLocale[lang]) || baseDesc);
  }
}

function setGuideMobileNav(open) {
  const mobileNav = document.getElementById("guide-mobile-nav");
  const toggle = document.querySelector(".guide-mobile-toggle");
  if (!mobileNav || !toggle) return;

  const isMobileOpen = open && window.innerWidth <= 760;
  mobileNav.classList.toggle("open", open);
  mobileNav.setAttribute("aria-hidden", String(!open));
  toggle.classList.toggle("active", open);
  toggle.setAttribute("aria-expanded", String(open));
  document.documentElement.classList.toggle("guide-mobile-nav-open", isMobileOpen);
  document.body.classList.toggle("guide-mobile-nav-open", isMobileOpen);
}

function initGuideMobileHeader() {
  const topbar = document.querySelector(".topbar");
  const inner = topbar?.querySelector(".topbar-inner");
  const links = topbar?.querySelector(".topbar-links");
  const switcher = topbar?.querySelector(".guide-lang-switcher");

  if (!topbar || !inner || !links || !switcher || document.getElementById("guide-mobile-nav")) {
    return;
  }

  const toggle = document.createElement("button");
  toggle.type = "button";
  toggle.className = "guide-mobile-toggle";
  toggle.setAttribute("aria-label", "Menu");
  toggle.setAttribute("aria-controls", "guide-mobile-nav");
  toggle.setAttribute("aria-expanded", "false");
  toggle.innerHTML = "<span></span><span></span><span></span>";

  const mobileNav = document.createElement("div");
  mobileNav.className = "guide-mobile-nav";
  mobileNav.id = "guide-mobile-nav";
  mobileNav.setAttribute("aria-hidden", "true");

  const mobileNavLang = document.createElement("div");
  mobileNavLang.className = "guide-mobile-nav-lang";
  mobileNavLang.appendChild(switcher.cloneNode(true));

  const mobileNavLinks = document.createElement("nav");
  mobileNavLinks.className = "guide-mobile-nav-links";
  links.querySelectorAll("a").forEach((link) => {
    mobileNavLinks.appendChild(link.cloneNode(true));
  });

  mobileNav.append(mobileNavLang, mobileNavLinks);
  topbar.insertAdjacentElement("afterend", mobileNav);
  inner.appendChild(toggle);

  toggle.addEventListener("click", () => {
    setGuideMobileNav(!mobileNav.classList.contains("open"));
  });

  mobileNav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => setGuideMobileNav(false));
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") setGuideMobileNav(false);
  });

  window.addEventListener("resize", () => {
    if (window.innerWidth > 760) setGuideMobileNav(false);
  });
}

function bindGuideLangButtons() {
  document.querySelectorAll(".guide-lang-btn").forEach((btn) => {
    if (btn.dataset.guideLangBound === "1") return;
    btn.dataset.guideLangBound = "1";
    btn.addEventListener("click", () => {
      setGuideLang(btn.dataset.lang || "tr");
      if (btn.closest(".guide-mobile-nav")) setGuideMobileNav(false);
    });
  });
}

function setGuideLang(lang) {
  const nextLang = ["tr", "en", "ru", "fa"].includes(lang) ? lang : "tr";

  try {
    localStorage.setItem(GUIDE_LANGUAGE_STORAGE_KEY, nextLang);
  } catch (error) {
    console.warn("Language preference could not be saved.", error);
  }

  document.documentElement.lang = nextLang;
  document.documentElement.dir = nextLang === "fa" ? "rtl" : "ltr";

  document.querySelectorAll(".guide-lang-btn").forEach((btn) => {
    btn.classList.toggle("active", btn.dataset.lang === nextLang);
  });

  translateGuideText(nextLang);
}

initGuideMobileHeader();
bindGuideLangButtons();

const initialGuideLang = (() => {
  try {
    return localStorage.getItem(GUIDE_LANGUAGE_STORAGE_KEY) || "tr";
  } catch (error) {
    return "tr";
  }
})();

setGuideLang(initialGuideLang);

