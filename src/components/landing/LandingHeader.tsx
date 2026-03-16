"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { List, X, Sun, Moon, Globe } from "@phosphor-icons/react/dist/ssr";
import { useLanguage } from "@/lib/i18n";

export default function LandingHeader() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [activeSection, setActiveSection] = useState("");
    const [mounted, setMounted] = useState(false);
    const [isDark, setIsDark] = useState(false);
    const pathname = usePathname();
    const isHome = pathname === "/";
    const isAbout = pathname === "/about";
    const hasCta = isHome || isAbout; // pages that have their own #cta anchor
    const { lang, toggleLang } = useLanguage();

    const homeLinks = [
        { bn: "ফিচার",           en: "Features",  href: "/#features" },
        { bn: "সমাধান",          en: "Solutions", href: "/#solutions" },
        { bn: "প্রাইসিং",        en: "Pricing",   href: "/#pricing" },
        { bn: "প্রশ্নোত্তর",    en: "FAQ",       href: "/#faq" },
        { bn: "আমাদের সম্পর্কে", en: "About",     href: "/about" },
        { bn: "যোগাযোগ",        en: "Contact",   href: "#cta" },
    ];

    const aboutLinks = [
        { bn: "হোম",            en: "Home",      href: "/" },
        { bn: "আমাদের গল্প",    en: "Story",     href: "#story" },
        { bn: "টিম",            en: "Team",      href: "#team" },
        { bn: "মেন্টর",          en: "Mentors",   href: "#mentors" },
        { bn: "যোগাযোগ",        en: "Contact",   href: "#cta" },
    ];

    const navLinks = isAbout ? aboutLinks : homeLinks;

    useEffect(() => {
        const stored = localStorage.getItem("theme");
        const prefersDark =
            stored === "dark" ||
            (!stored && window.matchMedia("(prefers-color-scheme: dark)").matches);
        setIsDark(prefersDark);
        document.documentElement.classList.toggle("dark", prefersDark);
    }, []);

    const toggleTheme = () => {
        const next = !isDark;
        setIsDark(next);
        document.documentElement.classList.toggle("dark", next);
        localStorage.setItem("theme", next ? "dark" : "light");
    };

    useEffect(() => {
        setMounted(true);
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);
            if (!isHome) return;
            const sections = ["features", "solutions", "pricing", "faq", "cta"];
            for (const section of sections) {
                const element = document.getElementById(section);
                if (element) {
                    const rect = element.getBoundingClientRect();
                    if (rect.top >= 0 && rect.top <= 300) {
                        setActiveSection(section);
                        break;
                    }
                }
            }
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [isHome]);

    if (!mounted) {
        return (
            <header className="fixed w-full z-50 bg-transparent py-4">
                <div className="container mx-auto px-6 lg:px-12 flex justify-between items-center">
                    <div className="w-32 h-8 bg-slate-200 dark:bg-slate-700 animate-pulse rounded" />
                </div>
            </header>
        );
    }

    const isActive = (link: typeof navLinks[0]) => {
        if (link.href === "/about") return pathname === "/about";
        return isHome && activeSection === link.href.replace("/#", "").replace("#", "");
    };

    return (
        <header
            className={`fixed w-full z-50 transition-all duration-300 ${
                isScrolled
                    ? isDark
                        ? "bg-slate-900/98 backdrop-blur-md shadow-sm border-b border-slate-800 py-3"
                        : "bg-white/95 backdrop-blur-md shadow-sm border-b border-slate-100 py-3"
                    : isDark
                        ? "bg-slate-900/90 backdrop-blur-sm py-4"
                        : "bg-white/85 backdrop-blur-sm py-4"
            }`}
        >
            <div className="container mx-auto px-6 lg:px-12 flex justify-between items-center">
                {/* Logo */}
                <Link href="/" className="flex items-center gap-2.5 group">
                    <img
                        src="/assets/logo/Logo.svg"
                        alt="Medidesh Logo"
                        className={`w-8 h-8 group-hover:scale-105 transition-transform duration-300 ${isDark ? "brightness-0 invert" : ""}`}
                    />
                    <span className="text-lg font-bold text-slate-900 dark:text-white">
                        {lang === "bn" ? "মেডিদেশ" : "Medidesh"}
                    </span>
                </Link>

                {/* Desktop Nav */}
                <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-slate-600 dark:text-slate-300">
                    {navLinks.map((link) => (
                        <a
                            key={link.en}
                            href={link.href}
                            className={`transition-colors duration-200 relative py-1 ${
                                isActive(link)
                                    ? "text-medidesh-teal-500 font-semibold"
                                    : "hover:text-medidesh-teal-500"
                            }`}
                        >
                            {lang === "bn" ? link.bn : link.en}
                            {isActive(link) && (
                                <span className="absolute -bottom-0.5 left-0 w-full h-0.5 bg-medidesh-teal-500 rounded" />
                            )}
                        </a>
                    ))}
                </nav>

                {/* Controls */}
                <div className="hidden md:flex items-center gap-2">
                    {/* Language toggle */}
                    <button
                        onClick={toggleLang}
                        aria-label={lang === "bn" ? "Switch to English" : "বাংলায় দেখুন"}
                        title={lang === "bn" ? "Switch to English" : "বাংলায় দেখুন"}
                        className={`h-9 px-3 flex items-center gap-1.5 rounded border transition-all duration-200 text-xs font-bold ${
                            isDark
                                ? "border-slate-700 bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white"
                                : "border-slate-200 bg-white hover:bg-medidesh-teal-50 text-slate-600 hover:text-medidesh-teal-600 hover:border-medidesh-teal-300"
                        }`}
                    >
                        <Globe size={14} weight="bold" />
                        <span>{lang === "bn" ? "EN" : "বাং"}</span>
                    </button>

                    {/* Theme toggle */}
                    <button
                        onClick={toggleTheme}
                        aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
                        className={`w-9 h-9 flex items-center justify-center rounded border transition-all duration-200 ${
                            isDark
                                ? "border-slate-700 bg-slate-800 hover:bg-slate-700 text-amber-400 hover:border-amber-400"
                                : "border-slate-200 bg-white hover:bg-medidesh-teal-50 text-slate-600 hover:text-medidesh-teal-600 hover:border-medidesh-teal-300"
                        }`}
                    >
                        {isDark ? <Sun size={18} weight="fill" /> : <Moon size={18} weight="duotone" />}
                    </button>
                </div>

                {/* Mobile menu button */}
                <button
                    className="md:hidden p-2 text-slate-800 dark:text-slate-200"
                    onClick={() => setIsMobileMenuOpen(true)}
                    aria-label="Open menu"
                >
                    <List size={24} />
                </button>
            </div>

            {/* Mobile Menu Overlay */}
            <div
                className={`fixed inset-0 z-50 flex flex-col px-6 py-8 md:hidden transition-transform duration-300 ${
                    isDark ? "bg-slate-900" : "bg-white"
                } ${isMobileMenuOpen ? "translate-x-0" : "translate-x-full"}`}
            >
                <div className="flex justify-between items-center mb-10">
                    <Link href="/" className="flex items-center gap-2">
                        <img
                            src="/assets/logo/Logo.svg"
                            alt="Medidesh"
                            className={`w-8 h-8 ${isDark ? "brightness-0 invert" : ""}`}
                        />
                        <span className="text-lg font-bold text-slate-900 dark:text-white">
                            {lang === "bn" ? "মেডিদেশ" : "Medidesh"}
                        </span>
                    </Link>
                    <button
                        onClick={() => setIsMobileMenuOpen(false)}
                        className="p-2 text-slate-700 dark:text-slate-300"
                        aria-label="Close menu"
                    >
                        <X size={24} />
                    </button>
                </div>

                <nav className="flex flex-col gap-1">
                    {navLinks.map((link) => (
                        <a
                            key={link.en}
                            href={link.href}
                            onClick={() => setIsMobileMenuOpen(false)}
                            className="text-lg font-medium text-slate-800 dark:text-slate-200 hover:text-medidesh-teal-500 py-3 border-b border-slate-100 dark:border-slate-800 transition-colors"
                        >
                            {lang === "bn" ? link.bn : link.en}
                        </a>
                    ))}
                </nav>

                <div className="mt-8 flex flex-col gap-3">
                    <button
                        onClick={toggleLang}
                        className={`w-full inline-flex items-center justify-center gap-3 px-6 py-4 rounded font-semibold text-base border transition-colors ${
                            isDark
                                ? "border-slate-700 bg-slate-800 text-slate-300"
                                : "border-slate-200 text-slate-700"
                        }`}
                    >
                        <Globe size={20} weight="bold" />
                        {lang === "bn" ? "Switch to English" : "বাংলায় দেখুন"}
                    </button>

                    <button
                        onClick={() => { toggleTheme(); setIsMobileMenuOpen(false); }}
                        className={`w-full inline-flex items-center justify-center gap-3 px-6 py-4 rounded font-semibold text-base border transition-colors ${
                            isDark
                                ? "border-slate-700 bg-slate-800 text-amber-400"
                                : "border-slate-200 text-slate-700"
                        }`}
                    >
                        {isDark
                            ? <Sun size={20} weight="fill" className="text-amber-400" />
                            : <Moon size={20} weight="duotone" className="text-slate-500" />}
                        {isDark
                            ? (lang === "bn" ? "লাইট মোড চালু করুন" : "Switch to Light Mode")
                            : (lang === "bn" ? "ডার্ক মোড চালু করুন" : "Switch to Dark Mode")}
                    </button>
                </div>
            </div>
        </header>
    );
}
