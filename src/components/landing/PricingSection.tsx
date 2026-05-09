"use client";

import { useState } from "react";
import { Check, CurrencyCircleDollar, ArrowRight, Star } from "@phosphor-icons/react/dist/ssr";
import { useLanguage } from "@/lib/i18n";

const T = {
    bn: {
        badge: "প্রাইসিং",
        heading: "আপনার ব্যবসার জন্য সেরা প্ল্যান বেছে নিন",
        sub: "সবগুলো প্ল্যানে ফ্রি ট্রায়াল সুবিধা রয়েছে। যেকোনো সময় আপগ্রেড বা ডাউনগ্রেড করুন।",
        monthly: "মাসিক",
        yearly: "বার্ষিক (২ মাস ফ্রি)",
        monthUnit: "/মাস",
        yearUnit: "/বছর",
        getStarted: "শুরু করুন",
        popular: "সবচেয়ে জনপ্রিয়",
        plans: [
            {
                name: "পদ্মা",
                price: "বিনামূল্যে",
                yearlyPrice: "বিনামূল্যে",
                description: "ছোট ফার্মেসির জন্য আদর্শ।",
                features: [
                    "১ ডিভাইসে ব্যবহার",
                    "৩০০ পণ্য পর্যন্ত ইনভেন্টরি",
                    "প্রতিদিনের সেলস রিপোর্ট",
                    "বেসিক ক্রেডিট ম্যানেজমেন্ট",
                    "স্ট্যান্ডার্ড সাপোর্ট",
                ],
                highlight: false,
                href: "https://play.google.com/store/apps/details?id=com.medidesh.pharmacy",
            },
            {
                name: "মেঘনা",
                price: "৳৩৯৯",
                yearlyPrice: "৳৩,৯৯০",
                description: "বড় পরিসরের জন্য পূর্ণাঙ্গ সমাধান।",
                features: [
                    "সবকিছু পদ্মা প্ল্যানে আছে",
                    "৩ ডিভাইসে ব্যবহার",
                    "আনলিমিটেড পণ্য ইনভেন্টরি",
                    "উন্নত বিক্রয় বিশ্লেষণ ড্যাশবোর্ড",
                    "রোল-বেসড অ্যাক্সেস কন্ট্রোল",
                    "প্রায়োরিটি সাপোর্ট",
                ],
                highlight: true,
                href: "https://play.google.com/store/apps/details?id=com.medidesh.pharmacy",
            },
            {
                name: "যমুনা",
                price: "৳৯৯৯",
                yearlyPrice: "৳৯,৯৯০",
                description: "চেইন ফার্মেসি ও এন্টারপ্রাইজ গ্রাহকদের জন্য।",
                features: [
                    "সবকিছু মেঘনা প্ল্যানে আছে",
                    "৫+ ডিভাইস লিংক",
                    "মাল্টি-ব্রাঞ্চ ম্যানেজমেন্ট",
                    "কাস্টম ইন্টিগ্রেশন সুবিধা",
                    "ডেডিকেটেড অ্যাকাউন্ট ম্যানেজার",
                    "ভিআইপি সাপোর্ট + ওয়ানবোর্ডিং",
                ],
                highlight: false,
                href: "https://play.google.com/store/apps/details?id=com.medidesh.pharmacy",
            },
        ],
        payment: {
            title: "পেমেন্ট সিস্টেম",
            methods: ["বিকাশ", "নগদ", "রকেট", "ব্যাংক ট্রান্সফার"],
        },
    },
    en: {
        badge: "Pricing",
        heading: "Choose the best plan for your business",
        sub: "All plans include a free trial. Upgrade or downgrade anytime.",
        monthly: "Monthly",
        yearly: "Yearly (2 Months Free)",
        monthUnit: "/mo",
        yearUnit: "/yr",
        getStarted: "Get Started",
        popular: "Most Popular",
        plans: [
            {
                name: "Padma",
                price: "Free",
                yearlyPrice: "Free",
                description: "Ideal for small pharmacies.",
                features: [
                    "Use on 1 device",
                    "Inventory up to 300 products",
                    "Daily sales reports",
                    "Basic credit management",
                    "Standard support",
                ],
                highlight: false,
                href: "https://play.google.com/store/apps/details?id=com.medidesh.pharmacy",
            },
            {
                name: "Meghna",
                price: "৳399",
                yearlyPrice: "৳3,990",
                description: "Complete solution for larger operations.",
                features: [
                    "Everything in Padma plan",
                    "Use on 3 devices",
                    "Unlimited product inventory",
                    "Advanced sales analytics dashboard",
                    "Role-based access control",
                    "Priority support",
                ],
                highlight: true,
                href: "https://play.google.com/store/apps/details?id=com.medidesh.pharmacy",
            },
            {
                name: "Jamuna",
                price: "৳999",
                yearlyPrice: "৳9,990",
                description: "For chain pharmacies & enterprise customers.",
                features: [
                    "Everything in Meghna plan",
                    "5+ device linking",
                    "Multi-branch management",
                    "Custom integration options",
                    "Dedicated account manager",
                    "VIP support + onboarding",
                ],
                highlight: false,
                href: "https://play.google.com/store/apps/details?id=com.medidesh.pharmacy",
            },
        ],
        payment: {
            title: "Payment Methods",
            methods: ["bKash", "Nagad", "Rocket", "Bank Transfer"],
        },
    },
};

export default function PricingSection() {
    const { lang } = useLanguage();
    const t = T[lang];
    const [isYearly, setIsYearly] = useState(false);

    return (
        <section id="pricing" className="py-20 lg:py-32 bg-white">
            <div className="container mx-auto px-5 lg:px-10">
                <div className="max-w-xl mx-auto text-center mb-16 lg:mb-20">
                    <h2 className="text-4xl sm:text-5xl lg:text-[48px] font-black text-slate-900 mb-6 leading-[1.1] tracking-[-0.03em]">{t.heading}</h2>
                    <p className="text-slate-500 text-lg leading-relaxed mb-8">{t.sub}</p>

                    <div className="inline-flex items-center bg-slate-100 p-1 rounded-none border border-slate-200">
                        <button
                            onClick={() => setIsYearly(false)}
                            className={`px-6 py-2.5 text-[13px] font-bold transition-all rounded-none ${!isYearly ? "bg-white text-slate-900 shadow-sm" : "text-slate-500 hover:text-slate-700"}`}
                        >{t.monthly}</button>
                        <button
                            onClick={() => setIsYearly(true)}
                            className={`px-6 py-2.5 text-[13px] font-bold transition-all rounded-none ${isYearly ? "bg-white text-slate-900 shadow-sm" : "text-slate-500 hover:text-slate-700"}`}
                        >{t.yearly}</button>
                    </div>
                </div>

                <div className="grid md:grid-cols-3 gap-6 lg:gap-8 max-w-5xl mx-auto">
                    {t.plans.map((plan, idx) => (
                        <div key={idx} className={`relative p-8 lg:p-10 flex flex-col rounded-xl transition-all hover:-translate-y-1 ${
                            plan.highlight 
                                ? "bg-medidesh-teal-50 text-slate-900 shadow-xl border-2 border-medidesh-teal-400" 
                                : "bg-white border border-slate-200 shadow-sm hover:shadow-lg"
                        }`}>
                            {plan.highlight && (
                                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 inline-flex items-center gap-1.5 bg-medidesh-teal-500 text-white text-[11px] font-black px-4 py-1.5 rounded-full shadow-lg">
                                    <Star weight="fill" size={12} />
                                    {t.popular}
                                </div>
                            )}
                            <h3 className={`text-xl lg:text-2xl font-black mb-2 text-slate-900`}>{plan.name}</h3>
                            <p className={`text-[14px] mb-6 font-medium ${plan.highlight ? "text-slate-600" : "text-slate-500"}`}>{plan.description}</p>
                            <div className="mb-8">
                                <span className={`text-4xl lg:text-5xl font-black tracking-tighter text-slate-900`}>{isYearly ? plan.yearlyPrice : plan.price}</span>
                                {plan.price !== "Free" && plan.price !== "বিনামূল্যে" && (
                                    <span className={`text-sm font-bold ml-1 ${plan.highlight ? "text-slate-500" : "text-slate-400"}`}>
                                        {isYearly ? t.yearUnit : t.monthUnit}
                                    </span>
                                )}
                            </div>
                            <ul className="space-y-4 mb-8 flex-1">
                                {plan.features.map((f, i) => (
                                    <li key={i} className="flex items-start gap-3">
                                        <div className={`w-5 h-5 flex items-center justify-center rounded-full flex-shrink-0 mt-0.5 ${plan.highlight ? "bg-medidesh-teal-500/20" : "bg-medidesh-teal-50"}`}>
                                            <Check size={12} weight="bold" className={plan.highlight ? "text-medidesh-teal-600" : "text-medidesh-teal-600"} />
                                        </div>
                                        <span className={`text-[14px] font-medium text-slate-700`}>{f}</span>
                                    </li>
                                ))}
                            </ul>
                            <a href={plan.href} target="_blank" rel="noopener noreferrer"
                                className={`w-full text-center py-3.5 font-bold text-[14px] transition-all hover:-translate-y-px flex items-center justify-center gap-2 rounded-none ${
                                    plan.highlight
                                        ? "bg-medidesh-teal-500 hover:bg-medidesh-teal-600 text-white shadow-lg shadow-medidesh-teal-500/30"
                                        : "bg-slate-900 hover:bg-slate-800 text-white"
                                }`}
                            >
                                {t.getStarted}
                                <ArrowRight size={14} weight="bold" />
                            </a>
                        </div>
                    ))}
                </div>

                <div className="max-w-xl mx-auto mt-16 flex flex-col items-center">
                    <p className="text-[12px] text-slate-400 font-bold uppercase tracking-widest mb-4">{t.payment.title}</p>
                    <div className="flex flex-wrap items-center justify-center gap-8">
                        {/* bKash */}
                        <div className="flex flex-col items-center gap-1 group">
                            <div className="w-16 h-10 bg-white border border-slate-100 rounded-none flex items-center justify-center shadow-sm hover:shadow-md transition-all hover:-translate-y-0.5">
                                <span className="font-black text-[#E2136E] text-[18px] tracking-tighter uppercase italic">bkash</span>
                            </div>
                        </div>
                        {/* Nagad */}
                        <div className="flex flex-col items-center gap-1 group">
                            <div className="w-16 h-10 bg-white border border-slate-100 rounded-none flex items-center justify-center shadow-sm hover:shadow-md transition-all hover:-translate-y-0.5">
                                <span className="font-black text-[#F7941D] text-[16px] tracking-tighter uppercase italic">nagad</span>
                            </div>
                        </div>
                        {/* Rocket */}
                        <div className="flex flex-col items-center gap-1 group">
                            <div className="w-16 h-10 bg-white border border-slate-100 rounded-none flex items-center justify-center shadow-sm hover:shadow-md transition-all hover:-translate-y-0.5">
                                <span className="font-black text-[#8C3494] text-[16px] tracking-tighter uppercase italic">rocket</span>
                            </div>
                        </div>
                        {/* Mastercard */}
                        <div className="flex flex-col items-center gap-1 group">
                            <div className="w-16 h-10 bg-white border border-slate-100 rounded-none flex items-center justify-center shadow-sm hover:shadow-md transition-all hover:-translate-y-0.5 gap-0.5">
                                <div className="flex">
                                    <div className="w-3.5 h-3.5 rounded-full bg-[#EB001B] mix-blend-multiply opacity-90"></div>
                                    <div className="w-3.5 h-3.5 rounded-full bg-[#F79E1B] mix-blend-multiply -ml-1.5 opacity-90"></div>
                                </div>
                            </div>
                        </div>
                        {/* Bank Transfer */}
                        <div className="flex flex-col items-center gap-1 group">
                            <div className="w-16 h-10 bg-white border border-slate-100 rounded-none flex items-center justify-center shadow-sm hover:shadow-md transition-all hover:-translate-y-0.5">
                                <span className="font-black text-slate-400 text-[10px] uppercase text-center leading-none">Bank<br/>Transfer</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
