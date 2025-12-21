"use client";

import { PharmacyData } from "@/types/pharmacy";
import { PhoneCall, MapPin, ShieldCheck, Clock, User, Moped, CheckCircle, PlusCircle, Prescription } from "@phosphor-icons/react/dist/ssr";
import { motion } from "framer-motion";

interface HeroSectionProps {
    pharmacy: PharmacyData;
}

export default function HeroSection({ pharmacy }: HeroSectionProps) {
    const isOpen = true;

    return (
        <section className="relative pt-24 pb-16 lg:pt-32 lg:pb-20 overflow-hidden min-h-[70vh] flex items-center bg-slate-900">
            {/* 1. Dynamic Background Image with Alpha/Overlay */}
            <div className="absolute inset-0 z-0">
                {pharmacy.heroImage ? (
                    <>
                        <img
                            src={pharmacy.heroImage}
                            alt={pharmacy.bnName}
                            className="w-full h-full object-cover opacity-30 mix-blend-luminosity scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-slate-900"></div>
                        <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-transparent to-slate-900"></div>
                    </>
                ) : (
                    <div className="absolute inset-0 bg-slate-900"></div>
                )}

                {/* Dotted Pattern Overlay */}
                <div className="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.05)_1px,transparent_1px)] [background-size:32px_32px] opacity-40"></div>
            </div>

            {/* Floating Medical Shapes */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
                <div className="absolute top-[15%] right-[10%] text-pharma-green-500/20 animate-float opacity-60">
                    <PlusCircle size={100} weight="thin" />
                </div>
                <div className="absolute bottom-[10%] left-[5%] text-blue-500/20 animate-float opacity-60" style={{ animationDelay: '1s' }}>
                    <Prescription size={80} weight="thin" />
                </div>
            </div>

            <div className="container mx-auto px-4 lg:px-8 relative z-10">
                <div className="max-w-6xl mx-auto">
                    <div className="grid lg:grid-cols-12 gap-12 items-center">

                        {/* Left: Text Content */}
                        <div className="lg:col-span-12 text-center max-w-4xl mx-auto">
                            <motion.div
                                initial={{ y: -20, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                className="inline-flex items-center gap-3 bg-white/5 backdrop-blur-xl border border-white/10 px-5 py-1.5 rounded-full mb-6"
                            >
                                <ShieldCheck size={18} weight="fill" className="text-pharma-green-400" />
                                <span className="text-[10px] font-black tracking-[0.3em] uppercase text-white/70">
                                    Certified Pharmacy - Reg #{pharmacy.licenseNo || "XYZ-2024"}
                                </span>
                            </motion.div>

                            <motion.h1
                                initial={{ scale: 0.9, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1 }}
                                transition={{ delay: 0.2 }}
                                className="text-4xl lg:text-7xl font-black font-heading text-white mb-4 leading-[1.1] tracking-tighter"
                            >
                                {pharmacy.bnName}
                            </motion.h1>

                            <motion.p
                                initial={{ y: 20, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ delay: 0.4 }}
                                className="text-lg lg:text-xl text-slate-400 font-medium max-w-2xl mx-auto mb-10 leading-relaxed"
                            >
                                {pharmacy.tagline} | আমরা আধুনিক প্রযুক্তি ও সেবার মাধ্যমে আপনার সুস্বাস্থ্য নিশ্চিত করি।
                            </motion.p>

                            {/* Unified Info Dashboard */}
                            <motion.div
                                initial={{ y: 40, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ delay: 0.6 }}
                                className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10"
                            >
                                <div className="bg-white/5 backdrop-blur-2xl border border-white/10 p-6 rounded-[2rem] shadow-2xl hover:bg-white/[0.08] transition-all group overflow-hidden relative text-center flex flex-col items-center">
                                    <div className="absolute top-0 right-0 w-24 h-24 bg-blue-500/10 rounded-full blur-2xl -mr-10 -mt-10"></div>
                                    <div className="flex items-center justify-center gap-4 mb-4">
                                        <div className="w-10 h-10 rounded-xl bg-blue-500/10 flex items-center justify-center text-blue-400">
                                            <Clock size={20} weight="duotone" />
                                        </div>
                                        <span className={`px-2 py-0.5 rounded-full text-[9px] font-black uppercase tracking-widest ${isOpen ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/20' : 'bg-red-500/20 text-red-400 border border-red-500/20'}`}>
                                            {isOpen ? 'Open Now' : 'Closed'}
                                        </span>
                                    </div>
                                    <h3 className="font-black text-white text-lg mb-1">সেবার সময়</h3>
                                    <p className="text-xs text-slate-400 font-bold uppercase tracking-widest">{pharmacy.openTime} - {pharmacy.closeTime}</p>
                                </div>

                                <div className="bg-white/5 backdrop-blur-2xl border border-white/10 p-6 rounded-[2rem] shadow-2xl hover:bg-white/[0.08] transition-all group overflow-hidden relative text-center flex flex-col items-center">
                                    <div className="absolute top-0 right-0 w-24 h-24 bg-purple-500/10 rounded-full blur-2xl -mr-10 -mt-10"></div>
                                    <div className="flex items-center justify-center gap-4 mb-4">
                                        <div className="w-10 h-10 rounded-xl bg-purple-500/10 flex items-center justify-center text-purple-400">
                                            <User size={20} weight="duotone" />
                                        </div>
                                        <CheckCircle size={16} weight="fill" className="text-purple-400" />
                                    </div>
                                    <h3 className="font-black text-white text-lg mb-1">বিশেষজ্ঞ পরামর্শ</h3>
                                    <p className="text-xs text-slate-400 font-bold uppercase tracking-widest">অন ডিউটি ফার্মাসিস্ট</p>
                                </div>

                                <div className="bg-white/5 backdrop-blur-2xl border border-white/10 p-6 rounded-[2rem] shadow-2xl hover:bg-white/[0.08] transition-all group overflow-hidden relative text-center flex flex-col items-center">
                                    <div className="absolute top-0 right-0 w-24 h-24 bg-orange-500/10 rounded-full blur-2xl -mr-10 -mt-10"></div>
                                    <div className="flex items-center justify-center gap-4 mb-4">
                                        <div className="w-10 h-10 rounded-xl bg-orange-500/10 flex items-center justify-center text-orange-400">
                                            <Moped size={20} weight="duotone" />
                                        </div>
                                        <span className="text-[9px] font-black uppercase text-orange-400 tracking-[0.2em]">Priority</span>
                                    </div>
                                    <h3 className="font-black text-white text-lg mb-1">হোম ডেলিভারি</h3>
                                    <p className="text-xs text-slate-400 font-bold uppercase tracking-widest">খুব দ্রুততম সময়ে</p>
                                </div>
                            </motion.div>

                            {/* Action Row */}
                            <motion.div
                                initial={{ y: 20, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ delay: 0.8 }}
                                className="flex flex-col sm:flex-row items-center justify-center gap-8"
                            >
                                <a
                                    href={`tel:${pharmacy.phone}`}
                                    className="w-full sm:w-auto bg-pharma-green-600 text-white px-10 py-4 rounded-2xl font-black text-xl shadow-[0_15px_30px_-10px_rgba(0,155,134,0.4)] flex items-center justify-center gap-3 transition-all hover:-translate-y-1 hover:bg-pharma-green-500 active:scale-[0.98]"
                                >
                                    <PhoneCall size={24} weight="fill" className="animate-pulse" />
                                    অর্ডার করতে কল দিন
                                </a>

                                <div className="flex items-center gap-4 text-left group cursor-pointer">
                                    <div className="w-12 h-12 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center text-red-500 shadow-sm transition-all group-hover:rotate-12 group-hover:bg-white/10">
                                        <MapPin size={24} weight="fill" />
                                    </div>
                                    <div>
                                        <p className="text-[10px] font-black text-red-500 uppercase tracking-[0.3em] leading-none mb-1">Location</p>
                                        <p className="text-base font-bold text-white leading-tight group-hover:text-pharma-green-400 transition-colors">{pharmacy.address}</p>
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
