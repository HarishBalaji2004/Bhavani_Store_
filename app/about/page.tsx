import type { Metadata } from "next";
import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/layout/WhatsAppButton";
import PageHero from "@/components/ui/PageHero";
import AboutStory from "@/components/about/AboutStory";
import AboutValues from "@/components/about/AboutValues";
import AboutMission from "@/components/about/AboutMission";
import { BreadcrumbSchema } from "@/components/seo/StructuredData";

export const metadata: Metadata = {
  title: "About Us — 50 Years of Agricultural Trading Excellence",
  description: "Established in 1974 in Paramakudi, Tamil Nadu. Bhavani Store is a GST-registered agricultural commodities trading house with 50 years of trust.",
  alternates: { canonical: "https://bhavanistore.in/about" },
};

export default function AboutPage() {
  return (
    <>
      <BreadcrumbSchema items={[{ name: "Home", url: "/" }, { name: "About Us", url: "/about" }]} />
      <Navigation />
      <main id="main-content" className="min-h-screen bg-background">
        <PageHero
          kicker="Est. 1974 · Paramakudi, Tamil Nadu"
          title="Our Legacy of Trust"
          description="For five decades, Bhavani Store has been the bridge between Tamil Nadu's farmers and vendors, fostering prosperity through agricultural excellence."
        />
        <AboutStory />
        <AboutValues />
        <AboutMission />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
