import { CreditCard } from "@phosphor-icons/react/dist/ssr";

export default function PaymentPartners() {
    return (
        <section className="py-10 bg-white border-t border-slate-100">
            <div className="container mx-auto px-4 lg:px-8">
                <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                    <div className="text-center md:text-left">
                        <h3 className="font-bold text-slate-900">পেমেন্ট মেথড</h3>
                        <p className="text-sm text-slate-500">
                            আমরা সব ধরণের ডিজিটাল পেমেন্ট গ্রহণ করি
                        </p>
                    </div>
                    <div className="flex items-center gap-6 opacity-75 grayscale hover:grayscale-0 transition-all">
                        {/* Logos styled with Tailwind for simulation */}
                        <div className="h-8 flex items-center font-bold text-pink-600 italic text-xl">
                            bKash
                        </div>
                        <div className="h-8 flex items-center font-bold text-orange-600 text-xl">
                            Nagad
                        </div>
                        <div className="h-8 flex items-center font-bold text-purple-600 text-xl">
                            Rocket
                        </div>
                        <div className="h-8 w-[1px] bg-slate-300"></div>
                        <div className="flex items-center gap-1 text-slate-600 font-bold">
                            <CreditCard size={32} weight="fill" />
                            <span>VISA</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
