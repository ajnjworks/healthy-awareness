import fs from 'fs';
import path from 'path';

const catalog = JSON.parse(fs.readFileSync('src/data/fruitsCatalog.json', 'utf8'));
const fruitsData = JSON.parse(fs.readFileSync('src/data/fruitsData.json', 'utf8'));

// Build quick lookup of fruit by id
const fruitListMap = new Map();
fruitsData.fruitsList.forEach((f) => {
  fruitListMap.set(f.id, f);
});

// Category-based competitors mapping
const categoryCompetitors = {
  'pome': { id: 'pear', name: 'Pear', calories: 57, fiber: '3.1 g', protein: '0.4 g' },
  'tropical': { id: 'mango', name: 'Mango', calories: 60, fiber: '1.6 g', protein: '0.8 g' },
  'citrus': { id: 'lemon', name: 'Lemon', calories: 29, fiber: '2.8 g', protein: '1.1 g' },
  'berries': { id: 'blueberry', name: 'Blueberry', calories: 57, fiber: '2.4 g', protein: '0.7 g' },
  'melons': { id: 'cantaloupe', name: 'Cantaloupe', calories: 34, fiber: '0.9 g', protein: '0.8 g' },
  'stone-fruits': { id: 'peach', name: 'Peach', calories: 39, fiber: '1.5 g', protein: '0.9 g' }
};

const productDetails = {};

catalog.records.forEach((r, idx) => {
  const listItem = fruitListMap.get(r.id) || {};
  const image = listItem.image || (r.images && r.images.thumbnail) || 'https://images.unsplash.com/photo-1619566636858-adf3ef46400b?auto=format&fit=crop&w=800&q=80';
  const category = listItem.category || 'tropical';
  const nut = r.nutrition || {};

  const cal = nut.calories_kcal ?? 50;
  const carbs = nut.carbohydrates_g ?? 12.5;
  const fiber = nut.fiber_g ?? 2.2;
  const protein = nut.protein_g ?? 0.8;
  const fat = nut.fat_g ?? 0.2;
  const sugars = nut.sugars_g ?? 9.5;
  const vitC = nut.vitaminC_mg ?? 15.0;
  const pot = nut.potassium_mg ?? 180;

  // Determine badge
  let badge = 'Super Food';
  let badgeType = 'superfood';
  if (vitC > 35) {
    badge = 'Vitamin C Shield';
    badgeType = 'immunity';
  } else if (fiber > 3.0) {
    badge = 'High Fiber';
    badgeType = 'superfood';
  } else if (pot > 300) {
    badge = 'Potassium Energy';
    badgeType = 'energy';
  }

  // Determine score
  const score = listItem.score || 9.1;

  // Similar foods from same category
  const sameCatFruits = fruitsData.fruitsList
    .filter((f) => f.id !== r.id && f.category === category)
    .slice(0, 6);
  const fallbackFruits = fruitsData.fruitsList
    .filter((f) => f.id !== r.id)
    .slice(0, 6);
  const similarFruitsList = (sameCatFruits.length >= 3 ? sameCatFruits : fallbackFruits).map((f) => ({
    id: f.id,
    name: f.name,
    rating: f.score,
    image: f.image
  }));

  // Competitor
  const compDef = categoryCompetitors[category] || { id: 'apple', name: 'Apple', calories: 52, fiber: '2.4 g', protein: '0.3 g' };
  const competitorFruit = compDef.id === r.id
    ? { id: 'orange', name: 'Orange', calories: 47, fiber: '2.4 g', protein: '0.9 g', image: 'https://images.unsplash.com/photo-1611080626919-7cf5a9dbab5b?auto=format&fit=crop&w=200&q=80' }
    : {
        id: compDef.id,
        name: compDef.name,
        serving: 'Per 100g',
        image: fruitListMap.get(compDef.id)?.image || image,
        calories: compDef.calories,
        protein: compDef.protein,
        fiber: compDef.fiber,
        omega3: 'Trace',
        bestFor: 'Daily Wellness & Nutrition'
      };

  productDetails[r.id] = {
    id: r.id,
    name: r.name,
    category: 'Fruits',
    subCategory: r.category,
    botanicalName: r.botanicalName,
    originClimate: r.originClimate,
    badge,
    badgeType,
    views: `${((idx * 7 + 120) / 10).toFixed(1)}k views`,
    rating: score > 9.0 ? parseFloat((score / 2 + 0.3).toFixed(1)) : 4.7,
    reviewCount: 95 + (idx * 5) % 180,
    image,
    description: `${r.name} (${r.botanicalName}) is a highly prized ${r.category.toLowerCase()} fruit native to ${r.originClimate.toLowerCase()} environments. Celebrated for its refreshing flavor profile, it offers a dense blend of dietary fiber, micronutrients, and bio-available antioxidants that naturally promote digestion, cellular defense, and sustained daily vitality.`,
    type: 'Fruit',
    origin: `${r.originClimate} Region`,
    calories: `${cal} kcal (per 100g raw)`,
    bestFor: vitC > 30 ? 'Immunity, Skin Vitality, Antioxidant Defense' : 'Digestive Wellness, Sustained Energy, Heart Health',
    benefits: [
      {
        id: 'immunity',
        title: 'Immune Defense',
        description: `Delivers ${vitC}mg of Vitamin C to bolster white blood cell activity and defend against oxidative free radicals.`,
        icon: 'Shield',
        badgeColor: 'bg-amber-100 text-amber-600 dark:bg-amber-950/80 dark:text-amber-300',
        textColor: 'text-amber-900 dark:text-amber-200',
        borderColor: 'border-amber-200/60 dark:border-amber-900/40',
        bgColor: 'bg-amber-50/50 dark:bg-amber-950/20'
      },
      {
        id: 'heart',
        title: 'Cardiovascular Support',
        description: `Contains ${pot}mg potassium which helps balance electrolyte levels, supporting normal vascular tone and blood pressure.`,
        icon: 'Heart',
        badgeColor: 'bg-rose-100 text-rose-600 dark:bg-rose-950/80 dark:text-rose-300',
        textColor: 'text-rose-900 dark:text-rose-200',
        borderColor: 'border-rose-200/60 dark:border-rose-900/40',
        bgColor: 'bg-rose-50/50 dark:bg-rose-950/20'
      },
      {
        id: 'digestion',
        title: 'Digestive Health',
        description: `Supplies ${fiber}g of prebiotic dietary fiber per 100g to nourish beneficial gut microflora and optimize regularity.`,
        icon: 'Activity',
        badgeColor: 'bg-emerald-100 text-emerald-600 dark:bg-emerald-950/80 dark:text-emerald-300',
        textColor: 'text-emerald-900 dark:text-emerald-200',
        borderColor: 'border-emerald-200/60 dark:border-emerald-900/40',
        bgColor: 'bg-emerald-50/50 dark:bg-emerald-950/20'
      },
      {
        id: 'skin',
        title: 'Radiant Skin & Collagen',
        description: 'Potent polyphenols paired with deep hydration promote cellular rejuvenation and elasticity in dermal tissue.',
        icon: 'Sparkles',
        badgeColor: 'bg-purple-100 text-purple-600 dark:bg-purple-950/80 dark:text-purple-300',
        textColor: 'text-purple-900 dark:text-purple-200',
        borderColor: 'border-purple-200/60 dark:border-purple-900/40',
        bgColor: 'bg-purple-50/50 dark:bg-purple-950/20'
      },
      {
        id: 'brain',
        title: 'Cellular Vitality & Brain',
        description: 'Clean natural carbohydrates supply steady cognitive energy without precipitous blood sugar spikes.',
        icon: 'Brain',
        badgeColor: 'bg-sky-100 text-sky-600 dark:bg-sky-950/80 dark:text-sky-300',
        textColor: 'text-sky-900 dark:text-sky-200',
        borderColor: 'border-sky-200/60 dark:border-sky-900/40',
        bgColor: 'bg-sky-50/50 dark:bg-sky-950/20'
      }
    ],
    nutritionRings: [
      { label: 'Vit C', amount: `${vitC}mg`, percentage: Math.min(100, Math.round((vitC / 90) * 100)), color: '#16a34a' },
      { label: 'Fiber', amount: `${fiber}g`, percentage: Math.min(100, Math.round((fiber / 28) * 100)), color: '#0284c7' },
      { label: 'Potassium', amount: `${pot}mg`, percentage: Math.min(100, Math.round((pot / 3000) * 100)), color: '#059669' },
      { label: 'Water', amount: '86g', percentage: 86, color: '#15803d' }
    ],
    quickNutrients: [
      { label: 'Calories', value: `${cal} kcal` },
      { label: 'Carbs', value: `${carbs} g` },
      { label: 'Fiber', value: `${fiber} g` },
      { label: 'Sugars', value: `${sugars} g` },
      { label: 'Protein', value: `${protein} g` },
      { label: 'Fat', value: `${fat} g` }
    ],
    bestTime: {
      morning: `Enjoy fresh ${r.name.toLowerCase()} in the morning on an empty stomach or breakfast bowl to activate digestive enzymes.`,
      evening: `A wholesome, clean afternoon snack that rehydrates the body and wards off refined sugar cravings.`
    },
    healthScore: {
      overall: score,
      ratingText: score >= 9.2 ? 'Superior Quality' : 'Excellent Quality',
      breakdown: {
        heart: parseFloat(Math.min(9.8, 8.5 + (pot > 200 ? 0.8 : 0.3)).toFixed(1)),
        brain: parseFloat(Math.min(9.8, 8.4 + (carbs > 15 ? 0.6 : 0.3)).toFixed(1)),
        energy: parseFloat(Math.min(9.8, 8.5 + (cal > 50 ? 0.7 : 0.4)).toFixed(1)),
        immunity: parseFloat(Math.min(9.8, 8.5 + (vitC > 30 ? 1.1 : 0.4)).toFixed(1)),
        skin: parseFloat(Math.min(9.8, 8.6 + (vitC > 20 ? 0.8 : 0.3)).toFixed(1))
      }
    },
    howToEat: {
      bullets: [
        `Consume fresh and whole to preserve raw micronutrients and enzymatic integrity.`,
        `Thoroughly rinse with cool water before slicing or preparing.`,
        `Slice into fruit salads, fold into Greek yogurt, or blend into vibrant smoothies.`,
        `Pair with a handful of nuts (like almonds or walnuts) for balanced, blood-sugar-steady satiety.`
      ],
      recommendedDose: `1 to 2 standard servings (100g - 150g) daily as part of a wholesome, plant-forward lifestyle.`,
      image
    },
    didYouKnow: {
      fact: `${r.name} is scientifically cataloged as ${r.botanicalName}. Native to ${r.originClimate.toLowerCase()} zones, it has been cultivated for generations not only as a sweet culinary fruit but as an integral staple in natural holistic nutrition.`,
      image
    },
    comparison: {
      target: {
        id: r.id,
        name: r.name,
        serving: 'Per 100g',
        image,
        calories: cal,
        protein: `${protein} g`,
        fiber: `${fiber} g`,
        omega3: 'Trace',
        bestFor: vitC > 30 ? 'Vitamin C & Immunity' : 'Fiber & Energy'
      },
      competitor: competitorFruit
    },
    recipes: [
      {
        id: `${r.id}-smoothie`,
        title: `${r.name} Vitality Smoothie`,
        category: 'Smoothie',
        prepTime: '5 mins',
        calories: `${Math.round(cal * 1.5 + 40)} kcal`,
        difficulty: 'Easy',
        description: `Blended fresh ${r.name.toLowerCase()} with chilled coconut water, a touch of mint, and chia seeds.`,
        image,
        badgeColor: 'bg-emerald-100 text-emerald-800 dark:bg-emerald-950/80 dark:text-emerald-300'
      },
      {
        id: `${r.id}-salad`,
        title: `Gourmet ${r.name} & Walnut Salad`,
        category: 'Salad',
        prepTime: '10 mins',
        calories: '160 kcal',
        difficulty: 'Quick',
        description: `Freshly diced ${r.name.toLowerCase()} tossed with crisp greens, toasted walnuts, and a light lemon-honey vinaigrette.`,
        image,
        badgeColor: 'bg-amber-100 text-amber-800 dark:bg-amber-950/80 dark:text-amber-300'
      },
      {
        id: `${r.id}-bowl`,
        title: `Overnight Oats with ${r.name}`,
        category: 'Breakfast',
        prepTime: '5 mins',
        calories: '210 kcal',
        difficulty: 'Easy',
        description: `Rolled oats soaked in almond milk, topped with generous cuts of ripe ${r.name.toLowerCase()} and pumpkin seeds.`,
        image,
        badgeColor: 'bg-sky-100 text-sky-800 dark:bg-sky-950/80 dark:text-sky-300'
      }
    ],
    similarFoods: similarFruitsList,
    faqs: [
      {
        question: `Can I eat ${r.name.toLowerCase()} every day?`,
        answer: `Yes! Eating ${r.name.toLowerCase()} daily is a wonderful way to supply your body with natural vitamins, potassium (${pot}mg), and dietary fiber (${fiber}g). It supports healthy digestion and balanced energy.`
      },
      {
        question: `What is the optimal time to consume ${r.name.toLowerCase()}?`,
        answer: `Morning or midday between meals is optimal. Consuming fruits on an empty stomach or as a light snack allows your digestive system to absorb micronutrients efficiently without interfering with heavier fats and proteins.`
      },
      {
        question: `How should I store fresh ${r.name.toLowerCase()} to keep it fresh?`,
        answer: `Store unripe fruit at room temperature away from direct sunlight until ripe. Once ripe and fragrant, refrigerate in a perforated produce bag or crisper drawer to maintain optimal texture and prevent vitamin degradation.`
      }
    ]
  };
});

fs.writeFileSync('src/data/productDetailsData.json', JSON.stringify(productDetails, null, 2));
console.log(`Generated productDetailsData.json for ${Object.keys(productDetails).length} fruits!`);
