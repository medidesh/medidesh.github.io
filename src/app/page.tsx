import LandingHeader from "@/components/landing/LandingHeader";
import LandingHero from "@/components/landing/LandingHero";
import FeaturesSection from "@/components/landing/FeaturesSection";
import MapFeature from "@/components/landing/MapFeature";
import AIFeatures from "@/components/landing/AIFeatures";
import TestimonialsSection from "@/components/landing/TestimonialsSection";
import VisionSection from "@/components/landing/VisionSection";
import ComparisonSection from "@/components/landing/ComparisonSection"; // New import
import PricingSection from "@/components/landing/PricingSection";
import FAQSection from "@/components/landing/FAQSection";
import MediaCoverage from "@/components/landing/MediaCoverage";
import CTASection from "@/components/landing/CTASection";
import ProblemSolution from "@/components/landing/ProblemSolution";
import DownloadSection from "@/components/landing/DownloadSection";
import LandingFooter from "@/components/landing/LandingFooter";

export default function Home() {
  return (
    <main className="bg-white min-h-screen">
      <LandingHeader />
      <LandingHero />
      <FeaturesSection />
      <MapFeature />
      <ComparisonSection />
      <AIFeatures />
      <ProblemSolution />
      <TestimonialsSection />
      <VisionSection />
      <PricingSection />
      <DownloadSection />
      <FAQSection />
      <MediaCoverage />
      <CTASection />
      <LandingFooter />
    </main>
  );
}
