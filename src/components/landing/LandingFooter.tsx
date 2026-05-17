"use client";

import { useState } from "react";
import Link from "next/link";
import { FacebookLogo, LinkedinLogo, InstagramLogo, YoutubeLogo, GooglePlayLogoIcon, Monitor, Heart, AppleLogo, WindowsLogo } from "@phosphor-icons/react/dist/ssr";
import { useLanguage } from "@/lib/i18n";
import ComingSoonModal from "@/components/ui/ComingSoonModal";

const T = {
    bn: {
        tagline: "ফার্মেসি মালিকদের জন্য সবচেয়ে নির্ভরযোগ্য ও আধুনিক ডিজিটাল ম্যানেজমেন্ট সফটওয়্যার।",
        productLabel: "প্রোডাক্ট",
        companyLabel: "কোম্পানি",
        downloadLabel: "ডাউনলোড করুন",
        downloadSub: "অ্যান্ড্রয়েড ও কম্পিউটারে ব্যবহার করুন — আপনার ফার্মেসির জন্য পূর্ণাঙ্গ সলিউশন।",
        copyright: "সর্বস্বত্ব সংরক্ষিত।",
        product: [
            { label: "ফিচারসমূহ", href: "/#features" },
            { label: "প্রাইসিং", href: "/#pricing" },
            { label: "ডাউনলোড", href: "/#download" },
        ],
        company: [
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
        downloadSub: "Use on Android and computer — a complete solution for your pharmacy.",
        copyright: "All rights reserved.",
        product: [
            { label: "Features", href: "/#features" },
            { label: "Pricing", href: "/#pricing" },
            { label: "Download", href: "/#download" },
        ],
        company: [
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

    const handleComingSoonClick = (platform: "Windows" | "App Store", e: React.MouseEvent) => {
        e.preventDefault();
        setComingSoonPlatform(platform);
        setIsComingSoonOpen(true);
    };

    return (
        <footer className="relative bg-white text-slate-600 pt-20 pb-8 overflow-hidden">
            {/* Top decorative gradient border */}
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-medidesh-teal-400 via-blue-400 to-amber-400"></div>

            {/* Background Shapes */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute top-0 right-0 w-[800px] h-[800px] rounded-full bg-slate-50/80 -translate-y-1/2 translate-x-1/3 blur-3xl"></div>
                <div className="absolute bottom-0 left-0 w-[600px] h-[600px] rounded-full bg-medidesh-teal-50/50 translate-y-1/3 -translate-x-1/4 blur-3xl"></div>
                
                {/* Vectors */}
                <svg className="absolute top-20 right-20 w-32 h-32 text-slate-100 rotate-45" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="50" cy="50" r="40" strokeDasharray="4 4" />
                    <circle cx="50" cy="50" r="20" />
                </svg>
            </div>

            <div className="container mx-auto px-5 lg:px-10 relative z-10">
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
                        <div className="flex flex-col gap-3">
                            <a href="https://play.google.com/store/apps/details?id=com.medidesh.pharmacy" target="_blank" rel="noopener noreferrer"
                                className="flex items-center gap-2.5 bg-medidesh-teal-50 border border-medidesh-teal-200 text-medidesh-teal-700 px-4 py-3 rounded-none text-[13px] font-bold transition-all hover:-translate-y-1 hover:shadow-md hover:bg-medidesh-teal-100 group">
                                <GooglePlayLogoIcon weight="fill" size={18} className="text-medidesh-teal-500 group-hover:scale-110 transition-transform" />
                                <span>Google Play</span>
                            </a>
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
