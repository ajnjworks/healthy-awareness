import requests
from PIL import Image
import io
import json

with open('src/data/fruitsData.json', 'r', encoding='utf-8') as f:
    data = {item['id']: item for item in json.load(f)['fruitsList']}

headers = {'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)'}

for fruit_id in ['honeydew', 'amla', 'jamun', 'musk-melon']:
    url = data[fruit_id]['image'].replace('w=500', 'w=1200')
    r = requests.get(url, headers=headers)
    img = Image.open(io.BytesIO(r.content))
    print(fruit_id, 'size:', img.size, 'format:', img.format, 'mode:', img.mode)
    img.save(f'scratch/{fruit_id}_stock.jpg')
