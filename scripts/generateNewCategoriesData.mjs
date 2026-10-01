import fs from 'fs';
import { sweetenersDataset } from './dataSweeteners.mjs';
import { bakeryDataset } from './dataBakery.mjs';
import { beveragesDataset } from './dataBeverages.mjs';
import { cookingOilsDataset } from './dataCookingOils.mjs';
import { grainsCerealsDataset } from './dataGrainsCereals.mjs';

// Curated high-resolution Unsplash images
const categoryImages = {
  // Sweeteners & Sugars
  "white-sugar": "https://images.unsplash.com/photo-1581441363689-1f3c3c414635?auto=format&fit=crop&w=500&q=80",
  "jaggery": "https://images.unsplash.com/photo-1601493700631-2b16ec4b4716?auto=format&fit=crop&w=500&q=80",
  "honey": "https://images.unsplash.com/photo-1587049352846-4a222e784d38?auto=format&fit=crop&w=500&q=80",
  "coconut-sugar": "https://images.unsplash.com/photo-1581441363689-1f3c3c414635?auto=format&fit=crop&w=500&q=80",

  // Bakery & Breads
  "whole-wheat-bread": "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=500&q=80",
  "white-bread": "https://images.unsplash.com/photo-1586444248902-2f64eddc13df?auto=format&fit=crop&w=500&q=80",
  "multigrain-bread": "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=500&q=80",
  "chapati": "https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?auto=format&fit=crop&w=500&q=80",
  "pav-bread": "https://images.unsplash.com/photo-1586444248902-2f64eddc13df?auto=format&fit=crop&w=500&q=80",

  // Beverages
  "water": "https://images.unsplash.com/photo-1548839140-29a749e1bc4e?auto=format&fit=crop&w=500&q=80",
  "brewed-tea": "https://images.unsplash.com/photo-1576092768241-dec231879fc3?auto=format&fit=crop&w=500&q=80",
  "brewed-coffee": "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=500&q=80",
  "coconut-water": "https://images.unsplash.com/photo-1544378730-8b5104b18790?auto=format&fit=crop&w=500&q=80",
  "orange-juice": "https://images.unsplash.com/photo-1613478223719-2ab802602423?auto=format&fit=crop&w=500&q=80",

  // Cooking Oils & Fats
  "groundnut-oil": "https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?auto=format&fit=crop&w=500&q=80",
  "mustard-oil": "https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?auto=format&fit=crop&w=500&q=80",
  "sesame-oil": "https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?auto=format&fit=crop&w=500&q=80",
  "coconut-oil": "https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?auto=format&fit=crop&w=500&q=80",
  "sunflower-oil": "https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?auto=format&fit=crop&w=500&q=80",
  "olive-oil": "https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?auto=format&fit=crop&w=500&q=80",

  // Grains & Cereals
  "white-rice": "https://images.unsplash.com/photo-1586201375761-83865001e31c?auto=format&fit=crop&w=500&q=80",
  "brown-rice": "https://images.unsplash.com/photo-1536304993881-ff6e9eefa2a6?auto=format&fit=crop&w=500&q=80",
  "parboiled-rice": "https://images.unsplash.com/photo-1586201375761-83865001e31c?auto=format&fit=crop&w=500&q=80",
  "whole-wheat-flour": "https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?auto=format&fit=crop&w=500&q=80",
  "refined-wheat-flour": "https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?auto=format&fit=crop&w=500&q=80",
  "oats": "https://images.unsplash.com/photo-1586201375761-83865001e31c?auto=format&fit=crop&w=500&q=80",
  "barley": "https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?auto=format&fit=crop&w=500&q=80",
  "maize": "https://images.unsplash.com/photo-1551754655-cd27e38d2076?auto=format&fit=crop&w=500&q=80",
  "semolina-rava": "https://images.unsplash.com/photo-1586201375761-83865001e31c?auto=format&fit=crop&w=500&q=80",
  "broken-wheat-dalia": "https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?auto=format&fit=crop&w=500&q=80",
  "poha": "https://images.unsplash.com/photo-1586201375761-83865001e31c?auto=format&fit=crop&w=500&q=80"
};

// Subcategory categorizers
function getSubCategory(categoryName, name, id) {
  const n = (name + ' ' + id).toLowerCase();
  if (categoryName === 'Sweeteners & Sugars') {
    if (n.includes('white sugar')) return 'Refined Sugars';
    return 'Natural Sweeteners';
  }
  if (categoryName === 'Bakery & Breads') {
    if (n.includes('chapati') || n.includes('roti')) return 'Traditional Flatbreads';
    if (n.includes('pav') || n.includes('white bread')) return 'Buns & Rolls';
    return 'Whole Grain & Artisan';
  }
  if (categoryName === 'Beverages') {
    if (n.includes('water')) return 'Pure Hydration';
    if (n.includes('tea') || n.includes('coffee')) return 'Brewed Infusions';
    return 'Fruit Beverages';
  }
  if (categoryName === 'Cooking Oils & Fats') {
    if (n.includes('olive') || n.includes('coconut')) return 'Fruit & Plant Oils';
    return 'Cold-Pressed Seed Oils';
  }
  if (categoryName === 'Grains & Cereals') {
    if (n.includes('rice') || n.includes('poha')) return 'Rice & Flakes';
    if (n.includes('flour') || n.includes('atta') || n.includes('maida') || n.includes('dalia') || n.includes('semolina')) return 'Wheat & Flours';
    return 'Ancient Cereals';
  }
  return 'General';
}

// Build UI Products
function buildProduct(record, categoryGroupName, defaultBadge) {
  const slug = record.slug || record.id.replace(/_/g, '-');
  const image = categoryImages[slug] || categoryImages[record.id] || "https://images.unsplash.com/photo-1546548970-71785318a17b?auto=format&fit=crop&w=500&q=80";
  const subCategory = getSubCategory(record.category, record.name, record.id);
  const score = Number((8.9 + ((record.name.length * 3) % 10) * 0.1).toFixed(1));

  let benefits = ['energy', 'digestion'];
  let subtitle = record.description || `${record.name} - nutrient and culinary profile.`;
  let badge = defaultBadge;
  let badgeType = 'popular';

  const nut = record.nutrition || {};
  const cal = nut.calories_kcal != null ? nut.calories_kcal : 100;
  const protein = nut.protein_g != null ? nut.protein_g : 0;
  const carbs = nut.carbohydrates_g != null ? nut.carbohydrates_g : 0;
  const fiber = nut.fiber_g != null ? nut.fiber_g : 0;
  const fat = nut.fat_g != null ? nut.fat_g : 0;

  let nutrients = [
    { label: `Cal: ${cal} kcal`, icon: "Zap" },
    { label: `Carbs: ${carbs}g`, icon: "Wheat" },
    { label: `Protein: ${protein}g`, icon: "Sparkles" }
  ];

  if (categoryGroupName === 'Cooking Oils & Fats') {
    nutrients = [
      { label: `Cal: ${cal} kcal`, icon: "Zap" },
      { label: `Fat: ${fat}g`, icon: "Droplets" },
      { label: 'Unsaturated: High', icon: "Heart" }
    ];
    badge = 'Pure Fat';
    benefits = ['heart', 'energy'];
  } else if (categoryGroupName === 'Beverages') {
    nutrients = [
      { label: `Cal: ${cal} kcal`, icon: "Zap" },
      { label: nut.potassium_mg ? `Potassium: ${nut.potassium_mg}mg` : 'Hydrating', icon: "Droplets" },
      { label: nut.vitaminC_mg ? `Vit C: ${nut.vitaminC_mg}mg` : 'Pure', icon: "Sparkles" }
    ];
    badge = 'Hydration';
    benefits = ['skin', 'digestion'];
  } else if (categoryGroupName === 'Sweeteners & Sugars') {
    nutrients = [
      { label: `Cal: ${cal} kcal`, icon: "Zap" },
      { label: `Sugars: ${nut.sugars_g || carbs}g`, icon: "Wheat" },
      { label: record.name.includes('Honey') ? 'Enzymes: Rich' : 'Sweetener', icon: "Sparkles" }
    ];
    badge = 'Natural Energy';
  } else if (categoryGroupName === 'Bakery & Breads') {
    nutrients = [
      { label: `Cal: ${cal} kcal`, icon: "Zap" },
      { label: `Fiber: ${fiber}g`, icon: "Leaf" },
      { label: `Protein: ${protein}g`, icon: "Wheat" }
    ];
    badge = fiber > 5 ? 'High Fiber' : 'Grain Energy';
  } else if (categoryGroupName === 'Grains & Cereals') {
    nutrients = [
      { label: `Cal: ${cal} kcal`, icon: "Zap" },
      { label: `Fiber: ${fiber}g`, icon: "Leaf" },
      { label: `Protein: ${protein}g`, icon: "Wheat" }
    ];
    badge = 'Staple Grain';
  }

  return {
    id: slug,
    name: record.name,
    score,
    subtitle,
    category: subCategory,
    botanicalName: record.botanicalName || undefined,
    originClimate: 'Cultivated & Prepared Globally',
    badge,
    badgeType,
    views: `${Math.floor(10 + Math.random() * 8)}.${Math.floor(Math.random() * 9)}k views`,
    image,
    benefits,
    nutrients
  };
}

// Process dataset helper
function processCategory(dataset, filePrefix, categoryGroupName, defaultBadge) {
  // Enrich images in catalog
  const recordsWithImages = dataset.records.map(r => {
    const slug = r.slug || r.id.replace(/_/g, '-');
    const img = categoryImages[slug] || categoryImages[r.id] || "https://images.unsplash.com/photo-1546548970-71785318a17b?auto=format&fit=crop&w=500&q=80";
    return {
      ...r,
      images: {
        thumbnail: img,
        hero: img
      }
    };
  });

  const catalog = {
    ...dataset,
    records: recordsWithImages
  };
  fs.writeFileSync(`src/data/${filePrefix}Catalog.json`, JSON.stringify(catalog, null, 2), 'utf8');

  const productList = recordsWithImages.map(r => buildProduct(r, categoryGroupName, defaultBadge));
  const subCats = Array.from(new Set(productList.map(item => item.category))).map(cat => ({
    id: cat,
    name: cat,
    image: productList.find(p => p.category === cat)?.image || productList[0]?.image
  }));

  const dataJson = {
    subCategories: [
      { id: 'all', name: `All ${categoryGroupName}`, image: productList[0]?.image },
      ...subCats
    ],
    [`${filePrefix}List`]: productList
  };
  fs.writeFileSync(`src/data/${filePrefix}Data.json`, JSON.stringify(dataJson, null, 2), 'utf8');

  const capName = filePrefix.toUpperCase();
  const dataTs = `import rawData from './${filePrefix}Data.json';
import rawCatalog from './${filePrefix}Catalog.json';
import { FruitCatalogRecord, FruitProduct, FruitSubCategory } from './fruitsData';

export const ${capName}_CATALOG: FruitCatalogRecord[] = rawCatalog.records as unknown as FruitCatalogRecord[];
export const ${capName}_DATASET_META = rawCatalog.dataset;

export const ${capName}_SUB_CATEGORIES: FruitSubCategory[] = rawData.subCategories as unknown as FruitSubCategory[];
export const ${capName}_LIST: FruitProduct[] = rawData.${filePrefix}List as unknown as FruitProduct[];
`;
  fs.writeFileSync(`src/data/${filePrefix}Data.ts`, dataTs, 'utf8');
  console.log(`Generated ${filePrefix} catalog & UI datasets with ${recordsWithImages.length} records.`);
  return { recordsWithImages, productList };
}

const sweeteners = processCategory(sweetenersDataset, 'sweeteners', 'Sweeteners & Sugars', 'Sweetener');
const bakery = processCategory(bakeryDataset, 'bakery', 'Bakery & Breads', 'Baked Goods');
const beverages = processCategory(beveragesDataset, 'beverages', 'Beverages', 'Hydration');
const cookingOils = processCategory(cookingOilsDataset, 'cookingOils', 'Cooking Oils & Fats', 'Pure Cooking Oil');
const grainsCereals = processCategory(grainsCerealsDataset, 'grainsCereals', 'Grains & Cereals', 'Wholesome Grain');

// Update Product Details Dataset (src/data/productDetailsData.json)
const productDetailsPath = 'src/data/productDetailsData.json';
let existingPDP = JSON.parse(fs.readFileSync(productDetailsPath, 'utf8'));

function createPDPRecord(record, categoryGroupName) {
  const slug = record.slug || record.id.replace(/_/g, '-');
  const image = categoryImages[slug] || categoryImages[record.id] || "https://images.unsplash.com/photo-1546548970-71785318a17b?auto=format&fit=crop&w=500&q=80";
  const subCategory = getSubCategory(record.category, record.name, record.id);
  const score = Number((8.9 + ((record.name.length * 3) % 10) * 0.1).toFixed(1));

  const nut = record.nutrition || {};
  const cal = nut.calories_kcal != null ? nut.calories_kcal : 100;
  const protein = nut.protein_g != null ? nut.protein_g : 0;
  const carbs = nut.carbohydrates_g != null ? nut.carbohydrates_g : 0;
  const fiber = nut.fiber_g != null ? nut.fiber_g : 0;
  const fat = nut.fat_g != null ? nut.fat_g : 0;
  const pot = nut.potassium_mg != null ? nut.potassium_mg : 0;

  const rawBenefits = record.healthBenefits || [
    'Provides dietary carbohydrates and metabolic fuel for daily tasks.',
    'Traditional staple component in diverse wholesome cuisines.'
  ];
  const benefits = rawBenefits.map((bText, idx) => ({
    id: `b${idx + 1}`,
    title: bText.split('.')[0] || 'Nutritional Benefit',
    description: bText
  }));

  return {
    id: slug,
    name: record.name,
    category: record.category || categoryGroupName,
    subCategory,
    botanicalName: record.botanicalName || undefined,
    originClimate: 'Temperate, Subtropical & Cultivated',
    badge: 'Verified Data',
    badgeType: 'popular',
    views: `${Math.floor(10 + Math.random() * 8)}.${Math.floor(Math.random() * 9)}k views`,
    rating: score,
    reviewCount: 75 + ((record.name.length * 11) % 90),
    image,
    description: record.description || `${record.name} is a valued constituent of a wholesome, balanced diet. It provides essential dietary fuel, micronutrients and balanced culinary utility.`,
    type: record.category || categoryGroupName,
    origin: 'Cultivated & Produced Worldwide',
    calories: `${cal} kcal (per 100g)`,
    bestFor: 'Energy, Dietary Satiety & Culinary Harmony',
    benefits,
    nutritionRings: [
      { label: 'Energy / Cal', amount: `${cal} kcal`, percentage: Math.min(95, Math.max(15, Math.round((cal / 800) * 100))), color: 'text-amber-500 stroke-amber-500' },
      { label: 'Carbs', amount: `${carbs} g`, percentage: Math.min(95, Math.max(10, Math.round((carbs / 100) * 100))), color: 'text-sky-500 stroke-sky-500' },
      { label: 'Protein', amount: `${protein} g`, percentage: Math.min(95, Math.max(5, Math.round((protein / 20) * 100))), color: 'text-emerald-500 stroke-emerald-500' },
      { label: 'Fat', amount: `${fat} g`, percentage: Math.min(95, Math.max(5, Math.round((fat / 100) * 100))), color: 'text-rose-500 stroke-rose-500' }
    ],
    quickNutrients: [
      { label: 'Calories', value: `${cal} kcal` },
      { label: 'Carbs', value: `${carbs} g` },
      { label: 'Protein', value: `${protein} g` },
      { label: 'Fat', value: `${fat} g` }
    ],
    bestTime: {
      morning: 'Enjoy mindfully as part of balanced breakfast meals for clean, steady morning energy.',
      evening: 'Consume in moderate portions alongside fresh greens and protein for restful digestion.'
    },
    healthScore: {
      overall: score,
      ratingText: 'Nutritional Reference Profile',
      breakdown: {
        heart: 90,
        brain: 88,
        energy: 92,
        immunity: 89,
        skin: 88
      }
    },
    howToEat: {
      title: `Best Ways to Enjoy ${record.name}`,
      tips: [
        typeof record.servingSuggestions === 'string' ? record.servingSuggestions : (record.servingSuggestions?.[0] || 'Incorporate moderately into diverse, wholesome meals.'),
        typeof record.storageTips === 'string' ? record.storageTips : (record.storageTips?.[0] || 'Store in an airtight container in a cool, dry place away from heat.'),
        typeof record.selectionTips === 'string' ? record.selectionTips : (record.selectionTips?.[0] || 'Choose food-grade products with intact packaging and clear labeling.')
      ]
    },
    cautions: Array.isArray(record.cautions) ? record.cautions : [record.cautions || 'Use in moderate, mindful portions.'],
    selectionTips: typeof record.selectionTips === 'string' ? record.selectionTips : (record.selectionTips?.[0] || 'Choose sealed, high-grade ingredients.'),
    comparison: {
      target: {
        id: slug,
        name: record.name,
        serving: 'Per 100g',
        image,
        calories: cal,
        protein: `${protein} g`,
        fiber: `${fiber} g`,
        omega3: 'Moderate',
        bestFor: 'Balanced Dietary Fuel'
      },
      competitor: {
        id: 'whole-wheat-bread',
        name: 'Whole Wheat Bread',
        serving: 'Per 100g',
        image: categoryImages['whole-wheat-bread'],
        calories: 247,
        protein: '13 g',
        fiber: '6 g',
        omega3: 'Low',
        bestFor: 'Whole Grain Fiber Benchmark'
      }
    },
    recipes: [
      {
        id: `recipe-${slug}-1`,
        title: `Wholesome ${record.name} Preparation`,
        time: '15 mins',
        servings: '2 servings',
        difficulty: 'Easy',
        image
      }
    ],
    similarFoods: [],
    faqs: [
      {
        question: `What are the primary characteristics of ${record.name}?`,
        answer: `${record.description || record.name + ' provides a distinct nutritional profile verified under standard food composition guidelines.'}`
      },
      {
        question: `How should ${record.name} be stored?`,
        answer: typeof record.storageTips === 'string' ? record.storageTips : (record.storageTips?.[0] || 'Store sealed in a cool, dry area away from direct sunlight.')
      }
    ]
  };
}

const allNewDatasets = [
  ...sweeteners.recordsWithImages.map(r => ({ r, cat: 'Sweeteners & Sugars' })),
  ...bakery.recordsWithImages.map(r => ({ r, cat: 'Bakery & Breads' })),
  ...beverages.recordsWithImages.map(r => ({ r, cat: 'Beverages' })),
  ...cookingOils.recordsWithImages.map(r => ({ r, cat: 'Cooking Oils & Fats' })),
  ...grainsCereals.recordsWithImages.map(r => ({ r, cat: 'Grains & Cereals' }))
];

allNewDatasets.forEach(({ r, cat }) => {
  const slug = r.slug || r.id.replace(/_/g, '-');
  const pdpItem = createPDPRecord(r, cat);
  existingPDP[slug] = pdpItem;
  existingPDP[r.id] = pdpItem;
});

fs.writeFileSync(productDetailsPath, JSON.stringify(existingPDP, null, 2), 'utf8');
console.log(`Updated ${productDetailsPath} with total items:`, Object.keys(existingPDP).length);

// Update Search Results Data (src/data/searchResultsData.json)
const searchDataPath = 'src/data/searchResultsData.json';
let searchData = JSON.parse(fs.readFileSync(searchDataPath, 'utf8'));

const newSearchResults = [
  { id: 'honey', name: 'Raw Honey', subtitle: 'Natural floral sweetener rich in bioactive compounds', category: 'SWEETENERS & SUGARS', categoryId: 'sweeteners', type: 'food', score: 9.3, benefits: ['energy', 'immunity'], foodType: 'raw', dietTypes: ['gf', 'vegetarian'], image: categoryImages['honey'], actionText: 'View Details' },
  { id: 'jaggery', name: 'Jaggery (Gur)', subtitle: 'Traditional unrefined cane sweetener retaining natural minerals', category: 'SWEETENERS & SUGARS', categoryId: 'sweeteners', type: 'food', score: 9.1, benefits: ['energy', 'digestion'], foodType: 'raw', dietTypes: ['gf', 'vegetarian'], image: categoryImages['jaggery'], actionText: 'View Details' },
  { id: 'whole-wheat-bread', name: 'Whole Wheat Bread', subtitle: 'Fiber-rich complex carbohydrate loaf supporting prolonged fullness', category: 'BAKERY & BREADS', categoryId: 'bakery', type: 'food', score: 9.2, benefits: ['digestion', 'heart'], foodType: 'cooked', dietTypes: ['vegetarian'], image: categoryImages['whole-wheat-bread'], actionText: 'View Details' },
  { id: 'chapati', name: 'Chapati (Roti)', subtitle: 'Whole-wheat atta staple flatbread delivering plant protein and fiber', category: 'BAKERY & BREADS', categoryId: 'bakery', type: 'food', score: 9.4, benefits: ['energy', 'digestion'], foodType: 'cooked', dietTypes: ['vegetarian', 'vegan'], image: categoryImages['chapati'], actionText: 'View Details' },
  { id: 'coconut-water', name: 'Coconut Water', subtitle: 'Electrolyte-rich natural tender coconut water packed with potassium', category: 'BEVERAGES', categoryId: 'beverages', type: 'food', score: 9.7, benefits: ['skin', 'digestion', 'heart'], foodType: 'raw', dietTypes: ['gf', 'vegan', 'vegetarian'], image: categoryImages['coconut-water'], actionText: 'View Details' },
  { id: 'brewed-tea', name: 'Brewed Tea', subtitle: 'Calorie-free antioxidant rich infusion packed with polyphenols', category: 'BEVERAGES', categoryId: 'beverages', type: 'food', score: 9.5, benefits: ['heart', 'energy'], foodType: 'raw', dietTypes: ['gf', 'vegan', 'vegetarian'], image: categoryImages['brewed-tea'], actionText: 'View Details' },
  { id: 'olive-oil', name: 'Extra Virgin Olive Oil', subtitle: 'Mediterranean heart champion rich in monounsaturated fats & polyphenols', category: 'COOKING OILS & FATS', categoryId: 'cooking-oils', type: 'food', score: 9.8, benefits: ['heart', 'brain', 'skin'], foodType: 'raw', dietTypes: ['keto', 'gf', 'vegan', 'vegetarian'], image: categoryImages['olive-oil'], actionText: 'View Details' },
  { id: 'mustard-oil', name: 'Mustard Oil', subtitle: 'Traditional cold-pressed pungent oil containing beneficial fatty acids', category: 'COOKING OILS & FATS', categoryId: 'cooking-oils', type: 'food', score: 9.2, benefits: ['heart', 'energy'], foodType: 'raw', dietTypes: ['keto', 'gf', 'vegan', 'vegetarian'], image: categoryImages['mustard-oil'], actionText: 'View Details' },
  { id: 'oats', name: 'Whole Grain Oats', subtitle: 'Heart-healthy cereal packed with soluble beta-glucan and plant protein', category: 'GRAINS & CEREALS', categoryId: 'grains-cereals', type: 'food', score: 9.7, benefits: ['heart', 'digestion', 'weight'], foodType: 'raw', dietTypes: ['gf', 'vegan', 'vegetarian'], image: categoryImages['oats'], actionText: 'View Details' },
  { id: 'brown-rice', name: 'Brown Rice', subtitle: 'Whole grain unpolished rice retaining bran fiber and B-complex vitamins', category: 'GRAINS & CEREALS', categoryId: 'grains-cereals', type: 'food', score: 9.3, benefits: ['energy', 'digestion'], foodType: 'raw', dietTypes: ['gf', 'vegan', 'vegetarian'], image: categoryImages['brown-rice'], actionText: 'View Details' }
];

const existingResultsMap = new Map();
searchData.results.forEach(item => existingResultsMap.set(item.id, item));
newSearchResults.forEach(item => existingResultsMap.set(item.id, item));

searchData.results = Array.from(existingResultsMap.values());
searchData.totalResults = searchData.results.length;

searchData.categories = [
  { id: 'all', label: 'All Categories', count: searchData.totalResults },
  { id: 'fruits', label: 'Fruits', count: 77 },
  { id: 'vegetables', label: 'Vegetables', count: 67 },
  { id: 'groceries', label: 'Groceries', count: 85 },
  { id: 'nuts-seeds', label: 'Nuts & Seeds', count: 38 },
  { id: 'fishes', label: 'Fishes & Seafood', count: 70 },
  { id: 'meats', label: 'Meats & Poultry', count: 59 },
  { id: 'eggs', label: 'Eggs', count: 10 },
  { id: 'sweeteners', label: 'Sweeteners & Sugars', count: sweeteners.recordsWithImages.length },
  { id: 'bakery', label: 'Bakery & Breads', count: bakery.recordsWithImages.length },
  { id: 'beverages', label: 'Beverages', count: beverages.recordsWithImages.length },
  { id: 'cooking-oils', label: 'Cooking Oils & Fats', count: cookingOils.recordsWithImages.length },
  { id: 'grains-cereals', label: 'Grains & Cereals', count: grainsCereals.recordsWithImages.length }
];

fs.writeFileSync(searchDataPath, JSON.stringify(searchData, null, 2), 'utf8');
console.log(`Updated ${searchDataPath} with total results:`, searchData.results.length);

console.log('--- ALL 5 NEW CATEGORIES GENERATED SUCCESSFULLY ---');
