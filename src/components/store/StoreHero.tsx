"use client";

import Image from "next/image";
import { useLanguage } from "@/lib/i18n";
import { VENDORS } from "@/data/store";

const T = {
    bn: {
        badge: "মেডিদেশ পার্টনারশিপ",
        titlePrefix: "মেডিদেশ",
        titleSuffix: "স্টোর",
        subtitle: "আমাদের ভেরিফাইড পার্টনারদের কাছ থেকে ফার্মেসি পরিচালনার জন্য প্রয়োজনীয় উন্নত পস প্রিন্টার, বারকোড স্ক্যানার এবং অন্যান্য হার্ডওয়্যার সংগ্রহ করুন।",
        trustedBy: "আমাদের বিশ্বস্ত ভেন্ডর পার্টনাররা",
    },
    en: {
        badge: "Medidesh Partnership",
        titlePrefix: "Medidesh",
        titleSuffix: "Store",
        subtitle: "Supercharge your pharmacy operations with our handpicked selection of premium POS printers, barcode scanners, and essential hardware from our trusted partners.",
        trustedBy: "Our Trusted Vendor Partners",
    },
};

export default function StoreHero() {
    const { lang } = useLanguage();
    const t = T[lang];

    const partners = Object.values(VENDORS);

    return (
        <section className="relative pt-28 pb-20 lg:pt-36 lg:pb-28 overflow-hidden border-b border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900">
            {/* Abstract Mesh Background */}
            <div 
                className="absolute inset-0 opacity-[0.02] dark:opacity-[0.04] pointer-events-none mix-blend-multiply dark:mix-blend-screen transition-opacity"
                style={{ backgroundImage: "url('/assets/images/mesh-bg.png')", backgroundSize: "cover", backgroundPosition: "center" }} 
            />
            {/* Fine grid */}
            <div className="absolute inset-0 opacity-[0.02] dark:opacity-[0.03] pointer-events-none"
                    style={{ backgroundImage: "linear-gradient(#2E8B57 1px,transparent 1px),linear-gradient(90deg,#2E8B57 1px,transparent 1px)", backgroundSize: "60px 60px" }} />
            
            {/* Central glow */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-medidesh-teal-500/5 rounded blur-[120px] pointer-events-none" />
            
            {/* Vector Blob Graphic 1 */}
            <svg className="absolute -left-20 top-1/4 w-80 h-80 opacity-[0.07] pointer-events-none" viewBox="0 0 300 300" fill="none" aria-hidden="true">
                <path d="M60,130 C40,80 80,20 140,30 C200,40 240,90 230,150 C220,210 170,260 110,250 C50,240 20,200 30,160 C35,145 50,140 60,130 Z" fill="#2E8B57" />
            </svg>
            
            {/* Vector Blob Graphic 2 */}
            <svg className="absolute -right-10 bottom-10 w-72 h-72 opacity-[0.06] pointer-events-none hidden lg:block" viewBox="0 0 300 300" fill="none" aria-hidden="true">
                <path d="M240,60 C270,100 280,160 260,200 C240,240 190,270 140,260 C90,250 60,210 70,160 C80,110 130,80 160,60 C190,40 220,30 240,60 Z" fill="#2E8B57" />
            </svg>
            
            {/* Abstract Cross */}
            <svg className="absolute top-20 right-1/4 w-7 h-7 opacity-[0.10] pointer-events-none hidden lg:block" viewBox="0 0 40 40" fill="none" aria-hidden="true">
                <rect x="15" y="2" width="10" height="36" rx="3" fill="#2E8B57" />
                <rect x="2" y="15" width="36" height="10" rx="3" fill="#2E8B57" />
            </svg>
            
            {/* Dot Cluster */}
            <svg className="absolute top-1/2 left-16 opacity-[0.08] pointer-events-none hidden lg:block" width="90" height="90" aria-hidden="true">
                {[0,1,2,3].map(r => [0,1,2,3].map(c => (
                    <circle key={`${r}-${c}`} cx={11+c*22} cy={11+r*22} r="2.5" fill="#2E8B57" />
                )))}
            </svg>
            
            <div className="container mx-auto px-6 lg:px-12 relative z-10">
                <div className="max-w-4xl mx-auto text-center flex flex-col items-center">
                    
                    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-900 dark:text-white mb-6 leading-[1.1] tracking-tight">
                        {t.titlePrefix} <span className="text-medidesh-teal-500">{t.titleSuffix}</span>
                    </h1>
                    
                    <p className="text-lg lg:text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto leading-relaxed mb-16">
                        {t.subtitle}
                    </p>

                    {/* Professional Static Partners Strip */}
                    <div className="w-full max-w-3xl mx-auto pt-10 border-t border-slate-100 dark:border-slate-800 flex flex-col items-center">
                        <p className="text-xs font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest mb-6">
                            {t.trustedBy}
                        </p>
                        <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12 lg:gap-16 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
                            {partners.map((partner) => (
                                <Image 
                                    key={partner.id}
                                    src={partner.logo} 
                                    alt={partner.name[lang]} 
                                    width={120} 
                                    height={40} 
                                    className="h-7 md:h-8 w-auto object-contain dark:invert mix-blend-multiply dark:mix-blend-normal hover:scale-105 transition-transform" 
                                />
                            ))}
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
