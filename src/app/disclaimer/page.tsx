'use client';

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { Navbar } from '../../components/layout/Navbar';
import { Footer } from '../../components/layout/Footer';
import { Breadcrumb } from '../../components/common/Breadcrumb';
import { HeroBanner } from '../../components/common/HeroBanner';
import {
  Info,
  FileSearch,
  Activity,
  Sprout,
  ExternalLink,
  UserCheck,
  Scale,
  ShieldAlert,
  ArrowRight,
  Leaf,
  Heart,
} from 'lucide-react';

export default function DisclaimerPage() {
  const router = useRouter();
  const [darkMode, setDarkMode] = useState(false);
  const [activeNav, setActiveNav] = useState('Disclaimer');

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  const handleToggleDarkMode = () => {
    setDarkMode((prev) => !prev);
  };

  const handleNavClick = (navItem: string) => {
    setActiveNav(navItem);
    if (navItem === 'Home') {
      router.push('/');
    } else if (navItem === 'Foods') {
      router.push('/healthy-foods');
    } else {
      router.push('/');
    }
  };

  const disclaimerPoints = [
    {
      id: 1,
      title: '1. Not a Substitute for Professional Advice',
      icon: <FileSearch className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />,
      content:
        'The content on this website, including text, graphics, images, videos and other material, is not intended as a substitute for professional medical advice, diagnosis or treatment. Always seek the advice of your physician, registered dietitian, or other qualified healthcare provider with any questions you may have regarding a medical condition or diet and before starting any new diet, nutrition plan, supplement or exercise program.',
    },
    {
      id: 2,
      title: '2. Individual Results May Vary',
      icon: <Activity className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />,
      content:
        "Every individual's health needs and responses to food and lifestyle changes are different. The information on this site may not be suitable for everyone. Results from the use of information on this website may vary from person to person.",
    },
    {
      id: 3,
      title: '3. No Guarantees',
      icon: <Sprout className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />,
      content:
        'While we strive to provide accurate, up-to-date and reliable information, Healthy Awareness does not make any warranties or representations regarding the accuracy, completeness, or adequacy of the information provided. We do not guarantee any specific results from following the information on this website.',
    },
    {
      id: 4,
      title: '4. External Links',
      icon: <ExternalLink className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />,
      content:
        'Our website may contain links to external websites or resources for additional information. We are not responsible for the content or practices of these external sites and do not endorse any products, services or information offered by third parties.',
    },
    {
      id: 5,
      title: '5. Personal Responsibility',
      icon: <UserCheck className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />,
      content:
        'You are responsible for your own health decisions. Please use your own judgment and consult with a healthcare professional before making any changes to your diet, lifestyle or treatment plan.',
    },
    {
      id: 6,
      title: '6. Content Updates',
      icon: <Scale className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />,
      content:
        'Information on this website may be updated from time to time without prior notice. We encourage you to review this disclaimer periodically.',
    },
  ];

  return (
    <div className="min-h-screen bg-[#f8f9f6] dark:bg-slate-950 text-slate-900 dark:text-slate-100 flex flex-col font-sans transition-colors duration-300">
      {/* Schema.org JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'WebPage',
            name: 'Disclaimer - Healthy Awareness',
            url: 'https://healthylife.app/disclaimer',
            description:
              'The information provided on Healthy Awareness is for general informational and educational purposes only.',
          }),
        }}
      />

      {/* Sticky Header Navigation */}
      <Navbar
        darkMode={darkMode}
        onToggleDarkMode={handleToggleDarkMode}
        activeNav={activeNav}
        onNavClick={handleNavClick}
      />

      {/* Main Content Layout */}
      <main className="flex-1 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 space-y-6">
        {/* Breadcrumb */}
        <Breadcrumb items={[{ label: 'Disclaimer' }]} />

        {/* 1. HERO HEADER BANNER */}
        <HeroBanner
          title="Disclaimer"
          subtitle="The information provided on Healthy Awareness is for general informational and educational purposes only."
          rightContent={
            <div className="w-full max-w-[360px] aspect-4/3 rounded-[24px] bg-[#e6f2e6] dark:bg-slate-800 flex items-center justify-center p-4 relative overflow-hidden shadow-xs border border-emerald-100 dark:border-slate-700">
              {/* Healthy Salad Bowl & Botanical SVG */}
              <svg viewBox="0 0 240 180" className="w-full h-full max-h-40">
                <defs>
                  <linearGradient id="bowlGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#fef3c7" />
                    <stop offset="100%" stopColor="#d97706" />
                  </linearGradient>
                  <radialGradient id="oilGrad" cx="50%" cy="50%" r="50%">
                    <stop offset="0%" stopColor="#fef08a" />
                    <stop offset="100%" stopColor="#ca8a04" />
                  </radialGradient>
                </defs>

                {/* Leaf Accents */}
                <circle cx="210" cy="30" r="14" fill="#86efac" opacity="0.4" />
                <path d="M200 20 C190 5, 220 5, 215 25 Z" fill="#10b981" />
                <path d="M30 40 C15 25, 45 20, 40 42 Z" fill="#34d399" />
                <circle cx="25" cy="45" r="4" fill="#059669" />

                {/* Salad Bowl Base */}
                <ellipse cx="120" cy="115" rx="75" ry="45" fill="#f59e0b" opacity="0.2" />
                <path d="M45 95 C45 145, 195 145, 195 95 Z" fill="url(#bowlGrad)" stroke="#b45309" strokeWidth="2" />
                <ellipse cx="120" cy="95" rx="75" ry="25" fill="#ecfdf5" stroke="#059669" strokeWidth="2" />

                {/* Salad Ingredients (Avocado, Broccoli, Chickpeas, Seeds) */}
                <circle cx="85" cy="92" r="14" fill="#15803d" />
                <circle cx="85" cy="92" r="8" fill="#fef08a" />
                <circle cx="85" cy="92" r="4" fill="#78350f" />

                {/* Broccoli Florets */}
                <circle cx="115" cy="85" r="12" fill="#166534" />
                <circle cx="124" cy="82" r="9" fill="#22c55e" />
                <circle cx="106" cy="88" r="8" fill="#15803d" />

                {/* Chickpeas */}
                <circle cx="145" cy="95" r="5" fill="#fde047" stroke="#ca8a04" strokeWidth="1" />
                <circle cx="155" cy="90" r="4.5" fill="#fde047" stroke="#ca8a04" strokeWidth="1" />
                <circle cx="150" cy="102" r="5" fill="#fde047" stroke="#ca8a04" strokeWidth="1" />
                <circle cx="138" cy="100" r="4" fill="#fde047" stroke="#ca8a04" strokeWidth="1" />

                {/* Cherry Tomatoes */}
                <circle cx="98" cy="104" r="7" fill="#ef4444" />
                <circle cx="125" cy="106" r="6" fill="#dc2626" />

                {/* Olive Oil Glass Bottle (Right side) */}
                <rect x="185" y="65" width="22" height="40" rx="6" fill="url(#oilGrad)" stroke="#a16207" strokeWidth="1.5" />
                <rect x="192" y="52" width="8" height="14" rx="2" fill="#eab308" />
                <rect x="190" y="47" width="12" height="6" rx="2" fill="#78350f" />
              </svg>
            </div>
          }
        />

        {/* 2. INTRO INFO ALERT BANNER */}
        <section className="bg-emerald-50/90 dark:bg-emerald-950/40 border border-emerald-200/80 dark:border-emerald-900/60 rounded-2xl p-5 sm:p-6 flex items-start gap-4 shadow-2xs">
          <div className="w-10 h-10 rounded-full bg-emerald-100 dark:bg-emerald-900/80 text-emerald-700 dark:text-emerald-300 flex items-center justify-center shrink-0 mt-0.5 border border-emerald-200 dark:border-emerald-800">
            <Info className="w-5 h-5 stroke-[2.5]" />
          </div>
          <p className="text-xs sm:text-sm font-semibold text-slate-700 dark:text-slate-200 leading-relaxed">
            Healthy Awareness is dedicated to helping you make informed choices for a healthier life. However, it is important to understand the limitations of the information we provide.
          </p>
        </section>

        {/* 3. DISCLAIMER POINTS GRID */}
        <section className="space-y-4">
          {disclaimerPoints.map((point) => (
            <div
              key={point.id}
              className="bg-white dark:bg-slate-900 rounded-2xl p-5 sm:p-6 border border-slate-200/70 dark:border-slate-800 shadow-2xs hover:shadow-xs transition-all duration-200 flex items-start gap-4"
            >
              <div className="w-11 h-11 rounded-full bg-emerald-50 dark:bg-emerald-950/80 border border-emerald-100 dark:border-emerald-900/60 flex items-center justify-center shrink-0 mt-0.5 shadow-2xs">
                {point.icon}
              </div>
              <div className="space-y-2 flex-1">
                <h2 className="text-base sm:text-lg font-black text-slate-900 dark:text-white tracking-tight">
                  {point.title}
                </h2>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 font-medium leading-relaxed">
                  {point.content}
                </p>
              </div>
            </div>
          ))}
        </section>

        {/* 4. OUR COMMITMENT CARD */}
        <section className="bg-gradient-to-r from-[#eaf5ea] to-[#f4fbf4] dark:from-slate-900 dark:to-emerald-950/40 rounded-3xl p-6 sm:p-8 border border-emerald-200/60 dark:border-emerald-900/60 shadow-xs relative overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
            <div className="md:col-span-8 space-y-3.5">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-emerald-100 dark:bg-emerald-900/70 text-emerald-700 dark:text-emerald-300 flex items-center justify-center shrink-0">
                  <Sprout className="w-5 h-5 stroke-[2.5]" />
                </div>
                <h3 className="text-lg sm:text-xl font-black text-slate-900 dark:text-white tracking-tight">
                  Our Commitment
                </h3>
              </div>

              <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-200 font-medium leading-relaxed">
                Healthy Awareness is committed to providing high-quality, evidence-based information to support your journey towards better health. Our goal is to empower you with knowledge, not replace the advice of healthcare professionals.
              </p>

              <div className="pt-1">
                <p className="text-xs sm:text-sm font-black text-emerald-800 dark:text-emerald-300">
                  If you have any concerns about your health, please consult a qualified healthcare provider.
                </p>
              </div>
            </div>

            {/* Right Leaf Illustration */}
            <div className="md:col-span-4 flex justify-center md:justify-end items-center">
              <div className="w-36 h-36 relative flex items-center justify-center">
                <svg viewBox="0 0 160 160" className="w-full h-full">
                  <circle cx="80" cy="80" r="70" fill="#a7f3d0" opacity="0.3" />
                  <path d="M80 140 C80 140, 40 100, 40 60 C40 38, 58 20, 80 20 C102 20, 120 38, 120 60 C120 100, 80 140, 80 140 Z" fill="#15803d" />
                  <path d="M80 30 L80 125" stroke="#a7f3d0" strokeWidth="3" strokeLinecap="round" />
                  <path d="M80 50 C65 60, 60 75, 60 75" fill="none" stroke="#a7f3d0" strokeWidth="2.5" strokeLinecap="round" />
                  <path d="M80 75 C95 85, 100 100, 100 100" fill="none" stroke="#a7f3d0" strokeWidth="2.5" strokeLinecap="round" />
                </svg>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
