import type { Metadata } from "next";
import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/layout/WhatsAppButton";
import HeroSection from "@/components/home/HeroSection";
import WhyChooseSection from "@/components/home/WhyChooseSection";
import StatsSection from "@/components/home/StatsSection";
import ProductsOverviewSection from "@/components/home/ProductsOverviewSection";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import CTASection from "@/components/home/CTASection";
import { OrganizationSchema } from "@/components/seo/StructuredData";

export const metadata: Metadata = {
  title: "Bhavani Store - Premium Agricultural Commodities | Since 1974",
  description:
    "Tamil Nadu's premier agricultural commodities trading house. 50 years of connecting farmers with vendors. Red chillies, cotton, paddy, neem seeds, tamarind & millets.",
  alternates: { canonical: "https://bhavanistore.in" },
};

export default function HomePage() {
  return (
    <>
      <OrganizationSchema />
      <Navigation />
      <main id="main-content" className="min-h-screen bg-background">
        <HeroSection />
        <WhyChooseSection />
        <StatsSection />
        <ProductsOverviewSection />
        <TestimonialsSection />
        <CTASection />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
