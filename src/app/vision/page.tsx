import LandingHeader from "@/components/landing/LandingHeader";
import LandingFooter from "@/components/landing/LandingFooter";
import VisionSection from "@/components/landing/VisionSection";

export default function VisionPage() {
    return (
        <main className="bg-white min-h-screen">
            <LandingHeader />
            <div className="pt-20">
                <VisionSection />
            </div>
            <div className="pb-20 container mx-auto px-6 lg:px-12 max-w-3xl text-center">
                <h2 className="text-2xl font-bold mb-4">আমাদের যাত্রা</h2>
                <p className="text-lg text-slate-600 leading-relaxed">
                    ২০২৩ সালে একটি ছোট টিম নিয়ে আমাদের যাত্রা শুরু হয়। আজ আমরা হাজারো ফার্মেসির আস্থার প্রতীক।
                    আমরা প্রতিনিয়ত কাজ করছি নতুন প্রযুক্তি নিয়ে আসার জন্য।
                </p>
            </div>
            <LandingFooter />
        </main>
    );
}
