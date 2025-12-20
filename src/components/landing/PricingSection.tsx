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
                        <a
                            href="#"
                            className="block w-full py-3 px-6 rounded-xl border border-slate-200 text-slate-900 font-bold text-center hover:bg-slate-50 transition-colors"
                        >
                            ফ্রি শুরু করুন
                        </a>
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
                        <a
                            href="#"
                            className="block w-full py-3 px-6 rounded-xl border border-slate-200 text-slate-900 font-bold text-center hover:bg-slate-50 transition-colors"
                        >
                            বেসিক কিনুন
                        </a>
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
                        <a
                            href="#"
                            className="block w-full py-3 px-6 rounded-xl bg-white text-pharma-green-600 font-bold text-center hover:bg-slate-50 transition-colors shadow-lg"
                        >
                            প্রো কিনুন
                        </a>
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
                        <a
                            href="#"
                            className="block w-full py-3 px-6 rounded-xl border border-slate-200 text-slate-900 font-bold text-center hover:bg-slate-50 transition-colors"
                        >
                            যোগাযোগ করুন
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}
