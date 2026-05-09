"use client";

import {
    Lightning, UsersThree, Package, WarningCircle, Printer,
    CloudCheck, Scroll, ArrowUUpLeft, ChartBar, DeviceMobile,
    Database, BellRinging
} from "@phosphor-icons/react/dist/ssr";
import { useLanguage } from "@/lib/i18n";
import { DotGrid } from "../ui/Vectors";
import PhoneMockup from "../ui/PhoneMockup";
import { useState, useEffect } from "react";

const featureImages = [
    "/assets/app_screenshots/sale.PNG",
    "/assets/app_screenshots/IMG_0533.PNG",
    "/assets/app_screenshots/global_inventory.PNG",
    "/assets/app_screenshots/notifications.PNG",
    "/assets/app_screenshots/IMG_0534.PNG",
    "/assets/app_screenshots/multi_users.PNG",
    "/assets/app_screenshots/sale_details.PNG",
    "/assets/app_screenshots/analytics.PNG",
    "/assets/app_screenshots/customers.PNG",
    "/assets/app_screenshots/dality_report.PNG",
    "/assets/app_screenshots/sale_return.PNG",
    "/assets/app_screenshots/mobile_app.PNG",
];

const features = {
    bn: [
        { icon: Lightning, title: "দ্রুত পয়েন্ট অব সেল", desc: "বারকোড স্ক্যানার ও শর্টকাট কি দিয়ে সেকেন্ডের মধ্যে বিল।", img: featureImages[0] },
        { icon: Package, title: "রিয়েল-টাইম ইনভেন্টরি", desc: "প্রতিটি ওষুধের স্টক লাইভ ট্র্যাক করুন।", img: featureImages[1] },
        { icon: Database, title: "২০,০০০+ গ্লোবাল", desc: "হাজার হাজার ওষুধের তালিকা আগে থেকেই যুক্ত।", img: featureImages[2] },
        { icon: WarningCircle, title: "মেয়াদোত্তীর্ণ সতর্কতা", desc: "মেয়াদ শেষের ৩ মাস আগেই স্বয়ংক্রিয় নোটিফিকেশন।", img: featureImages[3] },
        { icon: BellRinging, title: "স্মার্ট নোটিফিকেশন", desc: "স্টক শর্টেজ এবং গুরুত্বপূর্ণ আপডেটের লাইভ অ্যালার্ট।", img: featureImages[4] },
        { icon: UsersThree, title: "মাল্টি-ইউজার", desc: "মালিক, ম্যানেজার ও স্টাফের জন্য আলাদা অ্যাকাউন্ট।", img: featureImages[5] },
        { icon: Printer, title: "থার্মাল প্রিন্টিং", desc: "যেকোনো থার্মাল প্রিন্টারে সঙ্গে সঙ্গে ইনভয়েস।", img: featureImages[6] },
        { icon: CloudCheck, title: "ক্লাউড ব্যাকআপ", desc: "যেকোনো জায়গা থেকে আপনার দোকানের রিপোর্ট দেখুন।", img: featureImages[7] },
        { icon: Scroll, title: "বাকি খাতা", desc: "কাস্টমার ও সাপ্লায়ারের বকেয়া হিসাব সংরক্ষিত থাকে।", img: featureImages[8] },
        { icon: ChartBar, title: "বিক্রয় রিপোর্ট", desc: "দৈনিক, সাপ্তাহিক ও মাসিক বিক্রয় রিপোর্ট পিডিএফ।", img: featureImages[9] },
        { icon: ArrowUUpLeft, title: "রিটার্ন ব্যবস্থাপনা", desc: "পণ্য ফেরত বা পরিবর্তনের হিসাব সারুন কয়েক সেকেন্ডে।", img: featureImages[10] },
        { icon: DeviceMobile, title: "মোবাইল অ্যাপ", desc: "অ্যান্ড্রয়েড ফোনে পূর্ণাঙ্গ POS ও ইনভেন্টরি।", img: featureImages[11] },
    ],
    en: [
        { icon: Lightning, title: "Fast POS", desc: "Create bills in seconds with barcode shortcuts.", img: featureImages[0] },
        { icon: Package, title: "Real-time Inventory", desc: "Track live stock for every single medicine.", img: featureImages[1] },
        { icon: Database, title: "20K+ Global Data", desc: "Thousands of medicines are pre-loaded to search.", img: featureImages[2] },
        { icon: WarningCircle, title: "Expiry Alerts", desc: "Automatic notifications 3 months before expiry.", img: featureImages[3] },
        { icon: BellRinging, title: "Smart Alerts", desc: "Live alerts for stock shortages and updates.", img: featureImages[4] },
        { icon: UsersThree, title: "Multi-user Access", desc: "Separate permissions for owners and staff.", img: featureImages[5] },
        { icon: Printer, title: "Thermal Printing", desc: "Print invoices instantly on any regular printer.", img: featureImages[6] },
        { icon: CloudCheck, title: "Cloud Backup", desc: "View your store's reports and data from anywhere.", img: featureImages[7] },
        { icon: Scroll, title: "Credit Ledger", desc: "Customer and supplier balances tracked automatically.", img: featureImages[8] },
        { icon: ChartBar, title: "Sales Analytics", desc: "Download daily, weekly, monthly reports in PDF.", img: featureImages[9] },
        { icon: ArrowUUpLeft, title: "Easy Returns", desc: "Handle product returns and exchanges in seconds.", img: featureImages[10] },
        { icon: DeviceMobile, title: "Mobile App", desc: "Full POS on Android — works offline too.", img: featureImages[11] },
    ],
};

const header = {
    bn: { badge: "ফিচারসমূহ", heading1: "ব্যবসা পরিচালনার", heading2: "সবকিছু এক জায়গায়", sub: "টেকনাফ থেকে তেঁতুলিয়া — বাস্তব চাহিদা মাথায় রেখে প্রতিটি ফিচার সাজানো হয়েছে।" },
    en: { badge: "Features", heading1: "Everything you need,", heading2: "in one place", sub: "From Teknaf to Tetulia — every feature designed with real-world needs in mind." },
};

export default function FeaturesSection() {
    const { lang } = useLanguage();
    const t = header[lang];
    const list = features[lang];

    const [activeIndex, setActiveIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveIndex((prev) => (prev + 1) % list.length);
        }, 3000); 
        return () => clearInterval(interval);
    }, [list.length]);

    const leftFeatures = list.slice(0, 6);
    const rightFeatures = list.slice(6, 12);

    return (
        <section id="features" className="py-20 lg:py-32 bg-slate-50 relative overflow-hidden border-y border-slate-200">
            {/* Decorative dot grid */}
            <DotGrid className="absolute left-4 bottom-12 w-20 text-slate-300 hidden lg:block" />

            <div className="container mx-auto px-5 lg:px-10">
                <div className="max-w-2xl mx-auto text-center mb-16 lg:mb-24">
                    <h2 className="text-3xl lg:text-5xl font-black text-slate-900 mb-6 leading-[1.1] tracking-[-0.03em]">
                        {t.heading1} <br/> {t.heading2}
                    </h2>
                    <p className="text-slate-600 text-lg leading-relaxed max-w-xl mx-auto">{t.sub}</p>
                </div>

                <div className="flex flex-col lg:flex-row items-center justify-center gap-10 lg:gap-16 max-w-7xl mx-auto">
                    
                    {/* Left Column Features */}
                    <div className="w-full lg:w-1/3 space-y-8 flex flex-col items-start lg:items-end order-2 lg:order-1">
                        {leftFeatures.map((feature, idx) => {
                            const isActive = activeIndex === idx;
                            return (
                                <div 
                                    key={idx} 
                                    className={`flex gap-4 lg:flex-row-reverse items-start text-left lg:text-right group cursor-pointer transition-all duration-300 ${isActive ? 'opacity-100 scale-105' : 'opacity-60 hover:opacity-100'}`}
                                    onClick={() => setActiveIndex(idx)}
                                >
                                    <div className={`w-12 h-12 shrink-0 border-2 rounded-none flex items-center justify-center transition-colors shadow-[2px_2px_0px_0px_rgba(15,23,42,1)]
                                        ${isActive ? 'bg-[#9fff40] border-slate-900' : 'bg-white border-slate-900 group-hover:bg-[#9fff40]'}
                                    `}>
                                        <feature.icon size={22} weight={isActive ? "fill" : "bold"} className="text-slate-900" />
                                    </div>
                                    <div>
                                        <h3 className={`font-black text-[16px] mb-1 transition-colors ${isActive ? 'text-medidesh-teal-600' : 'text-slate-900'}`}>{feature.title}</h3>
                                        <p className="text-[13px] text-slate-600 leading-relaxed font-medium max-w-[220px] lg:max-w-none">{feature.desc}</p>
                                    </div>
                                </div>
                            );
                        })}
                    </div>

                    {/* Center Mockup */}
                    <div className="w-full sm:w-[320px] lg:w-1/3 flex justify-center order-1 lg:order-2">
                        <div className="relative w-full max-w-[300px]">
                            {/* Abstract glow */}
                            <div className="absolute inset-0 bg-medidesh-teal-400/20 rounded-full blur-[60px] transition-all duration-500"></div>
                            
                            <PhoneMockup showNotch={false} frameColor="bg-slate-900" className="relative z-10 shadow-2xl border-4 border-white transition-all duration-500">
                                <div className="w-full h-full relative">
                                    {list.map((feature, i) => (
                                        <img 
                                            key={i}
                                            src={feature.img} 
                                            alt={feature.title}
                                            className={`absolute inset-0 w-full h-full object-cover object-top transition-opacity duration-500 ${activeIndex === i ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}
                                        />
                                    ))}
                                </div>
                            </PhoneMockup>
                        </div>
                    </div>

                    {/* Right Column Features */}
                    <div className="w-full lg:w-1/3 space-y-8 flex flex-col items-start order-3">
                        {rightFeatures.map((feature, idx) => {
                            const globalIdx = idx + 6;
                            const isActive = activeIndex === globalIdx;
                            return (
                                <div 
                                    key={globalIdx} 
                                    className={`flex gap-4 items-start text-left group cursor-pointer transition-all duration-300 ${isActive ? 'opacity-100 scale-105' : 'opacity-60 hover:opacity-100'}`}
                                    onClick={() => setActiveIndex(globalIdx)}
                                >
                                    <div className={`w-12 h-12 shrink-0 border-2 rounded-none flex items-center justify-center transition-colors shadow-[2px_2px_0px_0px_rgba(15,23,42,1)]
                                        ${isActive ? 'bg-[#9fff40] border-slate-900' : 'bg-white border-slate-900 group-hover:bg-[#9fff40]'}
                                    `}>
                                        <feature.icon size={22} weight={isActive ? "fill" : "bold"} className="text-slate-900" />
                                    </div>
                                    <div>
                                        <h3 className={`font-black text-[16px] mb-1 transition-colors ${isActive ? 'text-medidesh-teal-600' : 'text-slate-900'}`}>{feature.title}</h3>
                                        <p className="text-[13px] text-slate-600 leading-relaxed font-medium max-w-[220px] lg:max-w-none">{feature.desc}</p>
                                    </div>
                                </div>
                            );
                        })}
                    </div>

                </div>
            </div>
        </section>
    );
}
