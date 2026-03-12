"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { MessageCircle, Phone, Mail } from "lucide-react";
import { Reveal } from "@/components/ui/Motion";
import { BUSINESS } from "@/lib/data";
import { formatWhatsAppUrl } from "@/lib/utils";

export default function QuickContactCTA() {
  const waUrl = formatWhatsAppUrl("Hello! I'm interested in your agricultural commodities. Please share more details.", BUSINESS.whatsappNumber);
  return (
    <section className="relative py-28 overflow-hidden" aria-labelledby="quick-cta-heading">
      <div className="absolute inset-0 bg-gradient-to-b from-beige/50 to-background" />
      <div className="absolute top-0 inset-x-0 divider-gold" />
      <div className="relative max-w-3xl mx-auto px-5 sm:px-8 text-center">
        <Reveal>
          <div className="flex items-center justify-center gap-3 mb-5">
            <span className="block h-px w-10 bg-gold/60" />
            <span className="text-[11px] font-semibold tracking-[0.2em] text-gold uppercase">Reach Us Instantly</span>
            <span className="block h-px w-10 bg-gold/60" />
          </div>
          <h2 id="quick-cta-heading" className="text-display-sm font-display font-bold text-foreground mb-4">Need Immediate <span className="gold-text">Assistance?</span></h2>
          <p className="text-muted-foreground mb-10 leading-relaxed">For urgent requirements or quick quotes, reach out through these channels. We respond within 2 hours during business hours.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            {[
              { icon: MessageCircle, text: "WhatsApp Chat", href: waUrl, ext: true,  cls: "bg-[#25D366] hover:bg-[#20c45a] text-white hover:shadow-lg" },
              { icon: Phone,         text: "Call Now",     href: `tel:${BUSINESS.phone.replace(/\s/g,"")}`, ext: false, cls: "bg-earth hover:bg-earth/90 text-primary-foreground hover:shadow-lg" },
              { icon: Mail,          text: "Send Email",   href: `mailto:${BUSINESS.email}`, ext: false, cls: "border-2 border-earth text-earth hover:bg-earth hover:text-primary-foreground dark:border-gold dark:text-gold dark:hover:bg-gold dark:hover:text-deep" },
            ].map(({ icon: Icon, text, href, ext, cls }, i) => (
              <motion.a key={i} href={href} target={ext ? "_blank" : undefined} rel={ext ? "noopener noreferrer" : undefined}
                whileHover={{ scale: 1.05, y: -3 }} whileTap={{ scale: 0.97 }}
                className={`inline-flex items-center justify-center gap-2.5 font-bold px-7 py-4 rounded-2xl text-sm transition-all ${cls}`}
              ><Icon className="h-5 w-5" />{text}</motion.a>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
