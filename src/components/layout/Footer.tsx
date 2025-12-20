import Link from "next/link";
import { PharmacyData } from "@/types/pharmacy";
import { PhoneCall, MapPin, FacebookLogo } from "@phosphor-icons/react/dist/ssr";

interface FooterProps {
    pharmacy: PharmacyData;
}

export default function Footer({ pharmacy }: FooterProps) {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-slate-900 pt-16 pb-8 relative overflow-hidden">
            {/* Animated Shapes */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-pharma-green-600 rounded-full blur-[100px] opacity-10 translate-x-1/2 -translate-y-1/2 animate-pulse"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-600 rounded-full blur-[80px] opacity-10 -translate-x-1/2 translate-y-1/2"></div>

            <div className="container mx-auto px-4 lg:px-8 relative z-10">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 mb-12 border-b border-slate-800/50 pb-10">
                    {/* Identity */}
                    <div>
                        <h3 className="text-3xl font-bold text-white mb-3 font-heading">{pharmacy.bnName}</h3>
                        <p className="text-slate-400 max-w-sm text-sm leading-relaxed">
                            {pharmacy.tagline} | বিশ্বস্ত সেবা, সঠিক মূল্যে।
                        </p>
                    </div>

                    {/* Quick Contacts */}
                    <div className="flex flex-col sm:flex-row gap-6">
                        <div className="flex items-center gap-3 text-slate-300">
                            <div className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-pharma-green-500">
                                <MapPin weight="fill" size={20} />
                            </div>
                            <div className="flex flex-col">
                                <span className="text-xs text-slate-500 font-bold uppercase">ঠিকানা</span>
                                <span className="text-sm font-medium">{pharmacy.address}</span>
                            </div>
                        </div>

                        <div className="flex items-center gap-3 text-slate-300">
                            <div className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-pharma-green-500">
                                <PhoneCall weight="fill" size={20} />
                            </div>
                            <div className="flex flex-col">
                                <span className="text-xs text-slate-500 font-bold uppercase">কল করুন</span>
                                <a href={`tel:${pharmacy.phone}`} className="text-sm font-bold hover:text-white transition-colors">
                                    {pharmacy.phone}
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-500">
                    <div className="flex items-center gap-4">
                        <p>© {currentYear} {pharmacy.name}. Rights Reserved.</p>
                        {pharmacy.social?.facebook && (
                            <a href={pharmacy.social.facebook} target="_blank" className="text-slate-400 hover:text-blue-500 transition-colors">
                                <FacebookLogo size={18} weight="fill" />
                            </a>
                        )}
                    </div>

                    <div className="flex items-center gap-2 opacity-60 hover:opacity-100 transition-opacity">
                        <span>Developed by</span>
                        <Link href="/" className="flex items-center gap-1.5 text-slate-300 font-bold">
                            Medidesh
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
