"use client";

import {
    Monitor,
    Eye,
    Tag,
    WifiSlash,
    Database,
    ShieldCheck,
    ArrowRight,
    SparkleIcon,
    RocketLaunch,
    Headset,
    CloudSlash,
    BellRinging,
} from "@phosphor-icons/react/dist/ssr";

const points = [
    {
        problem: "প্রযুক্তি ভীতি ও জটিল ইন্টারফেস",
        solution: "এতটাই সহজ যে কোনো প্রশিক্ষণ ছাড়াই সরাসরি ব্যবহার শুরু করা যাবে — গ্রামের দোকান থেকে শহরের বড় ফার্মেসি পর্যন্ত।",
        icon: Monitor,
        accent: "bg-blue-50 text-blue-600 border-blue-100",
    },
    {
        problem: "হিসাবে অস্বচ্ছতা ও মালের অপচয়",
        solution: "রিয়েল-টাইম স্টক হিসাব যা চুরি ও লোকসান শূন্যে নামিয়ে আনে। বাকি খাতাও ডিজিটাল।",
        icon: Eye,
        accent: "bg-violet-50 text-violet-600 border-violet-100",
    },
    {
        problem: "সফটওয়্যারে উচ্চ খরচের ভুল ধারণা",
        solution: "বিনামূল্যে শুরু করুন — পদ্মা প্ল্যান চিরতরে ফ্রি। মাসে মাত্র ৳৩৯৯ থেকে প্রিমিয়াম সুবিধা।",
        icon: Tag,
        accent: "bg-medidesh-teal-50 text-medidesh-teal-600 border-medidesh-teal-100",
    },
    {
        problem: "ইনভেন্টরিতে ওষুধ যোগ করার ঝামেলা",
        solution: "বাংলাদেশের হাজার হাজার জেনেরিক ও ব্র্যান্ডের ওষুধের তালিকা আগে থেকেই যুক্ত আছে — শুধু সার্চ করে অ্যাড করে নিন।",
        icon: Database,
        accent: "bg-indigo-50 text-indigo-600 border-indigo-100",
    },
    {
        problem: "অবিশ্বস্ত সফটওয়্যার ও ডেটা হারানোর আতঙ্ক",
        solution: "ব্যাংক-গ্রেড এনক্রিপশন ও প্রতিদিনের স্বয়ংক্রিয় ব্যাকআপে আপনার ব্যবসার ডেটা সর্বদা নিরাপদ।",
        icon: ShieldCheck,
        accent: "bg-emerald-50 text-emerald-600 border-emerald-100",
    },
    {
        problem: "ইন্টারনেট বা সার্ভার ডাউন হওয়ার ভয়",
        solution: "মেডিদেশ সর্বদা সচল—ইন্টারনেট না থাকলেও বা সার্ভার সমস্যায় আপনার সেলস ও বিলিং বন্ধ হবে না।",
        icon: CloudSlash,
        accent: "bg-red-50 text-red-600 border-red-100",
    },
    {
        problem: "সফটওয়্যারের ধীরগতি ও হ্যাং হওয়া",
        solution: "অত্যন্ত ফাস্ট ও অপ্টিমাইজড কোড, যা পুরনো মোবাইল বা কম দামী কম্পিউটারেও চলে সুপারফাস্ট।",
        icon: RocketLaunch,
        accent: "bg-orange-50 text-orange-600 border-orange-100",
    },
    {
        problem: "সাপোর্টের অভাব ও কারিগরি সমস্যা",
        solution: "যেকোনো প্রয়োজনে আমাদের দক্ষ সাপোর্ট টিম সরাসরি আপনার পাশে আছে। সমস্যা আপনার, সমাধান আমাদের।",
        icon: Headset,
        accent: "bg-cyan-50 text-cyan-600 border-cyan-100",
    },
    {
        problem: "ওষুধের মেয়াদ নিয়ে দুশ্চিন্তা",
        solution: "অটোমেটিক এক্সপায়ারি ট্র্যাকিং যা ওষুধের মেয়াদ শেষ হওয়ার কয়েক মাস আগেই আপনাকে অ্যালার্ট দেবে।",
        icon: BellRinging,
        accent: "bg-pink-50 text-pink-600 border-pink-100",
    },
];

export default function ProblemSolution() {
    return (
        <section id="solutions" className="py-20 lg:py-28 bg-slate-50 border-y border-slate-100 relative overflow-hidden">
            {/* Wavy line decoration */}
            <svg
                className="absolute top-0 left-0 w-full opacity-[0.04] pointer-events-none"
                viewBox="0 0 1440 60"
                fill="none"
                preserveAspectRatio="none"
                aria-hidden="true"
            >
                <path
                    d="M0,30 C180,60 360,0 540,30 C720,60 900,0 1080,30 C1260,60 1380,20 1440,30"
                    stroke="#2E8B57"
                    strokeWidth="3"
                    fill="none"
                />
            </svg>
            {/* Blob top-right */}
            <svg
                className="absolute -top-16 -right-16 w-64 h-64 opacity-[0.05] pointer-events-none"
                viewBox="0 0 260 260"
                fill="none"
                aria-hidden="true"
            >
                <path
                    d="M130,20 C180,5 240,50 250,110 C260,170 220,230 160,245 C100,260 40,220 20,160 C0,100 30,40 80,20 C100,12 110,25 130,20 Z"
                    fill="#2E8B57"
                />
            </svg>
            <div className="container mx-auto px-6 lg:px-12">
                {/* Section header */}
                <div className="max-w-2xl mx-auto text-center mb-16">
                    <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded bg-white border border-slate-200 text-slate-600 text-xs font-semibold uppercase tracking-wider mb-5 shadow-sm">
                        <SparkleIcon size={13} weight="fill" className="text-medidesh-teal-500" />
                        কেন মেডিদেশ
                    </div>
                    <h2 className="text-3xl lg:text-4xl font-black text-slate-900 mb-4 leading-tight">
                        ডিজিটাল সিস্টেমের {" "}
                        <span className="text-medidesh-teal-500">সমস্যাগুলোর</span> সমাধান
                    </h2>
                    <p className="text-slate-500 text-lg leading-relaxed">
                        টেকনিক্যাল ভয় , হার্ডওয়্যার খরচ , বিশ্বস্ততা , উচ্চমূল্য — সব ঝামেলার এক সহজ সমাধান: মেডিদেশ।
                    </p>
                </div>

                {/* Cards grid */}
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-5xl mx-auto">
                    {points.map((item, idx) => (
                        <div
                            key={idx}
                            className="bg-white p-6 rounded border border-slate-100 hover:border-medidesh-teal-200 hover:shadow-lg hover:shadow-medidesh-teal-500/5 transition-all duration-300 group"
                        >
                            <div className={`w-11 h-11 rounded ${item.accent} border flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300`}>
                                <item.icon size={22} weight="duotone" />
                            </div>
                            <h3 className="font-bold text-slate-800 text-base mb-2 leading-snug">
                                {item.problem}
                            </h3>
                            <p className="text-sm text-slate-500 leading-relaxed">
                                {item.solution}
                            </p>
                        </div>
                    ))}
                </div>

                {/* Bottom CTA strip */}
                <div className="mt-12 max-w-xl mx-auto text-center">
                    <a
                        href="#features"
                        className="inline-flex items-center gap-2 text-medidesh-teal-600 font-semibold text-sm hover:gap-3 transition-all duration-200"
                    >
                        সব ফিচার দেখুন
                        <ArrowRight size={16} weight="bold" />
                    </a>
                </div>
            </div>
        </section>
    );
}
