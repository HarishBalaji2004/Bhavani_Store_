import type { Metadata } from "next";
import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/layout/WhatsAppButton";
import PageHero from "@/components/ui/PageHero";
import ContactInfoCards from "@/components/contact/ContactInfoCards";
import ContactForm from "@/components/contact/ContactForm";
import BusinessInfo from "@/components/contact/BusinessInfo";
import QuickContactCTA from "@/components/contact/QuickContactCTA";
import { BreadcrumbSchema } from "@/components/seo/StructuredData";

export const metadata: Metadata = {
  title: "Contact — Get Agricultural Commodity Quotes",
  description: "Contact Bhavani Store for commodity pricing and quotes. Call +91 93603 33025, WhatsApp or visit us in Paramakudi, Tamil Nadu.",
  alternates: { canonical: "https://bhavanistore.in/contact" },
};

export default function ContactPage() {
  return (
    <>
      <BreadcrumbSchema items={[{ name: "Home", url: "/" }, { name: "Contact", url: "/contact" }]} />
      <Navigation />
      <main id="main-content" className="min-h-screen bg-background">
        <PageHero
          kicker="We respond within 2 hours"
          title="Get in Touch"
          description="Ready to discuss your agricultural commodity requirements? We're here to help with competitive pricing and reliable service."
        />
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-5 sm:px-8">
            <ContactInfoCards />
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
              <ContactForm />
              <BusinessInfo />
            </div>
          </div>
        </section>
        <QuickContactCTA />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
