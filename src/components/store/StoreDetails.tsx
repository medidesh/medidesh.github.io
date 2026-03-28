"use client";

import { useState, useRef, MouseEvent } from "react";
import Image from "next/image";
import Link from "next/link";
import { 
    CaretRight, 
    WhatsappLogo, 
    CheckCircle, 
    ArrowLeft,
    Tag,
    ShieldCheck,
    Truck,
    Storefront
} from "@phosphor-icons/react/dist/ssr";
import { useLanguage } from "@/lib/i18n";
import { STORE_ITEMS } from "@/data/store";
import LandingHeader from "@/components/landing/LandingHeader";
import LandingFooter from "@/components/landing/LandingFooter";

const T = {
    bn: {
        back: "স্টোরে ফিরুন",
        home: "হোম",
        store: "স্টোর",
        features: "মূল বৈশিষ্ট্যসমূহ",
        buyNow: "কিনুন (WhatsApp)",
        inStock: "স্টকে আছে",
        warranty: "অফিসিয়াল ওয়ারেন্টি",
        fastDelivery: "দ্রুত ডেলিভারি",
        collab: "ভেরিফাইড পার্টনারশিপ",
    },
    en: {
        back: "Back to Store",
        home: "Home",
        store: "Store",
        features: "Key Features",
        buyNow: "Buy via WhatsApp",
        inStock: "In Stock",
        warranty: "Official Warranty",
        fastDelivery: "Fast Delivery",
        collab: "Verified Partnership",
    },
};

export default function StoreDetails({ slug }: { slug: string }) {
    const { lang } = useLanguage();
    const t = T[lang];
    const item = STORE_ITEMS.find((p) => p.id === slug);

    const [activeImageIdx, setActiveImageIdx] = useState(0);
    const [zoomPos, setZoomPos] = useState({ x: 0, y: 0, show: false });
    const imgRef = useRef<HTMLDivElement>(null);

    if (!item) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-slate-50 dark:bg-slate-950">
                <div className="text-center">
                    <h1 className="text-5xl font-black mb-4 text-slate-900 dark:text-white">404</h1>
                    <p className="text-slate-500 mb-8">Product not found</p>
                    <Link href="/store" className="text-medidesh-teal-500 font-bold flex items-center justify-center gap-2">
                        <ArrowLeft /> Back to Store
                    </Link>
                </div>
            </div>
        );
    }

    const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
        if (!imgRef.current) return;
        const { left, top, width, height } = imgRef.current.getBoundingClientRect();
        const x = ((e.clientX - left) / width) * 100;
        const y = ((e.clientY - top) / height) * 100;
        setZoomPos({ x, y, show: true });
    };

    const whatsappMessage = encodeURIComponent(`Hi ${item.vendor.name.en}, I'm interested in the ${item.name.en} I saw on Medidesh Store.`);
    const whatsappLink = `https://wa.me/${item.vendor.whatsapp}?text=${whatsappMessage}`;

    // Helper to calculate percentage off
    const calculateDiscount = (price: string, originalPrice?: string) => {
        if (!originalPrice) return null;
        const p = parseInt(price.replace(/,/g, ''));
        const op = parseInt(originalPrice.replace(/,/g, ''));
        if (op <= p) return null;
        return Math.round(((op - p) / op) * 100);
    };

    const discountPct = calculateDiscount(item.price, item.originalPrice);

    return (
        <div className="bg-slate-50 dark:bg-slate-950 min-h-screen flex flex-col">
            <LandingHeader />
            
            <main className="flex-1 pt-28 pb-20">
                <div className="container mx-auto px-6 lg:px-12 max-w-[1400px]">
                    {/* Breadcrumbs */}
                    <nav className="flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400 mb-8 overflow-x-auto whitespace-nowrap pb-2">
                        <Link href="/" className="hover:text-medidesh-teal-500 transition-colors">{t.home}</Link>
                        <CaretRight size={12} weight="bold" />
                        <Link href="/store" className="hover:text-medidesh-teal-500 transition-colors">{t.store}</Link>
                        <CaretRight size={12} weight="bold" />
                        <span className="text-slate-900 dark:text-white font-medium truncate max-w-[200px] sm:max-w-none">{item.name[lang]}</span>
                    </nav>

                    <Link href="/store" className="inline-flex items-center gap-2 text-medidesh-teal-500 font-bold mb-8 group">
                        <ArrowLeft className="group-hover:-translate-x-1 transition-transform" />
                        {t.back}
                    </Link>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 bg-white dark:bg-slate-900 p-6 sm:p-10 lg:p-12 rounded border border-slate-200 dark:border-slate-800 shadow-sm">
                        
                        {/* Image Gallery Section */}
                        <div className="flex flex-col gap-4">
                            {/* Main Active Image with Hover Zoom */}
                            <div className="relative group/zoom">
                                <div 
                                    ref={imgRef}
                                    onMouseMove={handleMouseMove}
                                    onMouseLeave={() => setZoomPos(prev => ({ ...prev, show: false }))}
                                    className="relative aspect-square rounded bg-slate-50 dark:bg-slate-950/50 overflow-hidden cursor-zoom-in border border-slate-100 dark:border-slate-800"
                                >
                                    {discountPct && (
                                        <div className="absolute top-6 right-6 z-10 bg-rose-500 text-white text-xs font-black uppercase tracking-wider px-3 py-1.5 rounded shadow-sm">
                                            -{discountPct}% OFF
                                        </div>
                                    )}

                                    <Image
                                        src={item.images[activeImageIdx]}
                                        alt={`${item.name[lang]} - View ${activeImageIdx + 1}`}
                                        fill
                                        priority
                                        className={`object-contain p-12 transition-opacity duration-300 ${zoomPos.show ? 'opacity-0' : 'opacity-100'}`}
                                    />
                                    
                                    {/* Zoom View Overlay */}
                                    {zoomPos.show && (
                                        <div 
                                            className="absolute inset-0 pointer-events-none bg-slate-50 dark:bg-slate-900/50"
                                            style={{
                                                backgroundImage: `url(${item.images[activeImageIdx]})`,
                                                backgroundPosition: `${zoomPos.x}% ${zoomPos.y}%`,
                                                backgroundSize: '250%',
                                                backgroundRepeat: 'no-repeat'
                                            }}
                                        />
                                    )}

                                    <div className="absolute bottom-6 right-6 bg-white/90 dark:bg-slate-800/90 backdrop-blur-sm px-4 py-2 rounded border border-slate-200 dark:border-slate-700 text-xs font-bold text-slate-600 dark:text-slate-400 pointer-events-none shadow-sm shadow-slate-200 dark:shadow-none">
                                        Hover to zoom
                                    </div>
                                </div>
                            </div>

                            {/* Thumbnail Strip */}
                            {item.images.length > 1 && (
                                <div className="flex items-center gap-3 overflow-x-auto pb-2 custom-scrollbar">
                                    {item.images.map((img, idx) => (
                                        <button
                                            key={idx}
                                            onClick={() => setActiveImageIdx(idx)}
                                            className={`relative w-20 h-20 shrink-0 rounded overflow-hidden border-2 transition-all duration-200 bg-slate-50 dark:bg-slate-800 focus:outline-none ${
                                                activeImageIdx === idx 
                                                    ? "border-medidesh-teal-500 opacity-100 ring-2 ring-medidesh-teal-500/20" 
                                                    : "border-slate-200 dark:border-slate-700 opacity-60 hover:opacity-100 cursor-pointer"
                                            }`}
                                        >
                                            <Image 
                                                src={img} 
                                                alt={`Thumbnail ${idx + 1}`} 
                                                fill 
                                                className="object-contain p-2"
                                            />
                                        </button>
                                    ))}
                                </div>
                            )}
                        </div>

                        {/* Content Section */}
                        <div className="flex flex-col">
                            {/* Vendor Badge */}
                            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded bg-medidesh-teal-50 dark:bg-medidesh-teal-900/20 border border-medidesh-teal-100 dark:border-medidesh-teal-800 text-medidesh-teal-700 dark:text-medidesh-teal-300 text-xs font-bold w-fit mb-6 shadow-sm">
                                <Storefront size={16} />
                                <span>{t.collab}: <span className="uppercase tracking-wider">{item.vendor.name[lang]}</span></span>
                            </div>

                            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 dark:text-white mb-6 leading-tight">
                                {item.name[lang]}
                            </h1>

                            <div className="flex items-center gap-4 mb-8 flex-wrap">
                                <div className="flex items-end gap-3 shrink-0">
                                    <span className="text-4xl lg:text-5xl font-black text-medidesh-teal-500 tracking-tight leading-none">
                                        ৳{item.price}
                                    </span>
                                    {item.originalPrice && (
                                        <span className="text-xl font-bold text-slate-400 dark:text-slate-500 line-through leading-relaxed mb-0.5">
                                            ৳{item.originalPrice}
                                        </span>
                                    )}
                                </div>
                                <div className="flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-emerald-50 dark:bg-emerald-900/20 text-emerald-600 dark:text-emerald-400 text-sm font-bold border border-emerald-100 dark:border-emerald-800/50">
                                    <CheckCircle weight="fill" size={18} />
                                    {t.inStock}
                                </div>
                            </div>

                            <p className="text-lg text-slate-600 dark:text-slate-400 mb-10 leading-relaxed">
                                {item.description[lang]}
                            </p>

                            <div className="space-y-6 mb-10 flex-1">
                                <h3 className="text-lg font-bold text-slate-900 dark:text-white flex items-center gap-2 pb-2 border-b border-slate-100 dark:border-slate-800">
                                    <Tag className="text-medidesh-teal-500" />
                                    {t.features}
                                </h3>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-6">
                                    {item.features[lang].map((feature, i) => (
                                        <div key={i} className="flex items-start gap-3">
                                            <CheckCircle weight="fill" className="text-medidesh-teal-500 mt-1 shrink-0" />
                                            <span className="text-slate-600 dark:text-slate-400 text-sm font-medium leading-relaxed">{feature}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="grid grid-cols-2 gap-4 mb-10">
                                <div className="p-4 rounded bg-slate-50 dark:bg-slate-950 border border-slate-100 dark:border-slate-800/50 flex flex-col items-center justify-center text-center">
                                    <ShieldCheck size={28} weight="duotone" className="text-medidesh-teal-500 mb-2" />
                                    <div className="text-xs font-bold text-slate-900 dark:text-white uppercase tracking-wider">{t.warranty}</div>
                                </div>
                                <div className="p-4 rounded bg-slate-50 dark:bg-slate-950 border border-slate-100 dark:border-slate-800/50 flex flex-col items-center justify-center text-center">
                                    <Truck size={28} weight="duotone" className="text-medidesh-teal-500 mb-2" />
                                    <div className="text-xs font-bold text-slate-900 dark:text-white uppercase tracking-wider">{t.fastDelivery}</div>
                                </div>
                            </div>

                            <a
                                href={whatsappLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-full inline-flex items-center justify-center gap-3 bg-medidesh-teal-500 hover:bg-medidesh-teal-600 text-white px-10 py-5 rounded font-bold text-xl transition-all shadow-xl shadow-medidesh-teal-500/20 hover:-translate-y-1 mb-6"
                            >
                                <WhatsappLogo weight="fill" size={28} />
                                <span>{t.buyNow}</span>
                            </a>
                            
                            {/* Vendor Info Section */}
                            <div className="flex items-center justify-between p-4 rounded bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800">
                                <div className="text-xs font-medium text-slate-500 dark:text-slate-400 uppercase tracking-widest">Distributed by</div>
                                {item.vendor.logo ? (
                                    <Image 
                                        src={item.vendor.logo} 
                                        alt={item.vendor.name[lang]} 
                                        width={100} 
                                        height={30} 
                                        className="h-6 w-auto object-contain dark:invert opacity-80"
                                    />
                                ) : (
                                    <div className="font-black text-slate-700 dark:text-slate-300">{item.vendor.name[lang]}</div>
                                )}
                            </div>

                        </div>
                    </div>
                </div>
            </main>

            <LandingFooter />
        </div>
    );
}
