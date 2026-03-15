import type { Metadata } from "next";
import LandingHeader from "@/components/landing/LandingHeader";
import LandingFooter from "@/components/landing/LandingFooter";
import {
    UsersThreeIcon,
    SparkleIcon,
    GooglePlayLogoIcon,
    WhatsappLogoIcon,
} from "@phosphor-icons/react/dist/ssr";

export const metadata: Metadata = {
    title: "আমাদের সম্পর্কে | মেডিদেশ",
    description: "ফার্মেসি মালিকদের জন্য তৈরি দল — মেডিদেশ।",
};

const team = [
    { name: "Faysal Hossain", role: "CEO & Co-Founder", photo: "https://i.pravatar.cc/600?img=12" },
    { name: "Farhan Ahmed", role: "CAO & Co-Founder", photo: "https://i.pravatar.cc/600?img=68" },
    { name: "Noor Mohammad", role: "Head of Pharmacy & Supply Chain", photo: "https://i.pravatar.cc/600?img=57" },
    { name: "Jannatul Maowa", role: "Head of Human Resources", photo: "https://i.pravatar.cc/600?img=47" },
];

const contributors = [
    {
        name: "Tivana",
        role: "Design & Marketing",
        desc: "ব্র্যান্ড ভিজ্যুয়াল, UI ডিজাইন ও মার্কেটিং কন্টেন্ট তৈরিতে সহায়তা করেন।",
        photo: "https://i.pravatar.cc/600?img=44",
    },
    {
        name: "Mahfuz",
        role: "Business Analysis",
        desc: "বাজার গবেষণা ও ব্যবসায়িক সিদ্ধান্ত গ্রহণে বিশ্লেষণী সহায়তা প্রদান করেন।",
        photo: "https://i.pravatar.cc/600?img=53",
    },
    {
        name: "Mbr Sagor",
        role: "Web & Database Design",
        desc: "ওয়েব ইন্টারফেস ও ডেটাবেজ আর্কিটেকচার ডিজাইনে গুরুত্বপূর্ণ অবদান রাখেন।",
        photo: "https://i.pravatar.cc/600?img=18",
    },
];

const mentors = [
    { name: "James Tan", role: "Business Advisor", org: "CEO, Heyjom & Mantra", photo: "https://i.pravatar.cc/600?img=33" },
    { name: "Murugan Thangiah", role: "Academic Advisor", org: "Senior Lecturer, Taylor's University", photo: "https://i.pravatar.cc/600?img=60" },
    { name: "Abdus Sami", role: "Technology Advisor", org: "CEO, AppifyDevs", photo: "https://i.pravatar.cc/600?img=7" },
    { name: "Prof. Dr. C. A. Vaithilingam", role: "Innovation Advisor", org: "Professor & Sustainability Catalyst", photo: "https://i.pravatar.cc/600?img=66" },
];


export default function AboutPage() {
    return (
        <main className="bg-white min-h-screen">
            <LandingHeader />

            {/* ══════════════════════════════════════
                HERO
            ══════════════════════════════════════ */}
            <section className="relative pt-28 pb-20 lg:pt-36 lg:pb-28 bg-white overflow-hidden">
                {/* Grid bg */}
                <div className="absolute inset-0 opacity-[0.03] pointer-events-none"
                    style={{ backgroundImage: "linear-gradient(#2E8B57 1px,transparent 1px),linear-gradient(90deg,#2E8B57 1px,transparent 1px)", backgroundSize: "60px 60px" }} />
                {/* Glow */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-medidesh-teal-500/5 rounded blur-[120px] pointer-events-none" />

                {/* Blob right */}
                <svg className="absolute right-0 top-0 w-96 h-96 opacity-[0.06] pointer-events-none" viewBox="0 0 400 400" fill="none" aria-hidden="true">
                    <path d="M300,30 C370,70 410,170 385,260 C360,350 270,400 180,390 C90,380 20,300 10,210 C0,120 60,30 150,15 C200,7 250,10 300,30 Z" fill="#2E8B57" />
                </svg>
                {/* Dots left */}
                <svg className="absolute left-10 bottom-16 opacity-[0.07] pointer-events-none hidden lg:block" width="110" height="110" aria-hidden="true">
                    {[0, 1, 2, 3, 4].map(r => [0, 1, 2, 3, 4].map(c => (
                        <circle key={`${r}-${c}`} cx={11 + c * 22} cy={11 + r * 22} r="2.5" fill="#2E8B57" />
                    )))}
                </svg>
                {/* Pill decoration */}
                <svg className="absolute top-32 right-20 w-14 h-7 opacity-[0.08] pointer-events-none hidden lg:block rotate-[25deg]" viewBox="0 0 80 36" fill="none" aria-hidden="true">
                    <rect x="1" y="1" width="78" height="34" rx="17" fill="#2E8B57" />
                    <line x1="40" y1="1" x2="40" y2="35" stroke="white" strokeWidth="2" opacity="0.6" />
                </svg>

                <div className="container mx-auto px-6 lg:px-12 relative z-10">
                    <div className="max-w-3xl mx-auto text-center">
                        {/* Badge */}
                        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded bg-white border border-slate-200 text-slate-600 text-xs font-semibold uppercase tracking-wider mb-6 shadow-sm">
                            <UsersThreeIcon size={13} weight="fill" className="text-medidesh-teal-500" />
                            আমাদের সম্পর্কে
                        </div>

                        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-900 mb-6 leading-[1.1] tracking-tight">
                            বাংলাদেশের ফার্মেসি খাতে আস্থার <span className="text-medidesh-teal-500">সংকট ও আমাদের লক্ষ্য</span>
                        </h1>
                        <p className="text-lg lg:text-xl text-slate-500 leading-relaxed max-w-2xl mx-auto">
                            নকল ও মেয়াদোত্তীর্ণ ওষুধের ভয়ংকর বিস্তার আর ম্যানুয়াল খাতার ভুলের ভিড়ে মেডিদেশ কাজ করছে প্রতিটি ফার্মেসিকে আধুনিক, স্বচ্ছ ও নিরাপদ করার সংকল্প নিয়ে।
                        </p>
                    </div>
                </div>
            </section>

            {/* ══════════════════════════════════════
                STORY
            ══════════════════════════════════════ */}
            <section className="py-20 lg:py-28 bg-slate-50 border-y border-slate-100 relative overflow-hidden">
                {/* Wavy top accent */}
                <svg className="absolute top-0 left-0 w-full opacity-[0.04] pointer-events-none" viewBox="0 0 1440 50" preserveAspectRatio="none" fill="none" aria-hidden="true">
                    <path d="M0,25 C240,50 480,0 720,25 C960,50 1200,0 1440,25" stroke="#2E8B57" strokeWidth="3" />
                </svg>
                {/* Blob left */}
                <svg className="absolute -left-20 -bottom-20 w-72 h-72 opacity-[0.05] pointer-events-none" viewBox="0 0 280 280" fill="none" aria-hidden="true">
                    <path d="M140,20 C200,0 270,60 275,130 C280,200 230,265 160,272 C90,280 20,230 10,160 C0,90 50,30 100,18 C115,14 127,24 140,20 Z" fill="#2E8B57" />
                </svg>

                <div className="container mx-auto px-6 lg:px-12 relative z-10">
                    <div className="max-w-2xl mx-auto text-center">
                        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded bg-white border border-slate-200 text-slate-600 text-xs font-semibold uppercase tracking-wider mb-5 shadow-sm">
                            <SparkleIcon size={13} weight="fill" className="text-medidesh-teal-500" />
                            আমাদের গল্প
                        </div>
                        <h2 className="text-3xl lg:text-4xl font-black text-slate-900 mb-6 leading-tight">
                            কীভাবে শুরু হলো{" "}
                            <span className="text-medidesh-teal-500">মেডিদেশ</span>
                        </h2>
                        <div className="space-y-4 text-slate-600 text-lg leading-relaxed text-left">
                            <p>
                                সংবাদপত্রের পাতায় পাতায় প্রায়ই দেখা যায় মেয়াদের উত্তীর্ণ ওষুধ বিক্রির দায়ে জরিমানা কিংবা নকল ও ভেজাল ওষুধের ভিড়ে সাধারণ মানুষের অসহায়ত্বের খবর। আমরা যখন ফার্মেসি খাতের এই গভীর সংকট পর্যবেক্ষণ করি, তখন উপলব্ধি করি যে অধিকাংশ ক্ষেত্রেই এই সমস্যাগুলো কেবল অগোছালো ইনভেন্টরি এবং ম্যানুয়াল হিসাবের জটিলতা থেকে সৃষ্টি হচ্ছে।
                            </p>
                            <p>
                                একজন সৎ ফার্মেসি মালিকও কেবল ম্যানুয়াল খাতার ভুলে কিংবা সঠিক ট্র্যাকিংয়ের অভাবে মেয়াদের উত্তীর্ণ ওষুধ স্টকে রেখে ফেলছেন, যা সাধারণ মানুষের জীবনের জন্য মারাত্মক হুমকি হয়ে দাঁড়ায়। এই তিক্ত অভিজ্ঞতাই রূপ নেয় মেডিদেশের রূপকল্পে। আমাদের মিশন হলো এমন এক ডিজিটাল সিস্টেম নিশ্চিত করা যেখানে প্রতিটি ওষুধের মেয়াদ স্বয়ংক্রিয়ভাবে ট্র্যাক হবে এবং ভুল কিংবা অব্যবস্থাপনার কোনো সুযোগ থাকবে না।
                            </p>
                            <p>
                                আমরা বিশ্বাস করি, ডিজিটাল রেকর্ডিং এবং স্বয়ংক্রিয় সতর্কতা ব্যবস্থা কেবল ব্যবসার লাভই নিশ্চিত করে না, বরং প্রতিটি পরিবারের জন্য নিরাপদ ওষুধের নিশ্চয়তা দেয়। মেডিদেশ কেবল একটি সফটওয়্যার নয়, এটি বাংলাদেশের প্রতিটি প্রান্তের মানুষের সঠিক চিকিৎসা পথকে সহজ ও নিরাপদ করার একটি অঙ্গীকার।
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* ══════════════════════════════════════
                TEAM
            ══════════════════════════════════════ */}
            <section className="py-20 lg:py-28 bg-white relative overflow-hidden">
                {/* Dashed circle */}
                <svg className="absolute -right-24 top-1/3 w-64 h-64 opacity-[0.05] pointer-events-none" viewBox="0 0 256 256" fill="none" aria-hidden="true">
                    <circle cx="128" cy="128" r="110" stroke="#2E8B57" strokeWidth="2" strokeDasharray="8 6" />
                    <circle cx="128" cy="128" r="75" stroke="#2E8B57" strokeWidth="1.5" strokeDasharray="5 5" />
                </svg>

                <div className="container mx-auto px-6 lg:px-12 relative z-10">
                    {/* Header */}
                    <div className="max-w-2xl mx-auto text-center mb-14">
                        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded bg-white border border-slate-200 text-slate-600 text-xs font-semibold uppercase tracking-wider mb-5 shadow-sm">
                            <UsersThreeIcon size={13} weight="fill" className="text-medidesh-teal-500" />
                            আমাদের টিম
                        </div>
                        <h2 className="text-3xl lg:text-4xl font-black text-slate-900 mb-4 leading-tight">
                            যারা{" "}
                            <span className="text-medidesh-teal-500">মেডিদেশ</span>{" "}
                            গড়ছে
                        </h2>
                        <p className="text-slate-500 text-lg leading-relaxed">
                            ফার্মেসি, প্রযুক্তি ও ব্যবসায়িক অভিজ্ঞতার সমন্বয়ে গড়া আমাদের দল।
                        </p>
                    </div>

                    {/* Core team grid */}
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 max-w-5xl mx-auto">
                        {team.map((member, i) => (
                            <div
                                key={i}
                                className="relative overflow-hidden rounded group cursor-default"
                                style={{ aspectRatio: "3/4" }}
                            >
                                <img
                                    src={member.photo}
                                    alt={member.name}
                                    className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent" />
                                <div className="absolute bottom-0 left-0 right-0 p-4">
                                    <h3 className="font-bold text-white text-sm leading-tight drop-shadow">{member.name}</h3>
                                    <p className="text-white/70 text-xs mt-0.5 leading-snug">{member.role}</p>
                                </div>
                                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-medidesh-teal-400 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                            </div>
                        ))}
                    </div>

                    {/* Contributors sub-section */}
                    <div className="max-w-5xl mx-auto mt-16 pt-12 border-t border-slate-100">
                        <div className="flex items-center gap-3 mb-8">
                            <span className="text-xs font-semibold uppercase text-slate-400 px-2">বিশেষ সহযোগী</span>
                            <div className="h-px flex-1 bg-slate-100" />
                        </div>
                        <div className="grid grid-cols-3 gap-4 max-w-2xl mx-auto">
                            {contributors.map((person, i) => (
                                <div
                                    key={i}
                                    className="relative overflow-hidden rounded group cursor-default"
                                    style={{ aspectRatio: "3/4" }}
                                >
                                    <img
                                        src={person.photo}
                                        alt={person.name}
                                        className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                                    />
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
                </div>
            </section>

            {/* ══════════════════════════════════════
                MENTORS
            ══════════════════════════════════════ */}
            <section className="py-20 lg:py-28 bg-slate-50 border-t border-slate-100 relative overflow-hidden">
                {/* Dots */}
                <svg className="absolute right-10 top-10 opacity-[0.07] pointer-events-none hidden lg:block" width="120" height="120" aria-hidden="true">
                    {[0, 1, 2, 3, 4].map(r => [0, 1, 2, 3, 4].map(c => (
                        <circle key={`${r}-${c}`} cx={12 + c * 24} cy={12 + r * 24} r="2.5" fill="#2E8B57" />
                    )))}
                </svg>

                <div className="container mx-auto px-6 lg:px-12 relative z-10">
                    {/* Header */}
                    <div className="max-w-2xl mx-auto text-center mb-14">
                        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded bg-white border border-amber-200 text-amber-700 text-xs font-semibold uppercase tracking-wider mb-5 shadow-sm">
                            <SparkleIcon size={13} weight="fill" className="text-amber-500" />
                            উপদেষ্টামণ্ডলী
                        </div>
                        <h2 className="text-3xl lg:text-4xl font-black text-slate-900 mb-4 leading-tight">
                            যারা আমাদের{" "}
                            <span className="text-medidesh-teal-500">পথ দেখাচ্ছেন</span>
                        </h2>
                        <p className="text-slate-500 text-lg leading-relaxed">
                            শিল্প বিশেষজ্ঞ ও অভিজ্ঞ উদ্যোক্তাদের গাইডেন্সে আমরা এগিয়ে চলেছি।
                        </p>
                    </div>

                    {/* Grid */}
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 max-w-5xl mx-auto">
                        {mentors.map((mentor, i) => (
                            <div
                                key={i}
                                className="relative overflow-hidden rounded group cursor-default"
                                style={{ aspectRatio: "3/4" }}
                            >
                                {/* Photo */}
                                <img
                                    src={mentor.photo}
                                    alt={mentor.name}
                                    className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                                />
                                {/* Gradient overlay */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-transparent" />
                                {/* Info overlay at bottom */}
                                <div className="absolute bottom-0 left-0 right-0 p-4">
                                    <h3 className="font-bold text-white text-sm leading-tight drop-shadow">{mentor.name}</h3>
                                    <span className="inline-block mt-1 px-2 py-0.5 bg-amber-400/20 border border-amber-300/40 text-amber-200 text-[10px] font-semibold rounded backdrop-blur-sm">
                                        {mentor.org}
                                    </span>
                                    <p className="text-white/60 text-xs mt-1">{mentor.role}</p>
                                </div>
                                {/* Amber accent line at bottom on hover */}
                                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-amber-400 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ══════════════════════════════════════
                CTA
            ══════════════════════════════════════ */}
            <section id="cta" className="py-20 lg:py-28 bg-medidesh-teal-500 relative overflow-hidden">
                <div className="absolute inset-0 opacity-[0.04] pointer-events-none"
                    style={{ backgroundImage: "radial-gradient(circle,#fff 1px,transparent 1px)", backgroundSize: "28px 28px" }} />
                <div className="absolute -top-40 -right-40 w-96 h-96 bg-white/10 rounded blur-3xl pointer-events-none" />
                <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-black/10 rounded blur-3xl pointer-events-none" />

                <div className="container mx-auto px-6 lg:px-12 relative z-10">
                    <div className="max-w-3xl mx-auto text-center">
                        <h2 className="text-3xl lg:text-5xl font-black text-white mb-5 leading-tight">
                            আজই শুরু করুন —<br />
                            <span className="text-medidesh-teal-100">বিনামূল্যে।</span>
                        </h2>
                        <p className="text-medidesh-teal-50 text-lg mb-10 leading-relaxed max-w-xl mx-auto">
                            কোনো ক্রেডিট কার্ড লাগবে না। মাত্র ৫ মিনিটে সেটআপ।
                        </p>

                        <div className="flex flex-col sm:flex-row justify-center gap-4">
                            <a
                                href="https://wa.me/+8801608844017?text=আমি%20মেডিদেশ%20Android%20অ্যাপ%20ডাউনলোড%20করতে%20চাই"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-white hover:bg-slate-50 text-medidesh-teal-700 px-8 py-4 rounded font-bold text-base shadow-xl transition-all hover:-translate-y-0.5"
                            >
                                <GooglePlayLogoIcon weight="fill" size={20} />
                                অ্যাপ ডাউনলোড করুন
                            </a>
                            <a
                                href="https://wa.me/+8801608844017"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-medidesh-teal-600 hover:bg-medidesh-teal-700 text-white border border-white/20 px-8 py-4 rounded font-bold text-base transition-all hover:-translate-y-0.5"
                            >
                                <WhatsappLogoIcon weight="fill" size={20} />
                                WhatsApp করুন
                            </a>
                        </div>

                        <p className="mt-8 text-medidesh-teal-100 text-sm">
                            শনি–বৃহস্পতি, সকাল ১০টা – রাত ৮টা &nbsp;·&nbsp; 01608-844017
                        </p>
                    </div>
                </div>
            </section>

            <LandingFooter />
        </main>
    );
}
