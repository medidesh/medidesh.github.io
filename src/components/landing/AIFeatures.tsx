import { ChartLineUp, Lightning, Brain, Sparkle } from "@phosphor-icons/react/dist/ssr";

export default function AIFeatures() {
    return (
        <section id="ai-features" className="py-40 bg-[#020202] text-white relative overflow-hidden">
            {/* Dark Sci-Fi Background */}
            <div className="absolute inset-0 z-0">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-indigo-600/10 rounded-full blur-[120px] opacity-50"></div>
                <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_at_center,black,transparent_80%)]"></div>
            </div>

            <div className="container mx-auto px-6 lg:px-12 relative z-10">
                <div className="flex flex-col lg:flex-row gap-20 items-center">

                    {/* Left: Content Card */}
                    <div className="lg:w-1/2">
                        <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-black uppercase tracking-[0.3em] mb-10 shadow-[0_0_30px_rgba(99,102,241,0.1)]">
                            <Sparkle weight="fill" className="animate-pulse" />
                            Next-Gen Intelligence
                        </div>

                        <h2 className="text-5xl lg:text-8xl font-black mb-10 tracking-tighter leading-[0.9]">
                            আর্টিফিশিয়াল <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-cyan-400 to-white">
                                ইন্টেলিজেন্স
                            </span>
                        </h2>

                        <p className="text-slate-400 text-xl lg:text-2xl font-medium mb-12 max-w-xl leading-relaxed">
                            মেডিদেশ এআই আপনার ফার্মেসির ডেটা এনালাইসিস করে দিবে সঠিক দিকনির্দেশনা।
                            এখন ব্যবসা হবে স্মার্ট এবং সুপার-ফাস্ট।
                        </p>

                        <div className="flex flex-col gap-6">
                            {[
                                { title: "স্মার্ট সেলস ইনসাইটস", desc: "আপনার বিক্রয় ডেটা থেকে ফিউচার ট্রেন্ড প্রেডিকশন।", icon: <ChartLineUp /> },
                                { title: "অটোমেশন ম্যাজিক", desc: "স্টক ম্যানেজমেন্ট এবং অর্ডার রিপ্লেনিশমেন্ট এখন অটোমেটেড।", icon: <Lightning /> },
                                { title: "মেডিকেল নলেজ হাব", desc: "যেকোনো ঔষধের তথ্য এবং অল্টারনেটিভ ব্র্যান্ড সাজেশন।", icon: <Brain /> },
                            ].map((item, i) => (
                                <div key={i} className="flex gap-6 p-6 rounded-3xl bg-white/5 border border-white/5 hover:bg-white/10 hover:border-white/10 transition-all group">
                                    <div className="w-14 h-14 rounded-2xl bg-indigo-500/10 flex items-center justify-center text-2xl text-indigo-400 group-hover:scale-110 transition-transform">
                                        {item.icon}
                                    </div>
                                    <div>
                                        <h4 className="text-xl font-black text-white mb-1">{item.title}</h4>
                                        <p className="text-slate-400 text-sm font-medium">{item.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right: Unique Visual Element */}
                    <div className="lg:w-1/2 relative">
                        <div className="aspect-square relative flex items-center justify-center">
                            {/* Central Glow Core */}
                            <div className="absolute w-64 h-64 bg-indigo-600 rounded-full blur-[100px] opacity-20 animate-pulse"></div>

                            {/* Rotating Rings (CSS only implementation) */}
                            <div className="absolute w-[400px] h-[400px] border border-white/5 rounded-full animate-[spin_20s_linear_infinite]"></div>
                            <div className="absolute w-[300px] h-[300px] border border-white/10 rounded-full animate-[spin_15s_linear_infinite_reverse]"></div>
                            <div className="absolute w-[500px] h-[500px] border border-dashed border-indigo-500/10 rounded-full animate-[spin_30s_linear_infinite]"></div>

                            {/* Floating Tech Badges */}
                            <div className="absolute top-0 right-0 p-8 bg-white/5 backdrop-blur-3xl rounded-[2.5rem] border border-white/10 shadow-2xl animate-float">
                                <Sparkle size={48} weight="fill" className="text-indigo-400 mb-4" />
                                <div className="text-xs font-black text-white/40 uppercase tracking-widest leading-none mb-1">Accuracy</div>
                                <div className="text-3xl font-black text-white">99.9%</div>
                            </div>

                            <div className="absolute bottom-10 left-0 p-8 bg-white/5 backdrop-blur-3xl rounded-[2.5rem] border border-white/10 shadow-2xl animate-float" style={{ animationDelay: '2s' }}>
                                <Lightning size={48} weight="fill" className="text-cyan-400 mb-4" />
                                <div className="text-xs font-black text-white/40 uppercase tracking-widest leading-none mb-1">Latency</div>
                                <div className="text-3xl font-black text-white">12ms</div>
                            </div>

                            {/* Central Brand Motif */}
                            <div className="relative z-10 w-48 h-48 bg-white/5 backdrop-blur-2xl rounded-full border border-white/20 flex items-center justify-center shadow-[0_0_50px_rgba(99,102,241,0.2)]">
                                <img src="/assets/logo/Logo.svg" alt="AI Core" className="w-24 h-24 brightness-125" />
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
