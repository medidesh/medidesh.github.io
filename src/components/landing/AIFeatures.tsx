import { ChartLineUp, Lightning, Brain, Sparkle } from "@phosphor-icons/react/dist/ssr";

export default function AIFeatures() {
    return (
        <section id="ai-features" className="py-32 bg-[#050505] text-white relative overflow-hidden">
            {/* Abstract Background */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-indigo-900/40 via-[#050505] to-[#050505]"></div>
                <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-indigo-600/20 rounded-full blur-[120px] mix-blend-screen animate-pulse duration-[4000ms]"></div>
                <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-cyan-600/10 rounded-full blur-[120px] mix-blend-screen"></div>
                <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:60px_60px] opacity-20"></div>
            </div>

            <div className="container mx-auto px-6 lg:px-12 relative z-10">
                <div className="text-center mb-20">
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-indigo-300 text-xs font-bold mb-8 backdrop-blur-xl shadow-[0_0_20px_rgba(99,102,241,0.2)]">
                        <Sparkle weight="fill" className="text-indigo-400 animate-pulse" />
                        <span className="tracking-wider uppercase">Medidesh AI</span>
                    </div>

                    <h2 className="text-4xl lg:text-6xl font-extrabold mb-8 tracking-tight leading-tight">
                        ভবিষ্যতের প্রযুক্তি <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-cyan-400 to-emerald-400">
                            এখন আপনার হাতে
                        </span>
                    </h2>

                    <p className="text-slate-400 text-lg lg:text-xl max-w-2xl mx-auto font-light leading-relaxed">
                        আপনার ব্যবসার গ্রোথ এবং ইনভেন্টরি ম্যানেজমেন্ট এখন আর্টিফিশিয়াল
                        ইন্টেলিজেন্স এর শক্তিতে হবে আরও দ্রুত, আরও নির্ভুল।
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {/* Card 1 */}
                    <div className="group relative bg-white/5 backdrop-blur-md rounded-[2rem] p-1 border border-white/10 hover:border-indigo-500/50 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_0_40px_rgba(99,102,241,0.2)]">
                        <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 to-transparent rounded-[2rem] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                        <div className="relative bg-[#0A0A0A]/80 h-full rounded-[1.8rem] p-8 overflow-hidden">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-500/20 rounded-full blur-[60px] transform translate-x-1/2 -translate-y-1/2 group-hover:bg-indigo-500/30 transition-colors"></div>
                            <div className="w-14 h-14 rounded-2xl bg-[#1A1F2E] border border-white/5 flex items-center justify-center text-2xl mb-8 group-hover:scale-110 group-hover:border-indigo-500/30 transition-all duration-300 relative z-10">
                                <ChartLineUp weight="fill" className="text-indigo-400 drop-shadow-[0_0_10px_rgba(129,140,248,0.5)]" />
                            </div>
                            <h3 className="text-xl font-bold mb-4 text-white group-hover:text-indigo-200 transition-colors">
                                বিক্রয় পূর্বাভাস
                            </h3>
                            <p className="text-slate-400 text-sm leading-relaxed group-hover:text-slate-300 transition-colors">
                                AI বিশ্লেষণ করবে আপনার গত মাসের বিক্রি এবং বলে দিবে আগামী মাসে
                                কোন ঔষধ কত পিস প্রয়োজন।
                            </p>
                        </div>
                    </div>

                    {/* Card 2 */}
                    <div className="group relative bg-white/5 backdrop-blur-md rounded-[2rem] p-1 border border-white/10 hover:border-cyan-500/50 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_0_40px_rgba(34,211,238,0.2)]">
                        <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-transparent rounded-[2rem] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                        <div className="relative bg-[#0A0A0A]/80 h-full rounded-[1.8rem] p-8 overflow-hidden">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/20 rounded-full blur-[60px] transform translate-x-1/2 -translate-y-1/2 group-hover:bg-cyan-500/30 transition-colors"></div>
                            <div className="w-14 h-14 rounded-2xl bg-[#1A1F2E] border border-white/5 flex items-center justify-center text-2xl mb-8 group-hover:scale-110 group-hover:border-cyan-500/30 transition-all duration-300 relative z-10">
                                <Lightning weight="fill" className="text-cyan-400 drop-shadow-[0_0_10px_rgba(34,211,238,0.5)]" />
                            </div>
                            <h3 className="text-xl font-bold mb-4 text-white group-hover:text-cyan-200 transition-colors">
                                ইনস্ট্যান্ট রিস্টক
                            </h3>
                            <p className="text-slate-400 text-sm leading-relaxed group-hover:text-slate-300 transition-colors">
                                স্টক ফুরিয়ে যাওয়ার আগেই অটোমেটেড রিমাইন্ডার এবং সাপ্লায়ার
                                অর্ডার লিস্ট তৈরির সুবিধা।
                            </p>
                        </div>
                    </div>


                    {/* Card 3 */}
                    <div className="group relative bg-white/5 backdrop-blur-md rounded-[2rem] p-1 border border-white/10 hover:border-emerald-500/50 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_0_40px_rgba(52,211,153,0.2)]">
                        <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 to-transparent rounded-[2rem] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                        <div className="relative bg-[#0A0A0A]/80 h-full rounded-[1.8rem] p-8 overflow-hidden">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/20 rounded-full blur-[60px] transform translate-x-1/2 -translate-y-1/2 group-hover:bg-emerald-500/30 transition-colors"></div>
                            <div className="w-14 h-14 rounded-2xl bg-[#1A1F2E] border border-white/5 flex items-center justify-center text-2xl mb-8 group-hover:scale-110 group-hover:border-emerald-500/30 transition-all duration-300 relative z-10">
                                <Brain weight="fill" className="text-emerald-400 drop-shadow-[0_0_10px_rgba(52,211,153,0.5)]" />
                            </div>
                            <h3 className="text-xl font-bold mb-4 text-white group-hover:text-emerald-200 transition-colors">
                                স্মার্ট নলেজ বেস
                            </h3>
                            <p className="text-slate-400 text-sm leading-relaxed group-hover:text-slate-300 transition-colors">
                                যেকোনো ঔষধের নাম লিখলেই AI জানিয়ে দিবে তার কাজ, সাইড ইফেক্ট এবং
                                বিকল্প ব্র্যান্ড।
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
