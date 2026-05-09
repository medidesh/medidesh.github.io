"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { List, X, Globe } from "@phosphor-icons/react/dist/ssr";
import { useLanguage } from "@/lib/i18n";

export default function LandingHeader() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [activeSection, setActiveSection] = useState("");
    const [mounted, setMounted] = useState(false);
    const pathname = usePathname();
    const isHome = pathname === "/";
    const isAbout = pathname.includes("/about");
    const isStore = pathname.includes("/store");
    const { lang, toggleLang } = useLanguage();

    interface NavLink { bn: string; en: string; href: string; }

    const homeLinks: NavLink[] = [
        { bn: "সমাধান", en: "Solutions", href: isHome ? "#solutions" : "/#solutions" },
        { bn: "ফিচার", en: "Features", href: isHome ? "#features" : "/#features" },
        { bn: "ডাউনলোড", en: "Download", href: isHome ? "#download" : "/#download" },
        { bn: "প্রাইসিং", en: "Pricing", href: isHome ? "#pricing" : "/#pricing" },
        { bn: "প্রশ্নোত্তর", en: "FAQ", href: isHome ? "#faq" : "/#faq" },
        { bn: "যোগাযোগ", en: "Contact", href: isHome ? "#cta" : "/#cta" },
    ];

    const aboutLinks: NavLink[] = [
        { bn: "লক্ষ্য", en: "Vision", href: "#hero" },
        { bn: "আমাদের গল্প", en: "Story", href: "#mission" },
        { bn: "আমাদের দল", en: "Team", href: "#team" },
        { bn: "শুভাকাঙ্ক্ষী", en: "Supporters", href: "#supporters" },
        { bn: "উপদেষ্টা", en: "Advisors", href: "#advisors" },
        { bn: "যোগাযোগ", en: "Contact", href: "#cta" },
    ];

    const storeLinks: NavLink[] = [];
    const navLinks = isStore ? storeLinks : isAbout ? aboutLinks : homeLinks;



    useEffect(() => {
        setMounted(true);
        const homeSections = ["hero", "solutions", "features", "download", "pricing", "faq", "cta"];
        const aboutSections = ["hero", "mission", "team", "supporters", "advisors", "cta"];
        const sections = isStore ? [] : isAbout ? aboutSections : homeSections;

        const handleScroll = () => setIsScrolled(window.scrollY > 10);
        window.addEventListener("scroll", handleScroll, { passive: true });
        handleScroll();

        const observer = new IntersectionObserver(
            (entries) => entries.forEach((e) => { if (e.isIntersecting) setActiveSection(e.target.id); }),
            { root: null, rootMargin: "-20% 0px -40% 0px", threshold: 0 }
        );
        sections.forEach((id) => { const el = document.getElementById(id); if (el) observer.observe(el); });

        return () => { window.removeEventListener("scroll", handleScroll); observer.disconnect(); };
    }, [isHome, isAbout]);

    const isActive = (link: NavLink) => {
        if (link.href === "/about") return isAbout;
        const id = link.href.replace(/^\/?#/, "").replace("/#", "");
        return activeSection === id;
    };

    if (!mounted) return (
        <header className="fixed w-full z-50 bg-white py-3">
            <div className="container mx-auto px-5 lg:px-10 flex justify-between items-center">
                <div className="w-28 h-7 bg-slate-100 animate-pulse" />
            </div>
        </header>
    );

    return (
        <>
            <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-200 ${
                isScrolled ? "bg-white/95 backdrop-blur-md shadow-sm py-2.5 border-b border-slate-100" : "bg-white py-4"
            }`}>
                <div className="container mx-auto px-5 lg:px-10 flex justify-between items-center">
                    <Link href="/" className="flex items-center gap-2 group shrink-0">
                        <img src="/assets/logo/Logo.svg" alt="Medidesh Logo" className="w-7 h-7 group-hover:scale-105 transition-transform duration-200" />
                        <span className="text-lg font-black text-slate-900 tracking-tight">{lang === "bn" ? "মেডিদেশ" : "Medidesh"}</span>
                    </Link>

                    <nav className="hidden md:flex items-center gap-6 text-[13px] font-semibold">
                        {navLinks.map((link) => (
                            <a key={link.en} href={link.href}
                                onClick={(e) => {
                                    if (link.href.startsWith("#") || link.href.includes("#")) {
                                        const id = link.href.split("#")[1];
                                        const el = document.getElementById(id);
                                        if (el) { e.preventDefault(); window.scrollTo({ top: el.offsetTop - 70, behavior: "smooth" }); setActiveSection(id); }
                                    }
                                }}
                                className={`relative py-1 transition-colors duration-150 ${isActive(link) ? "text-medidesh-teal-600 font-bold" : "text-slate-600 hover:text-slate-900"}`}
                            >
                                {lang === "bn" ? link.bn : link.en}
                            </a>
                        ))}
                    </nav>

                    <div className="hidden md:flex items-center gap-2 shrink-0">
                        <button onClick={toggleLang} className="h-8 px-2.5 flex items-center gap-1.5 border border-slate-200 hover:border-slate-300 bg-white text-slate-600 hover:text-slate-900 text-xs font-bold transition-all">
                            <Globe size={13} weight="bold" />
                            <span>{lang === "bn" ? "EN" : "বাং"}</span>
                        </button>
                        <a href="#download" className="ml-1.5 bg-medidesh-teal-500 hover:bg-medidesh-teal-600 text-white px-5 py-2 font-bold text-[13px] transition-all hover:-translate-y-px">
                            {lang === "bn" ? "ডাউনলোড" : "Get Started"}
                        </a>
                    </div>

                    <button className="md:hidden p-2 text-slate-700" onClick={() => setIsMobileMenuOpen(true)} aria-label="Open menu">
                        <List size={22} />
                    </button>
                </div>
            </header>

            {/* Mobile menu */}
            <div className={`fixed inset-0 z-[100] flex flex-col md:hidden transition-all duration-200 ${isMobileMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"} bg-white`}>
                <div className="flex justify-between items-center px-5 py-4 border-b border-slate-100">
                    <Link href="/" onClick={() => setIsMobileMenuOpen(false)} className="flex items-center gap-2">
                        <img src="/assets/logo/Logo.svg" alt="Medidesh" className="w-7 h-7" />
                        <span className="text-lg font-black text-slate-900">{lang === "bn" ? "মেডিদেশ" : "Medidesh"}</span>
                    </Link>
                    <button onClick={() => setIsMobileMenuOpen(false)} className="p-2 text-slate-600"><X size={22} /></button>
                </div>
                <nav className="flex-1 flex flex-col px-5 pt-4 overflow-y-auto">
                    {navLinks.map((link) => (
                        <a key={link.en} href={link.href} onClick={() => setIsMobileMenuOpen(false)}
                            className={`text-base font-bold py-3.5 border-b border-slate-100 ${isActive(link) ? "text-medidesh-teal-600" : "text-slate-800"}`}>
                            {lang === "bn" ? link.bn : link.en}
                        </a>
                    ))}
                </nav>
                <div className="px-5 py-4 border-t border-slate-100 flex flex-col gap-2.5">
                    <button onClick={toggleLang} className="w-full flex items-center justify-center gap-2 px-5 py-3 font-semibold text-sm border border-slate-200 text-slate-700">
                        <Globe size={16} weight="bold" />{lang === "bn" ? "Switch to English" : "বাংলায় দেখুন"}
                    </button>
                    <a href="#download" onClick={() => setIsMobileMenuOpen(false)} className="w-full text-center bg-medidesh-teal-500 text-white px-5 py-3 font-bold text-sm">
                        {lang === "bn" ? "অ্যাপ ডাউনলোড" : "Download App"}
                    </a>
                </div>
            </div>
        </>
    );
}
