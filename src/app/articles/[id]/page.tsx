'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Navbar } from '../../../components/layout/Navbar';
import { Footer } from '../../../components/layout/Footer';
import { Breadcrumb } from '../../../components/common/Breadcrumb';
import { HeroBanner } from '../../../components/common/HeroBanner';
import {
  Clock,
  Calendar,
  Eye,
  Bookmark,
  CheckCircle2,
  ShieldCheck,
  Mail,
  ArrowRight,
  ChevronDown,
  ChevronUp,
  Utensils,
  Leaf,
  MessageCircle,
  Copy
} from 'lucide-react';

import articlesRaw from '../../../data/articlesData.json';

export default function ArticleDetailPage() {
  const router = useRouter();
  const [darkMode, setDarkMode] = useState(false);
  const [activeNav, setActiveNav] = useState('Articles');
  const [isSaved, setIsSaved] = useState(false);
  const [expanded, setExpanded] = useState(false);
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);
  const [copied, setCopied] = useState(false);

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
    } else if (navItem === 'Articles') {
      router.push('/articles');
    } else if (navItem === 'Seasonal Foods') {
      router.push('/seasonal-foods');
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

  const handleCopyLink = () => {
    if (typeof window !== 'undefined') {
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const article = articlesRaw.articleDetail;
  const superfoods = articlesRaw.superfoodsDetail;

  return (
    <div className="min-h-screen bg-slate-50/60 dark:bg-slate-950 text-slate-900 dark:text-slate-100 flex flex-col font-sans transition-colors duration-300">
      {/* Top Navbar */}
      <Navbar
        darkMode={darkMode}
        onToggleDarkMode={handleToggleDarkMode}
        activeNav={activeNav}
        onNavClick={handleNavClick}
      />

      {/* Main Container */}
      <main className="flex-1 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 space-y-6">
        {/* Breadcrumb */}
        <Breadcrumb items={[{ label: 'Articles', path: '/articles' }, { label: article.category }]} />

        {/* HERO BANNER SECTION */}
        <HeroBanner
          badge={
            <span className="inline-block px-3 py-1 rounded-full bg-emerald-100 dark:bg-emerald-950/80 text-emerald-800 dark:text-emerald-300 text-xs font-extrabold tracking-wider uppercase">
              {article.category}
            </span>
          }
          title={article.title}
          subtitle={article.subtitle}
          extraContent={
            <div className="flex flex-wrap items-center gap-4 text-xs font-semibold text-slate-500 dark:text-slate-400 pt-2 border-t border-slate-100 dark:border-slate-800">
              <div className="flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5 text-emerald-600" />
                <span>{article.readTime}</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Calendar className="w-3.5 h-3.5 text-emerald-600" />
                <span>{article.date}</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Eye className="w-3.5 h-3.5 text-emerald-600" />
                <span>{article.views}</span>
              </div>

              <div className="flex items-center gap-2 pl-2 border-l border-slate-200 dark:border-slate-700">
                <img
                  src={article.author.avatar}
                  alt={article.author.name}
                  className="w-6 h-6 rounded-full object-cover"
                />
                <span className="text-slate-900 dark:text-white font-bold">By {article.author.name}</span>
              </div>
            </div>
          }
          rightContent={
            <div className="relative w-64 h-64 sm:w-80 sm:h-80 rounded-full overflow-hidden shadow-xl ring-8 ring-emerald-50 dark:ring-emerald-950/40 shrink-0">
              <img
                src={article.heroImage}
                alt={article.title}
                className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
              />
            </div>
          }
        />

        {/* SOCIAL SHARE BAR */}
        <div className="bg-white dark:bg-slate-900 p-4 rounded-2xl border border-slate-100 dark:border-slate-800 shadow-xs flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <span className="text-xs font-bold text-slate-700 dark:text-slate-300">Share this article</span>
            <div className="flex items-center gap-2">
              <button
                onClick={() => window.open(`https://facebook.com/sharer/sharer.php?u=${encodeURIComponent(typeof window !== 'undefined' ? window.location.href : '')}`, '_blank')}
                aria-label="Share on Facebook"
                className="w-8 h-8 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-slate-600 dark:text-slate-300 hover:bg-emerald-600 hover:text-white transition-colors cursor-pointer"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
              </button>
              <button
                onClick={() => window.open(`https://twitter.com/intent/tweet?url=${encodeURIComponent(typeof window !== 'undefined' ? window.location.href : '')}`, '_blank')}
                aria-label="Share on X"
                className="w-8 h-8 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-slate-600 dark:text-slate-300 hover:bg-emerald-600 hover:text-white transition-colors cursor-pointer"
              >
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
              </button>
              <button
                onClick={() => window.open(`https://api.whatsapp.com/send?text=${encodeURIComponent(typeof window !== 'undefined' ? window.location.href : '')}`, '_blank')}
                aria-label="Share on WhatsApp"
                className="w-8 h-8 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-slate-600 dark:text-slate-300 hover:bg-emerald-600 hover:text-white transition-colors cursor-pointer"
              >
                <MessageCircle className="w-4 h-4" />
              </button>
              <button
                onClick={handleCopyLink}
                aria-label="Copy Link"
                className="w-8 h-8 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-slate-600 dark:text-slate-300 hover:bg-emerald-600 hover:text-white transition-colors cursor-pointer"
              >
                <Copy className="w-4 h-4" />
              </button>
              {copied && <span className="text-[11px] font-bold text-emerald-600">Copied!</span>}
            </div>
          </div>

          <button
            onClick={() => setIsSaved(!isSaved)}
            className={`inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer border ${
              isSaved
                ? 'bg-emerald-600 text-white border-emerald-600'
                : 'bg-slate-50 dark:bg-slate-800 border-slate-200/80 dark:border-slate-700 text-slate-700 dark:text-slate-200 hover:bg-slate-100'
            }`}
          >
            <Bookmark className={`w-3.5 h-3.5 ${isSaved ? 'fill-white' : ''}`} />
            <span>{isSaved ? 'Saved to Favorites' : 'Save for later'}</span>
          </button>
        </div>

        {/* CONTENT GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-8 bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-8 border border-slate-100 dark:border-slate-800 shadow-xs space-y-6">
            <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 font-medium leading-relaxed">
              {article.intro}
            </p>

            <div className="space-y-6 pt-2">
              {superfoods.map((item) => (
                <div key={item.id} className="space-y-3 pt-4 border-t border-slate-100 dark:border-slate-800 first:border-t-0 first:pt-0">
                  <div className="flex items-center gap-3">
                    <div className="w-7 h-7 rounded-full bg-emerald-600 text-white text-xs font-extrabold flex items-center justify-center shrink-0 shadow-xs">
                      {item.number}
                    </div>
                    <h2 className="text-lg font-extrabold text-slate-900 dark:text-white">
                      {item.name}
                    </h2>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-12 gap-4 items-start pt-1">
                    <div className="sm:col-span-5 relative aspect-16/10 rounded-2xl overflow-hidden bg-slate-100 dark:bg-slate-800 shrink-0">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                      />
                    </div>

                    <div className="sm:col-span-7 space-y-3">
                      <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 font-normal leading-relaxed">
                        {item.description}
                      </p>

                      <div className="bg-emerald-50/80 dark:bg-emerald-950/60 p-3 rounded-2xl border border-emerald-100 dark:border-emerald-900/60 flex items-start gap-2 text-xs font-semibold text-slate-800 dark:text-slate-200">
                        <Utensils className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                        <div>
                          <span className="font-extrabold text-emerald-800 dark:text-emerald-300 mr-1">How to eat:</span>
                          <span>{item.howToEat}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-4 space-y-6">
            {/* Key Takeaway */}
            <div className="bg-emerald-50/70 dark:bg-emerald-950/40 rounded-3xl p-5 border border-emerald-100 dark:border-emerald-900/60 shadow-xs space-y-3">
              <div className="flex items-center gap-2 text-emerald-700 dark:text-emerald-300">
                <CheckCircle2 className="w-5 h-5 fill-emerald-600 text-white" />
                <h3 className="text-sm font-extrabold">Key Takeaway</h3>
              </div>
              <p className="text-xs text-slate-700 dark:text-slate-300 font-medium leading-relaxed">
                Including a variety of nutrient-rich superfoods in your diet can naturally strengthen your immune system.
              </p>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
