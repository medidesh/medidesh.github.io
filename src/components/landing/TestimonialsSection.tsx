import { Quotes, Star, ArrowLeft, ArrowRight } from "@phosphor-icons/react/dist/ssr";

export default function TestimonialsSection() {
    return (
        <section className="py-24 bg-white">
            <div className="container mx-auto px-6 lg:px-12">
                <div className="text-center mb-16">
                    <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
                        মালিকরা কেন মেডিদেশ ভালোবাসেন?
                    </h2>
                    <div className="inline-flex justify-center items-center gap-3 bg-white shadow-sm border border-slate-200 rounded-full px-5 py-2">
                        <img
                            src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Google_%22G%22_logo.svg/480px-Google_%22G%22_logo.svg.png"
                            alt="Google"
                            className="w-5 h-5"
                        />
                        <div className="flex items-center gap-0.5">
                            {[...Array(5)].map((_, i) => (
                                <Star key={i} weight="fill" className="text-amber-400 text-base" />
                            ))}
                        </div>
                        <span className="text-sm font-bold text-slate-700">
                            4.9/5 on Reviews
                        </span>
                    </div>
                </div>

                <div
                    id="testimonials-container"
                    className="flex overflow-x-auto gap-8 pb-8 snap-x snap-mandatory scrollbar-hide"
                >
                    {/* Testimonial 1 */}
                    <div className="bg-slate-50 p-8 rounded-2xl border border-slate-100 relative min-w-[300px] md:min-w-[400px] snap-center">
                        <Quotes weight="fill" className="text-4xl text-pharma-green-200 absolute top-4 right-4" />
                        <div className="mb-4">
                            <span className="text-xs font-bold text-red-500 bg-red-50 px-2 py-1 rounded">
                                সমস্যা
                            </span>
                            <p className="text-sm text-slate-500 mt-1 italic">
                                "হিসাব মিলত না, ক্যাশ শর্ট পড়ত।"
                            </p>
                        </div>
                        <div className="mb-6">
                            <span className="text-xs font-bold text-pharma-green-600 bg-pharma-green-50 px-2 py-1 rounded">
                                সমাধান
                            </span>
                            <p className="text-slate-700 mt-2 font-medium">
                                "মেডিদেশ ব্যবহার করে আমি এখন প্রতিদিনের লাভ-ক্ষতি এক ক্লিকে দেখতে
                                পাই। আমার টেনশন কমে গেছে।"
                            </p>
                        </div>
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 bg-slate-200 rounded-full"></div>
                            <div>
                                <div className="font-bold text-slate-900">
                                    মো: রফিকুল ইসলাম
                                </div>
                                <div className="text-xs text-slate-500">
                                    মালিক, বিসমিল্লাহ ফার্মেসি, ঢাকা
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Testimonial 2 */}
                    <div className="bg-slate-50 p-8 rounded-2xl border border-slate-100 relative min-w-[300px] md:min-w-[400px] snap-center">
                        <Quotes weight="fill" className="text-4xl text-pharma-green-200 absolute top-4 right-4" />
                        <div className="mb-4">
                            <span className="text-xs font-bold text-red-500 bg-red-50 px-2 py-1 rounded">
                                সমস্যা
                            </span>
                            <p className="text-sm text-slate-500 mt-1 italic">
                                "স্টক মেলানোটাই ছিল বড় ঝামেলা।"
                            </p>
                        </div>
                        <div className="mb-6">
                            <span className="text-xs font-bold text-pharma-green-600 bg-pharma-green-50 px-2 py-1 rounded">
                                সমাধান
                            </span>
                            <p className="text-slate-700 mt-2 font-medium">
                                "এখন ইনভেন্টরি অটোমেটিক আপডেট হয়। কোন ঔষধ শেষ হচ্ছে তা অ্যাপ
                                থেকে আগেই জেনে যাই।"
                            </p>
                        </div>
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 bg-slate-200 rounded-full"></div>
                            <div>
                                <div className="font-bold text-slate-900">আব্দুল কাদের</div>
                                <div className="text-xs text-slate-500">
                                    সেবা মেডিসিন কর্ণার, চট্টগ্রাম
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Testimonial 3 */}
                    <div className="bg-slate-50 p-8 rounded-2xl border border-slate-100 relative min-w-[300px] md:min-w-[400px] snap-center">
                        <Quotes weight="fill" className="text-4xl text-pharma-green-200 absolute top-4 right-4" />
                        <div className="mb-4">
                            <span className="text-xs font-bold text-red-500 bg-red-50 px-2 py-1 rounded">
                                সমস্যা
                            </span>
                            <p className="text-sm text-slate-500 mt-1 italic">
                                "কম্পিউটার চালাতে পারতাম না।"
                            </p>
                        </div>
                        <div className="mb-6">
                            <span className="text-xs font-bold text-pharma-green-600 bg-pharma-green-50 px-2 py-1 rounded">
                                সমাধান
                            </span>
                            <p className="text-slate-700 mt-2 font-medium">
                                "সফটওয়্যারটা এত সহজ যে আমার দোকানের ছোট ছেলেটাও এখন বিল করতে
                                পারে। মোবাইল অ্যাপটা দারুণ।"
                            </p>
                        </div>
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 bg-slate-200 rounded-full"></div>
                            <div>
                                <div className="font-bold text-slate-900">সুমন আহমেদ</div>
                                <div className="text-xs text-slate-500">
                                    মা ফার্মেসি, সিলেট
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="flex justify-center gap-4 mt-12">
                    <button className="w-12 h-12 rounded-full border border-slate-200 flex items-center justify-center text-slate-500 hover:bg-slate-50 transition-colors">
                        <ArrowLeft weight="bold" />
                    </button>
                    <button className="w-12 h-12 rounded-full bg-pharma-green-600 text-white flex items-center justify-center shadow-lg hover:bg-pharma-green-700 transition-colors">
                        <ArrowRight weight="bold" />
                    </button>
                </div>
            </div>
        </section>
    );
}
