"use client";

import { motion } from "framer-motion";
import { Reveal, Stagger, StaggerItem } from "@/components/ui/Motion";

const milestones = [
  { year: "1974", label: "Founded in Paramakudi" },
  { year: "1990s", label: "Expanded commodity range" },
  { year: "2000s", label: "GST registration & compliance" },
  { year: "2024", label: "50 years of service" },
];

export default function AboutStory() {
  return (
    <section className="py-28" aria-labelledby="story-heading">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Text */}
          <Reveal variant="slideLeft">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-[11px] font-semibold tracking-[0.2em] text-gold uppercase">Our Story</span>
              <motion.span className="h-px flex-1 max-w-[60px] bg-gold/50 block origin-left" initial={{ scaleX: 0 }} whileInView={{ scaleX: 1 }} transition={{ duration: 0.7, ease: [0.16,1,0.3,1], delay: 0.2 }} viewport={{ once: true }} />
            </div>
            <h2 id="story-heading" className="text-display-sm font-display font-bold text-foreground mb-6">
              The <span className="gold-text">Bhavani</span> Story
            </h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              {[
                "Founded in 1974 in the heart of Paramakudi, Bhavani Store began as a small family business with a simple yet powerful vision: to create a fair and transparent marketplace for agricultural commodities in Tamil Nadu.",
                "What started as a modest trading post has grown into one of the region's most trusted names in agricultural commerce. Our founder's commitment to honest dealings and farmer welfare has been the cornerstone of our success for 50 years.",
                "Today, we handle thousands of tons of agricultural commodities annually — from premium red chillies and Guntur varieties to raw cotton, paddy, tamarind, neem seeds, and various millets. Each transaction is built on the foundation of trust.",
              ].map((p, i) => (
                <motion.p key={i} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 + i * 0.1, duration: 0.6, ease: [0.16,1,0.3,1] }} viewport={{ once: true }}>{p}</motion.p>
              ))}
            </div>

            {/* Timeline */}
            <Stagger fast className="grid grid-cols-2 gap-3 mt-8">
              {milestones.map((m, i) => (
                <StaggerItem key={i}>
                  <div className="flex items-center gap-3 bg-beige dark:bg-muted/30 rounded-2xl px-4 py-3">
                    <span className="text-xs font-bold text-gold whitespace-nowrap">{m.year}</span>
                    <span className="text-xs text-foreground">{m.label}</span>
                  </div>
                </StaggerItem>
              ))}
            </Stagger>
          </Reveal>

          {/* Stats card */}
          <Reveal variant="slideRight">
            <motion.div
              className="bg-card rounded-4xl shadow-lg border border-border p-10 relative overflow-hidden"
              whileHover={{ boxShadow: "var(--shadow-xl)" }}
              transition={{ duration: 0.3 }}
            >
              {/* Bg orb */}
              <div className="absolute -top-12 -right-12 w-48 h-48 rounded-full bg-gold/5 blur-2xl pointer-events-none" />

              <div className="text-center mb-8 relative">
                <motion.div
                  className="w-24 h-24 bg-gradient-hero rounded-full flex items-center justify-center mx-auto mb-5 shadow-gold"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 300, damping: 15 }}
                >
                  <span className="font-display text-4xl font-bold text-gold">50</span>
                </motion.div>
                <h3 className="font-display text-2xl font-bold text-foreground mb-1">Years of Trust</h3>
                <p className="text-sm text-muted-foreground">Serving the agricultural community since 1974</p>
              </div>

              <div className="grid grid-cols-2 gap-4">
                {[
                  { value: "1000+", label: "Farmers Connected" },
                  { value: "500+",  label: "Vendor Partners" },
                  { value: "8",     label: "Product Categories" },
                  { value: "365",   label: "Days of Service" },
                ].map((s, i) => (
                  <motion.div key={i}
                    className="bg-beige dark:bg-muted/30 rounded-2xl p-4 text-center"
                    whileHover={{ scale: 1.05 }} transition={{ type: "spring", stiffness: 400, damping: 20 }}
                  >
                    <div className="font-display text-2xl font-bold text-earth mb-1">{s.value}</div>
                    <div className="text-xs text-muted-foreground">{s.label}</div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
