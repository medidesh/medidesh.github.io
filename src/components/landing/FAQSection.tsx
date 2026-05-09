"use client";

import { useState } from "react";
import { Plus, Minus, Question } from "@phosphor-icons/react/dist/ssr";
import { useLanguage } from "@/lib/i18n";
import { motion, AnimatePresence } from "framer-motion";

const T = {
    bn: {
        badge: "প্রশ্নোত্তর",
        heading: "প্রায়শই জিজ্ঞাসিত প্রশ্নাবলী",
        sub: "আমাদের সবচেয়ে সাধারণ প্রশ্নগুলোর উত্তর এখানে পাবেন।",
        faq: [
            { q: "মেডিদেশ কি সত্যিই বিনামূল্যে?", a: "হ্যাঁ! পদ্মা প্ল্যান চিরতরে বিনামূল্যে। এতে ৩০০ পণ্য পর্যন্ত ইনভেন্টরি, দৈনিক সেলস রিপোর্ট এবং বেসিক ক্রেডিট ম্যানেজমেন্ট অন্তর্ভুক্ত। কোনো লুকানো চার্জ নেই।" },
            { q: "আমার ডেটা কি নিরাপদ?", a: "অবশ্যই। আমরা ব্যাংক-গ্রেড এনক্রিপশন ব্যবহার করি এবং প্রতিদিন স্বয়ংক্রিয় ব্যাকআপ নেওয়া হয়। আপনার ডেটা শুধু আপনার — কোনো থার্ড পার্টির সাথে শেয়ার করা হয় না।" },
            { q: "ইন্টারনেট ছাড়া কি কাজ করবে?", a: "হ্যাঁ! মেডিদেশ সম্পূর্ণ অফলাইনে কাজ করে। বিলিং, ইনভেন্টরি আপডেট, এবং রিপোর্ট দেখা — সবই ইন্টারনেট ছাড়া সম্ভব। ইন্টারনেট পেলে স্বয়ংক্রিয়ভাবে ক্লাউডে সিঙ্ক হয়ে যায়।" },
            { q: "আমি কিভাবে পেমেন্ট করতে পারি?", a: "বিকাশ, নগদ, রকেট, এবং ব্যাংক ট্রান্সফার — যেকোনো মাধ্যমে পেমেন্ট করতে পারবেন। মেয়াদ শেষে রিনিউ করুন, অন্যথায় স্বয়ংক্রিয়ভাবে ফ্রি প্ল্যানে ফিরে যাবে।" },
            { q: "প্ল্যান পরিবর্তন বা বাতিল করা কি সহজ?", a: "একদম! যেকোনো সময় আপগ্রেড বা ডাউনগ্রেড করুন। বাতিল করলে কোনো জরিমানা নেই — বাকি মেয়াদ পর্যন্ত প্রিমিয়াম সুবিধা চলবে, তারপর ফ্রি প্ল্যানে ফিরে যাবে।" },
            { q: "কম্পিউটারে কি ব্যবহার করতে পারি?", a: "হ্যাঁ! উইন্ডোজ ভার্সন শীঘ্রই আসছে। এখন আপনার অ্যান্ড্রয়েড ফোনে পূর্ণাঙ্গ সব ফিচার ব্যবহার করতে পারবেন।" },
        ],
    },
    en: {
        badge: "FAQ",
        heading: "Frequently asked questions",
        sub: "Find answers to our most common questions here.",
        faq: [
            { q: "Is Medidesh really free?", a: "Yes! The Padma plan is forever free. It includes inventory for up to 300 products, daily sales reports, and basic credit management. No hidden charges." },
            { q: "Is my data secure?", a: "Absolutely. We use bank-grade encryption with daily automatic backups. Your data is only yours — never shared with third parties." },
            { q: "Does it work without internet?", a: "Yes! Medidesh works completely offline. Billing, inventory updates, and viewing reports — all possible without internet. When connected, it automatically syncs to the cloud." },
            { q: "How can I make payments?", a: "You can pay via bKash, Nagad, Rocket, and bank transfer. Renew before expiry, otherwise it automatically reverts to the free plan." },
            { q: "Is it easy to change or cancel plans?", a: "Absolutely! Upgrade or downgrade anytime. No penalty for cancellation — premium features continue until the end of the period, then reverts to free." },
            { q: "Can I use it on a computer?", a: "Yes! Windows version is coming soon. Right now, you can use all features on your Android phone." },
        ],
    },
};

export default function FAQSection() {
    const { lang } = useLanguage();
    const t = T[lang];
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    return (
        <section id="faq" className="py-20 lg:py-32 bg-slate-50">
            <div className="container mx-auto px-5 lg:px-10">
                <div className="max-w-2xl mx-auto text-center mb-16 lg:mb-20">
                    <h2 className="text-4xl sm:text-5xl lg:text-[48px] font-black text-slate-900 mb-6 leading-[1.1] tracking-[-0.03em]">{t.heading}</h2>
                    <p className="text-slate-500 text-lg leading-relaxed">{t.sub}</p>
                </div>

                <div className="max-w-3xl mx-auto space-y-4">
                    {t.faq.map((item, idx) => {
                        const isOpen = openIndex === idx;
                        return (
                            <div key={idx} className={`border rounded-2xl overflow-hidden transition-all duration-300 ${isOpen ? "bg-white border-medidesh-teal-200 shadow-md shadow-medidesh-teal-500/5" : "bg-white border-slate-200 hover:border-slate-300 hover:shadow-sm"}`}>
                                <button
                                    onClick={() => setOpenIndex(isOpen ? null : idx)}
                                    className="flex items-center justify-between w-full px-6 py-5 text-left bg-transparent"
                                >
                                    <span className={`font-bold text-base transition-colors ${isOpen ? "text-medidesh-teal-600" : "text-slate-900"}`}>{item.q}</span>
                                    <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ml-4 transition-all duration-300 ${isOpen ? "bg-medidesh-teal-100 text-medidesh-teal-600 rotate-180" : "bg-slate-100 text-slate-500"}`}>
                                        {isOpen ? <Minus size={14} weight="bold" /> : <Plus size={14} weight="bold" />}
                                    </div>
                                </button>
                                <AnimatePresence initial={false}>
                                    {isOpen && (
                                        <motion.div
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: "auto", opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            transition={{ duration: 0.2, ease: "easeInOut" }}
                                            className="overflow-hidden"
                                        >
                                            <div className="px-6 pb-6 pt-2 text-[15px] text-slate-600 leading-relaxed font-medium">{item.a}</div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
