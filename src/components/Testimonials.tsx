'use client';

import { motion } from 'framer-motion';
import { useLanguage } from '@/lib/language-context';
import { Star } from 'lucide-react';

const initials = [
  { initials: 'EA', gradient: 'from-cyan-500 to-cyan-600' },
  { initials: 'SK', gradient: 'from-amber-500 to-amber-600' },
  { initials: 'DM', gradient: 'from-cyan-500 to-cyan-600' },
  { initials: 'FA', gradient: 'from-amber-500 to-amber-600' },
  { initials: 'IQ', gradient: 'from-cyan-500 to-cyan-600' },
  { initials: 'DL', gradient: 'from-amber-500 to-amber-600' },
];

export default function Testimonials() {
  const { t } = useLanguage();

  return (
    <section className="section-padding relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="text-cyan-400 text-sm font-semibold">{t.testimonials.sectionLabel}</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold dark:text-white text-gray-900 mt-3 gradient-border inline-block pb-3">
            {t.testimonials.title}
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {t.testimonials.items.map((testimonial, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="glass-card rounded-2xl p-5 flex flex-col h-full"
            >
              {/* Stars */}
              <div className="flex gap-0.5 mb-3">
                {[1, 2, 3, 4, 5].map((s) => (
                  <Star
                    key={s}
                    size={14}
                    className="text-amber-400 fill-amber-400"
                  />
                ))}
              </div>
              <p className="dark:text-gray-300 text-gray-600 text-sm leading-relaxed flex-1 mb-4">
                &ldquo;{testimonial.text}&rdquo;
              </p>
              <div className="flex items-center gap-3 border-t dark:border-white/10 border-gray-200 pt-3">
                <div className={`w-9 h-9 rounded-full flex items-center justify-center text-xs font-bold text-white bg-gradient-to-br ${initials[i]?.gradient || 'from-cyan-500 to-cyan-600'}`}>
                  {initials[i]?.initials || '?'}
                </div>
                <div className="min-w-0">
                  <div className="dark:text-white text-gray-900 text-sm font-semibold truncate">
                    {testimonial.author}
                  </div>
                  <div className="dark:text-gray-500 text-gray-400 text-xs truncate">
                    {testimonial.role}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
