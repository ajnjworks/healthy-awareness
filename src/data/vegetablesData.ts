import vegetablesRaw from './vegetablesData.json';
import vegetablesCatalogRaw from './vegetablesCatalog.json';
import { FruitCatalogRecord, FruitProduct, FruitSubCategory } from './fruitsData';

export const VEGETABLES_CATALOG: FruitCatalogRecord[] = vegetablesCatalogRaw.records as unknown as FruitCatalogRecord[];
export const VEGETABLES_DATASET_META = vegetablesCatalogRaw.dataset;

export const VEGETABLE_SUB_CATEGORIES: FruitSubCategory[] = vegetablesRaw.subCategories as FruitSubCategory[];
export const VEGETABLES_LIST: FruitProduct[] = vegetablesRaw.vegetablesList as FruitProduct[];
