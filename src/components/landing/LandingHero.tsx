"use client";

import { useState } from "react";
import { GooglePlayLogoIcon, Star, ArrowRight, CheckCircle, Play } from "@phosphor-icons/react/dist/ssr";
import { useLanguage } from "@/lib/i18n";
import { motion } from "framer-motion";
import BangladeshMap from "./BangladeshMap";
import SectionBadge from "../ui/SectionBadge";
import VideoModal from "../ui/VideoModal";

const T = {
    bn: {
        badge: "মেডিদেশ — চিরতরে বিনামূল্যে",
        title1: "আপনার পকেটে",
        titleHighlight: "স্মার্ট ফার্মেসি",
        title2: "ম্যানেজমেন্ট",
        sub: "অত্যাধুনিক প্রযুক্তিতে আপনার ফার্মেসি ব্যবসার সম্পূর্ণ নিয়ন্ত্রণ নিন। স্টকের হিসাব, ডিজিটাল বাকি খাতা ও সতর্কতা—সবকিছু এখন একটি অ্যাপে, সম্পূর্ণ বিনামূল্যে।",
        downloadBtn: "অ্যাপ ডাউনলোড",
        tutorialBtn: "এক নজরে মেডিদেশ",
        stats: [
            { value: "১,০০০+", label: "সক্রিয় ব্যবহারকারী" },
            { value: "৫০০+",   label: "বিশ্বস্ত ফার্মেসি" },
        ],
    },
    en: {
        badge: "Medidesh — Forever Free",
        title1: "The Ultimate",
        titleHighlight: "Pharmacy Ecosystem",
        title2: "In Your Pocket",
        sub: "Empower your pharmacy business with seamless stock tracking, intelligent sales analytics, and automated expiry alerts—all from your mobile phone. Premium features, absolutely free.",
        downloadBtn: "Download App",
        tutorialBtn: "Medidesh at a Glance",
        stats: [
            { value: "1,000+", label: "Active Users" },
            { value: "500+",   label: "Trusted Pharmacies" },
        ],
    },
};

export default function LandingHero() {
    const { lang } = useLanguage();
    const t = T[lang];
    const [isVideoOpen, setIsVideoOpen] = useState(false);

    return (
        <section id="hero" className="relative pt-28 pb-20 lg:pt-40 lg:pb-36 bg-white overflow-hidden text-center">
            {/* Background Grid & Map */}
            <div
                className="absolute inset-0 opacity-[0.03] pointer-events-none"
                style={{
                    backgroundImage: "linear-gradient(#2E8B57 1px, transparent 1px), linear-gradient(90deg, #2E8B57 1px, transparent 1px)",
                    backgroundSize: "60px 60px",
                }}
            />
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-medidesh-teal-500/5 rounded blur-[120px] pointer-events-none" />

            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] lg:w-[900px] lg:h-[900px] opacity-[0.10] pointer-events-none z-0">
                <BangladeshMap className="w-full h-full object-contain" />
            </div>

            <div className="container mx-auto px-6 lg:px-12 relative z-10">
                <div className="max-w-4xl mx-auto flex flex-col items-center">
                    
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <SectionBadge icon={Star} text={t.badge} />
                    </motion.div>
                    
                    <motion.h1 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="text-4xl lg:text-7xl font-black text-slate-900 mb-8 leading-[1.1] tracking-tight text-center"
                    >
                        {t.title1}{" "}
                        <span className="relative inline-block text-medidesh-teal-500">
                            {t.titleHighlight}
                            <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 300 12" fill="none" preserveAspectRatio="none">
                                <path d="M2 8 Q 75 2 150 8 T 298 8" stroke="#2E8B57" strokeOpacity="0.25" strokeWidth="4" fill="none" strokeLinecap="round" />
                            </svg>
                        </span>{" "}
                        {t.title2}
                    </motion.h1>

                    <motion.p 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="text-lg lg:text-xl text-slate-500 mb-12 max-w-2xl mx-auto leading-relaxed font-hind-siliguri font-medium"
                    >
                        {t.sub}
                    </motion.p>

                    <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-20 w-full sm:w-auto"
                    >
                        <a
                            href="#download"
                            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-medidesh-teal-500 hover:bg-medidesh-teal-600 text-white px-10 py-4 rounded-lg font-bold text-base shadow-xl shadow-medidesh-teal-500/20 transition-all duration-300 hover:-translate-y-0.5 group"
                        >
                            <GooglePlayLogoIcon weight="fill" size={20} />
                            <span>{t.downloadBtn}</span>
                            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                        </a>
                        <button
                            onClick={() => setIsVideoOpen(true)}
                            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-white hover:bg-slate-50 text-slate-800 border-2 border-slate-200 px-10 py-4 rounded-lg font-bold text-base transition-all duration-300 hover:-translate-y-0.5"
                        >
                            <div className="w-8 h-8 rounded-full bg-red-600 flex items-center justify-center text-white">
                                <Play weight="fill" size={14} />
                            </div>
                            <span>{t.tutorialBtn}</span>
                        </button>
                    </motion.div>

                    <motion.div 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.5 }}
                        className="flex flex-wrap items-center justify-center gap-6 sm:gap-12 pt-10 border-t border-slate-100 w-full max-w-2xl"
                    >
                        {t.stats.map((stat, i) => (
                            <div key={i} className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-lg bg-medidesh-teal-50 flex items-center justify-center text-medidesh-teal-600">
                                    <CheckCircle weight="fill" size={22} />
                                </div>
                                <div className="text-left">
                                    <div className="font-black text-slate-900 text-xl leading-none">{stat.value}</div>
                                    <div className="text-slate-500 text-xs mt-1 font-bold uppercase tracking-wider">{stat.label}</div>
                                </div>
                            </div>
                        ))}
                    </motion.div>
                </div>
            </div>

            {/* Cinematic Video Modal */}
            <VideoModal 
                isOpen={isVideoOpen} 
                onClose={() => setIsVideoOpen(false)} 
                videoUrl="https://www.youtube.com/embed/J0ukP78ItCc" 
            />
        </section>
    );
}
