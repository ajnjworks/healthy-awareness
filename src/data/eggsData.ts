import eggsRaw from './eggsData.json';
import eggsCatalogRaw from './eggsCatalog.json';
import { FruitCatalogRecord, FruitProduct, FruitSubCategory } from './fruitsData';

export const EGGS_CATALOG: FruitCatalogRecord[] = eggsCatalogRaw.records as unknown as FruitCatalogRecord[];
export const EGGS_DATASET_META = eggsCatalogRaw.dataset;

export const EGGS_SUB_CATEGORIES: FruitSubCategory[] = eggsRaw.subCategories as unknown as FruitSubCategory[];
export const EGGS_LIST: FruitProduct[] = eggsRaw.eggsList as unknown as FruitProduct[];
