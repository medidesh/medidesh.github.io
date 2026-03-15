"use client";

import { useState } from "react";

interface PersonPhotoProps {
    src: string;
    name: string;
    initials: string;
    fallbackColor: string;
    size?: "sm" | "md" | "lg";
}

const sizeMap = {
    sm: "w-16 h-16 text-lg",
    md: "w-24 h-24 text-2xl",
    lg: "w-32 h-32 text-3xl",
};

export default function PersonPhoto({ src, name, initials, fallbackColor, size = "lg" }: PersonPhotoProps) {
    const [hasError, setHasError] = useState(false);
    const sizeClass = sizeMap[size];

    return (
        <div className={`${sizeClass} rounded-full overflow-hidden ring-4 ring-white shadow-md shrink-0 relative`}>
            {hasError ? (
                <div className={`w-full h-full ${fallbackColor} flex items-center justify-center text-white font-black`}>
                    {initials}
                </div>
            ) : (
                <img
                    src={src}
                    alt={name}
                    className="w-full h-full object-cover"
                    onError={() => setHasError(true)}
                />
            )}
        </div>
    );
}
