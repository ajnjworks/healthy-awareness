import json

updates = {
    'cantaloupe': '/fruits/images/cantaloupe.webp',
    'honeydew': '/fruits/images/honeydew.webp',
    'plantain': '/fruits/images/plantain.webp',
}

# 1. fruitsData.json
with open('src/data/fruitsData.json', 'r', encoding='utf-8') as f:
    fd = json.load(f)
for item in fd['fruitsList']:
    if item['id'] in updates:
        item['image'] = updates[item['id']]
with open('src/data/fruitsData.json', 'w', encoding='utf-8') as f:
    json.dump(fd, f, indent=2, ensure_ascii=False)
    f.write('\n')

# 2. productDetailsData.json
with open('src/data/productDetailsData.json', 'r', encoding='utf-8') as f:
    pd = json.load(f)
for k, v in updates.items():
    if k in pd:
        pd[k]['image'] = v
    for parent_k, item in pd.items():
        for sf in item.get('similarFoods', []):
            if sf.get('id') == k:
                sf['image'] = v
with open('src/data/productDetailsData.json', 'w', encoding='utf-8') as f:
    json.dump(pd, f, indent=2, ensure_ascii=False)
    f.write('\n')

# 3. searchResultsData.json
with open('src/data/searchResultsData.json', 'r', encoding='utf-8') as f:
    sd = json.load(f)
for item in sd['results']:
    if item.get('id') in updates:
        item['image'] = updates[item['id']]
with open('src/data/searchResultsData.json', 'w', encoding='utf-8') as f:
    json.dump(sd, f, indent=2, ensure_ascii=False)
    f.write('\n')

# 4. fruitsCatalog.json
with open('src/data/fruitsCatalog.json', 'r', encoding='utf-8') as f:
    fc = json.load(f)
for rec in fc.get('records', []):
    if rec.get('id') in updates:
        rec['images'] = {
            'thumbnail': updates[rec['id']],
            'hero': updates[rec['id']]
        }
with open('src/data/fruitsCatalog.json', 'w', encoding='utf-8') as f:
    json.dump(fc, f, indent=2, ensure_ascii=False)
    f.write('\n')

print('Successfully updated datasets with cantaloupe, honeydew, and plantain!')
