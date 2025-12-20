import { Megaphone } from "@phosphor-icons/react/dist/ssr";

interface NoticeBoardProps {
    notices?: string[];
}

export default function NoticeBoard({ notices }: NoticeBoardProps) {
    if (!notices || notices.length === 0) return null;

    return (
        <section className="bg-gradient-to-r from-amber-50 to-orange-50 border-y border-amber-100 py-3 overflow-hidden relative group">
            <div className="container mx-auto px-4 lg:px-8 flex items-center gap-4">
                {/* Badge */}
                <div className="flex items-center gap-2 bg-amber-500 text-white px-3 py-1 rounded-full text-xs font-bold shadow-sm whitespace-nowrap z-10 shrink-0">
                    <Megaphone size={16} weight="fill" className="animate-pulse" />
                    <span>নোটিশ</span>
                </div>

                {/* Ticker Container */}
                <div className="flex-1 overflow-hidden relative h-6 mask-linear-fade">
                    <div className="absolute whitespace-nowrap animate-marquee flex items-center gap-12 group-hover:[animation-play-state:paused] w-max">
                        {/* Repeat content to ensure continuous loop effect */}
                        {[...notices, ...notices, ...notices].map((notice, index) => (
                            <span key={index} className="text-slate-700 font-medium text-sm flex items-center gap-3">
                                <span className="w-1.5 h-1.5 rounded-full bg-amber-400"></span>
                                {notice}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
