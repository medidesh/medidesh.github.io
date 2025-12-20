import { CreditCard } from "@phosphor-icons/react/dist/ssr";

export default function PaymentPartners() {
    return (
        <section className="py-12 bg-white border-t border-slate-50">
            <div className="container mx-auto px-4 lg:px-8">
                <div className="flex flex-col md:flex-row items-center justify-between gap-8 p-8 rounded-2xl bg-slate-50 border border-slate-100">
                    <div className="text-center md:text-left">
                        <h3 className="text-lg font-bold text-slate-900 mb-1">পেমেন্ট মেথড</h3>
                        <p className="text-sm text-slate-500">
                            বিকাশ, নগদ, রকেট অথবা কার্ডের মাধ্যমে পেমেন্ট করুন
                        </p>
                    </div>

                    <div className="flex flex-wrap justify-center items-center gap-4 md:gap-6">
                        {/* Bkash */}
                        <div className="h-10 px-4 bg-pink-600 text-white rounded md:rounded-lg flex items-center justify-center font-bold italic tracking-wide text-lg shadow-sm hover:scale-105 transition-transform cursor-default">
                            bKash
                        </div>

                        {/* Nagad */}
                        <div className="h-10 px-4 bg-orange-600 text-white rounded md:rounded-lg flex items-center justify-center font-bold tracking-wide text-lg shadow-sm hover:scale-105 transition-transform cursor-default">
                            Nagad
                        </div>

                        {/* Rocket */}
                        <div className="h-10 px-4 bg-purple-700 text-white rounded md:rounded-lg flex items-center justify-center font-bold tracking-tight text-lg shadow-sm hover:scale-105 transition-transform cursor-default">
                            Rocket
                        </div>

                        <div className="h-8 w-[1px] bg-slate-300 mx-2 hidden md:block"></div>

                        {/* Visa/Mastercard Generic */}
                        <div className="flex items-center gap-2 text-slate-600 bg-white px-3 py-2 rounded-lg border border-slate-200 font-bold shadow-sm">
                            <CreditCard size={24} weight="fill" className="text-blue-600" />
                            <span>Digital Payment</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
