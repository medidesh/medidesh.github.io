import Link from "next/link";
import { ArrowRight } from "@phosphor-icons/react/dist/ssr";

export default function HealthTips() {
    const tips = [
        {
            title: "ঋতু পরিবর্তনে সর্দি-জ্বর থেকে বাঁচার উপায়",
            desc: "হঠাৎ গরম বা ঠান্ডায় শিশুদের ও বয়স্কদের বিশেষ যত্ন নেওয়া প্রয়োজন। জেনে নিন করণীয়...",
            tag: "ঋতু পরিবর্তন",
            img: "https://images.unsplash.com/photo-1584362917937-bd36f907bab3?q=80&w=2072&auto=format&fit=crop",
            slug: "flu-prevention", // Assuming slugs for blog structure
        },
        {
            title: "রমজান মাসে ডায়াবেটিস রোগীর খাদ্যতালিকা",
            desc: "সারাদিন রোজা রাখার পর ইফতারে কী খাবেন এবং কী বর্জন করবেন? বিস্তারিত...",
            tag: "ডায়াবেটিস",
            img: "https://images.unsplash.com/photo-1576091160550-217358c7e618?q=80&w=2070&auto=format&fit=crop",
            slug: "ramadan-diabetes-diet",
        },
        {
            title: "ডেঙ্গু জ্বর: লক্ষণ ও প্রতিকার",
            desc: "জ্বর হলে প্যারাসিটামল ছাড়া অন্য ওষুধ খাবেন না। প্রচুর পানি পান করুন এবং...",
            tag: "ডেঙ্গু প্রতিরোধ",
            img: "https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?q=80&w=1932&auto=format&fit=crop",
            slug: "dengue-prevention",
        },
    ];

    return (
        <section className="py-20 bg-white">
            <div className="container mx-auto px-4 lg:px-8">
                <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
                    <div>
                        <span className="text-pharma-green-600 font-bold uppercase tracking-wider text-sm mb-2 block">
                            ব্লগ ও পরামর্শ
                        </span>
                        <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-2">
                            সুস্থ থাকার পরামর্শ
                        </h2>
                        <p className="text-slate-500">
                            আমাদের বিশেষজ্ঞ ডাক্তার ও ফার্মাসিস্টদের টিপস।
                        </p>
                    </div>
                    <Link
                        href="/blog"
                        className="text-pharma-green-600 font-bold hover:underline flex items-center gap-2"
                    >
                        সবগুলো পড়ুন <ArrowRight weight="bold" />
                    </Link>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {tips.map((tip, index) => (
                        <Link key={index} href={`/blog/${tip.slug}`} className="group cursor-pointer block">
                            <div className="overflow-hidden rounded-2xl mb-4 relative">
                                <img
                                    src={tip.img}
                                    alt={tip.tag}
                                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                                />
                                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-slate-800">
                                    {tip.tag}
                                </div>
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-pharma-green-600 transition-colors">
                                {tip.title}
                            </h3>
                            <p className="text-slate-500 text-sm line-clamp-2 mb-3">
                                {tip.desc}
                            </p>
                            <span className="text-pharma-green-600 font-bold text-sm inline-flex items-center gap-1">
                                পড়ুন <ArrowRight weight="bold" />
                            </span>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}
