"use client";

import { Newspaper, ArrowRight } from "@phosphor-icons/react/dist/ssr";
import { useLanguage } from "@/lib/i18n";

const T = {
    bn: {
        badge: "মিডিয়া কাভারেজ",
        heading: "আমাদের নিয়ে লেখা হয়েছে",
        articles: [
            { title: "ফার্মেসি ব্যবসায় ডিজিটাইজেশনের নতুন দিগন্ত উন্মোচন করল মেডিদেশ",         date: "১০ ডিসেম্বর, ২০২৪",    cta: "পড়ুন"       },
            { title: "মেডিদেশ: স্থানীয় ফার্মেসি ইনভেন্টরি ম্যানেজমেন্টে বৈপ্লবিক পরিবর্তন",   date: "২৪ নভেম্বর, ২০২৪",    cta: "আরও পড়ুন" },
            { title: "নবীন উদ্যোক্তা: প্রযুক্তির ছোঁয়ায় বদলে যাচ্ছে গ্রামের ওষুধের দোকান",    date: "১২ জানুয়ারি, ২০২৫",  cta: "বিস্তারিত"  },
            { title: "কীভাবে SaaS প্ল্যাটফর্মগুলো বাংলাদেশের ক্ষুদ্র ব্যবসায়ীদের ক্ষমতায়ন করছে", date: "১৫ অক্টোবর, ২০২৪",  cta: "আরও পড়ুন" },
        ],
    },
    en: {
        badge: "Media Coverage",
        heading: "Featured in the Press",
        articles: [
            { title: "Medidesh Opens New Horizons for Digitalization of the Pharmacy Business",              date: "December 10, 2024",  cta: "Read"      },
            { title: "Medidesh: A Revolutionary Change in Local Pharmacy Inventory Management",              date: "November 24, 2024",  cta: "Read More" },
            { title: "Young Entrepreneur: Village Medicine Shops Transforming with Touch of Technology",     date: "January 12, 2025",   cta: "Learn More" },
            { title: "How SaaS Platforms Are Empowering Small Business Owners in Bangladesh",               date: "October 15, 2024",   cta: "Read More" },
        ],
    },
};

const logos = [
    { src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUTX3amtUek4Ia80_rbqUkfwS6sYaeSUdqwg&s", alt: "Prothom Alo",           h: "h-6" },
    { src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8knKcONkR3eLrJ0R7WnN4_SBJwegZmm8C2g&s", alt: "The Daily Star",         h: "h-8" },
    { src: "https://upload.wikimedia.org/wikipedia/en/thumb/8/88/Channel-i.svg/1200px-Channel-i.svg.png",    alt: "Channel i",              h: "h-10" },
    { src: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/68/The_Business_Standard_logo.svg/1200px-The_Business_Standard_logo.svg.png", alt: "TBS", h: "h-6" },
];

export default function MediaCoverage() {
    const { lang } = useLanguage();
    const t = T[lang];

    return (
        <section className="py-20 bg-slate-50 border-t border-slate-100">
            <div className="container mx-auto px-6 lg:px-12 text-center">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-slate-200 text-slate-600 text-xs font-bold mb-6">
                    <Newspaper weight="fill" />
                    <span>{t.badge}</span>
                </div>
                <h2 className="text-2xl lg:text-3xl font-bold text-slate-900 mb-12">{t.heading}</h2>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {t.articles.map((article, i) => (
                        <div key={i} className="group bg-white p-6 rounded border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 text-left flex flex-col h-full">
                            <div className="h-12 flex items-center mb-6">
                                <img src={logos[i].src} alt={logos[i].alt} className={`${logos[i].h} w-auto object-contain opacity-80 group-hover:opacity-100 transition-opacity`} />
                            </div>
                            <h3 className="text-lg font-bold text-slate-900 mb-4 line-clamp-2 leading-snug">&quot;{article.title}&quot;</h3>
                            <div className="mt-auto pt-4 flex items-center justify-between border-t border-slate-100">
                                <span className="text-xs text-slate-400 font-medium">{article.date}</span>
                                <a href="#" className="inline-flex items-center gap-1 text-sm font-bold text-pharma-green-600 hover:text-pharma-green-700 transition-colors">
                                    {article.cta} <ArrowRight weight="bold" />
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
