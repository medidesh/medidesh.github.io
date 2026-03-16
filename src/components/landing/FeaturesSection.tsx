"use client";

import {
    Lightning, UsersThreeIcon, Package, WarningCircle, Printer,
    CloudCheck, Scroll, ArrowUUpLeft, ChartBar, DeviceMobile,
} from "@phosphor-icons/react/dist/ssr";
import { useLanguage } from "@/lib/i18n";

const features = {
    bn: [
        { icon: Lightning,      title: "দ্রুত পয়েন্ট অব সেল",         desc: "বারকোড স্ক্যানার ও শর্টকাট কি দিয়ে সেকেন্ডের মধ্যে বিল তৈরি করুন।",                                    color: "text-medidesh-teal-600", bg: "bg-medidesh-teal-50" },
        { icon: Package,        title: "রিয়েল-টাইম ইনভেন্টরি",         desc: "প্রতিটি ওষুধের স্টক লাইভ ট্র্যাক করুন — ঘাটতি বা বাড়তি স্টক নিয়ে আর কোনো দুশ্চিন্তা থাকবে না।", color: "text-orange-600",          bg: "bg-orange-50"          },
        { icon: WarningCircle,  title: "মেয়াদোত্তীর্ণ সতর্কতা",        desc: "ওষুধের মেয়াদ শেষের ৩ মাস আগেই স্বয়ংক্রিয় নোটিফিকেশন পান।",                                         color: "text-red-600",            bg: "bg-red-50"            },
        { icon: UsersThreeIcon, title: "মাল্টি-ইউজার অ্যাক্সেস",        desc: "মালিক, ম্যানেজার ও স্টাফের জন্য আলাদা অ্যাকাউন্ট ও অনুমতি সেট করুন।",                               color: "text-blue-600",           bg: "bg-blue-50"           },
        { icon: Printer,        title: "থার্মাল প্রিন্টিং",              desc: "যেকোনো থার্মাল বা সাধারণ প্রিন্টারে সঙ্গে সঙ্গে ইনভয়েস প্রিন্ট করুন।",                               color: "text-purple-600",         bg: "bg-purple-50"         },
        { icon: CloudCheck,     title: "ক্লাউড ব্যাকআপ ও সিঙ্ক",       desc: "যেকোনো জায়গা থেকে আপনার দোকানের রিপোর্ট ও ডেটা দেখুন।",                                              color: "text-cyan-600",           bg: "bg-cyan-50"           },
        { icon: Scroll,         title: "বাকি খাতা",                      desc: "কাস্টমার ও সাপ্লায়ারের বকেয়া হিসাব স্বয়ংক্রিয়ভাবে সংরক্ষিত থাকে।",                               color: "text-teal-600",           bg: "bg-teal-50"           },
        { icon: ChartBar,       title: "বিক্রয় রিপোর্ট ও বিশ্লেষণ",   desc: "দৈনিক, সাপ্তাহিক ও মাসিক বিক্রয় রিপোর্ট PDF বা Excel-এ ডাউনলোড করুন।",                            color: "text-indigo-600",         bg: "bg-indigo-50"         },
        { icon: ArrowUUpLeft,   title: "সহজ রিটার্ন ব্যবস্থাপনা",        desc: "পণ্য ফেরত বা পরিবর্তনের হিসাব সারুন মাত্র কয়েক সেকেন্ডে।",                                          color: "text-rose-600",           bg: "bg-rose-50"           },
        { icon: DeviceMobile,   title: "মোবাইল অ্যাপ",                   desc: "অ্যান্ড্রয়েড ফোনে পূর্ণাঙ্গ POS ও ইনভেন্টরি ম্যানেজমেন্ট — অফলাইনেও কাজ করে।",                    color: "text-green-600",          bg: "bg-green-50"          },
    ],
    en: [
        { icon: Lightning,      title: "Fast Point of Sale",         desc: "Create bills in seconds with barcode scanner and shortcut keys.",                                      color: "text-medidesh-teal-600", bg: "bg-medidesh-teal-50" },
        { icon: Package,        title: "Real-time Inventory",        desc: "Track live stock for every medicine — no more worrying about shortages or overstock.",                  color: "text-orange-600",         bg: "bg-orange-50"         },
        { icon: WarningCircle,  title: "Expiry Alerts",              desc: "Get automatic notifications 3 months before medicines expire.",                                         color: "text-red-600",            bg: "bg-red-50"            },
        { icon: UsersThreeIcon, title: "Multi-user Access",          desc: "Set separate accounts and permissions for owners, managers, and staff.",                                color: "text-blue-600",           bg: "bg-blue-50"           },
        { icon: Printer,        title: "Thermal Printing",           desc: "Print invoices instantly on any thermal or regular printer.",                                            color: "text-purple-600",         bg: "bg-purple-50"         },
        { icon: CloudCheck,     title: "Cloud Backup & Sync",        desc: "View your store's reports and data from anywhere.",                                                      color: "text-cyan-600",           bg: "bg-cyan-50"           },
        { icon: Scroll,         title: "Credit Ledger",              desc: "Customer and supplier balances are automatically tracked.",                                              color: "text-teal-600",           bg: "bg-teal-50"           },
        { icon: ChartBar,       title: "Sales Reports & Analytics",  desc: "Download daily, weekly, and monthly reports in PDF, Excel, or CSV.",                                    color: "text-indigo-600",         bg: "bg-indigo-50"         },
        { icon: ArrowUUpLeft,   title: "Easy Returns Management",    desc: "Handle product returns and exchanges in just a few seconds.",                                            color: "text-rose-600",           bg: "bg-rose-50"           },
        { icon: DeviceMobile,   title: "Mobile App",                 desc: "Full POS and inventory management on Android — works offline too.",                                      color: "text-green-600",          bg: "bg-green-50"          },
    ],
};

const header = {
    bn: { badge: "ফিচারসমূহ", heading1: "ব্যবসা পরিচালনার", heading2: "সবকিছু এক জায়গায়", sub: "টেকনাফ থেকে তেঁতুলিয়া — বাস্তব চাহিদা মাথায় রেখে প্রতিটি ফিচার সাজানো হয়েছে।" },
    en: { badge: "Features",    heading1: "Everything you need,",  heading2: "in one place",        sub: "From Teknaf to Tetulia — every feature designed with real-world needs in mind." },
};

export default function FeaturesSection() {
    const { lang } = useLanguage();
    const t = header[lang];
    const list = features[lang];

    return (
        <section id="features" className="py-24 lg:py-32 bg-white relative overflow-hidden">
            <svg className="absolute -right-24 top-1/3 w-64 h-64 opacity-[0.05] pointer-events-none" viewBox="0 0 256 256" fill="none" aria-hidden="true">
                <circle cx="128" cy="128" r="110" stroke="#2E8B57" strokeWidth="2" strokeDasharray="8 6" />
                <circle cx="128" cy="128" r="80" stroke="#2E8B57" strokeWidth="1.5" strokeDasharray="5 5" />
                <circle cx="128" cy="128" r="16" fill="#2E8B57" opacity="0.3" />
            </svg>
            <svg className="absolute left-8 bottom-20 opacity-[0.07] pointer-events-none hidden lg:block" width="100" height="100" aria-hidden="true">
                {[0,1,2,3].map(r => [0,1,2,3].map(c => (
                    <circle key={`${r}-${c}`} cx={12+c*25} cy={12+r*25} r="2.5" fill="#2E8B57" />
                )))}
            </svg>
            <div className="container mx-auto px-6 lg:px-12">
                <div className="max-w-2xl mx-auto text-center mb-16">
                    <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded bg-slate-100 text-slate-600 text-xs font-semibold uppercase tracking-wider mb-5">
                        {t.badge}
                    </div>
                    <h2 className="text-3xl lg:text-4xl font-black text-slate-900 mb-6 leading-tight tracking-tight">
                        {t.heading1}{" "}<span className="text-medidesh-teal-500">{t.heading2}</span>
                    </h2>
                    <p className="text-slate-500 text-lg leading-relaxed max-w-2xl mx-auto">{t.sub}</p>
                </div>

                <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-5 max-w-6xl mx-auto">
                    {list.map((feature, idx) => (
                        <div key={idx} className="bg-slate-50 hover:bg-white border border-slate-100 hover:border-slate-200 hover:shadow-xl rounded p-5 transition-all duration-300 group cursor-default">
                            <div className={`w-10 h-10 rounded ${feature.bg} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 shadow-sm`}>
                                <feature.icon size={20} weight="fill" className={feature.color} />
                            </div>
                            <h3 className="font-bold text-slate-800 text-sm mb-1.5 leading-snug">{feature.title}</h3>
                            <p className="text-xs text-slate-500 leading-relaxed">{feature.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
