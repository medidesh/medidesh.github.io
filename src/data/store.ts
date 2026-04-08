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
            bn: ["থার্মাল প্রিন্টিং", "কম্প্যাক্ট ও পোর্টেবল", "ব্লুটুথ সাপোর্ট"],
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
            bn: "Pix Z80C 3 inch Autocut Desk Thermal Printer",
            en: "Pix Z80C 3 inch Autocut Desk Thermal Printer",
        },
        price: "8,499",
        originalPrice: "9,999",
        images: ["https://pixposbd.com/wp-content/uploads/2025/06/IMG_20250601_160552.jpg"],
        features: {
            bn: ["৩ ইঞ্চি প্রস্থ", "অটো-কাটার", "উচ্চ গতির ডেস্ক টাইপ"],
            en: ["3 inch Width", "Auto-cutter", "High Speed Desk Type"],
        },
        description: {
            bn: "ফার্মেসির দ্রুত ইনভয়েসিং এর জন্য অটো-কাট প্রিন্টার।",
            en: "Auto-cut printer for fast pharmacy invoicing.",
        },
        externalUrl: "https://pixposbd.com/product/pix-z80c-3-inch-autocut-desk/",
    },
    {
        id: "pixpos-l58p",
        vendor: VENDORS.pixstore,
        name: {
            bn: "PixPos L58P Multifunction Printer",
            en: "PixPos L58P Multifunction Printer",
        },
        price: "5,499",
        originalPrice: "5,999",
        images: ["https://pixposbd.com/wp-content/uploads/2024/11/DSC01467-scaled.jpg"],
        features: {
            bn: ["মাল্টিফাংশন", "লেবেল স্টিকার ও রিসিট", "কম্প্যাক্ট বিল্ড"],
            en: ["Multifunction", "Label Sticker & Receipt", "Compact Build"],
        },
        description: {
            bn: "ফার্মেসির ড্রাগ লেবেলিং এবং ইনভয়েসের জন্য আদর্শ সমাধান।",
            en: "Ideal solution for pharmacy drug labeling and invoicing.",
        },
        externalUrl: "https://pixposbd.com/product/pixpos-l58p-multifunction-label-sticker-and-receipt-printer/",
    },
    {
        id: "pixpos-m860",
        vendor: VENDORS.pixstore,
        name: {
            bn: "PixPos M860 3 inch Bluetooth Printer",
            en: "PixPos M860 3 inch Bluetooth Printer",
        },
        price: "5,480",
        originalPrice: "5,999",
        images: ["https://pixposbd.com/wp-content/uploads/2026/02/PixPos-M860-3-inch-POS-Printer-Bluetooth-PC.jpg"],
        features: {
            bn: ["ব্লুটুথ ও পিসি কানেক্টিভিটি", "৮০মিমি প্রিন্টিং", "অ্যান্ড্রয়েড ও উইন্ডোজ সাপোর্ট"],
            en: ["Bluetooth & PC Connectivity", "80mm Printing", "Android & Windows Support"],
        },
        description: {
            bn: "পেশাদার পস প্রিন্টিং এর জন্য একটি শক্তিশালী সমাধান।",
            en: "A robust solution for professional POS printing needs.",
        },
        externalUrl: "https://pixposbd.com/product/pixpos-m860-3-inch-pos-printer-bluetooth-pc-80mm-pos-printer/",
    },
    {
        id: "pixpos-d58",
        vendor: VENDORS.pixstore,
        name: {
            bn: "PixPos D58 Multifunction Desktop Printer",
            en: "PixPos D58 Multifunction Desktop Printer",
        },
        price: "3,180",
        originalPrice: "3,500",
        images: ["https://pixposbd.com/wp-content/uploads/2024/11/Pix-D58-Label-Sticker-printer-2.jpg"],
        features: {
            bn: ["ডেস্কটপ মডেল", "সহজ ব্যবহার", "সাশ্রয়ী মূল্য"],
            en: ["Desktop Model", "Easy to Use", "Affordable Price"],
        },
        description: {
            bn: "ছোট ও মাঝারি ফার্মেসির জন্য উপযুক্ত ডেস্কটপ প্রিন্টার।",
            en: "Suitable desktop printer for small and medium pharmacies.",
        },
        externalUrl: "https://pixposbd.com/product/pixpos-d58-multifunction-printer/",
    },
    {
        id: "pixpos-z108",
        vendor: VENDORS.pixstore,
        name: {
            bn: "PixPos Z108 Dual Display POS Printer",
            en: "PixPos Z108 Dual Display POS Printer",
        },
        price: "30,999",
        originalPrice: "38,999",
        images: ["https://pixposbd.com/wp-content/uploads/2025/06/IMG_20250611_225007.jpg"],
        features: {
            bn: ["ডুয়াল ডিসপ্লে", "অ্যান্ড্রয়েড ভিত্তিক", "হাই-এন্ড পারফরম্যান্স"],
            en: ["Dual Display", "Android Based", "High-end Performance"],
        },
        description: {
            bn: "আধুনিক ফার্মেসির জন্য এক পূর্ণাঙ্গ ডিজিটাল পস সমাধান।",
            en: "A complete digital POS solution for modern pharmacies.",
        },
        externalUrl: "https://pixposbd.com/product/pixpos-z108-pos-printer-dual-display/",
    }
];
