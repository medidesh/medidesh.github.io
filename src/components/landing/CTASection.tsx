"use client";

import { EnvelopeSimple, Phone, WhatsappLogo } from "@phosphor-icons/react/dist/ssr";
import { useLanguage } from "@/lib/i18n";

const T = {
    bn: {
        badge: "যোগাযোগ করুন",
        heading1: "যেকোনো প্রয়োজনে",
        heading2: "সহযোগিতা নিন",
        sub: "আমাদের সাপোর্ট টিম সরাসরি আপনার সহায়তায় নিয়োজিত। যেকোনো পরামর্শ বা কারিগরি প্রয়োজনে যোগাযোগ করুন।",
        whatsappBtn: "সরাসরি হোয়াটসঅ্যাপ করুন",
        orLabel: "বা নিচে সরাসরি লিখুন",
        hours: "শনি–বৃহস্পতি, সকাল ১০টা – রাত ৮টা",
    },
    en: {
        badge: "Contact Us",
        heading1: "Have questions?",
        heading2: "We're here.",
        sub: "Our support team is ready to help you directly. Feel free to contact us for any advice or technical needs.",
        whatsappBtn: "WhatsApp Us Directly",
        orLabel: "Or write to us below",
        hours: "Sat–Thu, 10 AM – 8 PM",
    },
};

export default function CTASection() {
    const { lang } = useLanguage();
    const t = T[lang];

    return (
        <section id="cta" className="py-20 lg:py-24 bg-medidesh-teal-500 relative overflow-hidden">
            {/* Dot grid */}
            <div className="absolute inset-0 opacity-[0.06] pointer-events-none"
                style={{ backgroundImage: "radial-gradient(circle, #fff 1.5px, transparent 1.5px)", backgroundSize: "28px 28px" }} />

            {/* Organic blobs */}
            <svg className="absolute -top-24 -left-24 w-80 h-80 opacity-[0.12] pointer-events-none" viewBox="0 0 320 320" fill="none" aria-hidden="true">
                <path d="M160,20 C220,5 300,60 310,140 C320,220 265,290 185,300 C105,310 30,260 20,180 C10,100 60,30 110,18 C130,12 140,23 160,20 Z" fill="white" />
            </svg>
            <svg className="absolute -bottom-20 -right-20 w-72 h-72 opacity-[0.10] pointer-events-none" viewBox="0 0 280 280" fill="none" aria-hidden="true">
                <path d="M140,30 C195,12 260,65 268,138 C276,210 226,270 154,278 C82,286 20,238 14,166 C8,94 58,42 108,26 C120,22 128,32 140,30 Z" fill="white" />
            </svg>

            {/* Ring decoration */}
            <svg className="absolute top-1/2 -translate-y-1/2 right-8 lg:right-16 w-64 h-64 opacity-[0.08] pointer-events-none hidden md:block" viewBox="0 0 260 260" fill="none" aria-hidden="true">
                <circle cx="130" cy="130" r="120" stroke="white" strokeWidth="1.5" strokeDasharray="8 5" />
                <circle cx="130" cy="130" r="90" stroke="white" strokeWidth="1.5" strokeDasharray="6 4" />
                <circle cx="130" cy="130" r="60" stroke="white" strokeWidth="1" strokeDasharray="4 4" />
            </svg>

            {/* Cross decorations */}
            <svg className="absolute top-10 right-1/4 w-10 h-10 opacity-[0.15] pointer-events-none hidden lg:block" viewBox="0 0 40 40" fill="none" aria-hidden="true">
                <rect x="15" y="2" width="10" height="36" rx="3" fill="white" />
                <rect x="2" y="15" width="36" height="10" rx="3" fill="white" />
            </svg>
            <svg className="absolute bottom-14 left-1/3 w-6 h-6 opacity-[0.12] pointer-events-none hidden lg:block" viewBox="0 0 40 40" fill="none" aria-hidden="true">
                <rect x="15" y="2" width="10" height="36" rx="3" fill="white" />
                <rect x="2" y="15" width="36" height="10" rx="3" fill="white" />
            </svg>

            {/* Dot cluster */}
            <svg className="absolute left-8 top-12 opacity-[0.12] pointer-events-none hidden lg:block" width="80" height="80" aria-hidden="true">
                {[0,1,2,3].map(r => [0,1,2,3].map(c => (
                    <circle key={`${r}-${c}`} cx={10+c*20} cy={10+r*20} r="2.5" fill="white" />
                )))}
            </svg>

            <div className="container mx-auto px-6 lg:px-12 relative z-10">
                <div className="max-w-3xl mx-auto text-center">
                    {/* Badge */}
                    <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded bg-white/15 border border-white/25 text-white text-xs font-bold uppercase tracking-wider mb-6 backdrop-blur-sm">
                        <span className="w-1.5 h-1.5 bg-medidesh-teal-200 rounded animate-pulse" />
                        {t.badge}
                    </div>

                    {/* Heading */}
                    <h2 className="text-4xl lg:text-6xl font-black text-white mb-4 leading-tight tracking-tight">
                        {t.heading1}{" "}
                        <span className="relative inline-block">
                            {t.heading2}
                            <svg className="absolute -bottom-1 left-0 w-full" viewBox="0 0 200 10" fill="none" preserveAspectRatio="none">
                                <path d="M2 7 Q 50 2 100 7 T 198 7" stroke="white" strokeOpacity="0.4" strokeWidth="3" fill="none" strokeLinecap="round" />
                            </svg>
                        </span>
                    </h2>
                    <p className="text-medidesh-teal-50 text-lg lg:text-xl leading-relaxed max-w-xl mx-auto mb-10">{t.sub}</p>

                    {/* WhatsApp CTA */}
                    <a
                        href="https://wa.me/+8801608844017"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center gap-2.5 bg-white hover:bg-slate-50 text-medidesh-teal-700 px-10 py-4 rounded font-bold text-base shadow-2xl shadow-black/20 transition-all hover:-translate-y-0.5 mb-12"
                    >
                        <WhatsappLogo weight="fill" size={20} />
                        {t.whatsappBtn}
                    </a>

                    {/* Contact info */}
                    <div className="border-t border-white/20 pt-8">
                        <p className="text-medidesh-teal-100 text-xs font-semibold uppercase tracking-wider mb-5">{t.orLabel}</p>
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                            <a
                                href="mailto:support@medidesh.com"
                                className="flex items-center gap-2.5 bg-white/10 hover:bg-white/20 border border-white/20 text-white px-5 py-3 rounded font-semibold text-sm transition-all hover:-translate-y-0.5 backdrop-blur-sm"
                            >
                                <EnvelopeSimple weight="fill" size={16} />
                                support@medidesh.com
                            </a>
                            <a
                                href="tel:+8801608844017"
                                className="flex items-center gap-2.5 bg-white/10 hover:bg-white/20 border border-white/20 text-white px-5 py-3 rounded font-semibold text-sm transition-all hover:-translate-y-0.5 backdrop-blur-sm"
                            >
                                <Phone weight="fill" size={16} />
                                +8801608-844017
                            </a>
                        </div>
                        <p className="mt-5 text-medidesh-teal-100/60 text-xs">{t.hours}</p>
                    </div>
                </div>
            </div>
        </section>
    );
}
