import { notFound } from 'next/navigation';
import BlogArticlePage from './BlogArticlePage';

export const metadata = {
  title: 'Blog | Abdelkader Atia',
};

const articles: Record<string, any> = {
  'smart-agriculture-algeria': {
    titleEn: 'Smart Agriculture in Algeria: Challenges and Opportunities',
    titleAr: 'الزراعة الذكية في الجزائر: التحديات والفرص',
    titleFr: "L'agriculture intelligente en Algérie : Défis et Opportunités",
    date: '2025-03-15',
    category: 'research',
    readTime: '8 min',
    image: 'https://placehold.co/800x400/06b6d4/ffffff?text=Smart+Agriculture',
    contentEn: 'Algeria\'s agricultural sector stands at a critical crossroads. With over 70% of its territory classified as arid or semi-arid, the country faces unique challenges that demand innovative solutions. Smart agriculture — leveraging artificial intelligence, IoT sensors, and data analytics — offers a transformative pathway for Algerian farmers and researchers alike.\n\n## The Current Landscape\n\nAlgeria\'s agricultural output contributes approximately 12% to its GDP, employing nearly 25% of the workforce. Yet, the sector struggles with water scarcity, soil degradation, and limited access to modern technology.\n\n## AI-Powered Solutions\n\nOur research team has been developing AI-powered applications that help farmers make data-driven decisions. These tools analyze weather patterns, soil conditions, and market data to optimize planting schedules, irrigation, and resource allocation. Early results show yield improvements of 15-25% in pilot programs.\n\n## Hydroponic Systems\n\nOne of our most promising projects involves integrated hydroponic and aquaponic systems designed specifically for arid environments. By recycling water and nutrients, these systems use up to 90% less water than traditional farming methods.\n\n## The Path Forward\n\nThe integration of digital tools in Algerian agriculture requires a multi-faceted approach: training programs for farmers, investment in infrastructure, and continued research into locally-adapted solutions.',
    contentAr: 'يقطع القطاع الزراعي الجزائري مفترق طرق حاسم. فمع تصنيف أكثر من 70% من أراضيه كمناطق قاحلة أو شبه قاحلة، يواجه البلد تحديات فريدة تتطلب حلولاً مبتكرة. توفر الزراعة الذكية مساراً تحويلياً للمزارعين والباحثين الجزائريين على حد سواء.\n\n## المشهد الحالي\n\nيساهم الناتج الزراعي الجزائري بنحو 12% من الناتج المحلي الإجمالي.\n\n## الحلول المدعومة بالذكاء الاصطناعي\n\nيعمل فريق بحثنا على تطوير تطبيقات ذكية تساعد المزارعين في اتخاذ قرارات مبنية على البيانات.\n\n## الأنظمة المائية\n\nأحد أكثر مشاريعنا الواعدة يتضمن أنظمة زراعة مائية متكاملة مصممة خصيصاً للبيئات القاحلة.',
    contentFr: "Le secteur agricole algérien se trouve à un carrefour crucial. L'agriculture intelligente offre une voie transformatrice pour les agriculteurs et chercheurs algériens.\n\n## Le Paysage Actuel\n\nLa production agricole contribue environ 12% au PIB.\n\n## Solutions IA\n\nNotre équipe développe des applications alimentées par l'IA pour aider les agriculteurs à prendre des décisions basées sur les données.",
  },
  'reproductive-performance-arid': {
    titleEn: 'Improving Reproductive Performance in Arid Environments',
    titleAr: 'تحسين الأداء التناسلي في البيئات الجافة',
    titleFr: "Amélioration des performances reproductives en zones arides",
    date: '2025-01-20',
    category: 'research',
    readTime: '12 min',
    image: 'https://placehold.co/800x400/0f1538/22d3ee?text=Reproductive+Performance',
    contentEn: 'Reproductive efficiency in livestock raised under arid conditions remains one of the most significant challenges facing animal production in North Africa. My doctoral research focuses specifically on semen quality assessment and improvement strategies for cattle breeds adapted to harsh Saharan environments.\n\n## Research Objectives\n\nOur primary goal is to develop practical, evidence-based protocols for improving reproductive outcomes in livestock systems operating under heat stress and limited resource conditions.\n\n## Key Findings\n\nOur preliminary data reveals significant seasonal variation in semen quality parameters, with the summer months showing a 30-40% decline in motility rates compared to winter values.\n\n## Practical Applications\n\nThe research outcomes directly inform our training programs for livestock producers. By implementing optimized breeding calendars and targeted nutritional interventions, participating farms have reported a 20% improvement in conception rates.',
    contentAr: 'يظل الكفاءة التناسلية في الثروة الحيوانية المرباة تحت الظروف القاحلة أحد أهم التحديات. يركز بحثي للدكتوراه على تقييم وتحسين جودة السائل المنوي لسلالات الماشية المتكيفة مع البيئات الصحراوية القاسية.\n\n## أهداف البحث\n\nهدفنا تطوير بروتوكولات عملية لتحسين النتائج التناسلية.\n\n## النتائج الرئيسية\n\nتكشف بياناتنا عن تباين موسمي كبير مع انخفاض 30-40% في معدلات الحركة خلال أشهر الصيف.',
    contentFr: "L'efficacité reproductive du bétail en conditions arides reste un défi majeur. Ma recherche doctorale se concentre sur l'évaluation de la qualité du sperme pour les races bovines adaptées aux environnements sahariens.\n\n## Objectifs\n\nDévelopper des protocoles pratiques pour améliorer les résultats reproductifs sous stress thermique.",
  },
  'fbs-training-impact': {
    titleEn: 'FBS Training: 500+ Farmers Transformed',
    titleAr: 'تدريب FBS: تحويل أكثر من 500 مزارع',
    titleFr: 'Formation FBS : Plus de 500 agriculteurs transformés',
    date: '2024-11-10',
    category: 'training',
    readTime: '6 min',
    image: 'https://placehold.co/800x400/06b6d4/ffffff?text=FBS+Training',
    contentEn: 'The Farmer Business School (FBS) program represents one of the most impactful training initiatives in Algerian agriculture. As an Assistant Master Trainer, I\'ve delivered over 50 training programs reaching more than 500 farmers.\n\n## Program Design\n\nOur FBS curriculum integrates practical business skills with modern agricultural techniques: farm business planning, market analysis, sustainable practices, and digital tools.\n\n## Measurable Impact\n\nParticipating farmers report an average 35% increase in farm income within the first year. More importantly, 78% have adopted at least three new sustainable practices.\n\n## International Recognition\n\nOur methodology has been recognized internationally, and I\'ve presented our approach at conferences in Peru, Switzerland, and Tunisia.',
    contentAr: 'يمثل برنامج مدرسة أعمال المزارعين (FBS) أحد أكثر مبادرات التدريب تأثيراً. بصفتي مدرباً رئيسياً مساعداً، قدمت أكثر من 50 برنامجاً تدريبياً وصلت إلى أكثر من 500 مزارع.\n\n## تصميم البرنامج\n\nيجمع منهج FBS بين المهارات العملية والتقنيات الزراعية الحديثة.\n\n## تأثير قابل للقياس\n\nزيادة متوسط 35% في دخل المزرعة خلال السنة الأولى بعد التدريب.',
    contentFr: "Le programme FBS représente l'une des initiatives de formation les plus impactantes. J'ai dispensé plus de 50 programmes touchant plus de 500 agriculteurs.\n\n## Conception\n\nIntégration de compétences commerciales pratiques avec des techniques agricoles modernes.\n\n## Impact\n\nAugmentation moyenne de 35% du revenu agricole dans la première année.",
  },
};

export function generateStaticParams() {
  return Object.keys(articles).map((slug) => ({ slug }));
}

export default function Page({ params }: { params: { slug: string } }) {
  const article = articles[params.slug];
  if (!article) notFound();
  return <BlogArticlePage article={article} slug={params.slug} />;
}
