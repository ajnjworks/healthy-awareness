import os
import glob
import json
from PIL import Image

BRAIN_DIR = r'C:\Users\Anand\.gemini\antigravity\brain\371eac2a-38ba-4598-8394-600007c67f4a'

CATEGORY_FILES = [
    ('fruits', 'src/data/fruitsData.json', 'fruitsList', 'src/data/fruitsCatalog.json'),
    ('vegetables', 'src/data/vegetablesData.json', 'vegetablesList', 'src/data/vegetablesCatalog.json'),
    ('nuts-seeds', 'src/data/nutsSeedsData.json', 'nutsSeedsList', 'src/data/nutsSeedsCatalog.json'),
    ('groceries', 'src/data/groceriesData.json', 'groceriesList', 'src/data/groceriesCatalog.json'),
    ('pulses', 'src/data/pulsesData.json', 'pulsesList', 'src/data/pulsesCatalog.json'),
    ('grains-cereals', 'src/data/grainsCerealsData.json', 'grainsCerealsList', 'src/data/grainsCerealsCatalog.json'),
    ('millets', 'src/data/milletsData.json', 'milletsList', 'src/data/milletsCatalog.json'),
    ('spices', 'src/data/spicesData.json', 'spicesList', 'src/data/spicesCatalog.json'),
]

def get_next_pending_items(limit=10):
    """Returns the next batch of items needing studio webp images across categories in order."""
    pending = []
    current_category = None

    for cat_name, file_path, list_key, _ in CATEGORY_FILES:
        if not os.path.exists(file_path):
            continue
        with open(file_path, 'r', encoding='utf-8') as f:
            data = json.load(f)
        items = data.get(list_key, [])
        cat_pending = [item for item in items if 'unsplash' in item.get('image', '')]
        if cat_pending:
            current_category = cat_name
            pending = cat_pending[:limit]
            break

    return current_category, pending

def sync_all_images():
    """Finds all generated studio jpgs in brain_dir, converts to WebP and updates all data files."""
    jpg_files = glob.glob(os.path.join(BRAIN_DIR, '*_studio*.jpg')) + glob.glob(os.path.join(BRAIN_DIR, '*apple*.jpg'))

    with open('src/data/productDetailsData.json', 'r', encoding='utf-8') as f:
        pd = json.load(f)
    with open('src/data/searchResultsData.json', 'r', encoding='utf-8') as f:
        sd = json.load(f)

    # Build index of item_id -> category
    id_to_cat = {}
    cat_datasets = {}
    for cat_name, file_path, list_key, cat_file in CATEGORY_FILES:
        if os.path.exists(file_path):
            with open(file_path, 'r', encoding='utf-8') as f:
                d = json.load(f)
                cat_datasets[cat_name] = (file_path, list_key, cat_file, d)
                for item in d.get(list_key, []):
                    id_to_cat[item['id'].lower()] = cat_name

    updated_count = 0

    for filepath in jpg_files:
        filename = os.path.basename(filepath).lower()
        fruit_id = None

        # Clean identification: strip _studio and timestamp
        raw_prefix = filename.split('_studio')[0].split('.jpg')[0]
        # remove trailing timestamp if any
        candidate = raw_prefix.replace('_', '-')

        if 'apple' in filename and 'custard' not in filename and 'wood' not in filename:
            fruit_id = 'apple'
        elif candidate in id_to_cat:
            fruit_id = candidate
        elif candidate == 'grapes' and 'grape' in id_to_cat:
            fruit_id = 'grape'
        elif 'sweet' in raw_prefix and 'lime' in raw_prefix:
            fruit_id = 'sweet-lime'
        elif 'dragon' in raw_prefix:
            fruit_id = 'dragon-fruit'
        elif 'passion' in raw_prefix:
            fruit_id = 'passion-fruit'
        elif 'custard' in raw_prefix:
            fruit_id = 'custard-apple'
        elif 'wood' in raw_prefix:
            fruit_id = 'wood-apple'
        elif 'star' in raw_prefix:
            fruit_id = 'star-fruit'
        elif 'musk' in raw_prefix:
            fruit_id = 'musk-melon'
        elif 'cape' in raw_prefix:
            fruit_id = 'cape-gooseberry'
        elif raw_prefix == 'fresh':
            continue
        else:
            fruit_id = candidate

        if not fruit_id:
            continue

        cat = id_to_cat.get(fruit_id, 'fruits')
        webp_rel = f'/{cat}/images/{fruit_id}.webp'
        dest1 = f'public/{cat}/images/{fruit_id}.webp'
        dest2 = f'public/images/{cat}/{fruit_id}.webp'

        os.makedirs(f'public/{cat}/images', exist_ok=True)
        os.makedirs(f'public/images/{cat}', exist_ok=True)

        if not os.path.exists(dest1):
            img = Image.open(filepath)
            img.save(dest1, 'WEBP', quality=90)
            img.save(dest2, 'WEBP', quality=90)
            print(f'Converted & saved: {cat}/{fruit_id}.webp ({os.path.getsize(dest1)} bytes)')
            updated_count += 1

        # Update category dataset
        if cat in cat_datasets:
            _, list_key, _, data = cat_datasets[cat]
            for item in data.get(list_key, []):
                if item.get('id') == fruit_id:
                    item['image'] = webp_rel

        # Update productDetails
        if fruit_id in pd:
            pd[fruit_id]['image'] = webp_rel
        for k, v in pd.items():
            for sf in v.get('similarFoods', []):
                if sf.get('id') == fruit_id:
                    sf['image'] = webp_rel

        # Update searchResults
        for item in sd.get('results', []):
            if item.get('id') == fruit_id:
                item['image'] = webp_rel

    # Save modified datasets
    for cat_name, (file_path, list_key, cat_file, data) in cat_datasets.items():
        with open(file_path, 'w', encoding='utf-8') as f:
            json.dump(data, f, indent=2, ensure_ascii=False)
            f.write('\n')
        if os.path.exists(cat_file):
            with open(cat_file, 'r', encoding='utf-8') as f:
                cdata = json.load(f)
            for rec in cdata.get('records', []):
                if rec.get('id') in id_to_cat:
                    webp_rel = f'/{cat_name}/images/{rec["id"]}.webp'
                    if os.path.exists(f'public/{cat_name}/images/{rec["id"]}.webp'):
                        rec['images'] = {'thumbnail': webp_rel, 'hero': webp_rel}
            with open(cat_file, 'w', encoding='utf-8') as f:
                json.dump(cdata, f, indent=2, ensure_ascii=False)
                f.write('\n')

    with open('src/data/productDetailsData.json', 'w', encoding='utf-8') as f:
        json.dump(pd, f, indent=2, ensure_ascii=False)
        f.write('\n')
    with open('src/data/searchResultsData.json', 'w', encoding='utf-8') as f:
        json.dump(sd, f, indent=2, ensure_ascii=False)
        f.write('\n')

    print(f'Master sync complete. Total newly converted this run: {updated_count}')

if __name__ == '__main__':
    cat, items = get_next_pending_items(10)
    print(f'Current Active Category: {cat}')
    print(f'Next {len(items)} Pending Items:', [(i["id"], i["name"]) for i in items])
    sync_all_images()
