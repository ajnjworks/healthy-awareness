import React from 'react';
import { Heart, Leaf, Send, Globe, Mail, MessageCircle, Share2 } from 'lucide-react';
import i18n from '../../data/i18n/en.json';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-white border-t border-slate-800 pt-12 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          {/* Brand Column */}
          <div className="md:col-span-4 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="relative w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-500 to-green-600 flex items-center justify-center text-white shadow-md">
                <Leaf className="w-5 h-5 absolute -top-1 -right-1 text-amber-300 fill-amber-300" />
                <Heart className="w-5 h-5 fill-white text-white" />
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-bold tracking-tight text-white leading-none">
                  Healthy
                </span>
                <span className="text-xs font-semibold text-emerald-400 tracking-wider">
                  Awareness
                </span>
              </div>
            </div>
            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed max-w-sm">
              {i18n.footer.brandDescription}
            </p>
          </div>

          {/* Navigation Links */}
          <div className="md:col-span-2 space-y-3">
            <h4 className="text-sm font-bold text-white tracking-wider uppercase">{i18n.footer.explore}</h4>
            <ul className="space-y-2 text-xs font-semibold text-slate-400">
              <li><a href="/" className="hover:text-emerald-400 transition-colors">{i18n.nav.home}</a></li>
              <li><a href="/healthy-foods" className="hover:text-emerald-400 transition-colors">{i18n.nav.foods}</a></li>
              <li><a href="/faqs" className="hover:text-emerald-400 transition-colors">{i18n.nav.faqs}</a></li>
              <li><a href="/about-us" className="hover:text-emerald-400 transition-colors">{i18n.nav.aboutUs}</a></li>
              <li><a href="/contact-us" className="hover:text-emerald-400 transition-colors">{i18n.nav.contactUs}</a></li>
              <li><a href="/seasonal-foods" className="hover:text-emerald-400 transition-colors">{i18n.nav.seasonalFoods}</a></li>
              <li><a href="/compare-foods" className="hover:text-emerald-400 transition-colors">{i18n.nav.compareFoods}</a></li>
              <li><a href="/articles" className="hover:text-emerald-400 transition-colors">{i18n.nav.articles}</a></li>
              <li><a href="/recipes" className="hover:text-emerald-400 transition-colors">{i18n.nav.recipes}</a></li>
              <li><a href="/healthy-tips" className="hover:text-emerald-400 transition-colors">{i18n.nav.healthyTips}</a></li>
            </ul>
          </div>

          {/* Categories */}
          <div className="md:col-span-2 space-y-3">
            <h4 className="text-sm font-bold text-white tracking-wider uppercase">{i18n.footer.categories}</h4>
            <ul className="space-y-1.5 text-xs font-semibold text-slate-400">
              <li><a href="/healthy-foods/fruits" className="hover:text-emerald-400 transition-colors">{i18n.categoriesList.fruits}</a></li>
              <li><a href="/healthy-foods/vegetables" className="hover:text-emerald-400 transition-colors">{i18n.categoriesList.vegetables}</a></li>
              <li><a href="/healthy-foods/millets" className="hover:text-emerald-400 transition-colors">Ancient Millets</a></li>
              <li><a href="/healthy-foods/pulses" className="hover:text-emerald-400 transition-colors">Pulses & Legumes</a></li>
              <li><a href="/healthy-foods/breakfast" className="hover:text-emerald-400 transition-colors">Breakfast Foods</a></li>
              <li><a href="/healthy-foods/dairy" className="hover:text-emerald-400 transition-colors">Milk & Dairy</a></li>
              <li><a href="/healthy-foods/seeds" className="hover:text-emerald-400 transition-colors">Nutrient Seeds</a></li>
              <li><a href="/healthy-foods/spices" className="hover:text-emerald-400 transition-colors">Spices & Herbs</a></li>
              <li><a href="/healthy-foods/snacks" className="hover:text-emerald-400 transition-colors">Snacks & Packaged Foods</a></li>
              <li><a href="/healthy-foods/grains-cereals" className="hover:text-emerald-400 transition-colors">Grains & Cereals</a></li>
              <li><a href="/healthy-foods/cooking-oils" className="hover:text-emerald-400 transition-colors">Cooking Oils & Fats</a></li>
              <li><a href="/healthy-foods/beverages" className="hover:text-emerald-400 transition-colors">Beverages & Drinks</a></li>
              <li><a href="/healthy-foods/bakery" className="hover:text-emerald-400 transition-colors">Bakery & Breads</a></li>
              <li><a href="/healthy-foods/sweeteners" className="hover:text-emerald-400 transition-colors">Sweeteners & Sugars</a></li>
              <li><a href="/healthy-foods/groceries" className="hover:text-emerald-400 transition-colors">Groceries & Pantry</a></li>
              <li><a href="/healthy-foods/nuts-seeds" className="hover:text-emerald-400 transition-colors">{i18n.categoriesList.nutsSeeds}</a></li>
              <li><a href="/healthy-foods/fishes" className="hover:text-emerald-400 transition-colors">Fishes & Seafood</a></li>
              <li><a href="/healthy-foods/meats" className="hover:text-emerald-400 transition-colors">Meats & Poultry</a></li>
              <li><a href="/healthy-foods/eggs" className="hover:text-emerald-400 transition-colors">Eggs Collection</a></li>
            </ul>
          </div>

          {/* Newsletter Box */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="text-sm font-bold text-white tracking-wider uppercase">{i18n.footer.stayUpdated}</h4>
            <p className="text-xs text-slate-400">
              {i18n.footer.newsletterSubtitle}
            </p>
            <form onSubmit={(e) => { e.preventDefault(); alert('Subscribed!'); }} className="flex items-center gap-2">
              <input
                type="email"
                placeholder={i18n.footer.emailPlaceholder}
                required
                className="w-full px-4 py-2.5 rounded-full bg-slate-800 border border-slate-700 text-xs text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-emerald-500"
              />
              <button
                type="submit"
                aria-label={i18n.footer.subscribe}
                className="p-2.5 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white shrink-0 cursor-pointer"
              >
                <Send className="w-4 h-4" />
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Copyright & Legal Links */}
        <div className="pt-6 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© {new Date().getFullYear()} {i18n.footer.copyright}</p>
          <div className="flex items-center gap-3 sm:gap-4 text-slate-400 flex-wrap">
            <a href="/privacy-policy" className="hover:text-emerald-400 transition-colors">{i18n.nav.privacyPolicy}</a>
            <span>|</span>
            <a href="/terms-and-conditions" className="hover:text-emerald-400 transition-colors">{i18n.nav.termsAndConditions}</a>
            <span>|</span>
            <a href="/disclaimer" className="hover:text-emerald-400 transition-colors">Disclaimer</a>
            <span>|</span>
            <a href="/sitemap" className="hover:text-emerald-400 transition-colors">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
