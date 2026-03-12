"use client";

import { Award, Users, Handshake, Target } from "lucide-react";
import { motion } from "framer-motion";
import { Reveal, Stagger, StaggerItem } from "@/components/ui/Motion";

const values = [
  { Icon: Award,     color: "text-amber-500",  bg: "bg-amber-50 dark:bg-amber-950/30",  title: "50 Years of Excellence", desc: "Half a century of trust, reliability, and consistent quality in agricultural trading." },
  { Icon: Users,     color: "text-green-600",  bg: "bg-green-50 dark:bg-green-950/30",  title: "Farmer-First Approach",  desc: "Direct sourcing from farmers ensuring fair prices and sustainable livelihoods." },
  { Icon: Handshake, color: "text-earth",      bg: "bg-orange-50 dark:bg-orange-950/30",title: "Trust & Transparency",   desc: "Building lasting relationships through honest dealings and transparent practices." },
  { Icon: Target,    color: "text-blue-600",   bg: "bg-blue-50 dark:bg-blue-950/30",    title: "Quality Assurance",      desc: "Rigorous quality checks and proper grading for all our agricultural commodities." },
];

export default function AboutValues() {
  return (
    <section className="py-28 bg-gradient-to-b from-beige/40 to-background" aria-labelledby="values-heading">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <Reveal className="text-center mb-14">
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="block h-px w-10 bg-gold/60" />
            <span className="text-[11px] font-semibold tracking-[0.2em] text-gold uppercase">Our Principles</span>
            <span className="block h-px w-10 bg-gold/60" />
          </div>
          <h2 id="values-heading" className="text-display-sm font-display font-bold text-foreground mb-4">Core <span className="gold-text">Values</span></h2>
          <p className="text-muted-foreground max-w-xl mx-auto text-sm leading-relaxed">These principles guide every aspect of our business and have helped us build lasting relationships in the agricultural community.</p>
        </Reveal>

        <Stagger className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((v, i) => {
            const Icon = v.Icon;
            return (
              <StaggerItem key={i}>
                <motion.div
                  className="bg-card rounded-3xl p-7 text-center border border-border group relative overflow-hidden cursor-default"
                  whileHover={{ y: -8, boxShadow: "var(--shadow-lg)" }}
                  transition={{ type: "spring", stiffness: 280, damping: 18 }}
                >
                  <div className="absolute inset-0 bg-gradient-to-b from-gold/3 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl pointer-events-none" />

                  <motion.div
                    className={`w-14 h-14 ${v.bg} rounded-2xl flex items-center justify-center mx-auto mb-5`}
                    whileHover={{ scale: 1.12, rotate: 6 }}
                    transition={{ type: "spring", stiffness: 300, damping: 15 }}
                  >
                    <Icon className={`h-7 w-7 ${v.color}`} />
                  </motion.div>
                  <h3 className="font-display text-base font-bold text-foreground mb-2 group-hover:text-earth transition-colors duration-300">{v.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{v.desc}</p>
                </motion.div>
              </StaggerItem>
            );
          })}
        </Stagger>
      </div>
    </section>
  );
}
