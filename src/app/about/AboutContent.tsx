"use client";

import LandingHeader from "@/components/landing/LandingHeader";
import LandingFooter from "@/components/landing/LandingFooter";
import CTASection from "@/components/landing/CTASection";
import { UsersThree, Sparkle } from "@phosphor-icons/react/dist/ssr";
import { useLanguage } from "@/lib/i18n";

const team = [
    { name: "Faysal Hossain", role: { bn: "CEO ও সহ-প্রতিষ্ঠাতা",         en: "CEO & Co-Founder"                    }, photo: "/assets/team/Faysal.png" },
    { name: "Farhan Ahmed",   role: { bn: "CAO ও সহ-প্রতিষ্ঠাতা",         en: "CAO & Co-Founder"                    }, photo: "/assets/team/Farhan.png" },
    { name: "Noor Mohammad",  role: { bn: "হেড অব ফার্মেসি ও সাপ্লাই চেইন", en: "Head of Pharmacy & Supply Chain"    }, photo: "/assets/team/Noor.png" },
    { name: "Jannatul Maowa", role: { bn: "হেড অব হিউম্যান রিসোর্সেস",     en: "Head of Human Resources"             }, photo: "/assets/team/Maowa.png" },
];

const contributors = [
    { name: "Tivana",     role: { bn: "ডিজাইন ও মার্কেটিং",    en: "Design & Marketing"    }, photo: "/assets/team/Tivana.png" },
    { name: "Mahfuz",     role: { bn: "বিজনেস অ্যানালিসিস",     en: "Business Analysis"     }, photo: "/assets/team/Mahfuz.png" },
    { name: "Mbr Sagor",  role: { bn: "ওয়েব ও ডেটাবেজ ডিজাইন", en: "Web & Database Design" }, photo: "/assets/team/Sagor.png" },
];

const mentors = [
    { name: "James Tan",                      role: { bn: "ব্যবসায়িক উপদেষ্টা",  en: "Business Advisor"    }, org: "CEO, Heyjom & Mantra",                    photo: "/assets/team/James.png" },
    { name: "Prof. Dr. C. A. Vaithilingam",   role: { bn: "ইনোভেশন উপদেষ্টা",    en: "Innovation Advisor"  }, org: "Professor & Sustainability Catalyst",     photo: "/assets/team/Arvind.png" },
    { name: "Patrica Tan",                    role: { bn: "ব্যবস্থাপনা কৌশল",     en: "Management Strategy" }, org: "Founder & CEO, SCORE MY",                   photo: "/assets/team/Patricia Tan.png" },
    { name: "Abdus Sami",                     role: { bn: "প্রযুক্তি উপদেষ্টা",   en: "Technology Advisor"  }, org: "CEO, AppifyDevs",                         photo: "/assets/team/Sami.png" },
    { name: "Murugan Thangiah",               role: { bn: "একাডেমিক উপদেষ্টা",   en: "Academic Advisor"    }, org: "Senior Lecturer, Taylor's University",    photo: "/assets/team/Murgan.png" },
];

const T = {
    bn: {
        heroBadge: "আমাদের সম্পর্কে",
        heroHeading1: "বাংলাদেশের ফার্মেসির জন্য",
        heroHeading2: "তৈরি আমাদের টিম",
        heroSub: "দেশের প্রতিটি ফার্মেসিকে ডিজিটালাইজ করে মালিকদের জীবন সহজ, স্বচ্ছ ও আধুনিক করার এক বলিষ্ঠ স্বপ্ন ও প্রতিজ্ঞা।",
        storyBadge: "আমাদের গল্প",
        storyHeading1: "যেভাবে শুরু হলো",
        storyHeading2: "মেডিদেশ",
        storyP1: "Faysal বাংলাদেশের ফার্মেসি খাতের একটি অন্যতম সংকট খুব কাছ থেকে দেখেছেন—প্রতিদিন ম্যানুয়াল লেজারে স্টক ও বিক্রয়ের হিসাব মেলাতে গিয়ে মালিকরা অবর্ণনীয় কষ্ট ও লোকসানের শিকার হচ্ছেন। এই চিরচেনা নিয়মে পরিবর্তনের দৃঢ় সংকল্প নিয়েই তাঁর যাত্রা শুরু।",
        storyP2: "Farhan-এর অপারেশন ও বিজনেস স্ট্র্যাটেজিতে গভীর অভিজ্ঞতা এই যাত্রায় নতুন মাত্রা যোগ করে। তাঁদের যৌথ লক্ষ্য থেকেই যাত্রা শুরু করে মেডিদেশ। এরপর টিমকে শক্তিশালী করতে যুক্ত হন ফার্মেসি ও সাপ্লাই চেইন বিশেষজ্ঞ Noor এবং এইচআর এক্সপার্ট Jannatul।",
        storyP3: "আমরা বিশ্বাস করি, মফস্বলের একটি সাধারণ ফার্মেসি মালিকেরও আধুনিক প্রযুক্তি ব্যবহারের পূর্ণ অধিকার রয়েছে—যা হবে সহজ, সাশ্রয়ী এবং পুরোপুরি বাংলা ভাষায়।",
        teamBadge: "আমাদের টিম",
        teamHeading1: "মেডিদেশ",
        teamHeading2: "টিম-এর সদস্যরা",
        teamHeading3: "",
        teamSub: "ফার্মেসি, প্রযুক্তি ও ব্যবসায়িক অভিজ্ঞতার এক অনন্য সমন্বয়।",
        contributorsLabel: "বিশেষ সহায়ক ও সহযোগী",
        mentorsBadge: "উপদেষ্টা",
        mentorsHeading1: "কৌশলগত",
        mentorsHeading2: "পরামর্শ",
        mentorsSub: "বৈশ্বিক স্বপ্নদ্রষ্টা ও শিল্প বিশেষজ্ঞদের তত্ত্বাবধানে আমাদের এগিয়ে চলা।",
    },
    en: {
        heroBadge: "About Us",
        heroHeading1: "Built for the future of",
        heroHeading2: "Bangladesh's Pharmacies",
        heroSub: "Our mission is to empower every pharmacy owner across the nation through smart digitization and simplified management.",
        storyBadge: "Our Mission",
        storyHeading1: "The Genesis of",
        storyHeading2: "Medidesh",
        storyP1: "While observing the industry, Faysal identified a critical gap: pharmacy owners were battling manual ledger errors and operational inefficiency. Driven by a resolve to solve this, he envisioned a digital future for community healthcare.",
        storyP2: "He was joined by Farhan, whose strategic operational expertise accelerated the founding of Medidesh. The core team was further strengthened by Noor (Supply Chain expert) and Jannatul (HR strategist).",
        storyP3: "We are committed to the belief that every pharmacy, regardless of location, deserves access to premium, simple, and localized technology.",
        teamBadge: "Our Team",
        teamHeading1: "Meet the minds behind",
        teamHeading2: "Medidesh",
        teamHeading3: "",
        teamSub: "A diverse group of experts dedicated to pharmacy innovation and business excellence.",
        contributorsLabel: "Support & Mentorship",
        mentorsBadge: "Advisors",
        mentorsHeading1: "Strategic",
        mentorsHeading2: "Guidance",
        mentorsSub: "Guided by global visionaries and industry-leading experts.",
    },
};

export default function AboutContent() {
    const { lang } = useLanguage();
    const t = T[lang];

    return (
        <main className="bg-white dark:bg-slate-900 min-h-screen">
            <LandingHeader />

            {/* HERO */}
            <section className="relative pt-28 pb-20 lg:pt-36 lg:pb-28 bg-white overflow-hidden">
                <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: "linear-gradient(#2E8B57 1px,transparent 1px),linear-gradient(90deg,#2E8B57 1px,transparent 1px)", backgroundSize: "60px 60px" }} />
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-medidesh-teal-500/5 rounded blur-[120px] pointer-events-none" />
                
                <svg className="absolute left-0 top-1/2 -translate-y-1/2 w-72 h-72 opacity-[0.07] pointer-events-none" viewBox="0 0 300 300" fill="none" aria-hidden="true">
                    <path d="M60,130 C40,80 80,20 140,30 C200,40 240,90 230,150 C220,210 170,260 110,250 C50,240 20,200 30,160 C35,145 50,140 60,130 Z" fill="#2E8B57" />
                </svg>

                <svg className="absolute right-0 bottom-0 w-80 h-80 opacity-[0.06] pointer-events-none" viewBox="0 0 300 300" fill="none" aria-hidden="true">
                    <path d="M240,60 C270,100 280,160 260,200 C240,240 190,270 140,260 C90,250 60,210 70,160 C80,110 130,80 160,60 C190,40 220,30 240,60 Z" fill="#2E8B57" />
                </svg>

                <div className="container mx-auto px-6 lg:px-12 relative z-10">
                    <div className="max-w-3xl mx-auto text-center">
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded bg-medidesh-teal-50 border border-medidesh-teal-100 text-medidesh-teal-700 text-sm font-bold mb-8 shadow-sm">
                            <UsersThree size={14} weight="fill" className="text-medidesh-teal-500" />
                            <span>{t.heroBadge}</span>
                        </div>
                        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-900 mb-6 leading-[1.1] tracking-tight">
                            {t.heroHeading1}{" "}
                            <span className="relative inline-block text-medidesh-teal-500">
                                {t.heroHeading2}
                                <svg className="absolute -bottom-1 left-0 w-full" viewBox="0 0 300 12" fill="none" preserveAspectRatio="none">
                                    <path d="M2 8 Q 75 2 150 8 T 298 8" stroke="#2E8B57" strokeOpacity="0.25" strokeWidth="4" fill="none" strokeLinecap="round" />
                                </svg>
                            </span>
                        </h1>
                        <p className="text-lg lg:text-xl text-slate-500 mb-10 max-w-2xl mx-auto leading-relaxed">{t.heroSub}</p>
                    </div>
                </div>
            </section>

            {/* STORY */}
            <section id="story" className="py-20 lg:py-28 bg-slate-50 dark:bg-slate-900/50 border-y border-slate-100 dark:border-slate-800/60 relative overflow-hidden">
                <svg className="absolute top-0 left-0 w-full opacity-[0.04] pointer-events-none" viewBox="0 0 1440 50" preserveAspectRatio="none" fill="none" aria-hidden="true">
                    <path d="M0,25 C240,50 480,0 720,25 C960,50 1200,0 1440,25" stroke="#2E8B57" strokeWidth="3" />
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

            {/* TEAM */}
            <section id="team" className="py-20 lg:py-28 bg-white dark:bg-slate-900 relative overflow-hidden">
                <svg className="absolute -right-24 top-1/3 w-64 h-64 opacity-[0.05] pointer-events-none" viewBox="0 0 256 256" fill="none" aria-hidden="true">
                    <circle cx="128" cy="128" r="110" stroke="#2E8B57" strokeWidth="2" strokeDasharray="8 6" />
                    <circle cx="128" cy="128" r="75" stroke="#2E8B57" strokeWidth="1.5" strokeDasharray="5 5" />
                </svg>
                <div className="container mx-auto px-6 lg:px-12 relative z-10">
                    <div className="max-w-2xl mx-auto text-center mb-14">
                        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-400 text-xs font-semibold uppercase tracking-wider mb-5 shadow-sm">
                            <UsersThree size={13} weight="fill" className="text-medidesh-teal-500" />
                            {t.teamBadge}
                        </div>
                        <h2 className="text-3xl lg:text-4xl font-black text-slate-900 dark:text-white mb-4 leading-tight">
                            {t.teamHeading1}{" "}<span className="text-medidesh-teal-500">{t.teamHeading2}</span>{t.teamHeading3 ? ` ${t.teamHeading3}` : ""}
                        </h2>
                        <p className="text-slate-500 dark:text-slate-400 text-lg leading-relaxed">{t.teamSub}</p>
                    </div>

                    {/* Core team */}
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 max-w-5xl mx-auto">
                        {team.map((member, i) => (
                            <div key={i} className="relative overflow-hidden rounded group cursor-default" style={{ aspectRatio: "3/4" }}>
                                <img src={member.photo} alt={member.name} className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105" />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent" />
                                <div className="absolute bottom-0 left-0 right-0 p-4">
                                    <h3 className="font-bold text-white text-sm leading-tight drop-shadow">{member.name}</h3>
                                    <p className="text-white/70 text-xs mt-0.5 leading-snug">{member.role[lang]}</p>
                                </div>
                                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-medidesh-teal-400 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                            </div>
                        ))}
                    </div>

                    {/* Contributors */}
                    <div className="max-w-5xl mx-auto mt-16 pt-12 border-t border-slate-100 dark:border-slate-800/60">
                        <div className="flex items-center gap-3 mb-8">
                            <div className="h-px flex-1 bg-slate-100 dark:bg-slate-800" />
                            <span className="text-xs font-semibold uppercase text-slate-400 dark:text-slate-500 px-2">{t.contributorsLabel}</span>
                            <div className="h-px flex-1 bg-slate-100 dark:bg-slate-800" />
                        </div>
                        <div className="grid grid-cols-3 gap-4 max-w-2xl mx-auto">
                            {contributors.map((person, i) => (
                                <div key={i} className="flex flex-col gap-3">
                                    <div className="relative overflow-hidden rounded group cursor-default" style={{ aspectRatio: "3/4" }}>
                                        <img src={person.photo} alt={person.name} className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105" />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/15 to-transparent" />
                                        <div className="absolute bottom-0 left-0 right-0 p-3">
                                            <h3 className="font-bold text-white text-sm leading-tight drop-shadow">{person.name}</h3>
                                            <p className="text-white/65 text-xs mt-0.5 leading-snug">{person.role[lang]}</p>
                                        </div>
                                        <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-medidesh-teal-300 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* MENTORS */}
            <section id="mentors" className="py-20 lg:py-28 bg-slate-50 dark:bg-slate-900/50 border-t border-slate-100 dark:border-slate-800/60 relative overflow-hidden">
                <svg className="absolute right-10 top-10 opacity-[0.07] pointer-events-none hidden lg:block" width="120" height="120" aria-hidden="true">
                    {[0,1,2,3,4].map(r => [0,1,2,3,4].map(c => (
                        <circle key={`${r}-${c}`} cx={12+c*24} cy={12+r*24} r="2.5" fill="#2E8B57" />
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
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 max-w-5xl mx-auto">
                        {mentors.map((mentor, i) => (
                            <div key={i} className="relative overflow-hidden rounded group cursor-default" style={{ aspectRatio: "3/4" }}>
                                <img src={mentor.photo} alt={mentor.name} className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105" />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-transparent" />
                                <div className="absolute bottom-0 left-0 right-0 p-4">
                                    <h3 className="font-bold text-white text-sm leading-tight drop-shadow">{mentor.name}</h3>
                                    <span className="inline-block mt-1 px-2 py-0.5 bg-amber-400/20 border border-amber-300/40 text-amber-200 text-[10px] font-semibold rounded backdrop-blur-sm">{mentor.org}</span>
                                    <p className="text-white/60 text-xs mt-1">{mentor.role[lang]}</p>
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
