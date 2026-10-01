'use client';

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { Navbar } from '../../components/layout/Navbar';
import { Footer } from '../../components/layout/Footer';
import { Breadcrumb } from '../../components/common/Breadcrumb';
import { HeroBanner } from '../../components/common/HeroBanner';
import {
  Headphones,
  Clock,
  Heart,
  ChevronRight,
  Mail,
  Phone,
  MapPin,
  Share2,
  Send,
  CheckCircle2,
  HelpCircle,
  MessageSquare,
  Lightbulb,
  ChevronDown,
  ChevronUp,
  ArrowRight,
} from 'lucide-react';

import contactData from '../../data/contactUsData.json';

export default function ContactUsPage() {
  const router = useRouter();
  const [darkMode, setDarkMode] = useState(false);
  const [activeNav, setActiveNav] = useState('ContactUs');
  const [openFaqIdx, setOpenFaqIdx] = useState<number | null>(0);
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Form State
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    subject: 'General Inquiry',
    message: '',
    agree: true,
  });

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
    } else if (navItem === 'AboutUs') {
      router.push('/about-us');
    } else if (navItem === 'ContactUs') {
      router.push('/contact-us');
    } else {
      router.push('/');
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        fullName: '',
        email: '',
        subject: 'General Inquiry',
        message: '',
        agree: true,
      });
    }, 4000);
  };

  const toggleFaq = (idx: number) => {
    setOpenFaqIdx(openFaqIdx === idx ? null : idx);
  };

  return (
    <div className="min-h-screen bg-[#f8f9f6] dark:bg-slate-950 text-slate-900 dark:text-slate-100 flex flex-col font-sans transition-colors duration-300">
      {/* Schema.org JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'ContactPage',
            name: 'Contact Us - Healthy Awareness',
            url: 'https://healthylife.app/contact-us',
            description: contactData.hero.subtitle,
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
        <Breadcrumb items={[{ label: 'Contact Us' }]} />

        {/* 1. HERO HEADER BANNER (Pixel Perfect Match with Mockup) */}
        <HeroBanner
          title={contactData.hero.title}
          subtitle={contactData.hero.subtitle}
          extraContent={
            <div className="flex flex-wrap items-center gap-6 sm:gap-8 pt-2">
              {/* Item 1: We're here to help */}
              <div className="flex items-center gap-3.5 pr-6 sm:pr-8 border-r border-slate-200/80 dark:border-slate-800">
                <div className="w-11 h-11 rounded-full bg-white dark:bg-slate-800 shadow-2xs border border-slate-100 dark:border-slate-700/80 flex items-center justify-center shrink-0">
                  <Headphones className="w-5 h-5 text-emerald-700 dark:text-emerald-400 stroke-[1.8]" />
                </div>
                <div className="text-xs font-extrabold text-slate-900 dark:text-white leading-snug">
                  <div>We're here</div>
                  <div>to help</div>
                </div>
              </div>

              {/* Item 2: Quick responses */}
              <div className="flex items-center gap-3.5 pr-6 sm:pr-8 border-r border-slate-200/80 dark:border-slate-800">
                <div className="w-11 h-11 rounded-full bg-white dark:bg-slate-800 shadow-2xs border border-slate-100 dark:border-slate-700/80 flex items-center justify-center shrink-0">
                  <Clock className="w-5 h-5 text-emerald-700 dark:text-emerald-400 stroke-[1.8]" />
                </div>
                <div className="text-xs font-extrabold text-slate-900 dark:text-white leading-snug">
                  <div>Quick</div>
                  <div>responses</div>
                </div>
              </div>

              {/* Item 3: Your health matters to us */}
              <div className="flex items-center gap-3.5">
                <div className="w-11 h-11 rounded-full bg-white dark:bg-slate-800 shadow-2xs border border-slate-100 dark:border-slate-700/80 flex items-center justify-center shrink-0">
                  <Heart className="w-5 h-5 text-emerald-700 dark:text-emerald-400 stroke-[1.8]" />
                </div>
                <div className="text-xs font-extrabold text-slate-900 dark:text-white leading-snug">
                  <div>Your health</div>
                  <div>matters to us</div>
                </div>
              </div>
            </div>
          }
          rightContent={
            <div className="w-full max-w-[360px] aspect-4/3 rounded-[24px] overflow-hidden shadow-md border-2 border-white dark:border-slate-800 bg-white dark:bg-slate-800">
              <img
                src="/images/contact_banner_bowl.jpg"
                alt="Heart shaped food bowl with green detox smoothie"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=1000&q=80';
                }}
                className="w-full h-full object-cover"
              />
            </div>
          }
        />

        {/* 2. DUAL COLUMN CONTAINER (Send Us a Message 50% | Contact Information 50%) */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Left Column: Send Us a Message Interactive Form (6 cols) */}
          <div className="lg:col-span-6 bg-white dark:bg-slate-900 rounded-[28px] p-6 sm:p-8 border border-slate-200/70 dark:border-slate-800 shadow-xs space-y-6 flex flex-col">
            <div className="space-y-1">
              <h2 className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white tracking-tight">
                {contactData.form.title}
              </h2>
              <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 font-medium">
                {contactData.form.subtitle}
              </p>
            </div>

            {isSubmitted ? (
              <div className="bg-emerald-50 dark:bg-emerald-950/50 border border-emerald-200 dark:border-emerald-800/80 rounded-2xl p-6 text-center space-y-3">
                <div className="w-12 h-12 rounded-full bg-emerald-600 text-white flex items-center justify-center mx-auto shadow-md">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-black text-emerald-900 dark:text-emerald-200">
                  Message Sent Successfully!
                </h3>
                <p className="text-xs sm:text-sm text-emerald-700 dark:text-emerald-300 font-medium leading-relaxed">
                  Thank you for reaching out to Healthy Awareness. Our team will review your message and get back to you shortly.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 flex-1 flex flex-col justify-between">
                <div className="space-y-4">
                  {/* Row 1: Full Name & Email */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <input
                        type="text"
                        required
                        placeholder={contactData.form.fullNamePlaceholder}
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                        className="w-full px-4 py-3 rounded-2xl bg-slate-50/70 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-xs sm:text-sm text-slate-900 dark:text-white placeholder-slate-400 font-medium focus:outline-none focus:ring-2 focus:ring-emerald-500/50"
                      />
                    </div>
                    <div className="space-y-1">
                      <input
                        type="email"
                        required
                        placeholder={contactData.form.emailPlaceholder}
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-3 rounded-2xl bg-slate-50/70 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-xs sm:text-sm text-slate-900 dark:text-white placeholder-slate-400 font-medium focus:outline-none focus:ring-2 focus:ring-emerald-500/50"
                      />
                    </div>
                  </div>

                  {/* Row 2: Subject Dropdown */}
                  <div className="space-y-1">
                    <select
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="w-full px-4 py-3 rounded-2xl bg-slate-50/70 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-xs sm:text-sm text-slate-900 dark:text-white font-semibold focus:outline-none focus:ring-2 focus:ring-emerald-500/50 cursor-pointer"
                    >
                      {contactData.form.subjects.map((sub, idx) => (
                        <option key={idx} value={sub}>
                          {sub}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Row 3: Message Textarea */}
                  <div className="space-y-1">
                    <textarea
                      required
                      rows={5}
                      placeholder={contactData.form.messagePlaceholder}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3 rounded-2xl bg-slate-50/70 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-xs sm:text-sm text-slate-900 dark:text-white placeholder-slate-400 font-medium focus:outline-none focus:ring-2 focus:ring-emerald-500/50 resize-none"
                    />
                  </div>

                  {/* Checkbox */}
                  <label className="flex items-center gap-2.5 cursor-pointer text-xs font-semibold text-slate-600 dark:text-slate-300">
                    <input
                      type="checkbox"
                      checked={formData.agree}
                      onChange={(e) => setFormData({ ...formData, agree: e.target.checked })}
                      className="w-4 h-4 accent-emerald-600 rounded cursor-pointer"
                    />
                    <span>
                      I agree to the{' '}
                      <strong className="text-emerald-700 dark:text-emerald-400 hover:underline">
                        Privacy Policy
                      </strong>{' '}
                      and{' '}
                      <strong className="text-emerald-700 dark:text-emerald-400 hover:underline">
                        Terms & Conditions
                      </strong>
                      .
                    </span>
                  </label>
                </div>

                {/* Submit Button (Full Width Dark Green Pill matching Mockup) */}
                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full py-3.5 sm:py-4 rounded-2xl bg-[#1c6628] hover:bg-[#15501f] text-white font-extrabold text-xs sm:text-sm flex items-center justify-center gap-2.5 shadow-sm hover:shadow-md transition-all duration-200 cursor-pointer"
                  >
                    <span>{contactData.form.buttonText}</span>
                    <Send className="w-4 h-4" />
                  </button>
                </div>
              </form>
            )}
          </div>

          {/* Right Column: Contact Information Cards (6 cols) */}
          <div className="lg:col-span-6 bg-white dark:bg-slate-900 rounded-[28px] p-6 sm:p-8 border border-slate-200/70 dark:border-slate-800 shadow-xs space-y-6 flex flex-col justify-between">
            <div className="space-y-1">
              <h2 className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white tracking-tight">
                {contactData.info.title}
              </h2>
              <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 font-medium">
                {contactData.info.subtitle}
              </p>
            </div>

            <div className="space-y-4">
              {/* Card 1: Email Us */}
              <div className="flex items-start gap-4 p-4 rounded-2xl bg-emerald-50/40 dark:bg-slate-800/60 border border-emerald-100/80 dark:border-slate-700">
                <div className="p-3 rounded-2xl bg-emerald-100 dark:bg-emerald-950/80 text-emerald-600 dark:text-emerald-300 shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div className="space-y-0.5">
                  <h3 className="text-xs sm:text-sm font-extrabold text-slate-900 dark:text-white">
                    {contactData.info.email.title}
                  </h3>
                  <a
                    href={`mailto:${contactData.info.email.address}`}
                    className="text-xs sm:text-sm font-bold text-emerald-700 dark:text-emerald-400 hover:underline block"
                  >
                    {contactData.info.email.address}
                  </a>
                  <p className="text-[11px] text-slate-500 dark:text-slate-400 font-medium">
                    {contactData.info.email.subtext}
                  </p>
                </div>
              </div>

              {/* Card 2: Call Us */}
              <div className="flex items-start gap-4 p-4 rounded-2xl bg-emerald-50/40 dark:bg-slate-800/60 border border-emerald-100/80 dark:border-slate-700">
                <div className="p-3 rounded-2xl bg-emerald-100 dark:bg-emerald-950/80 text-emerald-600 dark:text-emerald-300 shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div className="space-y-0.5">
                  <h3 className="text-xs sm:text-sm font-extrabold text-slate-900 dark:text-white">
                    {contactData.info.call.title}
                  </h3>
                  <p className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white">
                    {contactData.info.call.number}
                  </p>
                  <p className="text-[11px] text-slate-500 dark:text-slate-400 font-medium">
                    {contactData.info.call.subtext}
                  </p>
                </div>
              </div>

              {/* Card 3: Our Address */}
              <div className="flex items-start gap-4 p-4 rounded-2xl bg-emerald-50/40 dark:bg-slate-800/60 border border-emerald-100/80 dark:border-slate-700">
                <div className="p-3 rounded-2xl bg-emerald-100 dark:bg-emerald-950/80 text-emerald-600 dark:text-emerald-300 shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div className="space-y-0.5">
                  <h3 className="text-xs sm:text-sm font-extrabold text-slate-900 dark:text-white">
                    {contactData.info.address.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 font-medium leading-relaxed">
                    {contactData.info.address.location}
                  </p>
                </div>
              </div>

              {/* Follow Us Social Bar (Exact Match with Mockup Brand Colors) */}
              <div className="pt-2 flex items-center justify-between">
                <span className="text-xs font-extrabold text-slate-700 dark:text-slate-300 uppercase tracking-wider">
                  {contactData.info.socialsTitle}
                </span>
                <div className="flex items-center gap-2">
                  {/* Facebook */}
                  <button
                    onClick={() => alert('Opening Facebook')}
                    aria-label="Facebook"
                    className="w-8 h-8 rounded-full bg-[#1877F2] text-white flex items-center justify-center hover:opacity-90 transition-opacity shadow-2xs cursor-pointer"
                  >
                    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                    </svg>
                  </button>

                  {/* Instagram */}
                  <button
                    onClick={() => alert('Opening Instagram')}
                    aria-label="Instagram"
                    className="w-8 h-8 rounded-full bg-gradient-to-tr from-[#fccc63] via-[#e52d27] to-[#b31217] text-white flex items-center justify-center hover:opacity-90 transition-opacity shadow-2xs cursor-pointer"
                  >
                    <svg className="w-4 h-4 fill-none stroke-current stroke-[2]" viewBox="0 0 24 24">
                      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                    </svg>
                  </button>

                  {/* Pinterest */}
                  <button
                    onClick={() => alert('Opening Pinterest')}
                    aria-label="Pinterest"
                    className="w-8 h-8 rounded-full bg-[#bd081c] text-white flex items-center justify-center hover:opacity-90 transition-opacity shadow-2xs cursor-pointer"
                  >
                    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                      <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.162-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.401.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.354-.629-2.758-1.379l-.749 2.848c-.269 1.045-1.004 2.352-1.498 3.146 1.123.345 2.306.535 3.55.535 6.607 0 11.985-5.365 11.985-11.987C23.97 5.39 18.592.026 11.985.026L12.017 0z" />
                    </svg>
                  </button>

                  {/* YouTube */}
                  <button
                    onClick={() => alert('Opening YouTube')}
                    aria-label="YouTube"
                    className="w-8 h-8 rounded-full bg-[#ff0000] text-white flex items-center justify-center hover:opacity-90 transition-opacity shadow-2xs cursor-pointer"
                  >
                    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                    </svg>
                  </button>

                  {/* Twitter */}
                  <button
                    onClick={() => alert('Opening Twitter')}
                    aria-label="Twitter"
                    className="w-8 h-8 rounded-full bg-[#1da1f2] text-white flex items-center justify-center hover:opacity-90 transition-opacity shadow-2xs cursor-pointer"
                  >
                    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                      <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.936 9.936 0 0024 4.59z" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 3. TRIPLE COLUMN SECTION (We're Here to Help | Other Ways | FAQs) */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
          {/* Column 1: We're Here to Help (Exact Pixel Match with Mockup) */}
          <div className="bg-white dark:bg-slate-900 rounded-[28px] p-6 sm:p-7 border border-slate-200/70 dark:border-slate-800 shadow-xs space-y-4 flex flex-col justify-between">
            <div className="space-y-3.5">
              <h3 className="text-base sm:text-lg font-black text-slate-900 dark:text-white tracking-tight text-center">
                {contactData.helpSection.title}
              </h3>

              {/* Mint Green Graphic Illustration (Soft rounded, no border) */}
              <div className="w-full h-36 rounded-2xl bg-[#eef6ee] dark:bg-slate-800/60 flex items-center justify-center p-3">
                <svg viewBox="0 0 200 100" className="w-full h-full max-h-32">
                  {/* Soft Trees / Bushes Left */}
                  <ellipse cx="25" cy="70" rx="15" ry="20" fill="#a7f3d0" />
                  <ellipse cx="38" cy="73" rx="12" ry="17" fill="#6ee7b7" />
                  <ellipse cx="20" cy="78" rx="10" ry="12" fill="#34d399" />
                  {/* Soft Trees / Bushes Right */}
                  <ellipse cx="175" cy="70" rx="15" ry="20" fill="#a7f3d0" />
                  <ellipse cx="162" cy="73" rx="12" ry="17" fill="#6ee7b7" />
                  <ellipse cx="180" cy="78" rx="10" ry="12" fill="#34d399" />
                  
                  {/* Flying Paper Plane Top Left */}
                  <path d="M35 30 L55 20 L48 38 L44 32 Z" fill="#059669" opacity="0.8" />
                  <path d="M48 38 L44 32 L55 20 Z" fill="#047857" opacity="0.6" />
                  
                  {/* Flying Paper Plane Top Right */}
                  <path d="M145 25 L168 15 L160 33 L155 28 Z" fill="#10b981" opacity="0.9" />
                  
                  {/* Main Envelope Body */}
                  <rect x="55" y="38" width="90" height="52" rx="8" fill="#ffffff" stroke="#059669" strokeWidth="2.5" />
                  
                  {/* Envelope Flap Lines */}
                  <path d="M55 38 L100 68 L145 38" fill="none" stroke="#059669" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                  
                  {/* @ Badge Circle */}
                  <circle cx="100" cy="65" r="13" fill="#059669" />
                  <text x="100" y="70" textAnchor="middle" fill="#ffffff" fontSize="13" fontWeight="bold" fontFamily="system-ui, sans-serif">@</text>
                </svg>
              </div>

              <p className="text-xs text-slate-600 dark:text-slate-300 font-medium leading-relaxed text-center">
                {contactData.helpSection.subtitle}
              </p>
            </div>

            <ul className="space-y-2 text-xs font-semibold text-slate-700 dark:text-slate-300 pt-1">
              {contactData.helpSection.checkpoints.map((check, i) => (
                <li key={i} className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>{check}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 2: Other Ways to Connect */}
          <div className="bg-white dark:bg-slate-900 rounded-[28px] p-6 border border-slate-200/70 dark:border-slate-800 shadow-xs space-y-5 flex flex-col justify-between">
            <div className="space-y-4">
              <h3 className="text-base sm:text-lg font-black text-slate-900 dark:text-white tracking-tight">
                {contactData.otherWays.title}
              </h3>

              <div className="space-y-3">
                {/* Help Center Card */}
                <div className="p-3.5 rounded-2xl bg-slate-50/70 dark:bg-slate-800/60 border border-slate-200/80 dark:border-slate-700 space-y-1">
                  <div className="flex items-center gap-2">
                    <div className="p-1.5 rounded-lg bg-emerald-100 dark:bg-emerald-950/80 text-emerald-600 dark:text-emerald-300">
                      <HelpCircle className="w-4 h-4" />
                    </div>
                    <h4 className="text-xs sm:text-sm font-extrabold text-slate-900 dark:text-white">
                      {contactData.otherWays.cards[0].title}
                    </h4>
                  </div>
                  <p className="text-[11px] text-slate-500 dark:text-slate-400 font-medium pl-8">
                    {contactData.otherWays.cards[0].subtitle}
                  </p>
                  <div className="pl-8 pt-1">
                    <button
                      onClick={() => alert('Opening Help Center')}
                      className="text-xs font-extrabold text-emerald-700 dark:text-emerald-400 hover:underline flex items-center gap-1 cursor-pointer"
                    >
                      <span>{contactData.otherWays.cards[0].linkText}</span>
                      <ArrowRight className="w-3 h-3" />
                    </button>
                  </div>
                </div>

                {/* Feedback Card */}
                <div className="p-3.5 rounded-2xl bg-slate-50/70 dark:bg-slate-800/60 border border-slate-200/80 dark:border-slate-700 space-y-1">
                  <div className="flex items-center gap-2">
                    <div className="p-1.5 rounded-lg bg-emerald-100 dark:bg-emerald-950/80 text-emerald-600 dark:text-emerald-300">
                      <MessageSquare className="w-4 h-4" />
                    </div>
                    <h4 className="text-xs sm:text-sm font-extrabold text-slate-900 dark:text-white">
                      {contactData.otherWays.cards[1].title}
                    </h4>
                  </div>
                  <p className="text-[11px] text-slate-500 dark:text-slate-400 font-medium pl-8">
                    {contactData.otherWays.cards[1].subtitle}
                  </p>
                  <div className="pl-8 pt-1">
                    <button
                      onClick={() => alert('Opening Feedback')}
                      className="text-xs font-extrabold text-emerald-700 dark:text-emerald-400 hover:underline flex items-center gap-1 cursor-pointer"
                    >
                      <span>{contactData.otherWays.cards[1].linkText}</span>
                      <ArrowRight className="w-3 h-3" />
                    </button>
                  </div>
                </div>

                {/* Content Suggestions Card */}
                <div className="p-3.5 rounded-2xl bg-slate-50/70 dark:bg-slate-800/60 border border-slate-200/80 dark:border-slate-700 space-y-1">
                  <div className="flex items-center gap-2">
                    <div className="p-1.5 rounded-lg bg-emerald-100 dark:bg-emerald-950/80 text-emerald-600 dark:text-emerald-300">
                      <Lightbulb className="w-4 h-4" />
                    </div>
                    <h4 className="text-xs sm:text-sm font-extrabold text-slate-900 dark:text-white">
                      {contactData.otherWays.cards[2].title}
                    </h4>
                  </div>
                  <p className="text-[11px] text-slate-500 dark:text-slate-400 font-medium pl-8">
                    {contactData.otherWays.cards[2].subtitle}
                  </p>
                  <div className="pl-8 pt-1">
                    <button
                      onClick={() => alert('Suggesting Topic')}
                      className="text-xs font-extrabold text-emerald-700 dark:text-emerald-400 hover:underline flex items-center gap-1 cursor-pointer"
                    >
                      <span>{contactData.otherWays.cards[2].linkText}</span>
                      <ArrowRight className="w-3 h-3" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Column 3: Frequently Asked Questions Accordions */}
          <div className="bg-white dark:bg-slate-900 rounded-[28px] p-6 border border-slate-200/70 dark:border-slate-800 shadow-xs space-y-4 flex flex-col justify-between">
            <div className="space-y-4">
              <h3 className="text-base sm:text-lg font-black text-slate-900 dark:text-white tracking-tight">
                {contactData.faqs.title}
              </h3>

              <div className="space-y-2">
                {contactData.faqs.items.map((faq, idx) => {
                  const isOpen = openFaqIdx === idx;
                  return (
                    <div
                      key={idx}
                      className="border border-slate-200/70 dark:border-slate-800 rounded-2xl overflow-hidden bg-slate-50/50 dark:bg-slate-800/40"
                    >
                      <button
                        onClick={() => toggleFaq(idx)}
                        className="w-full flex items-center justify-between p-3 text-left text-xs font-bold text-slate-900 dark:text-white cursor-pointer select-none"
                      >
                        <span className="line-clamp-1">{faq.question}</span>
                        {isOpen ? (
                          <ChevronUp className="w-3.5 h-3.5 text-emerald-600 shrink-0 ml-1" />
                        ) : (
                          <ChevronDown className="w-3.5 h-3.5 text-slate-400 shrink-0 ml-1" />
                        )}
                      </button>

                      {isOpen && (
                        <div className="px-3 pb-3 text-[11px] text-slate-600 dark:text-slate-300 font-medium leading-relaxed border-t border-slate-100 dark:border-slate-700/60 pt-2">
                          {faq.answer}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="pt-2 text-center">
              <button
                onClick={() => alert('Viewing all FAQs')}
                className="text-xs font-extrabold text-emerald-700 dark:text-emerald-400 hover:underline inline-flex items-center gap-1 cursor-pointer"
              >
                <span>{contactData.faqs.viewAllText}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
