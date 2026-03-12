"use client";

import { motion } from "framer-motion";
import { Reveal, Stagger, StaggerItem } from "@/components/ui/Motion";

const features = [
  { emoji: "🌾", color: "from-green-400 to-emerald-500",  bg: "bg-green-50 dark:bg-green-950/30",  title: "Direct Sourcing",  desc: "Sourced directly from verified farmers ensuring authenticity and freshness across Tamil Nadu and neighbouring states." },
  { emoji: "🔍", color: "from-amber-400 to-yellow-500",   bg: "bg-amber-50 dark:bg-amber-950/30",  title: "Quality Testing",  desc: "Comprehensive quality checks including moisture content, purity, grading, and visual inspection before any trade." },
  { emoji: "📦", color: "from-earth to-copper",           bg: "bg-orange-50 dark:bg-orange-950/30",title: "Proper Storage",   desc: "Temperature and humidity controlled storage to maintain product integrity from warehouse to final delivery." },
];

export default function QualityAssuranceSection() {
  return (
    <section className="relative py-28 overflow-hidden" aria-labelledby="quality-heading">
      <div className="absolute inset-0 bg-gradient-to-b from-beige/50 to-background" />
      <div className="absolute top-0 inset-x-0 divider-gold" />

      <div className="relative max-w-7xl mx-auto px-5 sm:px-8">
        <Reveal className="text-center mb-14">
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="block h-px w-10 bg-gold/60" />
            <span className="text-[11px] font-semibold tracking-[0.2em] text-gold uppercase">Our Promise</span>
            <span className="block h-px w-10 bg-gold/60" />
          </div>
          <h2 id="quality-heading" className="text-display-sm font-display font-bold text-foreground mb-4">Quality <span className="gold-text">Assurance</span></h2>
          <p className="text-muted-foreground max-w-md mx-auto text-sm leading-relaxed">Every product undergoes rigorous quality checks to ensure you receive only the finest agricultural commodities.</p>
        </Reveal>

        <Stagger className="grid grid-cols-1 md:grid-cols-3 gap-7">
          {features.map((f, i) => (
            <StaggerItem key={i}>
              <motion.div
                className="bg-card rounded-3xl p-9 text-center border border-border group relative overflow-hidden cursor-default"
                whileHover={{ y: -10, boxShadow: "var(--shadow-xl)" }}
                transition={{ type: "spring", stiffness: 260, damping: 18 }}
              >
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-b from-gold/4 to-transparent rounded-3xl pointer-events-none" />

                <motion.div
                  className={`w-18 h-18 ${f.bg} rounded-3xl flex items-center justify-center mx-auto mb-6`}
                  whileHover={{ scale: 1.15, rotate: 8 }}
                  transition={{ type: "spring", stiffness: 300, damping: 12 }}
                  style={{ width: "4.5rem", height: "4.5rem" }}
                >
                  <span className="text-3xl">{f.emoji}</span>
                </motion.div>
                <h3 className="font-display text-lg font-bold text-foreground mb-3 group-hover:text-earth transition-colors duration-300">{f.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{f.desc}</p>

                <motion.div
                  className={`absolute bottom-0 inset-x-0 h-0.5 bg-gradient-to-r ${f.color}`}
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  transition={{ duration: 0.8, delay: i * 0.15, ease: [0.16,1,0.3,1] }}
                  viewport={{ once: true }}
                />
              </motion.div>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
