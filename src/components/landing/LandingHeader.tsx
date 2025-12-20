"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { List, X, Moon, CaretDown } from "@phosphor-icons/react/dist/ssr";
import ContactModal from "@/components/ui/ContactModal";

export default function LandingHeader() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navLinks = [
        { name: "ফিচার", href: "#features" },
        { name: "পার্থক্য", href: "#comparison" },
        { name: "ভিশন", href: "#vision" },
        { name: "প্রাইসিং", href: "#pricing" },
        { name: "প্রশ্ন ও উত্তর", href: "#faq" },
    ];

    return (
        <>
            <header
                className={`fixed w-full z-50 transition-all duration-300 ${isScrolled
                        ? "bg-white/80 backdrop-blur-md shadow-sm py-3 border-b border-slate-100"
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
                        <span className="text-2xl font-bold font-heading text-slate-800">
                            মেডিদেশ
                        </span>
                    </Link>

                    {/* Desktop Nav */}
                    <nav className="hidden md:flex items-center gap-8 text-base font-medium text-slate-600">
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                className="hover:text-pharma-green-600 transition-colors"
                                onClick={(e) => {
                                    // Optional: intercept to ensure smooth scroll if needed manually, 
                                    // but CSS scroll-behavior usually handles it.
                                }}
                            >
                                {link.name}
                            </a>
                        ))}

                        {/* Medidesh AI Link */}
                        <a
                            href="#ai-features"
                            className="text-indigo-600 font-bold hover:text-indigo-700 transition-colors animate-pulse"
                        >
                            Medidesh AI
                        </a>

                        {/* Demo Dropdown Trigger - Simple Link for now */}
                        <div className="relative group">
                            <button className="flex items-center gap-1 hover:text-pharma-green-600 transition-colors">
                                <span>ডেমো</span>
                                <CaretDown weight="bold" size={12} />
                            </button>
                            <div className="absolute top-full left-0 mt-2 w-48 bg-white border border-slate-100 shadow-xl rounded-xl overflow-hidden hidden group-hover:block transition-all transform origin-top-left">
                                <Link href="/wellbeing" className="block px-4 py-3 hover:bg-slate-50 text-sm font-bold text-slate-700">
                                    Well-being Pharmacy
                                </Link>
                                <Link href="/mababardouya" className="block px-4 py-3 hover:bg-slate-50 text-sm font-bold text-slate-700">
                                    Ma Babar Douya
                                </Link>
                            </div>
                        </div>

                        <button
                            onClick={() => setIsModalOpen(true)}
                            className="hover:text-pharma-green-600 transition-colors"
                        >
                            যোগাযোগ
                        </button>
                    </nav>

                    {/* CTA */}
                    <div className="hidden md:flex items-center gap-4">
                        <button className="p-2 rounded-full hover:bg-slate-100 text-slate-600 transition-colors">
                            <Moon size={20} weight="bold" />
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
                    className={`fixed inset-0 bg-white z-50 transform transition-transform duration-300 flex flex-col items-center justify-center space-y-8 md:hidden ${isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
                        }`}
                >
                    <button
                        onClick={() => setIsMobileMenuOpen(false)}
                        className="absolute top-6 right-6 text-slate-800 text-3xl"
                    >
                        <X />
                    </button>
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            onClick={() => setIsMobileMenuOpen(false)}
                            className="text-2xl font-medium text-slate-800 hover:text-pharma-green-600"
                        >
                            {link.name}
                        </a>
                    ))}
                    <a
                        href="#ai-features"
                        onClick={() => setIsMobileMenuOpen(false)}
                        className="text-2xl font-bold text-indigo-600 drop-shadow-[0_0_10px_rgba(99,102,241,0.5)]"
                    >
                        Medidesh AI
                    </a>
                    <div className="flex flex-col gap-4 text-center">
                        <p className="text-sm font-bold text-slate-400 uppercase tracking-widest">লাইভ ডেমো দেখুন</p>
                        <Link href="/wellbeing" onClick={() => setIsMobileMenuOpen(false)} className="text-xl font-bold text-slate-800">Well-being Pharmacy</Link>
                        <Link href="/mababardouya" onClick={() => setIsMobileMenuOpen(false)} className="text-xl font-bold text-slate-800">Ma Babar Douya</Link>
                    </div>
                    <button
                        onClick={() => {
                            setIsMobileMenuOpen(false);
                            setIsModalOpen(true);
                        }}
                        className="text-2xl font-medium text-slate-800 hover:text-pharma-green-600"
                    >
                        যোগাযোগ
                    </button>
                </div>
            </header>

            <ContactModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
        </>
    );
}
