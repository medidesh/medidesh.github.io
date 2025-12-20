"use client";

import { useState, useEffect } from "react";
import { DeviceMobile, Receipt, Printer, X, DownloadSimple, SpinnerGap, MagnifyingGlass, CloudArrowDown, AndroidLogo, AppleLogo, PlusCircle, Prescription } from "@phosphor-icons/react/dist/ssr";

interface AppIntegrationProps {
    slug?: string;
}

export default function AppIntegration({ slug }: AppIntegrationProps) {
    const [invoiceId, setInvoiceId] = useState("");
    const [verificationStatus, setVerificationStatus] = useState<"idle" | "success" | "error">("idle");
    const [isVerifying, setIsVerifying] = useState(false);
    const [showReceipt, setShowReceipt] = useState(false);

    // Hydration Fix: Only render date on client
    const [currentDate, setCurrentDate] = useState("");
    useEffect(() => {
        setCurrentDate(new Date().toLocaleDateString());
    }, []);

    // Fallback slug for demo
    const pharmacySlug = slug || "wellbeing";
    const appUrl = `http://medidesh.com/${pharmacySlug}`;

    const handleVerify = () => {
        if (invoiceId.length > 3) {
            setIsVerifying(true);
            setVerificationStatus("idle");

            // Simulate API delay
            setTimeout(() => {
                setIsVerifying(false);
                setVerificationStatus("success");
                setShowReceipt(true);
            }, 1000);
        } else {
            setVerificationStatus("error");
        }
    };

    const handlePrint = () => {
        const printContent = document.getElementById("receipt-content");
        if (printContent) {
            const originalContents = document.body.innerHTML;
            document.body.innerHTML = printContent.innerHTML;
            window.print();
            document.body.innerHTML = originalContents;
            window.location.reload();
        }
    };

    return (
        <section id="app-integration" className="py-24 bg-white relative overflow-hidden text-slate-900 border-t border-slate-100">
            {/* Background Motifs aligned with Hero */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-30">
                <div className="absolute inset-0 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] [background-size:32px_32px]"></div>

                <div className="absolute top-[30%] right-[3%] text-pharma-green-100 animate-float opacity-40">
                    <PlusCircle size={100} weight="thin" />
                </div>
                <div className="absolute bottom-[20%] left-[8%] text-blue-100 animate-float opacity-40" style={{ animationDelay: '1.8s' }}>
                    <Prescription size={90} weight="thin" />
                </div>
            </div>

            <div className="container mx-auto px-4 lg:px-8 relative z-10">
                <div className="text-center max-w-2xl mx-auto mb-16">
                    <span className="text-pharma-green-600 font-bold uppercase tracking-[0.2em] text-xs">Innovation</span>
                    <h2 className="text-3xl lg:text-4xl font-black mt-3">ডিজিটাল সার্ভিসেস</h2>
                    <p className="text-slate-500 mt-6 text-lg">
                        আমাদের মোবাইল অ্যাপ ডাউনলোড করুন অথবা আপনার অর্ডার ট্র্যাক করুন ২ মিনিটে।
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-8 lg:gap-12 max-w-6xl mx-auto">

                    {/* Left: App Download Card */}
                    <div className="flex flex-col h-full bg-white/80 backdrop-blur-sm border border-slate-200 shadow-xl rounded-[2.5rem] p-10 lg:p-12 hover:border-pharma-green-200 transition-all group">
                        <div className="flex items-center gap-4 mb-8">
                            <div className="w-14 h-14 bg-pharma-green-50 rounded-2xl flex items-center justify-center text-pharma-green-600 group-hover:scale-110 group-hover:rotate-6 transition-transform">
                                <DeviceMobile size={32} weight="fill" />
                            </div>
                            <div>
                                <h3 className="text-2xl font-bold">মোবাইল অ্যাপ</h3>
                                <p className="text-xs text-slate-500 font-black uppercase tracking-widest mt-1">Download Medidesh</p>
                            </div>
                        </div>

                        <div className="flex-1 flex flex-col lg:flex-row items-center gap-10">
                            {/* QR Code Container */}
                            <div className="bg-slate-50 p-6 rounded-[2rem] border border-slate-100 shadow-inner group-hover:bg-white transition-colors">
                                <img
                                    src={`https://quickchart.io/qr?text=${encodeURIComponent(appUrl)}&size=200`}
                                    alt="App QR Code"
                                    className="w-[140px] h-[140px] mix-blend-multiply"
                                />
                            </div>

                            <div className="flex-1 space-y-6">
                                <p className="text-slate-500 text-sm leading-relaxed">
                                    ঔষধের স্টক চেক করুন, সরাসরি অর্ডার করুন এবং স্পেশাল ডিসকাউন্ট উপভোগ করুন।
                                </p>

                                <div className="space-y-3">
                                    <button className="w-full bg-slate-900 hover:bg-slate-800 text-white rounded-2xl px-6 py-4 flex items-center gap-4 transition-all shadow-xl shadow-slate-200 group/btn">
                                        <CloudArrowDown size={24} weight="fill" className="text-white/80" />
                                        <div className="text-left">
                                            <div className="text-[10px] uppercase font-black text-slate-400 leading-none mb-1">Available on</div>
                                            <div className="font-bold text-lg leading-none tracking-tight">Download App</div>
                                        </div>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right: Smart Search Card */}
                    <div className="flex flex-col h-full bg-white/80 backdrop-blur-sm border border-slate-200 shadow-xl rounded-[2.5rem] p-10 lg:p-12 hover:border-blue-200 transition-all group">
                        <div className="flex items-center gap-4 mb-8">
                            <div className="w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center text-blue-600 group-hover:scale-110 group-hover:-rotate-6 transition-transform">
                                <MagnifyingGlass size={32} weight="bold" />
                            </div>
                            <div>
                                <h3 className="text-2xl font-bold">স্মার্ট ট্র্যাকিং</h3>
                                <p className="text-xs text-slate-500 font-black uppercase tracking-widest mt-1">Order & Invoice ID</p>
                            </div>
                        </div>

                        <div className="flex-1 flex flex-col justify-center space-y-8">
                            <p className="text-slate-500 text-sm leading-relaxed">
                                আপনার ইনভয়েস আইডি অথবা মোবাইল নম্বর দিয়ে সহজেই অর্ডারের বর্তমান অবস্থা এবং রিসিট ডাউনলোড করুন।
                            </p>

                            <div className="space-y-4">
                                <div className="relative">
                                    <input
                                        type="text"
                                        placeholder="Invoice ID / Phone Number"
                                        value={invoiceId}
                                        onChange={(e) => setInvoiceId(e.target.value)}
                                        disabled={isVerifying}
                                        className="w-full px-6 py-4 rounded-2xl border border-slate-200 bg-slate-50 focus:bg-white focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 outline-none transition-all text-lg tracking-wide placeholder:text-slate-400"
                                    />
                                </div>

                                <button
                                    onClick={handleVerify}
                                    disabled={isVerifying || !invoiceId}
                                    className="w-full py-4 bg-blue-600 hover:bg-blue-700 disabled:bg-slate-300 text-white rounded-2xl font-bold transition-all flex items-center justify-center gap-3 shadow-xl shadow-blue-100 active:scale-[0.98] text-lg"
                                >
                                    {isVerifying ? (
                                        <>
                                            <SpinnerGap size={24} className="animate-spin" />
                                            Searching...
                                        </>
                                    ) : (
                                        "Search Record"
                                    )}
                                </button>
                            </div>

                            <div className="flex items-center gap-2 text-xs text-slate-400 font-black uppercase tracking-[0.1em]">
                                <div className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></div>
                                ২৪/৭ অনলাইন ভেরিফিকেশন সুবিধা
                            </div>
                        </div>
                    </div>
                </div>

                {/* Receipt Modal (Unchanged functional logic) */}
                {showReceipt && (
                    <div className="fixed inset-0 bg-slate-900/40 backdrop-blur-md z-[200] flex items-center justify-center p-4 animate-fade-in">
                        <div className="bg-white w-full max-w-md shadow-2xl rounded-sm overflow-hidden flex flex-col max-h-[90vh] relative animate-slide-up">
                            <div className="p-4 bg-slate-50 border-b border-slate-200 flex justify-between items-center text-slate-900">
                                <span className="font-black text-xs uppercase tracking-widest flex items-center gap-2">
                                    <Receipt size={20} weight="fill" className="text-slate-400" />
                                    Digital Receipt
                                </span>
                                <button
                                    onClick={() => setShowReceipt(false)}
                                    className="w-8 h-8 rounded-full bg-slate-200 flex items-center justify-center hover:bg-slate-300 transition-colors"
                                >
                                    <X size={16} weight="bold" className="text-slate-600" />
                                </button>
                            </div>
                            <div className="bg-slate-100 p-8 overflow-y-auto custom-scrollbar flex-1 flex justify-center">
                                <div id="receipt-content" className="bg-white w-full shadow-sm p-6 text-slate-800 font-mono text-sm leading-relaxed relative">
                                    <div className="absolute top-0 left-0 w-full h-2 bg-[radial-gradient(circle,transparent_50%,#fff_50%)] bg-[length:16px_16px] -mt-2"></div>
                                    <div className="text-center mb-8 border-b-2 border-dashed border-slate-200 pb-6">
                                        <h3 className="font-bold text-2xl mb-1 uppercase tracking-tight text-black font-heading">Medidesh Pharma</h3>
                                        <p className="text-xs text-slate-500">Dhaka, Bangladesh</p>
                                        <p className="text-xs text-slate-500 mb-4">+880 1XXX-XXXXXX</p>
                                        <div className="flex justify-between text-xs font-black text-slate-600 mt-4 text-slate-900">
                                            <span>INV: {invoiceId}</span>
                                            <span>{currentDate}</span>
                                        </div>
                                    </div>
                                    <table className="w-full mb-8">
                                        <thead className="text-[10px] font-black uppercase text-slate-400 border-b border-slate-200">
                                            <tr>
                                                <th className="py-2 text-left">Item</th>
                                                <th className="py-2 text-center">Qty</th>
                                                <th className="py-2 text-right">Total</th>
                                            </tr>
                                        </thead>
                                        <tbody className="text-slate-600 font-bold">
                                            <tr>
                                                <td className="py-2 text-slate-900">Napa Extra 500mg</td>
                                                <td className="text-center">10</td>
                                                <td className="text-right">25.00</td>
                                            </tr>
                                            <tr>
                                                <td className="py-2 text-slate-900">Sergel 20mg</td>
                                                <td className="text-center">5</td>
                                                <td className="text-right">35.00</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                    <div className="border-t-2 border-dashed border-slate-300 pt-4 space-y-2 mb-8 text-slate-900">
                                        <div className="flex justify-between text-xs text-slate-500 font-bold">
                                            <span>Subtotal</span>
                                            <span>60.00</span>
                                        </div>
                                        <div className="flex justify-between font-black text-lg text-black pt-2 border-t border-slate-100 mt-2">
                                            <span>Total Paid</span>
                                            <span>60.00</span>
                                        </div>
                                    </div>
                                    <div className="text-center text-[10px] text-slate-400 uppercase font-black tracking-[0.2em]">
                                        <p className="mb-2">*** Thank You ***</p>
                                        <p>Powered by Medidesh</p>
                                    </div>
                                    <div className="absolute bottom-0 left-0 w-full h-2 bg-[radial-gradient(circle,transparent_50%,#fff_50%)] bg-[length:16px_16px] -mb-2 rotate-180"></div>
                                </div>
                            </div>
                            <div className="p-5 border-t border-slate-200 bg-white grid grid-cols-2 gap-4">
                                <button className="py-3 rounded-xl border border-slate-200 font-bold text-slate-600 hover:bg-slate-50 transition-colors flex items-center justify-center gap-2 text-sm uppercase tracking-widest">
                                    <DownloadSimple size={18} weight="bold" />
                                    Save
                                </button>
                                <button
                                    onClick={handlePrint}
                                    className="py-3 bg-slate-900 text-white rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-black transition-colors shadow-lg text-sm uppercase tracking-widest"
                                >
                                    <Printer size={18} weight="fill" />
                                    Print
                                </button>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </section>
    );
}
