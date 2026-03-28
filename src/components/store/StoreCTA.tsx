"use client";

import { useLanguage } from "@/lib/i18n";
import { WhatsappLogo, Headset } from "@phosphor-icons/react/dist/ssr";

const T = {
    bn: {
        badge: "টেকনিক্যাল সাপোর্ট",
        title: "কোন হার্ডওয়্যারটি আপনার জন্য সঠিক?",
        desc: "আমাদের এক্সপার্ট টিমের সাথে কথা বলুন। আমরা আপনার ফার্মেসির চাহিদা অনুযায়ী সঠিক পস প্রিন্টার ও স্ক্যানার নির্বাচনে সরাসরি সাহায্য করব।",
        btn: "এক্সপার্টের পরামর্শ",
    },
    en: {
        badge: "Technical Support",
        title: "Not sure which hardware setup is right?",
        desc: "Talk to our team. We will help you choose the perfect POS printer and scanner combination based on your pharmacy's specific needs.",
        btn: "Get Expert Advice",
    }
};

export default function StoreCTA() {
    const { lang } = useLanguage();
    const t = T[lang];

    const whatsappMessage = encodeURIComponent(
        lang === "bn" 
            ? "হ্যালো মেডিদেশ, স্টোর থেকে হার্ডওয়্যার সিলেক্ট করার বিষয়ে আমার কিছু পরামর্শ প্রয়োজন।"
            : "Hello Medidesh, I need some consultation regarding hardware selection from your store."
    );
    const whatsappLink = `https://wa.me/+8801700000000?text=${whatsappMessage}`;

    return (
        <section className="py-12 lg:py-16 bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800">
            <div className="container mx-auto px-6 lg:px-12 max-w-[1200px]">
                <div className="bg-medidesh-teal-50 dark:bg-slate-950 rounded border border-medidesh-teal-100 dark:border-slate-800 p-6 lg:p-10 flex flex-col lg:flex-row items-center gap-8 justify-between relative overflow-hidden shadow-sm">
                    
                    {/* Background embellishment */}
                    <svg className="absolute -left-10 bottom-0 w-48 h-48 opacity-[0.05] pointer-events-none" viewBox="0 0 250 250" fill="none" aria-hidden="true">
                        <path d="M125,20 C180,8 230,58 238,120 C246,182 208,232 148,240 C88,248 30,208 18,148 C6,88 40,30 90,18 C105,13 115,22 125,20 Z" fill="#2E8B57" />
                    </svg>

                    <div className="flex-1 text-center lg:text-left z-10 flex flex-col items-center lg:items-start">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-400 text-xs font-bold uppercase tracking-wider mb-4 shadow-sm">
                            <Headset size={14} weight="fill" className="text-medidesh-teal-500" />
                            {t.badge}
                        </div>
                        <h2 className="text-2xl lg:text-3xl font-black text-slate-900 dark:text-white mb-3 tracking-tight">
                            {t.title}
                        </h2>
                        <p className="text-slate-600 dark:text-slate-400 leading-relaxed max-w-xl text-sm lg:text-base">
                            {t.desc}
                        </p>
                    </div>

                    <div className="shrink-0 z-10">
                        <a
                            href={whatsappLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center justify-center gap-2 bg-medidesh-teal-500 hover:bg-medidesh-teal-600 text-white px-6 py-3.5 rounded font-bold transition-all shadow-lg hover:shadow-medidesh-teal-500/20 hover:-translate-y-0.5"
                        >
                            <WhatsappLogo weight="fill" size={20} />
                            <span>{t.btn}</span>
                        </a>
                    </div>

                </div>
            </div>
        </section>
    );
}
