'use client';

import React, { useState } from 'react';
import { HelpCircle, ChevronDown, ChevronUp } from 'lucide-react';

interface FaqItem {
  question: string;
  answer: string;
}

interface FaqAccordionSectionProps {
  faqs?: FaqItem[];
}

export const FaqAccordionSection: React.FC<FaqAccordionSectionProps> = ({
  faqs = [
    {
      question: 'Is it better to eat apples with or without the peel?',
      answer: 'It is best to eat apples with the peel! The skin contains 50% of the total fiber and the highest concentration of antioxidants like quercetin and anthocyanins.',
    },
    {
      question: 'What is the best time of day to eat an apple?',
      answer: 'Morning is the ideal time to eat an apple. The natural pectin fiber stimulates bowel movements and promotes gut motility for the day.',
    },
    {
      question: 'Do apples help with weight management?',
      answer: 'Yes! Apples are high in water and dietary fiber, which promotes satiety, keeping you full for longer with minimal calories (only 95 kcal per medium fruit).',
    },
  ],
}) => {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const toggleFaq = (idx: number) => {
    setOpenIdx(openIdx === idx ? null : idx);
  };

  return (
    <section id="faqs" className="scroll-mt-24 bg-white dark:bg-slate-900 rounded-3xl p-5 sm:p-6 border border-slate-100 dark:border-slate-800 shadow-xs space-y-4">
      <div className="flex items-center gap-2.5">
        <div className="p-2 rounded-xl bg-emerald-100 dark:bg-emerald-950/60 text-emerald-600 dark:text-emerald-300">
          <HelpCircle className="w-5 h-5" />
        </div>
        <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white tracking-tight">
          Frequently Asked Questions
        </h3>
      </div>

      <div className="space-y-3">
        {faqs.map((faq, idx) => {
          const isOpen = openIdx === idx;
          return (
            <div
              key={idx}
              className="border border-slate-100 dark:border-slate-800 rounded-2xl overflow-hidden bg-slate-50/50 dark:bg-slate-800/40"
            >
              <button
                onClick={() => toggleFaq(idx)}
                aria-expanded={isOpen}
                aria-controls={`faq-answer-${idx}`}
                className="w-full flex items-center justify-between p-4 text-left text-xs sm:text-sm font-extrabold text-slate-900 dark:text-white cursor-pointer select-none"
              >
                <span>{faq.question}</span>
                {isOpen ? (
                  <ChevronUp className="w-4 h-4 text-emerald-600 shrink-0" />
                ) : (
                  <ChevronDown className="w-4 h-4 text-slate-400 shrink-0" />
                )}
              </button>

              {isOpen && (
                <div
                  id={`faq-answer-${idx}`}
                  className="px-4 pb-4 text-xs sm:text-sm text-slate-600 dark:text-slate-300 font-medium leading-relaxed border-t border-slate-100 dark:border-slate-700/60 pt-3"
                >
                  {faq.answer}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
};
