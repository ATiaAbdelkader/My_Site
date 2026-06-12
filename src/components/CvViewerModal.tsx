'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '@/lib/language-context';
import { X, Download, ZoomIn, ZoomOut, ChevronLeft, ChevronRight } from 'lucide-react';

export default function CvViewerModal() {
  const { language } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const [zoom, setZoom] = useState(100);

  const cvPath = '/CV_AbdelkaderAtia.pdf';

  const labels = {
    close: language === 'ar' ? 'إغلاق' : language === 'fr' ? 'Fermer' : 'Close',
    download: language === 'ar' ? 'تحميل السيرة الذاتية' : language === 'fr' ? 'Télécharger CV' : 'Download CV',
    zoomIn: language === 'ar' ? 'تكبير' : language === 'fr' ? 'Zoom avant' : 'Zoom In',
    zoomOut: language === 'ar' ? 'تصغير' : language === 'fr' ? 'Zoom arrière' : 'Zoom Out',
    title: language === 'ar' ? 'السيرة الذاتية' : language === 'fr' ? 'Curriculum Vitae' : 'Curriculum Vitae',
  };

  return (
    <>
      {/* Trigger — will be used by About component */}
      <button
        onClick={() => setIsOpen(true)}
        className="px-5 py-2.5 rounded-xl dark:bg-slate-800/60 bg-gray-100 border dark:border-cyan-500/20 border-gray-200 dark:text-white text-gray-700 font-medium text-sm dark:hover:bg-slate-700/60 hover:bg-gray-200 transition-all flex items-center gap-2 min-h-[44px]"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"/><circle cx="12" cy="12" r="3"/></svg>
        {labels.title}
      </button>

      {/* Modal */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[80] flex items-center justify-center p-4"
            onClick={() => setIsOpen(false)}
          >
            {/* Backdrop */}
            <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" />

            {/* Modal content */}
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: 'spring', stiffness: 300, damping: 25 }}
              className="relative w-full max-w-4xl h-[85vh] rounded-2xl overflow-hidden border border-white/10 flex flex-col"
              style={{ background: 'rgba(10, 14, 39, 0.98)', backdropFilter: 'blur(24px)' }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header */}
              <div className="flex items-center justify-between px-5 py-3 border-b border-white/10 bg-white/[0.02]">
                <h3 className="text-white font-bold text-lg">{labels.title}</h3>
                <div className="flex items-center gap-2">
                  {/* Zoom controls */}
                  <button
                    onClick={() => setZoom(Math.max(50, zoom - 25))}
                    className="w-8 h-8 rounded-lg hover:bg-white/10 flex items-center justify-center text-gray-400 hover:text-white transition-colors"
                    title={labels.zoomOut}
                  >
                    <ZoomOut size={16} />
                  </button>
                  <span className="text-gray-400 text-xs font-mono min-w-[40px] text-center">{zoom}%</span>
                  <button
                    onClick={() => setZoom(Math.min(200, zoom + 25))}
                    className="w-8 h-8 rounded-lg hover:bg-white/10 flex items-center justify-center text-gray-400 hover:text-white transition-colors"
                    title={labels.zoomIn}
                  >
                    <ZoomIn size={16} />
                  </button>

                  {/* Download */}
                  <a
                    href={cvPath}
                    download
                    className="ml-2 px-3 py-1.5 rounded-lg bg-gradient-to-r from-cyan-500 to-cyan-600 text-white text-xs font-semibold flex items-center gap-1.5 hover:from-cyan-400 hover:to-cyan-500 transition-all"
                  >
                    <Download size={14} />
                    {labels.download}
                  </a>

                  {/* Close */}
                  <button
                    onClick={() => setIsOpen(false)}
                    className="w-8 h-8 rounded-lg hover:bg-white/10 flex items-center justify-center text-gray-400 hover:text-white transition-colors ml-2"
                  >
                    <X size={18} />
                  </button>
                </div>
              </div>

              {/* PDF Viewer */}
              <div className="flex-1 overflow-auto bg-gray-900/50 flex items-center justify-center p-4">
                <iframe
                  src={`${cvPath}#toolbar=0&navpanes=0`}
                  className="bg-white rounded-lg shadow-2xl transition-transform duration-200"
                  style={{
                    width: `${zoom}%`,
                    height: `${zoom}%`,
                    maxWidth: '200%',
                    maxHeight: '200%',
                    minWidth: '50%',
                    minHeight: '50%',
                  }}
                  title="CV Viewer"
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
