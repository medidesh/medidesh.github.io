"use client";

import { useEffect, useState } from "react";
import { MapPin } from "@phosphor-icons/react/dist/ssr";

export default function OperatingHours() {
    const [status, setStatus] = useState({ isOpen: false, text: "Wait..." });
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
        const checkStatus = () => {
            const now = new Date();
            const currentHour = now.getHours();
            const currentDay = now.getDay(); // 0 = Sunday, 5 = Friday
            let isOpen = false;

            // Friday: 4 PM - 10 PM (16:00 - 22:00)
            if (currentDay === 5) {
                isOpen = currentHour >= 16 && currentHour < 22;
            }
            // Other Days: 8 AM - 11 PM (08:00 - 23:00)
            else {
                isOpen = currentHour >= 8 && currentHour < 23;
            }

            setStatus({
                isOpen,
                text: isOpen ? "এখন খোলা" : "এখন বন্ধ",
            });
        };

        checkStatus();
        const interval = setInterval(checkStatus, 60000); // Check every minute
        return () => clearInterval(interval);
    }, []);

    return (
        <section className="py-20 bg-white">
            <div className="container mx-auto px-4 lg:px-8">
                <div className="grid lg:grid-cols-2 gap-12">
                    {/* Hours */}
                    <div>
                        <h2 className="text-3xl font-bold text-slate-900 mb-6">
                            খোলা থাকার সময়
                        </h2>
                        {mounted && (
                            <div
                                className={`inline-flex items-center gap-2 px-4 py-2 border rounded-full mb-8 ${status.isOpen
                                        ? "bg-green-100 text-green-700 border-green-200"
                                        : "bg-red-100 text-red-700 border-red-200"
                                    }`}
                            >
                                <div className="w-3 h-3 bg-current rounded-full animate-pulse"></div>
                                <span className="font-bold">{status.text}</span>
                            </div>
                        )}

                        <div className="space-y-4">
                            <div className="flex justify-between items-center p-4 border-b border-slate-100">
                                <span className="font-medium text-slate-600">
                                    শনিবার - বৃহস্পতিবার
                                </span>
                                <span className="font-bold text-slate-900">
                                    সকাল ৮:০০ - রাত ১১:০০
                                </span>
                            </div>
                            <div className="flex justify-between items-center p-4 border-b border-slate-100 bg-slate-50 rounded-lg">
                                <span className="font-medium text-slate-600">শুক্রবার</span>
                                <span className="font-bold text-slate-900">
                                    বিকাল ৪:০০ - রাত ১০:০০
                                </span>
                            </div>
                        </div>

                        <div className="mt-8">
                            <h3 className="font-bold text-slate-900 mb-4">আমাদের ঠিকানা</h3>
                            <div className="flex items-start gap-4">
                                <div className="w-10 h-10 bg-pharma-blue-50 rounded-lg flex items-center justify-center text-pharma-blue-600 shrink-0">
                                    <MapPin size={24} weight="fill" />
                                </div>
                                <div>
                                    <p className="text-slate-600 leading-relaxed">
                                        ওয়েল-বিং ফার্মেসি, <br />
                                        ব্লক-সি, রোড-১২, হাউজ-৪৪, <br />
                                        মিরপুর-১২, ঢাকা-১২১৬
                                    </p>
                                    <p className="text-sm text-slate-500 mt-2">
                                        মেট্রোরেল স্টেশনের পশ্চিম পাশে
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Map */}
                    <div className="h-[400px] bg-slate-100 rounded-2xl overflow-hidden border border-slate-200">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14602.254272231177!2d90.3654215!3d23.7985508!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c0cc45ee3d1d%3A0x63768dd1e66299d6!2sMirpur-12%2C%20Dhaka!5e0!3m2!1sen!2sbd!4v1703086789123!5m2!1sen!2sbd"
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            allowFullScreen={true}
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        ></iframe>
                    </div>
                </div>
            </div>
        </section>
    );
}
