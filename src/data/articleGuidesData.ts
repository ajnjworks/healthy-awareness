export interface ArticleSection {
  number?: number;
  title: string;
  subtitle?: string;
  content: string;
  image?: string;
  bestPractice?: string;
  bullets?: string[];
  highlightBox?: {
    title: string;
    text: string;
  };
}

export interface ArticleFaq {
  question: string;
  answer: string;
}

export interface RelatedFoodLink {
  name: string;
  url: string;
  image: string;
  tag: string;
}

export interface ArticleDetailData {
  id: string;
  category: string;
  categorySlug: string;
  categoryColor: string;
  title: string;
  subtitle: string;
  readTime: string;
  date: string;
  views: string;
  author: {
    name: string;
    avatar: string;
    role?: string;
  };
  heroImage: string;
  intro: string;
  sections: ArticleSection[];
  keyTakeaways: string[];
  faqs: ArticleFaq[];
  relatedFoods?: RelatedFoodLink[];
}

export const GUIDE_ARTICLES: Record<string, ArticleDetailData> = {
  'how-to-eat-fruits': {
    id: 'how-to-eat-fruits',
    category: 'Fruit Nutrition & Health',
    categorySlug: 'nutrition',
    categoryColor: 'text-amber-700 dark:text-amber-400',
    title: 'How to Eat Fruits for Maximum Nutrition: Timing, Pairings & Best Practices',
    subtitle: 'An evidence-based guide to optimal fruit timing, whole fruit fiber dynamics, nutrient pairing rules, and preserving delicate antioxidants without blood sugar spikes.',
    readTime: '6 min read',
    date: 'Nov 20, 2026',
    views: '24.8K views',
    author: {
      name: 'Dr. Ananya Roy, Clinical Nutritionist',
      avatar: 'https://images.unsplash.com/photo-1594824813627-02bf78e72288?auto=format&fit=crop&w=150&q=80',
      role: 'Metabolic Health Specialist & Nutritional Biochemist',
    },
    heroImage: 'https://images.unsplash.com/photo-1619566636858-adf3ef46400b?auto=format&fit=crop&w=800&q=80',
    intro: 'Fruits are nature’s most bioavailable functional foods—packed with essential vitamins, minerals, prebiotic pectin fiber, and protective polyphenols. However, many people fail to unlock their full health benefits due to poor meal timing, excessive juicing, or improper food combinations. Understanding how your digestive tract metabolizes fructose, how cellular fiber regulates glycemic absorption, and when your body is primed for fruit intake can transform your energy, gut microbiome, and cellular vitality.',
    sections: [
      {
        number: 1,
        title: 'The Golden Window: Optimal Timing for Eating Fruits',
        subtitle: 'Why eating fruits on an empty stomach or between meals optimizes gastric emptying',
        content: 'Fruits are primarily composed of structured water, simple monosaccharides (fructose and glucose), and water-soluble micronutrients that exit the stomach in just 20 to 40 minutes. When eaten immediately after a heavy, protein-rich or high-fat meal, fruit sugars become trapped behind slow-digesting meats, oils, and starches. This delay promotes gastric fermentation, causing digestive discomfort, bloating, and oxidation of delicate heat-labile vitamins.',
        image: 'https://images.unsplash.com/photo-1550258987-190a2d41a8ba?auto=format&fit=crop&w=500&q=80',
        bestPractice: 'Consume fresh fruits first thing in the morning on an empty stomach, or as a standalone mid-morning/afternoon snack at least 2 hours after your main meal.',
        bullets: [
          'Morning Rehydration: Replenishes glycogen stores with cellular electrolytes (potassium, magnesium) after overnight fasting.',
          'Pre-Workout Fuel (30–45 min before): Delivers rapid, clean glucose to working muscles without taxing digestive stamina.',
          'Night-Time Caution: Avoid consuming large quantities of high-glycemic fruits right before sleep to prevent nocturnal insulin spikes that interfere with human growth hormone (HGH) release.',
        ],
        highlightBox: {
          title: 'Clinical Rule of Spacing',
          text: 'Eat fruits either 30 minutes before a meal or at least 2 hours after your meal for optimal gastrointestinal motility and zero bloating.',
        },
      },
      {
        number: 2,
        title: 'Whole Fruits vs. Strained Juices: The Fiber Matrix Advantage',
        subtitle: 'Why drinking your fruits bypasses natural metabolic satiety and spikes insulin',
        content: 'When you drink strained fruit juice, you discard the cellular wall—stripping away insoluble cellulose and soluble pectin. Without this structural fiber matrix, liquid fructose rushes straight into the portal vein and overloads liver glycolysis, stimulating de novo lipogenesis (visceral fat accumulation) and sharp glycemic spikes followed by reactive energy crashes. In contrast, whole fruits require mastication, which triggers gastric satiety hormones and slows intestinal glucose absorption.',
        image: 'https://images.unsplash.com/photo-1613478223719-2ab802602423?auto=format&fit=crop&w=500&q=80',
        bestPractice: 'Always eat the whole fruit intact. If preparing a smoothie, keep the whole fruit with its pulp, seeds, and edible peel—never strain out the pulp.',
        bullets: [
          'Pectin Gel Matrix: Soluble fiber forms a viscous gel in the small intestine that delays carbohydrate breakdown and feeds healthy Bifidobacteria.',
          'Chewing Triggers Satiety: Salivary amylase begins carbohydrate breakdown while mechanical chewing signals the brain to release leptin.',
          'One Serving Reality: Eating two whole oranges takes 5 minutes and leaves you full; drinking a glass of orange juice (requiring 4–5 oranges) takes 30 seconds and leaves you craving more sugar.',
        ],
      },
      {
        number: 3,
        title: 'Eat the Skin Whenever Edible: Maximizing Polyphenol Density',
        subtitle: 'Up to 70% of protective bioflavonoids reside in the fruit peel',
        content: 'In fruits with edible skins—such as apples, pears, plums, grapes, guava, and berries—the outer peel acts as the plant’s biological shield against intense solar UV radiation and environmental pathogens. Consequently, the peel synthesizes dramatically higher concentrations of protective antioxidants, including quercetin, anthocyanins, resveratrol, and Vitamin C, than the inner watery pulp.',
        image: 'https://images.unsplash.com/photo-1567306226416-28f0efdc88ce?auto=format&fit=crop&w=500&q=80',
        bestPractice: 'Rinse thoroughly under cool flowing water and gently rub the skin. Avoid peeling apples, pears, or stone fruits whenever possible.',
        bullets: [
          'Apples: Apple skin contains up to 5 times more quercetin and twice the insoluble fiber of the inner white flesh.',
          'Pears & Plums: The skin contains nearly all the phenolic acids responsible for neutralizing free radicals.',
          'Proper Cleaning Protocol: Soak fruits for 5 minutes in a bowl of cold water with 1 teaspoon of baking soda (sodium bicarbonate), then rinse thoroughly under running water.',
        ],
      },
      {
        number: 4,
        title: 'Strategic Food Pairings: Balancing Blood Sugar & Nutrient Synergy',
        subtitle: 'How smart combinations elevate micronutrient absorption by up to 300%',
        content: 'Pairing high-glycemic tropical fruits with healthy fats, proteins, or plant-based iron dramatically improves their metabolic impact. Fats and proteins slow the rate of gastric emptying, providing a gradual, sustained energy curve rather than a sugar spike. Simultaneously, the organic acids in fruits facilitate the absorption of essential minerals from co-ingested plant foods.',
        image: 'https://images.unsplash.com/photo-1498557850523-fd3d118b962e?auto=format&fit=crop&w=500&q=80',
        bestPractice: 'Pair higher-sugar fruits (like bananas, mangoes, or dates) with a handful of raw nuts, seeds, or unsweetened Greek yogurt.',
        bullets: [
          'Vitamin C + Non-Heme Plant Iron: Consuming citrus, kiwis, or berries alongside lentils, spinach, or pumpkin seeds triples non-heme iron bioavailability.',
          'Fat-Soluble Carotenoids: Beta-carotene in mango, papaya, and cantaloupe requires small amounts of dietary fat (e.g., 5 almonds or 1 tsp chia seeds) for lymphatic uptake.',
          'Nut Butter + Apple: The monounsaturated fats and protein in almond or peanut butter reduce the glycemic impact of the apple’s natural fructose.',
        ],
        highlightBox: {
          title: 'Nutrient Bioavailability Hack',
          text: 'Squeezing fresh lemon juice over cooked lentils or salads instantly converts ferric iron (Fe3+) to highly absorbable ferrous iron (Fe2+).',
        },
      },
      {
        number: 5,
        title: 'Eat the Rainbow: Diversity of Protective Pigments',
        subtitle: 'Rotate through distinct color categories to cover all cellular pathways',
        content: 'Each vibrant pigment in whole fruits corresponds to a specific family of bioactive phytochemicals with targeted physiological benefits. Relying on a single fruit variety limits your antioxidant spectrum. Aim for at least 3 distinct pigment colors every day across your seasonal fruit selections.',
        image: 'https://images.unsplash.com/photo-1546768292-fb12f6c92568?auto=format&fit=crop&w=500&q=80',
        bestPractice: 'Incorporate one deep red/pink fruit, one orange/yellow fruit, and one purple/blue fruit into your daily routine.',
        bullets: [
          'Deep Red / Pink (Lycopene & Ellagic Acid): Watermelon, pomegranate, strawberries — protects vascular endothelia and combats oxidative stress.',
          'Vibrant Orange / Yellow (Beta-Carotene & Hesperidin): Oranges, papaya, mango, sweet lime — bolsters mucosal immunity, retinal rhodopsin, and collagen synthesis.',
          'Deep Blue / Purple (Anthocyanins & Resveratrol): Blueberries, jamun, blackberries, blackcurrant — crosses the blood-brain barrier to support cognitive memory and neuroprotection.',
          'Crisp Green (Lutein, Zeaxanthin & Chlorophyll): Kiwi, green apples, avocado, guava — protects the retinal macula from blue light damage.',
        ],
      },
      {
        number: 6,
        title: 'Storage, Freshness & Temperature Guidelines',
        subtitle: 'Protect delicate heat-sensitive Vitamin C from oxidative loss',
        content: 'Fruits continue cellular respiration even after harvest. Once cut, fruit tissues are exposed to atmospheric oxygen, and ascorbic acid oxidase enzymes rapidly degrade Vitamin C and polyphenols within hours. Storing whole fruits properly and slicing them only immediately before serving ensures maximum nutritional potency.',
        image: 'https://images.unsplash.com/photo-1610832958506-aa56368176cf?auto=format&fit=crop&w=500&q=80',
        bestPractice: 'Consume sliced fruits within 15–20 minutes of cutting. Store whole tropical fruits at cool room temperature until ripe, and refrigerate berries and stone fruits in breathable containers.',
        bullets: [
          'Room Temperature First: Bananas, mangoes, papayas, and avocados lose their aroma and develop chill injury if refrigerated before fully ripening.',
          'Avoid Excessive Heat: Never boil, microwave, or cook fresh dessert fruits, as heat rapidly denatures Vitamin C and natural digestive enzymes like bromelain (pineapple) and papain (papaya).',
          'Immediate Consumption: Never leave sliced fruit exposed in open containers in the refrigerator, as light and air lead to extensive enzymatic browning and nutrient degradation.',
        ],
      },
    ],
    keyTakeaways: [
      'Eat fruits whole on an empty stomach or 2 hours after meals to prevent fermentation and bloating.',
      'Never substitute whole intact fruits with strained fruit juices, which strip the protective fiber matrix.',
      'Keep the edible peel on apples, pears, plums, and berries—it contains up to 5x higher antioxidant concentrations.',
      'Pair sweet fruits with raw nuts or seeds to blunt blood sugar spikes and enhance fat-soluble vitamin uptake.',
      'Rotate between 3 different color groups daily to cover the full spectrum of protective phytonutrients.',
    ],
    faqs: [
      {
        question: 'Can individuals with diabetes or insulin resistance eat fruits safely?',
        answer: 'Yes! Clinical research shows that whole fruits with a low Glycemic Index (GI < 55) like berries, apples, pears, cherries, and plums are safe and beneficial. Their intact fiber, polyphenols, and chlorogenic acids actively improve insulin sensitivity. Keep portions to 1 serving at a time and pair with raw nuts.',
      },
      {
        question: 'Is natural fruit sugar (fructose) harmful like high-fructose corn syrup?',
        answer: 'No. The fructose in whole fruits is encapsulated within cellular walls alongside water, micronutrients, potassium, and soluble fiber. This structural matrix results in slow, gradual intestinal absorption. High-fructose corn syrup, by contrast, is a free, hyper-concentrated liquid that floods the liver without fiber.',
      },
      {
        question: 'Is it bad to eat fruits right after a heavy lunch or dinner?',
        answer: 'Yes, it often causes digestive distress. Because fruit digests in 20–40 minutes while complex proteins and fats take 3–5 hours, the fruit sugars sit trapped in the warm gastric environment, leading to microbial fermentation, gas, acidity, and diminished vitamin absorption.',
      },
      {
        question: 'How should I properly clean fruits to remove pesticide residues?',
        answer: 'Never use dish soap or detergents, as porous skins can absorb toxic chemicals. The most effective evidence-backed method is soaking fruits for 5 minutes in cold water with 1% baking soda (1 teaspoon per liter), followed by a 30-second rinse under cool running tap water while gently rubbing.',
      },
    ],
    relatedFoods: [
      {
        name: 'Apple',
        url: '/healthy-foods/fruits/apple',
        image: '/fruits/images/apple.webp',
        tag: 'Fiber & Quercetin',
      },
      {
        name: 'Orange',
        url: '/healthy-foods/fruits/orange',
        image: '/fruits/images/orange.webp',
        tag: 'Vitamin C & Hesperidin',
      },
      {
        name: 'Banana',
        url: '/healthy-foods/fruits/banana',
        image: '/fruits/images/banana.webp',
        tag: 'Potassium & Prebiotics',
      },
      {
        name: 'Blueberry',
        url: '/healthy-foods/fruits/blueberry',
        image: '/fruits/images/blueberry.webp',
        tag: 'Anthocyanins',
      },
    ],
  },

  'vegetable-cooking-guide': {
    id: 'vegetable-cooking-guide',
    category: 'Vegetable Nutrition & Cooking',
    categorySlug: 'nutrition',
    categoryColor: 'text-emerald-700 dark:text-emerald-400',
    title: 'The Science of Cooking Vegetables: Preserving Heat-Sensitive Nutrients',
    subtitle: 'Steaming, blanching, sautéing, and roasting: learn how each cooking method impacts vitamins, minerals, and sulforaphane bioavailability.',
    readTime: '6 min read',
    date: 'Nov 18, 2026',
    views: '19.2K views',
    author: {
      name: 'Dr. Marcus Vance, Food Scientist',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80',
      role: 'Culinary Biochemist',
    },
    heroImage: 'https://images.unsplash.com/photo-1459411552884-841db9b3cc2a?auto=format&fit=crop&w=800&q=80',
    intro: 'Vegetables are our primary source of alkalizing minerals, prebiotic fiber, carotenoids, and glucosinolates. However, the cooking technique you select can either double the bioavailability of certain antioxidants (like lycopene in tomatoes) or destroy up to 80% of delicate water-soluble vitamins (like folate and Vitamin C in leafy greens). Here is the scientific guide to preparing vegetables for peak nutritional value.',
    sections: [
      {
        number: 1,
        title: 'Steaming: The Gold Standard for Water-Soluble Vitamins',
        subtitle: 'Minimizing contact with boiling water prevents mineral leaching',
        content: 'Boiling vegetables in large volumes of water leaches up to 60–80% of Vitamin C, B-complex vitamins, and potassium into the discard water. Gentle steaming keeps the vegetables elevated above the water, cooking them in gentle vapor while preserving cell integrity, vibrant green chlorophyll, and water-soluble micronutrients.',
        bestPractice: 'Steam cruciferous vegetables (broccoli, cauliflower) for 3–4 minutes until tender-crisp. They should retain a bright, vibrant color and a gentle bite.',
        bullets: [
          'Preserves Myrosinase: Light steaming protects the heat-sensitive myrosinase enzyme needed to convert glucoraphanin into anti-cancer sulforaphane.',
          'Zero Nutrient Washout: Minerals remain trapped inside the plant cell walls rather than escaping into the cooking liquid.',
        ],
      },
      {
        number: 2,
        title: 'The Oil-Soluble Synergy: When Cooking Increases Nutrient Value',
        subtitle: 'Why tomatoes, carrots, and spinach are actually healthier cooked with olive oil',
        content: 'Not all vegetables are best eaten raw. Fat-soluble carotenoids—such as lycopene in tomatoes, beta-carotene in carrots, and lutein in spinach—are tightly bound within the plant matrix. Thermal processing gently breaks down tough cellular walls, and co-cooking with a healthy oil (like extra virgin olive oil or ghee) increases carotenoid bioavailability by over 400%.',
        bestPractice: 'Simmer tomatoes with olive oil to create bioavailable trans-lycopene; sauté carrots and spinach in cold-pressed oil.',
        bullets: [
          'Lycopene Activation: Heat transforms trans-lycopene into cis-lycopene, which is far more bioavailable to human tissues.',
          'Lipid Micelle Formation: Dietary lipids form micelles in the gut that transport carotenoids across the intestinal enterocyte border.',
        ],
      },
    ],
    keyTakeaways: [
      'Steam or stir-fry rather than boiling in excess water to prevent nutrient loss.',
      'Cook tomatoes and carrots with healthy fats (olive oil) to increase carotenoid absorption by 400%.',
      'Chop garlic and cruciferous vegetables and let them rest for 10 minutes before cooking to maximize active sulforaphane and allicin.',
    ],
    faqs: [
      {
        question: 'Is it better to eat vegetables raw or cooked?',
        answer: 'Both! Eat Vitamin C and folate-dense vegetables (bell peppers, cucumbers, salad greens) raw or lightly steamed. Eat carotenoid and mineral-dense vegetables (tomatoes, carrots, spinach, mushrooms) cooked with a small amount of healthy oil to maximize nutrient uptake.',
      },
    ],
  },

  'healthy-eggs-guide': {
    id: 'healthy-eggs-guide',
    category: 'Eggs & Poultry Nutrition',
    categorySlug: 'nutrition',
    categoryColor: 'text-yellow-700 dark:text-yellow-400',
    title: 'The Ultimate Guide to Eggs: Biological Value, Cooking Methods & Heart Health',
    subtitle: 'Debunking the cholesterol myth: discover why eggs are nature’s gold-standard protein and how cooking affects lutein and choline bioavailability.',
    readTime: '6 min read',
    date: 'Nov 17, 2026',
    views: '22.1K views',
    author: {
      name: 'Dr. Sarah Jenkins, Preventive Cardiologist',
      avatar: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=150&q=80',
      role: 'Cardiometabolic Specialist',
    },
    heroImage: 'https://images.unsplash.com/photo-1582722872445-44dc5f7e3c8f?auto=format&fit=crop&w=800&q=80',
    intro: 'With a Biological Value (BV) score of 100, whole eggs are the scientific benchmark against which all dietary protein is measured. Packed with brain-boosting choline, retinal lutein, Vitamin D, and all 9 essential amino acids, eggs are among the most nutrient-dense foods on earth.',
    sections: [
      {
        number: 1,
        title: 'The Yolk vs. White: Why the Whole Egg is Essential',
        subtitle: 'Over 90% of an egg’s vital micronutrients reside in the golden yolk',
        content: 'While egg whites provide pure fat-free albumin protein, the yolk contains virtually all the fat-soluble vitamins (A, D, E, K), essential fatty acids, choline (essential for liver and neurotransmitter health), and lutein/zeaxanthin for retinal protection. Throwing away the yolk discards the most biologically active nutrients.',
        bestPractice: 'Eat the whole egg. The combination of protein in the white and healthy fats in the yolk produces optimal satiety and balanced hormonal signaling.',
        bullets: [
          'Choline Powerhouse: Just two eggs provide over 50% of your daily choline requirement for acetylcholine neurotransmission.',
          'Retinal Protection: Lutein in egg yolks is bound with dietary lipids, making it up to 3 times more bioavailable than lutein from plant sources.',
        ],
      },
      {
        number: 2,
        title: 'Cooking Methods: Poached, Boiled vs. Over-Fried',
        subtitle: 'Protecting yolk cholesterol from high-heat oxidation',
        content: 'Gentle cooking methods like soft-boiling, poaching, or gentle scrambling fully cook the whites (which neutralizes avidin, allowing biotin absorption) while leaving the yolk runny or soft. This prevents the oxidation of delicate yolk cholesterol into oxysterols and preserves heat-sensitive choline.',
        bestPractice: 'Opt for poached, soft-boiled, or gentle soft scrambles. Avoid burning or crisping egg yolks at high temperatures.',
        bullets: [
          'Avidin Deactivation: Cooking egg whites denatures the avidin protein, unlocking 100% of biotin (Vitamin B7) for hair and metabolic health.',
          'Soft Yolk Retention: Keeping the yolk soft preserves up to 20% more Vitamin A and carotenoids compared to hard-frying.',
        ],
      },
    ],
    keyTakeaways: [
      'Eggs have a perfect Biological Value (BV) of 100 and supply all 9 essential amino acids.',
      'Always eat the whole egg—the yolk contains choline, Vitamin D, lutein, and essential fatty acids.',
      'Soft-boiled and poached preparations maximize protein assimilation while preventing cholesterol oxidation.',
    ],
    faqs: [
      {
        question: 'Do eggs raise blood cholesterol or cause heart disease?',
        answer: 'Extensive randomized trials have shown that dietary cholesterol in whole eggs has minimal impact on serum LDL cholesterol for 75% of the population. In fact, eggs promote larger, buoyant LDL particles and increase protective HDL cholesterol. Major health organizations agree that whole eggs fit into a heart-healthy diet.',
      },
    ],
  },
};

export function getArticleById(id: string): ArticleDetailData | null {
  const cleanId = (id || '').toLowerCase().trim();
  if (GUIDE_ARTICLES[cleanId]) {
    return GUIDE_ARTICLES[cleanId];
  }

  // Check aliases
  if (cleanId.includes('fruit')) return GUIDE_ARTICLES['how-to-eat-fruits'];
  if (cleanId.includes('veg') || cleanId.includes('cook')) return GUIDE_ARTICLES['vegetable-cooking-guide'];
  if (cleanId.includes('egg')) return GUIDE_ARTICLES['healthy-eggs-guide'];

  return null;
}
