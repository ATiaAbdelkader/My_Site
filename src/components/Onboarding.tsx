'use client';

import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '@/lib/language-context';
import { ChevronRight, Globe, Sparkles, Rocket, ArrowRight, X } from 'lucide-react';

const STORAGE_KEY = 'portfolio-onboarding-completed';

interface OnboardingProps {
  onComplete: () => void;
}

type Step = 'welcome' | 'language' | 'theme' | 'tour' | 'complete';

// Floating particle component
function Particles() {
  const particles = Array.from({ length: 40 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 4 + 1,
    duration: Math.random() * 8 + 6,
    delay: Math.random() * 4,
  }));

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {particles.map((p) => (
        <motion.div
          key={p.id}
          className="absolute rounded-full"
          style={{
            left: `${p.x}%`,
            top: `${p.y}%`,
            width: p.size,
            height: p.size,
            background: p.id % 3 === 0
              ? 'rgba(6, 182, 212, 0.6)'
              : p.id % 3 === 1
              ? 'rgba(245, 158, 11, 0.5)'
              : 'rgba(255, 255, 255, 0.3)',
          }}
          animate={{
            y: [0, -30, 0],
            opacity: [0.2, 0.8, 0.2],
            scale: [1, 1.5, 1],
          }}
          transition={{
            duration: p.duration,
            repeat: Infinity,
            delay: p.delay,
            ease: 'easeInOut',
          }}
        />
      ))}
    </div>
  );
}

// Glowing ring animation
function GlowRing() {
  return (
    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
      <motion.div
        className="w-64 h-64 sm:w-80 sm:h-80 rounded-full border-2 border-cyan-400/30"
        animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.6, 0.3], rotate: [0, 180, 360] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
      />
      <motion.div
        className="absolute w-48 h-48 sm:w-60 sm:h-60 rounded-full border border-amber-400/20"
        animate={{ scale: [1.1, 0.9, 1.1], opacity: [0.2, 0.5, 0.2], rotate: [360, 180, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'linear' }}
      />
      <motion.div
        className="absolute w-80 h-80 sm:w-96 sm:h-96 rounded-full border border-cyan-300/10"
        animate={{ scale: [1, 1.3, 1], opacity: [0.1, 0.3, 0.1] }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
      />
    </div>
  );
}

export default function Onboarding({ onComplete }: OnboardingProps) {
  const { language, setLanguage, t } = useLanguage();
  const [step, setStep] = useState<Step>('welcome');
  const [tourStep, setTourStep] = useState(0);
  const [direction, setDirection] = useState(1);

  const tourSteps = [
    {
      icon: '🌾',
      title: language === 'ar' ? 'باحث ومبتكر زراعي' : language === 'fr' ? 'Chercheur & Innovateur Agricole' : 'Agricultural Researcher & Innovator',
      desc: language === 'ar'
        ? 'أكثر من 15 عامًا من الخبرة في البحث العلمي والتدريب والابتكار في القطاع الزراعي'
        : language === 'fr'
        ? "Plus de 15 ans d'expérience en recherche scientifique, formation et innovation agricole"
        : '15+ years of experience in scientific research, training, and agricultural innovation',
    },
    {
      icon: '🔬',
      title: language === 'ar' ? 'أبحاث الإنتاج الحيواني' : language === 'fr' ? 'Recherche en Production Animale' : 'Animal Production Research',
      desc: language === 'ar'
        ? 'باحث دكتوراه متخصص في جودة السائل المنوي وتحسين الأداء التناسلي للماشية في البيئات الجافة'
        : language === 'fr'
        ? "Doctorant spécialisé dans la qualité du sperme et l'amélioration des performances reproductives en zones arides"
        : 'PhD researcher specializing in semen quality and reproductive performance improvement in arid environments',
    },
    {
      icon: '🎓',
      title: language === 'ar' ? 'التدريب وبناء القدرات' : language === 'fr' ? 'Formation & Renforcement des Capacités' : 'Training & Capacity Building',
      desc: language === 'ar'
        ? 'مدرب رئيسي مساعد في FBS مع أكثر من 500 متدرب و60+ شهادة دولية من مؤسسات عالمية'
        : language === 'fr'
        ? 'Formateur Maître Assistant FBS avec plus de 500 stagiaires et 60+ certifications internationales'
        : 'FBS Assistant Master Trainer with 500+ trainees and 60+ international certifications from world-class institutions',
    },
    {
      icon: '💡',
      title: language === 'ar' ? 'الابتكار الرقمي' : language === 'fr' ? 'Innovation Numérique' : 'Digital Innovation',
      desc: language === 'ar'
        ? 'تطوير تطبيقات ذكية بالذكاء الاصطناعي ومنصات رقمية زراعية وأنظمة زراعة مائية متكاملة'
        : language === 'fr'
        ? "Développement d'applications IA, plateformes numériques agricoles et systèmes hydroponiques intégrés"
        : 'Building AI-powered apps, digital agricultural platforms, and integrated hydroponic/aquaponic systems',
    },
    {
      icon: '🌍',
      title: language === 'ar' ? 'حضور دولي' : language === 'fr' ? 'Présence Internationale' : 'Global Presence',
      desc: language === 'ar'
        ? 'مؤتمرات في بيرو وسويسرا وتونس والجزائر. عضو في ASM, EAS, IAPA وسفير ABF'
        : language === 'fr'
        ? 'Conférences au Pérou, Suisse, Tunisie et Algérie. Membre ASM, EAS, IAPA et Ambassadeur ABF'
        : 'Conferences in Peru, Switzerland, Tunisia & Algeria. Member of ASM, EAS, IAPA & ABF Ambassador',
    },
  ];

  const goNext = useCallback(() => {
    setDirection(1);
    if (step === 'welcome') setStep('language');
    else if (step === 'language') setStep('theme');
    else if (step === 'theme') setStep('tour');
    else if (step === 'tour') {
      if (tourStep < tourSteps.length - 1) setTourStep(tourStep + 1);
      else setStep('complete');
    }
  }, [step, tourStep, tourSteps.length]);

  const goBack = useCallback(() => {
    setDirection(-1);
    if (step === 'language') setStep('welcome');
    else if (step === 'theme') setStep('language');
    else if (step === 'tour') {
      if (tourStep > 0) setTourStep(tourStep - 1);
      else setStep('theme');
    }
  }, [step, tourStep]);

  const finishOnboarding = useCallback(() => {
    if (typeof window !== 'undefined') {
      localStorage.setItem(STORAGE_KEY, 'true');
    }
    onComplete();
  }, [onComplete]);

  // Keyboard navigation
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight' || e.key === 'Enter') goNext();
      if (e.key === 'ArrowLeft') goBack();
      if (e.key === 'Escape') finishOnboarding();
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [goNext, goBack, finishOnboarding]);

  const slideVariants = {
    enter: (d: number) => ({ x: d > 0 ? 300 : -300, opacity: 0, scale: 0.95 }),
    center: { x: 0, opacity: 1, scale: 1 },
    exit: (d: number) => ({ x: d > 0 ? -300 : 300, opacity: 0, scale: 0.95 }),
  };

  const langOptions = [
    { code: 'ar' as const, label: 'العربية', flag: '🇩🇿', dir: 'rtl' },
    { code: 'en' as const, label: 'English', flag: '🇬🇧', dir: 'ltr' },
    { code: 'fr' as const, label: 'Français', flag: '🇫🇷', dir: 'ltr' },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[100] bg-[#0a0e27] overflow-hidden flex items-center justify-center"
    >
      <Particles />
      <GlowRing />

      {/* Skip button */}
      <button
        onClick={finishOnboarding}
        className="absolute top-4 right-4 sm:top-6 sm:right-6 z-20 flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-sm text-gray-400 hover:text-white hover:bg-white/10 transition-all"
      >
        <X size={14} />
        {language === 'ar' ? 'تخطي' : language === 'fr' ? 'Passer' : 'Skip'}
      </button>

      {/* Progress dots */}
      <div className="absolute bottom-8 sm:bottom-10 flex gap-2 z-20">
        {['welcome', 'language', 'theme', 'tour', 'complete'].map((s, i) => (
          <motion.div
            key={s}
            className="w-2 h-2 rounded-full"
            animate={{
              backgroundColor: step === s ? '#06b6d4' : 'rgba(255,255,255,0.2)',
              scale: step === s ? 1.5 : 1,
            }}
            transition={{ duration: 0.3 }}
          />
        ))}
      </div>

      {/* Content area */}
      <div className="relative z-10 w-full max-w-lg px-6 sm:px-8" dir={language === 'ar' ? 'rtl' : 'ltr'}>
        <AnimatePresence mode="wait" custom={direction}>
          {/* ===== WELCOME STEP ===== */}
          {step === 'welcome' && (
            <motion.div
              key="welcome"
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.5, ease: 'easeInOut' }}
              className="text-center"
            >
              <motion.div
                initial={{ scale: 0, rotate: -180 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ type: 'spring', stiffness: 200, damping: 15, delay: 0.2 }}
                className="text-7xl sm:text-8xl mb-6 inline-block"
              >
                🌾
              </motion.div>
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="text-3xl sm:text-4xl font-extrabold text-white mb-3"
              >
                {language === 'ar' ? 'مرحبًا بك' : language === 'fr' ? 'Bienvenue' : 'Welcome'}
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="text-lg sm:text-xl font-semibold mb-2 onboarding-shimmer"
              >
                Abdelkader Atia
              </motion.p>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
                className="text-gray-400 mb-8 leading-relaxed"
              >
                {language === 'ar'
                  ? 'باحث دكتوراه ومبتكر في الزراعة الذكية. دعني آخذك في جولة سريعة!'
                  : language === 'fr'
                  ? "Doctorant et innovateur en agriculture intelligente. Laissez-moi vous guider !"
                  : 'PhD Researcher & Smart Agriculture Innovator. Let me give you a quick tour!'}
              </motion.p>
              <motion.button
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1 }}
                onClick={goNext}
                className="px-8 py-3.5 rounded-xl bg-gradient-to-r from-cyan-500 to-cyan-600 text-white font-semibold text-base hover:from-cyan-400 hover:to-cyan-500 transition-all shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 flex items-center gap-2 mx-auto min-h-[48px]"
              >
                <Sparkles size={18} />
                {language === 'ar' ? 'لنبدأ!' : language === 'fr' ? "C'est parti !" : "Let's Go!"}
              </motion.button>
            </motion.div>
          )}

          {/* ===== LANGUAGE STEP ===== */}
          {step === 'language' && (
            <motion.div
              key="language"
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.5, ease: 'easeInOut' }}
              className="text-center"
            >
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: 'spring', stiffness: 200, damping: 15 }}
                className="w-16 h-16 rounded-2xl bg-gradient-to-br from-cyan-500/20 to-amber-500/20 flex items-center justify-center mx-auto mb-6 border border-cyan-500/30"
              >
                <Globe size={28} className="text-cyan-400" />
              </motion.div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white mb-2">
                {language === 'ar' ? 'اختر لغتك' : language === 'fr' ? 'Choisissez votre langue' : 'Choose Your Language'}
              </h2>
              <p className="text-gray-400 mb-8">
                {language === 'ar' ? 'يمكنك تغيير اللغة لاحقًا في أي وقت' : language === 'fr' ? 'Vous pouvez changer la langue plus tard' : 'You can change this anytime later'}
              </p>
              <div className="space-y-3">
                {langOptions.map((lang, i) => (
                  <motion.button
                    key={lang.code}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 + i * 0.1 }}
                    onClick={() => setLanguage(lang.code)}
                    className={`w-full px-5 py-4 rounded-xl flex items-center gap-4 transition-all text-left ${
                      language === lang.code
                        ? 'bg-gradient-to-r from-cyan-500/20 to-cyan-500/10 border-2 border-cyan-400 shadow-lg shadow-cyan-500/10'
                        : 'bg-white/5 border-2 border-transparent hover:bg-white/10 hover:border-white/20'
                    }`}
                  >
                    <span className="text-2xl">{lang.flag}</span>
                    <span className={`text-lg font-semibold ${language === lang.code ? 'text-cyan-400' : 'text-white'}`}>
                      {lang.label}
                    </span>
                    {language === lang.code && (
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        className="ml-auto w-6 h-6 rounded-full bg-cyan-400 flex items-center justify-center"
                      >
                        <svg className="w-3.5 h-3.5 text-[#0a0e27]" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </motion.div>
                    )}
                  </motion.button>
                ))}
              </div>
              <motion.button
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
                onClick={goNext}
                className="mt-8 px-8 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-cyan-600 text-white font-semibold hover:from-cyan-400 hover:to-cyan-500 transition-all shadow-lg shadow-cyan-500/25 flex items-center gap-2 mx-auto min-h-[48px]"
              >
                {language === 'ar' ? 'التالي' : language === 'fr' ? 'Suivant' : 'Next'}
                <ArrowRight size={16} className={language === 'ar' ? 'rotate-180' : ''} />
              </motion.button>
            </motion.div>
          )}

          {/* ===== THEME STEP ===== */}
          {step === 'theme' && (
            <motion.div
              key="theme"
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.5, ease: 'easeInOut' }}
              className="text-center"
            >
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: 'spring', stiffness: 200, damping: 15 }}
                className="text-6xl mb-6"
              >
                🌙
              </motion.div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white mb-2">
                {language === 'ar' ? 'المظهر الداكن مفعّل' : language === 'fr' ? 'Mode sombre activé' : 'Dark Mode is On'}
              </h2>
              <p className="text-gray-400 mb-6">
                {language === 'ar'
                  ? 'الموقع يعمل بأفضل شكل مع المظهر الداكن. يمكنك التبديل لاحقًا من شريط التنقل.'
                  : language === 'fr'
                  ? "Le site fonctionne mieux en mode sombre. Vous pouvez basculer plus tard depuis la barre de navigation."
                  : 'This site looks best in dark mode. You can toggle it later from the navbar.'}
              </p>
              <div className="flex gap-4 justify-center mb-8">
                <div className="w-32 h-44 rounded-xl bg-[#0a0e27] border-2 border-cyan-400 p-3 flex flex-col items-center gap-2 shadow-lg shadow-cyan-500/10">
                  <div className="w-full h-3 rounded bg-cyan-400/30" />
                  <div className="w-3/4 h-2 rounded bg-white/10" />
                  <div className="w-full h-2 rounded bg-white/10" />
                  <div className="w-1/2 h-2 rounded bg-amber-400/30" />
                  <div className="mt-auto text-xs text-cyan-400 font-medium">
                    {language === 'ar' ? 'داكن' : language === 'fr' ? 'Sombre' : 'Dark'}
                  </div>
                </div>
                <div className="w-32 h-44 rounded-xl bg-white border-2 border-gray-200 p-3 flex flex-col items-center gap-2 opacity-40">
                  <div className="w-full h-3 rounded bg-cyan-500/30" />
                  <div className="w-3/4 h-2 rounded bg-gray-200" />
                  <div className="w-full h-2 rounded bg-gray-200" />
                  <div className="w-1/2 h-2 rounded bg-amber-500/30" />
                  <div className="mt-auto text-xs text-gray-500 font-medium">
                    {language === 'ar' ? 'فاتح' : language === 'fr' ? 'Clair' : 'Light'}
                  </div>
                </div>
              </div>
              <motion.button
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                onClick={goNext}
                className="px-8 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-cyan-600 text-white font-semibold hover:from-cyan-400 hover:to-cyan-500 transition-all shadow-lg shadow-cyan-500/25 flex items-center gap-2 mx-auto min-h-[48px]"
              >
                <Rocket size={16} />
                {language === 'ar' ? 'ابدأ الجولة' : language === 'fr' ? 'Commencer la visite' : 'Start the Tour'}
              </motion.button>
            </motion.div>
          )}

          {/* ===== TOUR STEP ===== */}
          {step === 'tour' && (
            <motion.div
              key={`tour-${tourStep}`}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.5, ease: 'easeInOut' }}
              className="text-center"
            >
              <motion.div
                key={`icon-${tourStep}`}
                initial={{ scale: 0, rotate: -90 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ type: 'spring', stiffness: 200, damping: 12 }}
                className="text-6xl sm:text-7xl mb-6 inline-block"
              >
                {tourSteps[tourStep].icon}
              </motion.div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white mb-3">
                {tourSteps[tourStep].title}
              </h2>
              <p className="text-gray-400 leading-relaxed mb-8 max-w-sm mx-auto">
                {tourSteps[tourStep].desc}
              </p>
              {/* Tour step counter */}
              <div className="flex gap-1.5 justify-center mb-6">
                {tourSteps.map((_, i) => (
                  <motion.div
                    key={i}
                    className="h-1 rounded-full"
                    animate={{
                      width: i === tourStep ? 32 : 8,
                      backgroundColor: i === tourStep ? '#06b6d4' : 'rgba(255,255,255,0.2)',
                    }}
                    transition={{ duration: 0.3 }}
                  />
                ))}
              </div>
              <div className="flex items-center justify-center gap-3">
                {tourStep > 0 && (
                  <button
                    onClick={goBack}
                    className="px-6 py-3 rounded-xl bg-white/5 border border-white/10 text-white font-medium hover:bg-white/10 transition-all min-h-[48px]"
                  >
                    {language === 'ar' ? 'السابق' : language === 'fr' ? 'Précédent' : 'Back'}
                  </button>
                )}
                <button
                  onClick={goNext}
                  className="px-8 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-cyan-600 text-white font-semibold hover:from-cyan-400 hover:to-cyan-500 transition-all shadow-lg shadow-cyan-500/25 flex items-center gap-2 min-h-[48px]"
                >
                  {tourStep < tourSteps.length - 1
                    ? (language === 'ar' ? 'التالي' : language === 'fr' ? 'Suivant' : 'Next')
                    : (language === 'ar' ? 'هيا بنا!' : language === 'fr' ? "C'est parti !" : "Let's Go!")}
                  <ArrowRight size={16} className={language === 'ar' ? 'rotate-180' : ''} />
                </button>
              </div>
            </motion.div>
          )}

          {/* ===== COMPLETE STEP ===== */}
          {step === 'complete' && (
            <motion.div
              key="complete"
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.5, ease: 'easeInOut' }}
              className="text-center"
            >
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: 'spring', stiffness: 200, damping: 12 }}
                className="w-20 h-20 rounded-full bg-gradient-to-br from-cyan-400 to-amber-400 flex items-center justify-center mx-auto mb-6 shadow-lg shadow-cyan-500/30"
              >
                <span className="text-4xl">✨</span>
              </motion.div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white mb-3">
                {language === 'ar' ? 'أنت جاهز!' : language === 'fr' ? "Vous êtes prêt !" : "You're All Set!"}
              </h2>
              <p className="text-gray-400 mb-8 leading-relaxed max-w-sm mx-auto">
                {language === 'ar'
                  ? 'استكشف الموقع وتعرف على أبحاثي ومشاريعي وخدماتي. لا تتردد في التواصل!'
                  : language === 'fr'
                  ? "Explorez le site et découvrez mes recherches, projets et services. N'hésitez pas à me contacter !"
                  : "Explore the site to discover my research, projects, and services. Don't hesitate to reach out!"}
              </p>
              <motion.button
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                onClick={finishOnboarding}
                className="px-10 py-4 rounded-xl bg-gradient-to-r from-cyan-500 via-cyan-500 to-amber-500 text-white font-bold text-lg hover:from-cyan-400 hover:via-cyan-400 hover:to-amber-400 transition-all shadow-xl shadow-cyan-500/30 flex items-center gap-3 mx-auto min-h-[52px] pulse-glow"
              >
                <Sparkles size={20} />
                {language === 'ar' ? 'ادخل الموقع' : language === 'fr' ? 'Entrer' : 'Enter Site'}
              </motion.button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Decorative corner gradients */}
      <div className="absolute top-0 left-0 w-48 h-48 bg-gradient-to-br from-cyan-500/10 to-transparent pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-48 h-48 bg-gradient-to-tl from-amber-500/10 to-transparent pointer-events-none" />
    </motion.div>
  );
}
