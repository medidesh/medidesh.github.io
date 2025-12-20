import LandingHeader from "@/components/landing/LandingHeader";
import LandingFooter from "@/components/landing/LandingFooter";

export default function TermsPage() {
    return (
        <main className="bg-white min-h-screen">
            <LandingHeader />
            <div className="pt-32 pb-20 container mx-auto px-6 lg:px-12 max-w-4xl">
                <h1 className="text-4xl font-bold mb-8 text-slate-900">শর্তাবলী</h1>
                <div className="prose prose-lg prose-slate max-w-none">
                    <p>
                        মেডিদেশ ব্যবহার করার জন্য আপনাকে স্বাগতম। আমাদের সার্ভিস ব্যবহার করার
                        মাধ্যমে আপনি নিচের শর্তাবলীতে সম্মত হচ্ছেন।
                    </p>
                    <h3>১. সাধারণ শর্তাবলী</h3>
                    <p>
                        আমরা যেকোনো সময় সার্ভিসের শর্ত পরিবর্তন করার অধিকার রাখি। অ্যাপটি
                        ব্যবহারের মাধ্যমে আপনি মেনে নিচ্ছেন যে আপনি একজন ফার্মেসি মালিক বা
                        অনুমোদিত ব্যক্তি।
                    </p>
                    <h3>২. অ্যাকাউন্ট নিরাপত্তা</h3>
                    <p>
                        আপনার অ্যাকাউন্টের পাসওয়ার্ড এবং তথ্যের গোপনীয়তা রক্ষা করার দায়িত্ব
                        আপনার।
                    </p>
                    {/* Add more content as needed from legacy terms.html */}
                </div>
            </div>
            <LandingFooter />
        </main>
    );
}
