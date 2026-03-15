import { Plant, Lightbulb, ShieldCheck, Tag } from "@phosphor-icons/react/dist/ssr";

export default function VisionSection() {
    return (
        <section id="vision" className="py-20 lg:py-28 bg-white border-y border-slate-100 relative overflow-hidden">
            {/* Concentric rings decoration */}
            <svg
                className="absolute -left-20 top-1/2 -translate-y-1/2 w-72 h-72 opacity-[0.04] pointer-events-none"
                viewBox="0 0 280 280"
                fill="none"
                aria-hidden="true"
            >
                <circle cx="140" cy="140" r="130" stroke="#2E8B57" strokeWidth="1.5" />
                <circle cx="140" cy="140" r="100" stroke="#2E8B57" strokeWidth="1.5" />
                <circle cx="140" cy="140" r="70" stroke="#2E8B57" strokeWidth="1.5" />
                <circle cx="140" cy="140" r="40" fill="#2E8B57" opacity="0.1" />
            </svg>
            <svg
                className="absolute -right-20 top-1/2 -translate-y-1/2 w-60 h-60 opacity-[0.04] pointer-events-none"
                viewBox="0 0 240 240"
                fill="none"
                aria-hidden="true"
            >
                <circle cx="120" cy="120" r="110" stroke="#2E8B57" strokeWidth="1.5" strokeDasharray="8 5" />
                <circle cx="120" cy="120" r="80" stroke="#2E8B57" strokeWidth="1.5" strokeDasharray="6 4" />
                <circle cx="120" cy="120" r="50" stroke="#2E8B57" strokeWidth="1" strokeDasharray="4 4" />
            </svg>
            <div className="container mx-auto px-6 lg:px-12">
                <div className="max-w-4xl mx-auto text-center">
                    <div className="inline-flex items-center justify-center w-12 h-12 rounded bg-medidesh-teal-50 border border-medidesh-teal-100 mb-6">
                        <Plant weight="fill" size={22} className="text-medidesh-teal-600" />
                    </div>
                    <h2 className="text-3xl lg:text-4xl font-black text-slate-900 mb-6 leading-tight">
                        আমাদের লক্ষ্য
                    </h2>
                    <p className="text-xl text-slate-600 leading-relaxed max-w-2xl mx-auto mb-14">
                        &ldquo;আমরা বিশ্বাস করি, প্রযুক্তি সবার জন্য। আমাদের লক্ষ্য বাংলাদেশের ৬৪ জেলার প্রতিটি ফার্মেসিকে ডিজিটালি স্বয়ংসম্পূর্ণ করা — যেন মালিকরা নির্ভাবনায় ব্যবসা পরিচালনা করতে পারেন।&rdquo;
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 border-t border-slate-100 pt-12">
                        {[
                            { icon: Lightbulb, title: "উদ্ভাবন", desc: "আধুনিক প্রযুক্তি ব্যবহার করে ফার্মেসির জটিলতাকে সহজ সমাধানে পরিণত করি।", color: "text-amber-500 bg-amber-50 border-amber-100" },
                            { icon: ShieldCheck, title: "নির্ভরযোগ্যতা", desc: "আপনার ডেটা ও ব্যবসার নিরাপত্তা আমাদের সর্বোচ্চ অগ্রাধিকার।", color: "text-emerald-600 bg-emerald-50 border-emerald-100" },
                            { icon: Tag, title: "সাশ্রয়ী সেবা", desc: "ছোট থেকে বড় সব ফার্মেসির সাধ্যের মধ্যে সেরা ডিজিটাল সমাধান।", color: "text-medidesh-teal-600 bg-medidesh-teal-50 border-medidesh-teal-100" },
                        ].map(({ icon: Icon, title, desc, color }) => (
                            <div key={title} className="text-left">
                                <div className={`w-10 h-10 rounded ${color} border flex items-center justify-center mb-4`}>
                                    <Icon size={20} weight="duotone" />
                                </div>
                                <h4 className="font-bold text-slate-900 mb-2">{title}</h4>
                                <p className="text-sm text-slate-500 leading-relaxed">{desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
