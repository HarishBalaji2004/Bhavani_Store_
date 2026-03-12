"use client";

import { Award, Users, CheckCircle, FileCheck } from "lucide-react";
import { motion } from "framer-motion";
import { Reveal, Stagger, StaggerItem } from "@/components/ui/Motion";

const highlights = [
  { icon: Award,       color: "from-amber-400 to-yellow-500",  bg: "bg-amber-50 dark:bg-amber-950/30",  title: "50 Years of Trust",        desc: "Established in 1974, serving the agricultural community with unwavering dedication." },
  { icon: Users,       color: "from-green-500 to-emerald-600", bg: "bg-green-50 dark:bg-green-950/30",  title: "1000+ Farmers Connected",  desc: "Direct sourcing relationships ensuring fair prices and quality for everyone." },
  { icon: CheckCircle, color: "from-earth to-copper",          bg: "bg-orange-50 dark:bg-orange-950/30",title: "Premium Quality",           desc: "Rigorous quality checks and proper grading for all agricultural commodities." },
  { icon: FileCheck,   color: "from-blue-500 to-indigo-600",   bg: "bg-blue-50 dark:bg-blue-950/30",    title: "GST Registered",           desc: "Fully compliant trading with transparent documentation and honest practices." },
];

export default function WhyChooseSection() {
  return (
    <section className="relative py-28 overflow-hidden" aria-labelledby="why-heading">
      {/* Subtle background texture */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-beige/60 to-background" />
      <div className="absolute top-0 inset-x-0 divider-gold" />
      <div className="absolute bottom-0 inset-x-0 divider-gold" />

      <div className="relative max-w-7xl mx-auto px-5 sm:px-8">
        {/* Header */}
        <Reveal className="text-center mb-16">
          <motion.div className="inline-flex items-center gap-3 mb-4">
            <motion.span className="block h-px w-10 bg-gold origin-right" initial={{ scaleX: 0 }} whileInView={{ scaleX: 1 }} transition={{ duration: 0.7, ease: [0.16,1,0.3,1] }} viewport={{ once: true }} />
            <span className="text-[11px] font-semibold tracking-[0.2em] text-gold uppercase">Why Bhavani Store</span>
            <motion.span className="block h-px w-10 bg-gold origin-left" initial={{ scaleX: 0 }} whileInView={{ scaleX: 1 }} transition={{ duration: 0.7, ease: [0.16,1,0.3,1], delay: 0.1 }} viewport={{ once: true }} />
          </motion.div>
          <h2 id="why-heading" className="text-display-md font-display font-bold text-foreground mb-4 text-balance">
            Five Decades of<br /><span className="gold-text">Excellence</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto leading-relaxed">
            Every partnership is built on transparency, quality, and a genuine commitment to the farming community.
          </p>
        </Reveal>

        {/* Cards */}
        <Stagger className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {highlights.map((h, i) => {
            const Icon = h.icon;
            return (
              <StaggerItem key={i}>
                <motion.div
                  className="group relative bg-card rounded-3xl p-7 border border-border cursor-default overflow-hidden"
                  whileHover={{ y: -8, boxShadow: "var(--shadow-xl)" }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                  {/* Hover glow */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl bg-gradient-to-br from-gold/5 to-transparent pointer-events-none" />

                  <div className={`w-14 h-14 ${h.bg} rounded-2xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="h-7 w-7 text-earth" aria-hidden="true" />
                  </div>
                  <h3 className="font-display text-[1.1rem] font-bold text-foreground mb-2 leading-snug group-hover:text-earth transition-colors duration-300">{h.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{h.desc}</p>

                  {/* Bottom accent line */}
                  <motion.div
                    className={`absolute bottom-0 left-0 h-0.5 bg-gradient-to-r ${h.color} rounded-full`}
                    initial={{ width: 0 }}
                    whileInView={{ width: "100%" }}
                    transition={{ duration: 0.8, delay: i * 0.12, ease: [0.16,1,0.3,1] }}
                    viewport={{ once: true }}
                  />
                </motion.div>
              </StaggerItem>
            );
          })}
        </Stagger>
      </div>
    </section>
  );
}
