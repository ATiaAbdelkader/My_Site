'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '@/lib/language-context';
import { Language } from '@/lib/translations';
import { useTheme } from 'next-themes';
import { Sun, Moon, Menu, X } from 'lucide-react';
import ThemeCustomizer from '@/components/ThemeCustomizer';

const navItems = ['home', 'about', 'skills', 'experience', 'projects', 'publications', 'talks', 'teaching', 'grants', 'services', 'achievements', 'gallery', 'knowledge', 'booking', 'contact'] as const;

const langLabels: Record<Language, string> = { ar: 'AR', en: 'EN', fr: 'FR' };

export default function Navbar() {
  const { language, setLanguage, t, dir } = useLanguage();
  const { theme, setTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const timer = requestAnimationFrame(() => setMounted(true));
    return () => cancelAnimationFrame(timer);
  }, []);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  const switchLang = () => {
    const langs: Language[] = ['ar', 'en', 'fr'];
    const next = langs[(langs.indexOf(language) + 1) % langs.length];
    setLanguage(next);
  };

  const sectionIds: Record<string, string> = {
    home: 'hero',
    about: 'about',
    skills: 'skills',
    experience: 'experience',
    projects: 'projects',
    publications: 'publications',
    talks: 'talks',
    teaching: 'teaching',
    grants: 'grants',
    services: 'services',
    achievements: 'achievements',
    gallery: 'gallery',
    knowledge: 'knowledge',
    booking: 'booking',
    contact: 'contact',
  };

  // Items that navigate to a separate page instead of scrolling
  const pageRoutes: Record<string, string> = {
    publications: '/publications',
  };

  const handleNavClick = (item: string) => {
    if (pageRoutes[item]) {
      // Navigate to the separate page
      window.location.href = pageRoutes[item];
      setIsOpen(false);
    } else {
      scrollToSection(sectionIds[item]);
    }
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'dark:bg-[#0a0e27]/90 bg-white/90 backdrop-blur-xl shadow-lg dark:shadow-cyan-500/5'
          : 'dark:bg-transparent bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo */}
          <button
            onClick={() => scrollToSection('hero')}
            className="flex items-center gap-2 min-h-[44px]"
          >
            <span className="text-2xl">🌾</span>
            <span className="font-bold text-lg dark:text-white text-gray-900">
              {language === 'ar' ? 'عبد القادر عطيه' : 'Abdelkader Atia'}
            </span>
          </button>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <button
                key={item}
                onClick={() => handleNavClick(item)}
                className="px-3 py-2 rounded-lg text-sm font-medium dark:text-gray-300 text-gray-600 dark:hover:text-cyan-400 hover:text-cyan-600 transition-colors min-h-[44px]"
              >
                {t.nav[item as keyof typeof t.nav]}
              </button>
            ))}
          </div>

          {/* Right controls */}
          <div className="flex items-center gap-2">
            {/* Language Switcher */}
            <button
              onClick={switchLang}
              className="px-3 py-1.5 rounded-lg text-sm font-semibold dark:bg-slate-800/60 bg-gray-100 dark:text-cyan-400 text-cyan-600 dark:hover:bg-slate-700/60 hover:bg-gray-200 transition-all min-h-[44px] min-w-[44px] flex items-center justify-center"
              aria-label="Switch language"
            >
              {langLabels[language]}
            </button>

            {/* Theme Toggle */}
            {mounted && (
              <button
                onClick={toggleTheme}
                className="p-2 rounded-lg dark:bg-slate-800/60 bg-gray-100 dark:text-yellow-400 text-yellow-600 dark:hover:bg-slate-700/60 hover:bg-gray-200 transition-all min-h-[44px] min-w-[44px] flex items-center justify-center"
                aria-label="Toggle theme"
              >
                {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
              </button>
            )}

            {/* Accent Color Customizer */}
            <div className="relative">
              <ThemeCustomizer />
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden p-2 rounded-lg dark:bg-slate-800/60 bg-gray-100 dark:text-white text-gray-900 dark:hover:bg-slate-700/60 hover:bg-gray-200 transition-all min-h-[44px] min-w-[44px] flex items-center justify-center"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden dark:bg-[#0a0e27]/95 bg-white/95 backdrop-blur-xl border-t dark:border-white/10 border-gray-200"
          >
            <div className="px-4 py-4 space-y-1">
              {navItems.map((item, i) => (
                <motion.button
                  key={item}
                  initial={{ opacity: 0, x: dir === 'rtl' ? 20 : -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                  onClick={() => handleNavClick(item)}
                  className="w-full text-left rtl:text-right px-4 py-3 rounded-lg text-sm font-medium dark:text-gray-300 text-gray-600 dark:hover:text-cyan-400 hover:text-cyan-600 dark:hover:bg-slate-800/40 hover:bg-gray-50 transition-colors min-h-[44px]"
                >
                  {t.nav[item as keyof typeof t.nav]}
                </motion.button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
