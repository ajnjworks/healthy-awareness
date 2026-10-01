'use client';

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { Navbar } from '../../components/layout/Navbar';
import { Footer } from '../../components/layout/Footer';
import { Breadcrumb } from '../../components/common/Breadcrumb';
import {
  Check,
  Heart,
  Mail,
  FileText,
  Utensils,
  Lightbulb,
  Scale,
  ArrowRight,
  Send,
} from 'lucide-react';

export default function ThankYouPage() {
  const router = useRouter();
  const [darkMode, setDarkMode] = useState(false);
  const [activeNav, setActiveNav] = useState('');
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

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

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    setSubscribed(true);
    setTimeout(() => {
      setSubscribed(false);
      setEmail('');
    }, 4000);
  };

  const nextSteps = [
    {
      title: 'Explore Healthy Articles',
      subtitle: 'Discover expert insights on nutrition, wellness and more.',
      buttonText: 'Read Articles',
      icon: <FileText className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />,
      link: '/articles',
    },
    {
      title: 'Find Healthy Recipes',
      subtitle: 'Try delicious and nutritious recipes for a better you.',
      buttonText: 'View Recipes',
      icon: <Utensils className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />,
      link: '/recipes',
    },
    {
      title: 'Get Health Tips',
      subtitle: 'Simple tips and habits to improve your daily life.',
      buttonText: 'Explore Tips',
      icon: <Lightbulb className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />,
      link: '/healthy-tips',
    },
    {
      title: 'Compare Foods',
      subtitle: 'Compare nutrition, benefits and choose wisely.',
      buttonText: 'Compare Now',
      icon: <Scale className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />,
      link: '/compare-foods',
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
            name: 'Thank You - Healthy Awareness',
            url: 'https://healthylife.app/thank-you',
            description:
              'Thank you for your submission. We appreciate you and will get back to you as soon as possible.',
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

      {/* Main Content */}
      <main className="flex-1 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 space-y-10">
        {/* Breadcrumb */}
        <Breadcrumb items={[{ label: 'Thank You' }]} />

        {/* 1. HERO SECTION */}
        <section className="bg-white dark:bg-slate-900 rounded-[32px] p-6 sm:p-10 lg:p-12 border border-slate-200/70 dark:border-slate-800 shadow-xs relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Main Content */}
            <div className="lg:col-span-7 space-y-6">
              {/* Checkmark Icon Circle */}
              <div className="w-16 h-16 rounded-full bg-emerald-100 dark:bg-emerald-950/80 border-2 border-emerald-300 dark:border-emerald-700 flex items-center justify-center text-emerald-700 dark:text-emerald-300 shadow-xs">
                <Check className="w-9 h-9 stroke-[3]" />
              </div>

              {/* Title & Badge */}
              <div className="space-y-2">
                <h1 className="text-4xl sm:text-5xl font-black tracking-tight text-slate-900 dark:text-white leading-tight">
                  Thank You!
                </h1>
                <div className="flex items-center gap-2 text-emerald-700 dark:text-emerald-400 font-extrabold text-base sm:text-lg">
                  <Heart className="w-4 h-4 fill-emerald-600 text-emerald-600" />
                  <span>We Appreciate You</span>
                </div>
              </div>

              {/* Subtitle */}
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 font-semibold leading-relaxed max-w-lg">
                Your submission has been received successfully. We will get back to you as soon as possible.
              </p>

              {/* Confirmation Email Alert Card */}
              <div className="bg-[#f2f8f2] dark:bg-slate-800/90 rounded-2xl p-4 sm:p-5 border border-emerald-200/80 dark:border-slate-700 flex items-start gap-4 max-w-md shadow-2xs">
                <div className="w-10 h-10 rounded-xl bg-emerald-100 dark:bg-emerald-900/80 border border-emerald-200 dark:border-emerald-800 text-emerald-700 dark:text-emerald-300 flex items-center justify-center shrink-0">
                  <Mail className="w-5 h-5 stroke-[2]" />
                </div>
                <div className="space-y-0.5">
                  <h2 className="text-xs sm:text-sm font-black text-slate-900 dark:text-white">
                    Confirmation sent!
                  </h2>
                  <p className="text-[11px] sm:text-xs text-slate-600 dark:text-slate-300 font-medium">
                    We've sent a confirmation email to your provided email address.
                  </p>
                </div>
              </div>
            </div>

            {/* Right Graphic Banner */}
            <div className="lg:col-span-5 relative flex flex-col items-center justify-center">
              <div className="w-full max-w-[360px] aspect-4/3 rounded-[28px] bg-[#e6f2e6] dark:bg-slate-800 flex items-center justify-center p-6 relative overflow-hidden shadow-xs border border-emerald-100 dark:border-slate-700">
                {/* Background Leaf Accents */}
                <div className="absolute top-4 right-4 text-emerald-500/20 dark:text-emerald-400/20">
                  <Heart className="w-24 h-24 fill-current" />
                </div>

                {/* SVG Illustration of Salad, Lemon & Olive Oil */}
                <svg viewBox="0 0 240 180" className="w-full h-full max-h-48 z-10">
                  <defs>
                    <radialGradient id="saladGrad" cx="50%" cy="50%" r="50%">
                      <stop offset="0%" stopColor="#4ade80" />
                      <stop offset="100%" stopColor="#15803d" />
                    </radialGradient>
                  </defs>

                  {/* Healthy Meal Bowl */}
                  <ellipse cx="120" cy="115" rx="70" ry="40" fill="#000000" opacity="0.1" />
                  <path d="M50 90 C50 140, 190 140, 190 90 Z" fill="#d97706" />
                  <ellipse cx="120" cy="90" rx="70" ry="24" fill="#ecfdf5" stroke="#15803d" strokeWidth="2" />

                  {/* Greens & Salad toppings */}
                  <circle cx="85" cy="88" r="14" fill="url(#saladGrad)" />
                  <circle cx="110" cy="82" r="16" fill="#22c55e" />
                  <circle cx="135" cy="85" r="13" fill="#166534" />

                  {/* Chickpeas & Tomatoes */}
                  <circle cx="95" cy="95" r="4.5" fill="#fde047" stroke="#ca8a04" strokeWidth="1" />
                  <circle cx="105" cy="98" r="4.5" fill="#fde047" stroke="#ca8a04" strokeWidth="1" />
                  <circle cx="115" cy="94" r="4.5" fill="#fde047" stroke="#ca8a04" strokeWidth="1" />
                  <circle cx="140" cy="92" r="6" fill="#ef4444" />
                  <circle cx="80" cy="96" r="5" fill="#dc2626" />

                  {/* Olive Oil Bottle */}
                  <rect x="185" y="55" width="24" height="48" rx="6" fill="#fef08a" stroke="#ca8a04" strokeWidth="1.5" />
                  <rect x="193" y="40" width="8" height="15" rx="2" fill="#eab308" />
                  <rect x="190" y="34" width="14" height="6" rx="2" fill="#78350f" />

                  {/* Lemon Wedge */}
                  <path d="M40 105 Q60 135 75 110 Z" fill="#facc15" stroke="#ca8a04" strokeWidth="1.5" />
                </svg>

                {/* Overlaid Inspirational Text */}
                <div className="absolute bottom-3 text-center px-4">
                  <p className="text-xs font-black italic text-emerald-900 dark:text-emerald-200 tracking-tight">
                    "Your step towards a healthier life matters to us. ♡"
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 2. WHAT'S NEXT SECTION */}
        <section className="space-y-6">
          <div className="text-center space-y-1">
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white tracking-tight">
              What's Next?
            </h2>
            <div className="w-12 h-1 bg-emerald-500 rounded-full mx-auto" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {nextSteps.map((step, idx) => (
              <div
                key={idx}
                className="bg-white dark:bg-slate-900 rounded-2xl p-6 border border-slate-200/70 dark:border-slate-800 shadow-2xs hover:shadow-md transition-all duration-200 flex flex-col items-center text-center justify-between space-y-4 group"
              >
                <div className="space-y-3 flex flex-col items-center">
                  <div className="w-12 h-12 rounded-full bg-emerald-50 dark:bg-emerald-950/80 border border-emerald-100 dark:border-emerald-900/60 flex items-center justify-center shadow-2xs group-hover:scale-105 transition-transform duration-200">
                    {step.icon}
                  </div>
                  <h3 className="text-sm sm:text-base font-black text-slate-900 dark:text-white tracking-tight">
                    {step.title}
                  </h3>
                  <p className="text-xs text-slate-600 dark:text-slate-300 font-medium leading-relaxed">
                    {step.subtitle}
                  </p>
                </div>

                <div className="pt-2 flex justify-center">
                  <button
                    onClick={() => router.push(step.link)}
                    className="text-xs font-extrabold text-emerald-700 dark:text-emerald-400 hover:text-emerald-800 dark:hover:text-emerald-300 inline-flex items-center gap-1.5 transition-colors cursor-pointer"
                  >
                    <span>{step.buttonText}</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 3. STAY UPDATED NEWSLETTER BANNER */}
        <section className="bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-8 border border-slate-200/70 dark:border-slate-800 shadow-xs relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
            {/* Left Mail Envelope Graphic */}
            <div className="lg:col-span-3 flex justify-center lg:justify-start">
              <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-2xl bg-emerald-50 dark:bg-slate-800 border border-emerald-100 dark:border-slate-700 flex items-center justify-center p-4 shadow-2xs relative">
                <svg viewBox="0 0 100 80" className="w-full h-full">
                  <rect x="5" y="15" width="90" height="55" rx="8" fill="#86efac" />
                  <path d="M5 20 L50 48 L95 20" fill="none" stroke="#15803d" strokeWidth="4" strokeLinejoin="round" />
                  <circle cx="80" cy="20" r="10" fill="#f59e0b" />
                  <path d="M80 14 V26 M74 20 H86" stroke="#ffffff" strokeWidth="2" />
                </svg>
              </div>
            </div>

            {/* Middle Text */}
            <div className="lg:col-span-5 space-y-1.5 text-center lg:text-left">
              <h3 className="text-base sm:text-lg font-black text-slate-900 dark:text-white tracking-tight">
                Stay Updated, Stay Healthy
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 font-medium leading-relaxed">
                Subscribe to our newsletter and never miss the latest health tips, articles and recipes.
              </p>
            </div>

            {/* Right Form */}
            <div className="lg:col-span-4 space-y-2">
              {subscribed ? (
                <div className="p-3 rounded-xl bg-emerald-100 dark:bg-emerald-950 text-emerald-800 dark:text-emerald-200 text-xs font-bold text-center">
                  Subscribed successfully!
                </div>
              ) : (
                <form onSubmit={handleSubscribe} className="flex items-center gap-2">
                  <input
                    type="email"
                    required
                    placeholder="Enter your email address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-xs text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-500/50"
                  />
                  <button
                    type="submit"
                    className="px-5 py-2.5 rounded-xl bg-[#1c6628] hover:bg-[#15501f] text-white font-extrabold text-xs shadow-xs transition-colors shrink-0 cursor-pointer"
                  >
                    Subscribe
                  </button>
                </form>
              )}
              <p className="text-[10px] text-slate-400 text-center lg:text-left font-medium">
                No spam. Unsubscribe anytime.
              </p>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
