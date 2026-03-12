import type { Metadata, Viewport } from "next";
import { ThemeProvider } from "@/components/layout/ThemeProvider";
import { Toaster } from "@/components/ui/Toaster";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://bhavanistore.in"),
  title: {
    default: "Bhavani Store — Premium Agricultural Commodities | Since 1974",
    template: "%s | Bhavani Store",
  },
  description:
    "Bhavani Store is Tamil Nadu's premier agricultural commodities trading house. Established in 1974, connecting farmers with vendors. Red chillies, cotton, paddy, neem seeds, tamarind & millets.",
  keywords: ["agricultural commodities","Tamil Nadu","red chillies","Guntur chillies","raw cotton","paddy rice","neem seeds","tamarind","millets","wholesale agricultural trader","Paramakudi","Bhavani Store"],
  authors: [{ name: "Bhavani Store", url: "https://bhavanistore.in" }],
  creator: "Bhavani Store",
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, "max-image-preview": "large" } },
  openGraph: {
    type: "website", locale: "en_IN", url: "https://bhavanistore.in", siteName: "Bhavani Store",
    title: "Bhavani Store — Premium Agricultural Commodities | Since 1974",
    description: "Tamil Nadu's trusted agricultural commodities trading house for 50 years.",
    images: [{ url: "/images/hero-image.jpg", width: 1200, height: 630, alt: "Bhavani Store" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Bhavani Store — Premium Agricultural Commodities",
    description: "Tamil Nadu's trusted agricultural commodities trading house for 50 years.",
    images: ["/images/hero-image.jpg"],
  },
  alternates: { canonical: "https://bhavanistore.in" },
};

export const viewport: Viewport = {
  width: "device-width", initialScale: 1, maximumScale: 5,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#7a3d1a" },
    { media: "(prefers-color-scheme: dark)", color: "#1a0d07" },
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="manifest" href="/manifest.json" />
        <link rel="apple-touch-icon" href="/icons/icon-192.png" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="min-h-screen bg-background antialiased overflow-x-hidden">
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:bg-primary focus:text-primary-foreground focus:px-4 focus:py-2 focus:rounded-md">
            Skip to main content
          </a>
          {children}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
