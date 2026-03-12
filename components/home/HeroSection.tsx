"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { ArrowRight, TrendingUp, ShieldCheck, Star } from "lucide-react";

const ease = [0.16, 1, 0.3, 1];

export default function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ["start start", "end start"] });
  const rawY = useTransform(scrollYProgress, [0, 1], ["0%", "35%"]);
  const parallaxY = useSpring(rawY, { stiffness: 60, damping: 20 });
  const overlayOpacity = useTransform(scrollYProgress, [0, 0.6], [0.65, 0.9]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "15%"]);
  const textOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  const words = ["50", "Years", "of", "Trust"];

  return (
    <section ref={containerRef} className="relative min-h-screen flex items-center overflow-hidden" aria-label="Hero section">

      {/* Parallax background */}
      <motion.div style={{ y: parallaxY }} className="absolute inset-0 scale-[1.15] will-change-transform">
        <Image src="/images/hero-image.jpg" alt="" fill className="object-cover" priority sizes="100vw" />
      </motion.div>

      {/* Layered overlays */}
      <motion.div style={{ opacity: overlayOpacity }}
        className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-black/35" />
      <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-black/20" />

      {/* Film grain */}
      <div className="absolute inset-0 opacity-20 mix-blend-screen pointer-events-none"
        style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='g'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.68' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23g)'/%3E%3C/svg%3E")` }} />

      {/* Decorative geometry */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1.2, duration: 1.5, ease }}
        className="absolute right-16 top-1/2 -translate-y-1/2 w-64 h-64 rounded-full border border-gold/15 hidden lg:block"
      />
      <motion.div
        initial={{ opacity: 0 }} animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 1.2 }}
        className="absolute right-24 top-1/3 w-1 h-32 bg-gradient-to-b from-transparent via-gold/30 to-transparent hidden lg:block"
      />
      <motion.div
        animate={{ y: [0, -14, 0] }} transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute right-32 bottom-1/3 w-3 h-3 rounded-full bg-gold/50 hidden lg:block"
      />
      <motion.div
        animate={{ y: [0, -8, 0] }} transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute right-1/3 top-1/4 w-1.5 h-1.5 rounded-full bg-white/30 hidden lg:block"
      />

      {/* Main content */}
      <motion.div style={{ y: textY, opacity: textOpacity }} className="relative w-full max-w-7xl mx-auto px-6 sm:px-10 lg:px-14 pt-28 pb-24">
        <div className="max-w-[620px]">

          {/* Stars kicker */}
          <motion.div
            initial={{ opacity: 0, x: -24 }} animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.8, ease }}
            className="flex items-center gap-3 mb-8"
          >
            <div className="flex gap-0.5">{[0,1,2,3,4].map(i => <Star key={i} className="h-3 w-3 fill-gold text-gold" />)}</div>
            <span className="text-[11px] font-semibold tracking-[0.22em] text-gold/90 uppercase">Est. 1974 · Paramakudi, Tamil Nadu</span>
          </motion.div>

          {/* Animated headline words */}
          <h1 className="font-display font-bold text-white mb-8" aria-label="50 Years of Trust">
            {words.map((word, i) => (
              <motion.span
                key={word}
                className={`block leading-[0.92] ${
                  word === "Trust"
                    ? "gold-text"
                    : "text-white"
                }`}
                style={{ fontSize: "clamp(3.2rem, 9vw, 6.5rem)" }}
                initial={{ opacity: 0, y: 60, skewY: 4 }}
                animate={{ opacity: 1, y: 0, skewY: 0 }}
                transition={{ delay: 0.45 + i * 0.12, duration: 0.9, ease }}
              >
                {word}
              </motion.span>
            ))}
          </h1>

          {/* Divider */}
          <motion.div
            initial={{ scaleX: 0 }} animate={{ scaleX: 1 }}
            transition={{ delay: 0.95, duration: 0.8, ease }}
            className="w-14 h-px bg-gold mb-6 origin-left"
          />

          {/* Subtext */}
          <motion.p
            initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.05, duration: 0.9, ease }}
            className="text-[1.05rem] text-white/70 leading-relaxed mb-10 max-w-md font-light"
          >
            Premier trading house connecting Tamil Nadu&apos;s farmers with vendors through transparent practices and decades of expertise.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.18, duration: 0.8, ease }}
            className="flex flex-wrap gap-4 mb-12"
          >
            <motion.div whileHover={{ scale: 1.04, y: -2 }} whileTap={{ scale: 0.97 }}>
              <Link href="/rates" className="group inline-flex items-center gap-2.5 bg-gold hover:bg-gold/90 text-deep font-bold px-8 py-4 rounded-2xl text-base transition-shadow hover:shadow-gold">
                <TrendingUp className="h-5 w-5" />
                Today&apos;s Rates
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
            <motion.div whileHover={{ scale: 1.04, y: -2 }} whileTap={{ scale: 0.97 }}>
              <Link href="/contact" className="inline-flex items-center gap-2.5 glass border-white/25 text-white font-semibold px-8 py-4 rounded-2xl text-base transition-all hover:bg-white/15">
                Get a Quote
              </Link>
            </motion.div>
          </motion.div>

          {/* Trust badges */}
          <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }}
            transition={{ delay: 1.35, duration: 0.8 }}
            className="flex flex-wrap items-center gap-5"
          >
            {[
              { icon: ShieldCheck, text: "GST Registered" },
              { icon: ShieldCheck, text: "1000+ Farmers" },
              { icon: ShieldCheck, text: "Quality Certified" },
            ].map(({ icon: Icon, text }, i) => (
              <motion.div key={i} initial={{ opacity: 0, x: -12 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 1.4 + i * 0.08 }}
                className="flex items-center gap-1.5 text-white/55 text-sm"
              >
                <Icon className="h-3.5 w-3.5 text-gold/65" />
                <span>{text}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.div>

      {/* Bottom fade into page */}
      <div className="absolute bottom-0 inset-x-0 h-40 bg-gradient-to-t from-background to-transparent pointer-events-none" />

      {/* Scroll cue */}
      <motion.div
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <motion.div
          animate={{ y: [0, 6, 0] }} transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
          className="w-px h-10 bg-gradient-to-b from-white/40 to-transparent"
        />
        <span className="text-[10px] tracking-[0.2em] text-white/30 uppercase">Scroll</span>
      </motion.div>
    </section>
  );
}
