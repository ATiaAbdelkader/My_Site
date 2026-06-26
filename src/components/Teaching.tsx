'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  GraduationCap,
  Users,
  BookOpen,
  Award,
  Calendar,
  MapPin,
  Clock,
  UserCheck,
  ChevronDown,
} from 'lucide-react';
import {
  courses,
  supervisions,
  workshops,
  levelLabels,
  levelColors,
  roleLabels,
  degreeLabels,
  degreeColors,
  totalStudents,
} from '@/data/teaching';

type Tab = 'courses' | 'supervision' | 'workshops';

export default function Teaching() {
  const [activeTab, setActiveTab] = useState<Tab>('courses');
  const [expandedCourse, setExpandedCourse] = useState<string | null>(null);

  const stats = [
    { icon: BookOpen, value: courses.length, label: 'Courses', color: 'text-blue-400' },
    { icon: Users, value: totalStudents, label: 'Students Taught', color: 'text-cyan-400' },
    { icon: GraduationCap, value: supervisions.length, label: 'Supervisions', color: 'text-purple-400' },
    { icon: Award, value: workshops.length, label: 'Workshops', color: 'text-amber-400' },
  ];

  const tabs: { key: Tab; label: string; count: number }[] = [
    { key: 'courses', label: 'Courses', count: courses.length },
    { key: 'supervision', label: 'Supervision', count: supervisions.length },
    { key: 'workshops', label: 'Workshops', count: workshops.length },
  ];

  return (
    <section id="teaching" className="section-padding relative">
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
            <GraduationCap size={16} />
            Academic Engagement
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold dark:text-white text-gray-900 mt-3 gradient-border inline-block pb-3">
            Teaching &amp; Supervision
          </h2>
          <p className="mt-4 text-gray-500 dark:text-gray-400 max-w-2xl mx-auto">
            Sharing knowledge through university courses, student supervision,
            and professional training workshops for the next generation of
            agricultural scientists.
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

        {/* Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="flex flex-wrap justify-center gap-2 mb-8"
        >
          {tabs.map((tab) => (
            <button
              key={tab.key}
              onClick={() => setActiveTab(tab.key)}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all min-h-[44px] ${
                activeTab === tab.key
                  ? 'bg-cyan-500 text-white'
                  : 'dark:bg-slate-800/60 bg-gray-100 dark:text-gray-300 text-gray-600 hover:bg-gray-200 dark:hover:bg-slate-700'
              }`}
            >
              {tab.label}
              <span
                className={`text-xs px-1.5 py-0.5 rounded-full ${
                  activeTab === tab.key
                    ? 'bg-white/20'
                    : 'dark:bg-slate-700 bg-gray-200'
                }`}
              >
                {tab.count}
              </span>
            </button>
          ))}
        </motion.div>

        {/* Content */}
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="max-w-5xl mx-auto"
        >
          {/* Courses tab */}
          {activeTab === 'courses' && (
            <div className="space-y-4">
              {courses.map((course, i) => (
                <motion.div
                  key={course.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: i * 0.05 }}
                  className="p-5 rounded-2xl dark:bg-slate-800/40 bg-white border dark:border-white/5 border-gray-200"
                >
                  <button
                    onClick={() =>
                      setExpandedCourse(
                        expandedCourse === course.id ? null : course.id
                      )
                    }
                    className="w-full text-left"
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 mb-2">
                          <span
                            className={`text-xs px-2 py-0.5 rounded-full border ${levelColors[course.level]}`}
                          >
                            {levelLabels[course.level]}
                          </span>
                          <span className="text-xs text-gray-500 font-mono">
                            {course.code}
                          </span>
                        </div>
                        <h3 className="font-semibold dark:text-white text-gray-900 leading-snug">
                          {course.title}
                        </h3>
                        <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                          {course.institution} · {roleLabels[course.role]}
                        </p>
                      </div>
                      <div className="flex flex-col items-end gap-2 flex-shrink-0">
                        <span className="text-sm text-gray-500 dark:text-gray-400 flex items-center gap-1">
                          <Calendar size={12} />
                          {course.year}
                          {course.semester && ` · ${course.semester}`}
                        </span>
                        {course.studentsCount && (
                          <span className="text-xs text-cyan-400 flex items-center gap-1">
                            <Users size={12} />
                            {course.studentsCount} students
                          </span>
                        )}
                        <ChevronDown
                          size={16}
                          className={`text-gray-400 transition-transform ${
                            expandedCourse === course.id ? 'rotate-180' : ''
                          }`}
                        />
                      </div>
                    </div>
                  </button>

                  {/* Expanded content */}
                  {expandedCourse === course.id && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      transition={{ duration: 0.3 }}
                      className="mt-4 pt-4 border-t dark:border-white/10 border-gray-200"
                    >
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        {course.description}
                      </p>
                      {course.topics && course.topics.length > 0 && (
                        <div className="flex flex-wrap gap-1.5 mt-3">
                          {course.topics.map((topic) => (
                            <span
                              key={topic}
                              className="text-xs px-2 py-0.5 rounded-full dark:bg-slate-700/50 bg-gray-100 dark:text-gray-300 text-gray-600"
                            >
                              {topic}
                            </span>
                          ))}
                        </div>
                      )}
                    </motion.div>
                  )}
                </motion.div>
              ))}
            </div>
          )}

          {/* Supervision tab */}
          {activeTab === 'supervision' && (
            <div className="space-y-4">
              {supervisions.map((sup, i) => (
                <motion.div
                  key={sup.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: i * 0.05 }}
                  className="p-5 rounded-2xl dark:bg-slate-800/40 bg-white border dark:border-white/5 border-gray-200"
                >
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-cyan-500/10 flex items-center justify-center">
                      <GraduationCap size={18} className="text-cyan-400" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-2 flex-wrap">
                        <span
                          className={`text-xs px-2 py-0.5 rounded-full border ${degreeColors[sup.degree]}`}
                        >
                          {degreeLabels[sup.degree]}
                        </span>
                        <span className="text-xs text-gray-500">
                          {sup.role === 'supervisor'
                            ? 'Supervisor'
                            : sup.role === 'co-supervisor'
                              ? 'Co-Supervisor'
                              : 'Advisor'}
                        </span>
                        <span
                          className={`text-xs px-2 py-0.5 rounded-full ${
                            sup.status === 'ongoing'
                              ? 'bg-emerald-500/10 text-emerald-400'
                              : 'bg-gray-500/10 text-gray-400'
                          }`}
                        >
                          {sup.status === 'ongoing' ? '● Ongoing' : '✓ Completed'}
                        </span>
                      </div>
                      <h3 className="font-semibold dark:text-white text-gray-900 leading-snug">
                        {sup.thesisTitle}
                      </h3>
                      <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                        {sup.studentName} · {sup.year}
                        {sup.institution && ` · ${sup.institution}`}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          )}

          {/* Workshops tab */}
          {activeTab === 'workshops' && (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {workshops.map((ws, i) => (
                <motion.div
                  key={ws.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: i * 0.05 }}
                  className="p-5 rounded-2xl dark:bg-slate-800/40 bg-white border dark:border-white/5 border-gray-200"
                >
                  <div className="flex items-center gap-2 mb-3">
                    <div className="flex-shrink-0 w-9 h-9 rounded-lg bg-amber-500/10 flex items-center justify-center">
                      <Award size={16} className="text-amber-400" />
                    </div>
                    <span className="text-xs text-gray-500 dark:text-gray-400">
                      Workshop
                    </span>
                  </div>
                  <h3 className="font-semibold dark:text-white text-gray-900 leading-snug">
                    {ws.title}
                  </h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">
                    {ws.description}
                  </p>
                  <div className="mt-4 space-y-1.5 text-xs text-gray-500 dark:text-gray-400">
                    <div className="flex items-center gap-1.5">
                      <Users size={12} />
                      {ws.audience}
                      {ws.participantsCount && ` · ${ws.participantsCount} participants`}
                    </div>
                    <div className="flex items-center gap-1.5">
                      <Calendar size={12} />
                      {new Date(ws.date).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric',
                      })}
                    </div>
                    <div className="flex items-center gap-1.5">
                      <MapPin size={12} />
                      {ws.location}
                    </div>
                    {ws.duration && (
                      <div className="flex items-center gap-1.5">
                        <Clock size={12} />
                        {ws.duration}
                      </div>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          )}
        </motion.div>
      </div>
    </section>
  );
}
