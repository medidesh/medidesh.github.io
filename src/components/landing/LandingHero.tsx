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
        <section id="hero" className="relative pt-24 pb-0 lg:pt-32 lg:pb-0 bg-white overflow-hidden text-center border-b-[6px] border-slate-900">
            {/* Zubaz-style hand-drawn arrows */}
            <ArrowDoodle className="absolute left-4 lg:left-24 top-24 lg:top-32 w-32 lg:w-48 text-slate-900 hidden sm:block pointer-events-none" />
            <SparkleLines className="absolute right-8 lg:right-32 top-32 lg:top-40 w-16 lg:w-20 text-slate-900 hidden sm:block pointer-events-none" />

            {/* Giant Lime Semi-circle behind the phone */}
            <div className="absolute left-1/2 bottom-0 -translate-x-1/2 w-[800px] h-[400px] lg:w-[1200px] lg:h-[600px] bg-[#9fff40] rounded-t-full opacity-100 pointer-events-none z-0"></div>
            
            {/* Additional colorful glows */}
            <div className="absolute top-1/4 -left-20 w-96 h-96 bg-medidesh-teal-400/10 rounded-full blur-[100px] pointer-events-none" />
            <div className="absolute top-1/3 -right-20 w-80 h-80 bg-[#9fff40]/10 rounded-full blur-[80px] pointer-events-none" />

            <div className="container mx-auto px-5 lg:px-10 relative z-10">
                <div className="max-w-4xl mx-auto flex flex-col items-center">
                    <motion.h1
                        initial={{ opacity: 0, y: 16 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="text-3xl md:text-5xl lg:text-[72px] font-black text-slate-900 mb-6 leading-[1.05] tracking-[-0.04em]"
                    >
                        {t.title1}{" "}
                        <span className="text-medidesh-teal-600">{t.titleHighlight}</span>{" "}
                        {t.title2}
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 16 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="text-base lg:text-[20px] text-slate-600 mb-10 max-w-2xl mx-auto leading-relaxed font-medium"
                    >
                        {t.sub}
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 16 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="flex flex-col sm:flex-row items-center justify-center gap-4 lg:gap-6 mb-20 w-full sm:w-auto"
                    >
                        {/* Primary CTA */}
                        <a href="#download"
                            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-blue-600 hover:bg-blue-700 text-white px-10 py-4 font-black text-[15px] transition-all hover:-translate-y-1 rounded-none shadow-[4px_4px_0px_0px_rgba(15,23,42,1)]">
                            <span>{t.downloadBtn}</span>
                        </a>
                        
                        {/* Secondary CTA */}
                        <button onClick={() => setIsVideoOpen(true)}
                            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-white text-slate-900 border-2 border-slate-900 px-10 py-4 font-black text-[15px] transition-all hover:-translate-y-1 hover:bg-slate-50 rounded-none shadow-[4px_4px_0px_0px_rgba(15,23,42,1)]">
                            <Play weight="fill" size={18} />
                            <span>{t.tutorialBtn}</span>
                        </button>
                    </motion.div>

                    {/* iPhone App Mockup & Floating Elements */}
                    <motion.div
                        initial={{ opacity: 0, y: 32 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.3 }}
                        className="relative mx-auto flex justify-center w-full max-w-6xl h-[400px] lg:h-[500px]"
                    >
                        {/* The Phone - Buried 25% */}
                        <div className="absolute left-1/2 -translate-x-1/2 z-20 translate-y-[20%] lg:translate-y-[25%]">
                            <PhoneMockup frameColor="bg-slate-900">
                                <div className="w-full h-full relative rounded-[2.5rem] overflow-hidden">
                                    {/* iPhone Status Bar Simulation */}
                                    <div className="absolute top-0 w-full h-7 bg-transparent z-20 flex justify-between items-center px-5 pt-1">
                                        <span className="text-[10px] font-medium text-slate-900">9:41</span>
                                        <div className="flex gap-1 items-center">
                                            <div className="w-3 h-2.5 border border-slate-900 rounded-[2px] relative"><div className="w-0.5 h-1 bg-slate-900 absolute -right-1 top-[2px]"></div></div>
                                        </div>
                                    </div>
                                    <img src="/assets/mobile_app.png" alt="Medidesh App" className="w-full h-full object-cover object-left-top" loading="eager" />
                                </div>
                            </PhoneMockup>
                        </div>

                        {/* Top Left Pill */}
                        <div className="absolute left-[2%] lg:left-[18%] top-[5%] lg:top-[8%] z-30 animate-float scale-50 sm:scale-75 lg:scale-100 origin-right" style={{ animationDelay: "0.5s" }}>
                            <div className="relative -rotate-6">
                                <div className="absolute inset-0 bg-white border-2 border-slate-900 rounded-none translate-x-1.5 translate-y-1.5"></div>
                                <div className="relative bg-[#9fff40] border-2 border-slate-900 rounded-none px-5 py-3 flex items-center gap-3">
                                    <CurrencyCircleDollar weight="fill" size={24} className="text-slate-900" />
                                    <span className="font-black text-base text-slate-900 tracking-tight">{t.floating.pill}</span>
                                </div>
                            </div>
                        </div>

                        {/* Bottom Left Card */}
                        <div className="absolute left-[-5%] lg:left-[2%] bottom-[10%] lg:bottom-[15%] z-30 animate-float scale-50 sm:scale-75 lg:scale-100 origin-right" style={{ animationDelay: "1s" }}>
                            <div className="relative w-56 -rotate-6">
                                <div className="absolute inset-0 bg-white border-2 border-slate-900 rounded-none translate-x-2 translate-y-2"></div>
                                <div className="absolute inset-0 bg-white border-2 border-slate-900 rounded-none translate-x-4 translate-y-4"></div>
                                <div className="relative bg-white border-2 border-slate-900 rounded-none p-6 text-left">
                                    <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center mb-5">
                                        <Wallet weight="fill" size={24} className="text-[#9fff40]" />
                                    </div>
                                    <p className="text-[13px] font-bold text-slate-500 mb-1">Total spending</p>
                                    <p className="text-[28px] font-black text-slate-900 tracking-tight">$42.040</p>
                                </div>
                            </div>
                        </div>

                        {/* Top Right Card (Photo) */}
                        <div className="absolute right-[2%] lg:right-[15%] top-[2%] lg:top-[5%] z-30 animate-float scale-50 sm:scale-75 lg:scale-100 origin-left" style={{ animationDelay: "1.5s" }}>
                            <div className="relative w-44 rotate-6">
                                <div className="absolute inset-0 bg-white border-2 border-slate-900 rounded-none translate-x-2 translate-y-2"></div>
                                <div className="absolute inset-0 bg-white border-2 border-slate-900 rounded-none translate-x-4 translate-y-4"></div>
                                <div className="relative bg-white border-2 border-slate-900 rounded-none p-1 overflow-hidden">
                                    <img src="/assets/pharmacist.png" alt="Pharmacist" className="w-full h-44 object-cover rounded-none" />
                                    {/* Action lines - stylized top right */}
                                    <div className="absolute -top-1 -right-1">
                                        <div className="flex gap-1">
                                            <div className="w-1 h-4 bg-slate-900 rotate-45 transform origin-bottom"></div>
                                            <div className="w-1 h-6 bg-slate-900 rotate-45 transform origin-bottom"></div>
                                            <div className="w-1 h-4 bg-slate-900 rotate-45 transform origin-bottom"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Bottom Right Card (Comparison) */}
                        <div className="absolute right-[-8%] lg:right-[2%] bottom-[5%] lg:bottom-[10%] z-30 animate-float scale-50 sm:scale-75 lg:scale-100 origin-left" style={{ animationDelay: "2s" }}>
                            <div className="relative w-72 rotate-2">
                                <div className="absolute inset-0 bg-white border-2 border-slate-900 rounded-none translate-x-2 translate-y-2"></div>
                                <div className="absolute inset-0 bg-white border-2 border-slate-900 rounded-none translate-x-4 translate-y-4"></div>
                                <div className="relative bg-white border-2 border-slate-900 rounded-none p-6 text-left">
                                    <p className="font-black text-[18px] text-slate-900 mb-5">Comparison (Month)</p>
                                    <div className="space-y-5">
                                        <div className="flex items-center gap-4">
                                            <span className="text-[12px] font-bold text-slate-500 w-20">This month</span>
                                            <div className="flex-1 h-3.5 bg-slate-100 rounded-none overflow-hidden border border-slate-200">
                                                <div className="h-full bg-[#9fff40] w-[70%] border-r-2 border-slate-900"></div>
                                            </div>
                                        </div>
                                        <div className="flex items-center gap-4">
                                            <span className="text-[12px] font-bold text-slate-500 w-20">Last month</span>
                                            <div className="flex-1 h-3.5 bg-slate-100 rounded-none overflow-hidden border border-slate-200">
                                                <div className="h-full bg-slate-800 w-[55%]"></div>
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
