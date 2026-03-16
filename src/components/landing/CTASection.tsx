"use client";

import { EnvelopeSimple, Phone, WhatsappLogo, ArrowRight } from "@phosphor-icons/react/dist/ssr";
import { useLanguage } from "@/lib/i18n";

const T = {
    bn: {
        badge: "যোগাযোগ",
        heading: "আমরা সবসময়",
        headingAccent: "পাশে আছি",
        sub: "যেকোনো প্রশ্ন বা সাহায্যের জন্য আমাদের সাথে যোগাযোগ করুন।",
        whatsapp: "WhatsApp করুন",
        email: "support@medidesh.com",
        phone: "+8801608-844017",
        hours: "শনি–বৃহস্পতি · সকাল ১০টা – রাত ৮টা",
    },
    en: {
        badge: "Contact",
        heading: "We're always",
        headingAccent: "here for you",
        sub: "Reach out with any question — our team responds fast.",
        whatsapp: "WhatsApp Us",
        email: "support@medidesh.com",
        phone: "+8801608-844017",
        hours: "Sat–Thu · 10 AM – 8 PM",
    },
};

export default function CTASection() {
    const { lang } = useLanguage();
    const t = T[lang];

    return (
        <section id="cta" className="py-16 lg:py-20 bg-medidesh-teal-500 relative overflow-hidden">
            {/* Dot grid */}
            <div className="absolute inset-0 opacity-[0.07] pointer-events-none"
                style={{ backgroundImage: "radial-gradient(circle, #fff 1.5px, transparent 1.5px)", backgroundSize: "26px 26px" }} />

            {/* Blobs */}
            <svg className="absolute -top-20 -left-20 w-72 h-72 opacity-[0.10] pointer-events-none" viewBox="0 0 280 280" fill="none" aria-hidden="true">
                <path d="M140,18 C198,4 260,56 268,130 C276,204 228,264 156,272 C84,280 18,236 10,164 C2,92 52,36 104,22 C118,16 128,20 140,18 Z" fill="white" />
            </svg>
            <svg className="absolute -bottom-16 -right-16 w-64 h-64 opacity-[0.08] pointer-events-none" viewBox="0 0 240 240" fill="none" aria-hidden="true">
                <path d="M120,16 C168,4 220,50 226,112 C232,174 192,224 132,230 C72,236 16,196 10,136 C4,76 46,28 96,16 C108,12 116,18 120,16 Z" fill="white" />
            </svg>

            {/* Ring */}
            <svg className="absolute right-10 lg:right-24 top-1/2 -translate-y-1/2 w-48 h-48 opacity-[0.08] pointer-events-none hidden md:block" viewBox="0 0 200 200" fill="none" aria-hidden="true">
                <circle cx="100" cy="100" r="90" stroke="white" strokeWidth="1.5" strokeDasharray="8 5" />
                <circle cx="100" cy="100" r="65" stroke="white" strokeWidth="1"   strokeDasharray="5 4" />
                <circle cx="100" cy="100" r="40" stroke="white" strokeWidth="1"   strokeDasharray="3 3" />
            </svg>

            {/* Crosses */}
            <svg className="absolute top-8 right-1/3 w-7 h-7 opacity-[0.15] pointer-events-none hidden lg:block" viewBox="0 0 40 40" fill="none" aria-hidden="true">
                <rect x="15" y="2" width="10" height="36" rx="3" fill="white" />
                <rect x="2" y="15" width="36" height="10" rx="3" fill="white" />
            </svg>
            <svg className="absolute bottom-8 left-1/4 w-5 h-5 opacity-[0.12] pointer-events-none hidden lg:block" viewBox="0 0 40 40" fill="none" aria-hidden="true">
                <rect x="15" y="2" width="10" height="36" rx="3" fill="white" />
                <rect x="2" y="15" width="36" height="10" rx="3" fill="white" />
            </svg>

            <div className="container mx-auto px-6 lg:px-12 relative z-10">
                <div className="max-w-5xl mx-auto">
                    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">

                        {/* Left — text */}
                        <div className="lg:max-w-md">
                            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded bg-white/15 border border-white/20 text-white text-xs font-bold uppercase tracking-widest mb-4 backdrop-blur-sm">
                                <span className="w-1.5 h-1.5 rounded bg-white animate-pulse" />
                                {t.badge}
                            </div>
                            <h2 className="text-3xl lg:text-4xl font-black text-white leading-tight tracking-tight mb-3">
                                {t.heading}{" "}
                                <span className="relative inline-block">
                                    {t.headingAccent}
                                    <svg className="absolute -bottom-0.5 left-0 w-full" viewBox="0 0 160 8" fill="none" preserveAspectRatio="none">
                                        <path d="M2 5 Q 40 1 80 5 T 158 5" stroke="white" strokeOpacity="0.35" strokeWidth="3" fill="none" strokeLinecap="round" />
                                    </svg>
                                </span>
                            </h2>
                            <p className="text-medidesh-teal-50/80 text-base leading-relaxed">{t.sub}</p>
                        </div>

                        {/* Right — actions */}
                        <div className="flex flex-col gap-3 lg:items-end">
                            {/* WhatsApp */}
                            <a
                                href="https://wa.me/+8801608844017"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group inline-flex items-center gap-2.5 bg-white hover:bg-slate-50 text-medidesh-teal-700 px-7 py-3.5 rounded font-bold text-sm shadow-xl shadow-black/15 transition-all hover:-translate-y-0.5"
                            >
                                <WhatsappLogo weight="fill" size={18} />
                                {t.whatsapp}
                                <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                            </a>

                            {/* Email + Phone row */}
                            <div className="flex flex-col sm:flex-row gap-2">
                                <a
                                    href={`mailto:${t.email}`}
                                    className="flex items-center gap-2 bg-white/10 hover:bg-white/20 border border-white/15 hover:border-white/30 text-white px-4 py-2.5 rounded text-xs font-semibold transition-all backdrop-blur-sm"
                                >
                                    <EnvelopeSimple weight="fill" size={14} className="text-medidesh-teal-200 shrink-0" />
                                    {t.email}
                                </a>
                                <a
                                    href={`tel:${t.phone}`}
                                    className="flex items-center gap-2 bg-white/10 hover:bg-white/20 border border-white/15 hover:border-white/30 text-white px-4 py-2.5 rounded text-xs font-semibold transition-all backdrop-blur-sm"
                                >
                                    <Phone weight="fill" size={14} className="text-medidesh-teal-200 shrink-0" />
                                    {t.phone}
                                </a>
                            </div>

                            {/* Hours */}
                            <p className="text-white/40 text-[11px] font-medium lg:text-right">{t.hours}</p>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
}
