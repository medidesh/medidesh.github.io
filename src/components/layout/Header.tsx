"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { FirstAid, List, X, PhoneCall } from "@phosphor-icons/react/dist/ssr";
import { PharmacyData } from "@/types/pharmacy";

interface HeaderProps {
    pharmacy: PharmacyData;
}

export default function Header({ pharmacy }: HeaderProps) {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const [activeSection, setActiveSection] = useState("");

    useEffect(() => {
        const handleScroll = () => {
            // Scroll Background Toggle
            if (window.scrollY > 50) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }

            // Scroll Spy Logic
            const sections = ["about", "services", "categories", "contact"];
            let current = "";
            for (const section of sections) {
                const element = document.getElementById(section);
                if (element) {
                    const rect = element.getBoundingClientRect();
                    // Check if section is in viewport (near top)
                    if (rect.top <= 150 && rect.bottom >= 150) {
                        current = section;
                        break;
                    }
                }
            }
            setActiveSection(current);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navLinks = [
        { name: "হোম", href: "#", id: "" },
        { name: "আমাদের সম্পর্কে", href: "#about", id: "about" },
        { name: "সেবা", href: "#services", id: "services" },
        { name: "পণ্য", href: "#products", id: "products" },
    ];

    const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
        e.preventDefault();
        const targetId = href.replace("#", "");

        if (targetId === "" || href === "#") {
            window.scrollTo({ top: 0, behavior: "smooth" });
            setIsMenuOpen(false);
            return;
        }

        const element = document.getElementById(targetId);
        if (element) {
            const offset = 80; // height of sticky header
            const elementPosition = element.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - offset;
            window.scrollTo({
                top: offsetPosition,
                behavior: "smooth"
            });
        }
        setIsMenuOpen(false);
    };

    return (
        <>
            <header
                className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? "shadow-md bg-white/95 backdrop-blur-md" : "glass-nav bg-transparent"
                    }`}
            >
                <div className="container mx-auto px-4 lg:px-8 h-20 flex justify-between items-center">
                    {/* Logo */}
                    <Link href={`/${pharmacy.slug}`} className="flex items-center gap-2 group">
                        {pharmacy.logo.startsWith("http") || pharmacy.logo.startsWith("/") ? (
                            <img src={pharmacy.logo} alt={pharmacy.name} className="w-10 h-10 object-contain rounded-lg bg-white p-1 shadow-sm" />
                        ) : (
                            <div className="w-10 h-10 bg-gradient-to-br from-pharma-green-500 to-pharma-green-700 rounded-lg flex items-center justify-center text-white shadow-lg shadow-pharma-green-500/30 group-hover:scale-105 transition-transform">
                                <FirstAid size={24} weight="bold" />
                            </div>
                        )}

                        <div className="flex flex-col">
                            <span className="text-xl font-bold font-heading text-slate-900 leading-none">
                                {pharmacy.bnName}
                            </span>
                            <span className="text-xs font-medium text-pharma-green-600 tracking-wider">
                                {pharmacy.tagline}
                            </span>
                        </div>
                    </Link>

                    {/* Desktop Nav */}
                    <nav className="hidden md:flex items-center gap-8 font-medium text-slate-600">
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                onClick={(e) => scrollToSection(e, link.href)}
                                className={`transition-colors relative cursor-pointer ${activeSection === link.id
                                        ? "text-pharma-green-600 font-bold"
                                        : "hover:text-pharma-green-600"
                                    }`}
                            >
                                {link.name}
                                {activeSection === link.id && (
                                    <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-pharma-green-600 rounded-full animate-pulse"></span>
                                )}
                            </a>
                        ))}
                        <a
                            href={`tel:${pharmacy.phone}`}
                            className="px-5 py-2.5 bg-pharma-green-600 hover:bg-pharma-green-700 text-white rounded-full transition-all shadow-lg shadow-pharma-green-600/20 hover:shadow-xl hover:-translate-y-0.5 flex items-center gap-2"
                        >
                            <PhoneCall size={18} weight="bold" />
                            <span>{pharmacy.phone}</span>
                        </a>
                    </nav>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className="md:hidden text-2xl text-slate-800 p-2"
                    >
                        {isMenuOpen ? <X size={24} /> : <List size={24} />}
                    </button>
                </div>
            </header>

            {/* Mobile Menu Overlay */}
            <div
                className={`fixed inset-0 bg-white z-40 transform transition-transform duration-300 flex flex-col items-center justify-center space-y-8 md:hidden ${isMenuOpen ? "translate-x-0" : "translate-x-full"
                    }`}
            >
                <button
                    onClick={() => setIsMenuOpen(false)}
                    className="absolute top-6 right-6 text-3xl text-slate-800 p-2"
                >
                    <X size={32} />
                </button>

                {navLinks.map((link) => (
                    <a
                        key={link.name}
                        href={link.href}
                        onClick={(e) => scrollToSection(e, link.href)}
                        className={`text-2xl font-medium transition-colors cursor-pointer ${activeSection === link.id ? "text-pharma-green-600 font-bold" : "text-slate-800 hover:text-pharma-green-600"
                            }`}
                    >
                        {link.name}
                    </a>
                ))}

                <a
                    href={`tel:${pharmacy.phone}`}
                    onClick={() => setIsMenuOpen(false)}
                    className="text-2xl font-bold text-pharma-green-600 flex items-center gap-2"
                >
                    <PhoneCall size={28} weight="bold" />
                    <span>কল করুন</span>
                </a>
            </div>
        </>
    );
}
