'use client';

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { Navbar } from '../../components/layout/Navbar';
import { Footer } from '../../components/layout/Footer';
import { Breadcrumb } from '../../components/common/Breadcrumb';
import { HeroBanner } from '../../components/common/HeroBanner';
import {
  ChevronRight,
  Calendar,
  FileText,
  Monitor,
  Info,
  ShieldCheck,
  User,
  Edit3,
  Link as LinkIcon,
  AlertTriangle,
  RefreshCw,
  Scale,
  Mail,
  Headphones,
  Send,
  ArrowRight,
  List,
} from 'lucide-react';

import legalData from '../../data/legalData.json';

export default function TermsAndConditionsPage() {
  const router = useRouter();
  const [darkMode, setDarkMode] = useState(false);
  const [activeNav, setActiveNav] = useState('');
  const [activeSection, setActiveSection] = useState('acceptance');
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

  const scrollToSection = (id: string) => {
    setActiveSection(id);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
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

  const getSectionIcon = (iconName: string) => {
    switch (iconName) {
      case 'FileText': return <FileText className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />;
      case 'Monitor': return <Monitor className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />;
      case 'Info': return <Info className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />;
      case 'ShieldCheck': return <ShieldCheck className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />;
      case 'User': return <User className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />;
      case 'Edit3': return <Edit3 className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />;
      case 'Link': return <LinkIcon className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />;
      case 'AlertTriangle': return <AlertTriangle className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />;
      case 'RefreshCw': return <RefreshCw className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />;
      case 'Scale': return <Scale className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />;
      case 'Mail': return <Mail className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />;
      default: return <FileText className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />;
    }
  };

  const terms = legalData.terms;

  return (
    <div className="min-h-screen bg-[#f8f9f6] dark:bg-slate-950 text-slate-900 dark:text-slate-100 flex flex-col font-sans transition-colors duration-300">
      {/* Schema.org JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'WebPage',
            name: 'Terms and Conditions - Healthy Awareness',
            url: 'https://healthylife.app/terms-and-conditions',
            description: terms.subtitle,
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

      {/* Main Content Layout Container */}
      <main className="flex-1 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 space-y-6">
        {/* Breadcrumb */}
        <Breadcrumb items={[{ label: 'Terms and Conditions' }]} />

        {/* 1. HERO HEADER BANNER (Pixel Perfect Match) */}
        <HeroBanner
          title={terms.title}
          subtitle={terms.subtitle}
          extraContent={
            <div className="pt-2">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-100 dark:bg-slate-800 border border-slate-200/80 dark:border-slate-700 text-xs font-bold text-slate-700 dark:text-slate-300 shadow-2xs">
                <Calendar className="w-3.5 h-3.5 text-emerald-600" />
                <span>Last updated: {terms.lastUpdated}</span>
              </div>
            </div>
          }
          rightContent={
            <div className="w-full max-w-[340px] aspect-4/3 rounded-[24px] bg-[#e6f2e6] dark:bg-slate-800 flex items-center justify-center p-6 relative overflow-hidden shadow-xs border border-emerald-100 dark:border-slate-700">
              {/* SVG Vector Clipboard & Shield Graphic */}
              <svg viewBox="0 0 200 160" className="w-full h-full max-h-36">
                {/* Leaf Graphic Accents */}
                <path d="M20 50 C10 30, 40 20, 35 45 Z" fill="#6ee7b7" opacity="0.8" />
                <path d="M25 70 C10 50, 45 40, 40 65 Z" fill="#10b981" opacity="0.9" />
                <path d="M175 30 C160 15, 190 10, 185 28 Z" fill="#6ee7b7" opacity="0.8" />
                
                {/* Clipboard Body */}
                <rect x="55" y="25" width="90" height="120" rx="12" fill="#15501f" />
                <rect x="62" y="35" width="76" height="102" rx="8" fill="#ffffff" />
                
                {/* Clipboard Top Clip */}
                <rect x="82" y="18" width="36" height="14" rx="4" fill="#0f3d17" />

                {/* Document Checklist Lines */}
                <line x1="72" y1="52" x2="124" y2="52" stroke="#cbd5e1" strokeWidth="3" strokeLinecap="round" />
                <line x1="72" y1="66" x2="124" y2="66" stroke="#cbd5e1" strokeWidth="3" strokeLinecap="round" />
                <line x1="72" y1="80" x2="124" y2="80" stroke="#cbd5e1" strokeWidth="3" strokeLinecap="round" />
                <line x1="72" y1="94" x2="110" y2="94" stroke="#cbd5e1" strokeWidth="3" strokeLinecap="round" />
                <line x1="72" y1="108" x2="118" y2="108" stroke="#cbd5e1" strokeWidth="3" strokeLinecap="round" />

                {/* Green Shield Badge with Checkmark */}
                <path d="M125 75 C125 75, 155 70, 155 95 C155 120, 125 135, 125 135 C125 135, 95 120, 95 95 C95 70, 125 75, 125 75 Z" fill="#1c6628" stroke="#ffffff" strokeWidth="3" />
                <path d="M117 95 L123 101 L133 89" fill="none" stroke="#ffffff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
          }
        />

        {/* 2. MAIN LAYOUT GRID (Left 8 Cols | Right 4 Sticky Cols) */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Policy Sections (8 cols) */}
          <div className="lg:col-span-8 bg-white dark:bg-slate-900 rounded-[28px] p-6 sm:p-8 border border-slate-200/70 dark:border-slate-800 shadow-xs space-y-8">
            {terms.sections.map((sec) => (
              <div
                key={sec.id}
                id={sec.id}
                className="scroll-mt-28 space-y-3 pb-6 border-b border-slate-100 dark:border-slate-800 last:border-0 last:pb-0"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-emerald-50 dark:bg-emerald-950/80 border border-emerald-100 dark:border-emerald-900/60 flex items-center justify-center shrink-0">
                    {getSectionIcon(sec.icon)}
                  </div>
                  <h2 className="text-base sm:text-lg font-black text-slate-900 dark:text-white tracking-tight">
                    {sec.number}. {sec.title}
                  </h2>
                </div>

                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 font-medium leading-relaxed pl-13">
                  {sec.content}
                </p>

                {sec.id === 'contact-us' && (
                  <div className="pl-13 pt-1">
                    <button
                      onClick={() => router.push('/contact-us')}
                      className="text-xs font-extrabold text-emerald-700 dark:text-emerald-400 hover:underline inline-flex items-center gap-1.5 cursor-pointer"
                    >
                      <span>Contact Us</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Right Column: Sticky Sidebar (4 cols) */}
          <div className="lg:col-span-4 space-y-6 lg:sticky lg:top-28">
            {/* Card 1: On This Page (Table of Contents) */}
            <div className="bg-white dark:bg-slate-900 rounded-[28px] p-6 border border-slate-200/70 dark:border-slate-800 shadow-xs space-y-4">
              <div className="flex items-center gap-2.5">
                <div className="p-2 rounded-xl bg-emerald-100 dark:bg-emerald-950/80 text-emerald-600 dark:text-emerald-400">
                  <List className="w-4 h-4" />
                </div>
                <h3 className="text-sm font-black text-slate-900 dark:text-white tracking-tight">
                  On This Page
                </h3>
              </div>

              <ul className="space-y-2 text-xs font-semibold">
                {terms.sections.map((sec) => (
                  <li key={sec.id}>
                    <button
                      onClick={() => scrollToSection(sec.id)}
                      className={`text-left transition-colors hover:text-emerald-700 cursor-pointer block ${
                        activeSection === sec.id
                          ? 'text-emerald-700 dark:text-emerald-400 font-bold'
                          : 'text-slate-600 dark:text-slate-400'
                      }`}
                    >
                      {sec.number}. {sec.title}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Card 2: Need Help? (Exact Match with Mockup) */}
            <div className="bg-[#f0f3eb] dark:bg-slate-900 rounded-[28px] p-6 border border-emerald-100/80 dark:border-slate-800 shadow-2xs space-y-3.5">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-[#d1fae5] dark:bg-emerald-950/80 text-[#059669] dark:text-emerald-400 flex items-center justify-center shrink-0">
                  <Headphones className="w-5 h-5 stroke-[2]" />
                </div>
                <h3 className="text-sm font-black text-slate-900 dark:text-white tracking-tight">
                  Need Help?
                </h3>
              </div>

              <p className="text-xs text-slate-600 dark:text-slate-300 font-medium leading-relaxed">
                If you have any questions about these Terms and Conditions, we're here to help.
              </p>

              <div className="pt-1">
                <button
                  onClick={() => router.push('/contact-us')}
                  className="px-5 py-2.5 rounded-xl bg-[#1c6628] hover:bg-[#15501f] text-white font-extrabold text-xs shadow-2xs transition-colors cursor-pointer inline-block"
                >
                  Contact Us
                </button>
              </div>
            </div>

            {/* Card 3: Stay Updated */}
            <div className="bg-[#f0f3eb] dark:bg-slate-900 rounded-[28px] p-6 border border-emerald-100/80 dark:border-slate-800 shadow-xs space-y-3">
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-emerald-700 dark:text-emerald-400" />
                <h3 className="text-xs font-black text-slate-900 dark:text-white uppercase tracking-wider">
                  Stay Updated
                </h3>
              </div>

              <p className="text-[11px] text-slate-600 dark:text-slate-400 font-medium">
                Subscribe to our newsletter for the latest health tips, articles, and updates.
              </p>

              {subscribed ? (
                <div className="p-2.5 rounded-xl bg-emerald-100 dark:bg-emerald-950 text-emerald-800 text-xs font-bold text-center">
                  Subscribed successfully!
                </div>
              ) : (
                <form onSubmit={handleSubscribe} className="space-y-2">
                  <input
                    type="email"
                    required
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-xs text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-emerald-500/50"
                  />
                  <button
                    type="submit"
                    className="w-full py-2.5 rounded-xl bg-[#1c6628] hover:bg-[#15501f] text-white font-extrabold text-xs shadow-xs transition-colors cursor-pointer"
                  >
                    Subscribe Now
                  </button>
                </form>
              )}

              <p className="text-[10px] text-slate-400 text-center font-medium">
                No spam. Unsubscribe anytime.
              </p>
            </div>

            {/* Card 4: Quick Links */}
            <div className="bg-white dark:bg-slate-900 rounded-[28px] p-6 border border-slate-200/70 dark:border-slate-800 shadow-xs space-y-3">
              <div className="flex items-center gap-2">
                <LinkIcon className="w-4 h-4 text-emerald-700 dark:text-emerald-400" />
                <h3 className="text-xs font-black text-slate-900 dark:text-white uppercase tracking-wider">
                  Quick Links
                </h3>
              </div>

              <ul className="space-y-2 text-xs font-semibold text-slate-600 dark:text-slate-300">
                <li>
                  <a href="/privacy-policy" className="hover:text-emerald-700 transition-colors flex items-center justify-between">
                    <span>Privacy Policy</span>
                    <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
                  </a>
                </li>
                <li>
                  <a href="#disclaimer" className="hover:text-emerald-700 transition-colors flex items-center justify-between">
                    <span>Disclaimer</span>
                    <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
                  </a>
                </li>
                <li>
                  <a href="#cookies" className="hover:text-emerald-700 transition-colors flex items-center justify-between">
                    <span>Cookie Policy</span>
                    <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
                  </a>
                </li>
                <li>
                  <a href="/contact-us" className="hover:text-emerald-700 transition-colors flex items-center justify-between">
                    <span>FAQs</span>
                    <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
                  </a>
                </li>
                <li>
                  <a href="/contact-us" className="hover:text-emerald-700 transition-colors flex items-center justify-between">
                    <span>Contact Us</span>
                    <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
