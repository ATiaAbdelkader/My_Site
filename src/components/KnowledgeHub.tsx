'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '@/lib/language-context';
import { Facebook, Linkedin, ExternalLink, MapPin, Calendar } from 'lucide-react';

type Tab = 'thoughts' | 'publications' | 'speaking';

export default function KnowledgeHub() {
  const { t } = useLanguage();
  const [activeTab, setActiveTab] = useState<Tab>('thoughts');

  const tabs: { key: Tab; label: string }[] = [
    { key: 'thoughts', label: t.knowledge.tabs.thoughts },
    { key: 'publications', label: t.knowledge.tabs.publications },
    { key: 'speaking', label: t.knowledge.tabs.speaking },
  ];

  return (
    <section id="knowledge" className="section-padding relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <span className="text-cyan-400 text-sm font-semibold">{t.knowledge.sectionLabel}</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold dark:text-white text-gray-900 mt-3 gradient-border inline-block pb-3">
            {t.knowledge.title}
          </h2>
        </motion.div>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {tabs.map((tab) => (
            <button
              key={tab.key}
              onClick={() => setActiveTab(tab.key)}
              className={`px-5 py-2 rounded-lg text-sm font-semibold transition-all min-h-[44px] ${
                activeTab === tab.key
                  ? 'bg-gradient-to-r from-cyan-500 to-cyan-600 text-white shadow-lg shadow-cyan-500/25'
                  : 'dark:bg-white/5 bg-gray-100 dark:text-gray-400 text-gray-600 dark:hover:bg-white/10 hover:bg-gray-200'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Content */}
        <div className="min-h-[200px]">
          <AnimatePresence mode="wait">
            {activeTab === 'thoughts' && (
              <motion.div
                key="thoughts"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4"
              >
                {t.knowledge.thoughts.map((thought, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.05 }}
                    className="glass-card rounded-2xl p-5"
                  >
                    <div className="flex items-center gap-2 mb-3">
                      {thought.platform === 'facebook' ? (
                        <Facebook size={16} className="text-blue-400" />
                      ) : (
                        <Linkedin size={16} className="text-blue-300" />
                      )}
                      <span className="text-xs dark:text-gray-500 text-gray-400">{thought.date}</span>
                    </div>
                    <p className="dark:text-gray-300 text-gray-600 text-sm leading-relaxed mb-3">
                      {thought.text}
                    </p>
                    <a
                      href={thought.platform === 'facebook' ? 'https://www.facebook.com/abdelkader.atia' : 'https://www.linkedin.com/in/abdelkader-atia-89061a146/'}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-cyan-400 text-xs font-semibold hover:text-cyan-300 flex items-center gap-1"
                    >
                      <ExternalLink size={12} />
                      {thought.platform === 'facebook' ? 'Facebook' : 'LinkedIn'}
                    </a>
                  </motion.div>
                ))}
              </motion.div>
            )}

            {activeTab === 'publications' && (
              <motion.div
                key="publications"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                className="space-y-3 max-w-4xl mx-auto"
              >
                {t.knowledge.publications.map((pub, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05 }}
                    className="glass-card rounded-xl p-4 flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4"
                  >
                    <span className="text-sm font-bold dark:text-cyan-400 text-cyan-600 shrink-0">
                      {pub.year}
                    </span>
                    <div className="flex-1 min-w-0">
                      <p className="dark:text-gray-200 text-gray-700 text-sm font-medium truncate">
                        {pub.title}
                      </p>
                      <p className="dark:text-gray-500 text-gray-400 text-xs italic">
                        {pub.journal}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            )}

            {activeTab === 'speaking' && (
              <motion.div
                key="speaking"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                className="space-y-4 max-w-4xl mx-auto"
              >
                {t.knowledge.speaking.map((talk, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.05 }}
                    className="glass-card rounded-2xl p-5"
                  >
                    <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-2 mb-2">
                      <h3 className="dark:text-white text-gray-900 font-bold text-sm sm:text-base">
                        {talk.conference}
                      </h3>
                      <div className="flex items-center gap-3 shrink-0">
                        <span className="flex items-center gap-1 text-xs dark:text-gray-400 text-gray-500">
                          <MapPin size={12} />
                          {talk.location}
                        </span>
                        <span className="flex items-center gap-1 text-xs dark:text-cyan-400 text-cyan-600">
                          <Calendar size={12} />
                          {talk.year}
                        </span>
                      </div>
                    </div>
                    <p className="dark:text-gray-400 text-gray-500 text-sm italic">
                      &ldquo;{talk.paper}&rdquo;
                    </p>
                  </motion.div>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
