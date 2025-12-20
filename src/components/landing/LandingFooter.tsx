import Link from "next/link";
import {
    FacebookLogo,
    LinkedinLogo,
    InstagramLogo,
    YoutubeLogo,
    CaretRight,
    GooglePlayLogo,
    AppStoreLogo,
    Heart,
} from "@phosphor-icons/react/dist/ssr";

export default function LandingFooter() {
    const currentYear = new Date().getFullYear();
    return (
        <footer className="bg-slate-50 pt-20 pb-10 border-t border-slate-200 font-sans relative overflow-hidden">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-1 bg-gradient-to-r from-transparent via-pharma-green-500 to-transparent opacity-50"></div>

            <div className="container mx-auto px-6 lg:px-12 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">
                    <div className="space-y-6">
                        <Link href="/" className="flex items-center gap-2 group w-fit">
                            <img
                                src="/assets/logo/Logo.svg"
                                alt="Medidesh Logo"
                                className="w-10 h-10 group-hover:scale-105 transition-transform"
                            />
                            <span className="text-2xl font-bold font-heading text-slate-800">
                                মেডিদেশ
                            </span>
                        </Link>
                        <p className="text-slate-500 leading-relaxed text-sm">
                            বাংলাদেশের ফার্মেসি ব্যাবস্থাপনার বিশ্বস্ত সহযোগী। আমরা প্রযুক্তির
                            মাধ্যমে আপনার ব্যবসাকে করি সহজ, আধুনিক এবং লাভজনক।
                        </p>

                        <div className="flex items-center gap-4">
                            <a
                                href="#"
                                className="w-10 h-10 rounded-full bg-white border border-slate-200 flex items-center justify-center text-slate-500 hover:text-blue-600 hover:border-blue-200 hover:bg-blue-50 transition-all duration-300"
                            >
                                <FacebookLogo size={20} weight="fill" />
                            </a>
                            <a
                                href="#"
                                className="w-10 h-10 rounded-full bg-white border border-slate-200 flex items-center justify-center text-slate-500 hover:text-sky-500 hover:border-sky-200 hover:bg-sky-50 transition-all duration-300"
                            >
                                <LinkedinLogo size={20} weight="fill" />
                            </a>
                            <a
                                href="#"
                                className="w-10 h-10 rounded-full bg-white border border-slate-200 flex items-center justify-center text-slate-500 hover:text-pink-600 hover:border-pink-200 hover:bg-pink-50 transition-all duration-300"
                            >
                                <InstagramLogo size={20} weight="fill" />
                            </a>
                            <a
                                href="#"
                                className="w-10 h-10 rounded-full bg-white border border-slate-200 flex items-center justify-center text-slate-500 hover:text-red-600 hover:border-red-200 hover:bg-red-50 transition-all duration-300"
                            >
                                <YoutubeLogo size={20} weight="fill" />
                            </a>
                        </div>
                    </div>

                    <div>
                        <h4 className="text-slate-900 font-bold mb-6 text-lg">প্রোডাক্ট</h4>
                        <ul className="space-y-4 text-sm text-slate-500">
                            <li>
                                <a
                                    href="#features"
                                    className="hover:text-pharma-green-600 transition-colors flex items-center gap-2 group"
                                >
                                    <CaretRight weight="bold" className="opacity-0 group-hover:opacity-100 -ml-4 group-hover:ml-0 transition-all duration-300 text-pharma-green-500" />
                                    স্মার্ট ইনভেন্টরি
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#ai-features"
                                    className="hover:text-pharma-green-600 transition-colors flex items-center gap-2 group"
                                >
                                    <CaretRight weight="bold" className="opacity-0 group-hover:opacity-100 -ml-4 group-hover:ml-0 transition-all duration-300 text-pharma-green-500" />
                                    <span className="text-indigo-500 font-bold">Medidesh AI</span>
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#pricing"
                                    className="hover:text-pharma-green-600 transition-colors flex items-center gap-2 group"
                                >
                                    <CaretRight weight="bold" className="opacity-0 group-hover:opacity-100 -ml-4 group-hover:ml-0 transition-all duration-300 text-pharma-green-500" />
                                    প্রাইসিং প্ল্যান
                                </a>
                            </li>
                            <li>
                                <Link
                                    href="/changelog"
                                    className="hover:text-pharma-green-600 transition-colors flex items-center gap-2 group"
                                >
                                    <CaretRight weight="bold" className="opacity-0 group-hover:opacity-100 -ml-4 group-hover:ml-0 transition-all duration-300 text-pharma-green-500" />
                                    নতুন আপডেট (Log)
                                </Link>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-slate-900 font-bold mb-6 text-lg">কোম্পানি</h4>
                        <ul className="space-y-4 text-sm text-slate-500">
                            <li>
                                <a
                                    href="#"
                                    className="hover:text-pharma-green-600 transition-colors flex items-center gap-2 group"
                                >
                                    <CaretRight weight="bold" className="opacity-0 group-hover:opacity-100 -ml-4 group-hover:ml-0 transition-all duration-300 text-pharma-green-500" />
                                    আমাদের সম্পর্কে
                                </a>
                            </li>
                            <li>
                                <button
                                    //   onClick={() => document.getElementById("contact-modal").showModal()}
                                    className="hover:text-pharma-green-600 transition-colors flex items-center gap-2 group w-full text-left"
                                >
                                    <CaretRight weight="bold" className="opacity-0 group-hover:opacity-100 -ml-4 group-hover:ml-0 transition-all duration-300 text-pharma-green-500" />
                                    যোগাযোগ
                                </button>
                            </li>
                            <li>
                                <Link
                                    href="/privacy"
                                    className="hover:text-pharma-green-600 transition-colors flex items-center gap-2 group"
                                >
                                    <CaretRight weight="bold" className="opacity-0 group-hover:opacity-100 -ml-4 group-hover:ml-0 transition-all duration-300 text-pharma-green-500" />
                                    গোপনীয়তা নীতি
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/terms"
                                    className="hover:text-pharma-green-600 transition-colors flex items-center gap-2 group"
                                >
                                    <CaretRight weight="bold" className="opacity-0 group-hover:opacity-100 -ml-4 group-hover:ml-0 transition-all duration-300 text-pharma-green-500" />
                                    শর্তাবলী
                                </Link>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-slate-900 font-bold mb-6 text-lg">
                            ডাউনলোড করুন
                        </h4>
                        <p className="text-slate-500 text-sm mb-6">
                            আপনার মোবাইলে অ্যাপটি নামিয়ে নিন এবং যেকোনো জায়গা থেকে ব্যাবসা
                            পরিচালনা করুন।
                        </p>

                        <div className="space-y-3">
                            <a
                                href="#"
                                className="flex items-center gap-3 bg-slate-900 text-white p-3 rounded-xl hover:bg-slate-800 transition-colors group"
                            >
                                <GooglePlayLogo weight="fill" className="text-2xl text-pharma-green-400" />
                                <div className="flex flex-col leading-none">
                                    <span className="text-[10px] uppercase font-medium opacity-80">
                                        Get it on
                                    </span>
                                    <span className="font-bold">Google Play</span>
                                </div>
                            </a>
                            <a
                                href="#"
                                className="flex items-center gap-3 bg-slate-200 text-slate-900 p-3 rounded-xl hover:bg-slate-300 transition-colors"
                            >
                                <AppStoreLogo weight="fill" className="text-2xl text-sky-500" />
                                <div className="flex flex-col leading-none">
                                    <span className="text-[10px] uppercase font-medium opacity-80">
                                        Download on the
                                    </span>
                                    <span className="font-bold">App Store</span>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>

                <div className="pt-8 border-t border-slate-200 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-500">
                    <div>© {currentYear} মেডিদেশ। সর্বস্বত্ব সংরক্ষিত।</div>

                    <div className="flex items-center gap-6">
                        <a href="#" className="hover:text-pharma-green-600 transition-colors">
                            সাপোর্ট
                        </a>
                        <span className="w-1 h-1 bg-slate-300 rounded-full"></span>
                        <a href="#" className="hover:text-pharma-green-600 transition-colors">
                            হেল্প সেন্টার
                        </a>
                        <span className="w-1 h-1 bg-slate-300 rounded-full"></span>
                        <div className="flex items-center gap-1.5 text-slate-400">
                            <span>Made with</span>
                            <Heart weight="fill" className="text-red-500 animate-pulse" />
                            <span>in Bangladesh</span>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
