import React from 'react';

interface ProgressRingProps {
  percentage: number;
  label: string;
  amount: string;
  size?: number;
  strokeWidth?: number;
  color?: string;
}

export const ProgressRing: React.FC<ProgressRingProps> = ({
  percentage,
  label,
  amount,
  size = 110,
  strokeWidth = 8,
  color = '#16a34a',
}) => {
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (percentage / 100) * circumference;

  return (
    <div className="flex flex-col items-center group">
      <div className="relative inline-flex items-center justify-center transition-transform duration-300 group-hover:scale-105">
        <svg width={size} height={size} className="transform -rotate-90">
          {/* Background track circle */}
          <circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            stroke="currentColor"
            strokeWidth={strokeWidth}
            fill="transparent"
            className="text-slate-100 dark:text-slate-800"
          />
          {/* Animated progress circle */}
          <circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            stroke={color}
            strokeWidth={strokeWidth}
            strokeDasharray={circumference}
            strokeDashoffset={strokeDashoffset}
            strokeLinecap="round"
            fill="transparent"
            className="transition-all duration-1000 ease-out"
          />
        </svg>
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
          <span className="text-sm font-bold text-slate-900 dark:text-white leading-tight">
            {amount}
          </span>
          <span className="text-[11px] font-semibold text-slate-500 dark:text-slate-400">
            {percentage}%
          </span>
        </div>
      </div>
      <span className="mt-2 text-xs font-semibold text-slate-700 dark:text-slate-300">
        {label}
      </span>
    </div>
  );
};
