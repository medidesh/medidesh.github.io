import LandingHeader from "@/components/landing/LandingHeader";
import LandingFooter from "@/components/landing/LandingFooter";
import StoreHero from "@/components/store/StoreHero";
import StoreGrid from "@/components/store/StoreGrid";
import StoreBenefits from "@/components/store/StoreBenefits";
import StoreCTA from "@/components/store/StoreCTA";

export const metadata = {
    title: "Store - Premium Gadgets for Your Pharmacy",
    description: "Explore our curated collection of premium POS printers and pharmacy gadgets, brought to you by Medidesh in collaboration with our verified partners.",
};

export default function StorePage() {
    return (
        <main className="bg-slate-50 dark:bg-slate-950 min-h-screen flex flex-col">
            <LandingHeader />
            <StoreHero />

            {/* Store Grid Section */}
            <section className="py-16 lg:py-24">
                <StoreGrid />
            </section>
            
            {/* Added Value Sections */}
            <StoreBenefits />
            <StoreCTA />

            <LandingFooter />
        </main>
    );
}
