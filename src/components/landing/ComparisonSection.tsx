import { Check, X } from "@phosphor-icons/react/dist/ssr";

export default function ComparisonSection() {
    const comparisonData = [
        { feature: "বিনামূল্যে শুরু", manual: false, medidesh: true, others: false },
        { feature: "অনলাইন ব্যাকআপ", manual: false, medidesh: true, others: true },
        { feature: "মোবাইল অ্যাপ", manual: false, medidesh: true, others: false },
        { feature: "হিসাব নিকাশ", manual: true, medidesh: true, others: true },
        { feature: "২৪/৭ সাপোর্ট", manual: false, medidesh: true, others: false },
    ];

    return (
        <section id="comparison" className="py-24 bg-white border-t border-slate-100">
            <div className="container mx-auto px-6 lg:px-12">
                <h2 className="text-3xl lg:text-4xl font-bold text-center mb-16 text-slate-900">
                    কেন মেডিদেশ সেরা?
                </h2>

                <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse min-w-[600px]">
                        <thead>
                            <tr>
                                <th className="p-4 bg-slate-50 text-slate-600 font-bold border-b border-slate-200 w-1/4">বৈশিষ্ট্য</th>
                                <th className="p-4 bg-slate-50 text-slate-600 font-bold border-b border-slate-200 text-center w-1/4">ম্যানুয়াল খাতা</th>
                                <th className="p-4 bg-pharma-green-600 text-white font-bold border-b border-pharma-green-600 rounded-t-xl text-center w-1/4">মেডিদেশ</th>
                                <th className="p-4 bg-slate-50 text-slate-600 font-bold border-b border-slate-200 text-center w-1/4">অন্যান্য সফটওয়্যার</th>
                            </tr>
                        </thead>
                        <tbody>
                            {comparisonData.map((item, index) => (
                                <tr key={index} className="border-b border-slate-100 hover:bg-slate-50 transition-colors">
                                    <td className="p-4 font-medium text-slate-800">{item.feature}</td>
                                    <td className="p-4 text-center">
                                        {item.manual ? <Check weight="bold" className="text-green-500 mx-auto" /> : <X weight="bold" className="text-red-400 mx-auto" />}
                                    </td>
                                    <td className="p-4 text-center bg-pharma-green-50 border-x border-pharma-green-100">
                                        <Check weight="fill" className="text-pharma-green-600 text-xl mx-auto" />
                                    </td>
                                    <td className="p-4 text-center">
                                        {item.others ? <Check weight="bold" className="text-green-500 mx-auto" /> : <X weight="bold" className="text-red-400 mx-auto" />}
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
