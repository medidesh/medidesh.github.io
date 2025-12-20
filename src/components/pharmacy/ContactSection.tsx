"use client";

import { PhoneCall, WhatsappLogo, FacebookLogo, EnvelopeSimple, PlusCircle, Prescription } from "@phosphor-icons/react/dist/ssr";
import { PharmacyData } from "@/types/pharmacy";

interface ContactSectionProps {
    pharmacy: PharmacyData;
}

export default function ContactSection({ pharmacy }: ContactSectionProps) {
    return (
        <section id="contact" className="py-24 bg-white relative overflow-hidden">

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
                <div className="text-center max-w-2xl mx-auto mb-16">
                    <span className="text-pharma-green-600 font-bold uppercase tracking-[0.2em] text-xs">Connect</span>
                    <h2 className="text-3xl lg:text-5xl font-black text-slate-900 mt-4 leading-tight">
                        সহজেই আমাদের <span className="text-pharma-green-600">খুঁজে নিন</span>
                    </h2>
                    <p className="text-slate-500 mt-6 text-lg">
                        আপনার যেকোনো প্রয়োজনে সরাসরি যোগাযোগ করুন আমাদের সাথে।
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 max-w-7xl mx-auto">
                    {/* Phone Card */}
                    <a
                        href={`tel:${pharmacy.phone}`}
                        className="flex flex-col items-center p-8 bg-white border border-slate-100 rounded-[2.5rem] shadow-sm hover:shadow-2xl hover:border-pharma-green-200 transition-all group text-center"
                    >
                        <div className="w-16 h-16 bg-pharma-green-50 rounded-2xl flex items-center justify-center text-pharma-green-600 mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all">
                            <PhoneCall size={32} weight="fill" />
                        </div>
                        <h3 className="text-xl font-bold text-slate-900 mb-2">সরাসরি কল</h3>
                        <p className="text-slate-500 text-xs mb-6 font-medium">জরুরি অর্ডারের জন্য</p>
                        <span className="text-sm font-black text-pharma-green-600 bg-pharma-green-50 px-4 py-1.5 rounded-full uppercase tracking-wider">
                            {pharmacy.phone}
                        </span>
                    </a>

                    {/* WhatsApp Card */}
                    {pharmacy.social?.whatsapp && (
                        <a
                            href={pharmacy.social.whatsapp}
                            target="_blank"
                            className="flex flex-col items-center p-8 bg-white border border-slate-100 rounded-[2.5rem] shadow-sm hover:shadow-2xl hover:border-emerald-200 transition-all group text-center"
                        >
                            <div className="w-16 h-16 bg-emerald-50 rounded-2xl flex items-center justify-center text-emerald-600 mb-6 group-hover:scale-110 group-hover:-rotate-6 transition-all">
                                <WhatsappLogo size={32} weight="fill" />
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 mb-2">হোয়াটসঅ্যাপ</h3>
                            <p className="text-slate-500 text-xs mb-6 font-medium">প্রেসক্রিপশন পাঠান</p>
                            <span className="px-6 py-2 bg-emerald-600 text-white rounded-xl font-black text-xs uppercase tracking-widest shadow-lg shadow-emerald-100 group-hover:bg-emerald-700 transition-colors">
                                চ্যাট করুন
                            </span>
                        </a>
                    )}

                    {/* Facebook Card */}
                    {pharmacy.social?.facebook && (
                        <a
                            href={pharmacy.social.facebook}
                            target="_blank"
                            className="flex flex-col items-center p-8 bg-white border border-slate-100 rounded-[2.5rem] shadow-sm hover:shadow-2xl hover:border-blue-200 transition-all group text-center"
                        >
                            <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center text-blue-600 mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all">
                                <FacebookLogo size={32} weight="fill" />
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 mb-2">ফেসবুক পেজ</h3>
                            <p className="text-slate-500 text-xs mb-6 font-medium">ফলো করুন আপডেট পেতে</p>
                            <span className="px-6 py-2 bg-blue-600 text-white rounded-xl font-black text-xs uppercase tracking-widest shadow-lg shadow-blue-100 group-hover:bg-blue-700 transition-colors">
                                ভিজিট করুন
                            </span>
                        </a>
                    )}

                    {/* Email Card */}
                    <a
                        href={`mailto:${pharmacy.email || "info@medidesh.com"}`}
                        className="flex flex-col items-center p-8 bg-white border border-slate-100 rounded-[2.5rem] shadow-sm hover:shadow-2xl hover:border-slate-800 transition-all group text-center"
                    >
                        <div className="w-16 h-16 bg-slate-50 rounded-2xl flex items-center justify-center text-slate-800 mb-6 group-hover:scale-110 group-hover:-rotate-6 transition-all">
                            <EnvelopeSimple size={32} weight="fill" />
                        </div>
                        <h3 className="text-xl font-bold text-slate-900 mb-2">ইমেইল</h3>
                        <p className="text-slate-500 text-xs mb-6 font-medium">অফিসিয়াল যোগাযোগ</p>
                        <span className="px-6 py-2 bg-slate-900 text-white rounded-xl font-black text-xs uppercase tracking-widest shadow-lg shadow-slate-200 group-hover:bg-black transition-colors">
                            মেইল করুন
                        </span>
                    </a>
                </div>

                {/* Map Integration */}
                {pharmacy.mapUrl && (
                    <div className="mt-16 rounded-[3rem] overflow-hidden shadow-2xl border-8 border-slate-50 h-[400px] bg-slate-100 relative group max-w-7xl mx-auto">
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
                        <div className="absolute bottom-10 left-10 bg-white/95 backdrop-blur-md px-8 py-4 rounded-[2rem] border border-slate-200 shadow-xl pointer-events-none hidden md:block">
                            <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">Store Address</p>
                            <p className="text-lg font-bold text-slate-900 leading-tight">{pharmacy.address}</p>
                        </div>
                    </div>
                )}
            </div>
        </section>
    );
}
