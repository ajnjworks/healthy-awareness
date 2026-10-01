import React from 'react';

interface HeroBannerProps {
  badge?: React.ReactNode;
  title: React.ReactNode;
  subtitle?: React.ReactNode;
  extraContent?: React.ReactNode;
  rightContent?: React.ReactNode;
  className?: string;
  leftSpanCols?: string; // default lg:col-span-7
  rightSpanCols?: string; // default lg:col-span-5
}

export const HeroBanner: React.FC<HeroBannerProps> = ({
  badge,
  title,
  subtitle,
  extraContent,
  rightContent,
  className = '',
  leftSpanCols = 'lg:col-span-7',
  rightSpanCols = 'lg:col-span-5',
}) => {
  return (
    <section className={`relative bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-8 lg:p-10 border border-slate-100 dark:border-slate-800 shadow-xs overflow-hidden ${className}`}>
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center">
        {/* Left Content Column */}
        <div className={`${leftSpanCols} space-y-3.5 flex flex-col justify-center items-start text-left`}>
          {badge && <div>{badge}</div>}

          {typeof title === 'string' ? (
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-slate-900 dark:text-white leading-tight">
              {title}
            </h1>
          ) : (
            title
          )}

          {subtitle && (
            typeof subtitle === 'string' ? (
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 font-medium leading-relaxed max-w-xl">
                {subtitle}
              </p>
            ) : (
              subtitle
            )
          )}

          {extraContent && <div className="pt-1 w-full">{extraContent}</div>}
        </div>

        {/* Right Graphic/Content Column */}
        {rightContent && (
          <div className={`${rightSpanCols} relative flex justify-center lg:justify-end items-center`}>
            {rightContent}
          </div>
        )}
      </div>
    </section>
  );
};
