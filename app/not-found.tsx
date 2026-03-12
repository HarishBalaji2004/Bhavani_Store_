import Link from "next/link";
import type { Metadata } from "next";
import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "Page Not Found - 404",
  description: "The page you are looking for does not exist.",
  robots: { index: false },
};

export default function NotFound() {
  return (
    <>
      <Navigation />
      <main
        id="main-content"
        className="min-h-screen bg-background flex items-center justify-center"
      >
        <div className="text-center px-4 py-16">
          <div className="text-8xl font-bold text-primary/20 mb-4" aria-hidden="true">
            404
          </div>
          <h1 className="text-3xl font-serif font-bold text-foreground mb-4">
            Page Not Found
          </h1>
          <p className="text-muted-foreground max-w-md mx-auto mb-8">
            The page you&apos;re looking for doesn&apos;t exist. You may have
            mistyped the address or the page may have moved.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/"
              className="inline-flex items-center justify-center bg-primary hover:bg-primary/90 text-primary-foreground font-medium px-6 py-3 rounded-md transition-colors focus:outline-none focus:ring-4 focus:ring-primary/30"
            >
              Go Home
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center border border-border hover:border-primary text-foreground font-medium px-6 py-3 rounded-md transition-colors focus:outline-none focus:ring-4 focus:ring-primary/30"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
