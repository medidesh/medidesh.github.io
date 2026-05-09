"use client";

import { useState } from "react";
import { GooglePlayLogoIcon, AppleLogo } from "@phosphor-icons/react/dist/ssr";
import { useLanguage } from "@/lib/i18n";
import ComingSoonModal from "@/components/ui/ComingSoonModal";
import PhoneMockup from "../ui/PhoneMockup";
import { ArrowDoodle, SparkleLines } from "../ui/Vectors";

const T = {
    bn: {
        heading1: "আপনার ফার্মেসি পরিচালনা",
        heading2: "শুরু করুন এখনই!",
        sub: "আপনার ফার্মেসির ভবিষ্যৎ এখন একটি ডাউনলোডের দূরত্বে। আমাদের অ্যাপ ডাউনলোড করে ব্যবসা পরিচালনার নতুন অভিজ্ঞতা নিন।",
        platforms: [
            { name: "Google Play", sub: "GET IT ON", icon: GooglePlayLogoIcon, href: "https://play.google.com/store/apps/details?id=com.medidesh.pharmacy", comingSoon: null },
        ],
    },
    en: {
        heading1: "Start managing your",
        heading2: "pharmacy now!",
        sub: "Your pharmacy's future is just a download away. Get our app and experience the benefits of better business management.",
        platforms: [
            { name: "Google Play", sub: "GET IT ON", icon: GooglePlayLogoIcon, href: "https://play.google.com/store/apps/details?id=com.medidesh.pharmacy", comingSoon: null },
        ],
    },
};

export default function DownloadSection() {
    const { lang } = useLanguage();
    const t = T[lang];
    const [isComingSoonOpen, setIsComingSoonOpen] = useState(false);
    const [comingSoonPlatform, setComingSoonPlatform] = useState<"Windows" | "App Store" | null>(null);

    const handleClick = (platform: typeof t.platforms[0], e: React.MouseEvent) => {
        if (platform.comingSoon) {
            e.preventDefault();
            setComingSoonPlatform(platform.comingSoon);
            setIsComingSoonOpen(true);
        }
    };

    return (
        <section id="download" className="bg-medidesh-teal-500 relative overflow-hidden pt-16 lg:pt-24 pb-0 lg:pb-0 px-5 lg:px-10">
            <div className="container mx-auto max-w-6xl relative z-10 flex flex-col-reverse lg:flex-row items-center justify-between gap-12 lg:gap-20">
                {/* Left Side: Phone */}
                <div className="w-full lg:w-1/2 relative flex justify-center lg:justify-start pt-10 lg:pt-0">
                    <SparkleLines className="absolute -top-10 lg:-top-16 left-0 lg:left-10 w-24 h-24 text-medidesh-teal-200 -rotate-12 z-0" />
                    
                    <div className="relative z-10 rotate-[-5deg] lg:rotate-[-5deg] translate-y-12 lg:translate-y-24">
                        <PhoneMockup className="shadow-[0px_0px_50px_rgba(0,0,0,0.5)]">
                            {/* iPhone Status Bar Simulation */}
                            <div className="absolute top-0 w-full h-7 bg-transparent z-20 flex justify-between items-center px-5 pt-1">
                                <span className="text-[10px] font-medium text-slate-900">9:41</span>
                                <div className="flex gap-1 items-center">
                                    <div className="w-3 h-2.5 border border-slate-900 rounded-[2px] relative"><div className="w-0.5 h-1 bg-slate-900 absolute -right-1 top-[2px]"></div></div>
                                </div>
                            </div>
                            <img src="/assets/playstore_preview.png" alt="Medidesh App" className="w-full h-full object-cover object-top" loading="lazy" />
                        </PhoneMockup>
                    </div>
                </div>

                {/* Right Side: Content */}
                <div className="w-full lg:w-1/2 text-left relative z-20 lg:py-24">
                    <h2 className="text-4xl sm:text-5xl lg:text-[64px] font-black text-white mb-6 leading-[1.1] tracking-[-0.03em]">
                        {t.heading1} <br /> {t.heading2}
                    </h2>
                    <p className="text-white/90 text-lg mb-10 leading-relaxed max-w-xl">
                        {t.sub}
                    </p>

                    <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 relative">
                        {t.platforms.map((platform) => (
                            <a key={platform.name}
                                href={platform.href}
                                onClick={(e) => handleClick(platform, e)}
                                target={!platform.comingSoon ? "_blank" : undefined}
                                rel={!platform.comingSoon ? "noopener noreferrer" : undefined}
                                className="flex items-center gap-3 px-6 py-3 bg-black hover:bg-zinc-900 transition-colors rounded-none min-w-[170px]"
                            >
                                <platform.icon weight="fill" size={32} className="text-white" />
                                <div className="text-left text-white">
                                    <p className="text-[9px] uppercase tracking-wider font-semibold opacity-80 leading-none mb-1">{platform.sub}</p>
                                    <p className="font-medium text-base leading-none">{platform.name}</p>
                                </div>
                            </a>
                        ))}
                        
                        {/* Loopy arrow pointing to buttons */}
                        <div className="absolute -bottom-24 right-10 lg:-right-10 w-32 h-32 text-medidesh-teal-200 hidden sm:block">
                            <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full transform scale-x-[-1] -rotate-45">
                                <path d="M10 10C20 60 50 120 80 50C90 20 60 10 40 40C20 80 120 100 180 60" stroke="currentColor" strokeWidth="4" strokeLinecap="round" fill="none"/>
                                <path d="M170 50L185 58L175 70" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
                            </svg>
                        </div>
                    </div>
                </div>
            </div>

            <ComingSoonModal isOpen={isComingSoonOpen} onClose={() => setIsComingSoonOpen(false)} platform={comingSoonPlatform} />
        </section>
    );
}
