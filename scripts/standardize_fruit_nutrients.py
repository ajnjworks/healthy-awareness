import json

# Comprehensive nutrient data for standardization
NUTRIENT_DATA = {
    'apricot': {'vit_c': 10.0, 'fiber': 2.0, 'cal': 48, 'carb': 11.1, 'prot': 1.4, 'fat': 0.4, 'sug': 9.2, 'pot': 259},
    'nectarine': {'vit_c': 5.4, 'fiber': 1.7, 'cal': 44, 'carb': 10.6, 'prot': 1.1, 'fat': 0.3, 'sug': 7.9, 'pot': 201},
    'dragon-fruit': {'vit_c': 20.5, 'fiber': 2.9, 'cal': 60, 'carb': 13.0, 'prot': 1.2, 'fat': 0.6, 'sug': 9.6, 'pot': 220},
    'passion-fruit': {'vit_c': 30.0, 'fiber': 10.4, 'cal': 97, 'carb': 23.4, 'prot': 2.2, 'fat': 0.7, 'sug': 11.2, 'pot': 348},
    'lychee': {'vit_c': 71.5, 'fiber': 1.3, 'cal': 66, 'carb': 16.5, 'prot': 0.8, 'fat': 0.4, 'sug': 15.2, 'pot': 171},
    'rambutan': {'vit_c': 4.9, 'fiber': 0.9, 'cal': 68, 'carb': 16.0, 'prot': 0.7, 'fat': 0.2, 'sug': 14.5, 'pot': 42},
    'longan': {'vit_c': 84.0, 'fiber': 1.1, 'cal': 60, 'carb': 15.1, 'prot': 1.3, 'fat': 0.1, 'sug': 13.8, 'pot': 266},
    'mangosteen': {'vit_c': 2.9, 'fiber': 1.8, 'cal': 73, 'carb': 17.9, 'prot': 0.4, 'fat': 0.6, 'sug': 16.1, 'pot': 48},
    'jackfruit': {'vit_c': 13.7, 'fiber': 1.5, 'cal': 95, 'carb': 23.2, 'prot': 1.7, 'fat': 0.6, 'sug': 19.1, 'pot': 448},
    'custard-apple': {'vit_c': 36.3, 'fiber': 4.4, 'cal': 101, 'carb': 25.2, 'prot': 1.7, 'fat': 0.6, 'sug': 18.0, 'pot': 382},
    'soursop': {'vit_c': 20.6, 'fiber': 3.3, 'cal': 66, 'carb': 16.8, 'prot': 1.0, 'fat': 0.3, 'sug': 13.5, 'pot': 278},
    'sapodilla': {'vit_c': 14.7, 'fiber': 5.3, 'cal': 83, 'carb': 20.0, 'prot': 0.4, 'fat': 1.1, 'sug': 14.0, 'pot': 193},
    'star-fruit': {'vit_c': 34.4, 'fiber': 2.8, 'cal': 31, 'carb': 6.7, 'prot': 1.0, 'fat': 0.3, 'sug': 4.0, 'pot': 133},
    'olive': {'vit_c': 0.9, 'fiber': 3.2, 'cal': 115, 'carb': 6.3, 'prot': 0.8, 'fat': 10.7, 'sug': 0.5, 'pot': 8},
    'tangerine': {'vit_c': 26.7, 'fiber': 1.8, 'cal': 53, 'carb': 13.3, 'prot': 0.8, 'fat': 0.3, 'sug': 10.6, 'pot': 166},
    'sweet-lime': {'vit_c': 53.0, 'fiber': 2.8, 'cal': 43, 'carb': 9.3, 'prot': 0.8, 'fat': 0.3, 'sug': 7.0, 'pot': 490},
    'pomelo': {'vit_c': 61.0, 'fiber': 1.0, 'cal': 38, 'carb': 9.6, 'prot': 0.8, 'fat': 0.0, 'sug': 8.6, 'pot': 216},
    'mulberry': {'vit_c': 36.4, 'fiber': 1.7, 'cal': 43, 'carb': 9.8, 'prot': 1.4, 'fat': 0.4, 'sug': 8.1, 'pot': 194},
    'gooseberry': {'vit_c': 27.7, 'fiber': 4.3, 'cal': 44, 'carb': 10.2, 'prot': 0.9, 'fat': 0.6, 'sug': 4.4, 'pot': 198},
    'blackcurrant': {'vit_c': 181.0, 'fiber': 6.8, 'cal': 63, 'carb': 15.4, 'prot': 1.4, 'fat': 0.4, 'sug': 7.4, 'pot': 322},
    'redcurrant': {'vit_c': 41.0, 'fiber': 4.3, 'cal': 56, 'carb': 13.8, 'prot': 1.4, 'fat': 0.2, 'sug': 7.4, 'pot': 275},
    'cranberry': {'vit_c': 13.3, 'fiber': 4.6, 'cal': 46, 'carb': 12.2, 'prot': 0.4, 'fat': 0.1, 'sug': 4.0, 'pot': 85},
    'elderberry': {'vit_c': 36.0, 'fiber': 7.0, 'cal': 73, 'carb': 18.4, 'prot': 0.7, 'fat': 0.5, 'sug': 11.4, 'pot': 280},
    'quince': {'vit_c': 15.0, 'fiber': 1.9, 'cal': 57, 'carb': 15.3, 'prot': 0.4, 'fat': 0.1, 'sug': 12.5, 'pot': 197},
    'tamarind': {'vit_c': 3.5, 'fiber': 5.1, 'cal': 239, 'carb': 62.5, 'prot': 2.8, 'fat': 0.6, 'sug': 57.4, 'pot': 628},
    'wood-apple': {'vit_c': 8.0, 'fiber': 5.0, 'cal': 134, 'carb': 31.8, 'prot': 7.1, 'fat': 0.6, 'sug': 20.0, 'pot': 600},
    'bael': {'vit_c': 60.0, 'fiber': 2.9, 'cal': 137, 'carb': 31.8, 'prot': 1.8, 'fat': 0.4, 'sug': 28.0, 'pot': 600},
    'amla': {'vit_c': 600.0, 'fiber': 4.3, 'cal': 44, 'carb': 10.2, 'prot': 0.9, 'fat': 0.6, 'sug': 4.4, 'pot': 198},
    'jamun': {'vit_c': 18.0, 'fiber': 1.5, 'cal': 60, 'carb': 14.0, 'prot': 0.7, 'fat': 0.2, 'sug': 12.0, 'pot': 55},
    'ber': {'vit_c': 69.0, 'fiber': 2.0, 'cal': 79, 'carb': 20.2, 'prot': 1.2, 'fat': 0.2, 'sug': 17.0, 'pot': 250},
    'karonda': {'vit_c': 9.0, 'fiber': 1.6, 'cal': 42, 'carb': 10.0, 'prot': 0.6, 'fat': 0.2, 'sug': 8.0, 'pot': 260},
    'chikoo': {'vit_c': 14.7, 'fiber': 5.3, 'cal': 83, 'carb': 20.0, 'prot': 0.4, 'fat': 1.1, 'sug': 14.0, 'pot': 193},
    'musk-melon': {'vit_c': 36.7, 'fiber': 0.9, 'cal': 34, 'carb': 8.2, 'prot': 0.8, 'fat': 0.2, 'sug': 7.9, 'pot': 267},
    'cantaloupe': {'vit_c': 36.7, 'fiber': 0.9, 'cal': 34, 'carb': 8.2, 'prot': 0.8, 'fat': 0.2, 'sug': 7.9, 'pot': 267},
    'honeydew': {'vit_c': 18.0, 'fiber': 0.8, 'cal': 36, 'carb': 9.1, 'prot': 0.5, 'fat': 0.1, 'sug': 8.1, 'pot': 228},
    'plantain': {'vit_c': 18.4, 'fiber': 2.3, 'cal': 122, 'carb': 31.9, 'prot': 1.3, 'fat': 0.4, 'sug': 15.0, 'pot': 499},
    'breadfruit': {'vit_c': 29.0, 'fiber': 4.9, 'cal': 103, 'carb': 27.1, 'prot': 1.1, 'fat': 0.2, 'sug': 11.0, 'pot': 490},
    'feijoa': {'vit_c': 32.9, 'fiber': 6.4, 'cal': 55, 'carb': 13.0, 'prot': 0.7, 'fat': 0.6, 'sug': 8.2, 'pot': 172},
    'cape-gooseberry': {'vit_c': 28.0, 'fiber': 4.9, 'cal': 53, 'carb': 11.2, 'prot': 1.9, 'fat': 0.7, 'sug': 5.0, 'pot': 292},
    'dragon-fruit-yellow': {'vit_c': 20.5, 'fiber': 2.9, 'cal': 60, 'carb': 13.0, 'prot': 1.2, 'fat': 0.6, 'sug': 9.6, 'pot': 220},
    'durian': {'vit_c': 19.7, 'fiber': 3.8, 'cal': 147, 'carb': 27.1, 'prot': 1.5, 'fat': 5.3, 'sug': 14.0, 'pot': 436},
    'salak': {'vit_c': 8.4, 'fiber': 2.5, 'cal': 82, 'carb': 21.0, 'prot': 0.8, 'fat': 0.4, 'sug': 16.0, 'pot': 428},
    'bilberry': {'vit_c': 44.0, 'fiber': 3.0, 'cal': 44, 'carb': 11.5, 'prot': 0.7, 'fat': 0.5, 'sug': 7.0, 'pot': 103},
    'boysenberry': {'vit_c': 21.0, 'fiber': 5.3, 'cal': 50, 'carb': 12.2, 'prot': 1.1, 'fat': 0.3, 'sug': 7.0, 'pot': 196},
    'loganberry': {'vit_c': 24.0, 'fiber': 5.3, 'cal': 55, 'carb': 13.0, 'prot': 1.5, 'fat': 0.4, 'sug': 7.9, 'pot': 220},
    'cloudberry': {'vit_c': 158.0, 'fiber': 6.0, 'cal': 51, 'carb': 9.0, 'prot': 1.3, 'fat': 0.8, 'sug': 6.0, 'pot': 210},
    'goji-berry': {'vit_c': 48.4, 'fiber': 13.0, 'cal': 349, 'carb': 77.0, 'prot': 14.3, 'fat': 0.4, 'sug': 45.6, 'pot': 1132},
    'aronia': {'vit_c': 21.0, 'fiber': 5.3, 'cal': 47, 'carb': 9.6, 'prot': 1.4, 'fat': 0.5, 'sug': 4.3, 'pot': 162},
    'kiwano': {'vit_c': 5.3, 'fiber': 1.4, 'cal': 44, 'carb': 7.6, 'prot': 1.8, 'fat': 1.3, 'sug': 3.5, 'pot': 123},
}

with open('src/data/fruitsData.json', 'r', encoding='utf-8') as f:
    data = json.load(f)

updated_count = 0
for item in data['fruitsList']:
    item_id = item['id']
    if item_id in NUTRIENT_DATA:
        info = NUTRIENT_DATA[item_id]
        # Standardize the 2 badges
        item['nutrients'] = [
            {'label': f"Vit C: {info['vit_c']}mg", 'icon': 'Sun'},
            {'label': f"Fiber: {info['fiber']}g", 'icon': 'Droplets'}
        ]
        # Also provide full nutritionDetails
        item['nutritionDetails'] = {
            'basis': 'per 100 g edible portion, raw',
            'calories_kcal': info['cal'],
            'carbohydrates_g': info['carb'],
            'fiber_g': info['fiber'],
            'protein_g': info['prot'],
            'fat_g': info['fat'],
            'sugars_g': info['sug'],
            'vitaminC_mg': info['vit_c'],
            'potassium_mg': info['pot']
        }
        updated_count += 1

with open('src/data/fruitsData.json', 'w', encoding='utf-8') as f:
    json.dump(data, f, indent=2, ensure_ascii=False)
    f.write('\n')

print(f"Standardized {updated_count} fruits successfully in fruitsData.json!")
