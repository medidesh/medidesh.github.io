"use client";

import { useParams, useSearchParams, useRouter } from "next/navigation";
import { Receipt, Printer, DownloadSimple, ArrowLeft, House } from "@phosphor-icons/react/dist/ssr";
import Link from "next/link";

export default function InvoiceClientContent() {
    const params = useParams();
    const searchParams = useSearchParams();
    const router = useRouter();
    const slug = params.slug;
    const id = searchParams.get("id");

    const currentDate = new Date().toLocaleDateString();

    const handlePrint = () => {
        window.print();
    };

    if (!id) {
        return (
            <div className="text-center py-20">
                <h2 className="text-2xl font-bold text-slate-800 mb-4">ইনভয়েস আইডি পাওয়া যায়নি</h2>
                <Link href={`/private/pos/${slug}`} className="text-pharma-green-600 font-bold underline">মূল পাতায় ফিরে যান</Link>
            </div>
        );
    }

    return (
        <div className="max-w-xl mx-auto">
            <div className="flex justify-between items-center mb-8 no-print">
                <button
                    onClick={() => router.back()}
                    className="flex items-center gap-2 text-slate-600 hover:text-slate-900 font-bold transition-colors"
                >
                    <ArrowLeft size={20} weight="bold" />
                    পিছনে
                </button>
                <Link
                    href={`/private/pos/${slug}`}
                    className="flex items-center gap-2 text-pharma-green-600 hover:text-pharma-green-700 font-bold transition-colors"
                >
                    <House size={20} weight="fill" />
                    মূল পাতা
                </Link>
            </div>

            <div className="bg-white shadow-2xl rounded-sm overflow-hidden flex flex-col relative printable-area">
                <div className="p-8 flex justify-center">
                    <div id="receipt-content" className="bg-white w-full p-6 text-slate-800 font-mono text-sm leading-relaxed relative border border-slate-100">
                        <div className="absolute top-0 left-0 w-full h-2 bg-[radial-gradient(circle,transparent_50%,#fff_50%)] bg-[length:16px_16px] -mt-2"></div>

                        <div className="text-center mb-8 border-b-2 border-dashed border-slate-200 pb-6">
                            <h3 className="font-bold text-3xl mb-1 uppercase tracking-tight text-black font-heading text-slate-900">মেডিদেশ ফার্মা</h3>
                            <p className="text-xs text-slate-500">ঢাকা, বাংলাদেশ</p>
                            <p className="text-xs text-slate-500 mb-4">+৮৮০ ১XXX-XXXXXX</p>
                            <div className="flex justify-between text-[10px] font-black text-slate-600 mt-4 text-slate-900">
                                <span>ইনভয়েস: {id}</span>
                                <span>তারিখ: {currentDate}</span>
                            </div>
                        </div>

                        <table className="w-full mb-8">
                            <thead className="text-[10px] font-black uppercase text-slate-400 border-b border-slate-200">
                                <tr>
                                    <th className="py-2 text-left">আইটেম</th>
                                    <th className="py-2 text-center">পরিমাণ</th>
                                    <th className="py-2 text-right">মূল্য</th>
                                </tr>
                            </thead>
                            <tbody className="text-slate-600 font-bold">
                                <tr>
                                    <td className="py-2 text-slate-900">নাপা এক্সট্রা ৫০০ মি.গ্রা.</td>
                                    <td className="text-center">১০</td>
                                    <td className="text-right">২৫.০০</td>
                                </tr>
                                <tr>
                                    <td className="py-2 text-slate-900">সারজেল ২০ মি.গ্রা.</td>
                                    <td className="text-center">৫</td>
                                    <td className="text-right">৩৫.০০</td>
                                </tr>
                            </tbody>
                        </table>

                        <div className="border-t-2 border-dashed border-slate-300 pt-4 space-y-2 mb-8 text-slate-900">
                            <div className="flex justify-between text-xs text-slate-500 font-bold">
                                <span>সাবটোটাল</span>
                                <span>৬০.০০</span>
                            </div>
                            <div className="flex justify-between font-black text-xl text-black pt-2 border-t border-slate-100 mt-2">
                                <span>সর্বমোট পরিশোধ</span>
                                <span>৬০.০০</span>
                            </div>
                        </div>

                        <div className="text-center text-[10px] text-slate-400 uppercase font-black tracking-[0.2em]">
                            <p className="mb-2">*** ধন্যবাদ ***</p>
                            <p>পাওয়ারড বাই মেডিদেশ</p>
                        </div>
                        <div className="absolute bottom-0 left-0 w-full h-2 bg-[radial-gradient(circle,transparent_50%,#fff_50%)] bg-[length:16px_16px] -mb-2 rotate-180"></div>
                    </div>
                </div>

                <div className="p-8 border-t border-slate-100 bg-slate-50 grid grid-cols-2 gap-4 no-print">
                    <button className="py-4 rounded-2xl border border-slate-200 font-bold text-slate-600 hover:bg-white transition-colors flex items-center justify-center gap-2 text-sm uppercase tracking-widest shadow-sm">
                        <DownloadSimple size={20} weight="bold" />
                        সেভ করুন
                    </button>
                    <button
                        onClick={handlePrint}
                        className="py-4 bg-slate-900 text-white rounded-2xl font-bold flex items-center justify-center gap-2 hover:bg-black transition-colors shadow-xl text-sm uppercase tracking-widest"
                    >
                        <Printer size={20} weight="fill" />
                        প্রিন্ট করুন
                    </button>
                </div>
            </div>

            <style jsx global>{`
                @media print {
                    .no-print { display: none !important; }
                    body { background: white !important; }
                    .printable-area { box-shadow: none !important; border: none !important; margin: 0 !important; width: 100% !important; }
                }
            `}</style>
        </div>
    );
}
