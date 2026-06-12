'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '@/lib/language-context';

const roles = {
  en: ['PhD Researcher', 'Agricultural Innovator', 'Digital Trainer', 'FBS Master Trainer', 'AI Builder'],
  ar: ['باحث دكتوراه', 'مبتكر زراعي', 'مدرب رقمي', 'مدرب رئيسي FBS', 'مطور ذكاء اصطناعي'],
  fr: ['Docteur Chercheur', 'Innovateur Agricole', 'Formateur Numérique', 'Formateur FBS', 'Créateur IA'],
};

function TypingCycle({ words }: { words: string[] }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentWord = words[currentIndex];

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        setDisplayText(currentWord.substring(0, displayText.length + 1));
        if (displayText.length === currentWord.length) {
          setTimeout(() => setIsDeleting(true), 2000);
          return;
        }
      } else {
        setDisplayText(currentWord.substring(0, displayText.length - 1));
        if (displayText.length === 0) {
          setIsDeleting(false);
          setCurrentIndex((prev) => (prev + 1) % words.length);
          return;
        }
      }
    }, isDeleting ? 40 : 80);

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, currentIndex, words]);

  return (
    <span>
      {displayText}
      <span className="typewriter-cursor">|</span>
      <style>{`
        @keyframes typewriter-blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }
        .typewriter-cursor {
          animation: typewriter-blink 0.8s step-end infinite;
          color: #06b6d4;
        }
      `}</style>
    </span>
  );
}

export default function TypewriterText() {
  const { language } = useLanguage();
  const currentRoles = roles[language] || roles.en;

  return (
    <motion.span
      className="gradient-text inline-block min-h-[1.2em]"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <TypingCycle words={currentRoles} />
    </motion.span>
  );
}
