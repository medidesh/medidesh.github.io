"use client";

import { useLanguage } from "@/lib/i18n";
import { ShieldCheck, Truck, Certificate, Headset } from "@phosphor-icons/react/dist/ssr";

const T = {
    bn: {
        benefits: [
            { 
                icon: <ShieldCheck size={32} weight="duotone" className="text-medidesh-teal-500" />,
                title: "১০০% অরিজিনাল", 
                desc: "সরাসরি অনুমোদিত ডিস্ট্রিবিউটর থেকে সংগ্রহ করা সেরা ব্র্যান্ডের অরিজিনাল প্রোডাক্ট।" 
            },
            { 
                icon: <Truck size={32} weight="duotone" className="text-medidesh-teal-500" />,
                title: "নিরাপদ ডেলিভারি", 
                desc: "সারা বাংলাদেশে বিশ্বস্ত কুরিয়ারের মাধ্যমে দ্রুততম সময়ে নিরাপদ ডেলিভারি।" 
            },
            { 
                icon: <Certificate size={32} weight="duotone" className="text-medidesh-teal-500" />,
                title: "ব্র্যান্ড ওয়ারেন্টি", 
                desc: "যেকোনো অনাকাঙ্ক্ষিত সমস্যায় নিশ্চিতভাবে ব্র্যান্ডের আসল ওয়ারেন্টি সুবিধা।" 
            },
            { 
                icon: <Headset size={32} weight="duotone" className="text-medidesh-teal-500" />,
                title: "সেটআপ সাপোর্ট", 
                desc: "প্রিন্টার ও স্ক্যানার ইনস্টলেশন এবং ব্যবহারের যেকোনো প্রয়োজনে লাইভ সাপোর্ট।" 
            }
        ],
    },
    en: {
        benefits: [
            { 
                icon: <ShieldCheck size={32} weight="duotone" className="text-medidesh-teal-500" />,
                title: "100% Genuine", 
                desc: "Factory-sealed original products sourced directly from authorized brand distributors." 
            },
            { 
                icon: <Truck size={32} weight="duotone" className="text-medidesh-teal-500" />,
                title: "Secure Delivery", 
                desc: "Fastest and completely secure delivery across Bangladesh via trusted couriers." 
            },
            { 
                icon: <Certificate size={32} weight="duotone" className="text-medidesh-teal-500" />,
                title: "Brand Warranty", 
                desc: "Ultimate peace of mind with genuine and easily claimable official brand warranties." 
            },
            { 
                icon: <Headset size={32} weight="duotone" className="text-medidesh-teal-500" />,
                title: "Setup Support", 
                desc: "Dedicated live technical support for hassle-free printer and scanner installations." 
            }
        ],
    }
};

export default function StoreBenefits() {
    const { lang } = useLanguage();
    const t = T[lang];

    return (
        <section className="py-16 lg:py-24 bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800">
            <div className="container mx-auto px-6 lg:px-12 max-w-[1400px]">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">
                    {t.benefits.map((benefit, i) => (
                        <div key={i} className="flex flex-col items-center text-center group cursor-default">
                            <div className="w-16 h-16 rounded-full bg-medidesh-teal-50 dark:bg-medidesh-teal-900/20 flex items-center justify-center mb-6 border border-medidesh-teal-100 dark:border-medidesh-teal-800/50 group-hover:bg-medidesh-teal-100 dark:group-hover:bg-medidesh-teal-900/40 transition-colors duration-300">
                                {benefit.icon}
                            </div>
                            <h3 className="text-lg font-black text-slate-900 dark:text-white mb-3 tracking-tight">
                                {benefit.title}
                            </h3>
                            <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed max-w-[280px]">
                                {benefit.desc}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
