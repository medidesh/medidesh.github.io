import { Newspaper, ArrowRight } from "@phosphor-icons/react/dist/ssr";

export default function MediaCoverage() {
    return (
        <section className="py-20 bg-slate-50 border-t border-slate-100">
            <div className="container mx-auto px-6 lg:px-12 text-center">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-200 text-slate-600 text-xs font-bold mb-6">
                    <Newspaper weight="fill" />
                    <span>মিডিয়া কাভারেজ</span>
                </div>
                <h2 className="text-2xl lg:text-3xl font-bold text-slate-900 mb-12">
                    আমাদের নিয়ে লেখা হয়েছে
                </h2>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {/* Card 1 */}
                    <div className="group bg-white p-6 rounded-2xl border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 text-left flex flex-col h-full">
                        <div className="h-12 flex items-center mb-6">
                            <img
                                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUTX3amtUek4Ia80_rbqUkfwS6sYaeSUdqwg&s"
                                alt="Prothom Alo"
                                className="h-6 w-auto object-contain opacity-80 group-hover:opacity-100 transition-opacity"
                            />
                        </div>
                        <h3 className="text-lg font-bold text-slate-900 mb-4 line-clamp-2 leading-snug">
                            "ফার্মেসি ব্যবসায় ডিজিটাইজেশনের নতুন দিগন্ত উন্মোচন করল মেডিদেশ"
                        </h3>
                        <div className="mt-auto pt-4 flex items-center justify-between border-t border-slate-100">
                            <span className="text-xs text-slate-400 font-medium">
                                ১০ ডিসেম্বর, ২০২৪
                            </span>
                            <a
                                href="#"
                                className="inline-flex items-center gap-1 text-sm font-bold text-pharma-green-600 hover:text-pharma-green-700 transition-colors"
                            >
                                পড়ুন <ArrowRight weight="bold" />
                            </a>
                        </div>
                    </div>

                    {/* Card 2 */}
                    <div className="group bg-white p-6 rounded-2xl border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 text-left flex flex-col h-full">
                        <div className="h-12 flex items-center mb-6">
                            <img
                                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8knKcONkR3eLrJ0R7WnN4_SBJwegZmm8C2g&s"
                                alt="The Daily Star"
                                className="h-8 w-auto object-contain opacity-80 group-hover:opacity-100 transition-opacity"
                            />
                        </div>
                        <h3 className="text-lg font-bold text-slate-900 mb-4 line-clamp-2 leading-snug">
                            "মেডিদেশ: স্থানীয় ফার্মেসী ইনভেন্টরি ম্যানেজমেন্টে বৈপ্লবিক পরিবর্তন"
                        </h3>
                        <div className="mt-auto pt-4 flex items-center justify-between border-t border-slate-100">
                            <span className="text-xs text-slate-400 font-medium">
                                ২৪ নভেম্বর, ২০২৪
                            </span>
                            <a
                                href="#"
                                className="inline-flex items-center gap-1 text-sm font-bold text-pharma-green-600 hover:text-pharma-green-700 transition-colors"
                            >
                                আরও পড়ুন <ArrowRight weight="bold" />
                            </a>
                        </div>
                    </div>

                    {/* Card 3 */}
                    <div className="group bg-white p-6 rounded-2xl border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 text-left flex flex-col h-full">
                        <div className="h-12 flex items-center mb-6">
                            <img
                                src="https://upload.wikimedia.org/wikipedia/en/thumb/8/88/Channel-i.svg/1200px-Channel-i.svg.png"
                                alt="Channel i"
                                className="h-10 w-auto object-contain opacity-80 group-hover:opacity-100 transition-opacity"
                            />
                        </div>
                        <h3 className="text-lg font-bold text-slate-900 mb-4 line-clamp-2 leading-snug">
                            "নবীন উদ্যোক্তা: প্রযুক্তির ছোঁয়ায় বদলে যাচ্ছে গ্রামের ওষুধের
                            দোকান"
                        </h3>
                        <div className="mt-auto pt-4 flex items-center justify-between border-t border-slate-100">
                            <span className="text-xs text-slate-400 font-medium">
                                ১২ জানুয়ারি, ২০২৫
                            </span>
                            <a
                                href="#"
                                className="inline-flex items-center gap-1 text-sm font-bold text-pharma-green-600 hover:text-pharma-green-700 transition-colors"
                            >
                                বিস্তারিত <ArrowRight weight="bold" />
                            </a>
                        </div>
                    </div>


                    {/* Card 4 */}
                    <div className="group bg-white p-6 rounded-2xl border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 text-left flex flex-col h-full">
                        <div className="h-12 flex items-center mb-6">
                            <img
                                src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/68/The_Business_Standard_logo.svg/1200px-The_Business_Standard_logo.svg.png"
                                alt="TBS"
                                className="h-6 w-auto object-contain opacity-80 group-hover:opacity-100 transition-opacity"
                            />
                        </div>
                        <h3 className="text-lg font-bold text-slate-900 mb-4 line-clamp-2 leading-snug">
                            "কিভাবে সাস (SaaS) প্ল্যাটফর্মগুলো বাংলাদেশের ক্ষুদ্র ব্যবসায়ীদের ক্ষমতায়ন করছে"
                        </h3>
                        <div className="mt-auto pt-4 flex items-center justify-between border-t border-slate-100">
                            <span className="text-xs text-slate-400 font-medium">
                                ১৫ অক্টোবর, ২০২৪
                            </span>
                            <a
                                href="#"
                                className="inline-flex items-center gap-1 text-sm font-bold text-pharma-green-600 hover:text-pharma-green-700 transition-colors"
                            >
                                আরও পড়ুন <ArrowRight weight="bold" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
