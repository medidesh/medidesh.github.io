"use client";

import { WhatsappLogo, Envelope, Phone, Headset, ArrowRight, MapPin } from "@phosphor-icons/react/dist/ssr";
import { useLanguage } from "@/lib/i18n";

const T = {
    bn: {
        badge: "যোগাযোগ",
        heading: "আমরা সবসময় পাশে আছি",
        sub: "যেকোনো সাহায্য বা প্রশ্নের জন্য আমাদের টিমের সাথে যোগাযোগ করুন। আমরা সবসময় আপনার সেবায় প্রস্তুত।",
        whatsapp: "হোয়াটসঅ্যাপ",
        email: "info.medidesh@gmail.com",
        phone: "+8801608-844017",
        hours: "শনি-বৃহস্পতি · সকাল ১০টা – রাত ৮টা",
        address: "137/1 Kajipara, Joydebpur, Gazipur - 1700",
    },
    en: {
        badge: "Contact Us",
        heading: "We're here to help",
        sub: "Contact us for any question or help. We're always ready for you.",
        whatsapp: "WhatsApp Us",
        email: "info.medidesh@gmail.com",
        phone: "+8801608-844017",
        hours: "Mon–Fri · 10AM – 8PM",
        address: "137/1 Kajipara, Joydebpur, Gazipur - 1700",
    },
};

export default function CTASection() {
    const { lang } = useLanguage();
    const t = T[lang];

    return (
        <section id="cta" className="py-20 lg:py-32 bg-slate-50 relative overflow-hidden">
            {/* Background Shapes & Vectors */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute top-[-20%] right-[-10%] w-[50%] h-[50%] rounded-full bg-medidesh-teal-500/5 blur-[120px]"></div>
                <div className="absolute bottom-[-20%] left-[-10%] w-[50%] h-[50%] rounded-full bg-blue-500/5 blur-[120px]"></div>
                
                {/* Floating Elements */}
                <div className="absolute top-20 left-[10%] w-24 h-24 border-[3px] border-medidesh-teal-100 rounded-full opacity-50"></div>
                <div className="absolute bottom-32 right-[10%] w-16 h-16 bg-blue-100 rounded-lg rotate-12 opacity-50"></div>
                
                {/* Abstract Line Vector */}
                <svg className="absolute top-40 right-[15%] w-32 h-32 text-medidesh-teal-200/40" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M10 90 Q 50 10 90 90" />
                    <circle cx="50" cy="50" r="10" />
                </svg>
            </div>

            <div className="container mx-auto px-5 lg:px-10 relative z-10">
                <div className="max-w-4xl mx-auto bg-white rounded-[2rem] lg:rounded-[3rem] p-8 lg:p-16 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-slate-100 flex flex-col items-center text-center relative">
                    
                    <div className="w-16 h-16 bg-medidesh-teal-50 rounded-2xl flex items-center justify-center mb-8">
                        <Headset size={32} weight="fill" className="text-medidesh-teal-500" />
                    </div>

                    <h2 className="text-4xl sm:text-5xl font-black text-slate-900 mb-6 leading-[1.1] tracking-[-0.03em] max-w-2xl">{t.heading}</h2>
                    <p className="text-slate-500 text-lg leading-relaxed max-w-xl mb-12">{t.sub}</p>

                    <div className="grid sm:grid-cols-3 gap-4 w-full max-w-3xl mb-12">
                        <a href="https://wa.me/8801608844017" target="_blank" rel="noopener noreferrer"
                            className="flex flex-col items-center gap-3 bg-slate-50 p-6 rounded-2xl transition-all hover:-translate-y-1 hover:bg-green-50 hover:shadow-sm group">
                            <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm">
                                <WhatsappLogo weight="fill" size={24} className="text-green-500 group-hover:scale-110 transition-transform" />
                            </div>
                            <div className="text-center">
                                <p className="text-[13px] font-bold text-slate-400 uppercase tracking-wide mb-1">WhatsApp</p>
                                <p className="font-black text-slate-900 text-[15px]">{t.phone}</p>
                            </div>
                        </a>

                        <a href={`mailto:${t.email}`}
                            className="flex flex-col items-center gap-3 bg-slate-50 p-6 rounded-2xl transition-all hover:-translate-y-1 hover:bg-medidesh-teal-50 hover:shadow-sm group">
                            <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm">
                                <Envelope weight="fill" size={24} className="text-medidesh-teal-500 group-hover:scale-110 transition-transform" />
                            </div>
                            <div className="text-center">
                                <p className="text-[13px] font-bold text-slate-400 uppercase tracking-wide mb-1">Email</p>
                                <p className="font-black text-slate-900 text-[15px]">{t.email}</p>
                            </div>
                        </a>

                        <a href={`tel:${t.phone.replace(/[-\s]/g, "")}`}
                            className="flex flex-col items-center gap-3 bg-slate-50 p-6 rounded-2xl transition-all hover:-translate-y-1 hover:bg-blue-50 hover:shadow-sm group">
                            <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm">
                                <Phone weight="fill" size={24} className="text-blue-500 group-hover:scale-110 transition-transform" />
                            </div>
                            <div className="text-center">
                                <p className="text-[13px] font-bold text-slate-400 uppercase tracking-wide mb-1">Call Us</p>
                                <p className="font-black text-slate-900 text-[15px]">{t.phone}</p>
                            </div>
                        </a>
                    </div>

                    <div className="flex flex-col sm:flex-row items-center gap-6 text-sm font-bold text-slate-400">
                        <div className="flex items-center gap-2">
                            <span className="w-2 h-2 rounded-full bg-medidesh-teal-500 animate-pulse"></span>
                            {t.hours}
                        </div>
                        <span className="hidden sm:inline text-slate-200">|</span>
                        <div className="flex items-center gap-2">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 256 256"><path d="M128,64a40,40,0,1,0,40,40A40,40,0,0,0,128,64Zm0,64a24,24,0,1,1,24-24A24,24,0,0,1,128,128Zm0-112a88.1,88.1,0,0,0-88,88c0,31.4,14.51,64.68,42,96.25a254.19,254.19,0,0,0,41.45,38.3,8,8,0,0,0,9.18,0A254.19,254.19,0,0,0,174,200.25c27.45-31.57,42-64.85,42-96.25A88.1,88.1,0,0,0,128,16Zm30,173.57C135.53,215,128,223,128,223s-7.53-8-30-29.43C74.31,166.45,56,137.45,56,104a72,72,0,0,1,144,0C200,137.45,181.69,166.45,158,189.57Z"></path></svg>
                            {t.address}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
