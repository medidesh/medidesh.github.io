"use client";

import { useState } from "react";
import { Check, Star, ArrowRight } from "@phosphor-icons/react/dist/ssr";
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
                description: "ছোট ফার্মেসির ডিজিটাল যাত্রা শুরু করার জন্য।",
                features: [
                    "১টি ফার্মেসি",
                    "১ জন ব্যবহারকারী (মালিক), ১টি ডিভাইস",
                    "বেসিক ইনভেন্টরি ম্যানেজমেন্ট",
                    "বেসিক বিক্রয় ও ক্রয় ট্র্যাকিং",
                    "মোবাইল অ্যাপ অ্যাক্সেস",
                    "ইমেইল সাপোর্ট",
                ],
                highlight: false,
                href: "https://play.google.com/store/apps/details?id=com.medidesh.pharmacy",
            },
            {
                name: "মেঘনা",
                price: "৳২৯৯",
                yearlyPrice: "৳২,৯৯০",
                description: "মাঝারি বা বড় ফার্মেসির জন্য সব সুবিধা এক জায়গায়।",
                features: [
                    "১টি ফার্মেসি",
                    "৩ জন ব্যবহারকারী, ২টি ডিভাইস",
                    "পূর্ণ ইনভেন্টরি ও অ্যাকাউন্ট ম্যানেজমেন্ট",
                    "মেয়াদোত্তীর্ণ ও লো-স্টক সতর্কতা",
                    "রিপোর্ট ডাউনলোড (PDF, Excel, CSV)",
                    "থার্মাল প্রিন্টিং সাপোর্ট",
                    "দ্রুত কাস্টমার সাপোর্ট",
                ],
                highlight: true,
                href: "https://play.google.com/store/apps/details?id=com.medidesh.pharmacy",
            },
            {
                name: "যমুনা",
                price: "৳৭৯৯",
                yearlyPrice: "৳৭,৯৯০",
                description: "বড় চেইন ফার্মেসি ও দ্রুততম সাপোর্টের জন্য।",
                features: [
                    "১টি ফার্মেসি",
                    "৫ জন ব্যবহারকারী, ৩টি ডিভাইস",
                    "উন্নত ইনভেন্টরি, বাকি খাতা ও সম্পূর্ণ অ্যাকাউন্টিং",
                    "অ্যাডভান্সড রিপোর্ট ও ব্যবসায়িক বিশ্লেষণ",
                    "ক্রেতাদের ওষুধের চাহিদার ডাটা বিশ্লেষণ",
                    "বিজ্ঞাপনমুক্ত অভিজ্ঞতা",
                    "প্রায়োরিটি কাস্টমার সাপোর্ট",
                ],
                highlight: false,
                href: "https://play.google.com/store/apps/details?id=com.medidesh.pharmacy",
            },
        ],
        payment: {
            title: "আমরা যেসব মাধ্যমে পেমেন্ট গ্রহণ করি",
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
                description: "Ideal for starting your digital journey.",
                features: [
                    "1 Pharmacy",
                    "1 User (Owner), 1 Device",
                    "Basic Inventory Management",
                    "Basic Sales & Purchase Tracking",
                    "Mobile App Access",
                    "Email Support",
                ],
                highlight: false,
                href: "https://play.google.com/store/apps/details?id=com.medidesh.pharmacy",
            },
            {
                name: "Meghna",
                price: "৳299",
                yearlyPrice: "৳2,990",
                description: "All features in one place for medium/large pharmacies.",
                features: [
                    "1 Pharmacy",
                    "3 Users, 2 Devices",
                    "Full Inventory & Account Management",
                    "Expiry & Low-Stock Alerts",
                    "Report Download (PDF, Excel, CSV)",
                    "Thermal Printing Support",
                    "Fast Customer Support",
                ],
                highlight: true,
                href: "https://play.google.com/store/apps/details?id=com.medidesh.pharmacy",
            },
            {
                name: "Jamuna",
                price: "৳799",
                yearlyPrice: "৳7,990",
                description: "For large chain pharmacies and fastest support.",
                features: [
                    "1 Pharmacy",
                    "5 Users, 3 Devices",
                    "Advanced Inventory, Credit & Accounting",
                    "Advanced Reports & Analytics",
                    "Customer Medicine Demand Analysis",
                    "Ad-Free Experience",
                    "Priority Customer Support",
                ],
                highlight: false,
                href: "https://play.google.com/store/apps/details?id=com.medidesh.pharmacy",
            },
        ],
        payment: {
            title: "We accept all major payment methods",
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

                <div className="grid md:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto">
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
                            <p className={`text-[14px] mb-6 font-medium leading-relaxed ${plan.highlight ? "text-slate-600" : "text-slate-500"}`}>{plan.description}</p>
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
                                        <span className={`text-[14px] font-medium text-slate-700 leading-tight`}>{f}</span>
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
                    <p className="text-[12px] text-slate-400 font-bold uppercase tracking-widest mb-6">{t.payment.title}</p>
                    <div className="flex flex-wrap items-center justify-center gap-8 md:gap-10 opacity-90 hover:opacity-100 transition-opacity duration-300">
                        {/* bKash */}
                        <img 
                            src="/assets/payment/bkash.png" 
                            alt="bKash" 
                            className="h-8 md:h-10 w-auto object-contain transition-all hover:scale-105 duration-300"
                        />
                        {/* Nagad */}
                        <img 
                            src="/assets/payment/nagad.png" 
                            alt="Nagad" 
                            className="h-8 md:h-10 w-auto object-contain transition-all hover:scale-105 duration-300"
                        />
                        {/* Rocket */}
                        <img 
                            src="/assets/payment/rocket.png" 
                            alt="Rocket" 
                            className="h-8 md:h-10 w-auto object-contain transition-all hover:scale-105 duration-300"
                        />
                        {/* Mastercard */}
                        <img 
                            src="/assets/payment/mastercard.png" 
                            alt="Mastercard" 
                            className="h-6 md:h-8 w-auto object-contain transition-all hover:scale-105 duration-300"
                        />
                        {/* Bank Transfer */}
                        <div className="flex items-center justify-center transition-all hover:scale-105 duration-300">
                            <span className="font-black text-slate-400 text-[10px] md:text-[11px] uppercase text-center leading-none tracking-wider">Bank<br/>Transfer</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
