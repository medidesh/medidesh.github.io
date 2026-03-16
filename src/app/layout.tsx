import type { Metadata } from "next";
import { Inter, Bricolage_Grotesque } from "next/font/google";
import { LanguageProvider } from "@/lib/i18n";
import "./globals.css";

const inter = Inter({
    subsets: ["latin"],
    variable: "--font-inter",
    display: "swap",
});

const bricolage = Bricolage_Grotesque({
    subsets: ["latin"],
    variable: "--font-bricolage",
    display: "swap",
    weight: ["300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
    title: "Medidesh - Pharmacy Management Software",
    description: "Manage your pharmacy inventory, sales, and accounts with ease.",
    icons: {
        icon: [
            { url: "/favicon.ico" },
            { url: "/favicon.svg", type: "image/svg+xml" },
            { url: "/favicon-96x96.png", type: "image/png", sizes: "96x96" },
        ],
        apple: [{ url: "/apple-touch-icon.png" }],
    },
};

export default function RootLayout({
    children,
}: Readonly<{ children: React.ReactNode }>) {
    return (
        <html lang="bn" suppressHydrationWarning>
            <head>
                {/* Prevent flash of wrong theme */}
                <script
                    dangerouslySetInnerHTML={{
                        __html: `(function(){try{var t=localStorage.getItem('theme');if(t==='dark'||(t===null&&window.matchMedia('(prefers-color-scheme: dark)').matches)){document.documentElement.classList.add('dark')}}catch(e){}})()`,
                    }}
                />
                {/* Prevent flash of wrong language */}
                <script
                    dangerouslySetInnerHTML={{
                        __html: `(function(){try{var l=localStorage.getItem('lang');if(l==='en'){document.documentElement.classList.add('lang-en');document.documentElement.lang='en';}else if(!l){var tz=Intl.DateTimeFormat().resolvedOptions().timeZone;var nl=navigator.language||'';if(tz!=='Asia/Dhaka'&&!nl.startsWith('bn')){document.documentElement.classList.add('lang-en');document.documentElement.lang='en';}}}catch(e){}})()`,
                    }}
                />
            </head>
            <body
                className={`${inter.variable} ${bricolage.variable} font-sans antialiased bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-100 transition-colors duration-300`}
            >
                <LanguageProvider>{children}</LanguageProvider>
            </body>
        </html>
    );
}
