import type { Metadata } from "next";
import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/layout/WhatsAppButton";
import PageHero from "@/components/ui/PageHero";
import ProductGrid from "@/components/products/ProductGrid";
import QualityAssuranceSection from "@/components/products/QualityAssuranceSection";
import { BreadcrumbSchema } from "@/components/seo/StructuredData";

export const metadata: Metadata = {
  title: "Products — Red Chillies, Cotton, Paddy & More",
  description: "Premium agricultural commodities: Red Dry Chillies, Guntur Chillies, Raw Cotton, Paddy Rice, Neem Seeds, Tamarind, Tamarind Seeds, and Millets. Direct from Tamil Nadu farmers.",
  alternates: { canonical: "https://bhavanistore.in/products" },
};

export default function ProductsPage() {
  return (
    <>
      <BreadcrumbSchema items={[{ name: "Home", url: "/" }, { name: "Products", url: "/products" }]} />
      <Navigation />
      <main id="main-content" className="min-h-screen bg-background">
        <PageHero
          kicker="8 Premium Categories"
          title="Our Agricultural Products"
          description="Quality commodities sourced directly from farmers, ensuring freshness, authenticity, and competitive pricing for all your trading needs."
        />
        <ProductGrid />
        <QualityAssuranceSection />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
