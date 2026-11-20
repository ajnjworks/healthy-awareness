'use client';

import React, { useEffect } from 'react';
import { X, BookOpen, CheckCircle, Sparkles, Clock, ShieldCheck, Thermometer } from 'lucide-react';

export interface CategoryGuideModalProps {
  isOpen: boolean;
  onClose: () => void;
  guideTitle: string;
}

export const CategoryGuideModal: React.FC<CategoryGuideModalProps> = ({
  isOpen,
  onClose,
  guideTitle,
}) => {
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    window.addEventListener('keydown', handleKeyDown);
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = originalOverflow;
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={guideTitle}
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-950/75 backdrop-blur-sm animate-fade-in"
      onClick={onClose}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="bg-white dark:bg-slate-900 w-full max-w-2xl max-h-[90vh] rounded-3xl shadow-2xl border border-slate-200 dark:border-slate-800 flex flex-col overflow-hidden"
      >
        {/* Header */}
        <div className="px-5 sm:px-7 py-4 border-b border-slate-100 dark:border-slate-800 flex items-center justify-between bg-slate-50/80 dark:bg-slate-800/50">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-xl bg-emerald-100 dark:bg-emerald-950/80 text-emerald-700 dark:text-emerald-300 flex items-center justify-center">
              <BookOpen className="w-5 h-5" />
            </div>
            <div>
              <div className="text-[11px] font-extrabold uppercase tracking-wider text-emerald-600 dark:text-emerald-400">
                Nutritional & Culinary Handbook
              </div>
              <h3 className="text-base sm:text-lg font-extrabold text-slate-900 dark:text-white">
                {guideTitle}
              </h3>
            </div>
          </div>

          <button
            onClick={onClose}
            aria-label="Close guide"
            className="p-2 rounded-full text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto p-5 sm:p-7 space-y-4">
          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed font-medium">
            Follow these research-backed recommendations to maximize dietary bioavailability, prevent nutrient oxidation, and get the most health benefits from every serving.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-1">
            {/* Step 1 */}
            <div className="p-4 rounded-2xl bg-emerald-50/60 dark:bg-emerald-950/30 border border-emerald-200/80 dark:border-emerald-800/60 space-y-2">
              <div className="flex items-center gap-2 text-emerald-800 dark:text-emerald-300 font-bold text-xs">
                <CheckCircle className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                1. Selection & Freshness
              </div>
              <p className="text-xs text-slate-600 dark:text-slate-300 leading-snug">
                Look for firm texture, vibrant natural pigments, and unblemished outer surfaces. Deep coloring indicates high concentrations of phytonutrients and polyphenols.
              </p>
            </div>

            {/* Step 2 */}
            <div className="p-4 rounded-2xl bg-sky-50/60 dark:bg-sky-950/30 border border-sky-200/80 dark:border-sky-800/60 space-y-2">
              <div className="flex items-center gap-2 text-sky-800 dark:text-sky-300 font-bold text-xs">
                <ShieldCheck className="w-4 h-4 text-sky-600 dark:text-sky-400" />
                2. Cleaning & Preparation
              </div>
              <p className="text-xs text-slate-600 dark:text-slate-300 leading-snug">
                Rinse gently with cool flowing water right before consumption rather than beforehand. Avoid prolonged soaking to prevent leaching of water-soluble B & C vitamins.
              </p>
            </div>

            {/* Step 3 */}
            <div className="p-4 rounded-2xl bg-amber-50/60 dark:bg-amber-950/30 border border-amber-200/80 dark:border-amber-800/60 space-y-2">
              <div className="flex items-center gap-2 text-amber-800 dark:text-amber-300 font-bold text-xs">
                <Thermometer className="w-4 h-4 text-amber-600 dark:text-amber-400" />
                3. Storage & Temperature
              </div>
              <p className="text-xs text-slate-600 dark:text-slate-300 leading-snug">
                Store in cool, dark, and well-ventilated areas or airtight glass containers to halt lipid peroxidation and protect delicate antioxidant structures from UV light.
              </p>
            </div>

            {/* Step 4 */}
            <div className="p-4 rounded-2xl bg-purple-50/60 dark:bg-purple-950/30 border border-purple-200/80 dark:border-purple-800/60 space-y-2">
              <div className="flex items-center gap-2 text-purple-800 dark:text-purple-300 font-bold text-xs">
                <Clock className="w-4 h-4 text-purple-600 dark:text-purple-400" />
                4. Timing & Synergy
              </div>
              <p className="text-xs text-slate-600 dark:text-slate-300 leading-snug">
                Consume with complementary nutrients — pair vitamin C with non-heme iron to multiply absorption rates, or pair fat-soluble carotenoids with healthy fats.
              </p>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="px-5 sm:px-7 py-3.5 bg-slate-50 dark:bg-slate-800/50 border-t border-slate-100 dark:border-slate-800 flex items-center justify-end">
          <button
            onClick={onClose}
            className="px-5 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs transition-colors cursor-pointer"
          >
            Got it, thanks!
          </button>
        </div>
      </div>
    </div>
  );
};
