import { EnvelopeSimple, WhatsappLogoIcon, Phone } from "@phosphor-icons/react/dist/ssr";

export default function CTASection() {
    return (
        <section id="cta" className="py-24 lg:py-32 bg-medidesh-teal-500 relative overflow-hidden">
            <div
                className="absolute inset-0 opacity-[0.04] pointer-events-none"
                style={{
                    backgroundImage: "radial-gradient(circle, #fff 1px, transparent 1px)",
                    backgroundSize: "30px 30px",
                }}
            />
            <div className="absolute -top-40 -right-40 w-96 h-96 bg-white/10 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-black/10 rounded-full blur-3xl pointer-events-none" />

            <div className="container mx-auto px-6 lg:px-12 relative z-10">
                <div className="max-w-3xl mx-auto text-center">
                    <h2 className="text-3xl lg:text-5xl font-black text-white mb-6 leading-tight tracking-tight">
                        বিনা মূল্যে আধুনিক ব্যবস্থাপনা
                    </h2>
                    <p className="text-medidesh-teal-50 text-xl mb-12 leading-relaxed max-w-xl mx-auto font-medium">
                        দেশের হাজারো ফার্মেসির মতো আপনিও হোন ডিজিটাল।
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-8 pt-10 border-t border-white/20">
                        <a
                            href="mailto:support@medidesh.com"
                            className="flex items-center gap-3 text-medidesh-teal-50 hover:text-white text-base font-bold transition-all hover:-translate-y-0.5"
                        >
                            <EnvelopeSimple weight="fill" size={20} />
                            support@medidesh.com
                        </a>
                        <span className="w-1.5 h-1.5 bg-white/30 rounded-full hidden sm:block" />
                        <a
                            href="tel:+8801608844017"
                            className="flex items-center gap-3 text-medidesh-teal-50 hover:text-white text-base font-bold transition-all hover:-translate-y-0.5"
                        >
                            <Phone weight="fill" size={20} />
                            +8801608-844017
                        </a>
                    </div>
                    <div className="mt-8">
                        <span className="text-medidesh-teal-100 text-sm font-semibold bg-white/10 px-4 py-1.5 rounded-full backdrop-blur-sm">
                            শনি–বৃহস্পতি, সকাল ১০টা – রাত ৮টা
                        </span>
                    </div>
                </div>
            </div>
        </section>
    );
}
