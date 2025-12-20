import { EnvelopeSimple, WhatsappLogo } from "@phosphor-icons/react/dist/ssr";

export default function CTASection() {
    return (
        <section id="cta" className="py-16 relative overflow-hidden bg-slate-900">
            <div className="absolute inset-0 bg-slate-900"></div>
            {/* Grainy Noise Overlay - typically done with CSS/Image, approximating with opacity here or could import noise svg */}
            <div className="absolute inset-0 opacity-20 bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>

            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-pharma-green-500/20 rounded-full blur-[120px] translate-x-1/2 -translate-y-1/2"></div>
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-500/20 rounded-full blur-[120px] -translate-x-1/2 translate-y-1/2"></div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-3xl lg:text-5xl font-extrabold text-white mb-8 leading-tight">
                        আপনার ফার্মেসি ব‍্যবস্থাপনা <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-pharma-green-400 to-blue-400">
                            হোক স্মার্ট ও ঝামেলামুক্ত
                        </span>
                    </h2>

                    <div className="flex flex-col sm:flex-row justify-center gap-5 mt-12">
                        <a
                            href="mailto:support@medidesh.com"
                            className="bg-white text-slate-900 hover:bg-slate-50 px-8 py-4 rounded-xl font-bold text-lg shadow-xl hover:-translate-y-1 transition-all duration-300 flex items-center justify-center gap-3 group"
                        >
                            <EnvelopeSimple weight="fill" className="text-2xl text-pharma-green-600 group-hover:scale-110 transition-transform" />
                            <span>আমাদের ইমেইল করুন</span>
                        </a>
                        <a
                            href="https://wa.me/+8801712345678"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-[#25D366] hover:bg-[#20bd5a] text-white px-8 py-4 rounded-xl font-bold text-lg shadow-xl shadow-green-500/20 hover:-translate-y-1 transition-all duration-300 flex items-center justify-center gap-3"
                        >
                            <WhatsappLogo weight="fill" className="text-2xl" />
                            <span>হোয়াটসঅ্যাপে কথা বলুন</span>
                        </a>
                    </div>

                    <p className="mt-8 text-slate-400 text-sm">
                        আপনাদের পাশে, সর্বদা আন্তরিক ও বিশ্বস্ত সেবায়
                    </p>
                </div>
            </div>
        </section>
    );
}
