'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '@/lib/language-context';
import { X, ExternalLink, Github, Calendar, Users, BarChart3, Cpu } from 'lucide-react';

interface ProjectDetail {
  icon: string;
  name: string;
  cat: string;
  desc: string;
  fullDesc?: string;
  techStack?: string[];
  highlights?: string[];
  year?: string;
  teamSize?: string;
  impact?: string;
  link?: string;
  github?: string;
}

interface ProjectModalProps {
  project: ProjectDetail | null;
  isOpen: boolean;
  onClose: () => void;
}

const categoryColors: Record<string, string> = {
  research: 'from-violet-500/20 to-violet-500/5 border-violet-500/30',
  app: 'from-cyan-500/20 to-cyan-500/5 border-cyan-500/30',
  training: 'from-emerald-500/20 to-emerald-500/5 border-emerald-500/30',
  business: 'from-amber-500/20 to-amber-500/5 border-amber-500/30',
};

export default function ProjectDetailModal({ project, isOpen, onClose }: ProjectModalProps) {
  const { language } = useLanguage();

  const labels = {
    close: language === 'ar' ? 'إغلاق' : language === 'fr' ? 'Fermer' : 'Close',
    techStack: language === 'ar' ? 'التقنيات المستخدمة' : language === 'fr' ? 'Technologies' : 'Tech Stack',
    highlights: language === 'ar' ? 'أبرز الإنجازات' : language === 'fr' ? 'Points forts' : 'Key Highlights',
    year: language === 'ar' ? 'السنة' : language === 'fr' ? 'Année' : 'Year',
    teamSize: language === 'ar' ? 'حجم الفريق' : language === 'fr' ? "Taille de l'équipe" : 'Team Size',
    impact: language === 'ar' ? 'التأثير' : language === 'fr' ? 'Impact' : 'Impact',
    viewProject: language === 'ar' ? 'مشاهدة المشروع' : language === 'fr' ? 'Voir le projet' : 'View Project',
  };

  if (!project) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[80] flex items-center justify-center p-4"
          onClick={onClose}
        >
          <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" />

          <motion.div
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 20 }}
            transition={{ type: 'spring', stiffness: 300, damping: 25 }}
            className="relative w-full max-w-2xl max-h-[85vh] rounded-2xl overflow-hidden border border-white/10 flex flex-col"
            style={{ background: 'rgba(10, 14, 39, 0.98)', backdropFilter: 'blur(24px)' }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header with gradient */}
            <div className={`relative p-6 bg-gradient-to-br ${categoryColors[project.cat] || categoryColors.app}`}>
              <button
                onClick={onClose}
                className="absolute top-4 right-4 w-8 h-8 rounded-lg hover:bg-white/10 flex items-center justify-center text-gray-400 hover:text-white transition-colors"
              >
                <X size={18} />
              </button>
              <div className="text-5xl mb-3">{project.icon}</div>
              <h2 className="text-white font-extrabold text-xl sm:text-2xl">{project.name}</h2>
              <span className="inline-block mt-2 px-3 py-1 rounded-full text-xs font-semibold bg-white/10 text-white/80 uppercase tracking-wide">
                {project.cat}
              </span>
            </div>

            {/* Scrollable content */}
            <div className="flex-1 overflow-y-auto p-6 space-y-6">
              {/* Description */}
              <div>
                <p className="dark:text-gray-300 text-gray-600 leading-relaxed">
                  {project.fullDesc || project.desc}
                </p>
              </div>

              {/* Meta info */}
              {(project.year || project.teamSize || project.impact) && (
                <div className="grid grid-cols-3 gap-3">
                  {project.year && (
                    <div className="glass-card rounded-xl p-3 text-center">
                      <Calendar size={16} className="text-cyan-400 mx-auto mb-1" />
                      <div className="text-xs text-gray-400">{labels.year}</div>
                      <div className="text-white font-bold text-sm">{project.year}</div>
                    </div>
                  )}
                  {project.teamSize && (
                    <div className="glass-card rounded-xl p-3 text-center">
                      <Users size={16} className="text-cyan-400 mx-auto mb-1" />
                      <div className="text-xs text-gray-400">{labels.teamSize}</div>
                      <div className="text-white font-bold text-sm">{project.teamSize}</div>
                    </div>
                  )}
                  {project.impact && (
                    <div className="glass-card rounded-xl p-3 text-center">
                      <BarChart3 size={16} className="text-cyan-400 mx-auto mb-1" />
                      <div className="text-xs text-gray-400">{labels.impact}</div>
                      <div className="text-white font-bold text-sm">{project.impact}</div>
                    </div>
                  )}
                </div>
              )}

              {/* Tech Stack */}
              {project.techStack && project.techStack.length > 0 && (
                <div>
                  <h3 className="text-white font-bold text-sm mb-3 flex items-center gap-2">
                    <Cpu size={14} className="text-cyan-400" />
                    {labels.techStack}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {project.techStack.map((tech, i) => (
                      <span
                        key={i}
                        className="px-3 py-1.5 rounded-lg text-xs font-medium bg-cyan-500/10 text-cyan-400 border border-cyan-500/20"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Highlights */}
              {project.highlights && project.highlights.length > 0 && (
                <div>
                  <h3 className="text-white font-bold text-sm mb-3 flex items-center gap-2">
                    <BarChart3 size={14} className="text-amber-400" />
                    {labels.highlights}
                  </h3>
                  <ul className="space-y-2">
                    {project.highlights.map((h, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-gray-300">
                        <span className="text-cyan-400 mt-1">•</span>
                        {h}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

            {/* Footer actions */}
            {(project.link || project.github) && (
              <div className="px-6 py-4 border-t border-white/10 flex gap-3">
                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 px-4 py-2.5 rounded-xl bg-gradient-to-r from-cyan-500 to-cyan-600 text-white text-sm font-semibold flex items-center justify-center gap-2 hover:from-cyan-400 hover:to-cyan-500 transition-all"
                  >
                    <ExternalLink size={14} />
                    {labels.viewProject}
                  </a>
                )}
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white text-sm font-medium flex items-center gap-2 hover:bg-white/10 transition-all"
                  >
                    <Github size={14} />
                    GitHub
                  </a>
                )}
              </div>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
