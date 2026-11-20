'use client';

'use client';

import { useTheme } from '@/utils/useTheme';

import React, { useState } from 'react';
import Link from 'next/link';
import { useParams, useRouter } from 'next/navigation';
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
  Copy,
  Sparkles,
  HelpCircle,
  BookOpen,
} from 'lucide-react';


import articlesRaw from '../../../data/articlesData.json';
import { getArticleById, ArticleDetailData } from '../../../data/articleGuidesData';

export default function ArticleDetailClient() {
  const params = useParams();
  const router = useRouter();
  const { darkMode, toggleDarkMode: handleToggleDarkMode } = useTheme();
  const [activeNav, setActiveNav] = useState('Articles');
  const [isSaved, setIsSaved] = useState(false);
  const [copied, setCopied] = useState(false);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const rawId = (params?.id as string) || 'how-to-eat-fruits';
  const articleKey = decodeURIComponent(rawId).toLowerCase().trim();

  // Retrieve rich guide article or fallback
  const guideData = getArticleById(articleKey);

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

  const handleCopyLink = () => {
    if (typeof window !== 'undefined') {
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) return;
    setSubscribed(true);
    setTimeout(() => {
      setSubscribed(false);
      setEmail('');
    }, 4000);
  };

  // Active article data
  const article = guideData || {
    id: '10-superfoods',
    category: articlesRaw.articleDetail.category,
    categorySlug: 'nutrition',
    categoryColor: 'text-emerald-700 dark:text-emerald-400',
    title: articlesRaw.articleDetail.title,
    subtitle: articlesRaw.articleDetail.subtitle,
    readTime: articlesRaw.articleDetail.readTime,
    date: articlesRaw.articleDetail.date,
    views: articlesRaw.articleDetail.views,
    author: articlesRaw.articleDetail.author,
    heroImage: articlesRaw.articleDetail.heroImage,
    intro: articlesRaw.articleDetail.intro,
    sections: [],
    keyTakeaways: [
      'Including a variety of nutrient-rich superfoods in your diet can naturally strengthen your immune system.',
      'Whole food nutrients act synergistically to support longevity, cardiovascular integrity and gut vitality.',
    ],
    faqs: [],
    relatedFoods: [
      { name: 'Apple', url: '/healthy-foods/fruits/apple', image: '/fruits/images/apple.webp', tag: 'Fiber & Quercetin' },
      { name: 'Banana', url: '/healthy-foods/fruits/banana', image: '/fruits/images/banana.webp', tag: 'Potassium & Energy' },
      { name: 'Orange', url: '/healthy-foods/fruits/orange', image: '/fruits/images/orange.webp', tag: 'Vitamin C & Bioflavonoids' },
    ],
  };

  const legacySuperfoods = articlesRaw.superfoodsDetail;

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
      <main className="flex-1 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 space-y-6 w-full min-w-0 overflow-hidden">
        {/* Breadcrumb */}
        <Breadcrumb
          items={[
            { label: 'Healthy Foods', path: '/healthy-foods' },
            { label: 'Articles', path: '/articles' },
            { label: article.category },
          ]}
        />

        {/* HERO BANNER SECTION */}
        <HeroBanner
          badge={
            <span className="inline-block px-3.5 py-1 rounded-full bg-emerald-100 dark:bg-emerald-950/80 text-emerald-800 dark:text-emerald-300 text-xs font-extrabold tracking-wider uppercase">
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
            <div className="relative w-48 h-48 sm:w-72 sm:h-72 rounded-3xl overflow-hidden shadow-xl ring-4 sm:ring-8 ring-emerald-50 dark:ring-emerald-950/40 shrink-0 max-w-full">
              <img
                src={article.heroImage}
                alt={article.title}
                onError={(e) => {
                  (e.target as HTMLImageElement).src =
                    'https://images.unsplash.com/photo-1619566636858-adf3ef46400b?auto=format&fit=crop&w=800&q=80';
                }}
                className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
              />
            </div>
          }
        />

        {/* SOCIAL SHARE & ACTION BAR */}
        <div className="bg-white dark:bg-slate-900 p-4 rounded-2xl border border-slate-100 dark:border-slate-800 shadow-xs flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <span className="text-xs font-bold text-slate-700 dark:text-slate-300">Share this guide</span>
            <div className="flex items-center gap-2">
              <button
                onClick={() =>
                  window.open(
                    `https://facebook.com/sharer/sharer.php?u=${encodeURIComponent(
                      typeof window !== 'undefined' ? window.location.href : ''
                    )}`,
                    '_blank'
                  )
                }
                aria-label="Share on Facebook"
                className="w-8 h-8 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-slate-600 dark:text-slate-300 hover:bg-emerald-600 hover:text-white transition-colors cursor-pointer"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </button>
              <button
                onClick={() =>
                  window.open(
                    `https://twitter.com/intent/tweet?url=${encodeURIComponent(
                      typeof window !== 'undefined' ? window.location.href : ''
                    )}`,
                    '_blank'
                  )
                }
                aria-label="Share on X"
                className="w-8 h-8 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-slate-600 dark:text-slate-300 hover:bg-emerald-600 hover:text-white transition-colors cursor-pointer"
              >
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </button>
              <button
                onClick={() =>
                  window.open(
                    `https://api.whatsapp.com/send?text=${encodeURIComponent(
                      typeof window !== 'undefined' ? window.location.href : ''
                    )}`,
                    '_blank'
                  )
                }
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
              {copied && <span className="text-[11px] font-bold text-emerald-600 animate-fade-in">Copied to clipboard!</span>}
            </div>
          </div>

          <button
            onClick={() => setIsSaved(!isSaved)}
            className={`inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer border ${
              isSaved
                ? 'bg-emerald-600 text-white border-emerald-600 shadow-xs'
                : 'bg-slate-50 dark:bg-slate-800 border-slate-200/80 dark:border-slate-700 text-slate-700 dark:text-slate-200 hover:bg-slate-100'
            }`}
          >
            <Bookmark className={`w-3.5 h-3.5 ${isSaved ? 'fill-white' : ''}`} />
            <span>{isSaved ? 'Saved to Favorites' : 'Save for later'}</span>
          </button>
        </div>

        {/* CONTENT GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Main Article Body (8 Columns) */}
          <div className="lg:col-span-8 bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-8 border border-slate-100 dark:border-slate-800 shadow-xs space-y-8">
            {/* Intro Lead Paragraph */}
            <div className="p-4 sm:p-5 rounded-2xl bg-emerald-50/50 dark:bg-emerald-950/30 border border-emerald-100 dark:border-emerald-900/50">
              <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-200 font-medium leading-relaxed">
                {article.intro}
              </p>
            </div>

            {/* Guide Sections */}
            {guideData ? (
              <div className="space-y-10">
                {guideData.sections.map((sec, idx) => (
                  <article key={idx} className="space-y-4 pt-6 border-t border-slate-100 dark:border-slate-800 first:border-t-0 first:pt-0">
                    <div className="flex items-start gap-3.5">
                      {sec.number && (
                        <div className="w-8 h-8 rounded-2xl bg-emerald-600 text-white text-xs font-extrabold flex items-center justify-center shrink-0 shadow-xs mt-0.5">
                          {sec.number}
                        </div>
                      )}
                      <div className="space-y-1 min-w-0 flex-1">
                        <h2 className="text-base sm:text-lg font-extrabold text-slate-900 dark:text-white leading-snug">
                          {sec.title}
                        </h2>
                        {sec.subtitle && (
                          <p className="text-xs font-semibold text-emerald-600 dark:text-emerald-400">
                            {sec.subtitle}
                          </p>
                        )}
                      </div>
                    </div>

                    <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 font-normal leading-relaxed">
                      {sec.content}
                    </p>

                    {/* Section Image if present */}
                    {sec.image && (
                      <div className="relative aspect-16/9 w-full rounded-2xl overflow-hidden bg-slate-100 dark:bg-slate-800 shadow-xs">
                        <img
                          src={sec.image}
                          alt={sec.title}
                          className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                        />
                      </div>
                    )}

                    {/* Bullet Points */}
                    {sec.bullets && sec.bullets.length > 0 && (
                      <ul className="space-y-2 pt-1 pl-1">
                        {sec.bullets.map((bullet, bIdx) => (
                          <li key={bIdx} className="flex items-start gap-2.5 text-xs text-slate-600 dark:text-slate-300 leading-relaxed font-medium">
                            <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                            <span>{bullet}</span>
                          </li>
                        ))}
                      </ul>
                    )}

                    {/* Best Practice Callout */}
                    {sec.bestPractice && (
                      <div className="bg-emerald-50/80 dark:bg-emerald-950/60 p-3.5 rounded-2xl border border-emerald-100 dark:border-emerald-900/60 flex items-start gap-2.5 text-xs font-semibold text-slate-800 dark:text-slate-200">
                        <Utensils className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                        <div>
                          <span className="font-extrabold text-emerald-800 dark:text-emerald-300 mr-1.5">Best Practice:</span>
                          <span>{sec.bestPractice}</span>
                        </div>
                      </div>
                    )}

                    {/* Highlight Box if present */}
                    {sec.highlightBox && (
                      <div className="p-4 rounded-2xl bg-amber-50/60 dark:bg-amber-950/30 border border-amber-200/80 dark:border-amber-800/60 space-y-1">
                        <div className="text-xs font-extrabold text-amber-800 dark:text-amber-300 flex items-center gap-1.5">
                          <Sparkles className="w-3.5 h-3.5 text-amber-600 dark:text-amber-400" />
                          <span>{sec.highlightBox.title}</span>
                        </div>
                        <p className="text-xs text-slate-600 dark:text-slate-300 font-medium leading-relaxed">
                          {sec.highlightBox.text}
                        </p>
                      </div>
                    )}
                  </article>
                ))}
              </div>
            ) : (
              /* Fallback for legacy superfoods */
              <div className="space-y-6 pt-2">
                {legacySuperfoods.map((item) => (
                  <div key={item.id} className="space-y-3 pt-4 border-t border-slate-100 dark:border-slate-800 first:border-t-0 first:pt-0">
                    <div className="flex items-center gap-3">
                      <div className="w-7 h-7 rounded-full bg-emerald-600 text-white text-xs font-extrabold flex items-center justify-center shrink-0 shadow-xs">
                        {item.number}
                      </div>
                      <h2 className="text-base sm:text-lg font-extrabold text-slate-900 dark:text-white">
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
            )}

            {/* Interactive FAQs Accordion */}
            {article.faqs && article.faqs.length > 0 && (
              <div className="pt-6 border-t border-slate-100 dark:border-slate-800 space-y-4">
                <div className="flex items-center gap-2">
                  <HelpCircle className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
                  <h3 className="text-base sm:text-lg font-extrabold text-slate-900 dark:text-white">
                    Frequently Asked Questions
                  </h3>
                </div>

                <div className="space-y-3">
                  {article.faqs.map((faq, fIdx) => {
                    const isOpen = openFaqIndex === fIdx;
                    return (
                      <div
                        key={fIdx}
                        className="rounded-2xl border border-slate-200/80 dark:border-slate-800 overflow-hidden transition-colors"
                      >
                        <button
                          onClick={() => setOpenFaqIndex(isOpen ? null : fIdx)}
                          className="w-full p-4 text-left flex items-center justify-between gap-3 bg-slate-50/60 dark:bg-slate-850 hover:bg-slate-100/60 transition-colors cursor-pointer"
                        >
                          <span className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white">
                            {faq.question}
                          </span>
                          {isOpen ? (
                            <ChevronUp className="w-4 h-4 text-emerald-600 shrink-0" />
                          ) : (
                            <ChevronDown className="w-4 h-4 text-slate-400 shrink-0" />
                          )}
                        </button>
                        {isOpen && (
                          <div className="p-4 pt-2 text-xs sm:text-sm text-slate-600 dark:text-slate-300 font-medium leading-relaxed bg-white dark:bg-slate-900">
                            {faq.answer}
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            )}
          </div>

          {/* Right Sidebar (4 Columns) */}
          <div className="lg:col-span-4 space-y-6">
            {/* Key Takeaways Card */}
            <div className="bg-emerald-50/70 dark:bg-emerald-950/40 rounded-3xl p-6 border border-emerald-100 dark:border-emerald-900/60 shadow-xs space-y-4">
              <div className="flex items-center gap-2 text-emerald-800 dark:text-emerald-300">
                <CheckCircle2 className="w-5 h-5 fill-emerald-600 text-white" />
                <h3 className="text-sm font-extrabold uppercase tracking-wider">Key Takeaways</h3>
              </div>
              <ul className="space-y-3">
                {article.keyTakeaways.map((takeaway, tIdx) => (
                  <li key={tIdx} className="flex items-start gap-2.5 text-xs text-slate-700 dark:text-slate-300 font-medium leading-relaxed">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 dark:bg-emerald-400 shrink-0 mt-1.5" />
                    <span>{takeaway}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Related Whole Foods Card */}
            {article.relatedFoods && article.relatedFoods.length > 0 && (
              <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 border border-slate-100 dark:border-slate-800 shadow-xs space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-sm font-extrabold text-slate-900 dark:text-white uppercase tracking-wider">
                    Featured Whole Foods
                  </h3>
                  <Link
                    href="/healthy-foods/fruits"
                    className="text-xs font-bold text-emerald-600 dark:text-emerald-400 hover:underline"
                  >
                    View All
                  </Link>
                </div>

                <div className="space-y-3">
                  {article.relatedFoods.map((food, fIdx) => (
                    <Link
                      key={fIdx}
                      href={food.url}
                      className="group flex items-center justify-between p-2.5 rounded-2xl hover:bg-slate-50 dark:hover:bg-slate-800/60 transition-colors border border-transparent hover:border-slate-100 dark:hover:border-slate-800"
                    >
                      <div className="flex items-center gap-3">
                        <div className="w-11 h-11 rounded-xl overflow-hidden bg-slate-100 dark:bg-slate-800 shrink-0">
                          <img
                            src={food.image}
                            alt={food.name}
                            onError={(e) => {
                              (e.target as HTMLImageElement).src =
                                'https://images.unsplash.com/photo-1619566636858-adf3ef46400b?auto=format&fit=crop&w=200&q=80';
                            }}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                          />
                        </div>
                        <div>
                          <div className="text-xs font-extrabold text-slate-900 dark:text-white group-hover:text-emerald-600 transition-colors">
                            {food.name}
                          </div>
                          <div className="text-[10px] font-bold text-slate-400">
                            {food.tag}
                          </div>
                        </div>
                      </div>
                      <ArrowRight className="w-3.5 h-3.5 text-slate-400 group-hover:text-emerald-600 group-hover:translate-x-0.5 transition-all" />
                    </Link>
                  ))}
                </div>
              </div>
            )}

            {/* Popular Articles Sidebar */}
            <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 border border-slate-100 dark:border-slate-800 shadow-xs space-y-4">
              <h3 className="text-sm font-extrabold text-slate-900 dark:text-white uppercase tracking-wider">
                Popular Articles
              </h3>
              <div className="space-y-3">
                {articlesRaw.popularSidebar.map((pop) => (
                  <Link
                    key={pop.id}
                    href={`/articles/${pop.id}`}
                    className="group flex items-center gap-3 p-2 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors"
                  >
                    <div className="w-7 h-7 rounded-lg bg-emerald-50 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-300 text-xs font-black flex items-center justify-center shrink-0">
                      {pop.number}
                    </div>
                    <div className="min-w-0 flex-1">
                      <div className="text-xs font-bold text-slate-800 dark:text-slate-200 group-hover:text-emerald-600 transition-colors line-clamp-2 leading-snug">
                        {pop.title}
                      </div>
                      <div className="text-[10px] text-slate-400 font-semibold pt-0.5">
                        {pop.readTime}
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            {/* Newsletter Card */}
            <div className="bg-emerald-600 text-white rounded-3xl p-6 space-y-3 shadow-md">
              <div className="w-10 h-10 rounded-2xl bg-white/20 flex items-center justify-center">
                <Mail className="w-5 h-5 text-white" />
              </div>
              <h3 className="text-sm font-extrabold">Weekly Health Insights</h3>
              <p className="text-xs text-emerald-100 font-medium leading-relaxed">
                Join 45,000+ readers getting verified evidence-based nutrition tips every Tuesday morning.
              </p>
              {subscribed ? (
                <div className="p-3 rounded-xl bg-white/20 text-xs font-bold text-white flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4" />
                  <span>Subscribed! Check your inbox.</span>
                </div>
              ) : (
                <form onSubmit={handleSubscribe} className="space-y-2">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email..."
                    required
                    className="w-full px-3.5 py-2.5 rounded-xl bg-white/10 placeholder-white/70 text-white text-xs border border-white/20 focus:outline-none focus:bg-white/20"
                  />
                  <button
                    type="submit"
                    className="w-full py-2.5 rounded-xl bg-white text-emerald-800 text-xs font-extrabold hover:bg-emerald-50 transition-colors shadow-xs cursor-pointer"
                  >
                    Subscribe Free
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
