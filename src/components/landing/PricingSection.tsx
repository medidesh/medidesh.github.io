"use client";

import { useState } from "react";
import { CheckCircle, Phone, Tag, Monitor } from "@phosphor-icons/react/dist/ssr";
import { useLanguage } from "@/lib/i18n";

const T = {
    bn: {
        badge: "সহজ সাবস্ক্রিপশন",
        heading: "সাধ্যের মধ্যে সেরা প্যাকেজটি পছন্দ করুন।",
        cycles: { monthly: "মাসিক", "6-month": "৬ মাস", yearly: "বার্ষিক" },
        discounts: { "6-month": "১০% ছাড়", yearly: "২০% ছাড়" },
        discountSuffix: " — সীমিত সময়ের অফার",
        freePrice: "বিনামূল্যে",
        priceLabels: { monthly: "/মাস", "6-month": "/৬ মাস", yearly: "/বছর" },
        popularBadge: "সবচেয়ে জনপ্রিয়",
        helpTitle: "সঠিক প্ল্যান নির্বাচনে সাহায্য লাগবে?",
        helpSub: "আমাদের টিম সরাসরি সাহায্য করবে।",
        plans: [
            {
                name: "পদ্মা", tagline: "ফ্রি চিরতরে", price: 0, highlight: false, cta: null,
                description: "ছোট ফার্মেসির ডিজিটাল যাত্রা শুরু করার জন্য।",
                features: ["১টি ফার্মেসি", "১ জন ব্যবহারকারী (মালিক), ১টি ডিভাইস", "বেসিক ইনভেন্টরি ম্যানেজমেন্ট", "বেসিক বিক্রয় ও ক্রয় ট্র্যাকিং", "মোবাইল অ্যাপ অ্যাক্সেস", "ইমেইল সাপোর্ট"],
            },
            {
                name: "মেঘনা", tagline: "সবচেয়ে জনপ্রিয়", price: 399, highlight: true, cta: null,
                description: "মাঝারি বা বড় ফার্মেসির জন্য সব সুবিধা এক জায়গায়।",
                features: ["১টি ফার্মেসি", "৩ জন ব্যবহারকারী, ২টি ডিভাইস", "পূর্ণ ইনভেন্টরি ও অ্যাকাউন্ট ম্যানেজমেন্ট", "মেয়াদোত্তীর্ণ ও লো-স্টক সতর্কতা", "রিপোর্ট ডাউনলোড (PDF, Excel, CSV)", "থার্মাল প্রিন্টিং সাপোর্ট", "দ্রুত কাস্টমার সাপোর্ট"],
            },
            {
                name: "যমুনা", tagline: "অ্যাডভান্সড", price: 899, highlight: false, cta: "বিস্তারিত",
                description: "বড় চেইন ফার্মেসি ও দ্রুততম সাপোর্টের জন্য।",
                features: ["১টি ফার্মেসি", "৫ জন ব্যবহারকারী, ৩টি ডিভাইস", "উন্নত ইনভেন্টরি, বাকি খাতা ও সম্পূর্ণ অ্যাকাউন্টিং", "অ্যাডভান্সড রিপোর্ট ও ব্যবসায়িক বিশ্লেষণ", "ক্রেতাদের ওষুধের চাহিদার ডাটা বিশ্লেষণ", "বিজ্ঞাপনমুক্ত অভিজ্ঞতা", "প্রায়োরিটি কাস্টমার সাপোর্ট"],
            },
        ],
    },
    en: {
        badge: "Simple Subscription",
        heading: "Choose the best plan within your budget.",
        cycles: { monthly: "Monthly", "6-month": "6 Months", yearly: "Yearly" },
        discounts: { "6-month": "10% off", yearly: "20% off" },
        discountSuffix: " — limited time offer",
        freePrice: "Free",
        priceLabels: { monthly: "/mo", "6-month": "/6 mo", yearly: "/yr" },
        popularBadge: "Most Popular",
        helpTitle: "Need help choosing the right plan?",
        helpSub: "Our team will help you directly.",
        plans: [
            {
                name: "Padma", tagline: "Forever Free", price: 0, highlight: false, cta: null,
                description: "Start your digital journey for small pharmacies.",
                features: ["1 pharmacy", "1 user (owner), 1 device", "Basic inventory management", "Basic sales & purchase tracking", "Mobile app access", "Email support"],
            },
            {
                name: "Meghna", tagline: "Most Popular", price: 399, highlight: true, cta: null,
                description: "All features in one place for mid to large pharmacies.",
                features: ["1 pharmacy", "3 users, 2 devices", "Full inventory & account management", "Expiry & low-stock alerts", "Report downloads (PDF, Excel, CSV)", "Thermal printing support", "Fast customer support"],
            },
            {
                name: "Jamuna", tagline: "Advanced", price: 899, highlight: false, cta: "Details",
                description: "For large chain pharmacies and fastest support.",
                features: ["1 pharmacy", "5 users, 3 devices", "Advanced inventory, credit ledger & full accounting", "Advanced reports & business analytics", "Customer medicine demand data analysis", "Ad-free experience", "Priority customer support"],
            },
        ],
    },
};

export default function PricingSection() {
    const [billingCycle, setBillingCycle] = useState<"monthly" | "6-month" | "yearly">("monthly");
    const { lang } = useLanguage();
    const t = T[lang];

    const getPrice = (basePrice: number) => {
        if (basePrice === 0) return t.freePrice;
        if (billingCycle === "monthly") return `৳${basePrice}`;
        if (billingCycle === "6-month") return `৳${Math.round(basePrice * 6 * 0.9)}`;
        if (billingCycle === "yearly") return `৳${Math.round(basePrice * 12 * 0.8)}`;
        return `৳${basePrice}`;
    };

    const discount = billingCycle !== "monthly" ? t.discounts[billingCycle] : null;

    return (
        <section id="pricing" className="py-24 lg:py-32 bg-slate-50 relative overflow-hidden text-slate-900">
            <svg className="absolute -top-20 -right-20 w-80 h-80 opacity-[0.06] pointer-events-none" viewBox="0 0 320 320" fill="none" aria-hidden="true">
                <path d="M160,30 C220,10 300,60 310,130 C320,200 270,270 200,285 C130,300 60,260 40,190 C20,120 60,50 100,35 C120,27 140,36 160,30 Z" fill="#2E8B57" />
            </svg>
            <svg className="absolute top-20 left-8 opacity-[0.08] pointer-events-none hidden lg:block" width="120" height="120" aria-hidden="true">
                {[0,1,2,3,4].map(r => [0,1,2,3,4].map(c => (
                    <circle key={`${r}-${c}`} cx={12+c*24} cy={12+r*24} r="2.5" fill="#2E8B57" />
                )))}
            </svg>

            <div className="container mx-auto px-6 lg:px-12 relative z-10">
                <div className="max-w-2xl mx-auto text-center mb-16">
                    <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded bg-white border border-slate-200 text-slate-600 text-xs font-semibold uppercase tracking-wider mb-5 shadow-sm">
                        <Tag size={13} weight="bold" />
                        {t.badge}
                    </div>
                    <h2 className="text-3xl lg:text-4xl font-black text-slate-900 mb-8 leading-tight tracking-tight">{t.heading}</h2>

                    <div className="inline-flex p-1 bg-white border border-slate-200 rounded shadow-sm">
                        {(["monthly", "6-month", "yearly"] as const).map((cycle) => (
                            <button
                                key={cycle}
                                onClick={() => setBillingCycle(cycle)}
                                className={`px-5 py-2 rounded text-sm font-semibold transition-all ${billingCycle === cycle ? "bg-medidesh-teal-500 text-white shadow-sm" : "text-slate-500 hover:text-slate-800"}`}
                            >
                                {t.cycles[cycle]}
                            </button>
                        ))}
                    </div>
                    {discount && <p className="mt-3 text-medidesh-teal-600 text-sm font-bold">{discount}{t.discountSuffix}</p>}
                </div>

                <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
                    {t.plans.map((plan, index) => (
                        <div key={index} className={`relative flex flex-col rounded border transition-all duration-300 overflow-hidden ${plan.highlight ? "bg-medidesh-teal-500 border-medidesh-teal-400 shadow-2xl shadow-medidesh-teal-300/30 md:-translate-y-2" : "bg-white border-slate-200 hover:border-medidesh-teal-200 hover:shadow-lg"}`}>
                            {plan.highlight && (
                                <div className="bg-medidesh-teal-400/40 text-white text-xs font-black uppercase text-center py-2">{t.popularBadge}</div>
                            )}
                            <div className="p-7 flex flex-col flex-1">
                                <div className="mb-6">
                                    <h3 className={`text-xl font-black mb-1 ${plan.highlight ? "text-white" : "text-slate-900"}`}>{plan.name}</h3>
                                    <p className={`text-sm ${plan.highlight ? "text-medidesh-teal-100" : "text-slate-500"}`}>{plan.description}</p>
                                </div>
                                <div className="mb-7">
                                    <div className="flex items-baseline gap-1">
                                        <span className={`text-4xl font-black tracking-tight ${plan.highlight ? "text-white" : "text-slate-900"}`}>{getPrice(plan.price)}</span>
                                        {plan.price > 0 && (
                                            <span className={`text-sm font-medium ${plan.highlight ? "text-medidesh-teal-100" : "text-slate-400"}`}>{t.priceLabels[billingCycle]}</span>
                                        )}
                                    </div>
                                </div>
                                <ul className="space-y-3 mb-8 flex-1">
                                    {plan.features.map((feature, idx) => (
                                        <li key={idx} className="flex items-start gap-2.5">
                                            <CheckCircle weight="fill" size={17} className={`mt-0.5 shrink-0 ${plan.highlight ? "text-white" : "text-medidesh-teal-500"}`} />
                                            <span className={`text-sm leading-snug ${plan.highlight ? "text-white" : "text-slate-700"}`}>{feature}</span>
                                        </li>
                                    ))}
                                </ul>
                                {plan.cta && (
                                    <a href="https://wa.me/+8801608844017" target="_blank" rel="noopener noreferrer" className={`w-full py-3.5 rounded font-bold text-sm transition-all active:scale-[0.98] text-center block ${plan.highlight ? "bg-white text-medidesh-teal-600 hover:bg-slate-50 shadow-md" : "bg-medidesh-teal-500 text-white hover:bg-medidesh-teal-600 shadow-sm"}`}>
                                        {plan.cta}
                                    </a>
                                )}
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-16 max-w-4xl mx-auto text-center font-hind-siliguri">
                    <p className="text-slate-400 text-xs font-bold uppercase tracking-tighter mb-8">
                        {lang === "bn" ? "আমরা যেসকল পেমেন্ট গ্রহণ করি" : "Accepted Payment Methods"}
                    </p>
                    <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-8">
                        {/* Mobile Financial Services */}
                        <div className="flex items-center gap-10 border-r border-slate-200 pr-10">
                            <img src="https://www.logo.wine/a/logo/BKash/BKash-Icon-Logo.wine.svg" alt="bKash" className="h-8 lg:h-10 w-auto object-contain" />
                            <img src="https://www.logo.wine/a/logo/Nagad/Nagad-Logo.wine.svg" alt="Nagad" className="h-10 lg:h-12 w-auto object-contain" />
                        </div>
                        {/* Cards & Bank */}
                        <div className="flex items-center gap-10">
                            <img src="https://www.logo.wine/a/logo/Visa_Inc./Visa_Inc.-Logo.wine.svg" alt="VISA" className="h-8 lg:h-10 w-auto object-contain" />
                            <img src="https://www.logo.wine/a/logo/Mastercard/Mastercard-Logo.wine.svg" alt="Mastercard" className="h-8 lg:h-10 w-auto object-contain" />
                            <div className="flex items-center gap-2.5 text-slate-400 border-l border-slate-200 pl-10">
                                <Monitor size={20} weight="bold" />
                                <span className="text-[10px] font-black uppercase tracking-widest">{lang === "bn" ? "অনলাইন ব্যাংক" : "Bank Transfer"}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
