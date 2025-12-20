"use client";

import { PharmacyData } from "@/types/pharmacy";
import { Clock, MapPin, PhoneCall, CheckCircle } from "@phosphor-icons/react/dist/ssr";

interface HeroSectionProps {
    pharmacy: PharmacyData;
}

export default function HeroSection({ pharmacy }: HeroSectionProps) {
    // Basic Open/Status Logic (Mocked for now, can be real-time later)
    const isOpen = true; // Defaulting to true for demo

    return (
        <section className="bg-gradient-to-b from-slate-50 to-white pt-24 pb-12 lg:pt-32 lg:pb-20 overflow-hidden relative">
            <div className="absolute top-[-10%] right-[-5%] w-[40%] h-[40%] bg-pharma-green-100 rounded-full blur-3xl opacity-30"></div>

            <div className="container mx-auto px-4 lg:px-8 relative z-10">
                <div className="flex flex-col items-center text-center max-w-4xl mx-auto">

                    {/* Open Status Badge */}
                    <div className="mb-6 inline-flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm border border-slate-100">
                        <span className={`w-3 h-3 rounded-full ${isOpen ? 'bg-green-500 animate-pulse' : 'bg-red-500'}`}></span>
                        <span className={`font-bold text-sm ${isOpen ? 'text-green-700' : 'text-red-700'}`}>
                            {isOpen ? "এখন খোলা আছে" : "এখন বন্ধ"}
                        </span>
                        {pharmacy.openTime && (
                            <span className="text-slate-400 text-sm pl-2 border-l border-slate-200">
                                {pharmacy.openTime} - {pharmacy.closeTime}
                            </span>
                        )}
                    </div>

                    <h1 className="text-4xl lg:text-6xl font-bold font-heading text-slate-900 mb-4 leading-tight">
                        {pharmacy.bnName}
                    </h1>

                    <p className="text-xl text-slate-600 mb-8 max-w-2xl">
                        {pharmacy.tagline}
                    </p>

                    {/* Location & Update Info */}
                    <div className="flex flex-wrap items-center justify-center gap-4 text-slate-500 mb-8 font-medium">
                        <span className="flex items-center gap-1 bg-slate-100 px-3 py-1 rounded-lg">
                            <MapPin weight="fill" className="text-slate-400" />
                            {pharmacy.address}
                        </span>
                        {pharmacy.landmark && (
                            <span className="flex items-center gap-1 bg-amber-50 text-amber-800 px-3 py-1 rounded-lg border border-amber-100">
                                📍 {pharmacy.landmark}
                            </span>
                        )}
                        {pharmacy.lastUpdate && (
                            <span className="flex items-center gap-1 bg-blue-50 text-blue-700 px-3 py-1 rounded-lg border border-blue-100 text-sm">
                                <Clock weight="fill" />
                                আপডেট: {pharmacy.lastUpdate}
                            </span>
                        )}
                    </div>

                    <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
                        <a
                            href={`tel:${pharmacy.phone}`}
                            className="bg-pharma-green-600 hover:bg-pharma-green-700 text-white px-8 py-4 rounded-xl font-bold text-lg shadow-lg shadow-pharma-green-600/30 flex items-center justify-center gap-2 transition-all hover:-translate-y-1"
                        >
                            <PhoneCall size={24} weight="bold" />
                            অর্ডার করতে কল করুন
                        </a>
                        <a
                            href="#search"
                            className="bg-white hover:bg-slate-50 text-slate-700 border border-slate-200 px-8 py-4 rounded-xl font-bold text-lg flex items-center justify-center gap-2 transition-all hover:-translate-y-1"
                        >
                            <CheckCircle size={24} weight="bold" className="text-pharma-green-600" />
                            ঔষধ খুঁজুন
                        </a>
                    </div>

                    <p className="mt-4 text-sm text-slate-400">
                        * ঘরে বসেই ঔষধ অর্ডার ও বুকিং করতে পারবেন।
                    </p>
                </div>
            </div>
        </section>
    );
}
