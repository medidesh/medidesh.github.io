import Link from "next/link";
import { DownloadSimple, WindowsLogo, AppleLogo, AndroidLogo, AppStoreLogo, CheckCircle, ArrowRight } from "@phosphor-icons/react/dist/ssr";

export default function DownloadSection() {
    return (
        <section id="download" className="py-24 bg-gradient-to-br from-slate-900 via-[#0B1120] to-slate-900 text-white overflow-hidden relative">
            <div className="absolute top-0 right-0 w-96 h-96 bg-pharma-green-600/10 rounded-full blur-[100px]"></div>
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-600/10 rounded-full blur-[100px]"></div>

            <div className="container mx-auto px-6 lg:px-12 relative z-10 text-center">
                <div className="max-w-3xl mx-auto">
                    <h2 className="text-3xl lg:text-5xl font-extrabold mb-6 leading-tight">
                        মেডিদেশ এখন{" "}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-pharma-green-400 to-emerald-400">
                            হাতের মুঠোয়
                        </span>
                    </h2>
                    <p className="text-slate-400 mb-12 text-lg lg:text-xl font-light">
                        যেকোনো ডিভাইস থেকে আপনার ফার্মেসি পরিচালনা করুন। সম্পূর্ণ ফ্রিতে
                        ডাউনলোড করুন।
                    </p>

                    <div className="bg-white/5 backdrop-blur-xl border border-white/10 p-8 rounded-3xl inline-block w-full max-w-2xl shadow-2xl mb-12">
                        <div className="flex flex-col md:flex-row items-center gap-6">
                            <div className="relative shrink-0">
                                <div className="w-24 h-24 bg-gradient-to-br from-pharma-green-500 to-emerald-600 rounded-2xl flex items-center justify-center shadow-lg shadow-pharma-green-500/30">
                                    <img
                                        src="/assets/logo/Logo.svg"
                                        alt="Medidesh App"
                                        className="w-14 h-14 brightness-0 invert"
                                    />
                                </div>
                                <div className="absolute -bottom-3 -right-3 bg-white text-slate-900 text-xs font-bold px-2 py-1 rounded-lg border-2 border-slate-900 shadow-sm">
                                    ফ্রি
                                </div>
                            </div>

                            <div className="text-center md:text-left flex-1">
                                <h3 className="text-2xl font-bold text-white mb-1">
                                    মেডিদেশ পজ (POS)
                                </h3>
                                <div className="flex items-center justify-center md:justify-start gap-3 mb-4 text-sm">
                                    <span className="text-slate-400">ভার্সন ২.৫.০</span>
                                    <span className="w-1 h-1 bg-slate-600 rounded-full"></span>
                                    <Link
                                        href="#"
                                        className="text-pharma-green-400 hover:text-pharma-green-300 font-medium hover:underline flex items-center gap-1 transition-colors"
                                    >
                                        নতুন ফির্চাস <ArrowRight weight="bold" />
                                    </Link>
                                </div>
                                <div className="flex items-center justify-center md:justify-start gap-2 text-xs text-slate-500">
                                    <CheckCircle weight="fill" className="text-emerald-500" />
                                    <span>আপডেট: ১৮ ডিসেম্বর, ২০২৫</span>
                                </div>
                            </div>

                            <div className="shrink-0">
                                <Link
                                    href="#"
                                    className="inline-flex items-center gap-2 bg-white text-slate-900 hover:bg-slate-100 px-6 py-3 rounded-xl font-bold transition-all hover:scale-105 active:scale-95"
                                >
                                    <DownloadSimple weight="bold" />
                                    <span>ডাউনলোড</span>
                                </Link>
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-wrap justify-center gap-4 text-sm">
                        <Link
                            href="#"
                            className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/5 hover:bg-white/10 border border-white/5 hover:border-white/20 transition-all text-slate-300 hover:text-white"
                        >
                            <WindowsLogo weight="fill" className="text-lg" />
                            <span>Windows</span>
                        </Link>
                        <Link
                            href="#"
                            className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/5 hover:bg-white/10 border border-white/5 hover:border-white/20 transition-all text-slate-300 hover:text-white"
                        >
                            <AppleLogo weight="fill" className="text-lg" />
                            <span>MacOS</span>
                        </Link>
                        <Link
                            href="#"
                            className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/5 hover:bg-white/10 border border-white/5 hover:border-white/20 transition-all text-slate-300 hover:text-white"
                        >
                            <AndroidLogo weight="fill" className="text-lg text-emerald-400" />
                            <span>Android</span>
                        </Link>
                        <Link
                            href="#"
                            className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/5 hover:bg-white/10 border border-white/5 hover:border-white/20 transition-all text-slate-300 hover:text-white"
                        >
                            <AppStoreLogo weight="fill" className="text-lg text-sky-400" />
                            <span>iOS</span>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}
