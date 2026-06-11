'use client';

import { motion } from 'framer-motion';
import { useLanguage } from '@/lib/language-context';
import { Eye, Download } from 'lucide-react';

export default function About() {
  const { t } = useLanguage();

  const tags = [
    t.about.tags.animalProduction,
    t.about.tags.agronomy,
    t.about.tags.digitalAgri,
    t.about.tags.training,
    t.about.tags.agribusiness,
    t.about.tags.pedagogical,
  ];

  const stats = [
    { value: '+12', label: t.about.stats.years },
    { value: '+25', label: t.about.stats.projects },
    { value: '+50', label: t.about.stats.programs },
    { value: '+500', label: t.about.stats.trainees },
  ];

  return (
    <section id="about" className="section-padding relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="text-cyan-400 text-sm font-semibold">{t.about.getToKnow}</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold dark:text-white text-gray-900 mt-3 gradient-border inline-block pb-3">
            {t.about.title}
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left: Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <p className="dark:text-gray-300 text-gray-600 leading-relaxed text-base sm:text-lg">
              {t.about.p1}
            </p>
            <p className="dark:text-gray-300 text-gray-600 leading-relaxed text-base sm:text-lg">
              {t.about.p2}
            </p>

            {/* Tags */}
            <div className="flex flex-wrap gap-2">
              {tags.map((tag, i) => (
                <motion.span
                  key={i}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  className="px-3 py-1.5 rounded-lg text-sm font-medium dark:bg-cyan-500/10 bg-cyan-50 dark:text-cyan-400 text-cyan-600 border dark:border-cyan-500/20 border-cyan-200"
                >
                  {tag}
                </motion.span>
              ))}
            </div>

            {/* CV Buttons */}
            <div className="flex flex-wrap gap-3 pt-4">
              <button className="px-5 py-2.5 rounded-xl dark:bg-slate-800/60 bg-gray-100 border dark:border-cyan-500/20 border-gray-200 dark:text-white text-gray-700 font-medium text-sm dark:hover:bg-slate-700/60 hover:bg-gray-200 transition-all flex items-center gap-2 min-h-[44px]">
                <Eye size={16} />
                {t.about.previewCv}
              </button>
              <button className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-cyan-500 to-cyan-600 text-white font-medium text-sm hover:from-cyan-400 hover:to-cyan-500 transition-all flex items-center gap-2 min-h-[44px] shadow-lg shadow-cyan-500/20">
                <Download size={16} />
                {t.about.downloadCv}
              </button>
            </div>
          </motion.div>

          {/* Right: Stats Grid */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-2 gap-4"
          >
            {stats.map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="glass-card rounded-2xl p-6 text-center"
              >
                <div className="text-3xl sm:text-4xl font-extrabold gradient-text">
                  {stat.value}
                </div>
                <div className="text-sm dark:text-gray-400 text-gray-500 mt-2">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
