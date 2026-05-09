"use client";

import { Star, Quotes, GoogleLogo } from "@phosphor-icons/react/dist/ssr";
import { useLanguage } from "@/lib/i18n";

const T = {
    bn: {
        badge: "গ্রাহকদের মতামত",
        heading: "ফার্মেসি মালিকরা কী বলছেন",
        rating: "4.9/5",
        ratingLabel: "গুগল রিভিউ",
        testimonials: [
            { quote: "মেডিদেশ ব্যবহার করে প্রতিদিনের লাভ-ক্ষতি এক ক্লিকে দেখতে পাই। আগে হিসাব মিলত না, ক্যাশ শট পড়ত — এখন সেই সমস্যা নেই।", name: "মো: রহিম উদ্দিন", role: "মালিক, রহিম ফার্মেসি", avatar: "র" },
            { quote: "স্টক মেলানো ছিল সবচেয়ে বড় ঝামেলা। এখন ইনভেন্টরি স্বয়ংক্রিয়ভাবে আপডেট হয়। কোন ওষুধ কতটুকু শেষ হচ্ছে তা আগেই জানতে পারি।", name: "ফাহিম আহমেদ", role: "ম্যানেজার, মিলেনিয়াম কেয়ার", avatar: "ফ" },
            { quote: "সফটওয়্যারটা এত সহজ যে আমার দোকানের নতুন কর্মচারীও প্রথম দিনেই বিল করতে পেরেছে। মোবাইল অ্যাপটা সত্যিই দারুণ।", name: "জাহিদুল ইসলাম", role: "মালিক, জাহিদ মেডিকেল", avatar: "জ" },
            { quote: "আগে বাকি খাতায় কে কত দিয়েছে ট্র্যাক করাই কষ্ট ছিল। মেডিদেশে সব ডিজিটাল। গ্রাহক পেমেন্ট দিলে ইনস্ট্যান্ট আপডেট হয়ে যায়।", name: "সাইফুল ইসলাম", role: "মালিক, সাইফুল ফার্মেসি", avatar: "স" },
        ],
    },
    en: {
        badge: "Customer Reviews",
        heading: "What pharmacy owners say",
        rating: "4.9/5",
        ratingLabel: "Google Reviews",
        testimonials: [
            { quote: "With Medidesh, I can see daily profit and loss in one click. Before, accounts never matched, cash was always short — now that problem is gone.", name: "Md. Rahim Uddin", role: "Owner, Rahim Pharmacy", avatar: "R" },
            { quote: "Reconciling stock was the biggest hassle. Now inventory updates automatically. I can know in advance which medicines are running out.", name: "Fahim Ahmed", role: "Manager, Millennium Care", avatar: "F" },
            { quote: "The software is so easy that even a new employee at my shop could start billing on the first day. The mobile app is truly amazing.", name: "Zahidul Islam", role: "Owner, Zahid Medical", avatar: "Z" },
            { quote: "Before, tracking credit was painful. With Medidesh, everything is digital. When a customer pays, it updates instantly.", name: "Saiful Islam", role: "Owner, Saiful Pharmacy", avatar: "S" },
        ],
    },
};

export default function TestimonialsSection() {
    const { lang } = useLanguage();
    const t = T[lang];

    return (
        <section id="testimonials" className="py-20 lg:py-32 bg-slate-50 relative overflow-hidden">
            {/* Background Glows & Vectors */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-medidesh-teal-500/5 blur-[120px]"></div>
                <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-amber-500/5 blur-[120px]"></div>
                <svg className="absolute top-20 right-10 w-24 h-24 text-slate-200/50 rotate-12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m12 19-7-7 7-7"/><path d="M19 12H5"/></svg>
                <svg className="absolute bottom-20 left-10 w-32 h-32 text-slate-200/50 -rotate-12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="m16 12-4-4-4 4"/><path d="M12 16V8"/></svg>
            </div>

            <div className="container mx-auto px-5 lg:px-10 relative z-10">
                <div className="max-w-2xl mx-auto text-center mb-16 lg:mb-20">
                    <h2 className="text-4xl sm:text-5xl lg:text-[48px] font-black text-slate-900 mb-6 leading-[1.1] tracking-[-0.03em]">{t.heading}</h2>
                    <div className="inline-flex items-center gap-3 bg-white border border-slate-200 rounded-full px-5 py-2 shadow-sm">
                        <div className="flex gap-0.5">
                            {Array.from({ length: 5 }).map((_, i) => <Star key={i} weight="fill" size={16} className="text-amber-400" />)}
                        </div>
                        <span className="font-black text-slate-900 text-[15px]">{t.rating}</span>
                        <span className="text-slate-300">|</span>
                        <GoogleLogo weight="bold" size={16} className="text-slate-500" />
                        <span className="text-[13px] text-slate-600 font-bold">{t.ratingLabel}</span>
                    </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6 lg:gap-8 max-w-5xl mx-auto">
                    {t.testimonials.map((item, idx) => (
                        <div key={idx} className="bg-white border border-slate-200 rounded-xl p-8 lg:p-10 shadow-sm hover:shadow-md transition-shadow flex flex-col">
                            <div className="flex justify-between items-start mb-6">
                                <div className="flex gap-1">
                                    {Array.from({ length: 5 }).map((_, i) => <Star key={i} weight="fill" size={18} className="text-medidesh-teal-500" />)}
                                </div>
                                <Quotes weight="fill" size={32} className="text-slate-100" />
                            </div>
                            <p className="text-slate-700 text-[15px] lg:text-base leading-relaxed flex-1 mb-8 font-medium">&ldquo;{item.quote}&rdquo;</p>
                            <div className="flex items-center gap-4 pt-6 border-t border-slate-100">
                                <div className="w-12 h-12 rounded-full bg-medidesh-teal-50 border border-medidesh-teal-100 flex items-center justify-center text-medidesh-teal-600 font-black text-lg shadow-inner">{item.avatar}</div>
                                <div>
                                    <p className="font-black text-slate-900 text-[15px] mb-0.5">{item.name}</p>
                                    <p className="text-xs text-slate-500 font-semibold">{item.role}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
