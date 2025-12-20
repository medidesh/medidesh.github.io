import { Storefront, CheckCircle, MagnifyingGlass, NavigationArrow } from "@phosphor-icons/react/dist/ssr";

export default function MapFeature() {
    return (
        <section id="nearby" className="py-24 bg-white relative overflow-hidden">
            <div className="container mx-auto px-6 lg:px-12">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    <div className="order-1">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-600 text-xs font-bold mb-6 border border-blue-100">
                            <Storefront weight="fill" />
                            <span>নতুন কাস্টমার পান</span>
                        </div>
                        <h2 className="text-3xl lg:text-5xl font-bold text-slate-900 mb-6 leading-tight">
                            গ্রাহকরা আপনাকে খুঁজে পাবে <span className="text-blue-600">সহজেই</span>
                        </h2>
                        <p className="text-lg text-slate-500 mb-8 leading-relaxed">
                            ঔষধ খুঁজছেন? মেডিদেশ অ্যাপে সার্চ দিলেই কাস্টমার দেখতে পাবে **আপনার
                            দোকানে সেই ঔষধটি আছে** এবং ম্যাপ দেখে চলে আসবে।
                        </p>
                        <ul className="space-y-4 mb-8">
                            <li className="flex items-start gap-3">
                                <CheckCircle weight="fill" className="text-blue-600 text-xl mt-1" />
                                <span className="text-slate-700 font-medium">
                                    লোকাল কাস্টমারদের কাছে পৌঁছান দ্রুত।
                                </span>
                            </li>
                            <li className="flex items-start gap-3">
                                <CheckCircle weight="fill" className="text-blue-600 text-xl mt-1" />
                                <span className="text-slate-700 font-medium">
                                    লাইভ স্টক আপডেট, তাই কাস্টমার ফিরে যাবে না।
                                </span>
                            </li>
                        </ul>
                    </div>

                    <div className="relative order-2 flex justify-center">
                        <div className="relative w-[300px] h-[600px] bg-slate-900 rounded-[3rem] p-3 shadow-2xl border-4 border-slate-800 ring-1 ring-slate-900/50">
                            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-32 h-7 bg-slate-900 rounded-b-2xl z-30"></div>

                            <div className="w-full h-full bg-slate-50 rounded-[2.5rem] overflow-hidden relative map-grid group">
                                {/* Search Bar */}
                                <div className="absolute top-12 left-4 right-4 bg-white p-3 rounded-xl shadow-lg border border-slate-100 z-20 flex items-center gap-3">
                                    <MagnifyingGlass weight="bold" className="text-slate-400" />
                                    <div className="flex-1 overflow-hidden flex justify-center">
                                        <div className="text-slate-800 font-medium text-sm">
                                            Napa Extra
                                        </div>
                                    </div>
                                    <div className="bg-blue-600 text-white text-[10px] px-2 py-1 rounded-lg font-bold shadow-md shadow-blue-500/30">
                                        খুঁজুন
                                    </div>
                                </div>

                                {/* User Location */}
                                <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 z-10">
                                    <span className="relative flex h-24 w-24 items-center justify-center">
                                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-500 opacity-20"></span>
                                        <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white ring-4 ring-white shadow-xl">
                                            <NavigationArrow weight="fill" className="text-xl" />
                                        </div>
                                    </span>
                                </div>

                                {/* Pharmacy Pin 1 */}
                                <div className="absolute top-32 left-4 bg-white p-2 rounded-xl shadow-xl border border-pharma-green-100 z-10 w-40 animate-[bounce_2s_infinite]">
                                    <div className="flex items-center gap-2">
                                        <div className="w-6 h-6 rounded-lg bg-pharma-green-100 text-pharma-green-600 flex items-center justify-center shrink-0">
                                            <Storefront weight="fill" className="text-xs" />
                                        </div>
                                        <div>
                                            <div className="text-[10px] font-bold text-slate-800 truncate">
                                                বিসমিল্লাহ ফার্মেসি
                                            </div>
                                            <div className="text-[8px] text-green-600 font-bold">
                                                ইন স্টক • ৫০০ মি.
                                            </div>
                                        </div>
                                    </div>
                                    <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-3 h-3 bg-white transform rotate-45 border-r border-b border-pharma-green-100"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
