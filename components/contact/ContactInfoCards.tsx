"use client";

import { MapPin, Phone, Mail, MessageCircle } from "lucide-react";
import { motion } from "framer-motion";
import { Stagger, StaggerItem } from "@/components/ui/Motion";
import { BUSINESS } from "@/lib/data";

const cards = [
  { Icon: Phone,         title: "Phone",     lines: [BUSINESS.phone, "Business Enquiries"],  href: `tel:${BUSINESS.phone.replace(/\s/g,"")}`, ext: false, color: "text-blue-600 dark:text-blue-400",   bg: "bg-blue-50 dark:bg-blue-950/30",    ring: "group-hover:ring-blue-200 dark:group-hover:ring-blue-800" },
  { Icon: MessageCircle, title: "WhatsApp",  lines: [BUSINESS.phone, "24/7 Quick Response"], href: `https://wa.me/${BUSINESS.whatsappNumber}?text=Hello`, ext: true,  color: "text-[#25D366]",               bg: "bg-green-50 dark:bg-green-950/30",  ring: "group-hover:ring-green-200 dark:group-hover:ring-green-800" },
  { Icon: Mail,          title: "Email",     lines: [BUSINESS.email, "General Enquiries"],   href: `mailto:${BUSINESS.email}`, ext: false, color: "text-orange-600 dark:text-orange-400", bg: "bg-orange-50 dark:bg-orange-950/30",ring: "group-hover:ring-orange-200 dark:group-hover:ring-orange-800" },
  { Icon: MapPin,        title: "Location",  lines: [BUSINESS.address.city, BUSINESS.address.state], href: BUSINESS.mapsUrl, ext: true, color: "text-red-600 dark:text-red-400", bg: "bg-red-50 dark:bg-red-950/30", ring: "group-hover:ring-red-200 dark:group-hover:ring-red-800" },
];

export default function ContactInfoCards() {
  return (
    <Stagger className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-14">
      {cards.map((c, i) => {
        const Icon = c.Icon;
        return (
          <StaggerItem key={i}>
            <motion.a
              href={c.href}
              target={c.ext ? "_blank" : undefined}
              rel={c.ext ? "noopener noreferrer" : undefined}
              className={`group block bg-card rounded-3xl p-7 text-center border border-border ring-1 ring-transparent ${c.ring} transition-all duration-300 focus:outline-none`}
              whileHover={{ y: -8, boxShadow: "var(--shadow-lg)" }}
              transition={{ type: "spring", stiffness: 280, damping: 18 }}
              aria-label={c.title}
            >
              <motion.div
                className={`w-12 h-12 ${c.bg} rounded-2xl flex items-center justify-center mx-auto mb-4`}
                whileHover={{ scale: 1.15, rotate: 8 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <Icon className={`h-5 w-5 ${c.color}`} />
              </motion.div>
              <h2 className="font-bold text-foreground text-sm mb-2">{c.title}</h2>
              {c.lines.map((l, j) => <p key={j} className="text-xs text-muted-foreground">{l}</p>)}
            </motion.a>
          </StaggerItem>
        );
      })}
    </Stagger>
  );
}
