'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '@/lib/language-context';
import { Sparkles, Bell, WelcomeBack } from 'lucide-react';

export default function SmartNotifications() {
  const { language } = useLanguage();
  const [notifications, setNotifications] = useState<{ id: string; text: string; icon: 'welcome' | 'back' | 'update' }[]>([]);

  useEffect(() => {
    const visitCount = parseInt(localStorage.getItem('visit-count') || '0', 10) + 1;
    localStorage.setItem('visit-count', visitCount.toString());
    const lastVisit = localStorage.getItem('last-visit');

    const timer = setTimeout(() => {
      if (visitCount === 1) {
        // First visit
        setNotifications([{
          id: 'welcome',
          text: language === 'ar' ? 'مرحبًا بك في موقع عبد القادر! استكشف أبحاثه ومشاريعه' : language === 'fr' ? "Bienvenue sur le site d'Abdelkader ! Explorez ses recherches et projets" : 'Welcome to Abdelkader\'s site! Explore his research & projects',
          icon: 'welcome',
        }]);
      } else if (lastVisit) {
        // Returning visitor
        const daysSince = Math.floor((Date.now() - parseInt(lastVisit, 10)) / (1000 * 60 * 60 * 24));
        if (daysSince > 0) {
          setNotifications([{
            id: 'back',
            text: language === 'ar' ? `مرحبًا بعودتك! غبت ${daysSince} يوم` : language === 'fr' ? `Bon retour ! Vous étiez absent ${daysSince} jour${daysSince > 1 ? 's' : ''}` : `Welcome back! It's been ${daysSince} day${daysSince > 1 ? 's' : ''}`,
            icon: 'back',
          }]);
        }
      }

      localStorage.setItem('last-visit', Date.now().toString());
    }, 2000); // Show after 2s

    return () => clearTimeout(timer);
  }, [language]);

  const dismiss = (id: string) => {
    setNotifications((prev) => prev.filter((n) => n.id !== id));
  };

  return (
    <div className="fixed top-20 right-4 z-[70] flex flex-col gap-2 max-w-sm">
      <AnimatePresence>
        {notifications.map((notif) => (
          <motion.div
            key={notif.id}
            initial={{ opacity: 0, x: 100, scale: 0.9 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: 100, scale: 0.9 }}
            transition={{ type: 'spring', stiffness: 300, damping: 25 }}
            className="glass-card rounded-xl p-4 flex items-start gap-3 cursor-pointer"
            onClick={() => dismiss(notif.id)}
          >
            <div className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 ${
              notif.icon === 'welcome' ? 'bg-cyan-500/20' : notif.icon === 'back' ? 'bg-amber-500/20' : 'bg-emerald-500/20'
            }`}>
              {notif.icon === 'welcome' ? (
                <Sparkles size={16} className="text-cyan-400" />
              ) : notif.icon === 'back' ? (
                <Bell size={16} className="text-amber-400" />
              ) : (
                <Sparkles size={16} className="text-emerald-400" />
              )}
            </div>
            <p className="dark:text-gray-200 text-gray-700 text-sm leading-relaxed flex-1">{notif.text}</p>
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
}
