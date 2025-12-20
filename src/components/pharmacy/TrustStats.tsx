import { SealCheck } from "@phosphor-icons/react/dist/ssr";

export default function TrustStats() {
    return (
        <section className="py-12 bg-white border-b border-slate-100">
            <div className="container mx-auto px-4 lg:px-8">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 divide-x divide-slate-100">
                    <div className="text-center p-4">
                        <div className="text-3xl font-bold text-pharma-green-600 mb-1">
                            ১২+
                        </div>
                        <div className="text-sm text-slate-500 font-medium">
                            বছরের অভিজ্ঞতা
                        </div>
                    </div>
                    <div className="text-center p-4">
                        <div className="text-3xl font-bold text-pharma-green-600 mb-1">
                            ৫০k+
                        </div>
                        <div className="text-sm text-slate-500 font-medium">খুশি গ্রাহক</div>
                    </div>
                    <div className="text-center p-4">
                        <div className="text-3xl font-bold text-pharma-green-600 mb-1">
                            ১০০%
                        </div>
                        <div className="text-sm text-slate-500 font-medium">
                            জেনুইন মেডিসিন
                        </div>
                    </div>
                    <div className="text-center p-4 pl-8">
                        <div className="flex items-center justify-center gap-2 text-pharma-green-600 mb-1">
                            <SealCheck size={32} weight="fill" />
                            <span className="text-lg font-bold">ভেরিফাইড</span>
                        </div>
                        <div className="text-sm text-slate-500 font-medium">
                            মেডিদেশ দ্বারা
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
