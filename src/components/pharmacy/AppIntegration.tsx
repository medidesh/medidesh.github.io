"use client";

import { useState } from "react";
import { QrCode, CheckCircle, DeviceMobile, Receipt } from "@phosphor-icons/react/dist/ssr";

export default function AppIntegration() {
    const [invoiceId, setInvoiceId] = useState("");
    const [verificationStatus, setVerificationStatus] = useState<"idle" | "success" | "error">("idle");

    const handleVerify = () => {
        if (invoiceId.length > 3) {
            setVerificationStatus("success");
        } else {
            setVerificationStatus("error");
        }
    };

    return (
        <section id="app-integration" className="py-16 bg-white">
            <div className="container mx-auto px-4 lg:px-8">
                <div className="grid md:grid-cols-2 gap-12 items-center">

                    {/* Feature 1: App Download / QR */}
                    <div className="bg-slate-50 border border-slate-100 rounded-3xl p-8 lg:p-12 text-center md:text-left relative overflow-hidden group">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-pharma-green-100 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 opacity-50"></div>

                        <div className="relative z-10">
                            <div className="inline-flex items-center gap-2 px-3 py-1 bg-pharma-green-100 text-pharma-green-700 text-xs font-bold rounded-full mb-4">
                                <DeviceMobile size={16} weight="fill" />
                                <span>স্মার্ট সেবা</span>
                            </div>
                            <h2 className="text-2xl lg:text-3xl font-bold text-slate-900 mb-4">
                                ঔষধ খুঁজছেন? <br />
                                <span className="text-pharma-green-600">মেডিদেশ অ্যাপ ব্যবহার করুন</span>
                            </h2>
                            <p className="text-slate-500 mb-8 max-w-sm">
                                আপনার প্রয়োজনীয় ঔষধের স্টক চেক করতে এবং অর্ডার করতে আমাদের অ্যাপ ডাউনলোড করুন।
                            </p>

                            <div className="flex flex-col sm:flex-row items-center gap-6">
                                <div className="bg-white p-2 rounded-xl shadow-md border border-slate-100">
                                    {/* Placeholder QR Code - In prod use real QR */}
                                    <QrCode size={120} className="text-slate-800" />
                                </div>
                                <div className="text-center sm:text-left">
                                    <div className="text-sm font-bold text-slate-900 mb-2">স্ক্যান করে ডাউনলোড করুন</div>
                                    <button className="px-6 py-2 bg-slate-900 text-white rounded-lg text-sm font-bold hover:bg-slate-800 transition-colors">
                                        Download App
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Feature 2: Sale Verification */}
                    <div className="bg-white border border-slate-200 rounded-3xl p-8 lg:p-12 shadow-sm relative">
                        <div className="flex items-center gap-4 mb-6">
                            <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center text-blue-600">
                                <Receipt size={24} weight="fill" />
                            </div>
                            <div>
                                <h2 className="text-2xl font-bold text-slate-900">ক্রয় রশিদ যাচাই</h2>
                                <p className="text-sm text-slate-500">আপনার কেনাকাটা সঠিক কিনা যাচাই করুন</p>
                            </div>
                        </div>

                        <div className="space-y-4">
                            <div>
                                <label className="block text-sm font-bold text-slate-700 mb-2">
                                    ইনভয়েস / অর্ডার আইডি
                                </label>
                                <input
                                    type="text"
                                    placeholder="Enter Invoice ID (e.g. INV-1234)"
                                    value={invoiceId}
                                    onChange={(e) => setInvoiceId(e.target.value)}
                                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all font-mono"
                                />
                            </div>

                            <button
                                onClick={handleVerify}
                                className="w-full py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-bold transition-colors flex items-center justify-center gap-2"
                            >
                                <CheckCircle size={20} weight="bold" />
                                যাচাই করুন
                            </button>

                            {/* Verification Result Mock */}
                            {verificationStatus === "success" && (
                                <div className="mt-4 p-4 bg-green-50 border border-green-200 rounded-xl flex items-start gap-3 animate-fade-in">
                                    <CheckCircle size={24} weight="fill" className="text-green-600 shrink-0 mt-0.5" />
                                    <div>
                                        <div className="font-bold text-green-800">ভেরিফায়েড পারচেজ</div>
                                        <div className="text-sm text-green-700">
                                            অর্ডার #{invoiceId} সঠিক পাওয়া গেছে। আপনি জেনুইন ওষুধ কিনেছেন।
                                        </div>
                                    </div>
                                </div>
                            )}

                            {verificationStatus === "error" && (
                                <div className="mt-4 p-4 bg-red-50 border border-red-200 rounded-xl text-center">
                                    <div className="text-red-600 font-bold text-sm">দুঃখিত, কোনো তথ্য পাওয়া যায়নি।</div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
