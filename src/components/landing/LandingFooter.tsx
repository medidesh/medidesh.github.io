"use client";

import { useState } from "react";
import Link from "next/link";
import { FacebookLogo, LinkedinLogo, InstagramLogo, YoutubeLogo, GooglePlayLogoIcon, Monitor, Heart, AppleLogo } from "@phosphor-icons/react/dist/ssr";
import { useLanguage } from "@/lib/i18n";
import ComingSoonModal from "@/components/ui/ComingSoonModal";

const T = {
    bn: {
        tagline: "ফার্মেসি মালিকদের জন্য সবচেয়ে নির্ভরযোগ্য ও আধুনিক ডিজিটাল ম্যানেজমেন্ট সফটওয়্যার।",
        productLabel: "প্রোডাক্ট",
        companyLabel: "কোম্পানি",
        downloadLabel: "ডাউনলোড করুন",
        downloadSub: "অ্যান্ড্রয়েড ও কম্পিউটারে ব্যবহার করুন — অফলাইনেও পূর্ণ কার্যকর।",
        copyright: "সর্বস্বত্ব সংরক্ষিত।",
        product: [
            { label: "ফিচারসমূহ", href: "/#features" },
            { label: "প্রাইসিং", href: "/#pricing" },
            { label: "ডাউনলোড", href: "/#download" },
            { label: "আপডেট লগ", href: "/changelog" },
        ],
        company: [
            { label: "আমাদের সম্পর্কে", href: "/about" },
            { label: "মেডিদেশ স্টোর", href: "/store" },
            { label: "যোগাযোগ", href: "/#cta" },
            { label: "গোপনীয়তা নীতি", href: "/privacy" },
            { label: "শর্তাবলী", href: "/terms" },
        ],
    },
    en: {
        tagline: "The most reliable and modern digital management software for pharmacy owners.",
        productLabel: "Product",
        companyLabel: "Company",
        downloadLabel: "Download",
        downloadSub: "Use on Android and computer — fully functional even offline.",
        copyright: "All rights reserved.",
        product: [
            { label: "Features", href: "/#features" },
            { label: "Pricing", href: "/#pricing" },
            { label: "Download", href: "/#download" },
            { label: "Changelog", href: "/changelog" },
        ],
        company: [
            { label: "About Us", href: "/about" },
            { label: "Medidesh Store", href: "/store" },
            { label: "Contact", href: "/#cta" },
            { label: "Privacy Policy", href: "/privacy" },
            { label: "Terms & Conditions", href: "/terms" },
        ],
    },
};

export default function LandingFooter() {
    const currentYear = new Date().getFullYear();
    const { lang } = useLanguage();
    const t = T[lang];
    const [isComingSoonOpen, setIsComingSoonOpen] = useState(false);
    const [comingSoonPlatform, setComingSoonPlatform] = useState<"Windows" | "App Store" | null>(null);

    const handleAppStoreClick = (e: React.MouseEvent) => {
        e.preventDefault();
        setComingSoonPlatform("App Store");
        setIsComingSoonOpen(true);
    };

    return (
        <footer className="bg-zubaz-bg text-slate-600 pt-16 pb-8 border-t border-slate-200">
            <div className="container mx-auto px-5 lg:px-10">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
                    <div className="lg:col-span-1">
                        <Link href="/" className="flex items-center gap-2 group mb-5">
                            <img src="/assets/logo/Logo.svg" alt="Medidesh Logo" className="w-7 h-7 group-hover:scale-105 transition-transform" />
                            <span className="text-lg font-black text-slate-900 tracking-tight">{lang === "bn" ? "মেডিদেশ" : "Medidesh"}</span>
                        </Link>
                        <p className="text-[13px] leading-relaxed mb-6 text-slate-500">{t.tagline}</p>
                        <div className="flex items-center gap-2">
                            {[
                                { href: "https://facebook.com/medidesh", Icon: FacebookLogo, label: "Facebook" },
                                { href: "#", Icon: LinkedinLogo, label: "LinkedIn" },
                                { href: "#", Icon: InstagramLogo, label: "Instagram" },
                                { href: "#", Icon: YoutubeLogo, label: "YouTube" },
                            ].map(({ href, Icon, label }) => (
                                <a key={label} href={href} target="_blank" rel="noopener noreferrer" aria-label={label}
                                    className="w-8 h-8 border border-slate-200 bg-white flex items-center justify-center text-slate-400 hover:text-medidesh-teal-600 hover:border-medidesh-teal-200 transition-all">
                                    <Icon size={14} weight="fill" />
                                </a>
                            ))}
                        </div>
                    </div>

                    <div>
                        <h4 className="text-slate-900 font-black text-[11px] mb-5 uppercase tracking-widest">{t.productLabel}</h4>
                        <ul className="space-y-3 text-[13px]">
                            {t.product.map(({ label, href }) => (
                                <li key={label}><a href={href} className="text-slate-500 hover:text-medidesh-teal-600 transition-colors">{label}</a></li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-slate-900 font-black text-[11px] mb-5 uppercase tracking-widest">{t.companyLabel}</h4>
                        <ul className="space-y-3 text-[13px]">
                            {t.company.map(({ label, href }) => (
                                <li key={label}><Link href={href} className="text-slate-500 hover:text-medidesh-teal-600 transition-colors">{label}</Link></li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-slate-900 font-black text-[11px] mb-5 uppercase tracking-widest">{t.downloadLabel}</h4>
                        <p className="text-[13px] mb-5 leading-relaxed text-slate-500">{t.downloadSub}</p>
                        <div className="flex flex-col gap-2">
                            <a href="https://play.google.com/store/apps/details?id=com.medidesh.pharmacy" target="_blank" rel="noopener noreferrer"
                                className="flex items-center gap-2.5 bg-slate-900 text-white px-3.5 py-2.5 text-[13px] font-bold transition-all hover:-translate-y-px">
                                <GooglePlayLogoIcon weight="fill" size={16} className="text-medidesh-teal-400" />
                                <span>Google Play</span>
                            </a>
                            <button onClick={handleAppStoreClick}
                                className="flex w-full items-center gap-2.5 bg-white border border-slate-200 text-slate-700 px-3.5 py-2.5 text-[13px] font-bold transition-all hover:border-slate-300 cursor-pointer">
                                <AppleLogo weight="fill" size={16} className="text-slate-400" />
                                <span>App Store</span>
                            </button>
                        </div>
                    </div>
                </div>

                <div className="pt-6 border-t border-slate-200 flex flex-col sm:flex-row justify-between items-center gap-3 text-[11px] text-slate-400 font-medium">
                    <span>© {currentYear} {lang === "bn" ? "মেডিদেশ।" : "Medidesh."} {t.copyright}</span>
                    <div className="flex items-center gap-1">
                        <span>Made with</span>
                        <Heart weight="fill" size={10} className="text-rose-500" />
                        <span>in Bangladesh</span>
                    </div>
                </div>
            </div>

            <ComingSoonModal isOpen={isComingSoonOpen} onClose={() => setIsComingSoonOpen(false)} platform={comingSoonPlatform} />
        </footer>
    );
}
