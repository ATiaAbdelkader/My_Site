'use client';

import { motion } from 'framer-motion';
import { useLanguage } from '@/lib/language-context';

interface SkillBarProps {
  label: string;
  value: number;
  delay: number;
}

function SkillBar({ label, value, delay }: SkillBarProps) {
  return (
    <div className="space-y-2">
      <div className="flex justify-between items-center">
        <span className="text-sm font-medium dark:text-gray-300 text-gray-600">{label}</span>
        <span className="text-sm font-bold dark:text-cyan-400 text-cyan-600">{value}%</span>
      </div>
      <div className="h-2 rounded-full dark:bg-white/10 bg-gray-200 overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${value}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, delay, ease: 'easeOut' }}
          className="h-full rounded-full bg-gradient-to-r from-cyan-500 to-cyan-400"
        />
      </div>
    </div>
  );
}

interface SkillCategoryProps {
  title: string;
  skills: Array<{ label: string; value: number }>;
  delay: number;
  colorIndex: number;
}

const colors = [
  'from-cyan-500 to-cyan-400',
  'from-amber-500 to-amber-400',
  'from-emerald-500 to-emerald-400',
  'from-violet-500 to-violet-400',
];

const bgColors = [
  'dark:bg-cyan-500/10 bg-cyan-50 dark:border-cyan-500/20 border-cyan-200',
  'dark:bg-amber-500/10 bg-amber-50 dark:border-amber-500/20 border-amber-200',
  'dark:bg-emerald-500/10 bg-emerald-50 dark:border-emerald-500/20 border-emerald-200',
  'dark:bg-violet-500/10 bg-violet-50 dark:border-violet-500/20 border-violet-200',
];

function SkillCategory({ title, skills, delay, colorIndex }: SkillCategoryProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5, delay }}
      className={`glass-card rounded-2xl p-6 border ${bgColors[colorIndex]}`}
    >
      <h3 className="text-lg font-bold dark:text-white text-gray-900 mb-5">{title}</h3>
      <div className="space-y-4">
        {skills.map((skill, i) => (
          <SkillBar key={i} label={skill.label} value={skill.value} delay={delay + i * 0.1} />
        ))}
      </div>
    </motion.div>
  );
}

export default function Skills() {
  const { t } = useLanguage();

  const categories = [
    {
      title: t.skills.research.title,
      skills: [
        { label: t.skills.research.dataAnalysis, value: 95 },
        { label: t.skills.research.experimentalDesign, value: 90 },
        { label: t.skills.research.scientificWriting, value: 92 },
      ],
    },
    {
      title: t.skills.technical.title,
      skills: [
        { label: t.skills.technical.powerBi, value: 90 },
        { label: t.skills.technical.rExcel, value: 88 },
        { label: t.skills.technical.edrawMax, value: 85 },
      ],
    },
    {
      title: t.skills.agricultural.title,
      skills: [
        { label: t.skills.agricultural.livestock, value: 96 },
        { label: t.skills.agricultural.breeding, value: 93 },
        { label: t.skills.agricultural.nutrition, value: 90 },
        { label: t.skills.agricultural.precision, value: 88 },
      ],
    },
    {
      title: t.skills.training.title,
      skills: [
        { label: t.skills.training.fbs, value: 95 },
        { label: t.skills.training.programDesign, value: 88 },
        { label: t.skills.training.communication, value: 92 },
      ],
    },
  ];

  return (
    <section id="skills" className="section-padding relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="text-cyan-400 text-sm font-semibold">{t.skills.sectionLabel}</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold dark:text-white text-gray-900 mt-3 gradient-border inline-block pb-3">
            {t.skills.title}
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((cat, i) => (
            <SkillCategory
              key={i}
              title={cat.title}
              skills={cat.skills}
              delay={i * 0.1}
              colorIndex={i}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
