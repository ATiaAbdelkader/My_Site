'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '@/lib/language-context';
import { Mail, Phone, MapPin, Send, CheckCircle, Loader2 } from 'lucide-react';

export default function Contact() {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMsg, setErrorMsg] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    setErrorMsg('');

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (!res.ok) {
        setErrorMsg(data.error || 'Failed to send message');
        setStatus('error');
        return;
      }

      setStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setStatus('idle'), 5000);
    } catch {
      setErrorMsg('Network error. Please try again.');
      setStatus('error');
    }
  };

  const contactInfo = [
    { icon: Mail, label: t.contact.email, value: 'atia.abdelkader@gmail.com', href: 'mailto:atia.abdelkader@gmail.com' },
    { icon: Phone, label: t.contact.phone, value: '+213 792 35 74 43', href: 'tel:+213792357443' },
    { icon: MapPin, label: t.contact.location, value: 'Mohamed Boudiaf St, Hassani Abdelkrim, EL-Oued, Algeria', href: '#' },
  ];

  const subjects = [
    { value: 'training', label: t.contact.subjects.training },
    { value: 'research', label: t.contact.subjects.research },
    { value: 'dataAnalysis', label: t.contact.subjects.dataAnalysis },
    { value: 'digital', label: t.contact.subjects.digital },
    { value: 'other', label: t.contact.subjects.other },
  ];

  return (
    <section id="contact" className="section-padding relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="text-cyan-400 text-sm font-semibold">{t.contact.sectionLabel}</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold dark:text-white text-gray-900 mt-3 gradient-border inline-block pb-3">
            {t.contact.title}
          </h2>
          <p className="dark:text-gray-400 text-gray-500 mt-4 max-w-2xl mx-auto">
            {t.contact.subtitle}
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-8 max-w-5xl mx-auto">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-2 space-y-4"
          >
            {contactInfo.map((info, i) => (
              <a
                key={i}
                href={info.href}
                className="glass-card rounded-2xl p-5 flex items-center gap-4 block"
              >
                <div className="w-12 h-12 rounded-xl dark:bg-cyan-500/10 bg-cyan-50 flex items-center justify-center shrink-0">
                  <info.icon size={20} className="dark:text-cyan-400 text-cyan-600" />
                </div>
                <div className="min-w-0">
                  <p className="text-xs dark:text-gray-500 text-gray-400 mb-0.5">{info.label}</p>
                  <p className="dark:text-white text-gray-900 font-medium text-sm truncate">
                    {info.value}
                  </p>
                </div>
              </a>
            ))}
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-3"
          >
            <form onSubmit={handleSubmit} className="glass-card rounded-2xl p-6 space-y-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs dark:text-gray-400 text-gray-500 mb-1.5">
                    {t.contact.namePlaceholder}
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl dark:bg-navy-light/80 bg-gray-50 border dark:border-white/10 border-gray-200 dark:text-white text-gray-900 text-sm focus:border-cyan-500 focus:outline-none focus:ring-1 focus:ring-cyan-500/50 transition-colors min-h-[44px]"
                    placeholder={t.contact.namePlaceholder}
                  />
                </div>
                <div>
                  <label className="block text-xs dark:text-gray-400 text-gray-500 mb-1.5">
                    {t.contact.emailPlaceholder}
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl dark:bg-navy-light/80 bg-gray-50 border dark:border-white/10 border-gray-200 dark:text-white text-gray-900 text-sm focus:border-cyan-500 focus:outline-none focus:ring-1 focus:ring-cyan-500/50 transition-colors min-h-[44px]"
                    placeholder={t.contact.emailPlaceholder}
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs dark:text-gray-400 text-gray-500 mb-1.5">
                  {t.contact.subjectLabel}
                </label>
                <select
                  required
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl dark:bg-navy-light/80 bg-gray-50 border dark:border-white/10 border-gray-200 dark:text-white text-gray-900 text-sm focus:border-cyan-500 focus:outline-none focus:ring-1 focus:ring-cyan-500/50 transition-colors min-h-[44px] appearance-none"
                >
                  <option value="">{t.contact.subjectLabel}</option>
                  {subjects.map((s) => (
                    <option key={s.value} value={s.value}>{s.label}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-xs dark:text-gray-400 text-gray-500 mb-1.5">
                  {t.contact.messagePlaceholder}
                </label>
                <textarea
                  required
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl dark:bg-navy-light/80 bg-gray-50 border dark:border-white/10 border-gray-200 dark:text-white text-gray-900 text-sm focus:border-cyan-500 focus:outline-none focus:ring-1 focus:ring-cyan-500/50 transition-colors resize-none"
                  placeholder={t.contact.messagePlaceholder}
                />
              </div>

              <button
                type="submit"
                disabled={status === 'loading'}
                className="w-full px-6 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-cyan-600 text-white font-semibold text-sm hover:from-cyan-400 hover:to-cyan-500 transition-all shadow-lg shadow-cyan-500/25 disabled:opacity-60 disabled:cursor-not-allowed min-h-[44px] flex items-center justify-center gap-2"
              >
                {status === 'loading' ? (
                  <Loader2 size={18} className="animate-spin" />
                ) : (
                  <Send size={18} />
                )}
                {t.contact.sendButton}
              </button>

              {/* Success Message */}
              {status === 'success' && (
                <motion.div
                  initial={{ opacity: 0, y: 5 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex items-center gap-2 text-emerald-400 text-sm font-medium p-3 rounded-xl dark:bg-emerald-500/10 bg-emerald-50"
                >
                  <CheckCircle size={18} />
                  {t.contact.successMessage}
                </motion.div>
              )}

              {/* Error Message */}
              {status === 'error' && (
                <motion.div
                  initial={{ opacity: 0, y: 5 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex items-center gap-2 text-red-400 text-sm font-medium p-3 rounded-xl dark:bg-red-500/10 bg-red-50"
                >
                  {errorMsg}
                </motion.div>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
