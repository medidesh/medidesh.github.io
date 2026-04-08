"use client";

import { motion } from "framer-motion";
import { IconProps } from "@phosphor-icons/react";
import React from "react";

interface SectionBadgeProps {
    icon?: React.ComponentType<IconProps>;
    text: string;
    className?: string;
}

export default function SectionBadge({ icon: Icon, text, className = "" }: SectionBadgeProps) {
    return (
        <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded bg-white border border-slate-200 text-slate-600 dark:text-slate-400 text-xs font-bold uppercase tracking-wider mb-5 shadow-sm group ${className}`}
        >
            {Icon && (
                <div className="text-medidesh-teal-500 group-hover:scale-110 transition-transform duration-300">
                    <Icon size={14} weight="fill" />
                </div>
            )}
            <span>{text}</span>
        </motion.div>
    );
}
