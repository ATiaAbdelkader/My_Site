'use client';

import { motion } from 'framer-motion';
import { useLanguage } from '@/lib/language-context';
import { MapPin } from 'lucide-react';

interface Location {
  name: string;
  nameEn: string;
  country: string;
  x: number; // percentage from left
  y: number; // percentage from top
  type: 'conference' | 'member' | 'ambassador';
}

const locations: Location[] = [
  { name: 'الجزائر', nameEn: 'Algeria', country: 'DZ', x: 46, y: 38, type: 'conference' },
  { name: 'تونس', nameEn: 'Tunisia', country: 'TN', x: 49, y: 36, type: 'conference' },
  { name: 'بيرو', nameEn: 'Peru', country: 'PE', x: 25, y: 66, type: 'conference' },
  { name: 'سويسرا', nameEn: 'Switzerland', country: 'CH', x: 49, y: 30, type: 'conference' },
];

const legend = {
  en: { title: 'Global Presence', conference: 'Conference', member: 'Member', ambassador: 'Ambassador' },
  ar: { title: 'الحضور الدولي', conference: 'مؤتمر', member: 'عضو', ambassador: 'سفير' },
  fr: { title: 'Présence Internationale', conference: 'Conférence', member: 'Membre', ambassador: 'Ambassadeur' },
};

export default function InteractiveMap() {
  const { language } = useLanguage();
  const labels = legend[language] || legend.en;

  return (
    <div className="relative w-full max-w-4xl mx-auto">
      {/* Simplified world map background */}
      <div className="relative aspect-[2/1] rounded-2xl overflow-hidden border border-white/10 bg-gradient-to-br from-[#0a0e27] via-[#0f1538] to-[#0a0e27]">
        {/* Grid lines */}
        <svg className="absolute inset-0 w-full h-full opacity-10" viewBox="0 0 100 50" preserveAspectRatio="none">
          {/* Latitude lines */}
          {[10, 20, 30, 40].map((y) => (
            <line key={`lat-${y}`} x1="0" y1={y} x2="100" y2={y} stroke="#06b6d4" strokeWidth="0.15" />
          ))}
          {/* Longitude lines */}
          {[20, 40, 60, 80].map((x) => (
            <line key={`lon-${x}`} x1={x} y1="0" x2={x} y2="50" stroke="#06b6d4" strokeWidth="0.15" />
          ))}
          {/* Simplified continents */}
          {/* Africa */}
          <path d="M45,25 L50,22 L53,25 L54,30 L52,38 L48,42 L45,38 L43,30 Z" fill="rgba(6,182,212,0.08)" stroke="rgba(6,182,212,0.2)" strokeWidth="0.2" />
          {/* Europe */}
          <path d="M45,15 L55,12 L58,18 L55,22 L48,22 L45,18 Z" fill="rgba(6,182,212,0.08)" stroke="rgba(6,182,212,0.2)" strokeWidth="0.2" />
          {/* South America */}
          <path d="M25,35 L30,30 L32,35 L30,45 L26,42 Z" fill="rgba(6,182,212,0.08)" stroke="rgba(6,182,212,0.2)" strokeWidth="0.2" />
          {/* Asia */}
          <path d="M58,12 L80,10 L85,20 L78,28 L65,25 L58,18 Z" fill="rgba(6,182,212,0.08)" stroke="rgba(6,182,212,0.2)" strokeWidth="0.2" />
        </svg>

        {/* Location markers */}
        {locations.map((loc, i) => (
          <motion.div
            key={loc.country}
            className="absolute group"
            style={{ left: `${loc.x}%`, top: `${loc.y}%`, transform: 'translate(-50%, -50%)' }}
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ type: 'spring', stiffness: 260, damping: 20, delay: i * 0.15 }}
          >
            {/* Pulse ring */}
            <motion.div
              className="absolute inset-0 w-8 h-8 -translate-x-1/2 -translate-y-1/2 rounded-full border border-cyan-400/30"
              animate={{ scale: [1, 2, 1], opacity: [0.5, 0, 0.5] }}
              transition={{ duration: 2, repeat: Infinity, delay: i * 0.5 }}
            />
            {/* Dot */}
            <div className={`w-3 h-3 rounded-full -translate-x-1/2 -translate-y-1/2 shadow-lg ${
              loc.type === 'conference' ? 'bg-cyan-400 shadow-cyan-400/50' :
              loc.type === 'member' ? 'bg-amber-400 shadow-amber-400/50' :
              'bg-emerald-400 shadow-emerald-400/50'
            }`} />

            {/* Tooltip */}
            <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
              <div className="glass-card rounded-lg px-3 py-2 whitespace-nowrap">
                <div className="flex items-center gap-1.5">
                  <MapPin size={12} className="text-cyan-400" />
                  <span className="text-white text-xs font-bold">
                    {language === 'ar' ? loc.name : loc.nameEn}
                  </span>
                </div>
                <span className="text-cyan-400 text-[10px] uppercase tracking-wide">
                  {labels[loc.type]}
                </span>
              </div>
            </div>
          </motion.div>
        ))}

        {/* Legend */}
        <div className="absolute bottom-3 right-3 glass-card rounded-lg px-3 py-2 flex gap-3">
          <div className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-cyan-400" />
            <span className="text-[10px] text-gray-400">{labels.conference}</span>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-amber-400" />
            <span className="text-[10px] text-gray-400">{labels.member}</span>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-emerald-400" />
            <span className="text-[10px] text-gray-400">{labels.ambassador}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
