import { Plant } from "@phosphor-icons/react/dist/ssr";

export default function VisionSection() {
    return (
        <section id="vision" className="py-24 bg-gradient-to-b from-white to-slate-50 border-y border-slate-100">
            <div className="container mx-auto px-6 lg:px-12">
                <div className="max-w-4xl mx-auto">
                    <div className="relative bg-white p-10 lg:p-16 rounded-3xl shadow-xl border border-slate-100 overflow-hidden text-center group hover:shadow-2xl transition-all duration-500">
                        {/* Ambient Gradients */}
                        <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-pharma-green-400 via-blue-500 to-purple-500"></div>
                        <div className="absolute -top-24 -right-24 w-64 h-64 bg-pharma-green-500/10 rounded-full blur-3xl group-hover:bg-pharma-green-500/20 transition-colors duration-500"></div>
                        <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl group-hover:bg-blue-500/20 transition-colors duration-500"></div>

                        <div className="relative z-10">
                            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-slate-50 mb-8 border border-slate-100 shadow-inner">
                                <Plant weight="fill" className="text-3xl text-pharma-green-600" />
                            </div>

                            <h2 className="text-3xl lg:text-4xl font-heading font-bold text-slate-900 mb-6">
                                আমাদের লক্ষ্য
                            </h2>

                            <p className="text-xl lg:text-2xl font-serif text-slate-600 leading-relaxed max-w-2xl mx-auto italic">
                                "আমরা বিশ্বাস করি, প্রযুক্তি সবার জন্য। আমাদের লক্ষ্য প্রতিটি
                                ফার্মেসিকে ডিজিটালি স্বয়ংসম্পূর্ণ করা, যেন তারা নির্ভাবনায়
                                ব্যবসা করতে পারে।"
                            </p>

                            <div className="mt-8 flex items-center justify-center gap-3 opacity-80">
                                <span className="h-px w-12 bg-slate-300"></span>
                                <span className="text-sm font-bold text-slate-400 tracking-widest uppercase">
                                    মেডিদেশ টিম
                                </span>
                                <span className="h-px w-12 bg-slate-300"></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
