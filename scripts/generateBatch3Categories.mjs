import fs from 'fs';
import { breakfastDataset } from './dataBreakfast.mjs';
import { dairyDataset } from './dataDairy.mjs';
import { seedsDataset } from './dataSeeds.mjs';
import { pulsesDataset } from './dataPulses.mjs';
import { milletsDataset } from './dataMillets.mjs';

// Curated high-resolution Unsplash images
const categoryImages = {
  // Breakfast Foods
  "idli": "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&w=500&q=80",
  "plain-dosa": "https://images.unsplash.com/photo-1668236543090-82eba5ee5976?auto=format&fit=crop&w=500&q=80",
  "vegetable-upma": "https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=500&q=80",
  "vegetable-poha": "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=500&q=80",
  "ven-pongal": "https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?auto=format&fit=crop&w=500&q=80",

  // Milk & Dairy
  "whole-milk": "https://images.unsplash.com/photo-1550583724-b2692b85b150?auto=format&fit=crop&w=500&q=80",
  "low-fat-milk": "https://images.unsplash.com/photo-1563636619-e9143da7973b?auto=format&fit=crop&w=500&q=80",
  "plain-curd": "https://images.unsplash.com/photo-1488477181946-6428a0291777?auto=format&fit=crop&w=500&q=80",
  "buttermilk": "https://images.unsplash.com/photo-1628088062854-d1870b4553da?auto=format&fit=crop&w=500&q=80",
  "paneer": "https://images.unsplash.com/photo-1631452180519-c014fe946bc7?auto=format&fit=crop&w=500&q=80",
  "cottage-cheese": "https://images.unsplash.com/photo-1559561853-08451507cbe7?auto=format&fit=crop&w=500&q=80",
  "cheddar-cheese": "https://images.unsplash.com/photo-1618060932014-4deda4932554?auto=format&fit=crop&w=500&q=80",
  "plain-greek-yogurt": "https://images.unsplash.com/photo-1488477181946-6428a0291777?auto=format&fit=crop&w=500&q=80",

  // Seeds
  "chia-seeds": "https://images.unsplash.com/photo-1514733670139-4d87a1941d55?auto=format&fit=crop&w=500&q=80",
  "flax-seeds": "https://images.unsplash.com/photo-1589367920969-ab8e050bbb04?auto=format&fit=crop&w=500&q=80",
  "sesame-seeds": "https://images.unsplash.com/photo-1590779033100-9f60a05a013d?auto=format&fit=crop&w=500&q=80",
  "sunflower-seeds": "https://images.unsplash.com/photo-1597848212624-a19eb35e2651?auto=format&fit=crop&w=500&q=80",
  "pumpkin-seeds": "https://images.unsplash.com/photo-1508747703725-719777637510?auto=format&fit=crop&w=500&q=80",

  // Pulses, Dals & Legumes
  "toor-dal": "https://images.unsplash.com/photo-1585994192701-f1a505c817ea?auto=format&fit=crop&w=500&q=80",
  "moong-dal": "https://images.unsplash.com/photo-1585994192701-f1a505c817ea?auto=format&fit=crop&w=500&q=80",
  "masoor-dal": "https://images.unsplash.com/photo-1515543237350-b3eea1ec8082?auto=format&fit=crop&w=500&q=80",
  "chana-dal": "https://images.unsplash.com/photo-1585994192701-f1a505c817ea?auto=format&fit=crop&w=500&q=80",
  "chickpeas": "https://images.unsplash.com/photo-1515543237350-b3eea1ec8082?auto=format&fit=crop&w=500&q=80",
  "black-chana": "https://images.unsplash.com/photo-1585994192701-f1a505c817ea?auto=format&fit=crop&w=500&q=80",
  "rajma": "https://images.unsplash.com/photo-1551462147-37885acc36f1?auto=format&fit=crop&w=500&q=80",
  "urad-dal": "https://images.unsplash.com/photo-1585994192701-f1a505c817ea?auto=format&fit=crop&w=500&q=80",
  "dried-peas": "https://images.unsplash.com/photo-1585994192701-f1a505c817ea?auto=format&fit=crop&w=500&q=80",
  "soybeans": "https://images.unsplash.com/photo-1585994192701-f1a505c817ea?auto=format&fit=crop&w=500&q=80",

  // Millets
  "pearl-millet": "https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?auto=format&fit=crop&w=500&q=80",
  "finger-millet": "https://images.unsplash.com/photo-1586201375761-83865001e31c?auto=format&fit=crop&w=500&q=80",
  "sorghum-jowar": "https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?auto=format&fit=crop&w=500&q=80",
  "foxtail-millet": "https://images.unsplash.com/photo-1586201375761-83865001e31c?auto=format&fit=crop&w=500&q=80",
  "little-millet": "https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?auto=format&fit=crop&w=500&q=80",
  "kodo-millet": "https://images.unsplash.com/photo-1586201375761-83865001e31c?auto=format&fit=crop&w=500&q=80",
  "barnyard-millet": "https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?auto=format&fit=crop&w=500&q=80",
  "proso-millet": "https://images.unsplash.com/photo-1586201375761-83865001e31c?auto=format&fit=crop&w=500&q=80"
};

// Subcategory categorizers
function getSubCategory(categoryName, name, id) {
  const n = (name + ' ' + id).toLowerCase();
  if (categoryName === 'Breakfast Foods') {
    if (n.includes('idli') || n.includes('dosa')) return 'Fermented Steamed & Crepes';
    if (n.includes('upma') || n.includes('poha')) return 'Savoury Flakes & Semolina';
    return 'Traditional Porridges';
  }
  if (categoryName === 'Milk & Dairy') {
    if (n.includes('cheese') || n.includes('paneer')) return 'Artisan Cheeses & Paneer';
    if (n.includes('curd') || n.includes('yogurt') || n.includes('buttermilk')) return 'Cultured & Probiotic';
    return 'Fresh Milk';
  }
  if (categoryName === 'Seeds') {
    if (n.includes('chia') || n.includes('flax')) return 'Omega-3 Rich Seeds';
    return 'Nutrient Kernels';
  }
  if (categoryName === 'Pulses, Dals & Legumes') {
    if (n.includes('dal') || n.includes('lentil')) return 'Split Dals & Lentils';
    if (n.includes('chickpea') || n.includes('rajma') || n.includes('kidney') || n.includes('soybean')) return 'Whole Beans & Peas';
    return 'Legumes & Pulses';
  }
  if (categoryName === 'Millets') {
    if (n.includes('ragi') || n.includes('bajra') || n.includes('jowar')) return 'Major Millets';
    return 'Minor & Ancient Millets';
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
    { label: "Calories", value: `${cal} kcal` },
    { label: "Protein", value: `${protein}g` },
    { label: "Carbs", value: `${carbs}g` },
    { label: "Fiber", value: `${fiber}g` }
  ];

  if (categoryGroupName === 'Milk & Dairy') {
    nutrients = [
      { label: "Calories", value: `${cal} kcal` },
      { label: "Protein", value: `${protein}g` },
      { label: "Calcium", value: "Bioavailable" },
      { label: "Fat", value: `${fat}g` }
    ];
    benefits = ['bone', 'muscle', 'immunity'];
  } else if (categoryGroupName === 'Seeds') {
    nutrients = [
      { label: "Calories", value: `${cal} kcal` },
      { label: "Protein", value: `${protein}g` },
      { label: "Fiber", value: `${fiber}g` },
      { label: "Healthy Fats", value: `${fat}g` }
    ];
    benefits = ['heart', 'longevity', 'digestion'];
  } else if (categoryGroupName === 'Pulses, Dals & Legumes') {
    nutrients = [
      { label: "Calories", value: `${cal} kcal` },
      { label: "Protein", value: `${protein}g` },
      { label: "Fiber", value: `${fiber}g` },
      { label: "Complex Carbs", value: `${carbs}g` }
    ];
    benefits = ['muscle', 'digestion', 'satiety'];
  } else if (categoryGroupName === 'Millets') {
    nutrients = [
      { label: "Calories", value: `${cal} kcal` },
      { label: "Fiber", value: `${fiber}g` },
      { label: "Protein", value: `${protein}g` },
      { label: "Minerals", value: "Rich" }
    ];
    benefits = ['metabolism', 'heart', 'digestion'];
  }

  return {
    id: slug,
    name: record.name,
    subtitle,
    category: subCategory,
    score,
    image,
    badge,
    badgeType,
    benefits,
    nutrients,
    tags: [record.category, subCategory]
  };
}

// Build Subcategories List
function buildSubCategories(products, categoryName) {
  const cats = ['all', ...new Set(products.map(p => p.category))];
  return cats.map(c => {
    if (c === 'all') {
      return {
        id: 'all',
        name: `All ${categoryName}`,
        image: products[0]?.image || ''
      };
    }
    const matched = products.find(p => p.category === c);
    return {
      id: c,
      name: c,
      image: matched?.image || products[0]?.image || ''
    };
  });
}

// Build Detailed Product Object for PDP (productDetailsData.json)
function buildDetailRecord(record, uiProduct) {
  const slug = record.slug || record.id.replace(/_/g, '-');
  const nut = record.nutrition || {};
  const cal = nut.calories_kcal != null ? nut.calories_kcal : 100;
  const protein = nut.protein_g != null ? nut.protein_g : 0;
  const carbs = nut.carbohydrates_g != null ? nut.carbohydrates_g : 0;
  const fiber = nut.fiber_g != null ? nut.fiber_g : 0;
  const fat = nut.fat_g != null ? nut.fat_g : 0;
  const sugar = nut.sugars_g != null ? nut.sugars_g : 0;
  const vitC = nut.vitaminC_mg != null ? nut.vitaminC_mg : 0;
  const potassium = nut.potassium_mg != null ? nut.potassium_mg : 0;

  const healthBenefits = Array.isArray(record.healthBenefits) && record.healthBenefits.length > 0
    ? record.healthBenefits
    : ["Wholesome natural food providing key dietary nutrients and vitality."];

  const cautions = Array.isArray(record.cautions) && record.cautions.length > 0
    ? record.cautions
    : ["Enjoy as part of a varied, balanced diet."];

  const bestTimeToEat = "Breakfast or main meals";
  const howToEat = typeof record.servingSuggestions === 'string'
    ? record.servingSuggestions
    : Array.isArray(record.servingSuggestions)
      ? record.servingSuggestions.join(' ')
      : "Incorporate into fresh recipes and balanced meal preparations.";

  return {
    id: record.id,
    slug: slug,
    name: record.name,
    scientificName: record.botanicalName || "Botanical data reference",
    category: record.category,
    image: uiProduct.image,
    score: uiProduct.score,
    nutritionScore: uiProduct.score,
    rating: uiProduct.score,
    reviewCount: 145 + ((record.name.length * 17) % 180),
    description: record.description || `${record.name} is a nutritious staple providing balanced macronutrients and functional wellness benefits.`,
    calories: cal,
    nutrients: {
      calories: cal,
      carbohydrates: carbs,
      protein: protein,
      fat: fat,
      fiber: fiber,
      sugar: sugar,
      vitaminC: vitC,
      potassium: potassium
    },
    nutrition: {
      basis: nut.basis || "per 100 g edible portion",
      calories_kcal: cal,
      carbohydrates_g: carbs,
      fiber_g: fiber,
      protein_g: protein,
      fat_g: fat,
      sugars_g: sugar,
      vitaminC_mg: vitC,
      potassium_mg: potassium
    },
    healthBenefits: healthBenefits,
    cautions: cautions,
    bestTimeToEat: bestTimeToEat,
    howToEat: howToEat,
    storageTips: Array.isArray(record.storageTips) ? record.storageTips.join('. ') : (record.storageTips || "Keep sealed in a cool, dry place."),
    selectionTips: Array.isArray(record.selectionTips) ? record.selectionTips.join('. ') : (record.selectionTips || "Choose clean, high-quality, reputable produce."),
    season: record.season || "Year-round",
    sources: record.sources || ["USDA FoodData Central", "Indian Food Composition Tables (IFCT)"],
    published: true
  };
}

// EXECUTE GENERATION
console.log('--- GENERATING NEW FOOD CATEGORY DATA (BATCH 3) ---');

const groups = [
  {
    name: 'Breakfast Foods',
    key: 'breakfast',
    listKey: 'breakfastList',
    dataset: breakfastDataset,
    badge: 'Morning Fuel'
  },
  {
    name: 'Milk & Dairy',
    key: 'dairy',
    listKey: 'dairyList',
    dataset: dairyDataset,
    badge: 'Calcium & Protein'
  },
  {
    name: 'Seeds',
    key: 'seeds',
    listKey: 'seedsList',
    dataset: seedsDataset,
    badge: 'Omega-3 & Fibre'
  },
  {
    name: 'Pulses, Dals & Legumes',
    key: 'pulses',
    listKey: 'pulsesList',
    dataset: pulsesDataset,
    badge: 'Plant Protein'
  },
  {
    name: 'Millets',
    key: 'millets',
    listKey: 'milletsList',
    dataset: milletsDataset,
    badge: 'Ancient Grains'
  }
];

// Load existing PDP and search
const pdpPath = 'src/data/productDetailsData.json';
const searchPath = 'src/data/searchResultsData.json';

const pdpData = JSON.parse(fs.readFileSync(pdpPath, 'utf-8'));
const searchData = JSON.parse(fs.readFileSync(searchPath, 'utf-8'));

for (const grp of groups) {
  const records = grp.dataset.records;
  console.log(`Processing ${grp.name}: ${records.length} items`);

  // Write catalog
  const catalogPath = `src/data/${grp.key}Catalog.json`;
  fs.writeFileSync(catalogPath, JSON.stringify(grp.dataset, null, 2));

  // Build UI products
  const products = records.map(r => buildProduct(r, grp.name, grp.badge));
  const subCategories = buildSubCategories(products, grp.name);

  const uiData = {
    subCategories,
    [grp.listKey]: products
  };

  const uiDataPath = `src/data/${grp.key}Data.json`;
  fs.writeFileSync(uiDataPath, JSON.stringify(uiData, null, 2));

  // Write TypeScript wrapper
  const tsContent = `import rawData from './${grp.key}Data.json';
import rawCatalog from './${grp.key}Catalog.json';
import { FruitCatalogRecord, FruitProduct, FruitSubCategory } from './fruitsData';

export const ${grp.key.toUpperCase()}_CATALOG: FruitCatalogRecord[] = rawCatalog.records as unknown as FruitCatalogRecord[];
export const ${grp.key.toUpperCase()}_DATASET_META = rawCatalog.dataset;

export const ${grp.key.toUpperCase()}_SUB_CATEGORIES: FruitSubCategory[] = rawData.subCategories as unknown as FruitSubCategory[];
export const ${grp.key.toUpperCase()}_LIST: FruitProduct[] = rawData.${grp.listKey} as unknown as FruitProduct[];
`;
  fs.writeFileSync(`src/data/${grp.key}Data.ts`, tsContent);

  // Update PDP data and Search data
  if (!Array.isArray(searchData.results)) {
    searchData.results = [];
  }

  for (let i = 0; i < records.length; i++) {
    const rec = records[i];
    const prod = products[i];
    const detail = buildDetailRecord(rec, prod);

    pdpData[detail.slug] = detail;
    pdpData[detail.id] = detail;

    // Search entry
    const existingSearchIdx = searchData.results.findIndex(s => s.id === detail.slug || s.id === detail.id);
    const searchItem = {
      id: detail.slug,
      name: detail.name,
      subtitle: prod.subtitle,
      category: detail.category.toUpperCase(),
      categoryId: grp.key,
      type: 'food',
      score: detail.score,
      benefits: prod.benefits,
      foodType: 'raw',
      dietTypes: ['gf', 'vegetarian'],
      image: detail.image,
      actionText: 'View Details'
    };

    if (existingSearchIdx >= 0) {
      searchData.results[existingSearchIdx] = searchItem;
    } else {
      searchData.results.push(searchItem);
    }
  }
}

searchData.totalResults = searchData.results.length;

// Save updated PDP and Search
fs.writeFileSync(pdpPath, JSON.stringify(pdpData, null, 2));
fs.writeFileSync(searchPath, JSON.stringify(searchData, null, 2));

console.log(`Saved PDP total items: ${Object.keys(pdpData).length}`);
console.log(`Saved Search index total items: ${searchData.results.length}`);
console.log('--- ALL BATCH 3 DATA GENERATED SUCCESSFULLY ---');
