import fs from 'fs';
import path from 'path';
import { groceriesDataset } from './dataGroceries.mjs';
import { vegetablesDataset, spinachRecord } from './dataVegetables.mjs';
import { nutsSeedsDataset } from './dataNutsSeeds.mjs';

// 1. Write the 3 new catalog files
fs.writeFileSync('src/data/groceriesCatalog.json', JSON.stringify(groceriesDataset, null, 2), 'utf8');
console.log('Saved src/data/groceriesCatalog.json with', groceriesDataset.records.length, 'records.');

fs.writeFileSync('src/data/vegetablesCatalog.json', JSON.stringify(vegetablesDataset, null, 2), 'utf8');
console.log('Saved src/data/vegetablesCatalog.json with', vegetablesDataset.records.length, 'records.');

fs.writeFileSync('src/data/nutsSeedsCatalog.json', JSON.stringify(nutsSeedsDataset, null, 2), 'utf8');
console.log('Saved src/data/nutsSeedsCatalog.json with', nutsSeedsDataset.records.length, 'records.');

// 2. Curated Images Map for Vegetables
const vegetableImages = {
  "asparagus": "https://images.unsplash.com/photo-1515471209610-dae1c92d8777?auto=format&fit=crop&w=500&q=80",
  "beetroot": "https://images.unsplash.com/photo-1528825871115-3581a5387919?auto=format&fit=crop&w=500&q=80",
  "bell-pepper-green": "https://images.unsplash.com/photo-1563565375-f3fdfdbefa83?auto=format&fit=crop&w=500&q=80",
  "bell-pepper-red": "https://images.unsplash.com/photo-1525607551316-4a8e16d1f9ba?auto=format&fit=crop&w=500&q=80",
  "bell-pepper-yellow": "https://images.unsplash.com/photo-1592394533824-9440e5d68530?auto=format&fit=crop&w=500&q=80",
  "bitter-gourd": "https://images.unsplash.com/photo-1628771065518-0d82f1938462?auto=format&fit=crop&w=500&q=80",
  "bottle-gourd": "https://images.unsplash.com/photo-1598170845058-32b9d6a5da37?auto=format&fit=crop&w=500&q=80",
  "broccoli": "https://images.unsplash.com/photo-1459411552884-841db9b3cc2a?auto=format&fit=crop&w=500&q=80",
  "brussels-sprouts": "https://images.unsplash.com/photo-1438118907704-7718ee9a1917?auto=format&fit=crop&w=500&q=80",
  "cabbage-green": "https://images.unsplash.com/photo-1594282486552-05b4d80fbb9f?auto=format&fit=crop&w=500&q=80",
  "cabbage-red": "https://images.unsplash.com/photo-1594282486552-05b4d80fbb9f?auto=format&fit=crop&w=500&q=80",
  "carrot": "https://images.unsplash.com/photo-1598170845058-32b9d6a5da37?auto=format&fit=crop&w=500&q=80",
  "cauliflower": "https://images.unsplash.com/photo-1568584711075-3d021a7c3ca3?auto=format&fit=crop&w=500&q=80",
  "celery": "https://images.unsplash.com/photo-1610832958506-aa56368176cf?auto=format&fit=crop&w=500&q=80",
  "chayote": "https://images.unsplash.com/photo-1589984662646-e7b2e4962f18?auto=format&fit=crop&w=500&q=80",
  "cluster-beans": "https://images.unsplash.com/photo-1551892374-ecf8754cf8b0?auto=format&fit=crop&w=500&q=80",
  "corn-sweet": "https://images.unsplash.com/photo-1551754655-cd27e38d2076?auto=format&fit=crop&w=500&q=80",
  "cucumber": "https://images.unsplash.com/photo-1449300079323-02e209d9d3a6?auto=format&fit=crop&w=500&q=80",
  "drumstick": "https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=500&q=80",
  "eggplant": "https://images.unsplash.com/photo-1615485290382-441e4d049cb5?auto=format&fit=crop&w=500&q=80",
  "fennel-bulb": "https://images.unsplash.com/photo-1592417817098-8f3d69104a47?auto=format&fit=crop&w=500&q=80",
  "french-beans": "https://images.unsplash.com/photo-1551892374-ecf8754cf8b0?auto=format&fit=crop&w=500&q=80",
  "garlic": "https://images.unsplash.com/photo-1540148426945-6cf22a6b2383?auto=format&fit=crop&w=500&q=80",
  "ginger": "https://images.unsplash.com/photo-1615485290176-ff63d39589d9?auto=format&fit=crop&w=500&q=80",
  "green-peas": "https://images.unsplash.com/photo-1587735243615-c03f25aaff15?auto=format&fit=crop&w=500&q=80",
  "ivy-gourd": "https://images.unsplash.com/photo-1628771065518-0d82f1938462?auto=format&fit=crop&w=500&q=80",
  "kale": "https://images.unsplash.com/photo-1524179091875-bf99a9a6fa57?auto=format&fit=crop&w=500&q=80",
  "lady-finger": "https://images.unsplash.com/photo-1425543103986-22abb7d7e8d2?auto=format&fit=crop&w=500&q=80",
  "leek": "https://images.unsplash.com/photo-1580201092675-a0a6a6cafbb1?auto=format&fit=crop&w=500&q=80",
  "lettuce-iceberg": "https://images.unsplash.com/photo-1556881286-fc6915169721?auto=format&fit=crop&w=500&q=80",
  "lettuce-romaine": "https://images.unsplash.com/photo-1622206151226-18ca2c9ab4a1?auto=format&fit=crop&w=500&q=80",
  "mushroom-button": "https://images.unsplash.com/photo-1504544750208-dc0358e63f7f?auto=format&fit=crop&w=500&q=80",
  "onion-red": "https://images.unsplash.com/photo-1618512496248-a07fe83aa8cb?auto=format&fit=crop&w=500&q=80",
  "onion-white": "https://images.unsplash.com/photo-1580201092675-a0a6a6cafbb1?auto=format&fit=crop&w=500&q=80",
  "onion-yellow": "https://images.unsplash.com/photo-1508747703725-719777637510?auto=format&fit=crop&w=500&q=80",
  "parsnip": "https://images.unsplash.com/photo-1598170845058-32b9d6a5da37?auto=format&fit=crop&w=500&q=80",
  "potato": "https://images.unsplash.com/photo-1518977676601-b53f82aba655?auto=format&fit=crop&w=500&q=80",
  "pumpkin": "https://images.unsplash.com/photo-1570586437263-ab629fccc818?auto=format&fit=crop&w=500&q=80",
  "radish": "https://images.unsplash.com/photo-1592417817098-8f3d69104a47?auto=format&fit=crop&w=500&q=80",
  "ridge-gourd": "https://images.unsplash.com/photo-1598170845058-32b9d6a5da37?auto=format&fit=crop&w=500&q=80",
  "snake-gourd": "https://images.unsplash.com/photo-1628771065518-0d82f1938462?auto=format&fit=crop&w=500&q=80",
  "spinach": "https://images.unsplash.com/photo-1576045057995-568f588f82fb?auto=format&fit=crop&w=500&q=80",
  "sweet-potato": "https://images.unsplash.com/photo-1596097635121-14b63b7a0c19?auto=format&fit=crop&w=500&q=80",
  "taro": "https://images.unsplash.com/photo-1596097635121-14b63b7a0c19?auto=format&fit=crop&w=500&q=80",
  "tomato": "https://images.unsplash.com/photo-1592924357228-91a4daadcfea?auto=format&fit=crop&w=500&q=80",
  "turnip": "https://images.unsplash.com/photo-1592417817098-8f3d69104a47?auto=format&fit=crop&w=500&q=80",
  "zucchini": "https://images.unsplash.com/photo-1590165482129-1b8b27698780?auto=format&fit=crop&w=500&q=80",
  "amaranth-greens": "https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=500&q=80",
  "fenugreek-leaves": "https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=500&q=80",
  "mustard-greens": "https://images.unsplash.com/photo-1524179091875-bf99a9a6fa57?auto=format&fit=crop&w=500&q=80",
  "curry-leaves": "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&w=500&q=80",
  "moringa-leaves": "https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=500&q=80",
  "beet-greens": "https://images.unsplash.com/photo-1528825871115-3581a5387919?auto=format&fit=crop&w=500&q=80",
  "bok-choy": "https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=500&q=80",
  "napa-cabbage": "https://images.unsplash.com/photo-1594282486552-05b4d80fbb9f?auto=format&fit=crop&w=500&q=80",
  "artichoke": "https://images.unsplash.com/photo-1518977676601-b53f82aba655?auto=format&fit=crop&w=500&q=80",
  "arugula": "https://images.unsplash.com/photo-1622206151226-18ca2c9ab4a1?auto=format&fit=crop&w=500&q=80",
  "swiss-chard": "https://images.unsplash.com/photo-1524179091875-bf99a9a6fa57?auto=format&fit=crop&w=500&q=80",
  "watercress": "https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=500&q=80",
  "shallot": "https://images.unsplash.com/photo-1618512496248-a07fe83aa8cb?auto=format&fit=crop&w=500&q=80",
  "spring-onion": "https://images.unsplash.com/photo-1580201092675-a0a6a6cafbb1?auto=format&fit=crop&w=500&q=80",
  "turnip-greens": "https://images.unsplash.com/photo-1524179091875-bf99a9a6fa57?auto=format&fit=crop&w=500&q=80",
  "rutabaga": "https://images.unsplash.com/photo-1598170845058-32b9d6a5da37?auto=format&fit=crop&w=500&q=80",
  "cassava": "https://images.unsplash.com/photo-1596097635121-14b63b7a0c19?auto=format&fit=crop&w=500&q=80",
  "yam": "https://images.unsplash.com/photo-1596097635121-14b63b7a0c19?auto=format&fit=crop&w=500&q=80",
  "raw-banana": "https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?auto=format&fit=crop&w=500&q=80",
  "banana-flower": "https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=500&q=80",
  "banana-stem": "https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=500&q=80",
  "green-chilli": "https://images.unsplash.com/photo-1563565375-f3fdfdbefa83?auto=format&fit=crop&w=500&q=80",
  "jalapeno": "https://images.unsplash.com/photo-1563565375-f3fdfdbefa83?auto=format&fit=crop&w=500&q=80",
  "serrano-pepper": "https://images.unsplash.com/photo-1563565375-f3fdfdbefa83?auto=format&fit=crop&w=500&q=80",
  "poblano-pepper": "https://images.unsplash.com/photo-1563565375-f3fdfdbefa83?auto=format&fit=crop&w=500&q=80",
  "broad-beans": "https://images.unsplash.com/photo-1551892374-ecf8754cf8b0?auto=format&fit=crop&w=500&q=80",
  "cowpea-green": "https://images.unsplash.com/photo-1551892374-ecf8754cf8b0?auto=format&fit=crop&w=500&q=80",
  "edamame": "https://images.unsplash.com/photo-1551892374-ecf8754cf8b0?auto=format&fit=crop&w=500&q=80"
};

// 3. Curated Images Map for Groceries
const groceryImages = {
  "white-rice": "https://images.unsplash.com/photo-1586201375761-83865001e31c?auto=format&fit=crop&w=500&q=80",
  "brown-rice": "https://images.unsplash.com/photo-1536304993881-ff6e9eefa2a6?auto=format&fit=crop&w=500&q=80",
  "red-rice": "https://images.unsplash.com/photo-1586201375761-83865001e31c?auto=format&fit=crop&w=500&q=80",
  "black-rice": "https://images.unsplash.com/photo-1586201375761-83865001e31c?auto=format&fit=crop&w=500&q=80",
  "basmati-rice": "https://images.unsplash.com/photo-1586201375761-83865001e31c?auto=format&fit=crop&w=500&q=80",
  "parboiled-rice": "https://images.unsplash.com/photo-1536304993881-ff6e9eefa2a6?auto=format&fit=crop&w=500&q=80",
  "oats": "https://images.unsplash.com/photo-1586201375761-83865001e31c?auto=format&fit=crop&w=500&q=80",
  "whole-wheat": "https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?auto=format&fit=crop&w=500&q=80",
  "barley": "https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?auto=format&fit=crop&w=500&q=80",
  "pearl-millet": "https://images.unsplash.com/photo-1586201375761-83865001e31c?auto=format&fit=crop&w=500&q=80",
  "finger-millet": "https://images.unsplash.com/photo-1586201375761-83865001e31c?auto=format&fit=crop&w=500&q=80",
  "foxtail-millet": "https://images.unsplash.com/photo-1586201375761-83865001e31c?auto=format&fit=crop&w=500&q=80",
  "little-millet": "https://images.unsplash.com/photo-1586201375761-83865001e31c?auto=format&fit=crop&w=500&q=80",
  "kodo-millet": "https://images.unsplash.com/photo-1586201375761-83865001e31c?auto=format&fit=crop&w=500&q=80",
  "proso-millet": "https://images.unsplash.com/photo-1586201375761-83865001e31c?auto=format&fit=crop&w=500&q=80",
  "barnyard-millet": "https://images.unsplash.com/photo-1586201375761-83865001e31c?auto=format&fit=crop&w=500&q=80",
  "quinoa": "https://images.unsplash.com/photo-1586201375761-83865001e31c?auto=format&fit=crop&w=500&q=80",
  "cornmeal": "https://images.unsplash.com/photo-1551754655-cd27e38d2076?auto=format&fit=crop&w=500&q=80",
  "semolina": "https://images.unsplash.com/photo-1586201375761-83865001e31c?auto=format&fit=crop&w=500&q=80",
  "poha": "https://images.unsplash.com/photo-1586201375761-83865001e31c?auto=format&fit=crop&w=500&q=80",
  "toor-dal": "https://images.unsplash.com/photo-1585994192701-f1a505c817ea?auto=format&fit=crop&w=500&q=80",
  "moong-dal": "https://images.unsplash.com/photo-1585994192701-f1a505c817ea?auto=format&fit=crop&w=500&q=80",
  "urad-dal": "https://images.unsplash.com/photo-1585994192701-f1a505c817ea?auto=format&fit=crop&w=500&q=80",
  "masoor-dal": "https://images.unsplash.com/photo-1585994192701-f1a505c817ea?auto=format&fit=crop&w=500&q=80",
  "chana-dal": "https://images.unsplash.com/photo-1585994192701-f1a505c817ea?auto=format&fit=crop&w=500&q=80",
  "chickpeas": "https://images.unsplash.com/photo-1515543237350-b3eea1ec8082?auto=format&fit=crop&w=500&q=80",
  "black-chickpeas": "https://images.unsplash.com/photo-1515543237350-b3eea1ec8082?auto=format&fit=crop&w=500&q=80",
  "rajma": "https://images.unsplash.com/photo-1585994192701-f1a505c817ea?auto=format&fit=crop&w=500&q=80",
  "black-beans": "https://images.unsplash.com/photo-1585994192701-f1a505c817ea?auto=format&fit=crop&w=500&q=80",
  "white-beans": "https://images.unsplash.com/photo-1585994192701-f1a505c817ea?auto=format&fit=crop&w=500&q=80",
  "soybeans": "https://images.unsplash.com/photo-1585994192701-f1a505c817ea?auto=format&fit=crop&w=500&q=80",
  "wheat-flour": "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=500&q=80",
  "maida": "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=500&q=80",
  "ragi-flour": "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=500&q=80",
  "besan": "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=500&q=80",
  "rice-flour": "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=500&q=80",
  "oat-flour": "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=500&q=80",
  "groundnut-oil": "https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?auto=format&fit=crop&w=500&q=80",
  "sunflower-oil": "https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?auto=format&fit=crop&w=500&q=80",
  "mustard-oil": "https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?auto=format&fit=crop&w=500&q=80",
  "sesame-oil": "https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?auto=format&fit=crop&w=500&q=80",
  "coconut-oil": "https://images.unsplash.com/photo-1544378730-8b5104b18790?auto=format&fit=crop&w=500&q=80",
  "rice-bran-oil": "https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?auto=format&fit=crop&w=500&q=80",
  "olive-oil": "https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?auto=format&fit=crop&w=500&q=80",
  "canola-oil": "https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?auto=format&fit=crop&w=500&q=80",
  "ghee": "https://images.unsplash.com/photo-1628088062854-d1870b4553da?auto=format&fit=crop&w=500&q=80",
  "butter": "https://images.unsplash.com/photo-1589985270826-4b7bb135bc9d?auto=format&fit=crop&w=500&q=80",
  "white-sugar": "https://images.unsplash.com/photo-1581441363689-1f3c3c414635?auto=format&fit=crop&w=500&q=80",
  "jaggery": "https://images.unsplash.com/photo-1581441363689-1f3c3c414635?auto=format&fit=crop&w=500&q=80",
  "coconut-sugar": "https://images.unsplash.com/photo-1581441363689-1f3c3c414635?auto=format&fit=crop&w=500&q=80",
  "honey": "https://images.unsplash.com/photo-1587049352847-4a222e784d38?auto=format&fit=crop&w=500&q=80",
  "rock-salt": "https://images.unsplash.com/photo-1518110925495-5fe2fda0442c?auto=format&fit=crop&w=500&q=80",
  "sea-salt": "https://images.unsplash.com/photo-1518110925495-5fe2fda0442c?auto=format&fit=crop&w=500&q=80",
  "iodized-salt": "https://images.unsplash.com/photo-1518110925495-5fe2fda0442c?auto=format&fit=crop&w=500&q=80",
  "turmeric": "https://images.unsplash.com/photo-1615485290382-441e4d049cb5?auto=format&fit=crop&w=500&q=80",
  "black-pepper": "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&w=500&q=80",
  "cumin": "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&w=500&q=80",
  "coriander-seeds": "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&w=500&q=80",
  "cinnamon": "https://images.unsplash.com/photo-1509358271058-acd22cc93898?auto=format&fit=crop&w=500&q=80",
  "cardamom": "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&w=500&q=80",
  "cloves": "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&w=500&q=80",
  "fenugreek-seeds": "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&w=500&q=80",
  "mustard-seeds": "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&w=500&q=80",
  "fennel-seeds": "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&w=500&q=80",
  "ajwain": "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&w=500&q=80",
  "asafoetida": "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&w=500&q=80",
  "dry-red-chilli": "https://images.unsplash.com/photo-1563565375-f3fdfdbefa83?auto=format&fit=crop&w=500&q=80",
  "bay-leaf": "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&w=500&q=80",
  "star-anise": "https://images.unsplash.com/photo-1509358271058-acd22cc93898?auto=format&fit=crop&w=500&q=80",
  "nutmeg": "https://images.unsplash.com/photo-1509358271058-acd22cc93898?auto=format&fit=crop&w=500&q=80",
  "saffron": "https://images.unsplash.com/photo-1615485290382-441e4d049cb5?auto=format&fit=crop&w=500&q=80",
  "tea": "https://images.unsplash.com/photo-1576092768241-dec231879fc3?auto=format&fit=crop&w=500&q=80",
  "coffee": "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=500&q=80",
  "cocoa-powder": "https://images.unsplash.com/photo-1542990253-0d0f5be5f0ed?auto=format&fit=crop&w=500&q=80",
  "corn-starch": "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=500&q=80",
  "baking-soda": "https://images.unsplash.com/photo-1518110925495-5fe2fda0442c?auto=format&fit=crop&w=500&q=80",
  "baking-powder": "https://images.unsplash.com/photo-1518110925495-5fe2fda0442c?auto=format&fit=crop&w=500&q=80",
  "vinegar": "https://images.unsplash.com/photo-1589985270826-4b7bb135bc9d?auto=format&fit=crop&w=500&q=80",
  "apple-cider-vinegar": "https://images.unsplash.com/photo-1589985270826-4b7bb135bc9d?auto=format&fit=crop&w=500&q=80",
  "soy-sauce": "https://images.unsplash.com/photo-1589985270826-4b7bb135bc9d?auto=format&fit=crop&w=500&q=80",
  "tomato-paste": "https://images.unsplash.com/photo-1592924357228-91a4daadcfea?auto=format&fit=crop&w=500&q=80",
  "coconut-milk": "https://images.unsplash.com/photo-1544378730-8b5104b18790?auto=format&fit=crop&w=500&q=80",
  "tamarind-paste": "https://images.unsplash.com/photo-1616781296062-8418ec25fbb3?auto=format&fit=crop&w=500&q=80",
  "desiccated-coconut": "https://images.unsplash.com/photo-1544378730-8b5104b18790?auto=format&fit=crop&w=500&q=80",
  "dry-coconut": "https://images.unsplash.com/photo-1544378730-8b5104b18790?auto=format&fit=crop&w=500&q=80"
};

// 4. Curated Images Map for Nuts & Seeds
const nutsSeedsImages = {
  "almonds": "https://images.unsplash.com/photo-1508061253366-f7da158b6d46?auto=format&fit=crop&w=500&q=80",
  "walnuts": "https://images.unsplash.com/photo-1543208541-0961a29a8c3d?auto=format&fit=crop&w=500&q=80",
  "cashews": "https://images.unsplash.com/photo-1536591375315-1b83886562ea?auto=format&fit=crop&w=500&q=80",
  "pistachios": "https://images.unsplash.com/photo-1528751014936-863e6e7a319c?auto=format&fit=crop&w=500&q=80",
  "pecans": "https://images.unsplash.com/photo-1543208541-0961a29a8c3d?auto=format&fit=crop&w=500&q=80",
  "hazelnuts": "https://images.unsplash.com/photo-1543208541-0961a29a8c3d?auto=format&fit=crop&w=500&q=80",
  "macadamia": "https://images.unsplash.com/photo-1543208541-0961a29a8c3d?auto=format&fit=crop&w=500&q=80",
  "brazil-nuts": "https://images.unsplash.com/photo-1543208541-0961a29a8c3d?auto=format&fit=crop&w=500&q=80",
  "pine-nuts": "https://images.unsplash.com/photo-1543208541-0961a29a8c3d?auto=format&fit=crop&w=500&q=80",
  "chestnuts": "https://images.unsplash.com/photo-1543208541-0961a29a8c3d?auto=format&fit=crop&w=500&q=80",
  "peanuts": "https://images.unsplash.com/photo-1567894340315-735d7c361db0?auto=format&fit=crop&w=500&q=80",
  "raisins": "https://images.unsplash.com/photo-1543208541-0961a29a8c3d?auto=format&fit=crop&w=500&q=80",
  "golden-raisins": "https://images.unsplash.com/photo-1543208541-0961a29a8c3d?auto=format&fit=crop&w=500&q=80",
  "black-raisins": "https://images.unsplash.com/photo-1543208541-0961a29a8c3d?auto=format&fit=crop&w=500&q=80",
  "dates-dried": "https://images.unsplash.com/photo-1543208541-0961a29a8c3d?auto=format&fit=crop&w=500&q=80",
  "figs-dried": "https://images.unsplash.com/photo-1601493700631-2b16ec4b4716?auto=format&fit=crop&w=500&q=80",
  "apricots-dried": "https://images.unsplash.com/photo-1502741224143-90386d7f8c82?auto=format&fit=crop&w=500&q=80",
  "prunes": "https://images.unsplash.com/photo-1568702846914-96b305d2aaeb?auto=format&fit=crop&w=500&q=80",
  "cranberries-dried": "https://images.unsplash.com/photo-1605697669460-2646b9487c6d?auto=format&fit=crop&w=500&q=80",
  "mango-dried": "https://images.unsplash.com/photo-1553279768-865429fa0078?auto=format&fit=crop&w=500&q=80",
  "pineapple-dried": "https://images.unsplash.com/photo-1550258987-190a2d41a8ba?auto=format&fit=crop&w=500&q=80",
  "banana-dried": "https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?auto=format&fit=crop&w=500&q=80",
  "coconut-dried": "https://images.unsplash.com/photo-1544378730-8b5104b18790?auto=format&fit=crop&w=500&q=80",
  "goji-berries-dried": "https://images.unsplash.com/photo-1543208541-0961a29a8c3d?auto=format&fit=crop&w=500&q=80",
  "mulberries-dried": "https://images.unsplash.com/photo-1596797038530-2c107229654b?auto=format&fit=crop&w=500&q=80",
  "amla-dried": "https://images.unsplash.com/photo-1563227812-0ea4c22e6cc8?auto=format&fit=crop&w=500&q=80",
  "dates-medjool": "https://images.unsplash.com/photo-1543208541-0961a29a8c3d?auto=format&fit=crop&w=500&q=80",
  "sunflower-seeds": "https://images.unsplash.com/photo-1543208541-0961a29a8c3d?auto=format&fit=crop&w=500&q=80",
  "pumpkin-seeds": "https://images.unsplash.com/photo-1543208541-0961a29a8c3d?auto=format&fit=crop&w=500&q=80",
  "sesame-seeds": "https://images.unsplash.com/photo-1543208541-0961a29a8c3d?auto=format&fit=crop&w=500&q=80",
  "chia-seeds": "https://images.unsplash.com/photo-1543208541-0961a29a8c3d?auto=format&fit=crop&w=500&q=80",
  "flax-seeds": "https://images.unsplash.com/photo-1543208541-0961a29a8c3d?auto=format&fit=crop&w=500&q=80",
  "hemp-seeds": "https://images.unsplash.com/photo-1543208541-0961a29a8c3d?auto=format&fit=crop&w=500&q=80",
  "watermelon-seeds": "https://images.unsplash.com/photo-1543208541-0961a29a8c3d?auto=format&fit=crop&w=500&q=80",
  "melon-seeds": "https://images.unsplash.com/photo-1543208541-0961a29a8c3d?auto=format&fit=crop&w=500&q=80",
  "basil-seeds": "https://images.unsplash.com/photo-1543208541-0961a29a8c3d?auto=format&fit=crop&w=500&q=80",
  "poppy-seeds": "https://images.unsplash.com/photo-1543208541-0961a29a8c3d?auto=format&fit=crop&w=500&q=80",
  "lotus-seeds": "https://images.unsplash.com/photo-1543208541-0961a29a8c3d?auto=format&fit=crop&w=500&q=80",
  "fox-nuts": "https://images.unsplash.com/photo-1543208541-0961a29a8c3d?auto=format&fit=crop&w=500&q=80"
};

// 5. Generate vegetablesData.json
const vegetableSubCategories = [
  { id: 'all', name: 'All Vegetables', image: 'https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=200&q=80' },
  { id: 'leafy-greens', name: 'Leafy Greens', image: 'https://images.unsplash.com/photo-1576045057995-568f588f82fb?auto=format&fit=crop&w=200&q=80' },
  { id: 'cruciferous-vegetables', name: 'Cruciferous', image: 'https://images.unsplash.com/photo-1459411552884-841db9b3cc2a?auto=format&fit=crop&w=200&q=80' },
  { id: 'root-vegetables', name: 'Root Vegetables', image: 'https://images.unsplash.com/photo-1598170845058-32b9d6a5da37?auto=format&fit=crop&w=200&q=80' },
  { id: 'gourds', name: 'Gourds & Squash', image: 'https://images.unsplash.com/photo-1449300079323-02e209d9d3a6?auto=format&fit=crop&w=200&q=80' },
  { id: 'peppers', name: 'Peppers', image: 'https://images.unsplash.com/photo-1563565375-f3fdfdbefa83?auto=format&fit=crop&w=200&q=80' },
  { id: 'alliums', name: 'Alliums', image: 'https://images.unsplash.com/photo-1540148426945-6cf22a6b2383?auto=format&fit=crop&w=200&q=80' },
  { id: 'tubers', name: 'Tubers & Roots', image: 'https://images.unsplash.com/photo-1518977676601-b53f82aba655?auto=format&fit=crop&w=200&q=80' },
  { id: 'legumes', name: 'Legumes & Pods', image: 'https://images.unsplash.com/photo-1587735243615-c03f25aaff15?auto=format&fit=crop&w=200&q=80' }
];

const vegetablesList = vegetablesDataset.records.map((r, i) => {
  const catSlug = r.category.toLowerCase().replace(/[^a-z0-9]+/g, '-');
  const img = vegetableImages[r.id] || 'https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=500&q=80';
  const nut = r.nutrition || {};
  const cal = nut.calories_kcal;
  const vitC = nut.vitaminC_mg;
  const fiber = nut.fiber_g;
  const pot = nut.potassium_mg;

  const nutrients = [];
  if (cal !== null && cal !== undefined) nutrients.push({ label: `Cal: ${cal} kcal`, icon: 'Droplets' });
  if (vitC !== null && vitC !== undefined) nutrients.push({ label: `Vit C: ${vitC}mg`, icon: 'Sun' });
  if (fiber !== null && fiber !== undefined) nutrients.push({ label: `Fiber: ${fiber}g`, icon: 'Leaf' });
  if (pot !== null && pot !== undefined) nutrients.push({ label: `Potassium: ${pot}mg`, icon: 'HeartPulse' });
  if (nutrients.length === 0) {
    nutrients.push({ label: 'Rich in Micronutrients', icon: 'Leaf' });
    nutrients.push({ label: 'Dietary Fiber', icon: 'Droplets' });
  }

  const score = r.id === 'spinach' ? 9.8 : Number((8.8 + ((i * 7) % 11) * 0.1).toFixed(1));

  return {
    id: r.id,
    name: r.name,
    score,
    subtitle: r.id === 'spinach' ? 'Iron & Vitamin K superfood essential for vitality & bone density' : `Nutritious ${r.category.toLowerCase()} supporting overall wellness & daily vitality`,
    category: catSlug,
    botanicalName: r.botanicalName || undefined,
    originClimate: 'Temperate & Subtropical',
    nutrients: nutrients.slice(0, 2),
    image: img,
    benefits: (r.healthBenefits && r.healthBenefits.length > 0)
      ? r.healthBenefits.map((b, idx) => ({ id: `benefit-${idx}`, name: b.replace(/\.$/, '') }))
      : [
          { id: 'immunity', name: 'Immune Defense' },
          { id: 'digestion', name: 'Digestive Health' }
        ],
    nutritionDetails: r.nutrition
  };
});

fs.writeFileSync('src/data/vegetablesData.json', JSON.stringify({ subCategories: vegetableSubCategories, vegetablesList }, null, 2), 'utf8');

const vegetablesDataTs = `import vegetablesRaw from './vegetablesData.json';
import vegetablesCatalogRaw from './vegetablesCatalog.json';
import { FruitCatalogRecord, FruitProduct, FruitSubCategory } from './fruitsData';

export const VEGETABLES_CATALOG: FruitCatalogRecord[] = vegetablesCatalogRaw.records as FruitCatalogRecord[];
export const VEGETABLES_DATASET_META = vegetablesCatalogRaw.dataset;

export const VEGETABLE_SUB_CATEGORIES: FruitSubCategory[] = vegetablesRaw.subCategories as FruitSubCategory[];
export const VEGETABLES_LIST: FruitProduct[] = vegetablesRaw.vegetablesList as FruitProduct[];
`;
fs.writeFileSync('src/data/vegetablesData.ts', vegetablesDataTs, 'utf8');
console.log('Saved src/data/vegetablesData.json & src/data/vegetablesData.ts');

// 6. Generate groceriesData.json
const grocerySubCategories = [
  { id: 'all', name: 'All Groceries', image: 'https://images.unsplash.com/photo-1586201375761-83865001e31c?auto=format&fit=crop&w=200&q=80' },
  { id: 'grains', name: 'Grains', image: 'https://images.unsplash.com/photo-1586201375761-83865001e31c?auto=format&fit=crop&w=200&q=80' },
  { id: 'millets', name: 'Millets', image: 'https://images.unsplash.com/photo-1536304993881-ff6e9eefa2a6?auto=format&fit=crop&w=200&q=80' },
  { id: 'pulses', name: 'Pulses & Dal', image: 'https://images.unsplash.com/photo-1585994192701-f1a505c817ea?auto=format&fit=crop&w=200&q=80' },
  { id: 'legumes', name: 'Legumes', image: 'https://images.unsplash.com/photo-1515543237350-b3eea1ec8082?auto=format&fit=crop&w=200&q=80' },
  { id: 'flours', name: 'Flours', image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=200&q=80' },
  { id: 'cooking-oils', name: 'Cooking Oils', image: 'https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?auto=format&fit=crop&w=200&q=80' },
  { id: 'spices', name: 'Spices', image: 'https://images.unsplash.com/photo-1615485290382-441e4d049cb5?auto=format&fit=crop&w=200&q=80' },
  { id: 'sweeteners', name: 'Sweeteners', image: 'https://images.unsplash.com/photo-1581441363689-1f3c3c414635?auto=format&fit=crop&w=200&q=80' },
  { id: 'pantry-staples', name: 'Pantry Staples', image: 'https://images.unsplash.com/photo-1544378730-8b5104b18790?auto=format&fit=crop&w=200&q=80' }
];

const groceriesList = groceriesDataset.records.map((r, i) => {
  const catSlug = r.category.toLowerCase().replace(/[^a-z0-9]+/g, '-');
  const img = groceryImages[r.id] || 'https://images.unsplash.com/photo-1586201375761-83865001e31c?auto=format&fit=crop&w=500&q=80';
  const score = Number((8.7 + ((i * 5) % 12) * 0.1).toFixed(1));

  return {
    id: r.id,
    name: r.name,
    score,
    subtitle: `Wholesome kitchen staple essential for daily wholesome cooking & balance`,
    category: catSlug,
    botanicalName: r.botanicalName || undefined,
    originClimate: 'Global Agricultural Regions',
    nutrients: [
      { label: 'Plant Nutrition', icon: 'Leaf' },
      { label: 'Energy Source', icon: 'Zap' }
    ],
    image: img,
    benefits: [
      { id: 'energy', name: 'Sustained Energy' },
      { id: 'heart', name: 'Holistic Vitality' }
    ],
    nutritionDetails: r.nutrition
  };
});

fs.writeFileSync('src/data/groceriesData.json', JSON.stringify({ subCategories: grocerySubCategories, groceriesList }, null, 2), 'utf8');

const groceriesDataTs = `import groceriesRaw from './groceriesData.json';
import groceriesCatalogRaw from './groceriesCatalog.json';
import { FruitCatalogRecord, FruitProduct, FruitSubCategory } from './fruitsData';

export const GROCERIES_CATALOG: FruitCatalogRecord[] = groceriesCatalogRaw.records as FruitCatalogRecord[];
export const GROCERIES_DATASET_META = groceriesCatalogRaw.dataset;

export const GROCERY_SUB_CATEGORIES: FruitSubCategory[] = groceriesRaw.subCategories as FruitSubCategory[];
export const GROCERIES_LIST: FruitProduct[] = groceriesRaw.groceriesList as FruitProduct[];
`;
fs.writeFileSync('src/data/groceriesData.ts', groceriesDataTs, 'utf8');
console.log('Saved src/data/groceriesData.json & src/data/groceriesData.ts');

// 7. Generate nutsSeedsData.json
const nutsSeedsSubCategories = [
  { id: 'all', name: 'All Nuts & Seeds', image: 'https://images.unsplash.com/photo-1543208541-0961a29a8c3d?auto=format&fit=crop&w=200&q=80' },
  { id: 'tree-nuts', name: 'Tree Nuts', image: 'https://images.unsplash.com/photo-1508061253366-f7da158b6d46?auto=format&fit=crop&w=200&q=80' },
  { id: 'dried-fruits', name: 'Dried Fruits', image: 'https://images.unsplash.com/photo-1601493700631-2b16ec4b4716?auto=format&fit=crop&w=200&q=80' },
  { id: 'seeds', name: 'Seeds', image: 'https://images.unsplash.com/photo-1543208541-0961a29a8c3d?auto=format&fit=crop&w=200&q=80' },
  { id: 'legumes-nuts', name: 'Legume Nuts', image: 'https://images.unsplash.com/photo-1567894340315-735d7c361db0?auto=format&fit=crop&w=200&q=80' }
];

const nutsSeedsList = nutsSeedsDataset.records.map((r, i) => {
  const catSlug = r.category.toLowerCase().replace(/[^a-z0-9]+/g, '-');
  const img = nutsSeedsImages[r.id] || 'https://images.unsplash.com/photo-1543208541-0961a29a8c3d?auto=format&fit=crop&w=500&q=80';
  const nut = r.nutrition || {};
  const cal = nut.calories_kcal;
  const fiber = nut.fiber_g;
  const protein = nut.protein_g;

  const nutrients = [];
  if (cal !== null && cal !== undefined) nutrients.push({ label: `Cal: ${cal} kcal`, icon: 'Zap' });
  if (protein !== null && protein !== undefined) nutrients.push({ label: `Protein: ${protein}g`, icon: 'Milk' });
  if (fiber !== null && fiber !== undefined) nutrients.push({ label: `Fiber: ${fiber}g`, icon: 'Leaf' });
  if (nutrients.length === 0) {
    nutrients.push({ label: 'Healthy Fats', icon: 'HeartPulse' });
    nutrients.push({ label: 'Plant Protein', icon: 'Milk' });
  }

  const score = Number((9.0 + ((i * 3) % 9) * 0.1).toFixed(1));

  return {
    id: r.id,
    name: r.name,
    score,
    subtitle: `Nutrient-dense superfood packed with healthy fats, protein, and vitality`,
    category: catSlug,
    botanicalName: r.botanicalName || undefined,
    originClimate: 'Subtropical and Mediterranean',
    nutrients: nutrients.slice(0, 2),
    image: img,
    benefits: [
      { id: 'heart', name: 'Heart Health' },
      { id: 'brain', name: 'Brain Booster' }
    ],
    nutritionDetails: r.nutrition
  };
});

fs.writeFileSync('src/data/nutsSeedsData.json', JSON.stringify({ subCategories: nutsSeedsSubCategories, nutsSeedsList }, null, 2), 'utf8');

const nutsSeedsDataTs = `import nutsSeedsRaw from './nutsSeedsData.json';
import nutsSeedsCatalogRaw from './nutsSeedsCatalog.json';
import { FruitCatalogRecord, FruitProduct, FruitSubCategory } from './fruitsData';

export const NUTS_SEEDS_CATALOG: FruitCatalogRecord[] = nutsSeedsCatalogRaw.records as FruitCatalogRecord[];
export const NUTS_SEEDS_DATASET_META = nutsSeedsCatalogRaw.dataset;

export const NUTS_SEEDS_SUB_CATEGORIES: FruitSubCategory[] = nutsSeedsRaw.subCategories as FruitSubCategory[];
export const NUTS_SEEDS_LIST: FruitProduct[] = nutsSeedsRaw.nutsSeedsList as FruitProduct[];
`;
fs.writeFileSync('src/data/nutsSeedsData.ts', nutsSeedsDataTs, 'utf8');
console.log('Saved src/data/nutsSeedsData.json & src/data/nutsSeedsData.ts');

// 8. Enrich ProductDetailsData.json with ALL items!
const existingProductDetails = JSON.parse(fs.readFileSync('src/data/productDetailsData.json', 'utf8'));

// Helper to construct full PDP record matching existing schema
function makeProductDetailRecord(record, listMap, categoryGroupName, defaultComp) {
  const listItem = listMap.get(record.id) || {};
  const nut = record.nutrition || {};
  const cal = nut.calories_kcal ?? (categoryGroupName === 'Vegetables' ? 30 : categoryGroupName === 'Nuts & Seeds' ? 550 : 250);
  const carbs = nut.carbohydrates_g ?? (categoryGroupName === 'Vegetables' ? 6 : categoryGroupName === 'Nuts & Seeds' ? 20 : 50);
  const fiber = nut.fiber_g ?? (categoryGroupName === 'Vegetables' ? 2.5 : categoryGroupName === 'Nuts & Seeds' ? 8 : 4);
  const protein = nut.protein_g ?? (categoryGroupName === 'Vegetables' ? 2 : categoryGroupName === 'Nuts & Seeds' ? 18 : 8);
  const fat = nut.fat_g ?? (categoryGroupName === 'Vegetables' ? 0.3 : categoryGroupName === 'Nuts & Seeds' ? 45 : 2);
  const sugars = nut.sugars_g ?? (categoryGroupName === 'Vegetables' ? 2 : categoryGroupName === 'Nuts & Seeds' ? 4 : 1);
  const vitC = nut.vitaminC_mg ?? (categoryGroupName === 'Vegetables' ? 25 : 1);
  const pot = nut.potassium_mg ?? (categoryGroupName === 'Vegetables' ? 300 : categoryGroupName === 'Nuts & Seeds' ? 600 : 200);

  const image = listItem.image || (record.images && record.images.hero) || 'https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=800&q=80';
  const score = listItem.score || 9.2;

  let badge = 'Super Food';
  let badgeType = 'superfood';
  if (protein > 10) {
    badge = 'High Protein';
    badgeType = 'protein';
  } else if (vitC > 30) {
    badge = 'Immunity Booster';
    badgeType = 'immunity';
  } else if (fiber > 3.0) {
    badge = 'High Fiber';
    badgeType = 'superfood';
  } else {
    badge = 'Energy Booster';
    badgeType = 'energy';
  }

  // Determine benefits array
  const benefits = [];
  if (record.healthBenefits && Array.isArray(record.healthBenefits) && record.healthBenefits.length > 0) {
    record.healthBenefits.forEach((hb, bIdx) => {
      const title = hb.replace(/\.$/, '');
      benefits.push({
        id: `benefit-${bIdx + 1}`,
        title,
        description: `${record.name} ${title.toLowerCase()}, reinforcing foundational biological resilience and cellular longevity.`,
        icon: bIdx === 0 ? 'ShieldCheck' : bIdx === 1 ? 'Heart' : bIdx === 2 ? 'Sparkles' : 'Activity',
        badgeColor: 'bg-emerald-50 text-emerald-700 dark:bg-emerald-950/60 dark:text-emerald-300',
        textColor: 'text-emerald-700 dark:text-emerald-300',
        borderColor: 'border-emerald-200 dark:border-emerald-800',
        bgColor: 'bg-emerald-50/50 dark:bg-emerald-950/30'
      });
    });
  } else {
    benefits.push(
      {
        id: 'immunity',
        title: 'Immune & Vitality Support',
        description: `Supplies bio-available micronutrients that reinforce natural immune defenses and combat cellular oxidative stress.`,
        icon: 'ShieldCheck',
        badgeColor: 'bg-emerald-50 text-emerald-700 dark:bg-emerald-950/60 dark:text-emerald-300',
        textColor: 'text-emerald-700 dark:text-emerald-300',
        borderColor: 'border-emerald-200 dark:border-emerald-800',
        bgColor: 'bg-emerald-50/50 dark:bg-emerald-950/30'
      },
      {
        id: 'heart',
        title: 'Cardiovascular Wellness',
        description: `Contains natural plant compounds and essential electrolytes that support healthy circulation and balanced blood pressure.`,
        icon: 'Heart',
        badgeColor: 'bg-rose-50 text-rose-700 dark:bg-rose-950/60 dark:text-rose-300',
        textColor: 'text-rose-700 dark:text-rose-300',
        borderColor: 'border-rose-200 dark:border-rose-800',
        bgColor: 'bg-rose-50/50 dark:bg-rose-950/30'
      },
      {
        id: 'digestion',
        title: 'Metabolic & Digestive Balance',
        description: `Delivers beneficial dietary fibers that sustain gut microbiome balance and promote smooth digestive function.`,
        icon: 'Activity',
        badgeColor: 'bg-amber-50 text-amber-700 dark:bg-amber-950/60 dark:text-amber-300',
        textColor: 'text-amber-700 dark:text-amber-300',
        borderColor: 'border-amber-200 dark:border-amber-800',
        bgColor: 'bg-amber-50/50 dark:bg-amber-950/30'
      }
    );
  }

  return {
    id: record.id,
    name: record.name,
    category: categoryGroupName,
    subCategory: record.category,
    botanicalName: record.botanicalName || undefined,
    commonNames: record.commonNames || undefined,
    originClimate: categoryGroupName === 'Vegetables' ? 'Temperate & Subtropical' : categoryGroupName === 'Groceries' ? 'Traditional Cultivation' : 'Warm Temperate & Arid',
    badge,
    badgeType,
    views: `${Math.floor(10 + Math.random() * 8)}.${Math.floor(Math.random() * 9)}k views`,
    rating: score,
    reviewCount: 75 + ((record.name.length * 11) % 90),
    image,
    description: record.description || `${record.name} (${record.botanicalName || record.category}) is a prized, nutrient-dense component of a wholesome diet. Revered for its natural purity and nutritional profile, it delivers bioavailable micronutrients and dietary goodness for sustained daily well-being.`,
    type: categoryGroupName,
    origin: 'Cultivated Worldwide',
    calories: `${cal} kcal (per 100g raw)`,
    bestFor: 'Digestive Balance, Cellular Defense & Daily Vitality',
    benefits,
    nutritionRings: [
      { label: 'Energy / Cal', amount: `${cal} kcal`, percentage: Math.min(95, Math.max(20, Math.round((cal / 400) * 100))), color: 'text-amber-500 stroke-amber-500' },
      { label: 'Protein', amount: `${protein} g`, percentage: Math.min(95, Math.max(15, Math.round((protein / 20) * 100))), color: 'text-sky-500 stroke-sky-500' },
      { label: 'Fiber', amount: `${fiber} g`, percentage: Math.min(95, Math.max(15, Math.round((fiber / 10) * 100))), color: 'text-emerald-500 stroke-emerald-500' },
      { label: 'Potassium', amount: `${pot} mg`, percentage: Math.min(95, Math.max(15, Math.round((pot / 800) * 100))), color: 'text-rose-500 stroke-rose-500' }
    ],
    quickNutrients: [
      { label: 'Calories', value: `${cal} kcal` },
      { label: 'Carbs', value: `${carbs} g` },
      { label: 'Protein', value: `${protein} g` },
      { label: 'Fiber', value: `${fiber} g` }
    ],
    bestTime: {
      morning: 'Consume in morning meals or smoothies for steady, clean metabolic fuel throughout the day.',
      evening: 'Incorporate lightly into evening preparations to support restorative cellular repair.'
    },
    healthScore: {
      overall: score,
      ratingText: 'Highly Recommended Dietary Choice',
      breakdown: {
        heart: 92,
        brain: 88,
        energy: 91,
        immunity: 93,
        skin: 89
      }
    },
    howToEat: {
      title: `Best Ways to Enjoy ${record.name}`,
      tips: [
        'Store in a cool, dry, well-ventilated space away from direct sunlight.',
        'Incorporate into diverse, balanced culinary recipes alongside fresh whole produce.',
        'Enjoy mindful portion sizes to maximize biological nutrient uptake.'
      ]
    },
    cautions: record.cautions || [
      'Store appropriately to retain natural freshness and essential nutrients.',
      'Check for personal food sensitivities when introducing new ingredients.'
    ],
    selectionTips: record.selectionTips || `Choose vibrant, unblemished, naturally aromatic specimens for the freshest nutritional value.`,
    comparison: {
      target: {
        id: record.id,
        name: record.name,
        serving: 'Per 100g raw',
        image,
        calories: cal,
        protein: `${protein} g`,
        fiber: `${fiber} g`,
        omega3: fat > 10 ? 'High' : 'Moderate',
        bestFor: 'Daily Wellness & Nutrition'
      },
      competitor: {
        id: defaultComp.id,
        name: defaultComp.name,
        serving: 'Per 100g raw',
        image: defaultComp.image,
        calories: defaultComp.calories,
        protein: defaultComp.protein,
        fiber: defaultComp.fiber,
        omega3: defaultComp.omega3,
        bestFor: defaultComp.bestFor
      }
    },
    recipes: [
      {
        id: `recipe-${record.id}-1`,
        title: `Fresh Wholesome ${record.name} Bowl`,
        time: '15 mins',
        servings: '2 servings',
        difficulty: 'Easy',
        image
      }
    ],
    similarFoods: [],
    faqs: [
      {
        question: `What are the primary health benefits of ${record.name}?`,
        answer: `${record.name} offers a potent profile of essential vitamins, dietary fiber, and plant-derived antioxidants that promote sustained cellular energy, digestion, and balanced immunity.`
      },
      {
        question: `How should ${record.name} be stored for maximum freshness?`,
        answer: record.storageTips || `Keep in an airtight container or breathable crisper drawer in a cool, dry place to maintain peak flavor, texture, and nutritional value.`
      }
    ]
  };
}

// Build list lookup maps
const vegListMap = new Map();
vegetablesList.forEach((v) => vegListMap.set(v.id, v));

const grocListMap = new Map();
groceriesList.forEach((g) => grocListMap.set(g.id, g));

const nutsListMap = new Map();
nutsSeedsList.forEach((n) => nutsListMap.set(n.id, n));

// Add all vegetables to productDetails
vegetablesDataset.records.forEach((r) => {
  existingProductDetails[r.id] = makeProductDetailRecord(
    r,
    vegListMap,
    'Vegetables',
    {
      id: 'broccoli',
      name: 'Broccoli',
      image: vegetableImages['broccoli'],
      calories: 34,
      protein: '2.8 g',
      fiber: '2.6 g',
      omega3: 'Moderate',
      bestFor: 'Cellular Defense'
    }
  );
});

// Specifically customize spinach for peak richness using the detailed dataset record
existingProductDetails['spinach'] = {
  ...existingProductDetails['spinach'],
  name: 'Spinach',
  category: 'Vegetables',
  subCategory: 'Leafy greens',
  botanicalName: 'Spinacia oleracea',
  commonNames: ['Palak'],
  badge: 'Super Food',
  badgeType: 'superfood',
  views: '24.8k views',
  rating: 4.9,
  reviewCount: 184,
  image: 'https://images.unsplash.com/photo-1576045057995-568f588f82fb?auto=format&fit=crop&w=800&q=80',
  description: 'Spinach (Spinacia oleracea), also known as Palak, is a world-renowned nutrient-dense leafy green. Revered for its deep emerald leaves, it provides exceptional concentrations of vitamin K, folate, bioavailable plant iron, vitamin A, and active lutein antioxidants that support bone density, cardiovascular integrity, and cognitive vitality.',
  type: 'Leafy green',
  origin: 'Ancient Persia (Central & Western Asia)',
  calories: '23 kcal (per 100g raw)',
  bestFor: 'Bone Strength, Immune Defense, Vision & Cellular Longevity',
  benefits: [
    {
      id: 'vitamin-k',
      title: 'Provides Vitamin K',
      description: 'Essential for biological blood coagulation and the activation of osteocalcin, supporting dense, healthy bone matrix formation.',
      icon: 'ShieldCheck',
      badgeColor: 'bg-emerald-50 text-emerald-700 dark:bg-emerald-950/60 dark:text-emerald-300',
      textColor: 'text-emerald-700 dark:text-emerald-300',
      borderColor: 'border-emerald-200 dark:border-emerald-800',
      bgColor: 'bg-emerald-50/50 dark:bg-emerald-950/30'
    },
    {
      id: 'folate',
      title: 'Provides Folate (Vitamin B9)',
      description: 'Supports cellular division, DNA synthesis, and red blood cell production, vital for overall energy and tissue repair.',
      icon: 'Heart',
      badgeColor: 'bg-rose-50 text-rose-700 dark:bg-rose-950/60 dark:text-rose-300',
      textColor: 'text-rose-700 dark:text-rose-300',
      borderColor: 'border-rose-200 dark:border-rose-800',
      bgColor: 'bg-rose-50/50 dark:bg-rose-950/30'
    },
    {
      id: 'vitamin-a',
      title: 'Provides Vitamin A & Lutein',
      description: 'Contains high beta-carotene and lutein carotenoids that nourish ocular tissue, reduce oxidative stress, and promote radiant skin.',
      icon: 'Sparkles',
      badgeColor: 'bg-purple-50 text-purple-700 dark:bg-purple-950/60 dark:text-purple-300',
      textColor: 'text-purple-700 dark:text-purple-300',
      borderColor: 'border-purple-200 dark:border-purple-800',
      bgColor: 'bg-purple-50/50 dark:bg-purple-950/30'
    },
    {
      id: 'vitamin-c',
      title: 'Provides Vitamin C',
      description: 'Delivers 28.1mg of Vitamin C per 100g, invigorating immune white blood cell activity and enhancing non-heme iron bioavailability.',
      icon: 'Activity',
      badgeColor: 'bg-amber-50 text-amber-700 dark:bg-amber-950/60 dark:text-amber-300',
      textColor: 'text-amber-700 dark:text-amber-300',
      borderColor: 'border-amber-200 dark:border-amber-800',
      bgColor: 'bg-amber-50/50 dark:bg-amber-950/30'
    },
    {
      id: 'dietary-fiber',
      title: 'Provides Dietary Fiber',
      description: 'Supplies 2.2g of gentle dietary fiber per 100g, supporting smooth digestion, steady glucose absorption, and gut flora diversity.',
      icon: 'Droplets',
      badgeColor: 'bg-sky-50 text-sky-700 dark:bg-sky-950/60 dark:text-sky-300',
      textColor: 'text-sky-700 dark:text-sky-300',
      borderColor: 'border-sky-200 dark:border-sky-800',
      bgColor: 'bg-sky-50/50 dark:bg-sky-950/30'
    }
  ],
  nutritionRings: [
    { label: 'Vit C', amount: '28.1 mg', percentage: 90, color: 'text-emerald-500 stroke-emerald-500' },
    { label: 'Protein', amount: '2.86 g', percentage: 70, color: 'text-sky-500 stroke-sky-500' },
    { label: 'Potassium', amount: '558 mg', percentage: 88, color: 'text-rose-500 stroke-rose-500' },
    { label: 'Fiber', amount: '2.2 g', percentage: 60, color: 'text-amber-500 stroke-amber-500' }
  ],
  quickNutrients: [
    { label: 'Calories', value: '23 kcal' },
    { label: 'Potassium', value: '558 mg' },
    { label: 'Protein', value: '2.86 g' },
    { label: 'Fiber', value: '2.2 g' }
  ],
  healthScore: {
    overall: 9.8,
    ratingText: 'Supreme Nutrient-Density Grade A+',
    breakdown: {
      heart: 97,
      brain: 95,
      energy: 92,
      immunity: 98,
      skin: 96
    }
  },
  cautions: spinachRecord.cautions,
  selectionTips: spinachRecord.selectionTips,
  sources: spinachRecord.sources,
  seo: spinachRecord.seo
};

// Add all groceries to productDetails
groceriesDataset.records.forEach((r) => {
  existingProductDetails[r.id] = makeProductDetailRecord(
    r,
    grocListMap,
    'Groceries',
    {
      id: 'oats',
      name: 'Oats',
      image: groceryImages['oats'],
      calories: 389,
      protein: '16.9 g',
      fiber: '10.6 g',
      omega3: 'Moderate',
      bestFor: 'Sustained Cardio Energy'
    }
  );
});

// Add all nuts & seeds to productDetails
nutsSeedsDataset.records.forEach((r) => {
  existingProductDetails[r.id] = makeProductDetailRecord(
    r,
    nutsListMap,
    'Nuts & Seeds',
    {
      id: 'almonds',
      name: 'Almonds',
      image: nutsSeedsImages['almonds'],
      calories: 579,
      protein: '21.2 g',
      fiber: '12.5 g',
      omega3: 'Vitamin E Rich',
      bestFor: 'Brain & Heart Health'
    }
  );
});

// Add similar foods linkages
const allPdpKeys = Object.keys(existingProductDetails);
allPdpKeys.forEach((key) => {
  const item = existingProductDetails[key];
  if (!item.similarFoods || item.similarFoods.length === 0) {
    const sameCat = allPdpKeys
      .filter((k) => k !== key && existingProductDetails[k].category === item.category)
      .slice(0, 6)
      .map((k) => ({
        id: k,
        name: existingProductDetails[k].name,
        rating: existingProductDetails[k].rating || 9.0,
        image: existingProductDetails[k].image
      }));
    item.similarFoods = sameCat;
  }
});

fs.writeFileSync('src/data/productDetailsData.json', JSON.stringify(existingProductDetails, null, 2), 'utf8');
console.log('Saved src/data/productDetailsData.json with total items:', Object.keys(existingProductDetails).length);

// 9. Update searchResultsData.json
const searchDataRaw = JSON.parse(fs.readFileSync('src/data/searchResultsData.json', 'utf8'));

const allResults = [
  ...searchDataRaw.results,
  // Add key vegetables
  {
    id: 'spinach',
    name: 'Spinach (Palak)',
    subtitle: 'Rich in Vitamin K, Iron, Folate & Antioxidants',
    category: 'VEGETABLES',
    categoryId: 'vegetables',
    type: 'food',
    score: 9.8,
    benefits: ['immunity', 'heart', 'bone'],
    foodType: 'raw',
    dietTypes: ['veg', 'vegan', 'gf', 'keto'],
    image: vegetableImages['spinach'],
    actionText: 'View Details'
  },
  {
    id: 'broccoli',
    name: 'Broccoli',
    subtitle: 'Potent sulforaphane, Vitamin C & fiber superfood',
    category: 'VEGETABLES',
    categoryId: 'vegetables',
    type: 'food',
    score: 9.5,
    benefits: ['immunity', 'weight', 'heart'],
    foodType: 'raw',
    dietTypes: ['veg', 'vegan', 'gf', 'keto'],
    image: vegetableImages['broccoli'],
    actionText: 'View Details'
  },
  {
    id: 'carrot',
    name: 'Carrot',
    subtitle: 'Rich in beta-carotene for vision and glowing skin',
    category: 'VEGETABLES',
    categoryId: 'vegetables',
    type: 'food',
    score: 9.3,
    benefits: ['skin', 'immunity'],
    foodType: 'raw',
    dietTypes: ['veg', 'vegan', 'gf'],
    image: vegetableImages['carrot'],
    actionText: 'View Details'
  },
  {
    id: 'tomato',
    name: 'Tomato',
    subtitle: 'Abundant lycopene antioxidant supporting heart health',
    category: 'VEGETABLES',
    categoryId: 'vegetables',
    type: 'food',
    score: 9.1,
    benefits: ['heart', 'skin'],
    foodType: 'raw',
    dietTypes: ['veg', 'vegan', 'gf'],
    image: vegetableImages['tomato'],
    actionText: 'View Details'
  },
  {
    id: 'beetroot',
    name: 'Beetroot',
    subtitle: 'Natural nitrates supporting blood flow and athletic stamina',
    category: 'VEGETABLES',
    categoryId: 'vegetables',
    type: 'food',
    score: 9.2,
    benefits: ['heart', 'weight'],
    foodType: 'raw',
    dietTypes: ['veg', 'vegan', 'gf'],
    image: vegetableImages['beetroot'],
    actionText: 'View Details'
  },
  // Add key groceries
  {
    id: 'white-rice',
    name: 'White Rice',
    subtitle: 'Classic easily digestible daily energy staple',
    category: 'GROCERIES',
    categoryId: 'groceries',
    type: 'food',
    score: 8.5,
    benefits: ['energy'],
    foodType: 'cooked',
    dietTypes: ['veg', 'vegan', 'gf'],
    image: groceryImages['white-rice'],
    actionText: 'View Details'
  },
  {
    id: 'basmati-rice',
    name: 'Basmati Rice',
    subtitle: 'Aromatic long-grain rice with delicate texture',
    category: 'GROCERIES',
    categoryId: 'groceries',
    type: 'food',
    score: 8.8,
    benefits: ['energy'],
    foodType: 'cooked',
    dietTypes: ['veg', 'vegan', 'gf'],
    image: groceryImages['basmati-rice'],
    actionText: 'View Details'
  },
  {
    id: 'oats',
    name: 'Oats',
    subtitle: 'Soluble beta-glucan fiber supporting heart and cholesterol balance',
    category: 'GROCERIES',
    categoryId: 'groceries',
    type: 'food',
    score: 9.5,
    benefits: ['heart', 'weight', 'digestion'],
    foodType: 'raw',
    dietTypes: ['veg', 'vegan', 'gf'],
    image: groceryImages['oats'],
    actionText: 'View Details'
  },
  {
    id: 'toor-dal',
    name: 'Toor Dal (Pigeon Pea)',
    subtitle: 'Protein and dietary fiber-rich staple pulse',
    category: 'GROCERIES',
    categoryId: 'groceries',
    type: 'food',
    score: 9.0,
    benefits: ['energy', 'heart'],
    foodType: 'raw',
    dietTypes: ['veg', 'vegan', 'gf'],
    image: groceryImages['toor-dal'],
    actionText: 'View Details'
  },
  {
    id: 'turmeric',
    name: 'Turmeric',
    subtitle: 'Golden spice containing curcumin for anti-inflammatory support',
    category: 'GROCERIES',
    categoryId: 'groceries',
    type: 'food',
    score: 9.7,
    benefits: ['immunity', 'heart', 'brain'],
    foodType: 'raw',
    dietTypes: ['veg', 'vegan', 'gf', 'keto'],
    image: groceryImages['turmeric'],
    actionText: 'View Details'
  },
  {
    id: 'olive-oil',
    name: 'Olive Oil (Extra Virgin)',
    subtitle: 'Rich in monounsaturated fats & polyphenol antioxidants',
    category: 'GROCERIES',
    categoryId: 'groceries',
    type: 'food',
    score: 9.6,
    benefits: ['heart', 'brain', 'skin'],
    foodType: 'raw',
    dietTypes: ['veg', 'vegan', 'gf', 'keto'],
    image: groceryImages['olive-oil'],
    actionText: 'View Details'
  },
  // Add key nuts & seeds
  {
    id: 'walnuts',
    name: 'Walnuts',
    subtitle: 'Supreme plant Omega-3 ALA powerhouse for brain & heart',
    category: 'NUTS & SEEDS',
    categoryId: 'nuts-seeds',
    type: 'food',
    score: 9.6,
    benefits: ['brain', 'heart'],
    foodType: 'raw',
    dietTypes: ['veg', 'vegan', 'gf', 'keto'],
    image: nutsSeedsImages['walnuts'],
    actionText: 'View Details'
  },
  {
    id: 'chia-seeds',
    name: 'Chia Seeds',
    subtitle: 'Tiny powerhouses packed with omega-3, fiber & calcium',
    category: 'NUTS & SEEDS',
    categoryId: 'nuts-seeds',
    type: 'food',
    score: 9.6,
    benefits: ['heart', 'weight', 'digestion'],
    foodType: 'raw',
    dietTypes: ['veg', 'vegan', 'gf', 'keto'],
    image: nutsSeedsImages['chia-seeds'],
    actionText: 'View Details'
  },
  {
    id: 'flax-seeds',
    name: 'Flax Seeds',
    subtitle: 'High lignan and omega-3 fiber for cardiovascular vitality',
    category: 'NUTS & SEEDS',
    categoryId: 'nuts-seeds',
    type: 'food',
    score: 9.4,
    benefits: ['heart', 'digestion'],
    foodType: 'raw',
    dietTypes: ['veg', 'vegan', 'gf', 'keto'],
    image: nutsSeedsImages['flax-seeds'],
    actionText: 'View Details'
  }
];

// Remove duplicate ids
const uniqueResultsMap = new Map();
allResults.forEach((item) => {
  uniqueResultsMap.set(item.id, item);
});

searchDataRaw.results = Array.from(uniqueResultsMap.values());
searchDataRaw.totalResults = searchDataRaw.results.length;

// Ensure category options include all categories
searchDataRaw.categories = [
  { id: 'all', label: 'All Categories', count: searchDataRaw.totalResults },
  { id: 'fruits', label: 'Fruits', count: 77 },
  { id: 'vegetables', label: 'Vegetables', count: 67 },
  { id: 'groceries', label: 'Groceries', count: 85 },
  { id: 'nuts-seeds', label: 'Nuts & Seeds', count: 38 }
];

fs.writeFileSync('src/data/searchResultsData.json', JSON.stringify(searchDataRaw, null, 2), 'utf8');
console.log('Saved src/data/searchResultsData.json with', searchDataRaw.results.length, 'results.');

console.log('--- ALL DATA CATALOGS GENERATED SUCCESSFULLY ---');
