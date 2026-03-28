"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Storefront, MagnifyingGlass, XCircle, WarningCircle, SmileySad, CircleNotch } from "@phosphor-icons/react";
import { useLanguage } from "@/lib/i18n";
import { STORE_ITEMS } from "@/data/store";

const T = {
    bn: {
        searchPlaceholder: "প্রিন্টার, স্ক্যানার বা ব্র্যান্ড খুঁজুন...",
        noResultsTitle: "কিছু পাওয়া যায়নি",
        noResultsDesc: "আপনার খোঁজার সাথে মিল রেখে কোনো আইটেম পাওয়া যায়নি। অন্য কিছু দিয়ে চেষ্টা করুন।",
        clearSearch: "সার্চ মুছুন",
        errorTitle: "কিছু একটা ভুল হয়েছে",
        errorDesc: "ডেটা লোড করতে সমস্যা হয়েছে। অনুগ্রহ করে আবার চেষ্টা করুন।",
        retryBtn: "পুনরায় চেষ্টা করুন"
    },
    en: {
        searchPlaceholder: "Search printers, scanners, or brands...",
        noResultsTitle: "No Results Found",
        noResultsDesc: "We couldn't find any hardware matching your search. Try different keywords.",
        clearSearch: "Clear Search",
        errorTitle: "Something went wrong",
        errorDesc: "There was an error loading the store data. Please try again later.",
        retryBtn: "Try Again"
    },
};

export default function StoreGrid() {
    const { lang } = useLanguage();
    const t = T[lang];

    const [searchQuery, setSearchQuery] = useState("");
    const [debouncedSearch, setDebouncedSearch] = useState("");
    const [isSearching, setIsSearching] = useState(false);
    const [hasError, setHasError] = useState(false);

    // Simulate search loading and handle "error" keyword trigger
    useEffect(() => {
        setIsSearching(true);
        
        if (searchQuery.trim().toLowerCase() === "error") {
            const errHandler = setTimeout(() => {
                setHasError(true);
                setIsSearching(false);
            }, 600);
            return () => clearTimeout(errHandler);
        } else {
            setHasError(false);
        }

        const handler = setTimeout(() => {
            setDebouncedSearch(searchQuery);
            setIsSearching(false);
        }, 500);

        return () => clearTimeout(handler);
    }, [searchQuery]);

    const calculateDiscount = (price: string, originalPrice?: string) => {
        if (!originalPrice) return null;
        const p = parseInt(price.replace(/,/g, ''));
        const op = parseInt(originalPrice.replace(/,/g, ''));
        if (op <= p) return null;
        const pct = Math.round(((op - p) / op) * 100);
        return `${pct}%`;
    };

    const filteredItems = STORE_ITEMS.filter(item => {
        const query = debouncedSearch.toLowerCase().trim();
        if (!query) return true;
        return (
            item.name.en.toLowerCase().includes(query) ||
            item.name.bn.toLowerCase().includes(query) ||
            item.vendor.name.en.toLowerCase().includes(query) ||
            item.vendor.name.bn.toLowerCase().includes(query)
        );
    });

    const handleClear = () => {
        setSearchQuery("");
        setHasError(false);
    };

    return (
        <div className="container mx-auto px-6 lg:px-12">
            
            {/* Search Bar */}
            <div className="max-w-2xl mx-auto mb-12">
                <div className="relative group">
                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                         {isSearching ? (
                            <CircleNotch size={20} className="text-medidesh-teal-500 animate-spin" />
                         ) : (
                            <MagnifyingGlass size={20} className="text-slate-400 group-focus-within:text-medidesh-teal-500 transition-colors" />
                         )}
                    </div>
                    <input
                        type="text"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        placeholder={t.searchPlaceholder}
                        className="w-full bg-white dark:bg-slate-900 border-2 border-slate-200 dark:border-slate-800 rounded py-3.5 pl-12 pr-12 text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:border-medidesh-teal-500 dark:focus:border-medidesh-teal-500/80 transition-all shadow-sm font-medium"
                    />
                    {searchQuery && (
                        <button 
                            onClick={handleClear}
                            className="absolute inset-y-0 right-0 pr-4 flex items-center text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 transition-colors"
                        >
                            <XCircle size={20} weight="fill" />
                        </button>
                    )}
                </div>
                <div className="text-center mt-2 text-xs text-slate-400 dark:text-slate-500 h-4">
                    {/* Just a tiny hint for testing the feature */}
                    <span className="opacity-0 hover:opacity-100 transition-opacity">Tip: Type "error" to test error state</span>
                </div>
            </div>

            {/* Error State */}
            {hasError && !isSearching && (
                <div className="max-w-md mx-auto text-center py-16 bg-rose-50 dark:bg-rose-950/20 rounded border border-rose-100 dark:border-rose-900/30">
                    <WarningCircle size={64} className="text-rose-500 mx-auto mb-4" weight="duotone" />
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">{t.errorTitle}</h3>
                    <p className="text-slate-500 dark:text-slate-400 text-sm mb-6">{t.errorDesc}</p>
                    <button 
                        onClick={handleClear}
                        className="bg-slate-900 dark:bg-white text-white dark:text-slate-900 px-6 py-2 rounded text-sm font-bold hover:opacity-90 transition-opacity"
                    >
                        {t.retryBtn}
                    </button>
                </div>
            )}

            {/* Empty State */}
            {!hasError && !isSearching && filteredItems.length === 0 && (
                <div className="max-w-md mx-auto text-center py-20">
                    <SmileySad size={64} className="text-slate-300 dark:text-slate-700 mx-auto mb-4" weight="duotone" />
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">{t.noResultsTitle}</h3>
                    <p className="text-slate-500 dark:text-slate-400 text-sm mb-6 max-w-sm mx-auto">{t.noResultsDesc}</p>
                    <button 
                        onClick={handleClear}
                        className="text-medidesh-teal-500 font-bold text-sm hover:underline"
                    >
                        {t.clearSearch}
                    </button>
                </div>
            )}

            {/* Skeleton Loading State */}
            {isSearching && !hasError && (
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 lg:gap-8 max-w-[1400px] mx-auto opacity-70">
                    {[1, 2, 3, 4].map((i) => (
                        <div key={i} className="flex flex-col bg-white dark:bg-slate-900 rounded border border-slate-200 dark:border-slate-800 overflow-hidden animate-pulse">
                            <div className="aspect-[4/3] bg-slate-100 dark:bg-slate-800 p-6 flex items-center justify-center" />
                            <div className="p-5 flex-1 flex flex-col items-center">
                                <div className="h-4 bg-slate-200 dark:bg-slate-700 rounded w-3/4 mb-4" />
                                <div className="h-6 bg-slate-200 dark:bg-slate-700 rounded w-1/3 mb-4" />
                                <div className="h-3 bg-slate-200 dark:bg-slate-700 rounded w-full mb-2" />
                                <div className="h-3 bg-slate-200 dark:bg-slate-700 rounded w-5/6" />
                            </div>
                        </div>
                    ))}
                </div>
            )}

            {/* Data Grid */}
            {!hasError && !isSearching && filteredItems.length > 0 && (
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 lg:gap-8 max-w-[1400px] mx-auto">
                    {filteredItems.map((item) => {
                        const discountLabel = calculateDiscount(item.price, item.originalPrice);

                        return (
                            <Link 
                                key={item.id}
                                href={`/store/${item.id}`}
                                className="group flex flex-col bg-white dark:bg-slate-900 rounded border border-slate-200 dark:border-slate-800 overflow-hidden hover:border-medidesh-teal-400 dark:hover:border-medidesh-teal-500/50 hover:shadow-lg transition-all duration-300 cursor-pointer"
                            >
                                {/* Full-bleed Image Header */}
                                <div className="relative aspect-[4/3] bg-slate-100 dark:bg-slate-950 overflow-hidden">
                                    {discountLabel && (
                                        <div className="absolute top-4 right-4 z-10 bg-rose-500 text-white text-[10px] font-black uppercase tracking-wider px-2.5 py-1 rounded shadow-sm">
                                            -{discountLabel}
                                        </div>
                                    )}

                                    <Image
                                        src={item.images[0]}
                                        alt={item.name[lang]}
                                        fill
                                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                                        className="object-cover group-hover:scale-110 transition-transform duration-700"
                                    />
                                    
                                    {/* Vendor Badge Overlay */}
                                    <div className="absolute top-4 left-4 bg-white/90 dark:bg-slate-800/90 backdrop-blur-sm border border-slate-200 dark:border-slate-700 rounded px-2.5 py-1 flex items-center gap-1.5 shadow-sm">
                                        <Storefront size={14} className="text-medidesh-teal-500" />
                                        <span className="text-[10px] font-black uppercase tracking-wider text-slate-700 dark:text-slate-300">{item.vendor.name[lang]}</span>
                                    </div>
                                </div>

                                {/* Standard Content Body Below Image */}
                            <div className="p-5 flex-1 flex flex-col items-start text-left">
                                <h2 className="text-sm font-bold text-slate-900 dark:text-white mb-2 line-clamp-2 leading-snug group-hover:text-medidesh-teal-500 transition-colors min-h-[40px]">
                                    {item.name[lang]}
                                </h2>
                                
                                <div className="flex items-center gap-2 mb-3">
                                    <span className="text-lg font-black text-slate-900 dark:text-white tracking-tight">
                                        ৳{item.price}
                                    </span>
                                    {item.originalPrice && (
                                        <span className="text-xs font-semibold text-slate-400 dark:text-slate-500 line-through decoration-rose-500/30">
                                            ৳{item.originalPrice}
                                        </span>
                                    )}
                                </div>

                                <p className="text-xs text-slate-500 dark:text-slate-400 line-clamp-3 leading-relaxed">
                                    {item.description[lang]}
                                </p>
                            </div>
                            </Link>
                        );
                    })}
                </div>
            )}
        </div>
    );
}
