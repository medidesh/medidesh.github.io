import {
    WarningOctagon,
    HourglassHigh,
    DesktopTower,
    Notebook,
} from "@phosphor-icons/react/dist/ssr";

export default function ProblemSolution() {
    return (
        <section className="py-24 bg-slate-50">
            <div className="container mx-auto px-6 lg:px-12">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    <div>
                        <span className="text-pharma-green-600 font-bold tracking-wider uppercase text-sm">
                            সাধারণ সমস্যাসমূহ
                        </span>
                        <h2 className="text-3xl lg:text-5xl font-bold mt-3 mb-6 text-slate-900 leading-tight">
                            বাংলাদেশে ফার্মেসি চালানো সহজ নয়।
                        </h2>
                        <p className="text-lg text-slate-500 leading-relaxed">
                            পুরানো পদ্ধতি এবং সফটওয়্যার আপনার প্রতিদিনের কাজে বাধা সৃষ্টি করে
                            এবং লোকসান বাড়ায়।
                        </p>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-6">
                        <div className="p-6 rounded-2xl bg-white border border-slate-100 shadow-sm">
                            <div className="w-12 h-12 bg-red-50 rounded-lg flex items-center justify-center text-red-600 mb-4">
                                <WarningOctagon size={32} />
                            </div>
                            <h3 className="text-lg font-bold text-slate-900 mb-2">
                                স্টক গরমিল
                            </h3>
                            <p className="text-sm text-slate-500">
                                হিসাবহীন বিক্রি এবং চুরির কারণে প্রতি মাসে হাজার হাজার টাকা
                                লোকসান।
                            </p>
                        </div>
                        <div className="p-6 rounded-2xl bg-white border border-slate-100 shadow-sm">
                            <div className="w-12 h-12 bg-orange-50 rounded-lg flex items-center justify-center text-orange-600 mb-4">
                                <HourglassHigh size={32} />
                            </div>
                            <h3 className="text-lg font-bold text-slate-900 mb-2">
                                মেয়াদোত্তীর্ণ ঔষধ
                            </h3>
                            <p className="text-sm text-slate-500">
                                মেয়াদ শেষ হওয়া ঔষধ শেল্ফে পড়ে থাকে অলক্ষ্যে, যা পরে ফেলে দিতে
                                হয়।
                            </p>
                        </div>
                        <div className="p-6 rounded-2xl bg-white border border-slate-100 shadow-sm">
                            <div className="w-12 h-12 bg-slate-100 rounded-lg flex items-center justify-center text-slate-600 mb-4">
                                <DesktopTower size={32} />
                            </div>
                            <h3 className="text-lg font-bold text-slate-900 mb-2">
                                হার্ডওয়্যার নির্ভরতা
                            </h3>
                            <p className="text-sm text-slate-500">
                                পিসি নষ্ট হলে ব্যবসা বন্ধ। একাধিক কাউন্টার সেটআপ করা ব্যয়বহুল।
                            </p>
                        </div>
                        <div className="p-6 rounded-2xl bg-white border border-slate-100 shadow-sm">
                            <div className="w-12 h-12 bg-slate-100 rounded-lg flex items-center justify-center text-slate-600 mb-4">
                                <Notebook size={32} />
                            </div>
                            <h3 className="text-lg font-bold text-slate-900 mb-2">
                                হিসাবের ভুল
                            </h3>
                            <p className="text-sm text-slate-500">
                                কাগজে-কলমে দৈনিক বিক্রির হিসাব মেলাতে ঘন্টার পর ঘন্টা সময় নষ্ট।
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
