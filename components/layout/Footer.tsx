"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Wheat, ArrowRight } from "lucide-react";
import { NAV_ITEMS, BUSINESS } from "@/lib/data";
import { Reveal, Stagger, StaggerItem } from "@/components/ui/Motion";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative bg-deep text-primary-foreground overflow-hidden" role="contentinfo">
      {/* Gold top border */}
      <div className="h-px bg-gradient-to-r from-transparent via-gold/60 to-transparent" />

      {/* Background texture */}
      <div className="absolute inset-0 opacity-5 pointer-events-none"
        style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='1' fill-rule='evenodd'%3E%3Cpath d='M0 40L40 0H20L0 20M40 40V20L20 40'/%3E%3C/g%3E%3C/svg%3E\")" }}
      />

      {/* Glow orb */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-24 bg-gradient-to-b from-gold/40 to-transparent" aria-hidden="true" />

      <div className="relative max-w-7xl mx-auto px-5 sm:px-8 pt-16 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-12">

          {/* Brand */}
          <Reveal variant="slideLeft" className="md:col-span-5">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-11 h-11 bg-gradient-hero rounded-xl flex items-center justify-center shadow-gold">
                <Wheat className="h-5 w-5 text-gold" />
              </div>
              <div>
                <p className="font-display text-xl font-bold leading-tight">{BUSINESS.name}</p>
                <p className="text-xs text-white/40">Est. {BUSINESS.established} · 50 Years of Trust</p>
              </div>
            </div>
            <p className="text-sm text-white/55 leading-relaxed mb-6 max-w-sm">
              Leading agricultural commodities trader in Tamil Nadu — bridging farmers and vendors through transparency, quality, and trust for five decades.
            </p>
            <div className="inline-flex items-center gap-2 border border-white/12 rounded-lg px-3 py-1.5 text-[11px] text-white/40">
              GST: {BUSINESS.gst}
            </div>
          </Reveal>

          {/* Nav */}
          <div className="md:col-span-3">
            <Reveal delay={0.1}>
              <h2 className="font-semibold text-xs tracking-[0.15em] uppercase text-white/50 mb-5">Pages</h2>
            </Reveal>
            <Stagger className="space-y-2">
              {NAV_ITEMS.map((item) => (
                <StaggerItem key={item.href} variant="slideLeft">
                  <Link href={item.href}
                    className="group flex items-center gap-2 text-sm text-white/50 hover:text-white transition-colors duration-200"
                  >
                    <ArrowRight className="h-3 w-3 opacity-0 group-hover:opacity-100 -translate-x-1 group-hover:translate-x-0 transition-all duration-200 text-gold" />
                    {item.label}
                  </Link>
                </StaggerItem>
              ))}
            </Stagger>
          </div>

          {/* Contact */}
          <Reveal variant="slideRight" delay={0.15} className="md:col-span-4">
            <h2 className="font-semibold text-xs tracking-[0.15em] uppercase text-white/50 mb-5">Contact</h2>
            <address className="not-italic space-y-3.5">
              {[
                { icon: MapPin, text: `${BUSINESS.address.street}, ${BUSINESS.address.area}, ${BUSINESS.address.city}`, href: BUSINESS.mapsUrl, ext: true },
                { icon: Phone, text: BUSINESS.phone, href: `tel:${BUSINESS.phone.replace(/\s/g, "")}`, ext: false },
                { icon: Mail, text: BUSINESS.email, href: `mailto:${BUSINESS.email}`, ext: false },
              ].map(({ icon: Icon, text, href, ext }, i) => (
                <motion.a key={i} href={href} target={ext ? "_blank" : undefined} rel={ext ? "noopener noreferrer" : undefined}
                  className="flex items-start gap-3 text-sm text-white/50 hover:text-white transition-colors group"
                  whileHover={{ x: 3 }} transition={{ type: "spring", stiffness: 400, damping: 20 }}
                >
                  <Icon className="h-4 w-4 text-gold/50 group-hover:text-gold transition-colors mt-0.5 flex-shrink-0" />
                  <span>{text}</span>
                </motion.a>
              ))}
            </address>
          </Reveal>
        </div>

        {/* Bottom */}
        <div className="h-px bg-white/8 mb-6" />
        <div className="flex flex-col sm:flex-row justify-between items-center gap-2 text-[11px] text-white/30">
          <p>&copy; {year} {BUSINESS.name}. All rights reserved.</p>
          <p>Agricultural Commodity Traders Since 1974</p>
        </div>
      </div>
    </footer>
  );
}
