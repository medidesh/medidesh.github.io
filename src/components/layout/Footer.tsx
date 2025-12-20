import Link from "next/link";
import { PharmacyData } from "@/types/pharmacy";
import { PhoneCall, MapPin } from "@phosphor-icons/react/dist/ssr";

interface FooterProps {
    pharmacy: PharmacyData;
}

export default function Footer({ pharmacy }: FooterProps) {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-slate-900 border-t border-slate-800 pt-12 pb-8">
            <div className="container mx-auto px-4 lg:px-8">
                <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-8 border-b border-slate-800 pb-8">
                    {/* Identity */}
                    <div className="text-center md:text-left">
                        <h3 className="text-2xl font-bold text-white mb-2">{pharmacy.bnName}</h3>
                        <div className="flex flex-col md:flex-row gap-4 text-slate-400 text-sm">
                            <span className="flex items-center gap-2 justify-center md:justify-start">
                                <MapPin weight="fill" />
                                {pharmacy.address}
                            </span>
                            <a href={`tel:${pharmacy.phone}`} className="flex items-center gap-2 justify-center md:justify-start hover:text-white transition-colors">
                                <PhoneCall weight="fill" />
                                {pharmacy.phone}
                            </a>
                        </div>
                    </div>

                    {/* Social / Action */}
                    <div className="flex gap-4">
                        {pharmacy.social?.facebook && (
                            <a href={pharmacy.social.facebook} target="_blank" className="text-slate-400 hover:text-white transition-colors font-medium">
                                Facebook
                            </a>
                        )}
                        {pharmacy.social?.whatsapp && (
                            <a href={pharmacy.social.whatsapp} target="_blank" className="text-slate-400 hover:text-white transition-colors font-medium">
                                WhatsApp
                            </a>
                        )}
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-500">
                    <p>
                        © {currentYear} {pharmacy.name}. All rights reserved.
                    </p>
                    <div className="flex items-center gap-2 opacity-75 hover:opacity-100 transition-opacity">
                        <span>Technology Partner</span>
                        <Link href="/" className="flex items-center gap-1.5 text-slate-300 font-bold">
                            <img src="/assets/logo/Logo.svg" alt="Medidesh" className="w-4 h-4" />
                            Medidesh
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
