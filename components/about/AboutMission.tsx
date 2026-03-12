"use client";

import { motion } from "framer-motion";
import { Reveal } from "@/components/ui/Motion";

export default function AboutMission() {
  return (
    <section className="py-28" aria-labelledby="mission-heading">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <Reveal className="text-center mb-14">
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="block h-px w-10 bg-gold/60" />
            <span className="text-[11px] font-semibold tracking-[0.2em] text-gold uppercase">Purpose</span>
            <span className="block h-px w-10 bg-gold/60" />
          </div>
          <h2 id="mission-heading" className="text-display-sm font-display font-bold text-foreground mb-4">Mission &amp; <span className="gold-text">Vision</span></h2>
        </Reveal>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {[
            { icon: "🎯", label: "Mission", accent: "text-green border-l-green", bg: "bg-green-50 dark:bg-green-950/20", body: "To bridge the gap between farmers and markets by providing a transparent, reliable, and fair trading platform for agricultural commodities, ensuring prosperity for all stakeholders in the agricultural value chain." },
            { icon: "🌟", label: "Vision",  accent: "text-gold border-l-gold",   bg: "bg-amber-50 dark:bg-amber-950/20",  body: "To be Tamil Nadu's most trusted agricultural commodities trading house, known for innovation, integrity, and unwavering commitment to the farming community's growth and prosperity." },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 32, scale: 0.96 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ delay: i * 0.15, duration: 0.7, ease: [0.16,1,0.3,1] }}
              viewport={{ once: true }}
              whileHover={{ y: -6, boxShadow: "var(--shadow-lg)" }}
              className={`bg-card rounded-3xl p-9 border-l-4 ${item.accent} relative overflow-hidden shadow-md`}
            >
              <div className={`absolute top-0 right-0 w-40 h-40 rounded-full ${item.bg} -translate-y-10 translate-x-10 blur-2xl pointer-events-none`} />
              <span className="text-4xl block mb-5">{item.icon}</span>
              <h3 className={`font-display text-xl font-bold ${item.accent.split(" ")[0]} mb-4`}>{item.label}</h3>
              <p className="text-muted-foreground leading-relaxed">{item.body}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
