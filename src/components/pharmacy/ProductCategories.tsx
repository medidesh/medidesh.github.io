"use client";

import { Pill, Thermometer, Baby, FirstAid, AppleLogo, HandSoap, PlusCircle, Prescription, Globe, Drop, Heartbeat } from "@phosphor-icons/react/dist/ssr";
import { PharmacyData } from "@/types/pharmacy";

const iconMap: Record<string, React.ReactNode> = {
    Pill: <Pill weight="duotone" />,
    Thermometer: <Thermometer weight="duotone" />,
    Baby: <Baby weight="duotone" />,
    FirstAid: <FirstAid weight="duotone" />,
    AppleLogo: <AppleLogo weight="duotone" />,
    HandSoap: <HandSoap weight="duotone" />,
    Globe: <Globe weight="duotone" />,
    Drop: <Drop weight="duotone" />,
    Heartbeat: <Heartbeat weight="duotone" />,
};

interface ProductCategoriesProps {
    pharmacy: PharmacyData;
}

export default function ProductCategories({ pharmacy }: ProductCategoriesProps) {
    const categories = pharmacy.categories || [];

    return (
        <section id="categories" className="py-16 bg-white border-b border-slate-100 relative overflow-hidden">

            {/* Background Motifs aligned with Hero */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-30">
                <div className="absolute inset-0 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] [background-size:32px_32px]"></div>

                <div className="absolute top-[20%] left-[-5%] text-pharma-green-100 animate-float opacity-40">
                    <PlusCircle size={100} weight="thin" />
                </div>
                <div className="absolute bottom-[10%] right-[-5%] text-blue-100 animate-float opacity-40" style={{ animationDelay: '1.5s' }}>
                    <Prescription size={90} weight="thin" />
                </div>

                <svg className="absolute top-0 right-0 w-full h-full opacity-10" viewBox="0 0 100 100" preserveAspectRatio="none">
                    <path d="M-10,40 Q30,20 50,40 T110,40" fill="none" stroke="#009B86" strokeWidth="0.1" strokeDasharray="1,2" className="animate-pulse" />
                </svg>
            </div>

            <div className="container mx-auto px-4 lg:px-8 relative z-10">
                <div className="flex flex-col items-center text-center mb-10">
                    <span className="text-pharma-green-600 font-bold uppercase tracking-[0.2em] text-[10px] mb-2">Inventory</span>
                    <h2 className="text-2xl lg:text-3xl font-black font-heading text-slate-900 leading-tight">
                        ফার্মেসি <span className="text-pharma-green-600 underline decoration-pharma-green-100 underline-offset-8">বিভাগসমূহ</span>
                    </h2>
                    <p className="text-slate-500 mt-4 max-w-xl text-sm italic">
                        আপনার প্রয়োজনীয় ঔষধ এবং স্বাস্থ্য পণ্যগুলো সহজেই আমাদের বিভাগ অনুযায়ী খুঁজে নিন।
                    </p>
                </div>

                <div className="flex flex-wrap justify-center gap-6">
                    {categories.map((cat, index) => (
                        <div key={index} className={`group bg-white/80 backdrop-blur-sm rounded-[1.5rem] p-5 border ${cat.border} hover:border-pharma-green-200 transition-all duration-300 hover:shadow-2xl hover:shadow-slate-200/50 cursor-pointer flex flex-col items-center text-center w-full max-w-[150px]`}>
                            <div className={`w-12 h-12 rounded-xl ${cat.bg} ${cat.color} flex items-center justify-center text-2xl mb-3 group-hover:scale-110 group-hover:rotate-6 transition-transform shadow-sm`}>
                                {iconMap[cat.icon] || <Pill weight="duotone" />}
                            </div>
                            <h3 className="font-bold text-slate-900 text-sm mb-0.5">{cat.name}</h3>
                            <p className="text-[9px] text-slate-400 font-black uppercase tracking-widest">{cat.subtitle}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
