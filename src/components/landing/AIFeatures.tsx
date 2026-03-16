"use client";

import { ChartLineUp, Lightning, Brain, SparkleIcon } from "@phosphor-icons/react/dist/ssr";
import { useLanguage } from "@/lib/i18n";

const T = {
    bn: {
        badge: "কৃত্রিম বুদ্ধিমত্তা — শীঘ্রই আসছে",
        title1: "আর্টিফিশিয়াল",
        title2: "ইন্টেলিজেন্স",
        sub: "মেডিদেশ AI আপনার ফার্মেসির ডেটা বিশ্লেষণ করে সঠিক দিকনির্দেশনা দেবে। আপনার ব্যবসা হবে আরও স্মার্ট ও গতিশীল।",
        features: [
            { title: "স্মার্ট সেলস ইনসাইটস",  desc: "আপনার বিক্রয় ডেটা থেকে ভবিষ্যতের সঠিক পূর্বাভাস।" },
            { title: "অটোমেশন ম্যাজিক",          desc: "স্টক ম্যানেজমেন্ট এবং অর্ডার রিপ্লেনিশমেন্ট এখন হবে সম্পূর্ণ স্বয়ংক্রিয়।" },
            { title: "মেডিকেল নলেজ হাব",          desc: "যেকোনো ওষুধের তথ্য এবং অল্টারনেটিভ ব্র্যান্ড সাজেশন।" },
        ],
    },
    en: {
        badge: "Artificial Intelligence — Coming Soon",
        title1: "Artificial",
        title2: "Intelligence",
        sub: "Medidesh AI will analyze your pharmacy's data and provide the right guidance. Your business will become smarter and more dynamic.",
        features: [
            { title: "Smart Sales Insights",   desc: "Accurate future predictions from your sales data." },
            { title: "Automation Magic",        desc: "Stock management and order replenishment will now be fully automated." },
            { title: "Medical Knowledge Hub",   desc: "Information on any medicine and alternative brand suggestions." },
        ],
    },
};

const icons = [ChartLineUp, Lightning, Brain];

export default function AIFeatures() {
    const { lang } = useLanguage();
    const t = T[lang];

    return (
        <section id="ai-features" className="py-24 bg-[#020202] text-white relative overflow-hidden">
            <div className="absolute inset-0 z-0">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-indigo-600/10 rounded blur-[120px] opacity-50"></div>
                <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_at_center,black,transparent_80%)]"></div>
            </div>

            <div className="container mx-auto px-6 lg:px-12 relative z-10">
                <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-center">
                    <div className="lg:w-1/2">
                        <div className="inline-flex items-center gap-3 px-5 py-2 rounded bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-bold uppercase tracking-[0.2em] mb-6">
                            <SparkleIcon weight="fill" className="animate-pulse" />
                            {t.badge}
                        </div>
                        <h2 className="text-5xl lg:text-7xl font-black mb-6 tracking-tighter leading-[0.9]">
                            {t.title1} <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-cyan-400 to-white">
                                {t.title2}
                            </span>
                        </h2>
                        <p className="text-slate-400 text-lg lg:text-xl font-medium mb-8 max-w-xl leading-relaxed">{t.sub}</p>
                        <div className="flex flex-col gap-6">
                            {t.features.map((item, i) => {
                                const Icon = icons[i];
                                return (
                                    <div key={i} className="flex gap-6 p-6 rounded bg-white/5 border border-white/5 hover:bg-white/10 hover:border-white/10 transition-all group">
                                        <div className="w-14 h-14 rounded bg-indigo-500/10 flex items-center justify-center text-2xl text-indigo-400 group-hover:scale-110 transition-transform">
                                            <Icon />
                                        </div>
                                        <div>
                                            <h4 className="text-xl font-black text-white mb-1">{item.title}</h4>
                                            <p className="text-slate-400 text-sm font-medium">{item.desc}</p>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>

                    <div className="lg:w-1/2 relative">
                        <div className="aspect-square relative flex items-center justify-center">
                            <div className="absolute w-64 h-64 bg-indigo-600 rounded blur-[100px] opacity-20 animate-pulse"></div>
                            <div className="absolute w-[400px] h-[400px] border border-white/5 rounded animate-[spin_20s_linear_infinite]"></div>
                            <div className="absolute w-[300px] h-[300px] border border-white/10 rounded animate-[spin_15s_linear_infinite_reverse]"></div>
                            <div className="absolute w-[500px] h-[500px] border border-dashed border-indigo-500/10 rounded animate-[spin_30s_linear_infinite]"></div>
                            <div className="absolute top-0 right-0 p-8 bg-white/5 backdrop-blur-3xl rounded border border-white/10 shadow-2xl animate-float">
                                <SparkleIcon size={48} weight="fill" className="text-indigo-400 mb-4" />
                                <div className="text-xs font-black text-white/40 uppercase tracking-widest leading-none mb-1">Accuracy</div>
                                <div className="text-3xl font-black text-white">99.9%</div>
                            </div>
                            <div className="absolute bottom-10 left-0 p-8 bg-white/5 backdrop-blur-3xl rounded border border-white/10 shadow-2xl animate-float" style={{ animationDelay: "2s" }}>
                                <Lightning size={48} weight="fill" className="text-cyan-400 mb-4" />
                                <div className="text-xs font-black text-white/40 uppercase tracking-widest leading-none mb-1">Latency</div>
                                <div className="text-3xl font-black text-white">12ms</div>
                            </div>
                            <div className="relative z-10 w-48 h-48 bg-white/5 backdrop-blur-2xl rounded border border-white/20 flex items-center justify-center shadow-[0_0_50px_rgba(99,102,241,0.2)]">
                                <img src="/assets/logo/Logo.svg" alt="AI Core" className="w-24 h-24 brightness-125" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
