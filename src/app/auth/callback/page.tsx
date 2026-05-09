"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle, ArrowRight, AppWindow, ShieldCheck } from "@phosphor-icons/react";

export default function AuthCallbackPage() {
    const [countdown, setCountdown] = useState(3);
    const [isRedirecting, setIsRedirecting] = useState(false);
    const [deepLink, setDeepLink] = useState("medidesh://auth/callback");

    useEffect(() => {
        const hash = window.location.hash;
        const targetLink = `medidesh://auth/callback${hash}`;
        setDeepLink(targetLink);

        const timer = setInterval(() => {
            setCountdown((prev) => {
                if (prev <= 1) {
                    clearInterval(timer);
                    setIsRedirecting(true);
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
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                    className="bg-white border border-slate-100 shadow-[0_32px_64px_-16px_rgba(46,139,87,0.1)] rounded-[2.5rem] p-10 md:p-14 text-center overflow-hidden relative"
                >
                    {/* Top Accent Line */}
                    <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-medidesh-teal-300 via-medidesh-teal-500 to-medidesh-teal-300" />

                    {/* Success Icon */}
                    <div className="mb-10 flex justify-center">
                        <motion.div
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ delay: 0.3, type: "spring", stiffness: 200, damping: 15 }}
                            className="w-24 h-24 bg-medidesh-teal-50 rounded-full flex items-center justify-center relative"
                        >
                            <CheckCircle size={56} weight="fill" className="text-medidesh-teal-500 z-10" />
                            <motion.div 
                                animate={{ scale: [1, 1.4], opacity: [0.5, 0] }}
                                transition={{ duration: 1.5, repeat: Infinity }}
                                className="absolute inset-0 rounded-full border-2 border-medidesh-teal-500/30"
                            />
                        </motion.div>
                    </div>

                    {/* Main Content */}
                    <div className="space-y-4 mb-10">
                        <h1 className="text-3xl font-bold text-slate-900 font-sans tracking-tight">
                            সফলভাবে লগইন হয়েছে
                        </h1>
                        <p className="text-slate-500 text-lg leading-relaxed font-sans">
                            আপনাকে সরাসরি মেডিদেশ অ্যাপে <br /> ফিরিয়ে নেওয়া হচ্ছে
                        </p>
                    </div>

                    {/* Proper Countdown Text */}
                    <div className="mb-12 min-h-[40px] flex items-center justify-center">
                        <AnimatePresence mode="wait">
                            {!isRedirecting ? (
                                <motion.div
                                    key="countdown"
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -10 }}
                                    className="flex items-center gap-2 text-slate-400 font-sans font-bold"
                                >
                                    <span>রিডাইরেক্ট করা হচ্ছে:</span>
                                    <span className="text-medidesh-teal-600 text-xl w-6">{countdown}</span>
                                    <span>সেকেন্ড</span>
                                </motion.div>
                            ) : (
                                <motion.div
                                    key="redirecting"
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    className="text-medidesh-teal-600 font-sans font-black tracking-wide flex items-center gap-2"
                                >
                                    <div className="w-2 h-2 bg-medidesh-teal-600 rounded-full animate-bounce" />
                                    <span>অ্যাপ ওপেন হচ্ছে...</span>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>

                    {/* Action Button */}
                    <div className="pt-8 border-t border-slate-100">
                        <a 
                            href={deepLink}
                            className="w-full inline-flex items-center justify-center gap-3 px-8 py-5 bg-medidesh-teal-600 text-white font-bold rounded-2xl hover:bg-medidesh-teal-700 transition-all shadow-[0_12px_24px_-8px_rgba(46,139,87,0.4)] active:scale-[0.98] group"
                        >
                            <AppWindow size={24} weight="fill" />
                            <span className="font-sans text-lg">সরাসরি অ্যাপে যান</span>
                            <ArrowRight size={20} weight="bold" className="group-hover:translate-x-1 transition-transform" />
                        </a>
                        <p className="mt-6 text-sm text-slate-400 font-sans leading-relaxed px-4">
                            যদি স্বয়ংক্রিয়ভাবে অ্যাপ ওপেন না হয়, তবে উপরের বাটনে ক্লিক করুন
                        </p>
                    </div>
                </motion.div>

                {/* Footer Attribution */}
                <motion.div 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1 }}
                    className="mt-10 flex flex-col items-center gap-2"
                >
                    <div className="flex items-center gap-2 text-slate-400">
                        <ShieldCheck size={18} weight="fill" />
                        <span className="text-[10px] font-black uppercase tracking-[0.1em]">
                            মেডিদেশ সিকিউর গেটওয়ে
                        </span>
                    </div>
                </motion.div>
            </div>
        </main>
    );
}
