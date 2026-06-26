'use client';

import { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import {
  ExternalLink,
  FileText,
  Quote,
  Copy,
  Check,
  Search,
  BookOpen,
  X,
} from 'lucide-react';
import {
  publications,
  publicationTypeLabels,
  publicationTypeColors,
  totalCitations,
  allTags,
  allYears,
  Publication,
  PublicationType,
} from '@/data/publications';
import {
  generateCitation,
  citationStyleLabels,
  copyToClipboard,
  CitationStyle,
} from '@/lib/citation';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ScrollToTop from '@/components/ScrollToTop';

type FilterType = 'all' | PublicationType;

export default function PublicationsPage() {
  const [filter, setFilter] = useState<FilterType>('all');
  const [yearFilter, setYearFilter] = useState<number | 'all'>('all');
  const [tagFilter, setTagFilter] = useState<string | null>(null);
  const [search, setSearch] = useState('');
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
      label: 'Total Citations',
      color: 'text-cyan-400',
    },
    {
      icon: BookOpen,
      value: new Set(publications.map((p) => p.journal)).size,
      label: 'Journals & Venues',
      color: 'text-purple-400',
    },
    {
      icon: Award,
      value: allYears.length,
      label: 'Active Years',
      color: 'text-emerald-400',
    },
  ];

  const filterTypes: { key: FilterType; label: string }[] = [
    { key: 'all', label: 'All Types' },
    { key: 'journal', label: 'Journal' },
    { key: 'conference', label: 'Conference' },
    { key: 'preprint', label: 'Preprint' },
    { key: 'book-chapter', label: 'Book Chapter' },
    { key: 'book', label: 'Book' },
    { key: 'thesis', label: 'Thesis' },
  ];

  const filtered = useMemo(() => {
    return publications
      .filter((p) => filter === 'all' || p.type === filter)
      .filter((p) => yearFilter === 'all' || p.year === yearFilter)
      .filter((p) => !tagFilter || (p.tags ?? []).includes(tagFilter))
      .filter((p) => {
        if (!search.trim()) return true;
        const q = search.toLowerCase();
        return (
          p.title.toLowerCase().includes(q) ||
          p.authors.some((a) => a.toLowerCase().includes(q)) ||
          p.journal.toLowerCase().includes(q) ||
          (p.abstract ?? '').toLowerCase().includes(q) ||
          (p.tags ?? []).some((t) => t.toLowerCase().includes(q))
        );
      })
      .sort((a, b) => b.year - a.year);
  }, [filter, yearFilter, tagFilter, search]);

  const handleCopyCitation = async (pub: Publication, style: CitationStyle) => {
    const citation = generateCitation(pub, style);
    const plainText = citation.replace(/<[^>]+>/g, '');
    const success = await copyToClipboard(
      style === 'bibtex' ? citation : plainText
    );
    if (success) {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const clearFilters = () => {
    setFilter('all');
    setYearFilter('all');
    setTagFilter(null);
    setSearch('');
  };

  const hasActiveFilters =
    filter !== 'all' || yearFilter !== 'all' || tagFilter !== null || search !== '';

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <ScrollToTop />
      <main className="flex-1 pt-20">
        {/* Hero header */}
        <section className="relative overflow-hidden py-16 sm:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <span className="text-cyan-400 text-sm font-semibold flex items-center justify-center gap-2">
                <BookOpen size={16} />
                Academic Research
              </span>
              <h1 className="text-4xl sm:text-5xl font-extrabold dark:text-white text-gray-900 mt-3">
                Publications
              </h1>
              <p className="mt-4 text-gray-500 dark:text-gray-400 max-w-2xl mx-auto">
                A complete list of peer-reviewed research, conference papers, and
                scholarly contributions in animal sciences and digital agriculture.
              </p>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 mt-10 max-w-3xl mx-auto"
            >
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="p-4 rounded-xl dark:bg-slate-800/40 bg-gray-50 border dark:border-white/5 border-gray-200"
                >
                  <stat.icon className={`mx-auto mb-2 ${stat.color}`} size={22} />
                  <div className={`text-2xl sm:text-3xl font-bold ${stat.color}`}>
                    {stat.value}
                  </div>
                  <div className="text-xs sm:text-sm text-gray-500 dark:text-gray-400 mt-1">
                    {stat.label}
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Filters & Search */}
        <section className="sticky top-16 sm:top-20 z-30 dark:bg-[#0a0e27]/90 bg-white/90 backdrop-blur-xl border-y dark:border-white/10 border-gray-200 py-4">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-3">
            {/* Search bar */}
            <div className="relative max-w-2xl mx-auto">
              <Search
                size={18}
                className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
              />
              <input
                type="text"
                placeholder="Search publications, authors, keywords..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 rounded-xl dark:bg-slate-800/60 bg-gray-100 dark:text-white text-gray-900 dark:border-white/10 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-cyan-500/40 min-h-[44px]"
              />
              {search && (
                <button
                  onClick={() => setSearch('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                >
                  <X size={16} />
                </button>
              )}
            </div>

            {/* Type filters */}
            <div className="flex flex-wrap justify-center gap-2">
              {filterTypes.map((f) => (
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
            </div>

            {/* Year filter */}
            <div className="flex flex-wrap items-center justify-center gap-2">
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
              {allYears.map((y) => (
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

            {/* Active filters + clear */}
            {hasActiveFilters && (
              <div className="flex items-center justify-center gap-2">
                <span className="text-xs text-gray-500">
                  Showing {filtered.length} of {publications.length}
                </span>
                <button
                  onClick={clearFilters}
                  className="text-xs text-cyan-400 hover:text-cyan-300 flex items-center gap-1 min-h-[32px]"
                >
                  <X size={12} />
                  Clear filters
                </button>
              </div>
            )}
          </div>
        </section>

        {/* Publications list */}
        <section className="py-10">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            {filtered.length === 0 ? (
              <div className="text-center py-20">
                <FileText size={40} className="mx-auto text-gray-400 mb-4" />
                <p className="text-gray-500 dark:text-gray-400">
                  No publications match your filters.
                </p>
                <button
                  onClick={clearFilters}
                  className="mt-4 text-cyan-400 hover:text-cyan-300 text-sm"
                >
                  Clear all filters
                </button>
              </div>
            ) : (
              <div className="space-y-4">
                {filtered.map((pub, i) => (
                  <motion.article
                    key={pub.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: i * 0.03 }}
                    className="group p-5 sm:p-6 rounded-2xl dark:bg-slate-800/40 bg-white border dark:border-white/5 border-gray-200 hover:dark:border-cyan-500/30 hover:border-cyan-400/40 transition-all"
                  >
                    <div className="flex flex-col sm:flex-row sm:items-start gap-4">
                      {/* Year + type badge */}
                      <div className="flex sm:flex-col items-center sm:items-start gap-2 sm:gap-1 sm:min-w-[80px]">
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
                        <h2 className="text-lg font-semibold dark:text-white text-gray-900 leading-snug group-hover:text-cyan-500 transition-colors">
                          {pub.title}
                        </h2>
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
                          <p className="mt-3 text-sm text-gray-500 dark:text-gray-400 line-clamp-3">
                            {pub.abstract}
                          </p>
                        )}

                        {pub.tags && pub.tags.length > 0 && (
                          <div className="flex flex-wrap gap-1.5 mt-3">
                            {pub.tags.map((tag) => (
                              <button
                                key={tag}
                                onClick={() =>
                                  setTagFilter(tagFilter === tag ? null : tag)
                                }
                                className={`text-xs px-2 py-0.5 rounded-full transition-all min-h-[28px] ${
                                  tagFilter === tag
                                    ? 'bg-cyan-500 text-white'
                                    : 'dark:bg-slate-700/50 bg-gray-100 dark:text-gray-300 text-gray-600 hover:bg-cyan-500/20 hover:text-cyan-400'
                                }`}
                              >
                                #{tag}
                              </button>
                            ))}
                          </div>
                        )}

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
                              View Paper
                            </a>
                          )}
                          {pub.doi && (
                            <span className="text-xs text-gray-400">
                              DOI: {pub.doi}
                            </span>
                          )}
                        </div>
                      </div>
                    </div>
                  </motion.article>
                ))}
              </div>
            )}
          </div>
        </section>

        {/* Tag cloud */}
        {allTags.length > 0 && (
          <section className="py-10 border-t dark:border-white/5 border-gray-200">
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
              <h3 className="text-center text-sm font-semibold text-gray-500 dark:text-gray-400 mb-4">
                Research Keywords
              </h3>
              <div className="flex flex-wrap justify-center gap-2">
                {allTags.map((tag) => (
                  <button
                    key={tag}
                    onClick={() =>
                      setTagFilter(tagFilter === tag ? null : tag)
                    }
                    className={`text-xs px-3 py-1.5 rounded-full transition-all min-h-[32px] ${
                      tagFilter === tag
                        ? 'bg-cyan-500 text-white'
                        : 'dark:bg-slate-800/60 bg-gray-100 dark:text-gray-300 text-gray-600 hover:bg-cyan-500/20 hover:text-cyan-400'
                    }`}
                  >
                    #{tag.replace(/-/g, ' ')}
                  </button>
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
      <Footer />

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
    </div>
  );
}

/** Award icon (inline since we don't import it at top) */
function Award({ size = 24, className = '' }: { size?: number; className?: string }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <circle cx="12" cy="8" r="6" />
      <path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11" />
    </svg>
  );
}

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
        className="w-full max-w-2xl rounded-2xl dark:bg-slate-900 bg-white border dark:border-white/10 border-gray-200 shadow-2xl max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="p-5 border-b dark:border-white/10 border-gray-200 sticky top-0 dark:bg-slate-900 bg-white">
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

        <div className="p-5">
          <div className="flex flex-wrap gap-2 mb-4">
            {(Object.keys(citationStyleLabels) as CitationStyle[]).map((s) => (
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
            ))}
          </div>

          <div className="relative">
            <pre
              className={`p-4 rounded-xl dark:bg-slate-800/60 bg-gray-50 dark:text-gray-200 text-gray-700 text-sm overflow-x-auto whitespace-pre-wrap break-words border dark:border-white/5 border-gray-200 ${
                isBibTex ? 'font-mono' : 'font-serif'
              }`}
            >
              {isBibTex ? citation : citation.replace(/<[^>]+>/g, '')}
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
