import os
import glob
import json
from PIL import Image

def sync_fruit_images(brain_dir=r'C:\Users\Anand\.gemini\antigravity\brain\371eac2a-38ba-4598-8394-600007c67f4a'):
    """Finds any generated studio jpg images in brain_dir, converts to WebP, and syncs data files."""
    os.makedirs('public/fruits/images', exist_ok=True)
    os.makedirs('public/images/fruits', exist_ok=True)

    with open('src/data/fruitsData.json', 'r', encoding='utf-8') as f:
        fruits_data = json.load(f)
    with open('src/data/productDetailsData.json', 'r', encoding='utf-8') as f:
        pd = json.load(f)
    with open('src/data/searchResultsData.json', 'r', encoding='utf-8') as f:
        sd = json.load(f)
    with open('src/data/fruitsCatalog.json', 'r', encoding='utf-8') as f:
        cd = json.load(f)

    jpg_files = glob.glob(os.path.join(brain_dir, '*_studio*.jpg')) + glob.glob(os.path.join(brain_dir, '*apple*.jpg'))
    updated_fruits = []

    # Map of filename prefixes to fruit IDs
    for filepath in jpg_files:
        filename = os.path.basename(filepath).lower()
        fruit_id = None
        if 'apple' in filename and 'custard' not in filename and 'wood' not in filename:
            fruit_id = 'apple'
        elif 'grapes' in filename:
            fruit_id = 'grape'
        elif 'banana' in filename:
            fruit_id = 'banana'
        elif 'mango' in filename:
            fruit_id = 'mango'
        elif 'orange' in filename:
            fruit_id = 'orange'
        elif 'watermelon' in filename:
            fruit_id = 'watermelon'
        elif 'papaya' in filename:
            fruit_id = 'papaya'
        elif 'pineapple' in filename:
            fruit_id = 'pineapple'
        elif 'guava' in filename:
            fruit_id = 'guava'
        elif 'pomegranate' in filename:
            fruit_id = 'pomegranate'
        elif 'kiwi' in filename:
            fruit_id = 'kiwi'
        elif 'strawberry' in filename:
            fruit_id = 'strawberry'
        elif 'blueberry' in filename:
            fruit_id = 'blueberry'
        elif 'raspberry' in filename:
            fruit_id = 'raspberry'
        elif 'blackberry' in filename:
            fruit_id = 'blackberry'
        elif 'cherry' in filename:
            fruit_id = 'cherry'
        elif 'peach' in filename:
            fruit_id = 'peach'
        elif 'plum' in filename:
            fruit_id = 'plum'
        elif 'apricot' in filename:
            fruit_id = 'apricot'
        elif 'nectarine' in filename:
            fruit_id = 'nectarine'
        elif 'pear' in filename:
            fruit_id = 'pear'
        elif 'dragon' in filename:
            fruit_id = 'dragon-fruit'
        elif 'passion' in filename:
            fruit_id = 'passion-fruit'
        elif 'custard' in filename:
            fruit_id = 'custard-apple'
        elif 'wood' in filename:
            fruit_id = 'wood-apple'
        elif 'star' in filename:
            fruit_id = 'star-fruit'
        elif 'sweet' in filename and 'lime' in filename:
            fruit_id = 'sweet-lime'
        elif 'musk' in filename:
            fruit_id = 'musk-melon'
        elif 'cape' in filename:
            fruit_id = 'cape-gooseberry'
        elif 'lychee' in filename:
            fruit_id = 'lychee'
        elif 'rambutan' in filename:
            fruit_id = 'rambutan'
        elif 'longan' in filename:
            fruit_id = 'longan'
        elif 'mangosteen' in filename:
            fruit_id = 'mangosteen'
        elif 'jackfruit' in filename:
            fruit_id = 'jackfruit'
        elif 'soursop' in filename:
            fruit_id = 'soursop'
        elif 'sapodilla' in filename or 'chikoo' in filename:
            fruit_id = 'sapodilla'
        elif 'fig' in filename:
            fruit_id = 'fig'
        else:
            parts = filename.split('_')
            fruit_id = parts[0]

        if not fruit_id:
            continue

        webp_rel = f'/fruits/images/{fruit_id}.webp'
        dest1 = f'public/fruits/images/{fruit_id}.webp'
        dest2 = f'public/images/fruits/{fruit_id}.webp'

        if not os.path.exists(dest1):
            img = Image.open(filepath)
            img.save(dest1, 'WEBP', quality=90)
            img.save(dest2, 'WEBP', quality=90)
            print(f'Converted & saved: {fruit_id}.webp ({os.path.getsize(dest1)} bytes)')
            updated_fruits.append(fruit_id)

        # Update JSON references
        for item in fruits_data.get('fruitsList', []):
            if item.get('id') == fruit_id:
                item['image'] = webp_rel

        if fruit_id in pd:
            pd[fruit_id]['image'] = webp_rel
        for k, v in pd.items():
            for sf in v.get('similarFoods', []):
                if sf.get('id') == fruit_id:
                    sf['image'] = webp_rel

        for item in sd.get('results', []):
            if item.get('id') == fruit_id:
                item['image'] = webp_rel

        for rec in cd.get('records', []):
            if rec.get('id') == fruit_id:
                rec['images'] = {'thumbnail': webp_rel, 'hero': webp_rel}

    with open('src/data/fruitsData.json', 'w', encoding='utf-8') as f:
        json.dump(fruits_data, f, indent=2, ensure_ascii=False)
        f.write('\n')
    with open('src/data/productDetailsData.json', 'w', encoding='utf-8') as f:
        json.dump(pd, f, indent=2, ensure_ascii=False)
        f.write('\n')
    with open('src/data/searchResultsData.json', 'w', encoding='utf-8') as f:
        json.dump(sd, f, indent=2, ensure_ascii=False)
        f.write('\n')
    with open('src/data/fruitsCatalog.json', 'w', encoding='utf-8') as f:
        json.dump(cd, f, indent=2, ensure_ascii=False)
        f.write('\n')

    print(f'Sync complete. Total updated this run: {len(updated_fruits)}')

if __name__ == '__main__':
    sync_fruit_images()
