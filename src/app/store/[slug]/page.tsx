import { STORE_ITEMS } from "@/data/store";
import StoreDetails from "@/components/store/StoreDetails";
import { Metadata } from "next";

export function generateStaticParams() {
    return STORE_ITEMS.map((item) => ({
        slug: item.id,
    }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
    const { slug } = await params;
    const item = STORE_ITEMS.find((p) => p.id === slug);
    
    if (!item) return { title: "Product Not Found" };

    return {
        title: `${item.name.en} | Medidesh Store`,
        description: item.description.en,
    };
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    return <StoreDetails slug={slug} />;
}
