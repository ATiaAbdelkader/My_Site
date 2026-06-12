'use client';

import { motion } from 'framer-motion';
import { Calendar, Clock, ArrowLeft, Tag } from 'lucide-react';
import Link from 'next/link';
import { useLanguage } from '@/lib/language-context';

const categoryLabels: Record<string, Record<string, string>> = {
  research: { en: 'Research', ar: 'بحث', fr: 'Recherche' },
  training: { en: 'Training', ar: 'تدريب', fr: 'Formation' },
  innovation: { en: 'Innovation', ar: 'ابتكار', fr: 'Innovation' },
};

export default function BlogArticlePage({ article, slug }: { article: any; slug: string }) {
  const { language } = useLanguage();

  const title = article[`title${language.charAt(0).toUpperCase() + language.slice(1)}`] || article.titleEn;
  const content = article[`content${language.charAt(0).toUpperCase() + language.slice(1)}`] || article.contentEn;
  const category = categoryLabels[article.category]?.[language] || article.category;

  // Simple markdown rendering
  const renderContent = (text: string) => {
    return text.split('\n\n').map((paragraph, i) => {
      if (paragraph.startsWith('## ')) {
        return <h2 key={i} className="text-xl font-extrabold dark:text-white text-gray-900 mt-8 mb-3">{paragraph.replace('## ', '')}</h2>;
      }
      if (paragraph.startsWith('- ')) {
        const items = paragraph.split('\n').filter(l => l.startsWith('- '));
        return (
          <ul key={i} className="space-y-2 my-4">
            {items.map((item, j) => (
              <li key={j} className="flex items-start gap-2 dark:text-gray-300 text-gray-600">
                <span className="text-cyan-400 mt-1">•</span>
                <span>{item.replace('- ', '')}</span>
              </li>
            ))}
          </ul>
        );
      }
      return <p key={i} className="dark:text-gray-300 text-gray-600 leading-relaxed mb-4">{paragraph}</p>;
    });
  };

  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        {/* Back button */}
        <Link
          href="/#knowledge"
          className="inline-flex items-center gap-2 text-cyan-400 text-sm font-medium hover:text-cyan-300 transition-colors mb-8"
        >
          <ArrowLeft size={16} />
          {language === 'ar' ? 'العودة للموقع' : language === 'fr' ? 'Retour au site' : 'Back to site'}
        </Link>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {/* Cover image */}
          <div className="w-full aspect-[2/1] rounded-2xl overflow-hidden mb-8 border border-white/10">
            <img src={article.image} alt={title} className="w-full h-full object-cover" />
          </div>

          {/* Meta */}
          <div className="flex items-center gap-4 mb-4">
            <span className="px-3 py-1 rounded-full text-xs font-semibold bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 flex items-center gap-1.5">
              <Tag size={12} />
              {category}
            </span>
            <span className="flex items-center gap-1.5 text-xs text-gray-400">
              <Calendar size={12} />
              {new Date(article.date).toLocaleDateString(language === 'ar' ? 'ar-SA' : language === 'fr' ? 'fr-FR' : 'en-US')}
            </span>
            <span className="flex items-center gap-1.5 text-xs text-gray-400">
              <Clock size={12} />
              {article.readTime}
            </span>
          </div>

          {/* Title */}
          <h1 className="text-3xl sm:text-4xl font-extrabold dark:text-white text-gray-900 mb-8 leading-tight">
            {title}
          </h1>
        </motion.div>

        {/* Content */}
        <motion.article
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="prose-custom"
        >
          {renderContent(content)}
        </motion.article>
      </div>
    </div>
  );
}
