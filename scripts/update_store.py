import requests
from bs4 import BeautifulSoup
import json
import re
import os

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

HEADERS = {
    "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
    "Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8",
}

def extract_product_data(url):
    print(f"Scraping: {url}...")
    try:
        response = requests.get(url, headers=HEADERS, timeout=15)
        if response.status_code != 200:
            print(f"Error {response.status_code} for {url}")
            return None
        
        soup = BeautifulSoup(response.text, 'html.parser')
        
        # Selectors (standard WooCommerce)
        title = soup.select_one('.product_title').text.strip() if soup.select_one('.product_title') else "N/A"
        
        # Price
        price_el = soup.select_one('.price')
        prices = []
        if price_el:
            price_text = price_el.text.replace('৳', '').replace(',', '').strip()
            prices = re.findall(r'\d+', price_text)
        
        current_price = prices[-1] if prices else "0"
        original_price = prices[0] if len(prices) > 1 else None
        
        # Image
        img_el = soup.select_one('.woocommerce-product-gallery__image img')
        image = img_el['src'] if img_el else ""
        
        # Features & Description
        short_desc_el = soup.select_one('.woocommerce-product-details__short-description')
        features = []
        if short_desc_el:
            features = [li.text.strip() for li in short_desc_el.select('li')]
        
        desc = short_desc_el.text.strip() if short_desc_el else ""
        
        # Generate ID from URL
        prod_id = url.split('/product/')[-1].strip('/')
        
        return {
            "id": prod_id,
            "name": {"bn": title, "en": title},
            "price": "{:,}".format(int(current_price)),
            "originalPrice": "{:,}".format(int(original_price)) if original_price else None,
            "images": [image],
            "features": {"bn": features, "en": features},
            "description": {"bn": desc, "en": desc},
            "externalUrl": url
        }
    except Exception as e:
        print(f"Failed to scrape {url}: {e}")
        return None

def update_store_ts(items):
    file_path = "src/data/store.ts"
    if not os.path.exists(file_path):
        print(f"File not found: {file_path}")
        return

    with open(file_path, "r", encoding="utf-8") as f:
        content = f.read()

    # Create the new STORE_ITEMS array string
    items_json = json.dumps(items, indent=4, ensure_ascii=False)
    # Fix formatting to match TS (remove quotes from keys we want to keep as variables)
    items_json = items_json.replace('"vendor": "VENDORS.pixstore"', '"vendor": VENDORS.pixstore')
    
    # Use regex to find the STORE_ITEMS constant and replace its content
    pattern = r'(export const STORE_ITEMS: StoreItem\[\] = )\[.*?\];'
    # We use a bit more complex replacement because of the nested objects
    # This is a simplified version, ideally we'd use a better parser
    
    # For simplicity in this script, we'll just write a new STORE_ITEMS section
    # by finding the start and end of the array
    start_tag = "export const STORE_ITEMS: StoreItem[] = ["
    end_tag = "];"
    
    parts = content.split(start_tag)
    if len(parts) < 2:
        print("Could not find STORE_ITEMS in store.ts")
        return
        
    prefix = parts[0]
    # Find the closing bracket of the array
    # This is naive but works for standard formatting
    suffix = parts[1][parts[1].find(end_tag) + len(end_tag):]
    
    # Build list string
    items_str = " [\n"
    for item in items:
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
            bn: "{item['description']['bn'].replace('"', '\\"')}",
            en: "{item['description']['en'].replace('"', '\\"')}",
        }},
        externalUrl: "{item['externalUrl']}",
    }},"""
        items_str += item_str + "\n"
    items_str += "];"
    
    new_content = prefix + start_tag + items_str + suffix
    
    with open(file_path, "w", encoding="utf-8") as f:
        f.write(new_content)
    print("store.ts updated successfully!")

if __name__ == "__main__":
    extracted_items = []
    for url in URLS:
        data = extract_product_data(url)
        if data:
            extracted_items.append(data)
    
    if extracted_items:
        update_store_ts(extracted_items)
    else:
        print("No data extracted successfully.")
