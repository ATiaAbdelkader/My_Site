'use client';

import { motion } from 'framer-motion';
import { ExternalLink, UserCheck } from 'lucide-react';
import { enabledProfiles } from '@/data/academic-profiles';
import { totalCitations, publications } from '@/data/publications';

export default function AcademicProfiles() {
  const hIndex = Math.max(
    1,
    publications.filter((p) => (p.citations ?? 0) >= 1).length
  );
  const i10Index = publications.filter(
    (p) => (p.citations ?? 0) >= 10
  ).length;

  const metrics = [
    { label: 'Publications', value: publications.length },
    { label: 'Citations', value: totalCitations },
    { label: 'h-index', value: hIndex },
    { label: 'i10-index', value: i10Index },
  ];

  return (
    <section className="section-padding relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.5 }}
          className="text-center mb-10"
        >
          <span className="text-cyan-400 text-sm font-semibold flex items-center justify-center gap-2">
            <UserCheck size={16} />
            Verified Profiles
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold dark:text-white text-gray-900 mt-3 gradient-border inline-block pb-3">
            Academic Profiles
          </h2>
          <p className="mt-4 text-gray-500 dark:text-gray-400 max-w-2xl mx-auto">
            Find my research across verified academic platforms. Citations,
            metrics, and publications are tracked across these databases.
          </p>
        </motion.div>

        {/* Metrics summary */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-10"
        >
          {metrics.map((m) => (
            <div
              key={m.label}
              className="text-center p-4 rounded-xl dark:bg-slate-800/40 bg-gray-50 border dark:border-white/5 border-gray-200"
            >
              <div className="text-2xl sm:text-3xl font-bold text-cyan-400">
                {m.value}
              </div>
              <div className="text-xs sm:text-sm text-gray-500 dark:text-gray-400 mt-1">
                {m.label}
              </div>
            </div>
          ))}
        </motion.div>

        {/* Profile cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {enabledProfiles.map((profile, i) => (
            <motion.a
              key={profile.id}
              href={profile.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="group flex items-center gap-4 p-4 rounded-xl dark:bg-slate-800/40 bg-white border dark:border-white/5 border-gray-200 hover:dark:border-cyan-500/30 hover:border-cyan-400/40 transition-all"
            >
              {/* Icon */}
              <div
                className="flex-shrink-0 w-12 h-12 rounded-xl flex items-center justify-center"
                style={{ backgroundColor: `${profile.color}15` }}
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill={profile.color}
                >
                  <path d={profile.icon} />
                </svg>
              </div>

              {/* Content */}
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-1.5">
                  <h3 className="font-semibold dark:text-white text-gray-900 text-sm">
                    {profile.name}
                  </h3>
                  <ExternalLink
                    size={12}
                    className="text-gray-400 group-hover:text-cyan-400 transition-colors"
                  />
                </div>
                <p className="text-xs text-gray-500 dark:text-gray-400 truncate mt-0.5">
                  {profile.description}
                </p>
                <p className="text-xs text-gray-400 dark:text-gray-500 truncate mt-0.5 font-mono">
                  {profile.username}
                </p>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
