"use client";

import Link from "next/link";
import { ArrowRight, CheckCircle } from "lucide-react";
import { motion } from "framer-motion";
import { Reveal, Stagger, StaggerItem } from "@/components/ui/Motion";
import { PRODUCTS } from "@/lib/data";

const featuredProducts = PRODUCTS.map((p) => p.name);
const highlights = [
  { emoji: "🌾", label: "Direct Farm Sourcing", desc: "Traceable from farm to trade" },
  { emoji: "✅", label: "Quality Checked",      desc: "Graded and certified" },
  { emoji: "📊", label: "Market Rates",         desc: "Updated daily" },
  { emoji: "🤝", label: "50+ Years Trust",      desc: "Reliable partner" },
];

export default function ProductsOverviewSection() {
  return (
    <section className="relative py-28 overflow-hidden" aria-labelledby="products-overview-heading">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Left */}
          <div>
            <Reveal variant="slideLeft">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-[11px] font-semibold tracking-[0.2em] text-gold uppercase">What We Trade</span>
                <motion.span className="block h-px flex-1 max-w-[60px] bg-gold/50 origin-left" initial={{ scaleX: 0 }} whileInView={{ scaleX: 1 }} transition={{ duration: 0.7, ease: [0.16,1,0.3,1], delay: 0.2 }} viewport={{ once: true }} />
              </div>
              <h2 id="products-overview-heading" className="text-display-sm font-display font-bold text-foreground mb-5 leading-[1.02]">
                Premium<br /><span className="gold-text">Agricultural</span><br />Commodities
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-8 max-w-md">
                Sourced directly from verified farmers across Tamil Nadu and neighbouring states — quality assured, fairly priced.
              </p>
            </Reveal>

            <Stagger fast className="grid grid-cols-2 gap-2 mb-10">
              {featuredProducts.map((p, i) => (
                <StaggerItem key={i} variant="slideLeft">
                  <motion.div className="flex items-center gap-2.5 py-1.5 group" whileHover={{ x: 4 }} transition={{ type: "spring", stiffness: 400, damping: 20 }}>
                    <CheckCircle className="h-4 w-4 text-green flex-shrink-0 group-hover:text-gold transition-colors" />
                    <span className="text-sm font-medium text-foreground">{p}</span>
                  </motion.div>
                </StaggerItem>
              ))}
            </Stagger>

            <Reveal delay={0.3}>
              <motion.div whileHover={{ scale: 1.04, y: -2 }} whileTap={{ scale: 0.97 }}>
                <Link href="/products" className="group inline-flex items-center gap-3 bg-earth hover:bg-earth/90 text-primary-foreground font-bold px-8 py-4 rounded-2xl transition-shadow hover:shadow-lg">
                  View All Products
                  <ArrowRight className="h-4 w-4 group-hover:translate-x-1.5 transition-transform" />
                </Link>
              </motion.div>
            </Reveal>
          </div>

          {/* Right: highlight cards */}
          <Stagger className="grid grid-cols-2 gap-4">
            {highlights.map((c, i) => (
              <StaggerItem key={i}>
                <motion.div
                  className="bg-card rounded-3xl p-7 text-center border border-border group cursor-default"
                  whileHover={{ y: -8, boxShadow: "var(--shadow-lg)", borderColor: "hsl(42,90%,50%,.35)" }}
                  transition={{ type: "spring", stiffness: 280, damping: 18 }}
                >
                  <motion.div
                    className="text-4xl mb-3 inline-block"
                    whileHover={{ scale: 1.2, rotate: 8 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >{c.emoji}</motion.div>
                  <p className="font-semibold text-foreground text-sm mb-1">{c.label}</p>
                  <p className="text-xs text-muted-foreground">{c.desc}</p>
                </motion.div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </div>
    </section>
  );
}
