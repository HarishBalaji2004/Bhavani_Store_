"use client";

import { useState } from "react";
import Link from "next/link";
import { MessageCircle, Search } from "lucide-react";
import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/layout/WhatsAppButton";
import PageHero from "@/components/ui/PageHero";
import FAQAccordion from "@/components/ui/FAQAccordion";
import SectionHeader from "@/components/ui/SectionHeader";
import { FAQS, BUSINESS } from "@/lib/data";
import { formatWhatsAppUrl } from "@/lib/utils";

const CATEGORIES = ["All", ...Array.from(new Set(FAQS.map((f) => f.category)))];

export default function FAQPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filtered = FAQS.filter((faq) => {
    const matchesCategory =
      activeCategory === "All" || faq.category === activeCategory;
    const matchesSearch =
      searchQuery.trim() === "" ||
      faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const whatsappUrl = formatWhatsAppUrl(
    "Hello! I have a question about your agricultural commodity trading services.",
    BUSINESS.whatsappNumber
  );

  return (
    <>
      <Navigation />
      <main id="main-content" className="min-h-screen bg-background">
        <PageHero
          kicker={`${FAQS.length} Questions Answered`}
          title="Frequently Asked Questions"
          description="Everything you need to know about trading agricultural commodities with Bhavani Store."
          breadcrumbs={[{ label: "FAQ" }]}
        />

        <section className="py-16">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Search */}
            <div className="relative mb-7">
              <Search
                className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground"
                aria-hidden="true"
              />
              <input
                type="search"
                placeholder="Search questions..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                aria-label="Search frequently asked questions"
                className="w-full pl-12 pr-4 py-3.5 bg-card border border-border rounded-xl text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring shadow-soft transition-shadow focus:shadow-warm"
              />
            </div>

            {/* Category filters */}
            <div
              className="flex flex-wrap gap-2 mb-8"
              role="group"
              aria-label="Filter FAQs by category"
            >
              {CATEGORIES.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  aria-pressed={activeCategory === cat}
                  className={`px-4 py-2 rounded-xl text-sm font-semibold transition-all focus:outline-none focus:ring-2 focus:ring-ring ${
                    activeCategory === cat
                      ? "bg-earth-brown text-primary-foreground shadow-soft"
                      : "bg-card border border-border text-muted-foreground hover:text-foreground hover:border-earth-brown/50"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Results count */}
            <p
              className="text-xs text-muted-foreground mb-5 font-medium"
              aria-live="polite"
            >
              {filtered.length === 0
                ? "No questions found."
                : `${filtered.length} question${filtered.length !== 1 ? "s" : ""}`}
              {searchQuery && ` matching "${searchQuery}"`}
            </p>

            {filtered.length > 0 ? (
              <FAQAccordion faqs={filtered} />
            ) : (
              <div className="text-center py-16 bg-card rounded-2xl border border-border">
                <p className="text-4xl mb-4" aria-hidden="true">🔍</p>
                <p className="text-muted-foreground mb-4">
                  No questions found for your search.
                </p>
                <button
                  onClick={() => {
                    setSearchQuery("");
                    setActiveCategory("All");
                  }}
                  className="text-primary hover:underline text-sm font-medium"
                >
                  Clear all filters
                </button>
              </div>
            )}
          </div>
        </section>

        {/* Still have questions */}
        <section className="py-20 bg-warm-beige dark:bg-muted/10" aria-labelledby="still-questions-heading">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <SectionHeader
              kicker="Still Curious?"
              title="Have More Questions?"
              subtitle="Our team is available to help you with any queries about commodities, pricing, quality, or trading procedures."
              id="still-questions-heading"
            />
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 bg-[#25D366] hover:bg-[#20b858] text-white font-bold px-7 py-3.5 rounded-xl transition-all hover:shadow-lg focus:outline-none focus:ring-4 focus:ring-[#25D366]/30"
              >
                <MessageCircle className="h-5 w-5" aria-hidden="true" />
                Ask on WhatsApp
              </a>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2.5 bg-earth-brown hover:bg-earth-brown/90 text-primary-foreground font-bold px-7 py-3.5 rounded-xl transition-all hover:shadow-warm focus:outline-none focus:ring-4 focus:ring-earth-brown/30"
              >
                Send an Enquiry
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
