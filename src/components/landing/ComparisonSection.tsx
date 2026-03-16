"use client";

import { Check, X, Trophy } from "@phosphor-icons/react/dist/ssr";
import { useLanguage } from "@/lib/i18n";

const rows = {
    bn: [
        { feature: "স্মার্ট ইনভেন্টরি ম্যানেজমেন্ট",     manual: false, medidesh: true, others: true  },
        { feature: "Android মোবাইল অ্যাপ",                manual: false, medidesh: true, others: false },
        { feature: "অফলাইনে সম্পূর্ণ কার্যকর",            manual: true,  medidesh: true, others: false },
        { feature: "স্বয়ংক্রিয় ডেটা ব্যাকআপ",            manual: false, medidesh: true, others: true  },
        { feature: "লো-স্টক ও মেয়াদোত্তীর্ণ সতর্কতা",   manual: false, medidesh: true, others: false },
        { feature: "বিনামূল্যে শুরু করা যায়",              manual: false, medidesh: true, others: false },
        { feature: "সহজ বাংলা ইন্টারফেস",                 manual: false, medidesh: true, others: false },
        { feature: "লাইভ কাস্টমার সাপোর্ট",               manual: false, medidesh: true, others: false },
    ],
    en: [
        { feature: "Smart Inventory Management",    manual: false, medidesh: true, others: true  },
        { feature: "Android Mobile App",            manual: false, medidesh: true, others: false },
        { feature: "Fully functional offline",      manual: true,  medidesh: true, others: false },
        { feature: "Automatic data backup",         manual: false, medidesh: true, others: true  },
        { feature: "Low-stock & expiry alerts",     manual: false, medidesh: true, others: false },
        { feature: "Start for free",                manual: false, medidesh: true, others: false },
        { feature: "Simple, easy interface",        manual: false, medidesh: true, others: false },
        { feature: "Live customer support",         manual: false, medidesh: true, others: false },
    ],
};

const header = {
    bn: { badge: "তুলনা", heading: "কেন মেডিদেশ সেরা পছন্দ?", sub: "ম্যানুয়াল খাতা ও অন্যান্য সফটওয়্যারের সাথে তুলনা দেখুন।", col1: "ম্যানুয়াল", col3: "অন্যান্য" },
    en: { badge: "Compare", heading: "Why is Medidesh the best choice?", sub: "See how it compares to manual ledgers and other software.", col1: "Manual", col3: "Others" },
};

export default function ComparisonSection() {
    const { lang } = useLanguage();
    const t = header[lang];
    const list = rows[lang];

    return (
        <section id="comparison" className="py-20 lg:py-28 bg-slate-50 border-t border-slate-100">
            <div className="container mx-auto px-6 lg:px-12">
                <div className="max-w-2xl mx-auto text-center mb-12">
                    <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded bg-white border border-slate-200 text-slate-600 text-xs font-semibold uppercase tracking-wider mb-5 shadow-sm">
                        <Trophy size={13} weight="fill" className="text-amber-500" />
                        {t.badge}
                    </div>
                    <h2 className="text-3xl lg:text-4xl font-black text-slate-900 mb-4 leading-tight">{t.heading}</h2>
                    <p className="text-slate-500 text-lg">{t.sub}</p>
                </div>

                <div className="max-w-3xl mx-auto overflow-x-auto">
                    <table className="w-full border-collapse min-w-[520px]">
                        <thead>
                            <tr>
                                <th className="text-left py-3 px-4 text-xs font-semibold text-slate-500 uppercase tracking-wider w-1/2" />
                                <th className="py-3 px-4 text-center text-xs font-semibold text-slate-400 uppercase tracking-wider">{t.col1}</th>
                                <th className="py-3 px-4 text-center bg-medidesh-teal-500 text-white text-sm font-black rounded-t">Medidesh</th>
                                <th className="py-3 px-4 text-center text-xs font-semibold text-slate-400 uppercase tracking-wider">{t.col3}</th>
                            </tr>
                        </thead>
                        <tbody className="bg-white rounded overflow-hidden">
                            {list.map((row, i) => (
                                <tr key={i} className="border-b border-slate-100 last:border-0">
                                    <td className="py-3.5 px-4 text-sm font-medium text-slate-700">{row.feature}</td>
                                    <td className="py-3.5 px-4 text-center">
                                        {row.manual ? <Check weight="bold" size={16} className="text-green-500 mx-auto" /> : <X weight="bold" size={16} className="text-slate-200 mx-auto" />}
                                    </td>
                                    <td className="py-3.5 px-4 text-center bg-medidesh-teal-50/60">
                                        <Check weight="bold" size={18} className="text-medidesh-teal-600 mx-auto" />
                                    </td>
                                    <td className="py-3.5 px-4 text-center">
                                        {row.others ? <Check weight="bold" size={16} className="text-green-500 mx-auto" /> : <X weight="bold" size={16} className="text-slate-200 mx-auto" />}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </section>
    );
}
