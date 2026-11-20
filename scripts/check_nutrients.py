import json

with open('src/data/fruitsData.json', 'r', encoding='utf-8') as f:
    d = json.load(f)['fruitsList']

for item in d[:25]:
    labels = [n.get('label') for n in item.get('nutrients', [])]
    nd = item.get('nutritionDetails', {})
    vc = nd.get('vitaminC_mg', 'N/A')
    fib = nd.get('fiber_g', 'N/A')
    print(f"{item['name']:<18} | Badges: {labels} | Vit C: {vc}mg | Fiber: {fib}g")
