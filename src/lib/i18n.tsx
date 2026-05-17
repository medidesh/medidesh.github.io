"use client";

import { createContext, useContext, useState, useEffect } from "react";

export type Lang = "bn" | "en";

interface LanguageContextType {
    lang: Lang;
    toggleLang: () => void;
    mounted: boolean;
}

const LanguageContext = createContext<LanguageContextType>({
    lang: "bn",
    toggleLang: () => {},
    mounted: false,
});

export function LanguageProvider({ children }: { children: React.ReactNode }) {
    const [lang, setLang] = useState<Lang>("bn");
    const [mounted, setMounted] = useState(false);

    const applyLang = (l: Lang) => {
        document.documentElement.lang = l === "bn" ? "bn" : "en";
        document.documentElement.classList.toggle("lang-en", l === "en");
    };

    useEffect(() => {
        // Run once on mount to initialize language from storage or auto-detect
        const initializeLanguage = () => {
            const urlParams = new URLSearchParams(window.location.search);
            const urlLang = urlParams.get("lang") as Lang | null;
            const stored = localStorage.getItem("lang") as Lang | null;
            
            const initialLang = (urlLang === "bn" || urlLang === "en") ? urlLang : stored;

            if (initialLang === "bn" || initialLang === "en") {
                setLang(initialLang);
                applyLang(initialLang);
                
                if (urlLang !== initialLang) {
                    const url = new URL(window.location.href);
                    url.searchParams.set("lang", initialLang);
                    window.history.replaceState({}, '', url);
                }
                if (stored !== initialLang) {
                    localStorage.setItem("lang", initialLang);
                }
                return;
            }
            
            // Auto-detect based on user timezone and navigator
            const tz = Intl.DateTimeFormat().resolvedOptions().timeZone;
            const navLang = navigator.language || "";
            const detected: Lang = tz === "Asia/Dhaka" || navLang.startsWith("bn") ? "bn" : "en";
            
            setLang(detected);
            applyLang(detected);
            localStorage.setItem("lang", detected);
            
            const url = new URL(window.location.href);
            url.searchParams.set("lang", detected);
            window.history.replaceState({}, '', url);
        };

        initializeLanguage();
        setMounted(true);

        // Cross-tab synchronization
        const handleStorage = (e: StorageEvent) => {
            if (e.key === "lang" && (e.newValue === "bn" || e.newValue === "en")) {
                setLang(e.newValue);
                applyLang(e.newValue);
            }
        };

        window.addEventListener("storage", handleStorage);
        return () => window.removeEventListener("storage", handleStorage);
    }, []);

    const toggleLang = () => {
        const next: Lang = lang === "bn" ? "en" : "bn";
        setLang(next);
        applyLang(next);
        localStorage.setItem("lang", next);
        
        const url = new URL(window.location.href);
        url.searchParams.set("lang", next);
        window.history.replaceState({}, '', url);
    };

    // Prevent hydration flashes for nested text conditionally if needed,
    // but returning children immediately allows SEO to work gracefully.
    // If a user sees a brief flash, `suppressHydrationWarning` on `html` masks the React error.
    return (
        <LanguageContext.Provider value={{ lang, toggleLang, mounted }}>
            {children}
        </LanguageContext.Provider>
    );
}

export function useLanguage() {
    return useContext(LanguageContext);
}
