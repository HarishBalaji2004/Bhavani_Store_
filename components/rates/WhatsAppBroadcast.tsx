"use client";

import { MessageCircle } from "lucide-react";
import { BUSINESS } from "@/lib/data";
import { formatWhatsAppUrl } from "@/lib/utils";

/**
 * WhatsApp broadcast sign-up CTA section
 */
export default function WhatsAppBroadcast() {
  const handleClick = () => {
    const url = formatWhatsAppUrl(
      "Hello! I would like to receive daily rate updates for agricultural commodities. Please share pricing and market information.",
      BUSINESS.whatsappNumber
    );
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <section
      className="py-16 bg-warm-beige"
      aria-labelledby="broadcast-heading"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2
          id="broadcast-heading"
          className="text-3xl font-serif font-bold text-foreground mb-4"
        >
          Stay Updated with Live Rates
        </h2>
        <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
          Contact us on WhatsApp to receive daily rate updates, market trends, and
          special announcements directly on your phone.
        </p>
        <button
          onClick={handleClick}
          className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#20b858] text-white font-semibold px-8 py-3 rounded-md text-lg transition-colors focus:outline-none focus:ring-4 focus:ring-[#25D366]/30"
          aria-label="Contact us on WhatsApp for daily rate updates"
        >
          <MessageCircle className="h-5 w-5" aria-hidden="true" />
          Contact for Daily Updates
        </button>
        <p className="mt-6 text-sm text-muted-foreground">
          ✓ Daily market rates &nbsp;✓ Trend analysis &nbsp;✓ Quality updates
          &nbsp;✓ Market news
        </p>
      </div>
    </section>
  );
}
