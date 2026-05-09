export default function PhoneMockup({ 
    children, 
    className = "", 
    showNotch = true, 
    frameColor = "bg-slate-900" 
}: { 
    children: React.ReactNode, 
    className?: string, 
    showNotch?: boolean,
    frameColor?: string
}) {
    // Extract border color from frameColor if it's a bg- class
    const borderColor = frameColor.replace('bg-', 'border-');

    return (
        <div className={`relative mx-auto ${borderColor} ${frameColor} border-[12px] rounded-[3rem] h-[600px] w-[290px] shadow-2xl ${className}`}>
            {/* Dynamic Island */}
            {showNotch && (
                <div className="absolute top-[12px] left-1/2 -translate-x-1/2 w-[90px] h-[26px] bg-slate-900 rounded-full z-50 flex items-center justify-end px-2">
                    {/* Camera lens reflection */}
                    <div className="w-2 h-2 rounded-full bg-slate-800 shadow-[inset_0px_0px_2px_rgba(255,255,255,0.1)]"></div>
                </div>
            )}

            {/* Buttons - hide if custom frame color to keep it clean */}
            {showNotch && (
                <>
                    <div className="h-[32px] w-[3px] bg-slate-800 absolute -left-[15px] top-[100px] rounded-l-lg"></div>
                    <div className="h-[46px] w-[3px] bg-slate-800 absolute -left-[15px] top-[140px] rounded-l-lg"></div>
                    <div className="h-[46px] w-[3px] bg-slate-800 absolute -left-[15px] top-[196px] rounded-l-lg"></div>
                    <div className="h-[64px] w-[3px] bg-slate-800 absolute -right-[15px] top-[160px] rounded-r-lg"></div>
                </>
            )}
            
            {/* Screen */}
            <div className="rounded-[2.5rem] overflow-hidden w-full h-full bg-white relative">
                {children}
            </div>
        </div>
    );
}
