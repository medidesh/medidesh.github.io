"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { PharmacyData } from "@/types/pharmacy";
import { List, X, PhoneCall, ShieldCheck } from "@phosphor-icons/react/dist/ssr";

interface HeaderProps {
    pharmacy: PharmacyData;
}

export default function Header({ pharmacy }: HeaderProps) {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navLinks = [
        { name: "হোম", href: "#hero" },
        { name: "বিভাগসমূহ", href: "#categories" },
        { name: "সেবাসমূহ", href: "#services" },
        { name: "অ্যাপ", href: "#app-integration" },
        { name: "যোগাযোগ", href: "#contact" },
    ];

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 bg-white lg:bg-transparent ${isScrolled
                ? "lg:bg-white/90 lg:backdrop-blur-md shadow-sm h-20"
                : "lg:h-24 h-20"
                }`}
        >
            <div className="container mx-auto px-4 lg:px-8 h-full flex items-center justify-between">

                {/* Logo Area - "Zero Duplication" Logic */}
                <div className="flex flex-col relative w-64 h-12 justify-center">
                    {/* State 1: Top (Shows Partner Badge) */}
                    <div className={`absolute left-0 transition-opacity duration-500 flex items-center gap-2 ${isScrolled ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}>
                        <div className="w-8 h-8 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-slate-800 border border-slate-200/50">
                            <ShieldCheck size={18} weight="fill" className="text-pharma-green-600" />
                        </div>
                        <span className="font-bold text-slate-700 text-sm tracking-widest uppercase opacity-80">Medidesh Partner</span>
                    </div>

                    {/* State 2: Scrolled (Shows Pharmacy Name) */}
                    <div className={`absolute left-0 transition-all duration-500 flex flex-col ${isScrolled ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'}`}>
                        <h1 className="font-bold font-heading text-xl text-slate-800 leading-none">
                            {pharmacy.bnName}
                        </h1>
                        <p className="text-[10px] tracking-wider uppercase font-bold text-slate-500 mt-0.5">
                            {pharmacy.name}
                        </p>
                    </div>
                </div>

                {/* Desktop Nav - Minimalist */}
                <nav className="hidden lg:flex items-center gap-10">
                    {navLinks.map((link, index) => (
                        <a
                            key={index}
                            href={link.href}
                            className="text-slate-600 font-bold hover:text-pharma-green-600 transition-colors relative group py-2 text-sm uppercase tracking-wide"
                        >
                            {link.name}
                            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-pharma-green-600 transition-all duration-300 group-hover:w-full"></span>
                        </a>
                    ))}
                </nav>

                {/* Action Button */}
                <div className="hidden lg:block">
                    <a
                        href={`tel:${pharmacy.phone}`}
                        className={`flex items-center gap-2 px-6 py-2.5 rounded-full font-bold transition-all ${isScrolled
                            ? "bg-slate-900 text-white hover:bg-slate-800"
                            : "bg-white text-slate-900 shadow-md hover:scale-105"
                            }`}
                    >
                        <PhoneCall size={18} weight="fill" />
                        <span>{pharmacy.phone}</span>
                    </a>
                </div>

                {/* Mobile Menu Toggle */}
                <button
                    onClick={() => setIsMenuOpen(true)}
                    className="lg:hidden text-slate-800 p-2 bg-white/50 backdrop-blur-sm rounded-lg"
                >
                    <List size={28} weight="bold" />
                </button>
            </div>

            {/* Mobile Drawer */}
            <div className={`fixed inset-0 z-60 bg-slate-900/50 backdrop-blur-sm transition-opacity duration-300 ${isMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}>
                <div className={`absolute top-0 right-0 w-[80%] max-w-sm h-full bg-white shadow-2xl transition-transform duration-300 p-8 ${isMenuOpen ? "translate-x-0" : "translate-x-full"}`}>

                    <div className="flex justify-between items-center mb-12">
                        <h2 className="text-2xl font-bold text-slate-900">{pharmacy.bnName}</h2>
                        <button onClick={() => setIsMenuOpen(false)} className="p-2 bg-slate-100 rounded-full text-slate-600">
                            <X size={24} />
                        </button>
                    </div>

                    <div className="flex flex-col gap-6">
                        {navLinks.map((link, index) => (
                            <a
                                key={index}
                                href={link.href}
                                onClick={() => setIsMenuOpen(false)}
                                className="text-xl font-bold text-slate-600 hover:text-pharma-green-600 flex items-center justify-between border-b border-slate-100 pb-4"
                            >
                                {link.name}
                                <span className="text-slate-300">→</span>
                            </a>
                        ))}
                    </div>

                    <div className="mt-12 bg-pharma-green-50 p-6 rounded-2xl text-center">
                        <p className="text-sm text-slate-500 mb-4">জরুরি প্রয়োজনে কল করুন</p>
                        <a href={`tel:${pharmacy.phone}`} className="text-2xl font-bold text-pharma-green-600 flex justify-center items-center gap-2">
                            <PhoneCall size={24} weight="fill" />
                            {pharmacy.phone}
                        </a>
                    </div>
                </div>
            </div>
        </header>
    );
}
