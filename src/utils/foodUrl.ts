import productDetailsRaw from '../data/productDetailsData.json';

export const CATEGORY_SLUG_MAP: Record<string, string> = {
  'fruits': 'fruits',
  'vegetables': 'vegetables',
  'spices & herbs': 'spices',
  'spices': 'spices',
  'grains & cereals': 'grains-cereals',
  'grains-cereals': 'grains-cereals',
  'grains': 'grains-cereals',
  'groceries': 'groceries',
  'millets': 'millets',
  'pulses, dals & legumes': 'pulses',
  'pulses': 'pulses',
  'cooking oils & fats': 'cooking-oils',
  'cooking-oils': 'cooking-oils',
  'sweeteners & sugars': 'sweeteners',
  'sweeteners': 'sweeteners',
  'nuts & seeds': 'nuts-seeds',
  'nuts-seeds': 'nuts-seeds',
  'seeds': 'seeds',
  'fish & seafood': 'fishes',
  'fishes': 'fishes',
  'seafood': 'fishes',
  'meat & poultry': 'meats',
  'meats': 'meats',
  'eggs': 'eggs',
  'bakery & breads': 'bakery',
  'bakery': 'bakery',
  'beverages': 'beverages',
  'breakfast foods': 'breakfast',
  'breakfast': 'breakfast',
  'milk & dairy': 'dairy',
  'dairy': 'dairy',
  'snacks & packaged foods': 'snacks',
  'snacks': 'snacks',
};

export function getCategorySlug(category?: string): string {
  if (!category) return 'fruits';
  const lower = category.toLowerCase().trim();
  if (CATEGORY_SLUG_MAP[lower]) return CATEGORY_SLUG_MAP[lower];
  
  if (lower.includes('snack') || lower.includes('package')) return 'snacks';
  if (lower.includes('spice') || lower.includes('herb')) return 'spices';
  if (lower.includes('breakfast')) return 'breakfast';
  if (lower.includes('dairy') || lower.includes('milk')) return 'dairy';
  if (lower.includes('millet')) return 'millets';
  if (lower.includes('pulse') || lower.includes('dal') || lower.includes('legume')) return 'pulses';
  if (lower === 'seeds' || lower.includes('seed')) return 'seeds';
  if (lower.includes('sweetener') || lower.includes('sugar')) return 'sweeteners';
  if (lower.includes('bake') || lower.includes('bread') || lower.includes('bakery')) return 'bakery';
  if (lower.includes('beverage') || lower.includes('drink')) return 'beverages';
  if (lower.includes('oil') || lower.includes('fat')) return 'cooking-oils';
  if (lower.includes('grain') || lower.includes('cereal') || lower.includes('flour') || lower.includes('rice')) return 'grains-cereals';
  if (lower.includes('fish') || lower.includes('seafood')) return 'fishes';
  if (lower.includes('meat') || lower.includes('poultry')) return 'meats';
  if (lower.includes('egg')) return 'eggs';
  if (lower.includes('veg')) return 'vegetables';
  if (lower.includes('groc')) return 'groceries';
  if (lower.includes('nut')) return 'nuts-seeds';

  return 'fruits';
}

export function getFoodUrl(id: string, category?: string): string {
  let cat = category;
  if (!cat) {
    const detailsMap = productDetailsRaw as Record<string, any>;
    const foodKey = (id || '').toLowerCase().trim();
    const singularKey = foodKey.endsWith('s') && foodKey.length > 2 ? foodKey.slice(0, -1) : foodKey;
    const match =
      detailsMap[foodKey] ||
      detailsMap[singularKey] ||
      Object.values(detailsMap).find((item: any) => {
        const itemId = (item.id || '').toLowerCase();
        return itemId === foodKey || itemId === singularKey;
      });
    if (match?.category) {
      cat = match.category;
    }
  }
  const catSlug = getCategorySlug(cat);
  return `/healthy-foods/${catSlug}/${id}`;
}
