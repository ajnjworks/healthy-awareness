import fs from 'fs';
import path from 'path';

export const groceriesDataset = {
  "schemaVersion": "2.0.0",
  "dataset": {
    "name": "Healthy Awareness Groceries",
    "description": "Pantry, staple, grain, pulse, flour, oil, spice, sweetener and condiment catalog.",
    "dataStandard": "Conservative verified-data model",
    "rule": "No value is invented. Unknown or not source-verified fields are null.",
    "nutritionBasis": "per 100 g edible portion, raw",
    "primaryNutritionSource": {
      "organization": "USDA Agricultural Research Service",
      "database": "FoodData Central",
      "url": "https://fdc.nal.usda.gov/"
    }
  },
  "records": [
    {
      "id": "white-rice",
      "name": "White Rice",
      "slug": "white-rice",
      "category": "Grains",
      "botanicalName": "Oryza sativa",
      "commonNames": null,
      "description": null,
      "nutrition": {
        "basis": "per 100 g edible portion, raw",
        "calories_kcal": null,
        "carbohydrates_g": null,
        "fiber_g": null,
        "protein_g": null,
        "fat_g": null,
        "sugars_g": null,
        "vitaminC_mg": null,
        "potassium_mg": null
      },
      "healthBenefits": null,
      "cautions": null,
      "servingSuggestions": null,
      "selectionTips": null,
      "storageTips": null,
      "season": null,
      "images": {
        "thumbnail": "/images/white-rice.webp",
        "hero": "/images/white-rice-hero.webp"
      },
      "seo": {
        "title": null,
        "description": null,
        "keywords": null
      },
      "sources": [],
      "published": true
    },
    {
      "id": "brown-rice",
      "name": "Brown Rice",
      "slug": "brown-rice",
      "category": "Grains",
      "botanicalName": "Oryza sativa",
      "commonNames": null,
      "description": null,
      "nutrition": {
        "basis": "per 100 g edible portion, raw",
        "calories_kcal": null,
        "carbohydrates_g": null,
        "fiber_g": null,
        "protein_g": null,
        "fat_g": null,
        "sugars_g": null,
        "vitaminC_mg": null,
        "potassium_mg": null
      },
      "healthBenefits": null,
      "cautions": null,
      "servingSuggestions": null,
      "selectionTips": null,
      "storageTips": null,
      "season": null,
      "images": {
        "thumbnail": "/images/brown-rice.webp",
        "hero": "/images/brown-rice-hero.webp"
      },
      "seo": {
        "title": null,
        "description": null,
        "keywords": null
      },
      "sources": [],
      "published": true
    },
    {
      "id": "red-rice",
      "name": "Red Rice",
      "slug": "red-rice",
      "category": "Grains",
      "botanicalName": "Oryza sativa",
      "commonNames": null,
      "description": null,
      "nutrition": {
        "basis": "per 100 g edible portion, raw",
        "calories_kcal": null,
        "carbohydrates_g": null,
        "fiber_g": null,
        "protein_g": null,
        "fat_g": null,
        "sugars_g": null,
        "vitaminC_mg": null,
        "potassium_mg": null
      },
      "healthBenefits": null,
      "cautions": null,
      "servingSuggestions": null,
      "selectionTips": null,
      "storageTips": null,
      "season": null,
      "images": {
        "thumbnail": "/images/red-rice.webp",
        "hero": "/images/red-rice-hero.webp"
      },
      "seo": {
        "title": null,
        "description": null,
        "keywords": null
      },
      "sources": [],
      "published": true
    },
    {
      "id": "black-rice",
      "name": "Black Rice",
      "slug": "black-rice",
      "category": "Grains",
      "botanicalName": "Oryza sativa",
      "commonNames": null,
      "description": null,
      "nutrition": {
        "basis": "per 100 g edible portion, raw",
        "calories_kcal": null,
        "carbohydrates_g": null,
        "fiber_g": null,
        "protein_g": null,
        "fat_g": null,
        "sugars_g": null,
        "vitaminC_mg": null,
        "potassium_mg": null
      },
      "healthBenefits": null,
      "cautions": null,
      "servingSuggestions": null,
      "selectionTips": null,
      "storageTips": null,
      "season": null,
      "images": {
        "thumbnail": "/images/black-rice.webp",
        "hero": "/images/black-rice-hero.webp"
      },
      "seo": {
        "title": null,
        "description": null,
        "keywords": null
      },
      "sources": [],
      "published": true
    },
    {
      "id": "basmati-rice",
      "name": "Basmati Rice",
      "slug": "basmati-rice",
      "category": "Grains",
      "botanicalName": "Oryza sativa",
      "commonNames": null,
      "description": null,
      "nutrition": {
        "basis": "per 100 g edible portion, raw",
        "calories_kcal": null,
        "carbohydrates_g": null,
        "fiber_g": null,
        "protein_g": null,
        "fat_g": null,
        "sugars_g": null,
        "vitaminC_mg": null,
        "potassium_mg": null
      },
      "healthBenefits": null,
      "cautions": null,
      "servingSuggestions": null,
      "selectionTips": null,
      "storageTips": null,
      "season": null,
      "images": {
        "thumbnail": "/images/basmati-rice.webp",
        "hero": "/images/basmati-rice-hero.webp"
      },
      "seo": {
        "title": null,
        "description": null,
        "keywords": null
      },
      "sources": [],
      "published": true
    },
    {
      "id": "parboiled-rice",
      "name": "Parboiled Rice",
      "slug": "parboiled-rice",
      "category": "Grains",
      "botanicalName": "Oryza sativa",
      "commonNames": null,
      "description": null,
      "nutrition": {
        "basis": "per 100 g edible portion, raw",
        "calories_kcal": null,
        "carbohydrates_g": null,
        "fiber_g": null,
        "protein_g": null,
        "fat_g": null,
        "sugars_g": null,
        "vitaminC_mg": null,
        "potassium_mg": null
      },
      "healthBenefits": null,
      "cautions": null,
      "servingSuggestions": null,
      "selectionTips": null,
      "storageTips": null,
      "season": null,
      "images": {
        "thumbnail": "/images/parboiled-rice.webp",
        "hero": "/images/parboiled-rice-hero.webp"
      },
      "seo": {
        "title": null,
        "description": null,
        "keywords": null
      },
      "sources": [],
      "published": true
    },
    {
      "id": "oats",
      "name": "Oats",
      "slug": "oats",
      "category": "Grains",
      "botanicalName": "Avena sativa",
      "commonNames": null,
      "description": null,
      "nutrition": {
        "basis": "per 100 g edible portion, raw",
        "calories_kcal": null,
        "carbohydrates_g": null,
        "fiber_g": null,
        "protein_g": null,
        "fat_g": null,
        "sugars_g": null,
        "vitaminC_mg": null,
        "potassium_mg": null
      },
      "healthBenefits": null,
      "cautions": null,
      "servingSuggestions": null,
      "selectionTips": null,
      "storageTips": null,
      "season": null,
      "images": {
        "thumbnail": "/images/oats.webp",
        "hero": "/images/oats-hero.webp"
      },
      "seo": {
        "title": null,
        "description": null,
        "keywords": null
      },
      "sources": [],
      "published": true
    },
    {
      "id": "whole-wheat",
      "name": "Whole Wheat",
      "slug": "whole-wheat",
      "category": "Grains",
      "botanicalName": "Triticum aestivum",
      "commonNames": null,
      "description": null,
      "nutrition": {
        "basis": "per 100 g edible portion, raw",
        "calories_kcal": null,
        "carbohydrates_g": null,
        "fiber_g": null,
        "protein_g": null,
        "fat_g": null,
        "sugars_g": null,
        "vitaminC_mg": null,
        "potassium_mg": null
      },
      "healthBenefits": null,
      "cautions": null,
      "servingSuggestions": null,
      "selectionTips": null,
      "storageTips": null,
      "season": null,
      "images": {
        "thumbnail": "/images/whole-wheat.webp",
        "hero": "/images/whole-wheat-hero.webp"
      },
      "seo": {
        "title": null,
        "description": null,
        "keywords": null
      },
      "sources": [],
      "published": true
    },
    {
      "id": "barley",
      "name": "Barley",
      "slug": "barley",
      "category": "Grains",
      "botanicalName": "Hordeum vulgare",
      "commonNames": null,
      "description": null,
      "nutrition": {
        "basis": "per 100 g edible portion, raw",
        "calories_kcal": null,
        "carbohydrates_g": null,
        "fiber_g": null,
        "protein_g": null,
        "fat_g": null,
        "sugars_g": null,
        "vitaminC_mg": null,
        "potassium_mg": null
      },
      "healthBenefits": null,
      "cautions": null,
      "servingSuggestions": null,
      "selectionTips": null,
      "storageTips": null,
      "season": null,
      "images": {
        "thumbnail": "/images/barley.webp",
        "hero": "/images/barley-hero.webp"
      },
      "seo": {
        "title": null,
        "description": null,
        "keywords": null
      },
      "sources": [],
      "published": true
    },
    {
      "id": "pearl-millet",
      "name": "Pearl Millet / Bajra",
      "slug": "pearl-millet",
      "category": "Millets",
      "botanicalName": "Cenchrus americanus",
      "commonNames": null,
      "description": null,
      "nutrition": {
        "basis": "per 100 g edible portion, raw",
        "calories_kcal": null,
        "carbohydrates_g": null,
        "fiber_g": null,
        "protein_g": null,
        "fat_g": null,
        "sugars_g": null,
        "vitaminC_mg": null,
        "potassium_mg": null
      },
      "healthBenefits": null,
      "cautions": null,
      "servingSuggestions": null,
      "selectionTips": null,
      "storageTips": null,
      "season": null,
      "images": {
        "thumbnail": "/images/pearl-millet.webp",
        "hero": "/images/pearl-millet-hero.webp"
      },
      "seo": {
        "title": null,
        "description": null,
        "keywords": null
      },
      "sources": [],
      "published": true
    },
    {
      "id": "finger-millet",
      "name": "Finger Millet / Ragi",
      "slug": "finger-millet",
      "category": "Millets",
      "botanicalName": "Eleusine coracana",
      "commonNames": null,
      "description": null,
      "nutrition": {
        "basis": "per 100 g edible portion, raw",
        "calories_kcal": null,
        "carbohydrates_g": null,
        "fiber_g": null,
        "protein_g": null,
        "fat_g": null,
        "sugars_g": null,
        "vitaminC_mg": null,
        "potassium_mg": null
      },
      "healthBenefits": null,
      "cautions": null,
      "servingSuggestions": null,
      "selectionTips": null,
      "storageTips": null,
      "season": null,
      "images": {
        "thumbnail": "/images/finger-millet.webp",
        "hero": "/images/finger-millet-hero.webp"
      },
      "seo": {
        "title": null,
        "description": null,
        "keywords": null
      },
      "sources": [],
      "published": true
    },
    {
      "id": "foxtail-millet",
      "name": "Foxtail Millet",
      "slug": "foxtail-millet",
      "category": "Millets",
      "botanicalName": "Setaria italica",
      "commonNames": null,
      "description": null,
      "nutrition": {
        "basis": "per 100 g edible portion, raw",
        "calories_kcal": null,
        "carbohydrates_g": null,
        "fiber_g": null,
        "protein_g": null,
        "fat_g": null,
        "sugars_g": null,
        "vitaminC_mg": null,
        "potassium_mg": null
      },
      "healthBenefits": null,
      "cautions": null,
      "servingSuggestions": null,
      "selectionTips": null,
      "storageTips": null,
      "season": null,
      "images": {
        "thumbnail": "/images/foxtail-millet.webp",
        "hero": "/images/foxtail-millet-hero.webp"
      },
      "seo": {
        "title": null,
        "description": null,
        "keywords": null
      },
      "sources": [],
      "published": true
    },
    {
      "id": "little-millet",
      "name": "Little Millet",
      "slug": "little-millet",
      "category": "Millets",
      "botanicalName": "Panicum sumatrense",
      "commonNames": null,
      "description": null,
      "nutrition": {
        "basis": "per 100 g edible portion, raw",
        "calories_kcal": null,
        "carbohydrates_g": null,
        "fiber_g": null,
        "protein_g": null,
        "fat_g": null,
        "sugars_g": null,
        "vitaminC_mg": null,
        "potassium_mg": null
      },
      "healthBenefits": null,
      "cautions": null,
      "servingSuggestions": null,
      "selectionTips": null,
      "storageTips": null,
      "season": null,
      "images": {
        "thumbnail": "/images/little-millet.webp",
        "hero": "/images/little-millet-hero.webp"
      },
      "seo": {
        "title": null,
        "description": null,
        "keywords": null
      },
      "sources": [],
      "published": true
    },
    {
      "id": "kodo-millet",
      "name": "Kodo Millet",
      "slug": "kodo-millet",
      "category": "Millets",
      "botanicalName": "Paspalum scrobiculatum",
      "commonNames": null,
      "description": null,
      "nutrition": {
        "basis": "per 100 g edible portion, raw",
        "calories_kcal": null,
        "carbohydrates_g": null,
        "fiber_g": null,
        "protein_g": null,
        "fat_g": null,
        "sugars_g": null,
        "vitaminC_mg": null,
        "potassium_mg": null
      },
      "healthBenefits": null,
      "cautions": null,
      "servingSuggestions": null,
      "selectionTips": null,
      "storageTips": null,
      "season": null,
      "images": {
        "thumbnail": "/images/kodo-millet.webp",
        "hero": "/images/kodo-millet-hero.webp"
      },
      "seo": {
        "title": null,
        "description": null,
        "keywords": null
      },
      "sources": [],
      "published": true
    },
    {
      "id": "proso-millet",
      "name": "Proso Millet",
      "slug": "proso-millet",
      "category": "Millets",
      "botanicalName": "Panicum miliaceum",
      "commonNames": null,
      "description": null,
      "nutrition": {
        "basis": "per 100 g edible portion, raw",
        "calories_kcal": null,
        "carbohydrates_g": null,
        "fiber_g": null,
        "protein_g": null,
        "fat_g": null,
        "sugars_g": null,
        "vitaminC_mg": null,
        "potassium_mg": null
      },
      "healthBenefits": null,
      "cautions": null,
      "servingSuggestions": null,
      "selectionTips": null,
      "storageTips": null,
      "season": null,
      "images": {
        "thumbnail": "/images/proso-millet.webp",
        "hero": "/images/proso-millet-hero.webp"
      },
      "seo": {
        "title": null,
        "description": null,
        "keywords": null
      },
      "sources": [],
      "published": true
    },
    {
      "id": "barnyard-millet",
      "name": "Barnyard Millet",
      "slug": "barnyard-millet",
      "category": "Millets",
      "botanicalName": "Echinochloa spp.",
      "commonNames": null,
      "description": null,
      "nutrition": {
        "basis": "per 100 g edible portion, raw",
        "calories_kcal": null,
        "carbohydrates_g": null,
        "fiber_g": null,
        "protein_g": null,
        "fat_g": null,
        "sugars_g": null,
        "vitaminC_mg": null,
        "potassium_mg": null
      },
      "healthBenefits": null,
      "cautions": null,
      "servingSuggestions": null,
      "selectionTips": null,
      "storageTips": null,
      "season": null,
      "images": {
        "thumbnail": "/images/barnyard-millet.webp",
        "hero": "/images/barnyard-millet-hero.webp"
      },
      "seo": {
        "title": null,
        "description": null,
        "keywords": null
      },
      "sources": [],
      "published": true
    },
    {
      "id": "quinoa",
      "name": "Quinoa",
      "slug": "quinoa",
      "category": "Pseudocereals",
      "botanicalName": "Chenopodium quinoa",
      "commonNames": null,
      "description": null,
      "nutrition": {
        "basis": "per 100 g edible portion, raw",
        "calories_kcal": null,
        "carbohydrates_g": null,
        "fiber_g": null,
        "protein_g": null,
        "fat_g": null,
        "sugars_g": null,
        "vitaminC_mg": null,
        "potassium_mg": null
      },
      "healthBenefits": null,
      "cautions": null,
      "servingSuggestions": null,
      "selectionTips": null,
      "storageTips": null,
      "season": null,
      "images": {
        "thumbnail": "/images/quinoa.webp",
        "hero": "/images/quinoa-hero.webp"
      },
      "seo": {
        "title": null,
        "description": null,
        "keywords": null
      },
      "sources": [],
      "published": true
    },
    {
      "id": "cornmeal",
      "name": "Cornmeal",
      "slug": "cornmeal",
      "category": "Grains",
      "botanicalName": "Zea mays",
      "commonNames": null,
      "description": null,
      "nutrition": {
        "basis": "per 100 g edible portion, raw",
        "calories_kcal": null,
        "carbohydrates_g": null,
        "fiber_g": null,
        "protein_g": null,
        "fat_g": null,
        "sugars_g": null,
        "vitaminC_mg": null,
        "potassium_mg": null
      },
      "healthBenefits": null,
      "cautions": null,
      "servingSuggestions": null,
      "selectionTips": null,
      "storageTips": null,
      "season": null,
      "images": {
        "thumbnail": "/images/cornmeal.webp",
        "hero": "/images/cornmeal-hero.webp"
      },
      "seo": {
        "title": null,
        "description": null,
        "keywords": null
      },
      "sources": [],
      "published": true
    },
    {
      "id": "semolina",
      "name": "Semolina / Sooji / Rava",
      "slug": "semolina",
      "category": "Wheat products",
      "botanicalName": "Triticum aestivum",
      "commonNames": null,
      "description": null,
      "nutrition": {
        "basis": "per 100 g edible portion, raw",
        "calories_kcal": null,
        "carbohydrates_g": null,
        "fiber_g": null,
        "protein_g": null,
        "fat_g": null,
        "sugars_g": null,
        "vitaminC_mg": null,
        "potassium_mg": null
      },
      "healthBenefits": null,
      "cautions": null,
      "servingSuggestions": null,
      "selectionTips": null,
      "storageTips": null,
      "season": null,
      "images": {
        "thumbnail": "/images/semolina.webp",
        "hero": "/images/semolina-hero.webp"
      },
      "seo": {
        "title": null,
        "description": null,
        "keywords": null
      },
      "sources": [],
      "published": true
    },
    {
      "id": "poha",
      "name": "Poha / Flattened Rice",
      "slug": "poha",
      "category": "Rice products",
      "botanicalName": "Oryza sativa",
      "commonNames": null,
      "description": null,
      "nutrition": {
        "basis": "per 100 g edible portion, raw",
        "calories_kcal": null,
        "carbohydrates_g": null,
        "fiber_g": null,
        "protein_g": null,
        "fat_g": null,
        "sugars_g": null,
        "vitaminC_mg": null,
        "potassium_mg": null
      },
      "healthBenefits": null,
      "cautions": null,
      "servingSuggestions": null,
      "selectionTips": null,
      "storageTips": null,
      "season": null,
      "images": {
        "thumbnail": "/images/poha.webp",
        "hero": "/images/poha-hero.webp"
      },
      "seo": {
        "title": null,
        "description": null,
        "keywords": null
      },
      "sources": [],
      "published": true
    },
    {
      "id": "toor-dal",
      "name": "Toor Dal / Pigeon Pea",
      "slug": "toor-dal",
      "category": "Pulses",
      "botanicalName": "Cajanus cajan",
      "commonNames": null,
      "description": null,
      "nutrition": {
        "basis": "per 100 g edible portion, raw",
        "calories_kcal": null,
        "carbohydrates_g": null,
        "fiber_g": null,
        "protein_g": null,
        "fat_g": null,
        "sugars_g": null,
        "vitaminC_mg": null,
        "potassium_mg": null
      },
      "healthBenefits": null,
      "cautions": null,
      "servingSuggestions": null,
      "selectionTips": null,
      "storageTips": null,
      "season": null,
      "images": {
        "thumbnail": "/images/toor-dal.webp",
        "hero": "/images/toor-dal-hero.webp"
      },
      "seo": {
        "title": null,
        "description": null,
        "keywords": null
      },
      "sources": [],
      "published": true
    },
    {
      "id": "moong-dal",
      "name": "Moong Dal / Mung Bean",
      "slug": "moong-dal",
      "category": "Pulses",
      "botanicalName": "Vigna radiata",
      "commonNames": null,
      "description": null,
      "nutrition": {
        "basis": "per 100 g edible portion, raw",
        "calories_kcal": null,
        "carbohydrates_g": null,
        "fiber_g": null,
        "protein_g": null,
        "fat_g": null,
        "sugars_g": null,
        "vitaminC_mg": null,
        "potassium_mg": null
      },
      "healthBenefits": null,
      "cautions": null,
      "servingSuggestions": null,
      "selectionTips": null,
      "storageTips": null,
      "season": null,
      "images": {
        "thumbnail": "/images/moong-dal.webp",
        "hero": "/images/moong-dal-hero.webp"
      },
      "seo": {
        "title": null,
        "description": null,
        "keywords": null
      },
      "sources": [],
      "published": true
    },
    {
      "id": "urad-dal",
      "name": "Urad Dal / Black Gram",
      "slug": "urad-dal",
      "category": "Pulses",
      "botanicalName": "Vigna mungo",
      "commonNames": null,
      "description": null,
      "nutrition": {
        "basis": "per 100 g edible portion, raw",
        "calories_kcal": null,
        "carbohydrates_g": null,
        "fiber_g": null,
        "protein_g": null,
        "fat_g": null,
        "sugars_g": null,
        "vitaminC_mg": null,
        "potassium_mg": null
      },
      "healthBenefits": null,
      "cautions": null,
      "servingSuggestions": null,
      "selectionTips": null,
      "storageTips": null,
      "season": null,
      "images": {
        "thumbnail": "/images/urad-dal.webp",
        "hero": "/images/urad-dal-hero.webp"
      },
      "seo": {
        "title": null,
        "description": null,
        "keywords": null
      },
      "sources": [],
      "published": true
    },
    {
      "id": "masoor-dal",
      "name": "Masoor Dal / Lentil",
      "slug": "masoor-dal",
      "category": "Pulses",
      "botanicalName": "Lens culinaris",
      "commonNames": null,
      "description": null,
      "nutrition": {
        "basis": "per 100 g edible portion, raw",
        "calories_kcal": null,
        "carbohydrates_g": null,
        "fiber_g": null,
        "protein_g": null,
        "fat_g": null,
        "sugars_g": null,
        "vitaminC_mg": null,
        "potassium_mg": null
      },
      "healthBenefits": null,
      "cautions": null,
      "servingSuggestions": null,
      "selectionTips": null,
      "storageTips": null,
      "season": null,
      "images": {
        "thumbnail": "/images/masoor-dal.webp",
        "hero": "/images/masoor-dal-hero.webp"
      },
      "seo": {
        "title": null,
        "description": null,
        "keywords": null
      },
      "sources": [],
      "published": true
    },
    {
      "id": "chana-dal",
      "name": "Chana Dal / Split Chickpea",
      "slug": "chana-dal",
      "category": "Pulses",
      "botanicalName": "Cicer arietinum",
      "commonNames": null,
      "description": null,
      "nutrition": {
        "basis": "per 100 g edible portion, raw",
        "calories_kcal": null,
        "carbohydrates_g": null,
        "fiber_g": null,
        "protein_g": null,
        "fat_g": null,
        "sugars_g": null,
        "vitaminC_mg": null,
        "potassium_mg": null
      },
      "healthBenefits": null,
      "cautions": null,
      "servingSuggestions": null,
      "selectionTips": null,
      "storageTips": null,
      "season": null,
      "images": {
        "thumbnail": "/images/chana-dal.webp",
        "hero": "/images/chana-dal-hero.webp"
      },
      "seo": {
        "title": null,
        "description": null,
        "keywords": null
      },
      "sources": [],
      "published": true
    },
    {
      "id": "chickpeas",
      "name": "Chickpeas / Kabuli Chana",
      "slug": "chickpeas",
      "category": "Legumes",
      "botanicalName": "Cicer arietinum",
      "commonNames": null,
      "description": null,
      "nutrition": {
        "basis": "per 100 g edible portion, raw",
        "calories_kcal": null,
        "carbohydrates_g": null,
        "fiber_g": null,
        "protein_g": null,
        "fat_g": null,
        "sugars_g": null,
        "vitaminC_mg": null,
        "potassium_mg": null
      },
      "healthBenefits": null,
      "cautions": null,
      "servingSuggestions": null,
      "selectionTips": null,
      "storageTips": null,
      "season": null,
      "images": {
        "thumbnail": "/images/chickpeas.webp",
        "hero": "/images/chickpeas-hero.webp"
      },
      "seo": {
        "title": null,
        "description": null,
        "keywords": null
      },
      "sources": [],
      "published": true
    },
    {
      "id": "black-chickpeas",
      "name": "Black Chickpeas / Kala Chana",
      "slug": "black-chickpeas",
      "category": "Legumes",
      "botanicalName": "Cicer arietinum",
      "commonNames": null,
      "description": null,
      "nutrition": {
        "basis": "per 100 g edible portion, raw",
        "calories_kcal": null,
        "carbohydrates_g": null,
        "fiber_g": null,
        "protein_g": null,
        "fat_g": null,
        "sugars_g": null,
        "vitaminC_mg": null,
        "potassium_mg": null
      },
      "healthBenefits": null,
      "cautions": null,
      "servingSuggestions": null,
      "selectionTips": null,
      "storageTips": null,
      "season": null,
      "images": {
        "thumbnail": "/images/black-chickpeas.webp",
        "hero": "/images/black-chickpeas-hero.webp"
      },
      "seo": {
        "title": null,
        "description": null,
        "keywords": null
      },
      "sources": [],
      "published": true
    },
    {
      "id": "rajma",
      "name": "Kidney Beans / Rajma",
      "slug": "rajma",
      "category": "Legumes",
      "botanicalName": "Phaseolus vulgaris",
      "commonNames": null,
      "description": null,
      "nutrition": {
        "basis": "per 100 g edible portion, raw",
        "calories_kcal": null,
        "carbohydrates_g": null,
        "fiber_g": null,
        "protein_g": null,
        "fat_g": null,
        "sugars_g": null,
        "vitaminC_mg": null,
        "potassium_mg": null
      },
      "healthBenefits": null,
      "cautions": null,
      "servingSuggestions": null,
      "selectionTips": null,
      "storageTips": null,
      "season": null,
      "images": {
        "thumbnail": "/images/rajma.webp",
        "hero": "/images/rajma-hero.webp"
      },
      "seo": {
        "title": null,
        "description": null,
        "keywords": null
      },
      "sources": [],
      "published": true
    },
    {
      "id": "black-beans",
      "name": "Black Beans",
      "slug": "black-beans",
      "category": "Legumes",
      "botanicalName": "Phaseolus vulgaris",
      "commonNames": null,
      "description": null,
      "nutrition": {
        "basis": "per 100 g edible portion, raw",
        "calories_kcal": null,
        "carbohydrates_g": null,
        "fiber_g": null,
        "protein_g": null,
        "fat_g": null,
        "sugars_g": null,
        "vitaminC_mg": null,
        "potassium_mg": null
      },
      "healthBenefits": null,
      "cautions": null,
      "servingSuggestions": null,
      "selectionTips": null,
      "storageTips": null,
      "season": null,
      "images": {
        "thumbnail": "/images/black-beans.webp",
        "hero": "/images/black-beans-hero.webp"
      },
      "seo": {
        "title": null,
        "description": null,
        "keywords": null
      },
      "sources": [],
      "published": true
    },
    {
      "id": "white-beans",
      "name": "White Beans",
      "slug": "white-beans",
      "category": "Legumes",
      "botanicalName": "Phaseolus vulgaris",
      "commonNames": null,
      "description": null,
      "nutrition": {
        "basis": "per 100 g edible portion, raw",
        "calories_kcal": null,
        "carbohydrates_g": null,
        "fiber_g": null,
        "protein_g": null,
        "fat_g": null,
        "sugars_g": null,
        "vitaminC_mg": null,
        "potassium_mg": null
      },
      "healthBenefits": null,
      "cautions": null,
      "servingSuggestions": null,
      "selectionTips": null,
      "storageTips": null,
      "season": null,
      "images": {
        "thumbnail": "/images/white-beans.webp",
        "hero": "/images/white-beans-hero.webp"
      },
      "seo": {
        "title": null,
        "description": null,
        "keywords": null
      },
      "sources": [],
      "published": true
    },
    {
      "id": "soybeans",
      "name": "Soybeans",
      "slug": "soybeans",
      "category": "Legumes",
      "botanicalName": "Glycine max",
      "commonNames": null,
      "description": null,
      "nutrition": {
        "basis": "per 100 g edible portion, raw",
        "calories_kcal": null,
        "carbohydrates_g": null,
        "fiber_g": null,
        "protein_g": null,
        "fat_g": null,
        "sugars_g": null,
        "vitaminC_mg": null,
        "potassium_mg": null
      },
      "healthBenefits": null,
      "cautions": null,
      "servingSuggestions": null,
      "selectionTips": null,
      "storageTips": null,
      "season": null,
      "images": {
        "thumbnail": "/images/soybeans.webp",
        "hero": "/images/soybeans-hero.webp"
      },
      "seo": {
        "title": null,
        "description": null,
        "keywords": null
      },
      "sources": [],
      "published": true
    },
    {
      "id": "wheat-flour",
      "name": "Whole Wheat Flour / Atta",
      "slug": "wheat-flour",
      "category": "Flours",
      "botanicalName": "Triticum aestivum",
      "commonNames": null,
      "description": null,
      "nutrition": {
        "basis": "per 100 g edible portion, raw",
        "calories_kcal": null,
        "carbohydrates_g": null,
        "fiber_g": null,
        "protein_g": null,
        "fat_g": null,
        "sugars_g": null,
        "vitaminC_mg": null,
        "potassium_mg": null
      },
      "healthBenefits": null,
      "cautions": null,
      "servingSuggestions": null,
      "selectionTips": null,
      "storageTips": null,
      "season": null,
      "images": {
        "thumbnail": "/images/wheat-flour.webp",
        "hero": "/images/wheat-flour-hero.webp"
      },
      "seo": {
        "title": null,
        "description": null,
        "keywords": null
      },
      "sources": [],
      "published": true
    },
    {
      "id": "maida",
      "name": "Refined Wheat Flour / Maida",
      "slug": "maida",
      "category": "Flours",
      "botanicalName": "Triticum aestivum",
      "commonNames": null,
      "description": null,
      "nutrition": {
        "basis": "per 100 g edible portion, raw",
        "calories_kcal": null,
        "carbohydrates_g": null,
        "fiber_g": null,
        "protein_g": null,
        "fat_g": null,
        "sugars_g": null,
        "vitaminC_mg": null,
        "potassium_mg": null
      },
      "healthBenefits": null,
      "cautions": null,
      "servingSuggestions": null,
      "selectionTips": null,
      "storageTips": null,
      "season": null,
      "images": {
        "thumbnail": "/images/maida.webp",
        "hero": "/images/maida-hero.webp"
      },
      "seo": {
        "title": null,
        "description": null,
        "keywords": null
      },
      "sources": [],
      "published": true
    },
    {
      "id": "ragi-flour",
      "name": "Ragi Flour",
      "slug": "ragi-flour",
      "category": "Flours",
      "botanicalName": "Eleusine coracana",
      "commonNames": null,
      "description": null,
      "nutrition": {
        "basis": "per 100 g edible portion, raw",
        "calories_kcal": null,
        "carbohydrates_g": null,
        "fiber_g": null,
        "protein_g": null,
        "fat_g": null,
        "sugars_g": null,
        "vitaminC_mg": null,
        "potassium_mg": null
      },
      "healthBenefits": null,
      "cautions": null,
      "servingSuggestions": null,
      "selectionTips": null,
      "storageTips": null,
      "season": null,
      "images": {
        "thumbnail": "/images/ragi-flour.webp",
        "hero": "/images/ragi-flour-hero.webp"
      },
      "seo": {
        "title": null,
        "description": null,
        "keywords": null
      },
      "sources": [],
      "published": true
    },
    {
      "id": "besan",
      "name": "Besan / Gram Flour",
      "slug": "besan",
      "category": "Flours",
      "botanicalName": "Cicer arietinum",
      "commonNames": null,
      "description": null,
      "nutrition": {
        "basis": "per 100 g edible portion, raw",
        "calories_kcal": null,
        "carbohydrates_g": null,
        "fiber_g": null,
        "protein_g": null,
        "fat_g": null,
        "sugars_g": null,
        "vitaminC_mg": null,
        "potassium_mg": null
      },
      "healthBenefits": null,
      "cautions": null,
      "servingSuggestions": null,
      "selectionTips": null,
      "storageTips": null,
      "season": null,
      "images": {
        "thumbnail": "/images/besan.webp",
        "hero": "/images/besan-hero.webp"
      },
      "seo": {
        "title": null,
        "description": null,
        "keywords": null
      },
      "sources": [],
      "published": true
    },
    {
      "id": "rice-flour",
      "name": "Rice Flour",
      "slug": "rice-flour",
      "category": "Flours",
      "botanicalName": "Oryza sativa",
      "commonNames": null,
      "description": null,
      "nutrition": {
        "basis": "per 100 g edible portion, raw",
        "calories_kcal": null,
        "carbohydrates_g": null,
        "fiber_g": null,
        "protein_g": null,
        "fat_g": null,
        "sugars_g": null,
        "vitaminC_mg": null,
        "potassium_mg": null
      },
      "healthBenefits": null,
      "cautions": null,
      "servingSuggestions": null,
      "selectionTips": null,
      "storageTips": null,
      "season": null,
      "images": {
        "thumbnail": "/images/rice-flour.webp",
        "hero": "/images/rice-flour-hero.webp"
      },
      "seo": {
        "title": null,
        "description": null,
        "keywords": null
      },
      "sources": [],
      "published": true
    },
    {
      "id": "oat-flour",
      "name": "Oat Flour",
      "slug": "oat-flour",
      "category": "Flours",
      "botanicalName": "Avena sativa",
      "commonNames": null,
      "description": null,
      "nutrition": {
        "basis": "per 100 g edible portion, raw",
        "calories_kcal": null,
        "carbohydrates_g": null,
        "fiber_g": null,
        "protein_g": null,
        "fat_g": null,
        "sugars_g": null,
        "vitaminC_mg": null,
        "potassium_mg": null
      },
      "healthBenefits": null,
      "cautions": null,
      "servingSuggestions": null,
      "selectionTips": null,
      "storageTips": null,
      "season": null,
      "images": {
        "thumbnail": "/images/oat-flour.webp",
        "hero": "/images/oat-flour-hero.webp"
      },
      "seo": {
        "title": null,
        "description": null,
        "keywords": null
      },
      "sources": [],
      "published": true
    },
    {
      "id": "groundnut-oil",
      "name": "Groundnut Oil",
      "slug": "groundnut-oil",
      "category": "Cooking oils",
      "botanicalName": "Arachis hypogaea",
      "commonNames": null,
      "description": null,
      "nutrition": {
        "basis": "per 100 g edible portion, raw",
        "calories_kcal": null,
        "carbohydrates_g": null,
        "fiber_g": null,
        "protein_g": null,
        "fat_g": null,
        "sugars_g": null,
        "vitaminC_mg": null,
        "potassium_mg": null
      },
      "healthBenefits": null,
      "cautions": null,
      "servingSuggestions": null,
      "selectionTips": null,
      "storageTips": null,
      "season": null,
      "images": {
        "thumbnail": "/images/groundnut-oil.webp",
        "hero": "/images/groundnut-oil-hero.webp"
      },
      "seo": {
        "title": null,
        "description": null,
        "keywords": null
      },
      "sources": [],
      "published": true
    },
    {
      "id": "sunflower-oil",
      "name": "Sunflower Oil",
      "slug": "sunflower-oil",
      "category": "Cooking oils",
      "botanicalName": "Helianthus annuus",
      "commonNames": null,
      "description": null,
      "nutrition": {
        "basis": "per 100 g edible portion, raw",
        "calories_kcal": null,
        "carbohydrates_g": null,
        "fiber_g": null,
        "protein_g": null,
        "fat_g": null,
        "sugars_g": null,
        "vitaminC_mg": null,
        "potassium_mg": null
      },
      "healthBenefits": null,
      "cautions": null,
      "servingSuggestions": null,
      "selectionTips": null,
      "storageTips": null,
      "season": null,
      "images": {
        "thumbnail": "/images/sunflower-oil.webp",
        "hero": "/images/sunflower-oil-hero.webp"
      },
      "seo": {
        "title": null,
        "description": null,
        "keywords": null
      },
      "sources": [],
      "published": true
    },
    {
      "id": "mustard-oil",
      "name": "Mustard Oil",
      "slug": "mustard-oil",
      "category": "Cooking oils",
      "botanicalName": "Brassica juncea",
      "commonNames": null,
      "description": null,
      "nutrition": {
        "basis": "per 100 g edible portion, raw",
        "calories_kcal": null,
        "carbohydrates_g": null,
        "fiber_g": null,
        "protein_g": null,
        "fat_g": null,
        "sugars_g": null,
        "vitaminC_mg": null,
        "potassium_mg": null
      },
      "healthBenefits": null,
      "cautions": null,
      "servingSuggestions": null,
      "selectionTips": null,
      "storageTips": null,
      "season": null,
      "images": {
        "thumbnail": "/images/mustard-oil.webp",
        "hero": "/images/mustard-oil-hero.webp"
      },
      "seo": {
        "title": null,
        "description": null,
        "keywords": null
      },
      "sources": [],
      "published": true
    },
    {
      "id": "sesame-oil",
      "name": "Sesame Oil",
      "slug": "sesame-oil",
      "category": "Cooking oils",
      "botanicalName": "Sesamum indicum",
      "commonNames": null,
      "description": null,
      "nutrition": {
        "basis": "per 100 g edible portion, raw",
        "calories_kcal": null,
        "carbohydrates_g": null,
        "fiber_g": null,
        "protein_g": null,
        "fat_g": null,
        "sugars_g": null,
        "vitaminC_mg": null,
        "potassium_mg": null
      },
      "healthBenefits": null,
      "cautions": null,
      "servingSuggestions": null,
      "selectionTips": null,
      "storageTips": null,
      "season": null,
      "images": {
        "thumbnail": "/images/sesame-oil.webp",
        "hero": "/images/sesame-oil-hero.webp"
      },
      "seo": {
        "title": null,
        "description": null,
        "keywords": null
      },
      "sources": [],
      "published": true
    },
    {
      "id": "coconut-oil",
      "name": "Coconut Oil",
      "slug": "coconut-oil",
      "category": "Cooking oils",
      "botanicalName": "Cocos nucifera",
      "commonNames": null,
      "description": null,
      "nutrition": {
        "basis": "per 100 g edible portion, raw",
        "calories_kcal": null,
        "carbohydrates_g": null,
        "fiber_g": null,
        "protein_g": null,
        "fat_g": null,
        "sugars_g": null,
        "vitaminC_mg": null,
        "potassium_mg": null
      },
      "healthBenefits": null,
      "cautions": null,
      "servingSuggestions": null,
      "selectionTips": null,
      "storageTips": null,
      "season": null,
      "images": {
        "thumbnail": "/images/coconut-oil.webp",
        "hero": "/images/coconut-oil-hero.webp"
      },
      "seo": {
        "title": null,
        "description": null,
        "keywords": null
      },
      "sources": [],
      "published": true
    },
    {
      "id": "rice-bran-oil",
      "name": "Rice Bran Oil",
      "slug": "rice-bran-oil",
      "category": "Cooking oils",
      "botanicalName": "Oryza sativa",
      "commonNames": null,
      "description": null,
      "nutrition": {
        "basis": "per 100 g edible portion, raw",
        "calories_kcal": null,
        "carbohydrates_g": null,
        "fiber_g": null,
        "protein_g": null,
        "fat_g": null,
        "sugars_g": null,
        "vitaminC_mg": null,
        "potassium_mg": null
      },
      "healthBenefits": null,
      "cautions": null,
      "servingSuggestions": null,
      "selectionTips": null,
      "storageTips": null,
      "season": null,
      "images": {
        "thumbnail": "/images/rice-bran-oil.webp",
        "hero": "/images/rice-bran-oil-hero.webp"
      },
      "seo": {
        "title": null,
        "description": null,
        "keywords": null
      },
      "sources": [],
      "published": true
    },
    {
      "id": "olive-oil",
      "name": "Olive Oil",
      "slug": "olive-oil",
      "category": "Cooking oils",
      "botanicalName": "Olea europaea",
      "commonNames": null,
      "description": null,
      "nutrition": {
        "basis": "per 100 g edible portion, raw",
        "calories_kcal": null,
        "carbohydrates_g": null,
        "fiber_g": null,
        "protein_g": null,
        "fat_g": null,
        "sugars_g": null,
        "vitaminC_mg": null,
        "potassium_mg": null
      },
      "healthBenefits": null,
      "cautions": null,
      "servingSuggestions": null,
      "selectionTips": null,
      "storageTips": null,
      "season": null,
      "images": {
        "thumbnail": "/images/olive-oil.webp",
        "hero": "/images/olive-oil-hero.webp"
      },
      "seo": {
        "title": null,
        "description": null,
        "keywords": null
      },
      "sources": [],
      "published": true
    },
    {
      "id": "canola-oil",
      "name": "Canola / Rapeseed Oil",
      "slug": "canola-oil",
      "category": "Cooking oils",
      "botanicalName": "Brassica napus",
      "commonNames": null,
      "description": null,
      "nutrition": {
        "basis": "per 100 g edible portion, raw",
        "calories_kcal": null,
        "carbohydrates_g": null,
        "fiber_g": null,
        "protein_g": null,
        "fat_g": null,
        "sugars_g": null,
        "vitaminC_mg": null,
        "potassium_mg": null
      },
      "healthBenefits": null,
      "cautions": null,
      "servingSuggestions": null,
      "selectionTips": null,
      "storageTips": null,
      "season": null,
      "images": {
        "thumbnail": "/images/canola-oil.webp",
        "hero": "/images/canola-oil-hero.webp"
      },
      "seo": {
        "title": null,
        "description": null,
        "keywords": null
      },
      "sources": [],
      "published": true
    },
    {
      "id": "ghee",
      "name": "Ghee",
      "slug": "ghee",
      "category": "Dairy fats",
      "botanicalName": null,
      "commonNames": null,
      "description": null,
      "nutrition": {
        "basis": "per 100 g edible portion, raw",
        "calories_kcal": null,
        "carbohydrates_g": null,
        "fiber_g": null,
        "protein_g": null,
        "fat_g": null,
        "sugars_g": null,
        "vitaminC_mg": null,
        "potassium_mg": null
      },
      "healthBenefits": null,
      "cautions": null,
      "servingSuggestions": null,
      "selectionTips": null,
      "storageTips": null,
      "season": null,
      "images": {
        "thumbnail": "/images/ghee.webp",
        "hero": "/images/ghee-hero.webp"
      },
      "seo": {
        "title": null,
        "description": null,
        "keywords": null
      },
      "sources": [],
      "published": true
    },
    {
      "id": "butter",
      "name": "Butter",
      "slug": "butter",
      "category": "Dairy fats",
      "botanicalName": null,
      "commonNames": null,
      "description": null,
      "nutrition": {
        "basis": "per 100 g edible portion, raw",
        "calories_kcal": null,
        "carbohydrates_g": null,
        "fiber_g": null,
        "protein_g": null,
        "fat_g": null,
        "sugars_g": null,
        "vitaminC_mg": null,
        "potassium_mg": null
      },
      "healthBenefits": null,
      "cautions": null,
      "servingSuggestions": null,
      "selectionTips": null,
      "storageTips": null,
      "season": null,
      "images": {
        "thumbnail": "/images/butter.webp",
        "hero": "/images/butter-hero.webp"
      },
      "seo": {
        "title": null,
        "description": null,
        "keywords": null
      },
      "sources": [],
      "published": true
    },
    {
      "id": "white-sugar",
      "name": "White Sugar",
      "slug": "white-sugar",
      "category": "Sweeteners",
      "botanicalName": "Saccharum officinarum",
      "commonNames": null,
      "description": null,
      "nutrition": {
        "basis": "per 100 g edible portion, raw",
        "calories_kcal": null,
        "carbohydrates_g": null,
        "fiber_g": null,
        "protein_g": null,
        "fat_g": null,
        "sugars_g": null,
        "vitaminC_mg": null,
        "potassium_mg": null
      },
      "healthBenefits": null,
      "cautions": null,
      "servingSuggestions": null,
      "selectionTips": null,
      "storageTips": null,
      "season": null,
      "images": {
        "thumbnail": "/images/white-sugar.webp",
        "hero": "/images/white-sugar-hero.webp"
      },
      "seo": {
        "title": null,
        "description": null,
        "keywords": null
      },
      "sources": [],
      "published": true
    },
    {
      "id": "jaggery",
      "name": "Jaggery",
      "slug": "jaggery",
      "category": "Sweeteners",
      "botanicalName": "Saccharum officinarum",
      "commonNames": null,
      "description": null,
      "nutrition": {
        "basis": "per 100 g edible portion, raw",
        "calories_kcal": null,
        "carbohydrates_g": null,
        "fiber_g": null,
        "protein_g": null,
        "fat_g": null,
        "sugars_g": null,
        "vitaminC_mg": null,
        "potassium_mg": null
      },
      "healthBenefits": null,
      "cautions": null,
      "servingSuggestions": null,
      "selectionTips": null,
      "storageTips": null,
      "season": null,
      "images": {
        "thumbnail": "/images/jaggery.webp",
        "hero": "/images/jaggery-hero.webp"
      },
      "seo": {
        "title": null,
        "description": null,
        "keywords": null
      },
      "sources": [],
      "published": true
    },
    {
      "id": "coconut-sugar",
      "name": "Coconut Sugar",
      "slug": "coconut-sugar",
      "category": "Sweeteners",
      "botanicalName": "Cocos nucifera",
      "commonNames": null,
      "description": null,
      "nutrition": {
        "basis": "per 100 g edible portion, raw",
        "calories_kcal": null,
        "carbohydrates_g": null,
        "fiber_g": null,
        "protein_g": null,
        "fat_g": null,
        "sugars_g": null,
        "vitaminC_mg": null,
        "potassium_mg": null
      },
      "healthBenefits": null,
      "cautions": null,
      "servingSuggestions": null,
      "selectionTips": null,
      "storageTips": null,
      "season": null,
      "images": {
        "thumbnail": "/images/coconut-sugar.webp",
        "hero": "/images/coconut-sugar-hero.webp"
      },
      "seo": {
        "title": null,
        "description": null,
        "keywords": null
      },
      "sources": [],
      "published": true
    },
    {
      "id": "honey",
      "name": "Honey",
      "slug": "honey",
      "category": "Sweeteners",
      "botanicalName": null,
      "commonNames": null,
      "description": null,
      "nutrition": {
        "basis": "per 100 g edible portion, raw",
        "calories_kcal": null,
        "carbohydrates_g": null,
        "fiber_g": null,
        "protein_g": null,
        "fat_g": null,
        "sugars_g": null,
        "vitaminC_mg": null,
        "potassium_mg": null
      },
      "healthBenefits": null,
      "cautions": null,
      "servingSuggestions": null,
      "selectionTips": null,
      "storageTips": null,
      "season": null,
      "images": {
        "thumbnail": "/images/honey.webp",
        "hero": "/images/honey-hero.webp"
      },
      "seo": {
        "title": null,
        "description": null,
        "keywords": null
      },
      "sources": [],
      "published": true
    },
    {
      "id": "rock-salt",
      "name": "Rock Salt",
      "slug": "rock-salt",
      "category": "Salt",
      "botanicalName": null,
      "commonNames": null,
      "description": null,
      "nutrition": {
        "basis": "per 100 g edible portion, raw",
        "calories_kcal": null,
        "carbohydrates_g": null,
        "fiber_g": null,
        "protein_g": null,
        "fat_g": null,
        "sugars_g": null,
        "vitaminC_mg": null,
        "potassium_mg": null
      },
      "healthBenefits": null,
      "cautions": null,
      "servingSuggestions": null,
      "selectionTips": null,
      "storageTips": null,
      "season": null,
      "images": {
        "thumbnail": "/images/rock-salt.webp",
        "hero": "/images/rock-salt-hero.webp"
      },
      "seo": {
        "title": null,
        "description": null,
        "keywords": null
      },
      "sources": [],
      "published": true
    },
    {
      "id": "sea-salt",
      "name": "Sea Salt",
      "slug": "sea-salt",
      "category": "Salt",
      "botanicalName": null,
      "commonNames": null,
      "description": null,
      "nutrition": {
        "basis": "per 100 g edible portion, raw",
        "calories_kcal": null,
        "carbohydrates_g": null,
        "fiber_g": null,
        "protein_g": null,
        "fat_g": null,
        "sugars_g": null,
        "vitaminC_mg": null,
        "potassium_mg": null
      },
      "healthBenefits": null,
      "cautions": null,
      "servingSuggestions": null,
      "selectionTips": null,
      "storageTips": null,
      "season": null,
      "images": {
        "thumbnail": "/images/sea-salt.webp",
        "hero": "/images/sea-salt-hero.webp"
      },
      "seo": {
        "title": null,
        "description": null,
        "keywords": null
      },
      "sources": [],
      "published": true
    },
    {
      "id": "iodized-salt",
      "name": "Iodized Salt",
      "slug": "iodized-salt",
      "category": "Salt",
      "botanicalName": null,
      "commonNames": null,
      "description": null,
      "nutrition": {
        "basis": "per 100 g edible portion, raw",
        "calories_kcal": null,
        "carbohydrates_g": null,
        "fiber_g": null,
        "protein_g": null,
        "fat_g": null,
        "sugars_g": null,
        "vitaminC_mg": null,
        "potassium_mg": null
      },
      "healthBenefits": null,
      "cautions": null,
      "servingSuggestions": null,
      "selectionTips": null,
      "storageTips": null,
      "season": null,
      "images": {
        "thumbnail": "/images/iodized-salt.webp",
        "hero": "/images/iodized-salt-hero.webp"
      },
      "seo": {
        "title": null,
        "description": null,
        "keywords": null
      },
      "sources": [],
      "published": true
    },
    {
      "id": "turmeric",
      "name": "Turmeric",
      "slug": "turmeric",
      "category": "Spices",
      "botanicalName": "Curcuma longa",
      "commonNames": null,
      "description": null,
      "nutrition": {
        "basis": "per 100 g edible portion, raw",
        "calories_kcal": null,
        "carbohydrates_g": null,
        "fiber_g": null,
        "protein_g": null,
        "fat_g": null,
        "sugars_g": null,
        "vitaminC_mg": null,
        "potassium_mg": null
      },
      "healthBenefits": null,
      "cautions": null,
      "servingSuggestions": null,
      "selectionTips": null,
      "storageTips": null,
      "season": null,
      "images": {
        "thumbnail": "/images/turmeric.webp",
        "hero": "/images/turmeric-hero.webp"
      },
      "seo": {
        "title": null,
        "description": null,
        "keywords": null
      },
      "sources": [],
      "published": true
    },
    {
      "id": "black-pepper",
      "name": "Black Pepper",
      "slug": "black-pepper",
      "category": "Spices",
      "botanicalName": "Piper nigrum",
      "commonNames": null,
      "description": null,
      "nutrition": {
        "basis": "per 100 g edible portion, raw",
        "calories_kcal": null,
        "carbohydrates_g": null,
        "fiber_g": null,
        "protein_g": null,
        "fat_g": null,
        "sugars_g": null,
        "vitaminC_mg": null,
        "potassium_mg": null
      },
      "healthBenefits": null,
      "cautions": null,
      "servingSuggestions": null,
      "selectionTips": null,
      "storageTips": null,
      "season": null,
      "images": {
        "thumbnail": "/images/black-pepper.webp",
        "hero": "/images/black-pepper-hero.webp"
      },
      "seo": {
        "title": null,
        "description": null,
        "keywords": null
      },
      "sources": [],
      "published": true
    },
    {
      "id": "cumin",
      "name": "Cumin",
      "slug": "cumin",
      "category": "Spices",
      "botanicalName": "Cuminum cyminum",
      "commonNames": null,
      "description": null,
      "nutrition": {
        "basis": "per 100 g edible portion, raw",
        "calories_kcal": null,
        "carbohydrates_g": null,
        "fiber_g": null,
        "protein_g": null,
        "fat_g": null,
        "sugars_g": null,
        "vitaminC_mg": null,
        "potassium_mg": null
      },
      "healthBenefits": null,
      "cautions": null,
      "servingSuggestions": null,
      "selectionTips": null,
      "storageTips": null,
      "season": null,
      "images": {
        "thumbnail": "/images/cumin.webp",
        "hero": "/images/cumin-hero.webp"
      },
      "seo": {
        "title": null,
        "description": null,
        "keywords": null
      },
      "sources": [],
      "published": true
    },
    {
      "id": "coriander-seeds",
      "name": "Coriander Seeds",
      "slug": "coriander-seeds",
      "category": "Spices",
      "botanicalName": "Coriandrum sativum",
      "commonNames": null,
      "description": null,
      "nutrition": {
        "basis": "per 100 g edible portion, raw",
        "calories_kcal": null,
        "carbohydrates_g": null,
        "fiber_g": null,
        "protein_g": null,
        "fat_g": null,
        "sugars_g": null,
        "vitaminC_mg": null,
        "potassium_mg": null
      },
      "healthBenefits": null,
      "cautions": null,
      "servingSuggestions": null,
      "selectionTips": null,
      "storageTips": null,
      "season": null,
      "images": {
        "thumbnail": "/images/coriander-seeds.webp",
        "hero": "/images/coriander-seeds-hero.webp"
      },
      "seo": {
        "title": null,
        "description": null,
        "keywords": null
      },
      "sources": [],
      "published": true
    },
    {
      "id": "cinnamon",
      "name": "Cinnamon",
      "slug": "cinnamon",
      "category": "Spices",
      "botanicalName": "Cinnamomum spp.",
      "commonNames": null,
      "description": null,
      "nutrition": {
        "basis": "per 100 g edible portion, raw",
        "calories_kcal": null,
        "carbohydrates_g": null,
        "fiber_g": null,
        "protein_g": null,
        "fat_g": null,
        "sugars_g": null,
        "vitaminC_mg": null,
        "potassium_mg": null
      },
      "healthBenefits": null,
      "cautions": null,
      "servingSuggestions": null,
      "selectionTips": null,
      "storageTips": null,
      "season": null,
      "images": {
        "thumbnail": "/images/cinnamon.webp",
        "hero": "/images/cinnamon-hero.webp"
      },
      "seo": {
        "title": null,
        "description": null,
        "keywords": null
      },
      "sources": [],
      "published": true
    },
    {
      "id": "cardamom",
      "name": "Cardamom",
      "slug": "cardamom",
      "category": "Spices",
      "botanicalName": "Elettaria cardamomum",
      "commonNames": null,
      "description": null,
      "nutrition": {
        "basis": "per 100 g edible portion, raw",
        "calories_kcal": null,
        "carbohydrates_g": null,
        "fiber_g": null,
        "protein_g": null,
        "fat_g": null,
        "sugars_g": null,
        "vitaminC_mg": null,
        "potassium_mg": null
      },
      "healthBenefits": null,
      "cautions": null,
      "servingSuggestions": null,
      "selectionTips": null,
      "storageTips": null,
      "season": null,
      "images": {
        "thumbnail": "/images/cardamom.webp",
        "hero": "/images/cardamom-hero.webp"
      },
      "seo": {
        "title": null,
        "description": null,
        "keywords": null
      },
      "sources": [],
      "published": true
    },
    {
      "id": "cloves",
      "name": "Cloves",
      "slug": "cloves",
      "category": "Spices",
      "botanicalName": "Syzygium aromaticum",
      "commonNames": null,
      "description": null,
      "nutrition": {
        "basis": "per 100 g edible portion, raw",
        "calories_kcal": null,
        "carbohydrates_g": null,
        "fiber_g": null,
        "protein_g": null,
        "fat_g": null,
        "sugars_g": null,
        "vitaminC_mg": null,
        "potassium_mg": null
      },
      "healthBenefits": null,
      "cautions": null,
      "servingSuggestions": null,
      "selectionTips": null,
      "storageTips": null,
      "season": null,
      "images": {
        "thumbnail": "/images/cloves.webp",
        "hero": "/images/cloves-hero.webp"
      },
      "seo": {
        "title": null,
        "description": null,
        "keywords": null
      },
      "sources": [],
      "published": true
    },
    {
      "id": "fenugreek-seeds",
      "name": "Fenugreek Seeds",
      "slug": "fenugreek-seeds",
      "category": "Spices",
      "botanicalName": "Trigonella foenum-graecum",
      "commonNames": null,
      "description": null,
      "nutrition": {
        "basis": "per 100 g edible portion, raw",
        "calories_kcal": null,
        "carbohydrates_g": null,
        "fiber_g": null,
        "protein_g": null,
        "fat_g": null,
        "sugars_g": null,
        "vitaminC_mg": null,
        "potassium_mg": null
      },
      "healthBenefits": null,
      "cautions": null,
      "servingSuggestions": null,
      "selectionTips": null,
      "storageTips": null,
      "season": null,
      "images": {
        "thumbnail": "/images/fenugreek-seeds.webp",
        "hero": "/images/fenugreek-seeds-hero.webp"
      },
      "seo": {
        "title": null,
        "description": null,
        "keywords": null
      },
      "sources": [],
      "published": true
    },
    {
      "id": "mustard-seeds",
      "name": "Mustard Seeds",
      "slug": "mustard-seeds",
      "category": "Spices",
      "botanicalName": "Brassica spp.",
      "commonNames": null,
      "description": null,
      "nutrition": {
        "basis": "per 100 g edible portion, raw",
        "calories_kcal": null,
        "carbohydrates_g": null,
        "fiber_g": null,
        "protein_g": null,
        "fat_g": null,
        "sugars_g": null,
        "vitaminC_mg": null,
        "potassium_mg": null
      },
      "healthBenefits": null,
      "cautions": null,
      "servingSuggestions": null,
      "selectionTips": null,
      "storageTips": null,
      "season": null,
      "images": {
        "thumbnail": "/images/mustard-seeds.webp",
        "hero": "/images/mustard-seeds-hero.webp"
      },
      "seo": {
        "title": null,
        "description": null,
        "keywords": null
      },
      "sources": [],
      "published": true
    },
    {
      "id": "fennel-seeds",
      "name": "Fennel Seeds",
      "slug": "fennel-seeds",
      "category": "Spices",
      "botanicalName": "Foeniculum vulgare",
      "commonNames": null,
      "description": null,
      "nutrition": {
        "basis": "per 100 g edible portion, raw",
        "calories_kcal": null,
        "carbohydrates_g": null,
        "fiber_g": null,
        "protein_g": null,
        "fat_g": null,
        "sugars_g": null,
        "vitaminC_mg": null,
        "potassium_mg": null
      },
      "healthBenefits": null,
      "cautions": null,
      "servingSuggestions": null,
      "selectionTips": null,
      "storageTips": null,
      "season": null,
      "images": {
        "thumbnail": "/images/fennel-seeds.webp",
        "hero": "/images/fennel-seeds-hero.webp"
      },
      "seo": {
        "title": null,
        "description": null,
        "keywords": null
      },
      "sources": [],
      "published": true
    },
    {
      "id": "ajwain",
      "name": "Ajwain / Carom Seeds",
      "slug": "ajwain",
      "category": "Spices",
      "botanicalName": "Trachyspermum ammi",
      "commonNames": null,
      "description": null,
      "nutrition": {
        "basis": "per 100 g edible portion, raw",
        "calories_kcal": null,
        "carbohydrates_g": null,
        "fiber_g": null,
        "protein_g": null,
        "fat_g": null,
        "sugars_g": null,
        "vitaminC_mg": null,
        "potassium_mg": null
      },
      "healthBenefits": null,
      "cautions": null,
      "servingSuggestions": null,
      "selectionTips": null,
      "storageTips": null,
      "season": null,
      "images": {
        "thumbnail": "/images/ajwain.webp",
        "hero": "/images/ajwain-hero.webp"
      },
      "seo": {
        "title": null,
        "description": null,
        "keywords": null
      },
      "sources": [],
      "published": true
    },
    {
      "id": "asafoetida",
      "name": "Asafoetida / Hing",
      "slug": "asafoetida",
      "category": "Spices",
      "botanicalName": "Ferula spp.",
      "commonNames": null,
      "description": null,
      "nutrition": {
        "basis": "per 100 g edible portion, raw",
        "calories_kcal": null,
        "carbohydrates_g": null,
        "fiber_g": null,
        "protein_g": null,
        "fat_g": null,
        "sugars_g": null,
        "vitaminC_mg": null,
        "potassium_mg": null
      },
      "healthBenefits": null,
      "cautions": null,
      "servingSuggestions": null,
      "selectionTips": null,
      "storageTips": null,
      "season": null,
      "images": {
        "thumbnail": "/images/asafoetida.webp",
        "hero": "/images/asafoetida-hero.webp"
      },
      "seo": {
        "title": null,
        "description": null,
        "keywords": null
      },
      "sources": [],
      "published": true
    },
    {
      "id": "dry-red-chilli",
      "name": "Dried Red Chilli",
      "slug": "dry-red-chilli",
      "category": "Spices",
      "botanicalName": "Capsicum annuum",
      "commonNames": null,
      "description": null,
      "nutrition": {
        "basis": "per 100 g edible portion, raw",
        "calories_kcal": null,
        "carbohydrates_g": null,
        "fiber_g": null,
        "protein_g": null,
        "fat_g": null,
        "sugars_g": null,
        "vitaminC_mg": null,
        "potassium_mg": null
      },
      "healthBenefits": null,
      "cautions": null,
      "servingSuggestions": null,
      "selectionTips": null,
      "storageTips": null,
      "season": null,
      "images": {
        "thumbnail": "/images/dry-red-chilli.webp",
        "hero": "/images/dry-red-chilli-hero.webp"
      },
      "seo": {
        "title": null,
        "description": null,
        "keywords": null
      },
      "sources": [],
      "published": true
    },
    {
      "id": "bay-leaf",
      "name": "Bay Leaf",
      "slug": "bay-leaf",
      "category": "Spices",
      "botanicalName": "Cinnamomum tamala",
      "commonNames": null,
      "description": null,
      "nutrition": {
        "basis": "per 100 g edible portion, raw",
        "calories_kcal": null,
        "carbohydrates_g": null,
        "fiber_g": null,
        "protein_g": null,
        "fat_g": null,
        "sugars_g": null,
        "vitaminC_mg": null,
        "potassium_mg": null
      },
      "healthBenefits": null,
      "cautions": null,
      "servingSuggestions": null,
      "selectionTips": null,
      "storageTips": null,
      "season": null,
      "images": {
        "thumbnail": "/images/bay-leaf.webp",
        "hero": "/images/bay-leaf-hero.webp"
      },
      "seo": {
        "title": null,
        "description": null,
        "keywords": null
      },
      "sources": [],
      "published": true
    },
    {
      "id": "star-anise",
      "name": "Star Anise",
      "slug": "star-anise",
      "category": "Spices",
      "botanicalName": "Illicium verum",
      "commonNames": null,
      "description": null,
      "nutrition": {
        "basis": "per 100 g edible portion, raw",
        "calories_kcal": null,
        "carbohydrates_g": null,
        "fiber_g": null,
        "protein_g": null,
        "fat_g": null,
        "sugars_g": null,
        "vitaminC_mg": null,
        "potassium_mg": null
      },
      "healthBenefits": null,
      "cautions": null,
      "servingSuggestions": null,
      "selectionTips": null,
      "storageTips": null,
      "season": null,
      "images": {
        "thumbnail": "/images/star-anise.webp",
        "hero": "/images/star-anise-hero.webp"
      },
      "seo": {
        "title": null,
        "description": null,
        "keywords": null
      },
      "sources": [],
      "published": true
    },
    {
      "id": "nutmeg",
      "name": "Nutmeg",
      "slug": "nutmeg",
      "category": "Spices",
      "botanicalName": "Myristica fragrans",
      "commonNames": null,
      "description": null,
      "nutrition": {
        "basis": "per 100 g edible portion, raw",
        "calories_kcal": null,
        "carbohydrates_g": null,
        "fiber_g": null,
        "protein_g": null,
        "fat_g": null,
        "sugars_g": null,
        "vitaminC_mg": null,
        "potassium_mg": null
      },
      "healthBenefits": null,
      "cautions": null,
      "servingSuggestions": null,
      "selectionTips": null,
      "storageTips": null,
      "season": null,
      "images": {
        "thumbnail": "/images/nutmeg.webp",
        "hero": "/images/nutmeg-hero.webp"
      },
      "seo": {
        "title": null,
        "description": null,
        "keywords": null
      },
      "sources": [],
      "published": true
    },
    {
      "id": "saffron",
      "name": "Saffron",
      "slug": "saffron",
      "category": "Spices",
      "botanicalName": "Crocus sativus",
      "commonNames": null,
      "description": null,
      "nutrition": {
        "basis": "per 100 g edible portion, raw",
        "calories_kcal": null,
        "carbohydrates_g": null,
        "fiber_g": null,
        "protein_g": null,
        "fat_g": null,
        "sugars_g": null,
        "vitaminC_mg": null,
        "potassium_mg": null
      },
      "healthBenefits": null,
      "cautions": null,
      "servingSuggestions": null,
      "selectionTips": null,
      "storageTips": null,
      "season": null,
      "images": {
        "thumbnail": "/images/saffron.webp",
        "hero": "/images/saffron-hero.webp"
      },
      "seo": {
        "title": null,
        "description": null,
        "keywords": null
      },
      "sources": [],
      "published": true
    },
    {
      "id": "tea",
      "name": "Tea",
      "slug": "tea",
      "category": "Beverages",
      "botanicalName": "Camellia sinensis",
      "commonNames": null,
      "description": null,
      "nutrition": {
        "basis": "per 100 g edible portion, raw",
        "calories_kcal": null,
        "carbohydrates_g": null,
        "fiber_g": null,
        "protein_g": null,
        "fat_g": null,
        "sugars_g": null,
        "vitaminC_mg": null,
        "potassium_mg": null
      },
      "healthBenefits": null,
      "cautions": null,
      "servingSuggestions": null,
      "selectionTips": null,
      "storageTips": null,
      "season": null,
      "images": {
        "thumbnail": "/images/tea.webp",
        "hero": "/images/tea-hero.webp"
      },
      "seo": {
        "title": null,
        "description": null,
        "keywords": null
      },
      "sources": [],
      "published": true
    },
    {
      "id": "coffee",
      "name": "Coffee",
      "slug": "coffee",
      "category": "Beverages",
      "botanicalName": "Coffea spp.",
      "commonNames": null,
      "description": null,
      "nutrition": {
        "basis": "per 100 g edible portion, raw",
        "calories_kcal": null,
        "carbohydrates_g": null,
        "fiber_g": null,
        "protein_g": null,
        "fat_g": null,
        "sugars_g": null,
        "vitaminC_mg": null,
        "potassium_mg": null
      },
      "healthBenefits": null,
      "cautions": null,
      "servingSuggestions": null,
      "selectionTips": null,
      "storageTips": null,
      "season": null,
      "images": {
        "thumbnail": "/images/coffee.webp",
        "hero": "/images/coffee-hero.webp"
      },
      "seo": {
        "title": null,
        "description": null,
        "keywords": null
      },
      "sources": [],
      "published": true
    },
    {
      "id": "cocoa-powder",
      "name": "Cocoa Powder",
      "slug": "cocoa-powder",
      "category": "Baking",
      "botanicalName": "Theobroma cacao",
      "commonNames": null,
      "description": null,
      "nutrition": {
        "basis": "per 100 g edible portion, raw",
        "calories_kcal": null,
        "carbohydrates_g": null,
        "fiber_g": null,
        "protein_g": null,
        "fat_g": null,
        "sugars_g": null,
        "vitaminC_mg": null,
        "potassium_mg": null
      },
      "healthBenefits": null,
      "cautions": null,
      "servingSuggestions": null,
      "selectionTips": null,
      "storageTips": null,
      "season": null,
      "images": {
        "thumbnail": "/images/cocoa-powder.webp",
        "hero": "/images/cocoa-powder-hero.webp"
      },
      "seo": {
        "title": null,
        "description": null,
        "keywords": null
      },
      "sources": [],
      "published": true
    },
    {
      "id": "corn-starch",
      "name": "Corn Starch",
      "slug": "corn-starch",
      "category": "Pantry staples",
      "botanicalName": "Zea mays",
      "commonNames": null,
      "description": null,
      "nutrition": {
        "basis": "per 100 g edible portion, raw",
        "calories_kcal": null,
        "carbohydrates_g": null,
        "fiber_g": null,
        "protein_g": null,
        "fat_g": null,
        "sugars_g": null,
        "vitaminC_mg": null,
        "potassium_mg": null
      },
      "healthBenefits": null,
      "cautions": null,
      "servingSuggestions": null,
      "selectionTips": null,
      "storageTips": null,
      "season": null,
      "images": {
        "thumbnail": "/images/corn-starch.webp",
        "hero": "/images/corn-starch-hero.webp"
      },
      "seo": {
        "title": null,
        "description": null,
        "keywords": null
      },
      "sources": [],
      "published": true
    },
    {
      "id": "baking-soda",
      "name": "Baking Soda",
      "slug": "baking-soda",
      "category": "Baking",
      "botanicalName": null,
      "commonNames": null,
      "description": null,
      "nutrition": {
        "basis": "per 100 g edible portion, raw",
        "calories_kcal": null,
        "carbohydrates_g": null,
        "fiber_g": null,
        "protein_g": null,
        "fat_g": null,
        "sugars_g": null,
        "vitaminC_mg": null,
        "potassium_mg": null
      },
      "healthBenefits": null,
      "cautions": null,
      "servingSuggestions": null,
      "selectionTips": null,
      "storageTips": null,
      "season": null,
      "images": {
        "thumbnail": "/images/baking-soda.webp",
        "hero": "/images/baking-soda-hero.webp"
      },
      "seo": {
        "title": null,
        "description": null,
        "keywords": null
      },
      "sources": [],
      "published": true
    },
    {
      "id": "baking-powder",
      "name": "Baking Powder",
      "slug": "baking-powder",
      "category": "Baking",
      "botanicalName": null,
      "commonNames": null,
      "description": null,
      "nutrition": {
        "basis": "per 100 g edible portion, raw",
        "calories_kcal": null,
        "carbohydrates_g": null,
        "fiber_g": null,
        "protein_g": null,
        "fat_g": null,
        "sugars_g": null,
        "vitaminC_mg": null,
        "potassium_mg": null
      },
      "healthBenefits": null,
      "cautions": null,
      "servingSuggestions": null,
      "selectionTips": null,
      "storageTips": null,
      "season": null,
      "images": {
        "thumbnail": "/images/baking-powder.webp",
        "hero": "/images/baking-powder-hero.webp"
      },
      "seo": {
        "title": null,
        "description": null,
        "keywords": null
      },
      "sources": [],
      "published": true
    },
    {
      "id": "vinegar",
      "name": "Vinegar",
      "slug": "vinegar",
      "category": "Condiments",
      "botanicalName": null,
      "commonNames": null,
      "description": null,
      "nutrition": {
        "basis": "per 100 g edible portion, raw",
        "calories_kcal": null,
        "carbohydrates_g": null,
        "fiber_g": null,
        "protein_g": null,
        "fat_g": null,
        "sugars_g": null,
        "vitaminC_mg": null,
        "potassium_mg": null
      },
      "healthBenefits": null,
      "cautions": null,
      "servingSuggestions": null,
      "selectionTips": null,
      "storageTips": null,
      "season": null,
      "images": {
        "thumbnail": "/images/vinegar.webp",
        "hero": "/images/vinegar-hero.webp"
      },
      "seo": {
        "title": null,
        "description": null,
        "keywords": null
      },
      "sources": [],
      "published": true
    },
    {
      "id": "apple-cider-vinegar",
      "name": "Apple Cider Vinegar",
      "slug": "apple-cider-vinegar",
      "category": "Condiments",
      "botanicalName": "Malus domestica",
      "commonNames": null,
      "description": null,
      "nutrition": {
        "basis": "per 100 g edible portion, raw",
        "calories_kcal": null,
        "carbohydrates_g": null,
        "fiber_g": null,
        "protein_g": null,
        "fat_g": null,
        "sugars_g": null,
        "vitaminC_mg": null,
        "potassium_mg": null
      },
      "healthBenefits": null,
      "cautions": null,
      "servingSuggestions": null,
      "selectionTips": null,
      "storageTips": null,
      "season": null,
      "images": {
        "thumbnail": "/images/apple-cider-vinegar.webp",
        "hero": "/images/apple-cider-vinegar-hero.webp"
      },
      "seo": {
        "title": null,
        "description": null,
        "keywords": null
      },
      "sources": [],
      "published": true
    },
    {
      "id": "soy-sauce",
      "name": "Soy Sauce",
      "slug": "soy-sauce",
      "category": "Condiments",
      "botanicalName": "Glycine max",
      "commonNames": null,
      "description": null,
      "nutrition": {
        "basis": "per 100 g edible portion, raw",
        "calories_kcal": null,
        "carbohydrates_g": null,
        "fiber_g": null,
        "protein_g": null,
        "fat_g": null,
        "sugars_g": null,
        "vitaminC_mg": null,
        "potassium_mg": null
      },
      "healthBenefits": null,
      "cautions": null,
      "servingSuggestions": null,
      "selectionTips": null,
      "storageTips": null,
      "season": null,
      "images": {
        "thumbnail": "/images/soy-sauce.webp",
        "hero": "/images/soy-sauce-hero.webp"
      },
      "seo": {
        "title": null,
        "description": null,
        "keywords": null
      },
      "sources": [],
      "published": true
    },
    {
      "id": "tomato-paste",
      "name": "Tomato Paste",
      "slug": "tomato-paste",
      "category": "Pantry staples",
      "botanicalName": "Solanum lycopersicum",
      "commonNames": null,
      "description": null,
      "nutrition": {
        "basis": "per 100 g edible portion, raw",
        "calories_kcal": null,
        "carbohydrates_g": null,
        "fiber_g": null,
        "protein_g": null,
        "fat_g": null,
        "sugars_g": null,
        "vitaminC_mg": null,
        "potassium_mg": null
      },
      "healthBenefits": null,
      "cautions": null,
      "servingSuggestions": null,
      "selectionTips": null,
      "storageTips": null,
      "season": null,
      "images": {
        "thumbnail": "/images/tomato-paste.webp",
        "hero": "/images/tomato-paste-hero.webp"
      },
      "seo": {
        "title": null,
        "description": null,
        "keywords": null
      },
      "sources": [],
      "published": true
    },
    {
      "id": "coconut-milk",
      "name": "Coconut Milk",
      "slug": "coconut-milk",
      "category": "Pantry staples",
      "botanicalName": "Cocos nucifera",
      "commonNames": null,
      "description": null,
      "nutrition": {
        "basis": "per 100 g edible portion, raw",
        "calories_kcal": null,
        "carbohydrates_g": null,
        "fiber_g": null,
        "protein_g": null,
        "fat_g": null,
        "sugars_g": null,
        "vitaminC_mg": null,
        "potassium_mg": null
      },
      "healthBenefits": null,
      "cautions": null,
      "servingSuggestions": null,
      "selectionTips": null,
      "storageTips": null,
      "season": null,
      "images": {
        "thumbnail": "/images/coconut-milk.webp",
        "hero": "/images/coconut-milk-hero.webp"
      },
      "seo": {
        "title": null,
        "description": null,
        "keywords": null
      },
      "sources": [],
      "published": true
    },
    {
      "id": "tamarind-paste",
      "name": "Tamarind Paste",
      "slug": "tamarind-paste",
      "category": "Pantry staples",
      "botanicalName": "Tamarindus indica",
      "commonNames": null,
      "description": null,
      "nutrition": {
        "basis": "per 100 g edible portion, raw",
        "calories_kcal": null,
        "carbohydrates_g": null,
        "fiber_g": null,
        "protein_g": null,
        "fat_g": null,
        "sugars_g": null,
        "vitaminC_mg": null,
        "potassium_mg": null
      },
      "healthBenefits": null,
      "cautions": null,
      "servingSuggestions": null,
      "selectionTips": null,
      "storageTips": null,
      "season": null,
      "images": {
        "thumbnail": "/images/tamarind-paste.webp",
        "hero": "/images/tamarind-paste-hero.webp"
      },
      "seo": {
        "title": null,
        "description": null,
        "keywords": null
      },
      "sources": [],
      "published": true
    },
    {
      "id": "desiccated-coconut",
      "name": "Desiccated Coconut",
      "slug": "desiccated-coconut",
      "category": "Pantry staples",
      "botanicalName": "Cocos nucifera",
      "commonNames": null,
      "description": null,
      "nutrition": {
        "basis": "per 100 g edible portion, raw",
        "calories_kcal": null,
        "carbohydrates_g": null,
        "fiber_g": null,
        "protein_g": null,
        "fat_g": null,
        "sugars_g": null,
        "vitaminC_mg": null,
        "potassium_mg": null
      },
      "healthBenefits": null,
      "cautions": null,
      "servingSuggestions": null,
      "selectionTips": null,
      "storageTips": null,
      "season": null,
      "images": {
        "thumbnail": "/images/desiccated-coconut.webp",
        "hero": "/images/desiccated-coconut-hero.webp"
      },
      "seo": {
        "title": null,
        "description": null,
        "keywords": null
      },
      "sources": [],
      "published": true
    },
    {
      "id": "dry-coconut",
      "name": "Dry Coconut / Copra",
      "slug": "dry-coconut",
      "category": "Pantry staples",
      "botanicalName": "Cocos nucifera",
      "commonNames": null,
      "description": null,
      "nutrition": {
        "basis": "per 100 g edible portion, raw",
        "calories_kcal": null,
        "carbohydrates_g": null,
        "fiber_g": null,
        "protein_g": null,
        "fat_g": null,
        "sugars_g": null,
        "vitaminC_mg": null,
        "potassium_mg": null
      },
      "healthBenefits": null,
      "cautions": null,
      "servingSuggestions": null,
      "selectionTips": null,
      "storageTips": null,
      "season": null,
      "images": {
        "thumbnail": "/images/dry-coconut.webp",
        "hero": "/images/dry-coconut-hero.webp"
      },
      "seo": {
        "title": null,
        "description": null,
        "keywords": null
      },
      "sources": [],
      "published": true
    }
  ]
};
