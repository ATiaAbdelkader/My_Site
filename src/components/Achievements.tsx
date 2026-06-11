'use client';

import { motion } from 'framer-motion';
import { useLanguage } from '@/lib/language-context';

export default function Achievements() {
  const { t } = useLanguage();

  const iconColors = [
    'dark:bg-amber-500/15 bg-amber-50',
    'dark:bg-cyan-500/15 bg-cyan-50',
    'dark:bg-amber-500/15 bg-amber-50',
    'dark:bg-cyan-500/15 bg-cyan-50',
    'dark:bg-amber-500/15 bg-amber-50',
    'dark:bg-cyan-500/15 bg-cyan-50',
  ];

  return (
    <section id="achievements" className="section-padding relative">
      <div className="absolute inset-0 dark:bg-gradient-to-b dark:from-transparent dark:via-[#0f1538]/50 dark:to-transparent bg-gradient-to-b from-transparent via-cyan-50/30 to-transparent pointer-events-none" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="text-cyan-400 text-sm font-semibold">{t.achievements.sectionLabel}</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold dark:text-white text-gray-900 mt-3 gradient-border inline-block pb-3">
            {t.achievements.title}
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {t.achievements.items.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="glass-card rounded-2xl p-6 cursor-pointer"
            >
              <div className="flex items-center gap-3 mb-3">
                <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${iconColors[i]}`}>
                  <span className="text-xl">{item.title.split(' ')[0]}</span>
                </div>
                <h3 className="dark:text-white text-gray-900 font-bold">
                  {item.title.substring(item.title.indexOf(' ') + 1)}
                </h3>
              </div>
              <p className="dark:text-gray-400 text-gray-500 text-sm leading-relaxed">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
