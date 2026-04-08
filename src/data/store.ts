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
    externalUrl: string; // Direct link to pixposbd.com
}

// Professional Mock Vendors using clearbit logos
export const VENDORS: Record<string, Vendor> = {
    pixstore: {
        id: "pix-store",
        name: { bn: "PixPos", en: "PixPos" },
        logo: "https://pixposbd.com/wp-content/uploads/2024/09/pix-pos.png",
        whatsapp: "+880 1806-444751",
    },
};

export const STORE_ITEMS: StoreItem[] = [
    {
        id: "pix-d1-mini",
        vendor: VENDORS.pixstore,
        name: {
            bn: "Pix D1 Mini Portable POS Printer",
            en: "Pix D1 Mini Portable POS Printer",
        },
        price: "2,180",
        originalPrice: "2,499",
        images: ["https://pixposbd.com/wp-content/uploads/2026/02/PIX-D1-MINI-POS-PRINTR-2.jpg"],
        features: {
            bn: ["Thermal Printing", "Compact & Portable", "Bluetooth Support"],
            en: ["Thermal Printing", "Compact & Portable", "Bluetooth Support"],
        },
        description: {
            bn: "মেডিদেশ ইউজারদের জন্য সাশ্রয়ী ও পোর্টেবল ইনভয়েস প্রিন্টার।",
            en: "Affordable and portable invoice printer for Medidesh users.",
        },
        externalUrl: "https://pixposbd.com/product/pix-pos-d1-mini-printer/",
    },
    {
        id: "pix-z80c",
        vendor: VENDORS.pixstore,
        name: {
            bn: "Pix Z80C 3 inch Autocut Desk Thermal Printer Bluetooth+USB",
            en: "Pix Z80C 3 inch Autocut Desk Thermal Printer Bluetooth+USB",
        },
        price: "8,499",
        originalPrice: "9,999",
        images: ["https://pixposbd.com/wp-content/uploads/2025/06/IMG_20250601_160552.jpg"],
        features: {
            bn: ["3 inch Width", "Auto-cutter", "High Speed Desk Type"],
            en: ["3 inch Width", "Auto-cutter", "High Speed Desk Type"],
        },
        description: {
            bn: "ফার্মেসির দ্রুত ইনভয়েসিং এর জন্য অটো-কাট প্রিন্টার।",
            en: "Auto-cut printer for fast pharmacy invoicing.",
        },
        externalUrl: "https://pixposbd.com/product/pix-z80c-3-inch-autocut-desk/",
    },
    {
        id: "pix-dual-mode",
        vendor: VENDORS.pixstore,
        name: {
            bn: "PixPos M860 3 inch POS Printer Bluetooth & PC 80mm Pos Printer",
            en: "PixPos M860 3 inch POS Printer Bluetooth & PC 80mm Pos Printer",
        },
        price: "5,480",
        originalPrice: "5,999",
        images: ["https://pixposbd.com/wp-content/uploads/2026/02/PixPos-M860-3-inch-POS-Printer-Bluetooth-PC.jpg"],
        features: {
            bn: ["Dual Mode: Label & Receipt", "3 inch Printing", "Professional Grade"],
            en: ["Dual Mode: Label & Receipt", "3 inch Printing", "Professional Grade"],
        },
        description: {
            bn: "একই সাথে লেবেল স্টিকার এবং ক্যাশ মেমো প্রিন্ট করুন।",
            en: "Print both label stickers and cash memos with one device.",
        },
        externalUrl: "https://pixposbd.com/product/printer-dual-mode-label-pos/",
    },
    {
        id: "pixpos-l58p",
        vendor: VENDORS.pixstore,
        name: {
            bn: "PixPos L58P Multifunction Label & Receipt",
            en: "PixPos L58P Multifunction Label & Receipt",
        },
        price: "5,0000",
        originalPrice: "6,4999",
        images: ["https://pixposbd.com/wp-content/uploads/2024/11/DSC01467-scaled.jpg"],
        features: {
            bn: ["Multifunction", "Label Sticker & Receipt", "Compact Build"],
            en: ["Multifunction", "Label Sticker & Receipt", "Compact Build"],
        },
        description: {
            bn: "ফার্মেসির ড্রাগ লেবেলিং এবং ইনভয়েসের জন্য আদর্শ সমাধান।",
            en: "Ideal solution for pharmacy drug labeling and invoicing.",
        },
        externalUrl: "https://pixposbd.com/product/pixpos-d58-multifunction-printer/",
    }
];
