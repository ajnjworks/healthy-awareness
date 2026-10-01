'use client';

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import {
  Heart,
  Leaf,
  Clock,
  Mail,
  ArrowRight,
  ShieldCheck,
  Lock,
  Rocket,
  Wrench,
  Sun,
  Moon,
  Send,
  CheckCircle2,
  ChevronRight,
} from 'lucide-react';

export default function MaintenancePage() {
  const router = useRouter();
  const [darkMode, setDarkMode] = useState(false);
  const [notifyOpen, setNotifyOpen] = useState(false);
  const [email, setEmail] = useState('');
  const [notified, setNotified] = useState(false);
  const [footerEmail, setFooterEmail] = useState('');
  const [footerSubscribed, setFooterSubscribed] = useState(false);

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

  const handleNotifySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setNotified(true);
    setTimeout(() => {
      setNotified(false);
      setNotifyOpen(false);
      setEmail('');
    }, 3000);
  };

  const handleFooterSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    setFooterSubscribed(true);
    setTimeout(() => {
      setFooterSubscribed(false);
      setFooterEmail('');
    }, 3000);
  };

  return (
    <div className="min-h-screen bg-[#f8f9f6] dark:bg-slate-950 text-slate-900 dark:text-slate-100 flex flex-col font-sans transition-colors duration-300">
      {/* Schema.org JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'WebPage',
            name: 'Maintenance - Healthy Awareness',
            url: 'https://healthylife.app/maintenance',
            description:
              "We're currently performing some updates and improvements to serve you better.",
          }),
        }}
      />

      {/* Minimal Header */}
      <header className="bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border-b border-slate-200/80 dark:border-slate-800 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3.5 flex items-center justify-between">
          {/* Logo */}
          <a href="/" className="flex items-center gap-2.5">
            <div className="relative w-9 h-9 rounded-xl bg-gradient-to-br from-emerald-500 to-green-600 flex items-center justify-center text-white shadow-md">
              <Leaf className="w-4 h-4 absolute -top-1 -right-1 text-amber-300 fill-amber-300" />
              <Heart className="w-4.5 h-4.5 fill-white text-white" />
            </div>
            <div className="flex flex-col">
              <span className="text-base font-bold tracking-tight text-slate-900 dark:text-white leading-none">
                Healthy
              </span>
              <span className="text-[10px] font-semibold text-emerald-600 dark:text-emerald-400 tracking-wider">
                Awareness
              </span>
            </div>
          </a>

          {/* Slogan & Dark Mode Toggle */}
          <div className="flex items-center gap-4">
            <span className="hidden sm:inline-flex items-center gap-1 text-xs font-semibold text-slate-500 dark:text-slate-400">
              <ChevronRight className="w-3.5 h-3.5 text-emerald-600" />
              <span>Live Healthy, Live Better</span>
            </span>

            <button
              onClick={handleToggleDarkMode}
              className="p-2 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors cursor-pointer"
              aria-label="Toggle dark mode"
            >
              {darkMode ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4" />}
            </button>
          </div>
        </div>
      </header>

      {/* Main Content Layout Container */}
      <main className="flex-1 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-12">
        {/* 1. MAIN HERO MAINTENANCE SECTION */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left Column Text Content */}
          <div className="lg:col-span-6 space-y-5">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-100/80 dark:bg-emerald-950/80 border border-emerald-200 dark:border-emerald-900 text-emerald-800 dark:text-emerald-300 text-xs font-extrabold uppercase tracking-wider">
              <Leaf className="w-3.5 h-3.5 text-emerald-600" />
              <span>WE'LL BE BACK SOON!</span>
            </div>

            {/* Main Heading */}
            <div className="space-y-2">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 dark:text-white tracking-tight leading-tight">
                We're Under <br />
                <span className="text-emerald-600 dark:text-emerald-400">Maintenance</span>
              </h1>

              {/* Heart & Line Divider */}
              <div className="flex items-center gap-2 pt-1">
                <Heart className="w-4 h-4 text-emerald-600 dark:text-emerald-400 fill-emerald-600 dark:fill-emerald-400" />
                <div className="w-32 h-0.5 bg-emerald-500/40 rounded-full" />
              </div>
            </div>

            {/* Description */}
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 font-semibold leading-relaxed max-w-lg">
              We're currently performing some updates and improvements to serve you better. Thank you for your patience and support.
            </p>

            {/* Time Box */}
            <div className="bg-[#f0f7f0] dark:bg-slate-900 rounded-2xl p-4 border border-emerald-200/80 dark:border-slate-800 flex items-center gap-3.5 max-w-md shadow-2xs">
              <div className="w-10 h-10 rounded-full bg-emerald-100 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-400 flex items-center justify-center shrink-0 border border-emerald-200 dark:border-emerald-800">
                <Clock className="w-5 h-5 stroke-[2.5]" />
              </div>
              <div className="space-y-0.5">
                <span className="text-[11px] font-medium text-slate-500 dark:text-slate-400 block">
                  Expected to be back on
                </span>
                <span className="text-xs sm:text-sm font-black text-emerald-800 dark:text-emerald-300 block">
                  Today, 06:00 PM IST
                </span>
              </div>
            </div>

            {/* Actions */}
            <div className="space-y-3 pt-2">
              <button
                onClick={() => setNotifyOpen(!notifyOpen)}
                className="px-6 py-3 rounded-xl bg-[#1c6628] hover:bg-[#15501f] text-white font-extrabold text-xs sm:text-sm shadow-md transition-all duration-200 inline-flex items-center gap-2 cursor-pointer hover:scale-105"
              >
                <Mail className="w-4 h-4" />
                <span>Notify Me When It's Back</span>
              </button>

              {/* Notify Form Popup Dropdown */}
              {notifyOpen && (
                <div className="bg-white dark:bg-slate-900 p-4 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-lg max-w-md space-y-2">
                  {notified ? (
                    <div className="p-3 rounded-xl bg-emerald-100 dark:bg-emerald-950 text-emerald-800 dark:text-emerald-200 text-xs font-bold text-center flex items-center justify-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                      <span>We'll notify you as soon as we're back online!</span>
                    </div>
                  ) : (
                    <form onSubmit={handleNotifySubmit} className="flex items-center gap-2">
                      <input
                        type="email"
                        required
                        placeholder="Enter your email address"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full px-3.5 py-2 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-xs text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-500/50"
                      />
                      <button
                        type="submit"
                        className="px-4 py-2 rounded-xl bg-emerald-600 text-white font-bold text-xs shrink-0 cursor-pointer hover:bg-emerald-700"
                      >
                        Submit
                      </button>
                    </form>
                  )}
                </div>
              )}

              <div>
                <a
                  href="/contact-us"
                  className="text-xs font-extrabold text-emerald-700 dark:text-emerald-400 hover:underline inline-flex items-center gap-1.5 cursor-pointer"
                >
                  <span>Need urgent help? Contact Us</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>

          {/* Right Column Monitor & Safety Equipment Graphic */}
          <div className="lg:col-span-6 relative flex justify-center">
            <div className="w-full max-w-[460px] aspect-4/3 rounded-[32px] bg-[#e6f2e6] dark:bg-slate-900 flex items-center justify-center p-6 relative overflow-hidden shadow-xs border border-emerald-100 dark:border-slate-800">
              {/* Construction & Desktop Monitor SVG Illustration */}
              <svg viewBox="0 0 320 240" className="w-full h-full max-h-64">
                {/* Background Leaf Ornaments */}
                <path d="M20 40 C10 20, 50 10, 45 35 Z" fill="#6ee7b7" opacity="0.6" />
                <path d="M25 60 C10 40, 55 30, 50 55 Z" fill="#10b981" opacity="0.8" />
                <path d="M290 50 C275 35, 305 30, 300 48 Z" fill="#6ee7b7" opacity="0.6" />

                {/* Plant Pot on Left */}
                <rect x="25" y="145" width="26" height="30" rx="4" fill="#ffffff" stroke="#cbd5e1" strokeWidth="2" />
                <path d="M38 145 C28 125, 10 120, 18 105 C32 110, 36 130, 38 145 Z" fill="#15803d" />
                <path d="M38 145 C48 125, 66 120, 58 105 C44 110, 40 130, 38 145 Z" fill="#22c55e" />

                {/* Monitor Stand & Base */}
                <rect x="145" y="160" width="30" height="25" fill="#94a3b8" />
                <ellipse cx="160" cy="185" rx="45" ry="8" fill="#cbd5e1" />

                {/* Monitor Screen Frame */}
                <rect x="60" y="40" width="200" height="125" rx="12" fill="#1e293b" stroke="#334155" strokeWidth="3" />
                <rect x="68" y="48" width="184" height="109" rx="8" fill="#ffffff" />

                {/* Inside Screen Content */}
                <circle cx="160" cy="72" r="16" fill="#d1fae5" />
                <path d="M154 78 L166 66 M166 78 L154 66" stroke="#15803d" strokeWidth="3.5" strokeLinecap="round" />

                <text x="160" y="98" textAnchor="middle" fontSize="13" fontWeight="900" fill="#0f172a">
                  We're working
                </text>
                <text x="160" y="112" textAnchor="middle" fontSize="13" fontWeight="900" fill="#0f172a">
                  on something better!
                </text>
                <text x="160" y="126" textAnchor="middle" fontSize="9" fontWeight="600" fill="#64748b">
                  Sit tight, great things are coming.
                </text>

                {/* Progress Bar (45%) */}
                <rect x="90" y="134" width="140" height="8" rx="4" fill="#e2e8f0" />
                <rect x="90" y="134" width="63" height="8" rx="4" fill="#16a34a" />
                <text x="160" y="152" textAnchor="middle" fontSize="9" fontWeight="800" fill="#1e293b">
                  45%
                </text>

                {/* Safety Helmet on Top Right Corner */}
                <path d="M235 48 C235 34, 275 34, 275 48 Z" fill="#f59e0b" />
                <rect x="230" y="46" width="50" height="6" rx="2" fill="#d97706" />

                {/* Traffic Safety Cone */}
                <polygon points="230,185 245,135 255,135 270,185" fill="#f97316" />
                <polygon points="236,165 248,145 252,145 264,165" fill="#ffffff" />
                <rect x="225" y="183" width="50" height="6" rx="2" fill="#c2410c" />

                {/* Construction Striped Barrier */}
                <rect x="240" y="105" width="70" height="32" rx="4" fill="#fde047" stroke="#ca8a04" strokeWidth="2" />
                <path d="M245 105 L260 137 M260 105 L275 137 M275 105 L290 137 M290 105 L305 137" stroke="#1e293b" strokeWidth="5" />
                <rect x="243" y="112" width="64" height="18" rx="2" fill="#fde047" />
                <text x="275" y="121" textAnchor="middle" fontSize="6.5" fontWeight="900" fill="#0f172a">
                  THANK YOU FOR
                </text>
                <text x="275" y="127" textAnchor="middle" fontSize="6.5" fontWeight="900" fill="#0f172a">
                  YOUR PATIENCE
                </text>
              </svg>
            </div>
          </div>
        </section>

        {/* 2. 4 VALUE HIGHLIGHT BOXES */}
        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          <div className="bg-white dark:bg-slate-900 rounded-2xl p-5 border border-slate-200/70 dark:border-slate-800 shadow-2xs space-y-3 flex items-start gap-3.5">
            <div className="w-10 h-10 rounded-xl bg-emerald-50 dark:bg-emerald-950/80 text-emerald-600 dark:text-emerald-400 flex items-center justify-center shrink-0 border border-emerald-100 dark:border-emerald-900">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div className="space-y-1">
              <h3 className="text-xs sm:text-sm font-black text-slate-900 dark:text-white">
                Better Experience
              </h3>
              <p className="text-[11px] text-slate-600 dark:text-slate-400 font-medium leading-relaxed">
                We're making your experience faster and smoother.
              </p>
            </div>
          </div>

          <div className="bg-white dark:bg-slate-900 rounded-2xl p-5 border border-slate-200/70 dark:border-slate-800 shadow-2xs space-y-3 flex items-start gap-3.5">
            <div className="w-10 h-10 rounded-xl bg-emerald-50 dark:bg-emerald-950/80 text-emerald-600 dark:text-emerald-400 flex items-center justify-center shrink-0 border border-emerald-100 dark:border-emerald-900">
              <Lock className="w-5 h-5" />
            </div>
            <div className="space-y-1">
              <h3 className="text-xs sm:text-sm font-black text-slate-900 dark:text-white">
                Secure & Reliable
              </h3>
              <p className="text-[11px] text-slate-600 dark:text-slate-400 font-medium leading-relaxed">
                Improving security to keep your data safe always.
              </p>
            </div>
          </div>

          <div className="bg-white dark:bg-slate-900 rounded-2xl p-5 border border-slate-200/70 dark:border-slate-800 shadow-2xs space-y-3 flex items-start gap-3.5">
            <div className="w-10 h-10 rounded-xl bg-emerald-50 dark:bg-emerald-950/80 text-emerald-600 dark:text-emerald-400 flex items-center justify-center shrink-0 border border-emerald-100 dark:border-emerald-900">
              <Rocket className="w-5 h-5" />
            </div>
            <div className="space-y-1">
              <h3 className="text-xs sm:text-sm font-black text-slate-900 dark:text-white">
                New Features
              </h3>
              <p className="text-[11px] text-slate-600 dark:text-slate-400 font-medium leading-relaxed">
                Exciting new features are on the way!
              </p>
            </div>
          </div>

          <div className="bg-white dark:bg-slate-900 rounded-2xl p-5 border border-slate-200/70 dark:border-slate-800 shadow-2xs space-y-3 flex items-start gap-3.5">
            <div className="w-10 h-10 rounded-xl bg-emerald-50 dark:bg-emerald-950/80 text-emerald-600 dark:text-emerald-400 flex items-center justify-center shrink-0 border border-emerald-100 dark:border-emerald-900">
              <Heart className="w-5 h-5 fill-emerald-600 text-emerald-600" />
            </div>
            <div className="space-y-1">
              <h3 className="text-xs sm:text-sm font-black text-slate-900 dark:text-white">
                Thank You!
              </h3>
              <p className="text-[11px] text-slate-600 dark:text-slate-400 font-medium leading-relaxed">
                Your support and patience mean a lot to us.
              </p>
            </div>
          </div>
        </section>
      </main>

      {/* Simplified Footer */}
      <footer className="bg-white dark:bg-slate-900 border-t border-slate-200/80 dark:border-slate-800 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
            {/* Brand */}
            <div className="md:col-span-4 space-y-2">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg bg-emerald-600 flex items-center justify-center text-white">
                  <Heart className="w-4 h-4 fill-white" />
                </div>
                <span className="text-base font-bold text-slate-900 dark:text-white">
                  Healthy Awareness
                </span>
              </div>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                Your trusted source for healthy eating, nutrition and wellness tips.
              </p>
            </div>

            {/* Newsletter */}
            <div className="md:col-span-5 space-y-2">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-white">
                Stay Updated
              </h4>
              {footerSubscribed ? (
                <p className="text-xs text-emerald-600 font-bold">Subscribed successfully!</p>
              ) : (
                <form onSubmit={handleFooterSubscribe} className="flex items-center gap-2">
                  <input
                    type="email"
                    required
                    placeholder="Enter your email"
                    value={footerEmail}
                    onChange={(e) => setFooterEmail(e.target.value)}
                    className="w-full px-3.5 py-2 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-xs text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-500/50"
                  />
                  <button
                    type="submit"
                    className="px-4 py-2 rounded-xl bg-[#1c6628] hover:bg-[#15501f] text-white font-bold text-xs shrink-0 cursor-pointer"
                  >
                    Subscribe
                  </button>
                </form>
              )}
              <p className="text-[10px] text-slate-400">No spam. Unsubscribe anytime.</p>
            </div>

            {/* Need Help */}
            <div className="md:col-span-3 space-y-1.5 text-xs text-slate-600 dark:text-slate-400">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-white">
                Need Help?
              </h4>
              <p className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-emerald-600" />
                <span>info@healthyawareness.com</span>
              </p>
              <p className="flex items-center gap-2">
                <Clock className="w-3.5 h-3.5 text-emerald-600" />
                <span>+91 12345 67890</span>
              </p>
            </div>
          </div>

          <div className="pt-4 border-t border-slate-100 dark:border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] text-slate-500">
            <p>© {new Date().getFullYear()} Healthy Awareness. All rights reserved.</p>
            <div className="flex items-center gap-3">
              <a href="/privacy-policy" className="hover:text-emerald-600 transition-colors">Privacy Policy</a>
              <span>|</span>
              <a href="/terms-and-conditions" className="hover:text-emerald-600 transition-colors">Terms & Conditions</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
