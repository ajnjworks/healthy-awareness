import groceriesRaw from './groceriesData.json';
import groceriesCatalogRaw from './groceriesCatalog.json';
import { FruitCatalogRecord, FruitProduct, FruitSubCategory } from './fruitsData';

export const GROCERIES_CATALOG: FruitCatalogRecord[] = groceriesCatalogRaw.records as unknown as FruitCatalogRecord[];
export const GROCERIES_DATASET_META = groceriesCatalogRaw.dataset;

export const GROCERY_SUB_CATEGORIES: FruitSubCategory[] = groceriesRaw.subCategories as FruitSubCategory[];
export const GROCERIES_LIST: FruitProduct[] = groceriesRaw.groceriesList as FruitProduct[];
