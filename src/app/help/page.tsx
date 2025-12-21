"use client";

import LandingHeader from "@/components/landing/LandingHeader";
import LandingFooter from "@/components/landing/LandingFooter";
import { BookOpen, Question, RocketLaunch, ShieldCheck } from "@phosphor-icons/react/dist/ssr";

export default function HelpPage() {
    const helpTopics = [
        {
            icon: <RocketLaunch size={32} weight="fill" />,
            title: "শুরু করা",
            items: ["কিভাবে একাউন্ট খুলবেন", "সফটওয়্যার সেটআপ গাইড", "প্রথম ইনভয়েস তৈরি", "স্টক এন্ট্রি করার নিয়ম"]
        },
        {
            icon: <BookOpen size={32} weight="fill" />,
            title: "ফিচার গাইড",
            items: ["ইনভেন্টরি ম্যানেজমেন্ট", "মাল্টি-স্টাফ সেলিং", "এক্সপায়ারি ডেট ট্র্যাকিং", "রিপোর্ট জেনারেশন"]
        },
        {
            icon: <ShieldCheck size={32} weight="fill" />,
            title: "নিরাপত্তা ও সেটিংস",
            items: ["পাসওয়ার্ড পরিবর্তন", "স্টাফ পারমিশন", "ডাটা ব্যাকআপ", "প্রাইভেসি পলিসি"]
        },
        {
            icon: <Question size={32} weight="fill" />,
            title: "সাধারণ প্রশ্ন (FAQ)",
            items: ["পেমেন্ট মেথডসমূহ", "অফলাইন সুবিধা", "সাসক্রিপশন রিনিউ", "রিফান্ড পলিসি"]
        }
    ];

    return (
        <main className="min-h-screen bg-slate-50 dark:bg-slate-900 transition-colors">
            <LandingHeader />

            <section className="pt-32 pb-20 px-4">
                <div className="container mx-auto">
                    <div className="text-center max-w-3xl mx-auto mb-20">
                        <h1 className="text-4xl lg:text-6xl font-black text-slate-900 dark:text-white mb-6">হেল্প সেন্টার</h1>
                        <p className="text-xl text-slate-500 dark:text-slate-400">মেডিদেশ এর প্রতিটি ফিচার সম্পর্কে বিস্তারিত জানুন এখানে।</p>

                        <div className="mt-10 relative max-w-xl mx-auto">
                            <input
                                type="text"
                                placeholder="কিভাবে সহযোগিতা করতে পারি?"
                                className="w-full px-8 py-5 rounded-2xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 focus:ring-4 focus:ring-pharma-green-500/10 outline-none transition-all text-lg shadow-xl shadow-slate-200/50 dark:shadow-none dark:text-white"
                            />
                        </div>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto mb-20">
                        {helpTopics.map((topic, idx) => (
                            <div key={idx} className="p-8 rounded-[2rem] bg-white dark:bg-slate-800 border border-slate-100 dark:border-slate-700 hover:shadow-2xl transition-all group">
                                <div className="text-pharma-green-600 mb-6 group-hover:scale-110 transition-transform origin-left">
                                    {topic.icon}
                                </div>
                                <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">{topic.title}</h3>
                                <ul className="space-y-4">
                                    {topic.items.map((item, i) => (
                                        <li key={i}>
                                            <a href="#" className="text-slate-500 dark:text-slate-400 hover:text-pharma-green-600 transition-colors flex items-center gap-2">
                                                <span className="w-1.5 h-1.5 rounded-full bg-slate-300 dark:bg-slate-600"></span>
                                                {item}
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>

                    <div className="bg-pharma-green-600 rounded-[3rem] p-12 text-center text-white max-w-4xl mx-auto relative overflow-hidden">
                        <h2 className="text-3xl font-bold mb-4">আরও প্রশ্ন আছে?</h2>
                        <p className="text-pharma-green-50 mb-8">আমাদের টিমের সাথে সরাসরি কথা বলতে পারেন।</p>
                        <div className="flex justify-center gap-4">
                            <a href="/support" className="px-8 py-4 bg-white text-pharma-green-600 rounded-xl font-black hover:bg-pharma-green-50 transition-colors">সাপোর্ট সেন্টার</a>
                        </div>
                    </div>
                </div>
            </section>

            <LandingFooter />
        </main>
    );
}
