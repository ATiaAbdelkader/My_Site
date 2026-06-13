'use client';

import { motion } from 'framer-motion';
import { useLanguage } from '@/lib/language-context';
import { Briefcase } from 'lucide-react';

export default function Experience() {
  const { t } = useLanguage();

  return (
    <section id="experience" className="section-padding relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="text-cyan-400 text-sm font-semibold">{t.experience.sectionLabel}</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold dark:text-white text-gray-900 mt-3 gradient-border inline-block pb-3">
            {t.experience.title}
          </h2>
        </motion.div>

        {/* Timeline */}
        <div className="relative max-w-4xl mx-auto">
          {/* Center line */}
          <div className="absolute left-4 sm:left-1/2 top-0 bottom-0 w-0.5 dark:bg-white/10 bg-gray-200 sm:-translate-x-0.5" />

          {t.experience.items.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`relative flex items-start gap-4 sm:gap-8 mb-12 last:mb-0 ${
                i % 2 === 0 ? 'sm:flex-row' : 'sm:flex-row-reverse'
              }`}
            >
              {/* Timeline dot */}
              <div className="absolute left-4 sm:left-1/2 w-4 h-4 rounded-full bg-cyan-500 border-4 dark:border-[#0a0e27] border-white -translate-x-2 sm:-translate-x-2 z-10 mt-6" />

              {/* Content */}
              <div className={`flex-1 ml-10 sm:ml-0 ${i % 2 === 0 ? 'sm:pr-12 sm:text-right' : 'sm:pl-12 sm:text-left'}`}>
                <div className="glass-card rounded-2xl p-6">
                  <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold dark:bg-cyan-500/10 bg-cyan-50 dark:text-cyan-400 text-cyan-600 mb-3">
                    {item.period}
                  </span>
                  <h3 className="text-lg font-bold dark:text-white text-gray-900 mb-1">
                    {item.title}
                  </h3>
                  {item.org && (
                    <p className="text-sm dark:text-cyan-400 text-cyan-600 font-medium mb-2">
                      {item.org}
                    </p>
                  )}
                  <p className="text-sm dark:text-gray-400 text-gray-500 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>

              {/* Empty space for alternating layout on desktop */}
              <div className="hidden sm:block flex-1" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
