'use client';

import { useState, useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Skills from '@/components/Skills';
import Experience from '@/components/Experience';
import Projects from '@/components/Projects';
import Publications from '@/components/Publications';
import AcademicProfiles from '@/components/AcademicProfiles';
import Services from '@/components/Services';
import Achievements from '@/components/Achievements';
import KnowledgeHub from '@/components/KnowledgeHub';
import Testimonials from '@/components/Testimonials';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import ScrollToTop from '@/components/ScrollToTop';
import Onboarding from '@/components/Onboarding';
import Chatbot from '@/components/Chatbot';
import ScrollProgress from '@/components/ScrollProgress';
import SmartNotifications from '@/components/SmartNotifications';
import InteractiveMap from '@/components/InteractiveMap';
import ImageGallery from '@/components/ImageGallery';
import BookingCalendar from '@/components/BookingCalendar';

const STORAGE_KEY = 'portfolio-onboarding-completed';

export default function Home() {
  const [showOnboarding, setShowOnboarding] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const completed = localStorage.getItem(STORAGE_KEY);
    if (!completed) {
      setShowOnboarding(true);
    }
    setMounted(true);
  }, []);

  const handleOnboardingComplete = () => {
    setShowOnboarding(false);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <ScrollProgress />
      {mounted && showOnboarding && (
        <Onboarding onComplete={handleOnboardingComplete} />
      )}
      <Navbar />
      <SmartNotifications />
      <main className="flex-1">
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Publications />
        <AcademicProfiles />
        <Services />
        <Achievements />
        <ImageGallery />
        <InteractiveMap />
        <KnowledgeHub />
        <Testimonials />
        <BookingCalendar />
        <Contact />
      </main>
      <Footer />
      <ScrollToTop />
      <Chatbot />
    </div>
  );
}
