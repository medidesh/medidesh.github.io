import { CalendarPlus, Clock } from "@phosphor-icons/react/dist/ssr";

export default function VisitingDoctors() {
    const doctors = [
        {
            name: "ডাঃ আব্দুর রহমান",
            qual: "এমবিবিএস, এফসিপিএস (মেডিসিন)",
            spec: "মেডিসিন বিশেষজ্ঞ",
            time: "শনি - সোম (৫টা - ৮টা)",
            img: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?q=80&w=2070&auto=format&fit=crop",
        },
        {
            name: "ডাঃ নুসরাত জাহান",
            qual: "এমবিবিএস, ডিজিও (গাইনী)",
            spec: "মা ও শিশু রোগ বিশেষজ্ঞ",
            time: "রবি - বুধ (৪টা - ৭টা)",
            img: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?q=80&w=1974&auto=format&fit=crop",
        },
        {
            name: "ডাঃ রফিকুল ইসলাম",
            qual: "বিডিএস (ঢাকা)",
            spec: "ডেন্টাল সার্জন",
            time: "শুক্র - শনি (৬টা - ৯টা)",
            img: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?q=80&w=1964&auto=format&fit=crop",
        },
    ];

    return (
        <section className="py-20 bg-white">
            <div className="container mx-auto px-4 lg:px-8">
                <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
                    <div>
                        <span className="text-pharma-green-600 font-bold uppercase tracking-wider text-sm mb-2 block">
                            বিশেষজ্ঞ ডাক্তার
                        </span>
                        <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-2">
                            আমাদের চেম্বারে বসেন
                        </h2>
                        <p className="text-slate-500">
                            অভিজ্ঞ ডাক্তারদের পরামর্শ নিন ঘরের কাছেই।
                        </p>
                    </div>
                    <a
                        href="tel:+8801712345678"
                        className="px-6 py-3 bg-slate-900 text-white rounded-xl font-bold hover:bg-slate-800 transition-colors flex items-center gap-2"
                    >
                        <CalendarPlus size={24} weight="bold" />
                        সিরিয়াল দিন
                    </a>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {doctors.map((doc, index) => (
                        <div
                            key={index}
                            className="flex gap-4 p-6 rounded-2xl border border-slate-100 bg-white shadow-soft hover:shadow-lg transition-all"
                        >
                            <div className="w-20 h-20 bg-slate-100 rounded-xl overflow-hidden shrink-0">
                                <img
                                    src={doc.img}
                                    alt={doc.name}
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-slate-900">{doc.name}</h3>
                                <p className="text-pharma-green-600 font-medium text-sm mb-1">
                                    {doc.qual}
                                </p>
                                <p className="text-slate-500 text-sm mb-3">{doc.spec}</p>
                                <div className="flex items-center gap-2 text-xs font-bold bg-slate-100 px-3 py-1.5 rounded-lg w-fit text-slate-600">
                                    <Clock size={16} weight="bold" />
                                    {doc.time}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
