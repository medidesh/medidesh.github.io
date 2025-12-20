import { Megaphone } from "@phosphor-icons/react/dist/ssr";

interface NoticeBoardProps {
    notices?: string[];
}

export default function NoticeBoard({ notices }: NoticeBoardProps) {
    if (!notices || notices.length === 0) return null;

    return (
        <section className="bg-amber-50 border-y border-amber-100 py-3">
            <div className="container mx-auto px-4 lg:px-8 flex items-start gap-3">
                <Megaphone size={24} className="text-amber-600 shrink-0 mt-0.5 animate-pulse" weight="fill" />
                <div className="flex-1 overflow-hidden relative">
                    <div className="flex flex-col sm:flex-row sm:gap-8 gap-2">
                        {notices.map((notice, index) => (
                            <span key={index} className="text-amber-900 font-medium text-sm flex items-center gap-2">
                                <span className="w-1.5 h-1.5 rounded-full bg-amber-500"></span>
                                {notice}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
