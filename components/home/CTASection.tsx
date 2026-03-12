"use client";

import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { TrendingUp, MessageSquare, ArrowRight } from "lucide-react";
import { Reveal } from "@/components/ui/Motion";

export default function CTASection() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const bgY = useTransform(scrollYProgress, [0, 1], ["-15%", "15%"]);

  return (
    <section ref={ref} className="relative py-32 overflow-hidden" aria-labelledby="cta-heading">
      {/* Animated gradient bg */}
      <motion.div style={{ y: bgY }} className="absolute inset-0 bg-gradient-hero will-change-transform scale-110" />

      {/* Animated orbs */}
      <motion.div
        animate={{ x: [0, 60, 0], y: [0, -30, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/3 left-1/4 w-72 h-72 rounded-full bg-gold/10 blur-3xl pointer-events-none"
      />
      <motion.div
        animate={{ x: [0, -40, 0], y: [0, 40, 0] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut", delay: 3 }}
        className="absolute bottom-1/4 right-1/3 w-96 h-96 rounded-full bg-earth/20 blur-3xl pointer-events-none"
      />

      {/* Decorative rings */}
      <motion.div
        animate={{ rotate: 360, scale: [1, 1.05, 1] }}
        transition={{ rotate: { duration: 40, repeat: Infinity, ease: "linear" }, scale: { duration: 6, repeat: Infinity, ease: "easeInOut" } }}
        className="absolute top-8 right-16 w-24 h-24 rounded-full border border-dashed border-gold/25 hidden xl:block"
      />
      <motion.div
        animate={{ rotate: -360 }}
        transition={{ duration: 55, repeat: Infinity, ease: "linear" }}
        className="absolute bottom-10 left-12 w-16 h-16 rounded-full border border-dashed border-white/15 hidden xl:block"
      />

      <div className="relative max-w-4xl mx-auto px-5 sm:px-8 text-center">
        <Reveal>
          <motion.div
            initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16,1,0.3,1] }} viewport={{ once: true }}
            className="inline-flex items-center gap-2 mb-6 glass border-white/15 text-white/70 text-[11px] font-semibold tracking-[0.18em] uppercase px-5 py-2 rounded-full"
          >
            Start Trading Today
          </motion.div>
        </Reveal>

        <Reveal delay={0.1}>
          <h2 id="cta-heading" className="text-display-md font-display font-bold text-white mb-5 leading-tight">
            Ready to Trade<br />with <span className="gold-text">Confidence?</span>
          </h2>
          <p className="text-lg text-white/70 mb-12 leading-relaxed max-w-2xl mx-auto">
            Join thousands of satisfied farmers and vendors who trust Bhavani Store for their agricultural commodity needs since 1974.
          </p>
        </Reveal>

        <Reveal delay={0.2}>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.div whileHover={{ scale: 1.05, y: -3 }} whileTap={{ scale: 0.97 }}>
              <Link href="/rates"
                className="group inline-flex items-center justify-center gap-2.5 bg-gold hover:bg-gold/90 text-deep font-bold px-9 py-4.5 rounded-2xl text-base transition-shadow hover:shadow-gold"
              >
                <TrendingUp className="h-5 w-5" />
                Check Today&apos;s Rates
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05, y: -3 }} whileTap={{ scale: 0.97 }}>
              <Link href="/contact"
                className="inline-flex items-center justify-center gap-2.5 glass border-white/25 text-white font-semibold px-9 py-4.5 rounded-2xl text-base hover:bg-white/15 transition-all"
              >
                <MessageSquare className="h-5 w-5" />
                Get a Quote
              </Link>
            </motion.div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
