import productDetailsRaw from '../data/productDetailsData.json';

export interface FoodMetric {
  raw: number;
  formatted: string;
}

export interface FoodComparisonMetrics {
  calories: FoodMetric;
  protein: FoodMetric;
  fiber: FoodMetric;
  carbs: FoodMetric;
  netCarbs: FoodMetric;
  fat: FoodMetric;
  potassium: FoodMetric;
  calcium: FoodMetric;
  iron: FoodMetric;
  healthScore: FoodMetric;
}

export interface ComparedFoodData {
  id: string;
  name: string;
  localName?: string;
  category: string;
  image: string;
  score: number;
  description: string;
  servingSizes: string[];
  metrics: FoodComparisonMetrics;
  benefits: Array<{ title: string; desc: string; icon: string }>;
  bestTime: { morning: string; evening: string };
  didYouKnow?: string;
}

const detailsMap = productDetailsRaw as Record<string, any>;

// Parse primary number from string or number
export function parseFirstNumber(val: any): number {
  if (typeof val === 'number') return val;
  if (!val) return 0;
  const match = String(val).match(/(\d+(\.\d+)?)/);
  return match ? parseFloat(match[0]) : 0;
}

// Find nutrient from quickNutrients or nutritionRings
function findNutrientValue(item: any, patterns: string[]): number | null {
  if (item.quickNutrients && Array.isArray(item.quickNutrients)) {
    for (const q of item.quickNutrients) {
      const lbl = (q.label || '').toLowerCase();
      if (patterns.some((p) => lbl.includes(p))) {
        return parseFirstNumber(q.value);
      }
    }
  }
  if (item.nutritionRings && Array.isArray(item.nutritionRings)) {
    for (const r of item.nutritionRings) {
      const lbl = (r.label || '').toLowerCase();
      if (patterns.some((p) => lbl.includes(p))) {
        return parseFirstNumber(r.amount);
      }
    }
  }
  return null;
}

// Normalize key to find in productDetailsData.json
export function getFoodDetails(rawKey: string): any {
  if (!rawKey) return detailsMap['almonds'];
  const key = rawKey.toLowerCase().trim();
  const singular = key.endsWith('s') && key.length > 2 ? key.slice(0, -1) : key;
  const hyphens = key.replace(/\s+/g, '-');
  const spaces = key.replace(/-/g, ' ');

  if (detailsMap[key]) return detailsMap[key];
  if (detailsMap[singular]) return detailsMap[singular];
  if (detailsMap[hyphens]) return detailsMap[hyphens];
  if (detailsMap[spaces]) return detailsMap[spaces];

  // Try finding by name or ID
  const found = Object.values(detailsMap).find((item: any) => {
    if (!item) return false;
    const itemId = (item.id || '').toLowerCase();
    const itemName = (item.name || '').toLowerCase();
    return (
      itemId === key ||
      itemId === singular ||
      itemName === key ||
      itemName === singular ||
      itemId === hyphens ||
      itemName === spaces
    );
  });

  return found || detailsMap['almonds'];
}

// Build complete compared food object with accurate metrics based on portion
export function buildComparedFood(rawKey: string, portion: '100g' | 'serving' = '100g'): ComparedFoodData {
  const data = getFoodDetails(rawKey);

  const isNutOrSeed = (data.category || '').toLowerCase().includes('nut') || (data.category || '').toLowerCase().includes('seed');
  const standardServingWeight = isNutOrSeed ? 30 : 100;
  const multiplier = portion === 'serving' ? standardServingWeight / 100 : 1;

  // Base 100g metrics
  const cal100 = parseFirstNumber(data.calories) || findNutrientValue(data, ['cal', 'energy']) || 150;
  const protein100 = findNutrientValue(data, ['protein']) ?? 2;
  const carbs100 = findNutrientValue(data, ['carb', 'carbohydrate']) ?? 15;
  const fiber100 = findNutrientValue(data, ['fiber', 'fibre']) ?? 2;

  let fat100 = findNutrientValue(data, ['fat', 'total fat']);
  if (fat100 === null) {
    const rem = Math.max(0, cal100 - protein100 * 4 - carbs100 * 4);
    fat100 = Math.round((rem / 9) * 10) / 10;
  }

  const potassium100 = findNutrientValue(data, ['potassium']) ?? Math.round(cal100 * 0.7);
  const calcium100 = findNutrientValue(data, ['calcium']) ?? Math.round(cal100 * 0.15);
  const iron100 = findNutrientValue(data, ['iron']) ?? Math.round(cal100 * 0.005 * 10) / 10;
  const score = data.healthScore?.overall || data.rating || 9.0;

  // Adjusted values based on portion
  const cal = Math.round(cal100 * multiplier);
  const protein = Math.round(protein100 * multiplier * 10) / 10;
  const fiber = Math.round(fiber100 * multiplier * 10) / 10;
  const carbs = Math.round(carbs100 * multiplier * 10) / 10;
  const netCarbs = Math.max(0, Math.round((carbs - fiber) * 10) / 10);
  const fat = Math.round(fat100 * multiplier * 10) / 10;
  const potassium = Math.round(potassium100 * multiplier);
  const calcium = Math.round(calcium100 * multiplier);
  const iron = Math.round(iron100 * multiplier * 10) / 10;

  // Format serving sizes
  const servingSizes = isNutOrSeed
    ? ['30 g (approx. 1 oz / handful)', '100 g (Standard Reference)']
    : ['100 g (Standard Reference)', '1 Serving (Standard Portion)'];

  // Map benefits from JSON
  const benefits = (data.benefits && Array.isArray(data.benefits) && data.benefits.length > 0)
    ? data.benefits.slice(0, 3).map((b: any, idx: number) => ({
        title: b.title || 'Optimal Vitality',
        desc: b.description || 'Rich in bioactive phytonutrients supporting daily bodily functions.',
        icon: b.icon || (idx === 0 ? 'Heart' : idx === 1 ? 'Brain' : 'Sun'),
      }))
    : [
        {
          title: 'Immune & Vitality Support',
          desc: 'Packed with cellular antioxidants that reinforce systemic resilience against oxidative stress.',
          icon: 'ShieldCheck',
        },
        {
          title: 'Cardiovascular Wellness',
          desc: 'Delivers healthy minerals and plant compounds that encourage balanced circulation.',
          icon: 'Heart',
        },
        {
          title: 'Metabolic Energy',
          desc: 'Sustained micronutrient release ensuring smooth metabolic conversion without glycemic spikes.',
          icon: 'Sun',
        },
      ];

  const bestTime = data.bestTime || {
    morning: 'Consume in morning meals or smoothies for steady, clean metabolic fuel throughout the day.',
    evening: 'Incorporate lightly into evening preparations to support restorative cellular repair.',
  };

  return {
    id: data.id || rawKey,
    name: data.name || 'Selected Food',
    localName: data.botanicalName ? `(${data.botanicalName})` : '',
    category: data.category || 'Healthy Food',
    image: data.image || 'https://images.unsplash.com/photo-1543208541-0961a29a8c3d?auto=format&fit=crop&w=500&q=80',
    score,
    description: data.description || '',
    servingSizes,
    metrics: {
      calories: { raw: cal, formatted: `${cal} kcal` },
      protein: { raw: protein, formatted: `${protein} g` },
      fiber: { raw: fiber, formatted: `${fiber} g` },
      carbs: { raw: carbs, formatted: `${carbs} g` },
      netCarbs: { raw: netCarbs, formatted: `${netCarbs} g` },
      fat: { raw: fat, formatted: `${fat} g` },
      potassium: { raw: potassium, formatted: `${potassium} mg` },
      calcium: { raw: calcium, formatted: `${calcium} mg` },
      iron: { raw: iron, formatted: `${iron} mg` },
      healthScore: { raw: score, formatted: `${score} / 10` },
    },
    benefits,
    bestTime,
    didYouKnow: data.description ? data.description.slice(0, 160) + '...' : undefined,
  };
}

// Popular Preset Comparisons
export const POPULAR_COMPARISONS = [
  { label: 'Almonds vs Walnuts', foodA: 'almonds', foodB: 'walnuts', emoji: '🌰' },
  { label: 'Apple vs Banana', foodA: 'apple', foodB: 'banana', emoji: '🍎' },
  { label: 'Spinach vs Broccoli', foodA: 'spinach', foodB: 'broccoli', emoji: '🥦' },
  { label: 'Salmon vs Chicken Breast', foodA: 'salmon', foodB: 'chicken-breast', emoji: '🐟' },
  { label: 'Pecans vs Almonds', foodA: 'pecans', foodB: 'almonds', emoji: '🥜' },
  { label: 'Oats vs Quinoa', foodA: 'oats', foodB: 'quinoa', emoji: '🌾' },
  { label: 'Blueberry vs Strawberry', foodA: 'blueberry', foodB: 'strawberry', emoji: '🫐' },
  { label: 'Chia Seeds vs Flax Seeds', foodA: 'chia-seeds', foodB: 'flax-seeds', emoji: '🌱' },
];

// Extract full unique catalog for searchable combobox
export function getAllUniqueFoods(): Array<{
  id: string;
  name: string;
  category: string;
  image: string;
  calories: string;
  rating: number;
}> {
  const map = new Map<string, any>();
  for (const key of Object.keys(detailsMap)) {
    const item = detailsMap[key];
    if (!item || !item.name) continue;
    const normalizedName = item.name.trim().toLowerCase();
    if (!map.has(normalizedName)) {
      map.set(normalizedName, {
        id: item.id || key,
        name: item.name,
        category: item.category || 'General',
        image: item.image,
        calories: item.calories || '100 kcal',
        rating: item.healthScore?.overall || item.rating || 8.5,
      });
    }
  }
  return Array.from(map.values()).sort((a, b) => a.name.localeCompare(b.name));
}
