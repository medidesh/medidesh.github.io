"use client";

import { CaretDown } from "@phosphor-icons/react/dist/ssr";

export default function FAQSection() {
    return (
        <section id="faq" className="py-24 bg-white">
            <div className="container mx-auto px-6 lg:px-12">
                <div className="text-center max-w-2xl mx-auto mb-16">
                    <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-6">
                        সচরাচর জিজ্ঞাসিত প্রশ্ন
                    </h2>
                    <p className="text-slate-500">
                        আপনার মনে থাকা কিছু সাধারণ প্রশ্নের উত্তর
                    </p>
                </div>
                <div className="max-w-3xl mx-auto space-y-4">
                    <div className="bg-slate-50 rounded-2xl overflow-hidden border border-slate-100">
                        <details className="group">
                            <summary className="flex justify-between items-center font-bold cursor-pointer list-none p-6 text-slate-900">
                                <span>মেডিদেশ কি সম্পূর্ণ ফ্রি?</span>
                                <span className="transition group-open:rotate-180">
                                    <CaretDown weight="bold" />
                                </span>
                            </summary>
                            <div className="text-slate-600 p-6 pt-0 leading-relaxed">
                                হ্যাঁ! 'তিতাস' প্যাকেজটি সম্পূর্ণ ফ্রি। এতে আপনি স্টক এবং বিক্রয়ের
                                হিসাব রাখতে পারবেন।
                            </div>
                        </details>
                    </div>
                    <div className="bg-slate-50 rounded-2xl overflow-hidden border border-slate-100">
                        <details className="group">
                            <summary className="flex justify-between items-center font-bold cursor-pointer list-none p-6 text-slate-900">
                                <span>সাপোর্ট কি ২৪ ঘন্টা পাওয়া যাবে?</span>
                                <span className="transition group-open:rotate-180">
                                    <CaretDown weight="bold" />
                                </span>
                            </summary>
                            <div className="text-slate-600 p-6 pt-0 leading-relaxed">
                                হ্যাঁ, আমাদের সাপোর্ট টিম সকাল ১০টা থেকে রাত ১০টা পর্যন্ত সরাসরি এবং
                                ২৪ ঘন্টা ইমেইল সাপোর্টে নিয়োজিত আছে।
                            </div>
                        </details>
                    </div>
                    <div className="bg-slate-50 rounded-2xl overflow-hidden border border-slate-100">
                        <details className="group">
                            <summary className="flex justify-between items-center font-bold cursor-pointer list-none p-6 text-slate-900">
                                <span>মোবাইল অ্যাপ আছে কি?</span>
                                <span className="transition group-open:rotate-180">
                                    <CaretDown weight="bold" />
                                </span>
                            </summary>
                            <div className="text-slate-600 p-6 pt-0 leading-relaxed">
                                হ্যাঁ, আমাদের অ্যান্ড্রয়েড অ্যাপ আছে যা আপনি প্লে-স্টোর থেকে নামিয়ে
                                ব্যবহার করতে পারেন।
                            </div>
                        </details>
                    </div>
                    <div className="bg-slate-50 rounded-2xl overflow-hidden border border-slate-100">
                        <details className="group">
                            <summary className="flex justify-between items-center font-bold cursor-pointer list-none p-6 text-slate-900">
                                <span>ডাটা কি নিরাপদ?</span>
                                <span className="transition group-open:rotate-180">
                                    <CaretDown weight="bold" />
                                </span>
                            </summary>
                            <div className="text-slate-600 p-6 pt-0 leading-relaxed">
                                ১০০% নিরাপদ। আমরা গুগল ক্লাউড সার্ভার ব্যবহার করি এবং আপনার ডাটা
                                এনক্রিপ্টেড থাকে।
                            </div>
                        </details>
                    </div>
                </div>
            </div>
        </section>
    );
}
