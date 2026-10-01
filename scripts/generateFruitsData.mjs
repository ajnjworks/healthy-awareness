import fs from 'fs';
import path from 'path';

const catalog = JSON.parse(fs.readFileSync('src/data/fruitsCatalog.json', 'utf8'));

// Curated image map for all 77 fruits
const fruitImages = {
  "apple": "https://images.unsplash.com/photo-1560806887-1e4cd0b6cbd6?auto=format&fit=crop&w=500&q=80",
  "banana": "https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?auto=format&fit=crop&w=500&q=80",
  "mango": "https://images.unsplash.com/photo-1553279768-865429fa0078?auto=format&fit=crop&w=500&q=80",
  "orange": "https://images.unsplash.com/photo-1611080626919-7cf5a9dbab5b?auto=format&fit=crop&w=500&q=80",
  "grape": "https://images.unsplash.com/photo-1537640538966-79f369143f8f?auto=format&fit=crop&w=500&q=80",
  "watermelon": "https://images.unsplash.com/photo-1587049352847-4a222e784d38?auto=format&fit=crop&w=500&q=80",
  "papaya": "https://images.unsplash.com/photo-1517260739337-6799d239ce83?auto=format&fit=crop&w=500&q=80",
  "pineapple": "https://images.unsplash.com/photo-1550258987-190a2d41a8ba?auto=format&fit=crop&w=500&q=80",
  "guava": "https://images.unsplash.com/photo-1536511135899-7080b094eaeb?auto=format&fit=crop&w=500&q=80",
  "pomegranate": "https://images.unsplash.com/photo-1615485290382-441e4d049cb5?auto=format&fit=crop&w=500&q=80",
  "kiwi": "https://images.unsplash.com/photo-1585059819681-75f85608d207?auto=format&fit=crop&w=500&q=80",
  "strawberry": "https://images.unsplash.com/photo-1464965911861-746a04b4bca6?auto=format&fit=crop&w=500&q=80",
  "blueberry": "https://images.unsplash.com/photo-1498557850523-fd3d118b962e?auto=format&fit=crop&w=500&q=80",
  "raspberry": "https://images.unsplash.com/photo-1577069808021-5a507f3ea7a7?auto=format&fit=crop&w=500&q=80",
  "blackberry": "https://images.unsplash.com/photo-1615485925600-97237c4fc1ec?auto=format&fit=crop&w=500&q=80",
  "cherry": "https://images.unsplash.com/photo-1528825871115-3581a5387919?auto=format&fit=crop&w=500&q=80",
  "peach": "https://images.unsplash.com/photo-1629828874514-c1e5103f2150?auto=format&fit=crop&w=500&q=80",
  "plum": "https://images.unsplash.com/photo-1568702846914-96b305d2aaeb?auto=format&fit=crop&w=500&q=80",
  "apricot": "https://images.unsplash.com/photo-1502741224143-90386d7f8c82?auto=format&fit=crop&w=500&q=80",
  "nectarine": "https://images.unsplash.com/photo-1601004890684-d8cbf643f5f2?auto=format&fit=crop&w=500&q=80",
  "pear": "https://images.unsplash.com/photo-1615484477778-ca3b783256fd?auto=format&fit=crop&w=500&q=80",
  "dragon-fruit": "https://images.unsplash.com/photo-1527325678964-54921661f888?auto=format&fit=crop&w=500&q=80",
  "passion-fruit": "https://images.unsplash.com/photo-1576181256399-8356910ea098?auto=format&fit=crop&w=500&q=80",
  "lychee": "https://images.unsplash.com/photo-1596704017254-9b121068fb31?auto=format&fit=crop&w=500&q=80",
  "rambutan": "https://images.unsplash.com/photo-1582281298055-e25b84a30b0b?auto=format&fit=crop&w=500&q=80",
  "longan": "https://images.unsplash.com/photo-1605371924599-2d0365da1ae0?auto=format&fit=crop&w=500&q=80",
  "mangosteen": "https://images.unsplash.com/photo-1592187270271-9a4b84faa228?auto=format&fit=crop&w=500&q=80",
  "jackfruit": "https://images.unsplash.com/photo-1546548970-71785318a17b?auto=format&fit=crop&w=500&q=80",
  "custard-apple": "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&w=500&q=80",
  "soursop": "https://images.unsplash.com/photo-1591871937573-74dbba515c4c?auto=format&fit=crop&w=500&q=80",
  "sapodilla": "https://images.unsplash.com/photo-1589984662646-e7b2e4962f18?auto=format&fit=crop&w=500&q=80",
  "star-fruit": "https://images.unsplash.com/photo-1616781296062-8418ec25fbb3?auto=format&fit=crop&w=500&q=80",
  "fig": "https://images.unsplash.com/photo-1601493700631-2b16ec4b4716?auto=format&fit=crop&w=500&q=80",
  "date": "https://images.unsplash.com/photo-1543208541-0961a29a8c3d?auto=format&fit=crop&w=500&q=80",
  "coconut": "https://images.unsplash.com/photo-1544378730-8b5104b18790?auto=format&fit=crop&w=500&q=80",
  "avocado": "https://images.unsplash.com/photo-1523049673857-eb18f1d7b578?auto=format&fit=crop&w=500&q=80",
  "olive": "https://images.unsplash.com/photo-1590486803833-1c5dc8ddd4c8?auto=format&fit=crop&w=500&q=80",
  "lemon": "https://images.unsplash.com/photo-1534483509719-3feaee7c30da?auto=format&fit=crop&w=500&q=80",
  "lime": "https://images.unsplash.com/photo-1518492104633-130d0cc84637?auto=format&fit=crop&w=500&q=80",
  "grapefruit": "https://images.unsplash.com/photo-1577234286642-fc512a5f8f11?auto=format&fit=crop&w=500&q=80",
  "mandarin": "https://images.unsplash.com/photo-1557800636-894a64c1696f?auto=format&fit=crop&w=500&q=80",
  "tangerine": "https://images.unsplash.com/photo-1582979512210-99b6a53386f9?auto=format&fit=crop&w=500&q=80",
  "sweet-lime": "https://images.unsplash.com/photo-1590502593747-42a996133562?auto=format&fit=crop&w=500&q=80",
  "pomelo": "https://images.unsplash.com/photo-1587132137056-bfbf0166836e?auto=format&fit=crop&w=500&q=80",
  "persimmon": "https://images.unsplash.com/photo-1574316071802-0d684efa7cd5?auto=format&fit=crop&w=500&q=80",
  "mulberry": "https://images.unsplash.com/photo-1596797038530-2c107229654b?auto=format&fit=crop&w=500&q=80",
  "gooseberry": "https://images.unsplash.com/photo-1563227812-0ea4c22e6cc8?auto=format&fit=crop&w=500&q=80",
  "blackcurrant": "https://images.unsplash.com/photo-1594282486552-05b4d80fbb9f?auto=format&fit=crop&w=500&q=80",
  "redcurrant": "https://images.unsplash.com/photo-1592394533824-9440e5d68530?auto=format&fit=crop&w=500&q=80",
  "cranberry": "https://images.unsplash.com/photo-1605697669460-2646b9487c6d?auto=format&fit=crop&w=500&q=80",
  "elderberry": "https://images.unsplash.com/photo-1596797038530-2c107229654b?auto=format&fit=crop&w=500&q=80",
  "quince": "https://images.unsplash.com/photo-1601004890684-d8cbf643f5f2?auto=format&fit=crop&w=500&q=80",
  "tamarind": "https://images.unsplash.com/photo-1616781296062-8418ec25fbb3?auto=format&fit=crop&w=500&q=80",
  "wood-apple": "https://images.unsplash.com/photo-1589984662646-e7b2e4962f18?auto=format&fit=crop&w=500&q=80",
  "bael": "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&w=500&q=80",
  "amla": "https://images.unsplash.com/photo-1563227812-0ea4c22e6cc8?auto=format&fit=crop&w=500&q=80",
  "jamun": "https://images.unsplash.com/photo-1594282486552-05b4d80fbb9f?auto=format&fit=crop&w=500&q=80",
  "ber": "https://images.unsplash.com/photo-1568702846914-96b305d2aaeb?auto=format&fit=crop&w=500&q=80",
  "karonda": "https://images.unsplash.com/photo-1577069808021-5a507f3ea7a7?auto=format&fit=crop&w=500&q=80",
  "chikoo": "https://images.unsplash.com/photo-1589984662646-e7b2e4962f18?auto=format&fit=crop&w=500&q=80",
  "musk-melon": "https://images.unsplash.com/photo-1589984662646-e7b2e4962f18?auto=format&fit=crop&w=500&q=80",
  "cantaloupe": "https://images.unsplash.com/photo-1571575179705-ae84236ab264?auto=format&fit=crop&w=500&q=80",
  "honeydew": "https://images.unsplash.com/photo-1598170845058-32b9d6a5da37?auto=format&fit=crop&w=500&q=80",
  "plantain": "https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?auto=format&fit=crop&w=500&q=80",
  "breadfruit": "https://images.unsplash.com/photo-1546548970-71785318a17b?auto=format&fit=crop&w=500&q=80",
  "feijoa": "https://images.unsplash.com/photo-1585059819681-75f85608d207?auto=format&fit=crop&w=500&q=80",
  "cape-gooseberry": "https://images.unsplash.com/photo-1563227812-0ea4c22e6cc8?auto=format&fit=crop&w=500&q=80",
  "dragon-fruit-yellow": "https://images.unsplash.com/photo-1527325678964-54921661f888?auto=format&fit=crop&w=500&q=80",
  "durian": "https://images.unsplash.com/photo-1546548970-71785318a17b?auto=format&fit=crop&w=500&q=80",
  "salak": "https://images.unsplash.com/photo-1543208541-0961a29a8c3d?auto=format&fit=crop&w=500&q=80",
  "bilberry": "https://images.unsplash.com/photo-1498557850523-fd3d118b962e?auto=format&fit=crop&w=500&q=80",
  "boysenberry": "https://images.unsplash.com/photo-1615485925600-97237c4fc1ec?auto=format&fit=crop&w=500&q=80",
  "loganberry": "https://images.unsplash.com/photo-1577069808021-5a507f3ea7a7?auto=format&fit=crop&w=500&q=80",
  "cloudberry": "https://images.unsplash.com/photo-1592394533824-9440e5d68530?auto=format&fit=crop&w=500&q=80",
  "goji-berry": "https://images.unsplash.com/photo-1605697669460-2646b9487c6d?auto=format&fit=crop&w=500&q=80",
  "aronia": "https://images.unsplash.com/photo-1594282486552-05b4d80fbb9f?auto=format&fit=crop&w=500&q=80",
  "kiwano": "https://images.unsplash.com/photo-1527325678964-54921661f888?auto=format&fit=crop&w=500&q=80"
};

const subCategories = [
  {
    "id": "all",
    "name": "All Fruits",
    "image": "https://images.unsplash.com/photo-1619566636858-adf3ef46400b?auto=format&fit=crop&w=200&q=80"
  },
  {
    "id": "tropical",
    "name": "Tropical",
    "image": "https://images.unsplash.com/photo-1550258987-190a2d41a8ba?auto=format&fit=crop&w=200&q=80"
  },
  {
    "id": "berries",
    "name": "Berries",
    "image": "https://images.unsplash.com/photo-1498557850523-fd3d118b962e?auto=format&fit=crop&w=200&q=80"
  },
  {
    "id": "citrus",
    "name": "Citrus",
    "image": "https://images.unsplash.com/photo-1611080626919-7cf5a9dbab5b?auto=format&fit=crop&w=200&q=80"
  },
  {
    "id": "stone-fruits",
    "name": "Stone Fruits & Drupes",
    "image": "https://images.unsplash.com/photo-1528825871115-3581a5387919?auto=format&fit=crop&w=300&q=80"
  },
  {
    "id": "melons",
    "name": "Melons",
    "image": "https://images.unsplash.com/photo-1589984662646-e7b2e4962f18?auto=format&fit=crop&w=300&q=80"
  },
  {
    "id": "pome",
    "name": "Pome",
    "image": "https://images.unsplash.com/photo-1560806887-1e4cd0b6cbd6?auto=format&fit=crop&w=300&q=80"
  }
];

function mapCategory(rawCat) {
  const c = (rawCat || '').toLowerCase();
  if (c.includes('pome')) return 'pome';
  if (c.includes('tropical')) return 'tropical';
  if (c.includes('citrus')) return 'citrus';
  if (c.includes('berry')) return 'berries';
  if (c.includes('melon')) return 'melons';
  if (c.includes('stone') || c.includes('drupe')) return 'stone-fruits';
  if (c.includes('cactus') || c.includes('legume')) return 'tropical';
  return 'tropical';
}

function calculateScore(nut) {
  if (!nut) return 8.7;
  let score = 8.5;
  if (nut.vitaminC_mg && nut.vitaminC_mg > 30) score += 0.4;
  if (nut.fiber_g && nut.fiber_g > 2.5) score += 0.3;
  if (nut.potassium_mg && nut.potassium_mg > 200) score += 0.2;
  if (nut.calories_kcal && nut.calories_kcal < 60) score += 0.2;
  return Math.min(9.8, parseFloat(score.toFixed(1)));
}

function generateSubtitle(name, cat, nut) {
  if (nut && nut.vitaminC_mg && nut.vitaminC_mg > 40) {
    return 'High in Vitamin C to boost immunity & skin health';
  }
  if (nut && nut.fiber_g && nut.fiber_g > 3) {
    return 'Rich dietary fiber for digestion & gut wellness';
  }
  if (nut && nut.potassium_mg && nut.potassium_mg > 300) {
    return 'Excellent potassium source supporting heart health';
  }
  if (cat.includes('berry')) {
    return 'Packed with anthocyanins & protective antioxidants';
  }
  if (cat.includes('citrus')) {
    return 'Refreshing citrus packed with vitamin C & hydration';
  }
  if (cat.includes('melon')) {
    return 'Hydrating, refreshing & rich in lycopene';
  }
  return 'Nutrient-rich fruit promoting daily vitality & wellness';
}

function buildNutrients(nut) {
  const list = [];
  if (nut && nut.vitaminC_mg !== null && nut.vitaminC_mg !== undefined) {
    list.push({ label: `Vit C: ${nut.vitaminC_mg}mg`, icon: 'Sun' });
  }
  if (nut && nut.fiber_g !== null && nut.fiber_g !== undefined) {
    list.push({ label: `Fiber: ${nut.fiber_g}g`, icon: 'Droplets' });
  } else if (nut && nut.potassium_mg !== null && nut.potassium_mg !== undefined) {
    list.push({ label: `K: ${nut.potassium_mg}mg`, icon: 'Zap' });
  } else if (nut && nut.calories_kcal !== null && nut.calories_kcal !== undefined) {
    list.push({ label: `${nut.calories_kcal} kcal`, icon: 'Sparkles' });
  }

  if (list.length < 2) {
    if (nut && nut.potassium_mg) {
      list.push({ label: `K: ${nut.potassium_mg}mg`, icon: 'Zap' });
    } else {
      list.push({ label: 'Antioxidants', icon: 'Sparkles' });
    }
  }

  return list.slice(0, 2);
}

const fruitsList = catalog.records.map((r) => {
  const cat = mapCategory(r.category);
  const score = calculateScore(r.nutrition);
  const subtitle = generateSubtitle(r.name, r.category, r.nutrition);
  const nutrients = buildNutrients(r.nutrition);
  const image = fruitImages[r.id] || fruitImages[r.slug] || 'https://images.unsplash.com/photo-1619566636858-adf3ef46400b?auto=format&fit=crop&w=500&q=80';

  const benefits = [];
  if (r.nutrition?.vitaminC_mg && r.nutrition.vitaminC_mg > 15) {
    benefits.push({ id: 'immunity', name: 'Immunity Boost' });
    benefits.push({ id: 'skin', name: 'Skin Health' });
  }
  if (r.nutrition?.fiber_g && r.nutrition.fiber_g > 1.5) {
    benefits.push({ id: 'digestion', name: 'Digestion & Gut' });
    benefits.push({ id: 'weight', name: 'Weight Management' });
  }
  if (r.nutrition?.potassium_mg && r.nutrition.potassium_mg > 150) {
    benefits.push({ id: 'heart', name: 'Heart & Blood' });
  }
  if (cat === 'berries' || cat === 'citrus') {
    benefits.push({ id: 'brain', name: 'Brain & Focus' });
  }

  return {
    id: r.id,
    name: r.name,
    score,
    subtitle,
    category: cat,
    botanicalName: r.botanicalName,
    originClimate: r.originClimate,
    nutrients,
    image,
    benefits: benefits.length > 0 ? benefits : [{ id: 'immunity', name: 'Immunity' }],
    nutritionDetails: r.nutrition
  };
});

const output = {
  subCategories,
  fruitsList
};

fs.writeFileSync('src/data/fruitsData.json', JSON.stringify(output, null, 2));
console.log(`Generated fruitsData.json with ${fruitsList.length} fruits!`);
