"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { List, X, Sun, Moon, Globe } from "@phosphor-icons/react/dist/ssr";
import { useLanguage } from "@/lib/i18n";

export default function LandingHeader() {
    const [isScrolled, setIsScrolled]         = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [activeSection, setActiveSection]   = useState("");
    const [mounted, setMounted]               = useState(false);
    const [isDark, setIsDark]                 = useState(false);
    const pathname  = usePathname();
    const isHome    = pathname === "/";
    const isAbout   = pathname.includes("/about");
    const isStore   = pathname.includes("/store");
    const { lang, toggleLang } = useLanguage();

    interface NavLink {
        bn: string;
        en: string;
        href: string;
    }

    // ── Nav link definitions ──────────────────────────────────────────
    // Home page: Features · Solutions · Pricing · FAQ · Contact · Store · About
    const homeLinks: NavLink[] = [
        { bn: "সমাধান",        en: "Solutions",   href: isHome ? "#solutions" : "/#solutions" },
        { bn: "ফিচার",         en: "Features",    href: isHome ? "#features"  : "/#features"  },
        { bn: "ডাউনলোড",       en: "Download",    href: isHome ? "#download"  : "/#download"  },
        { bn: "প্রাইসিং",      en: "Pricing",     href: isHome ? "#pricing"   : "/#pricing"   },
        { bn: "প্রশ্নোত্তর",  en: "FAQ",         href: isHome ? "#faq"       : "/#faq"       },
        { bn: "যোগাযোগ",      en: "Contact",     href: isHome ? "#cta"       : "/#cta"       },
    ];

    // About page: Vision · Story · Team · Supporters · Advisors · Contact
    const aboutLinks: NavLink[] = [
        { bn: "লক্ষ্য",           en: "Vision",     href: "#hero"       },
        { bn: "আমাদের গল্প",      en: "Story",      href: "#mission"    },
        { bn: "আমাদের দল",        en: "Team",       href: "#team"       },
        { bn: "শুভাকাঙ্ক্ষী",     en: "Supporters", href: "#supporters" },
        { bn: "উপদেষ্টা",         en: "Advisors",   href: "#advisors"   },
        { bn: "যোগাযোগ",         en: "Contact",    href: "#cta"        },
    ];

    // Store page: Empty links as per user request to simplify
    const storeLinks: NavLink[] = [];

    const navLinks = isStore ? storeLinks : isAbout ? aboutLinks : homeLinks;

    // ── Theme init ────────────────────────────────────────────────────
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

    // ── Scroll detection ──────────────────────────────────────────────
    useEffect(() => {
        setMounted(true);

        // Section IDs in the order they appear on each page
        const homeSections  = ["hero", "solutions", "features", "download", "pricing", "faq", "cta"];
        const aboutSections = ["hero", "mission", "team", "supporters", "advisors", "cta"];
        const storeSections: string[] = []; // Store page handles no hash sections for now
        const sections = isStore ? storeSections : isAbout ? aboutSections : homeSections;

        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);
        };

        window.addEventListener("scroll", handleScroll, { passive: true });
        handleScroll();

        // Use IntersectionObserver for more efficient section detection
        const observerOptions = {
            root: null,
            rootMargin: "-20% 0px -40% 0px",
            threshold: 0
        };

        const observerCallback = (entries: IntersectionObserverEntry[]) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    setActiveSection(entry.target.id);
                }
            });
        };

        const observer = new IntersectionObserver(observerCallback, observerOptions);
        sections.forEach((id) => {
            const el = document.getElementById(id);
            if (el) observer.observe(el);
        });

        return () => {
            window.removeEventListener("scroll", handleScroll);
            observer.disconnect();
        };
    }, [isHome, isAbout]);

    // ── Active check ─────────────────────────────────────────────────
    const isActive = (link: NavLink) => {
        if (link.href === "/about") return isAbout;
        const id = link.href.replace(/^\/?#/, "").replace("/#", "");
        return activeSection === id;
    };

    if (!mounted) {
        return (
            <header className="fixed w-full z-50 bg-transparent py-4">
                <div className="container mx-auto px-6 lg:px-12 flex justify-between items-center">
                    <div className="w-32 h-8 bg-slate-200 dark:bg-slate-700 animate-pulse rounded" />
                </div>
            </header>
        );
    }

    const headerBg = isScrolled
        ? isDark
            ? "bg-slate-900/70 backdrop-blur-xl shadow-[0_4px_30px_rgba(0,0,0,0.1)] border-b border-white/10 py-3"
            : "bg-white/70 backdrop-blur-xl shadow-[0_4px_30px_rgba(0,0,0,0.05)] border-b border-black/5 py-3"
        : "bg-transparent py-5 border-b border-transparent";

    return (
        <>
            <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${headerBg}`}>
            <div className="container mx-auto px-6 lg:px-12 flex justify-between items-center">

                {/* Logo */}
                <Link href="/" className="flex items-center gap-2.5 group shrink-0">
                    <img
                        src="/assets/logo/Logo.svg"
                        alt="Medidesh Logo"
                        className={`w-8 h-8 group-hover:scale-105 transition-transform duration-300 ${isDark ? "brightness-0 invert" : ""}`}
                    />
                    <span className="text-lg font-bold text-slate-900 dark:text-white">
                        {lang === "bn" ? "মেডিদেশ" : "Medidesh"}
                    </span>
                </Link>

                {/* Desktop nav */}
                <nav className="hidden md:flex items-center gap-5 text-sm font-medium text-slate-600 dark:text-slate-300">
                    {navLinks.map((link) => (
                        <a
                            key={link.en}
                            href={link.href}
                            onClick={(e) => {
                                if (link.href.startsWith("#") || link.href.includes("#")) {
                                    const id = link.href.split("#")[1];
                                    const el = document.getElementById(id);
                                    if (el) {
                                        e.preventDefault();
                                        window.scrollTo({
                                            top: el.offsetTop - 80,
                                            behavior: "smooth"
                                        });
                                        setActiveSection(id);
                                    }
                                }
                            }}
                            className={`relative py-1 transition-colors duration-200 whitespace-nowrap ${
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
                <div className="hidden md:flex items-center gap-2 shrink-0">
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

                {/* Mobile hamburger */}
                <button
                    className="md:hidden p-2 text-slate-800 dark:text-slate-200"
                    onClick={() => setIsMobileMenuOpen(true)}
                    aria-label="Open menu"
                >
                    <List size={24} />
                </button>
            </div>
        </header>

        {/* ── Mobile menu overlay ─────────────────────────────────────── */}
        <div
            className={`fixed inset-0 z-[100] flex flex-col md:hidden transition-all duration-300 ${
                isMobileMenuOpen ? "opacity-100 pointer-events-auto translate-x-0" : "opacity-0 pointer-events-none translate-x-full"
            } ${isDark ? "bg-slate-950" : "bg-white"}`}
        >
                {/* Header row */}
                <div className={`flex justify-between items-center px-6 py-5 border-b ${isDark ? "border-slate-800" : "border-slate-100"}`}>
                    <Link href="/" onClick={() => setIsMobileMenuOpen(false)} className="flex items-center gap-2">
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

            {/* Nav links */}
            <nav className="flex-1 flex flex-col px-6 pt-8 overflow-y-auto">
                {navLinks.map((link) => (
                    <a
                        key={link.en}
                        href={link.href}
                        onClick={() => setIsMobileMenuOpen(false)}
                        className={`text-lg font-bold py-5 border-b transition-colors ${
                            isDark ? "border-slate-800/50 text-slate-100" : "border-slate-100 text-slate-900"
                        } ${
                            isActive(link)
                                ? "text-medidesh-teal-500"
                                : ""
                        }`}
                    >
                        {lang === "bn" ? link.bn : link.en}
                    </a>
                ))}
            </nav>

                {/* Bottom controls */}
                <div className={`px-6 py-5 border-t flex flex-col gap-3 ${isDark ? "border-slate-800" : "border-slate-100"}`}>
                    <button
                        onClick={toggleLang}
                        className={`w-full inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded font-semibold text-sm border transition-colors ${
                            isDark
                                ? "border-slate-700 bg-slate-800 text-slate-300"
                                : "border-slate-200 text-slate-700 bg-slate-50"
                        }`}
                    >
                        <Globe size={18} weight="bold" />
                        {lang === "bn" ? "Switch to English" : "বাংলায় দেখুন"}
                    </button>

                    <button
                        onClick={() => { toggleTheme(); setIsMobileMenuOpen(false); }}
                        className={`w-full inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded font-semibold text-sm border transition-colors ${
                            isDark
                                ? "border-slate-700 bg-slate-800 text-amber-400"
                                : "border-slate-200 text-slate-700 bg-slate-50"
                        }`}
                    >
                        {isDark
                            ? <Sun size={18} weight="fill" className="text-amber-400" />
                            : <Moon size={18} weight="duotone" className="text-slate-500" />}
                        {isDark
                            ? (lang === "bn" ? "লাইট মোড" : "Light Mode")
                            : (lang === "bn" ? "ডার্ক মোড" : "Dark Mode")}
                    </button>
            </div>
        </div>
    </>
);
}
