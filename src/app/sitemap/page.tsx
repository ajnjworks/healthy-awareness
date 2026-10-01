'use client';

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { Navbar } from '../../components/layout/Navbar';
import { Footer } from '../../components/layout/Footer';
import { Breadcrumb } from '../../components/common/Breadcrumb';
import { HeroBanner } from '../../components/common/HeroBanner';
import {
  Home,
  ShieldCheck,
  Sprout,
  FileText,
  Lightbulb,
  Utensils,
  Scale,
  HelpCircle,
  Shield,
  Info,
  Cookie,
  GitFork,
  Search,
  Compass,
  Heart,
  Send,
} from 'lucide-react';

export default function SitemapPage() {
  const router = useRouter();
  const [darkMode, setDarkMode] = useState(false);
  const [activeNav, setActiveNav] = useState('Sitemap');
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

  const mainStructure = [
    {
      title: 'Foods & Categories',
      icon: <Sprout className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />,
      items: [
        { label: 'All Categories', path: '/healthy-foods' },
        { label: 'Fruits Collection', path: '/healthy-foods/fruits' },
        { label: 'Vegetables Collection', path: '/healthy-foods/vegetables' },
        { label: 'Ancient Millets', path: '/healthy-foods/millets' },
        { label: 'Pulses, Dals & Legumes', path: '/healthy-foods/pulses' },
        { label: 'Breakfast Foods', path: '/healthy-foods/breakfast' },
        { label: 'Milk & Dairy', path: '/healthy-foods/dairy' },
        { label: 'Nutrient Seeds', path: '/healthy-foods/seeds' },
        { label: 'Spices & Herbs', path: '/healthy-foods/spices' },
        { label: 'Snacks & Packaged Foods', path: '/healthy-foods/snacks' },
        { label: 'Grains & Cereals', path: '/healthy-foods/grains-cereals' },
        { label: 'Cooking Oils & Fats', path: '/healthy-foods/cooking-oils' },
        { label: 'Beverages & Drinks', path: '/healthy-foods/beverages' },
        { label: 'Bakery & Breads', path: '/healthy-foods/bakery' },
        { label: 'Sweeteners & Sugars', path: '/healthy-foods/sweeteners' },
        { label: 'Groceries & Pantry', path: '/healthy-foods/groceries' },
        { label: 'Dry Fruits, Nuts & Seeds', path: '/healthy-foods/nuts-seeds' },
        { label: 'Fishes & Seafood', path: '/healthy-foods/fishes' },
        { label: 'Meats & Poultry', path: '/healthy-foods/meats' },
        { label: 'Eggs Collection', path: '/healthy-foods/eggs' },
        { label: 'Spinach Details', path: '/healthy-foods/spinach' },
        { label: 'Salmon Details', path: '/healthy-foods/salmon' },
        { label: 'Chicken Breast Details', path: '/healthy-foods/chicken-breast' },
        { label: 'Apple Details', path: '/healthy-foods/apple' },
        { label: 'Almonds Details', path: '/healthy-foods/almonds' },
        { label: 'Compare Foods', path: '/compare-foods' },
        { label: 'Seasonal Foods', path: '/seasonal-foods' },
      ],
    },
    {
      title: 'Articles',
      icon: <FileText className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />,
      items: [
        { label: 'Articles', path: '/articles' },
        { label: 'Article Details', path: '/articles' },
        { label: 'Search Results', path: '/search' },
      ],
    },
    {
      title: 'Healthy Tips',
      icon: <Lightbulb className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />,
      items: [
        { label: 'All Tips', path: '/healthy-tips' },
        { label: 'Tip Details', path: '/healthy-tips' },
      ],
    },
    {
      title: 'Recipes',
      icon: <Utensils className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />,
      items: [
        { label: 'All Recipes', path: '/recipes' },
        { label: 'Recipe Details', path: '/recipes' },
      ],
    },
    {
      title: 'Compare',
      icon: <Scale className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />,
      items: [{ label: 'Compare Foods', path: '/compare-foods' }],
    },
    {
      title: 'Support',
      icon: <HelpCircle className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />,
      items: [
        { label: 'FAQs', path: '/faqs' },
        { label: 'About Us', path: '/about-us' },
        { label: 'Contact Us', path: '/contact-us' },
      ],
    },
  ];

  const legalStructure = [
    {
      title: 'Privacy Policy',
      icon: <ShieldCheck className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />,
      description: 'Learn how we protect your data and privacy.',
      path: '/privacy-policy',
    },
    {
      title: 'Terms & Conditions',
      icon: <FileText className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />,
      description: 'Read the terms and conditions of using our website.',
      path: '/terms-and-conditions',
    },
    {
      title: 'Disclaimer',
      icon: <Info className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />,
      description: 'Important information about the use of our content.',
      path: '/disclaimer',
    },
    {
      title: 'Cookie Policy',
      icon: <Cookie className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />,
      description: 'Details about cookies and how we use them.',
      path: '/privacy-policy#cookies',
    },
    {
      title: 'Sitemap',
      icon: <GitFork className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />,
      description: 'You are here!',
      isCurrent: true,
      path: '/sitemap',
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
            name: 'Sitemap - Healthy Awareness',
            url: 'https://healthylife.app/sitemap',
            description:
              'Explore all the pages of Healthy Awareness. Find the information you need to live a healthier, happier life.',
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
      <main className="flex-1 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 space-y-10">
        {/* Breadcrumb */}
        <Breadcrumb items={[{ label: 'Sitemap' }]} />

        {/* 1. HERO HEADER BANNER */}
        <HeroBanner
          title="Sitemap"
          subtitle="Explore all the pages of Healthy Awareness. Find the information you need to live a healthier, happier life."
          rightContent={
            <div className="w-full max-w-[340px] aspect-4/3 rounded-[24px] bg-[#e6f2e6] dark:bg-slate-800 flex items-center justify-center p-6 relative overflow-hidden shadow-xs border border-emerald-100 dark:border-slate-700">
              {/* Folded Map & Location Pin Graphic */}
              <svg viewBox="0 0 200 160" className="w-full h-full max-h-36">
                <path d="M20 30 L65 15 L135 35 L180 20 V130 L135 145 L65 125 L20 140 Z" fill="#d1fae5" stroke="#34d399" strokeWidth="2" />
                <path d="M65 15 V125 M135 35 V145" stroke="#10b981" strokeWidth="2" strokeDasharray="4 4" />
                
                {/* Map Pins and Route */}
                <path d="M40 100 Q80 50 140 70" fill="none" stroke="#1c6628" strokeWidth="3" strokeDasharray="6 4" />
                
                {/* Large Central Pin */}
                <path d="M100 35 C85 35 75 48 75 62 C75 82 100 105 100 105 C100 105 125 82 125 62 C125 48 115 35 100 35 Z" fill="#1c6628" stroke="#ffffff" strokeWidth="2" />
                <circle cx="100" cy="58" r="10" fill="#ffffff" />
                <path d="M96 58 C96 54 100 52 100 52 C100 52 104 54 104 58" fill="none" stroke="#1c6628" strokeWidth="2" strokeLinecap="round" />
                <path d="M97 60 C97 60 100 57 100 57 C100 57 103 60 103 60" fill="none" stroke="#1c6628" strokeWidth="2" strokeLinecap="round" />

                {/* Leaves Accents */}
                <path d="M165 40 C150 25, 180 20, 175 38 Z" fill="#10b981" />
                <path d="M170 50 C155 35, 185 30, 180 48 Z" fill="#6ee7b7" />
              </svg>
            </div>
          }
        />

        {/* 2. MAIN SITE STRUCTURE TREE */}
        <section className="space-y-0">
          {/* Central Root Pill: Home */}
          <div className="flex flex-col items-center">
            <button
              onClick={() => router.push('/')}
              className="px-6 py-2.5 rounded-full bg-[#1c6628] hover:bg-[#15501f] text-white font-extrabold text-xs sm:text-sm shadow-md transition-transform hover:scale-105 inline-flex items-center gap-2 cursor-pointer z-10"
            >
              <Home className="w-4 h-4" />
              <span>Home</span>
            </button>
          </div>

          {/* Desktop SVG Tree Connector (Hidden on Mobile/Tablet) */}
          <div className="hidden lg:block w-full h-12 relative my-1">
            <svg viewBox="0 0 1200 48" className="w-full h-full preserve-3d" preserveAspectRatio="none">
              {/* Central Trunk Line */}
              <line x1="600" y1="0" x2="600" y2="24" stroke="#16a34a" strokeWidth="2.5" strokeLinecap="round" />

              {/* Horizontal Branch Bar */}
              <line x1="100" y1="24" x2="1100" y2="24" stroke="#16a34a" strokeWidth="2.5" strokeLinecap="round" />

              {/* 6 Vertical Drop Stems to Column Centers */}
              {/* Col 1 (100) */}
              <line x1="100" y1="24" x2="100" y2="48" stroke="#16a34a" strokeWidth="2.5" strokeLinecap="round" />
              <circle cx="100" cy="44" r="3.5" fill="#16a34a" />

              {/* Col 2 (300) */}
              <line x1="300" y1="24" x2="300" y2="48" stroke="#16a34a" strokeWidth="2.5" strokeLinecap="round" />
              <circle cx="300" cy="44" r="3.5" fill="#16a34a" />

              {/* Col 3 (500) */}
              <line x1="500" y1="24" x2="500" y2="48" stroke="#16a34a" strokeWidth="2.5" strokeLinecap="round" />
              <circle cx="500" cy="44" r="3.5" fill="#16a34a" />

              {/* Col 4 (700) */}
              <line x1="700" y1="24" x2="700" y2="48" stroke="#16a34a" strokeWidth="2.5" strokeLinecap="round" />
              <circle cx="700" cy="44" r="3.5" fill="#16a34a" />

              {/* Col 5 (900) */}
              <line x1="900" y1="24" x2="900" y2="48" stroke="#16a34a" strokeWidth="2.5" strokeLinecap="round" />
              <circle cx="900" cy="44" r="3.5" fill="#16a34a" />

              {/* Col 6 (1100) */}
              <line x1="1100" y1="24" x2="1100" y2="48" stroke="#16a34a" strokeWidth="2.5" strokeLinecap="round" />
              <circle cx="1100" cy="44" r="3.5" fill="#16a34a" />
            </svg>
          </div>

          {/* Mobile Vertical Tree Line Indicator */}
          <div className="block lg:hidden flex justify-center py-2">
            <div className="w-0.5 h-6 bg-emerald-500" />
          </div>

          {/* 6 Category Columns */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 relative pt-1">
            {mainStructure.map((col, idx) => (
              <div
                key={idx}
                className="bg-white dark:bg-slate-900 rounded-2xl p-5 border border-slate-200/70 dark:border-slate-800 shadow-2xs space-y-4 flex flex-col items-center text-center relative hover:border-emerald-400 transition-colors"
              >

                {/* Column Header Icon & Title */}
                <div className="flex flex-col items-center space-y-2">
                  <div className="w-10 h-10 rounded-full bg-emerald-50 dark:bg-emerald-950/80 border border-emerald-100 dark:border-emerald-900/60 flex items-center justify-center shrink-0">
                    {col.icon}
                  </div>
                  <h3 className="text-sm font-black text-slate-900 dark:text-white tracking-tight">
                    {col.title}
                  </h3>
                </div>

                {/* Bullet List of Links */}
                <ul className="space-y-2 text-xs font-semibold text-slate-600 dark:text-slate-300 w-full text-left pl-2">
                  {col.items.map((item, itemIdx) => (
                    <li key={itemIdx} className="flex items-center gap-1.5 hover:text-emerald-700 dark:hover:text-emerald-400 transition-colors">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 shrink-0" />
                      <a href={item.path} className="truncate">
                        {item.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* 3. LEGAL & POLICIES STRUCTURE TREE */}
        <section className="space-y-0 pt-6">
          {/* Central Root Pill: Legal & Policies */}
          <div className="flex flex-col items-center">
            <div className="px-6 py-2.5 rounded-full bg-[#1c6628] text-white font-extrabold text-xs sm:text-sm shadow-md inline-flex items-center gap-2 z-10">
              <ShieldCheck className="w-4 h-4" />
              <span>Legal & Policies</span>
            </div>
          </div>

          {/* Desktop SVG Tree Connector (5 Columns) */}
          <div className="hidden lg:block w-full h-12 relative my-1">
            <svg viewBox="0 0 1000 48" className="w-full h-full preserve-3d" preserveAspectRatio="none">
              {/* Central Trunk Line */}
              <line x1="500" y1="0" x2="500" y2="24" stroke="#16a34a" strokeWidth="2.5" strokeLinecap="round" />

              {/* Horizontal Branch Bar */}
              <line x1="100" y1="24" x2="900" y2="24" stroke="#16a34a" strokeWidth="2.5" strokeLinecap="round" />

              {/* 5 Vertical Drop Stems to Column Centers */}
              {/* Col 1 (100) */}
              <line x1="100" y1="24" x2="100" y2="48" stroke="#16a34a" strokeWidth="2.5" strokeLinecap="round" />
              <circle cx="100" cy="44" r="3.5" fill="#16a34a" />

              {/* Col 2 (300) */}
              <line x1="300" y1="24" x2="300" y2="48" stroke="#16a34a" strokeWidth="2.5" strokeLinecap="round" />
              <circle cx="300" cy="44" r="3.5" fill="#16a34a" />

              {/* Col 3 (500) */}
              <line x1="500" y1="24" x2="500" y2="48" stroke="#16a34a" strokeWidth="2.5" strokeLinecap="round" />
              <circle cx="500" cy="44" r="3.5" fill="#16a34a" />

              {/* Col 4 (700) */}
              <line x1="700" y1="24" x2="700" y2="48" stroke="#16a34a" strokeWidth="2.5" strokeLinecap="round" />
              <circle cx="700" cy="44" r="3.5" fill="#16a34a" />

              {/* Col 5 (900) */}
              <line x1="900" y1="24" x2="900" y2="48" stroke="#16a34a" strokeWidth="2.5" strokeLinecap="round" />
              <circle cx="900" cy="44" r="3.5" fill="#16a34a" />
            </svg>
          </div>

          {/* Mobile Vertical Tree Line Indicator */}
          <div className="block lg:hidden flex justify-center py-2">
            <div className="w-0.5 h-6 bg-emerald-500" />
          </div>

          {/* 5 Legal Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 relative pt-1">
            {legalStructure.map((card, idx) => (
              <div
                key={idx}
                className={`bg-white dark:bg-slate-900 rounded-2xl p-5 border relative ${
                  card.isCurrent
                    ? 'border-emerald-500 dark:border-emerald-500 shadow-xs'
                    : 'border-slate-200/70 dark:border-slate-800 shadow-2xs hover:border-emerald-400'
                } space-y-3 flex flex-col justify-between hover:shadow-md transition-all duration-200`}
              >

                <div className="space-y-2.5">
                  <div className="w-9 h-9 rounded-full bg-emerald-50 dark:bg-emerald-950/80 border border-emerald-100 dark:border-emerald-900/60 flex items-center justify-center shrink-0">
                    {card.icon}
                  </div>
                  <h4 className="text-xs sm:text-sm font-black text-slate-900 dark:text-white tracking-tight">
                    {card.title}
                  </h4>
                  <p className="text-[11px] text-slate-600 dark:text-slate-300 font-medium leading-relaxed">
                    {card.description}
                  </p>
                </div>

                <div className="pt-2">
                  {card.isCurrent ? (
                    <span className="text-[11px] font-black text-emerald-700 dark:text-emerald-400">
                      You are here!
                    </span>
                  ) : (
                    <a
                      href={card.path}
                      className="text-[11px] font-extrabold text-emerald-700 dark:text-emerald-400 hover:underline"
                    >
                      View details →
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 4. HOW TO USE THIS SITEMAP CARD */}
        <section className="bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-8 border border-slate-200/70 dark:border-slate-800 shadow-xs relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
            {/* Left Plant Pot SVG Illustration */}
            <div className="lg:col-span-3 flex justify-center">
              <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-2xl bg-[#e6f2e6] dark:bg-slate-800 flex items-center justify-center p-3">
                <svg viewBox="0 0 100 100" className="w-full h-full">
                  {/* White Ceramic Pot */}
                  <path d="M30 60 L35 90 H65 L70 60 Z" fill="#ffffff" stroke="#cbd5e1" strokeWidth="2" />
                  <ellipse cx="50" cy="60" rx="20" ry="5" fill="#f1f5f9" stroke="#cbd5e1" strokeWidth="1.5" />

                  {/* Healthy Plant Leaves */}
                  <path d="M50 60 C40 40, 20 40, 25 25 C40 30, 48 45, 50 60 Z" fill="#15803d" />
                  <path d="M50 60 C60 40, 80 40, 75 25 C60 30, 52 45, 50 60 Z" fill="#22c55e" />
                  <path d="M50 60 C50 35, 45 20, 50 10 C55 20, 50 35, 50 60 Z" fill="#4ade80" />
                </svg>
              </div>
            </div>

            {/* Center Description */}
            <div className="lg:col-span-4 space-y-2 text-center lg:text-left">
              <h3 className="text-base sm:text-lg font-black text-slate-900 dark:text-white tracking-tight">
                How to Use This Sitemap
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 font-medium leading-relaxed">
                Click on any page link above to navigate directly to that page. This sitemap is updated regularly to help you find content easily.
              </p>
            </div>

            {/* Right 3 Highlights Cards */}
            <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-3 gap-3">
              <div className="bg-[#f0f3eb] dark:bg-slate-800/80 rounded-2xl p-3.5 text-center space-y-1.5 flex flex-col items-center">
                <div className="w-8 h-8 rounded-full bg-emerald-100 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-400 flex items-center justify-center">
                  <Search className="w-4 h-4" />
                </div>
                <h4 className="text-xs font-black text-slate-900 dark:text-white">Quick Access</h4>
                <p className="text-[10px] text-slate-600 dark:text-slate-400 font-medium leading-snug">
                  Find and navigate to any section in just one click.
                </p>
              </div>

              <div className="bg-[#f0f3eb] dark:bg-slate-800/80 rounded-2xl p-3.5 text-center space-y-1.5 flex flex-col items-center">
                <div className="w-8 h-8 rounded-full bg-emerald-100 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-400 flex items-center justify-center">
                  <Compass className="w-4 h-4" />
                </div>
                <h4 className="text-xs font-black text-slate-900 dark:text-white">Better Navigation</h4>
                <p className="text-[10px] text-slate-600 dark:text-slate-400 font-medium leading-snug">
                  Explore topics and find what you need faster.
                </p>
              </div>

              <div className="bg-[#f0f3eb] dark:bg-slate-800/80 rounded-2xl p-3.5 text-center space-y-1.5 flex flex-col items-center">
                <div className="w-8 h-8 rounded-full bg-emerald-100 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-400 flex items-center justify-center">
                  <Heart className="w-4 h-4" />
                </div>
                <h4 className="text-xs font-black text-slate-900 dark:text-white">Your Health Matters</h4>
                <p className="text-[10px] text-slate-600 dark:text-slate-400 font-medium leading-snug">
                  We're here to guide you towards a healthier life.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 5. STAY UPDATED NEWSLETTER BANNER */}
        <section className="bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-8 border border-slate-200/70 dark:border-slate-800 shadow-xs relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
            {/* Left Green Mail SVG */}
            <div className="lg:col-span-3 flex justify-center lg:justify-start">
              <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-2xl bg-emerald-50 dark:bg-slate-800 border border-emerald-100 dark:border-slate-700 flex items-center justify-center p-4 shadow-2xs">
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
                Subscribe to our newsletter and get the latest health tips, articles and recipes delivered to your inbox.
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
