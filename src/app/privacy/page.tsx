import LandingHeader from "@/components/landing/LandingHeader";
import LandingFooter from "@/components/landing/LandingFooter";

export default function PrivacyPage() {
    return (
        <main className="bg-white min-h-screen">
            <LandingHeader />
            <div className="pt-32 pb-20 container mx-auto px-6 lg:px-12 max-w-4xl">
                <h1 className="text-4xl font-bold mb-8 text-slate-900">গোপনীয়তা নীতি</h1>
                <div className="prose prose-lg prose-slate max-w-none">
                    <p>
                        আপনার তথ্যের গোপনীয়তা আমাদের কাছে অত্যন্ত গুরুত্বপূর্ণ। এই পলিসিতে
                        বর্ণনা করা হয়েছে আমরা কীভাবে আপনার তথ্য সংগ্রহ ও ব্যবহার করি।
                    </p>
                    <h3>১. তথ্য সংগ্রহ</h3>
                    <p>
                        আমরা আপনার নাম, ফোন নম্বর, এবং ফার্মেসির তথ্য সংগ্রহ করি শুধুমাত্র
                        সার্ভিস প্রদানের উদ্দেশ্যে।
                    </p>
                    <h3>২. তথ্য শেয়ারিং</h3>
                    <p>
                        আমরা আপনার অনুমতি ছাড়া তৃতীয় কোনো পক্ষের সাথে আপনার ব্যক্তিগত তথ্য
                        শেয়ার করি না।
                    </p>
                    {/* Add more content as needed from legacy privacy.html */}
                </div>
            </div>
            <LandingFooter />
        </main>
    );
}
