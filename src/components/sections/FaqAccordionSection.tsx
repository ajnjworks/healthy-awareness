'use client';

import React, { useState } from 'react';
import { HelpCircle, ChevronDown } from 'lucide-react';

interface FaqItem {
  question: string;
  answer: string;
}

interface FaqAccordionSectionProps {
  faqs?: FaqItem[];
}

const defaultFaqs: FaqItem[] = [
  {
    question: 'How should this food be stored for maximum freshness?',
    answer: 'Store in an airtight container or breathable crisper drawer in a cool, dry place to maintain peak flavor, texture, and nutritional value.',
  },
  {
    question: 'What is the best time of day to consume this food?',
    answer: 'Consuming whole healthy foods in the morning or as part of mindful meals provides sustained metabolic energy and supports optimal nutrient absorption.',
  },
  {
    question: 'Does this food support daily wellness and digestion?',
    answer: 'Yes! It delivers essential micronutrients, vitamins, and dietary fiber that nourish beneficial gut bacteria and support long-term vitality.',
  },
];

export const FaqAccordionSection: React.FC<FaqAccordionSectionProps> = ({
  faqs: customFaqs,
}) => {
  const faqs = (customFaqs && customFaqs.length > 0) ? customFaqs : defaultFaqs;
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
              className={`border rounded-2xl overflow-hidden transition-colors duration-200 ${
                isOpen
                  ? 'border-emerald-200 dark:border-emerald-900/50 bg-white dark:bg-slate-800/80 shadow-2xs'
                  : 'border-slate-100 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-800/40 hover:bg-slate-50 dark:hover:bg-slate-800/60'
              }`}
            >
              <button
                onClick={() => toggleFaq(idx)}
                aria-expanded={isOpen}
                aria-controls={`faq-answer-${idx}`}
                className="w-full flex items-center justify-between p-4 text-left text-xs sm:text-sm font-extrabold text-slate-900 dark:text-white cursor-pointer select-none transition-colors"
              >
                <span>{faq.question}</span>
                <ChevronDown
                  className={`w-4 h-4 shrink-0 transition-transform duration-300 ease-in-out ${
                    isOpen ? 'rotate-180 text-emerald-600 dark:text-emerald-400' : 'text-slate-400'
                  }`}
                />
              </button>

              <div className={`accordion-collapse ${isOpen ? 'expanded' : ''}`}>
                <div>
                  <div
                    id={`faq-answer-${idx}`}
                    className={`px-4 pb-4 text-xs sm:text-sm text-slate-600 dark:text-slate-300 font-medium leading-relaxed border-t border-slate-100 dark:border-slate-700/60 pt-3 transition-opacity duration-300 ease-in-out ${
                      isOpen ? 'opacity-100' : 'opacity-0'
                    }`}
                  >
                    {faq.answer}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
