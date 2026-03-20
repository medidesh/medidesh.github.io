"use client";

import { createContext, useContext, useState, useEffect } from "react";

export type Lang = "bn" | "en";

interface LanguageContextType {
    lang: Lang;
    toggleLang: () => void;
}

const LanguageContext = createContext<LanguageContextType>({
    lang: "bn",
    toggleLang: () => {},
});

export function LanguageProvider({ children }: { children: React.ReactNode }) {
    const [lang, setLang] = useState<Lang>("bn");

    const applyLang = (l: Lang) => {
        document.documentElement.lang = l === "bn" ? "bn" : "en";
        document.documentElement.classList.toggle("lang-en", l === "en");
    };

    useEffect(() => {
        const stored = localStorage.getItem("lang") as Lang | null;
        if (stored === "bn" || stored === "en") {
            applyLang(stored);
            setLang(stored);
        } else {
            // Auto-detect: use Bangla if timezone is Dhaka, otherwise English
            const tz = Intl.DateTimeFormat().resolvedOptions().timeZone;
            const navLang = navigator.language || "";
            const detected: Lang =
                tz === "Asia/Dhaka" || navLang.startsWith("bn") ? "bn" : "en";
            applyLang(detected);
            setLang(detected);
        }
    }, []);

    const toggleLang = () => {
        const next: Lang = lang === "bn" ? "en" : "bn";
        setLang(next);
        applyLang(next);
        localStorage.setItem("lang", next);
    };

    return (
        <LanguageContext.Provider value={{ lang, toggleLang }}>
            {children}
        </LanguageContext.Provider>
    );
}

export function useLanguage() {
    return useContext(LanguageContext);
}
