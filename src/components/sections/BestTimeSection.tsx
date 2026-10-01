import React from 'react';
import { Sun, Moon } from 'lucide-react';
import { BestTimeInfo } from '../../types/food';
import i18n from '../../data/i18n/en.json';

interface BestTimeSectionProps {
  bestTime: BestTimeInfo;
}

export const BestTimeSection: React.FC<BestTimeSectionProps> = ({ bestTime }) => {
  return (
    <section id="best-time" className="scroll-mt-24 bg-amber-50/70 dark:bg-amber-950/30 rounded-3xl p-4 sm:p-5 border border-amber-100 dark:border-amber-900/40 shadow-xs space-y-3 w-full h-full flex flex-col">
      <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white tracking-tight">
        {i18n.bestTime.title}
      </h3>

      <div className="space-y-3.5 flex-1 flex flex-col justify-center">
        {/* Morning */}
        <div className="p-3.5 rounded-2xl bg-amber-50/50 dark:bg-amber-950/30 border border-amber-100 dark:border-amber-900/50 space-y-1.5">
          <div className="flex items-center gap-2">
            <div className="p-1.5 rounded-xl bg-amber-100 dark:bg-amber-900/60 text-amber-600 dark:text-amber-300 shrink-0">
              <Sun className="w-4 h-4 fill-amber-400" />
            </div>
            <h4 className="text-xs sm:text-sm font-extrabold text-slate-900 dark:text-white">
              {i18n.bestTime.morning}
            </h4>
          </div>
          <p className="text-xs text-slate-600 dark:text-slate-300 font-medium leading-relaxed">
            {bestTime.morning}
          </p>
        </div>

        {/* Evening */}
        <div className="p-3.5 rounded-2xl bg-indigo-50/50 dark:bg-indigo-950/30 border border-indigo-100 dark:border-indigo-900/50 space-y-1.5">
          <div className="flex items-center gap-2">
            <div className="p-1.5 rounded-xl bg-indigo-100 dark:bg-indigo-900/60 text-indigo-600 dark:text-indigo-300 shrink-0">
              <Moon className="w-4 h-4 fill-indigo-400" />
            </div>
            <h4 className="text-xs sm:text-sm font-extrabold text-slate-900 dark:text-white">
              {i18n.bestTime.evening}
            </h4>
          </div>
          <p className="text-xs text-slate-600 dark:text-slate-300 font-medium leading-relaxed">
            {bestTime.evening}
          </p>
        </div>
      </div>
    </section>
  );
};
