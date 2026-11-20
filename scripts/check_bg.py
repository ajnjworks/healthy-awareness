from PIL import Image
import numpy as np

for fruit_id in ['honeydew', 'amla', 'jamun', 'musk-melon']:
    img = Image.open(f'scratch/{fruit_id}_stock.jpg')
    arr = np.array(img)
    # Check top-left, top-right, bottom-left, bottom-right corners
    corners = [
        arr[:20, :20],
        arr[:20, -20:],
        arr[-20:, :20],
        arr[-20:, -20:]
    ]
    mean_colors = [c.mean(axis=(0,1)).astype(int).tolist() for c in corners]
    print(fruit_id, 'corners RGB mean:', mean_colors)
