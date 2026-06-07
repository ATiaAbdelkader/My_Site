// Projects data
const projects = [
  { name: 'تطبيق تحليل السائل المنوي', desc: 'تطبيق ذكي لتقييم وتحليل جودة السائل المنوي باستخدام تقنيات التصوير والذكاء الاصطناعي', cat: 'app', icon: '🔬', link: '#' },
  { name: 'AgriSkills Academy', desc: 'منصة تعليمية متكاملة للتدريب الزراعي وبناء القدرات المهنية مع شهادات معترف بها', cat: 'business', icon: '🎓', link: '#' },
  { name: 'برنامج FBS التدريبي', desc: 'سلسلة برامج تدريبية شاملة في مدارس المزارعين الحقلية تغطي الإنتاج الحيواني والزراعة المستدامة', cat: 'training', icon: '🌾', link: '#' },
  { name: 'أبحاث التكاثر الحيواني', desc: 'مشاريع بحثية متقدمة في تحسين الأداء التناسلي وجودة السائل المنوي مع نشر دولي', cat: 'research', icon: '🧬', link: '#' },
  { name: 'مشروع تربية BSF', desc: 'مبادرة مبتكرة لتربية ذبابة الجندي الأسود كمصدر بروتين بديل وحل للنفايات', cat: 'business', icon: '🦟', link: '#' },
  { name: 'منصة kamel3lom', desc: 'منصة رقمية لنشر المعرفة الزراعية وتبسيط العلوم للمجتمع مع محتوى تفاعلي', cat: 'app', icon: '📱', link: '#' },
  { name: 'نظام إدارة المزارع الذكي', desc: 'تطبيق شامل لإدارة المزارع بتتبع الثروة والإنتاجية والتنبؤات الذكية', cat: 'app', icon: '🌐', link: '#' },
  { name: 'دراسات في تحسين السلالات', desc: 'أبحاث متخصصة في التربية الانتخابية وتحسين المؤشرات الوراثية للماشية', cat: 'research', icon: '📊', link: '#' },
  { name: 'ورش عمل الزراعة الحديثة', desc: 'سلسلة ورش عمل عملية حول التقنيات الحديثة والممارسات الزراعية الفضلى', cat: 'training', icon: '🛠️', link: '#' },
];

// Testimonials data
const testimonials = [
  { text: 'تدريب ممتاز ومحتوى علمي رصين. استفدت كثيرًا من الجانب التطبيقي في برنامج FBS، والمدرب يشرح بطريقة مبسطة وواضحة.', author: 'م. أحمد', role: 'مهندس زراعي', initials: 'م.أ', color: 'from-cyan-500 to-cyan-600', rating: 5 },
  { text: 'ساعدني الدكتور عبد القادر في تحليل بيانات رسالتي بطريقة احترافية ومبسّطة. مشرف ممتاز يتقن مجاله بشكل عميق.', author: 'سارة ك.', role: 'طالبة ماجستير', initials: 'س.ك', color: 'from-amber-500 to-amber-600', rating: 5 },
  { text: 'شريك موثوق في مجال الابتكار الزراعي. يجمع بين الرؤية العلمية والتنفيذ العملي، وملتزم بجودة النتائج.', author: 'د. محمد', role: 'شريك أعمال', initials: 'د.م', color: 'from-cyan-500 to-cyan-600', rating: 5 },
  { text: 'برامج التدريب متخصصة وعملية جدًا. ساعدتني في تطوير مهارات التسيير الحديثة وتطبيق التقنيات الجديدة.', author: 'فاطمة ع.', role: 'مزارعة', initials: 'ف.ع', color: 'from-amber-500 to-amber-600', rating: 5 },
  { text: 'منصة kamel3lom غيرت طريقة فهمي للمفاهيم الزراعية المعقدة. محتوى غني وسهل الفهم وقيم جدًا.', author: 'إبراهيم ق.', role: 'طالب جامعي', initials: 'إ.ق', color: 'from-cyan-500 to-cyan-600', rating: 5 },
  { text: 'دعم احترافي في البحث العلمي والنشر الدولي. ساعدني على نشر بحثي في مجلة محترمة دوليًا.', author: 'د. ليلى', role: 'باحثة', initials: 'د.ل', color: 'from-amber-500 to-amber-600', rating: 5 },
];

// بيانات معرض الصور (عربي)
const galleryItems = [
  { id: 1, title: 'مختبر البحث الحقلي', desc: 'مجموعة معدات متقدمة لتحليل جودة السائل المنوي', cat: 'research', icon: '🔬', image: '🧪' },
  { id: 2, title: 'جلسة تدريبية', desc: 'برنامج FBS التدريبي مع المزارعين', cat: 'training', icon: '👨‍🌾', image: '🎓' },
  { id: 3, title: 'الزيارة الميدانية', desc: 'العمل الميداني ومراقبة الثروة الحيوانية', cat: 'farm', icon: '🐄', image: '🚜' },
  { id: 4, title: 'عرض المؤتمر الدولي', desc: 'المشاركة في المؤتمرات الزراعية الدولية', cat: 'event', icon: '🎤', image: '🌍' },
  { id: 5, title: 'بيانات البحث', desc: 'التعاون البحثي والتحليل الإحصائي', cat: 'research', icon: '📊', image: '📈' },
  { id: 6, title: 'ورشة عمل للمزارعين', desc: 'جلسة تدريبية عملية مكثفة', cat: 'training', icon: '🛠️', image: '🌱' },
  { id: 7, title: 'تقييم الثروة الحيوانية', desc: 'تقييم صحة وإنتاجية الحيوانات', cat: 'farm', icon: '🐑', image: '✅' },
  { id: 8, title: 'فعالية الندوة', desc: 'ندوة تعليمية مع الخبراء', cat: 'event', icon: '🎯', image: '🏆' },
  { id: 9, title: 'منصة رقمية', desc: 'عرض منصة kamel3lom', cat: 'research', icon: '💻', image: '📱' },
];

// بيانات دراسات الحالة (عربي)
const caseStudies = [
  { id: 1, title: 'نمو AgriSkills Academy', subtitle: 'بناء التميز التعليمي', challenge: 'الحاجة إلى إنشاء منصة تدريب زراعي شاملة تخدم المزارعين والباحثين', solution: 'تطوير أكاديمية متكاملة ببرامج أونلاين وأوفلاين وشهادات وشراكات صناعية', results: '500+ متدرب | 40+ برنامج | 95% معدل الرضا', impact: '🎓 تحويل تعليمي', tags: ['تدريب', 'منصة', 'تعليم'] },
  { id: 2, title: 'أبحاث جودة السائل المنوي', subtitle: 'الابتكار العلمي', challenge: 'تحسين التربية الحيوانية من خلال تقييم أفضل لجودة السائل المنوي', solution: 'تقنيات معملية متقدمة مع نظام تحليل معتمد على الذكاء الاصطناعي', results: '20+ منشور | تعاون دولي | براءة اختراع قيد الانتظار', impact: '🧬 إنجاز بحثي', tags: ['بحث', 'ابتكار', 'علم'] },
  { id: 3, title: 'تأثير برنامج FBS', subtitle: 'تمكين المجتمع', challenge: 'المزارعون يفتقرون للمعرفة والتقنيات الزراعية الحديثة', solution: 'برنامج مدارس المزارعين الحقلية البنائي والعملي', results: '500+ مزارع مدرب | زيادة الإنتاجية 40% | تطبيق ممارسات مستدامة', impact: '🌾 نمو المجتمع', tags: ['تدريب', 'تأثير', 'استدامة'] },
];

// بيانات المقالات (عربي)
const blogArticles = [
  {
    id: 1, icon: '🐄', category: 'علوم الحيوان',
    title: 'تحسين جودة السائل المنوي: أحدث التقنيات',
    summary: 'نظرة شاملة على أحدث الأبحاث والتقنيات المستخدمة في تقييم وتحسين جودة السائل المنوي والأداء التناسلي للحيوانات.',
    content: 'تلعب جودة السائل المنوي دوراً محورياً في تحسين الأداء التناسلي للحيوانات وزيادة الإنتاجية في المزارع. في هذا المقال، نستعرض أحدث التقنيات المستخدمة في تقييم وتحسين جودة السائل المنوي.\n\nالتقنيات الحديثة تشمل:\n- التحليل المعتمد على الذكاء الاصطناعي لتقييم الحركة والتشكل\n- استخدام المجهر الإلكتروني لفحص البنية الدقيقة\n- تقنيات التبريد والتجميد المتطورة للحفاظ على الجودة\n- المؤشرات الحيوية (Biomarkers) للكشف المبكر عن المشكلات\n\nالتطبيقات العملية:\n- تحسين برامج التلقيح الاصطناعي\n- اختيار الطلائق المتفوقة وراثياً\n- تقليل تكاليف الإنتاج وزيادة الكفاءة',
    date: '2026-01-15', readTime: '8 دقائق'
  },
  {
    id: 2, icon: '📊', category: 'تحليل بيانات',
    title: 'استخدام R في تحليل البيانات الزراعية',
    summary: 'دليل عملي لاستخدام لغة R في معالجة وتحليل وتصور البيانات الزراعية بكفاءة واحترافية.',
    content: 'تعد لغة R من أقوى الأدوات مفتوحة المصدر لتحليل البيانات الإحصائية والرسوم البيانية. في المجال الزراعي، توفر R مجموعة واسعة من الحزم المتخصصة.\n\nالحزم الأساسية:\n- agricolae: للتحليل الإحصائي للتجارب الزراعية\n- lme4: للنماذج الخطية المختلطة\n- ggplot2: لتصور البيانات بشكل احترافي\n- caret: للتعلم الآلي\n\nخطوات عملية:\n1. استيراد البيانات من Excel أو CSV\n2. تنظيف البيانات ومعالجة القيم المفقودة\n3. التحليل الإحصائي (ANOVA, Regression)\n4. إنشاء الرسوم البيانية والتقارير',
    date: '2026-02-20', readTime: '10 دقائق'
  },
  {
    id: 3, icon: '🌾', category: 'تدريب',
    title: 'مدارس المزارعين الحقلية: منهجية فعّالة',
    summary: 'كيف تساهم مدارس FBS في تمكين المزارعين وتحسين الإنتاجية الزراعية والممارسات الحديثة.',
    content: 'مدارس المزارعين الحقلية (FBS) هي منهجية تدريبية مبتكرة تعتمد على التعلم بالممارسة وتبادل الخبرات بين المزارعين.\n\nالمبادئ الأساسية:\n- التعلم بالممارسة (Learning by Doing)\n- اتخاذ القرار الجماعي\n- التجارب الحقلية المقارنة\n- تمكين المزارعين كخبراء محليين\n\nالنتائج المحققة:\n- تحسين الإنتاجية بنسبة 30-50%\n- خفض تكاليف الإنتاج\n- اعتماد ممارسات زراعية مستدامة\n- بناء شبكات معرفية محلية',
    date: '2026-03-10', readTime: '7 دقائق'
  },
  {
    id: 4, icon: '💡', category: 'ابتكار',
    title: 'الذكاء الاصطناعي في الزراعة: التطبيقات العملية',
    summary: 'استكشاف استخدامات الذكاء الاصطناعي والتعلم الآلي في تحسين القرارات الزراعية والإنتاجية.',
    content: 'يحدث الذكاء الاصطناعي ثورة في القطاع الزراعي من خلال تقديم حلول ذكية لزيادة الإنتاجية والاستدامة.\n\nالتطبيقات الرئيسية:\n- التعرف على الأمراض النباتية عبر الصور\n- التنبؤ بالإنتاجية والمخاطر المناخية\n- الروبوتات الزراعية الذكية\n- إدارة الموارد المائية بكفاءة\n- تحليل جودة المنتجات الزراعية\n\nدراسات حالة:\nاستخدام تقنيات التعلم العميق لتحليل صور حبوب اللقاح وتقييم جودتها آلياً، مما يقلص وقت الفحص من ساعات إلى دقائق.',
    date: '2026-04-05', readTime: '9 دقائق'
  },
  {
    id: 5, icon: '🔬', category: 'بحث',
    title: 'النشر العلمي الدولي: دليل البداية',
    summary: 'خطوات عملية لنشر بحثك في المجلات العلمية الدولية المحكّمة والعالية التصنيف.',
    content: 'النشر العلمي الدولي هو بوابة التواصل مع المجتمع العلمي العالمي وبناء سمعة أكاديمية مرموقة.\n\nالخطوات الأساسية:\n1. اختيار المجلة المناسبة (Scopus, Web of Science)\n2. كتابة الورقة وفق معايير المجلة\n3. إعداد المخطوطة بشكل احترافي\n4. التعامل مع ملاحظات المحكمين\n5. متابعة النشر والترويج\n\nنصائح مهمة:\n- اختيار عنوان جذاب وواضح\n- كتابة ملخص قوي\n- توثيق المراجع بدقة\n- الالتزام بأخلاقيات النشر العلمي',
    date: '2026-05-01', readTime: '11 دقائق'
  },
  {
    id: 6, icon: '🚀', category: 'ريادة أعمال',
    title: 'بدء مشروع زراعي: من الفكرة إلى التنفيذ',
    summary: 'دليل شامل لرواد الأعمال الزراعيين حول كيفية بدء وتطوير مشروع زراعي ناجح.',
    content: 'ريادة الأعمال الزراعية تتطلب مزيجاً فريداً من المعرفة التقنية والمهارات الإدارية والرؤية المستقبلية.\n\nمراحل بدء المشروع:\n1. دراسة الجدوى وتحليل السوق\n2. وضع خطة العمل\n3. تأمين التمويل (قروض، منح، مستثمرون)\n4. اختيار الموقع والتجهيزات\n5. التوظيف والتدريب\n6. التسويق والتوزيع\n\nمجالات واعدة:\n- الزراعة العضوية\n- الزراعة الذكية مناخياً\n- الإنتاج الحيواني المستدام\n- الزراعة العمودية والبيوت المحمية',
    date: '2026-05-20', readTime: '8 دقائق'
  }
];
const faqItems = [
  { question: 'ما هي خلفيتك الأكاديمية والمهنية؟', answer: 'أنا متخصص في الهندسة الزراعية مع أكثر من 12 عامًا من الخبرة في الهندسة الزراعية والتدريب المهني والإشراف على المشاريع. أحضر حاليًا درجة الدكتوراه في الإنتاج الحيواني وأعمل كأستاذ متخصص في المعهد الوطني للتكوين المهني حسان عبد الكريم بالوادي.' },
  { question: 'ما هي برامج التدريب التي تقدمها؟', answer: 'أقدم برامج تدريب زراعي شاملة من خلال برنامج FBS وأكاديمية AgriSkills والورش المتخصصة التي تغطي الإنتاج الحيواني والتقنيات الزراعية الحديثة والزراعة الرقمية.' },
  { question: 'هل تقدم خدمات استشارة بحثية؟', answer: 'نعم، أقدم استشارات في تصميم التجارب وتحليل البيانات والكتابة العلمية والنشر الدولي للباحثين والمؤسسات.' },
  { question: 'كيف يمكن الوصول إلى منصة kamel3lom؟', answer: 'منصة kamel3lom متاحة عبر الموقع والتطبيق الجوال بمحتوى مجاني وممميز.' },
  { question: 'هل تمنح شهادات للبرامج التدريبية؟', answer: 'نعم، جميع برامجنا التدريبية تشمل شهادات معترف بها، وأكاديمية AgriSkills توفر شهادات زراعية معترفة بها دوليًا.' },
  { question: 'ما هو توفري الاستشاري؟', answer: 'أوفر ترتيبات استشارية مرنة. يمكنك التواصل معي لحلول مخصصة في التدريب أو البحث أو تطوير المنصات الرقمية.' },
  { question: 'كيف يمكن التواصل معي للتعاون؟', answer: 'يمكنك التواصل من خلال نموذج التواصل على الموقع أو البريد الإلكتروني أو LinkedIn أو الهاتف، وسأرد على استفساراتك في غضون 24-48 ساعة.' },
  { question: 'هل تعمل بشكل دولي؟', answer: 'نعم، لدي تعاون مع مؤسسات في أوروبا والشرق الأوسط وأفريقيا، والاستشارة والتدريب عن بعد متاحة عالميًا.' },
];

// ===== Knowledge Hub Data =====
const thoughts = [
  { platform: 'facebook', text: 'متشوق لمشاركة خبر قبول ورقي البحثية الجديدة حول تقييم جودة السائل المنوي في مجلة علمية محكمة. ممتن لدعم مشرفي وزملائي.', date: 'مايو 2026', link: 'https://www.facebook.com/abdelkader.atia' },
  { platform: 'linkedin', text: 'اختتمت لتوي برنامج تدريبي مكثف لمدارس المزارعين الحقلية في المعهد الوطني للتكوين المهني بالوادي. تفاعل المتدربين وفضولهم يؤكد لماذا أحب هذا العمل - التعليم الزراعي التطبيقي يغير حياة الناس.', date: 'أبريل 2026', link: 'https://www.linkedin.com/in/abdelkader-atia/' },
  { platform: 'facebook', text: 'حضرت مؤتمر ESNA وقدمت أحدث أبحاثي حول الأداء التناسلي للكباش تحت الظروف الجافة. نقاشات مثمرة مع باحثين من جميع أنحاء المتوسط.', date: 'مارس 2026', link: 'https://www.facebook.com/abdelkader.atia' },
  { platform: 'linkedin', text: 'إنجاز جديد: أكثر من 50 شهادة دولية! من Wageningen إلى FAO إلى Oxford Climate Society - التعلم المستمر هو مفتاح البقاء في طليعة الابتكار الزراعي.', date: 'فبراير 2026', link: 'https://www.linkedin.com/in/abdelkader-atia/' },
  { platform: 'facebook', text: 'فخور بمشاركة التقدم في نظامنا النموذجي للزراعة المائية والأكوابونيك. دمج المعرفة التقليدية مع الهندسة الحديثة لإنتاج غذاء مستدام في المناطق الجافة.', date: 'يناير 2026', link: 'https://www.facebook.com/abdelkader.atia' },
  { platform: 'linkedin', text: 'يشرفني العمل كنائب رئيس جمعية النحالين والمساهمة في تطوير تربية النحل في الجزائر. النحل شغف وركيزة أساسية في نظامنا الزراعي.', date: 'ديسمبر 2025', link: 'https://www.linkedin.com/in/abdelkader-atia/' },
];

const publications = [
  { title: 'تقييم معايير جودة السائل المنوي في الكباش تحت الظروف البيئية الجافة', journal: 'Journal of Animal Science', year: 2025, doi: '10.xxxx/jas.2025.001' },
  { title: 'تأثير المكملات الغذائية على الأداء التناسلي للسلالات البقرية المحلية في جنوب الجزائر', journal: 'Livestock Science', year: 2024, doi: '10.xxxx/livsci.2024.002' },
  { title: 'تطبيق التحليل الرقمي للصور للتقييم الآلي لشكل الحيوانات المنوية', journal: 'Theriogenology', year: 2024, doi: '10.xxxx/therio.2024.003' },
  { title: 'دراسة مقارنة لأنظمة التربية التقليدية والحديثة في المناطق الجافة في الجزائر', journal: 'Animal Production Science', year: 2023, doi: '10.xxxx/aps.2023.004' },
  { title: 'يرقات ذبابة الجندي الأسود كمصدر بروتين بديل في تغذية الدواجن: مراجعة', journal: 'Journal of Insects as Food and Feed', year: 2025, doi: '10.xxxx/jiff.2025.005' },
  { title: 'تأثير الإجهاد الحراري على المعايير التناسلية في الكباش: تحليل تلوي', journal: 'Small Ruminant Research', year: 2024, doi: '10.xxxx/srr.2024.006' },
  { title: 'أدوات الزراعة الدقيقة لإدارة الثروة الحيوانية في البيئات الجافة', journal: 'Computers and Electronics in Agriculture', year: 2025, doi: '10.xxxx/comag.2025.007' },
  { title: 'أنظمة الزراعة المائية والأكوابونيك للإنتاج الغذائي المستدام في مناطق الصحراء', journal: 'Agricultural Systems', year: 2023, doi: '10.xxxx/agsy.2023.008' },
];

const speaking = [
  { conference: 'ESNA — الجمعية الأوروبية للطرق الحديثة في البحث الزراعي', location: 'تونس، تونس', year: 2024, paper: 'تقييم جودة السائل المنوي في الكباش: دراسة مقارنة بين الطرق التقليدية والرقمية' },
  { conference: 'ICABRD — المؤتمر الدولي لتربية الحيوان والتطور التناسلي', location: 'الجزائر العاصمة، الجزائر', year: 2024, paper: 'تحسين الأداء التناسلي للسلالات البقرية المحلية من خلال الإدارة الغذائية' },
  { conference: 'ICARP — المؤتمر الدولي للإنتاج في المناطق الجافة', location: 'مراكش، المغرب', year: 2025, paper: 'الأدوات الرقمية للزراعة الدقيقة للثروة الحيوانية في البيئات الجافة' },
  { conference: 'SOS — مؤتمر استدامة النظم الزراعية الصحراوية', location: 'ورقلة، الجزائر', year: 2023, paper: 'نظم الإنتاج الحيواني المستدامة في الصحراء الجزائرية' },
  { conference: 'ChAAB — تحديات تربية الحيوان في المناطق الجافة وشبه الجافة', location: 'بسكرة، الجزائر', year: 2024, paper: 'استراتيجيات التربية لتحسين الكفاءة التناسلية تحت ظروف الإجهاد الحراري' },
  { conference: 'ISAEA — الندوة الدولية للزراعة في البيئات الجافة', location: 'الوادي، الجزائر', year: 2026, paper: 'تطبيقات الذكاء الاصطناعي وإنترنت الأشياء في الزراعة في المناطق الجافة: الفرص والتحديات' },
];

/**
 * Render projects grid with optional category filter
 */
function renderProjects(filter = 'all') {
  const grid = document.getElementById('projectGrid');
  grid.innerHTML = '';
  const filtered = filter === 'all' ? projects : projects.filter(p => p.cat === filter);
  filtered.forEach((p, i) => {
    const catLabels = { app: 'تطبيق', research: 'بحث', training: 'تدريب', business: 'ريادة أعمال' };
    const card = document.createElement('div');
    card.className = 'glass-card rounded-2xl overflow-hidden anim-in';
    card.style.animationDelay = `${i * 0.1}s`;
    card.style.opacity = '0';
    card.innerHTML = `
      <div class="h-36 flex items-center justify-center text-5xl" style="background:linear-gradient(135deg,rgba(34,211,238,0.1),rgba(6,182,212,0.03));">${p.icon}</div>
      <div class="p-5">
        <span class="text-cyan-400 text-xs font-semibold">${catLabels[p.cat]}</span>
        <h3 class="text-white font-bold mt-2 mb-2">${p.name}</h3>
        <p class="text-gray-400 text-sm mb-4">${p.desc}</p>
        <a href="${p.link}" class="text-cyan-400 text-sm font-semibold hover:text-cyan-300 flex items-center gap-1">عرض التفاصيل <i data-lucide="arrow-left" style="width:14px;height:14px"></i></a>
      </div>
    `;
    grid.appendChild(card);
  });
  lucide.createIcons();
}

/**
 * Filter projects by category and update button styles
 * @param {string} cat - Category to filter by
 */
function filterProjects(cat) {
  document.querySelectorAll('.filter-btn').forEach(btn => {
    if (btn.dataset.filter === cat) {
      btn.className = 'filter-btn px-5 py-2 rounded-lg text-sm font-semibold btn-primary text-white';
    } else {
      btn.className = 'filter-btn px-5 py-2 rounded-lg text-sm font-semibold btn-outline text-gray-400';
    }
  });
  renderProjects(cat);
}

// Render testimonials
/**
 * Render testimonials carousel
 */
function renderTestimonials() {
  const container = document.getElementById('testimonialsContainer');
  container.innerHTML = '';
  testimonials.forEach((t, i) => {
    const stars = '⭐'.repeat(t.rating);
    const card = document.createElement('div');
    card.className = 'testimonial-card glass-card rounded-2xl p-6 flex-shrink-0';
    card.innerHTML = `
      <div class="flex gap-1 mb-3">${stars}</div>
      <p class="text-gray-300 text-sm mb-4 leading-relaxed">"${t.text}"</p>
      <div class="flex items-center gap-3 border-t border-gray-800 pt-4">
        <div class="w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold text-white" style="background:linear-gradient(135deg,var(--color-start),var(--color-end));">
          ${t.initials}
        </div>
        <div>
          <div class="text-white text-sm font-semibold">${t.author}</div>
          <div class="text-gray-500 text-xs">${t.role}</div>
        </div>
      </div>
    `;
    const [start, end] = t.color === 'from-amber-500 to-amber-600' 
      ? ['#f59e0b', '#d97706']
      : ['#06b6d4', '#0891b2'];
    card.style.setProperty('--color-start', start);
    card.style.setProperty('--color-end', end);
    container.appendChild(card);
  });
}



/**
 * Render portfolio gallery with filtering
 * @param {string} filter - Category filter
 */
function renderGallery(filter = 'all') {
  const grid = document.getElementById('galleryGrid');
  grid.innerHTML = '';
  const filtered = filter === 'all' ? galleryItems : galleryItems.filter(item => item.cat === filter);
  
  filtered.forEach((item, i) => {
    const card = document.createElement('div');
    card.className = 'glass-card rounded-2xl overflow-hidden cursor-pointer hover:scale-105 transition-transform anim-in';
    card.style.animationDelay = `${i * 0.1}s`;
    card.style.opacity = '0';
    card.innerHTML = `
      <div class="h-40 flex items-center justify-center text-6xl relative overflow-hidden" style="background:linear-gradient(135deg,rgba(34,211,238,0.1),rgba(6,182,212,0.03));">
        <div class="absolute inset-0 flex items-center justify-center text-5xl hover:scale-110 transition-transform">${item.image}</div>
      </div>
      <div class="p-4">
        <span class="text-cyan-400 text-xs font-semibold">${item.cat.toUpperCase()}</span>
        <h3 class="text-white font-bold mt-2 mb-1">${item.title}</h3>
        <p class="text-gray-400 text-sm">${item.desc}</p>
      </div>
    `;
    grid.appendChild(card);
  });
}

/**
 * Filter gallery by category
 */
function filterGallery(cat) {
  document.querySelectorAll('.gallery-filter-btn').forEach(btn => {
    if (btn.dataset.filter === cat) {
      btn.className = 'gallery-filter-btn px-5 py-2 rounded-lg text-sm font-semibold btn-primary text-white';
    } else {
      btn.className = 'gallery-filter-btn px-5 py-2 rounded-lg text-sm font-semibold btn-outline text-gray-400';
    }
  });
  renderGallery(cat);
}

/**
 * Render case studies
 */
function renderCaseStudies() {
  const container = document.getElementById('caseStudiesContainer');
  container.innerHTML = '';
  
  caseStudies.forEach((study, i) => {
    const card = document.createElement('div');
    card.className = 'glass-card rounded-2xl p-8 border-l-4 border-cyan-400 hover:border-cyan-300 transition-all anim-in';
    card.style.animationDelay = `${i * 0.2}s`;
    card.style.opacity = '0';
    card.innerHTML = `
      <div class="flex items-start justify-between mb-4">
        <div>
          <h3 class="text-white font-bold text-2xl">${study.title}</h3>
          <p class="text-cyan-400 text-sm mt-1">${study.subtitle}</p>
        </div>
        <span class="text-3xl">${study.impact.split(' ')[0]}</span>
      </div>
      <div class="space-y-4">
        <div>
          <p class="text-gray-400 text-sm"><strong>التحدي:</strong> ${study.challenge}</p>
        </div>
        <div>
          <p class="text-gray-400 text-sm"><strong>الحل:</strong> ${study.solution}</p>
        </div>
        <div>
          <p class="text-cyan-400 text-sm font-semibold">النتائج: ${study.results}</p>
        </div>
        <div class="flex flex-wrap gap-2 pt-2">
          ${study.tags.map(tag => `<span class="px-3 py-1 rounded-full bg-gradient-cyan-light text-white text-xs font-semibold">${tag}</span>`).join('')}
        </div>
      </div>
    `;
    container.appendChild(card);
  });
}

/**
 * Render FAQ items with accordion functionality
 */
function renderFAQ() {
  const container = document.getElementById('faqContainer');
  container.innerHTML = '';
  
  faqItems.forEach((item, i) => {
    const card = document.createElement('div');
    card.className = 'glass-card rounded-2xl p-6 anim-in';
    card.style.animationDelay = `${i * 0.1}s`;
    card.style.opacity = '0';
    card.innerHTML = `
      <button onclick="toggleFAQ(${i})" class="w-full flex items-center justify-between text-right hover:text-cyan-400 transition-colors">
        <i data-lucide="chevron-down" class="faq-icon-${i} transition-transform" style="width:20px;height:20px;margin-left:1rem;"></i>
        <h3 class="text-white font-semibold flex-1">${item.question}</h3>
      </button>
      <div id="faq-answer-${i}" class="faq-answer hidden mt-4 pt-4 border-t border-gray-800">
        <p class="text-gray-400 text-sm leading-relaxed">${item.answer}</p>
      </div>
    `;
    container.appendChild(card);
  });
  lucide.createIcons();
}

/**
 * Toggle FAQ answer visibility
 */
function toggleFAQ(index) {
  const answer = document.getElementById(`faq-answer-${index}`);
  const icon = document.querySelector(`.faq-icon-${index}`);
  
  answer.classList.toggle('hidden');
  if (icon) {
    icon.style.transform = answer.classList.contains('hidden') ? 'rotate(0deg)' : 'rotate(-180deg)';
  }
}

// ===== Knowledge Hub =====
function switchKnowledgeTab(tab) {
  document.querySelectorAll('.knowledge-tab-btn').forEach(btn => {
    if (btn.dataset.tab === tab) {
      btn.className = 'knowledge-tab-btn px-5 py-2 rounded-lg text-sm font-semibold btn-primary text-white';
    } else {
      btn.className = 'knowledge-tab-btn px-5 py-2 rounded-lg text-sm font-semibold btn-outline text-gray-400';
    }
  });
  const container = document.getElementById('knowledgeContent');
  container.innerHTML = '';
  if (tab === 'thoughts') renderThoughts(container);
  else if (tab === 'publications') renderPublications(container);
  else if (tab === 'speaking') renderSpeaking(container);
  lucide.createIcons();
}

function renderThoughts(container) {
  container.innerHTML = `
    <div class="flex flex-wrap justify-center gap-4 mb-10">
      <a href="https://www.facebook.com/abdelkader.atia" target="_blank" rel="noopener noreferrer" class="btn-outline text-cyan-400 px-5 py-3 rounded-xl text-sm font-semibold flex items-center gap-2 hover:bg-cyan-500/10 transition">
        <i data-lucide="facebook" style="width:16px;height:16px"></i> تابعني على فيسبوك
      </a>
      <a href="https://www.linkedin.com/in/abdelkader-atia/" target="_blank" rel="noopener noreferrer" class="btn-outline text-cyan-400 px-5 py-3 rounded-xl text-sm font-semibold flex items-center gap-2 hover:bg-cyan-500/10 transition">
        <i data-lucide="linkedin" style="width:16px;height:16px"></i> تابعني على لينكد إن
      </a>
    </div>
    <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-6" id="thoughtsGrid"></div>
  `;
  const grid = document.getElementById('thoughtsGrid');
  thoughts.forEach((t, i) => {
    const platformColor = t.platform === 'facebook' ? '#1877F2' : '#0A66C2';
    const platformIcon = t.platform === 'facebook' ? 'facebook' : 'linkedin';
    const card = document.createElement('div');
    card.className = 'glass-card rounded-2xl p-6 anim-in';
    card.style.animationDelay = `${i * 0.1}s`;
    card.style.opacity = '0';
    card.innerHTML = `
      <div class="flex items-center gap-2 mb-3">
        <span style="color:${platformColor}"><i data-lucide="${platformIcon}" style="width:16px;height:16px"></i></span>
        <span class="text-xs font-semibold" style="color:${platformColor}">${t.platform === 'facebook' ? 'Facebook' : 'LinkedIn'}</span>
        <span class="text-xs text-gray-600 ml-auto">${t.date}</span>
      </div>
      <p class="text-gray-300 text-sm leading-relaxed mb-4">"${t.text}"</p>
      <a href="${t.link}" target="_blank" rel="noopener noreferrer" class="text-cyan-400 text-xs font-semibold flex items-center gap-1 hover:text-cyan-300 transition-colors">
        اقرأ المزيد <i data-lucide="external-link" style="width:12px;height:12px"></i>
      </a>
    `;
    grid.appendChild(card);
  });
}

function renderPublications(container) {
  container.innerHTML = `<div class="space-y-4" id="pubsList"></div>`;
  const list = document.getElementById('pubsList');
  publications.forEach((p, i) => {
    const card = document.createElement('div');
    card.className = 'glass-card rounded-2xl p-6 anim-in';
    card.style.animationDelay = `${i * 0.1}s`;
    card.style.opacity = '0';
    card.innerHTML = `
      <div class="flex items-start gap-4">
        <div class="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 text-lg" style="background:rgba(34,211,238,0.1);">📄</div>
        <div class="flex-1 min-w-0">
          <h3 class="text-white font-semibold text-sm leading-snug mb-1">${p.title}</h3>
          <p class="text-gray-500 text-xs mb-2">${p.journal} · ${p.year}</p>
          <a href="https://doi.org/${p.doi}" target="_blank" rel="noopener noreferrer" class="inline-flex items-center gap-1 text-cyan-400 text-xs font-medium hover:text-cyan-300 transition-colors">
            <i data-lucide="external-link" style="width:12px;height:12px"></i> DOI: ${p.doi}
          </a>
        </div>
        <span class="text-xs font-bold text-cyan-400 flex-shrink-0">${p.year}</span>
      </div>
    `;
    list.appendChild(card);
  });
}

function renderSpeaking(container) {
  container.innerHTML = `<div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-6" id="speakingGrid"></div>`;
  const grid = document.getElementById('speakingGrid');
  speaking.forEach((s, i) => {
    const card = document.createElement('div');
    card.className = 'glass-card rounded-2xl p-6 anim-in';
    card.style.animationDelay = `${i * 0.1}s`;
    card.style.opacity = '0';
    card.innerHTML = `
      <div class="flex items-center gap-3 mb-3">
        <div class="w-10 h-10 rounded-lg flex items-center justify-center text-lg" style="background:rgba(251,191,36,0.1);">🎤</div>
        <div>
          <h3 class="text-white font-semibold text-sm leading-tight">${s.conference}</h3>
          <div class="flex items-center gap-2 mt-1">
            <span class="text-xs text-gray-500 flex items-center gap-1"><i data-lucide="map-pin" style="width:10px;height:10px"></i> ${s.location}</span>
            <span class="text-xs font-bold text-gold-400">${s.year}</span>
          </div>
        </div>
      </div>
      <div class="pl-13">
        <p class="text-gray-400 text-sm leading-relaxed">${s.paper}</p>
      </div>
    `;
    grid.appendChild(card);
  });
}

// Mobile menu
/**
 * Toggle mobile menu visibility
 */
function toggleMobile() {
  document.getElementById('mobileMenu').classList.toggle('open');
}

// Navbar scroll effect and active link
let lastScroll = 0;
document.getElementById('app-body').addEventListener('scroll', function() {
  const nav = document.getElementById('navbar');
  const scrollTop = this.scrollTop;
  if (scrollTop > 80) {
    const isLight = document.body.classList.contains('light-theme');
    nav.style.background = isLight ? 'rgba(248,249,250,0.95)' : 'rgba(10, 14, 39, 0.95)';
    nav.style.backdropFilter = 'blur(16px)';
    nav.style.borderBottom = '1px solid rgba(34,211,238,0.08)';
  } else {
    nav.style.background = 'transparent';
    nav.style.backdropFilter = 'none';
    nav.style.borderBottom = 'none';
  }
  // Update active nav links
  updateActiveNavLink(scrollTop);
  lastScroll = scrollTop;
});

/**
 * Update active navigation link based on scroll position
 * @param {number} scrollTop - Current scroll position
 */
function updateActiveNavLink(scrollTop) {
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-link');
  
  sections.forEach(section => {
    const top = section.offsetTop - 100;
    const height = section.offsetHeight;
    
    if (scrollTop >= top && scrollTop < top + height) {
      navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${section.id}`) {
          link.classList.add('active');
        }
      });
    }
  });
}

// Animate progress bars on scroll
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.querySelectorAll('.progress-fill').forEach(bar => {
        bar.style.width = bar.dataset.width;
      });
    }
  });
}, { threshold: 0.3 });
document.getElementById('skills') && observer.observe(document.getElementById('skills'));

// Contact form
/**
 * Handle contact form submission
 * @param {Event} e - Form submit event
 */
function handleContact(e) {
  e.preventDefault();
  const form = document.getElementById('contactForm');
  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const subject = document.getElementById('subject').value;
  const message = document.getElementById('message').value.trim();
  const success = document.getElementById('formSuccess');
  const submitBtn = form.querySelector('button[type="submit"]');
  const originalBtnText = submitBtn.innerHTML;
  
  // Validation
  if (!name || !email || !subject || !message) {
    showToast('⚠️ يرجى ملء جميع الحقول المطلوبة', 'warning');
    return;
  }
  
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    showToast('⚠️ البريد الإلكتروني غير صحيح', 'warning');
    return;
  }
  
  // Show loading state
  submitBtn.disabled = true;
  submitBtn.innerHTML = '<span>جاري الإرسال...</span>';
  
  // Send via Formspree with mailto fallback
  fetch('https://formspree.io/f/ada15_agro@', {
    method: 'POST',
    body: JSON.stringify({ name, email, subject, message }),
    headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' }
  })
  .then(response => {
    if (response.ok) {
      success.classList.remove('hidden');
      form.reset();
      setTimeout(() => success.classList.add('hidden'), 4000);
      showToast('✅ تم إرسال الرسالة بنجاح! سأتواصل معك قريباً.', 'success');
    } else {
      throw new Error('Formspree error');
    }
  })
  .catch(() => {
    // Fallback to mailto
    const mailtoLink = `mailto:atia.abdelkader@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(`الاسم: ${name}\nالبريد: ${email}\n\n${message}`)}`;
    window.location.href = mailtoLink;
    success.classList.remove('hidden');
    form.reset();
    setTimeout(() => success.classList.add('hidden'), 4000);
    showToast('📧 جاري فتح تطبيق البريد...', 'success');
  })
  .finally(() => {
    submitBtn.disabled = false;
    submitBtn.innerHTML = originalBtnText;
  });
}

/**
 * Display toast notification message
 * @param {string} message - Message to display
 * @param {string} type - Toast type ('info', 'warning', 'success')
 */
function showToast(message, type = 'info') {
  const toast = document.createElement('div');
  const bgColor = type === 'warning' ? 'from-amber-500 to-amber-600' : 'from-cyan-500 to-cyan-600';
  toast.className = `fixed top-24 left-1/2 -translate-x-1/2 z-50 glass px-6 py-3 rounded-xl text-white text-sm font-semibold bg-gradient-to-r ${bgColor}`;
  toast.textContent = message;
  document.body.appendChild(toast);
  setTimeout(() => toast.remove(), 3000);
}

// Newsletter subscription
/**
 * Handle newsletter subscription
 */
function subscribeNewsletter() {
  const email = document.getElementById('newsletterEmail').value.trim();
  
  if (!email) {
    showToast('⚠️ الرجاء إدخال بريدك الإلكتروني', 'warning');
    return;
  }
  
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    showToast('⚠️ البريد الإلكتروني غير صحيح', 'warning');
    return;
  }
  
  // Save subscription to localStorage
  const subscriptions = JSON.parse(localStorage.getItem('newsletter_subscriptions') || '[]');
  if (subscriptions.find(s => s.email === email)) {
    showToast('⚠️ هذا البريد مسجل مسبقاً في النشرة', 'warning');
    return;
  }
  subscriptions.push({ email, subscribedAt: new Date().toISOString() });
  localStorage.setItem('newsletter_subscriptions', JSON.stringify(subscriptions));
  localStorage.setItem('newsletter_count', subscriptions.length);
  
  showToast('✅ شكرًا! تم اشتراكك بنجاح في النشرة البريدية', 'success');
  document.getElementById('newsletterEmail').value = '';
  if (window.analyticsTracker) {
    window.analyticsTracker.trackEvent('newsletter_subscribe', { email });
  }
}

/**
 * Render blog articles grid
 */
function renderBlog() {
  const grid = document.getElementById('blogGrid');
  if (!grid) return;
  grid.innerHTML = '';
  blogArticles.forEach((article, i) => {
    const card = document.createElement('div');
    card.className = 'glass-card rounded-2xl overflow-hidden hover:scale-105 transition-transform anim-in';
    card.style.animationDelay = `${i * 0.1}s`;
    card.style.opacity = '0';
    const bgGrad = i % 2 === 0
      ? 'linear-gradient(135deg,rgba(34,211,238,0.15),rgba(6,182,212,0.05))'
      : 'linear-gradient(135deg,rgba(251,191,36,0.15),rgba(245,158,11,0.05))';
    card.innerHTML = `
      <div class="h-40 flex items-center justify-center text-5xl" style="background:${bgGrad};">${article.icon}</div>
      <div class="p-6">
        <span class="${i % 2 === 0 ? 'text-cyan-400' : 'text-gold-400'} text-xs font-semibold">${article.category}</span>
        <h3 class="text-white font-bold mt-2 mb-2">${article.title}</h3>
        <p class="text-gray-400 text-sm mb-4">${article.summary}</p>
        <div class="flex items-center justify-between">
          <span class="text-gray-500 text-xs">${article.date} · ${article.readTime}</span>
          <button onclick="openArticle(${article.id})" class="text-cyan-400 text-sm font-semibold hover:text-cyan-300 flex items-center gap-1">اقرأ المزيد <i data-lucide="arrow-left" style="width:14px;height:14px"></i></button>
        </div>
      </div>
    `;
    grid.appendChild(card);
  });
  lucide.createIcons();
}

/**
 * Open article in a modal overlay
 */
function openArticle(id) {
  const article = blogArticles.find(a => a.id === id);
  if (!article) return;
  const overlay = document.getElementById('articleModal');
  if (!overlay) return;
  document.getElementById('articleContent').innerHTML = `
    <span class="${id % 2 === 0 ? 'text-gold-400' : 'text-cyan-400'} text-xs font-semibold">${article.category}</span>
    <h3 class="text-2xl font-800 text-white mt-2 mb-2">${article.title}</h3>
    <div class="flex items-center gap-3 text-gray-500 text-xs mb-6">
      <span>${article.date}</span>
      <span>·</span>
      <span>${article.readTime}</span>
    </div>
    <div class="text-6xl mb-6 text-center">${article.icon}</div>
    <div class="text-gray-300 text-sm leading-relaxed space-y-4" style="white-space:pre-line">${article.content}</div>
  `;
  overlay.classList.remove('hidden');
  document.body.style.overflow = 'hidden';
}

/**
 * Close article modal
 */
function closeArticle() {
  const overlay = document.getElementById('articleModal');
  if (overlay) {
    overlay.classList.add('hidden');
    document.body.style.overflow = '';
  }
}

// Close modal on overlay click
document.addEventListener('DOMContentLoaded', () => {
  const overlay = document.getElementById('articleModal');
  if (overlay) {
    overlay.addEventListener('click', (e) => {
      if (e.target === overlay) closeArticle();
    });
  }
  // Close on Escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeArticle();
  });
});

// Download CV
/**
 * Download CV PDF file
 */
function downloadCV() {
  const cvUrl = 'CV_AbdelkaderAtia.pdf';
  
  // Check if file exists before attempting download
  fetch(cvUrl, { method: 'HEAD' }).then(response => {
    if (response.ok) {
      const link = document.createElement('a');
      link.href = cvUrl;
      link.download = 'CV_AbdelkaderAtia.pdf';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      showToast('✅ جاري تحميل السيرة الذاتية...', 'success');
    } else {
      showToast('📄 السيرة الذاتية غير متوفرة حاليًا', 'warning');
    }
  }).catch(() => {
    showToast('📄 السيرة الذاتية غير متوفرة حاليًا', 'warning');
  });
}

// Init projects
renderProjects();
renderTestimonials();
renderGallery();
renderCaseStudies();
renderFAQ();
renderBlog();
switchKnowledgeTab('thoughts');

// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) target.scrollIntoView({ behavior: 'smooth' });
  });
});

// Theme toggle (per-language)
let isDarkMode = true;
function getThemeKey() {
  const lang = document.documentElement.lang || 'ar';
  return `theme_${lang}`;
}
function toggleTheme() {
  isDarkMode = !isDarkMode;
  const body = document.body;
  const icon = document.getElementById('themeIcon');
  
  if (isDarkMode) {
    body.classList.remove('light-theme');
    icon.setAttribute('data-lucide', 'moon');
  } else {
    body.classList.add('light-theme');
    icon.setAttribute('data-lucide', 'sun');
  }
  
  localStorage.setItem(getThemeKey(), isDarkMode ? 'dark' : 'light');
  lucide.createIcons();
}

window.addEventListener('load', () => {
  const savedTheme = localStorage.getItem(getThemeKey());
  if (savedTheme === 'light') {
    isDarkMode = true;
    toggleTheme();
  }
});

// Keyboard navigation & shortcuts
document.addEventListener('keydown', (e) => {
  const tag = document.activeElement?.tagName;
  const isInput = tag === 'INPUT' || tag === 'TEXTAREA' || tag === 'SELECT';
  
  // Escape: إغلاق جميع النوافذ المنبثقة
  if (e.key === 'Escape') {
    const menu = document.getElementById('mobileMenu');
    if (menu.classList.contains('open')) { toggleMobile(); return; }
    const search = document.getElementById('searchModal');
    if (!search?.classList.contains('hidden')) { closeSearch(); return; }
    const article = document.getElementById('articleModal');
    if (!article?.classList.contains('hidden')) { closeArticle(); return; }
  }
  
  // Scroll to top with Ctrl+Home or Cmd+Home
  if ((e.ctrlKey || e.metaKey) && e.key === 'Home') {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
  
  // تخطي الاختصارات عند الكتابة في الحقول
  if (isInput) return;
  
  // / or Ctrl+K: فتح البحث
  if (e.key === '/' || ((e.ctrlKey || e.metaKey) && e.key === 'k')) {
    e.preventDefault();
    openSearch();
  }
  
  // t: تبديل المظهر
  if (e.key === 't' && !e.ctrlKey && !e.metaKey) { toggleTheme(); }
  // b: التمرير إلى المقالات
  if (e.key === 'b' && !e.ctrlKey && !e.metaKey) {
    e.preventDefault();
    const el = document.getElementById('blogGrid');
    if (el) el.closest('section')?.scrollIntoView({ behavior: 'smooth' });
  }
  // p: التمرير إلى المشاريع
  if (e.key === 'p' && !e.ctrlKey && !e.metaKey) {
    e.preventDefault();
    const el = document.getElementById('projectGrid');
    if (el) el.closest('section')?.scrollIntoView({ behavior: 'smooth' });
  }
  // c: تبديل الدردشة
  if (e.key === 'c' && !e.ctrlKey && !e.metaKey) {
    const chat = document.querySelector('.chatbot-toggle-btn');
    if (chat) chat.click();
  }
});

// Language switcher - Load different version
/**
 * Switch language and redirect to appropriate page
 * @param {string} lang - Language code ('ar' or 'en')
 */
function setLanguage(lang) {
  localStorage.setItem('language', lang);
  
  if (lang === 'ar') {
    window.location.href = 'index.html';
  } else if (lang === 'fr') {
    window.location.href = 'index-fr.html';
  } else {
    window.location.href = 'index-en.html';
  }
}

// Check saved language on load
window.addEventListener('DOMContentLoaded', () => {
  const savedLang = localStorage.getItem('language') || 'ar';
  const arBtn = document.getElementById('langAr');
  const enBtn = document.getElementById('langEn');
  const frBtn = document.getElementById('langFr');
  
  if (savedLang === 'ar') {
    if (arBtn) arBtn.style.background = 'rgba(34,211,238,0.2)';
    if (frBtn) frBtn.style.background = 'transparent';
    if (enBtn) enBtn.style.background = 'transparent';
  } else if (savedLang === 'fr') {
    if (frBtn) frBtn.style.background = 'rgba(34,211,238,0.2)';
    if (arBtn) arBtn.style.background = 'transparent';
    if (enBtn) enBtn.style.background = 'transparent';
  } else {
    if (enBtn) enBtn.style.background = 'rgba(34,211,238,0.2)';
    if (frBtn) frBtn.style.background = 'transparent';
    if (arBtn) arBtn.style.background = 'transparent';
  }
});

// Reading Progress Bar
function initProgressBar() {
  const bar = document.getElementById('readingProgress');
  if (!bar) return;
  document.getElementById('app-body').addEventListener('scroll', () => {
    const scrollTop = document.getElementById('app-body').scrollTop;
    const scrollHeight = document.getElementById('app-body').scrollHeight - window.innerHeight;
    const progress = scrollHeight > 0 ? (scrollTop / scrollHeight) * 100 : 0;
    bar.style.width = Math.min(progress, 100) + '%';
  });
}

// Cookie Consent
function acceptCookies() {
  localStorage.setItem('cookie_consent', 'accepted');
  document.getElementById('cookieBanner').classList.remove('show');
}
function declineCookies() {
  localStorage.setItem('cookie_consent', 'declined');
  document.getElementById('cookieBanner').classList.remove('show');
}
function initCookieBanner() {
  const consent = localStorage.getItem('cookie_consent');
  if (!consent) {
    setTimeout(() => document.getElementById('cookieBanner')?.classList.add('show'), 500);
  }
}

// Search Modal
let searchIndex = [];
function buildSearchIndex() {
  searchIndex = [];
  projects.forEach(p => searchIndex.push({
    type: 'مشروع', title: p.name, desc: p.desc, url: '#projects', icon: p.icon, tags: [p.cat]
  }));
  blogArticles.forEach(a => searchIndex.push({
    type: 'مقال', title: a.title, desc: a.summary, url: '#', icon: a.icon, tags: [a.category], action: `openArticle(${a.id})`
  }));
  faqItems.forEach((f, i) => searchIndex.push({
    type: 'سؤال شائع', title: f.question, desc: f.answer.slice(0, 120) + '...', url: '#faq', icon: '❓'
  }));
  const skillNames = ['تحليل البيانات', 'تصميم التجارب', 'الكتابة العلمية', 'R / Excel / Power BI', 'تطوير التطبيقات', 'تصور البيانات', 'الإنتاج الحيواني', 'التربية والانتخاب', 'تغذية الحيوان', 'مدرب FBS', 'تصميم البرامج', 'التواصل'];
  skillNames.forEach(s => searchIndex.push({
    type: 'مهارة', title: s, desc: 'مهارة احترافية', url: '#skills', icon: '⚡'
  }));
}
function openSearch() {
  const modal = document.getElementById('searchModal');
  if (!modal) return;
  if (searchIndex.length === 0) buildSearchIndex();
  modal.classList.remove('hidden');
  document.body.style.overflow = 'hidden';
  setTimeout(() => {
    const input = document.getElementById('searchInput');
    input.value = ''; input.focus();
    renderSearchResults('');
  }, 100);
}
function closeSearch() {
  const modal = document.getElementById('searchModal');
  if (modal) { modal.classList.add('hidden'); document.body.style.overflow = ''; }
}
function renderSearchResults(query) {
  const container = document.getElementById('searchResults');
  const q = query.toLowerCase().trim();
  let results = q ? searchIndex.filter(item =>
    item.title.toLowerCase().includes(q) || item.desc.toLowerCase().includes(q) ||
    item.tags?.some(t => t.toLowerCase().includes(q))
  ) : searchIndex;
  results = results.slice(0, 12);
  if (!results.length) {
    container.innerHTML = '<div class="p-6 text-center text-gray-500 text-sm">لا توجد نتائج</div>';
    return;
  }
  container.innerHTML = results.map((item, i) => `
    <button onclick="navigateSearchResult(${i})" class="search-result-item w-full flex items-center gap-3 p-3 rounded-xl hover:bg-gray-800/50 transition text-right ${i === 0 ? 'search-highlight' : ''}"
      data-index="${i}" onmouseenter="highlightSearchItem(${i})">
      <span class="text-xl flex-shrink-0">${item.icon}</span>
      <div class="flex-1 min-w-0">
        <div class="text-white text-sm font-semibold truncate">${highlightMatch(item.title, q)}</div>
        <div class="text-gray-500 text-xs truncate">${item.type} · ${highlightMatch(item.desc.slice(0, 80), q)}</div>
      </div>
      <span class="text-gray-600 text-xs flex-shrink-0">${item.type}</span>
    </button>
  `).join('');
  container.dataset.results = JSON.stringify(results);
}
function highlightMatch(text, query) {
  if (!query) return text;
  const idx = text.toLowerCase().indexOf(query);
  if (idx === -1) return text;
  return text.slice(0, idx) + '<strong class="text-cyan-400">' + text.slice(idx, idx + query.length) + '</strong>' + text.slice(idx + query.length);
}
let searchSelectedIndex = 0;
function highlightSearchItem(idx) { searchSelectedIndex = idx; }
function navigateSearchResult(idx) {
  const results = JSON.parse(document.getElementById('searchResults').dataset.results || '[]');
  const item = results[idx];
  if (!item) return;
  closeSearch();
  if (item.action) { eval(item.action); }
  else if (item.url && item.url !== '#') { document.querySelector(item.url)?.scrollIntoView({ behavior: 'smooth' }); }
}
function initSearch() {
  buildSearchIndex();
  const input = document.getElementById('searchInput');
  if (!input) return;
  input.addEventListener('input', (e) => renderSearchResults(e.target.value));
  input.addEventListener('keydown', (e) => {
    const items = document.querySelectorAll('.search-result-item');
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      searchSelectedIndex = Math.min(searchSelectedIndex + 1, items.length - 1);
      items.forEach((el, i) => el.classList.toggle('search-highlight', i === searchSelectedIndex));
      items[searchSelectedIndex]?.scrollIntoView({ block: 'nearest' });
    }
    if (e.key === 'ArrowUp') {
      e.preventDefault();
      searchSelectedIndex = Math.max(searchSelectedIndex - 1, 0);
      items.forEach((el, i) => el.classList.toggle('search-highlight', i === searchSelectedIndex));
      items[searchSelectedIndex]?.scrollIntoView({ block: 'nearest' });
    }
    if (e.key === 'Enter') { e.preventDefault(); navigateSearchResult(searchSelectedIndex); }
  });
}

// Scroll Progress Ring
function initScrollProgress() {
  const ring = document.getElementById('scrollProgress');
  const circle = ring?.querySelector('.fg-circle');
  if (!circle) return;
  const circumference = 2 * Math.PI * 18;
  circle.style.strokeDasharray = circumference;
  circle.style.strokeDashoffset = circumference;
  
  document.getElementById('app-body').addEventListener('scroll', () => {
    const scrollTop = document.getElementById('app-body').scrollTop;
    const scrollHeight = document.getElementById('app-body').scrollHeight - window.innerHeight;
    const progress = scrollHeight > 0 ? scrollTop / scrollHeight : 0;
    circle.style.strokeDashoffset = circumference - progress * circumference;
    ring.classList.toggle('visible', scrollTop > 200);
  });
  lucide.createIcons();
}

// Network Status Dot
function initNetworkStatus() {
  const dot = document.getElementById('networkDot');
  if (!dot) return;
  const update = () => {
    const online = navigator.onLine;
    const dotEl = dot.querySelector('.dot');
    const text = dot.querySelector('.status-text');
    dotEl.className = `dot ${online ? 'online' : 'offline'}`;
    text.textContent = online ? 'متصل' : 'غير متصل';
  };
  window.addEventListener('online', update);
  window.addEventListener('offline', update);
  update();
}

// Offline Indicator Toast
function initOfflineIndicator() {
  const toast = document.getElementById('offlineToast');
  if (!toast) return;
  window.addEventListener('offline', () => toast.classList.add('show'));
  window.addEventListener('online', () => toast.classList.remove('show'));
  if (!navigator.onLine) toast.classList.add('show');
}

// Email Obfuscation
function revealEmail(el) {
  const user = el.dataset.user;
  const domain = el.dataset.domain;
  const tld = el.dataset.tld;
  const email = `${user}@${domain}.${tld}`;
  el.innerHTML = `<a href="mailto:${email}" class="hover:text-cyan-400 transition-colors">${email}</a>`;
  el.style.cursor = 'default';
  el.onclick = null;
  el.style.textDecoration = 'none';
}

// Element SDK
const defaultConfig = {
  hero_title: 'تحويل المعرفة الزراعية إلى أثر حقيقي',
  hero_subtitle: 'باحث دكتوراه ومدرب ومبتكر في الزراعة الرقمية، أعمل على بناء جسور بين العلم والتطبيق لتطوير أنظمة زراعية أكثر ذكاءً وكفاءة.',
  about_title: 'من أنا',
  services_title: 'خدماتي',
  contact_email: 'contact@abdelkader-atia.com',
  background_color: '#0a0e27',
  surface_color: '#0f1538',
  text_color: '#e2e8f0',
  primary_action_color: '#06b6d4',
  secondary_action_color: '#f59e0b',
  font_family: 'Cairo',
  font_size: 16
};

async function initSDK() {
  if (!window.elementSdk) return;
  await window.elementSdk.init({
    defaultConfig,
    onConfigChange: async (config) => {
      const c = { ...defaultConfig, ...config };
      // Text
      const heroEl = document.getElementById('heroTitle');
      if (heroEl) heroEl.innerHTML = c.hero_title.replace(/(المعرفة الزراعية)/g, '<span class="gradient-text">$1</span>');
      const heroSub = document.getElementById('heroSubtitle');
      if (heroSub) heroSub.textContent = c.hero_subtitle;
      const aboutEl = document.getElementById('aboutTitle');
      if (aboutEl) aboutEl.textContent = c.about_title;
      const servEl = document.getElementById('servicesTitle');
      if (servEl) servEl.textContent = c.services_title;
      const emailEl = document.getElementById('contactEmail');
      if (emailEl) emailEl.textContent = c.contact_email;

      // Colors
      document.body.style.background = c.background_color;
      document.querySelectorAll('.glass-card').forEach(el => {
        el.style.background = c.surface_color + '80';
      });
      document.body.style.color = c.text_color;

      // Font
      const fontStack = `${c.font_family}, Cairo, sans-serif`;
      document.body.style.fontFamily = fontStack;

      // Font size
      const base = c.font_size;
      document.querySelectorAll('p').forEach(el => el.style.fontSize = `${base}px`);
      document.querySelectorAll('h2').forEach(el => el.style.fontSize = `${base * 2}px`);
      document.querySelectorAll('h3').forEach(el => el.style.fontSize = `${base * 1.15}px`);
    },
    mapToCapabilities: (config) => {
      const c = { ...defaultConfig, ...config };
      return {
        recolorables: [
          { get: () => c.background_color, set: (v) => { c.background_color = v; window.elementSdk.setConfig({ background_color: v }); } },
          { get: () => c.surface_color, set: (v) => { c.surface_color = v; window.elementSdk.setConfig({ surface_color: v }); } },
          { get: () => c.text_color, set: (v) => { c.text_color = v; window.elementSdk.setConfig({ text_color: v }); } },
          { get: () => c.primary_action_color, set: (v) => { c.primary_action_color = v; window.elementSdk.setConfig({ primary_action_color: v }); } },
          { get: () => c.secondary_action_color, set: (v) => { c.secondary_action_color = v; window.elementSdk.setConfig({ secondary_action_color: v }); } },
        ],
        borderables: [],
        fontEditable: {
          get: () => c.font_family,
          set: (v) => { c.font_family = v; window.elementSdk.setConfig({ font_family: v }); }
        },
        fontSizeable: {
          get: () => c.font_size,
          set: (v) => { c.font_size = v; window.elementSdk.setConfig({ font_size: v }); }
        }
      };
    },
    mapToEditPanelValues: (config) => {
      const c = { ...defaultConfig, ...config };
      return new Map([
        ['hero_title', c.hero_title],
        ['hero_subtitle', c.hero_subtitle],
        ['about_title', c.about_title],
        ['services_title', c.services_title],
        ['contact_email', c.contact_email],
      ]);
    }
  });
}
initSDK();

// Lucide
lucide.createIcons();

// Initialize AOS (Animate On Scroll)
document.addEventListener('DOMContentLoaded', () => {
  if (typeof AOS !== 'undefined') {
    AOS.init({
      duration: 800,
      easing: 'ease-in-out-cubic',
      once: true,
      offset: 120,
      disable: window.innerWidth < 768 ? 'phone' : false
    });
  }
  
  // Start counter animations
  startCounterAnimation();
  
  // Init lazy loading for images
  initLazyLoading();
  
  initProgressBar();
  initCookieBanner();
  initSearch();
  initScrollProgress();
  initNetworkStatus();
  initOfflineIndicator();
});

// Close search on overlay click
document.addEventListener('DOMContentLoaded', () => {
  const modal = document.getElementById('searchModal');
  if (modal) {
    modal.addEventListener('click', (e) => { if (e.target === modal) closeSearch(); });
  }
});

/**
 * Animated counter for statistics
 */
function startCounterAnimation() {
  const counters = document.querySelectorAll('.stat-number');
  
  const runCounters = () => {
    counters.forEach(counter => {
      const target = parseInt(counter.dataset.target);
      const increment = target / 50; // Animate in 50 steps
      let current = 0;
      
      const updateCounter = () => {
        current += increment;
        if (current < target) {
          counter.textContent = Math.ceil(current);
          requestAnimationFrame(updateCounter);
        } else {
          counter.textContent = target + (target >= 10 ? '+' : '');
        }
      };
      
      // Trigger animation when element is in view
      const observer = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && !counter.classList.contains('animated')) {
          counter.classList.add('animated');
          updateCounter();
          observer.unobserve(counter);
        }
      }, { threshold: 0.5 });
      
      observer.observe(counter);
    });
  };
  
  runCounters();
}

/**
 * Open social sharing modal
 */
function shareToSocial(text) {
  const url = encodeURIComponent(window.location.href);
  const shareText = encodeURIComponent(text || document.title);
  const modal = document.getElementById('shareModal');
  if (!modal) return;
  document.getElementById('shareUrl').value = window.location.href;
  document.getElementById('shareContent').innerHTML = `
    <button onclick="window.open('https://twitter.com/intent/tweet?text=${shareText}&url=${url}','_blank','width=600,height=400')"
      class="flex items-center gap-3 w-full p-4 rounded-xl hover:bg-gray-700 transition text-left">
      <span class="text-2xl">🐦</span><div><div class="text-white font-semibold">Twitter / X</div><div class="text-gray-400 text-xs">Share on Twitter</div></div>
    </button>
    <button onclick="window.open('https://www.linkedin.com/sharing/share-offsite/?url=${url}','_blank','width=600,height=400')"
      class="flex items-center gap-3 w-full p-4 rounded-xl hover:bg-gray-700 transition text-left">
      <span class="text-2xl">💼</span><div><div class="text-white font-semibold">LinkedIn</div><div class="text-gray-400 text-xs">Share on LinkedIn</div></div>
    </button>
    <button onclick="window.open('https://www.facebook.com/sharer/sharer.php?u=${url}','_blank','width=600,height=400')"
      class="flex items-center gap-3 w-full p-4 rounded-xl hover:bg-gray-700 transition text-left">
      <span class="text-2xl">📘</span><div><div class="text-white font-semibold">Facebook</div><div class="text-gray-400 text-xs">Share on Facebook</div></div>
    </button>
    <button onclick="navigator.clipboard.writeText(window.location.href).then(()=>{showToast('✅ تم نسخ الرابط','success');closeShareModal();})"
      class="flex items-center gap-3 w-full p-4 rounded-xl hover:bg-gray-700 transition text-left">
      <span class="text-2xl">🔗</span><div><div class="text-white font-semibold">نسخ الرابط</div><div class="text-gray-400 text-xs">Copy link to clipboard</div></div>
    </button>
  `;
  modal.classList.remove('hidden');
  document.body.style.overflow = 'hidden';
}

function closeShareModal() {
  const modal = document.getElementById('shareModal');
  if (modal) {
    modal.classList.add('hidden');
    document.body.style.overflow = '';
  }
}

/**
 * Lazy load images for better performance
 */
function initLazyLoading() {
  const images = document.querySelectorAll('img[data-src]');
  
  const imageObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const img = entry.target;
        img.src = img.dataset.src;
        img.classList.add('loaded');
        imageObserver.unobserve(img);
      }
    });
  }, { rootMargin: '50px' });
  
  images.forEach(img => imageObserver.observe(img));
}

// Responsive improvements
window.addEventListener('resize', () => {
  if (typeof AOS !== 'undefined') {
    AOS.refresh();
  }
});

// Push notification subscription
async function subscribePushNotifications() {
  if (!('Notification' in window) || !('serviceWorker' in navigator)) {
    showToast('⚠️ الإشعارات غير مدعومة في متصفحك', 'warning');
    return false;
  }
  try {
    const permission = await Notification.requestPermission();
    if (permission !== 'granted') {
      showToast('⚠️ تم رفض الإذن للإشعارات', 'warning');
      return false;
    }
    const registration = await navigator.serviceWorker.ready;
    const subscription = await registration.pushManager.subscribe({
      userVisibleOnly: true
    });
    localStorage.setItem('push_subscription', JSON.stringify(subscription));
    showToast('✅ تم تفعيل الإشعارات بنجاح', 'success');
    return true;
  } catch (err) {
    console.error('Push subscription failed:', err);
    showToast('❌ فشل تفعيل الإشعارات', 'warning');
    return false;
  }
}

async function unsubscribePushNotifications() {
  try {
    const registration = await navigator.serviceWorker.ready;
    const subscription = await registration.pushManager.getSubscription();
    if (subscription) {
      await subscription.unsubscribe();
      localStorage.removeItem('push_subscription');
      showToast('✅ تم إلغاء الإشعارات', 'success');
    }
  } catch (err) {
    console.error('Unsubscribe failed:', err);
  }
}

// Check push subscription status on load
window.addEventListener('load', async () => {
  if ('serviceWorker' in navigator && 'PushManager' in window) {
    try {
      const registration = await navigator.serviceWorker.ready;
      const subscription = await registration.pushManager.getSubscription();
      if (subscription) {
        localStorage.setItem('push_subscription', JSON.stringify(subscription));
      }
    } catch {}
  }
});
