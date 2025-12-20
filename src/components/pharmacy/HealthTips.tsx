import Link from "next/link";
import { ArrowRight, CalendarDots, PlusCircle, Prescription } from "@phosphor-icons/react/dist/ssr";
import { blogs } from "@/data/blogs";

export default function HealthTips() {
    // Take recent 3 blogs
    const recentTips = blogs.slice(0, 3);

    return (
        <section className="py-24 bg-white border-t border-slate-100 relative overflow-hidden">

            {/* Background Motifs aligned with Hero */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-30">
                <div className="absolute inset-0 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] [background-size:32px_32px]"></div>

                <div className="absolute top-[15%] right-[2%] text-pharma-green-100 animate-float opacity-40">
                    <PlusCircle size={100} weight="thin" />
                </div>
                <div className="absolute bottom-[20%] left-[5%] text-blue-100 animate-float opacity-40" style={{ animationDelay: '2.5s' }}>
                    <Prescription size={90} weight="thin" />
                </div>

                <svg className="absolute top-0 left-0 w-full h-full opacity-10" viewBox="0 0 100 100" preserveAspectRatio="none">
                    <path d="M-10,30 Q30,10 50,30 T110,30" fill="none" stroke="#009B86" strokeWidth="0.1" strokeDasharray="1,2" className="animate-pulse" />
                </svg>
            </div>

            <div className="container mx-auto px-4 lg:px-8 relative z-10">

                {/* Simplified Header */}
                <div className="flex items-center justify-between mb-16">
                    <div>
                        <span className="text-pharma-green-600 font-bold uppercase tracking-[0.2em] text-xs mb-3 block">Health & Advice</span>
                        <h2 className="text-3xl lg:text-4xl font-black text-slate-900 leading-tight">স্বাস্থ্য টিপস</h2>
                    </div>
                    <Link href="/blog" className="px-6 py-2.5 bg-slate-50 text-blue-600 text-sm font-bold rounded-xl border border-slate-200 hover:bg-white hover:shadow-md transition-all flex items-center gap-2">
                        সবগুলো দেখুন <ArrowRight weight="bold" />
                    </Link>
                </div>

                {/* Clean Grid */}
                <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    {recentTips.map((tip, index) => (
                        <Link key={index} href={`/blog/${tip.slug}`} className="group cursor-pointer block">
                            <div className="overflow-hidden rounded-[2rem] mb-6 bg-slate-100 aspect-video relative shadow-sm group-hover:shadow-xl transition-all duration-500 border border-slate-100">
                                <img
                                    src={tip.img}
                                    alt={tip.tag}
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                                />
                                <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-sm px-3 py-1.5 rounded-xl text-[10px] font-black text-slate-800 uppercase tracking-widest shadow-sm">
                                    {tip.tag}
                                </div>
                            </div>

                            <div className="flex items-center gap-2 text-xs text-slate-400 font-bold uppercase tracking-widest mb-3">
                                <CalendarDots size={14} className="text-pharma-green-500" />
                                <span>{tip.date}</span>
                            </div>

                            <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors line-clamp-2 leading-snug font-heading">
                                {tip.title}
                            </h3>
                            <p className="text-slate-500 text-sm line-clamp-2 leading-relaxed">
                                {tip.desc}
                            </p>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}
