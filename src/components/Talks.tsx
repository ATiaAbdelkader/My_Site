'use client';

import { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import {
  Calendar,
  MapPin,
  Mic,
  Presentation,
  Image as ImageIcon,
  Users,
  Video,
  FileText,
  ExternalLink,
  ChevronRight,
} from 'lucide-react';
import {
  talks,
  talkTypeLabels,
  talkTypeColors,
  formatTalkDate,
  getTalkYear,
  allTalkYears,
  TalkType,
} from '@/data/talks';

type FilterType = 'all' | TalkType;

const typeIcons: Record<TalkType, typeof Mic> = {
  'invited-talk': Mic,
  'conference-presentation': Presentation,
  poster: ImageIcon,
  workshop: Users,
  panel: Users,
  keynote: Mic,
};

export default function Talks() {
  const [filter, setFilter] = useState<FilterType>('all');
  const [yearFilter, setYearFilter] = useState<number | 'all'>('all');

  const filters: { key: FilterType; label: string }[] = [
    { key: 'all', label: 'All' },
    { key: 'keynote', label: 'Keynotes' },
    { key: 'invited-talk', label: 'Invited Talks' },
    { key: 'conference-presentation', label: 'Presentations' },
    { key: 'poster', label: 'Posters' },
    { key: 'workshop', label: 'Workshops' },
    { key: 'panel', label: 'Panels' },
  ];

  const filtered = useMemo(() => {
    return talks
      .filter((t) => filter === 'all' || t.type === filter)
      .filter((t) => yearFilter === 'all' || getTalkYear(t.date) === yearFilter)
      .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
  }, [filter, yearFilter]);

  const stats = [
    { icon: Mic, value: talks.length, label: 'Total Talks', color: 'text-cyan-400' },
    {
      icon: Mic,
      value: talks.filter((t) => t.type === 'keynote' || t.type === 'invited-talk').length,
      label: 'Invited',
      color: 'text-amber-400',
    },
    {
      icon: MapPin,
      value: new Set(talks.map((t) => t.location)).size,
      label: 'Countries',
      color: 'text-emerald-400',
    },
    {
      icon: Calendar,
      value: allTalkYears.length,
      label: 'Years Active',
      color: 'text-purple-400',
    },
  ];

  return (
    <section id="talks" className="section-padding relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <span className="text-cyan-400 text-sm font-semibold flex items-center justify-center gap-2">
            <Mic size={16} />
            Academic Engagement
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold dark:text-white text-gray-900 mt-3 gradient-border inline-block pb-3">
            Talks &amp; Conferences
          </h2>
          <p className="mt-4 text-gray-500 dark:text-gray-400 max-w-2xl mx-auto">
            Invited talks, conference presentations, and academic engagements
            sharing research with the global scientific community.
          </p>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 mb-10 max-w-3xl mx-auto"
        >
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="text-center p-3 sm:p-4 rounded-xl dark:bg-slate-800/40 bg-gray-50 border dark:border-white/5 border-gray-200"
            >
              <stat.icon className={`mx-auto mb-2 ${stat.color}`} size={20} />
              <div className={`text-2xl font-bold ${stat.color}`}>{stat.value}</div>
              <div className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>

        {/* Filters */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="flex flex-wrap justify-center gap-2 mb-8"
        >
          {filters.map((f) => (
            <button
              key={f.key}
              onClick={() => setFilter(f.key)}
              className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all min-h-[36px] ${
                filter === f.key
                  ? 'bg-cyan-500 text-white'
                  : 'dark:bg-slate-800/60 bg-gray-100 dark:text-gray-300 text-gray-600 hover:bg-gray-200 dark:hover:bg-slate-700'
              }`}
            >
              {f.label}
            </button>
          ))}
        </motion.div>

        {/* Year filter */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-8">
          <span className="text-xs text-gray-500">Year:</span>
          <button
            onClick={() => setYearFilter('all')}
            className={`px-2.5 py-1 rounded-md text-xs transition-all min-h-[32px] ${
              yearFilter === 'all'
                ? 'bg-cyan-500/20 text-cyan-400'
                : 'dark:text-gray-400 text-gray-600 hover:text-cyan-400'
            }`}
          >
            All
          </button>
          {allTalkYears.map((y) => (
            <button
              key={y}
              onClick={() => setYearFilter(y)}
              className={`px-2.5 py-1 rounded-md text-xs transition-all min-h-[32px] ${
                yearFilter === y
                  ? 'bg-cyan-500/20 text-cyan-400'
                  : 'dark:text-gray-400 text-gray-600 hover:text-cyan-400'
              }`}
            >
              {y}
            </button>
          ))}
        </div>

        {/* Timeline */}
        <div className="relative max-w-4xl mx-auto">
          {/* Vertical line */}
          <div className="absolute left-4 sm:left-1/2 top-0 bottom-0 w-px dark:bg-white/10 bg-gray-200 sm:-translate-x-1/2" />

          <div className="space-y-8">
            {filtered.map((talk, i) => {
              const Icon = typeIcons[talk.type];
              const isLeft = i % 2 === 0;

              return (
                <motion.div
                  key={talk.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-50px' }}
                  transition={{ duration: 0.4 }}
                  className={`relative flex items-start gap-6 sm:gap-0 ${
                    isLeft ? 'sm:flex-row' : 'sm:flex-row-reverse'
                  }`}
                >
                  {/* Timeline dot */}
                  <div className="absolute left-4 sm:left-1/2 top-6 -translate-x-1/2 z-10">
                    <div className="w-8 h-8 rounded-full bg-cyan-500 flex items-center justify-center ring-4 dark:ring-[#0a0e27] ring-gray-50">
                      <Icon size={14} className="text-white" />
                    </div>
                  </div>

                  {/* Spacer for desktop */}
                  <div className="hidden sm:block sm:w-1/2" />

                  {/* Content card */}
                  <div
                    className={`flex-1 ml-12 sm:ml-0 sm:w-1/2 ${
                      isLeft ? 'sm:pl-8' : 'sm:pr-8'
                    }`}
                  >
                    <div className="p-5 rounded-2xl dark:bg-slate-800/40 bg-white border dark:border-white/5 border-gray-200 hover:dark:border-cyan-500/30 hover:border-cyan-400/40 transition-all">
                      {/* Type badge + date */}
                      <div className="flex items-center justify-between gap-2 mb-3">
                        <span
                          className={`text-xs px-2 py-0.5 rounded-full border ${talkTypeColors[talk.type]}`}
                        >
                          {talkTypeLabels[talk.type]}
                        </span>
                        <span className="text-xs text-gray-500 dark:text-gray-400 flex items-center gap-1">
                          <Calendar size={12} />
                          {formatTalkDate(talk.date)}
                        </span>
                      </div>

                      {/* Title */}
                      <h3 className="font-semibold dark:text-white text-gray-900 leading-snug">
                        {talk.title}
                      </h3>

                      {/* Event + venue */}
                      <p className="mt-2 text-sm font-medium text-cyan-500">
                        {talk.event}
                      </p>
                      <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                        {talk.venue}
                      </p>
                      <p className="text-sm text-gray-500 dark:text-gray-400 flex items-center gap-1 mt-1">
                        <MapPin size={12} />
                        {talk.location}
                      </p>

                      {/* Description */}
                      <p className="mt-3 text-sm text-gray-500 dark:text-gray-400">
                        {talk.description}
                      </p>

                      {/* Links */}
                      {(talk.url || talk.slidesUrl || talk.videoUrl) && (
                        <div className="flex flex-wrap gap-3 mt-4">
                          {talk.url && talk.url !== '#' && (
                            <a
                              href={talk.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex items-center gap-1 text-xs font-medium text-cyan-500 hover:text-cyan-400 min-h-[32px]"
                            >
                              <ExternalLink size={12} />
                              Event
                            </a>
                          )}
                          {talk.slidesUrl && talk.slidesUrl !== '#' && (
                            <a
                              href={talk.slidesUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex items-center gap-1 text-xs font-medium text-gray-500 hover:text-cyan-400 min-h-[32px]"
                            >
                              <FileText size={12} />
                              Slides
                            </a>
                          )}
                          {talk.videoUrl && talk.videoUrl !== '#' && (
                            <a
                              href={talk.videoUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex items-center gap-1 text-xs font-medium text-gray-500 hover:text-cyan-400 min-h-[32px]"
                            >
                              <Video size={12} />
                              Recording
                            </a>
                          )}
                        </div>
                      )}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {filtered.length === 0 && (
          <div className="text-center py-12">
            <Calendar size={40} className="mx-auto text-gray-400 mb-4" />
            <p className="text-gray-500 dark:text-gray-400">
              No talks match your filters.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
