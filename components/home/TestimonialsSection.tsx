"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Quote, ChevronLeft, ChevronRight, Star } from "lucide-react";
import { TESTIMONIALS } from "@/lib/data";
import { Reveal } from "@/components/ui/Motion";

export default function TestimonialsSection() {
  const [idx, setIdx] = useState(0);
  const [dir, setDir] = useState(1);
  const total = TESTIMONIALS.length;

  const go = (next: number) => {
    setDir(next > idx ? 1 : -1);
    setIdx((next + total) % total);
  };

  const active = TESTIMONIALS[idx];
  const prev2 = TESTIMONIALS[(idx - 1 + total) % total];
  const next2 = TESTIMONIALS[(idx + 1) % total];

  return (
    <section className="relative py-28 overflow-hidden" aria-labelledby="testimonials-heading">
      <div className="absolute inset-0 bg-gradient-to-b from-beige/40 via-background to-background" />

      <div className="relative max-w-7xl mx-auto px-5 sm:px-8">
        <Reveal className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="block h-px w-10 bg-gold/60" />
            <span className="text-[11px] font-semibold tracking-[0.2em] text-gold uppercase">Trusted Partners</span>
            <span className="block h-px w-10 bg-gold/60" />
          </div>
          <h2 id="testimonials-heading" className="text-display-md font-display font-bold text-foreground mb-4">
            What They <span className="gold-text">Say</span>
          </h2>
        </Reveal>

        {/* Featured testimonial */}
        <div className="relative max-w-3xl mx-auto mb-10">
          {/* Giant quote mark */}
          <div className="absolute -top-6 -left-4 opacity-10 pointer-events-none select-none" aria-hidden="true">
            <Quote className="h-28 w-28 text-gold fill-gold" />
          </div>

          <AnimatePresence mode="wait" custom={dir}>
            <motion.div
              key={idx}
              custom={dir}
              variants={{
                enter: (d: number) => ({ opacity: 0, x: d * 60, scale: 0.96 }),
                center: { opacity: 1, x: 0, scale: 1 },
                exit: (d: number) => ({ opacity: 0, x: d * -60, scale: 0.96 }),
              }}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="bg-card rounded-4xl p-10 md:p-14 shadow-lg border border-border text-center relative"
            >
              {/* Stars */}
              <div className="flex justify-center gap-1 mb-6">
                {Array.from({ length: active.rating }).map((_, i) => (
                  <motion.div key={i} initial={{ opacity: 0, scale: 0 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: i * 0.08, type: "spring" }}>
                    <Star className="h-5 w-5 fill-gold text-gold" />
                  </motion.div>
                ))}
              </div>

              <blockquote className="font-display text-[1.35rem] md:text-[1.6rem] leading-relaxed text-foreground italic font-medium mb-8">
                &ldquo;{active.content}&rdquo;
              </blockquote>

              <div className="flex items-center justify-center gap-3">
                <div className="w-11 h-11 bg-gradient-hero rounded-full flex items-center justify-center shadow">
                  <span className="text-white font-bold font-display text-base">{active.name.charAt(0)}</span>
                </div>
                <div className="text-left">
                  <p className="font-bold text-foreground text-sm">{active.name}</p>
                  <p className="text-xs text-muted-foreground">{active.location}</p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Arrow controls */}
          <div className="flex justify-center items-center gap-4 mt-8">
            <motion.button whileHover={{ scale: 1.12 }} whileTap={{ scale: 0.9 }} onClick={() => go(idx - 1)}
              className="w-10 h-10 rounded-full border border-border bg-card hover:bg-muted/60 flex items-center justify-center shadow-sm transition-colors"
              aria-label="Previous testimonial"
            ><ChevronLeft className="h-4 w-4 text-muted-foreground" /></motion.button>

            <div className="flex gap-2" role="tablist" aria-label="Testimonial navigation">
              {TESTIMONIALS.map((_, i) => (
                <motion.button
                  key={i}
                  role="tab"
                  aria-selected={i === idx}
                  onClick={() => go(i)}
                  animate={{ width: i === idx ? 24 : 8, backgroundColor: i === idx ? "hsl(42,90%,50%)" : "hsl(30,24%,83%)" }}
                  transition={{ type: "spring", stiffness: 400, damping: 28 }}
                  className="h-2 rounded-full"
                />
              ))}
            </div>

            <motion.button whileHover={{ scale: 1.12 }} whileTap={{ scale: 0.9 }} onClick={() => go(idx + 1)}
              className="w-10 h-10 rounded-full border border-border bg-card hover:bg-muted/60 flex items-center justify-center shadow-sm transition-colors"
              aria-label="Next testimonial"
            ><ChevronRight className="h-4 w-4 text-muted-foreground" /></motion.button>
          </div>
        </div>

        {/* Preview cards */}
        <div className="hidden md:grid grid-cols-3 gap-5 max-w-3xl mx-auto opacity-50">
          {[prev2, active, next2].map((t, i) => (
            <motion.div
              key={t.name}
              onClick={() => go(i === 0 ? idx - 1 : i === 2 ? idx + 1 : idx)}
              className={`bg-card rounded-2xl p-5 border cursor-pointer transition-all ${i === 1 ? "border-gold/40 opacity-100 !opacity-100" : "border-border hover:border-gold/20"}`}
              whileHover={{ scale: 1.02 }}
              style={{ opacity: i === 1 ? 1 : 0.5 }}
            >
              <p className="text-xs text-muted-foreground italic clamp-2 mb-3">&ldquo;{t.content}&rdquo;</p>
              <p className="text-xs font-bold text-foreground">{t.name}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
