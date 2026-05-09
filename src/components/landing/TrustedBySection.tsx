"use client";

import { useLanguage } from "@/lib/i18n";

const T = {
    bn: {
        text: "৫,০০০+ ফার্মেসি মেডিদেশ ব্যবহার করে তাদের ব্যবসা পরিচালনা করছে",
    },
    en: {
        text: "Over 5,000 pharmacies rely on Medidesh to manage their business",
    },
};

const PHARMACIES = [
    { name: "Lazz Pharma", font: "font-sans font-black tracking-tighter" },
    { name: "Bismillah", font: "font-serif italic font-bold" },
    { name: "Mayer Doa", font: "font-sans font-extrabold uppercase tracking-widest" },
    { name: "Sikder Medical", font: "font-mono font-bold" },
    { name: "Al-Madina", font: "font-sans font-black" },
    { name: "Popular", font: "font-serif font-black uppercase" },
    { name: "Khidmat", font: "font-sans font-extrabold italic" },
    { name: "Standard", font: "font-mono font-black tracking-tighter" },
];

export default function TrustedBySection() {
    const { lang } = useLanguage();
    const t = T[lang];

    return (
        <section className="bg-black py-16 lg:py-24 border-y border-white/5">
            <div className="container mx-auto px-5 lg:px-10">
                <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-24">
                    {/* Left Text */}
                    <div className="w-full lg:w-1/2">
                        <h2 className="text-3xl md:text-4xl lg:text-[42px] font-bold text-white leading-[1.15] tracking-tight">
                            {t.text}
                        </h2>
                    </div>

                    {/* Right Logos Grid */}
                    <div className="w-full lg:w-1/2 grid grid-cols-2 sm:grid-cols-4 gap-x-8 gap-y-10 items-center opacity-70">
                        {PHARMACIES.map((pharmacy, i) => (
                            <div key={i} className="flex items-center justify-center lg:justify-start">
                                <span className={`text-xl lg:text-2xl text-white whitespace-nowrap ${pharmacy.font}`}>
                                    {pharmacy.name}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
