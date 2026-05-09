"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ShieldCheck, ArrowRight, AppWindow } from "@phosphor-icons/react";

export default function AuthCallbackPage() {
    const [deepLink, setDeepLink] = useState("medidesh://auth/callback");

    useEffect(() => {
        // Capture the hash from the URL
        const hash = window.location.hash;
        const targetLink = `medidesh://auth/callback${hash}`;
        setDeepLink(targetLink);

        // Professional delay to ensure the user sees the redirection state
        const timer = setTimeout(() => {
            window.location.replace(targetLink);
        }, 1500);

        return () => clearTimeout(timer);
    }, []);

    return (
        <main className="min-h-screen bg-[var(--color-medidesh-bg)] flex items-center justify-center p-4">
            <div className="max-w-md w-full">
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className="zubaz-card p-8 md:p-12 text-center relative overflow-hidden shadow-2xl shadow-medidesh-teal-500/5"
                >
                    {/* Decorative Background Gradient */}
                    <div className="absolute -top-24 -right-24 w-48 h-48 bg-medidesh-teal-50 rounded-full blur-3xl opacity-60" />
                    <div className="absolute -bottom-24 -left-24 w-48 h-48 bg-medidesh-teal-50 rounded-full blur-3xl opacity-60" />
                    
                    {/* Brand Icon */}
                    <div className="relative z-10 mb-10 flex justify-center">
                        <div className="w-24 h-24 bg-white rounded-2xl flex items-center justify-center border border-slate-100 shadow-xl relative">
                            <ShieldCheck size={48} weight="fill" className="text-medidesh-teal-500" />
                            
                            {/* Animated Pulse Ring */}
                            <div className="absolute inset-0 rounded-2xl border-2 border-medidesh-teal-500/20 animate-pulse-ring" />
                        </div>
                    </div>

                    {/* Content */}
                    <h1 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4 font-orbitron tracking-tight uppercase">
                        Authenticating
                    </h1>
                    
                    <p className="text-slate-500 mb-10 leading-relaxed font-medium">
                        Redirecting you securely to the <br />
                        <span className="text-medidesh-teal-600 font-bold">Medidesh Mobile App</span>
                    </p>

                    {/* Loading Animation */}
                    <div className="flex flex-col items-center gap-4 mb-12">
                        <div className="flex gap-2">
                            {[0, 1, 2].map((i) => (
                                <motion.div
                                    key={i}
                                    animate={{
                                        y: [0, -8, 0],
                                        opacity: [0.3, 1, 0.3],
                                    }}
                                    transition={{
                                        duration: 0.8,
                                        repeat: Infinity,
                                        delay: i * 0.15,
                                    }}
                                    className="w-2.5 h-2.5 rounded-full bg-medidesh-teal-500"
                                />
                            ))}
                        </div>
                        <span className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-400">Secure Link</span>
                    </div>

                    {/* Fallback Section */}
                    <div className="pt-10 border-t border-slate-50">
                        <p className="text-xs text-slate-400 mb-6 font-bold uppercase tracking-wider">
                            If the app doesn't open automatically
                        </p>
                        <a 
                            href={deepLink}
                            className="inline-flex items-center gap-3 px-8 py-4 bg-medidesh-teal-500 text-white font-black rounded-xl hover:bg-medidesh-teal-600 transition-all shadow-[0_10px_20px_-5px_rgba(46,139,87,0.3)] hover:-translate-y-1 active:scale-95 group"
                        >
                            <AppWindow size={20} weight="fill" />
                            <span>LAUNCH APP NOW</span>
                            <ArrowRight size={20} weight="bold" className="group-hover:translate-x-1 transition-transform" />
                        </a>
                    </div>
                </motion.div>

                {/* Footer Attribution */}
                <motion.div 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1, duration: 1 }}
                    className="mt-10 text-center"
                >
                    <p className="text-slate-400 text-[10px] font-black uppercase tracking-[0.2em] flex items-center justify-center gap-2">
                        <span className="w-8 h-px bg-slate-200" />
                        Medidesh Security Bridge
                        <span className="w-8 h-px bg-slate-200" />
                    </p>
                </motion.div>
            </div>
        </main>
    );
}
