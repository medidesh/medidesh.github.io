"use client";

import { useState } from "react";
import { CheckCircle } from "@phosphor-icons/react/dist/ssr";

export default function PricingSection() {
    const [isYearly, setIsYearly] = useState(false);

    return (
        <section id="pricing" className="py-24 bg-slate-50">
            <div className="container mx-auto px-6 lg:px-12">
                <div className="text-center max-w-2xl mx-auto mb-16">
                    <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-6">
                        সহজ এবং স্বচ্ছ প্রাইসিং
                    </h2>
                    <div className="flex items-center justify-center gap-4">
                        <span className="text-slate-500 font-medium">মাসিক</span>
                        <label className="relative inline-flex items-center cursor-pointer">
                            <input
                                type="checkbox"
                                className="sr-only peer"
                                checked={isYearly}
                                onChange={() => setIsYearly(!isYearly)}
                            />
                            <div className="w-14 h-7 bg-slate-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-6 after:w-6 after:transition-all peer-checked:bg-pharma-green-600"></div>
                        </label>
                        <span className="text-slate-900 font-bold">
                            বাৎসরিক <span className="text-pharma-green-600 text-xs">(২০% ছাড়)</span>
                        </span>
                    </div>
                </div>

                <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6">
                    {/* Titas */}
                    <div className="bg-white p-8 rounded-3xl border border-slate-100 hover:border-pharma-green-200 transition-colors">
                        <h3 className="text-xl font-bold text-slate-900 mb-2">তিতাস</h3>
                        <p className="text-slate-500 text-sm mb-6">নতুন ফার্মেসির জন্য।</p>
                        <div className="text-4xl font-extrabold text-slate-900 mb-6">
                            ৳০{" "}
                            <span className="text-base text-slate-400 font-normal">
                                /আজীবন
                            </span>
                        </div>
                        <ul className="space-y-4 mb-8 text-sm text-slate-600">
                            <li className="flex items-center gap-2">
                                <CheckCircle weight="fill" className="text-pharma-green-500" />
                                ১ জন ইউজার
                            </li>
                            <li className="flex items-center gap-2">
                                <CheckCircle weight="fill" className="text-pharma-green-500" />
                                ১০০ টি প্রোডাক্ট
                            </li>
                            <li className="flex items-center gap-2">
                                <CheckCircle weight="fill" className="text-pharma-green-500" />
                                বেসিক রিপোর্ট
                            </li>
                        </ul>
                    </div>

                    {/* Teesta */}
                    <div className="bg-white p-8 rounded-3xl border border-slate-100 hover:border-pharma-green-200 transition-colors">
                        <h3 className="text-xl font-bold text-slate-900 mb-2">তিস্তা</h3>
                        <p className="text-slate-500 text-sm mb-6">ছোট ফার্মেসির জন্য।</p>
                        <div className="text-4xl font-extrabold text-slate-900 mb-6">
                            {isYearly ? "৳৬০০" : "৳৮০০"}
                            <span className="text-base text-slate-400 font-normal">
                                /মাস
                            </span>
                        </div>
                        <ul className="space-y-4 mb-8 text-sm text-slate-600">
                            <li className="flex items-center gap-2">
                                <CheckCircle weight="fill" className="text-pharma-green-500" />
                                ২ জন ইউজার
                            </li>
                            <li className="flex items-center gap-2">
                                <CheckCircle weight="fill" className="text-pharma-green-500" />
                                আনলিমিটেড প্রোডাক্ট
                            </li>
                            <li className="flex items-center gap-2">
                                <CheckCircle weight="fill" className="text-pharma-green-500" />
                                ৬ মাসের রিপোর্ট
                            </li>
                        </ul>
                    </div>

                    {/* Padma */}
                    <div className="bg-pharma-green-600 p-8 rounded-3xl border border-pharma-green-500 shadow-2xl relative transform hover:-translate-y-2 transition-transform">
                        <div className="absolute top-0 right-0 bg-white text-pharma-green-600 text-xs font-bold px-3 py-1 rounded-bl-xl rounded-tr-2xl">
                            জনপ্রিয়
                        </div>
                        <h3 className="text-xl font-bold text-white mb-2">পদ্মা</h3>
                        <p className="text-pharma-green-100 text-sm mb-6">
                            ব্যস্ত ফার্মেসির জন্য।
                        </p>
                        <div className="text-4xl font-extrabold text-white mb-6">
                            {isYearly ? "৳১২০০" : "৳১৫০০"}
                            <span className="text-base text-pharma-green-100 font-normal">
                                /মাস
                            </span>
                        </div>
                        <ul className="space-y-4 mb-8 text-sm text-white">
                            <li className="flex items-center gap-2">
                                <CheckCircle weight="fill" className="text-white" />
                                ৫ জন ইউজার
                            </li>
                            <li className="flex items-center gap-2">
                                <CheckCircle weight="fill" className="text-white" />
                                স্মার্ট ইনভেন্টরি
                            </li>
                            <li className="flex items-center gap-2">
                                <CheckCircle weight="fill" className="text-white" />
                                এসএমএস অ্যালার্ট
                            </li>
                            <li className="flex items-center gap-2">
                                <CheckCircle weight="fill" className="text-white" />
                                প্রায়োরিটি সাপোর্ট
                            </li>
                        </ul>
                    </div>

                    {/* Jamuna */}
                    <div className="bg-white p-8 rounded-3xl border border-slate-100 hover:border-pharma-green-200 transition-colors">
                        <h3 className="text-xl font-bold text-slate-900 mb-2">যমুনা</h3>
                        <p className="text-slate-500 text-sm mb-6">
                            ফার্মেসি চেইনের জন্য।
                        </p>
                        <div className="text-4xl font-extrabold text-slate-900 mb-6">
                            {isYearly ? "৳২৫০০" : "৳৩০০০"}
                            <span className="text-base text-slate-400 font-normal">
                                /মাস
                            </span>
                        </div>
                        <ul className="space-y-4 mb-8 text-sm text-slate-600">
                            <li className="flex items-center gap-2">
                                <CheckCircle weight="fill" className="text-pharma-green-500" />
                                আনলিমিটেড ইউজার
                            </li>
                            <li className="flex items-center gap-2">
                                <CheckCircle weight="fill" className="text-pharma-green-500" />
                                মাল্টি-ব্রাঞ্চ
                            </li>
                            <li className="flex items-center gap-2">
                                <CheckCircle weight="fill" className="text-pharma-green-500" />
                                ডেডিকেটেড ম্যানেজার
                            </li>
                        </ul>
                    </div>

                </div>

                <div className="mt-20 max-w-4xl mx-auto">
                    <div className="bg-slate-900 rounded-[3rem] p-8 lg:p-12 relative overflow-hidden group">
                        {/* Decorative background elements */}
                        <div className="absolute top-0 right-0 w-64 h-64 bg-pharma-green-500/10 rounded-full blur-[80px] -mr-32 -mt-32"></div>
                        <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-500/10 rounded-full blur-[80px] -ml-32 -mb-32"></div>

                        <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-8">
                            <div className="text-center lg:text-left">
                                <h3 className="text-2xl lg:text-3xl font-black text-white mb-4">আপনার জন্য সঠিক প্ল্যানটি খুঁজে পাচ্ছেন না?</h3>
                                <p className="text-slate-400 font-medium text-lg">
                                    আমাদের বিশেষজ্ঞ টিমের সাথে কথা বলুন এবং আপনার ফার্মেসির জন্য সেরা সমাধানটি বেছে নিন।
                                </p>
                            </div>

                            <div className="flex flex-col items-center lg:items-end gap-4 shrink-0">
                                <a
                                    href="tel:+8801700000000"
                                    className="inline-flex items-center gap-4 bg-pharma-green-600 hover:bg-pharma-green-500 text-white px-10 py-5 rounded-2xl font-black text-xl transition-all shadow-[0_20px_40px_-15px_rgba(0,155,134,0.3)] hover:-translate-y-1 active:scale-95"
                                >
                                    কল করুন: +৮৮০ ১৭০০০-০০০০০
                                </a>
                                <p className="text-slate-500 text-xs font-bold uppercase tracking-[0.2em]">Available Sat - Thu, 10 AM - 8 PM</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
