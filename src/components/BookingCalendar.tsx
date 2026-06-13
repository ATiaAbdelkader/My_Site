'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '@/lib/language-context';
import { Calendar, Clock, CheckCircle, MapPin } from 'lucide-react';

interface TimeSlot {
  time: string;
  available: boolean;
}

const timeSlots: TimeSlot[] = [
  { time: '09:00', available: true },
  { time: '10:00', available: true },
  { time: '11:00', available: false },
  { time: '13:00', available: true },
  { time: '14:00', available: true },
  { time: '15:00', available: false },
  { time: '16:00', available: true },
];

const consultationTypes = {
  en: [
    { id: 'research', icon: '🔬', label: 'Research Consulting', duration: '45 min' },
    { id: 'training', icon: '🎓', label: 'Training Inquiry', duration: '30 min' },
    { id: 'data', icon: '📊', label: 'Data Analysis', duration: '60 min' },
    { id: 'general', icon: '💬', label: 'General Inquiry', duration: '15 min' },
  ],
  ar: [
    { id: 'research', icon: '🔬', label: 'استشارة بحثية', duration: '45 دقيقة' },
    { id: 'training', icon: '🎓', label: 'استفسار تدريبي', duration: '30 دقيقة' },
    { id: 'data', icon: '📊', label: 'تحليل بيانات', duration: '60 دقيقة' },
    { id: 'general', icon: '💬', label: 'استفسار عام', duration: '15 دقيقة' },
  ],
  fr: [
    { id: 'research', icon: '🔬', label: 'Consultation recherche', duration: '45 min' },
    { id: 'training', icon: '🎓', label: 'Demande de formation', duration: '30 min' },
    { id: 'data', icon: '📊', label: 'Analyse de données', duration: '60 min' },
    { id: 'general', icon: '💬', label: 'Demande générale', duration: '15 min' },
  ],
};

export default function BookingCalendar() {
  const { language } = useLanguage();
  const [selectedDate, setSelectedDate] = useState<string | null>(null);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const [selectedType, setSelectedType] = useState<string | null>(null);
  const [booked, setBooked] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const types = consultationTypes[language] || consultationTypes.en;

  // Generate next 14 days
  const dates = Array.from({ length: 14 }, (_, i) => {
    const d = new Date();
    d.setDate(d.getDate() + i + 1);
    return {
      date: d.toISOString().split('T')[0],
      day: d.toLocaleDateString(language === 'ar' ? 'ar-SA' : language === 'fr' ? 'fr-FR' : 'en-US', { weekday: 'short' }),
      num: d.getDate(),
      month: d.toLocaleDateString(language === 'ar' ? 'ar-SA' : language === 'fr' ? 'fr-FR' : 'en-US', { month: 'short' }),
    };
  });

  const handleBook = () => {
    if (!name || !email || !selectedDate || !selectedTime || !selectedType) return;
    setBooked(true);
  };

  const labels = {
    title: language === 'ar' ? 'احجز استشارة' : language === 'fr' ? 'Réserver une consultation' : 'Book a Consultation',
    subtitle: language === 'ar' ? 'اختر نوع الاستشارة والتاريخ والوقت المناسب' : language === 'fr' ? 'Choisissez le type, la date et le créneau' : 'Choose the type, date, and time that works for you',
    selectType: language === 'ar' ? 'نوع الاستشارة' : language === 'fr' ? 'Type de consultation' : 'Consultation Type',
    selectDate: language === 'ar' ? 'اختر التاريخ' : language === 'fr' ? 'Choisir une date' : 'Select Date',
    selectTime: language === 'ar' ? 'اختر الوقت' : language === 'fr' ? 'Choisir un créneau' : 'Select Time',
    yourName: language === 'ar' ? 'اسمك' : language === 'fr' ? 'Votre nom' : 'Your Name',
    yourEmail: language === 'ar' ? 'بريدك الإلكتروني' : language === 'fr' ? 'Votre email' : 'Your Email',
    confirm: language === 'ar' ? 'تأكيد الحجز' : language === 'fr' ? 'Confirmer la réservation' : 'Confirm Booking',
    confirmed: language === 'ar' ? 'تم الحجز بنجاح!' : language === 'fr' ? 'Réservation confirmée !' : 'Booking Confirmed!',
    confirmedMsg: language === 'ar' ? 'سنتواصل معك قريبًا لتأكيد الموعد' : language === 'fr' ? 'Nous vous contacterons bientôt pour confirmer' : "We'll contact you shortly to confirm the appointment",
    location: language === 'ar' ? 'عبر الإنترنت أو في الموقع' : language === 'fr' ? 'En ligne ou sur site' : 'Online or On-site',
    available: language === 'ar' ? 'متاح' : language === 'fr' ? 'Disponible' : 'Available',
  };

  if (booked) {
    return (
      <section id="booking" className="section-padding relative">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 text-center">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: 'spring', stiffness: 260, damping: 20 }}
            className="glass-card rounded-2xl p-10"
          >
            <div className="w-20 h-20 rounded-full bg-gradient-to-br from-emerald-400 to-emerald-500 flex items-center justify-center mx-auto mb-6">
              <CheckCircle size={40} className="text-white" />
            </div>
            <h3 className="text-2xl font-extrabold text-white mb-3">{labels.confirmed}</h3>
            <p className="text-gray-400">{labels.confirmedMsg}</p>
          </motion.div>
        </div>
      </section>
    );
  }

  return (
    <section id="booking" className="section-padding relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <span className="text-cyan-400 text-sm font-semibold flex items-center justify-center gap-2">
            <Calendar size={16} />
            {labels.title}
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold dark:text-white text-gray-900 mt-3 gradient-border inline-block pb-3">
            {labels.title}
          </h2>
          <p className="dark:text-gray-400 text-gray-500 mt-4 max-w-lg mx-auto">
            {labels.subtitle}
          </p>
        </motion.div>

        <div className="glass-card rounded-2xl p-6 space-y-6">
          {/* Step 1: Type */}
          <div>
            <h3 className="text-white font-bold text-sm mb-3">{labels.selectType}</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {types.map((type) => (
                <button
                  key={type.id}
                  onClick={() => setSelectedType(type.id)}
                  className={`p-3 rounded-xl text-center transition-all ${
                    selectedType === type.id
                      ? 'bg-gradient-to-br from-cyan-500/20 to-cyan-500/5 border-2 border-cyan-400'
                      : 'bg-white/5 border-2 border-transparent hover:bg-white/10'
                  }`}
                >
                  <span className="text-2xl block mb-1">{type.icon}</span>
                  <span className={`text-xs font-semibold block ${selectedType === type.id ? 'text-cyan-400' : 'text-gray-300'}`}>
                    {type.label}
                  </span>
                  <span className="text-[10px] text-gray-500 flex items-center justify-center gap-1 mt-1">
                    <Clock size={10} /> {type.duration}
                  </span>
                </button>
              ))}
            </div>
          </div>

          {/* Step 2: Date */}
          <div>
            <h3 className="text-white font-bold text-sm mb-3">{labels.selectDate}</h3>
            <div className="flex gap-2 overflow-x-auto pb-2">
              {dates.map((d) => (
                <button
                  key={d.date}
                  onClick={() => { setSelectedDate(d.date); setSelectedTime(null); }}
                  className={`shrink-0 w-16 py-3 rounded-xl text-center transition-all ${
                    selectedDate === d.date
                      ? 'bg-gradient-to-br from-cyan-500 to-cyan-600 text-white shadow-lg shadow-cyan-500/25'
                      : 'bg-white/5 text-gray-300 hover:bg-white/10'
                  }`}
                >
                  <div className="text-[10px] font-medium">{d.day}</div>
                  <div className="text-lg font-bold">{d.num}</div>
                  <div className="text-[10px]">{d.month}</div>
                </button>
              ))}
            </div>
          </div>

          {/* Step 3: Time */}
          {selectedDate && (
            <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }}>
              <h3 className="text-white font-bold text-sm mb-3">{labels.selectTime}</h3>
              <div className="grid grid-cols-4 md:grid-cols-7 gap-2">
                {timeSlots.map((slot) => (
                  <button
                    key={slot.time}
                    onClick={() => slot.available && setSelectedTime(slot.time)}
                    disabled={!slot.available}
                    className={`py-2.5 rounded-xl text-sm font-semibold transition-all ${
                      selectedTime === slot.time
                        ? 'bg-gradient-to-r from-cyan-500 to-cyan-600 text-white shadow-lg shadow-cyan-500/25'
                        : slot.available
                        ? 'bg-white/5 text-gray-300 hover:bg-white/10'
                        : 'bg-white/[0.02] text-gray-600 line-through cursor-not-allowed'
                    }`}
                  >
                    {slot.time}
                  </button>
                ))}
              </div>
            </motion.div>
          )}

          {/* Step 4: Contact info */}
          {selectedDate && selectedTime && (
            <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} className="space-y-3">
              <div className="grid sm:grid-cols-2 gap-3">
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder={labels.yourName}
                  className="w-full px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white text-sm placeholder:text-gray-500 focus:border-cyan-500/50 focus:outline-none focus:ring-1 focus:ring-cyan-500/30"
                />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder={labels.yourEmail}
                  className="w-full px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white text-sm placeholder:text-gray-500 focus:border-cyan-500/50 focus:outline-none focus:ring-1 focus:ring-cyan-500/30"
                />
              </div>

              <div className="flex items-center gap-2 text-xs text-gray-400">
                <MapPin size={12} className="text-cyan-400" />
                {labels.location}
              </div>

              <button
                onClick={handleBook}
                disabled={!name || !email}
                className="w-full px-6 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-cyan-600 text-white font-semibold hover:from-cyan-400 hover:to-cyan-500 transition-all shadow-lg shadow-cyan-500/25 disabled:opacity-40 disabled:cursor-not-allowed min-h-[48px]"
              >
                {labels.confirm}
              </button>
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
}
