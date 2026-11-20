import cv2
import numpy as np
from PIL import Image

# Load cantaloupe image
img = cv2.imread('scratch/cantaloupe_test.jpg')
h, w = img.shape[:2]

# The cantaloupe is centered. Let's run GrabCut to segment it
mask = np.zeros(img.shape[:2], np.uint8)
bgdModel = np.zeros((1, 65), np.float64)
fgdModel = np.zeros((1, 65), np.float64)

# Bounding box around the subject
rect = (int(w*0.08), int(h*0.08), int(w*0.84), int(h*0.84))
cv2.grabCut(img, mask, rect, bgdModel, fgdModel, 5, cv2.GC_INIT_WITH_RECT)

mask2 = np.where((mask == 2) | (mask == 0), 0, 1).astype('uint8')
# Soft edge feathering
mask_soft = cv2.GaussianBlur(mask2 * 255, (7, 7), 0) / 255.0

# Composite onto pure white background
white_bg = np.ones_like(img) * 255
composite = (img * mask_soft[:, :, np.newaxis] + white_bg * (1 - mask_soft[:, :, np.newaxis])).astype(np.uint8)

# Convert BGR to RGB
composite_rgb = cv2.cvtColor(composite, cv2.COLOR_BGR2RGB)
pil_img = Image.fromarray(composite_rgb)

# Make 1024x1024 square with padding
max_dim = max(w, h)
square_img = Image.new('RGB', (max_dim, max_dim), (255, 255, 255))
offset_x = (max_dim - w) // 2
offset_y = (max_dim - h) // 2
square_img.paste(pil_img, (offset_x, offset_y))
square_img = square_img.resize((1024, 1024), Image.Resampling.LANCZOS)

square_img.save('scratch/cantaloupe_white_bg.jpg', quality=95)
print('Saved scratch/cantaloupe_white_bg.jpg successfully!')
