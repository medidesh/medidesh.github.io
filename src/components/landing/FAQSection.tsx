"use client";

import { useState } from "react";
import { CaretDown, Question } from "@phosphor-icons/react/dist/ssr";

const faqs = [
    {
        q: "মেডিদেশ কি সত্যিই বিনামূল্যে ব্যবহার করা যায়?",
        a: "হ্যাঁ! পদ্মা প্ল্যানটি চিরতরে বিনামূল্যে। কোনো ক্রেডিট কার্ড বা ট্রায়াল পিরিয়ড নেই — শুধু ডাউনলোড করুন এবং শুরু করুন। আপনার ব্যবসা বড় হলে যেকোনো সময় প্রিমিয়াম প্ল্যানে আপগ্রেড করতে পারবেন।",
    },
    {
        q: "কাস্টমার সাপোর্ট কতক্ষণ পাওয়া যায়?",
        a: "আমাদের বাংলাদেশি সাপোর্ট টিম শনি–বৃহস্পতি সকাল ১০টা থেকে রাত ৮টা পর্যন্ত সরাসরি সাড়া দেয়। WhatsApp ও ফোনে যোগাযোগ করতে পারবেন: 01608-844017। যমুনা প্ল্যানে প্রায়োরিটি সাপোর্ট পাওয়া যায়।",
    },
    {
        q: "আমার ডেটা কতটা নিরাপদ?",
        a: "আপনার ডেটা Google Cloud-এ ব্যাংক-গ্রেড AES-256 এনক্রিপশনে সংরক্ষিত থাকে। স্বয়ংক্রিয় ব্যাকআপ প্রতিদিন তৈরি হয়, তাই ডেটা হারানোর কোনো সুযোগ নেই।",
    },
    {
        q: "একাধিক স্টাফ কি একসাথে ব্যবহার করতে পারবে?",
        a: "হ্যাঁ। মেঘনা প্ল্যানে ৩ জন ও যমুনা প্ল্যানে ৫ জন ব্যবহারকারী যুক্ত করা যায়। প্রত্যেকের জন্য আলাদা অনুমতি (permission) সেট করা সম্ভব — যেমন ক্যাশিয়ার শুধু বিক্রয় করতে পারবে, রিপোর্ট দেখতে পারবে না।",
    },
    {
        q: "প্ল্যান পরিবর্তন বা বাতিল করা কি সহজ?",
        a: "অবশ্যই। যেকোনো সময় সরাসরি অ্যাপ থেকে আপগ্রেড বা ডাউনগ্রেড করতে পারবেন। কোনো লুকানো চার্জ বা বাতিল ফি নেই।",
    },
];

export default function FAQSection() {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    return (
        <section id="faq" className="py-20 lg:py-28 bg-slate-50 border-t border-slate-100">
            <div className="container mx-auto px-6 lg:px-12">
                <div className="max-w-3xl mx-auto">
                    {/* Header */}
                    <div className="text-center mb-12">
                        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded bg-white border border-slate-200 text-slate-600 text-xs font-semibold uppercase tracking-wider mb-5 shadow-sm">
                            <Question size={13} weight="fill" className="text-medidesh-teal-500" />
                            প্রশ্নোত্তর
                        </div>
                        <h2 className="text-3xl lg:text-4xl font-black text-slate-900 mb-4">
                            সাধারণ কিছু প্রশ্ন
                        </h2>
                        <p className="text-slate-500 text-lg">
                            তথ্য না পেলে আমাদের টিমের সাথে{" "}
                            <a href="mailto:support@medidesh.com" className="text-medidesh-teal-600 font-semibold hover:underline">
                                যোগাযোগ করুন
                            </a>
                        </p>
                    </div>

                    {/* Accordion */}
                    <div className="space-y-3">
                        {faqs.map((item, i) => (
                            <div
                                key={i}
                                className={`bg-white rounded border transition-all duration-200 overflow-hidden ${
                                    openIndex === i
                                        ? "border-medidesh-teal-200 shadow-sm"
                                        : "border-slate-100 hover:border-slate-200"
                                }`}
                            >
                                <button
                                    className="w-full flex justify-between items-center p-5 text-left"
                                    onClick={() => setOpenIndex(openIndex === i ? null : i)}
                                >
                                    <span className="font-bold text-slate-900 text-base pr-4 leading-snug">
                                        {item.q}
                                    </span>
                                    <span
                                        className={`shrink-0 w-7 h-7 rounded flex items-center justify-center transition-all duration-200 ${
                                            openIndex === i
                                                ? "bg-medidesh-teal-500 text-white rotate-180"
                                                : "bg-slate-100 text-slate-500"
                                        }`}
                                    >
                                        <CaretDown size={14} weight="bold" />
                                    </span>
                                </button>
                                {openIndex === i && (
                                    <div className="px-5 pb-5 text-slate-600 text-sm leading-relaxed">
                                        {item.a}
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
