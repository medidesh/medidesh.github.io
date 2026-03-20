import LandingHeader from "@/components/landing/LandingHeader";
import LandingHero from "@/components/landing/LandingHero";
import ProblemSolution from "@/components/landing/ProblemSolution";
import FeaturesSection from "@/components/landing/FeaturesSection";
import TestimonialsSection from "@/components/landing/TestimonialsSection";
import PricingSection from "@/components/landing/PricingSection";
import DownloadSection from "@/components/landing/DownloadSection";
import FAQSection from "@/components/landing/FAQSection";
import CTASection from "@/components/landing/CTASection";
import LandingFooter from "@/components/landing/LandingFooter";

export default function Home() {
  return (
    <main className="bg-white dark:bg-slate-900 min-h-screen">
      <LandingHeader />
      <LandingHero />
      <ProblemSolution />
      <FeaturesSection />
      <DownloadSection />
      <TestimonialsSection />
      <PricingSection />
      <FAQSection />
      <CTASection />
      <LandingFooter />
    </main>
  );
}
