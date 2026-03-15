import { EnvelopeSimple, WhatsappLogoIcon, Phone } from "@phosphor-icons/react/dist/ssr";

export default function CTASection() {
    return (
        <section id="cta" className="py-20 lg:py-28 bg-medidesh-teal-500 relative overflow-hidden">
            {/* Subtle background pattern */}
            <div
                className="absolute inset-0 opacity-[0.04] pointer-events-none"
                style={{
                    backgroundImage: "radial-gradient(circle, #fff 1px, transparent 1px)",
                    backgroundSize: "30px 30px",
                }}
            />
            {/* Glow accents */}
            <div className="absolute -top-40 -right-40 w-96 h-96 bg-white/10 rounded blur-3xl pointer-events-none" />
            <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-black/10 rounded blur-3xl pointer-events-none" />

            <div className="container mx-auto px-6 lg:px-12 relative z-10">
                <div className="max-w-3xl mx-auto text-center">
                    <h2 className="text-3xl lg:text-5xl font-black text-white mb-5 leading-tight">
                        বিনা মূল্যে আধুনিক ব্যবস্থাপন
                    </h2>
                    <p className="text-medidesh-teal-50 text-lg mb-10 leading-relaxed max-w-xl mx-auto">
                        দেশের হাজারো ফার্মেসির মতো আপনিও হোন ডিজিটাল ।
                    </p>

                    {/* Contact options */}
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-8 border-t border-white/20">
                        <a
                            href="mailto:support@medidesh.com"
                            className="flex items-center gap-2 text-medidesh-teal-100 hover:text-white text-sm font-medium transition-colors"
                        >
                            <EnvelopeSimple weight="fill" size={16} />
                            support@medidesh.com
                        </a>
                        <span className="w-1 h-1 bg-white/30 rounded-full hidden sm:block" />
                        <a
                            href="tel:+8801608844017"
                            className="flex items-center gap-2 text-medidesh-teal-100 hover:text-white text-sm font-medium transition-colors"
                        >
                            <Phone weight="fill" size={16} />
                            01608-844017
                        </a>
                        <span className="w-1 h-1 bg-white/30 rounded-full hidden sm:block" />
                        <span className="text-medidesh-teal-100 text-sm">শনি–বৃহস্পতি, সকাল ১০টা – রাত ৮টা</span>
                    </div>
                </div>
            </div>
        </section>
    );
}
