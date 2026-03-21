"use client";

import { useState } from "react";
import { GooglePlayLogoIcon, Monitor, ArrowRight, AppleLogo } from "@phosphor-icons/react/dist/ssr";
import { useLanguage } from "@/lib/i18n";
import ComingSoonModal from "@/components/ui/ComingSoonModal";

const T = {
    bn: {
        badge: "ডাউনলোড",
        heading1: "আধুনিক ফার্মেসি",
        heading2: "ম্যানেজমেন্ট",
        sub: "ফোন হোক বা কম্পিউটার, মেডিদেশ সফটওয়্যার আছে সবখানে।",
        googlePlay: "Google Play",
        windowsPC: "Windows",
        appStore: "App Store",
    },
    en: {
        badge: "Download",
        heading1: "Modern Pharmacy",
        heading2: "Management",
        sub: "Phone or computer, Medidesh software is everywhere.",
        googlePlay: "Google Play",
        windowsPC: "Windows",
        appStore: "App Store",
    },
};

export default function DownloadSection() {
    const { lang } = useLanguage();
    const t = T[lang];
    const [isComingSoonOpen, setIsComingSoonOpen] = useState(false);
    const [comingSoonPlatform, setComingSoonPlatform] = useState<"Windows" | "App Store" | null>(null);

    const handleWindowsClick = (e: React.MouseEvent) => {
        e.preventDefault();
        setComingSoonPlatform("Windows");
        setIsComingSoonOpen(true);
    };

    const handleAppStoreClick = (e: React.MouseEvent) => {
        e.preventDefault();
        setComingSoonPlatform("App Store");
        setIsComingSoonOpen(true);
    };

    return (
        <section id="download" className="py-20 lg:py-28 relative overflow-hidden bg-slate-900">
            {/* Dot grid */}
            <div className="absolute inset-0 opacity-[0.07] pointer-events-none"
                style={{ backgroundImage: "radial-gradient(circle, #2E8B57 1.5px, transparent 1.5px)", backgroundSize: "32px 32px" }} />

            {/* Teal glow blob — top left */}
            <div className="absolute -top-32 -left-32 w-96 h-96 bg-medidesh-teal-500/20 rounded blur-[100px] pointer-events-none" />
            {/* Teal glow blob — bottom right */}
            <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-medidesh-teal-600/15 rounded blur-[100px] pointer-events-none" />

            {/* Organic blob outline */}
            <svg className="absolute right-0 top-0 w-80 h-80 opacity-[0.06] pointer-events-none" viewBox="0 0 320 320" fill="none" aria-hidden="true">
                <path d="M160,20 C220,5 300,60 310,140 C320,220 265,290 185,300 C105,310 30,260 20,180 C10,100 60,30 110,18 C130,12 140,23 160,20 Z" stroke="#2E8B57" strokeWidth="2" />
            </svg>

            {/* Ring decoration */}
            <svg className="absolute -left-16 top-1/2 -translate-y-1/2 w-64 h-64 opacity-[0.07] pointer-events-none hidden lg:block" viewBox="0 0 260 260" fill="none" aria-hidden="true">
                <circle cx="130" cy="130" r="120" stroke="#2E8B57" strokeWidth="1.5" strokeDasharray="8 5" />
                <circle cx="130" cy="130" r="90" stroke="#2E8B57" strokeWidth="1" strokeDasharray="6 4" />
            </svg>

            {/* Cross */}
            <svg className="absolute top-12 right-1/4 w-8 h-8 opacity-[0.12] pointer-events-none hidden lg:block" viewBox="0 0 40 40" fill="none" aria-hidden="true">
                <rect x="15" y="2" width="10" height="36" rx="3" fill="#2E8B57" />
                <rect x="2" y="15" width="36" height="10" rx="3" fill="#2E8B57" />
            </svg>

            {/* Phone silhouette */}
            <svg className="absolute right-10 top-1/2 -translate-y-1/2 w-40 h-56 opacity-[0.06] pointer-events-none hidden xl:block" viewBox="0 0 120 200" fill="none" aria-hidden="true">
                <rect x="10" y="4" width="100" height="192" rx="16" stroke="#2E8B57" strokeWidth="4" />
                <rect x="20" y="14" width="80" height="152" rx="8" fill="#2E8B57" opacity="0.3" />
                <circle cx="60" cy="182" r="7" stroke="#2E8B57" strokeWidth="3" />
            </svg>

            <div className="container mx-auto px-6 lg:px-12 relative z-10">
                <div className="max-w-2xl mx-auto text-center">
                    <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded bg-medidesh-teal-500/20 border border-medidesh-teal-500/30 text-medidesh-teal-300 text-xs font-semibold uppercase tracking-wider mb-6">
                        {t.badge}
                    </div>
                    <h2 className="text-3xl lg:text-4xl font-black text-white mb-5 leading-tight tracking-tight">
                        {t.heading1}{" "}<span className="text-medidesh-teal-400">{t.heading2}</span>
                    </h2>
                    <p className="text-lg text-slate-400 max-w-xl mx-auto leading-relaxed mb-12">{t.sub}</p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <a
                            href="https://play.google.com/store/apps/details?id=com.medidesh.pharmacy"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-medidesh-teal-500 hover:bg-medidesh-teal-400 text-white px-10 py-4 rounded font-bold text-base transition-all hover:-translate-y-0.5 shadow-lg shadow-medidesh-teal-500/30 group"
                        >
                            <GooglePlayLogoIcon weight="fill" size={22} />
                            <span>{t.googlePlay}</span>
                            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                        </a>
                        <button
                            onClick={handleAppStoreClick}
                            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-white/5 hover:bg-white/10 text-white border border-white/15 hover:border-white/30 px-10 py-4 rounded font-bold text-base transition-all hover:-translate-y-0.5 group cursor-pointer"
                        >
                            <AppleLogo weight="fill" size={22} className="text-slate-300" />
                            <span>{t.appStore}</span>
                        </button>
                        <button
                            onClick={handleWindowsClick}
                            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-white/5 hover:bg-white/10 text-white border border-white/15 hover:border-white/30 px-10 py-4 rounded font-bold text-base transition-all hover:-translate-y-0.5 group cursor-pointer"
                        >
                            <Monitor weight="duotone" size={22} className="text-medidesh-teal-400" />
                            <span>{t.windowsPC}</span>
                        </button>
                    </div>
                </div>
            </div>

            <ComingSoonModal 
                isOpen={isComingSoonOpen} 
                onClose={() => setIsComingSoonOpen(false)} 
                platform={comingSoonPlatform} 
            />
        </section>
    );
}
