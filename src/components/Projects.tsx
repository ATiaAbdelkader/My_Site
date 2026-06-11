'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '@/lib/language-context';
import { ArrowRight } from 'lucide-react';

type FilterCat = 'all' | 'research' | 'app' | 'training' | 'business';

export default function Projects() {
  const { t } = useLanguage();
  const [filter, setFilter] = useState<FilterCat>('all');

  const filters: { key: FilterCat; label: string }[] = [
    { key: 'all', label: t.projects.filters.all },
    { key: 'research', label: t.projects.filters.research },
    { key: 'app', label: t.projects.filters.apps },
    { key: 'training', label: t.projects.filters.training },
    { key: 'business', label: t.projects.filters.business },
  ];

  const filtered = filter === 'all'
    ? t.projects.items
    : t.projects.items.filter((p) => p.cat === filter);

  const catLabels: Record<string, string> = {
    app: t.projects.filters.apps,
    research: t.projects.filters.research,
    training: t.projects.filters.training,
    business: t.projects.filters.business,
  };

  return (
    <section id="projects" className="section-padding relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <span className="text-cyan-400 text-sm font-semibold">{t.projects.sectionLabel}</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold dark:text-white text-gray-900 mt-3 gradient-border inline-block pb-3">
            {t.projects.title}
          </h2>
        </motion.div>

        {/* Filter Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-12"
        >
          {filters.map((f) => (
            <button
              key={f.key}
              onClick={() => setFilter(f.key)}
              className={`px-4 sm:px-5 py-2 rounded-lg text-sm font-semibold transition-all min-h-[44px] ${
                filter === f.key
                  ? 'bg-gradient-to-r from-cyan-500 to-cyan-600 text-white shadow-lg shadow-cyan-500/25'
                  : 'dark:bg-white/5 bg-gray-100 dark:text-gray-400 text-gray-600 dark:hover:bg-white/10 hover:bg-gray-200'
              }`}
            >
              {f.label}
            </button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filtered.map((project, i) => (
              <motion.div
                key={project.name}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3, delay: i * 0.05 }}
                className="glass-card rounded-2xl overflow-hidden"
              >
                <div className="h-36 flex items-center justify-center text-5xl bg-gradient-to-br dark:from-cyan-500/10 dark:to-cyan-500/3 from-cyan-50 to-cyan-100/50">
                  {project.icon}
                </div>
                <div className="p-5">
                  <span className="text-cyan-400 text-xs font-semibold uppercase">
                    {catLabels[project.cat] || project.cat}
                  </span>
                  <h3 className="dark:text-white text-gray-900 font-bold mt-2 mb-2">
                    {project.name}
                  </h3>
                  <p className="dark:text-gray-400 text-gray-500 text-sm mb-4 leading-relaxed">
                    {project.desc}
                  </p>
                  <button className="text-cyan-400 text-sm font-semibold hover:text-cyan-300 flex items-center gap-1 transition-colors">
                    {t.projects.viewDetails}
                    <ArrowRight size={14} />
                  </button>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
