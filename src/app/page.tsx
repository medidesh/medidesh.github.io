"use client";

import Countdown from "@/components/Countdown";
import { ArrowRight } from "@phosphor-icons/react/dist/ssr";
import Link from "next/link";
import { motion } from "framer-motion";

export default function CountdownPage() {
    return (
        <main className="h-screen bg-[#050810] flex flex-col items-center justify-center p-4 lg:p-8 relative overflow-hidden">
            {/* Background Image with Overlay */}
            <div className="absolute inset-0 z-0">
                <img
                    src="/assets/bg/mother_language_day.png"
                    alt="International Mother Language Day background"
                    className="w-full h-full object-cover opacity-40 scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#050810] via-[#050810]/50 to-transparent"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-[#050810] via-transparent to-[#050810]"></div>
            </div>

            <div className="z-10 text-center max-w-4xl mx-auto flex flex-col items-center flex-1 justify-center">
                <motion.div
                    initial={{ y: -20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    className="inline-flex items-center px-5 py-1.5 rounded-full bg-pharma-green-600/10 border border-pharma-green-600/30 text-pharma-green-500 text-[10px] font-black uppercase mb-6 shadow-[0_0_20px_rgba(0,155,134,0.1)]"
                >
                    <span className="relative flex h-2 w-2 mr-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-pharma-green-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-pharma-green-600"></span>
                    </span>
                    ২১শে ফেব্রুয়ারি, ২০২৬ - অমর একুশে আমাদের অনুপ্রেরণা
                </motion.div>

                <motion.h1
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 0.2 }}
                    className="text-4xl sm:text-6xl lg:text-7xl font-black text-white mb-4 leading-[1.1] tracking-tighter font-heading"
                >
                    একুশের চেতনায় <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-b from-white to-gray-500">
                        স্মার্ট সেবা সবার তরে
                    </span>
                </motion.h1>

                <motion.p
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.4 }}
                    className="text-gray-400 text-base sm:text-lg mb-8 max-w-2xl mx-auto leading-relaxed font-medium"
                >
                    আন্তর্জাতিক মাতৃভাষা দিবসে আমরা শুরু করছি আমাদের মহৎ যাত্রা।
                    ফার্মেসি ম্যানেজমেন্ট আর স্বাস্থ্যসেবায় আসছে এক বৈপ্লবিক আধুনিকায়ন।
                </motion.p>

                <motion.div
                    initial={{ y: 40, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.6 }}
                >
                    <Countdown />
                </motion.div>

                <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4 text-left max-w-3xl mx-auto hidden sm:grid">
                    <motion.div
                        whileHover={{ y: -5 }}
                        className="bg-white/[0.02] backdrop-blur-md p-5 rounded-[1.5rem] border border-white/5"
                    >
                        <h3 className="text-pharma-green-500 font-black uppercase text-[10px] mb-2 font-orbitron">MISSION</h3>
                        <p className="text-gray-400 text-sm leading-relaxed">ডিজিটাল ও স্মার্ট বাংলাদেশ বিনির্মাণে প্রতিটি ফার্মেসিকে আধুনিক ও প্রযুক্তি-বান্ধব করা আমাদের প্রধান লক্ষ্য।</p>
                    </motion.div>
                    <motion.div
                        whileHover={{ y: -5 }}
                        className="bg-white/[0.02] backdrop-blur-md p-5 rounded-[1.5rem] border border-white/5"
                    >
                        <h3 className="text-pharma-green-500 font-black uppercase text-[10px] mb-2 font-orbitron">HISTORIC</h3>
                        <p className="text-gray-400 text-sm leading-relaxed">শহীদের রক্তে কেনা একুশে ফেব্রুয়ারিতেই আমরা উন্মোচন করবো মেডিদেশ-এর পূর্ণাঙ্গ প্ল্যাটফর্ম।</p>
                    </motion.div>
                </div>

                <div className="mt-8 opacity-20 hover:opacity-100 transition-all duration-700">
                    <Link href="/private" className="inline-flex items-center gap-2 text-gray-500 text-[10px] font-bold uppercase tracking-widest hover:text-white group">
                        Access Developer Preview
                        <ArrowRight className="group-hover:translate-x-1 transition-transform" />
                    </Link>
                </div>
            </div>

            {/* Bottom info */}
            <div className="absolute bottom-6 left-6 text-gray-700 text-[9px] font-black uppercase font-orbitron">
                Inspired by Martyrs
            </div>
            <div className="absolute bottom-6 right-6 text-gray-700 text-[9px] font-black uppercase font-orbitron">
                © 2026 Medidesh
            </div>
        </main>
    );
}
