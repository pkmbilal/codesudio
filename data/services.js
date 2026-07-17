export const ORDER = [
  'custom-software',
  'web-mobile',
  'saas',
  'ecommerce',
  'seo',
  'uiux',
  'erp',
];

export const CLUSTER_TITLES = {
  build: { en: 'Build', ar: 'نبني' },
  grow: { en: 'Grow', ar: 'ننمّي' },
  design: { en: 'Design & Systems', ar: 'التصميم والأنظمة' },
};

export const SERVICES = {
  'custom-software': {
    code: '01',
    clusterKey: 'build',
    stack: ['Node', 'Python', 'PostgreSQL', 'Cloud'],
    previewStack: { en: ['Node', 'Python', 'PostgreSQL'], ar: ['Node', 'Python', 'PostgreSQL'] },
    en: {
      title: 'Custom Software Development',
      tagline: 'Bespoke systems engineered around your exact workflow — not a template forced to fit.',
      overviewTitle: 'Software shaped to your business, not the other way round.',
      overview: 'Off-the-shelf tools force you to change how you work. We do the opposite: we study your workflow, then engineer software that fits it exactly — removing manual steps, spreadsheets and workarounds.',
      overview2: 'From internal tools to customer-facing platforms, everything is built to be reliable, secure and easy for your team to actually use.',
      features: [
        { title: 'Discovery-led scoping', desc: 'We map your real process before writing a line of code.' },
        { title: 'Clean, maintainable code', desc: 'Built to be extended, not thrown away in a year.' },
        { title: 'Secure by design', desc: 'Role-based access, backups and data protection from day one.' },
        { title: 'Long-term support', desc: 'We stay on for maintenance, changes and new features.' },
      ],
      ctaTitle: 'Have a process that software could fix?',
    },
    ar: {
      title: 'تطوير البرمجيات المخصّصة',
      tagline: 'أنظمة مصمّمة حول سير عملك بالضبط — لا قالب جاهز نجبره على المقاس.',
      overviewTitle: 'برمجيات تتشكّل حول عملك، لا العكس.',
      overview: 'تجبرك الأدوات الجاهزة على تغيير طريقة عملك. نحن نفعل العكس: ندرس سير عملك ثم نبني برمجيات تناسبه تماماً — نلغي الخطوات اليدوية والجداول والحلول الالتفافية.',
      overview2: 'من الأدوات الداخلية إلى المنصات الموجّهة للعملاء، كل شيء مبني ليكون موثوقاً وآمناً وسهل الاستخدام لفريقك فعلاً.',
      features: [
        { title: 'تحديد نطاق قائم على الاستكشاف', desc: 'نرسم عمليتك الحقيقية قبل كتابة أي سطر برمجي.' },
        { title: 'كود نظيف قابل للصيانة', desc: 'مبني ليُطوَّر، لا ليُرمى بعد عام.' },
        { title: 'آمن بالتصميم', desc: 'صلاحيات حسب الدور ونسخ احتياطي وحماية بيانات منذ اليوم الأول.' },
        { title: 'دعم طويل الأمد', desc: 'نبقى للصيانة والتعديلات والميزات الجديدة.' },
      ],
      ctaTitle: 'لديك عملية يمكن للبرمجيات إصلاحها؟',
    },
  },
  'web-mobile': {
    code: '02',
    clusterKey: 'build',
    stack: ['React', 'React Native', 'iOS', 'Android'],
    previewStack: { en: ['React', 'React Native', 'iOS/Android'], ar: ['React', 'React Native', 'iOS/Android'] },
    en: {
      title: 'Web & Mobile Applications',
      tagline: 'Fast, reliable web and native apps built for real users and real traffic.',
      overviewTitle: 'Apps your customers enjoy using.',
      overview: 'We build responsive web apps and native mobile apps for iOS and Android that feel fast, look sharp and work offline where it matters.',
      overview2: 'Bilingual Arabic/English support, push notifications and WhatsApp integration come standard, so your app fits how Saudi users actually behave.',
      features: [
        { title: 'Web & native', desc: 'One team for your site, dashboard and mobile apps.' },
        { title: 'Built for performance', desc: 'Fast load times and smooth interactions, even on 3G.' },
        { title: 'Arabic-first UX', desc: 'True RTL layouts and Arabic typography, not an afterthought.' },
        { title: 'App store launch', desc: 'We handle the store submission and release process.' },
      ],
      ctaTitle: 'Ready to put your product in your customers’ hands?',
    },
    ar: {
      title: 'تطبيقات الويب والجوال',
      tagline: 'تطبيقات ويب وأصلية سريعة وموثوقة، مبنية لمستخدمين حقيقيين وحركة فعلية.',
      overviewTitle: 'تطبيقات يستمتع عملاؤك باستخدامها.',
      overview: 'نبني تطبيقات ويب متجاوبة وتطبيقات جوال أصلية لـ iOS وأندرويد تكون سريعة وأنيقة وتعمل دون اتصال حيث يهمّ ذلك.',
      overview2: 'دعم ثنائي اللغة عربي/إنجليزي وإشعارات فورية وتكامل مع واتساب كميزات أساسية، ليناسب تطبيقك سلوك المستخدم السعودي فعلاً.',
      features: [
        { title: 'ويب وأصلي', desc: 'فريق واحد لموقعك ولوحتك وتطبيقات جوالك.' },
        { title: 'مبني للأداء', desc: 'أوقات تحميل سريعة وتفاعلات سلسة حتى على شبكات 3G.' },
        { title: 'تجربة عربية أولاً', desc: 'تخطيطات RTL حقيقية وطباعة عربية، لا إضافة لاحقة.' },
        { title: 'إطلاق على المتاجر', desc: 'نتولّى التقديم للمتاجر وعملية النشر.' },
      ],
      ctaTitle: 'جاهز لوضع منتجك بين يدي عملائك؟',
    },
  },
  saas: {
    code: '03',
    clusterKey: 'build',
    stack: ['Multi-tenant', 'Billing', 'Dashboards', 'API'],
    previewStack: { en: ['Multi-tenant', 'Billing', 'API'], ar: ['متعدد المستأجرين', 'فوترة', 'API'] },
    en: {
      title: 'SaaS Product Development',
      tagline: 'From idea to launched product — architecture, billing, dashboards and scale.',
      overviewTitle: 'Turn your idea into a product that sells.',
      overview: 'We take SaaS ideas from concept to live, revenue-ready product — multi-tenant architecture, subscription billing, admin dashboards and the scalability to grow.',
      overview2: 'We’ve built and run our own SaaS (ScanEat, AutoSEO, ClientDesk), so we bring product thinking, not just code.',
      features: [
        { title: 'Product & tech strategy', desc: 'We help shape the MVP so you launch faster.' },
        { title: 'Subscriptions & billing', desc: 'Plans, trials and payments wired in and ready.' },
        { title: 'Scalable architecture', desc: 'Multi-tenant foundations that grow with your users.' },
        { title: 'Analytics built in', desc: 'Know how your product is used from launch day.' },
      ],
      ctaTitle: 'Got a SaaS idea worth building?',
    },
    ar: {
      title: 'تطوير منتجات SaaS',
      tagline: 'من الفكرة إلى منتج مُطلق — البنية والاشتراكات ولوحات التحكم والتوسّع.',
      overviewTitle: 'حوّل فكرتك إلى منتج يبيع.',
      overview: 'نأخذ أفكار SaaS من التصوّر إلى منتج حيّ جاهز لتحقيق الإيرادات — بنية متعددة المستأجرين وفوترة اشتراكات ولوحات إدارة وقابلية توسّع للنمو.',
      overview2: 'بنينا وندير منتجات SaaS خاصة بنا (ScanEat وAutoSEO وClientDesk)، لذا نأتي بتفكير المنتج لا مجرد الكود.',
      features: [
        { title: 'استراتيجية المنتج والتقنية', desc: 'نساعد في تشكيل النسخة الأولى لتطلق أسرع.' },
        { title: 'الاشتراكات والفوترة', desc: 'خطط وتجارب ومدفوعات جاهزة ومربوطة.' },
        { title: 'بنية قابلة للتوسّع', desc: 'أسس متعددة المستأجرين تنمو مع مستخدميك.' },
        { title: 'تحليلات مدمجة', desc: 'اعرف كيف يُستخدم منتجك منذ يوم الإطلاق.' },
      ],
      ctaTitle: 'لديك فكرة SaaS تستحق البناء؟',
    },
  },
  ecommerce: {
    code: '04',
    clusterKey: 'grow',
    zatca: true,
    stack: ['Storefront', 'Checkout', 'ZATCA', 'Payments'],
    previewStack: { en: ['Storefront', 'ZATCA', 'Payments'], ar: ['متجر', 'زاتكا', 'مدفوعات'] },
    en: {
      title: 'E-commerce Solutions',
      tagline: 'Storefronts and checkout flows tuned for conversion and ZATCA-ready invoicing.',
      overviewTitle: 'Stores built to sell — and stay compliant.',
      overview: 'We build online stores with fast, frictionless checkout, local payment methods (Mada, Apple Pay, tabby) and ZATCA-compliant e-invoicing built in.',
      overview2: 'Whether you’re launching a new store or fixing a slow, leaky one, we optimise every step from product page to paid order.',
      features: [
        { title: 'Conversion-focused checkout', desc: 'Fewer steps, more completed orders.' },
        { title: 'Local payments', desc: 'Mada, Apple Pay and buy-now-pay-later options.' },
        { title: 'ZATCA e-invoicing', desc: 'Compliant Fatoora invoicing out of the box.' },
        { title: 'Inventory & orders', desc: 'Manage stock, orders and customers in one place.' },
      ],
      ctaTitle: 'Ready to sell online the right way?',
    },
    ar: {
      title: 'حلول التجارة الإلكترونية',
      tagline: 'متاجر ومسارات دفع مهيّأة للتحويل وفواتير متوافقة مع «زاتكا».',
      overviewTitle: 'متاجر مبنية للبيع — ومتوافقة نظامياً.',
      overview: 'نبني متاجر إلكترونية بدفع سريع وسلس ووسائل دفع محلية (مدى، Apple Pay، تابي) وفوترة إلكترونية متوافقة مع «زاتكا» مدمجة.',
      overview2: 'سواء كنت تطلق متجراً جديداً أو تُصلح متجراً بطيئاً يفقد الطلبات، نحسّن كل خطوة من صفحة المنتج إلى الطلب المدفوع.',
      features: [
        { title: 'دفع يركّز على التحويل', desc: 'خطوات أقل، طلبات مكتملة أكثر.' },
        { title: 'مدفوعات محلية', desc: 'مدى وApple Pay وخيارات الدفع الآجل.' },
        { title: 'فوترة زاتكا الإلكترونية', desc: 'فوترة «فاتورة» متوافقة جاهزة.' },
        { title: 'المخزون والطلبات', desc: 'أدر المخزون والطلبات والعملاء في مكان واحد.' },
      ],
      ctaTitle: 'جاهز للبيع أونلاين بالطريقة الصحيحة؟',
    },
  },
  seo: {
    code: '05',
    clusterKey: 'grow',
    stack: ['Technical SEO', 'Content', 'Local', 'Analytics'],
    previewStack: { en: ['Technical', 'Local', 'Content'], ar: ['تقني', 'محلي', 'محتوى'] },
    en: {
      title: 'Search Engine Optimisation (SEO)',
      tagline: 'Technical SEO and content structure that gets you found by Saudi customers.',
      overviewTitle: 'Get found by the customers already searching.',
      overview: 'We fix the technical foundations — speed, structure, indexing — and build content and local signals that rank you for the searches your customers actually make.',
      overview2: 'Bilingual Arabic/English SEO and Google Business optimisation help you win locally in the Eastern Province and beyond.',
      features: [
        { title: 'Technical audit & fixes', desc: 'Speed, crawlability and structured data sorted.' },
        { title: 'Arabic & English keywords', desc: 'Rank for how Saudi customers really search.' },
        { title: 'Local SEO', desc: 'Google Business and map visibility that drives calls.' },
        { title: 'Reporting you understand', desc: 'Clear monthly progress, no vanity metrics.' },
      ],
      ctaTitle: 'Want to rank where your customers look?',
    },
    ar: {
      title: 'تحسين محركات البحث (SEO)',
      tagline: 'تحسين تقني وهيكلة محتوى تجعل عملاءك السعوديين يجدونك.',
      overviewTitle: 'اجعل العملاء الباحثين أصلاً يجدونك.',
      overview: 'نصلح الأسس التقنية — السرعة والهيكلة والفهرسة — ونبني محتوى وإشارات محلية ترفع ترتيبك في عمليات البحث التي يجريها عملاؤك فعلاً.',
      overview2: 'تحسين ثنائي اللغة عربي/إنجليزي وتحسين نشاطك التجاري على Google يساعدانك على الفوز محلياً في المنطقة الشرقية وما بعدها.',
      features: [
        { title: 'فحص تقني وإصلاحات', desc: 'السرعة والزحف والبيانات المنظّمة مرتّبة.' },
        { title: 'كلمات عربية وإنجليزية', desc: 'تصدّر حسب طريقة بحث العملاء السعوديين فعلاً.' },
        { title: 'SEO محلي', desc: 'ظهور على Google والخرائط يجلب المكالمات.' },
        { title: 'تقارير تفهمها', desc: 'تقدّم شهري واضح دون مقاييس شكلية.' },
      ],
      ctaTitle: 'تريد التصدّر حيث يبحث عملاؤك؟',
    },
  },
  uiux: {
    code: '06',
    clusterKey: 'design',
    stack: ['UX', 'UI', 'Bilingual', 'Prototyping'],
    previewStack: { en: ['UX', 'UI', 'Bilingual'], ar: ['UX', 'UI', 'ثنائي اللغة'] },
    en: {
      title: 'UI/UX Design',
      tagline: 'Clean, accessible interfaces designed bilingually for Arabic and English users.',
      overviewTitle: 'Interfaces that feel effortless.',
      overview: 'Good design isn’t decoration — it’s how quickly a user gets what they came for. We design clear, accessible flows that work beautifully in both Arabic (RTL) and English.',
      overview2: 'From research and wireframes to polished UI and interactive prototypes, we design what we build, so nothing gets lost in handoff.',
      features: [
        { title: 'Research & flows', desc: 'We design around real user tasks, not guesses.' },
        { title: 'Bilingual by design', desc: 'RTL and LTR layouts that both feel native.' },
        { title: 'Accessible interfaces', desc: 'Readable, usable and inclusive by default.' },
        { title: 'Design-to-build', desc: 'The team that designs it also ships it.' },
      ],
      ctaTitle: 'Want a product that’s a joy to use?',
    },
    ar: {
      title: 'تصميم واجهات وتجربة المستخدم',
      tagline: 'واجهات نظيفة وسهلة الوصول، مصمّمة بلغتين للعربية والإنجليزية.',
      overviewTitle: 'واجهات تبدو سهلة بلا عناء.',
      overview: 'التصميم الجيد ليس زخرفة — بل مدى سرعة حصول المستخدم على مبتغاه. نصمّم مسارات واضحة وسهلة الوصول تعمل بجمال بالعربية (RTL) والإنجليزية.',
      overview2: 'من البحث والمخططات الأولية إلى واجهات مصقولة ونماذج تفاعلية، نصمّم ما نبنيه، فلا يضيع شيء عند التسليم.',
      features: [
        { title: 'البحث والمسارات', desc: 'نصمّم حول مهام المستخدم الحقيقية لا التخمينات.' },
        { title: 'ثنائي اللغة بالتصميم', desc: 'تخطيطات RTL وLTR كلاهما يبدو أصيلاً.' },
        { title: 'واجهات سهلة الوصول', desc: 'مقروءة وقابلة للاستخدام وشاملة افتراضياً.' },
        { title: 'من التصميم للبناء', desc: 'الفريق الذي يصمّمه هو من يطلقه.' },
      ],
      ctaTitle: 'تريد منتجاً ممتعاً في الاستخدام؟',
    },
  },
  erp: {
    code: '07',
    clusterKey: 'design',
    zatca: true,
    stack: ['HR', 'Inventory', 'Finance', 'Automation'],
    previewStack: { en: ['HR', 'Inventory', 'Automation'], ar: ['موارد بشرية', 'مخزون', 'أتمتة'] },
    en: {
      title: 'ERP & Business Automation',
      tagline: 'Connect HR, inventory, operations and finance into one system that runs itself.',
      overviewTitle: 'One system instead of ten spreadsheets.',
      overview: 'We build and integrate ERP systems that connect your HR, inventory, operations and finance — so data flows automatically and your team stops re-entering it.',
      overview2: 'Like the internal portal we built for Aldahiyah Group, we automate the repetitive work so people can focus on the work that matters.',
      features: [
        { title: 'Connected modules', desc: 'HR, stock, ops and finance sharing one source of truth.' },
        { title: 'Workflow automation', desc: 'Approvals, alerts and reports that run themselves.' },
        { title: 'Custom to your business', desc: 'Built around your structure, not a rigid template.' },
        { title: 'Secure document control', desc: 'Private records with role-based access.' },
      ],
      ctaTitle: 'Ready to run your business from one place?',
    },
    ar: {
      title: 'أنظمة ERP وأتمتة الأعمال',
      tagline: 'اربط الموارد البشرية والمخزون والعمليات والمالية في نظام واحد يدير نفسه.',
      overviewTitle: 'نظام واحد بدل عشرة جداول.',
      overview: 'نبني وندمج أنظمة ERP تربط الموارد البشرية والمخزون والعمليات والمالية — لتتدفّق البيانات تلقائياً ويتوقف فريقك عن إعادة إدخالها.',
      overview2: 'مثل البوابة الداخلية التي بنيناها لمجموعة الضاحية، نؤتمت العمل المتكرّر ليركّز الناس على ما يهم.',
      features: [
        { title: 'وحدات مترابطة', desc: 'الموارد والمخزون والعمليات والمالية تشترك في مصدر واحد.' },
        { title: 'أتمتة سير العمل', desc: 'موافقات وتنبيهات وتقارير تعمل تلقائياً.' },
        { title: 'مخصّص لعملك', desc: 'مبني حول هيكلك لا قالب جامد.' },
        { title: 'تحكّم آمن بالوثائق', desc: 'سجلات خاصة بصلاحيات حسب الدور.' },
      ],
      ctaTitle: 'جاهز لإدارة عملك من مكان واحد؟',
    },
  },
};

export function getClusters(lang) {
  const keys = ['build', 'grow', 'design'];
  return keys.map((key) => ({
    key,
    title: CLUSTER_TITLES[key][lang],
    items: ORDER.filter((slug) => SERVICES[slug].clusterKey === key).map((slug) => ({
      slug,
      code: SERVICES[slug].code,
      title: SERVICES[slug][lang].title,
      desc: SERVICES[slug][lang].tagline,
      previewStack: SERVICES[slug].previewStack[lang],
      href: `/services/${slug}`,
    })),
  }));
}

export function getOtherServices(currentSlug, lang) {
  return ORDER.filter((slug) => slug !== currentSlug)
    .slice(0, 3)
    .map((slug) => ({
      slug,
      code: SERVICES[slug].code,
      title: SERVICES[slug][lang].title,
      tagline: SERVICES[slug][lang].tagline,
      href: `/services/${slug}`,
    }));
}
