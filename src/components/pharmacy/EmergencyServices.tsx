import { Syringe, Wind, Drop, Heart, PhoneCall, FirstAid } from "@phosphor-icons/react/dist/ssr";

export default function EmergencyServices() {
    const items = [
        {
            name: "অক্সিজেন সেবা",
            icon: <Wind weight="duotone" />,
            desc: "২৫+ সিলিন্ডার রেডি",
            status: "জরুরি সাপোর্ট"
        },
        {
            name: "ইনসুলিন ও ফ্রিজ আপ",
            icon: <Syringe weight="duotone" />,
            desc: "সব ধরণের ইনসুলিন",
            status: "স্টকে আছে"
        },
        {
            name: "লাইফ সেভিং ড্রাগস",
            icon: <Heart weight="duotone" />,
            desc: "জটিল রোগের ঔষধ",
            status: "২৪/৭ জরুরি"
        },
        {
            name: "নেবুলাইজার সেবা",
            icon: <FirstAid weight="duotone" />,
            desc: "মেশিন ও মেডিসিন",
            status: "সহজ লভ্য"
        },
    ];

    return (
        <section className="py-16 bg-white relative overflow-hidden">
            {/* Red Accent BG */}
            <div className="absolute top-0 right-0 w-1/3 h-full bg-rose-50/50 -skew-x-12 translate-x-1/2"></div>

            <div className="container mx-auto px-4 lg:px-8 relative z-10">
                <div className="flex flex-col lg:flex-row items-center justify-between gap-12 bg-rose-50/30 border border-rose-100 rounded-[3rem] p-8 lg:p-12 shadow-sm">

                    <div className="max-w-md">
                        <div className="inline-flex items-center gap-2 bg-rose-100 text-rose-700 px-4 py-1.5 rounded-full mb-6 font-bold text-xs uppercase tracking-widest">
                            <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-rose-400 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-rose-600"></span>
                            </span>
                            Emergency Response
                        </div>
                        <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-6">
                            জরুরি ঔষধ ও <br />অক্সিজেন সাপোর্ট
                        </h2>
                        <p className="text-slate-500 mb-8 leading-relaxed">
                            ইনসুলিন, অক্সিজেন সিলিন্ডার এবং লাইফ সেভিং ড্রাগস প্রয়োজনে যেকোনো সময় আমাদের সাথে যোগাযোগ করুন।
                        </p>

                        <a
                            href="tel:+8801XXXXXXXXX"
                            className="bg-rose-600 hover:bg-rose-700 text-white px-8 py-4 rounded-2xl font-bold flex items-center justify-center gap-3 transition-all shadow-xl shadow-rose-200 group w-full sm:w-auto"
                        >
                            <PhoneCall size={24} weight="fill" className="group-hover:animate-shake" />
                            সরাসরি কথা বলুন
                        </a>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full lg:max-w-2xl">
                        {items.map((item, index) => (
                            <div key={index} className="bg-white p-6 rounded-2xl border border-rose-100/50 shadow-sm hover:shadow-md transition-all group">
                                <div className="w-12 h-12 bg-rose-50 rounded-xl flex items-center justify-center text-rose-600 mb-4 group-hover:scale-110 transition-all">
                                    {item.icon}
                                </div>
                                <h3 className="font-bold text-slate-900 text-lg mb-1">{item.name}</h3>
                                <p className="text-sm text-slate-500 mb-3">{item.desc}</p>
                                <div className="text-[10px] font-black uppercase tracking-widest text-rose-500 bg-rose-50 px-2 py-1 rounded inline-block">
                                    {item.status}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
