import { Camera, PhoneCall, UploadSimple } from "@phosphor-icons/react/dist/ssr";

export default function UploadPrescription() {
    return (
        <section className="py-16 bg-white">
            <div className="container mx-auto px-4 lg:px-8">
                <div className="relative overflow-hidden bg-gradient-to-r from-pharma-green-600 to-pharma-green-800 rounded-3xl shadow-xl">
                    {/* Background Pattern */}
                    <div className="absolute top-0 right-0 -mt-10 -mr-10 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
                    <div className="absolute bottom-0 left-0 -mb-10 -ml-10 w-64 h-64 bg-pharma-blue-500/20 rounded-full blur-3xl"></div>

                    <div className="relative z-10 grid lg:grid-cols-2 items-center gap-8 p-8 lg:p-12">
                        <div className="text-white text-center lg:text-left">
                            <span className="inline-block px-3 py-1 bg-white/20 rounded-full text-xs font-bold mb-4 border border-white/30 backdrop-blur-sm">
                                সহজ ও দ্রুত
                            </span>
                            <h2 className="text-3xl lg:text-5xl font-bold mb-4">
                                ওষুধ খুঁজে পাচ্ছেন না?
                            </h2>
                            <p className="text-pharma-green-50 text-lg mb-8 leading-relaxed max-w-lg mx-auto lg:mx-0">
                                আপনার প্রেসক্রিপশনের ছবি তুলে আপলোড করুন। আমরাই ওষুধ খুঁজে আপনার
                                ঠিকানায় পৌঁছে দেব।
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                                <button className="px-8 py-4 bg-white text-pharma-green-700 font-bold rounded-xl shadow-lg hover:bg-slate-50 transition-all flex items-center justify-center gap-2 group">
                                    <Camera
                                        size={24}
                                        weight="bold"
                                        className="group-hover:scale-110 transition-transform"
                                    />
                                    <span>ছবি আপলোড করুন</span>
                                </button>
                                <button className="px-8 py-4 bg-transparent border-2 border-white text-white font-bold rounded-xl hover:bg-white/10 transition-all flex items-center justify-center gap-2">
                                    <PhoneCall size={24} weight="bold" />
                                    <span>কল করে অর্ডার</span>
                                </button>
                            </div>
                        </div>
                        <div className="hidden lg:flex justify-end relative">
                            {/* Visual representation of prescription upload */}
                            <div className="relative w-80 h-64 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 p-6 flex flex-col items-center justify-center text-white transform rotate-3">
                                <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mb-4 animate-bounce">
                                    <UploadSimple size={40} weight="bold" />
                                </div>
                                <div className="font-bold text-xl">Drag & Drop</div>
                                <div className="text-white/60 text-sm">Or click to browse</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
