"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle, ArrowRight, AppWindow, ShieldCheck } from "@phosphor-icons/react";

export default function AuthCallbackPage() {
    const [countdown, setCountdown] = useState(3);
    const [deepLink, setDeepLink] = useState("medidesh://auth/callback");

    useEffect(() => {
        // Capture hash and construct deep link
        const hash = window.location.hash;
        const targetLink = `medidesh://auth/callback${hash}`;
        setDeepLink(targetLink);

        // Countdown logic
        const timer = setInterval(() => {
            setCountdown((prev) => {
                if (prev <= 1) {
                    clearInterval(timer);
                    window.location.replace(targetLink);
                    return 0;
                }
                return prev - 1;
            });
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    return (
        <main className="min-h-screen bg-[var(--color-medidesh-bg)] flex items-center justify-center p-6 overflow-hidden">
            {/* Background Decorative Blobs */}
            <div className="fixed inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-[-10%] right-[-10%] w-[40%] h-[40%] bg-medidesh-teal-50 rounded-full blur-[120px] opacity-60 animate-pulse" />
                <div className="absolute bottom-[-10%] left-[-10%] w-[40%] h-[40%] bg-medidesh-teal-100 rounded-full blur-[120px] opacity-40" />
            </div>

            <div className="max-w-md w-full relative z-10">
                <motion.div 
                    initial={{ opacity: 0, scale: 0.9, y: 30 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    transition={{ duration: 0.6, cubicBezier: [0.16, 1, 0.3, 1] }}
                    className="bg-white/80 backdrop-blur-xl border border-white shadow-[0_32px_64px_-16px_rgba(46,139,87,0.1)] rounded-[2.5rem] p-10 md:p-14 text-center overflow-hidden relative"
                >
                    {/* Top Accent Line */}
                    <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-medidesh-teal-300 via-medidesh-teal-500 to-medidesh-teal-300" />

                    {/* Success Animation */}
                    <div className="mb-10 relative flex justify-center">
                        <motion.div
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ delay: 0.3, type: "spring", stiffness: 200, damping: 15 }}
                            className="w-28 h-28 bg-medidesh-teal-50 rounded-full flex items-center justify-center relative"
                        >
                            <CheckCircle size={64} weight="fill" className="text-medidesh-teal-500 z-10" />
                            
                            {/* Success Rings */}
                            <motion.div 
                                animate={{ scale: [1, 1.4], opacity: [0.5, 0] }}
                                transition={{ duration: 1.5, repeat: Infinity }}
                                className="absolute inset-0 rounded-full border-2 border-medidesh-teal-500/30"
                            />
                            <motion.div 
                                animate={{ scale: [1, 1.8], opacity: [0.3, 0] }}
                                transition={{ duration: 1.5, repeat: Infinity, delay: 0.4 }}
                                className="absolute inset-0 rounded-full border-2 border-medidesh-teal-500/10"
                            />
                        </motion.div>
                    </div>

                    {/* Content */}
                    <div className="space-y-4 mb-10">
                        <h1 className="text-3xl md:text-4xl font-bold text-slate-900 font-sans tracking-tight">
                            লগইন সফল হয়েছে!
                        </h1>
                        <p className="text-slate-500 text-lg leading-relaxed font-medium font-sans">
                            আপনাকে সরাসরি <span className="text-medidesh-teal-600 font-bold">মেডিদেশ অ্যাপে</span> ফিরিয়ে নেওয়া হচ্ছে।
                        </p>
                    </div>

                    {/* Redirect Countdown Indicator */}
                    <div className="mb-12 flex flex-col items-center">
                        <div className="relative w-20 h-20 flex items-center justify-center mb-4">
                            <svg className="w-full h-full -rotate-90">
                                <circle
                                    cx="40" cy="40" r="36"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="4"
                                    className="text-slate-100"
                                />
                                <motion.circle
                                    cx="40" cy="40" r="36"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="4"
                                    strokeDasharray="226.2"
                                    initial={{ strokeDashoffset: 0 }}
                                    animate={{ strokeDashoffset: (226.2 * countdown) / 3 }}
                                    className="text-medidesh-teal-500"
                                />
                            </svg>
                            <span className="absolute text-2xl font-black text-slate-700">{countdown}</span>
                        </div>
                        <span className="text-[11px] font-black uppercase tracking-[0.3em] text-slate-400 font-sans">
                            সেকেন্ডের মধ্যে রিডাইরেক্ট
                        </span>
                    </div>

                    {/* Action Button */}
                    <div className="pt-8 border-t border-slate-100">
                        <a 
                            href={deepLink}
                            className="w-full inline-flex items-center justify-center gap-3 px-8 py-5 bg-medidesh-teal-600 text-white font-bold rounded-2xl hover:bg-medidesh-teal-700 transition-all shadow-[0_12px_24px_-8px_rgba(46,139,87,0.4)] hover:-translate-y-1 active:scale-[0.98] group"
                        >
                            <AppWindow size={24} weight="fill" />
                            <span className="font-sans text-lg">সরাসরি অ্যাপ ওপেন করুন</span>
                            <ArrowRight size={20} weight="bold" className="group-hover:translate-x-1 transition-transform" />
                        </a>
                        <p className="mt-6 text-sm text-slate-400 font-sans">
                            স্বয়ংক্রিয়ভাবে রিডাইরেক্ট না হলে উপরের বাটনে ক্লিক করুন
                        </p>
                    </div>
                </motion.div>

                {/* Secure Badge */}
                <motion.div 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1 }}
                    className="mt-10 flex items-center justify-center gap-3 text-slate-400"
                >
                    <ShieldCheck size={20} weight="fill" />
                    <span className="text-[10px] font-black uppercase tracking-[0.2em]">
                        মেডিদেশ সিকিউর অথেন্টিকেশন গেটওয়ে
                    </span>
                </motion.div>
            </div>
        </main>
    );
}
