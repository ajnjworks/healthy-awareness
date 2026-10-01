import nutsSeedsRaw from './nutsSeedsData.json';
import nutsSeedsCatalogRaw from './nutsSeedsCatalog.json';
import { FruitCatalogRecord, FruitProduct, FruitSubCategory } from './fruitsData';

export const NUTS_SEEDS_CATALOG: FruitCatalogRecord[] = nutsSeedsCatalogRaw.records as unknown as FruitCatalogRecord[];
export const NUTS_SEEDS_DATASET_META = nutsSeedsCatalogRaw.dataset;

export const NUTS_SEEDS_SUB_CATEGORIES: FruitSubCategory[] = nutsSeedsRaw.subCategories as FruitSubCategory[];
export const NUTS_SEEDS_LIST: FruitProduct[] = nutsSeedsRaw.nutsSeedsList as FruitProduct[];
