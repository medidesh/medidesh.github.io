"use client";

import LandingHeader from "@/components/landing/LandingHeader";
import LandingFooter from "@/components/landing/LandingFooter";
import { Headset, ChatTeardropText, Phone, Envelope } from "@phosphor-icons/react/dist/ssr";

export default function SupportPage() {
    return (
        <main className="min-h-screen bg-white dark:bg-slate-900 transition-colors">
            <LandingHeader />

            <section className="pt-32 pb-20 px-4">
                <div className="container mx-auto max-w-4xl">
                    <div className="text-center mb-16">
                        <div className="w-16 h-16 bg-pharma-green-100 dark:bg-pharma-green-900/30 rounded-2xl flex items-center justify-center text-pharma-green-600 mx-auto mb-6">
                            <Headset size={32} weight="fill" />
                        </div>
                        <h1 className="text-4xl lg:text-5xl font-black text-slate-900 dark:text-white mb-6">কাস্টমার সাপোর্ট</h1>
                        <p className="text-lg text-slate-500 dark:text-slate-400">মেডিদেশ ব্যবহার করতে কোনো সহযোগিতা প্রয়োজন? আমরা আছি আপনার পাশে।</p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8 mb-16">
                        <div className="p-8 rounded-3xl bg-slate-50 dark:bg-slate-800 border border-slate-100 dark:border-slate-700">
                            <div className="flex items-center gap-4 mb-6">
                                <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-xl flex items-center justify-center text-blue-600">
                                    <Phone size={24} weight="fill" />
                                </div>
                                <h3 className="text-xl font-bold text-slate-900 dark:text-white">সরাসরি কল</h3>
                            </div>
                            <p className="text-slate-500 dark:text-slate-400 mb-6">সকাল ১০টা থেকে রাত ৮টা পর্যন্ত যেকোনো কারিগরি প্রয়োজনে কল করুন।</p>
                            <a href="tel:+8801234567890" className="text-2xl font-black text-pharma-green-600">+৮৮০ ১২৩৪ ৫৬৭ ৮৯০</a>
                        </div>

                        <div className="p-8 rounded-3xl bg-slate-50 dark:bg-slate-800 border border-slate-100 dark:border-slate-700">
                            <div className="flex items-center gap-4 mb-6">
                                <div className="w-12 h-12 bg-emerald-100 dark:bg-emerald-900/30 rounded-xl flex items-center justify-center text-emerald-600">
                                    <ChatTeardropText size={24} weight="fill" />
                                </div>
                                <h3 className="text-xl font-bold text-slate-900 dark:text-white">হোয়াটসঅ্যাপ সাপোর্ট</h3>
                            </div>
                            <p className="text-slate-500 dark:text-slate-400 mb-6">আপনার সমস্যাটির স্ক্রিনশট বা ভিডিও পাঠিয়ে দিন আমাদের হোয়াটসঅ্যাপে।</p>
                            <a href="https://wa.me/8801234567890" target="_blank" className="px-6 py-3 bg-emerald-600 text-white rounded-xl font-bold inline-block">চ্যাট শুরু করুন</a>
                        </div>
                    </div>

                    <div className="p-10 rounded-[2.5rem] bg-slate-900 dark:bg-slate-800 text-white relative overflow-hidden">
                        <div className="relative z-10">
                            <h2 className="text-3xl font-bold mb-6">টিকেট ওপেন করুন</h2>
                            <p className="text-slate-300 mb-8 max-w-lg">আপনার যদি কোনো বড় অভিযোগ বা ফিডব্যাক থাকে, তবে আমাদের ইনবক্স করুন। আমাদের টিম দ্রুত আপনার সাথে যোগাযোগ করবে।</p>
                            <a href="mailto:support@medidesh.com" className="flex items-center gap-2 text-xl font-bold hover:text-pharma-green-400 transition-colors">
                                <Envelope size={24} />
                                support@medidesh.com
                            </a>
                        </div>
                        <div className="absolute top-0 right-0 w-64 h-64 bg-pharma-green-500/10 blur-[80px]"></div>
                    </div>
                </div>
            </section>

            <LandingFooter />
        </main>
    );
}
