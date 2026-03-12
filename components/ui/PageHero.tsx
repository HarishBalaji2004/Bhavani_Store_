"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

interface PageHeroProps {
  title: string;
  description?: string;
  kicker?: string;
}

export default function PageHero({ title, description, kicker }: PageHeroProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  return (
    <div ref={ref} className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-gradient-hero grain">
      {/* Parallax glow */}
      <motion.div style={{ y }} className="absolute inset-0 pointer-events-none will-change-transform">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-gold/6 blur-3xl" />
      </motion.div>

      {/* Decorative lines */}
      <motion.div
        initial={{ scaleX: 0 }} animate={{ scaleX: 1 }}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
        className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-gold/50 to-transparent origin-left"
      />
      <motion.div
        initial={{ scaleX: 0 }} animate={{ scaleX: 1 }}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.5 }}
        className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent origin-left"
      />

      {/* Spinning ring */}
      <motion.div
        animate={{ rotate: 360 }} transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
        className="absolute top-8 right-12 w-20 h-20 rounded-full border border-dashed border-gold/20 hidden lg:block"
      />

      <motion.div style={{ opacity }} className="relative max-w-4xl mx-auto px-5 sm:px-8 text-center">
        {kicker && (
          <motion.div
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16,1,0.3,1] }}
            className="inline-flex items-center gap-3 mb-5"
          >
            <span className="block h-px w-8 bg-gold/60" />
            <span className="text-[11px] font-semibold tracking-[0.2em] text-gold/80 uppercase">{kicker}</span>
            <span className="block h-px w-8 bg-gold/60" />
          </motion.div>
        )}

        <motion.h1
          initial={{ opacity: 0, y: 32 }} animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16,1,0.3,1], delay: 0.1 }}
          className="font-display font-bold text-white mb-5 text-balance"
          style={{ fontSize: "clamp(2.2rem, 5.5vw, 3.8rem)", lineHeight: 1.0 }}
        >
          {title}
        </motion.h1>

        {description && (
          <motion.p
            initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16,1,0.3,1], delay: 0.22 }}
            className="text-white/65 leading-relaxed max-w-xl mx-auto text-[1.05rem]"
          >
            {description}
          </motion.p>
        )}
      </motion.div>
    </div>
  );
}
