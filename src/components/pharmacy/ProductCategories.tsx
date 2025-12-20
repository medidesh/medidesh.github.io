import { Thermometer, Drop, Heartbeat, Bandaids, Baby, Pill } from "@phosphor-icons/react/dist/ssr";

export default function ProductCategories() {
    const categories = [
        { name: "জ্বর ও সর্দি", icon: <Thermometer weight="fill" />, color: "bg-red-100 text-red-600" },
        { name: "ডায়াবেটিস", icon: <Drop weight="fill" />, color: "bg-blue-100 text-blue-600" },
        { name: "গ্যাস্ট্রিক", icon: <Pill weight="fill" />, color: "bg-orange-100 text-orange-600" },
        { name: "উচ্চ রক্তচাপ", icon: <Heartbeat weight="fill" />, color: "bg-rose-100 text-rose-600" },
        { name: "ফার্স্ট এইড", icon: <Bandaids weight="fill" />, color: "bg-emerald-100 text-emerald-600" },
        { name: "মা ও শিশু", icon: <Baby weight="fill" />, color: "bg-purple-100 text-purple-600" },
    ];

    return (
        <section id="categories" className="py-20 bg-slate-50">
            <div className="container mx-auto px-4 lg:px-8">
                <div className="text-center mb-12">
                    <span className="text-pharma-green-600 font-bold uppercase tracking-wider text-sm">কাটাগরি</span>
                    <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mt-2">
                        রোগ অনুযায়ী ঔষধ খুঁজুন
                    </h2>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
                    {categories.map((cat, index) => (
                        <div key={index} className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 text-center hover:shadow-md hover:-translate-y-1 transition-all cursor-pointer group">
                            <div className={`w-14 h-14 mx-auto ${cat.color} rounded-full flex items-center justify-center text-3xl mb-4 group-hover:scale-110 transition-transform`}>
                                {cat.icon}
                            </div>
                            <h3 className="font-bold text-slate-800">{cat.name}</h3>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
