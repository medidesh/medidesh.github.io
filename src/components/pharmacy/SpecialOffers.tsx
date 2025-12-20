import Link from "next/link";
import { Syringe, Baby, FirstAidKit, ArrowRight } from "@phosphor-icons/react/dist/ssr";

export default function SpecialOffers() {
    const offers = [
        {
            icon: <Syringe size={40} weight="fill" />,
            title: "ইনসুলিন",
            desc: "যেকোনো ব্র্যান্ডের ইনসুলিনে বিশেষ ছাড়।",
            badge: "-১০%",
            badgeColor: "bg-red-500",
            iconColor: "text-red-500",
            iconBg: "bg-red-50",
            linkColor: "text-red-500",
        },
        {
            icon: <Baby size={40} weight="fill" />,
            title: "বেবি ডায়াপার",
            desc: "২ প্যাকেট কিনলে ১টি টিস্যু বক্স ফ্রি।",
            badge: "ফ্রি",
            badgeColor: "bg-pharma-blue-500",
            iconColor: "text-pharma-blue-500",
            iconBg: "bg-pharma-blue-50",
            linkColor: "text-pharma-blue-500",
        },
        {
            icon: <FirstAidKit size={40} weight="fill" />,
            title: "ফার্স্ট এইড বক্স",
            desc: "সম্পূর্ণ বক্সে ৩০০ টাকা পর্যন্ত সাশ্রয়।",
            badge: "কম্বো",
            badgeColor: "bg-purple-500",
            iconColor: "text-purple-500",
            iconBg: "bg-purple-50",
            linkColor: "text-purple-500",
        },
    ];

    return (
        <section className="py-20 bg-pharma-green-50">
            <div className="container mx-auto px-4 lg:px-8">
                <div className="text-center max-w-2xl mx-auto mb-16">
                    <span className="text-red-500 font-bold uppercase tracking-wider text-sm mb-2 block animate-pulse">
                        ধামাকা অফার
                    </span>
                    <h2 className="text-3xl lg:text-4xl font-bold text-slate-900">
                        আজকের বিশেষ ছাড়
                    </h2>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {offers.map((offer, index) => (
                        <div
                            key={index}
                            className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm hover:shadow-lg transition-all relative overflow-hidden group"
                        >
                            <div
                                className={`absolute top-4 right-4 text-white text-xs font-bold px-3 py-1 rounded-full ${offer.badgeColor}`}
                            >
                                {offer.badge}
                            </div>
                            <div className="flex items-center gap-6">
                                <div
                                    className={`w-24 h-24 rounded-xl flex items-center justify-center text-4xl group-hover:scale-110 transition-transform duration-500 ${offer.iconBg} ${offer.iconColor}`}
                                >
                                    {offer.icon}
                                </div>
                                <div>
                                    <h3 className="font-bold text-xl text-slate-900 mb-2">
                                        {offer.title}
                                    </h3>
                                    <p className="text-slate-500 text-sm mb-3">{offer.desc}</p>
                                    <Link
                                        href="#"
                                        className={`${offer.linkColor} font-bold text-sm flex items-center gap-1 hover:gap-2 transition-all`}
                                    >
                                        অর্ডার করুন <ArrowRight weight="bold" />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
