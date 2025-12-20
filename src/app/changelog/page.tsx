import LandingHeader from "@/components/landing/LandingHeader";
import LandingFooter from "@/components/landing/LandingFooter";

export default function ChangelogPage() {
    const updates = [
        {
            version: "v2.5.0",
            date: "১৫ জানুয়ারি, ২০২৫",
            title: "Medidesh AI & Dark Mode",
            features: [
                "Pharmacist Copilot (AI) যুক্ত করা হয়েছে",
                "সম্পূর্ণ ডার্ক মোড সাপোর্ট",
                "পারফরম্যান্স ইমপ্রুভমেন্ট",
            ],
        },
        {
            version: "v2.1.0",
            date: "১ ডিসেম্বর, ২০২৪",
            title: "ইনভেন্টরি আপডেট",
            features: [
                "বাল্ক মেডিসিন আপলোড ফিচার",
                "এক্সপায়ারি ডেট অ্যালার্ট সিস্টেম",
                "রিপোর্ট প্রিন্টিং বাগ ফিক্স",
            ],
        },
        {
            version: "v1.0.0",
            date: "১৫ জুন, ২০২৩",
            title: "অফিসিয়াল লঞ্চ",
            features: ["বেসিক ইনভেন্টরি", "POS সিস্টেম", "কাস্টমার ম্যানেজমেন্ট"],
        },
    ];

    return (
        <main className="bg-white min-h-screen">
            <LandingHeader />
            <div className="pt-32 pb-20 container mx-auto px-6 lg:px-12 max-w-3xl">
                <h1 className="text-4xl font-bold mb-12 text-slate-900">নতুন আপডেট (Changelog)</h1>

                <div className="space-y-12">
                    {updates.map((update, index) => (
                        <div key={index} className="relative pl-8 border-l-2 border-slate-200">
                            <div className="absolute top-0 left-[-9px] w-4 h-4 rounded-full bg-pharma-green-500 border-4 border-white shadow-sm"></div>
                            <div className="flex flex-col sm:flex-row sm:items-center gap-4 mb-4">
                                <span className="bg-slate-100 text-slate-600 px-3 py-1 rounded-full text-xs font-bold font-mono">
                                    {update.version}
                                </span>
                                <span className="text-slate-400 text-sm font-medium">
                                    {update.date}
                                </span>
                            </div>
                            <h2 className="text-2xl font-bold text-slate-800 mb-4">{update.title}</h2>
                            <ul className="space-y-2">
                                {update.features.map((feature, i) => (
                                    <li key={i} className="text-slate-600 flex items-start gap-2">
                                        <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-pharma-green-400 shrink-0"></span>
                                        {feature}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
            <LandingFooter />
        </main>
    );
}
