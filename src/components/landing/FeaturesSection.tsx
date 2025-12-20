import {
    Lightning,
    UsersThree,
    Package,
    WarningCircle,
    Printer,
    CloudCheck,
    Scroll,
    ArrowUUpLeft,
} from "@phosphor-icons/react/dist/ssr";

export default function FeaturesSection() {
    const features = [
        {
            icon: Lightning,
            title: "স্মার্ট পজ",
            desc: "বারকোড স্ক্যানার এবং শর্টকাট কি দিয়ে সেকেন্ডেই বিল করুন।",
            color: "text-pharma-green-500",
        },
        {
            icon: UsersThree,
            title: "মাল্টি-ইউজার",
            desc: "স্টাফদের জন্য আলাদা একাউন্ট এবং পারমিশন সেট করুন।",
            color: "text-blue-500",
        },
        {
            icon: Package,
            title: "ইনভেন্টরি",
            desc: "প্রতিটি পাতা এবং বোতলের রিয়েল-টাইম হিসাব রাখুন।",
            color: "text-orange-500",
        },
        {
            icon: WarningCircle,
            title: "এক্সপায়ারি অ্যালার্ট",
            desc: "মেয়াদ শেষ হওয়ার ৩ মাস আগেই নোটিফিকেশন পান।",
            color: "text-red-500",
        },
        {
            icon: Printer,
            title: "POS প্রিন্টার",
            desc: "যেকোনো থার্মাল বা সাধারণ প্রিন্টার দিয়ে নিমেষেই ইনভয়েস প্রিন্ট করুন।",
            color: "text-purple-500",
        },
        {
            icon: CloudCheck,
            title: "ক্লাউড সিঙ্ক",
            desc: "বাসায় বসে বা বিদেশ থেকে আপনার দোকানের রিপোর্ট দেখুন।",
            color: "text-cyan-500",
        },
        {
            icon: Scroll,
            title: "বাকি খাতা",
            desc: "কাস্টমার এবং সাপ্লায়ারের বকেয়া হিসাব অটোমেটিক থাকে।",
            color: "text-teal-500",
        },
        {
            icon: ArrowUUpLeft,
            title: "ইজি রিটার্ন",
            desc: "পণ্য ফেরত বা পরিবর্তনের হিসাব রাখা এখন পানির মতো সহজ।",
            color: "text-indigo-500",
        },
    ];

    return (
        <section id="features" className="py-24 bg-white">
            <div className="container mx-auto px-6 lg:px-12">
                <div className="text-center max-w-2xl mx-auto mb-16">
                    <h2 className="text-3xl lg:text-4xl font-bold text-slate-900">
                        ব্যাবসা বাড়ানোর সব ফিচার
                    </h2>
                    <p className="text-slate-500 mt-4 text-lg">
                        আপনার দোকানকে সুপারশপের মতো ফাস্ট এবং স্মার্ট করে তুলুন।
                    </p>
                </div>

                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {features.map((feature, idx) => (
                        <div
                            key={idx}
                            className="bg-slate-50 p-6 rounded-2xl hover:bg-white hover:shadow-xl transition-all border border-slate-100 group cursor-pointer"
                        >
                            <feature.icon
                                weight="fill"
                                className={`text-4xl ${feature.color} mb-4 group-hover:scale-110 transition-transform block`}
                            />
                            <h3 className="font-bold text-slate-800 text-lg mb-2">
                                {feature.title}
                            </h3>
                            <p className="text-sm text-slate-500">{feature.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
