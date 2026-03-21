"use client";

import { X, HourglassHigh } from "@phosphor-icons/react/dist/ssr";
import { useLanguage } from "@/lib/i18n";

interface ComingSoonModalProps {
    isOpen: boolean;
    onClose: () => void;
    platform: "Windows" | "App Store" | null;
}

const T = {
    bn: {
        title: "শীঘ্রই আসছে",
        windowsSub: "আমাদের Windows PC ভার্সনের কাজ দ্রুতগতিতে এগিয়ে চলছে। খুব শীঘ্রই আপনি এটি ব্যবহার করতে পারবেন।",
        appStoreSub: "iOS অ্যাপের কাজ প্রক্রিয়াধীন রয়েছে। খুব শিঘ্রই App Store-এ মেডিদেশ পাওয়া যাবে।",
        stayTuned: "আমাদের সাথেই থাকুন!",
    },
    en: {
        title: "Coming Soon",
        windowsSub: "We are working hard on our Windows PC version. It will be available for you very soon.",
        appStoreSub: "Our iOS app is currently in development. Medidesh will be available on the App Store shortly.",
        stayTuned: "Stay tuned!",
    }
}

export default function ComingSoonModal({ isOpen, onClose, platform }: ComingSoonModalProps) {
    const { lang } = useLanguage();
    const t = T[lang || "bn"];

    if (!isOpen) return null;

    return (
        <div
            className="fixed inset-0 z-[70] overflow-y-auto"
            aria-labelledby="modal-title"
            role="dialog"
            aria-modal="true"
        >
            <div
                className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm transition-opacity"
                onClick={onClose}
            ></div>

            <div className="flex min-h-screen items-center justify-center p-4 text-center sm:p-0">
                <div className="relative transform overflow-hidden rounded-3xl bg-white text-left shadow-2xl transition-all sm:my-8 w-full max-w-sm border border-slate-100 p-8">
                    <button
                        onClick={onClose}
                        className="absolute top-4 right-4 p-2 bg-slate-50 hover:bg-slate-100 rounded-full text-slate-400 hover:text-slate-600 transition-colors z-20 outline-none cursor-pointer"
                    >
                        <X weight="bold" />
                    </button>

                    <div className="flex flex-col items-center justify-center text-center mt-4">
                        <div className="w-16 h-16 bg-medidesh-teal-50 rounded-full flex items-center justify-center mb-6">
                            <HourglassHigh weight="duotone" className="text-3xl text-medidesh-teal-500" />
                        </div>
                        <h3 className="text-2xl font-black text-slate-800 mb-3">{t.title}</h3>
                        <p className="text-slate-500 leading-relaxed mb-6">
                            {platform === "Windows" ? t.windowsSub : t.appStoreSub}
                        </p>
                        <p className="text-sm font-bold text-medidesh-teal-600">
                            {t.stayTuned}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
