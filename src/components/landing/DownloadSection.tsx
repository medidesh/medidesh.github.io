import { GooglePlayLogo, Monitor, ShieldCheck, WifiSlash, Lightning, Headset } from "@phosphor-icons/react/dist/ssr";

export default function DownloadSection() {
    return (
        <section id="download" className="py-20 lg:py-28 bg-white border-t border-slate-100 relative overflow-hidden">
            {/* Phone outline illustration */}
            <svg
                className="absolute right-10 top-1/2 -translate-y-1/2 w-48 h-48 opacity-[0.05] pointer-events-none hidden xl:block"
                viewBox="0 0 120 200"
                fill="none"
                aria-hidden="true"
            >
                <rect x="10" y="4" width="100" height="192" rx="16" stroke="#2E8B57" strokeWidth="4" />
                <rect x="20" y="14" width="80" height="152" rx="8" fill="#2E8B57" opacity="0.15" />
                <circle cx="60" cy="182" r="7" stroke="#2E8B57" strokeWidth="3" />
                <rect x="40" y="8" width="40" height="6" rx="3" fill="#2E8B57" opacity="0.4" />
                {/* Screen lines */}
                <rect x="28" y="30" width="64" height="6" rx="3" fill="#2E8B57" opacity="0.3" />
                <rect x="28" y="44" width="44" height="4" rx="2" fill="#2E8B57" opacity="0.2" />
                <rect x="28" y="60" width="64" height="32" rx="6" fill="#2E8B57" opacity="0.15" />
                <rect x="28" y="100" width="28" height="28" rx="6" fill="#2E8B57" opacity="0.15" />
                <rect x="64" y="100" width="28" height="28" rx="6" fill="#2E8B57" opacity="0.15" />
            </svg>
            {/* Blob left */}
            <svg
                className="absolute -left-20 -bottom-20 w-72 h-72 opacity-[0.04] pointer-events-none"
                viewBox="0 0 280 280"
                fill="none"
                aria-hidden="true"
            >
                <path
                    d="M140,30 C190,10 250,60 265,130 C280,200 240,260 170,275 C100,290 30,250 15,180 C0,110 40,40 90,25 C110,18 120,36 140,30 Z"
                    fill="#2E8B57"
                />
            </svg>
            <div className="container mx-auto px-6 lg:px-12">
                <div className="max-w-4xl mx-auto">
                    {/* Content */}
                    <div className="text-center mb-12">
                        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded bg-slate-100 text-slate-600 text-xs font-semibold uppercase tracking-wider mb-5">
                            অ্যাপ ডাউনলোড
                        </div>
                        <h2 className="text-3xl lg:text-4xl font-black text-slate-900 mb-5 leading-tight">
                            ফার্মেসি থাকুক{" "}
                            <span className="text-medidesh-teal-500">আপনার হাতের মুঠোয়</span>
                        </h2>
                        <p className="text-lg text-slate-500 max-w-2xl mx-auto leading-relaxed">
                            Android ফোনে ও Windows পিসিতে সমানভাবে কার্যকর মেডিদেশ — ইন্টারনেট ছাড়াও অফলাইন মোডে কাজ করে।
                        </p>
                    </div>

                    {/* Download buttons */}
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
                        <a
                            href="https://wa.me/+8801608844017?text=আমি%20মেডিদেশ%20Android%20অ্যাপ%20ডাউনলোড%20করতে%20চাই"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-slate-900 hover:bg-slate-800 text-white px-8 py-4 rounded font-bold text-base transition-all hover:-translate-y-0.5 shadow-lg group"
                        >
                            <GooglePlayLogo weight="fill" size={22} className="text-medidesh-teal-400 group-hover:scale-110 transition-transform" />
                            <div className="text-left">
                                <div className="text-[10px] opacity-70 uppercase tracking-wider">ডাউনলোড করুন</div>
                                <div>Google Play</div>
                            </div>
                        </a>
                        <a
                            href="https://wa.me/+8801608844017?text=আমি%20মেডিদেশ%20Windows%20PC%20ভার্সন%20পেতে%20চাই"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-white hover:bg-slate-50 text-slate-900 border border-slate-200 px-8 py-4 rounded font-bold text-base transition-all hover:-translate-y-0.5 shadow-sm group"
                        >
                            <Monitor weight="duotone" size={22} className="text-medidesh-teal-500 group-hover:scale-110 transition-transform" />
                            <div className="text-left">
                                <div className="text-[10px] opacity-60 uppercase tracking-wider">ডাউনলোড করুন</div>
                                <div>Windows PC</div>
                            </div>
                        </a>
                    </div>

                    {/* Stats row */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 py-10 border-t border-slate-100">
                        {[
                            { icon: Lightning, value: "১০ গুণ দ্রুত", label: "ম্যানুয়াল পদ্ধতির চেয়ে", color: "text-yellow-500" },
                            { icon: WifiSlash, value: "অফলাইনে কার্যকর", label: "ইন্টারনেট ছাড়াও চলে", color: "text-orange-500" },
                            { icon: ShieldCheck, value: "ব্যাংক-গ্রেড", label: "নিরাপত্তা ও এনক্রিপশন", color: "text-emerald-500" },
                            { icon: Headset, value: "সকাল ১০টা–রাত ৮টা", label: "সরাসরি সাপোর্ট", color: "text-blue-500" },
                        ].map((stat, i) => (
                            <div key={i} className="text-center group">
                                <div className="flex justify-center mb-2">
                                    <div className="w-10 h-10 rounded bg-slate-50 flex items-center justify-center group-hover:scale-110 transition-transform">
                                        <stat.icon size={20} weight="duotone" className={stat.color} />
                                    </div>
                                </div>
                                <div className="font-black text-slate-900 text-base mb-0.5">{stat.value}</div>
                                <div className="text-xs text-slate-500">{stat.label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
