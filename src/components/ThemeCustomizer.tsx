'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '@/lib/language-context';
import { Palette, X, Check } from 'lucide-react';

const accentColors = [
  { name: 'Cyan', primary: '#06b6d4', light: '#22d3ee', value: 'cyan' },
  { name: 'Amber', primary: '#f59e0b', light: '#fbbf24', value: 'amber' },
  { name: 'Emerald', primary: '#10b981', light: '#34d399', value: 'emerald' },
  { name: 'Violet', primary: '#8b5cf6', light: '#a78bfa', value: 'violet' },
  { name: 'Rose', primary: '#f43f5e', light: '#fb7185', value: 'rose' },
  { name: 'Sky', primary: '#0ea5e9', light: '#38bdf8', value: 'sky' },
];

const STORAGE_KEY = 'portfolio-accent-color';

export default function ThemeCustomizer() {
  const { language } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const [currentAccent, setCurrentAccent] = useState('cyan');

  useEffect(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
      applyAccent(saved);
      setCurrentAccent(saved);
    }
  }, []);

  const applyAccent = (colorValue: string) => {
    const color = accentColors.find((c) => c.value === colorValue);
    if (!color) return;

    document.documentElement.style.setProperty('--accent-primary', color.primary);
    document.documentElement.style.setProperty('--accent-light', color.light);

    // Update Tailwind custom properties for gradient-text, glass-card borders, etc
    const root = document.documentElement;
    root.style.setProperty('--custom-cyan', color.primary);
    root.style.setProperty('--custom-cyan-light', color.light);
  };

  const selectAccent = (colorValue: string) => {
    setCurrentAccent(colorValue);
    localStorage.setItem(STORAGE_KEY, colorValue);
    applyAccent(colorValue);
  };

  const labels = {
    title: language === 'ar' ? 'تخصيص المظهر' : language === 'fr' ? 'Personnaliser' : 'Customize',
    accent: language === 'ar' ? 'اللون المميز' : language === 'fr' ? 'Couleur d\'accent' : 'Accent Color',
  };

  return (
    <>
      {/* Toggle button in navbar area */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="p-2 rounded-lg dark:bg-slate-800/60 bg-gray-100 dark:text-pink-400 text-pink-600 dark:hover:bg-slate-700/60 hover:bg-gray-200 transition-all min-h-[44px] min-w-[44px] flex items-center justify-center"
        aria-label="Customize theme"
        title={labels.title}
      >
        <Palette size={18} />
      </button>

      {/* Panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="absolute top-full mt-2 right-0 w-64 glass-card rounded-xl p-4 z-50"
          >
            <div className="flex items-center justify-between mb-4">
              <h4 className="text-white font-bold text-sm">{labels.accent}</h4>
              <button
                onClick={() => setIsOpen(false)}
                className="w-6 h-6 rounded-md hover:bg-white/10 flex items-center justify-center text-gray-400 hover:text-white"
              >
                <X size={14} />
              </button>
            </div>

            <div className="grid grid-cols-3 gap-3">
              {accentColors.map((color) => (
                <button
                  key={color.value}
                  onClick={() => selectAccent(color.value)}
                  className={`relative flex flex-col items-center gap-1.5 p-2 rounded-xl transition-all ${
                    currentAccent === color.value
                      ? 'bg-white/10 ring-2'
                      : 'hover:bg-white/5'
                  }`}
                  style={{ ringColor: currentAccent === color.value ? color.primary : undefined }}
                >
                  <div
                    className="w-8 h-8 rounded-full relative"
                    style={{ background: `linear-gradient(135deg, ${color.primary}, ${color.light})` }}
                  >
                    {currentAccent === color.value && (
                      <div className="absolute inset-0 flex items-center justify-center">
                        <Check size={14} className="text-white" />
                      </div>
                    )}
                  </div>
                  <span className="text-[10px] text-gray-400 font-medium">{color.name}</span>
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
