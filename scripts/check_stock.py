import json

with open('src/data/fruitsData.json', 'r', encoding='utf-8') as f:
    data = json.load(f)['fruitsList']

pending = [item for item in data if 'unsplash' in item.get('image', '')]
for item in pending:
    print(f"{item['id']} | {item['name']} | {item['image']}")
