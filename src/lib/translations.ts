export type Language = 'ar' | 'en' | 'fr';

export interface Translations {
  nav: {
    home: string;
    about: string;
    skills: string;
    experience: string;
    projects: string;
    publications: string;
    talks: string;
    teaching: string;
    services: string;
    achievements: string;
    gallery: string;
    knowledge: string;
    booking: string;
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
      publications: 'منشورات',
      talks: 'محاضرات',
      teaching: 'تدريس',
      services: 'الخدمات',
      achievements: 'الإنجازات',
      gallery: 'معرض',
      knowledge: 'أفكار',
      booking: 'حجز',
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
        projects: 'شهادة دولية',
        trainees: 'متدرب ومستفيد',
        certs: 'مؤتمر دولي',
      },
    },
    about: {
      sectionLabel: 'تعرّف عليّ',
      title: 'من أنا',
      getToKnow: 'تعرّف عليّ',
      p1: 'أنا عبد القادر عطيه، محترف في الهندسة الزراعية مع أكثر من 15 عامًا من الخبرة في الهندسة الزراعية والتدريب المهني والإشراف على المشاريع. أحضر حاليًا درجة الدكتوراه في علوم الإنتاج الحيواني بجامعة حمة لخضر بالوادي، بناءً على ماجستير في الإنتاج النباتي وشهادة مهندس في تربية الحيوانات في المناطق الجافة من جامعة قاصدي مربح بورقلة.',
      nameHighlight: 'عبد القادر عطيه',
      expHighlight: 'أكثر من 15 عامًا من الخبرة',
      p2: 'يمتد عملي ليشمل التدريس الجامعي والهندسة البيداغوجية والإشراف على الاستغلال الزراعي والبحث العلمي. أعمل كأستاذ متعاقد بجامعة الوادي والمدرسة العليا للزراعة الصحراوية، وكأستاذ متخصص في المعهد الوطني للتكوين المهني حسان عبد الكريم بالوادي، حيث أصمم مناهج التكوين وأشرف على العمليات الزراعية. أنا أيضًا مؤلف كتاب "على الحفة" (ISBN 978-9969-07-216-7) ونائب رئيس جمعية النحالين بالوادي.',
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
        projects: 'شهادة دولية',
        programs: 'دورة تدريبية',
        trainees: 'متدرب ومستفيد',
      },
    },
    skills: {
      sectionLabel: 'قدراتي',
      title: 'المهارات',
      research: {
        title: '🔬 مهارات بحثية',
        dataAnalysis: 'تحليل البيانات (SPSS, Power BI)',
        experimentalDesign: 'التصميم التجريبي',
        scientificWriting: 'الكتابة العلمية والنشر',
      },
      technical: {
        title: '💻 المهارات التقنية',
        powerBi: 'Power BI / IBM SPSS',
        rExcel: 'Excel المتقدم / تصور البيانات',
        edrawMax: 'EdrawMax / Xmind / Prezi',
      },
      agricultural: {
        title: '🌱 مهارات زراعية',
        livestock: 'إنتاج الثروة الحيوانية',
        breeding: 'التربية والانتخاب',
        nutrition: 'التغذية الحيوانية وتصنيع العلف',
        precision: 'الزراعة الذكية مناخيًا / الزراعة الدقيقة',
      },
      training: {
        title: '🎤 مهارات تدريبية',
        fbs: 'مدرب رئيسي مساعد FBS (GIZ)',
        programDesign: 'تصميم البرامج والهندسة البيداغوجية',
        communication: 'مهارات التواصل والنشر الزراعي',
      },
    },
    experience: {
      sectionLabel: 'رحلتي',
      title: 'المسيرة المهنية',
      items: [
        {
          period: '2022 - حتى الآن',
          title: 'مدرب رئيسي مساعد FBS',
          org: 'ABF (GIZ) — منشأة الأعمال الزراعية لأفريقيا',
          desc: 'مدرب رئيسي مساعد معتمد في مدارس المزارعين الحقلية (FBS). تدريب وإرشاد أكثر من 500 مزارع، وتقديم برامج تدريب المدربين عبر الجزائر. تصميم المناهج التدريبية في ريادة الأعمال الزراعية والزراعة الذكية مناخيًا بدعم من GIZ والاتحاد الأوروبي.',
        },
        {
          period: '2022 - حتى الآن',
          title: 'أستاذ متعاقد (بنظام الساعات)',
          org: 'جامعة الوادي، الوادي',
          desc: 'تدريس وحدات متخصصة لطلاب الطب البيطري (السنتين الأولى والثانية) في اللغة التقنية والإنتاج الحيواني. تطوير مواد بيداغوجية ومناهج دورات الإنتاج الحيواني.',
        },
        {
          period: '2022 - حتى الآن',
          title: 'أستاذ متعاقد (بنظام الساعات)',
          org: 'المدرسة العليا للزراعة الصحراوية، الوادي',
          desc: 'تدريس وحدات متخصصة وأعمال تطبيقية لطلاب الهندسة الزراعية (السنتين الأولى والثانية) في فسيولوجيا الحيوان والبيئة. تطوير مواد بيداغوجية لبيئة الوحدات.',
        },
        {
          period: '2022 - حتى الآن',
          title: 'أستاذ متخصص في الهندسة البيداغوجية',
          org: 'المعهد الوطني للتكوين المهني حسان عبد الكريم، الوادي',
          desc: 'تدريس الدورات الزراعية النظرية والتطبيقية. تصميم المناهج وتطوير محتوى التعلم الإلكتروني وتحسين الاستراتيجيات التعليمية.',
        },
        {
          period: '2019 - حتى الآن',
          title: 'مسؤول ومشرف استغلال زراعي',
          org: 'المعهد الوطني للتكوين المهني حسان عبد الكريم، الوادي',
          desc: 'الإشراف على دروس وقاية النباتات والمشاريع الزراعية. دمج التقنيات الحديثة في التكوين المهني الزراعي.',
        },
        {
          period: '2017 - 2022',
          title: 'مدرب مهني وتربوي (الدرجة الثانية)',
          org: 'المعهد الوطني للتكوين المهني حسان عبد الكريم، الوادي',
          desc: 'تقديم دورات زراعية نظرية وتطبيقية. تطوير محتوى تعليمي مبتكر والإشراف على مشاريع الطلاب.',
        },
        {
          period: '2011 - 2016',
          title: 'مهندس زراعي',
          org: 'عقود ما قبل التشغيل بأدوار متعددة',
          desc: 'تقديم المساعدة التقنية للمزارعين في الخدمات الزراعية. إجراء أبحاث ميدانية ودعم المبادرات الزراعية.',
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
        { name: 'تطبيق تحليل السائل المنوي بالذكاء الاصطناعي', desc: 'تطبيق ذكي لتقييم وتحليل جودة السائل المنوي باستخدام الفحص المجهري بالذكاء الاصطناعي', cat: 'app', icon: '🔬' },
        { name: 'AgriSkills Academy', desc: 'منصة تعليمية متكاملة للتدريب الزراعي وبناء القدرات المهنية مع شهادات معترف بها دوليًا', cat: 'business', icon: '🎓' },
        { name: 'برنامج FBS التدريبي', desc: 'برنامج تدريبي شامل كمدرب رئيسي مساعد في مدارس المزارعين الحقلية بدعم من GIZ/ABF', cat: 'training', icon: '🌾' },
        { name: 'أبحاث حبوب لقاح النخيل في إطالة السائل المنوي', desc: 'بحث مبتكر في استخدام حبوب لقاح النخيل كمادة مستدامة في ممددات السائل المنوي للكباش', cat: 'research', icon: '🧬' },
        { name: 'نموذج مصيدة ضوئية فيرومونية شمسية', desc: 'تصميم نموذج أولي لمصيدة ضوئية فيرومونية تعمل بالطاقة الشمسية لآفات نخيل التمر', cat: 'business', icon: '🪲' },
        { name: 'منصة kamel3lom', desc: 'منصة رقمية لنشر المعرفة الزراعية وتبسيط العلوم للمجتمع مع محتوى تفاعلي', cat: 'app', icon: '📱' },
        { name: 'نظام الزراعة المائية/الأكوابونيك المتكامل', desc: 'نموذج أولي يجمع بين الزراعة المائية وتربية الأسماك للإنتاج الغذائي المستدام في المناطق الجافة', cat: 'business', icon: '🌐' },
        { name: 'أبحاث تفضيلات السلالات لدى المربين', desc: 'دراسة ميدانية قائمة على الاستبيان حول تفضيلات صفات الكباش بين مربي الأغنام', cat: 'research', icon: '📊' },
        { name: 'ورش عمل الزراعة الذكية مناخيًا', desc: 'سلسلة ورش عمل عملية حول تقنيات الزراعة الذكية مناخيًا والزراعة المستدامة', cat: 'training', icon: '🛠️' },
      ],
      viewDetails: 'عرض التفاصيل',
    },
    services: {
      sectionLabel: 'ماذا أقدّم',
      title: 'خدماتي',
      items: [
        { title: '🎓 التدريب الزراعي', desc: 'برامج تدريبية متخصصة في الإنتاج الحيواني والنباتي والزراعة الذكية مناخيًا وريادة الأعمال الزراعية', request: 'اطلب الخدمة' },
        { title: '🔬 الاستشارات البحثية', desc: 'دعم الباحثين في تصميم التجارب وتحليل البيانات والنشر العلمي والمراجعات المنهجية', request: 'اطلب الخدمة' },
        { title: '📊 تحليل البيانات', desc: 'تحليل إحصائي متقدم وتصور بيانات باستخدام SPSS وPower BI وExcel المتقدم', request: 'اطلب الخدمة' },
        { title: '💡 الحلول الرقمية والبيداغوجية', desc: 'تصميم محتوى التعلم الإلكتروني والهندسة البيداغوجية وتطوير المنصات الرقمية الزراعية', request: 'اطلب الخدمة' },
      ],
    },
    achievements: {
      sectionLabel: 'إنجازاتي',
      title: 'الإنجازات والعضويات',
      items: [
        { title: '🏆 مؤتمرات دولية', desc: 'مشاركات فعّالة في 10+ مؤتمرات علمية دولية وإلقاء أوراق بحثية (IPPM23, Caprina 2024, TIMSA 24, VBRA 2024, SA-W&P 2026, IFOAM 2026)' },
        { title: '📄 أبحاث منشورة ومقدمة', desc: 'أوراق بحثية مؤلفة ومشاركة في التأليف في مؤتمرات دولية حول الإنتاج الحيواني وتحليل البيانات وتقنيات الذكاء الاصطناعي في الزراعة' },
        { title: '🎖️ شهادات مهنية', desc: '+60 شهادة تدريب دولية متقدمة من مؤسسات مرموقة (Wageningen, FAO, ASM, GIZ, Oxford, UNITAR, IDEP, Cairo University وغيرها)' },
        { title: '🌍 عضويات دولية', desc: 'عضو الجمعية الأمريكية لعلم الأحياء الدقيقة (ASM)، جمعية تربية الأسماك الأوروبية (EAS)، الرابطة الدولية لممارسي الأعمال الزراعية (IAPA)، سفير ABF' },
        { title: '📱 ابتكارات تقنية', desc: 'تصميم نموذجين أوليين لمصائد حشرات شمسية ونظام متكامل للزراعة المائية/الأكوابونيك للإنتاج المستدام في المناطق الجافة' },
        { title: '🤝 قيادة مجتمعية', desc: 'نائب رئيس جمعية النحالين بالوادي، نقطة اتصال IAPA للجزائر، سفير التعلم الإلكتروني IAPA، سفير ABF لأكاديمية الأعمال الزراعية' },
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
        { text: 'متشوق لمشاركة خبر قبول ورقي البحثية حول تقييم جودة السائل المنوي في مجلة علمية محكمة. ممتن لدعم مشرفي وزملائي.', date: 'مايو 2026', platform: 'facebook' },
        { text: 'اختتمت لتوي برنامج تدريبي مكثف لمدارس المزارعين الحقلية في المعهد الوطني للتكوين المهني بالوادي. تفاعل المتدربين وفضولهم يؤكد لماذا أحب هذا العمل.', date: 'أبريل 2026', platform: 'linkedin' },
        { text: 'حصلت على شهادة هندسة الأوامر (Prompt Engineering) من مبادرة مليون موجّه لدبي في المستقبل. الذكاء الاصطناعي يفتح آفاقًا جديدة للزراعة الذكية!', date: 'مارس 2026', platform: 'linkedin' },
        { text: 'إنجاز جديد: أكثر من 60 شهادة دولية! من Wageningen إلى FAO إلى Oxford — التعلم المستمر هو مفتاح البقاء في طليعة الابتكار الزراعي.', date: 'فبراير 2026', platform: 'linkedin' },
        { text: 'فخور بمشاركة التقدم في نظامنا النموذجي للزراعة المائية والأكوابونيك. دمج المعرفة التقليدية مع الهندسة الحديثة لإنتاج غذاء مستدام في المناطق الجافة.', date: 'يناير 2026', platform: 'facebook' },
        { text: 'يشرفني العمل كنائب رئيس جمعية النحالين والمساهمة في تطوير تربية النحل في الجزائر. النحل شغف وركيزة أساسية في نظامنا الزراعي.', date: 'ديسمبر 2025', platform: 'linkedin' },
      ],
      publications: [
        { title: 'تقييم حبوب لقاح النخيل كمادة مستدامة في ممددات السائل المنوي: أدلة تجريبية من الحيوانات المنوية البربخية للكباش المبردة', journal: 'مؤتمر SA-W&P 2026', year: 2026 },
        { title: 'تفضيلات صفات ذكور الأغنام بين مربي الأغنام: دراسة قائمة على الاستبيان', journal: 'مؤتمر TIMSA 24', year: 2024 },
        { title: 'تصميم مصيدة ضوئية فيرومونية شمسية لآفات نخيل التمر', journal: 'المؤتمر الوطني الأول للزراعة الصحراوية', year: 2023 },
        { title: 'الفحص المجهري بالذكاء الاصطناعي لتحليل السائل المنوي الحيواني', journal: 'مؤتمر IPPM23 الدولي', year: 2023 },
        { title: 'ملخص شامل بخريطة ذهنية لتربية الإبل الكبيرة لبرنار فاي', journal: 'مؤتمر TIMSA 24', year: 2024 },
        { title: 'تأثير إدماج التمور بنسب مختلفة مع خميرة البيرة على كمية إنتاج الحليب', journal: 'مؤتمر TIMSA 24 (مشارك)', year: 2024 },
        { title: 'تحليل بيانات الاستبيان باستخدام Power BI: دراسة حالة حول صفات ذكور الأغنام', journal: 'مؤتمر VBRA 2024 الوطني', year: 2024 },
        { title: 'انتشار وعوامل خطر التهاب القدم المكعب في دجاج اللحم في شرق الجزائر', journal: 'مؤتمر VBRA 2024 (مشارك)', year: 2024 },
      ],
      speaking: [
        { conference: 'IFOAM 2026 — المؤتمر الدولي للزراعة العضوية', location: 'سويسرا', year: 2026, paper: 'التربية مع الناس: استراتيجيات يقودها المزارعون للأغنام المستدامة في النظم العضوية الجافة' },
        { conference: 'SA-W&P 2026 — مؤتمر المياه والإنتاج الصحراوي', location: 'الوادي، الجزائر', year: 2026, paper: 'تقييم حبوب لقاح النخيل في ممددات السائل المنوي للكباش' },
        { conference: 'Caprina 2024 Convention — مؤتمر دولي للماعز والأغنام', location: 'بيورا، بيرو', year: 2024, paper: 'تفضيلات صفات ذكور الأغنام بين المربين: دراسة قائمة على الاستبيان' },
        { conference: 'TIMSA 24 — المؤتمر الدولي', location: 'الوادي، الجزائر', year: 2024, paper: 'تفضيلات صفات ذكور الأغنام وملخص شامل لتربية الإبل' },
        { conference: 'VBRA 2024 — المؤتمر الوطني', location: 'بسكرة، الجزائر', year: 2024, paper: 'تحليل بيانات الاستبيان باستخدام Power BI لصفات ذكور الأغنام' },
        { conference: 'IPPM23 — المؤتمر الدولي', location: 'الوادي، الجزائر', year: 2023, paper: 'الفحص المجهري بالذكاء الاصطناعي لتحليل السائل المنوي الحيواني' },
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
      subtitle: 'أرحب بجميع فرص التعاون في البحث العلمي والتدريب والاستشارات وتطوير الحلول الرقمية الزراعية.',
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
      publications: 'Publications',
      talks: 'Talks',
      teaching: 'Teaching',
      services: 'Services',
      achievements: 'Achievements',
      gallery: 'Gallery',
      knowledge: 'Insights',
      booking: 'Booking',
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
        projects: 'Certifications',
        trainees: 'Trainees',
        certs: 'Conferences',
      },
    },
    about: {
      sectionLabel: 'GET TO KNOW ME',
      title: 'About Me',
      getToKnow: 'GET TO KNOW ME',
      p1: "I'm Abdelkader Atia, an agronomy professional with 15+ years of experience in agricultural engineering, training, and project supervision. I am currently pursuing a PhD in Agronomy Science (Animal Production) at Hamma Lakhdar University, EL-Oued, building on a Master's in Plant Production and an Engineer's degree in Arid Region Animal Breeding from Kasdi Merbah University, Ouargla.",
      nameHighlight: 'Abdelkader Atia',
      expHighlight: '15+ years of experience',
      p2: 'My work spans university lecturing, pedagogical engineering, agricultural exploitation supervision, and scientific research. I serve as a part-time lecturer at the University of El Oued and the Higher School of Saharan Agriculture, and as a Specialized Teacher at Hassani Abdelkrim INSFP where I design curricula, develop e-learning content, and supervise agricultural operations. I am also the author of "On the Edge" (ISBN 978-9969-07-216-7) and Vice President of the Beekeeper Association in El-Oued.',
      roleHighlight: 'Specialized Teacher (Pedagogical Engineering)',
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
        projects: 'International Certifications',
        programs: 'Training Programs',
        trainees: 'Trainees & Beneficiaries',
      },
    },
    skills: {
      sectionLabel: 'MY ABILITIES',
      title: 'Skills',
      research: {
        title: '🔬 Research Skills',
        dataAnalysis: 'Data Analysis (SPSS, Power BI)',
        experimentalDesign: 'Experimental Design',
        scientificWriting: 'Scientific Writing & Publishing',
      },
      technical: {
        title: '💻 Technical Skills',
        powerBi: 'Power BI / IBM SPSS',
        rExcel: 'Advanced Excel / Data Visualization',
        edrawMax: 'EdrawMax / Xmind / Prezi',
      },
      agricultural: {
        title: '🌱 Agricultural Skills',
        livestock: 'Livestock Production',
        breeding: 'Breeding & Selection',
        nutrition: 'Animal Nutrition & Feed Formulation',
        precision: 'Climate-Smart Agriculture / Precision Ag',
      },
      training: {
        title: '🎤 Training Skills',
        fbs: 'FBS Assistant Master Trainer (GIZ)',
        programDesign: 'Program Design & Pedagogical Engineering',
        communication: 'Communication & Agricultural Extension',
      },
    },
    experience: {
      sectionLabel: 'MY JOURNEY',
      title: 'Professional Experience',
      items: [
        {
          period: '2022 – Present',
          title: 'FBS Assistant Master Trainer',
          org: 'ABF (GIZ) — Agri-Business Facility for Africa',
          desc: 'Certified Assistant Master Trainer in Farmer Business School (FBS). Trained and mentored 500+ farmers, delivered Training of Trainers programs across Algeria. Designed curricula in agricultural entrepreneurship and climate-smart agriculture with support from GIZ and the European Union.',
        },
        {
          period: '2022 – Present',
          title: 'Lecturer (Part-time / Hourly Basis)',
          org: 'University of El Oued, EL-Oued',
          desc: 'Deliver specialized modules for 1st and 2nd-year veterinary students, focusing on technical English and Animal Production. Develop structured pedagogical materials and course outlines.',
        },
        {
          period: '2022 – Present',
          title: 'Lecturer (Part-time / Hourly Basis)',
          org: 'Higher School of Saharan Agriculture, EL-Oued',
          desc: 'Deliver specialized modules and practical work for 1st and 2nd-year agronomy students, focusing on animal physiology and ecology. Develop structured pedagogical materials for Ecology modules.',
        },
        {
          period: '2022 – Present',
          title: 'Specialized Teacher (Pedagogical Engineering)',
          org: 'Hassani Abdelkrim INSFP, EL-Oued',
          desc: 'Deliver theoretical and practical agriculture courses. Design curricula, develop e-learning content, and improve educational strategies for vocational training.',
        },
        {
          period: '2019 – Present',
          title: 'Responsible & Supervisor of Agriculture Exploitation',
          org: 'Hassani Abdelkrim INSFP, EL-Oued',
          desc: 'Supervise plant protection classes and agricultural projects. Integrate modern technologies into vocational training for agriculture.',
        },
        {
          period: '2017 – 2022',
          title: 'Vocational and Education Trainer (2nd Degree)',
          org: 'Hassani Abdelkrim Institute, EL-Oued',
          desc: 'Delivered theoretical and practical agriculture courses. Developed innovative educational content and supervised student projects.',
        },
        {
          period: '2011 – 2016',
          title: 'Agriculture Engineer',
          org: 'Various Roles (Pre-employment contracts)',
          desc: 'Provided technical assistance to farmers in agriculture services. Conducted field research and supported agronomic initiatives.',
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
        { name: 'AI-Powered Semen Analysis App', desc: 'Smart application for evaluating and analyzing semen quality using AI-powered microscopy techniques', cat: 'app', icon: '🔬' },
        { name: 'AgriSkills Academy', desc: 'Integrated educational platform for agricultural training and professional capacity building with internationally recognized certifications', cat: 'business', icon: '🎓' },
        { name: 'FBS Training Program', desc: 'Comprehensive training program as Assistant Master Trainer in Farmer Business School (FBS) supported by GIZ/ABF', cat: 'training', icon: '🌾' },
        { name: 'Date Palm Pollen in Semen Extenders', desc: 'Innovative research on valorisation of date palm pollen as a sustainable plant by-product in semen extenders for ram sperm', cat: 'research', icon: '🧬' },
        { name: 'Solar-Powered Light-Pheromone Trap', desc: 'Design of a solar-powered light-pheromone trap prototype for date palm pests', cat: 'business', icon: '🪲' },
        { name: 'kamel3lom Platform', desc: 'Digital platform for disseminating agricultural knowledge and simplifying sciences for the community with interactive content', cat: 'app', icon: '📱' },
        { name: 'Integrated Hydroponic/Aquaponic System', desc: 'Prototype combining hydroponic and aquaponic farming for sustainable food production in arid regions', cat: 'business', icon: '🌐' },
        { name: 'Sheep Male Trait Preferences Study', desc: 'Survey-based research on sheep male trait preferences among sheep keepers', cat: 'research', icon: '📊' },
        { name: 'Climate-Smart Agriculture Workshops', desc: 'Series of practical workshops on climate-smart agriculture techniques and sustainable farming practices', cat: 'training', icon: '🛠️' },
      ],
      viewDetails: 'View Details',
    },
    services: {
      sectionLabel: 'WHAT I OFFER',
      title: 'Services',
      items: [
        { title: '🎓 Agricultural Training', desc: 'Specialized training programs in livestock production, plant production, climate-smart agriculture, and agribusiness', request: 'Request Service' },
        { title: '🔬 Research Consulting', desc: 'Support for researchers in experimental design, data analysis, scientific publishing, and systematic reviews', request: 'Request Service' },
        { title: '📊 Data Analysis', desc: 'Advanced statistical analysis and data visualization using SPSS, Power BI, and advanced Excel', request: 'Request Service' },
        { title: '💡 Digital & Pedagogical Solutions', desc: 'E-learning content design, pedagogical engineering, and development of agricultural digital platforms', request: 'Request Service' },
      ],
    },
    achievements: {
      sectionLabel: 'MY ACHIEVEMENTS',
      title: 'Achievements & Memberships',
      items: [
        { title: '🏆 International Conferences', desc: 'Active participation in 10+ international scientific conferences presenting research papers (IPPM23, Caprina 2024, TIMSA 24, VBRA 2024, SA-W&P 2026, IFOAM 2026)' },
        { title: '📄 Published & Presented Research', desc: 'Authored and co-authored papers at international conferences on animal production, data analysis, and AI techniques in agriculture' },
        { title: '🎖️ Professional Certifications', desc: '60+ advanced international training certifications from prestigious institutions (Wageningen, FAO, ASM, GIZ, Oxford, UNITAR, IDEP, Cairo University, and more)' },
        { title: '🌍 International Memberships', desc: 'Member of American Society for Microbiology (ASM), European Aquaculture Society (EAS), International Association of Agribusiness Practitioners (IAPA), ABF Ambassador' },
        { title: '📱 Technical Innovations', desc: 'Designed 2 insect trap prototypes (solar-powered light-pheromone) and an integrated hydroponic/aquaponic system for sustainable arid-region food production' },
        { title: '🤝 Community Leadership', desc: 'Vice President of Beekeeper Association El-Oued, IAPA Focal Point Algeria, IAPA eLearning Ambassador, ABF Agribusiness e-Academy Ambassador' },
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
        { text: 'Earned my Prompt Engineering Certification from the One Million Prompters Initiative by Dubai Future Foundation. AI opens incredible new possibilities for smart agriculture!', date: 'Mar 2026', platform: 'linkedin' },
        { text: 'New milestone: 60+ international certifications completed! From Wageningen to FAO to Oxford — continuous learning is the key to staying at the forefront of agricultural innovation.', date: 'Feb 2026', platform: 'linkedin' },
        { text: 'Proud to share progress on our hydroponic/aquaponic prototype system. Combining traditional knowledge with modern engineering for sustainable food production in arid regions.', date: 'Jan 2026', platform: 'facebook' },
        { text: 'Honored to serve as Vice President of the Beekeeper Association and contribute to the development of apiculture in Algeria. Beekeeping is both a passion and a critical pillar of our agricultural ecosystem.', date: 'Dec 2025', platform: 'linkedin' },
      ],
      publications: [
        { title: 'Valorisation of date palm pollen as a sustainable plant by-product in semen extenders: experimental evidence from chilled epididymal ram sperm', journal: 'SA-W&P 2026 Conference', year: 2026 },
        { title: 'Sheep male traits preferences among sheep keepers: A survey-based study', journal: 'TIMSA 24 Conference', year: 2024 },
        { title: 'Design of solar-powered light-pheromone trap for date palm pests', journal: '1st National Conference on Saharan Agriculture', year: 2023 },
        { title: 'Artificial intelligence powered microscopy for animal semen analysis', journal: 'IPPM23 International Conference', year: 2023 },
        { title: 'A comprehensive Mindmap Summary of Large Camels Farming by Bernard Faye', journal: 'TIMSA 24 Conference', year: 2024 },
        { title: 'Effect of incorporation date waste in different proportion and brewer\'s yeast on milk production quantity', journal: 'TIMSA 24 Conference (Co-author)', year: 2024 },
        { title: 'Analyzing Survey Data with Power BI: A Case Study on Sheep Male Trait', journal: 'VBRA 2024 National Conference', year: 2024 },
        { title: 'Prevalence and risk factors of foot-pad dermatitis in broiler chickens in eastern Algeria', journal: 'VBRA 2024 Conference (Co-author)', year: 2024 },
      ],
      speaking: [
        { conference: 'IFOAM 2026 — International Organic Agriculture Congress', location: 'Switzerland', year: 2026, paper: 'Breeding with the People: Farmer-Led Strategies for Sustainable Sheep in Arid Organic Systems' },
        { conference: 'SA-W&P 2026 — Saharan Agriculture, Water & Production Conference', location: 'El Oued, Algeria', year: 2026, paper: 'Valorisation of date palm pollen in semen extenders for chilled ram sperm' },
        { conference: 'Caprina 2024 Convention', location: 'Piura, Peru', year: 2024, paper: 'Sheep male traits preferences among sheep keepers: A survey-based study' },
        { conference: 'TIMSA 24 — International Conference', location: 'El Oued, Algeria', year: 2024, paper: 'Sheep male traits preferences & Large Camels Farming Mindmap Summary' },
        { conference: 'VBRA 2024 — National Conference', location: 'Biskra, Algeria', year: 2024, paper: 'Analyzing Survey Data with Power BI: Sheep Male Trait Case Study' },
        { conference: 'IPPM23 — International Conference', location: 'El Oued, Algeria', year: 2023, paper: 'AI-powered microscopy for animal semen analysis' },
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
      publications: 'Publications',
      talks: 'Conférences',
      teaching: 'Enseignement',
      services: 'Services',
      achievements: 'Réalisations',
      gallery: 'Galerie',
      knowledge: 'Savoir',
      booking: 'Réservation',
      contact: 'Contact',
    },
    hero: {
      badge: 'Doctorant | Formateur | Innovateur',
      title: 'Transformer la',
      titleHighlight: 'Connaissance Agricole',
      titleEnd: 'en Impact Réel',
      subtitle: "Doctorant et formateur spécialisé en agriculture numérique, construisant des ponts entre la science et l'application pratique pour développer des systèmes agricoles plus intelligents et plus efficaces.",
      cta1: 'Explorer mes travaux',
      cta2: 'Me contacter',
      stats: {
        years: "Ans d'expérience",
        projects: 'Certifications',
        trainees: 'Formés',
        certs: 'Conférences',
      },
    },
    about: {
      sectionLabel: 'À PROPOS',
      title: 'À Propos de Moi',
      getToKnow: 'À PROPOS',
      p1: "Je suis Abdelkader Atia, un professionnel en agronomie avec plus de 15 ans d'expérience en génie agricole, formation professionnelle et supervision de projets. Je prépare actuellement un doctorat en Sciences Agronomiques (Production Animale) à l'Université Hamma Lakhdar, EL-Oued, avec un Master en Production Végétale et un diplôme d'Ingénieur en Élevage en Régions Arides de l'Université Kasdi Merbah, Ouargla.",
      nameHighlight: 'Abdelkader Atia',
      expHighlight: "plus de 15 ans d'expérience",
      p2: "Mon travail couvre l'enseignement universitaire, l'ingénierie pédagogique, la supervision d'exploitation agricole et la recherche scientifique. Je suis enseignant vacataire à l'Université d'El Oued et à l'École Supérieure d'Agriculture Saharienne, et Enseignant Spécialisé à l'INSFP Hassani Abdelkrim où je conçois des programmes, développe du contenu e-learning et supervise les opérations agricoles. Je suis également l'auteur du livre « Sur le fil » (ISBN 978-9969-07-216-7) et Vice-Président de l'Association des Apiculteurs d'El-Oued.",
      roleHighlight: 'Enseignant Spécialisé (Ingénierie Pédagogique)',
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
        projects: 'Certifications Internationales',
        programs: 'Programmes de Formation',
        trainees: 'Stagiaires & Bénéficiaires',
      },
    },
    skills: {
      sectionLabel: 'MES COMPÉTENCES',
      title: 'Compétences',
      research: {
        title: '🔬 Compétences en Recherche',
        dataAnalysis: 'Analyse de Données (SPSS, Power BI)',
        experimentalDesign: 'Conception Expérimentale',
        scientificWriting: 'Rédaction Scientifique & Publication',
      },
      technical: {
        title: '💻 Compétences Techniques',
        powerBi: 'Power BI / IBM SPSS',
        rExcel: 'Excel Avancé / Visualisation de Données',
        edrawMax: 'EdrawMax / Xmind / Prezi',
      },
      agricultural: {
        title: '🌱 Compétences Agricoles',
        livestock: 'Production Animale',
        breeding: 'Élevage & Sélection',
        nutrition: "Nutrition Animale & Fabrication d'Aliments",
        precision: 'Agriculture Climato-Intelligente / Précision',
      },
      training: {
        title: '🎤 Compétences en Formation',
        fbs: 'Formateur Maître Assistant FBS (GIZ)',
        programDesign: "Conception de Programmes & Ingénierie Pédagogique",
        communication: "Communication & Vulgarisation Agricole",
      },
    },
    experience: {
      sectionLabel: 'MON PARCOURS',
      title: 'Expérience Professionnelle',
      items: [
        {
          period: '2022 – Présent',
          title: 'Formateur Maître Assistant FBS',
          org: 'ABF (GIZ) — Facilité Agri-Business pour l\'Afrique',
          desc: 'Formateur Maître Assistant certifié en Farmer Business School (FBS). Formation et encadrement de plus de 500 agriculteurs, animation de programmes de Formation des Formateurs à travers l\'Algérie. Conception de programmes en entrepreneuriat agricole et agriculture intelligente face au climat avec le soutien de GIZ et de l\'Union Européenne.',
        },
        {
          period: '2022 – Présent',
          title: 'Enseignant Vacataire (Horaire)',
          org: "Université d'El Oued, EL-Oued",
          desc: "Enseignement de modules spécialisés pour les étudiants vétérinaires de 1ère et 2ème année, axé sur l'anglais technique et la production animale. Développement de supports pédagogiques structurés.",
        },
        {
          period: '2022 – Présent',
          title: 'Enseignant Vacataire (Horaire)',
          org: "École Supérieure d'Agriculture Saharienne, EL-Oued",
          desc: "Enseignement de modules spécialisés et travaux pratiques pour les étudiants en agronomie de 1ère et 2ème année, axé sur la physiologie animale et l'écologie.",
        },
        {
          period: '2022 – Présent',
          title: 'Enseignant Spécialisé (Ingénierie Pédagogique)',
          org: 'INSFP Hassani Abdelkrim, EL-Oued',
          desc: "Enseignement théorique et pratique en agriculture. Conception de programmes, développement de contenu e-learning et amélioration des stratégies éducatives.",
        },
        {
          period: '2019 – Présent',
          title: "Responsable & Superviseur d'Exploitation Agricole",
          org: 'INSFP Hassani Abdelkrim, EL-Oued',
          desc: "Supervision des cours de protection des plantes et des projets agricoles. Intégration des technologies modernes dans la formation professionnelle agricole.",
        },
        {
          period: '2017 – 2022',
          title: 'Formateur Professionnel et Éducatif (2ème Degré)',
          org: 'Institut Hassani Abdelkrim, EL-Oued',
          desc: "Enseignement théorique et pratique en agriculture. Développement de contenu éducatif innovant et encadrement des projets étudiants.",
        },
        {
          period: '2011 – 2016',
          title: 'Ingénieur Agricole',
          org: 'Divers Rôles (Contrats pré-emploi)',
          desc: "Assistance technique aux agriculteurs dans les services agricoles. Recherche sur le terrain et soutien aux initiatives agronomiques.",
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
        { name: 'Application Analyse Semence par IA', desc: "Application intelligente pour l'évaluation et l'analyse de la qualité du sperme par microscopie alimentée par l'IA", cat: 'app', icon: '🔬' },
        { name: 'AgriSkills Academy', desc: "Plateforme éducative intégrée pour la formation agricole et le renforcement des capacités avec certifications internationales reconnues", cat: 'business', icon: '🎓' },
        { name: 'Programme FBS', desc: "Programme de formation complet en tant que Formateur Maître Assistant en Farmer Business School (FBS) soutenu par GIZ/ABF", cat: 'training', icon: '🌾' },
        { name: 'Pollen de Palmier Dattier dans les Extendeurs', desc: "Recherche innovante sur la valorisation du pollen de palmier dattier comme sous-produit durable dans les extendeurs de sperme pour les béliers", cat: 'research', icon: '🧬' },
        { name: 'Piège Lumière-Pheromone Solaire', desc: "Conception d'un prototype de piège lumière-pheromone alimenté par l'énergie solaire pour les ravageurs du palmier dattier", cat: 'business', icon: '🪲' },
        { name: 'Plateforme kamel3lom', desc: "Plateforme numérique pour diffuser les connaissances agricoles et simplifier les sciences avec du contenu interactif", cat: 'app', icon: '📱' },
        { name: 'Système Hydroponique/Aquaponique Intégré', desc: "Prototype combinant agriculture hydroponique et aquaponique pour la production alimentaire durable en régions arides", cat: 'business', icon: '🌐' },
        { name: 'Étude Préférences Traits Mâles Ovins', desc: "Recherche par enquête sur les préférences des caractères mâles ovins parmi les éleveurs de moutons", cat: 'research', icon: '📊' },
        { name: 'Ateliers Agriculture Climato-Intelligente', desc: "Série d'ateliers pratiques sur les techniques d'agriculture climato-intelligente et les pratiques agricoles durables", cat: 'training', icon: '🛠️' },
      ],
      viewDetails: 'Voir les détails',
    },
    services: {
      sectionLabel: 'MES SERVICES',
      title: 'Services',
      items: [
        { title: '🎓 Formation Agricole', desc: 'Programmes de formation spécialisés en production animale, production végétale, agriculture climato-intelligente et agroalimentaire', request: 'Demander ce Service' },
        { title: '🔬 Conseil en Recherche', desc: "Soutien aux chercheurs en conception expérimentale, analyse de données, publication scientifique et revues systématiques", request: 'Demander ce Service' },
        { title: '📊 Analyse de Données', desc: "Analyse statistique avancée et visualisation de données avec SPSS, Power BI et Excel avancé", request: 'Demander ce Service' },
        { title: '💡 Solutions Numériques & Pédagogiques', desc: "Conception de contenu e-learning, ingénierie pédagogique et développement de plateformes numériques agricoles", request: 'Demander ce Service' },
      ],
    },
    achievements: {
      sectionLabel: 'MES RÉALISATIONS',
      title: 'Réalisations & Adhésions',
      items: [
        { title: '🏆 Conférences Internationales', desc: "Participation active à plus de 10 conférences scientifiques internationales avec présentation d'articles (IPPM23, Caprina 2024, TIMSA 24, VBRA 2024, SA-W&P 2026, IFOAM 2026)" },
        { title: '📄 Recherche Publiée & Présentée', desc: "Auteur et co-auteur d'articles dans des conférences internationales sur la production animale, l'analyse de données et les techniques IA en agriculture" },
        { title: '🎖️ Certifications Professionnelles', desc: "Plus de 60 certifications avancées de formation internationale provenant d'institutions prestigieuses (Wageningen, FAO, ASM, GIZ, Oxford, UNITAR, IDEP, Université du Caire et d'autres)" },
        { title: '🌍 Adhésions Internationales', desc: "Membre de l'American Society for Microbiology (ASM), European Aquaculture Society (EAS), International Association of Agribusiness Practitioners (IAPA), Ambassadeur ABF" },
        { title: '📱 Innovations Techniques', desc: "Conception de 2 prototypes de pièges à insectes (lumière-phéromone solaire) et d'un système hydroponique/aquaponique intégré pour la production durable en zones arides" },
        { title: '🤝 Leadership Communautaire', desc: "Vice-Président de l'Association des Apiculteurs d'El-Oued, Point Focal IAPA Algérie, Ambassadeur eLearning IAPA, Ambassadeur ABF e-Academy" },
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
        { text: "Ravi de partager que mon dernier article sur l'évaluation de la qualité du sperme a été accepté dans une revue à comité de lecture. Reconnaissant envers mes superviseurs et collaborateurs.", date: 'Mai 2026', platform: 'facebook' },
        { text: "Je viens de terminer un programme de formation intensive FBS à l'INSFP EL-Oued. L'engagement et la curiosité des stagiaires me rappellent pourquoi j'aime ce travail.", date: 'Avr 2026', platform: 'linkedin' },
        { text: "Certification en Prompt Engineering obtenue de l'initiative One Million Prompters de Dubai Future Foundation. L'IA ouvre des possibilités incroyables pour l'agriculture intelligente !", date: 'Mar 2026', platform: 'linkedin' },
        { text: "Nouveau cap franchi : plus de 60 certifications internationales ! De Wageningen à la FAO en passant par Oxford — l'apprentissage continu est la clé de l'innovation agricole.", date: 'Fév 2026', platform: 'linkedin' },
        { text: "Fier de partager l'avancement de notre prototype hydroponique/aquaponique. Alliance du savoir traditionnel et de l'ingénierie moderne pour une production alimentaire durable.", date: 'Jan 2026', platform: 'facebook' },
        { text: "Honoré de servir en tant que Vice-Président de l'Association des Apiculteurs et de contribuer au développement de l'apiculture en Algérie.", date: 'Déc 2025', platform: 'linkedin' },
      ],
      publications: [
        { title: "Valorisation du pollen de palmier dattier comme sous-produit durable dans les extendeurs de sperme : preuves expérimentales", journal: 'Conférence SA-W&P 2026', year: 2026 },
        { title: "Préférences des caractères mâles ovins parmi les éleveurs : une étude par enquête", journal: 'Conférence TIMSA 24', year: 2024 },
        { title: "Conception d'un piège lumière-phéromone solaire pour les ravageurs du palmier dattier", journal: '1ère Conférence Nationale sur l\'Agriculture Saharienne', year: 2023 },
        { title: "Microscopie alimentée par l'IA pour l'analyse du sperme animal", journal: 'Conférence IPPM23', year: 2023 },
        { title: "Résumé complet par carte mentale de l'élevage des grands camélidés par Bernard Faye", journal: 'Conférence TIMSA 24', year: 2024 },
        { title: "Effet de l'incorporation de déchets de dattes et de levure de brasserie sur la production laitière", journal: 'Conférence TIMSA 24 (Co-auteur)', year: 2024 },
        { title: "Analyse de données d'enquête avec Power BI : étude de cas sur les caractères mâles ovins", journal: 'Conférence VBRA 2024', year: 2024 },
        { title: "Prévalence et facteurs de risque de la dermatite des coussinets chez les poulets de chair", journal: 'Conférence VBRA 2024 (Co-auteur)', year: 2024 },
      ],
      speaking: [
        { conference: 'IFOAM 2026 — Congrès International de l\'Agriculture Biologique', location: 'Suisse', year: 2026, paper: "Élever avec le peuple : stratégies paysannes pour des ovins durables en systèmes biologiques arides" },
        { conference: 'SA-W&P 2026 — Agriculture Saharienne, Eau & Production', location: 'El Oued, Algérie', year: 2026, paper: "Valorisation du pollen de palmier dattier dans les extendeurs de sperme de bélier" },
        { conference: 'Caprina 2024 Convention', location: 'Piura, Pérou', year: 2024, paper: "Préférences des caractères mâles ovins parmi les éleveurs : étude par enquête" },
        { conference: 'TIMSA 24 — Conférence Internationale', location: 'El Oued, Algérie', year: 2024, paper: "Préférences des traits mâles & Résumé carte mentale de l'élevage camelin" },
        { conference: 'VBRA 2024 — Conférence Nationale', location: 'Biskra, Algérie', year: 2024, paper: "Analyse de données d'enquête avec Power BI : étude de cas ovins" },
        { conference: 'IPPM23 — Conférence Internationale', location: 'El Oued, Algérie', year: 2023, paper: "Microscopie alimentée par l'IA pour l'analyse du sperme animal" },
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
