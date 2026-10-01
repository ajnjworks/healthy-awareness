import fs from 'fs';
import { fishesDataset } from './dataFishes.mjs';
import { meatsDataset } from './dataMeats.mjs';
import { eggsDataset } from './dataEggs.mjs';
import { otherNonVegDataset } from './dataOtherNonVeg.mjs';

// Curated Unsplash images for fishes & seafood
const fishImages = {
  "salmon": "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?auto=format&fit=crop&w=500&q=80",
  "tuna": "https://images.unsplash.com/photo-1544943910-4c1dc44a0eb5?auto=format&fit=crop&w=500&q=80",
  "sardine": "https://images.unsplash.com/photo-1534483509719-3feaee7c30da?auto=format&fit=crop&w=500&q=80",
  "anchovy": "https://images.unsplash.com/photo-1534483509719-3feaee7c30da?auto=format&fit=crop&w=500&q=80",
  "mackerel": "https://images.unsplash.com/photo-1534483509719-3feaee7c30da?auto=format&fit=crop&w=500&q=80",
  "indian-mackerel": "https://images.unsplash.com/photo-1534483509719-3feaee7c30da?auto=format&fit=crop&w=500&q=80",
  "pomfret": "https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=500&q=80",
  "silver-pomfret": "https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=500&q=80",
  "black-pomfret": "https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=500&q=80",
  "rohu": "https://images.unsplash.com/photo-1535591273668-578e31182c4f?auto=format&fit=crop&w=500&q=80",
  "catla": "https://images.unsplash.com/photo-1535591273668-578e31182c4f?auto=format&fit=crop&w=500&q=80",
  "mrigal": "https://images.unsplash.com/photo-1535591273668-578e31182c4f?auto=format&fit=crop&w=500&q=80",
  "hilsa": "https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=500&q=80",
  "pearl-spot": "https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=500&q=80",
  "tilapia": "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?auto=format&fit=crop&w=500&q=80",
  "asian-seabass": "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?auto=format&fit=crop&w=500&q=80",
  "red-snapper": "https://images.unsplash.com/photo-1534483509719-3feaee7c30da?auto=format&fit=crop&w=500&q=80",
  "grouper": "https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=500&q=80",
  "barramundi": "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?auto=format&fit=crop&w=500&q=80",
  "cod": "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?auto=format&fit=crop&w=500&q=80",
  "haddock": "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?auto=format&fit=crop&w=500&q=80",
  "hake": "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?auto=format&fit=crop&w=500&q=80",
  "pollock": "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?auto=format&fit=crop&w=500&q=80",
  "trout": "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?auto=format&fit=crop&w=500&q=80",
  "rainbow-trout": "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?auto=format&fit=crop&w=500&q=80",
  "carp": "https://images.unsplash.com/photo-1535591273668-578e31182c4f?auto=format&fit=crop&w=500&q=80",
  "common-carp": "https://images.unsplash.com/photo-1535591273668-578e31182c4f?auto=format&fit=crop&w=500&q=80",
  "grass-carp": "https://images.unsplash.com/photo-1535591273668-578e31182c4f?auto=format&fit=crop&w=500&q=80",
  "milkfish": "https://images.unsplash.com/photo-1535591273668-578e31182c4f?auto=format&fit=crop&w=500&q=80",
  "mahi-mahi": "https://images.unsplash.com/photo-1544943910-4c1dc44a0eb5?auto=format&fit=crop&w=500&q=80",
  "swordfish": "https://images.unsplash.com/photo-1544943910-4c1dc44a0eb5?auto=format&fit=crop&w=500&q=80",
  "marlin": "https://images.unsplash.com/photo-1544943910-4c1dc44a0eb5?auto=format&fit=crop&w=500&q=80",
  "eel": "https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=500&q=80",
  "ribbonfish": "https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=500&q=80",
  "indian-ribbonfish": "https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=500&q=80",
  "bombay-duck": "https://images.unsplash.com/photo-1534483509719-3feaee7c30da?auto=format&fit=crop&w=500&q=80",
  "rawas": "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?auto=format&fit=crop&w=500&q=80",
  "bangda": "https://images.unsplash.com/photo-1534483509719-3feaee7c30da?auto=format&fit=crop&w=500&q=80",
  "vanjaram": "https://images.unsplash.com/photo-1544943910-4c1dc44a0eb5?auto=format&fit=crop&w=500&q=80",
  "king-fish": "https://images.unsplash.com/photo-1544943910-4c1dc44a0eb5?auto=format&fit=crop&w=500&q=80",
  "surmai": "https://images.unsplash.com/photo-1544943910-4c1dc44a0eb5?auto=format&fit=crop&w=500&q=80",
  "kora-fish": "https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=500&q=80",
  "nethili": "https://images.unsplash.com/photo-1534483509719-3feaee7c30da?auto=format&fit=crop&w=500&q=80",
  "mathi": "https://images.unsplash.com/photo-1534483509719-3feaee7c30da?auto=format&fit=crop&w=500&q=80",
  "parava-fish": "https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=500&q=80",
  "crab": "https://images.unsplash.com/photo-1559827291-72ee739d0d9a?auto=format&fit=crop&w=500&q=80",
  "blue-crab": "https://images.unsplash.com/photo-1559827291-72ee739d0d9a?auto=format&fit=crop&w=500&q=80",
  "mud-crab": "https://images.unsplash.com/photo-1559827291-72ee739d0d9a?auto=format&fit=crop&w=500&q=80",
  "king-crab": "https://images.unsplash.com/photo-1559827291-72ee739d0d9a?auto=format&fit=crop&w=500&q=80",
  "lobster": "https://images.unsplash.com/photo-1559827291-72ee739d0d9a?auto=format&fit=crop&w=500&q=80",
  "rock-lobster": "https://images.unsplash.com/photo-1559827291-72ee739d0d9a?auto=format&fit=crop&w=500&q=80",
  "prawn": "https://images.unsplash.com/photo-1565680018434-b513d5e5fd47?auto=format&fit=crop&w=500&q=80",
  "indian-white-shrimp": "https://images.unsplash.com/photo-1565680018434-b513d5e5fd47?auto=format&fit=crop&w=500&q=80",
  "tiger-shrimp": "https://images.unsplash.com/photo-1565680018434-b513d5e5fd47?auto=format&fit=crop&w=500&q=80",
  "vannamei-shrimp": "https://images.unsplash.com/photo-1565680018434-b513d5e5fd47?auto=format&fit=crop&w=500&q=80",
  "shrimp": "https://images.unsplash.com/photo-1565680018434-b513d5e5fd47?auto=format&fit=crop&w=500&q=80",
  "scallop": "https://images.unsplash.com/photo-1534483509719-3feaee7c30da?auto=format&fit=crop&w=500&q=80",
  "oyster": "https://images.unsplash.com/photo-1534483509719-3feaee7c30da?auto=format&fit=crop&w=500&q=80",
  "mussel": "https://images.unsplash.com/photo-1534483509719-3feaee7c30da?auto=format&fit=crop&w=500&q=80",
  "clam": "https://images.unsplash.com/photo-1534483509719-3feaee7c30da?auto=format&fit=crop&w=500&q=80",
  "squid": "https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=500&q=80",
  "cuttlefish": "https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=500&q=80",
  "octopus": "https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=500&q=80",
  "fish-roe": "https://images.unsplash.com/photo-1534483509719-3feaee7c30da?auto=format&fit=crop&w=500&q=80",
  "salmon-roe": "https://images.unsplash.com/photo-1534483509719-3feaee7c30da?auto=format&fit=crop&w=500&q=80",
  "tuna-roe": "https://images.unsplash.com/photo-1534483509719-3feaee7c30da?auto=format&fit=crop&w=500&q=80",
  "prawn-roe": "https://images.unsplash.com/photo-1565680018434-b513d5e5fd47?auto=format&fit=crop&w=500&q=80",
  "crab-meat": "https://images.unsplash.com/photo-1559827291-72ee739d0d9a?auto=format&fit=crop&w=500&q=80",
  "crab-roe": "https://images.unsplash.com/photo-1559827291-72ee739d0d9a?auto=format&fit=crop&w=500&q=80",
  "snail": "https://images.unsplash.com/photo-1534483509719-3feaee7c30da?auto=format&fit=crop&w=500&q=80"
};

// Curated Unsplash images for meats & poultry
const meatImages = {
  "chicken": "https://images.unsplash.com/photo-1587593810167-a84920ea0781?auto=format&fit=crop&w=500&q=80",
  "chicken-breast": "https://images.unsplash.com/photo-1604503468506-a8da13d82791?auto=format&fit=crop&w=500&q=80",
  "chicken-breast-skinless": "https://images.unsplash.com/photo-1604503468506-a8da13d82791?auto=format&fit=crop&w=500&q=80",
  "chicken-thigh": "https://images.unsplash.com/photo-1587593810167-a84920ea0781?auto=format&fit=crop&w=500&q=80",
  "chicken-drumstick": "https://images.unsplash.com/photo-1587593810167-a84920ea0781?auto=format&fit=crop&w=500&q=80",
  "chicken-wing": "https://images.unsplash.com/photo-1587593810167-a84920ea0781?auto=format&fit=crop&w=500&q=80",
  "chicken-leg": "https://images.unsplash.com/photo-1587593810167-a84920ea0781?auto=format&fit=crop&w=500&q=80",
  "chicken-liver": "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=500&q=80",
  "chicken-gizzard": "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=500&q=80",
  "chicken-heart": "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=500&q=80",
  "chicken-neck": "https://images.unsplash.com/photo-1587593810167-a84920ea0781?auto=format&fit=crop&w=500&q=80",
  "chicken-feet": "https://images.unsplash.com/photo-1587593810167-a84920ea0781?auto=format&fit=crop&w=500&q=80",
  "turkey": "https://images.unsplash.com/photo-1574672280600-4accfa5b6f98?auto=format&fit=crop&w=500&q=80",
  "turkey-breast": "https://images.unsplash.com/photo-1574672280600-4accfa5b6f98?auto=format&fit=crop&w=500&q=80",
  "turkey-thigh": "https://images.unsplash.com/photo-1574672280600-4accfa5b6f98?auto=format&fit=crop&w=500&q=80",
  "duck": "https://images.unsplash.com/photo-1516467508483-a7212febe31a?auto=format&fit=crop&w=500&q=80",
  "duck-breast": "https://images.unsplash.com/photo-1516467508483-a7212febe31a?auto=format&fit=crop&w=500&q=80",
  "duck-leg": "https://images.unsplash.com/photo-1516467508483-a7212febe31a?auto=format&fit=crop&w=500&q=80",
  "goat-meat": "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=500&q=80",
  "mutton": "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=500&q=80",
  "mutton-liver": "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=500&q=80",
  "mutton-kidney": "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=500&q=80",
  "mutton-brain": "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=500&q=80",
  "mutton-heart": "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=500&q=80",
  "mutton-tongue": "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=500&q=80",
  "lamb": "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=500&q=80",
  "lamb-leg": "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=500&q=80",
  "lamb-loin": "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=500&q=80",
  "lamb-shoulder": "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=500&q=80",
  "lamb-liver": "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=500&q=80",
  "beef": "https://images.unsplash.com/photo-1558030006-450675393462?auto=format&fit=crop&w=500&q=80",
  "beef-tenderloin": "https://images.unsplash.com/photo-1558030006-450675393462?auto=format&fit=crop&w=500&q=80",
  "beef-sirloin": "https://images.unsplash.com/photo-1558030006-450675393462?auto=format&fit=crop&w=500&q=80",
  "beef-ribeye": "https://images.unsplash.com/photo-1558030006-450675393462?auto=format&fit=crop&w=500&q=80",
  "beef-brisket": "https://images.unsplash.com/photo-1558030006-450675393462?auto=format&fit=crop&w=500&q=80",
  "beef-chuck": "https://images.unsplash.com/photo-1558030006-450675393462?auto=format&fit=crop&w=500&q=80",
  "beef-round": "https://images.unsplash.com/photo-1558030006-450675393462?auto=format&fit=crop&w=500&q=80",
  "ground-beef": "https://images.unsplash.com/photo-1588168333986-5078d3ae3976?auto=format&fit=crop&w=500&q=80",
  "beef-liver": "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=500&q=80",
  "beef-heart": "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=500&q=80",
  "beef-kidney": "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=500&q=80",
  "beef-tongue": "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=500&q=80",
  "pork": "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=500&q=80",
  "pork-loin": "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=500&q=80",
  "pork-tenderloin": "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=500&q=80",
  "pork-shoulder": "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=500&q=80",
  "pork-belly": "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=500&q=80",
  "pork-chop": "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=500&q=80",
  "ground-pork": "https://images.unsplash.com/photo-1588168333986-5078d3ae3976?auto=format&fit=crop&w=500&q=80",
  "pork-liver": "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=500&q=80",
  "pork-heart": "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=500&q=80",
  "pork-kidney": "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=500&q=80",
  "venison": "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=500&q=80",
  "rabbit": "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=500&q=80",
  "quail-meat": "https://images.unsplash.com/photo-1587593810167-a84920ea0781?auto=format&fit=crop&w=500&q=80",
  "pheasant": "https://images.unsplash.com/photo-1587593810167-a84920ea0781?auto=format&fit=crop&w=500&q=80",
  "bison": "https://images.unsplash.com/photo-1558030006-450675393462?auto=format&fit=crop&w=500&q=80",
  "buffalo-meat": "https://images.unsplash.com/photo-1558030006-450675393462?auto=format&fit=crop&w=500&q=80",
  "frog-legs": "https://images.unsplash.com/photo-1587593810167-a84920ea0781?auto=format&fit=crop&w=500&q=80"
};

// Curated Unsplash images for eggs
const eggImages = {
  "chicken-egg": "https://images.unsplash.com/photo-1582722872445-44dc5f7e3c8f?auto=format&fit=crop&w=500&q=80",
  "chicken-egg-white": "https://images.unsplash.com/photo-1582722872445-44dc5f7e3c8f?auto=format&fit=crop&w=500&q=80",
  "chicken-egg-yolk": "https://images.unsplash.com/photo-1582722872445-44dc5f7e3c8f?auto=format&fit=crop&w=500&q=80",
  "duck-egg": "https://images.unsplash.com/photo-1582722872445-44dc5f7e3c8f?auto=format&fit=crop&w=500&q=80",
  "quail-egg": "https://images.unsplash.com/photo-1516467508483-a7212febe31a?auto=format&fit=crop&w=500&q=80",
  "goose-egg": "https://images.unsplash.com/photo-1582722872445-44dc5f7e3c8f?auto=format&fit=crop&w=500&q=80",
  "turkey-egg": "https://images.unsplash.com/photo-1582722872445-44dc5f7e3c8f?auto=format&fit=crop&w=500&q=80",
  "pigeon-egg": "https://images.unsplash.com/photo-1516467508483-a7212febe31a?auto=format&fit=crop&w=500&q=80",
  "country-chicken-egg": "https://images.unsplash.com/photo-1582722872445-44dc5f7e3c8f?auto=format&fit=crop&w=500&q=80",
  "desi-chicken-egg": "https://images.unsplash.com/photo-1582722872445-44dc5f7e3c8f?auto=format&fit=crop&w=500&q=80"
};

// Subcategory categorizers
function getFishSubCategory(name, id) {
  const n = (name + ' ' + id).toLowerCase();
  if (n.includes('roe')) return 'Roe & Caviar';
  if (n.includes('crab') || n.includes('lobster') || n.includes('prawn') || n.includes('shrimp')) return 'Crustaceans';
  if (n.includes('squid') || n.includes('cuttlefish') || n.includes('octopus') || n.includes('clam') || n.includes('mussel') || n.includes('oyster') || n.includes('scallop') || n.includes('snail')) return 'Mollusks & Shellfish';
  if (n.includes('rohu') || n.includes('catla') || n.includes('mrigal') || n.includes('tilapia') || n.includes('carp') || n.includes('trout') || n.includes('milkfish') || n.includes('pearl-spot')) return 'Freshwater & River Fish';
  if (n.includes('hilsa') || n.includes('bombay') || n.includes('rawas') || n.includes('bangda') || n.includes('vanjaram') || n.includes('surmai') || n.includes('kora') || n.includes('nethili') || n.includes('mathi') || n.includes('parava') || n.includes('ribbon')) return 'Coastal & Regional Fish';
  return 'Pelagic & Marine Fish';
}

function getMeatSubCategory(name, id) {
  const n = (name + ' ' + id).toLowerCase();
  if (n.includes('liver') || n.includes('kidney') || n.includes('heart') || n.includes('brain') || n.includes('tongue') || n.includes('gizzard') || n.includes('neck') || n.includes('feet')) return 'Organ Meats & Cuts';
  if (n.includes('chicken') || n.includes('turkey') || n.includes('duck') || n.includes('quail') || n.includes('pheasant')) return 'Poultry & Fowl';
  if (n.includes('beef') || n.includes('bison') || n.includes('buffalo')) return 'Red Meat & Beef';
  if (n.includes('pork')) return 'Pork Cuts';
  if (n.includes('goat') || n.includes('mutton') || n.includes('lamb')) return 'Lamb, Mutton & Goat';
  return 'Game & Specialty Meat';
}

function getEggSubCategory(name, id) {
  const n = (name + ' ' + id).toLowerCase();
  if (n.includes('white') || n.includes('yolk')) return 'Egg Whites & Yolks';
  if (n.includes('country') || n.includes('desi')) return 'Heritage & Free-Range';
  return 'Whole Poultry Eggs';
}

// 1. Partition otherNonVegDataset records
const otherNonVegSeafoodIds = new Set([
  'fish_roe', 'salmon_roe', 'tuna_roe', 'prawn_roe', 'crab_meat', 'crab_roe',
  'shrimp', 'squid', 'cuttlefish', 'octopus', 'mussel', 'clam', 'oyster', 'scallop', 'lobster', 'snail'
]);

// Build unified fishes records
const mergedFishesMap = new Map();
fishesDataset.records.forEach((rec) => {
  mergedFishesMap.set(rec.id, rec);
});
otherNonVegDataset.records.forEach((rec) => {
  if (otherNonVegSeafoodIds.has(rec.id)) {
    if (!mergedFishesMap.has(rec.id)) {
      mergedFishesMap.set(rec.id, {
        ...rec,
        category: 'Fish & Seafood'
      });
    }
  }
});
const unifiedFishesRecords = Array.from(mergedFishesMap.values());

// Build unified meats records
const mergedMeatsMap = new Map();
meatsDataset.records.forEach((rec) => {
  mergedMeatsMap.set(rec.id, rec);
});
otherNonVegDataset.records.forEach((rec) => {
  if (!otherNonVegSeafoodIds.has(rec.id)) {
    if (!mergedMeatsMap.has(rec.id)) {
      mergedMeatsMap.set(rec.id, {
        ...rec,
        category: 'Meat & Poultry'
      });
    }
  }
});
const unifiedMeatsRecords = Array.from(mergedMeatsMap.values());

// Unified eggs records
const unifiedEggsRecords = eggsDataset.records;

console.log(`Unified counts: Fishes=${unifiedFishesRecords.length}, Meats=${unifiedMeatsRecords.length}, Eggs=${unifiedEggsRecords.length}`);

// Write Catalog files
const fishesCatalog = {
  ...fishesDataset,
  dataset: {
    ...fishesDataset.dataset,
    name: 'Fishes and Seafood',
    description: 'Comprehensive fish, shellfish, roe and seafood catalog for the Healthy Awareness food database.'
  },
  records: unifiedFishesRecords
};
fs.writeFileSync('src/data/fishesCatalog.json', JSON.stringify(fishesCatalog, null, 2), 'utf8');

const meatsCatalog = {
  ...meatsDataset,
  dataset: {
    ...meatsDataset.dataset,
    name: 'Meats and Poultry',
    description: 'Comprehensive meat, poultry, cuts and organ meats catalog for the Healthy Awareness food database.'
  },
  records: unifiedMeatsRecords
};
fs.writeFileSync('src/data/meatsCatalog.json', JSON.stringify(meatsCatalog, null, 2), 'utf8');

const eggsCatalog = {
  ...eggsDataset,
  dataset: {
    ...eggsDataset.dataset,
    name: 'Eggs',
    description: 'Whole eggs, egg components and specialty poultry eggs catalog for the Healthy Awareness food database.'
  },
  records: unifiedEggsRecords
};
fs.writeFileSync('src/data/eggsCatalog.json', JSON.stringify(eggsCatalog, null, 2), 'utf8');

// Build UI Products
function buildProduct(record, categoryGroupName, subCatGetter, imageMap, defaultBadge) {
  const slug = record.slug || record.id.replace(/_/g, '-');
  const image = imageMap[slug] || imageMap[record.id] || Object.values(imageMap)[0];
  const subCategory = subCatGetter(record.name, record.id);
  const score = Number((8.8 + ((record.name.length * 7) % 11) * 0.1).toFixed(1));

  let benefits = ['heart', 'energy', 'muscle'];
  let subtitle = `${record.name} - high-quality bioavailable protein and essential micronutrients.`;
  let badge = defaultBadge;
  let badgeType = 'popular';

  if (categoryGroupName === 'Fishes') {
    benefits = ['heart', 'brain', 'skin'];
    subtitle = `Rich in Marine Omega-3 fatty acids, EPA/DHA & high-biological value protein.`;
    badge = subCategory.includes('Roe') ? 'DHA Powerhouse' : subCategory.includes('Crust') ? 'Zinc & Iodine' : 'Omega-3 Rich';
    badgeType = 'organic';
  } else if (categoryGroupName === 'Meats') {
    benefits = ['muscle', 'energy', 'immunity'];
    subtitle = `Prime bioavailable protein, heme iron, zinc & active vitamin B-complex.`;
    badge = subCategory.includes('Organ') ? 'B12 Powerhouse' : subCategory.includes('Poultry') ? 'Lean Protein' : 'Heme Iron Rich';
    badgeType = 'trending';
  } else if (categoryGroupName === 'Eggs') {
    benefits = ['brain', 'eye', 'muscle'];
    subtitle = `Complete amino acid score, choline, lutein & cellular building blocks.`;
    badge = record.name.includes('White') ? 'Pure Protein' : record.name.includes('Yolk') ? 'Choline & Lutein' : 'Gold Standard';
    badgeType = 'organic';
  }

  let nutrients = [
    { label: 'Protein: 22g', icon: 'Wheat' },
    { label: 'Omega-3: High', icon: 'HeartPulse' },
    { label: 'Vit D: Rich', icon: 'Sun' }
  ];
  if (categoryGroupName === 'Meats') {
    nutrients = [
      { label: 'Protein: 24g', icon: 'Wheat' },
      { label: 'Iron: Heme', icon: 'Zap' },
      { label: 'B12: Rich', icon: 'Sparkles' }
    ];
  } else if (categoryGroupName === 'Eggs') {
    nutrients = [
      { label: 'Protein: 13g', icon: 'Wheat' },
      { label: 'Choline: Rich', icon: 'Sparkles' },
      { label: 'Lutein: Eye', icon: 'Sun' }
    ];
  }

  return {
    id: slug,
    name: record.name,
    score,
    subtitle,
    category: subCategory,
    botanicalName: record.botanicalName || undefined,
    originClimate: categoryGroupName === 'Fishes' ? 'Marine & Inland Waters' : categoryGroupName === 'Meats' ? 'Farmstead & Pasture' : 'Pasture & Aviary',
    badge,
    badgeType,
    views: `${Math.floor(10 + Math.random() * 8)}.${Math.floor(Math.random() * 9)}k views`,
    image,
    benefits,
    nutrients
  };
}

// 2. Fishes UI Data
const fishesList = unifiedFishesRecords.map(r => buildProduct(r, 'Fishes', getFishSubCategory, fishImages, 'Omega-3 Rich'));
const fishSubCats = Array.from(new Set(fishesList.map(item => item.category))).map(cat => ({
  id: cat,
  name: cat,
  image: fishesList.find(f => f.category === cat)?.image || fishImages['salmon']
}));
const fishesDataJson = {
  subCategories: [
    { id: 'all', name: 'All Seafood', image: fishImages['salmon'] },
    ...fishSubCats
  ],
  fishesList
};
fs.writeFileSync('src/data/fishesData.json', JSON.stringify(fishesDataJson, null, 2), 'utf8');

const fishesDataTs = `import fishesRaw from './fishesData.json';
import fishesCatalogRaw from './fishesCatalog.json';
import { FruitCatalogRecord, FruitProduct, FruitSubCategory } from './fruitsData';

export const FISHES_CATALOG: FruitCatalogRecord[] = fishesCatalogRaw.records as unknown as FruitCatalogRecord[];
export const FISHES_DATASET_META = fishesCatalogRaw.dataset;

export const FISHES_SUB_CATEGORIES: FruitSubCategory[] = fishesRaw.subCategories as unknown as FruitSubCategory[];
export const FISHES_LIST: FruitProduct[] = fishesRaw.fishesList as unknown as FruitProduct[];
`;
fs.writeFileSync('src/data/fishesData.ts', fishesDataTs, 'utf8');

// 3. Meats UI Data
const meatsList = unifiedMeatsRecords.map(r => buildProduct(r, 'Meats', getMeatSubCategory, meatImages, 'High Protein'));
const meatSubCats = Array.from(new Set(meatsList.map(item => item.category))).map(cat => ({
  id: cat,
  name: cat,
  image: meatsList.find(m => m.category === cat)?.image || meatImages['chicken-breast']
}));
const meatsDataJson = {
  subCategories: [
    { id: 'all', name: 'All Meats & Poultry', image: meatImages['chicken-breast'] },
    ...meatSubCats
  ],
  meatsList
};
fs.writeFileSync('src/data/meatsData.json', JSON.stringify(meatsDataJson, null, 2), 'utf8');

const meatsDataTs = `import meatsRaw from './meatsData.json';
import meatsCatalogRaw from './meatsCatalog.json';
import { FruitCatalogRecord, FruitProduct, FruitSubCategory } from './fruitsData';

export const MEATS_CATALOG: FruitCatalogRecord[] = meatsCatalogRaw.records as unknown as FruitCatalogRecord[];
export const MEATS_DATASET_META = meatsCatalogRaw.dataset;

export const MEATS_SUB_CATEGORIES: FruitSubCategory[] = meatsRaw.subCategories as unknown as FruitSubCategory[];
export const MEATS_LIST: FruitProduct[] = meatsRaw.meatsList as unknown as FruitProduct[];
`;
fs.writeFileSync('src/data/meatsData.ts', meatsDataTs, 'utf8');

// 4. Eggs UI Data
const eggsList = unifiedEggsRecords.map(r => buildProduct(r, 'Eggs', getEggSubCategory, eggImages, 'Choline Rich'));
const eggSubCats = Array.from(new Set(eggsList.map(item => item.category))).map(cat => ({
  id: cat,
  name: cat,
  image: eggsList.find(e => e.category === cat)?.image || eggImages['chicken-egg']
}));
const eggsDataJson = {
  subCategories: [
    { id: 'all', name: 'All Eggs', image: eggImages['chicken-egg'] },
    ...eggSubCats
  ],
  eggsList
};
fs.writeFileSync('src/data/eggsData.json', JSON.stringify(eggsDataJson, null, 2), 'utf8');

const eggsDataTs = `import eggsRaw from './eggsData.json';
import eggsCatalogRaw from './eggsCatalog.json';
import { FruitCatalogRecord, FruitProduct, FruitSubCategory } from './fruitsData';

export const EGGS_CATALOG: FruitCatalogRecord[] = eggsCatalogRaw.records as unknown as FruitCatalogRecord[];
export const EGGS_DATASET_META = eggsCatalogRaw.dataset;

export const EGGS_SUB_CATEGORIES: FruitSubCategory[] = eggsRaw.subCategories as unknown as FruitSubCategory[];
export const EGGS_LIST: FruitProduct[] = eggsRaw.eggsList as unknown as FruitProduct[];
`;
fs.writeFileSync('src/data/eggsData.ts', eggsDataTs, 'utf8');

// 5. Update Product Details Dataset (src/data/productDetailsData.json)
const productDetailsPath = 'src/data/productDetailsData.json';
let existingPDP = JSON.parse(fs.readFileSync(productDetailsPath, 'utf8'));

function createPDPRecord(record, categoryGroupName, subCatGetter, imageMap, defaultBadge) {
  const slug = record.slug || record.id.replace(/_/g, '-');
  const image = imageMap[slug] || imageMap[record.id] || Object.values(imageMap)[0];
  const subCategory = subCatGetter(record.name, record.id);
  const score = Number((8.8 + ((record.name.length * 7) % 11) * 0.1).toFixed(1));

  let cal = 120;
  let protein = 20;
  let fat = 4;
  let carbs = 0;
  let pot = 350;

  if (categoryGroupName === 'Fishes') {
    cal = 135;
    protein = 22;
    fat = 5;
    carbs = 0;
    pot = 380;
  } else if (categoryGroupName === 'Meats') {
    cal = 165;
    protein = 24;
    fat = 7;
    carbs = 0;
    pot = 330;
    if (record.name.toLowerCase().includes('liver')) {
      cal = 135;
      protein = 21;
      fat = 4;
      carbs = 3.5;
    }
  } else if (categoryGroupName === 'Eggs') {
    cal = 143;
    protein = 13;
    fat = 9.5;
    carbs = 0.7;
    pot = 138;
    if (record.name.toLowerCase().includes('white')) {
      cal = 52;
      protein = 11;
      fat = 0.2;
      carbs = 0.7;
    } else if (record.name.toLowerCase().includes('yolk')) {
      cal = 322;
      protein = 16;
      fat = 27;
      carbs = 3.6;
    }
  }

  let benefits = [
    { id: 'b1', title: 'High Biological Value Protein', description: 'Complete amino acid score supporting cellular repair, metabolic lean tissue preservation and immunity.' },
    { id: 'b2', title: 'Essential Micronutrient Density', description: 'Bioavailable vitamins, minerals, and co-factors supporting red blood cell synthesis and energy.' },
    { id: 'b3', title: 'Cellular & Neurological Fuel', description: 'Provides essential lipids, vitamins, and minerals that protect neuron membrane health and vitality.' }
  ];

  if (categoryGroupName === 'Fishes') {
    benefits = [
      { id: 'b1', title: 'Heart-Protecting Omega-3 EPA/DHA', description: 'Cardiovascular support promoting healthy triglycerides, blood pressure, and arterial elasticity.' },
      { id: 'b2', title: 'Neurological & Brain Health', description: 'Crucial structural docosahexaenoic acid (DHA) sustaining cognitive sharpness and mental clarity.' },
      { id: 'b3', title: 'Anti-Inflammatory Action', description: 'Potent natural marine fatty acids that buffer systemic cellular inflammatory cascades.' }
    ];
  } else if (categoryGroupName === 'Meats') {
    benefits = [
      { id: 'b1', title: 'Easily Bioavailable Heme Iron', description: 'Efficiently absorbed iron for optimal hemoglobin production, combating physical fatigue and weakness.' },
      { id: 'b2', title: 'Complete Muscle Building Amino Acids', description: 'Unmatched biological value amino profile stimulating muscular protein synthesis and stamina.' },
      { id: 'b3', title: 'Active Vitamin B12 & Zinc', description: 'Critical co-factors powering DNA synthesis, immune defense, and nerve sheath integrity.' }
    ];
  } else if (categoryGroupName === 'Eggs') {
    benefits = [
      { id: 'b1', title: 'Exceptional Choline Concentration', description: 'Vital precursor for acetylcholine neurotransmitter synthesis, memory function and liver lipid transport.' },
      { id: 'b2', title: 'Macular Carotenoids (Lutein & Zeaxanthin)', description: 'Highly bioavailable fat-soluble antioxidants shielding retina cells against oxidative strain.' },
      { id: 'b3', title: 'Highest Biological Value Protein (Score 100)', description: 'The nutritional benchmark for protein quality, utilized completely by human cells.' }
    ];
  }

  return {
    id: slug,
    name: record.name,
    category: categoryGroupName === 'Fishes' ? 'Fish & Seafood' : categoryGroupName === 'Meats' ? 'Meat & Poultry' : 'Eggs',
    subCategory,
    botanicalName: record.botanicalName || undefined,
    originClimate: categoryGroupName === 'Fishes' ? 'Marine & Inland Waters' : categoryGroupName === 'Meats' ? 'Pasture & Farmstead' : 'Pasture & Aviary',
    badge: defaultBadge,
    badgeType: 'popular',
    views: `${Math.floor(10 + Math.random() * 8)}.${Math.floor(Math.random() * 9)}k views`,
    rating: score,
    reviewCount: 80 + ((record.name.length * 13) % 95),
    image,
    description: record.description || `${record.name} is a premier dietary source of complete, high-biological value protein, essential vitamins, and bioavailable minerals. Naturally nourishing, it sustains muscle recovery, metabolic vitality, and overall cellular resilience.`,
    type: categoryGroupName === 'Fishes' ? 'Fish & Seafood' : categoryGroupName === 'Meats' ? 'Meat & Poultry' : 'Eggs',
    origin: 'Ethically Sourced Worldwide',
    calories: `${cal} kcal (per 100g raw)`,
    bestFor: 'Muscle Recovery, Cognitive Function & Sustained Energy',
    benefits,
    nutritionRings: [
      { label: 'Energy / Cal', amount: `${cal} kcal`, percentage: Math.min(95, Math.max(20, Math.round((cal / 300) * 100))), color: 'text-amber-500 stroke-amber-500' },
      { label: 'Protein', amount: `${protein} g`, percentage: Math.min(95, Math.max(20, Math.round((protein / 30) * 100))), color: 'text-sky-500 stroke-sky-500' },
      { label: 'Healthy Fat', amount: `${fat} g`, percentage: Math.min(95, Math.max(15, Math.round((fat / 20) * 100))), color: 'text-emerald-500 stroke-emerald-500' },
      { label: 'Potassium', amount: `${pot} mg`, percentage: Math.min(95, Math.max(15, Math.round((pot / 600) * 100))), color: 'text-rose-500 stroke-rose-500' }
    ],
    quickNutrients: [
      { label: 'Calories', value: `${cal} kcal` },
      { label: 'Protein', value: `${protein} g` },
      { label: 'Fat', value: `${fat} g` },
      { label: 'Carbs', value: `${carbs} g` }
    ],
    bestTime: {
      morning: 'Incorporate into a hearty breakfast or lunch for sustained satiation and stable blood glucose throughout the afternoon.',
      evening: 'Enjoy lightly prepared in the evening alongside fiber-rich vegetables to support nighttime cellular rebuilding.'
    },
    healthScore: {
      overall: score,
      ratingText: 'Highly Recommended Dietary Choice',
      breakdown: {
        heart: 94,
        brain: 92,
        energy: 95,
        immunity: 93,
        skin: 90
      }
    },
    howToEat: {
      title: `Best Ways to Prepare ${record.name}`,
      tips: [
        'Store under strict refrigeration (below 4°C / 40°F) or freeze for longer preservation.',
        'Cook thoroughly using gentle steaming, grilling, poaching, or light baking to preserve delicate nutrients.',
        'Pair with leafy greens, lemon, olive oil, and herbs to enhance nutrient absorption and digestion.'
      ]
    },
    cautions: [
      'Ensure proper cold-chain refrigeration and cook to safe internal temperatures.',
      'Check for personal allergies or sensitivities (e.g. crustacean or egg allergies).'
    ],
    selectionTips: `Choose fresh, clean-scented, properly refrigerated cuts with firm texture and bright, natural appearance.`,
    comparison: {
      target: {
        id: slug,
        name: record.name,
        serving: 'Per 100g raw',
        image,
        calories: cal,
        protein: `${protein} g`,
        fiber: '0 g',
        omega3: categoryGroupName === 'Fishes' ? 'Very High' : 'Moderate',
        bestFor: 'High Biological Value Protein'
      },
      competitor: {
        id: 'chicken-breast',
        name: 'Chicken Breast',
        serving: 'Per 100g raw',
        image: meatImages['chicken-breast'],
        calories: 120,
        protein: '22 g',
        fiber: '0 g',
        omega3: 'Low',
        bestFor: 'Lean Protein Benchmark'
      }
    },
    recipes: [
      {
        id: `recipe-${slug}-1`,
        title: `Pan-Seared ${record.name} with Fresh Herbs & Lemon`,
        time: '20 mins',
        servings: '2 servings',
        difficulty: 'Easy',
        image
      }
    ],
    similarFoods: [],
    faqs: [
      {
        question: `What makes ${record.name} an exceptional nutritional choice?`,
        answer: `${record.name} delivers complete essential amino acids, bioavailable B-vitamins, and essential minerals that nourish muscle tissue, support healthy metabolism, and sustain daily physical vitality.`
      },
      {
        question: `How should ${record.name} be stored to ensure maximum freshness and safety?`,
        answer: `Keep sealed and refrigerated between 0°C and 4°C (32°F - 40°F). For extended storage, freeze in airtight freezer-safe packaging.`
      }
    ]
  };
}

// Append all into existingPDP
unifiedFishesRecords.forEach(rec => {
  const slug = rec.slug || rec.id.replace(/_/g, '-');
  const pdpItem = createPDPRecord(rec, 'Fishes', getFishSubCategory, fishImages, 'Omega-3 Rich');
  existingPDP[slug] = pdpItem;
  existingPDP[rec.id] = pdpItem;
});

unifiedMeatsRecords.forEach(rec => {
  const slug = rec.slug || rec.id.replace(/_/g, '-');
  const pdpItem = createPDPRecord(rec, 'Meats', getMeatSubCategory, meatImages, 'High Protein');
  existingPDP[slug] = pdpItem;
  existingPDP[rec.id] = pdpItem;
});

unifiedEggsRecords.forEach(rec => {
  const slug = rec.slug || rec.id.replace(/_/g, '-');
  const pdpItem = createPDPRecord(rec, 'Eggs', getEggSubCategory, eggImages, 'Choline Rich');
  existingPDP[slug] = pdpItem;
  existingPDP[rec.id] = pdpItem;
});

fs.writeFileSync(productDetailsPath, JSON.stringify(existingPDP, null, 2), 'utf8');
console.log(`Updated ${productDetailsPath} with total items:`, Object.keys(existingPDP).length);

// 6. Update Search Results Data (src/data/searchResultsData.json)
const searchDataPath = 'src/data/searchResultsData.json';
let searchData = JSON.parse(fs.readFileSync(searchDataPath, 'utf8'));

const newSearchResults = [
  // Fishes & Seafood
  { id: 'salmon', name: 'Salmon', subtitle: 'Prime wild-caught salmon dense in Omega-3 EPA/DHA', category: 'FISH & SEAFOOD', categoryId: 'fishes', type: 'food', score: 9.8, benefits: ['heart', 'brain', 'skin'], foodType: 'raw', dietTypes: ['keto', 'gf', 'pescatarian'], image: fishImages['salmon'], actionText: 'View Details' },
  { id: 'tuna', name: 'Tuna', subtitle: 'Lean high-protein marine fish loaded with vitamin B12', category: 'FISH & SEAFOOD', categoryId: 'fishes', type: 'food', score: 9.5, benefits: ['muscle', 'heart'], foodType: 'raw', dietTypes: ['keto', 'gf', 'pescatarian'], image: fishImages['tuna'], actionText: 'View Details' },
  { id: 'sardine', name: 'Sardine', subtitle: 'Small cold-water oily fish packed with calcium and omega-3s', category: 'FISH & SEAFOOD', categoryId: 'fishes', type: 'food', score: 9.6, benefits: ['heart', 'bone'], foodType: 'raw', dietTypes: ['keto', 'gf', 'pescatarian'], image: fishImages['sardine'], actionText: 'View Details' },
  { id: 'prawn', name: 'Prawn', subtitle: 'Succulent crustacean loaded with selenium, iodine and zinc', category: 'FISH & SEAFOOD', categoryId: 'fishes', type: 'food', score: 9.4, benefits: ['muscle', 'energy'], foodType: 'raw', dietTypes: ['keto', 'gf', 'pescatarian'], image: fishImages['prawn'], actionText: 'View Details' },
  { id: 'pomfret', name: 'Pomfret', subtitle: 'Delicate white sea fish rich in bioavailable vitamins A & D', category: 'FISH & SEAFOOD', categoryId: 'fishes', type: 'food', score: 9.3, benefits: ['heart', 'skin'], foodType: 'raw', dietTypes: ['keto', 'gf', 'pescatarian'], image: fishImages['pomfret'], actionText: 'View Details' },
  { id: 'rohu', name: 'Rohu', subtitle: 'Revered freshwater carp species high in clean protein and zinc', category: 'FISH & SEAFOOD', categoryId: 'fishes', type: 'food', score: 9.2, benefits: ['muscle', 'energy'], foodType: 'raw', dietTypes: ['keto', 'gf', 'pescatarian'], image: fishImages['rohu'], actionText: 'View Details' },
  // Meats & Poultry
  { id: 'chicken-breast', name: 'Chicken Breast', subtitle: 'The benchmark lean protein staple for fitness & muscle repair', category: 'MEAT & POULTRY', categoryId: 'meats', type: 'food', score: 9.7, benefits: ['muscle', 'energy'], foodType: 'raw', dietTypes: ['keto', 'gf'], image: meatImages['chicken-breast'], actionText: 'View Details' },
  { id: 'chicken-liver', name: 'Chicken Liver', subtitle: 'Nature’s supreme multivitamin packed with active B12 & folate', category: 'MEAT & POULTRY', categoryId: 'meats', type: 'food', score: 9.8, benefits: ['energy', 'immunity'], foodType: 'raw', dietTypes: ['keto', 'gf'], image: meatImages['chicken-liver'], actionText: 'View Details' },
  { id: 'mutton', name: 'Mutton', subtitle: 'Wholesome pasture-fed goat meat rich in bioavailable heme iron', category: 'MEAT & POULTRY', categoryId: 'meats', type: 'food', score: 9.4, benefits: ['muscle', 'energy'], foodType: 'raw', dietTypes: ['keto', 'gf'], image: meatImages['mutton'], actionText: 'View Details' },
  { id: 'turkey-breast', name: 'Turkey Breast', subtitle: 'Ultra-lean poultry breast packed with tryptophan & B-vitamins', category: 'MEAT & POULTRY', categoryId: 'meats', type: 'food', score: 9.5, benefits: ['muscle', 'energy'], foodType: 'raw', dietTypes: ['keto', 'gf'], image: meatImages['turkey-breast'], actionText: 'View Details' },
  { id: 'beef-tenderloin', name: 'Beef Tenderloin', subtitle: 'Tender steak cut delivering creatine, zinc, and heme iron', category: 'MEAT & POULTRY', categoryId: 'meats', type: 'food', score: 9.4, benefits: ['muscle', 'strength'], foodType: 'raw', dietTypes: ['keto', 'gf'], image: meatImages['beef-tenderloin'], actionText: 'View Details' },
  // Eggs
  { id: 'chicken-egg', name: 'Chicken Egg', subtitle: 'Complete amino acid score with brain-nourishing choline & lutein', category: 'EGGS', categoryId: 'eggs', type: 'food', score: 9.8, benefits: ['brain', 'eye', 'muscle'], foodType: 'raw', dietTypes: ['keto', 'gf', 'vegetarian'], image: eggImages['chicken-egg'], actionText: 'View Details' },
  { id: 'chicken-egg-white', name: 'Chicken Egg White', subtitle: 'Pure fat-free albumin protein for optimal muscle synthesis', category: 'EGGS', categoryId: 'eggs', type: 'food', score: 9.6, benefits: ['muscle', 'weight'], foodType: 'raw', dietTypes: ['keto', 'gf', 'vegetarian'], image: eggImages['chicken-egg-white'], actionText: 'View Details' },
  { id: 'desi-chicken-egg', name: 'Desi Chicken Egg', subtitle: 'Free-range heritage egg with rich golden yolk and omega fats', category: 'EGGS', categoryId: 'eggs', type: 'food', score: 9.7, benefits: ['brain', 'eye'], foodType: 'raw', dietTypes: ['keto', 'gf', 'vegetarian'], image: eggImages['desi-chicken-egg'], actionText: 'View Details' },
  { id: 'quail-egg', name: 'Quail Egg', subtitle: 'Delicate nutrient-dense eggs packed with iron, B12 and riboflavin', category: 'EGGS', categoryId: 'eggs', type: 'food', score: 9.5, benefits: ['immunity', 'energy'], foodType: 'raw', dietTypes: ['keto', 'gf', 'vegetarian'], image: eggImages['quail-egg'], actionText: 'View Details' }
];

const existingResultsMap = new Map();
searchData.results.forEach(item => existingResultsMap.set(item.id, item));
newSearchResults.forEach(item => existingResultsMap.set(item.id, item));

searchData.results = Array.from(existingResultsMap.values());
searchData.totalResults = searchData.results.length;

searchData.categories = [
  { id: 'all', label: 'All Categories', count: searchData.totalResults },
  { id: 'fruits', label: 'Fruits', count: 77 },
  { id: 'vegetables', label: 'Vegetables', count: 67 },
  { id: 'groceries', label: 'Groceries', count: 85 },
  { id: 'nuts-seeds', label: 'Nuts & Seeds', count: 38 },
  { id: 'fishes', label: 'Fishes & Seafood', count: unifiedFishesRecords.length },
  { id: 'meats', label: 'Meats & Poultry', count: unifiedMeatsRecords.length },
  { id: 'eggs', label: 'Eggs', count: unifiedEggsRecords.length }
];

fs.writeFileSync(searchDataPath, JSON.stringify(searchData, null, 2), 'utf8');
console.log(`Updated ${searchDataPath} with total results:`, searchData.results.length);

console.log('--- ALL FISHES, MEATS, AND EGGS DATA GENERATED SUCCESSFULLY ---');
