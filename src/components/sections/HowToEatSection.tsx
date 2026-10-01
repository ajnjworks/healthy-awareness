'use client';

import React from 'react';
import { CheckCircle2, Lightbulb, Sparkles } from 'lucide-react';

interface HowToEatSectionProps {
  howToEat?: {
    bullets: string[];
    recommendedDose: string;
    image: string;
  };
  didYouKnow?: {
    fact: string;
    image: string;
  };
}

export const HowToEatSection: React.FC<HowToEatSectionProps> = ({
  howToEat = {
    bullets: [
      'Eat 1 fresh apple in the morning on an empty stomach.',
      'Enjoy raw with the peel intact for maximum fiber and nutrients.',
      'Slice and add to oat bowls, yogurt, or green smoothies.',
      'Chew well and enjoy!'
    ],
    recommendedDose: '1–2 medium apples (182g) per day is ideal for most adults.',
    image: 'https://images.unsplash.com/photo-1560806887-1e4cd0b6cbd6?auto=format&fit=crop&w=400&q=80',
  },
  didYouKnow = {
    fact: 'Apples float in water because 25% of their volume is made up of air! They also contain pectin, a natural prebiotic that feeds healthy gut bacteria.',
    image: 'https://images.unsplash.com/photo-1570913149827-d2ac84ab3f9a?auto=format&fit=crop&w=400&q=80',
  },
}) => {
  return (
    <div id="how-to-eat" className="scroll-mt-24 grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
      {/* Left Column: How to Eat Card (7 cols) */}
      <div className="lg:col-span-7 bg-emerald-50/40 dark:bg-slate-900 rounded-3xl p-5 sm:p-6 border border-emerald-100 dark:border-slate-800 shadow-xs space-y-5 flex flex-col">
        <div className="space-y-4">
          <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white tracking-tight">
            How to Eat
          </h3>

          <div className="flex flex-col sm:flex-row items-center gap-5">
            <ul className="space-y-2.5 text-xs sm:text-sm font-semibold text-slate-700 dark:text-slate-300 flex-1">
              {howToEat.bullets.map((bullet, idx) => (
                <li key={idx} className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>

            {/* Graphic Image */}
            <div className="w-32 h-32 rounded-2xl overflow-hidden shadow-xs border-2 border-white dark:border-slate-800 shrink-0 bg-white dark:bg-slate-800">
              <img
                src={howToEat.image}
                alt="How to eat illustration"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1560806887-1e4cd0b6cbd6?auto=format&fit=crop&w=400&q=80';
                }}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        {/* Recommended Daily Intake Banner Box */}
        <div className="bg-emerald-100/70 dark:bg-emerald-950/60 rounded-2xl p-3.5 border border-emerald-200 dark:border-emerald-800/80 flex items-center gap-3">
          <div className="p-2 rounded-xl bg-white dark:bg-slate-900 text-emerald-600 dark:text-emerald-400 shrink-0 shadow-xs">
            <Sparkles className="w-4 h-4" />
          </div>
          <div className="space-y-0.5 text-xs">
            <h4 className="font-extrabold text-emerald-950 dark:text-emerald-200">
              Recommended Daily Intake
            </h4>
            <p className="text-slate-700 dark:text-slate-300 font-medium">
              {howToEat.recommendedDose}
            </p>
          </div>
        </div>
      </div>

      {/* Right Column: Did You Know? Callout Box (5 cols) */}
      <div className="lg:col-span-5 bg-amber-50/70 dark:bg-amber-950/30 rounded-3xl p-5 sm:p-6 border border-amber-100 dark:border-amber-900/40 shadow-xs flex flex-col justify-between space-y-4">
        <div className="space-y-3">
          <div className="flex items-center gap-2.5">
            <div className="p-2 rounded-xl bg-amber-100 dark:bg-amber-950/60 text-amber-600 dark:text-amber-300">
              <Lightbulb className="w-5 h-5 fill-amber-400" />
            </div>
            <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white tracking-tight">
              Did You Know?
            </h3>
          </div>

          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 font-medium leading-relaxed">
            {didYouKnow.fact}
          </p>
        </div>

        {/* Full Image Banner */}
        <div className="h-32 w-full rounded-2xl overflow-hidden border-2 border-white dark:border-slate-800 shadow-xs bg-white dark:bg-slate-800">
          <img
            src={didYouKnow.image}
            alt="Did You Know graphic"
            onError={(e) => {
              (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1570913149827-d2ac84ab3f9a?auto=format&fit=crop&w=400&q=80';
            }}
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};
