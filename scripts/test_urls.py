import requests
import json

with open('src/data/fruitsData.json', 'r', encoding='utf-8') as f:
    data = json.load(f)['fruitsList']

pending = [item for item in data if 'unsplash' in item.get('image', '')]
headers = {'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)'}

for item in pending[:10]:
    url = item['image']
    try:
        r = requests.head(url, headers=headers, timeout=5)
        print(item['id'], 'HEAD status:', r.status_code)
    except Exception as e:
        print(item['id'], 'Error:', e)
