"use client";

import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";

interface TimeLeft {
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
}

export default function Countdown() {
    const [timeLeft, setTimeLeft] = useState<TimeLeft>({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
    });

    useEffect(() => {
        // Target date: February 21st, 2026 (Shaheed Dibosh)
        const targetDate = new Date("2026-02-21T00:00:00").getTime();

        const timer = setInterval(() => {
            const now = new Date().getTime();
            const difference = targetDate - now;

            if (difference <= 0) {
                clearInterval(timer);
                return;
            }

            setTimeLeft({
                days: Math.floor(difference / (1000 * 60 * 60 * 24)),
                hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
                minutes: Math.floor((difference / 1000 / 60) % 60),
                seconds: Math.floor((difference / 1000) % 60),
            });
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    const TimeUnit = ({ value, label }: { value: number; label: string }) => (
        <div className="flex flex-col items-center mx-1.5 sm:mx-4">
            <div className="relative group">
                {/* Glow Effect */}
                <div className="absolute -inset-1 bg-gradient-to-r from-pharma-green-600 to-blue-500 rounded-2xl blur opacity-20 group-hover:opacity-40 transition duration-1000 group-hover:duration-200"></div>

                <div className="relative w-16 h-20 sm:w-28 sm:h-32 bg-slate-900/80 backdrop-blur-xl border border-white/10 rounded-2xl overflow-hidden flex items-center justify-center text-3xl sm:text-6xl font-bold text-white shadow-2xl font-orbitron tracking-tighter">
                    <AnimatePresence mode="popLayout">
                        <motion.span
                            key={value}
                            initial={{ y: "100%", opacity: 0, rotateX: 90 }}
                            animate={{ y: 0, opacity: 1, rotateX: 0 }}
                            exit={{ y: "-100%", opacity: 0, rotateX: -90 }}
                            transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
                            className="absolute"
                        >
                            {value.toString().padStart(2, "0")}
                        </motion.span>
                    </AnimatePresence>

                    {/* Horizontal Divider for Calendar Feel */}
                    <div className="absolute w-full h-px bg-white/10 top-1/2 left-0 z-20"></div>

                    {/* Shadow/Overlay for Depth */}
                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-b from-white/5 to-transparent pointer-events-none z-10"></div>
                    <div className="absolute bottom-0 left-0 w-full h-1/2 bg-black/20 rounded-b-2xl border-t border-white/5 z-0"></div>
                </div>
            </div>

            <span className="mt-3 text-[9px] sm:text-xs font-black text-pharma-green-500 uppercase font-orbitron">
                {label}
            </span>
        </div>
    );

    return (
        <div className="flex items-center justify-center">
            <TimeUnit value={timeLeft.days} label="দিন" />
            <TimeUnit value={timeLeft.hours} label="ঘণ্টা" />
            <TimeUnit value={timeLeft.minutes} label="মিনিট" />
            <TimeUnit value={timeLeft.seconds} label="সেকেন্ড" />
        </div>
    );
}
