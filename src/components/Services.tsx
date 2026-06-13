'use client';

import { motion } from 'framer-motion';
import { useLanguage } from '@/lib/language-context';
import { ArrowRight } from 'lucide-react';

export default function Services() {
  const { t } = useLanguage();

  const serviceColors = [
    'dark:bg-cyan-500/10 bg-cyan-50',
    'dark:bg-amber-500/10 bg-amber-50',
    'dark:bg-cyan-500/10 bg-cyan-50',
    'dark:bg-amber-500/10 bg-amber-50',
  ];

  return (
    <section id="services" className="section-padding relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="text-cyan-400 text-sm font-semibold">{t.services.sectionLabel}</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold dark:text-white text-gray-900 mt-3 gradient-border inline-block pb-3">
            {t.services.title}
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {t.services.items.map((service, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="glass-card rounded-2xl p-6 text-center"
            >
              <div className={`w-14 h-14 mx-auto rounded-2xl flex items-center justify-center text-2xl mb-4 ${serviceColors[i]}`}>
                {service.title.split(' ')[0]}
              </div>
              <h3 className="dark:text-white text-gray-900 font-bold text-lg mb-3">
                {service.title.substring(service.title.indexOf(' ') + 1)}
              </h3>
              <p className="dark:text-gray-400 text-gray-500 text-sm mb-5 leading-relaxed">
                {service.desc}
              </p>
              <button
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="text-cyan-400 text-sm font-semibold hover:text-cyan-300 flex items-center justify-center gap-1 transition-colors mx-auto"
              >
                {service.request}
                <ArrowRight size={14} />
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
