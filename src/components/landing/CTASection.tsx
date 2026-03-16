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
        hours: "শনি–বৃহস্পতি,সকাল ১০টা–রাত ৮টা",
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
        <section id="cta" className="py-16 lg:py-24 bg-slate-900 relative overflow-hidden">
            {/* Minimalist Grid Pattern */}
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none"
                style={{ backgroundImage: "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)", backgroundSize: "40px 40px" }} />

            <div className="container mx-auto px-6 lg:px-12 relative z-10">
                <div className="max-w-5xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-12 bg-slate-800/40 backdrop-blur-xl border border-white/5 p-8 lg:p-14 rounded-3xl shadow-2xl">
                    <div className="flex-1 text-center lg:text-left">
                        <h2 className="text-3xl lg:text-5xl font-black text-white mb-5 leading-tight tracking-tight font-hind-siliguri">
                            {t.heading}
                        </h2>
                        <p className="text-slate-400 text-lg leading-relaxed max-w-xl mx-auto lg:mx-0 font-hind-siliguri">
                            {t.sub}
                        </p>
                    </div>

                    <div className="flex flex-col items-center lg:items-end gap-8 shrink-0">
                        {/* Primary Action */}
                        <a
                            href="https://wa.me/+8801608844017"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group flex items-center justify-center gap-3 bg-medidesh-teal-500 hover:bg-medidesh-teal-400 text-white px-10 py-4 rounded-xl font-bold text-lg shadow-xl shadow-medidesh-teal-500/10 transition-all hover:-translate-y-1 hover:shadow-2xl"
                        >
                            <WhatsappLogo weight="fill" size={24} className="group-hover:rotate-12 transition-transform" />
                            {t.whatsappBtn}
                        </a>

                        <div className="flex flex-col sm:flex-row items-center gap-6">
                            <a 
                                href={`mailto:${t.email}`} 
                                className="flex items-center gap-3 px-5 py-3 bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg text-white transition-all hover:border-white/20"
                                title={t.email}
                            >
                                <EnvelopeSimple size={20} weight="fill" className="text-medidesh-teal-400" />
                                <span className="text-sm font-semibold tracking-wide">{lang === "bn" ? "ইমেইল করুন" : "Email Support"}</span>
                            </a>
                            <a 
                                href={`tel:${t.phone}`} 
                                className="flex items-center gap-3 px-5 py-3 bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg text-white transition-all hover:border-white/20"
                                title={t.phone}
                            >
                                <Phone size={20} weight="fill" className="text-medidesh-teal-400" />
                                <span className="text-sm font-semibold tracking-wide">{lang === "bn" ? "ফোন করুন" : "Call Directly"}</span>
                            </a>
                        </div>

                        <div className="flex flex-col items-center lg:items-end opacity-50">
                            <p className="text-[10px] uppercase tracking-[0.2em] font-black text-slate-300">{t.hours}</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
