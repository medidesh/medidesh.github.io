"use client";

import { PharmacyData } from "@/types/pharmacy";
import { PhoneCall, MapPin, ShieldCheck, Clock, User, Moped, CheckCircle, PlusCircle, Prescription } from "@phosphor-icons/react/dist/ssr";

interface HeroSectionProps {
    pharmacy: PharmacyData;
}

export default function HeroSection({ pharmacy }: HeroSectionProps) {
    const isOpen = true;

    return (
        <section className="relative pt-32 pb-20 lg:pt-44 lg:pb-28 overflow-hidden min-h-[95vh] flex items-center bg-white">

            {/* 1. Advanced Animated Medical Background */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
                {/* Dotted Pattern */}
                <div className="absolute inset-0 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] [background-size:32px_32px] opacity-40"></div>

                {/* Floating Medical Shapes */}
                <div className="absolute top-[15%] right-[10%] text-pharma-green-100 animate-float opacity-60">
                    <PlusCircle size={140} weight="thin" />
                </div>
                <div className="absolute bottom-[10%] left-[5%] text-blue-100 animate-float opacity-60" style={{ animationDelay: '1s' }}>
                    <Prescription size={120} weight="thin" />
                </div>
                <div className="absolute top-[40%] left-[80%] text-emerald-50 animate-float opacity-50" style={{ animationDelay: '2s' }}>
                    <PlusCircle size={80} weight="fill" />
                </div>

                {/* Animated Dash Lines */}
                <svg className="absolute top-0 left-0 w-full h-full opacity-20" viewBox="0 0 100 100" preserveAspectRatio="none">
                    <path d="M-10,30 Q30,10 50,30 T110,30" fill="none" stroke="#009B86" strokeWidth="0.2" strokeDasharray="1,2" className="animate-pulse" />
                    <path d="M-10,70 Q30,90 50,70 T110,70" fill="none" stroke="#22c55e" strokeWidth="0.2" strokeDasharray="1,2" className="animate-pulse" style={{ animationDelay: '1.5s' }} />
                </svg>

                {/* Subtle Blobs */}
                <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-pharma-green-50/50 rounded-full blur-[120px]"></div>
                <div className="absolute bottom-[-10%] right-[-10%] w-[600px] h-[600px] bg-blue-50/50 rounded-full blur-[120px]"></div>
            </div>

            <div className="container mx-auto px-4 lg:px-8 relative z-10">

                <div className="max-w-6xl mx-auto">
                    <div className="grid lg:grid-cols-12 gap-12 items-center">

                        {/* Left: Text Content */}
                        <div className="lg:col-span-12 text-center max-w-4xl mx-auto">
                            <div className="inline-flex items-center gap-3 bg-pharma-green-50/80 backdrop-blur-md border border-pharma-green-100 px-5 py-2 rounded-full mb-8 shadow-sm">
                                <ShieldCheck size={20} weight="fill" className="text-pharma-green-600" />
                                <span className="text-xs font-black tracking-[0.2em] uppercase text-pharma-green-800">License: {pharmacy.licenseNo || "XYZ-2024"}</span>
                            </div>

                            <h1 className="text-6xl lg:text-8xl font-black font-heading text-slate-900 mb-8 leading-[1.1] tracking-tight">
                                {pharmacy.bnName}
                            </h1>
                            <p className="text-xl lg:text-2xl text-slate-500 font-medium max-w-3xl mx-auto mb-12 leading-relaxed">
                                {pharmacy.tagline} | আপনার সুস্বাস্থ্য আমাদের সর্বোচ্চ অগ্রাধিকার।
                            </p>

                            {/* Unified Info Dashboard (Injected for high informative density) */}
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                                <div className="bg-white/80 backdrop-blur-md border border-slate-100 p-6 rounded-3xl shadow-sm hover:shadow-xl transition-all group border-b-4 border-b-blue-500/10">
                                    <div className="flex items-center justify-between mb-4">
                                        <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center text-blue-600">
                                            <Clock size={20} weight="duotone" />
                                        </div>
                                        <span className={`px-2 py-0.5 rounded-full text-[10px] font-black uppercase tracking-widest ${isOpen ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
                                            {isOpen ? 'Open Now' : 'Closed'}
                                        </span>
                                    </div>
                                    <h3 className="text-left font-bold text-slate-900 mb-1">কার্যালয় সময়</h3>
                                    <p className="text-left text-sm text-slate-500 font-medium">{pharmacy.openTime} - {pharmacy.closeTime}</p>
                                </div>

                                <div className="bg-white/80 backdrop-blur-md border border-slate-100 p-6 rounded-3xl shadow-sm hover:shadow-xl transition-all group border-b-4 border-b-purple-500/10">
                                    <div className="flex items-center justify-between mb-4">
                                        <div className="w-10 h-10 rounded-xl bg-purple-50 flex items-center justify-center text-purple-600">
                                            <User size={20} weight="duotone" />
                                        </div>
                                        <CheckCircle size={14} weight="fill" className="text-purple-400" />
                                    </div>
                                    <h3 className="text-left font-bold text-slate-900 mb-1">ফার্মাসিস্ট</h3>
                                    <p className="text-left text-sm text-slate-500 font-medium">পরামর্শের জন্য অন ডিউটি</p>
                                </div>

                                <div className="bg-white/80 backdrop-blur-md border border-slate-100 p-6 rounded-3xl shadow-sm hover:shadow-xl transition-all group border-b-4 border-b-orange-500/10">
                                    <div className="flex items-center justify-between mb-4">
                                        <div className="w-10 h-10 rounded-xl bg-orange-50 flex items-center justify-center text-orange-600">
                                            <Moped size={20} weight="duotone" />
                                        </div>
                                        <span className="text-[10px] font-black uppercase text-orange-500">Fast</span>
                                    </div>
                                    <h3 className="text-left font-bold text-slate-900 mb-1">ডেলিভারি</h3>
                                    <p className="text-left text-sm text-slate-500 font-medium">১ ঘণ্টার মধ্যে সেবা নিশ্চিত</p>
                                </div>
                            </div>

                            {/* Action Row */}
                            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                                <a
                                    href={`tel:${pharmacy.phone}`}
                                    className="w-full sm:w-auto bg-slate-900 text-white px-10 py-5 rounded-2xl font-black text-xl shadow-2xl shadow-slate-200 flex items-center justify-center gap-4 transition-all hover:-translate-y-1 hover:bg-black active:scale-[0.98]"
                                >
                                    <PhoneCall size={28} weight="fill" className="animate-pulse" />
                                    ঔষধ অর্ডার করুন
                                </a>

                                <div className="flex items-center gap-4 text-left group">
                                    <div className="w-14 h-14 bg-white border border-slate-100 rounded-2xl flex items-center justify-center text-red-500 shadow-sm transition-all group-hover:rotate-12">
                                        <MapPin size={28} weight="fill" />
                                    </div>
                                    <div>
                                        <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest leading-none mb-1">Our Location</p>
                                        <p className="text-lg font-bold text-slate-700 leading-tight">{pharmacy.address}</p>
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
