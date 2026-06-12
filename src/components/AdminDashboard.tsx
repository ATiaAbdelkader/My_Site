'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '@/lib/language-context';
import { Lock, Users, Mail, BarChart3, Calendar, TrendingUp, ArrowLeft, Eye } from 'lucide-react';

interface ContactSubmission {
  id: number;
  name: string;
  email: string;
  subject: string;
  message: string;
  createdAt: string;
}

const ADMIN_PASSWORD = 'atia2024';

export default function AdminDashboard() {
  const { language } = useLanguage();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState('');
  const [submissions, setSubmissions] = useState<ContactSubmission[]>([]);
  const [loading, setLoading] = useState(false);
  const [selectedSubmission, setSelectedSubmission] = useState<ContactSubmission | null>(null);

  const labels = {
    title: language === 'ar' ? 'لوحة الإدارة' : language === 'fr' ? 'Tableau de bord' : 'Admin Dashboard',
    login: language === 'ar' ? 'تسجيل الدخول' : language === 'fr' ? 'Connexion' : 'Login',
    password: language === 'ar' ? 'كلمة المرور' : language === 'fr' ? 'Mot de passe' : 'Password',
    submit: language === 'ar' ? 'دخول' : language === 'fr' ? 'Entrer' : 'Enter',
    wrongPassword: language === 'ar' ? 'كلمة مرور خاطئة' : language === 'fr' ? 'Mot de passe incorrect' : 'Wrong password',
    totalSubmissions: language === 'ar' ? 'إجمالي الرسائل' : language === 'fr' ? 'Total soumissions' : 'Total Submissions',
    thisMonth: language === 'ar' ? 'هذا الشهر' : language === 'fr' ? 'Ce mois' : 'This Month',
    latestSubmissions: language === 'ar' ? 'أحدث الرسائل' : language === 'fr' ? 'Dernières soumissions' : 'Latest Submissions',
    noSubmissions: language === 'ar' ? 'لا توجد رسائل بعد' : language === 'fr' ? 'Aucune soumission' : 'No submissions yet',
    back: language === 'ar' ? 'رجوع' : language === 'fr' ? 'Retour' : 'Back',
    logout: language === 'ar' ? 'خروج' : language === 'fr' ? 'Déconnexion' : 'Logout',
    subjects: language === 'ar' ? 'المواضيع' : language === 'fr' ? 'Sujets' : 'By Subject',
    name: language === 'ar' ? 'الاسم' : language === 'fr' ? 'Nom' : 'Name',
    email: language === 'ar' ? 'البريد' : language === 'fr' ? 'Email' : 'Email',
    subject: language === 'ar' ? 'الموضوع' : language === 'fr' ? 'Sujet' : 'Subject',
    date: language === 'ar' ? 'التاريخ' : language === 'fr' ? 'Date' : 'Date',
  };

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === ADMIN_PASSWORD) {
      setIsAuthenticated(true);
      localStorage.setItem('admin-auth', 'true');
    }
  };

  useEffect(() => {
    if (localStorage.getItem('admin-auth') === 'true') {
      setIsAuthenticated(true);
    }
  }, []);

  useEffect(() => {
    if (isAuthenticated) {
      fetchSubmissions();
    }
  }, [isAuthenticated]);

  const fetchSubmissions = async () => {
    setLoading(true);
    try {
      const res = await fetch('/api/admin/submissions');
      if (res.ok) {
        const data = await res.json();
        setSubmissions(data);
      }
    } catch {
      // Fallback: show empty state
    }
    setLoading(false);
  };

  // Count submissions by subject
  const subjectCounts = submissions.reduce((acc, s) => {
    acc[s.subject] = (acc[s.subject] || 0) + 1;
    return acc;
  }, {} as Record<string, number>);

  const thisMonthCount = submissions.filter((s) => {
    const d = new Date(s.createdAt);
    const now = new Date();
    return d.getMonth() === now.getMonth() && d.getFullYear() === now.getFullYear();
  }).length;

  if (!isAuthenticated) {
    return (
      <div className="min-h-[80vh] flex items-center justify-center px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="glass-card rounded-2xl p-8 w-full max-w-sm text-center"
        >
          <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-cyan-500/20 to-amber-500/20 flex items-center justify-center mx-auto mb-6 border border-cyan-500/30">
            <Lock size={28} className="text-cyan-400" />
          </div>
          <h2 className="text-2xl font-extrabold text-white mb-6">{labels.title}</h2>
          <form onSubmit={handleLogin} className="space-y-4">
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder={labels.password}
              className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white text-sm placeholder:text-gray-500 focus:border-cyan-500/50 focus:outline-none"
            />
            <button
              type="submit"
              className="w-full px-6 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-cyan-600 text-white font-semibold hover:from-cyan-400 hover:to-cyan-500 transition-all"
            >
              {labels.submit}
            </button>
          </form>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-24 pb-16 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl font-extrabold dark:text-white text-gray-900">{labels.title}</h1>
          <p className="dark:text-gray-400 text-gray-500 text-sm mt-1">
            Abdelkader Atia Portfolio Admin
          </p>
        </div>
        <button
          onClick={() => { setIsAuthenticated(false); localStorage.removeItem('admin-auth'); }}
          className="px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-gray-300 text-sm font-medium hover:bg-white/10 transition-all"
        >
          {labels.logout}
        </button>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-8">
        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="glass-card rounded-2xl p-5">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-10 h-10 rounded-xl bg-cyan-500/10 flex items-center justify-center">
              <Mail size={18} className="text-cyan-400" />
            </div>
            <span className="text-xs text-gray-400">{labels.totalSubmissions}</span>
          </div>
          <div className="text-3xl font-extrabold text-white">{submissions.length}</div>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="glass-card rounded-2xl p-5">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-10 h-10 rounded-xl bg-amber-500/10 flex items-center justify-center">
              <TrendingUp size={18} className="text-amber-400" />
            </div>
            <span className="text-xs text-gray-400">{labels.thisMonth}</span>
          </div>
          <div className="text-3xl font-extrabold text-white">{thisMonthCount}</div>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="glass-card rounded-2xl p-5">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-10 h-10 rounded-xl bg-emerald-500/10 flex items-center justify-center">
              <BarChart3 size={18} className="text-emerald-400" />
            </div>
            <span className="text-xs text-gray-400">{labels.subjects}</span>
          </div>
          <div className="text-3xl font-extrabold text-white">{Object.keys(subjectCounts).length}</div>
        </motion.div>
      </div>

      {/* Subject Distribution */}
      {Object.keys(subjectCounts).length > 0 && (
        <div className="glass-card rounded-2xl p-5 mb-8">
          <h3 className="text-white font-bold text-sm mb-4">{labels.subjects}</h3>
          <div className="space-y-3">
            {Object.entries(subjectCounts).map(([subject, count]) => (
              <div key={subject} className="flex items-center gap-3">
                <span className="text-xs text-gray-400 min-w-[100px] capitalize">{subject}</span>
                <div className="flex-1 h-2 rounded-full bg-white/5 overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${(count / submissions.length) * 100}%` }}
                    transition={{ duration: 0.8 }}
                    className="h-full rounded-full bg-gradient-to-r from-cyan-500 to-cyan-400"
                  />
                </div>
                <span className="text-xs font-bold text-cyan-400">{count}</span>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Submissions Table */}
      <div className="glass-card rounded-2xl overflow-hidden">
        <div className="px-5 py-4 border-b border-white/10">
          <h3 className="text-white font-bold">{labels.latestSubmissions}</h3>
        </div>

        {loading ? (
          <div className="p-10 text-center text-gray-400">Loading...</div>
        ) : submissions.length === 0 ? (
          <div className="p-10 text-center text-gray-400">{labels.noSubmissions}</div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-white/5">
                  <th className="text-left text-xs text-gray-400 font-medium px-5 py-3">{labels.name}</th>
                  <th className="text-left text-xs text-gray-400 font-medium px-5 py-3">{labels.email}</th>
                  <th className="text-left text-xs text-gray-400 font-medium px-5 py-3">{labels.subject}</th>
                  <th className="text-left text-xs text-gray-400 font-medium px-5 py-3">{labels.date}</th>
                  <th className="text-left text-xs text-gray-400 font-medium px-5 py-3"></th>
                </tr>
              </thead>
              <tbody>
                {submissions.map((sub, i) => (
                  <motion.tr
                    key={sub.id}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: i * 0.05 }}
                    className="border-b border-white/5 hover:bg-white/[0.02] transition-colors"
                  >
                    <td className="px-5 py-3 text-sm text-white">{sub.name}</td>
                    <td className="px-5 py-3 text-sm text-gray-400">{sub.email}</td>
                    <td className="px-5 py-3">
                      <span className="px-2 py-1 rounded-md text-xs font-medium bg-cyan-500/10 text-cyan-400 capitalize">{sub.subject}</span>
                    </td>
                    <td className="px-5 py-3 text-xs text-gray-500">
                      {new Date(sub.createdAt).toLocaleDateString()}
                    </td>
                    <td className="px-5 py-3">
                      <button
                        onClick={() => setSelectedSubmission(selectedSubmission?.id === sub.id ? null : sub)}
                        className="text-cyan-400 hover:text-cyan-300 transition-colors"
                      >
                        <Eye size={14} />
                      </button>
                    </td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        {/* Selected submission detail */}
        {selectedSubmission && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            className="border-t border-white/10 p-5"
          >
            <p className="dark:text-gray-300 text-gray-600 text-sm leading-relaxed">
              {selectedSubmission.message}
            </p>
          </motion.div>
        )}
      </div>
    </div>
  );
}
