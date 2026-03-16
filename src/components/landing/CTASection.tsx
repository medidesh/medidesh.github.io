"use client";

import { EnvelopeSimple, Phone, WhatsappLogo } from "@phosphor-icons/react/dist/ssr";
import { useLanguage } from "@/lib/i18n";

const T = {
    bn: {
        heading: "সহযোগিতা ও যোগাযোগ",
        sub: "যেকোনো পরামর্শ বা কারিগরি সমস্যার দ্রুত সমাধানে আমাদের সাপোর্ট টিম আপনার সহায়তায় প্রস্তুত।",
        whatsappBtn: "সরাসরি হোয়াটসঅ্যাপ করুন",
        email: "support@medidesh.com",
        phone: "+8801608-844017",
        hours: "শনি–বৃহস্পতি, সকাল ১০টা – রাত ৮টা",
    },
    en: {
        heading: "Support & Contact",
        sub: "Our support team is ready to help you with any advice or technical issues.",
        whatsappBtn: "WhatsApp Us Directly",
        email: "support@medidesh.com",
        phone: "+8801608-844017",
        hours: "Sat–Thu, 10 AM – 8 PM",
    },
};

export default function CTASection() {
    const { lang } = useLanguage();
    const t = T[lang];

    return (
        <section id="cta" className="py-16 lg:py-20 bg-medidesh-teal-600 relative overflow-hidden">
            {/* Subtle Grid Only */}
            <div className="absolute inset-0 opacity-[0.05] pointer-events-none"
                style={{ backgroundImage: "radial-gradient(circle, #fff 1.5px, transparent 1.5px)", backgroundSize: "32px 32px" }} />

            <div className="container mx-auto px-6 lg:px-12 relative z-10">
                <div className="max-w-4xl mx-auto">
                    <div className="flex flex-col md:flex-row items-center justify-between gap-10 bg-white/10 backdrop-blur-md border border-white/20 p-8 lg:p-12 rounded-2xl shadow-2xl">
                        <div className="flex-1 text-center md:text-left">
                            <h2 className="text-3xl lg:text-4xl font-black text-white mb-4 leading-tight tracking-tight">
                                {t.heading}
                            </h2>
                            <p className="text-medidesh-teal-50 text-base lg:text-lg leading-relaxed max-w-xl mx-auto md:mx-0">
                                {t.sub}
                            </p>
                        </div>

                        <div className="flex flex-col items-center md:items-end gap-6 shrink-0">
                            {/* Primary Button */}
                            <a
                                href="https://wa.me/+8801608844017"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center justify-center gap-2.5 bg-white hover:bg-slate-50 text-medidesh-teal-700 px-8 py-3.5 rounded-lg font-bold text-base shadow-xl transition-all hover:-translate-y-0.5"
                            >
                                <WhatsappLogo weight="fill" size={20} />
                                {t.whatsappBtn}
                            </a>

                            {/* Secondary Links */}
                            <div className="flex flex-col sm:flex-row items-center gap-4 text-white/90">
                                <a href={`mailto:${t.email}`} className="flex items-center gap-2 text-sm font-medium hover:text-white transition-colors">
                                    <EnvelopeSimple size={16} weight="bold" />
                                    {t.email}
                                </a>
                                <div className="hidden sm:block w-px h-3 bg-white/20" />
                                <a href={`tel:${t.phone}`} className="flex items-center gap-2 text-sm font-medium hover:text-white transition-colors">
                                    <Phone size={16} weight="bold" />
                                    {t.phone}
                                </a>
                            </div>

                            <p className="text-white/50 text-[10px] uppercase tracking-widest font-bold">{t.hours}</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
