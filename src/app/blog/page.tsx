'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { useLanguage } from '@/lib/language-context';
import { Calendar, Clock, ArrowRight, Tag } from 'lucide-react';

const articles = [
  {
    slug: 'smart-agriculture-algeria',
    titleEn: 'Smart Agriculture in Algeria: Challenges and Opportunities',
    titleAr: 'الزراعة الذكية في الجزائر: التحديات والفرص',
    titleFr: "L'agriculture intelligente en Algérie : Défis et Opportunités",
    excerptEn: 'How AI, IoT, and hydroponic systems are transforming farming in arid regions...',
    excerptAr: 'كيف تحول الذكاء الاصطناعي والأنظمة المائية الزراعة في المناطق القاحلة...',
    excerptFr: "Comment l'IA et les systèmes hydroponiques transforment l'agriculture en zones arides...",
    date: '2025-03-15',
    category: 'research',
    readTime: '8 min',
    image: 'https://placehold.co/600x300/06b6d4/ffffff?text=Smart+Agriculture',
  },
  {
    slug: 'reproductive-performance-arid',
    titleEn: 'Improving Reproductive Performance in Arid Environments',
    titleAr: 'تحسين الأداء التناسلي في البيئات الجافة',
    titleFr: "Amélioration des performances reproductives en zones arides",
    excerptEn: 'PhD research on semen quality and breeding optimization under heat stress...',
    excerptAr: 'بحث دكتوراه حول جودة السائل المنوي وتحسين التربية تحت الإجهاد الحراري...',
    excerptFr: 'Recherche doctorale sur la qualité du sperme et la sélection sous stress thermique...',
    date: '2025-01-20',
    category: 'research',
    readTime: '12 min',
    image: 'https://placehold.co/600x300/0f1538/22d3ee?text=Research',
  },
  {
    slug: 'fbs-training-impact',
    titleEn: 'FBS Training: 500+ Farmers Transformed',
    titleAr: 'تدريب FBS: تحويل أكثر من 500 مزارع',
    titleFr: 'Formation FBS : Plus de 500 agriculteurs transformés',
    excerptEn: 'The story of how the Farmer Business School program is changing lives...',
    excerptAr: 'كيف يغير برنامج مدرسة أعمال المزارعين حياة الناس...',
    excerptFr: "Comment le programme FBS change la vie des agriculteurs...",
    date: '2024-11-10',
    category: 'training',
    readTime: '6 min',
    image: 'https://placehold.co/600x300/06b6d4/ffffff?text=FBS+Training',
  },
];

const categoryLabels: Record<string, Record<string, string>> = {
  research: { en: 'Research', ar: 'بحث', fr: 'Recherche' },
  training: { en: 'Training', ar: 'تدريب', fr: 'Formation' },
  innovation: { en: 'Innovation', ar: 'ابتكار', fr: 'Innovation' },
};

export default function BlogPage() {
  const { language } = useLanguage();

  const labels = {
    title: language === 'ar' ? 'المدونة' : language === 'fr' ? 'Blog' : 'Blog',
    subtitle: language === 'ar' ? 'أفكار وأبحاث ورؤى من المسيرة المهنية' : language === 'fr' ? 'Idées, recherches et perspectives' : 'Thoughts, research, and insights from the journey',
  };

  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl sm:text-5xl font-extrabold dark:text-white text-gray-900">{labels.title}</h1>
          <p className="dark:text-gray-400 text-gray-500 mt-4 max-w-lg mx-auto">{labels.subtitle}</p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {articles.map((article, i) => {
            const title = article[`title${language.charAt(0).toUpperCase() + language.slice(1)}`] || article.titleEn;
            const excerpt = article[`excerpt${language.charAt(0).toUpperCase() + language.slice(1)}`] || article.excerptEn;
            const category = categoryLabels[article.category]?.[language] || article.category;

            return (
              <motion.div
                key={article.slug}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
              >
                <Link href={`/blog/${article.slug}`}>
                  <div className="glass-card rounded-2xl overflow-hidden group cursor-pointer">
                    <div className="aspect-[2/1] overflow-hidden">
                      <img
                        src={article.image}
                        alt={title}
                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                      />
                    </div>
                    <div className="p-5">
                      <div className="flex items-center gap-3 mb-3">
                        <span className="px-2 py-1 rounded-md text-[10px] font-semibold bg-cyan-500/10 text-cyan-400 uppercase">
                          {category}
                        </span>
                        <span className="text-[11px] text-gray-500 flex items-center gap-1">
                          <Calendar size={10} />
                          {new Date(article.date).toLocaleDateString()}
                        </span>
                        <span className="text-[11px] text-gray-500 flex items-center gap-1">
                          <Clock size={10} />
                          {article.readTime}
                        </span>
                      </div>
                      <h3 className="dark:text-white text-gray-900 font-bold mb-2 group-hover:text-cyan-400 transition-colors">
                        {title}
                      </h3>
                      <p className="dark:text-gray-400 text-gray-500 text-sm leading-relaxed">
                        {excerpt}
                      </p>
                      <span className="text-cyan-400 text-sm font-semibold mt-3 flex items-center gap-1">
                        {language === 'ar' ? 'اقرأ المزيد' : language === 'fr' ? 'Lire plus' : 'Read more'}
                        <ArrowRight size={14} />
                      </span>
                    </div>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
