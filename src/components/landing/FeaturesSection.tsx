import {
    Lightning,
    UsersThreeIcon,
    Package,
    WarningCircle,
    Printer,
    CloudCheck,
    Scroll,
    ArrowUUpLeft,
    ChartBar,
    DeviceMobile,
} from "@phosphor-icons/react/dist/ssr";

const features = [
    {
        icon: Lightning,
        title: "দ্রুত পয়েন্ট অব সেল",
        desc: "বারকোড স্ক্যানার ও শর্টকাট কি দিয়ে সেকেন্ডের মধ্যে বিল তৈরি করুন।",
        color: "text-medidesh-teal-600",
        bg: "bg-medidesh-teal-50",
    },
    {
        icon: Package,
        title: "রিয়েল-টাইম ইনভেন্টরি",
        desc: "প্রতিটি ওষুধের স্টক লাইভ ট্র্যাক করুন — ঘাটতি বা বাড়তি স্টক নিয়ে আর কোনো দুশ্চিন্তা থাকবে না।",
        color: "text-orange-600",
        bg: "bg-orange-50",
    },
    {
        icon: WarningCircle,
        title: "মেয়াদোত্তীর্ণ সতর্কতা",
        desc: "ওষুধের মেয়াদ শেষের ৩ মাস আগেই স্বয়ংক্রিয় নোটিফিকেশন পান।",
        color: "text-red-600",
        bg: "bg-red-50",
    },
    {
        icon: UsersThreeIcon,
        title: "মাল্টি-ইউজার অ্যাক্সেস",
        desc: "মালিক, ম্যানেজার ও স্টাফের জন্য আলাদা অ্যাকাউন্ট ও অনুমতি সেট করুন।",
        color: "text-blue-600",
        bg: "bg-blue-50",
    },
    {
        icon: Printer,
        title: "থার্মাল প্রিন্টিং",
        desc: "যেকোনো থার্মাল বা সাধারণ প্রিন্টারে সঙ্গে সঙ্গে ইনভয়েস প্রিন্ট করুন।",
        color: "text-purple-600",
        bg: "bg-purple-50",
    },
    {
        icon: CloudCheck,
        title: "ক্লাউড ব্যাকআপ ও সিঙ্ক",
        desc: "যেকোনো জায়গা থেকে আপনার দোকানের রিপোর্ট ও ডেটা দেখুন।",
        color: "text-cyan-600",
        bg: "bg-cyan-50",
    },
    {
        icon: Scroll,
        title: "বাকি খাতা",
        desc: "কাস্টমার ও সাপ্লায়ারের বকেয়া হিসাব স্বয়ংক্রিয়ভাবে সংরক্ষিত থাকে।",
        color: "text-teal-600",
        bg: "bg-teal-50",
    },
    {
        icon: ChartBar,
        title: "বিক্রয় রিপোর্ট ও বিশ্লেষণ",
        desc: "দৈনিক, সাপ্তাহিক ও মাসিক বিক্রয় রিপোর্ট PDF বা Excel-এ ডাউনলোড করুন।",
        color: "text-indigo-600",
        bg: "bg-indigo-50",
    },
    {
        icon: ArrowUUpLeft,
        title: "সহজ রিটার্ন ব্যবস্থাপনা",
        desc: "পণ্য ফেরত বা পরিবর্তনের হিসাব সারুন মাত্র কয়েক সেকেন্ডে।",
        color: "text-rose-600",
        bg: "bg-rose-50",
    },
    {
        icon: DeviceMobile,
        title: "মোবাইল অ্যাপ",
        desc: "অ্যান্ড্রয়েড ফোনে পূর্ণাঙ্গ POS ও ইনভেন্টরি ম্যানেজমেন্ট — অফলাইনেও কাজ করে।",
        color: "text-green-600",
        bg: "bg-green-50",
    },
];

export default function FeaturesSection() {
    return (
        <section id="features" className="py-20 lg:py-28 bg-white relative overflow-hidden">
            {/* Dashed circle decoration */}
            <svg
                className="absolute -right-24 top-1/3 w-64 h-64 opacity-[0.05] pointer-events-none"
                viewBox="0 0 256 256"
                fill="none"
                aria-hidden="true"
            >
                <circle cx="128" cy="128" r="110" stroke="#2E8B57" strokeWidth="2" strokeDasharray="8 6" />
                <circle cx="128" cy="128" r="80" stroke="#2E8B57" strokeWidth="1.5" strokeDasharray="5 5" />
                <circle cx="128" cy="128" r="16" fill="#2E8B57" opacity="0.3" />
            </svg>
            {/* Dotted grid left */}
            <svg
                className="absolute left-8 bottom-20 opacity-[0.07] pointer-events-none hidden lg:block"
                width="100" height="100"
                aria-hidden="true"
            >
                {[0, 1, 2, 3].map(r => [0, 1, 2, 3].map(c => (
                    <circle key={`${r}-${c}`} cx={12 + c * 25} cy={12 + r * 25} r="2.5" fill="#2E8B57" />
                )))}
            </svg>
            <div className="container mx-auto px-6 lg:px-12">
                {/* Section header */}
                <div className="max-w-2xl mx-auto text-center mb-14">
                    <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded bg-slate-100 text-slate-600 text-xs font-semibold uppercase tracking-wider mb-5">
                        ফিচারসমূহ
                    </div>
                    <h2 className="text-3xl lg:text-4xl font-black text-slate-900 mb-4 leading-tight">
                        ব্যবসা পরিচালনার {" "}
                        <span className="text-medidesh-teal-500">সবকিছু এক জায়গায়</span>
                    </h2>
                    <p className="text-slate-500 text-lg leading-relaxed">
                        টেকনাফ থেকে তেঁতুলিয়া— বাস্তব চাহিদা মাথায় রেখে প্রতিটি ফিচার সাজানো হয়েছে।
                    </p>
                </div>

                {/* Feature grid */}
                <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4 max-w-6xl mx-auto">
                    {features.map((feature, idx) => (
                        <div
                            key={idx}
                            className="bg-slate-50 hover:bg-white border border-slate-100 hover:border-slate-200 hover:shadow-md rounded p-5 transition-all duration-300 group cursor-default"
                        >
                            <div className={`w-10 h-10 rounded ${feature.bg} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                                <feature.icon
                                    size={20}
                                    weight="fill"
                                    className={feature.color}
                                />
                            </div>
                            <h3 className="font-bold text-slate-800 text-sm mb-1.5 leading-snug">
                                {feature.title}
                            </h3>
                            <p className="text-xs text-slate-500 leading-relaxed">
                                {feature.desc}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
