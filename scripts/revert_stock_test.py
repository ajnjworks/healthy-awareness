import json
import os

reverts = {
    'cantaloupe': 'https://images.unsplash.com/photo-1571575179705-ae84236ab264?auto=format&fit=crop&w=500&q=80',
    'honeydew': 'https://images.unsplash.com/photo-1598170845058-32b9d6a5da37?auto=format&fit=crop&w=500&q=80',
    'plantain': 'https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?auto=format&fit=crop&w=500&q=80'
}

# 1. Revert fruitsData.json
with open('src/data/fruitsData.json', 'r', encoding='utf-8') as f:
    fd = json.load(f)
for item in fd['fruitsList']:
    if item['id'] in reverts:
        item['image'] = reverts[item['id']]
with open('src/data/fruitsData.json', 'w', encoding='utf-8') as f:
    json.dump(fd, f, indent=2, ensure_ascii=False)
    f.write('\n')

# 2. Revert productDetailsData.json
with open('src/data/productDetailsData.json', 'r', encoding='utf-8') as f:
    pd = json.load(f)
for k, v in reverts.items():
    if k in pd:
        pd[k]['image'] = v
    for parent_k, item in pd.items():
        for sf in item.get('similarFoods', []):
            if sf.get('id') == k:
                sf['image'] = v
with open('src/data/productDetailsData.json', 'w', encoding='utf-8') as f:
    json.dump(pd, f, indent=2, ensure_ascii=False)
    f.write('\n')

# 3. Revert searchResultsData.json
with open('src/data/searchResultsData.json', 'r', encoding='utf-8') as f:
    sd = json.load(f)
for item in sd['results']:
    if item.get('id') in reverts:
        item['image'] = reverts[item['id']]
with open('src/data/searchResultsData.json', 'w', encoding='utf-8') as f:
    json.dump(sd, f, indent=2, ensure_ascii=False)
    f.write('\n')

# 4. Revert fruitsCatalog.json
with open('src/data/fruitsCatalog.json', 'r', encoding='utf-8') as f:
    fc = json.load(f)
for rec in fc.get('records', []):
    if rec.get('id') in reverts:
        rec['images'] = {
            'thumbnail': reverts[rec['id']],
            'hero': reverts[rec['id']]
        }
with open('src/data/fruitsCatalog.json', 'w', encoding='utf-8') as f:
    json.dump(fc, f, indent=2, ensure_ascii=False)
    f.write('\n')

# 5. Remove converted webp files
for fruit_id in reverts.keys():
    for folder in ['public/fruits/images', 'public/images/fruits']:
        path = f'{folder}/{fruit_id}.webp'
        if os.path.exists(path):
            os.remove(path)
            print(f'Removed: {path}')

# 6. Clean brain test files
brain_dir = r'C:\Users\Anand\.gemini\antigravity\brain\371eac2a-38ba-4598-8394-600007c67f4a'
for name in ['cantaloupe_converted_stock.webp', 'honeydew_converted_stock.webp', 'plantain_converted_stock.webp']:
    bp = os.path.join(brain_dir, name)
    if os.path.exists(bp):
        os.remove(bp)

print('Revert completed successfully!')
