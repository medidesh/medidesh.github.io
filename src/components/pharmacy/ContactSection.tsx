import { PhoneCall, WhatsappLogo, MapPin, EnvelopeSimple } from "@phosphor-icons/react/dist/ssr";
import { PharmacyData } from "@/types/pharmacy";

interface ContactSectionProps {
    pharmacy: PharmacyData;
}

export default function ContactSection({ pharmacy }: ContactSectionProps) {
    return (
        <section id="contact" className="py-20 bg-white">
            <div className="container mx-auto px-4 lg:px-8">
                <div className="text-center max-w-2xl mx-auto mb-12">
                    <span className="text-pharma-green-600 font-bold uppercase tracking-wider text-sm">যোগাযোগ</span>
                    <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mt-2">
                        সরাসরি কথা বলুন
                    </h2>
                    <p className="text-slate-500 mt-4">
                        যেকোনো প্রয়োজনে আমাদের কল করুন অথবা হোয়াটসঅ্যাপে মেসেজ দিন।
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
                    {/* Phone Card */}
                    <a
                        href={`tel:${pharmacy.phone}`}
                        className="flex flex-col items-center p-8 bg-white border border-slate-100 rounded-2xl shadow-sm hover:shadow-lg hover:border-pharma-green-200 transition-all group text-center"
                    >
                        <div className="w-16 h-16 bg-pharma-green-50 rounded-full flex items-center justify-center text-pharma-green-600 mb-4 group-hover:scale-110 transition-transform">
                            <PhoneCall size={32} weight="fill" />
                        </div>
                        <h3 className="text-xl font-bold text-slate-800 mb-1">কল করুন</h3>
                        <p className="text-slate-500 text-sm mb-4">জরুরি প্রয়োজনে সরাসরি কল করুন</p>
                        <span className="text-lg font-bold text-pharma-green-600 group-hover:underline">
                            {pharmacy.phone}
                        </span>
                    </a>

                    {/* WhatsApp Card */}
                    {pharmacy.social?.whatsapp && (
                        <a
                            href={pharmacy.social.whatsapp}
                            target="_blank"
                            className="flex flex-col items-center p-8 bg-white border border-slate-100 rounded-2xl shadow-sm hover:shadow-lg hover:border-green-200 transition-all group text-center"
                        >
                            <div className="w-16 h-16 bg-green-50 rounded-full flex items-center justify-center text-green-600 mb-4 group-hover:scale-110 transition-transform">
                                <WhatsappLogo size={32} weight="fill" />
                            </div>
                            <h3 className="text-xl font-bold text-slate-800 mb-1">হোয়াটসঅ্যাপ</h3>
                            <p className="text-slate-500 text-sm mb-4">প্রেসক্রিপশন বা অর্ডার পাঠাতে</p>
                            <span className="px-4 py-2 bg-green-100 text-green-700 rounded-full font-bold text-sm">
                                চ্যাট করুন
                            </span>
                        </a>
                    )}

                    {/* Location Card */}
                    <div className="flex flex-col items-center p-8 bg-white border border-slate-100 rounded-2xl shadow-sm text-center">
                        <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center text-blue-600 mb-4">
                            <MapPin size={32} weight="fill" />
                        </div>
                        <h3 className="text-xl font-bold text-slate-800 mb-1">ঠিকানা</h3>
                        <p className="text-slate-600 font-medium">
                            {pharmacy.address}
                        </p>
                        {pharmacy.landmark && (
                            <p className="text-slate-400 text-sm mt-2">
                                ({pharmacy.landmark})
                            </p>
                        )}
                    </div>
                </div>

                {/* Map Integration (Optional - showing simpler link for now if URL provided, else hidden or basic placeholder) */}
                {pharmacy.mapUrl && (
                    <div className="mt-12 rounded-2xl overflow-hidden shadow-lg border-4 border-white h-80 bg-slate-100 relative">
                        <iframe
                            src={pharmacy.mapUrl}
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            allowFullScreen
                            loading="lazy"
                            title="Pharmacy Location"
                        ></iframe>
                    </div>
                )}
            </div>
        </section>
    );
}
