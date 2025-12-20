import { Certificate, UserCheck, ThermometerCold } from "@phosphor-icons/react/dist/ssr";
import { PharmacyData } from "@/types/pharmacy";

interface AboutSectionProps {
    pharmacy?: PharmacyData; // Make optional to prevent crashes if not passed immediately, though it should be.
}

export default function AboutSection({ pharmacy }: AboutSectionProps) {
    const owner = pharmacy?.owner;

    return (
        <section id="about" className="py-20 lg:py-28 bg-slate-50">
            <div className="container mx-auto px-4 lg:px-8">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    {/* Image / Owner Profile Side */}
                    <div className="relative order-2 md:order-1">
                        <div className="absolute -top-4 -left-4 w-24 h-24 bg-pharma-green-200 rounded-full blur-xl opacity-50"></div>
                        <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-pharma-blue-200 rounded-full blur-xl opacity-50"></div>

                        {owner ? (
                            <div className="relative group">
                                <img
                                    src={owner.image}
                                    alt={owner.name}
                                    className="relative rounded-2xl shadow-xl w-full h-[450px] object-cover object-top border-4 border-white"
                                />
                                <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/80 to-transparent p-6 rounded-b-2xl">
                                    <h3 className="text-white text-xl font-bold">{owner.name}</h3>
                                    <p className="text-slate-200 text-sm">{owner.role}</p>
                                </div>
                            </div>
                        ) : (
                            <img
                                src="https://images.unsplash.com/photo-1631549916768-4119b2e5f926?q=80&w=2079&auto=format&fit=crop"
                                alt="Pharmacy Interior"
                                className="relative rounded-2xl shadow-xl w-full h-[400px] object-cover border-4 border-white"
                            />
                        )}

                        {!owner && (
                            <div className="absolute bottom-6 right-6 bg-white p-4 rounded-xl shadow-lg flex items-center gap-3">
                                <div className="w-12 h-12 bg-pharma-green-100 rounded-full flex items-center justify-center text-pharma-green-600">
                                    <Certificate size={32} weight="fill" />
                                </div>
                                <div>
                                    <div className="text-xs text-slate-500 font-bold uppercase tracking-wider">
                                        গভঃ লাইসেন্সড
                                    </div>
                                    <div className="font-bold text-slate-800">C-12345/24</div>
                                </div>
                            </div>
                        )}
                    </div>

                    {/* Text Content Side */}
                    <div className="order-1 md:order-2">
                        <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-6">
                            আমাদের সম্পর্কে কিছু কথা
                        </h2>

                        {owner ? (
                            <div className="mb-8">
                                <p className="text-lg text-slate-600 italic border-l-4 border-pharma-green-500 pl-4 mb-4">
                                    "{owner.bio}"
                                </p>
                                <p className="text-slate-600">
                                    আমরা আপনার স্বাস্থ্য সুরক্ষায় সর্বদা পাশে আছি। আমাদের দক্ষ ফার্মাসিস্টরা আপনাকে সঠিক পরামর্শ দিতে প্রস্তুত।
                                </p>
                            </div>
                        ) : (
                            <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                                ২০১০ সাল থেকে {pharmacy?.bnName || 'আমাদের ফার্মেসি'} এই এলাকার মানুষের স্বাস্থ্যসেবায়
                                নিয়োজিত। আমাদের লক্ষ্য শুধুমাত্র ওষুধ বিক্রি করা নয়, বরং সঠিক
                                পরামর্শ এবং আন্তরিক সেবার মাধ্যমে আপনাদের সুস্থতা নিশ্চিত করা।
                            </p>
                        )}

                        <div className="space-y-4">
                            <div className="flex items-start gap-4 p-4 bg-white rounded-xl shadow-sm border border-slate-100 hover:border-pharma-green-200 transition-colors">
                                <div className="w-10 h-10 bg-pharma-green-50 rounded-lg flex items-center justify-center text-pharma-green-600 shrink-0">
                                    <UserCheck size={24} weight="fill" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-slate-800 mb-1">
                                        সার্টিফাইড 'এ' গ্রেড ফার্মাসিস্ট
                                    </h3>
                                    <p className="text-sm text-slate-500">
                                        সবসময় একজন গ্র্যাজুয়েট ফার্মাসিস্ট উপস্থিত থাকেন।
                                    </p>
                                </div>
                            </div>
                            <div className="flex items-start gap-4 p-4 bg-white rounded-xl shadow-sm border border-slate-100 hover:border-pharma-green-200 transition-colors">
                                <div className="w-10 h-10 bg-pharma-blue-50 rounded-lg flex items-center justify-center text-pharma-blue-600 shrink-0">
                                    <ThermometerCold size={24} weight="fill" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-slate-800 mb-1">
                                        সঠিক তাপমাত্রা নিয়ন্ত্রণ
                                    </h3>
                                    <p className="text-sm text-slate-500">
                                        ইনসুলিন ও ভ্যাকসিনের জন্য ২৪ ঘণ্টা ফ্রিজিং ব্যবস্থা।
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
