export interface Vendor {
    id: string;
    name: { bn: string; en: string };
    logo: string;
    whatsapp: string;
}

export interface StoreItem {
    id: string;
    vendor: Vendor;
    name: { bn: string; en: string };
    price: string;
    originalPrice?: string;
    images: string[];
    features: { bn: string[]; en: string[] };
    description: { bn: string; en: string };
}

// Professional Mock Vendors using clearbit logos
export const VENDORS: Record<string, Vendor> = {
    pixstore: {
        id: "pix-store",
        name: { bn: "Pix Store", en: "Pix Store" },
        logo: "https://pixposbd.com/wp-content/uploads/2024/09/pix-pos.png",
        whatsapp: "+880 1806-444751",
    },
};

export const STORE_ITEMS: StoreItem[] = [
    {
        id: "pixpos-211",
        vendor: VENDORS.pixstore,
        name: {
            bn: "Portable POS Printer 58mm 2 inch Thermal Receipt Printer Bluetooth Pocket Printer",
            en: "Portable POS Printer 58mm 2 inch Thermal Receipt Printer Bluetooth Pocket Printer",
        },
        price: "2,200",
        originalPrice: "3,000",
        images: [
            "https://img.drz.lazcdn.com/static/bd/p/848c15a3f84115317b922376cb8d3d04.jpg_720x720q80.jpg_.webp",
            "https://img.drz.lazcdn.com/static/bd/p/e59cc5b5822cbf5ad90b33c8e62f83c9.jpg_120x120q80.jpg_.webp",
            "https://img.drz.lazcdn.com/static/bd/p/72d772b213435b1d14b2d32a012a7c69.jpg_720x720q80.jpg_.webp",
            "https://img.drz.lazcdn.com/static/bd/p/1302fe3c5f345de44b8f48cc8a40ef04.jpg_720x720q80.jpg_.webp"
        ],
        features: {
            bn: [
                "Versatile Compatibility: Android/iOS/Windows",
                "High-Speed Printing: 50-80mm/s",
                "Long-lasting Battery: 1500mAh Lithium",
                "Compact and Portable",
                "Easy Paper Loading",
                "Wide Range of Print Support",
                "Bluetooth and USB Interface",
            ],
            en: [
                "Versatile Compatibility: Android/iOS/Windows",
                "High-Speed Printing: 50-80mm/s",
                "Long-lasting Battery: 1500mAh Lithium",
                "Compact and Portable",
                "Easy Paper Loading",
                "Wide Range of Print Support",
                "Bluetooth and USB Interface",
            ],
        },
        description: {
            bn: "Revolutionize your business transactions with our High-Speed Portable Thermal POS Printer. Designed for seamless compatibility across Android, iOS, and Windows systems, this printer is the perfect companion for shops, small businesses, and restaurants.",
            en: "Revolutionize your business transactions with our High-Speed Portable Thermal POS Printer. Designed for seamless compatibility across Android, iOS, and Windows systems, this printer is the perfect companion for shops, small businesses, and restaurants.",
        }
    },
    {
        id: "pixpos-m860",
        vendor: VENDORS.pixstore,
        name: {
            bn: "PixPos M860 3 Inch POS Printer",
            en: "PixPos M860 3 Inch POS Printer",
        },
        price: "5,480",
        originalPrice: "5,999",
        images: [
            "https://pixstore.com.bd/wp-content/uploads/2026/02/632875792_1724249658711487_3970214730292544779_n.jpg"
        ],
        features: {
            bn: [
                "Size/Width: 3 inch / 80mm",
                "Printing Speed: 70-90mm/s",
                "Interface: Bluetooth & USB",
                "Charging Port: Type-C",
                "Battery Capacity: 2650 mAh",
            ],
            en: [
                "Size/Width: 3 inch / 80mm",
                "Printing Speed: 70-90mm/s",
                "Interface: Bluetooth & USB",
                "Charging Port: Type-C",
                "Battery Capacity: 2650 mAh",
            ],
        },
        description: {
            bn: "A robust 3-inch (80mm) thermal printer that supports both Bluetooth and PC USB connections, featuring modern Type-C charging for convenience.",
            en: "A robust 3-inch (80mm) thermal printer that supports both Bluetooth and PC USB connections, featuring modern Type-C charging for convenience.",
        }
    },
    {
        id: "pixpos-z108",
        vendor: VENDORS.pixstore,
        name: {
            bn: "PixPos Z108 POS Printer Dual Display",
            en: "PixPos Z108 POS Printer Dual Display",
        },
        price: "30,999",
        originalPrice: "38,999",
        images: [
            "https://pixstore.com.bd/wp-content/uploads/2026/03/IMG_20250611_224526-768x768-2.jpg"
        ],
        features: {
            bn: [
                "Operating System: Android 14",
                "Primary Display: 8.0 inch IPS Touch",
                "Secondary Display: 3.95 inch non-touch",
                "Scanner: Built-in 2D Scanner",
                "Memory: 4 GB RAM / 32 GB ROM",
            ],
            en: [
                "Operating System: Android 14",
                "Primary Display: 8.0 inch IPS Touch",
                "Secondary Display: 3.95 inch non-touch",
                "Scanner: Built-in 2D Scanner",
                "Memory: 4 GB RAM / 32 GB ROM",
            ],
        },
        description: {
            bn: "A premium Android 14-based dual-display POS terminal featuring a built-in 2D scanner and 58mm thermal printer, powered by 4GB RAM and 32GB storage.",
            en: "A premium Android 14-based dual-display POS terminal featuring a built-in 2D scanner and 58mm thermal printer, powered by 4GB RAM and 32GB storage.",
        }
    }
];
