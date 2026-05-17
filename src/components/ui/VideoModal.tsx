"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X } from "@phosphor-icons/react";
import React, { useEffect } from "react";

interface VideoModalProps {
    isOpen: boolean;
    onClose: () => void;
    videoUrl: string;
}

export default function VideoModal({ isOpen, onClose, videoUrl }: VideoModalProps) {
    // Prevent body scrolling when modal is open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "auto";
        }
        return () => {
            document.body.style.overflow = "auto";
        };
    }, [isOpen]);

    // Close on Escape key
    useEffect(() => {
        const handleEsc = (e: KeyboardEvent) => {
            if (e.key === "Escape") onClose();
        };
        window.addEventListener("keydown", handleEsc);
        return () => window.removeEventListener("keydown", handleEsc);
    }, [onClose]);

    return (
        <AnimatePresence>
            {isOpen && (
                <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4 sm:p-10">
                    {/* Dark Backdrop with Blur */}
                    <motion.div 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="absolute inset-0 bg-slate-950/90 backdrop-blur-sm"
                    />

                    {/* Close Button — Positioned outside of Video Box at Top Right */}
                    <motion.button 
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        onClick={onClose}
                        className="absolute top-4 right-4 sm:top-8 sm:right-8 z-[10000] flex items-center justify-center p-3 sm:p-4 rounded-full bg-slate-900/80 hover:bg-white hover:text-black text-white backdrop-blur border border-white/20 transition-all duration-300 shadow-2xl group"
                    >
                        <X size={24} weight="bold" className="group-hover:rotate-90 transition-transform duration-300" />
                    </motion.button>

                    {/* Modal Content */}
                    <motion.div 
                        initial={{ opacity: 0, scale: 0.95, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: 20 }}
                        transition={{ type: "spring", damping: 25, stiffness: 300 }}
                        className="relative w-full max-w-5xl aspect-video bg-black rounded-xl overflow-hidden shadow-2xl ring-1 ring-white/10 z-50"
                    >

                        {/* YouTube Iframe */}
                        <iframe 
                            className="w-full h-full"
                            src={`${videoUrl}${videoUrl.includes('?') ? '&' : '?'}autoplay=1&mute=0&rel=0&modestbranding=1&enablejsapi=1`}
                            title="Medidesh Video Player"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                            allowFullScreen
                        />
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
}
