"use client";

import { useState } from "react";
import { MagnifyingGlass, CheckCircle, Warning, XCircle } from "@phosphor-icons/react/dist/ssr";

// Mock Data for Medicine Search (Ideally this would come from a larger JSON or API)
const medicineStock = [
    { name: "Napa Extra", status: "Available" },
    { name: "Sergel 20mg", status: "Available" },
    { name: "Alatrol", status: "Available" },
    { name: "Monas 10", status: "Limited" },
    { name: "Ace Plus", status: "Available" },
    { name: "Maxpro 20", status: "Out of Stock" },
    { name: "Tylace", status: "Available" },
    { name: "Fexo 120", status: "Available" },
    { name: "Bizoran 5/20", status: "Limited" },
    { name: "Napa Syrup", status: "Out of Stock" },
];

export default function MedicineSearch() {
    const [searchTerm, setSearchTerm] = useState("");

    const filteredMedicines = medicineStock.filter((med) =>
        med.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const getStatusBadge = (status: string) => {
        switch (status) {
            case "Available":
                return (
                    <span className="inline-flex items-center gap-1 text-xs font-bold px-2 py-1 rounded-full bg-green-100 text-green-700">
                        <CheckCircle weight="fill" /> আছে
                    </span>
                );
            case "Limited":
                return (
                    <span className="inline-flex items-center gap-1 text-xs font-bold px-2 py-1 rounded-full bg-yellow-100 text-yellow-700">
                        <Warning weight="fill" /> সীমিত
                    </span>
                );
            case "Out of Stock":
                return (
                    <span className="inline-flex items-center gap-1 text-xs font-bold px-2 py-1 rounded-full bg-red-100 text-red-700">
                        <XCircle weight="fill" /> নেই
                    </span>
                );
            default:
                return null;
        }
    };

    return (
        <section id="search" className="py-12 bg-white">
            <div className="container mx-auto px-4 lg:px-8">
                <div className="max-w-3xl mx-auto text-center mb-8">
                    <h2 className="text-2xl lg:text-3xl font-bold text-slate-900 mb-3">
                        ঔষধ খুঁজুন
                    </h2>
                    <p className="text-slate-500">
                        আপনার প্রয়োজনীয় ঔষধ স্টকে আছে কিনা দেখে নিন। (এখানে মূল্য দেওয়া নেই)
                    </p>
                </div>

                <div className="max-w-2xl mx-auto">
                    <div className="relative mb-8">
                        <input
                            type="text"
                            placeholder="ওষুধের নাম লিখুন (যেমন: Napa)..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="w-full px-6 py-4 rounded-xl border-2 border-slate-200 focus:border-pharma-green-500 focus:outline-none pl-12 text-lg shadow-sm"
                        />
                        <MagnifyingGlass
                            size={24}
                            className="absolute left-4 top-1/2 transform -translate-y-1/2 text-slate-400"
                        />
                    </div>

                    <div className="bg-slate-50 rounded-xl border border-slate-200 overflow-hidden max-h-[400px] overflow-y-auto">
                        {filteredMedicines.length > 0 ? (
                            <table className="w-full text-left">
                                <thead className="bg-slate-100 text-slate-600 font-bold text-sm uppercase">
                                    <tr>
                                        <th className="p-4">ঔষধের নাম</th>
                                        <th className="p-4 text-right">অবস্থা</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-slate-200">
                                    {filteredMedicines.map((med, index) => (
                                        <tr key={index} className="hover:bg-white transition-colors">
                                            <td className="p-4 font-bold text-slate-800">{med.name}</td>
                                            <td className="p-4 text-right">{getStatusBadge(med.status)}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        ) : (
                            <div className="p-8 text-center text-slate-500">
                                কোনো ঔষধ পাওয়া যায়নি। দয়া করে নাম চেক করুন অথবা আমাদের কল করুন।
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
}
