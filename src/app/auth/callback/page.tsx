"use client";

import { useEffect, useState } from "react";
import { CheckCircle, ArrowRight, AppWindow } from "@phosphor-icons/react";

export default function AuthCallbackPage() {
    const [countdown, setCountdown] = useState(3);
    const [deepLink, setDeepLink] = useState("medidesh://auth/callback");

    useEffect(() => {
        // Capture both the search (?code=...) and the hash (#token=...)
        const search = window.location.search;
        const hash = window.location.hash;
        
        // Combine them into the target link
        const targetLink = `medidesh://auth/callback${search}${hash}`;
        setDeepLink(targetLink);

        const timer = setInterval(() => {
            setCountdown((prev) => {
                if (prev <= 1) {
                    clearInterval(timer);
                    // Use the combined link
                    window.location.replace(targetLink);
                    return 0;
                }
                return prev - 1;
            });
        }, 1000);
        return () => clearInterval(timer);
    }, []);

    return (
        <main className="min-h-screen bg-slate-50 flex items-center justify-center p-6 font-sans">
            <div className="max-w-sm w-full bg-white border border-slate-200 rounded-2xl p-8 md:p-10 text-center shadow-sm">
                {/* Minimal Success Icon */}
                <div className="mb-6 flex justify-center text-medidesh-teal-500">
                    <CheckCircle size={56} weight="fill" />
                </div>

                {/* Clear Messaging */}
                <h1 className="text-2xl font-bold text-slate-900 mb-3">
                    লগইন সফল হয়েছে
                </h1>
                <p className="text-slate-600 mb-8 leading-relaxed">
                    আপনাকে সরাসরি মেডিদেশ অ্যাপে ফিরিয়ে নেওয়া হচ্ছে
                </p>

                {/* Simple Status Indicator */}
                <div className="mb-10 p-4 bg-slate-50 rounded-xl text-sm text-slate-500 font-semibold border border-slate-100">
                    {countdown > 0 ? (
                        <span className="flex items-center justify-center gap-2">
                             রিডাইরেক্ট হতে {countdown} সেকেন্ড বাকি
                        </span>
                    ) : (
                        <span className="flex items-center justify-center gap-2 text-medidesh-teal-600">
                            <div className="w-1.5 h-1.5 bg-medidesh-teal-600 rounded-full animate-ping" />
                            অ্যাপ ওপেন হচ্ছে...
                        </span>
                    )}
                </div>

                {/* Optimized Direct Action Button */}
                <div className="px-2">
                    <a 
                        href={deepLink}
                        className="w-full inline-flex items-center justify-center gap-3 px-6 py-4 bg-medidesh-teal-600 text-white font-bold rounded-xl hover:bg-medidesh-teal-700 transition-all shadow-md hover:shadow-lg active:scale-95 touch-manipulation mb-6"
                    >
                        <AppWindow size={24} weight="fill" className="shrink-0" />
                        <span className="font-sans text-lg whitespace-nowrap">সরাসরি অ্যাপে যান</span>
                        <ArrowRight size={20} weight="bold" className="shrink-0" />
                    </a>
                </div>
                
                <p className="text-xs text-slate-400 leading-normal">
                    যদি স্বয়ংক্রিয়ভাবে অ্যাপ ওপেন না হয়, <br /> তবে উপরের বাটনে ক্লিক করুন
                </p>
            </div>
        </main>
    );
}
