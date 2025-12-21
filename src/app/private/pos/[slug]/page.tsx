import { pharmacies } from "@/data/pharmacies";
import PharmacyTemplate from "@/components/templates/PharmacyTemplate";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
    return pharmacies.map((pharmacy) => ({
        slug: pharmacy.slug,
    }));
}

export default async function PharmacyPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const pharmacy = pharmacies.find((p) => p.slug === slug);

    if (!pharmacy) {
        return notFound();
    }

    return <PharmacyTemplate pharmacy={pharmacy} />;
}
