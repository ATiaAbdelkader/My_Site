'use client';

import { useState, useEffect } from 'react';
import { useLanguage } from '@/lib/language-context';
import { Wifi, WifiOff } from 'lucide-react';
import { enabledProfiles } from '@/data/academic-profiles';

export default function Footer() {
  const { t, language } = useLanguage();
  const [isOnline, setIsOnline] = useState(true);

  useEffect(() => {
    setIsOnline(navigator.onLine);
    const handleOnline = () => setIsOnline(true);
    const handleOffline = () => setIsOnline(false);
    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);
    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, []);

  const socialLinks = [
    { name: 'LinkedIn', href: 'https://www.linkedin.com/in/abdelkader-atia-89061a146/' },
    { name: 'Facebook', href: 'https://www.facebook.com/abdelkader.atia' },
  ];

  return (
    <footer className="dark:bg-[#060a1f] bg-gray-50 border-t dark:border-white/10 border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Academic profile badges row */}
        {enabledProfiles.length > 0 && (
          <div className="flex flex-wrap items-center justify-center gap-3 mb-6 pb-6 border-b dark:border-white/5 border-gray-200">
            <span className="text-xs text-gray-500 dark:text-gray-400 mr-2">
              {language === 'ar'
                ? 'الملفات الأكاديمية:'
                : language === 'fr'
                  ? 'Profils académiques :'
                  : 'Academic profiles:'}
            </span>
            {enabledProfiles.map((profile) => (
              <a
                key={profile.id}
                href={profile.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-1.5 px-2.5 py-1 rounded-full dark:bg-slate-800/50 bg-white border dark:border-white/10 border-gray-200 hover:dark:border-cyan-500/30 hover:border-cyan-400/40 transition-all min-h-[32px]"
                title={profile.description}
                aria-label={`Visit ${profile.name} profile`}
              >
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill={profile.color}
                  className="flex-shrink-0"
                >
                  <path d={profile.icon} />
                </svg>
                <span className="text-xs font-medium dark:text-gray-300 text-gray-600 group-hover:text-cyan-400 transition-colors">
                  {profile.name}
                </span>
              </a>
            ))}
          </div>
        )}

        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          {/* Copyright */}
          <div className="flex items-center gap-2 dark:text-gray-400 text-gray-500 text-sm">
            <span>🌾</span>
            <span>{t.footer.copyright}</span>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            {socialLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="dark:text-gray-400 text-gray-500 hover:text-cyan-400 transition-colors text-sm font-medium"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Network Status */}
          <div className="flex items-center gap-2">
            {isOnline ? (
              <span className="flex items-center gap-1.5 text-sm dark:text-emerald-400 text-emerald-600">
                <Wifi size={14} />
                {t.footer.online}
              </span>
            ) : (
              <span className="flex items-center gap-1.5 text-sm dark:text-red-400 text-red-600">
                <WifiOff size={14} />
                {language === 'ar' ? 'غير متصل' : language === 'fr' ? 'Hors ligne' : 'Offline'}
              </span>
            )}
          </div>
        </div>
      </div>
    </footer>
  );
}
