import React from 'react';

interface ProgressBarProps {
  label: string;
  value: number; // 0 to 10 scale
  max?: number;
  color?: string;
}

export const ProgressBar: React.FC<ProgressBarProps> = ({
  label,
  value,
  max = 10,
  color = 'bg-emerald-500',
}) => {
  const percentage = Math.min(100, Math.max(0, (value / max) * 100));

  return (
    <div className="space-y-1">
      <div className="flex justify-between items-center text-xs">
        <span className="font-medium text-slate-600 dark:text-slate-300 capitalize">{label}</span>
        <span className="font-bold text-slate-900 dark:text-slate-100">{value.toFixed(1)}</span>
      </div>
      <div className="w-full bg-slate-100 dark:bg-slate-800 rounded-full h-2 overflow-hidden">
        <div
          className={`h-full rounded-full transition-all duration-1000 ease-out ${color}`}
          style={{ width: `${percentage}%` }}
        />
      </div>
    </div>
  );
};
