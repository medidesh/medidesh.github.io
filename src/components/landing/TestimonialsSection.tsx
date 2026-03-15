import { Star, Quotes } from "@phosphor-icons/react/dist/ssr";

const testimonials = [
    {
        quote: "মেডিদেশ ব্যবহার করে প্রতিদিনের লাভ-ক্ষতি এক ক্লিকে দেখতে পাই। আগে হিসাব মিলত না, ক্যাশ শর্ট পড়ত — এখন সেই সমস্যা নেই।",
        name: "মো. রফিকুল ইসলাম",
        role: "মালিক, বিসমিল্লাহ ফার্মেসি, ঢাকা",
        initials: "র",
    },
    {
        quote: "স্টক মেলানো ছিল সবচেয়ে বড় ঝামেলা। এখন ইনভেন্টরি স্বয়ংক্রিয়ভাবে আপডেট হয়। কোন ওষুধ শেষ হচ্ছে তা আগেই জানতে পারি।",
        name: "আব্দুল কাদের",
        role: "মালিক, সেবা মেডিসিন কর্নার, চট্টগ্রাম",
        initials: "আ",
    },
    {
        quote: "সফটওয়্যারটা এত সহজ যে আমার দোকানের নতুন কর্মচারীও প্রথম দিনেই বিল করতে পেরেছে। মোবাইল অ্যাপটা সত্যিই দারুণ।",
        name: "সুমন আহমেদ",
        role: "মালিক, মা ফার্মেসি, সিলেট",
        initials: "সু",
    },
];

export default function TestimonialsSection() {
    return (
        <section className="py-24 lg:py-32 bg-white border-t border-slate-100 relative overflow-hidden">
            <svg
                className="absolute top-10 left-6 w-32 h-32 opacity-[0.04] pointer-events-none"
                viewBox="0 0 120 100"
                fill="none"
                aria-hidden="true"
            >
                <text x="0" y="90" fontSize="120" fill="#2E8B57" fontFamily="Georgia, serif">&ldquo;</text>
            </svg>
            <svg
                className="absolute right-10 bottom-10 opacity-[0.07] pointer-events-none hidden lg:block"
                width="130" height="130"
                aria-hidden="true"
            >
                {[0, 1, 2, 3, 4].map(r => [0, 1, 2, 3, 4].map(c => (
                    <circle key={`${r}-${c}`} cx={13 + c * 26} cy={13 + r * 26} r="3" fill="#2E8B57" />
                )))}
            </svg>
            <div className="container mx-auto px-6 lg:px-12 relative z-10">
                <div className="max-w-2xl mx-auto text-center mb-16">
                    <div className="inline-flex items-center gap-2 bg-amber-50 border border-amber-100 text-amber-700 text-xs font-semibold uppercase tracking-wider px-3.5 py-1.5 rounded mb-5 shadow-sm">
                        <Star size={12} weight="fill" className="text-amber-500" />
                        গ্রাহকদের মতামত
                    </div>
                    <h2 className="text-3xl lg:text-4xl font-black text-slate-900 mb-6 leading-tight tracking-tight">
                        ফার্মেসি মালিকরা কী বলছেন
                    </h2>
                    <div className="inline-flex items-center gap-2.5 bg-slate-50 border border-slate-100 rounded-full px-5 py-2">
                        <div className="flex items-center gap-1">
                            {[...Array(5)].map((_, i) => (
                                <Star key={i} weight="fill" size={14} className="text-amber-400" />
                            ))}
                        </div>
                        <span className="text-sm font-bold text-slate-700">৪.৯/৫</span>
                        <div className="w-px h-3 bg-slate-200 mx-1" />
                        <span className="text-sm text-slate-500 font-medium">গুগল রিভিউ</span>
                    </div>
                </div>

                <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    {testimonials.map((t, i) => (
                        <div
                            key={i}
                            className="bg-white border border-slate-100 rounded-2xl p-8 hover:border-medidesh-teal-200 hover:shadow-xl hover:shadow-slate-200/50 transition-all duration-500 relative group"
                        >
                            <Quotes weight="fill" size={32} className="text-slate-100 absolute top-6 right-8 group-hover:text-medidesh-teal-50 transition-colors" />
                            <div className="flex items-center gap-0.5 mb-6">
                                {[...Array(5)].map((_, j) => (
                                    <Star key={j} weight="fill" size={14} className="text-amber-400" />
                                ))}
                            </div>
                            <p className="text-slate-700 text-base leading-relaxed mb-8 italic">
                                &ldquo;{t.quote}&rdquo;
                            </p>
                            <div className="flex items-center gap-4 pt-6 border-t border-slate-50">
                                <div className="w-12 h-12 rounded-full bg-medidesh-teal-500 flex items-center justify-center text-white font-black text-base shadow-lg shadow-medidesh-teal-200 shrink-0">
                                    {t.initials}
                                </div>
                                <div className="overflow-hidden">
                                    <div className="font-bold text-slate-900 text-sm truncate">{t.name}</div>
                                    <div className="text-xs text-slate-500 truncate">{t.role}</div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
