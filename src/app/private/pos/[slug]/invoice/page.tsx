import { Suspense } from "react";
import { pharmacies } from "@/data/pharmacies";
import InvoiceClientContent from "./InvoiceClientContent";

export async function generateStaticParams() {
    return pharmacies.map((pharmacy) => ({
        slug: pharmacy.slug,
    }));
}

export default function InvoicePage() {
    return (
        <main className="min-h-screen bg-slate-50 py-12 px-4">
            <Suspense fallback={<div className="text-center py-20 font-bold text-slate-500">ইনভয়েস লোড হচ্ছে...</div>}>
                <InvoiceClientContent />
            </Suspense>
        </main>
    );
}
