"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { STATS } from "@/lib/data";
import { Reveal } from "@/components/ui/Motion";

function AnimatedNumber({ value, suffix = "" }: { value: string; suffix?: string }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.5 });
  const num = parseInt(value.replace(/\D/g, ""), 10) || 0;

  return (
    <motion.span ref={ref} className="tabular-nums">
      {inView ? (
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          <motion.span
            initial={0}
            animate={num}
            transition={{ duration: 2, ease: [0.19, 1, 0.22, 1], delay: 0.1 }}
          >
            {(v: number) => `${Math.round(v)}${value.replace(/\d/g, "")}`}
          </motion.span>
        </motion.span>
      ) : "0"}
    </motion.span>
  );
}

export default function StatsSection() {
  return (
    <section className="relative py-28 overflow-hidden bg-gradient-hero grain" aria-labelledby="stats-heading">
      {/* Animated gradient orbs */}
      <motion.div
        animate={{ scale: [1, 1.3, 1], opacity: [0.15, 0.25, 0.15] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/4 left-1/4 w-80 h-80 rounded-full bg-gold/10 blur-3xl pointer-events-none"
      />
      <motion.div
        animate={{ scale: [1.2, 1, 1.2], opacity: [0.1, 0.2, 0.1] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-earth/20 blur-3xl pointer-events-none"
      />

      {/* Decorative spinning ring */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
        className="absolute top-10 right-10 w-32 h-32 rounded-full border border-dashed border-gold/20 hidden xl:block pointer-events-none"
      />

      <div className="relative max-w-7xl mx-auto px-5 sm:px-8">
        <Reveal className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="block h-px w-10 bg-gold/60" />
            <span className="text-[11px] font-semibold tracking-[0.2em] text-gold/80 uppercase">Our Impact</span>
            <span className="block h-px w-10 bg-gold/60" />
          </div>
          <h2 id="stats-heading" className="text-display-md font-display font-bold text-white mb-4">
            Numbers That <span className="gold-text">Speak</span>
          </h2>
          <p className="text-white/60 max-w-lg mx-auto">Five decades of consistent performance and trusted partnerships.</p>
        </Reveal>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
          {STATS.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40, scale: 0.92 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ delay: i * 0.1, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              viewport={{ once: true, amount: 0.3 }}
              whileHover={{ scale: 1.04, y: -4, transition: { type: "spring", stiffness: 300, damping: 20 } }}
              className="relative glass-warm rounded-3xl p-8 text-center group overflow-hidden cursor-default animate-border-pulse"
            >
              {/* Number */}
              <div className="text-5xl sm:text-6xl font-display font-bold text-gold mb-2 leading-none">
                <AnimatedNumber value={stat.number} />
              </div>
              <div className="text-sm font-semibold text-white mb-1">{stat.label}</div>
              {stat.description && <div className="text-xs text-white/50">{stat.description}</div>}

              {/* Glow on hover */}
              <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-t from-gold/10 to-transparent pointer-events-none" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
