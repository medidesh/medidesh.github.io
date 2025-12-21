"use client";

import { useState, useEffect } from "react";
import { DeviceMobile, SpinnerGap, MagnifyingGlass, AndroidLogo, AppleLogo, PlusCircle, Prescription } from "@phosphor-icons/react/dist/ssr";

interface AppIntegrationProps {
    slug?: string;
}

export default function AppIntegration({ slug }: AppIntegrationProps) {
    const [invoiceId, setInvoiceId] = useState("");
    const [verificationStatus, setVerificationStatus] = useState<"idle" | "success" | "error">("idle");
    const [isVerifying, setIsVerifying] = useState(false);

    // Fallback slug for demo
    const pharmacySlug = slug || "wellbeing";
    const appUrl = `http://medidesh.com/${pharmacySlug}`;

    const handleVerify = () => {
        if (invoiceId.length > 3) {
            setIsVerifying(true);
            setVerificationStatus("idle");

            // Simulate API delay
            setTimeout(() => {
                window.location.href = `/private/pos/${pharmacySlug}/invoice?id=${invoiceId}`;
            }, 800);
        } else {
            setVerificationStatus("error");
        }
    };

    return (
        <section id="app-integration" className="py-24 bg-white relative overflow-hidden text-slate-900 border-t border-slate-100">
            {/* Background Motifs aligned with Hero */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-30">
                <div className="absolute inset-0 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] [background-size:32px_32px]"></div>

                <div className="absolute top-[30%] right-[3%] text-pharma-green-100 animate-float opacity-40">
                    <PlusCircle size={100} weight="thin" />
                </div>
                <div className="absolute bottom-[20%] left-[8%] text-blue-100 animate-float opacity-40" style={{ animationDelay: '1.8s' }}>
                    <Prescription size={90} weight="thin" />
                </div>
            </div>

            <div className="container mx-auto px-4 lg:px-8 relative z-10">
                <div className="text-center max-w-2xl mx-auto mb-16">
                    <span className="text-pharma-green-600 font-bold uppercase tracking-[0.2em] text-xs">Innovation</span>
                    <h2 className="text-3xl lg:text-4xl font-black mt-3">ডিজিটাল সার্ভিসেস</h2>
                    <p className="text-slate-500 mt-6 text-lg">
                        আমাদের মোবাইল অ্যাপ ডাউনলোড করুন অথবা আপনার অর্ডার ট্র্যাক করুন ২ মিনিটে।
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-8 lg:gap-12 max-w-6xl mx-auto">

                    {/* Left: App Download Card */}
                    <div className="flex flex-col h-full bg-white/80 backdrop-blur-sm border border-slate-200 shadow-xl rounded-[2.5rem] p-10 lg:p-12 hover:border-pharma-green-200 transition-all group">
                        <div className="flex items-center gap-4 mb-8">
                            <div className="w-14 h-14 bg-pharma-green-50 rounded-2xl flex items-center justify-center text-pharma-green-600 group-hover:scale-110 group-hover:rotate-6 transition-transform">
                                <DeviceMobile size={32} weight="fill" />
                            </div>
                            <div>
                                <h3 className="text-2xl font-bold">মেডিদেশ অ্যাপ</h3>
                                <p className="text-xs text-slate-500 font-black uppercase tracking-widest mt-1">App Store & Play Store</p>
                            </div>
                        </div>

                        <div className="flex-1 flex flex-col items-center gap-10">
                            {/* QR Code Container */}
                            <div className="bg-slate-50 p-10 rounded-[2.5rem] border border-slate-100 shadow-inner group-hover:bg-white transition-colors relative">
                                <img
                                    src={`https://quickchart.io/qr?text=${encodeURIComponent(appUrl)}&size=300`}
                                    alt="App QR Code"
                                    className="w-[200px] h-[200px] mix-blend-multiply"
                                />
                                <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-white px-4 py-2 rounded-full border border-slate-100 shadow-sm text-[10px] font-black uppercase tracking-widest text-slate-400 whitespace-nowrap">
                                    Scan to Install
                                </div>
                            </div>

                            <div className="text-center space-y-4">
                                <h4 className="font-bold text-slate-900">কিভাবে স্ক্যান করবেন?</h4>
                                <ol className="text-sm text-slate-500 space-y-2 text-left list-decimal pl-4">
                                    <li>আপনার মোবাইলে **মেডিদেশ অ্যাপ** ওপেন করুন।</li>
                                    <li>মেনু থেকে **কিউআর স্ক্যানার** সিলেক্ট করুন।</li>
                                    <li>এই কোডটি স্ক্যান করে সরাসরি আমাদের সাথে যুক্ত হোন।</li>
                                </ol>

                                <div className="pt-4 flex justify-center gap-4">
                                    <AndroidLogo size={32} weight="fill" className="text-slate-400" />
                                    <AppleLogo size={32} weight="fill" className="text-slate-400" />
                                </div>
                                <p className="text-[10px] text-slate-400 font-bold uppercase">স্মার্ট স্বাস্থ্যসেবার আধুনিক সমাধান</p>
                            </div>
                        </div>
                    </div>

                    {/* Right: Smart Search Card */}
                    <div className="flex flex-col h-full bg-white/80 backdrop-blur-sm border border-slate-200 shadow-xl rounded-[2.5rem] p-10 lg:p-12 hover:border-blue-200 transition-all group">
                        <div className="flex items-center gap-4 mb-8">
                            <div className="w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center text-blue-600 group-hover:scale-110 group-hover:-rotate-6 transition-transform">
                                <MagnifyingGlass size={32} weight="bold" />
                            </div>
                            <div>
                                <h3 className="text-2xl font-bold">স্মার্ট ট্র্যাকিং</h3>
                                <p className="text-xs text-slate-500 font-black uppercase tracking-widest mt-1">Order & Invoice ID</p>
                            </div>
                        </div>

                        <div className="flex-1 flex flex-col justify-center space-y-8">
                            <p className="text-slate-500 text-sm leading-relaxed">
                                আপনার ইনভয়েস আইডি অথবা মোবাইল নম্বর দিয়ে সহজেই অর্ডারের বর্তমান অবস্থা এবং রিসিট ডাউনলোড করুন।
                            </p>

                            <form onSubmit={(e) => { e.preventDefault(); handleVerify(); }} className="space-y-4">
                                <div className="relative">
                                    <input
                                        type="text"
                                        placeholder="Invoice ID / Phone Number"
                                        value={invoiceId}
                                        onChange={(e) => setInvoiceId(e.target.value)}
                                        disabled={isVerifying}
                                        className="w-full px-6 py-4 rounded-2xl border border-slate-200 bg-slate-50 focus:bg-white focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 outline-none transition-all text-lg tracking-wide placeholder:text-slate-400"
                                    />
                                </div>

                                <button
                                    type="submit"
                                    disabled={isVerifying || !invoiceId}
                                    className="w-full py-4 bg-blue-600 hover:bg-blue-700 disabled:bg-slate-300 text-white rounded-2xl font-bold transition-all flex items-center justify-center gap-3 shadow-xl shadow-blue-100 active:scale-[0.98] text-lg"
                                >
                                    {isVerifying ? (
                                        <>
                                            <SpinnerGap size={24} className="animate-spin" />
                                            খুঁজছি...
                                        </>
                                    ) : (
                                        "সার্চ করুন"
                                    )}
                                </button>
                            </form>

                            <div className="flex items-center gap-2 text-xs text-slate-400 font-black uppercase tracking-[0.1em]">
                                <div className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></div>
                                ২৪/৭ অনলাইন ভেরিফিকেশন সুবিধা
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
