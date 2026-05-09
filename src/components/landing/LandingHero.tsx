"use client";

import { useState } from "react";
import { GooglePlayLogoIcon, Star, ArrowRight, Play, Wallet, ChartLineUp, CurrencyCircleDollar, AppleLogo, WindowsLogo } from "@phosphor-icons/react/dist/ssr";
import { useLanguage } from "@/lib/i18n";
import { motion } from "framer-motion";
import BangladeshMap from "./BangladeshMap";
import VideoModal from "../ui/VideoModal";
import { ArrowDoodle, SparkleLines, DotGrid } from "../ui/Vectors";
import PhoneMockup from "../ui/PhoneMockup";

const T = {
    bn: {
        title1: "আপনার পকেটে",
        titleHighlight: "স্মার্ট ফার্মেসি",
        title2: "ম্যানেজমেন্ট",
        sub: "অত্যাধুনিক প্রযুক্তিতে আপনার ফার্মেসি ব্যবসার সম্পূর্ণ নিয়ন্ত্রণ নিন। স্টকের হিসাব, ডিজিটাল বাকি খাতা ও সতর্কতা—সবকিছু এখন একটি অ্যাপে, সম্পূর্ণ বিনামূল্যে।",
        downloadBtn: "অ্যাপ ডাউনলোড",
        tutorialBtn: "এক নজরে মেডিদেশ",
        floating: {
            pill: "৳৫,০০০ বিক্রি",
            spendTitle: "মোট ইনভেন্টরি মূল্য",
            spendValue: "৳৪২,০৪০",
            compTitle: "মাসিক তুলনা",
            thisMonth: "এই মাস",
            lastMonth: "গত মাস",
        }
    },
    en: {
        title1: "The Ultimate",
        titleHighlight: "Pharmacy Ecosystem",
        title2: "In Your Pocket",
        sub: "Empower your pharmacy business with seamless stock tracking, intelligent sales analytics, and automated expiry alerts—all from your mobile phone. Premium features, absolutely free.",
        downloadBtn: "Download App",
        tutorialBtn: "Watch A Demo",
        floating: {
            pill: "৳5,000 collected",
            spendTitle: "Total Inventory Value",
            spendValue: "৳42,040",
            compTitle: "Comparison (Month)",
            thisMonth: "This month",
            lastMonth: "Last month",
        }
    },
};

export default function LandingHero() {
    const { lang } = useLanguage();
    const t = T[lang];
    const [isVideoOpen, setIsVideoOpen] = useState(false);
    const [isComingSoonOpen, setIsComingSoonOpen] = useState(false);
    const [comingSoonPlatform, setComingSoonPlatform] = useState<"Windows" | "App Store" | null>(null);

    const handleComingSoonClick = (platform: "Windows" | "App Store", e: React.MouseEvent) => {
        e.preventDefault();
        setComingSoonPlatform(platform);
        setIsComingSoonOpen(true);
    };

    return (
        <section id="hero" className="relative pt-24 pb-0 lg:pt-32 lg:pb-0 bg-[#fafafa] overflow-hidden text-center border-b border-slate-200">
            {/* Zubaz-style hand-drawn arrows */}
            <ArrowDoodle className="absolute left-4 lg:left-24 top-24 lg:top-32 w-32 lg:w-48 text-slate-900 hidden sm:block pointer-events-none" />
            <SparkleLines className="absolute right-8 lg:right-32 top-32 lg:top-40 w-16 lg:w-20 text-slate-900 hidden sm:block pointer-events-none" />

            {/* Lime Semi-circle — positioned to cover bottom ~50% of the phone */}
            <div className="absolute left-1/2 bottom-0 -translate-x-1/2 w-[600px] h-[220px] lg:w-[900px] lg:h-[340px] bg-[#9fff40] rounded-t-full pointer-events-none z-0"></div>
            
            {/* Soft ambient glows */}
            <div className="absolute top-1/4 -left-20 w-96 h-96 bg-medidesh-teal-400/8 rounded-full blur-[100px] pointer-events-none" />
            <div className="absolute top-1/3 -right-20 w-80 h-80 bg-[#9fff40]/8 rounded-full blur-[80px] pointer-events-none" />

            <div className="container mx-auto px-5 lg:px-10 relative z-10">
                <div className="max-w-3xl mx-auto flex flex-col items-center">
                    <motion.h1
                        initial={{ opacity: 0, y: 16 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="text-3xl md:text-5xl lg:text-[64px] font-black text-slate-900 mb-6 leading-[1.08] tracking-[-0.03em]"
                    >
                        {t.title1}{" "}
                        <span className="text-medidesh-teal-500">{t.titleHighlight}</span>{" "}
                        {t.title2}
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 16 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="text-base lg:text-lg text-slate-500 mb-10 max-w-xl mx-auto leading-relaxed"
                    >
                        {t.sub}
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 16 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="flex flex-col sm:flex-row items-center justify-center gap-3 lg:gap-4 mb-16 lg:mb-20 w-full sm:w-auto"
                    >
                        {/* Primary CTA */}
                        <a href="#download"
                            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-medidesh-teal-500 hover:bg-medidesh-teal-600 text-white px-8 py-3.5 font-bold text-sm transition-all hover:-translate-y-px rounded-none shadow-lg shadow-medidesh-teal-500/20">
                            <span>{t.downloadBtn}</span>
                        </a>
                        
                        {/* Secondary CTA */}
                        <button onClick={() => setIsVideoOpen(true)}
                            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-white text-medidesh-teal-600 border-2 border-medidesh-teal-600 px-8 py-3.5 font-bold text-sm transition-all hover:-translate-y-px hover:bg-medidesh-teal-50 rounded-none">
                            <Play weight="fill" size={16} />
                            <span>{t.tutorialBtn}</span>
                        </button>
                    </motion.div>

                    {/* === Phone Mockup + Floating Elements === */}
                    <motion.div
                        initial={{ opacity: 0, y: 32 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.3 }}
                        className="relative mx-auto flex justify-center w-full max-w-5xl"
                        style={{ height: "clamp(380px, 50vw, 520px)" }}
                    >
                        {/* The Phone — sunk down so bottom ~20% is hidden by overflow */}
                        <div className="absolute left-1/2 -translate-x-1/2 top-[10%] lg:top-[12%] z-20">
                            <PhoneMockup frameColor="bg-slate-900">
                                <div className="w-full h-full relative rounded-[2.5rem] overflow-hidden">
                                    <img src="/assets/mobile_app.png" alt="Medidesh App" className="w-full h-full object-cover object-left-top" loading="eager" />
                                </div>
                            </PhoneMockup>
                        </div>

                        {/* ── Top-Left Pill ($5,000 collected) ── */}
                        <div className="absolute left-[1%] lg:left-[12%] top-[14%] lg:top-[12%] z-30 animate-float hidden sm:block" style={{ animationDelay: "0.5s" }}>
                            <div className="relative -rotate-3">
                                <div className="absolute inset-0 bg-white border-[2.5px] border-slate-900 rounded-lg translate-x-1 translate-y-1"></div>
                                <div className="relative bg-[#9fff40] border-[2.5px] border-slate-900 rounded-lg px-4 py-2.5 flex items-center gap-2">
                                    <CurrencyCircleDollar weight="fill" size={22} className="text-slate-900" />
                                    <span className="font-black text-sm text-slate-900">{t.floating.pill}</span>
                                </div>
                            </div>
                        </div>

                        {/* ── Bottom-Left Card (Total spending / Inventory) ── */}
                        <div className="absolute left-[-3%] lg:left-[3%] bottom-[8%] lg:bottom-[12%] z-30 animate-float hidden sm:block" style={{ animationDelay: "1s" }}>
                            <div className="relative w-44 lg:w-48 -rotate-3">
                                <div className="absolute inset-0 bg-white border-[2.5px] border-slate-900 rounded-xl translate-x-1.5 translate-y-1.5"></div>
                                <div className="relative bg-white border-[2.5px] border-slate-900 rounded-xl p-5 text-left">
                                    <div className="w-10 h-10 bg-slate-900 rounded-full flex items-center justify-center mb-3">
                                        <Wallet weight="fill" size={20} className="text-[#9fff40]" />
                                    </div>
                                    <p className="text-[11px] font-semibold text-slate-500 mb-0.5">{t.floating.spendTitle}</p>
                                    <p className="text-xl font-black text-slate-900">{t.floating.spendValue}</p>
                                </div>
                            </div>
                        </div>

                        {/* ── Top-Right Card (Pharmacist photo) ── */}
                        <div className="absolute right-[1%] lg:right-[10%] top-[5%] lg:top-[4%] z-30 animate-float hidden sm:block" style={{ animationDelay: "1.5s" }}>
                            <div className="relative w-32 lg:w-36 rotate-6">
                                <div className="absolute inset-0 bg-white border-[2.5px] border-slate-900 rounded-xl translate-x-1.5 translate-y-1.5"></div>
                                <div className="relative bg-white border-[2.5px] border-slate-900 rounded-xl p-1 overflow-hidden">
                                    <img src="/assets/pharmacist.png" alt="Pharmacist" className="w-full h-32 lg:h-36 object-cover rounded-lg bg-slate-100" />
                                </div>
                                {/* Action lines */}
                                <div className="absolute -top-2 -right-2">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-slate-900">
                                        <line x1="12" y1="2" x2="12" y2="8" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
                                        <line x1="18" y1="6" x2="14" y2="10" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
                                        <line x1="22" y1="12" x2="16" y2="12" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
                                    </svg>
                                </div>
                            </div>
                        </div>

                        {/* ── Bottom-Right Card (Comparison Month) ── */}
                        <div className="absolute right-[-3%] lg:right-[3%] bottom-[12%] lg:bottom-[16%] z-30 animate-float hidden sm:block" style={{ animationDelay: "2s" }}>
                            <div className="relative w-52 lg:w-56 rotate-2">
                                <div className="absolute inset-0 bg-white border-[2.5px] border-slate-900 rounded-xl translate-x-1.5 translate-y-1.5"></div>
                                <div className="relative bg-white border-[2.5px] border-slate-900 rounded-xl p-5 text-left">
                                    <p className="font-black text-sm text-slate-900 mb-4">{t.floating.compTitle}</p>
                                    <div className="space-y-3">
                                        <div className="flex items-center gap-2">
                                            <span className="text-[11px] font-bold text-slate-500 w-[60px] shrink-0">{t.floating.thisMonth}</span>
                                            <div className="flex-1 h-2.5 bg-slate-100 rounded-full overflow-hidden border border-slate-200">
                                                <div className="h-full bg-[#9fff40] rounded-full w-[70%]"></div>
                                            </div>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <span className="text-[11px] font-bold text-slate-500 w-[60px] shrink-0">{t.floating.lastMonth}</span>
                                            <div className="flex-1 h-2.5 bg-slate-100 rounded-full overflow-hidden border border-slate-200">
                                                <div className="h-full bg-slate-800 rounded-full w-[50%]"></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </motion.div>
                </div>
            </div>

            <VideoModal isOpen={isVideoOpen} onClose={() => setIsVideoOpen(false)} videoUrl="https://www.youtube.com/embed/qU-1J53j4zE" />
            
        </section>
    );
}
