"use client";

import { Pill, Thermometer, Baby, FirstAid, AppleLogo, HandSoap, PlusCircle, Prescription } from "@phosphor-icons/react/dist/ssr";

export default function ProductCategories() {
    const categories = [
        {
            name: "প্রেসক্রিপশন",
            subtitle: "Prescription Medicines",
            icon: <Pill weight="duotone" />,
            color: "text-blue-600",
            bg: "bg-blue-50",
            border: "border-blue-100"
        },
        {
            name: "হেলথ ডিভাইস",
            subtitle: "Devices & Monitors",
            icon: <Thermometer weight="duotone" />,
            color: "text-cyan-600",
            bg: "bg-cyan-50",
            border: "border-cyan-100"
        },
        {
            name: "মা ও শিশু",
            subtitle: "Mother & Baby Care",
            icon: <Baby weight="duotone" />,
            color: "text-purple-600",
            bg: "bg-purple-50",
            border: "border-purple-100"
        },
        {
            name: "সার্জিক্যাল",
            subtitle: "Surgical Supplies",
            icon: <FirstAid weight="duotone" />,
            color: "text-emerald-600",
            bg: "bg-emerald-50",
            border: "border-emerald-100"
        },
        {
            name: "নিউট্রিশন",
            subtitle: "Vitamins & Food",
            icon: <AppleLogo weight="duotone" />,
            color: "text-orange-600",
            bg: "bg-orange-50",
            border: "border-orange-100"
        },
        {
            name: "হাইজিন",
            subtitle: "Personal Care",
            icon: <HandSoap weight="duotone" />,
            color: "text-rose-600",
            bg: "bg-rose-50",
            border: "border-rose-100"
        },
    ];

    return (
        <section id="categories" className="py-24 bg-white border-b border-slate-100 relative overflow-hidden">

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
                <div className="flex flex-col items-center text-center mb-16">
                    <span className="text-pharma-green-600 font-bold uppercase tracking-[0.2em] text-xs mb-3">Inventory</span>
                    <h2 className="text-3xl lg:text-4xl font-black font-heading text-slate-900 leading-tight">
                        ফার্মেসি <span className="text-pharma-green-600 underline decoration-pharma-green-100 underline-offset-8">বিভাগসমূহ</span>
                    </h2>
                    <p className="text-slate-500 mt-6 max-w-xl text-base">
                        আপনার প্রয়োজনীয় ঔষধ এবং স্বাস্থ্য পণ্যগুলো সহজেই আমাদের বিভাগ অনুযায়ী খুঁজে নিন।
                    </p>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
                    {categories.map((cat, index) => (
                        <div key={index} className={`group bg-white/80 backdrop-blur-sm rounded-[2rem] p-6 border ${cat.border} hover:border-pharma-green-200 transition-all duration-300 hover:shadow-2xl hover:shadow-slate-200/50 cursor-pointer flex flex-col items-center text-center`}>
                            <div className={`w-16 h-16 rounded-2xl ${cat.bg} ${cat.color} flex items-center justify-center text-3xl mb-5 group-hover:scale-110 group-hover:rotate-6 transition-transform shadow-sm`}>
                                {cat.icon}
                            </div>
                            <h3 className="font-bold text-slate-900 text-base mb-1">{cat.name}</h3>
                            <p className="text-[10px] text-slate-400 font-black uppercase tracking-widest">{cat.subtitle}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
