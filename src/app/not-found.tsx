'use client';

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { Navbar } from '../components/layout/Navbar';
import { Footer } from '../components/layout/Footer';
import { Breadcrumb } from '../components/common/Breadcrumb';
import {
  Home,
  LayoutGrid,
  ArrowRight,
  Lightbulb,
  Utensils,
  Apple,
  Leaf,
  FileText,
  Scale,
  Users,
  Search,
  Mail,
  Headphones,
  ShieldCheck,
  HelpCircle,
  GitFork,
  CheckCircle2,
  Wrench,
  HelpCircle as QuestionIcon,
} from 'lucide-react';

export default function NotFoundPage() {
  const router = useRouter();
  const [darkMode, setDarkMode] = useState(false);
  const [activeNav, setActiveNav] = useState('');

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

  const quickLinks = [
    { title: 'Healthy Tips', icon: <Lightbulb className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />, path: '/healthy-tips' },
    { title: 'Healthy Recipes', icon: <Utensils className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />, path: '/recipes' },
    { title: 'Healthy Foods', icon: <Apple className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />, path: '/healthy-foods' },
    { title: 'Seasonal Foods', icon: <Leaf className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />, path: '/seasonal-foods' },
    { title: 'Health Articles', icon: <FileText className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />, path: '/articles' },
    { title: 'Compare Foods', icon: <Scale className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />, path: '/compare-foods' },
  ];

  const essentialPages = [
    {
      title: 'About Us',
      description: 'Share your mission, vision and the story behind Healthy Awareness.',
      icon: <Users className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />,
      path: '/about-us',
    },
    {
      title: 'Health Articles',
      description: 'Explore insightful articles on nutrition, wellness, and healthy living.',
      icon: <FileText className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />,
      path: '/articles',
    },
    {
      title: 'Healthy Recipes',
      description: 'Browse delicious and nutritious recipes with easy filtering options.',
      icon: <Utensils className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />,
      path: '/recipes',
    },
    {
      title: 'Seasonal Foods',
      description: 'Discover fresh seasonal produce and peak nutrition for every season.',
      icon: <Leaf className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />,
      path: '/seasonal-foods',
    },
    {
      title: 'Healthy Tips',
      description: 'Actionable wellness advice, healthy habits, and daily nutrition tips.',
      icon: <Lightbulb className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />,
      path: '/healthy-tips',
    },
    {
      title: 'Compare Foods',
      description: 'Compare nutrition, benefits and facts side-by-side instantly.',
      icon: <Scale className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />,
      path: '/compare-foods',
    },
    {
      title: 'Contact Us',
      description: 'Contact form, address, map and other ways to reach you.',
      icon: <Headphones className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />,
      path: '/contact-us',
    },
    {
      title: 'Privacy Policy',
      description: 'Let visitors know how you collect, use and protect their data.',
      icon: <ShieldCheck className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />,
      path: '/privacy-policy',
    },
    {
      title: 'Terms & Conditions',
      description: 'Define the rules and guidelines for using your website.',
      icon: <FileText className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />,
      path: '/terms-and-conditions',
    },
    {
      title: 'FAQ',
      description: 'Answer common questions and help users quickly find what they need.',
      icon: <HelpCircle className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />,
      path: '/faqs',
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
            name: '404 - Page Not Found - Healthy Awareness',
            url: 'https://healthylife.app/404',
            description: "The page you're looking for doesn't exist or has been moved.",
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
      <main className="flex-1 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 space-y-12">
        {/* 1. HERO 404 SECTION */}
        <section className="bg-white dark:bg-slate-900 rounded-[32px] p-6 sm:p-10 lg:p-12 border border-slate-200/70 dark:border-slate-800 shadow-xs relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Content */}
            <div className="lg:col-span-6 space-y-5">
              {/* Big 404 Text */}
              <div className="text-6xl sm:text-7xl lg:text-8xl font-black tracking-tight text-emerald-600 dark:text-emerald-500 leading-none">
                404
              </div>

              {/* Title & Subtitle */}
              <div className="space-y-2">
                <h1 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 dark:text-white tracking-tight">
                  Oops! Page not found
                </h1>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 font-semibold leading-relaxed max-w-md">
                  The page you're looking for doesn't exist or has been moved.
                </p>
                <div className="w-16 h-1 bg-emerald-500 rounded-full" />
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-3 pt-2">
                <button
                  onClick={() => router.push('/')}
                  className="px-6 py-3 rounded-xl bg-[#1c6628] hover:bg-[#15501f] text-white font-extrabold text-xs sm:text-sm shadow-md transition-all duration-200 inline-flex items-center gap-2 cursor-pointer hover:scale-105"
                >
                  <Home className="w-4 h-4" />
                  <span>Go to Home</span>
                </button>

                <button
                  onClick={() => router.push('/healthy-foods')}
                  className="px-6 py-3 rounded-xl bg-white dark:bg-slate-800 border-2 border-emerald-600/80 text-emerald-700 dark:text-emerald-400 font-extrabold text-xs sm:text-sm shadow-2xs hover:bg-emerald-50 dark:hover:bg-slate-700 transition-all duration-200 inline-flex items-center gap-2 cursor-pointer"
                >
                  <LayoutGrid className="w-4 h-4" />
                  <span>Browse Categories</span>
                </button>
              </div>

              {/* Secondary Need Help link */}
              <div className="pt-2">
                <a
                  href="/contact-us"
                  className="text-xs font-extrabold text-emerald-700 dark:text-emerald-400 hover:underline inline-flex items-center gap-1.5 cursor-pointer"
                >
                  <span>Need help? Contact Us</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            {/* Right Confused Avocado & Wooden Sign Graphic */}
            <div className="lg:col-span-6 relative flex justify-center">
              <div className="w-full max-w-[420px] aspect-4/3 rounded-[32px] bg-[#e6f2e6] dark:bg-slate-800 flex items-center justify-center p-6 relative overflow-hidden shadow-xs border border-emerald-100 dark:border-slate-700">
                {/* Avocado & Wooden Sign SVG */}
                <svg viewBox="0 0 300 220" className="w-full h-full max-h-56">
                  {/* Floating Question Mark */}
                  <text x="250" y="45" fontSize="28" fontWeight="900" fill="#15803d" opacity="0.8">
                    ?
                  </text>

                  {/* Leaf Graphic Backgrounds */}
                  <path d="M20 50 C10 20, 50 10, 45 40 Z" fill="#6ee7b7" opacity="0.6" />
                  <path d="M260 140 C280 120, 290 160, 275 165 Z" fill="#34d399" opacity="0.7" />

                  {/* Wooden Sign Board */}
                  <rect x="130" y="80" width="20" height="110" fill="#854d0e" rx="4" />
                  <polygon points="120,35 240,35 230,85 120,85" fill="#ca8a04" stroke="#78350f" strokeWidth="2" />
                  <polygon points="240,35 255,60 230,85" fill="#a16207" stroke="#78350f" strokeWidth="2" />

                  {/* Sign text */}
                  <text x="175" y="54" textAnchor="middle" fontSize="10" fontWeight="900" fill="#ffffff">
                    This way to
                  </text>
                  <text x="175" y="66" textAnchor="middle" fontSize="10" fontWeight="900" fill="#ffffff">
                    healthy living!
                  </text>
                  <path d="M170 74 L185 74 M180 70 L186 74 L180 78" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" />

                  {/* Grass Base */}
                  <ellipse cx="150" cy="180" rx="120" ry="20" fill="#bbf7d0" opacity="0.8" />
                  <ellipse cx="200" cy="175" rx="70" ry="15" fill="#4ade80" opacity="0.4" />

                  {/* Confused Avocado Character */}
                  <g transform="translate(180, 50)">
                    {/* Outer green skin */}
                    <path d="M50 20 C25 20, 15 50, 10 80 C5 115, 30 135, 50 135 C70 135, 95 115, 90 80 C85 50, 75 20, 50 20 Z" fill="#15803d" stroke="#14532d" strokeWidth="3" />
                    {/* Inner light green flesh */}
                    <path d="M50 26 C30 26, 22 52, 17 78 C12 108, 33 127, 50 127 C67 127, 88 108, 83 78 C78 52, 70 26, 50 26 Z" fill="#bbf7d0" />
                    {/* Seed Nut */}
                    <circle cx="50" cy="92" r="20" fill="#78350f" stroke="#451a03" strokeWidth="2" />
                    <circle cx="44" cy="86" r="5" fill="#a16207" />

                    {/* Eyes (Sad / Confused) */}
                    <circle cx="38" cy="60" r="3" fill="#0f172a" />
                    <circle cx="62" cy="60" r="3" fill="#0f172a" />
                    {/* Eyebrows */}
                    <path d="M33 53 L43 57" stroke="#0f172a" strokeWidth="2" strokeLinecap="round" />
                    <path d="M67 53 L57 57" stroke="#0f172a" strokeWidth="2" strokeLinecap="round" />
                    {/* Mouth (Frown) */}
                    <path d="M43 72 C47 67, 53 67, 57 72" fill="none" stroke="#0f172a" strokeWidth="2" strokeLinecap="round" />
                  </g>
                </svg>
              </div>
            </div>
          </div>
        </section>

        {/* 2. YOU MIGHT BE LOOKING FOR SECTION */}
        <section className="space-y-6">
          <div className="text-center space-y-1">
            <h2 className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white tracking-tight">
              You might be looking for
            </h2>
            <div className="w-12 h-1 bg-emerald-500 rounded-full mx-auto" />
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {quickLinks.map((item, idx) => (
              <div
                key={idx}
                onClick={() => router.push(item.path)}
                className="bg-white dark:bg-slate-900 rounded-2xl p-5 border border-slate-200/70 dark:border-slate-800 shadow-2xs hover:shadow-md transition-all duration-200 flex flex-col items-center text-center space-y-3 cursor-pointer group"
              >
                <div className="w-12 h-12 rounded-2xl bg-emerald-50 dark:bg-emerald-950/80 border border-emerald-100 dark:border-emerald-900/60 flex items-center justify-center group-hover:scale-110 transition-transform duration-200">
                  {item.icon}
                </div>
                <h3 className="text-xs sm:text-sm font-black text-slate-900 dark:text-white group-hover:text-emerald-600 transition-colors">
                  {item.title}
                </h3>
              </div>
            ))}
          </div>
        </section>

        {/* 3. OTHER ESSENTIAL PAGES YOUR WEBSITE MAY NEED */}
        <section className="space-y-6">
          <div className="text-center space-y-1">
            <h2 className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white tracking-tight">
              Other essential pages your website may need
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {essentialPages.map((page, idx) => (
              <div
                key={idx}
                className="bg-white dark:bg-slate-900 rounded-2xl p-5 border border-slate-200/70 dark:border-slate-800 shadow-2xs space-y-3 flex flex-col items-center text-center justify-between hover:shadow-md transition-all duration-200"
              >
                <div className="space-y-2.5 flex flex-col items-center">
                  <div className="w-10 h-10 rounded-full bg-emerald-50 dark:bg-emerald-950/80 border border-emerald-100 dark:border-emerald-900/60 flex items-center justify-center shrink-0">
                    {page.icon}
                  </div>
                  <h3 className="text-xs sm:text-sm font-black text-slate-900 dark:text-white tracking-tight">
                    {page.title}
                  </h3>
                  <p className="text-[11px] text-slate-600 dark:text-slate-400 font-medium leading-relaxed">
                    {page.description}
                  </p>
                </div>

                <div className="pt-2 flex justify-center">
                  <a
                    href={page.path}
                    className="text-xs font-extrabold text-emerald-700 dark:text-emerald-400 hover:underline inline-flex items-center gap-1 cursor-pointer"
                  >
                    <span>View Details</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
