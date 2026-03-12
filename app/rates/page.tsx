import type { Metadata } from "next";
import { Calendar } from "lucide-react";
import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/layout/WhatsAppButton";
import PageHero from "@/components/ui/PageHero";
import MarketSummaryBar from "@/components/rates/MarketSummaryBar";
import RatesTable from "@/components/rates/RatesTable";
import RatesDisclaimer from "@/components/rates/RatesDisclaimer";
import WhatsAppBroadcast from "@/components/rates/WhatsAppBroadcast";
import { BreadcrumbSchema } from "@/components/seo/StructuredData";
import { RATES } from "@/lib/data";
import { formatIndianDate } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Today's Rates — Live Agricultural Commodity Prices",
  description: "Daily updated market rates for Red Chillies, Cotton, Paddy, Neem Seeds, Tamarind and Millets in Tamil Nadu.",
  alternates: { canonical: "https://bhavanistore.in/rates" },
};

export default function DailyRatesPage() {
  const today = formatIndianDate();
  return (
    <>
      <BreadcrumbSchema items={[{ name: "Home", url: "/" }, { name: "Daily Rates", url: "/rates" }]} />
      <Navigation />
      <main id="main-content" className="min-h-screen bg-background">
        <PageHero
          kicker="Updated Daily"
          title="Today's Market Rates"
          description="Live pricing for agricultural commodities updated every morning. Make informed trading decisions with real-time market insights."
        />

        {/* Date strip */}
        <div className="bg-earth/85 text-primary-foreground text-center py-2.5 text-sm font-medium">
          <span className="inline-flex items-center gap-2">
            <Calendar className="h-4 w-4" />
            <time dateTime={new Date().toISOString().split("T")[0]}>{today}</time>
          </span>
        </div>

        <MarketSummaryBar rates={RATES} />

        <section className="py-16">
          <div className="max-w-7xl mx-auto px-5 sm:px-8 space-y-6">
            <div>
              <h2 className="text-display-sm font-display font-bold text-foreground mb-1">Current Market Rates</h2>
              <p className="text-muted-foreground text-sm">Rates are indicative — contact us for confirmed pricing.</p>
            </div>
            <RatesTable />
            <RatesDisclaimer />
          </div>
        </section>

        <WhatsAppBroadcast />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
