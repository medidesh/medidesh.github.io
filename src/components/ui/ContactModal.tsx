"use client";

import { X, ChatCircleDots, Phone, EnvelopeSimple, MapPin } from "@phosphor-icons/react";

interface ContactModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export default function ContactModal({ isOpen, onClose }: ContactModalProps) {
    if (!isOpen) return null;

    return (
        <div
            className="fixed inset-0 z-[60] overflow-y-auto"
            aria-labelledby="modal-title"
            role="dialog"
            aria-modal="true"
        >
            {/* Backdrop */}
            <div
                className="fixed inset-0 bg-slate-900/50 backdrop-blur-sm transition-opacity"
                onClick={onClose}
            ></div>

            <div className="flex min-h-screen items-center justify-center p-4 text-center sm:p-0">
                <div className="relative transform overflow-hidden rounded-3xl bg-white text-left shadow-2xl transition-all sm:my-8 sm:w-full sm:max-w-md border border-slate-100">
                    <button
                        onClick={onClose}
                        className="absolute top-4 right-4 p-2 bg-slate-100 rounded-full text-slate-500 hover:text-red-500 transition-colors z-20 cursor-pointer outline-none"
                    >
                        <X weight="bold" />
                    </button>

                    <div className="bg-pharma-green-600 p-8 text-white text-center relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2"></div>
                        <ChatCircleDots weight="fill" className="text-5xl mb-4 relative z-10 mx-auto" />
                        <h3 className="text-2xl font-bold relative z-10">যোগাযোগ করুন</h3>
                        <p className="text-pharma-green-100 text-sm mt-2 relative z-10">
                            আমরা আপনার কথা শোনার অপেক্ষায় আছি
                        </p>
                    </div>

                    <div className="p-8 space-y-6 bg-white">
                        <a
                            href="tel:+8801712345678"
                            className="flex items-center gap-4 group p-4 rounded-xl hover:bg-slate-50 transition-colors border border-transparent hover:border-slate-100"
                        >
                            <div className="w-12 h-12 bg-green-100 text-green-600 rounded-full flex items-center justify-center text-xl group-hover:scale-110 transition-transform">
                                <Phone weight="fill" className="shadow-sm" />
                            </div>
                            <div>
                                <div className="text-xs text-slate-400 font-bold uppercase tracking-wider">
                                    হটলাইন
                                </div>
                                <div className="text-lg font-bold text-slate-800">
                                    +880 1712 345678
                                </div>
                            </div>
                        </a>
                        <a
                            href="mailto:support@medidesh.com"
                            className="flex items-center gap-4 group p-4 rounded-xl hover:bg-slate-50 transition-colors border border-transparent hover:border-slate-100"
                        >
                            <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-xl group-hover:scale-110 transition-transform">
                                <EnvelopeSimple weight="fill" className="shadow-sm" />
                            </div>
                            <div>
                                <div className="text-xs text-slate-400 font-bold uppercase tracking-wider">
                                    ইমেইল
                                </div>
                                <div className="text-lg font-bold text-slate-800">
                                    support@medidesh.com
                                </div>
                            </div>
                        </a>
                        <div className="flex items-center gap-4 group p-4 rounded-xl hover:bg-slate-50 transition-colors border border-transparent hover:border-slate-100">
                            <div className="w-12 h-12 bg-purple-100 text-purple-600 rounded-full flex items-center justify-center text-xl group-hover:scale-110 transition-transform">
                                <MapPin weight="fill" className="shadow-sm" />
                            </div>
                            <div>
                                <div className="text-xs text-slate-400 font-bold uppercase tracking-wider">
                                    অফিস
                                </div>
                                <div className="text-lg font-bold text-slate-800">
                                    জয়দেবপুর, গাজীপুর , ঢাকা
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="bg-slate-50 p-4 text-center border-t border-slate-100">
                        <p className="text-xs text-slate-400">
                            সকাল ১০টা - রাত ৮টা (শনি-বৃহস্পতি)
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
