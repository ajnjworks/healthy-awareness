import React from 'react';
import { Star } from 'lucide-react';
import { ProgressBar } from '../ui/ProgressBar';
import i18n from '../../data/i18n/en.json';

interface HealthScoreCardProps {
  score: {
    overall: number;
    ratingText: string;
    breakdown: {
      heart: number;
      brain: number;
      energy: number;
      immunity: number;
      skin: number;
    };
  };
}

export const HealthScoreCard: React.FC<HealthScoreCardProps> = ({ score }) => {
  return (
    <section className="bg-white dark:bg-slate-900 rounded-3xl p-4 sm:p-5 border border-slate-100 dark:border-slate-800 shadow-xs space-y-3 w-full h-full flex flex-col">
      <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white tracking-tight">
        {i18n.healthScore.title}
      </h3>

      <div className="flex items-center gap-4">
        {/* Overall Score Circle Badge */}
        <div className="flex flex-col items-center justify-center p-3 rounded-2xl bg-emerald-50 dark:bg-emerald-950/50 border border-emerald-200 dark:border-emerald-800/80 min-w-28 text-center space-y-1">
          <div className="w-16 h-16 rounded-full border-4 border-emerald-500 flex items-center justify-center bg-white dark:bg-slate-900 shadow-inner">
            <span className="text-2xl font-black text-emerald-600 dark:text-emerald-400">
              {score.overall.toFixed(1)}
            </span>
          </div>
          <span className="text-xs font-bold text-emerald-700 dark:text-emerald-300">
            {score.ratingText}
          </span>
          <div className="flex items-center gap-0.5 text-amber-400">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-3 h-3 fill-amber-400" />
            ))}
          </div>
        </div>

        {/* Individual Breakdown Bars */}
        <div className="flex-1 space-y-2">
          <ProgressBar label={i18n.healthScore.breakdown.heart} value={score.breakdown.heart} color="bg-emerald-500" />
          <ProgressBar label={i18n.healthScore.breakdown.brain} value={score.breakdown.brain} color="bg-emerald-500" />
          <ProgressBar label={i18n.healthScore.breakdown.energy} value={score.breakdown.energy} color="bg-emerald-500" />
          <ProgressBar label={i18n.healthScore.breakdown.immunity} value={score.breakdown.immunity} color="bg-emerald-500" />
          <ProgressBar label={i18n.healthScore.breakdown.skin} value={score.breakdown.skin} color="bg-emerald-500" />
        </div>
      </div>
    </section>
  );
};
