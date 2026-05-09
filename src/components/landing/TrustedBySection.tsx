"use client";

import { useLanguage } from "@/lib/i18n";
import { Circle, Hexagon, Infinity as InfinityIcon, Planet, Target } from "@phosphor-icons/react/dist/ssr";

const T = {
    bn: {
        text: "১০০+ এর বেশি ফার্মেসির বিশ্বস্ত সফটওয়্যার",
    },
    en: {
        text: "Trusted software for over 100+ pharmacies",
    },
};

const PHARMACIES = [
    { name: "Mayer Doa Pharma", font: "font-sans font-black tracking-tighter" },
    { name: "Bismillah Pharmacy", font: "font-serif italic font-bold tracking-tight" },
    { name: "Sikder Medical", font: "font-[Orbitron] font-bold uppercase tracking-wider" },
    { name: "Lazz Pharma", font: "font-sans font-extrabold tracking-widest text-white/90" },
    { name: "Al-Madina Pharma", font: "font-mono font-bold tracking-tight" },
];

export default function TrustedBySection() {
    const { lang } = useLanguage();
    const t = T[lang];

    return (
        <section className="bg-[#0a0a0a] py-6 overflow-hidden border-b border-white/10">
            <div className="container mx-auto px-5 lg:px-10 flex flex-col md:flex-row items-center gap-6 lg:gap-12">
                <div className="w-full md:w-1/3 text-white">
                    <p className="text-lg lg:text-xl font-medium leading-snug">
                        {t.text}
                    </p>
                </div>
                
                {/* Marquee Container */}
                <div className="w-full md:w-2/3 relative flex overflow-x-hidden">
                    {/* Gradient Masks */}
                    <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-[#0a0a0a] to-transparent z-10 pointer-events-none"></div>
                    <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-[#0a0a0a] to-transparent z-10 pointer-events-none"></div>
                    
                    <div className="flex items-center whitespace-nowrap animate-marquee">
                        {[...PHARMACIES, ...PHARMACIES, ...PHARMACIES].map((pharmacy, i) => (
                            <div key={i} className="flex items-center gap-2 text-white/60 hover:text-white/80 transition-colors mx-8">
                                <span className={`text-2xl ${pharmacy.font}`}>{pharmacy.name}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
