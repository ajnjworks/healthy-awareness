import urllib.request
import urllib.parse
import json

def get_wiki_image_url(title):
    headers = {'User-Agent': 'HealthyLife/1.0 (contact@example.com)'}
    query = urllib.parse.urlencode({
        'action': 'query',
        'titles': title,
        'prop': 'imageinfo',
        'iiprop': 'url',
        'format': 'json'
    })
    url = f'https://commons.wikimedia.org/w/api.php?{query}'
    req = urllib.request.Request(url, headers=headers)
    with urllib.request.urlopen(req) as response:
        data = json.loads(response.read().decode('utf-8'))
        pages = data.get('query', {}).get('pages', {})
        for p in pages.values():
            if 'imageinfo' in p:
                return p['imageinfo'][0]['url']
    return None

for t in ['File:Canteloupe and cross section.jpg', 'File:Tamarinde Tamarindus indica.jpg', 'File:Honeydew.jpg']:
    print(t, '->', get_wiki_image_url(t))
