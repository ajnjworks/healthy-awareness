'use client';

import React, { useState, useEffect } from 'react';
import { X, ChevronLeft, ChevronRight, Maximize2, Camera, Info, Sparkles } from 'lucide-react';

export interface ImageGalleryModalProps {
  isOpen: boolean;
  onClose: () => void;
  foodName: string;
  category?: string;
  mainImage: string;
}

export const ImageGalleryModal: React.FC<ImageGalleryModalProps> = ({
  isOpen,
  onClose,
  foodName,
  category = 'Food',
  mainImage,
}) => {
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  // Curated gallery angles
  const galleryItems = [
    {
      url: mainImage,
      title: `${foodName} - Prime Fresh Sample`,
      desc: 'Selected premium quality, optimal ripeness and density.',
    },
    {
      url: 'https://images.unsplash.com/photo-1543208541-0961a29a8c3d?auto=format&fit=crop&w=1200&q=85',
      title: `${foodName} - Harvest & Natural Form`,
      desc: 'Sustainably farmed and harvested for maximum bio-available nutrient retention.',
    },
    {
      url: 'https://images.unsplash.com/photo-1619566636858-adf3ef46400b?auto=format&fit=crop&w=1200&q=85',
      title: `${foodName} - Culinary Preparation`,
      desc: 'Ready for whole consumption, culinary pairings, or nutritional blending.',
    },
  ];

  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') {
        setActiveImageIndex((prev) => (prev + 1) % galleryItems.length);
      }
      if (e.key === 'ArrowLeft') {
        setActiveImageIndex((prev) => (prev - 1 + galleryItems.length) % galleryItems.length);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = originalOverflow;
    };
  }, [isOpen, onClose, galleryItems.length]);

  if (!isOpen) return null;

  const currentItem = galleryItems[activeImageIndex] || galleryItems[0];

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={`${foodName} Gallery`}
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-950/85 backdrop-blur-md animate-fade-in"
      onClick={onClose}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="bg-slate-900 text-white w-full max-w-4xl max-h-[92vh] rounded-3xl shadow-2xl border border-slate-800 flex flex-col overflow-hidden relative"
      >
        {/* Top Bar */}
        <div className="px-5 sm:px-7 py-4 border-b border-slate-800 flex items-center justify-between bg-slate-900/90">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center">
              <Camera className="w-4 h-4" />
            </div>
            <div>
              <div className="text-xs font-bold text-emerald-400 uppercase tracking-wider">{category} Gallery</div>
              <h3 className="text-base sm:text-lg font-extrabold tracking-tight">{foodName} Visual Specimen</h3>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <span className="text-xs font-semibold text-slate-400">
              {activeImageIndex + 1} / {galleryItems.length}
            </span>
            <button
              onClick={onClose}
              aria-label="Close gallery"
              className="p-2 rounded-full text-slate-400 hover:text-white hover:bg-slate-800 transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Center Main Stage Image */}
        <div className="relative flex-1 min-h-[320px] sm:min-h-[440px] flex items-center justify-center bg-black/60 overflow-hidden">
          <img
            src={currentItem.url}
            alt={currentItem.title}
            onError={(e) => {
              (e.target as HTMLImageElement).src =
                'https://images.unsplash.com/photo-1543208541-0961a29a8c3d?auto=format&fit=crop&w=1200&q=85';
            }}
            className="max-h-[62vh] max-w-full object-contain rounded-lg transition-transform duration-300"
          />

          {/* Left / Right Navigation Buttons */}
          <button
            onClick={() => setActiveImageIndex((prev) => (prev - 1 + galleryItems.length) % galleryItems.length)}
            aria-label="Previous photo"
            className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-slate-900/80 hover:bg-emerald-600 text-white flex items-center justify-center transition-all cursor-pointer backdrop-blur-xs border border-slate-700"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={() => setActiveImageIndex((prev) => (prev + 1) % galleryItems.length)}
            aria-label="Next photo"
            className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-slate-900/80 hover:bg-emerald-600 text-white flex items-center justify-center transition-all cursor-pointer backdrop-blur-xs border border-slate-700"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        {/* Bottom Details & Thumbnail Selector */}
        <div className="px-5 sm:px-7 py-4 bg-slate-950/80 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="space-y-0.5 text-center sm:text-left">
            <h4 className="text-sm font-bold text-white flex items-center gap-1.5 justify-center sm:justify-start">
              <Sparkles className="w-3.5 h-3.5 text-emerald-400" />
              {currentItem.title}
            </h4>
            <p className="text-xs text-slate-400 max-w-lg">{currentItem.desc}</p>
          </div>

          {/* Thumbnails */}
          <div className="flex items-center gap-2">
            {galleryItems.map((item, idx) => (
              <button
                key={idx}
                onClick={() => setActiveImageIndex(idx)}
                aria-label={`Show ${item.title}`}
                className={`w-12 h-12 rounded-xl overflow-hidden border-2 transition-all cursor-pointer ${
                  activeImageIndex === idx
                    ? 'border-emerald-500 scale-105 shadow-md shadow-emerald-500/20'
                    : 'border-slate-700 opacity-60 hover:opacity-100'
                }`}
              >
                <img
                  src={item.url}
                  alt={`Thumbnail ${idx + 1}`}
                  onError={(e) => {
                    (e.target as HTMLImageElement).src =
                      'https://images.unsplash.com/photo-1543208541-0961a29a8c3d?auto=format&fit=crop&w=200&q=80';
                  }}
                  className="w-full h-full object-cover"
                />
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
