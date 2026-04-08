"use client";

import LandingHeader from "@/components/landing/LandingHeader";
import LandingFooter from "@/components/landing/LandingFooter";
import CTASection from "@/components/landing/CTASection";
import { UsersThree, Sparkle } from "@phosphor-icons/react/dist/ssr";
import { useLanguage } from "@/lib/i18n";

const team = [
    { name: "Faysal Hossain", role: "Chief Executive Officer & Founder", photo: "/assets/team/Faysal.png" },
    { name: "Noor Mohammad",  role: "Head of Pharmacy & Supply Chain", photo: "/assets/team/Noor.png" },
    { name: "Jannatul Maowa", role: "Head of Human Resources",        photo: "/assets/team/Maowa.png" },
];

const contributors = [
    { name: "Tajriman Jannat Tivana", role: "Design & Marketing",    photo: "/assets/team/Tivana.png" },
    { name: "Nayeem Shiddiki Abir",  role: "Mobile App Specialist", photo: "/assets/team/Abir.png" },
    { name: "Mahfuz",                role: "Business Analysis",     photo: "/assets/team/Mahfuz.png" },
    { name: "Mbr Sagor",             role: "Web & Database Design", photo: "/assets/team/Sagor.png" },
];

const mentors = [
    { name: "James Tan",                    role: "Business Advisor",               org: "CEO, Heyjom & Mantra",                photo: "/assets/team/James.png" },
    { name: "Prof. Dr. C. A. Vaithilingam", role: "Innovation Advisor",             org: "Professor & Sustainability Catalyst", photo: "/assets/team/Arvind.png" },
    { name: "Prof. Dr. Murugan Thangiah",   role: "Academic Advisor",               org: "Senior Lecturer, Taylor's University", photo: "/assets/team/Murgan.png" },
    { name: "Dr. Ng Eng Hui (Alvin)",       role: "Engineering & Academic Advisor", org: "Senior Lecturer, Taylor's University", photo: "/assets/team/Alvin.png" },
    { name: "Mahmudul Hasan Forhad",       role: "Communication Advisor",          org: "IELTS Instructor, Mentors'", photo: "/assets/team/Forhad.png" },
    { name: "Abdus Sami",                   role: "Technology Advisor",             org: "CEO, AppifyDevs",                     photo: "/assets/team/Sami.png" },
    { name: "Mosarrof Hossain",             role: "Technology Advisor",             org: "CEO, QTEC Solution Limited",          photo: "/assets/team/Mosarrof.png" },
];

const T = {
    bn: {
        heroBadge: "ভবিষ্যতের উদ্যোগ",
        heroHeading1: "সমন্বিত ডিজিটাল",
        heroHeading2: "স্বাস্থ্য পরিকাঠামো",
        heroSub: "আমরা কেবল একটি সফটওয়্যার নয়, বরং একটি সমন্বিত ডিজিটাল স্বাস্থ্য পরিকাঠামো গড়ে তুলছি, যা প্রতিটি মানুষের জন্য প্রয়োজনীয় ঔষধের সহজলভ্যতা ও নিরাপত্তা নিশ্চিত করবে।",
        storyBadge: "আমাদের ভিত্তি",
        storyHeading1: "ম্যানেজমেন্ট ছাড়িয়ে",
        storyHeading2: " ঔষধের সহজলভ্যতা",
        storyP1: "বাংলাদেশের ফার্মেসি খাত দীর্ঘকাল ধরে সনাতন পদ্ধতিতে পরিচালিত হয়ে আসছে। হাতে লেখা খাতা আর অনিয়ন্ত্রিত ইনভেন্টরি ব্যবস্থাপনার কারণে মালিকদের প্রতিনিয়ত নানা আর্থিক ও পরিচালনাগত জটিলতায় পড়তে হয়।",
        storyP2: "মেডিদেশ-এ আমরা অনুধাবন করেছি যে, শুধু স্টক ম্যানেজমেন্ট যথেষ্ট নয়। আসল চ্যালেঞ্জ হলো সঠিক সময়ে ঔষধের প্রাপ্যতা নিশ্চিত করা। ফার্মেসিগুলোকে ডিজিটাইজ করার মাধ্যমে আমরা এমন এক নেটওয়ার্ক তৈরি করছি যা ঔষধের মজুদ ও অবস্থান সম্পর্কে স্বচ্ছ ধারণা দেবে।",
        storyP3: "আমাদের লক্ষ্য হলো রোগীকে ঔষধের সন্ধানে দ্বারে দ্বারে ঘোরা থেকে মুক্তি দেওয়া। প্রযুক্তি এবং মানবিকতার সমন্বয়ে আমরা এমন এক যোগসূত্র তৈরি করছি যা স্থানীয় ফার্মেসি এবং সাধারণ মানুষের মাঝে আস্থার সেতুবন্ধন হিসেবে কাজ করবে।",
        teamBadge: "আমাদের লক্ষ্য",
        teamHeading1: "সমন্বিত",
        teamHeading2: "স্বাস্থ্যসেবা",
        teamSub: "স্বয়ংক্রিয় ব্যবস্থাপনার গণ্ডি পেরিয়ে আমরা এমন এক ভবিষ্যতের স্বপ্ন দেখি যেখানে প্রযুক্তি প্রতিটি রোগীকে তার নিকটস্থ ফার্মেসির সাথে সরাসরি সংযুক্ত করবে।",
        supportersBadge: "কন্ট্রিবিউটর",
        supportersHeading1: "আমাদের",
        supportersHeading2: "কন্ট্রিবিউটর",
        supportersSub: "যাদের অসামান্য কারিগরি দক্ষতা, সফটওয়্যার ডিজাইন এবং নিরবচ্ছিন্ন প্রচেষ্টায় মেডিদেশের কোর প্ল্যাটফর্মটি প্রতিনিয়ত আরও শক্তিশালী ও ব্যবহারবান্ধব হয়ে উঠছে।",
        mentorsBadge: "উপদেষ্টা",
        mentorsHeading1: "অ্যাডভাইজরি",
        mentorsHeading2: "বোর্ড",
        mentorsSub: "দেশ ও বিদেশের স্বনামধন্য আইটি এক্সপার্ট এবং সফল বিজনেস লিডারদের সরাসরি দিকনির্দেশনায় মেডিদেশের প্রতিটি প্রযুক্তিগত ও কৌশলগত সিদ্ধান্ত পরিচালিত হচ্ছে।",
    },
    en: {
        heroBadge: "Strategic Vision",
        heroHeading1: "Architecting a Resilient",
        heroHeading2: "Digital Health Infrastructure",
        heroSub: "We are building the backbone of a connected healthcare ecosystem, moving beyond management software to ensure every patient can find and access the medicine they need, when they need it.",
        storyBadge: "Our Foundation",
        storyHeading1: "Beyond Inventory",
        storyHeading2: "Toward Accessibility",
        storyP1: "The pharmaceutical sector in emerging markets faces critical challenges, ranging from fragmented supply chains to a lack of real-time inventory visibility. In Bangladesh, numerous community pharmacies operate without digital oversight, resulting in significant risks.",
        storyP2: "At Medidesh, we recognized that inventory management is only the first step. The real challenge is medicine accessibility. By digitizing pharmacy stocks, we are creating a transparent network that allows for real-time visibility of life-saving medications.",
        storyP3: "Our ultimate goal is to eliminate the 'medicine hunt'. We are bridging the gap between local pharmacies and the community they serve, ensuring that critical healthcare data translates into immediate, physical availability for every citizen.",
        teamBadge: "Our Mission",
        teamHeading1: "Connecting",
        teamHeading2: "the Ecosystem",
        teamSub: "Beyond simple automation, we are engineering a future where health data serves as a bridge between supply and demand, ensuring no patient is ever left without vital medication.",
        supportersBadge: "Contributors",
        supportersHeading1: "Core",
        supportersHeading2: "Contributors",
        supportersSub: "An exceptional group of technical and creative minds whose robust systems engineering and product design continuously optimize the Medidesh platform.",
        mentorsBadge: "Advisors",
        mentorsHeading1: "Advisory",
        mentorsHeading2: "Board",
        mentorsSub: "Governed by distinguished industry pioneers and experts, ensuring our technological architecture and operational strategies align with the highest global standards.",
    },
};

export default function AboutContent() {
    const { lang } = useLanguage();
    const t = T[lang];

    return (
        <main className="bg-white dark:bg-slate-900 min-h-screen">
            <LandingHeader />

            {/* ── HERO ── */}
            <section id="hero" className="relative pt-28 pb-20 lg:pt-36 lg:pb-28 bg-white dark:bg-slate-900 overflow-hidden">
                {/* Fine grid */}
                <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05] pointer-events-none"
                    style={{ backgroundImage: "linear-gradient(#2E8B57 1px,transparent 1px),linear-gradient(90deg,#2E8B57 1px,transparent 1px)", backgroundSize: "60px 60px" }} />
                {/* Central glow */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-medidesh-teal-500/5 rounded blur-[120px] pointer-events-none" />
                {/* Left blob */}
                <svg className="absolute -left-20 top-1/2 -translate-y-1/2 w-80 h-80 opacity-[0.07] pointer-events-none" viewBox="0 0 300 300" fill="none" aria-hidden="true">
                    <path d="M60,130 C40,80 80,20 140,30 C200,40 240,90 230,150 C220,210 170,260 110,250 C50,240 20,200 30,160 C35,145 50,140 60,130 Z" fill="#2E8B57" />
                </svg>
                {/* Right blob */}
                <svg className="absolute -right-10 bottom-0 w-72 h-72 opacity-[0.06] pointer-events-none" viewBox="0 0 300 300" fill="none" aria-hidden="true">
                    <path d="M240,60 C270,100 280,160 260,200 C240,240 190,270 140,260 C90,250 60,210 70,160 C80,110 130,80 160,60 C190,40 220,30 240,60 Z" fill="#2E8B57" />
                </svg>
                {/* Dot cluster top-right */}
                <svg className="absolute top-16 right-12 opacity-[0.08] pointer-events-none hidden lg:block" width="90" height="90" aria-hidden="true">
                    {[0,1,2,3].map(r => [0,1,2,3].map(c => (
                        <circle key={`${r}-${c}`} cx={11+c*22} cy={11+r*22} r="2.5" fill="#2E8B57" />
                    )))}
                </svg>
                {/* Cross top-left */}
                <svg className="absolute top-20 left-1/4 w-7 h-7 opacity-[0.10] pointer-events-none hidden lg:block" viewBox="0 0 40 40" fill="none" aria-hidden="true">
                    <rect x="15" y="2" width="10" height="36" rx="3" fill="#2E8B57" />
                    <rect x="2" y="15" width="36" height="10" rx="3" fill="#2E8B57" />
                </svg>

                <div className="container mx-auto px-6 lg:px-12 relative z-10">
                    <div className="max-w-3xl mx-auto text-center">
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded bg-medidesh-teal-50 dark:bg-medidesh-teal-500/10 border border-medidesh-teal-100 dark:border-medidesh-teal-500/20 text-medidesh-teal-700 dark:text-medidesh-teal-400 text-sm font-bold mb-8 shadow-sm">
                            <UsersThree size={14} weight="fill" className="text-medidesh-teal-500" />
                            <span>{t.heroBadge}</span>
                        </div>
                        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-900 dark:text-white mb-6 leading-[1.1] tracking-tight">
                            {t.heroHeading1}{" "}
                            <span className="relative inline-block text-medidesh-teal-500">
                                {t.heroHeading2}
                                <svg className="absolute -bottom-1 left-0 w-full" viewBox="0 0 300 12" fill="none" preserveAspectRatio="none">
                                    <path d="M2 8 Q 75 2 150 8 T 298 8" stroke="#2E8B57" strokeOpacity="0.3" strokeWidth="4" fill="none" strokeLinecap="round" />
                                </svg>
                            </span>
                        </h1>
                        <p className="text-lg lg:text-xl text-slate-500 dark:text-slate-400 mb-10 max-w-2xl mx-auto leading-relaxed">{t.heroSub}</p>
                    </div>
                </div>
            </section>

            {/* ── MISSION ── */}
            <section id="mission" className="py-20 lg:py-28 bg-slate-50 dark:bg-slate-800/40 border-y border-slate-100 dark:border-slate-800 relative overflow-hidden">
                {/* Wave top */}
                <svg className="absolute top-0 left-0 w-full opacity-[0.05] pointer-events-none" viewBox="0 0 1440 50" preserveAspectRatio="none" fill="none" aria-hidden="true">
                    <path d="M0,25 C240,50 480,0 720,25 C960,50 1200,0 1440,25" stroke="#2E8B57" strokeWidth="3" />
                </svg>
                {/* Left glow blob */}
                <div className="absolute top-1/4 -left-24 w-72 h-72 bg-medidesh-teal-500/8 rounded-full blur-3xl pointer-events-none" />
                {/* Dashed ring right */}
                <svg className="absolute -right-16 top-1/2 -translate-y-1/2 w-72 h-72 opacity-[0.07] pointer-events-none hidden lg:block" viewBox="0 0 280 280" fill="none" aria-hidden="true">
                    <circle cx="140" cy="140" r="130" stroke="#2E8B57" strokeWidth="1.5" strokeDasharray="10 6" />
                    <circle cx="140" cy="140" r="95"  stroke="#2E8B57" strokeWidth="1"   strokeDasharray="7 5" />
                    <circle cx="140" cy="140" r="60"  stroke="#2E8B57" strokeWidth="1"   strokeDasharray="4 4" />
                </svg>
                {/* Crosses */}
                <svg className="absolute top-10 left-1/3 w-8 h-8 opacity-[0.10] pointer-events-none hidden lg:block" viewBox="0 0 40 40" fill="none" aria-hidden="true">
                    <rect x="15" y="2" width="10" height="36" rx="3" fill="#2E8B57" />
                    <rect x="2" y="15" width="36" height="10" rx="3" fill="#2E8B57" />
                </svg>
                <svg className="absolute bottom-10 right-1/3 w-5 h-5 opacity-[0.08] pointer-events-none hidden lg:block" viewBox="0 0 40 40" fill="none" aria-hidden="true">
                    <rect x="15" y="2" width="10" height="36" rx="3" fill="#2E8B57" />
                    <rect x="2" y="15" width="36" height="10" rx="3" fill="#2E8B57" />
                </svg>
                {/* Dot cluster bottom-left */}
                <svg className="absolute bottom-10 left-10 opacity-[0.07] pointer-events-none hidden lg:block" width="80" height="80" aria-hidden="true">
                    {[0,1,2,3].map(r => [0,1,2,3].map(c => (
                        <circle key={`${r}-${c}`} cx={10+c*20} cy={10+r*20} r="2" fill="#2E8B57" />
                    )))}
                </svg>

                <div className="container mx-auto px-6 lg:px-12 relative z-10">
                    <div className="max-w-2xl mx-auto text-center">
                        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-400 text-xs font-semibold uppercase tracking-wider mb-5 shadow-sm">
                            <Sparkle size={13} weight="fill" className="text-medidesh-teal-500" />
                            {t.storyBadge}
                        </div>
                        <h2 className="text-3xl lg:text-4xl font-black text-slate-900 dark:text-white mb-6 leading-tight">
                            {t.storyHeading1}{" "}<span className="text-medidesh-teal-500">{t.storyHeading2}</span>
                        </h2>
                        <div className="space-y-4 text-slate-600 dark:text-slate-400 text-lg leading-relaxed text-left">
                            <p>{t.storyP1}</p>
                            <p>{t.storyP2}</p>
                            <p>{t.storyP3}</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── TEAM ── */}
            <section id="team" className="py-20 lg:py-28 bg-white dark:bg-slate-900 relative overflow-hidden">
                {/* Right glow blob */}
                <div className="absolute -right-24 top-16 w-96 h-96 bg-medidesh-teal-500/5 rounded-full blur-3xl pointer-events-none" />
                {/* Dashed rings bottom-left */}
                <svg className="absolute -left-16 bottom-12 w-64 h-64 opacity-[0.06] pointer-events-none hidden lg:block" viewBox="0 0 200 200" fill="none" aria-hidden="true">
                    <circle cx="100" cy="100" r="90" stroke="#2E8B57" strokeWidth="1" strokeDasharray="12 8" />
                    <circle cx="100" cy="100" r="60" stroke="#2E8B57" strokeWidth="1" strokeDasharray="8 6" />
                    <circle cx="100" cy="100" r="30" stroke="#2E8B57" strokeWidth="1" strokeDasharray="4 4" />
                </svg>
                {/* Organic blob top-left */}
                <svg className="absolute -top-10 -left-10 w-56 h-56 opacity-[0.04] pointer-events-none" viewBox="0 0 220 220" fill="none" aria-hidden="true">
                    <path d="M110,15 C165,5 205,55 210,110 C215,165 180,210 125,215 C70,220 20,180 15,125 C10,70 45,20 90,12 C100,9 105,17 110,15 Z" fill="#2E8B57" />
                </svg>
                {/* Dot cluster top-right */}
                <svg className="absolute top-14 right-14 opacity-[0.07] pointer-events-none hidden xl:block" width="100" height="100" aria-hidden="true">
                    {[0,1,2,3,4].map(r => [0,1,2,3,4].map(c => (
                        <circle key={`${r}-${c}`} cx={10+c*20} cy={10+r*20} r="2" fill="#2E8B57" />
                    )))}
                </svg>

                <div className="container mx-auto px-6 lg:px-12 relative z-10">
                    <div className="max-w-2xl mx-auto text-center mb-14">
                        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-400 text-xs font-semibold uppercase tracking-wider mb-5 shadow-sm">
                            <UsersThree size={13} weight="fill" className="text-medidesh-teal-500" />
                            {t.teamBadge}
                        </div>
                        <h2 className="text-3xl lg:text-4xl font-black text-slate-900 dark:text-white mb-4 leading-tight">
                            {t.teamHeading1}{" "}<span className="text-medidesh-teal-500">{t.teamHeading2}</span>
                        </h2>
                        <p className="text-slate-500 dark:text-slate-400 text-lg leading-relaxed">{t.teamSub}</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
                        <div className="p-8 rounded-2xl bg-slate-50 dark:bg-slate-800/50 border border-slate-100 dark:border-slate-800 flex flex-col items-center text-center group hover:border-medidesh-teal-500/30 transition-all duration-300">
                            <div className="w-14 h-14 rounded-xl bg-medidesh-teal-50 dark:bg-medidesh-teal-500/10 flex items-center justify-center text-medidesh-teal-600 mb-6 group-hover:scale-110 transition-transform">
                                <UsersThree size={28} weight="duotone" />
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">Community Hub</h3>
                            <p className="text-slate-500 dark:text-slate-400 leading-relaxed text-sm">Empowering local pharmacies to become accessible healthcare nodes for their neighborhood.</p>
                        </div>
                        <div className="p-8 rounded-2xl bg-slate-50 dark:bg-slate-800/50 border border-slate-100 dark:border-slate-800 flex flex-col items-center text-center group hover:border-medidesh-teal-500/30 transition-all duration-300">
                            <div className="w-14 h-14 rounded-xl bg-medidesh-teal-50 dark:bg-medidesh-teal-500/10 flex items-center justify-center text-medidesh-teal-600 mb-6 group-hover:scale-110 transition-transform">
                                <Sparkle size={28} weight="duotone" />
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">Real-time Visibility</h3>
                            <p className="text-slate-500 dark:text-slate-400 leading-relaxed text-sm">Creating an open data network that shows medicine availability across the entire country.</p>
                        </div>
                        <div className="p-8 rounded-2xl bg-slate-50 dark:bg-slate-800/50 border border-slate-100 dark:border-slate-800 flex flex-col items-center text-center group hover:border-medidesh-teal-500/30 transition-all duration-300">
                            <div className="w-14 h-14 rounded-xl bg-medidesh-teal-50 dark:bg-medidesh-teal-500/10 flex items-center justify-center text-medidesh-teal-600 mb-6 group-hover:scale-110 transition-transform">
                                <Sparkle size={28} weight="duotone" className="rotate-45" />
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">Health Security</h3>
                            <p className="text-slate-500 dark:text-slate-400 leading-relaxed text-sm">Ensuring medicine authenticity and supply chain integrity through precision engineering.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── SUPPORTERS ── */}
            <section id="supporters" className="py-20 lg:py-28 bg-slate-50 dark:bg-slate-800/40 border-t border-slate-100 dark:border-slate-800 relative overflow-hidden">
                {/* Diagonal lines pattern */}
                <div className="absolute inset-0 opacity-[0.025] pointer-events-none"
                    style={{ backgroundImage: "repeating-linear-gradient(45deg, #2E8B57 0, #2E8B57 1px, transparent 0, transparent 50%)", backgroundSize: "20px 20px" }} />
                {/* Right glow */}
                <div className="absolute -right-20 bottom-0 w-80 h-80 bg-medidesh-teal-500/6 rounded-full blur-3xl pointer-events-none" />
                {/* Large organic blob left */}
                <svg className="absolute -left-16 top-1/2 -translate-y-1/2 w-72 h-72 opacity-[0.05] pointer-events-none hidden lg:block" viewBox="0 0 280 280" fill="none" aria-hidden="true">
                    <path d="M140,20 C195,8 255,55 265,120 C275,185 235,250 170,265 C105,280 40,245 22,180 C4,115 40,45 95,25 C110,18 125,23 140,20 Z" stroke="#2E8B57" strokeWidth="2" />
                </svg>
                {/* Cross right */}
                <svg className="absolute top-12 right-16 w-9 h-9 opacity-[0.10] pointer-events-none hidden lg:block" viewBox="0 0 40 40" fill="none" aria-hidden="true">
                    <rect x="15" y="2" width="10" height="36" rx="3" fill="#2E8B57" />
                    <rect x="2" y="15" width="36" height="10" rx="3" fill="#2E8B57" />
                </svg>
                {/* Dot cluster */}
                <svg className="absolute bottom-12 right-12 opacity-[0.07] pointer-events-none hidden lg:block" width="90" height="90" aria-hidden="true">
                    {[0,1,2,3].map(r => [0,1,2,3].map(c => (
                        <circle key={`${r}-${c}`} cx={11+c*22} cy={11+r*22} r="2.5" fill="#2E8B57" />
                    )))}
                </svg>

                <div className="container mx-auto px-6 lg:px-12 relative z-10">
                    <div className="max-w-2xl mx-auto text-center mb-14">
                        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-400 text-xs font-semibold uppercase tracking-wider mb-5 shadow-sm">
                            <UsersThree size={13} weight="fill" className="text-medidesh-teal-500" />
                            {t.supportersBadge}
                        </div>
                        <h2 className="text-3xl lg:text-4xl font-black text-slate-900 dark:text-white mb-4 leading-tight">
                            {t.supportersHeading1}{" "}<span className="text-medidesh-teal-500">{t.supportersHeading2}</span>
                        </h2>
                        <p className="text-slate-500 dark:text-slate-400 text-lg leading-relaxed">{t.supportersSub}</p>
                    </div>
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 max-w-5xl mx-auto">
                        {contributors.map((person, i) => (
                            <div key={i} className="relative overflow-hidden rounded group cursor-default" style={{ aspectRatio: "3/4" }}>
                                <img src={person.photo} alt={person.name} className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105" />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/15 to-transparent" />
                                <div className="absolute bottom-0 left-0 right-0 p-3">
                                    <h3 className="font-bold text-white text-sm leading-tight drop-shadow">{person.name}</h3>
                                    <p className="text-white/65 text-xs mt-0.5 leading-snug">{person.role}</p>
                                </div>
                                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-medidesh-teal-300 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── ADVISORS ── */}
            <section id="advisors" className="py-20 lg:py-28 bg-white dark:bg-slate-900 border-t border-slate-100 dark:border-slate-800 relative overflow-hidden">
                {/* Dot grid */}
                <div className="absolute inset-0 opacity-[0.03] pointer-events-none"
                    style={{ backgroundImage: "radial-gradient(circle, #2E8B57 1.5px, transparent 1.5px)", backgroundSize: "30px 30px" }} />
                {/* Top-right glow */}
                <div className="absolute -top-20 -right-20 w-80 h-80 bg-amber-500/5 rounded-full blur-3xl pointer-events-none" />
                {/* Bottom-left glow */}
                <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-medidesh-teal-500/5 rounded-full blur-3xl pointer-events-none" />
                {/* Dashed rings left */}
                <svg className="absolute left-8 top-1/2 -translate-y-1/2 w-56 h-56 opacity-[0.06] pointer-events-none hidden lg:block" viewBox="0 0 220 220" fill="none" aria-hidden="true">
                    <circle cx="110" cy="110" r="100" stroke="#2E8B57" strokeWidth="1" strokeDasharray="10 6" />
                    <circle cx="110" cy="110" r="70"  stroke="#2E8B57" strokeWidth="1" strokeDasharray="7 5" />
                </svg>
                {/* Organic blob outline right */}
                <svg className="absolute -right-10 bottom-10 w-64 h-64 opacity-[0.05] pointer-events-none" viewBox="0 0 250 250" fill="none" aria-hidden="true">
                    <path d="M125,20 C180,8 230,58 238,120 C246,182 208,232 148,240 C88,248 30,208 18,148 C6,88 40,30 90,18 C105,13 115,22 125,20 Z" stroke="#F59E0B" strokeWidth="2" />
                </svg>
                {/* Cross decoration */}
                <svg className="absolute top-14 right-1/3 w-7 h-7 opacity-[0.10] pointer-events-none hidden lg:block" viewBox="0 0 40 40" fill="none" aria-hidden="true">
                    <rect x="15" y="2" width="10" height="36" rx="3" fill="#F59E0B" />
                    <rect x="2" y="15" width="36" height="10" rx="3" fill="#F59E0B" />
                </svg>
                {/* Dot cluster top-right */}
                <svg className="absolute top-10 right-12 opacity-[0.08] pointer-events-none hidden lg:block" width="100" height="100" aria-hidden="true">
                    {[0,1,2,3,4].map(r => [0,1,2,3,4].map(c => (
                        <circle key={`${r}-${c}`} cx={10+c*20} cy={10+r*20} r="2" fill="#F59E0B" />
                    )))}
                </svg>

                <div className="container mx-auto px-6 lg:px-12 relative z-10">
                    <div className="max-w-2xl mx-auto text-center mb-14">
                        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded bg-white dark:bg-slate-800 border border-amber-200 dark:border-amber-900/40 text-amber-700 dark:text-amber-500 text-xs font-semibold uppercase tracking-wider mb-5 shadow-sm">
                            <Sparkle size={13} weight="fill" className="text-amber-500" />
                            {t.mentorsBadge}
                        </div>
                        <h2 className="text-3xl lg:text-4xl font-black text-slate-900 dark:text-white mb-4 leading-tight">
                            {t.mentorsHeading1}{" "}<span className="text-medidesh-teal-500">{t.mentorsHeading2}</span>
                        </h2>
                        <p className="text-slate-500 dark:text-slate-400 text-lg leading-relaxed">{t.mentorsSub}</p>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
                        {mentors.map((mentor, i) => (
                            <div key={i} className="relative overflow-hidden rounded group cursor-default" style={{ aspectRatio: "3/4" }}>
                                <img src={mentor.photo} alt={mentor.name} className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105" />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-transparent" />
                                <div className="absolute bottom-0 left-0 right-0 p-4">
                                    <h3 className="font-bold text-white text-sm leading-tight drop-shadow">{mentor.name}</h3>
                                    <span className="inline-block mt-1 px-2 py-0.5 bg-amber-400/20 border border-amber-300/40 text-amber-200 text-[10px] font-semibold rounded backdrop-blur-sm">{mentor.org}</span>
                                    <p className="text-white/60 text-xs mt-1">{mentor.role}</p>
                                </div>
                                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-amber-400 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <CTASection />

            <LandingFooter />
        </main>
    );
}
