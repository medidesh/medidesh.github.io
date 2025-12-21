import Link from "next/link";
import { PharmacyData } from "@/types/pharmacy";
import { FacebookLogo, ArrowRight } from "@phosphor-icons/react/dist/ssr";

interface FooterProps {
    pharmacy: PharmacyData;
}

export default function Footer({ pharmacy }: FooterProps) {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-slate-950 pt-20 pb-10 relative overflow-hidden border-t border-slate-900">
            {/* Subtle Animated Shapes */}
            <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-pharma-green-600 rounded-full blur-[150px] opacity-10 translate-x-1/2 -translate-y-1/2 animate-pulse"></div>

            <div className="container mx-auto px-4 lg:px-8 relative z-10">
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16 border-b border-slate-900 pb-16">

                    {/* Brand Identity */}
                    <div className="lg:col-span-2">
                        <Link href="/" className="inline-block mb-6">
                            <h3 className="text-3xl font-black text-white font-heading tracking-tight">{pharmacy.bnName}</h3>
                        </Link>
                        <p className="text-slate-500 max-w-sm text-base leading-relaxed mb-8">
                            আপনার বিশ্বস্ত স্বাস্থ্য সঙ্গী। আমরা ঔষধের সঠিক মূল্য এবং গুণগত মান নিশ্চিত করি।
                        </p>

                        <div className="flex items-center gap-4">
                            <a href={pharmacy.social?.facebook || "https://facebook.com/medidesh"} target="_blank" className="w-10 h-10 rounded-xl bg-slate-900 flex items-center justify-center text-slate-400 hover:text-blue-500 hover:bg-slate-800 transition-all border border-slate-800">
                                <FacebookLogo size={24} weight="fill" />
                            </a>
                        </div>
                    </div>

                    {/* App Download - Shrinked Icons */}
                    <div className="lg:col-span-2">
                        <h4 className="text-slate-400 font-black mb-6 text-xs uppercase tracking-[0.2em]">মেডিদেশ অ্যাপ</h4>
                        <p className="text-slate-500 text-sm mb-6 max-w-sm">
                            আপনার নিকটস্থ সকল ফার্মেসির ঔষধের স্টক ও সঠিক মূল্য জানতে এখনই ডাউনলোড করুন মেডিদেশ অ্যাপ। সহজেই ঔষধ অর্ডার করুন এবং ডক্টরের অ্যাপয়েন্টমেন্ট নিন।
                        </p>
                        <div className="flex flex-col sm:flex-row gap-3">
                            {/* Google Play Button - Compact */}
                            <a href="https://play.google.com/store/apps" target="_blank" className="flex items-center gap-2.5 bg-slate-900/50 border border-slate-800 rounded-xl py-2.5 px-4 hover:bg-slate-800 transition-all group">
                                <div className="group-hover:scale-110 transition-transform">
                                    <svg viewBox="0 0 24 24" className="w-5 h-5 fill-white">
                                        <path d="M5,3l3.057,3.057L5,9.115V3z M16.32,15.111l-3.32-3.32l-3.32,3.32L16.32,15.111z M5,14.885l3.057-3.057L5,8.771V14.885z M13.68,8.889l3.32,3.32l-3.32,3.32L10.36,12.209L13.68,8.889z M2.19,1.19l19.62,10.81c0.41,0.23,0.41,0.59,0,0.81L2.19,23.62 c-0.45,0.25-0.81,0.04-0.81-0.47V1.66C1.38,1.15,1.74,0.94,2.19,1.19z" />
                                    </svg>
                                </div>
                                <div>
                                    <div className="text-[8px] text-slate-500 uppercase font-black leading-none mb-0.5">Google</div>
                                    <div className="text-white font-bold text-sm leading-none tracking-tight">Play Store</div>
                                </div>
                            </a>

                            {/* App Store Button - Compact */}
                            <a href="https://apple.com/app-store" target="_blank" className="flex items-center gap-2.5 bg-slate-900/50 border border-slate-800 rounded-xl py-2.5 px-4 hover:bg-slate-800 transition-all group">
                                <div className="group-hover:scale-110 transition-transform">
                                    <svg viewBox="0 0 24 24" className="w-5 h-5 fill-white">
                                        <path d="M18.71,19.5c-0.83,1.24-1.71,2.45-3.1,2.48c-1.34,0.03-1.77-0.79-3.29-0.79c-1.53,0-1.99,0.77-3.27,0.82 c-1.31,0.05-2.31-1.32-3.14-2.52C4.19,17,2.81,12.79,3.54,9.17c0.36-1.8,1.69-3.12,3.3-3.14c1.23-0.02,2.39,0.83,3.14,0.83 c0.76,0,1.91-0.85,3.15-0.73c0.52,0.02,1.99,0.21,2.94,1.6c-0.08,0.05-1.75,1.02-1.73,3.06c0.03,2.5,2.12,3.34,2.14,3.35 C19.39,15.22,19.06,16,18.71,19.5z M13,3.5c0.6-0.73,1-1.74,0.89-2.75c-0.87,0.03-1.92,0.58-2.55,1.32c-0.56,0.66-1.07,1.69-0.94,2.68 C11.33,4.8,12.39,4.24,13,3.5z" />
                                    </svg>
                                </div>
                                <div>
                                    <div className="text-[8px] text-slate-500 uppercase font-black leading-none mb-0.5">Apple</div>
                                    <div className="text-white font-bold text-sm leading-none tracking-tight">App Store</div>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="flex flex-col md:flex-row justify-between items-center gap-8 text-xs text-slate-600 font-bold uppercase tracking-widest">
                    <div className="flex items-center gap-6">
                        <p>© {currentYear} {pharmacy.bnName}. All Rights Reserved.</p>
                        <Link href="/privacy" className="hover:text-white transition-colors">Privacy</Link>
                        <Link href="/terms" className="hover:text-white transition-colors">Terms</Link>
                    </div>

                    <div className="flex items-center gap-3 bg-slate-900/20 px-4 py-2 rounded-full border border-slate-900">
                        <span className="opacity-50">Powered by</span>
                        <Link href="/" className="text-pharma-green-500 hover:text-pharma-green-400 flex items-center gap-1 transition-colors">
                            Medidesh <ArrowRight size={14} weight="bold" />
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
