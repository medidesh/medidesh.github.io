import { Syringe, Wind, Drop, Heart } from "@phosphor-icons/react/dist/ssr";

export default function EmergencyServices() {
    const items = [
        { name: "ইনসুলিন", icon: <Syringe weight="fill" />, status: "স্টকে আছে" },
        { name: "নেবুলাইজার ঔষধ", icon: <Wind weight="fill" />, status: "স্টকে আছে" },
        { name: "স্যালাইন", icon: <Drop weight="fill" />, status: "সব ধরণের" },
        { name: "লাইফ সেভিং ড্রাগস", icon: <Heart weight="fill" />, status: "জরুরি" },
    ];

    return (
        <section className="py-12 bg-rose-50 border-y border-rose-100">
            <div className="container mx-auto px-4 lg:px-8">
                <div className="flex flex-col md:flex-row items-center justify-between gap-8">
                    <div>
                        <h2 className="text-2xl font-bold text-rose-700 flex items-center gap-2">
                            <span className="relative flex h-3 w-3">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-rose-400 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-3 w-3 bg-red-500"></span>
                            </span>
                            জরুরি ঔষধ ও সেবা
                        </h2>
                        <p className="text-rose-600/80 mt-1">
                            যেকোনো জরুরি প্রয়োজনে আমাদের স্টক প্রস্তুত।
                        </p>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 w-full md:w-auto">
                        {items.map((item, index) => (
                            <div key={index} className="bg-white p-4 rounded-xl shadow-sm border border-rose-100 flex items-center gap-3">
                                <div className="text-rose-500 text-2xl">{item.icon}</div>
                                <div>
                                    <div className="font-bold text-slate-800 text-sm">{item.name}</div>
                                    <div className="text-xs text-green-600 font-bold">{item.status}</div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
