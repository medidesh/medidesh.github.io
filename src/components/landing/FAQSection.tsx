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
            { q: "আমাকে কি সব ওষুধের নাম ম্যানুয়ালি টাইপ করতে হবে?", a: "না! মেডিদেশে বাংলাদেশের ২০,০০০-এর বেশি ওষুধের গ্লোবাল ডেটাবেস আগে থেকেই যুক্ত করা আছে। আপনি খুব সহজেই সার্চ করে সেকেন্ডের মধ্যে স্টকে ওষুধ যোগ করতে পারবেন।" },
            { q: "মেয়াদোত্তীর্ণ ওষুধের ক্ষেত্রে সফটওয়্যারটি কীভাবে সাহায্য করে?", a: "ওষুধের মেয়াদ শেষ হওয়ার ৩ মাস আগেই মেডিদেশ আপনাকে স্বয়ংক্রিয়ভাবে অ্যালার্ট পাঠাবে। এটি আপনাকে লোকসান এড়াতে এবং ঔষধ প্রশাসনের (DGDA) নিয়ম মেনে চলতে সাহায্য করবে।" },
            { q: "আমি বাইরে থেকে কি স্টাফদের বেচাকেনা মনিটর করতে পারব?", a: "হ্যাঁ। আমাদের মাল্টি-ইউজার ফিচারের মাধ্যমে আপনি স্টাফদের জন্য আলাদা অ্যাকাউন্ট তৈরি করতে পারবেন। মালিক হিসেবে আপনি যেকোনো জায়গা থেকে লাইভ সেলস এবং ইনভেন্টরি দেখতে পারবেন।" },
            { q: "কাস্টমারদের কি রসিদ বা ইনভয়েস প্রিন্ট করে দেওয়া যাবে?", a: "অবশ্যই। মেডিদেশ ব্লুটুথ বা ওয়াই-ফাই থার্মাল প্রিন্টার সাপোর্ট করে, যার সাহায্যে আপনি অ্যান্ড্রয়েড ফোন থেকেই তাৎক্ষণিক ইনভয়েস প্রিন্ট করতে পারবেন।" },
            { q: "আমার ফার্মেসির হিসাব এবং ডেটা কি নিরাপদ?", a: "আপনার ডেটা ১০০ ভাগ নিরাপদ। আমরা ব্যাংক-গ্রেড এনক্রিপশন এবং স্বয়ংক্রিয় ক্লাউড ব্যাকআপ ব্যবহার করি। আপনার ডেটা সম্পূর্ণ গোপনীয় এবং কোনো থার্ড পার্টির সাথে শেয়ার করা হয় না।" },
            { q: "প্রিমিয়াম প্যাকেজ ব্যবহার বন্ধ করলে কি আমার ডেটা মুছে যাবে?", a: "না। মেডিদেশের 'পদ্মা' প্ল্যানটি আজীবন ফ্রি। প্রিমিয়াম মেয়াদ শেষ হলে এটি স্বয়ংক্রিয়ভাবে ফ্রি প্ল্যানে চলে যাবে, কিন্তু আপনার কোনো ডেটা হারাবে না।" },
        ],
    },
    en: {
        badge: "FAQ",
        heading: "Frequently asked questions",
        sub: "Find answers to our most common questions here.",
        faq: [
            { q: "Do I need to manually type every medicine name?", a: "No! Medidesh comes with a pre-loaded global database of over 20,000+ medicines available in Bangladesh. You can easily search and add them to your stock in seconds." },
            { q: "How does the system help with expiring medicines?", a: "To ensure compliance with DGDA regulations and prevent losses, Medidesh automatically tracks expiry dates and sends you alert notifications 3 months before any medicine expires." },
            { q: "Can my staff use the system while I monitor remotely?", a: "Yes. Our multi-user system allows you to create separate accounts for your staff for daily billing. As an owner, you can monitor live sales, inventory, and analytics from anywhere." },
            { q: "Can I print receipts for my customers?", a: "Absolutely. Medidesh supports thermal printing via Bluetooth or Wi-Fi, allowing you to instantly print professional receipts from your Android device." },
            { q: "Is my pharmacy's financial and stock data secure?", a: "Yes, your data is 100% secure. We use bank-grade encryption with automatic daily cloud backups. Your business data is private and never shared with third parties." },
            { q: "What happens if I stop using the premium version?", a: "Medidesh has a forever-free Padma plan. If your premium subscription ends, your account will simply downgrade to the free plan. You will never lose your data." },
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
                            <div key={idx} className={`border rounded-xl overflow-hidden transition-all duration-300 ${isOpen ? "bg-white border-medidesh-teal-200 shadow-md shadow-medidesh-teal-500/5" : "bg-white border-slate-200 hover:border-slate-300 hover:shadow-sm"}`}>
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
