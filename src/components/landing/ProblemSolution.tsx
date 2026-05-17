"use client";

import { useLanguage } from "@/lib/i18n";
import PhoneMockup from "../ui/PhoneMockup";
import { Database, ShieldCheck, Monitor, Eye, Tag, Heartbeat, Desktop, DeviceMobile, Barcode, Printer, Laptop, MagnifyingGlass, CheckCircle, ArrowsClockwise } from "@phosphor-icons/react/dist/ssr";
import { useState, useEffect } from "react";

const T = {
    bn: {
        solutions: {
            heading1: "ডিজিটাল সিস্টেমের",
            heading2: "সমস্যাগুলোর সমাধান",
            sub: "টেকনিক্যাল ভয়, হার্ডওয়্যার খরচ, বিশ্বস্ততা, উচ্চমূল্য — সব ঝামেলার এক সহজ সমাধান: মেডিদেশ।",
            points: [
                { title: "প্রযুক্তি ভীতি", desc: "এতটাই সহজ যে কোনো প্রশিক্ষণ ছাড়াই ব্যবহার করা যায়।", icon: Monitor },
                { title: "মালের অপচয় ও চুরি", desc: "রিয়েল-টাইম স্টক হিসাব যা লোকসান শূন্যে নামিয়ে আনে।", icon: Eye },
                { title: "অতিরিক্ত খরচ", desc: "পদ্মা প্ল্যান চিরতরে ফ্রি। প্রিমিয়াম মাত্র ৳৩৯৯ থেকে শুরু।", icon: Tag },
                { title: "ডেটা হারানোর ভয়", desc: "ব্যাংক-গ্রেড এনক্রিপশন আপনার ডেটা সর্বদা নিরাপদ রাখে।", icon: ShieldCheck }
            ]
        },
        inventory: {
            heading1: "২০,০০০+ গ্লোবাল",
            heading2: "ইনভেন্টরি রেডি",
            segments: [
                { text: "ওষুধ এন্ট্রি করার ঝামেলা থেকে মুক্তি! ", hl: false },
                { text: "যেকোনো সাধারণ ও ব্র্যান্ডের ওষুধ", hl: true, color: "text-medidesh-teal-600 font-bold" },
                { text: " আপনার স্টকে যুক্ত করুন মাত্র ", hl: false },
                { text: "এক ক্লিকেই।", hl: true, color: "text-medidesh-teal-600 font-bold" },
                { text: " হাজার হাজার ওষুধের ডেটাবেস থেকে ", hl: false },
                { text: "প্রয়োজনীয় তথ্য", hl: true, color: "text-medidesh-teal-600 font-bold" },
                { text: " সহ ওষুধ খুঁজুন। নতুন ওষুধ মার্কেটে আসামাত্রই ", hl: false },
                { text: "অটোমেটিক আপডেট", hl: true, color: "text-medidesh-teal-600 font-bold" },
                { text: " পাবেন।", hl: false },
            ]
        }
    },
    en: {
        solutions: {
            heading1: "Solutions to",
            heading2: "digital challenges",
            sub: "Tech fear, hardware costs, reliability, high prices — one simple answer: Medidesh.",
            points: [
                { title: "Fear of technology", desc: "So simple you can start without any training.", icon: Monitor },
                { title: "Stock wastage", desc: "Real-time stock tracking brings theft to zero.", icon: Eye },
                { title: "High software costs", desc: "Start for free. Premium features from just ৳399/mo.", icon: Tag },
                { title: "Data safety", desc: "Bank-grade encryption keeps your business data safe.", icon: ShieldCheck }
            ]
        },
        inventory: {
            heading1: "20,000+ Global",
            heading2: "Inventory Ready",
            segments: [
                { text: "Freedom from the hassle of manual data entry! ", hl: false },
                { text: "Add any generic or brand medicine", hl: true, color: "text-medidesh-teal-600 font-bold" },
                { text: " in Bangladesh to your stock with ", hl: false },
                { text: "one click.", hl: true, color: "text-medidesh-teal-600 font-bold" },
                { text: " Find medicines instantly from a ", hl: false },
                { text: "massive pre-loaded database", hl: true, color: "text-medidesh-teal-600 font-bold" },
                { text: " with all necessary information. Get ", hl: false },
                { text: "automatic updates", hl: true, color: "text-medidesh-teal-600 font-bold" },
                { text: " as soon as new medicines hit the market.", hl: false },
            ]
        }
    }
};

const PHARMA_COMPANIES = [
    { name: "SQUARE", color: "bg-blue-500", style: "border-slate-900 shadow-[4px_4px_0px_0px_rgba(15,23,42,1)] rounded-none" },
    { name: "BEXIMCO", color: "bg-red-500", style: "border-slate-900 shadow-[4px_4px_0px_0px_rgba(15,23,42,1)] rounded-none" },
    { name: "INCEPTA", color: "bg-green-500", style: "border-slate-900 shadow-[3px_3px_0px_0px_rgba(15,23,42,1)] rounded-none" },
    { name: "ACME", color: "bg-purple-500", style: "border-slate-900 shadow-[3px_3px_0px_0px_rgba(15,23,42,1)] rounded-none" },
    { name: "RENATA", color: "bg-orange-500", style: "border-medidesh-teal-600 shadow-[4px_4px_0px_0px_rgba(13,148,136,1)] rounded-none text-medidesh-teal-700" },
    { name: "OPSONIN", color: "bg-pink-500", style: "border-slate-900 shadow-[4px_4px_0px_0px_rgba(15,23,42,1)] rounded-none" },
    { name: "ESKAYEF", color: "bg-teal-500", style: "border-slate-900 shadow-[3px_3px_0px_0px_rgba(15,23,42,1)] rounded-none" },
    { name: "ARISTOPHARMA", color: "bg-indigo-500", style: "border-slate-900 shadow-[2px_2px_0px_0px_rgba(15,23,42,1)] rounded-none" },
    { name: "DRUG INT.", color: "bg-yellow-500", style: "border-slate-900 shadow-[4px_4px_0px_0px_rgba(15,23,42,1)] rounded-none" },
    { name: "HEALTHCARE", color: "bg-cyan-500", style: "border-slate-900 shadow-[3px_3px_0px_0px_rgba(15,23,42,1)] rounded-none" },
    { name: "RADIANT", color: "bg-rose-500", style: "border-slate-900 shadow-[4px_4px_0px_0px_rgba(15,23,42,1)] rounded-none" },
    { name: "POPULAR", color: "bg-emerald-500", style: "border-slate-900 shadow-[3px_3px_0px_0px_rgba(15,23,42,1)] rounded-none" },
    { name: "ACI", color: "bg-sky-500", style: "border-slate-900 shadow-[4px_4px_0px_0px_rgba(15,23,42,1)] rounded-none" },
    { name: "ORION", color: "bg-fuchsia-500", style: "border-medidesh-teal-600 shadow-[3px_3px_0px_0px_rgba(13,148,136,1)] rounded-none text-medidesh-teal-700" },
    { name: "NAVANA", color: "bg-lime-500", style: "border-slate-900 shadow-[4px_4px_0px_0px_rgba(15,23,42,1)] rounded-none" },
    { name: "GENERAL", color: "bg-amber-500", style: "border-slate-900 shadow-[2px_2px_0px_0px_rgba(15,23,42,1)] rounded-none" },
    { name: "BEACON", color: "bg-violet-500", style: "border-slate-900 shadow-[4px_4px_0px_0px_rgba(15,23,42,1)] rounded-none" },
    { name: "JMI", color: "bg-red-600", style: "border-slate-900 shadow-[3px_3px_0px_0px_rgba(15,23,42,1)] rounded-none" },
    { name: "LABAID", color: "bg-green-600", style: "border-slate-900 shadow-[4px_4px_0px_0px_rgba(15,23,42,1)] rounded-none" },
    { name: "DELTA", color: "bg-blue-600", style: "border-slate-900 shadow-[3px_3px_0px_0px_rgba(15,23,42,1)] rounded-none" },
];

const POSITIONS = [
    "absolute top-8 -left-8 lg:-left-20 z-20 animate-float delay-0",
    "absolute bottom-24 -right-6 lg:-right-16 z-20 animate-float delay-300",
    "absolute top-1/2 -translate-y-1/2 -right-4 lg:-right-12 z-20 animate-float delay-700",
    "absolute -bottom-6 left-12 z-20 animate-float delay-1000",
    "absolute top-32 -right-8 lg:-right-24 z-20 animate-float delay-500",
    "absolute top-1/2 translate-y-10 -left-6 lg:-left-16 z-20 animate-float delay-200"
];

export default function ProblemSolution() {
    const { lang } = useLanguage();
    const t = T[lang];

    const [activeLogos, setActiveLogos] = useState<typeof PHARMA_COMPANIES>([]);

    useEffect(() => {
        // Initial random selection
        const getRandomCompanies = () => {
            const shuffled = [...PHARMA_COMPANIES].sort(() => 0.5 - Math.random());
            return shuffled.slice(0, 6);
        };
        
        setActiveLogos(getRandomCompanies());

        // Rotate companies every 4 seconds
        const interval = setInterval(() => {
            setActiveLogos(getRandomCompanies());
        }, 4000);

        return () => clearInterval(interval);
    }, []);

    return (
        <section id="features-showcase" className="py-20 lg:py-32 bg-white overflow-hidden">
            <div className="container mx-auto px-5 lg:px-10 flex flex-col gap-20 lg:gap-32">
                
                {/* Row 1: Text Left, Hardware Composition Right (Solutions) */}
                <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
                    <div className="w-full lg:w-1/2">
                        <h2 className="text-4xl sm:text-5xl lg:text-[48px] font-black text-slate-900 mb-6 leading-[1.1] tracking-[-0.03em]">
                            {t.solutions.heading1} <br /> {t.solutions.heading2}
                        </h2>
                        <p className="text-slate-600 text-lg mb-10 leading-relaxed max-w-xl">
                            {t.solutions.sub}
                        </p>
                        
                        <div className="space-y-7 max-w-xl">
                            {t.solutions.points.map((pt, i) => (
                                <div key={i} className="flex gap-4 items-start">
                                    <div className="w-10 h-10 shrink-0 bg-[#9fff40] rounded-full flex items-center justify-center border-2 border-slate-900 mt-0.5">
                                        <pt.icon size={20} weight="bold" className="text-slate-900" />
                                    </div>
                                    <div>
                                        <h4 className="text-[16px] font-bold text-slate-900 mb-0.5">{pt.title}</h4>
                                        <p className="text-slate-600 text-[13px] leading-relaxed">{pt.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="w-full lg:w-1/2 relative flex justify-center pt-10 lg:pt-0">
                        {/* Placeholder for future vector image */}
                        <div className="relative z-10 w-full max-w-[500px]">
                            <img 
                                src="/assets/pharmacy_analytics_vector.png" 
                                alt="Solutions Vector Image" 
                                className="w-full h-auto mix-blend-multiply drop-shadow-sm"
                            />
                        </div>
                    </div>
                </div>

                {/* Row 2: Text Left, Image Right (Global Inventory) */}
                <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
                    <div className="w-full lg:w-1/2">
                        <h2 className="text-4xl sm:text-5xl lg:text-[56px] font-black text-slate-900 mb-6 leading-[1.1] tracking-[-0.03em]">
                            {t.inventory.heading1} <br /> {t.inventory.heading2}
                        </h2>
                        <p className="text-slate-600 text-[19px] lg:text-[22px] leading-relaxed max-w-xl font-normal">
                            {t.inventory.segments.map((seg, i) => 
                                seg.hl ? (
                                    <span key={i} className={seg.color}>
                                        {seg.text}
                                    </span>
                                ) : (
                                    <span key={i}>{seg.text}</span>
                                )
                            )}
                        </p>
                    </div>

                    <div className="w-full lg:w-1/2 relative flex justify-center">
                        {/* Mockup */}
                        <div className="relative z-10">
                            <PhoneMockup className="shadow-2xl">
                                <img src="/assets/app_screenshots/global_inventory.PNG" alt="Inventory Search" className="w-full h-full object-cover object-top rounded-[2.5rem]" />
                            </PhoneMockup>

                            {/* Floating Pharmaceutical Logos */}
                            {activeLogos.map((company, idx) => (
                                <div key={`${company.name}-${idx}`} className={POSITIONS[idx]}>
                                    <div className={`bg-white border-2 px-4 py-2 flex items-center gap-2 transition-all duration-500 ${company.style}`}>
                                        <div className={`w-2.5 h-2.5 rounded-full ${company.color}`}></div>
                                        <span className={`font-black text-[11px] sm:text-xs tracking-wide ${company.style.includes('text-') ? '' : 'text-slate-900'}`}>
                                            {company.name}
                                        </span>
                                    </div>
                                </div>
                            ))}

                            {/* Floating Card - Global Search Stat */}
                            <div className="absolute -bottom-8 -left-2 lg:-left-12 z-20 w-[180px] animate-float" style={{ animationDelay: "0.8s" }}>
                                <div className="absolute inset-0 bg-white border-2 border-slate-900 rounded-xl translate-x-1.5 translate-y-1.5"></div>
                                <div className="relative bg-white border-2 border-slate-900 rounded-xl p-3 flex items-center gap-3">
                                    <div className="w-8 h-8 bg-medidesh-teal-100 rounded-lg flex items-center justify-center border border-medidesh-teal-200 shrink-0">
                                        <Database size={16} weight="fill" className="text-medidesh-teal-600" />
                                    </div>
                                    <div className="flex-1">
                                        <p className="text-[9px] font-bold text-slate-500 uppercase leading-none tracking-wide">Global Search</p>
                                        <p className="text-[13px] font-black text-slate-900 leading-none mt-1">20,000+ Items</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
}
