import type { Metadata } from "next";
import { Saira, Bricolage_Grotesque } from "next/font/google";
import { LanguageProvider } from "@/lib/i18n";
import "./globals.css";

const saira = Saira({
    subsets: ["latin"],
    variable: "--font-saira",
    display: "swap",
});

const bricolage = Bricolage_Grotesque({
    subsets: ["latin"],
    variable: "--font-bricolage",
    display: "swap",
    weight: ["300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
    title: {
        template: "%s | Medidesh",
        default: "Medidesh - No.1 Free Pharmacy Management Software in Bangladesh",
    },
    description: "Empower your pharmacy business with seamless stock tracking, intelligent sales analytics, and automated expiry alerts. The ultimate smart pharmacy ecosystem, absolutely free.",
    keywords: ["pharmacy software", "pharmacy management", "free POS", "medical software", "Bangladesh", "store management", "inventory tracking"],
    openGraph: {
        title: "Medidesh - Smart Pharmacy Ecosystem In Your Pocket",
        description: "Transform your pharmacy operations with our free and smart management system. Stock tracking, daily sales, and expiry alerts in one mobile app.",
        url: "https://medidesh.com",
        siteName: "Medidesh",
        locale: "en_US",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Medidesh - Pharmacy Management Software",
        description: "Empower your pharmacy with seamless stock tracking, AI analytics, and expiry alerts. 100% Free.",
    },
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
                className={`${saira.variable} ${bricolage.variable} font-sans antialiased bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-100 transition-colors duration-300`}
            >
                <LanguageProvider>{children}</LanguageProvider>
            </body>
        </html>
    );
}
