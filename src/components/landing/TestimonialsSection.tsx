"use client";

import { Quotes, Star } from "@phosphor-icons/react/dist/ssr";
import { useLanguage } from "@/lib/i18n";
import SectionBadge from "../ui/SectionBadge";

const T = {
    bn: {
        badge: "গ্রাহকদের মতামত",
        heading: "ফার্মেসি মালিকরা কী বলছেন",
        ratingLabel: "গুগল রিভিউ",
        testimonials: [
            { quote: "মেডিদেশ ব্যবহার করে প্রতিদিনের লাভ-ক্ষতি এক ক্লিকে দেখতে পাই। আগে হিসাব মিলত না, ক্যাশ শর্ট পড়ত — এখন সেই সমস্যা নেই।",                                   name: "মো. রফিকুল ইসলাম", role: "মালিক, বিসমিল্লাহ ফার্মেসি, ঢাকা",         initials: "র"  },
            { quote: "স্টক মেলানো ছিল সবচেয়ে বড় ঝামেলা। এখন ইনভেন্টরি স্বয়ংক্রিয়ভাবে আপডেট হয়। কোন ওষুধ শেষ হচ্ছে তা আগেই জানতে পারি।",                                    name: "আব্দুল কাদের",     role: "মালিক, সেবা মেডিসিন কর্নার, চট্টগ্রাম", initials: "আ" },
            { quote: "সফটওয়্যারটা এত সহজ যে আমার দোকানের নতুন কর্মচারীও প্রথম দিনেই বিল করতে পেরেছে। মোবাইল অ্যাপটা সত্যিই দারুণ।",                                             name: "সুমন আহমেদ",       role: "মালিক, মা ফার্মেসি, সিলেট",              initials: "সু" },
        ],
    },
    en: {
        badge: "Customer Reviews",
        heading: "What pharmacy owners are saying",
        ratingLabel: "Google Reviews",
        testimonials: [
            { quote: "Using Medidesh, I can see daily profits and losses in one click. Before, accounts wouldn't balance, cash would run short — those problems are gone now.",            name: "Md. Rafiqul Islam", role: "Owner, Bismillah Pharmacy, Dhaka",      initials: "R" },
            { quote: "Matching stock used to be the biggest headache. Now inventory updates automatically. I can know in advance which medicine is running out.",                          name: "Abdul Kader",       role: "Owner, Seba Medicine Corner, Chittagong", initials: "A" },
            { quote: "The software is so easy that my shop's new employee could bill on the very first day. The mobile app is truly amazing.",                                             name: "Sumon Ahmed",       role: "Owner, Maa Pharmacy, Sylhet",           initials: "S" },
        ],
    },
};

export default function TestimonialsSection() {
    const { lang } = useLanguage();
    const t = T[lang];

    return (
        <section className="py-24 lg:py-32 bg-white border-t border-slate-100 relative overflow-hidden">
            <svg className="absolute top-10 left-6 w-32 h-32 opacity-[0.04] pointer-events-none" viewBox="0 0 120 100" fill="none" aria-hidden="true">
                <text x="0" y="90" fontSize="120" fill="#2E8B57" fontFamily="Georgia, serif">&ldquo;</text>
            </svg>
            <div className="container mx-auto px-6 lg:px-12 relative z-10">
                <div className="max-w-2xl mx-auto text-center mb-16">
                    <SectionBadge icon={Star} text={t.badge} />
                    <h2 className="text-3xl lg:text-5xl font-black text-slate-900 mb-6 leading-tight tracking-tight">{t.heading}</h2>
                    <div className="inline-flex items-center gap-2.5 bg-slate-50 border border-slate-100 rounded px-5 py-2">
                        <div className="flex items-center gap-1">
                            {[...Array(5)].map((_, i) => <Star key={i} weight="fill" size={14} className="text-amber-400" />)}
                        </div>
                        <span className="text-sm font-bold text-slate-700">4.9/5</span>
                        <div className="w-px h-3 bg-slate-200 mx-1" />
                        <span className="text-sm text-slate-500 font-medium">{t.ratingLabel}</span>
                    </div>
                </div>

                <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    {t.testimonials.map((item, i) => (
                        <div key={i} className="bg-white border border-slate-100 rounded p-8 hover:border-medidesh-teal-200 hover:shadow-xl hover:shadow-slate-200/50 transition-all duration-500 relative group">
                            <Quotes weight="fill" size={32} className="text-slate-100 absolute top-6 right-8 group-hover:text-medidesh-teal-50 transition-colors" />
                            <div className="flex items-center gap-0.5 mb-6">
                                {[...Array(5)].map((_, j) => <Star key={j} weight="fill" size={14} className="text-amber-400" />)}
                            </div>
                            <p className="text-slate-700 text-base leading-relaxed mb-8 italic">&ldquo;{item.quote}&rdquo;</p>
                            <div className="flex items-center gap-4 pt-6 border-t border-slate-50">
                                <div className="w-12 h-12 rounded bg-medidesh-teal-500 flex items-center justify-center text-white font-black text-base shadow-lg shadow-medidesh-teal-200 shrink-0">
                                    {item.initials}
                                </div>
                                <div className="overflow-hidden">
                                    <div className="font-bold text-slate-900 text-sm truncate">{item.name}</div>
                                    <div className="text-xs text-slate-500 truncate">{item.role}</div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
