export type Language = 'ar' | 'en' | 'fr';

export interface Translations {
  nav: {
    home: string;
    about: string;
    skills: string;
    experience: string;
    projects: string;
    services: string;
    achievements: string;
    knowledge: string;
    contact: string;
  };
  hero: {
    badge: string;
    title: string;
    titleHighlight: string;
    titleEnd: string;
    subtitle: string;
    cta1: string;
    cta2: string;
    stats: {
      years: string;
      projects: string;
      trainees: string;
      certs: string;
    };
  };
  about: {
    sectionLabel: string;
    title: string;
    getToKnow: string;
    p1: string;
    nameHighlight: string;
    expHighlight: string;
    p2: string;
    roleHighlight: string;
    bookTitle: string;
    tags: {
      animalProduction: string;
      agronomy: string;
      digitalAgri: string;
      training: string;
      agribusiness: string;
      pedagogical: string;
    };
    previewCv: string;
    downloadCv: string;
    stats: {
      years: string;
      projects: string;
      programs: string;
      trainees: string;
    };
  };
  skills: {
    sectionLabel: string;
    title: string;
    research: {
      title: string;
      dataAnalysis: string;
      experimentalDesign: string;
      scientificWriting: string;
    };
    technical: {
      title: string;
      powerBi: string;
      rExcel: string;
      edrawMax: string;
    };
    agricultural: {
      title: string;
      livestock: string;
      breeding: string;
      nutrition: string;
      precision: string;
    };
    training: {
      title: string;
      fbs: string;
      programDesign: string;
      communication: string;
    };
  };
  experience: {
    sectionLabel: string;
    title: string;
    items: Array<{
      period: string;
      title: string;
      org: string;
      desc: string;
    }>;
  };
  projects: {
    sectionLabel: string;
    title: string;
    filters: {
      all: string;
      research: string;
      apps: string;
      training: string;
      business: string;
    };
    items: Array<{
      name: string;
      desc: string;
      cat: string;
      icon: string;
    }>;
    viewDetails: string;
  };
  services: {
    sectionLabel: string;
    title: string;
    items: Array<{
      title: string;
      desc: string;
      request: string;
    }>;
  };
  achievements: {
    sectionLabel: string;
    title: string;
    items: Array<{
      title: string;
      desc: string;
    }>;
  };
  knowledge: {
    sectionLabel: string;
    title: string;
    tabs: {
      thoughts: string;
      publications: string;
      speaking: string;
    };
    thoughts: Array<{
      text: string;
      date: string;
      platform: string;
    }>;
    publications: Array<{
      title: string;
      journal: string;
      year: number;
    }>;
    speaking: Array<{
      conference: string;
      location: string;
      year: number;
      paper: string;
    }>;
  };
  testimonials: {
    sectionLabel: string;
    title: string;
    items: Array<{
      text: string;
      author: string;
      role: string;
    }>;
  };
  contact: {
    sectionLabel: string;
    title: string;
    subtitle: string;
    email: string;
    phone: string;
    location: string;
    formTitle: string;
    namePlaceholder: string;
    emailPlaceholder: string;
    subjectLabel: string;
    subjects: {
      training: string;
      research: string;
      dataAnalysis: string;
      digital: string;
      other: string;
    };
    messagePlaceholder: string;
    sendButton: string;
    successMessage: string;
  };
  footer: {
    copyright: string;
    online: string;
    offline: string;
  };
}

export const translations: Record<Language, Translations> = {
  ar: {
    nav: {
      home: 'الرئيسية',
      about: 'عنّي',
      skills: 'المهارات',
      experience: 'المسيرة',
      projects: 'المشاريع',
      services: 'الخدمات',
      achievements: 'الإنجازات',
      knowledge: 'أفكار',
      contact: 'تواصل',
    },
    hero: {
      badge: 'باحث دكتوراه | مدرب | مبتكر',
      title: 'تحويل',
      titleHighlight: 'المعرفة الزراعية',
      titleEnd: 'إلى أثر حقيقي',
      subtitle: 'باحث دكتوراه ومدرب ومبتكر في الزراعة الرقمية، أعمل على بناء جسور بين العلم والتطبيق لتطوير أنظمة زراعية أكثر ذكاءً وكفاءة.',
      cta1: 'استكشف أعمالي',
      cta2: 'تواصل معي',
      stats: {
        years: 'سنوات خبرة',
        projects: 'مشروع بحثي',
        trainees: 'متدرب',
        certs: 'شهادة دولية',
      },
    },
    about: {
      sectionLabel: 'تعرّف عليّ',
      title: 'من أنا',
      getToKnow: 'تعرّف عليّ',
      p1: 'أنا عبد القادر عطيه، محترف في الهندسة الزراعية مع أكثر من 12 عامًا من الخبرة في الهندسة الزراعية والتدريب المهني والإشراف على المشاريع. أحضر حاليًا درجة الدكتوراه في الإنتاج الحيواني، بناءً على ماجستير في الإنتاج النباتي وشهادة مهندس في تربية الحيوانات في المناطق الجافة.',
      nameHighlight: 'عبد القادر عطيه',
      expHighlight: 'أكثر من 12 عامًا من الخبرة',
      p2: 'يمتد عملي ليشمل الهندسة الزراعية والتصميم البيداغوجي والابتكار الرقمي. أعمل كأستاذ متخصص (هندسة بيداغوجية) في المعهد الوطني للتكوين المهني حسان عبد الكريم بالوادي، حيث أصمم برامج التكوين المهني وأشرف على العمليات الزراعية وأدرب الطلاب على تقنيات الزراعة الحديثة. أنا أيضًا مؤلف كتاب "على الحفة" (ISBN 9947-26-849-1).',
      roleHighlight: 'أستاذ متخصص (هندسة بيداغوجية)',
      bookTitle: '"على الحفة"',
      tags: {
        animalProduction: '🔬 الإنتاج الحيواني',
        agronomy: '🌾 الهندسة الزراعية',
        digitalAgri: '📊 الزراعة الرقمية',
        training: '🎓 التكوين المهني',
        agribusiness: '💼 ريادة الأعمال الزراعية',
        pedagogical: '📖 الهندسة البيداغوجية',
      },
      previewCv: 'معاينة السيرة',
      downloadCv: 'تحميل السيرة',
      stats: {
        years: 'سنوات من الخبرة',
        projects: 'مشروع بحثي',
        programs: 'دورة تدريبية',
        trainees: 'متدرب ومستفيد',
      },
    },
    skills: {
      sectionLabel: 'قدراتي',
      title: 'المهارات',
      research: {
        title: '🔬 مهارات بحثية',
        dataAnalysis: 'تحليل البيانات',
        experimentalDesign: 'التصميم التجريبي',
        scientificWriting: 'الكتابة العلمية',
      },
      technical: {
        title: '💻 المهارات التقنية',
        powerBi: 'Power BI / IBM SPSS',
        rExcel: 'R / Excel / تصور البيانات',
        edrawMax: 'EdrawMax / Xmind',
      },
      agricultural: {
        title: '🌱 مهارات زراعية',
        livestock: 'إنتاج الثروة الحيوانية',
        breeding: 'التربية والانتخاب',
        nutrition: 'التغذية الحيوانية',
        precision: 'Garden Planner / الزراعة الدقيقة',
      },
      training: {
        title: '🎤 مهارات تدريبية',
        fbs: 'مدرب FBS',
        programDesign: 'تصميم البرامج',
        communication: 'مهارات التواصل',
      },
    },
    experience: {
      sectionLabel: 'رحلتي',
      title: 'المسيرة المهنية',
      items: [
        {
          period: '2022 - حتى الآن',
          title: 'أستاذ متخصص (هندسة بيداغوجية)',
          org: 'المعهد الوطني للتكوين المهني حسان عبد الكريم، الوادي',
          desc: 'تصميم مناهج التكوين المهني، الإشراف على العمليات الزراعية، وتدريب الطلاب على التقنيات الزراعية والهندسة البيداغوجية الحديثة',
        },
        {
          period: '2016 - حتى الآن',
          title: 'مشرف استغلال زراعي',
          org: '',
          desc: 'الإشراف على العمليات الزراعية وإدارة أنظمة الإنتاج النباتي والحيواني',
        },
        {
          period: '2021 - حتى الآن',
          title: 'مدرب مهني',
          org: 'المعهد الوطني للتكوين المهني حسان عبد الكريم، الوادي',
          desc: 'تقديم تدريب عملي في التقنيات الزراعية، مدارس المزارعين الحقلية (FBS)، وتطوير المهارات المهنية للطلاب والمزارعين',
        },
        {
          period: '2022',
          title: 'مدرب رئيسي مساعد FBS',
          org: 'ABF (GIZ) — مرفق الأعمال الزراعية لأفريقيا',
          desc: 'مدرب رئيسي مساعد معتمد في مدارس المزارعين الحقلية. درّب أكثر من 500 مزارع وقدم برامج تدريب المدربين في الجزائر.',
        },
        {
          period: '2011 - 2016',
          title: 'مهندس زراعي',
          org: 'شهادة مهندس في تربية الحيوانات في المناطق الجافة',
          desc: 'خبرة عملية في أنظمة الإنتاج الحيواني وبرامج التربية وإدارة المزارع في البيئات الجافة',
        },
        {
          period: '2024 - 2026',
          title: 'أكثر من 50 شهادة تدريب دولية',
          org: '',
          desc: 'شهادات متقدمة من Wageningen, FAO, ASM, GIZ, Oxford Climate Society وغيرها. تطوير مهني مستمر في الزراعة ومنهجية البحث والهندسة البيداغوجية والزراعة الذكية مناخيًا',
        },
        {
          period: '2006 / مستمر',
          title: 'مؤلف كتاب وقائد مجتمعي',
          org: '',
          desc: 'كتاب "على الحفة" (ISBN 9947-26-849-1, 2006). نائب رئيس جمعية النحالين، سفير IAPA للتعلم الإلكتروني، عضو في ASM, EAS، ومنسق الجزائر في عدة منظمات دولية',
        },
      ],
    },
    projects: {
      sectionLabel: 'أعمالي',
      title: 'المشاريع',
      filters: {
        all: 'الكل',
        research: 'بحث علمي',
        apps: 'تطبيقات',
        training: 'تدريب',
        business: 'ريادة أعمال',
      },
      items: [
        { name: 'تطبيق تحليل السائل المنوي', desc: 'تطبيق ذكي لتقييم وتحليل جودة السائل المنوي باستخدام تقنيات التصوير والذكاء الاصطناعي', cat: 'app', icon: '🔬' },
        { name: 'AgriSkills Academy', desc: 'منصة تعليمية متكاملة للتدريب الزراعي وبناء القدرات المهنية مع شهادات معترف بها', cat: 'business', icon: '🎓' },
        { name: 'برنامج FBS التدريبي', desc: 'سلسلة برامج تدريبية شاملة في مدارس المزارعين الحقلية تغطي الإنتاج الحيواني والزراعة المستدامة', cat: 'training', icon: '🌾' },
        { name: 'أبحاث التكاثر الحيواني', desc: 'مشاريع بحثية متقدمة في تحسين الأداء التناسلي وجودة السائل المنوي مع نشر دولي', cat: 'research', icon: '🧬' },
        { name: 'مشروع تربية BSF', desc: 'مبادرة مبتكرة لتربية ذبابة الجندي الأسود كمصدر بروتين بديل وحل للنفايات', cat: 'business', icon: '🦟' },
        { name: 'منصة kamel3lom', desc: 'منصة رقمية لنشر المعرفة الزراعية وتبسيط العلوم للمجتمع مع محتوى تفاعلي', cat: 'app', icon: '📱' },
        { name: 'نظام إدارة المزارع الذكي', desc: 'تطبيق شامل لإدارة المزارع بتتبع الثروة والإنتاجية والتنبؤات الذكية', cat: 'app', icon: '🌐' },
        { name: 'دراسات في تحسين السلالات', desc: 'أبحاث متخصصة في التربية الانتخابية وتحسين المؤشرات الوراثية للماشية', cat: 'research', icon: '📊' },
        { name: 'ورش عمل الزراعة الحديثة', desc: 'سلسلة ورش عمل عملية حول التقنيات الحديثة والممارسات الزراعية الفضلى', cat: 'training', icon: '🛠️' },
      ],
      viewDetails: 'عرض التفاصيل',
    },
    services: {
      sectionLabel: 'ماذا أقدّم',
      title: 'خدماتي',
      items: [
        { title: '🎓 التدريب الزراعي', desc: 'برامج تدريبية متخصصة في الإنتاج الحيواني والزراعة الحديثة', request: 'اطلب الخدمة' },
        { title: '🔬 الاستشارات البحثية', desc: 'دعم الباحثين في تصميم التجارب وتحليل البيانات والنشر العلمي', request: 'اطلب الخدمة' },
        { title: '📊 تحليل البيانات', desc: 'تحليل إحصائي متقدم وتصور بيانات باستخدام أحدث الأدوات', request: 'اطلب الخدمة' },
        { title: '💡 الحلول الرقمية', desc: 'تطوير تطبيقات ومنصات رقمية مخصصة للقطاع الزراعي', request: 'اطلب الخدمة' },
      ],
    },
    achievements: {
      sectionLabel: 'إنجازاتي',
      title: 'الإنجازات والشهادات',
      items: [
        { title: '🏆 مؤتمرات دولية', desc: 'مشاركات فعّالة في أكثر من 8 مؤتمرات علمية دولية مع أوراق بحثية مُقدمة (2023-2026)' },
        { title: '📄 أبحاث منشورة', desc: 'أكثر من 25 بحثًا علميًا محكّمًا منشورًا في مجلات دولية متخصصة وعالية التصنيف' },
        { title: '🎖️ شهادات مهنية', desc: '+50 شهادة تدريب دولية متقدمة من مؤسسات مرموقة (Wageningen, FAO, ASM, GIZ وغيرها)' },
        { title: '🌍 عضويات دولية', desc: 'عضو نشط في الجمعية الأمريكية لعلم الأحياء الدقيقة، جمعية تربية الأسماك الأوروبية، والرابطة الدولية لممارسري الأعمال الزراعية' },
        { title: '📱 ابتكارات رقمية', desc: 'تطوير نموذجين أوليين لمصائد حشرات ونظم هيدروبونيك/أكوابونيك متكاملة' },
        { title: '🤝 قيادة مجتمعية', desc: 'نائب رئيس جمعية النحالين، سفير IAPA للتعلم الإلكتروني، عضو في ASM, EAS، ومنسق الجزائر في عدة منظمات دولية' },
      ],
    },
    knowledge: {
      sectionLabel: 'مَنْصَة المعرفة',
      title: 'أفكار وأبحاث',
      tabs: {
        thoughts: '💭 أفكاري',
        publications: '📄 منشورات',
        speaking: '🎤 مؤتمرات',
      },
      thoughts: [
        { text: 'متشوق لمشاركة خبر قبول ورقي البحثية الجديدة حول تقييم جودة السائل المنوي في مجلة علمية محكمة. ممتن لدعم مشرفي وزملائي.', date: 'مايو 2026', platform: 'facebook' },
        { text: 'اختتمت لتوي برنامج تدريبي مكثف لمدارس المزارعين الحقلية في المعهد الوطني للتكوين المهني بالوادي. تفاعل المتدربين وفضولهم يؤكد لماذا أحب هذا العمل.', date: 'أبريل 2026', platform: 'linkedin' },
        { text: 'حضرت مؤتمر ESNA وقدمت أحدث أبحاثي حول الأداء التناسلي للكباش تحت الظروف الجافة. نقاشات مثمرة مع باحثين من جميع أنحاء المتوسط.', date: 'مارس 2026', platform: 'facebook' },
        { text: 'إنجاز جديد: أكثر من 50 شهادة دولية! من Wageningen إلى FAO إلى Oxford Climate Society - التعلم المستمر هو مفتاح البقاء في طليعة الابتكار الزراعي.', date: 'فبراير 2026', platform: 'linkedin' },
        { text: 'فخور بمشاركة التقدم في نظامنا النموذجي للزراعة المائية والأكوابونيك. دمج المعرفة التقليدية مع الهندسة الحديثة لإنتاج غذاء مستدام في المناطق الجافة.', date: 'يناير 2026', platform: 'facebook' },
        { text: 'يشرفني العمل كنائب رئيس جمعية النحالين والمساهمة في تطوير تربية النحل في الجزائر. النحل شغف وركيزة أساسية في نظامنا الزراعي.', date: 'ديسمبر 2025', platform: 'linkedin' },
      ],
      publications: [
        { title: 'تقييم معايير جودة السائل المنوي في الكباش تحت الظروف البيئية الجافة', journal: 'Journal of Animal Science', year: 2025 },
        { title: 'تأثير المكملات الغذائية على الأداء التناسلي للسلالات البقرية المحلية في جنوب الجزائر', journal: 'Livestock Science', year: 2024 },
        { title: 'تطبيق التحليل الرقمي للصور للتقييم الآلي لشكل الحيوانات المنوية', journal: 'Theriogenology', year: 2024 },
        { title: 'دراسة مقارنة لأنظمة التربية التقليدية والحديثة في المناطق الجافة في الجزائر', journal: 'Animal Production Science', year: 2023 },
        { title: 'يرقات ذبابة الجندي الأسود كمصدر بروتين بديل في تغذية الدواجن: مراجعة', journal: 'Journal of Insects as Food and Feed', year: 2025 },
        { title: 'تأثير الإجهاد الحراري على المعايير التناسلية في الكباش: تحليل تلوي', journal: 'Small Ruminant Research', year: 2024 },
        { title: 'أدوات الزراعة الدقيقة لإدارة الثروة الحيوانية في البيئات الجافة', journal: 'Computers and Electronics in Agriculture', year: 2025 },
        { title: 'أنظمة الزراعة المائية والأكوابونيك للإنتاج الغذائي المستدام في مناطق الصحراء', journal: 'Agricultural Systems', year: 2023 },
      ],
      speaking: [
        { conference: 'ESNA — الجمعية الأوروبية للطرق الحديثة في البحث الزراعي', location: 'تونس، تونس', year: 2024, paper: 'تقييم جودة السائل المنوي في الكباش: دراسة مقارنة بين الطرق التقليدية والرقمية' },
        { conference: 'ICABRD — المؤتمر الدولي لتربية الحيوان والتطور التناسلي', location: 'الجزائر العاصمة، الجزائر', year: 2024, paper: 'تحسين الأداء التناسلي للسلالات البقرية المحلية من خلال الإدارة الغذائية' },
        { conference: 'ICARP — المؤتمر الدولي للإنتاج في المناطق الجافة', location: 'مراكش، المغرب', year: 2025, paper: 'الأدوات الرقمية للزراعة الدقيقة للثروة الحيوانية في البيئات الجافة' },
        { conference: 'SOS — مؤتمر استدامة النظم الزراعية الصحراوية', location: 'ورقلة، الجزائر', year: 2023, paper: 'نظم الإنتاج الحيواني المستدامة في الصحراء الجزائرية' },
        { conference: 'ChAAB — تحديات تربية الحيوان في المناطق الجافة وشبه الجافة', location: 'بسكرة، الجزائر', year: 2024, paper: 'استراتيجيات التربية لتحسين الكفاءة التناسلية تحت ظروف الإجهاد الحراري' },
        { conference: 'ISAEA — الندوة الدولية للزراعة في البيئات الجافة', location: 'الوادي، الجزائر', year: 2026, paper: 'تطبيقات الذكاء الاصطناعي وإنترنت الأشياء في الزراعة في المناطق الجافة: الفرص والتحديات' },
      ],
    },
    testimonials: {
      sectionLabel: 'ماذا يقولون',
      title: 'آراء المتدربين والشركاء',
      items: [
        { text: 'تدريب ممتاز ومحتوى علمي رصين. استفدت كثيرًا من الجانب التطبيقي في برنامج FBS، والمدرب يشرح بطريقة مبسطة وواضحة.', author: 'م. أحمد', role: 'مهندس زراعي' },
        { text: 'ساعدني الدكتور عبد القادر في تحليل بيانات رسالتي بطريقة احترافية ومبسّطة. مشرف ممتاز يتقن مجاله بشكل عميق.', author: 'سارة ك.', role: 'طالبة ماجستير' },
        { text: 'شريك موثوق في مجال الابتكار الزراعي. يجمع بين الرؤية العلمية والتنفيذ العملي، وملتزم بجودة النتائج.', author: 'د. محمد', role: 'شريك أعمال' },
        { text: 'برامج التدريب متخصصة وعملية جدًا. ساعدتني في تطوير مهارات التسيير الحديثة وتطبيق التقنيات الجديدة.', author: 'فاطمة ع.', role: 'مزارعة' },
        { text: 'منصة kamel3lom غيرت طريقة فهمي للمفاهيم الزراعية المعقدة. محتوى غني وسهل الفهم وقيم جدًا.', author: 'إبراهيم ق.', role: 'طالب جامعي' },
        { text: 'دعم احترافي في البحث العلمي والنشر الدولي. ساعدني على نشر بحثي في مجلة محترمة دوليًا.', author: 'د. ليلى', role: 'باحثة' },
      ],
    },
    contact: {
      sectionLabel: 'لنتواصل',
      title: 'تواصل معي',
      subtitle: 'أرحب بجميع فرص التعاون في البحث العلمي، التدريب، الاستشارات، وتطوير الحلول الرقمية الزراعية.',
      email: 'البريد الإلكتروني',
      phone: 'الهاتف',
      location: 'الموقع',
      formTitle: 'أرسل بريدًا إلكترونيًا',
      namePlaceholder: 'الاسم الكامل',
      emailPlaceholder: 'البريد الإلكتروني',
      subjectLabel: 'الموضوع',
      subjects: {
        training: 'تدريب زراعي',
        research: 'استشارة بحثية',
        dataAnalysis: 'تحليل بيانات',
        digital: 'حلول رقمية',
        other: 'أخرى',
      },
      messagePlaceholder: 'الرسالة',
      sendButton: 'إرسال الرسالة',
      successMessage: 'تم إرسال رسالتك بنجاح! سأتواصل معك قريبًا.',
    },
    footer: {
      copyright: '© 2026 عبد القادر عطيه. جميع الحقوق محفوظة.',
      online: 'متصل',
      offline: 'أنت غير متصل — بعض الميزات قد لا تعمل',
    },
  },
  en: {
    nav: {
      home: 'Home',
      about: 'About',
      skills: 'Skills',
      experience: 'Experience',
      projects: 'Projects',
      services: 'Services',
      achievements: 'Achievements',
      knowledge: 'Insights',
      contact: 'Contact',
    },
    hero: {
      badge: 'PhD Researcher | Trainer | Innovator',
      title: 'Transforming',
      titleHighlight: 'Agricultural Knowledge',
      titleEnd: 'into Real Impact',
      subtitle: 'PhD researcher, trainer, and innovator in digital agriculture, building bridges between science and practice for smarter, more efficient farming systems.',
      cta1: 'Explore My Work',
      cta2: 'Get in Touch',
      stats: {
        years: 'Years Experience',
        projects: 'Research Projects',
        trainees: 'Trainees',
        certs: 'Certifications',
      },
    },
    about: {
      sectionLabel: 'GET TO KNOW ME',
      title: 'About Me',
      getToKnow: 'GET TO KNOW ME',
      p1: "I'm Abdelkader Atia, an agronomy professional with 12+ years of experience in agricultural engineering, professional training, and project supervision. I am currently pursuing a PhD in Agronomy (Animal Production), building on a Master's in Plant Production and an Engineer's degree in Arid Region Animal Breeding.",
      nameHighlight: 'Abdelkader Atia',
      expHighlight: '12+ years of experience',
      p2: 'My work spans agricultural engineering, pedagogical design, and digital innovation. I serve as a Specialized Teacher (Pedagogical Engineering) at Hassani Abdelkrim INSFP in EL-Oued, where I design vocational training programs, supervise agriculture operations, and mentor students in modern farming techniques. I am also the author of the book "On the Edge" (ISBN 9947-26-849-1).',
      roleHighlight: 'Specialized Teacher',
      bookTitle: '"On the Edge"',
      tags: {
        animalProduction: '🔬 Animal Production',
        agronomy: '🌾 Agronomy',
        digitalAgri: '📊 Digital Agriculture',
        training: '🎓 Vocational Training',
        agribusiness: '💼 Agribusiness',
        pedagogical: '📖 Pedagogical Engineering',
      },
      previewCv: 'Preview CV',
      downloadCv: 'Download CV',
      stats: {
        years: 'Years of Experience',
        projects: 'Research Projects',
        programs: 'Training Programs',
        trainees: 'Trainees & Beneficiaries',
      },
    },
    skills: {
      sectionLabel: 'MY ABILITIES',
      title: 'Skills',
      research: {
        title: '🔬 Research Skills',
        dataAnalysis: 'Data Analysis',
        experimentalDesign: 'Experimental Design',
        scientificWriting: 'Scientific Writing',
      },
      technical: {
        title: '💻 Technical Skills',
        powerBi: 'Power BI / IBM SPSS',
        rExcel: 'R / Excel / Data Viz',
        edrawMax: 'EdrawMax / Xmind',
      },
      agricultural: {
        title: '🌱 Agricultural Skills',
        livestock: 'Livestock Production',
        breeding: 'Breeding & Selection',
        nutrition: 'Animal Nutrition',
        precision: 'Garden Planner / Precision Ag',
      },
      training: {
        title: '🎤 Training Skills',
        fbs: 'FBS Trainer',
        programDesign: 'Program Design',
        communication: 'Communication',
      },
    },
    experience: {
      sectionLabel: 'MY JOURNEY',
      title: 'Professional Experience',
      items: [
        {
          period: '2022 - Present',
          title: 'Specialized Teacher (Pedagogical Engineering)',
          org: 'Hassani Abdelkrim INSFP, EL-Oued',
          desc: 'Designing vocational training curricula, supervising agriculture operations, and mentoring students in modern farming and pedagogical techniques',
        },
        {
          period: '2016 - Present',
          title: 'Agriculture Exploitation Supervisor',
          org: '',
          desc: 'Overseeing agricultural operations, managing crop and livestock production systems, and implementing best practices in sustainable farming',
        },
        {
          period: '2021 - Present',
          title: 'Vocational Trainer',
          org: 'Hassani Abdelkrim INSFP, EL-Oued',
          desc: 'Delivering hands-on training in agricultural techniques, field farmer schools (FBS), and professional skill development for students and farmers',
        },
        {
          period: '2022',
          title: 'FBS Assistant Master Trainer',
          org: 'ABF (GIZ) — Agri-Business Facility for Africa',
          desc: 'Certified Assistant Master Trainer in Farmer Business School (FBS). Trained 500+ farmers and delivered Training of Trainers programs across Algeria.',
        },
        {
          period: '2011 - 2016',
          title: 'Agriculture Engineer',
          org: "Engineer's degree in Arid Region Animal Breeding",
          desc: 'Practical experience in animal production systems, breeding programs, and farm management in arid environments',
        },
        {
          period: '2024 - 2026',
          title: '50+ International Training Certifications',
          org: '',
          desc: 'Advanced certifications from Wageningen, FAO, ASM, GIZ, Oxford Climate Society, and other prestigious institutions. Continuous professional development in agriculture, research methodology, pedagogical engineering, and climate-smart farming',
        },
        {
          period: '2006 / Ongoing',
          title: 'Published Author & Community Leader',
          org: '',
          desc: 'Published book "On the Edge" (ISBN 9947-26-849-1, 2006). Vice President of Beekeeper Association, IAPA eLearning Ambassador, member of ASM, EAS, and Focal Point for Algeria in multiple international organizations',
        },
      ],
    },
    projects: {
      sectionLabel: 'MY WORK',
      title: 'Projects',
      filters: {
        all: 'All',
        research: 'Research',
        apps: 'Apps',
        training: 'Training',
        business: 'Business',
      },
      items: [
        { name: 'Semen Analysis App', desc: 'Smart application for evaluating and analyzing semen quality using imaging and AI techniques', cat: 'app', icon: '🔬' },
        { name: 'AgriSkills Academy', desc: 'Integrated educational platform for agricultural training and professional capacity building with recognized certifications', cat: 'business', icon: '🎓' },
        { name: 'FBS Training Program', desc: 'Comprehensive training program series in Farmer Field Schools covering livestock production and sustainable agriculture', cat: 'training', icon: '🌾' },
        { name: 'Animal Reproduction Research', desc: 'Advanced research projects in improving reproductive performance and semen quality with international publishing', cat: 'research', icon: '🧬' },
        { name: 'BSF Breeding Project', desc: 'Innovative initiative for breeding Black Soldier Fly as alternative protein source and waste management solution', cat: 'business', icon: '🦟' },
        { name: 'kamel3lom Platform', desc: 'Digital platform for disseminating agricultural knowledge and simplifying sciences for the community with interactive content', cat: 'app', icon: '📱' },
        { name: 'Smart Farm Management System', desc: 'Comprehensive application for farm management with asset tracking, productivity, and smart predictions', cat: 'app', icon: '🌐' },
        { name: 'Breeding & Genetics Studies', desc: 'Specialized research in selective breeding and genetic improvement indicators for cattle', cat: 'research', icon: '📊' },
        { name: 'Modern Agriculture Workshops', desc: 'Series of practical workshops on modern techniques and best practices in agricultural production', cat: 'training', icon: '🛠️' },
      ],
      viewDetails: 'View Details',
    },
    services: {
      sectionLabel: 'WHAT I OFFER',
      title: 'Services',
      items: [
        { title: '🎓 Agricultural Training', desc: 'Specialized training programs in livestock production and modern agriculture', request: 'Request Service' },
        { title: '🔬 Research Consulting', desc: 'Support for researchers in experimental design, data analysis, and scientific publishing', request: 'Request Service' },
        { title: '📊 Data Analysis', desc: 'Advanced statistical analysis and data visualization using latest tools', request: 'Request Service' },
        { title: '💡 Digital Solutions', desc: 'Custom application and digital platform development for agriculture', request: 'Request Service' },
      ],
    },
    achievements: {
      sectionLabel: 'MY ACHIEVEMENTS',
      title: 'Achievements & Certificates',
      items: [
        { title: '🏆 International Conferences', desc: 'Active participation in 8+ international scientific conferences including ESNA, ICABRD, ICARP, SOS, ChAAB, and ISAEA with research papers presented (2023-2026)' },
        { title: '📄 Published Research', desc: '25+ peer-reviewed scientific papers published in specialized high-impact international journals' },
        { title: '🎖️ Professional Certifications', desc: '50+ advanced international training certifications from prestigious institutions (Wageningen, FAO, ASM, GIZ, Oxford Climate Society, etc.)' },
        { title: '🌍 International Memberships', desc: 'Active member of American Society for Microbiology, European Aquaculture Society, and International Association of Agribusiness Practitioners' },
        { title: '📱 Digital Innovations', desc: 'Developed 2 insect trap prototypes and an integrated hydroponic/aquaponic system prototype for sustainable agriculture' },
        { title: '🤝 Community Leadership', desc: 'Vice President of Beekeeper Association, IAPA eLearning Ambassador, member of ASM, EAS, and Focal Point for Algeria in multiple international organizations' },
      ],
    },
    knowledge: {
      sectionLabel: 'KNOWLEDGE HUB',
      title: 'Thoughts & Research',
      tabs: {
        thoughts: '💭 Thoughts',
        publications: '📄 Publications',
        speaking: '🎤 Speaking',
      },
      thoughts: [
        { text: 'Excited to share that my latest paper on semen quality assessment has been accepted in a peer-reviewed journal. Grateful to my supervisors and collaborators for their support.', date: 'May 2026', platform: 'facebook' },
        { text: 'Just wrapped up an intensive FBS training program at INSFP EL-Oued. The engagement and curiosity from the trainees reaffirm why I love this work — practical agriculture education changes lives.', date: 'Apr 2026', platform: 'linkedin' },
        { text: 'Attended the ESNA conference and presented my latest research on reproductive performance in rams under arid conditions. Productive discussions with fellow researchers from across the Mediterranean.', date: 'Mar 2026', platform: 'facebook' },
        { text: 'New milestone: 50+ international certifications completed! From Wageningen to FAO to Oxford Climate Society — continuous learning is the key to staying at the forefront of agricultural innovation.', date: 'Feb 2026', platform: 'linkedin' },
        { text: 'Proud to share progress on our hydroponic/aquaponic prototype system. Combining traditional knowledge with modern engineering for sustainable food production in arid regions.', date: 'Jan 2026', platform: 'facebook' },
        { text: 'Honored to serve as Vice President of the Beekeeper Association and contribute to the development of apiculture in Algeria. Beekeeping is both a passion and a critical pillar of our agricultural ecosystem.', date: 'Dec 2025', platform: 'linkedin' },
      ],
      publications: [
        { title: 'Assessment of semen quality parameters in rams under arid environmental conditions', journal: 'Journal of Animal Science', year: 2025 },
        { title: 'Impact of nutritional supplementation on reproductive performance of local cattle breeds in southern Algeria', journal: 'Livestock Science', year: 2024 },
        { title: 'Application of digital image analysis for automated sperm morphology evaluation', journal: 'Theriogenology', year: 2024 },
        { title: 'Comparative study of traditional and modern breeding systems in arid regions of Algeria', journal: 'Animal Production Science', year: 2023 },
        { title: 'Black Soldier Fly larvae as alternative protein source in poultry nutrition: a review', journal: 'Journal of Insects as Food and Feed', year: 2025 },
        { title: 'Effect of heat stress on reproductive parameters in rams: a meta-analysis', journal: 'Small Ruminant Research', year: 2024 },
        { title: 'Precision agriculture tools for livestock management in arid environments', journal: 'Computers and Electronics in Agriculture', year: 2025 },
        { title: 'Hydroponic and aquaponic systems for sustainable food production in Sahara regions', journal: 'Agricultural Systems', year: 2023 },
      ],
      speaking: [
        { conference: 'ESNA — European Society for New Methods in Agricultural Research', location: 'Tunis, Tunisia', year: 2024, paper: 'Semen quality assessment in rams: a comparative study of conventional and digital methods' },
        { conference: 'ICABRD — International Conference on Animal Breeding and Reproductive Development', location: 'Algiers, Algeria', year: 2024, paper: 'Reproductive performance enhancement in local cattle breeds through nutritional management' },
        { conference: 'ICARP — International Conference on Arid Region Production', location: 'Marrakech, Morocco', year: 2025, paper: 'Digital tools for precision livestock farming in arid environments' },
        { conference: 'SOS Conference — Sustainability of Saharan Agricultural Systems', location: 'Ouargla, Algeria', year: 2023, paper: 'Sustainable livestock production systems in the Algerian Sahara' },
        { conference: 'ChAAB — Challenges in Arid and Semi-Arid Animal Breeding', location: 'Biskra, Algeria', year: 2024, paper: 'Breeding strategies for improved reproductive efficiency under heat stress conditions' },
        { conference: 'ISAEA — International Symposium on Agriculture in Arid Environments', location: 'El Oued, Algeria', year: 2026, paper: 'AI and IoT applications in arid region agriculture: opportunities and challenges' },
      ],
    },
    testimonials: {
      sectionLabel: 'WHAT THEY SAY',
      title: 'Client Testimonials',
      items: [
        { text: 'Excellent training with solid scientific content. I learned a lot from the practical aspects of the FBS program. The trainer explains concepts clearly and simply.', author: 'Eng. Ahmed', role: 'Agricultural Engineer' },
        { text: "Dr. Abdelkader helped me analyze my thesis data professionally and clearly. He is an excellent supervisor who deeply masters his field.", author: 'Sarah K.', role: "Master's Student" },
        { text: 'A reliable partner in agricultural innovation. He combines scientific vision with practical implementation perfectly committed to quality results.', author: 'Dr. Mohamed', role: 'Business Partner' },
        { text: 'Training programs are specialized and very practical. They helped me develop modern farm management skills and apply new technologies.', author: 'Fatima A.', role: 'Farmer' },
        { text: 'The kamel3lom platform changed how I understand complex agricultural concepts. Rich content, easy to understand, and very valuable.', author: 'Ibrahim Q.', role: 'University Student' },
        { text: 'Professional support in scientific research and international publishing. He helped me publish my research in a reputable international journal.', author: 'Dr. Leila', role: 'Researcher' },
      ],
    },
    contact: {
      sectionLabel: 'GET IN TOUCH',
      title: 'Contact Me',
      subtitle: 'I welcome all opportunities for collaboration in scientific research, training, consulting, and developing agricultural digital solutions.',
      email: 'Email Address',
      phone: 'Phone',
      location: 'Location',
      formTitle: 'Send Email Directly',
      namePlaceholder: 'Full Name',
      emailPlaceholder: 'Email Address',
      subjectLabel: 'Subject',
      subjects: {
        training: 'Agricultural Training',
        research: 'Research Consulting',
        dataAnalysis: 'Data Analysis',
        digital: 'Digital Solutions',
        other: 'Other',
      },
      messagePlaceholder: 'Message',
      sendButton: 'Send Message',
      successMessage: "Message sent successfully! I'll be in touch soon.",
    },
    footer: {
      copyright: '© 2026 Abdelkader Atia. All rights reserved.',
      online: 'Online',
      offline: 'You are offline — some features may not work',
    },
  },
  fr: {
    nav: {
      home: 'Accueil',
      about: 'À propos',
      skills: 'Compétences',
      experience: 'Parcours',
      projects: 'Projets',
      services: 'Services',
      achievements: 'Réalisations',
      knowledge: 'Savoir',
      contact: 'Contact',
    },
    hero: {
      badge: 'Doctorant | Formateur | Innovateur',
      title: 'Transformer la',
      titleHighlight: 'Connaissance Agricole',
      titleEnd: 'en Impact Réel',
      subtitle: 'Doctorant et formateur spécialisé en agriculture numérique, construisant des ponts entre la science et l\'application pratique pour développer des systèmes agricoles plus intelligents et plus efficaces.',
      cta1: 'Explorer mes travaux',
      cta2: 'Me contacter',
      stats: {
        years: "Ans d'expérience",
        projects: 'Projets de recherche',
        trainees: 'Formés',
        certs: 'Certifications',
      },
    },
    about: {
      sectionLabel: 'À PROPOS',
      title: 'À Propos de Moi',
      getToKnow: 'À PROPOS',
      p1: "Je suis Abdelkader Atia, un professionnel en agronomie avec plus de 12 ans d'expérience en génie agricole, formation professionnelle et supervision de projets. Je prépare actuellement un doctorat en Agronomie (Production Animale), avec un Master en Production Végétale et un diplôme d'Ingénieur en Élevage en Régions Arides.",
      nameHighlight: 'Abdelkader Atia',
      expHighlight: "plus de 12 ans d'expérience",
      p2: "Mon travail couvre le génie agricole, la conception pédagogique et l'innovation numérique. Je suis Enseignant Spécialisé (Ingénierie Pédagogique) à l'INSFP Hassani Abdelkrim à EL-Oued, où je conçois des programmes de formation professionnelle, supervise les opérations agricoles et forme les étudiants aux techniques agricoles modernes. Je suis également l'auteur du livre \"Sur le fil\" (ISBN 9947-26-849-1).",
      roleHighlight: 'Enseignant Spécialisé',
      bookTitle: '"Sur le fil"',
      tags: {
        animalProduction: '🔬 Production Animale',
        agronomy: '🌾 Agronomie',
        digitalAgri: '📊 Agriculture Numérique',
        training: '🎓 Formation Professionnelle',
        agribusiness: '💼 Agroalimentaire',
        pedagogical: '📖 Ingénierie Pédagogique',
      },
      previewCv: 'Aperçu du CV',
      downloadCv: 'Télécharger le CV',
      stats: {
        years: "Années d'Expérience",
        projects: 'Projets de Recherche',
        programs: 'Programmes de Formation',
        trainees: 'Stagiaires & Bénéficiaires',
      },
    },
    skills: {
      sectionLabel: 'MES COMPÉTENCES',
      title: 'Compétences',
      research: {
        title: '🔬 Compétences en Recherche',
        dataAnalysis: 'Analyse de Données',
        experimentalDesign: 'Conception Expérimentale',
        scientificWriting: 'Rédaction Scientifique',
      },
      technical: {
        title: '💻 Compétences Techniques',
        powerBi: 'Power BI / IBM SPSS',
        rExcel: 'R / Excel / Data Viz',
        edrawMax: 'EdrawMax / Xmind',
      },
      agricultural: {
        title: '🌱 Compétences Agricoles',
        livestock: 'Production Animale',
        breeding: 'Élevage & Sélection',
        nutrition: 'Nutrition Animale',
        precision: 'Garden Planner / Agriculture de Précision',
      },
      training: {
        title: '🎤 Compétences en Formation',
        fbs: 'Formateur FBS',
        programDesign: 'Conception de Programmes',
        communication: 'Communication',
      },
    },
    experience: {
      sectionLabel: 'MON PARCOURS',
      title: 'Expérience Professionnelle',
      items: [
        {
          period: '2022 - Présent',
          title: 'Enseignant Spécialisé (Ingénierie Pédagogique)',
          org: 'INSFP Hassani Abdelkrim, EL-Oued',
          desc: "Conception de programmes de formation professionnelle, supervision des opérations agricoles et formation des étudiants aux techniques pédagogiques modernes",
        },
        {
          period: '2016 - Présent',
          title: 'Superviseur d\'Exploitation Agricole',
          org: '',
          desc: "Supervision des opérations agricoles et gestion des systèmes de production végétale et animale",
        },
        {
          period: '2021 - Présent',
          title: 'Formateur Professionnel',
          org: 'INSFP Hassani Abdelkrim, EL-Oued',
          desc: "Formation pratique en techniques agricoles, écoles pratiques agricoles (FBS) et développement des compétences professionnelles pour les étudiants et les agriculteurs",
        },
        {
          period: '2022',
          title: 'Formateur Maître Assistant FBS',
          org: 'ABF (GIZ) — Facilité Agri-Business pour l\'Afrique',
          desc: "Formateur Maître Assistant certifié en Farmer Business School (FBS). A formé plus de 500 agriculteurs et animé des programmes de Formation des Formateurs en Algérie.",
        },
        {
          period: '2011 - 2016',
          title: 'Ingénieur Agricole',
          org: "Diplôme d'Ingénieur en Élevage en Régions Arides",
          desc: "Expérience pratique en systèmes de production animale, programmes d'élevage et gestion d'exploitations agricoles en environnements arides",
        },
        {
          period: '2024 - 2026',
          title: '50+ Certifications Internationales',
          org: '',
          desc: "Certifications avancées de Wageningen, FAO, ASM, GIZ, Oxford Climate Society et d'autres institutions prestigieuses. Développement professionnel continu en agriculture, méthodologie de recherche, ingénierie pédagogique et agriculture climato-intelligente",
        },
        {
          period: '2006 / En cours',
          title: 'Auteur Publié & Leader Communautaire',
          org: '',
          desc: "Livre \"Sur le fil\" (ISBN 9947-26-849-1, 2006). Vice-Président de l'Association des Apiculteurs, Ambassadeur eLearning IAPA, membre de ASM, EAS, et Point Focal pour l'Algérie dans plusieurs organisations internationales",
        },
      ],
    },
    projects: {
      sectionLabel: 'MES PROJETS',
      title: 'Projets',
      filters: {
        all: 'Tous',
        research: 'Recherche',
        apps: 'Applications',
        training: 'Formation',
        business: 'Entreprise',
      },
      items: [
        { name: 'Application Analyse Semence', desc: "Application intelligente pour évaluer et analyser la qualité du sperme à l'aide de l'imagerie et de l'IA", cat: 'app', icon: '🔬' },
        { name: 'AgriSkills Academy', desc: "Plateforme éducative intégrée pour la formation agricole et le renforcement des capacités avec certifications reconnues", cat: 'business', icon: '🎓' },
        { name: 'Programme FBS', desc: "Série complète de programmes de formation dans les écoles pratiques agricoles couvrant la production animale et l'agriculture durable", cat: 'training', icon: '🌾' },
        { name: 'Recherche Reproduction Animale', desc: "Projets de recherche avancés pour améliorer les performances reproductives et la qualité du sperme avec publications internationales", cat: 'research', icon: '🧬' },
        { name: 'Projet Élevage BSF', desc: "Initiative innovante d'élevage de mouche soldat noire comme source de protéines alternative et solution de gestion des déchets", cat: 'business', icon: '🦟' },
        { name: 'Plateforme kamel3lom', desc: "Plateforme numérique pour diffuser les connaissances agricoles et simplifier les sciences avec du contenu interactif", cat: 'app', icon: '📱' },
        { name: 'Système Gestion Ferme Intelligente', desc: "Application complète de gestion agricole avec suivi des actifs, productivité et prévisions intelligentes", cat: 'app', icon: '🌐' },
        { name: 'Études Amélioration Génétique', desc: "Recherche spécialisée en sélection génétique et amélioration des indicateurs pour les bovins", cat: 'research', icon: '📊' },
        { name: 'Ateliers Agriculture Moderne', desc: "Série d'ateliers pratiques sur les techniques modernes et les bonnes pratiques en production agricole", cat: 'training', icon: '🛠️' },
      ],
      viewDetails: 'Voir les détails',
    },
    services: {
      sectionLabel: 'MES SERVICES',
      title: 'Services',
      items: [
        { title: '🎓 Formation Agricole', desc: 'Programmes de formation spécialisés en production animale et agriculture moderne', request: 'Demander ce Service' },
        { title: '🔬 Conseil en Recherche', desc: 'Soutien aux chercheurs en conception expérimentale, analyse de données et publication scientifique', request: 'Demander ce Service' },
        { title: '📊 Analyse de Données', desc: "Analyse statistique avancée et visualisation de données avec les outils les plus récents", request: 'Demander ce Service' },
        { title: '💡 Solutions Numériques', desc: "Développement d'applications sur mesure et de plateformes numériques pour l'agriculture", request: 'Demander ce Service' },
      ],
    },
    achievements: {
      sectionLabel: 'MES RÉALISATIONS',
      title: 'Réalisations & Certificats',
      items: [
        { title: '🏆 Conférences Internationales', desc: "Participation active à plus de 8 conférences scientifiques internationales avec présentation d'articles de recherche (2023-2026)" },
        { title: '📄 Recherche Publiée', desc: "Plus de 25 articles scientifiques évalués par des pairs publiés dans des revues internationales spécialisées à fort impact" },
        { title: '🎖️ Certifications Professionnelles', desc: 'Plus de 50 certifications avancées de formation internationale provenant d\'institutions prestigieuses (Wageningen, FAO, ASM, GIZ, Oxford Climate Society, etc.)' },
        { title: '🌍 Adhésions Internationales', desc: "Membre actif de l'American Society for Microbiology, European Aquaculture Society, Oxford Climate Society et de l'International Association of Agribusiness Practitioners" },
        { title: '📱 Innovations Numériques', desc: "Développement de 2 prototypes de pièges à insectes et de systèmes intégrés hydroponiques/aquaponiques" },
        { title: '🤝 Leadership Communautaire', desc: "Vice-Président de l'Association des Apiculteurs, Ambassadeur eLearning IAPA, et Point Focal pour l'Algérie dans plusieurs organisations internationales" },
      ],
    },
    knowledge: {
      sectionLabel: 'PLATEFORME SAVOIR',
      title: 'Idées & Recherche',
      tabs: {
        thoughts: '💭 Réflexions',
        publications: '📄 Publications',
        speaking: '🎤 Conférences',
      },
      thoughts: [
        { text: "Ravi de partager que mon dernier article sur l'évaluation de la qualité du sperme a été accepté dans une revue à comité de lecture. Reconnaissant envers mes superviseurs et collaborateurs pour leur soutien.", date: 'Mai 2026', platform: 'facebook' },
        { text: "Je viens de terminer un programme de formation intensive FBS à l'INSFP EL-Oued. L'engagement et la curiosité des stagiaires me rappellent pourquoi j'aime ce travail — l'éducation agricole pratique transforme des vies.", date: 'Avr 2026', platform: 'linkedin' },
        { text: "Participé à la conférence ESNA et présenté mes dernières recherches sur les performances reproductives des béliers en conditions arides. Échanges enrichissants avec des chercheurs de toute la Méditerranée.", date: 'Mar 2026', platform: 'facebook' },
        { text: "Nouveau cap franchi : plus de 50 certifications internationales ! De Wageningen à la FAO en passant par l'Oxford Climate Society — l'apprentissage continu est la clé pour rester à la pointe de l'innovation agricole.", date: 'Fév 2026', platform: 'linkedin' },
        { text: "Fier de partager l'avancement de notre prototype de système hydroponique/aquaponique. Alliance du savoir traditionnel et de l'ingénierie moderne pour une production alimentaire durable en régions arides.", date: 'Jan 2026', platform: 'facebook' },
        { text: "Honoré de servir en tant que Vice-Président de l'Association des Apiculteurs et de contribuer au développement de l'apiculture en Algérie. L'apiculture est à la fois une passion et un pilier essentiel de notre écosystème agricole.", date: 'Déc 2025', platform: 'linkedin' },
      ],
      publications: [
        { title: 'Évaluation des paramètres de qualité du sperme chez les béliers en conditions environnementales arides', journal: 'Journal of Animal Science', year: 2025 },
        { title: "Impact de la supplémentation nutritionnelle sur les performances reproductives des races bovines locales du sud algérien", journal: 'Livestock Science', year: 2024 },
        { title: "Application de l'analyse d'images numériques pour l'évaluation automatisée de la morphologie du sperme", journal: 'Theriogenology', year: 2024 },
        { title: "Étude comparative des systèmes d'élevage traditionnels et modernes dans les régions arides d'Algérie", journal: 'Animal Production Science', year: 2023 },
        { title: "Larves de la mouche soldat noire comme source alternative de protéines dans l'alimentation des volailles : une revue", journal: 'Journal of Insects as Food and Feed', year: 2025 },
        { title: 'Effet du stress thermique sur les paramètres reproductifs chez les béliers : une méta-analyse', journal: 'Small Ruminant Research', year: 2024 },
        { title: "Outils d'agriculture de précision pour la gestion du bétail en environnements arides", journal: 'Computers and Electronics in Agriculture', year: 2025 },
        { title: 'Systèmes hydroponiques et aquaponiques pour une production alimentaire durable dans les régions sahariennes', journal: 'Agricultural Systems', year: 2023 },
      ],
      speaking: [
        { conference: 'ESNA — Société Européenne pour les Nouvelles Méthodes en Recherche Agricole', location: 'Tunis, Tunisie', year: 2024, paper: "Évaluation de la qualité du sperme chez les béliers : étude comparative des méthodes conventionnelles et numériques" },
        { conference: "ICABRD — Conférence Internationale sur l'Élevage et le Développement de la Reproduction", location: 'Alger, Algérie', year: 2024, paper: 'Amélioration des performances reproductives des races bovines locales par la gestion nutritionnelle' },
        { conference: 'ICARP — Conférence Internationale sur la Production en Régions Arides', location: 'Marrakech, Maroc', year: 2025, paper: "Outils numériques pour l'élevage de précision en environnements arides" },
        { conference: 'SOS — Conférence sur la Durabilité des Systèmes Agricoles Sahariens', location: 'Ouargla, Algérie', year: 2023, paper: 'Systèmes de production animale durables dans le Sahara algérien' },
        { conference: "ChAAB — Défis de l'Élevage Animal en Zones Arides et Semi-Arides", location: 'Biskra, Algérie', year: 2024, paper: "Stratégies d'élevage pour améliorer l'efficacité reproductive sous conditions de stress thermique" },
        { conference: "ISAEA — Symposium International sur l'Agriculture en Milieux Arides", location: 'El Oued, Algérie', year: 2026, paper: "Applications de l'IA et de l'IoT dans l'agriculture en régions arides : opportunités et défis" },
      ],
    },
    testimonials: {
      sectionLabel: 'TÉMOIGNAGES',
      title: 'Témoignages Clients',
      items: [
        { text: "Formation excellente avec un contenu scientifique solide. J'ai beaucoup appris des aspects pratiques du programme FBS. Le formateur explique clairement et simplement.", author: 'Ing. Ahmed', role: 'Ingénieur Agronome' },
        { text: "Dr. Abdelkader m'a aidée à analyser les données de ma thèse de façon professionnelle et claire. Un excellent encadrant qui maîtrise profondément son domaine.", author: 'Sarah K.', role: 'Étudiante Master' },
        { text: 'Un partenaire fiable en innovation agricole. Il allie vision scientifique et mise en œuvre pratique, toujours engagé pour des résultats de qualité.', author: 'Dr. Mohamed', role: "Partenaire d'Affaires" },
        { text: 'Les programmes de formation sont spécialisés et très pratiques. Ils m\'ont aidé à développer des compétences modernes en gestion agricole.', author: 'Fatima A.', role: 'Agricultrice' },
        { text: 'La plateforme kamel3lom a changé ma façon de comprendre les concepts agricoles complexes. Contenu riche, facile à comprendre et très précieux.', author: 'Ibrahim Q.', role: 'Étudiant Universitaire' },
        { text: "Soutien professionnel en recherche scientifique et publication internationale. Il m'a aidé à publier mes recherches dans une revue internationale réputée.", author: 'Dr. Leila', role: 'Chercheuse' },
      ],
    },
    contact: {
      sectionLabel: 'CONTACT',
      title: 'Me Contacter',
      subtitle: "Je suis ouvert à toutes les opportunités de collaboration en recherche scientifique, formation, conseil et développement de solutions numériques agricoles.",
      email: 'Adresse Email',
      phone: 'Téléphone',
      location: 'Localisation',
      formTitle: 'Envoyer un Email',
      namePlaceholder: 'Nom Complet',
      emailPlaceholder: 'Adresse Email',
      subjectLabel: 'Sujet',
      subjects: {
        training: 'Formation Agricole',
        research: 'Conseil en Recherche',
        dataAnalysis: 'Analyse de Données',
        digital: 'Solutions Numériques',
        other: 'Autre',
      },
      messagePlaceholder: 'Message',
      sendButton: 'Envoyer le Message',
      successMessage: 'Message envoyé avec succès ! Je vous contacterai bientôt.',
    },
    footer: {
      copyright: '© 2026 Abdelkader Atia. Tous droits réservés.',
      online: 'En ligne',
      offline: 'Vous êtes hors ligne — certaines fonctionnalités peuvent ne pas fonctionner',
    },
  },
};
