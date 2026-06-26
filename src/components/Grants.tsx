'use client';

import { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import {
  DollarSign,
  TrendingUp,
  Award,
  Clock,
  Calendar,
  User,
  Tag,
} from 'lucide-react';
import {
  grants,
  statusLabels,
  statusColors,
  roleLabels,
  formatAmount,
  formatDateRange,
  totalFunding,
  ongoingGrants,
  GrantStatus,
} from '@/data/grants';

type FilterStatus = 'all' | GrantStatus;

export default function Grants() {
  const [filter, setFilter] = useState<FilterStatus>('all');

  const filters: { key: FilterStatus; label: string }[] = [
    { key: 'all', label: 'All' },
    { key: 'ongoing', label: 'Ongoing' },
    { key: 'completed', label: 'Completed' },
    { key: 'pending', label: 'Pending' },
  ];

  const filtered = useMemo(() => {
    return grants
      .filter((g) => filter === 'all' || g.status === filter)
      .sort((a, b) => new Date(b.startDate).getTime() - new Date(a.startDate).getTime());
  }, [filter]);

  const stats = [
    {
      icon: DollarSign,
      value: formatAmount(totalFunding, 'USD'),
      label: 'Total Funding',
      color: 'text-emerald-400',
    },
    {
      icon: Award,
      value: grants.length,
      label: 'Total Grants',
      color: 'text-cyan-400',
    },
    {
      icon: Clock,
      value: ongoingGrants.length,
      label: 'Ongoing',
      color: 'text-amber-400',
    },
    {
      icon: TrendingUp,
      value: grants.filter((g) => g.role === 'pi').length,
      label: 'As PI',
      color: 'text-purple-400',
    },
  ];

  return (
    <section id="grants" className="section-padding relative">
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
            <DollarSign size={16} />
            Research Funding
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold dark:text-white text-gray-900 mt-3 gradient-border inline-block pb-3">
            Grants &amp; Funding
          </h2>
          <p className="mt-4 text-gray-500 dark:text-gray-400 max-w-2xl mx-auto">
            Successfully secured research funding from national and
            international organizations to advance animal science and digital
            agriculture.
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
              <div className={`text-xl sm:text-2xl font-bold ${stat.color}`}>
                {stat.value}
              </div>
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

        {/* Grants list */}
        <div className="space-y-4 max-w-5xl mx-auto">
          {filtered.map((grant, i) => (
            <motion.div
              key={grant.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="p-5 rounded-2xl dark:bg-slate-800/40 bg-white border dark:border-white/5 border-gray-200 hover:dark:border-cyan-500/30 hover:border-cyan-400/40 transition-all"
            >
              <div className="flex flex-col sm:flex-row sm:items-start gap-4">
                {/* Amount badge */}
                <div className="flex sm:flex-col items-center sm:items-start gap-3 sm:gap-1 sm:min-w-[120px]">
                  <div
                    className={`text-2xl font-bold ${
                      grant.status === 'pending'
                        ? 'text-amber-400'
                        : 'text-emerald-400'
                    }`}
                  >
                    {formatAmount(grant.amount, grant.currency)}
                  </div>
                  <span
                    className={`text-xs px-2 py-0.5 rounded-full border ${statusColors[grant.status]}`}
                  >
                    {statusLabels[grant.status]}
                  </span>
                </div>

                {/* Content */}
                <div className="flex-1 min-w-0">
                  <h3 className="font-semibold dark:text-white text-gray-900 leading-snug">
                    {grant.title}
                  </h3>
                  <p className="text-sm font-medium text-cyan-500 mt-1">
                    {grant.funder}
                  </p>

                  <div className="flex flex-wrap items-center gap-3 mt-3 text-xs text-gray-500 dark:text-gray-400">
                    <span className="flex items-center gap-1">
                      <User size={12} />
                      {roleLabels[grant.role]}
                    </span>
                    {grant.pi && (
                      <span className="flex items-center gap-1">
                        <User size={12} />
                        PI: {grant.pi}
                      </span>
                    )}
                    <span className="flex items-center gap-1">
                      <Calendar size={12} />
                      {formatDateRange(grant.startDate, grant.endDate)}
                    </span>
                  </div>

                  <p className="mt-3 text-sm text-gray-500 dark:text-gray-400">
                    {grant.description}
                  </p>

                  {grant.topics && grant.topics.length > 0 && (
                    <div className="flex flex-wrap gap-1.5 mt-3">
                      {grant.topics.map((topic) => (
                        <span
                          key={topic}
                          className="text-xs px-2 py-0.5 rounded-full dark:bg-slate-700/50 bg-gray-100 dark:text-gray-300 text-gray-600"
                        >
                          {topic}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="text-center py-12">
            <DollarSign size={40} className="mx-auto text-gray-400 mb-4" />
            <p className="text-gray-500 dark:text-gray-400">
              No grants match your filter.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
