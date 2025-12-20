import { Thermometer, Drop, Heartbeat, Bandaids, Baby, Pill } from "@phosphor-icons/react/dist/ssr";

export default function ProductCategories() {
    const categories = [
        {
            name: "জ্বর ও সর্দি",
            icon: <Thermometer weight="duotone" />,
            gradient: "from-red-50 to-red-100",
            border: "border-red-100",
            text: "text-red-600",
            count: "Fever & Flu"
        },
        {
            name: "ডায়াবেটিস",
            icon: <Drop weight="duotone" />,
            gradient: "from-blue-50 to-blue-100",
            border: "border-blue-100",
            text: "text-blue-600",
            count: "Diabetes Care"
        },
        {
            name: "গ্যাস্ট্রিক",
            icon: <Pill weight="duotone" />,
            gradient: "from-orange-50 to-orange-100",
            border: "border-orange-100",
            text: "text-orange-600",
            count: "Gastric Issues"
        },
        {
            name: "উচ্চ রক্তচাপ",
            icon: <Heartbeat weight="duotone" />,
            gradient: "from-rose-50 to-rose-100",
            border: "border-rose-100",
            text: "text-rose-600",
            count: "Blood Pressure"
        },
        {
            name: "ফার্স্ট এইড",
            icon: <Bandaids weight="duotone" />,
            gradient: "from-emerald-50 to-emerald-100",
            border: "border-emerald-100",
            text: "text-emerald-600",
            count: "First Aid"
        },
        {
            name: "মা ও শিশু",
            icon: <Baby weight="duotone" />,
            gradient: "from-purple-50 to-purple-100",
            border: "border-purple-100",
            text: "text-purple-600",
            count: "Baby Care"
        },
    ];

    return (
        <section id="categories" className="py-24 bg-white relative overflow-hidden">
            {/* Decorative Background */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none opacity-40">
                <div className="absolute -top-[20%] -right-[10%] w-[500px] h-[500px] rounded-full bg-pharma-green-50 blur-3xl"></div>
                <div className="absolute top-[40%] -left-[10%] w-[400px] h-[400px] rounded-full bg-blue-50 blur-3xl"></div>
            </div>

            <div className="container mx-auto px-4 lg:px-8 relative z-10">
                <div className="text-center mb-16">
                    <span className="inline-block py-1 px-3 rounded-full bg-slate-100 border border-slate-200 text-slate-500 font-bold text-xs uppercase tracking-wider mb-4">
                        কাটাগরি
                    </span>
                    <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 leading-tight">
                        রোগ অনুযায়ী <span className="text-pharma-green-600">ঔষধ খুঁজুন</span>
                    </h2>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
                    {categories.map((cat, index) => (
                        <div key={index} className={`relative group p-6 rounded-3xl bg-gradient-to-br ${cat.gradient} border ${cat.border} hover:shadow-lg transition-all duration-300 hover:-translate-y-2 cursor-pointer overflow-hidden`}>
                            {/* Hover Shine Effect */}
                            <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>

                            <div className={`w-14 h-14 mx-auto bg-white rounded-2xl shadow-sm flex items-center justify-center text-3xl mb-4 ${cat.text} group-hover:scale-110 transition-transform duration-300`}>
                                {cat.icon}
                            </div>
                            <h3 className="font-bold text-slate-800 text-lg mb-1">{cat.name}</h3>
                            <p className="text-xs text-slate-500 font-medium opacity-80">{cat.count}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
