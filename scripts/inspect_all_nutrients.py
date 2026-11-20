import json

with open('src/data/fruitsData.json', 'r', encoding='utf-8') as f:
    d = json.load(f)['fruitsList']

print(f"Total fruits: {len(d)}")
for item in d:
    labels = [n.get('label') for n in item.get('nutrients', [])]
    if 'Antioxidants' not in labels:
        print(f"{item['id']:<20}: {labels}")
