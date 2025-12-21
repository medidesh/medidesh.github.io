"use client";

import { PhoneCall, WhatsappLogo, FacebookLogo, EnvelopeSimple, PlusCircle, Prescription } from "@phosphor-icons/react/dist/ssr";
import { PharmacyData } from "@/types/pharmacy";

interface ContactSectionProps {
    pharmacy: PharmacyData;
}

export default function ContactSection({ pharmacy }: ContactSectionProps) {
    return (
        <section id="contact" className="py-16 bg-white relative overflow-hidden">

            {/* Background Motifs aligned with Hero */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-30">
                <div className="absolute inset-0 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] [background-size:32px_32px]"></div>

                <div className="absolute top-[20%] right-[3%] text-pharma-green-100 animate-float opacity-40">
                    <PlusCircle size={100} weight="thin" />
                </div>
                <div className="absolute bottom-[20%] left-[8%] text-blue-100 animate-float opacity-40" style={{ animationDelay: '1.2s' }}>
                    <Prescription size={90} weight="thin" />
                </div>
            </div>

            <div className="container mx-auto px-4 lg:px-8 relative z-10">
                <div className="text-center max-w-2xl mx-auto mb-10">
                    <span className="text-pharma-green-600 font-bold uppercase tracking-[0.2em] text-[10px]">Connect</span>
                    <h2 className="text-2xl lg:text-4xl font-black text-slate-900 mt-3 leading-tight">
                        সহজেই আমাদের <span className="text-pharma-green-600">খুঁজে নিন</span>
                    </h2>
                    <p className="text-slate-500 mt-4 text-base italic">
                        আপনার যেকোনো প্রয়োজনে সরাসরি যোগাযোগ করুন আমাদের সাথে।
                    </p>
                </div>

                <div className="flex flex-wrap justify-center gap-6 lg:gap-8 max-w-7xl mx-auto">
                    {/* Phone Card */}
                    <a
                        href={`tel:${pharmacy.phone}`}
                        className="flex flex-col items-center p-6 bg-white border border-slate-100 rounded-[2rem] shadow-sm hover:shadow-2xl hover:border-pharma-green-200 transition-all group text-center w-full sm:w-[240px]"
                    >
                        <div className="w-12 h-12 bg-pharma-green-50 rounded-xl flex items-center justify-center text-pharma-green-600 mb-4 group-hover:scale-110 group-hover:rotate-6 transition-all">
                            <PhoneCall size={24} weight="fill" />
                        </div>
                        <h3 className="text-lg font-bold text-slate-900 mb-1">সরাসরি কল</h3>
                        <p className="text-slate-500 text-[10px] mb-4 font-medium uppercase tracking-wider">জরুরি অর্ডার</p>
                        <span className="text-[11px] font-black text-pharma-green-600 bg-pharma-green-50 px-3 py-1 rounded-full uppercase tracking-wider">
                            {pharmacy.phone}
                        </span>
                    </a>

                    {/* WhatsApp Card */}
                    {pharmacy.social?.whatsapp && (
                        <a
                            href={pharmacy.social.whatsapp}
                            target="_blank"
                            className="flex flex-col items-center p-6 bg-white border border-slate-100 rounded-[2rem] shadow-sm hover:shadow-2xl hover:border-emerald-200 transition-all group text-center w-full sm:w-[240px]"
                        >
                            <div className="w-12 h-12 bg-emerald-50 rounded-xl flex items-center justify-center text-emerald-600 mb-4 group-hover:scale-110 group-hover:-rotate-6 transition-all">
                                <WhatsappLogo size={24} weight="fill" />
                            </div>
                            <h3 className="text-lg font-bold text-slate-900 mb-1">হোয়াটসঅ্যাপ</h3>
                            <p className="text-slate-500 text-[10px] mb-4 font-medium uppercase tracking-wider">প্রেসক্রিপশন</p>
                            <span className="px-4 py-1.5 bg-emerald-600 text-white rounded-lg font-black text-[10px] uppercase tracking-widest shadow-lg shadow-emerald-100 group-hover:bg-emerald-700 transition-colors">
                                চ্যাট করুন
                            </span>
                        </a>
                    )}

                    {/* Facebook Card */}
                    <a
                        href={pharmacy.social?.facebook || "https://facebook.com/medidesh"}
                        target="_blank"
                        className="flex flex-col items-center p-6 bg-white border border-slate-100 rounded-[2rem] shadow-sm hover:shadow-2xl hover:border-blue-200 transition-all group text-center w-full sm:w-[240px]"
                    >
                        <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center text-blue-600 mb-4 group-hover:scale-110 group-hover:rotate-6 transition-all">
                            <FacebookLogo size={24} weight="fill" />
                        </div>
                        <h3 className="text-lg font-bold text-slate-900 mb-1">ফেসবুক পেজ</h3>
                        <p className="text-slate-500 text-[10px] mb-4 font-medium uppercase tracking-wider">ফলো করুন</p>
                        <span className="px-4 py-1.5 bg-blue-600 text-white rounded-lg font-black text-[10px] uppercase tracking-widest shadow-lg shadow-blue-100 group-hover:bg-blue-700 transition-colors">
                            ভিজিট করুন
                        </span>
                    </a>

                    {/* Email Card */}
                    <a
                        href={`mailto:${pharmacy.email || "info@medidesh.com"}`}
                        className="flex flex-col items-center p-6 bg-white border border-slate-100 rounded-[2rem] shadow-sm hover:shadow-2xl hover:border-slate-800 transition-all group text-center w-full sm:w-[240px]"
                    >
                        <div className="w-12 h-12 bg-slate-50 rounded-xl flex items-center justify-center text-slate-800 mb-4 group-hover:scale-110 group-hover:-rotate-6 transition-all">
                            <EnvelopeSimple size={24} weight="fill" />
                        </div>
                        <h3 className="text-lg font-bold text-slate-900 mb-1">ইমেইল</h3>
                        <p className="text-slate-500 text-[10px] mb-4 font-medium uppercase tracking-wider">অফিসিয়াল</p>
                        <span className="px-4 py-1.5 bg-slate-900 text-white rounded-lg font-black text-[10px] uppercase tracking-widest shadow-lg shadow-slate-200 group-hover:bg-black transition-colors">
                            মেইল করুন
                        </span>
                    </a>
                </div>

                {/* Map Integration */}
                {pharmacy.mapUrl && (
                    <div className="mt-10 rounded-[2rem] overflow-hidden shadow-2xl border-4 border-slate-50 h-[300px] bg-slate-100 relative group max-w-7xl mx-auto">
                        <iframe
                            src={pharmacy.mapUrl}
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            allowFullScreen
                            loading="lazy"
                            title="Pharmacy Location"
                            className="grayscale contrast-125 opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-1000"
                        ></iframe>
                        <div className="absolute bottom-6 left-6 bg-white/95 backdrop-blur-md px-6 py-3 rounded-[1.5rem] border border-slate-200 shadow-xl pointer-events-none hidden md:block">
                            <p className="text-[9px] font-black text-slate-400 uppercase tracking-widest mb-1 font-orbitron">Store Location</p>
                            <p className="text-base font-bold text-slate-900 leading-tight">{pharmacy.address}</p>
                        </div>
                    </div>
                )}
            </div>
        </section>
    );
}
