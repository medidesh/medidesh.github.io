"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { List, X, Moon, CaretDown, Sun } from "@phosphor-icons/react/dist/ssr";
import ContactModal from "@/components/ui/ContactModal";

export default function LandingHeader() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const [activeSection, setActiveSection] = useState("");

    const navLinks = [
        { name: "ফিচার", href: "#features" },
        { name: "সমাধান", href: "#comparison" },
        { name: "প্রাইসিং", href: "#pricing" },
        { name: "প্রশ্নোত্তর", href: "#faq" },
    ];

    const [isDarkMode, setIsDarkMode] = useState(false);

    const toggleTheme = () => {
        if (isDarkMode) {
            document.documentElement.classList.remove('dark');
            localStorage.theme = 'light';
            setIsDarkMode(false);
        } else {
            document.documentElement.classList.add('dark');
            localStorage.theme = 'dark';
            setIsDarkMode(true);
        }
    };

    useEffect(() => {
        // Theme initialization
        if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
            setIsDarkMode(true);
            document.documentElement.classList.add('dark');
        } else {
            setIsDarkMode(false);
            document.documentElement.classList.remove('dark');
        }

        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);

            // Scroll spy logic
            const sections = navLinks.map(link => link.href.substring(1));
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
    }, []);

    return (
        <>
            <header
                className={`fixed w-full z-50 transition-all duration-300 ${isScrolled
                    ? "bg-white/80 dark:bg-slate-900/80 backdrop-blur-md shadow-sm py-3 border-b border-slate-100 dark:border-slate-800"
                    : "bg-transparent py-5"
                    }`}
            >
                <div className="container mx-auto px-6 lg:px-12 flex justify-between items-center">
                    {/* Logo */}
                    <Link href="/" className="flex items-center gap-2 group">
                        <img
                            src="/assets/logo/Logo.svg"
                            alt="Medidesh Logo"
                            className="w-10 h-10 group-hover:scale-105 transition-transform duration-300"
                        />
                        <span className="text-2xl font-bold font-heading text-slate-800 dark:text-white">
                            মেডিদেশ
                        </span>
                    </Link>

                    {/* Desktop Nav */}
                    <nav className="hidden md:flex items-center gap-8 text-base font-medium text-slate-600 dark:text-slate-300">
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                className={`transition-all duration-300 relative py-1 ${activeSection === link.href.substring(1)
                                    ? "text-pharma-green-600 font-bold"
                                    : "hover:text-pharma-green-600"
                                    }`}
                            >
                                {link.name}
                                {activeSection === link.href.substring(1) && (
                                    <span className="absolute bottom-0 left-0 w-full h-0.5 bg-pharma-green-600 rounded-full" />
                                )}
                            </a>
                        ))}

                        <button
                            onClick={() => setIsModalOpen(true)}
                            className="hover:text-pharma-green-600 transition-colors"
                        >
                            যোগাযোগ
                        </button>
                    </nav>

                    {/* CTA */}
                    <div className="hidden md:flex items-center gap-4">
                        <button
                            onClick={toggleTheme}
                            className="p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-600 dark:text-slate-300 transition-colors"
                        >
                            {isDarkMode ? <Sun size={20} weight="bold" /> : <Moon size={20} weight="bold" />}
                        </button>
                        <a
                            href="#"
                            className="bg-pharma-green-600 hover:bg-pharma-green-700 text-white px-5 py-2.5 rounded-full font-medium shadow-lg shadow-pharma-green-600/20 hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300"
                        >
                            ফ্রি শুরু করুন
                        </a>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        className="md:hidden text-slate-800 text-2xl"
                        onClick={() => setIsMobileMenuOpen(true)}
                    >
                        <List />
                    </button>
                </div>

                {/* Mobile Menu Overlay */}
                <div
                    className={`fixed inset-0 bg-white dark:bg-slate-900 z-50 transform transition-transform duration-300 flex flex-col items-center justify-center space-y-8 md:hidden ${isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
                        }`}
                >
                    <button
                        onClick={() => setIsMobileMenuOpen(false)}
                        className="absolute top-6 right-6 text-slate-800 dark:text-white text-3xl"
                    >
                        <X />
                    </button>

                    <button
                        onClick={toggleTheme}
                        className="p-3 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 transition-colors mb-4"
                    >
                        {isDarkMode ? <Sun size={24} weight="bold" /> : <Moon size={24} weight="bold" />}
                    </button>

                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            onClick={() => setIsMobileMenuOpen(false)}
                            className="text-2xl font-medium text-slate-800 dark:text-white hover:text-pharma-green-600"
                        >
                            {link.name}
                        </a>
                    ))}
                    <button
                        onClick={() => {
                            setIsMobileMenuOpen(false);
                            setIsModalOpen(true);
                        }}
                        className="text-2xl font-medium text-slate-800 dark:text-white hover:text-pharma-green-600"
                    >
                        যোগাযোগ
                    </button>
                </div>
            </header>

            <ContactModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
        </>
    );
}
