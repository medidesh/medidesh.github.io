import { PharmacyData } from "@/types/pharmacy";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/pharmacy/HeroSection";
// import TrustStats from "@/components/pharmacy/TrustStats"; // Less priority
// import UploadPrescription from "@/components/pharmacy/UploadPrescription"; // Less priority
import ServicesGrid from "@/components/pharmacy/ServicesGrid";
import EmergencyServices from "@/components/pharmacy/EmergencyServices";
// import VisitingDoctors from "@/components/pharmacy/VisitingDoctors";
// import SpecialOffers from "@/components/pharmacy/SpecialOffers";
import ProductCategories from "@/components/pharmacy/ProductCategories";
import OperatingHours from "@/components/pharmacy/OperatingHours";
import HealthTips from "@/components/pharmacy/HealthTips";
import AboutSection from "@/components/pharmacy/AboutSection";
import ContactSection from "@/components/pharmacy/ContactSection";
import PaymentPartners from "@/components/pharmacy/PaymentPartners";
import NoticeBoard from "@/components/pharmacy/NoticeBoard";
import AppIntegration from "@/components/pharmacy/AppIntegration";
import PolicySection from "@/components/pharmacy/PolicySection";

interface PharmacyTemplateProps {
    pharmacy: PharmacyData;
}

export default function PharmacyTemplate({ pharmacy }: PharmacyTemplateProps) {
    return (
        <main className="bg-slate-50 min-h-screen font-sans">
            <Header pharmacy={pharmacy} />

            <HeroSection pharmacy={pharmacy} />
            <NoticeBoard notices={pharmacy.notices} />
            <AppIntegration slug={pharmacy.slug} />
            <EmergencyServices />
            <ProductCategories />

            <ServicesGrid />
            <HealthTips />
            <AboutSection pharmacy={pharmacy} />
            <PolicySection returnPolicy={pharmacy.returnPolicy} />
            <ContactSection pharmacy={pharmacy} />
            <PaymentPartners />

            <Footer pharmacy={pharmacy} />
        </main>
    );
}
