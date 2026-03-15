import Link from "next/link";
import {
    FacebookLogo,
    LinkedinLogo,
    InstagramLogo,
    YoutubeLogo,
    GooglePlayLogoIcon,
    Monitor,
    Heart,
} from "@phosphor-icons/react/dist/ssr";

export default function LandingFooter() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-slate-900 text-slate-400 pt-20 pb-10">
            <div className="container mx-auto px-6 lg:px-12">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
                    <div className="lg:col-span-1">
                        <Link href="/" className="flex items-center gap-2.5 group mb-6">
                            <img
                                src="/assets/logo/Logo.svg"
                                alt="Medidesh Logo"
                                className="w-8 h-8 group-hover:scale-105 transition-transform brightness-0 invert"
                            />
                            <span className="text-xl font-bold text-white">মেডিদেশ</span>
                        </Link>
                        <p className="text-sm leading-relaxed mb-8">
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
                                    className="w-9 h-9 rounded bg-slate-800 flex items-center justify-center text-slate-400 hover:text-white hover:bg-slate-700 transition-all duration-200"
                                >
                                    <Icon size={18} weight="fill" />
                                </a>
                            ))}
                        </div>
                    </div>

                    <div>
                        <h4 className="text-white font-bold text-sm mb-6 uppercase tracking-wider">প্রোডাক্ট</h4>
                        <ul className="space-y-4 text-sm">
                            {[
                                { label: "ফিচারসমূহ", href: "#features" },
                                { label: "মূল্য পরিকল্পনা", href: "#pricing" },
                                { label: "অ্যাপ ডাউনলোড", href: "#download" },
                                { label: "আপডেট লগ", href: "/changelog" },
                            ].map(({ label, href }) => (
                                <li key={label}>
                                    <a href={href} className="hover:text-white transition-colors duration-200 flex items-center gap-2">
                                        <span className="w-1 h-1 bg-slate-700 rounded-full" />
                                        {label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-white font-bold text-sm mb-6 uppercase tracking-wider">কোম্পানি</h4>
                        <ul className="space-y-4 text-sm">
                            {[
                                { label: "আমাদের সম্পর্কে", href: "/about" },
                                { label: "যোগাযোগ", href: "#cta" },
                                { label: "গোপনীয়তা নীতি", href: "/privacy" },
                                { label: "শর্তাবলী", href: "/terms" },
                            ].map(({ label, href }) => (
                                <li key={label}>
                                    <Link href={href} className="hover:text-white transition-colors duration-200 flex items-center gap-2">
                                        <span className="w-1 h-1 bg-slate-700 rounded-full" />
                                        {label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-white font-bold text-sm mb-6 uppercase tracking-wider">ডাউনলোড করুন</h4>
                        <p className="text-sm mb-6 leading-relaxed">
                            অ্যান্ড্রয়েড ও কম্পিউটারে ব্যবহার করুন — অফলাইনেও পূর্ণ কার্যকর।
                        </p>
                        <div className="flex flex-col gap-3">
                            <a
                                href="https://wa.me/+8801608844017?text=আমি%20মেডিদেশ%20Android%20অ্যাপ%20ডাউনলোড%20করতে%20চাই"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-3 bg-slate-800 hover:bg-slate-700 text-white px-4 py-3 rounded-lg transition-all duration-200 group border border-slate-700"
                            >
                                <GooglePlayLogoIcon weight="fill" size={20} className="text-medidesh-teal-400 group-hover:scale-110 transition-transform" />
                                <span className="text-xs font-bold">Google Play</span>
                            </a>
                            <a
                                href="https://wa.me/+8801608844017?text=আমি%20মেডিদেশ%20Windows%20PC%20ভার্সন%20পেতে%20চাই"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-3 bg-white hover:bg-slate-50 text-slate-900 px-4 py-3 rounded-lg transition-all duration-200 group border border-slate-200"
                            >
                                <Monitor weight="duotone" size={20} className="text-medidesh-teal-500 group-hover:scale-110 transition-transform" />
                                <span className="text-xs font-bold">Windows App</span>
                            </a>
                        </div>
                    </div>
                </div>

                <div className="pt-8 border-t border-slate-800 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-slate-500 font-medium">
                    <span>© {currentYear} মেডিদেশ। সর্বস্বত্ব সংরক্ষিত।</span>
                    <div className="flex items-center gap-1.5 bg-slate-800/50 px-3 py-1.5 rounded-full border border-slate-800">
                        <span>Made with</span>
                        <Heart weight="fill" size={12} className="text-rose-500" />
                        <span>in Bangladesh</span>
                    </div>
                </div>
            </div>
        </footer>
    );
}
