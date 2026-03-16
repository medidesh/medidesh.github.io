"use client";

import { GooglePlayLogoIcon, Star, ArrowRight, CheckCircle, YoutubeLogo } from "@phosphor-icons/react/dist/ssr";
import { useLanguage } from "@/lib/i18n";

const T = {
    bn: {
        badge: "মেডিদেশ চিরতরে বিনামূল্যে",
        title1: "শুধুমাত্র একটি মোবাইল ফোন দিয়ে",
        titleHighlight: "ফার্মেসি পরিচালনা",
        title2: "করুন স্মার্টলি",
        sub: "ফার্মেসি মালিকদের জন্য তৈরি — স্টকের হিসাব, বিক্রয়, বাকি খাতা ও মেয়াদোত্তীর্ণ সতর্কতা এখন এক অ্যাপে আপনার পকেটে।",
        downloadBtn: "অ্যাপ ডাউনলোড",
        tutorialBtn: "টিউটোরিয়াল",
        stats: [
            { value: "১,০০০+", label: "সক্রিয় ব্যবহারকারী" },
            { value: "৫০০+",   label: "বিশ্বস্ত ফার্মেসি" },
            { value: "৪.৯/৫",  label: "গুগল রেটিং" },
        ],
    },
    en: {
        badge: "Medidesh — Forever Free",
        title1: "Manage your pharmacy",
        titleHighlight: "smartly",
        title2: "with just a mobile phone",
        sub: "Built for pharmacy owners — stock tracking, sales, credit ledger & expiry alerts, all in one app in your pocket.",
        downloadBtn: "Download App",
        tutorialBtn: "Tutorials",
        stats: [
            { value: "1,000+", label: "Active Users" },
            { value: "500+",   label: "Trusted Pharmacies" },
            { value: "4.9/5",  label: "Google Rating" },
        ],
    },
};

export default function LandingHero() {
    const { lang } = useLanguage();
    const t = T[lang];

    return (
        <section className="relative pt-28 pb-20 lg:pt-36 lg:pb-28 bg-white overflow-hidden">
            <div
                className="absolute inset-0 opacity-[0.03] pointer-events-none"
                style={{
                    backgroundImage: "linear-gradient(#2E8B57 1px, transparent 1px), linear-gradient(90deg, #2E8B57 1px, transparent 1px)",
                    backgroundSize: "60px 60px",
                }}
            />
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-medidesh-teal-500/5 rounded blur-[120px] pointer-events-none" />

            <svg className="absolute left-0 top-1/2 -translate-y-1/2 w-72 h-72 opacity-[0.07] pointer-events-none" viewBox="0 0 300 300" fill="none" aria-hidden="true">
                <path d="M60,130 C40,80 80,20 140,30 C200,40 240,90 230,150 C220,210 170,260 110,250 C50,240 20,200 30,160 C35,145 50,140 60,130 Z" fill="#2E8B57" />
                <circle cx="200" cy="80" r="18" fill="#2E8B57" opacity="0.5" />
                <circle cx="60" cy="220" r="10" fill="#2E8B57" opacity="0.4" />
            </svg>

            <svg className="absolute right-0 bottom-0 w-80 h-80 opacity-[0.06] pointer-events-none" viewBox="0 0 300 300" fill="none" aria-hidden="true">
                <path d="M240,60 C270,100 280,160 260,200 C240,240 190,270 140,260 C90,250 60,210 70,160 C80,110 130,80 160,60 C190,40 220,30 240,60 Z" fill="#2E8B57" />
                {[0,1,2,3].map(row => [0,1,2,3].map(col => (
                    <circle key={`${row}-${col}`} cx={180+col*22} cy={180+row*22} r="2.5" fill="#2E8B57" opacity="0.6" />
                )))}
            </svg>

            <div className="container mx-auto px-6 lg:px-12 relative z-10">
                <div className="max-w-3xl mx-auto text-center">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded bg-medidesh-teal-50 border border-medidesh-teal-100 text-medidesh-teal-700 text-sm font-bold mb-8 shadow-sm">
                        <Star size={14} weight="fill" className="text-medidesh-teal-500" />
                        <span>{t.badge}</span>
                    </div>

                    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-900 mb-6 leading-[1.1] tracking-tight">
                        {t.title1}{" "}
                        <span className="relative inline-block text-medidesh-teal-500">
                            {t.titleHighlight}
                            <svg className="absolute -bottom-1 left-0 w-full" viewBox="0 0 300 12" fill="none" preserveAspectRatio="none">
                                <path d="M2 8 Q 75 2 150 8 T 298 8" stroke="#2E8B57" strokeOpacity="0.25" strokeWidth="4" fill="none" strokeLinecap="round" />
                            </svg>
                        </span>{" "}
                        {t.title2}
                    </h1>

                    <p className="text-lg lg:text-xl text-slate-500 mb-10 max-w-2xl mx-auto leading-relaxed">
                        {t.sub}
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-14">
                        <a
                            href="#download"
                            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-medidesh-teal-500 hover:bg-medidesh-teal-600 text-white px-8 py-4 rounded font-bold text-base shadow-xl shadow-medidesh-teal-500/20 transition-all duration-300 hover:-translate-y-0.5 group"
                        >
                            <GooglePlayLogoIcon weight="fill" size={20} />
                            <span>{t.downloadBtn}</span>
                            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                        </a>
                        <a
                            href="https://youtube.com/@medidesh"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white hover:bg-slate-50 text-slate-800 border border-slate-200 px-8 py-4 rounded font-bold text-base transition-all duration-300 hover:-translate-y-0.5"
                        >
                            <YoutubeLogo weight="fill" size={20} className="text-red-600" />
                            <span>{t.tutorialBtn}</span>
                        </a>
                    </div>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-10 pt-8 border-t border-slate-100">
                        {t.stats.map((stat, i) => (
                            <div key={i} className="flex items-center gap-3">
                                <CheckCircle weight="fill" size={18} className="text-medidesh-teal-500 shrink-0" />
                                <div className="text-left">
                                    <span className="font-black text-slate-900 text-base">{stat.value}</span>
                                    <span className="text-slate-500 text-sm ml-1.5">{stat.label}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
