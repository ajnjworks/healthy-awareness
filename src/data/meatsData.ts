import meatsRaw from './meatsData.json';
import meatsCatalogRaw from './meatsCatalog.json';
import { FruitCatalogRecord, FruitProduct, FruitSubCategory } from './fruitsData';

export const MEATS_CATALOG: FruitCatalogRecord[] = meatsCatalogRaw.records as unknown as FruitCatalogRecord[];
export const MEATS_DATASET_META = meatsCatalogRaw.dataset;

export const MEATS_SUB_CATEGORIES: FruitSubCategory[] = meatsRaw.subCategories as unknown as FruitSubCategory[];
export const MEATS_LIST: FruitProduct[] = meatsRaw.meatsList as unknown as FruitProduct[];
