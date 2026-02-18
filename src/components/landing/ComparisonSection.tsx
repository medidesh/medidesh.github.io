import { Check, X } from "@phosphor-icons/react/dist/ssr";

export default function ComparisonSection() {
    const comparisonData = [
        { feature: "স্মার্ট ইনভেন্টরি ম্যানেজমেন্ট", manual: false, medidesh: true, others: true },
        { feature: "মোবাইল অ্যাপ (Android & iOS)", manual: false, medidesh: true, others: false },
        { feature: "অনলাইন ও অফলাইন ব্যবহার", manual: true, medidesh: true, others: false },
        { feature: "অটোমেটিক ডাটা ব্যাকআপ", manual: false, medidesh: true, others: true },
        { feature: "২৪/৭ কাস্টমার সাপোর্ট", manual: false, medidesh: true, others: false },
        { feature: "ফ্রি আপডেট ও মেইনটেনেন্স", manual: false, medidesh: true, others: false },
        { feature: "সহজ এবং আধুনিক ডিজাইন", manual: false, medidesh: true, others: false },
        { feature: "আনলিমিটেড ইউজার এক্সেস", manual: false, medidesh: true, others: false },
    ];

    return (
        <section id="comparison" className="py-24 bg-white border-t border-slate-100">
            <div className="container mx-auto px-6 lg:px-12">
                <h2 className="text-3xl lg:text-4xl font-bold text-center mb-16 text-slate-900">
                    কেন মেডিদেশ সেরা?
                </h2>

                <div className="overflow-x-auto pb-4">
                    <table className="w-full text-left border-collapse min-w-[600px] rounded-2xl overflow-hidden shadow-sm">
                        <thead>
                            <tr>
                                <th className="p-5 bg-slate-50 text-slate-600 font-bold border-b border-slate-200 w-1/4 uppercase text-xs tracking-wider">বৈশিষ্ট্য</th>
                                <th className="p-5 bg-slate-50 text-slate-500 font-bold border-b border-slate-200 text-center w-1/4 text-sm">ম্যানুয়াল খাতা</th>
                                <th className="p-5 bg-pharma-green-600 text-white font-bold border-b-4 border-pharma-green-700 text-center w-1/4 text-lg shadow-lg relative z-10">
                                    মেডিদেশ
                                    <div className="text-[10px] font-normal opacity-90 mt-1">সেরা চয়েস</div>
                                </th>
                                <th className="p-5 bg-slate-50 text-slate-500 font-bold border-b border-slate-200 text-center w-1/4 text-sm">অন্যান্য সফটওয়্যার</th>
                            </tr>
                        </thead>
                        <tbody>
                            {comparisonData.map((item, index) => (
                                <tr key={index} className="border-b border-slate-100 hover:bg-slate-50/50 transition-colors">
                                    <td className="p-4 font-medium text-slate-700 border-r border-slate-50">{item.feature}</td>
                                    <td className="p-4 text-center border-r border-slate-50">
                                        {item.manual ? <Check weight="bold" className="text-green-500 mx-auto bg-green-100 p-1 rounded-full w-6 h-6" /> : <X weight="bold" className="text-slate-300 mx-auto w-5 h-5" />}
                                    </td>
                                    <td className="p-4 text-center bg-pharma-green-50/30 border-x-2 border-pharma-green-100 relative">
                                        <div className="absolute inset-0 bg-pharma-green-50/50 opacity-0 hover:opacity-100 transition-opacity"></div>
                                        <Check weight="fill" className="text-pharma-green-600 text-2xl mx-auto drop-shadow-sm relative z-10" />
                                    </td>
                                    <td className="p-4 text-center">
                                        {item.others ? <Check weight="bold" className="text-green-500 mx-auto bg-green-100 p-1 rounded-full w-6 h-6" /> : <X weight="bold" className="text-slate-300 mx-auto w-5 h-5" />}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </section>
    );
}
