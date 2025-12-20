import { BellRinging, Info } from "@phosphor-icons/react/dist/ssr";

interface NoticeBoardProps {
    notices?: string[];
}

export default function NoticeBoard({ notices }: NoticeBoardProps) {
    if (!notices || notices.length === 0) return null;

    return (
        <div className="bg-slate-50 pb-6 relative z-30">
            <div className="container mx-auto px-4 lg:px-8">
                <div className="max-w-4xl mx-auto transform -translate-y-1/2">
                    {/* Glowing Gradient Border Container */}
                    <div className="p-[2px] rounded-full bg-gradient-to-r from-pharma-green-500 via-emerald-400 to-pharma-green-600 glow-primary shadow-lg">
                        <div className="bg-white/95 backdrop-blur-xl rounded-full py-3 px-6 flex items-center gap-6 overflow-hidden">

                            {/* Static Badge */}
                            <div className="shrink-0 flex items-center gap-2 px-4 py-1.5 bg-pharma-green-50 text-pharma-green-700 rounded-full border border-pharma-green-100 shadow-sm">
                                <BellRinging size={18} weight="fill" className="animate-bounce" />
                                <span className="font-bold text-xs uppercase tracking-widest">Notice</span>
                            </div>

                            {/* Ticker Content */}
                            <div className="flex-1 overflow-hidden relative h-6 mask-linear-fade">
                                <div className="absolute whitespace-nowrap animate-marquee flex items-center gap-16 w-max">
                                    {[...notices, ...notices, ...notices].map((notice, index) => (
                                        <span key={index} className="text-slate-700 font-bold text-sm md:text-base flex items-center gap-3">
                                            <Info size={16} className="text-pharma-green-500" weight="fill" />
                                            {notice}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            {/* Close hint or spacer */}
                            <div className="hidden md:block w-px h-6 bg-slate-200 ml-4"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
