import os
from PIL import Image

def create_favicon(source_path, dest_dir):
    try:
        img = Image.open(source_path)
        
        # Favicon sizes: 16x16, 32x32, 192x192 (Android), 180x180 (Apple)
        sizes = [
            (16, 16),
            (32, 32),
            (180, 180),
            (192, 192),
            (512, 512)
        ]
        
        base_name = os.path.splitext(os.path.basename(source_path))[0]
        
        # Save ICO (multi-size)
        img.save(os.path.join(dest_dir, "favicon.ico"), format='ICO', sizes=[(32,32), (16,16)])
        
        # Save PNGs for various uses
        for w, h in sizes:
            resized = img.resize((w, h), Image.Resampling.LANCZOS)
            if w == 180:
                resized.save(os.path.join(dest_dir, "apple-touch-icon.png"))
            elif w == 192:
                resized.save(os.path.join(dest_dir, "android-chrome-192x192.png"))
            elif w == 512:
                resized.save(os.path.join(dest_dir, "android-chrome-512x512.png"))
            elif w == 32:
                resized.save(os.path.join(dest_dir, "favicon-32x32.png"))
            elif w == 16:
                resized.save(os.path.join(dest_dir, "favicon-16x16.png"))
                
        print("Favicons generated successfully.")
        
    except Exception as e:
        print(f"Error generating favicon: {e}")

if __name__ == "__main__":
    create_favicon("assets/logo.png", "assets")