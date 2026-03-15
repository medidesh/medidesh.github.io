"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { List, X, Sun, Moon } from "@phosphor-icons/react/dist/ssr";

export default function LandingHeader() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [activeSection, setActiveSection] = useState("");
    const [mounted, setMounted] = useState(false);
    const [isDark, setIsDark] = useState(false);
    const pathname = usePathname();
    const isHome = pathname === "/";

    // On sub-pages, section links must navigate to /#section
    const navLinks = [
        { name: "ফিচার",    href: isHome ? "#features"  : "/#features"  },
        { name: "সমাধান",   href: isHome ? "#solutions" : "/#solutions" },
        { name: "প্রাইসিং", href: isHome ? "#pricing"   : "/#pricing"   },
        { name: "প্রশ্নোত্তর", href: isHome ? "#faq"    : "/#faq"       },
        { name: "যোগাযোগ", href: "#cta" },
    ];

    useEffect(() => {
        const stored = localStorage.getItem("theme");
        const prefersDark = stored === "dark" || (!stored && window.matchMedia("(prefers-color-scheme: dark)").matches);
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
            <header className="fixed w-full z-[100] bg-transparent py-4">
                <div className="container mx-auto px-6 lg:px-12 flex justify-between items-center">
                    <div className="w-32 h-8 bg-slate-200 dark:bg-slate-700 animate-pulse rounded" />
                </div>
            </header>
        );
    }

    return (
        <header
            className={`fixed w-full z-[100] transition-all duration-300 ${
                isScrolled
                    ? isDark
                        ? "bg-slate-900 shadow-sm border-b border-slate-800 py-3"
                        : "bg-white shadow-sm border-b border-slate-100 py-3"
                    : isDark
                        ? "bg-slate-900 py-4"
                        : "bg-white py-4"
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
                    <span className="text-lg font-bold text-slate-900 dark:text-white">মেডিদেশ</span>
                </Link>

                {/* Desktop Nav */}
                <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-slate-600 dark:text-slate-300">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            className={`transition-colors duration-200 relative py-1 ${
                                isHome && activeSection === link.href.replace("/#", "").replace("#", "")
                                    ? "text-medidesh-teal-500 font-semibold"
                                    : "hover:text-medidesh-teal-500"
                            }`}
                        >
                            {link.name}
                            {isHome && activeSection === link.href.replace("/#", "").replace("#", "") && (
                                <span className="absolute -bottom-0.5 left-0 w-full h-0.5 bg-medidesh-teal-500 rounded" />
                            )}
                        </a>
                    ))}
                </nav>

                {/* Theme toggle */}
                <div className="hidden md:flex items-center gap-3">
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
                    aria-label="মেনু খুলুন"
                >
                    <List size={24} />
                </button>
            </div>

            {/* Mobile Menu Overlay */}
            <div
                className={`fixed inset-0 z-[110] flex flex-col px-6 py-8 md:hidden transition-transform duration-300 ${
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
                        <span className="text-lg font-bold text-slate-900 dark:text-white">মেডিদেশ</span>
                    </Link>
                    <button
                        onClick={() => setIsMobileMenuOpen(false)}
                        className="p-2 text-slate-700 dark:text-slate-300"
                        aria-label="মেনু বন্ধ করুন"
                    >
                        <X size={24} />
                    </button>
                </div>

                <nav className="flex flex-col gap-1">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            onClick={() => setIsMobileMenuOpen(false)}
                            className="text-lg font-medium text-slate-800 dark:text-slate-200 hover:text-medidesh-teal-500 py-3 border-b border-slate-100 dark:border-slate-800 transition-colors"
                        >
                            {link.name}
                        </a>
                    ))}
                </nav>

                <div className="mt-8">
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
                        {isDark ? "লাইট মোড চালু করুন" : "ডার্ক মোড চালু করুন"}
                    </button>
                </div>
            </div>
        </header>
    );
}
