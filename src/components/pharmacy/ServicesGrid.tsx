"use client";

import Link from "next/link";
import {
    Moped,
    Stethoscope,
    TestTube,
    FirstAid,
    SealCheck,
    PhoneCall,
    PlusCircle,
    Prescription
} from "@phosphor-icons/react/dist/ssr";

export default function ServicesGrid() {
    const services = [
        {
            icon: <Moped weight="duotone" />,
            title: "হোম ডেলিভারি",
            desc: "দ্রুততম সময়ে ঔষধ ডেলিভারি সুবিধা আপনার দরজায়।",
            bg: "bg-orange-50",
            text: "text-orange-600",
            border: "border-orange-100",
        },
        {
            icon: <Stethoscope weight="duotone" />,
            title: "পরামর্শ সেবা",
            desc: "ফার্মাসিস্টের সঠিক দিকনির্দেশনা ও ফ্রী কনসালটেশন।",
            bg: "bg-purple-50",
            text: "text-purple-600",
            border: "border-purple-100",
        },
        {
            icon: <TestTube weight="duotone" />,
            title: "ডায়াগনস্টিক",
            desc: "টেস্ট ও পরীক্ষার প্রয়োজনীয় সকল তথ্য ও সহায়তা।",
            bg: "bg-blue-50",
            text: "text-blue-600",
            border: "border-blue-100",
        },
        {
            icon: <FirstAid weight="duotone" />,
            title: "অক্সিজেন সেবা",
            desc: "জরুরি অক্সিজেন সিলিন্ডার ২৪ ঘণ্টা হোম সাপোর্ট।",
            bg: "bg-rose-50",
            text: "text-rose-600",
            border: "border-rose-100",
        },
        {
            icon: <SealCheck weight="duotone" />,
            title: "মডেল ফার্মেসী",
            desc: "সরকারি মানদণ্ড ও সঠিক নাতিশীতোষ্ণ তাপমাত্রার ঔষধ।",
            bg: "bg-emerald-50",
            text: "text-emerald-600",
            border: "border-emerald-100",
        },
        {
            icon: <PhoneCall weight="duotone" />,
            title: "টেলিমেডিসিন",
            desc: "সরাসরি ফোনে বিশেষজ্ঞ ডাক্তারের পরামর্শ সেবা।",
            bg: "bg-cyan-50",
            text: "text-cyan-600",
            border: "border-cyan-100",
        },
    ];

    return (
        <section id="services" className="py-24 bg-slate-50 relative overflow-hidden text-slate-900 border-t border-slate-100">

            {/* Background Motifs aligned with Hero */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-30">
                <div className="absolute inset-0 bg-[radial-gradient(#cbd5e1_1px,transparent_1px)] [background-size:32px_32px]"></div>

                <div className="absolute top-[10%] right-[2%] text-blue-100 animate-float opacity-40">
                    <PlusCircle size={120} weight="thin" />
                </div>
                <div className="absolute bottom-[20%] left-[-2%] text-emerald-100 animate-float opacity-40" style={{ animationDelay: '2s' }}>
                    <Prescription size={110} weight="thin" />
                </div>

                <svg className="absolute bottom-0 left-0 w-full h-full opacity-10" viewBox="0 0 100 100" preserveAspectRatio="none">
                    <path d="M-10,70 Q30,90 50,70 T110,70" fill="none" stroke="#22c55e" strokeWidth="0.1" strokeDasharray="1,2" className="animate-pulse" />
                </svg>
            </div>

            <div className="container mx-auto px-4 lg:px-8 relative z-10">
                <div className="text-center max-w-2xl mx-auto mb-16">
                    <span className="text-pharma-green-600 font-bold uppercase tracking-[0.2em] text-xs">Healthcare Support</span>
                    <h2 className="text-3xl lg:text-4xl font-black font-heading mt-3">আমাদের সেবাসমূহ</h2>
                    <p className="text-slate-500 mt-6 text-base">
                        সর্বোত্তম সেবার নিশ্চয়তায় আমরা আছি আপনার পাশে সবসময়।
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    {services.map((service, index) => (
                        <div
                            key={index}
                            className={`group p-8 rounded-[2.5rem] bg-white border border-slate-200 hover:border-pharma-green-200 hover:shadow-2xl hover:shadow-slate-200/50 transition-all duration-300 flex flex-col items-start gap-6`}
                        >
                            <div className={`w-16 h-16 rounded-2xl flex items-center justify-center shrink-0 ${service.bg} ${service.text} group-hover:scale-110 group-hover:-rotate-3 transition-all shadow-sm`}>
                                <div className="text-3xl">{service.icon}</div>
                            </div>

                            <div>
                                <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-pharma-green-600 transition-colors">
                                    {service.title}
                                </h3>
                                <p className="text-slate-500 leading-relaxed text-sm">
                                    {service.desc}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
