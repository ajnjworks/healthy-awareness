'use client';

import React from 'react';
import { Heart, Brain, Scale, Droplet, Shield, Sparkles } from 'lucide-react';

export const TopHealthBenefitsRibbon: React.FC = () => {
  const ribbonBenefits = [
    {
      title: 'Improves',
      label: 'Heart Health',
      icon: <Heart className="w-5 h-5 text-rose-500 fill-rose-400" />,
      bgColor: 'bg-rose-50 dark:bg-rose-950/40 border-rose-100 dark:border-rose-900/50',
    },
    {
      title: 'Supports',
      label: 'Brain Function',
      icon: <Brain className="w-5 h-5 text-sky-500 fill-sky-400" />,
      bgColor: 'bg-sky-50 dark:bg-sky-950/40 border-sky-100 dark:border-sky-900/50',
    },
    {
      title: 'Helps in',
      label: 'Weight Management',
      icon: <Scale className="w-5 h-5 text-emerald-600" />,
      bgColor: 'bg-emerald-50 dark:bg-emerald-950/40 border-emerald-100 dark:border-emerald-900/50',
    },
    {
      title: 'Controls',
      label: 'Blood Sugar',
      icon: <Droplet className="w-5 h-5 text-red-500 fill-red-400" />,
      bgColor: 'bg-red-50 dark:bg-red-950/40 border-red-100 dark:border-red-900/50',
    },
    {
      title: 'Rich in',
      label: 'Antioxidants',
      icon: <Shield className="w-5 h-5 text-amber-500 fill-amber-400" />,
      bgColor: 'bg-amber-50 dark:bg-amber-950/40 border-amber-100 dark:border-amber-900/50',
    },
    {
      title: 'Promotes',
      label: 'Healthy Skin',
      icon: <Sparkles className="w-5 h-5 text-purple-500 fill-purple-400" />,
      bgColor: 'bg-purple-50 dark:bg-purple-950/40 border-purple-100 dark:border-purple-900/50',
    },
  ];

  return (
    <section className="bg-white dark:bg-slate-900 rounded-3xl p-5 sm:p-6 border border-slate-100 dark:border-slate-800 shadow-xs space-y-4">
      <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white tracking-tight">
        Top Health Benefits
      </h3>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
        {ribbonBenefits.map((item, idx) => (
          <div
            key={idx}
            className={`flex items-center gap-3 p-3 rounded-2xl border ${item.bgColor} shadow-2xs hover:scale-102 transition-transform duration-200`}
          >
            <div className="p-2 rounded-xl bg-white dark:bg-slate-900 shadow-xs shrink-0">
              {item.icon}
            </div>
            <div className="space-y-0.5 min-w-0">
              <span className="block text-[10px] font-semibold text-slate-400 uppercase tracking-wider">
                {item.title}
              </span>
              <h4 className="text-xs font-extrabold text-slate-900 dark:text-white truncate">
                {item.label}
              </h4>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
