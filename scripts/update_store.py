import json
import re
import os
import asyncio
from playwright.async_api import async_playwright

# Configuration
URLS = [
    "https://pixposbd.com/product/pix-pos-d1-mini-printer/",
    "https://pixposbd.com/product/pix-z80c-3-inch-autocut-desk/",
    "https://pixposbd.com/product/printer-dual-mode-label-pos/",
    "https://pixposbd.com/product/pixpos-l58p-multifunction-label-sticker-and-receipt-printer/",
    "https://pixposbd.com/product/pixpos-m860-3-inch-pos-printer-bluetooth-pc-80mm-pos-printer/",
    "https://pixposbd.com/product/pixpos-d58-multifunction-printer/",
    "https://pixposbd.com/product/pixpos-z108-pos-printer-dual-display/"
]

# Brave Browser path on macOS
BRAVE_PATH = "/Applications/Brave Browser.app/Contents/MacOS/Brave Browser"

async def extract_product_data(browser, url):
    print(f"Scraping: {url}...")
    page = await browser.new_page()
    try:
        # Navigate and wait for content
        await page.goto(url, wait_until="networkidle", timeout=60000)
        
        # Selectors (standard WooCommerce)
        title = await page.locator('.product_title').inner_text()
        
        # Price
        price_el = await page.locator('.price').inner_text()
        prices = re.findall(r'\d+', price_el.replace(',', ''))
        
        current_price = prices[-1] if prices else "0"
        original_price = prices[0] if len(prices) > 1 else None
        
        # Image
        image = await page.locator('.woocommerce-product-gallery__image img').get_attribute('src')
        
        # Features & Description
        features = await page.locator('.woocommerce-product-details__short-description li').all_inner_texts()
        desc = await page.locator('.woocommerce-product-details__short-description').inner_text()
        
        # Generate ID from URL
        prod_id = url.split('/product/')[-1].strip('/')
        
        await page.close()
        
        return {
            "id": prod_id,
            "name": {"bn": title.strip(), "en": title.strip()},
            "price": "{:,}".format(int(current_price)),
            "originalPrice": "{:,}".format(int(original_price)) if original_price else None,
            "images": [image],
            "features": {"bn": features, "en": features},
            "description": {"bn": desc.strip(), "en": desc.strip()},
            "externalUrl": url
        }
    except Exception as e:
        print(f"Failed to scrape {url}: {e}")
        await page.close()
        return None

def update_store_ts(items):
    file_path = "src/data/store.ts"
    if not os.path.exists(file_path):
        print(f"File not found: {file_path}")
        return

    with open(file_path, "r", encoding="utf-8") as f:
        content = f.read()

    start_tag = "export const STORE_ITEMS: StoreItem[] = ["
    end_tag = "];"
    
    parts = content.split(start_tag)
    if len(parts) < 2:
        print("Could not find STORE_ITEMS in store.ts")
        return
        
    prefix = parts[0]
    suffix = parts[1][parts[1].find(end_tag) + len(end_tag):]
    
    items_str = " [\n"
    for item in items:
        # Sanitization for TS strings
        safe_desc_bn = item['description']['bn'].replace('"', '\\"').replace('\n', ' ')
        safe_desc_en = item['description']['en'].replace('"', '\\"').replace('\n', ' ')

        item_str = f"""    {{
        id: "{item['id']}",
        vendor: VENDORS.pixstore,
        name: {{
            bn: "{item['name']['bn']}",
            en: "{item['name']['en']}",
        }},
        price: "{item['price']}",
        originalPrice: {f'"{item["originalPrice"]}"' if item.get('originalPrice') else 'undefined'},
        images: {json.dumps(item['images'])},
        features: {{
            bn: {json.dumps(item['features']['bn'], ensure_ascii=False)},
            en: {json.dumps(item['features']['en'], ensure_ascii=False)},
        }},
        description: {{
            bn: "{safe_desc_bn}",
            en: "{safe_desc_en}",
        }},
        externalUrl: "{item['externalUrl']}",
    }},"""
        items_str += item_str + "\n"
    items_str += "];"
    
    new_content = prefix + start_tag + items_str + suffix
    
    with open(file_path, "w", encoding="utf-8") as f:
        f.write(new_content)
    print("store.ts updated successfully!")

async def main():
    if not os.path.exists(BRAVE_PATH):
        print(f"Brave browser not found at {BRAVE_PATH}")
        return

    async with async_playwright() as p:
        # Launch Brave Browser
        browser = await p.chromium.launch(executable_path=BRAVE_PATH, headless=True)
        
        extracted_items = []
        for url in URLS:
            data = await extract_product_data(browser, url)
            if data:
                extracted_items.append(data)
        
        await browser.close()
        
        if extracted_items:
            update_store_ts(extracted_items)
        else:
            print("No data extracted successfully.")

if __name__ == "__main__":
    asyncio.run(main())
