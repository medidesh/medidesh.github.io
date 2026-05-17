"use client";

import { useLanguage } from "@/lib/i18n";

const T = {
    bn: {
        text: "১০০+ এর বেশি ফার্মেসি মেডিদেশ ব্যবহার করে তাদের ব্যবসা পরিচালনা করছে",
    },
    en: {
        text: "Over 100+ pharmacies rely on Medidesh to manage their business",
    },
};

const PHARMACIES_ROW_1 = [
    { name: "Shuvo pharmacy", font: "font-sans font-black tracking-tighter" },
    { name: "J.K. Raisa medical hall", font: "font-serif italic font-bold" },
    { name: "Ayra Medicine Corner", font: "font-sans font-extrabold uppercase tracking-widest" },
    { name: "Medi Pharmacy", font: "font-mono font-bold" },
    { name: "Agroni medical hall", font: "font-sans font-black" },
    { name: "Rayhan Pharmacy", font: "font-serif font-black uppercase" },
    { name: "BOSHONTO PHARMACY", font: "font-sans font-extrabold italic" },
    { name: "Medidesh Pharmacy", font: "font-mono font-black tracking-tighter" },
];

const PHARMACIES_ROW_2 = [
    { name: "The City Pharmacy", font: "font-sans font-black tracking-tight" },
    { name: "Dr. Abdullah Eye Care Center", font: "font-serif font-bold italic" },
    { name: "khandokar medicine corner", font: "font-sans font-black tracking-tighter" },
    { name: "Boro Pharmacy Limited", font: "font-serif italic font-bold" },
    { name: "marjahan madic", font: "font-sans font-extrabold uppercase tracking-widest" },
    { name: "Nur medical hall", font: "font-mono font-bold" },
    { name: "M/S Adorsho Pharmacy", font: "font-sans font-black" },
];

export default function TrustedBySection() {
    const { lang } = useLanguage();
    const t = T[lang];

    return (
        <section className="bg-black py-12 lg:py-16 border-y border-white/5 overflow-hidden">
            <div className="container mx-auto px-5 lg:px-10">
                <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-24">
                    {/* Left Text */}
                    <div className="w-full lg:w-1/2">
                        <h2 className="text-3xl md:text-4xl lg:text-[42px] font-bold text-white leading-[1.15] tracking-tight">
                            {t.text}
                        </h2>
                    </div>

                    {/* Right Marquee Rows */}
                    <div className="w-full lg:w-1/2 flex flex-col gap-8">
                        {/* Row 1: Right to Left */}
                        <div className="relative flex overflow-x-hidden">
                            <div className="flex items-center whitespace-nowrap animate-marquee">
                                {[...PHARMACIES_ROW_1, ...PHARMACIES_ROW_1, ...PHARMACIES_ROW_1].map((p, i) => (
                                    <span key={i} className={`text-xl lg:text-2xl text-white/70 mx-8 ${p.font}`}>
                                        {p.name}
                                    </span>
                                ))}
                            </div>
                        </div>

                        {/* Row 2: Left to Right */}
                        <div className="relative flex overflow-x-hidden">
                            <div className="flex items-center whitespace-nowrap animate-marquee-reverse">
                                {[...PHARMACIES_ROW_2, ...PHARMACIES_ROW_2, ...PHARMACIES_ROW_2].map((p, i) => (
                                    <span key={i} className={`text-xl lg:text-2xl text-white/70 mx-8 ${p.font}`}>
                                        {p.name}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
