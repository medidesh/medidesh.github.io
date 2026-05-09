export function ArrowDoodle({ className = "" }: { className?: string }) {
    return (
        <svg className={className} viewBox="0 0 200 100" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
                d="M10 10C20 60 50 120 80 50C90 20 60 10 40 40C20 80 120 100 180 60"
                stroke="currentColor"
                strokeWidth="3"
                strokeLinecap="round"
                fill="none"
            />
            <path
                d="M170 50L185 58L175 70"
                stroke="currentColor"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
                fill="none"
            />
        </svg>
    );
}

export function SparkleLines({ className = "" }: { className?: string }) {
    return (
        <svg className={className} viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M40 10L35 25" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
            <path d="M50 20L40 30" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
            <path d="M55 35L42 38" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
        </svg>
    );
}

export function DotGrid({ className = "" }: { className?: string }) {
    return (
        <svg className={className} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
            {Array.from({ length: 5 }).map((_, row) =>
                Array.from({ length: 5 }).map((_, col) => (
                    <circle key={`${row}-${col}`} cx={10 + col * 20} cy={10 + row * 20} r="2" fill="currentColor" opacity="0.15" />
                ))
            )}
        </svg>
    );
}

export function WaveDecor({ className = "" }: { className?: string }) {
    return (
        <svg className={className} viewBox="0 0 400 60" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
            <path d="M0 30C80 0 160 60 240 30C320 0 400 30 400 30V60H0V30Z" fill="currentColor" />
        </svg>
    );
}
