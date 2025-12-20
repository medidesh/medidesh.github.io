import Link from "next/link";
import {
    Prescription,
    FirstAidKit,
    Stethoscope,
    DeviceMobileCamera,
    BabyCarriage,
    Moped,
    ArrowRight,
} from "@phosphor-icons/react/dist/ssr";

export default function ServicesGrid() {
    const services = [
        {
            icon: <Prescription size={32} weight="fill" />,
            title: "প্রেসক্রিপশন ওষুধ",
            desc: "ডাক্তারের প্রেসক্রিপশন অনুযায়ী সব ধরণের দেশি-বিদেশি ওষুধ এখানে পাওয়া যায়।",
            colorClass: "pharma-green",
            borderColor: "hover:border-pharma-green-200",
            iconBg: "bg-pharma-green-50 group-hover:bg-pharma-green-600",
            textColor: "text-pharma-green-600",
        },
        {
            icon: <FirstAidKit size={32} weight="fill" />,
            title: "ওটিসি ও ফার্স্ট এইড",
            desc: "ব্যান্ডেজ, স্যাভলন, প্যারাসিটামল সহ জরুরি প্রাথমিক চিকিৎসার সরঞ্জাম।",
            colorClass: "pharma-blue",
            borderColor: "hover:border-pharma-blue-200",
            iconBg: "bg-pharma-blue-50 group-hover:bg-pharma-blue-600",
            textColor: "text-pharma-blue-600",
        },
        {
            icon: <Stethoscope size={32} weight="fill" />,
            title: "বিনামূল্যে স্বাস্থ্য পরামর্শ",
            desc: "আমাদের অভিজ্ঞ ফার্মাসিস্টের কাছে ওষুধ সেবনের নিয়ম ও স্বাস্থ্য পরামর্শ নিন।",
            colorClass: "purple",
            borderColor: "hover:border-purple-200",
            iconBg: "bg-purple-50 group-hover:bg-purple-600",
            textColor: "text-purple-600",
        },
        {
            icon: <DeviceMobileCamera size={32} weight="fill" />,
            title: "মেডিকেল ডিভাইস",
            desc: "প্রেসার মাপার মেশিন, গ্লুকোমিটার, নেবুলাইজার সহ সব ধরণের ডিভাইস।",
            colorClass: "orange",
            borderColor: "hover:border-orange-200",
            iconBg: "bg-orange-50 group-hover:bg-orange-600",
            textColor: "text-orange-600",
        },
        {
            icon: <BabyCarriage size={32} weight="fill" />,
            title: "মা ও শিশু যত্ন",
            desc: "শিশুর খাবার, ডায়াপার, ফিডার এবং মায়েদের জন্য প্রয়োজনীয় পণ্য।",
            colorClass: "teal",
            borderColor: "hover:border-teal-200",
            iconBg: "bg-teal-50 group-hover:bg-teal-600",
            textColor: "text-teal-600",
        },
        {
            icon: <Moped size={32} weight="fill" />,
            title: "দ্রুত হোম ডেলিভারি",
            desc: "ফোন করলেই ৩/৪ ঘণ্টার মধ্যে ওষুধ পৌঁছে যাবে আপনার দরজায়।",
            colorClass: "rose",
            borderColor: "hover:border-rose-200",
            iconBg: "bg-rose-50 group-hover:bg-rose-600",
            textColor: "text-rose-600",
        },
    ];

    return (
        <section id="services" className="py-20 bg-white">
            <div className="container mx-auto px-4 lg:px-8 text-center max-w-2xl mx-auto mb-16">
                <span className="text-pharma-green-600 font-bold uppercase tracking-wider text-sm mb-2 block">
                    আমাদের সেবাসমূহ
                </span>
                <h2 className="text-3xl lg:text-4xl font-bold text-slate-900">
                    আপনার কী প্রয়োজন?
                </h2>
            </div>

            <div className="container mx-auto px-4 lg:px-8">
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <div
                            key={index}
                            className={`group p-8 rounded-2xl bg-white border border-slate-100 shadow-soft hover:shadow-xl transition-all duration-300 hover:-translate-y-1`}
                        >
                            <div
                                className={`w-14 h-14 rounded-xl flex items-center justify-center transition-colors mb-6 ${service.iconBg} ${service.textColor} group-hover:text-white`}
                            >
                                {service.icon}
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 mb-3">
                                {service.title}
                            </h3>
                            <p className="text-slate-500 leading-relaxed mb-4">
                                {service.desc}
                            </p>
                            <Link
                                href="#categories"
                                className={`${service.textColor} font-bold text-sm inline-flex items-center gap-1 hover:gap-2 transition-all`}
                            >
                                আরও জানুন <ArrowRight weight="bold" />
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
