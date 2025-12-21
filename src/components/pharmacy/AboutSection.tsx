import { Certificate, UserCheck, ThermometerCold, GraduationCap, Briefcase } from "@phosphor-icons/react/dist/ssr";
import { PharmacyData } from "@/types/pharmacy";

interface AboutSectionProps {
    pharmacy?: PharmacyData;
}

export default function AboutSection({ pharmacy }: AboutSectionProps) {
    const owner = pharmacy?.owner;

    return (
        <section id="about" className="py-16 bg-slate-50 relative overflow-hidden">
            {/* Background Decorative Blob */}
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-pharma-green-50 rounded-full blur-[120px] -mr-64 -mt-64 opacity-50"></div>

            <div className="container mx-auto px-4 lg:px-8 relative z-10">
                <div className="grid lg:grid-cols-12 gap-16 items-center">

                    {/* Image / Owner Profile Side */}
                    <div className="lg:col-span-5 relative">
                        <div className="relative group">
                            {/* Decorative frame */}
                            <div className="absolute -inset-4 bg-gradient-to-br from-pharma-green-500/20 to-blue-500/20 rounded-[3rem] blur-2xl opacity-50 group-hover:opacity-100 transition duration-700"></div>

                            <div className="relative rounded-[2rem] overflow-hidden shadow-2xl border-4 border-white">
                                <img
                                    src={owner?.image || "https://images.unsplash.com/photo-1631549916768-4119b2e5f926?q=80&w=2079&auto=format&fit=crop"}
                                    alt={owner?.name}
                                    className="w-full h-[450px] object-cover transition-transform duration-700 group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                                <div className="absolute bottom-6 left-6 right-6 text-white">
                                    <h3 className="text-2xl font-black mb-0.5">{owner?.name || 'মালিকের নাম'}</h3>
                                    <p className="text-pharma-green-400 font-bold uppercase tracking-widest text-[10px]">{owner?.role || 'মালিক ও ফার্মাসিস্ট'}</p>
                                </div>
                            </div>

                            {/* Floating Badge */}
                            <div className="absolute top-6 -right-4 bg-white p-4 rounded-2xl shadow-xl border border-slate-100 flex items-center gap-3 animate-float">
                                <div className="w-10 h-10 bg-emerald-50 rounded-xl flex items-center justify-center text-emerald-600">
                                    <Certificate size={24} weight="fill" />
                                </div>
                                <div>
                                    <div className="text-[9px] text-slate-400 font-black uppercase tracking-widest leading-none mb-1">Drug License</div>
                                    <div className="text-base font-black text-slate-900">{pharmacy?.licenseNo || 'C-12345/24'}</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Text Content Side */}
                    <div className="lg:col-span-7">
                        <div className="mb-10">
                            <span className="text-pharma-green-600 font-bold uppercase tracking-[0.2em] text-[10px] mb-3 block">Our Story</span>
                            <h2 className="text-3xl lg:text-5xl font-black text-slate-900 mb-6 leading-tight">
                                জনসেবায় আমাদের <br />
                                <span className="text-pharma-green-600 underline decoration-pharma-green-100 underline-offset-[12px]">অবিচল পথচলা</span>
                            </h2>

                            <p className="text-lg text-slate-600 leading-relaxed mb-6 font-medium italic border-l-4 border-pharma-green-500 pl-6">
                                "{owner?.bio || 'আমরা আপনার স্বাস্থ্য সুরক্ষায় সর্বদা পাশে আছি। সঠিক পরামর্শ ও মানসম্মত ঔষধ আমাদের অঙ্গীকার।'}"
                            </p>
                        </div>

                        {/* Stats/Points Grid */}
                        <div className="grid sm:grid-cols-2 gap-6 mb-12">
                            {owner?.education && (
                                <div className="p-6 bg-white rounded-3xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
                                    <div className="w-10 h-10 bg-blue-50 rounded-xl flex items-center justify-center text-blue-600 mb-4">
                                        <GraduationCap size={24} weight="fill" />
                                    </div>
                                    <h4 className="font-black text-slate-900 mb-1">শিক্ষাগত যোগ্যতা</h4>
                                    <p className="text-sm text-slate-500 font-medium">{owner.education}</p>
                                </div>
                            )}
                            {owner?.experience && (
                                <div className="p-6 bg-white rounded-3xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
                                    <div className="w-10 h-10 bg-orange-50 rounded-xl flex items-center justify-center text-orange-600 mb-4">
                                        <Briefcase size={24} weight="fill" />
                                    </div>
                                    <h4 className="font-black text-slate-900 mb-1">অভিজ্ঞতা</h4>
                                    <p className="text-sm text-slate-500 font-medium">{owner.experience} পেশাদার সেবা</p>
                                </div>
                            )}
                        </div>

                        <div className="space-y-4">
                            <div className="flex items-center gap-4 p-4 bg-pharma-green-600 rounded-2xl text-white shadow-xl shadow-pharma-green-900/10">
                                <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center text-white shrink-0">
                                    <UserCheck size={28} weight="fill" />
                                </div>
                                <div>
                                    <h3 className="font-black text-lg mb-0.5">সার্টিফাইড ফার্মাসিস্ট</h3>
                                    <p className="text-pharma-green-50 text-xs font-medium opacity-80">
                                        সবসময় আমাদের ফার্মেসিতে একজন গ্রেজুয়েট ফার্মাসিস্ট উপস্থিত থাকেন।
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-center gap-4 p-4 bg-white rounded-2xl border border-slate-100 shadow-sm">
                                <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center text-blue-600 shrink-0">
                                    <ThermometerCold size={28} weight="fill" />
                                </div>
                                <div>
                                    <h3 className="font-black text-lg text-slate-900 mb-0.5">তাপমাত্রা নিয়ন্ত্রণ</h3>
                                    <p className="text-slate-500 text-xs font-medium">
                                        ইনসুলিন ও ভ্যাকসিনের জন্য আমরা ২৪ ঘণ্টা ফ্রিজিং ব্যবস্থা নিশ্চিত করি।
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
