import Link from "next/link";
import {
    FacebookLogo,
    LinkedinLogo,
    InstagramLogo,
    YoutubeLogo,
    GooglePlayLogoIcon,
    Heart,
} from "@phosphor-icons/react/dist/ssr";

export default function LandingFooter() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-slate-900 text-slate-400 pt-16 pb-8">
            <div className="container mx-auto px-6 lg:px-12">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
                    {/* Brand column */}
                    <div className="lg:col-span-1">
                        <Link href="/" className="flex items-center gap-2.5 group mb-5">
                            <img
                                src="/assets/logo/Logo.svg"
                                alt="Medidesh Logo"
                                className="w-8 h-8 group-hover:scale-105 transition-transform brightness-0 invert"
                            />
                            <span className="text-lg font-bold text-white">মেডিদেশ</span>
                        </Link>
                        <p className="text-sm leading-relaxed mb-6">
                            ফার্মেসি মালিকদের জন্য সবচেয়ে নির্ভরযোগ্য ও আধুনিক ডিজিটাল ম্যানেজমেন্ট সফটওয়্যার।
                        </p>
                        <div className="flex items-center gap-3">
                            {[
                                { href: "https://facebook.com/medidesh", Icon: FacebookLogo, label: "Facebook" },
                                { href: "#", Icon: LinkedinLogo, label: "LinkedIn" },
                                { href: "#", Icon: InstagramLogo, label: "Instagram" },
                                { href: "#", Icon: YoutubeLogo, label: "YouTube" },
                            ].map(({ href, Icon, label }) => (
                                <a
                                    key={label}
                                    href={href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label={label}
                                    className="w-8 h-8 rounded bg-slate-800 flex items-center justify-center text-slate-400 hover:text-white hover:bg-slate-700 transition-all duration-200"
                                >
                                    <Icon size={15} weight="fill" />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Product links */}
                    <div>
                        <h4 className="text-white font-semibold text-sm mb-5">প্রোডাক্ট</h4>
                        <ul className="space-y-3 text-sm">
                            {[
                                { label: "ফিচারসমূহ", href: "#features" },
                                { label: "মূল্য পরিকল্পনা", href: "#pricing" },
                                { label: "অ্যাপ ডাউনলোড", href: "#download" },
                                { label: "আপডেট লগ", href: "/changelog" },
                            ].map(({ label, href }) => (
                                <li key={label}>
                                    <a href={href} className="hover:text-white transition-colors duration-200">
                                        {label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Company links */}
                    <div>
                        <h4 className="text-white font-semibold text-sm mb-5">কোম্পানি</h4>
                        <ul className="space-y-3 text-sm">
                            {[
                                { label: "আমাদের সম্পর্কে", href: "/about" },
                                { label: "যোগাযোগ", href: "#cta" },
                                { label: "গোপনীয়তা নীতি", href: "/privacy" },
                                { label: "শর্তাবলী", href: "/terms" },
                            ].map(({ label, href }) => (
                                <li key={label}>
                                    <Link href={href} className="hover:text-white transition-colors duration-200">
                                        {label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Download */}
                    <div>
                        <h4 className="text-white font-semibold text-sm mb-5">ডাউনলোড করুন</h4>
                        <p className="text-sm mb-5 leading-relaxed">
                            অ্যান্ড্রয়েড মোবাইল ও কম্পিউটারে ব্যবহার করুন — অফলাইনেও পূর্ণ কার্যকর।
                        </p>
                        <a
                            href="#download"
                            className="flex items-center gap-3 bg-slate-800 hover:bg-slate-700 text-white px-4 py-3 rounded transition-all duration-200 group"
                        >
                            <GooglePlayLogoIcon weight="fill" size={22} className="text-medidesh-teal-400 group-hover:scale-110 transition-transform" />
                            <div>
                                <div className="text-[10px] text-slate-400 uppercase tracking-wider">Get it on</div>
                                <div className="text-sm font-bold">Google Play</div>
                            </div>
                        </a>
                    </div>
                </div>

                {/* Bottom bar */}
                <div className="pt-8 border-t border-slate-800 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-slate-500">
                    <span>© {currentYear} মেডিদেশ। সর্বস্বত্ব সংরক্ষিত।</span>
                    <div className="flex items-center gap-1.5">
                        <span>Made with</span>
                        <Heart weight="fill" size={12} className="text-red-500" />
                        <span>in Bangladesh</span>
                    </div>
                </div>
            </div>
        </footer>
    );
}
