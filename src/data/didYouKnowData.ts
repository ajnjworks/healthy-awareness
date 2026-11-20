export interface DidYouKnowFact {
  id: string;
  category: string;
  foodName: string;
  badge: string;
  fact: string;
  image: string;
  foodUrl?: string;
  nutrientTag?: string;
}

export const CATEGORY_DID_YOU_KNOW_DATA: Record<string, DidYouKnowFact[]> = {
  vegetables: [
    {
      id: 'veg-carrot-beta-carotene',
      category: 'vegetables',
      foodName: 'Carrot',
      badge: 'Beta-Carotene Synergy',
      nutrientTag: 'Provitamin A',
      fact: 'Carrots are packed with beta-carotene, which your body turns into Vitamin A. Cooking carrots lightly with a splash of healthy olive oil or ghee enhances beta-carotene absorption by up to 300%!',
      image: 'https://images.unsplash.com/photo-1598170845058-32b9d6a5da37?auto=format&fit=crop&w=500&q=80',
      foodUrl: '/healthy-foods/vegetables/carrot',
    },
    {
      id: 'veg-spinach-lutein',
      category: 'vegetables',
      foodName: 'Spinach (Palak)',
      badge: 'Macular Protection',
      nutrientTag: 'Lutein & Zeaxanthin',
      fact: 'Popeye was onto something—spinach is loaded with lutein and zeaxanthin, protective carotenoids that accumulate in your retina to shield against high-energy blue light and oxidative stress.',
      image: 'https://images.unsplash.com/photo-1576045057995-568f588f82fb?auto=format&fit=crop&w=500&q=80',
      foodUrl: '/healthy-foods/vegetables/spinach',
    },
    {
      id: 'veg-broccoli-sulforaphane',
      category: 'vegetables',
      foodName: 'Broccoli',
      badge: 'Cellular Detox',
      nutrientTag: 'Sulforaphane',
      fact: 'Chewing raw or lightly steamed broccoli activates myrosinase enzymes to release sulforaphane, one of nature’s most potent activators of the Nrf2 cellular detoxification pathway.',
      image: 'https://images.unsplash.com/photo-1459411621453-7b03977f4bfc?auto=format&fit=crop&w=500&q=80',
      foodUrl: '/healthy-foods/vegetables/broccoli',
    },
    {
      id: 'veg-garlic-allicin',
      category: 'vegetables',
      foodName: 'Garlic',
      badge: '10-Minute Activation Rule',
      nutrientTag: 'Allicin & Bioflavonoids',
      fact: 'Allicin, garlic’s primary heart-protective compound, forms only after cell walls are crushed. Let chopped or minced garlic sit for 10 minutes before heating so heat-sensitive alliinase enzymes work completely.',
      image: 'https://images.unsplash.com/photo-1540148426945-6cf22a6b2383?auto=format&fit=crop&w=500&q=80',
      foodUrl: '/healthy-foods/vegetables/garlic',
    },
    {
      id: 'veg-beetroot-nitric-oxide',
      category: 'vegetables',
      foodName: 'Beetroot',
      badge: 'Circulation & Stamina',
      nutrientTag: 'Dietary Nitrates',
      fact: 'Beetroots are exceptionally high in dietary nitrates, which your body converts to nitric oxide. This naturally dilates blood vessels, lowers systolic blood pressure, and improves athletic stamina.',
      image: 'https://images.unsplash.com/photo-1528751014936-863e6e7a319c?auto=format&fit=crop&w=500&q=80',
      foodUrl: '/healthy-foods/vegetables/beetroot',
    },
    {
      id: 'veg-bell-pepper-vitamin-c',
      category: 'vegetables',
      foodName: 'Yellow Bell Pepper',
      badge: 'Vitamin C Giant',
      nutrientTag: '340% Daily Vit C',
      fact: 'A single yellow bell pepper delivers over 300% of your daily recommended Vitamin C—more than triple the Vitamin C concentration found in an average orange!',
      image: 'https://images.unsplash.com/photo-1563565375-f3fdfdbefa83?auto=format&fit=crop&w=500&q=80',
      foodUrl: '/healthy-foods/vegetables/yellow-bell-pepper',
    },
    {
      id: 'veg-bitter-gourd-insulin',
      category: 'vegetables',
      foodName: 'Bitter Gourd (Karela)',
      badge: 'Blood Sugar Balance',
      nutrientTag: 'Charantin & Polypeptide-p',
      fact: 'Bitter gourd contains charantin and polypeptide-p, naturally occurring plant compounds with insulin-mimetic properties that assist in cellular glucose uptake.',
      image: 'https://images.unsplash.com/photo-1601493700631-2b16ec4b4716?auto=format&fit=crop&w=500&q=80',
      foodUrl: '/healthy-foods/vegetables/bitter-gourd',
    },
    {
      id: 'veg-tomato-lycopene',
      category: 'vegetables',
      foodName: 'Tomato',
      badge: 'Thermal Bioavailability',
      nutrientTag: 'Lycopene',
      fact: 'Cooking tomatoes with extra virgin olive oil weakens tough plant cell walls, rendering fat-soluble lycopene up to 4 times more bioavailable than when eaten raw.',
      image: 'https://images.unsplash.com/photo-1592924357228-91a4daadcfea?auto=format&fit=crop&w=500&q=80',
      foodUrl: '/healthy-foods/vegetables/tomato',
    },
  ],

  fruits: [
    {
      id: 'fruit-blueberry-neuroprotection',
      category: 'fruits',
      foodName: 'Blueberries',
      badge: 'Brain Synergy',
      nutrientTag: 'Anthocyanins',
      fact: 'Blueberries contain bioactive anthocyanins that can cross the blood-brain barrier, lodging in regions responsible for memory and learning to protect synapses from oxidative stress.',
      image: 'https://images.unsplash.com/photo-1498557850523-fd3d118b962e?auto=format&fit=crop&w=500&q=80',
      foodUrl: '/healthy-foods/fruits/blueberry',
    },
    {
      id: 'fruit-apple-quercetin',
      category: 'fruits',
      foodName: 'Apple',
      badge: 'Eat The Peel',
      nutrientTag: 'Quercetin & Pectin',
      fact: 'Up to 5 times more quercetin antioxidant is concentrated in an apple’s skin than in its inner pulp. Eating whole unpeeled apples also provides prebiotic pectin to nourish healthy gut bacteria.',
      image: 'https://images.unsplash.com/photo-1560806887-1e4cd0b6cbd6?auto=format&fit=crop&w=500&q=80',
      foodUrl: '/healthy-foods/fruits/apple',
    },
    {
      id: 'fruit-papaya-papain',
      category: 'fruits',
      foodName: 'Papaya',
      badge: 'Digestive Enzymes',
      nutrientTag: 'Papain Enzyme',
      fact: 'Papaya contains the natural proteolytic enzyme papain, which breaks down complex dietary proteins and helps soothe gastrointestinal inflammation and post-meal heaviness.',
      image: 'https://images.unsplash.com/photo-1517282009859-f000ec3b26fe?auto=format&fit=crop&w=500&q=80',
      foodUrl: '/healthy-foods/fruits/papaya',
    },
    {
      id: 'fruit-banana-resistant-starch',
      category: 'fruits',
      foodName: 'Greenish Banana',
      badge: 'Prebiotic Powerhouse',
      nutrientTag: 'Resistant Starch',
      fact: 'Slightly under-ripe or greenish bananas are loaded with resistant starch—a special prebiotic carbohydrate that feeds beneficial colon Bifidobacteria without spiking blood sugar.',
      image: 'https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?auto=format&fit=crop&w=500&q=80',
      foodUrl: '/healthy-foods/fruits/banana',
    },
    {
      id: 'fruit-kiwi-sleep-support',
      category: 'fruits',
      foodName: 'Kiwi',
      badge: 'Rest & Recovery',
      nutrientTag: 'Serotonin & Folate',
      fact: 'Clinical studies show that eating two ripe kiwis 1 hour before bed enhances sleep onset and total duration due to kiwi’s high serotonin concentration and rich antioxidant content.',
      image: 'https://images.unsplash.com/photo-1518492104633-130d0cc84637?auto=format&fit=crop&w=500&q=80',
      foodUrl: '/healthy-foods/fruits/kiwi',
    },
    {
      id: 'fruit-pomegranate-punicalagin',
      category: 'fruits',
      foodName: 'Pomegranate',
      badge: 'Vascular Longevity',
      nutrientTag: 'Punicalagins',
      fact: 'Pomegranates contain punicalagins, unique polyphenols that provide 3 times the antioxidant activity of green tea and red wine, protecting arterial walls against lipid oxidation.',
      image: 'https://images.unsplash.com/photo-1541344999736-83eca872f242?auto=format&fit=crop&w=500&q=80',
      foodUrl: '/healthy-foods/fruits/pomegranate',
    },
    {
      id: 'fruit-orange-hesperidin',
      category: 'fruits',
      foodName: 'Orange',
      badge: 'Don’t Peel Away Pith',
      nutrientTag: 'Hesperidin Bioflavonoid',
      fact: 'The spongy white pith under an orange’s rind has nearly as much Vitamin C as the juicy pulp and contains high amounts of hesperidin, a bioflavonoid supporting capillary strength.',
      image: 'https://images.unsplash.com/photo-1582979512210-99b6a53386f9?auto=format&fit=crop&w=500&q=80',
      foodUrl: '/healthy-foods/fruits/orange',
    },
    {
      id: 'fruit-watermelon-citrulline',
      category: 'fruits',
      foodName: 'Watermelon',
      badge: 'Hydration & Recovery',
      nutrientTag: 'L-Citrulline & Lycopene',
      fact: 'Watermelon is 92% structured cellular water and one of the highest dietary sources of L-citrulline, an amino acid that boosts nitric oxide production and alleviates post-workout muscle soreness.',
      image: 'https://images.unsplash.com/photo-1587049352847-4a222e784d38?auto=format&fit=crop&w=500&q=80',
      foodUrl: '/healthy-foods/fruits/watermelon',
    },
  ],

  'nuts-seeds': [
    {
      id: 'nut-walnut-ala-omega3',
      category: 'nuts-seeds',
      foodName: 'Walnut',
      badge: 'Brain Architecture',
      nutrientTag: 'Plant Omega-3 ALA',
      fact: 'Walnuts look like miniature brains and happen to be the only tree nut with significant amounts of plant-based ALA Omega-3 fatty acids (2.5g per serving), supporting cognitive vitality.',
      image: 'https://images.unsplash.com/photo-1553530666-ba11a7da3888?auto=format&fit=crop&w=500&q=80',
      foodUrl: '/healthy-foods/nuts-seeds/walnut',
    },
    {
      id: 'nut-almond-soaking-benefit',
      category: 'nuts-seeds',
      foodName: 'Almonds',
      badge: 'Overnight Soaking',
      nutrientTag: 'Vitamin E & Magnesium',
      fact: 'Soaking raw almonds in water overnight neutralizes enzyme inhibitors and phytic acid, making rich Vitamin E, zinc, and magnesium significantly easier for your gut to absorb.',
      image: 'https://images.unsplash.com/photo-1508061252224-237ff54ed5a4?auto=format&fit=crop&w=500&q=80',
      foodUrl: '/healthy-foods/nuts-seeds/almond',
    },
    {
      id: 'seed-chia-hydrophilic',
      category: 'nuts-seeds',
      foodName: 'Chia Seeds',
      badge: 'Soluble Gel Matrix',
      nutrientTag: 'Prebiotic Mucilage',
      fact: 'Chia seeds can absorb up to 12 times their weight in liquid, forming a soluble mucilage gel that slows carbohydrate digestion and promotes lasting satiety and hydration.',
      image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=500&q=80',
      foodUrl: '/healthy-foods/nuts-seeds/chia-seeds',
    },
    {
      id: 'seed-flax-grind-rule',
      category: 'nuts-seeds',
      foodName: 'Flaxseeds',
      badge: 'Freshly Ground Advantage',
      nutrientTag: 'Lignans & ALA',
      fact: 'Whole flaxseeds pass through your digestive tract undigested due to their tough seed coat. Always grind flaxseeds fresh before consumption to release their heart-healthy lignans and omega-3s.',
      image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=500&q=80',
      foodUrl: '/healthy-foods/nuts-seeds/flax-seeds',
    },
    {
      id: 'seed-pumpkin-magnesium',
      category: 'nuts-seeds',
      foodName: 'Pumpkin Seeds',
      badge: 'Deep Sleep Mineral',
      nutrientTag: 'Magnesium & Zinc',
      fact: 'Just a single 30g serving of pumpkin seeds delivers over 35% of your recommended daily magnesium—an essential mineral for muscle relaxation, ATP energy synthesis, and restorative sleep.',
      image: 'https://images.unsplash.com/photo-1514733670139-4d87a1941d55?auto=format&fit=crop&w=500&q=80',
      foodUrl: '/healthy-foods/nuts-seeds/pumpkin-seeds',
    },
  ],

  eggs: [
    {
      id: 'egg-choline-yolk',
      category: 'eggs',
      foodName: 'Egg Yolk',
      badge: 'Neurotransmitter Synthesis',
      nutrientTag: 'Choline & Lutein',
      fact: 'Egg yolks are one of the richest dietary sources of choline, an essential micronutrient needed to produce acetylcholine—the master neurotransmitter for memory, mood, and cognitive control.',
      image: 'https://images.unsplash.com/photo-1582722872445-44dc5f7e3c8f?auto=format&fit=crop&w=500&q=80',
      foodUrl: '/healthy-foods/eggs',
    },
    {
      id: 'egg-bv-score',
      category: 'eggs',
      foodName: 'Whole Eggs',
      badge: 'Perfect Protein Benchmark',
      nutrientTag: 'Biological Value 100',
      fact: 'Whole eggs have a Biological Value (BV) score of 100—the clinical gold standard against which all other dietary proteins are evaluated, providing all 9 essential amino acids in perfect balance.',
      image: 'https://images.unsplash.com/photo-1506976785307-8732e854ad03?auto=format&fit=crop&w=500&q=80',
      foodUrl: '/healthy-foods/eggs',
    },
    {
      id: 'egg-soft-boiled-method',
      category: 'eggs',
      foodName: 'Soft-Boiled Eggs',
      badge: 'Nutrient Preservation',
      nutrientTag: 'Biotin Bioavailability',
      fact: 'Cooking egg whites neutralizes the avidin glycoprotein (freeing up 100% of biotin), while keeping the yolk soft protects delicate heat-sensitive lutein, zeaxanthin, and healthy lipids from oxidation.',
      image: 'https://images.unsplash.com/photo-1525351484163-7529414344d8?auto=format&fit=crop&w=500&q=80',
      foodUrl: '/healthy-foods/eggs',
    },
  ],

  fishes: [
    {
      id: 'fish-salmon-astaxanthin',
      category: 'fishes',
      foodName: 'Wild Salmon',
      badge: 'Marine Antioxidant',
      nutrientTag: 'EPA/DHA & Astaxanthin',
      fact: 'Salmon’s vibrant red-orange color comes from astaxanthin, a potent marine carotenoid that provides up to 6,000 times the antioxidant power of Vitamin C in combating cellular lipid peroxidation.',
      image: 'https://images.unsplash.com/photo-1485921325833-c519f76c4927?auto=format&fit=crop&w=500&q=80',
      foodUrl: '/healthy-foods/fishes',
    },
    {
      id: 'fish-sardines-calcium-epa',
      category: 'fishes',
      foodName: 'Sardines',
      badge: 'Low Heavy Metals',
      nutrientTag: 'Marine Omega-3 & Bone Calcium',
      fact: 'Because sardines feed low on the marine food chain, they accumulate virtually zero heavy metals like mercury while providing unbeatable doses of long-chain EPA/DHA omega-3s and bioavailable calcium.',
      image: 'https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?auto=format&fit=crop&w=500&q=80',
      foodUrl: '/healthy-foods/fishes',
    },
  ],

  millets: [
    {
      id: 'millet-ragi-calcium',
      category: 'millets',
      foodName: 'Finger Millet (Ragi)',
      badge: '344mg Calcium / 100g',
      nutrientTag: 'Bone Matrix Support',
      fact: 'Ragi has the highest calcium content of any cereal grain (344mg per 100g)—exceeding dairy milk per 100g and containing over 30 times more calcium than refined white rice!',
      image: 'https://images.unsplash.com/photo-1586201375761-83865001e31c?auto=format&fit=crop&w=500&q=80',
      foodUrl: '/healthy-foods/millets',
    },
    {
      id: 'millet-foxtail-low-gi',
      category: 'millets',
      foodName: 'Foxtail Millet',
      badge: 'Steady Glycemic Curve',
      nutrientTag: 'Low Glycemic Index',
      fact: 'Foxtail millet delivers complex slowly-digestible carbohydrates and high fiber that help smooth out insulin response, making it an exceptional grain alternative for sustained energy.',
      image: 'https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?auto=format&fit=crop&w=500&q=80',
      foodUrl: '/healthy-foods/millets',
    },
  ],

  pulses: [
    {
      id: 'pulse-lentil-soaking',
      category: 'pulses',
      foodName: 'Lentils & Dals',
      badge: 'Phytase Activation',
      nutrientTag: 'Pre-Soaking Rule',
      fact: 'Soaking dry lentils for 4 to 8 hours activates dormant phytase enzymes, breaking down phytic acid and oligosaccharides. This prevents digestive gas and triples non-heme iron absorption.',
      image: 'https://images.unsplash.com/photo-1585994192701-f1a505c817ea?auto=format&fit=crop&w=500&q=80',
      foodUrl: '/healthy-foods/pulses',
    },
    {
      id: 'pulse-grain-amino-synergy',
      category: 'pulses',
      foodName: 'Pulses + Grains',
      badge: 'Complete Protein Synergy',
      nutrientTag: 'Lysine & Methionine',
      fact: 'Pulses are high in lysine but lower in methionine, while grains are rich in methionine but lower in lysine. Eating them together forms a complete amino acid profile comparable to animal proteins!',
      image: 'https://images.unsplash.com/photo-1515543237350-b3eea1ec8082?auto=format&fit=crop&w=500&q=80',
      foodUrl: '/healthy-foods/pulses',
    },
  ],

  spices: [
    {
      id: 'spice-turmeric-piperine',
      category: 'spices',
      foodName: 'Turmeric + Black Pepper',
      badge: '2000% Bioavailability',
      nutrientTag: 'Curcumin & Piperine',
      fact: 'Curcumin in turmeric has naturally poor intestinal absorption. Adding even a pinch of black pepper (piperine) inhibits hepatic glucuronidation, increasing curcumin bioavailability by up to 2,000%!',
      image: 'https://images.unsplash.com/photo-1615485290382-441e4d049cb5?auto=format&fit=crop&w=500&q=80',
      foodUrl: '/healthy-foods/spices',
    },
    {
      id: 'spice-cinnamon-insulin',
      category: 'spices',
      foodName: 'Ceylon Cinnamon',
      badge: 'Metabolic Balance',
      nutrientTag: 'Cinnamaldehyde',
      fact: 'Authentic Ceylon cinnamon contains active cinnamaldehyde that mimics insulin action on muscle and adipose tissue, supporting healthy post-meal glucose disposal.',
      image: 'https://images.unsplash.com/photo-1509358271058-acd22cc93898?auto=format&fit=crop&w=500&q=80',
      foodUrl: '/healthy-foods/spices',
    },
  ],

  'grains-cereals': [
    {
      id: 'grain-oats-beta-glucan',
      category: 'grains-cereals',
      foodName: 'Whole Oats',
      badge: 'Cholesterol Clearing',
      nutrientTag: 'Soluble Beta-Glucan',
      fact: 'Oats contain a gel-forming soluble fiber known as beta-glucan, which binds cholesterol-rich bile acids in the small intestine, flushing them out and prompting your liver to clear LDL from the bloodstream.',
      image: 'https://images.unsplash.com/photo-1586201375761-83865001e31c?auto=format&fit=crop&w=500&q=80',
      foodUrl: '/healthy-foods/grains-cereals',
    },
  ],

  dairy: [
    {
      id: 'dairy-curd-probiotic',
      category: 'dairy',
      foodName: 'Cultured Curd / Yogurt',
      badge: 'Live Probiotics',
      nutrientTag: 'Lactobacillus Cultures',
      fact: 'Traditional fermented curd provides billions of live lactic acid bacteria that fortify the gut barrier, synthesize Vitamin B12, and naturally pre-digest lactose for effortless digestion.',
      image: 'https://images.unsplash.com/photo-1571212515416-fef01fc43637?auto=format&fit=crop&w=500&q=80',
      foodUrl: '/healthy-foods/dairy',
    },
  ],

  'cooking-oils': [
    {
      id: 'oil-cold-pressed-polyphenols',
      category: 'cooking-oils',
      foodName: 'Cold-Pressed Oils',
      badge: 'Unrefined Purity',
      nutrientTag: 'Natural Tocopherols',
      fact: 'Cold-pressed extraction operates below 45°C without harsh chemical solvents, preserving 100% of the seed’s natural Vitamin E and anti-inflammatory polyphenols.',
      image: 'https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?auto=format&fit=crop&w=500&q=80',
      foodUrl: '/healthy-foods/cooking-oils',
    },
  ],

  beverages: [
    {
      id: 'bev-green-tea-lemon',
      category: 'beverages',
      foodName: 'Green Tea + Lemon',
      badge: 'Polyphenol Stabilization',
      nutrientTag: 'EGCG Catechins',
      fact: 'Adding a squeeze of fresh lemon juice to warm green tea lowers intestinal pH, preventing delicate EGCG catechins from breaking down and boosting antioxidant absorption six-fold!',
      image: 'https://images.unsplash.com/photo-1576092768241-dec231879fc3?auto=format&fit=crop&w=500&q=80',
      foodUrl: '/healthy-foods/beverages',
    },
  ],
};

/**
 * Normalizes a category identifier from path, title, or slug.
 */
export function normalizeCategoryKey(rawCategory?: string): string {
  if (!rawCategory) return 'vegetables';
  const clean = rawCategory.toLowerCase().trim();

  if (clean.includes('fruit') && !clean.includes('dry')) return 'fruits';
  if (clean.includes('veg')) return 'vegetables';
  if (clean.includes('nut') || clean.includes('seed')) return 'nuts-seeds';
  if (clean.includes('egg')) return 'eggs';
  if (clean.includes('fish') || clean.includes('seafood')) return 'fishes';
  if (clean.includes('millet')) return 'millets';
  if (clean.includes('pulse') || clean.includes('dal') || clean.includes('legume')) return 'pulses';
  if (clean.includes('spice') || clean.includes('herb')) return 'spices';
  if (clean.includes('grain') || clean.includes('cereal')) return 'grains-cereals';
  if (clean.includes('dairy')) return 'dairy';
  if (clean.includes('oil')) return 'cooking-oils';
  if (clean.includes('bev') || clean.includes('tea') || clean.includes('drink')) return 'beverages';

  return 'vegetables';
}

/**
 * Retrieves all facts for a category (with fallback to vegetables or fruits).
 */
export function getFactsForCategory(category?: string): DidYouKnowFact[] {
  const key = normalizeCategoryKey(category);
  return CATEGORY_DID_YOU_KNOW_DATA[key] || CATEGORY_DID_YOU_KNOW_DATA['vegetables'];
}

/**
 * Calculates deterministic daily index based on day-of-year.
 * Today about Carrot, tomorrow Spinach, day after Broccoli, etc.
 */
export function getDailyFactIndex(totalCount: number, date = new Date()): number {
  if (totalCount <= 0) return 0;
  const startOfYear = new Date(date.getFullYear(), 0, 0);
  const diff = date.getTime() - startOfYear.getTime();
  const oneDay = 1000 * 60 * 60 * 24;
  const dayOfYear = Math.floor(diff / oneDay);
  return dayOfYear % totalCount;
}
