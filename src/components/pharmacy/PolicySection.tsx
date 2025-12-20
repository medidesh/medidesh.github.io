import { ShieldCheck, WarningCircle } from "@phosphor-icons/react/dist/ssr";

interface PolicySectionProps {
    returnPolicy?: string;
}

export default function PolicySection({ returnPolicy }: PolicySectionProps) {
    if (!returnPolicy) return null;

    return (
        <section className="py-12 bg-white border-t border-slate-100">
            <div className="container mx-auto px-4 lg:px-8">
                <div className="grid md:grid-cols-2 gap-8">
                    {/* Return Policy */}
                    <div className="bg-slate-50 rounded-2xl p-8 border border-slate-100">
                        <div className="flex items-center gap-3 mb-4">
                            <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center text-blue-600">
                                <ShieldCheck size={24} weight="fill" />
                            </div>
                            <h3 className="text-xl font-bold text-slate-900">ফেরত ও পরিবর্তন নীতি</h3>
                        </div>
                        <p className="text-slate-600 leading-relaxed border-l-4 border-blue-500 pl-4 bg-white p-4 rounded-r-lg shadow-sm">
                            {returnPolicy}
                        </p>
                    </div>

                    {/* Prescription Warning */}
                    <div className="bg-amber-50 rounded-2xl p-8 border border-amber-100">
                        <div className="flex items-center gap-3 mb-4">
                            <div className="w-10 h-10 bg-amber-100 rounded-full flex items-center justify-center text-amber-600">
                                <WarningCircle size={24} weight="fill" />
                            </div>
                            <h3 className="text-xl font-bold text-slate-900">সতর্কীকরণ বিজ্ঞপ্তি</h3>
                        </div>
                        <p className="text-slate-600 leading-relaxed">
                            অ্যান্টিবায়োটিক, ঘুমের ঔষধ এবং কিছু বিশেষ ঔষধ রেজিস্টার্ড ডাক্তারের প্রেসক্রিপশন ছাড়া বিক্রি করা হয় না। দয়া করে প্রেসক্রিপশন সাথে আনুন।
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
