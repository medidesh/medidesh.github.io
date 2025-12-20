import Link from "next/link";

export default function LandingHero() {
    return (
        <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-slate-50">
            {/* Background Blobs */}
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-pharma-green-400/10 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/3"></div>
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-400/10 rounded-full blur-[100px] translate-y-1/3 -translate-x-1/3"></div>

            {/* Abstract Patterns */}
            <div className="absolute inset-0 pointer-events-none opacity-[0.03] overflow-hidden z-0">
                <svg className="absolute top-20 right-0 w-[800px] h-[800px] transform translate-x-1/3 lg:translate-x-0"
                    viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                    <path fill="#2E8B57"
                        d="M45.7,-76.3C58.9,-69.3,69.1,-58.3,77.3,-46.3C85.5,-34.3,91.7,-21.3,92.6,-8.1C93.5,5.1,89.1,18.5,82.2,30.8C75.3,43.1,65.9,54.3,54.7,63.2C43.5,72.1,30.5,78.7,16.8,81.1C3.1,83.5,-11.3,81.7,-24.8,77.1C-38.3,72.5,-50.9,65.1,-61.7,55.1C-72.5,45.1,-81.5,32.5,-86.1,18.4C-90.7,4.3,-90.9,-11.3,-84.9,-25.2C-78.9,-39.1,-66.7,-51.3,-53.2,-58.5C-39.7,-65.7,-24.9,-67.9,-11.1,-69.8C2.7,-71.7,16.5,-73.3,32.5,-83.3L45.7,-76.3Z"
                        transform="translate(100 100) scale(1.1)" />
                </svg>
            </div>


            <div className="container mx-auto px-6 lg:px-12 grid lg:grid-cols-2 gap-16 items-center relative z-10">
                <div className="text-center lg:text-left">
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-pharma-green-100 text-pharma-green-700 text-sm font-bold mb-8 border border-pharma-green-200">
                        <span className="w-2 h-2 rounded-full bg-pharma-green-600 animate-pulse"></span>
                        <span>নতুন: মাল্টি-স্টাফ সেলিং</span>
                    </div>
                    <h1 className="text-4xl lg:text-6xl font-extrabold text-slate-900 leading-[1.2] mb-6 tracking-tight">
                        আপনার ফার্মেসির পূর্ণ নিয়ন্ত্রণ এখন{" "}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-pharma-green-600 to-emerald-400">
                            হাতের মুঠোয়
                        </span>
                    </h1>
                    <p className="text-lg lg:text-xl text-slate-500 mb-8 max-w-lg mx-auto lg:mx-0 leading-relaxed font-medium">
                        বাংলাদেশের ফার্মেসির জন্য তৈরি আধুনিক ক্লাউড-বেজড সলিউশন। স্টক,
                        বিক্রয় এবং মেয়াদ ট্র্যাক করুন খুব সহজেই।
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mb-10">
                        <Link
                            href="#"
                            className="w-full sm:w-auto bg-pharma-green-600 hover:bg-pharma-green-700 text-white px-8 py-4 rounded-xl font-bold text-lg shadow-xl shadow-pharma-green-600/20 hover:-translate-y-1 transition-all duration-300 text-center"
                        >
                            ফ্রি অ্যাপ ডাউনলোড
                        </Link>
                    </div>

                    <div className="flex items-center justify-center lg:justify-start gap-3">
                        <div className="flex -space-x-3">
                            <div className="w-10 h-10 rounded-full border-2 border-white bg-slate-200"></div>
                            <div className="w-10 h-10 rounded-full border-2 border-white bg-slate-300"></div>
                            <div className="w-10 h-10 rounded-full border-2 border-white bg-slate-400"></div>
                        </div>
                        <div className="text-sm font-semibold text-slate-600">
                            <span className="text-pharma-green-600">৬ জন স্টাফ</span> একসাথে বিক্রি
                            করতে পারবেন।
                        </div>
                    </div>
                </div>

                <div className="relative lg:h-[600px] flex items-center justify-center">
                    <div className="relative w-full max-w-xl animate-[float_6s_ease-in-out_infinite]">
                        <div className="absolute inset-0 bg-pharma-green-500/30 blur-[60px] rounded-full scale-110"></div>
                        <img
                            src="/assets/hero_abstract.png"
                            alt="Pharmacy Management Abstract"
                            className="w-full h-auto object-contain drop-shadow-2xl relative z-10"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}
