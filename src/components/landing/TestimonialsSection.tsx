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
        <section className="py-20 lg:py-28 bg-white border-t border-slate-100 relative overflow-hidden">
            {/* Quote mark large decoration */}
            <svg
                className="absolute top-10 left-6 w-32 h-32 opacity-[0.04] pointer-events-none"
                viewBox="0 0 120 100"
                fill="none"
                aria-hidden="true"
            >
                <text x="0" y="90" fontSize="120" fill="#2E8B57" fontFamily="Georgia, serif">&ldquo;</text>
            </svg>
            {/* Dotted cluster right */}
            <svg
                className="absolute right-10 bottom-10 opacity-[0.07] pointer-events-none hidden lg:block"
                width="130" height="130"
                aria-hidden="true"
            >
                {[0,1,2,3,4].map(r => [0,1,2,3,4].map(c => (
                    <circle key={`${r}-${c}`} cx={13 + c * 26} cy={13 + r * 26} r="3" fill="#2E8B57" />
                )))}
            </svg>
            <div className="container mx-auto px-6 lg:px-12">
                {/* Header */}
                <div className="max-w-2xl mx-auto text-center mb-14">
                    <div className="inline-flex items-center gap-2 bg-amber-50 border border-amber-100 text-amber-700 text-xs font-semibold uppercase tracking-wider px-3.5 py-1.5 rounded mb-5">
                        <Star size={12} weight="fill" className="text-amber-500" />
                        গ্রাহকদের মতামত
                    </div>
                    <h2 className="text-3xl lg:text-4xl font-black text-slate-900 mb-4 leading-tight">
                        ফার্মেসি মালিকরা কী বলছেন
                    </h2>
                    <div className="inline-flex items-center gap-2.5 bg-slate-50 border border-slate-100 rounded px-4 py-2">
                        <div className="flex items-center gap-0.5">
                            {[...Array(5)].map((_, i) => (
                                <Star key={i} weight="fill" size={14} className="text-amber-400" />
                            ))}
                        </div>
                        <span className="text-sm font-bold text-slate-700">৪.৯/৫</span>
                        <span className="text-sm text-slate-500">গুগল রিভিউ</span>
                    </div>
                </div>

                {/* Cards */}
                <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
                    {testimonials.map((t, i) => (
                        <div
                            key={i}
                            className="bg-slate-50 border border-slate-100 rounded p-6 hover:border-medidesh-teal-200 hover:shadow-md transition-all duration-300 relative"
                        >
                            <Quotes weight="fill" size={28} className="text-slate-200 absolute top-5 right-5" />
                            <div className="flex items-center gap-0.5 mb-4">
                                {[...Array(5)].map((_, j) => (
                                    <Star key={j} weight="fill" size={13} className="text-amber-400" />
                                ))}
                            </div>
                            <p className="text-slate-700 text-sm leading-relaxed mb-6">
                                &ldquo;{t.quote}&rdquo;
                            </p>
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded bg-medidesh-teal-500 flex items-center justify-center text-white font-bold text-sm shrink-0">
                                    {t.initials}
                                </div>
                                <div>
                                    <div className="font-bold text-slate-900 text-sm">{t.name}</div>
                                    <div className="text-xs text-slate-500">{t.role}</div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
