"use client";

import { useState } from "react";
import { CheckCircle, Phone, Tag } from "@phosphor-icons/react/dist/ssr";

export default function PricingSection() {
    const [billingCycle, setBillingCycle] = useState<"monthly" | "6-month" | "yearly">("monthly");

    const plans = [
        {
            name: "পদ্মা",
            tagline: "ফ্রি চিরতরে",
            price: 0,
            description: "ছোট ফার্মেসির ডিজিটাল যাত্রা শুরু করার জন্য।",
            features: [
                "১টি ফার্মেসি",
                "১ জন ব্যবহারকারী (মালিক), ১টি ডিভাইস",
                "বেসিক ইনভেন্টরি ম্যানেজমেন্ট",
                "বেসিক বিক্রয় ও ক্রয় ট্র্যাকিং",
                "মোবাইল অ্যাপ অ্যাক্সেস",
                "ইমেইল সাপোর্ট",
            ],
            cta: null,
            highlight: false,
        },
        {
            name: "মেঘনা",
            tagline: "সবচেয়ে জনপ্রিয়",
            price: 399,
            description: "মাঝারি বা বড় ফার্মেসির জন্য সব সুবিধা এক জায়গায়।",
            features: [
                "১টি ফার্মেসি",
                "৩ জন ব্যবহারকারী, ২টি ডিভাইস",
                "পূর্ণ ইনভেন্টরি ও অ্যাকাউন্ট ম্যানেজমেন্ট",
                "মেয়াদোত্তীর্ণ ও লো-স্টক সতর্কতা",
                "রিপোর্ট ডাউনলোড (PDF, Excel, CSV)",
                "থার্মাল প্রিন্টিং সাপোর্ট",
                "দ্রুত কাস্টমার সাপোর্ট",
            ],
            cta: null,
            highlight: true,
        },
        {
            name: "যমুনা",
            tagline: "অ্যাডভান্সড",
            price: 899,
            description: "বড় চেইন ফার্মেসি ও দ্রুততম সাপোর্টের জন্য।",
            features: [
                "১টি ফার্মেসি",
                "৫ জন ব্যবহারকারী, ৩টি ডিভাইস",
                "উন্নত ইনভেন্টরি, বাকি খাতা ও সম্পূর্ণ অ্যাকাউন্টিং",
                "অ্যাডভান্সড রিপোর্ট ও ব্যবসায়িক বিশ্লেষণ",
                "ক্রেতাদের ওষুধের চাহিদার ডাটা বিশ্লেষণ",
                "বিজ্ঞাপনমুক্ত অভিজ্ঞতা",
                "প্রায়োরিটি কাস্টমার সাপোর্ট",
            ],
            cta: "বিস্তারিত",
            highlight: false,
        },
    ];

    const toBengaliNumber = (num: number) => {
        const digits = ["০", "১", "২", "৩", "৪", "৫", "৬", "৭", "৮", "৯"];
        return num.toString().split("").map(d => digits[parseInt(d)] || d).join("");
    };

    const getPrice = (basePrice: number) => {
        if (basePrice === 0) return "বিনামূল্যে";
        if (billingCycle === "monthly") return `৳${toBengaliNumber(basePrice)}`;
        if (billingCycle === "6-month") return `৳${toBengaliNumber(Math.round(basePrice * 6 * 0.9))}`;
        if (billingCycle === "yearly") return `৳${toBengaliNumber(Math.round(basePrice * 12 * 0.8))}`;
        return `৳${toBengaliNumber(basePrice)}`;
    };

    const getPriceLabel = () => {
        if (billingCycle === "monthly") return "/মাস";
        if (billingCycle === "6-month") return "/৬ মাস";
        if (billingCycle === "yearly") return "/বছর";
        return "/মাস";
    };

    const getDiscount = () => {
        if (billingCycle === "6-month") return "১০% ছাড়";
        if (billingCycle === "yearly") return "২০% ছাড়";
        return null;
    };

    const discount = getDiscount();

    return (
        <section id="pricing" className="py-20 lg:py-28 bg-slate-50 relative overflow-hidden">
            {/* ── Blob decorations ── */}
            <svg
                className="absolute -top-20 -right-20 w-80 h-80 opacity-[0.06] pointer-events-none"
                viewBox="0 0 320 320"
                fill="none"
                aria-hidden="true"
            >
                <path
                    d="M160,30 C220,10 300,60 310,130 C320,200 270,270 200,285 C130,300 60,260 40,190 C20,120 60,50 100,35 C120,27 140,36 160,30 Z"
                    fill="#2E8B57"
                />
            </svg>
            <svg
                className="absolute -bottom-16 -left-16 w-72 h-72 opacity-[0.05] pointer-events-none"
                viewBox="0 0 280 280"
                fill="none"
                aria-hidden="true"
            >
                <path
                    d="M80,40 C130,10 210,30 240,90 C270,150 250,230 190,260 C130,290 50,260 20,200 C-10,140 10,60 50,40 C60,35 70,43 80,40 Z"
                    fill="#2E8B57"
                />
            </svg>
            {/* Dotted decorative grid */}
            <svg
                className="absolute top-20 left-8 opacity-[0.08] pointer-events-none hidden lg:block"
                width="120" height="120"
                aria-hidden="true"
            >
                {[0, 1, 2, 3, 4].map(r => [0, 1, 2, 3, 4].map(c => (
                    <circle key={`${r}-${c}`} cx={12 + c * 24} cy={12 + r * 24} r="2.5" fill="#2E8B57" />
                )))}
            </svg>

            <div className="container mx-auto px-6 lg:px-12 relative z-10">
                {/* Section header */}
                <div className="max-w-2xl mx-auto text-center mb-12">
                    <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded bg-white border border-slate-200 text-slate-600 text-xs font-semibold uppercase tracking-wider mb-5 shadow-sm">
                        <Tag size={13} weight="bold" />
                        সহজ সাবস্ক্রিপশন
                    </div>
                    <h2 className="text-3xl lg:text-4xl font-black text-slate-900 mb-4 leading-tight">
                        সাধ্যের মধ্যে সেরা প্যাকেজটি পছন্দ করুন ।
                    </h2>

                    {/* Billing toggle */}
                    <div className="inline-flex p-1 bg-white border border-slate-200 rounded shadow-sm">
                        {(["monthly", "6-month", "yearly"] as const).map((cycle) => (
                            <button
                                key={cycle}
                                onClick={() => setBillingCycle(cycle)}
                                className={`px-5 py-2 rounded text-sm font-semibold transition-all ${billingCycle === cycle
                                        ? "bg-medidesh-teal-500 text-white shadow-sm"
                                        : "text-slate-500 hover:text-slate-800"
                                    }`}
                            >
                                {cycle === "monthly" ? "মাসিক" : cycle === "6-month" ? "৬ মাস" : "বার্ষিক"}
                            </button>
                        ))}
                    </div>
                    {discount && (
                        <p className="mt-3 text-medidesh-teal-600 text-sm font-bold">{discount} — সীমিত সময়ের অফার</p>
                    )}
                </div>

                {/* Plans */}
                <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
                    {plans.map((plan, index) => (
                        <div
                            key={index}
                            className={`relative flex flex-col rounded border transition-all duration-300 overflow-hidden ${plan.highlight
                                    ? "bg-medidesh-teal-500 border-medidesh-teal-400 shadow-2xl shadow-medidesh-teal-300/30 md:-translate-y-2"
                                    : "bg-white border-slate-200 hover:border-medidesh-teal-200 hover:shadow-lg"
                                }`}
                        >
                            {plan.highlight && (
                                <div className="bg-medidesh-teal-400/40 text-white text-xs font-black uppercase text-center py-2">
                                    সবচেয়ে জনপ্রিয়
                                </div>
                            )}

                            <div className="p-7 flex flex-col flex-1">
                                {/* Plan name */}
                                <div className="mb-6">
                                    <h3 className={`text-xl font-black mb-1 ${plan.highlight ? "text-white" : "text-slate-900"}`}>
                                        {plan.name}
                                    </h3>
                                    <p className={`text-sm ${plan.highlight ? "text-medidesh-teal-100" : "text-slate-500"}`}>
                                        {plan.description}
                                    </p>
                                </div>

                                {/* Price */}
                                <div className="mb-7">
                                    <div className="flex items-baseline gap-1">
                                        <span className={`text-4xl font-black tracking-tight ${plan.highlight ? "text-white" : "text-slate-900"}`}>
                                            {getPrice(plan.price)}
                                        </span>
                                        {plan.price > 0 && (
                                            <span className={`text-sm font-medium ${plan.highlight ? "text-medidesh-teal-100" : "text-slate-400"}`}>
                                                {getPriceLabel()}
                                            </span>
                                        )}
                                    </div>
                                </div>

                                {/* Features */}
                                <ul className="space-y-3 mb-8 flex-1">
                                    {plan.features.map((feature, idx) => (
                                        <li key={idx} className="flex items-start gap-2.5">
                                            <CheckCircle
                                                weight="fill"
                                                size={17}
                                                className={`mt-0.5 shrink-0 ${plan.highlight ? "text-white" : "text-medidesh-teal-500"}`}
                                            />
                                            <span className={`text-sm leading-snug ${plan.highlight ? "text-white" : "text-slate-700"}`}>
                                                {feature}
                                            </span>
                                        </li>
                                    ))}
                                </ul>

                                {/* CTA */}
                                {plan.cta && (
                                    <a
                                        href="https://wa.me/+8801608844017"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className={`w-full py-3.5 rounded font-bold text-sm transition-all active:scale-[0.98] text-center block ${plan.highlight
                                                ? "bg-white text-medidesh-teal-600 hover:bg-slate-50 shadow-md"
                                                : "bg-medidesh-teal-500 text-white hover:bg-medidesh-teal-600 shadow-sm"
                                            }`}
                                    >
                                        {plan.cta}
                                    </a>
                                )}
                            </div>
                        </div>
                    ))}
                </div>

                {/* Help row */}
                <div className="mt-10 max-w-2xl mx-auto">
                    <div className="bg-white rounded p-6 border border-slate-100 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-6">
                        <div>
                            <h4 className="font-bold text-slate-900 mb-1">সঠিক প্ল্যান নির্বাচনে সাহায্য লাগবে?</h4>
                            <p className="text-sm text-slate-500">আমাদের টিম শনি–বৃহস্পতি সকাল ১০টা–রাত ৮টা সরাসরি সাহায্য করবে।</p>
                        </div>
                        <a
                            href="tel:+8801608844017"
                            className="shrink-0 inline-flex items-center gap-2.5 bg-medidesh-teal-500 hover:bg-medidesh-teal-600 text-white px-6 py-3 rounded font-bold text-sm transition-all shadow-sm hover:-translate-y-0.5"
                        >
                            <Phone weight="fill" size={16} />
                            +8801608-844017
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}
