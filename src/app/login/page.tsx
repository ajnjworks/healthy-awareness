'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import {
  Heart,
  Leaf,
  Mail,
  Lock,
  Eye,
  EyeOff,
  LogIn,
  ShieldCheck,
  BarChart3,
  Clock,
  UserCheck,
  ArrowRight,
  Sun,
  Moon
} from 'lucide-react';

export default function LoginPage() {
  const router = useRouter();
  const [darkMode, setDarkMode] = useState(false);

  // Form State
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSuccessMessage('');

    setTimeout(() => {
      setIsSubmitting(false);
      setSuccessMessage('Logged in successfully! Redirecting...');
      setTimeout(() => {
        router.push('/');
      }, 1500);
    }, 1000);
  };

  const handleGoogleLogin = () => {
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSuccessMessage('Google authentication successful! Redirecting...');
      setTimeout(() => {
        router.push('/');
      }, 1500);
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-[#fafaf7] dark:bg-slate-950 text-slate-900 dark:text-slate-100 flex flex-col justify-between font-sans transition-colors duration-300 relative overflow-hidden">
      {/* Top Navbar Header Row with Logo & Dark Mode */}
      <header className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-6 flex items-center justify-between z-20">
        <Link href="/" className="flex items-center gap-2.5 group">
          <div className="relative w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-500 to-green-600 flex items-center justify-center text-white shadow-md group-hover:scale-105 transition-transform duration-300">
            <Leaf className="w-5 h-5 absolute -top-1 -right-1 text-amber-300 fill-amber-300" />
            <Heart className="w-5 h-5 fill-white text-white" />
          </div>
          <div className="flex flex-col">
            <span className="text-xl font-black tracking-tight text-slate-900 dark:text-white leading-none">
              Healthy
            </span>
            <span className="text-xs font-extrabold text-emerald-600 dark:text-emerald-400 tracking-wider">
              Awareness
            </span>
          </div>
        </Link>

        <button
          onClick={() => setDarkMode(!darkMode)}
          aria-label="Toggle theme"
          className="p-2.5 rounded-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 shadow-xs transition-colors cursor-pointer"
        >
          {darkMode ? (
            <Sun className="w-4 h-4 text-amber-400 fill-amber-400/20" />
          ) : (
            <Moon className="w-4 h-4 text-slate-700" />
          )}
        </button>
      </header>

      {/* Main Body Container */}
      <main className="flex-1 max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-4 sm:py-8 flex flex-col justify-center gap-12 z-10">
        {/* Split Grid: Left Hero Branding vs Right Admin Login Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* LEFT 6 COLS: Hero Branding & Secure Access Note */}
          <div className="lg:col-span-6 space-y-6 relative">
            {/* Background Potted Plant Image Accent */}
            <div className="hidden lg:block absolute -left-12 -bottom-24 w-80 h-96 pointer-events-none opacity-40 dark:opacity-20 z-0">
              <img
                src="https://images.unsplash.com/photo-1545241047-6083a3684587?auto=format&fit=crop&w=800&q=80"
                alt="Fresh house plant"
                className="w-full h-full object-contain"
              />
            </div>

            <div className="relative z-10 space-y-4">
              <h1 className="text-4xl sm:text-5xl font-black text-slate-900 dark:text-white tracking-tight leading-tight">
                Welcome Back!
              </h1>

              <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 font-medium leading-relaxed max-w-md">
                Sign in to your admin account to continue.
              </p>

              {/* Accent Line */}
              <div className="w-12 h-1 bg-emerald-600 rounded-full" />

              {/* Secure Admin Access Feature Box */}
              <div className="pt-4 flex items-center gap-3.5">
                <div className="w-11 h-11 rounded-full bg-emerald-100 dark:bg-emerald-950/80 border border-emerald-200 dark:border-emerald-800/80 text-emerald-700 dark:text-emerald-300 flex items-center justify-center shrink-0">
                  <ShieldCheck className="w-5 h-5 stroke-[2]" />
                </div>
                <div className="space-y-0.5">
                  <h3 className="text-xs sm:text-sm font-extrabold text-slate-900 dark:text-white">
                    Secure Admin Access
                  </h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400 font-medium">
                    Your data is protected with advanced security.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT 6 COLS: Floating Admin Login Form Card */}
          <div className="lg:col-span-6 flex justify-center lg:justify-end">
            <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-10 border border-slate-100 dark:border-slate-800 shadow-xl max-w-md w-full relative z-10 space-y-6">
              {/* User Avatar Circle Badge */}
              <div className="w-16 h-16 rounded-full bg-emerald-50 dark:bg-emerald-950/80 border border-emerald-100 dark:border-emerald-900 text-emerald-600 dark:text-emerald-400 flex items-center justify-center mx-auto shadow-2xs">
                <UserCheck className="w-8 h-8 stroke-[1.8]" />
              </div>

              {/* Header Title & Subtitle */}
              <div className="text-center space-y-1">
                <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
                  Admin Login
                </h2>
                <p className="text-xs text-slate-500 dark:text-slate-400 font-medium">
                  Enter your credentials to access the admin panel.
                </p>
              </div>

              {/* Status Alert Banner */}
              {successMessage && (
                <div className="p-3 rounded-2xl bg-emerald-50 dark:bg-emerald-950/80 border border-emerald-200 dark:border-emerald-800 text-xs font-extrabold text-emerald-800 dark:text-emerald-300 text-center animate-fade-in">
                  {successMessage}
                </div>
              )}

              {/* Login Form */}
              <form onSubmit={handleLogin} className="space-y-4">
                {/* Email Input */}
                <div className="space-y-1.5">
                  <label className="block text-xs font-bold text-slate-800 dark:text-slate-200">
                    Email Address
                  </label>
                  <div className="relative flex items-center">
                    <Mail className="w-4 h-4 text-slate-400 absolute left-3.5 pointer-events-none" />
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter your email"
                      className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-xs sm:text-sm text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-600/50 font-medium transition-all"
                    />
                  </div>
                </div>

                {/* Password Input */}
                <div className="space-y-1.5">
                  <label className="block text-xs font-bold text-slate-800 dark:text-slate-200">
                    Password
                  </label>
                  <div className="relative flex items-center">
                    <Lock className="w-4 h-4 text-slate-400 absolute left-3.5 pointer-events-none" />
                    <input
                      type={showPassword ? 'text' : 'password'}
                      required
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder="Enter your password"
                      className="w-full pl-10 pr-10 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-xs sm:text-sm text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-600/50 font-medium transition-all"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      aria-label="Toggle password visibility"
                      className="absolute right-3.5 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 transition-colors cursor-pointer"
                    >
                      {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                    </button>
                  </div>
                </div>

                {/* Remember Me & Forgot Password Row */}
                <div className="flex items-center justify-between pt-1">
                  <label className="flex items-center gap-2 cursor-pointer select-none">
                    <input
                      type="checkbox"
                      checked={rememberMe}
                      onChange={(e) => setRememberMe(e.target.checked)}
                      className="w-4 h-4 rounded border-slate-300 text-emerald-600 focus:ring-emerald-500 cursor-pointer accent-emerald-600"
                    />
                    <span className="text-xs font-extrabold text-slate-700 dark:text-slate-300">
                      Remember me
                    </span>
                  </label>

                  <a
                    href="#forgot"
                    onClick={(e) => {
                      e.preventDefault();
                      alert('Password reset link sent to your email.');
                    }}
                    className="text-xs font-extrabold text-emerald-700 dark:text-emerald-400 hover:underline transition-colors"
                  >
                    Forgot Password?
                  </a>
                </div>

                {/* Main Login Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3 rounded-xl bg-[#1c6628] hover:bg-[#15501f] text-white font-extrabold text-xs sm:text-sm flex items-center justify-center gap-2 shadow-md transition-all cursor-pointer disabled:opacity-70 mt-2"
                >
                  <LogIn className="w-4 h-4" />
                  <span>{isSubmitting ? 'Signing in...' : 'Login'}</span>
                </button>
              </form>

              {/* OR Divider */}
              <div className="relative my-6 flex items-center justify-center">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-slate-200 dark:border-slate-800" />
                </div>
                <span className="relative bg-white dark:bg-slate-900 px-3 text-[11px] font-extrabold text-slate-400 uppercase tracking-wider">
                  OR
                </span>
              </div>

              {/* Login with Google Button */}
              <button
                type="button"
                onClick={handleGoogleLogin}
                className="w-full py-2.5 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 text-xs font-extrabold flex items-center justify-center gap-2.5 shadow-2xs transition-colors cursor-pointer"
              >
                <svg viewBox="0 0 24 24" className="w-4 h-4 shrink-0">
                  <path
                    fill="#4285F4"
                    d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                  />
                  <path
                    fill="#34A853"
                    d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                  />
                  <path
                    fill="#FBBC05"
                    d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"
                  />
                  <path
                    fill="#EA4335"
                    d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
                  />
                </svg>
                <span>Login with Google</span>
              </button>

              {/* Support Need Help Link */}
              <div className="pt-2 text-center text-xs font-semibold text-slate-500">
                Need help?{' '}
                <Link
                  href="/contact-us"
                  className="text-emerald-700 dark:text-emerald-400 font-extrabold hover:underline inline-flex items-center gap-1"
                >
                  <span>Contact Support</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Feature Cards Bar (4 Columns) */}
        <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 border border-slate-100 dark:border-slate-800 shadow-xs grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 items-start">
          {/* Card 1 */}
          <div className="flex flex-col items-center text-center p-2 space-y-2">
            <div className="w-11 h-11 rounded-2xl bg-emerald-50 dark:bg-emerald-950/80 border border-emerald-100 dark:border-emerald-900 text-emerald-700 dark:text-emerald-300 flex items-center justify-center shrink-0">
              <ShieldCheck className="w-5 h-5 stroke-[2]" />
            </div>
            <h4 className="text-xs font-extrabold text-slate-900 dark:text-white">
              Secure & Reliable
            </h4>
            <p className="text-[11px] text-slate-500 dark:text-slate-400 font-medium leading-relaxed">
              Advanced security to keep your data safe.
            </p>
          </div>

          {/* Card 2 */}
          <div className="flex flex-col items-center text-center p-2 space-y-2">
            <div className="w-11 h-11 rounded-2xl bg-emerald-50 dark:bg-emerald-950/80 border border-emerald-100 dark:border-emerald-900 text-emerald-700 dark:text-emerald-300 flex items-center justify-center shrink-0">
              <BarChart3 className="w-5 h-5 stroke-[2]" />
            </div>
            <h4 className="text-xs font-extrabold text-slate-900 dark:text-white">
              Easy Management
            </h4>
            <p className="text-[11px] text-slate-500 dark:text-slate-400 font-medium leading-relaxed">
              Manage content, users and settings with ease.
            </p>
          </div>

          {/* Card 3 */}
          <div className="flex flex-col items-center text-center p-2 space-y-2">
            <div className="w-11 h-11 rounded-2xl bg-emerald-50 dark:bg-emerald-950/80 border border-emerald-100 dark:border-emerald-900 text-emerald-700 dark:text-emerald-300 flex items-center justify-center shrink-0">
              <Clock className="w-5 h-5 stroke-[2]" />
            </div>
            <h4 className="text-xs font-extrabold text-slate-900 dark:text-white">
              Real-time Insights
            </h4>
            <p className="text-[11px] text-slate-500 dark:text-slate-400 font-medium leading-relaxed">
              Get real-time analytics and performance updates.
            </p>
          </div>

          {/* Card 4 */}
          <div className="flex flex-col items-center text-center p-2 space-y-2">
            <div className="w-11 h-11 rounded-2xl bg-emerald-50 dark:bg-emerald-950/80 border border-emerald-100 dark:border-emerald-900 text-emerald-700 dark:text-emerald-300 flex items-center justify-center shrink-0">
              <UserCheck className="w-5 h-5 stroke-[2]" />
            </div>
            <h4 className="text-xs font-extrabold text-slate-900 dark:text-white">
              Control & Customize
            </h4>
            <p className="text-[11px] text-slate-500 dark:text-slate-400 font-medium leading-relaxed">
              Full control to customize your website efficiently.
            </p>
          </div>
        </div>
      </main>

      {/* Footer copyright and legal links */}
      <footer className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-6 text-center text-xs font-medium text-slate-500 border-t border-slate-200/60 dark:border-slate-800/80 z-20 space-y-2">
        <p>© 2024 Healthy Awareness. All rights reserved.</p>
        <div className="flex items-center justify-center gap-3 text-slate-600 dark:text-slate-400 font-bold">
          <Link href="/privacy-policy" className="hover:text-emerald-600 transition-colors">
            Privacy Policy
          </Link>
          <span>|</span>
          <Link href="/terms-and-conditions" className="hover:text-emerald-600 transition-colors">
            Terms & Conditions
          </Link>
        </div>
      </footer>
    </div>
  );
}
