import cv2
import numpy as np
from PIL import Image

def process_fruit_fast(input_path, output_path):
    img = cv2.imread(input_path)
    if img is None:
        print(f"Failed to read {input_path}")
        return
    h, w = img.shape[:2]

    # Downscale proxy for lightning-fast GrabCut (max dimension 500)
    scale = 500.0 / max(h, w)
    small_w = int(w * scale)
    small_h = int(h * scale)
    small_img = cv2.resize(img, (small_w, small_h), interpolation=cv2.INTER_AREA)

    mask = np.zeros((small_h, small_w), np.uint8)
    bgdModel = np.zeros((1, 65), np.float64)
    fgdModel = np.zeros((1, 65), np.float64)

    margin_w = max(5, int(small_w * 0.05))
    margin_h = max(5, int(small_h * 0.05))
    rect = (margin_w, margin_h, small_w - 2 * margin_w, small_h - 2 * margin_h)

    cv2.grabCut(small_img, mask, rect, bgdModel, fgdModel, 3, cv2.GC_INIT_WITH_RECT)
    mask_binary = np.where((mask == 2) | (mask == 0), 0, 255).astype('uint8')

    # Upscale mask back to full size
    full_mask = cv2.resize(mask_binary, (w, h), interpolation=cv2.INTER_LINEAR)
    full_mask_soft = cv2.GaussianBlur(full_mask, (11, 11), 0) / 255.0

    # Composite onto pure white background
    white_bg = np.ones_like(img) * 255
    composite = (img * full_mask_soft[:, :, np.newaxis] + white_bg * (1 - full_mask_soft[:, :, np.newaxis])).astype(np.uint8)
    composite_rgb = cv2.cvtColor(composite, cv2.COLOR_BGR2RGB)
    pil_img = Image.fromarray(composite_rgb)

    # Pad to square and resize to 1024x1024
    max_dim = max(w, h)
    square_img = Image.new('RGB', (max_dim, max_dim), (255, 255, 255))
    square_img.paste(pil_img, ((max_dim - w) // 2, (max_dim - h) // 2))
    square_img = square_img.resize((1024, 1024), Image.Resampling.LANCZOS)

    # Save as webp
    webp_path = output_path.replace('.jpg', '.webp')
    square_img.save(webp_path, 'WEBP', quality=90)
    print(f"Successfully created: {webp_path}")

process_fruit_fast('scratch/cantaloupe_test.jpg', 'public/fruits/images/cantaloupe.webp')
process_fruit_fast('scratch/cantaloupe_test.jpg', 'public/images/fruits/cantaloupe.webp')
process_fruit_fast('scratch/plantain_stock.jpg', 'public/fruits/images/plantain.webp')
process_fruit_fast('scratch/plantain_stock.jpg', 'public/images/fruits/plantain.webp')
process_fruit_fast('scratch/honeydew_stock.jpg', 'public/fruits/images/honeydew.webp')
process_fruit_fast('scratch/honeydew_stock.jpg', 'public/images/fruits/honeydew.webp')
