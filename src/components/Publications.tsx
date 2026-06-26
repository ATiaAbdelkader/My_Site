'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  ExternalLink,
  FileText,
  Quote,
  Copy,
  Check,
  ChevronRight,
  BookOpen,
  Award,
} from 'lucide-react';
import {
  featuredPublications,
  publicationTypeLabels,
  publicationTypeColors,
  totalCitations,
  publications,
  Publication,
} from '@/data/publications';
import {
  generateCitation,
  citationStyleLabels,
  copyToClipboard,
  CitationStyle,
} from '@/lib/citation';

export default function Publications() {
  const [selectedPub, setSelectedPub] = useState<Publication | null>(null);
  const [citationStyle, setCitationStyle] = useState<CitationStyle>('apa');
  const [copied, setCopied] = useState(false);

  const stats = [
    {
      icon: FileText,
      value: publications.length,
      label: 'Publications',
      color: 'text-blue-400',
    },
    {
      icon: Quote,
      value: totalCitations,
      label: 'Citations',
      color: 'text-cyan-400',
    },
    {
      icon: Award,
      value: new Set(publications.map((p) => p.journal)).size,
      label: 'Journals',
      color: 'text-purple-400',
    },
  ];

  const handleCopyCitation = async (pub: Publication, style: CitationStyle) => {
    const citation = generateCitation(pub, style);
    // Strip HTML tags for plain-text clipboard
    const plainText = citation.replace(/<[^>]+>/g, '');
    const success = await copyToClipboard(style === 'bibtex' ? citation : plainText);
    if (success) {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <section id="publications" className="section-padding relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <span className="text-cyan-400 text-sm font-semibold flex items-center justify-center gap-2">
            <BookOpen size={16} />
            Research Output
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold dark:text-white text-gray-900 mt-3 gradient-border inline-block pb-3">
            Publications
          </h2>
          <p className="mt-4 text-gray-500 dark:text-gray-400 max-w-2xl mx-auto">
            Peer-reviewed research contributing to animal sciences, sustainable
            agriculture, and digital innovation.
          </p>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="grid grid-cols-3 gap-3 sm:gap-6 mb-12 max-w-2xl mx-auto"
        >
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="text-center p-3 sm:p-5 rounded-xl dark:bg-slate-800/40 bg-gray-50 border dark:border-white/5 border-gray-200"
            >
              <stat.icon
                className={`mx-auto mb-2 ${stat.color}`}
                size={20}
              />
              <div className={`text-2xl sm:text-3xl font-bold ${stat.color}`}>
                {stat.value}
              </div>
              <div className="text-xs sm:text-sm text-gray-500 dark:text-gray-400 mt-1">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>

        {/* Featured publications list */}
        <div className="space-y-4">
          {featuredPublications.map((pub, i) => (
            <motion.article
              key={pub.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="group relative p-5 sm:p-6 rounded-2xl dark:bg-slate-800/40 bg-white border dark:border-white/5 border-gray-200 hover:dark:border-cyan-500/30 hover:border-cyan-400/40 transition-all"
            >
              <div className="flex flex-col sm:flex-row sm:items-start gap-4">
                {/* Year badge */}
                <div className="flex sm:flex-col items-center sm:items-start gap-2 sm:gap-1 sm:min-w-[70px]">
                  <span className="text-2xl font-bold text-cyan-400">
                    {pub.year}
                  </span>
                  <span
                    className={`text-xs px-2 py-0.5 rounded-full border ${publicationTypeColors[pub.type]}`}
                  >
                    {publicationTypeLabels[pub.type]}
                  </span>
                </div>

                {/* Content */}
                <div className="flex-1 min-w-0">
                  <h3 className="text-lg font-semibold dark:text-white text-gray-900 leading-snug group-hover:text-cyan-500 transition-colors">
                    {pub.title}
                  </h3>
                  <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
                    {pub.authors.join(', ')}
                  </p>
                  <p className="mt-1 text-sm italic text-gray-600 dark:text-gray-300">
                    {pub.journal}
                    {pub.volume && `, ${pub.volume}`}
                    {pub.issue && `(${pub.issue})`}
                    {pub.pages && `: ${pub.pages}`}
                  </p>

                  {pub.abstract && (
                    <p className="mt-3 text-sm text-gray-500 dark:text-gray-400 line-clamp-2">
                      {pub.abstract}
                    </p>
                  )}

                  {/* Tags */}
                  {pub.tags && pub.tags.length > 0 && (
                    <div className="flex flex-wrap gap-1.5 mt-3">
                      {pub.tags.slice(0, 4).map((tag) => (
                        <span
                          key={tag}
                          className="text-xs px-2 py-0.5 rounded-full dark:bg-slate-700/50 bg-gray-100 dark:text-gray-300 text-gray-600"
                        >
                          #{tag}
                        </span>
                      ))}
                    </div>
                  )}

                  {/* Actions */}
                  <div className="flex flex-wrap items-center gap-3 mt-4">
                    {pub.citations !== undefined && (
                      <span className="flex items-center gap-1 text-xs text-gray-500 dark:text-gray-400">
                        <Quote size={12} />
                        {pub.citations} citations
                      </span>
                    )}
                    <button
                      onClick={() => {
                        setSelectedPub(pub);
                        setCopied(false);
                      }}
                      className="flex items-center gap-1 text-xs font-medium text-cyan-500 hover:text-cyan-400 transition-colors min-h-[36px]"
                    >
                      <FileText size={14} />
                      Cite
                    </button>
                    {pub.url && pub.url !== '#' && (
                      <a
                        href={pub.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1 text-xs font-medium text-gray-500 hover:text-cyan-500 transition-colors min-h-[36px]"
                      >
                        <ExternalLink size={14} />
                        View
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        {/* View all publications link */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="text-center mt-10"
        >
          <a
            href="/publications"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-cyan-500/10 text-cyan-400 border border-cyan-500/30 hover:bg-cyan-500/20 transition-all font-medium min-h-[44px]"
          >
            View All Publications
            <ChevronRight size={18} />
          </a>
        </motion.div>
      </div>

      {/* Citation Modal */}
      {selectedPub && (
        <CitationModal
          pub={selectedPub}
          style={citationStyle}
          onStyleChange={setCitationStyle}
          onClose={() => setSelectedPub(null)}
          onCopy={() => handleCopyCitation(selectedPub, citationStyle)}
          copied={copied}
        />
      )}
    </section>
  );
}

/** Citation modal with style switcher and copy button */
function CitationModal({
  pub,
  style,
  onStyleChange,
  onClose,
  onCopy,
  copied,
}: {
  pub: Publication;
  style: CitationStyle;
  onStyleChange: (s: CitationStyle) => void;
  onClose: () => void;
  onCopy: () => void;
  copied: boolean;
}) {
  const citation = generateCitation(pub, style);
  const isBibTex = style === 'bibtex';

  return (
    <div
      className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
      onClick={onClose}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="w-full max-w-2xl rounded-2xl dark:bg-slate-900 bg-white border dark:border-white/10 border-gray-200 shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="p-5 border-b dark:border-white/10 border-gray-200">
          <div className="flex items-start justify-between gap-4">
            <div className="flex-1 min-w-0">
              <h3 className="font-semibold dark:text-white text-gray-900 leading-snug">
                {pub.title}
              </h3>
              <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                {pub.authors.join(', ')} · {pub.journal} · {pub.year}
              </p>
            </div>
            <button
              onClick={onClose}
              className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-slate-800 text-gray-500 min-w-[44px] min-h-[44px] flex items-center justify-center"
              aria-label="Close"
            >
              ✕
            </button>
          </div>
        </div>

        {/* Style tabs */}
        <div className="px-5 pt-4">
          <div className="flex flex-wrap gap-2">
            {(Object.keys(citationStyleLabels) as CitationStyle[]).map(
              (s) => (
                <button
                  key={s}
                  onClick={() => onStyleChange(s)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all min-h-[36px] ${
                    style === s
                      ? 'bg-cyan-500 text-white'
                      : 'dark:bg-slate-800 bg-gray-100 dark:text-gray-300 text-gray-600 hover:bg-gray-200 dark:hover:bg-slate-700'
                  }`}
                >
                  {citationStyleLabels[s]}
                </button>
              )
            )}
          </div>
        </div>

        {/* Citation preview */}
        <div className="p-5">
          <div className="relative">
            <pre
              className={`p-4 rounded-xl dark:bg-slate-800/60 bg-gray-50 dark:text-gray-200 text-gray-700 text-sm overflow-x-auto whitespace-pre-wrap break-words border dark:border-white/5 border-gray-200 ${
                isBibTex ? 'font-mono' : 'font-serif'
              }`}
            >
              {isBibTex
                ? citation
                : citation.replace(/<[^>]+>/g, '')}
            </pre>
            <button
              onClick={onCopy}
              className="absolute top-3 right-3 p-2 rounded-lg dark:bg-slate-700/80 bg-white/80 backdrop-blur hover:bg-slate-600 text-gray-400 hover:text-white transition-all min-h-[36px] min-w-[36px] flex items-center justify-center"
              aria-label="Copy citation"
            >
              {copied ? (
                <Check size={16} className="text-green-400" />
              ) : (
                <Copy size={16} />
              )}
            </button>
          </div>
          {copied && (
            <p className="mt-2 text-xs text-green-400 flex items-center gap-1">
              <Check size={12} />
              Copied to clipboard!
            </p>
          )}
        </div>

        {/* Footer with DOI link */}
        {pub.doi && (
          <div className="px-5 pb-5">
            <a
              href={`https://doi.org/${pub.doi}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-cyan-400 hover:text-cyan-300 flex items-center gap-1"
            >
              <ExternalLink size={12} />
              DOI: {pub.doi}
            </a>
          </div>
        )}
      </motion.div>
    </div>
  );
}
