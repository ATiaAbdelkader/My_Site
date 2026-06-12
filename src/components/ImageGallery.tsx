'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '@/lib/language-context';
import { X, ChevronLeft, ChevronRight, Camera } from 'lucide-react';

interface GalleryImage {
  src: string;
  alt: string;
  category: string;
}

const galleryImages: Record<string, GalleryImage[]> = {
  en: [
    { src: 'https://placehold.co/600x400/06b6d4/ffffff?text=Conference+in+Peru', alt: 'Conference presentation in Peru', category: 'conferences' },
    { src: 'https://placehold.co/600x400/0f1538/22d3ee?text=Switzerland+Talk', alt: 'Research talk in Switzerland', category: 'conferences' },
    { src: 'https://placehold.co/600x400/06b6d4/ffffff?text=Training+Session', alt: 'FBS Training session with farmers', category: 'training' },
    { src: 'https://placehold.co/600x400/0f1538/22d3ee?text=Field+Work', alt: 'Livestock field research', category: 'research' },
    { src: 'https://placehold.co/600x400/06b6d4/ffffff?text=Hydroponic+System', alt: 'Smart hydroponic system', category: 'innovation' },
    { src: 'https://placehold.co/600x400/0f1538/22d3ee?text=AI+App+Demo', alt: 'AI-powered agricultural app demo', category: 'innovation' },
  ],
  ar: [
    { src: 'https://placehold.co/600x400/06b6d4/ffffff?text=مؤتمر+بيرو', alt: 'مؤتمر في بيرو', category: 'conferences' },
    { src: 'https://placehold.co/600x400/0f1538/22d3ee?text=سويسرا', alt: 'محاضرة في سويسرا', category: 'conferences' },
    { src: 'https://placehold.co/600x400/06b6d4/ffffff?text=تدريب+FBS', alt: 'جلسة تدريب FBS', category: 'training' },
    { src: 'https://placehold.co/600x400/0f1538/22d3ee?text=عمل+ميداني', alt: 'بحث ميداني في الثروة الحيوانية', category: 'research' },
    { src: 'https://placehold.co/600x400/06b6d4/ffffff?text=نظام+مائي', alt: 'نظام زراعة مائية ذكي', category: 'innovation' },
    { src: 'https://placehold.co/600x400/0f1538/22d3ee?text=تطبيق+ذكاء+اصطناعي', alt: 'عرض تطبيق زراعي بالذكاء الاصطناعي', category: 'innovation' },
  ],
  fr: [
    { src: 'https://placehold.co/600x400/06b6d4/ffffff?text=Conférence+Pérou', alt: 'Conférence au Pérou', category: 'conferences' },
    { src: 'https://placehold.co/600x400/0f1538/22d3ee?text=Suisse', alt: 'Conférence en Suisse', category: 'conferences' },
    { src: 'https://placehold.co/600x400/06b6d4/ffffff?text=Formation+FBS', alt: 'Session de formation FBS', category: 'training' },
    { src: 'https://placehold.co/600x400/0f1538/22d3ee?text=Travail+sur+le+terrain', alt: 'Recherche sur le terrain', category: 'research' },
    { src: 'https://placehold.co/600x400/06b6d4/ffffff?text=Système+hydroponique', alt: 'Système hydroponique intelligent', category: 'innovation' },
    { src: 'https://placehold.co/600x400/0f1538/22d3ee?text=Application+IA', alt: 'Démonstration application IA agricole', category: 'innovation' },
  ],
};

type Category = 'all' | 'conferences' | 'training' | 'research' | 'innovation';

export default function ImageGallery() {
  const { language } = useLanguage();
  const [activeCategory, setActiveCategory] = useState<Category>('all');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const images = galleryImages[language] || galleryImages.en;

  const categories: { key: Category; label: string }[] = [
    { key: 'all', label: language === 'ar' ? 'الكل' : language === 'fr' ? 'Tout' : 'All' },
    { key: 'conferences', label: language === 'ar' ? 'مؤتمرات' : language === 'fr' ? 'Conférences' : 'Conferences' },
    { key: 'training', label: language === 'ar' ? 'تدريب' : language === 'fr' ? 'Formation' : 'Training' },
    { key: 'research', label: language === 'ar' ? 'أبحاث' : language === 'fr' ? 'Recherche' : 'Research' },
    { key: 'innovation', label: language === 'ar' ? 'ابتكار' : language === 'fr' ? 'Innovation' : 'Innovation' },
  ];

  const filtered = activeCategory === 'all' ? images : images.filter((img) => img.category === activeCategory);

  const navigateLightbox = (direction: 'prev' | 'next') => {
    if (lightboxIndex === null) return;
    if (direction === 'prev') {
      setLightboxIndex(lightboxIndex === 0 ? filtered.length - 1 : lightboxIndex - 1);
    } else {
      setLightboxIndex(lightboxIndex === filtered.length - 1 ? 0 : lightboxIndex + 1);
    }
  };

  return (
    <section id="gallery" className="section-padding relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <span className="text-cyan-400 text-sm font-semibold flex items-center justify-center gap-2">
            <Camera size={16} />
            {language === 'ar' ? 'معرض الصور' : language === 'fr' ? 'Galerie' : 'Gallery'}
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold dark:text-white text-gray-900 mt-3 gradient-border inline-block pb-3">
            {language === 'ar' ? 'لحظات من المسيرة' : language === 'fr' ? 'Moments de parcours' : 'Moments from the Journey'}
          </h2>
        </motion.div>

        {/* Category filters */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {categories.map((cat) => (
            <button
              key={cat.key}
              onClick={() => setActiveCategory(cat.key)}
              className={`px-4 py-2 rounded-lg text-sm font-semibold transition-all min-h-[40px] ${
                activeCategory === cat.key
                  ? 'bg-gradient-to-r from-cyan-500 to-cyan-600 text-white shadow-lg shadow-cyan-500/25'
                  : 'dark:bg-slate-800/60 bg-gray-100 dark:text-gray-300 text-gray-600 dark:hover:bg-slate-700/60 hover:bg-gray-200'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Image grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          <AnimatePresence mode="popLayout">
            {filtered.map((img, i) => (
              <motion.div
                key={img.alt}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3, delay: i * 0.05 }}
                className="group relative aspect-[3/2] rounded-xl overflow-hidden cursor-pointer border border-white/5"
                onClick={() => setLightboxIndex(i)}
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                  <p className="text-white text-sm font-medium">{img.alt}</p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxIndex !== null && filtered[lightboxIndex] && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[80] flex items-center justify-center bg-black/90 backdrop-blur-sm"
            onClick={() => setLightboxIndex(null)}
          >
            <button
              onClick={() => setLightboxIndex(null)}
              className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors z-10"
            >
              <X size={20} />
            </button>

            <button
              onClick={(e) => { e.stopPropagation(); navigateLightbox('prev'); }}
              className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors z-10"
            >
              <ChevronLeft size={24} />
            </button>

            <button
              onClick={(e) => { e.stopPropagation(); navigateLightbox('next'); }}
              className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors z-10"
            >
              <ChevronRight size={24} />
            </button>

            <motion.div
              key={lightboxIndex}
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ type: 'spring', stiffness: 300, damping: 25 }}
              className="max-w-4xl max-h-[80vh] mx-4"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={filtered[lightboxIndex].src}
                alt={filtered[lightboxIndex].alt}
                className="w-full h-full object-contain rounded-xl"
              />
              <p className="text-center text-white/80 text-sm mt-3">{filtered[lightboxIndex].alt}</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
