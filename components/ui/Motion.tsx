"use client";
/**
 * Reusable Framer Motion wrappers — scroll-triggered reveal, stagger, fade, slide
 * Used across all sections for consistent premium animations
 */

import { motion, useInView, useAnimation, type Variants } from "framer-motion";
import { useRef, useEffect, type ReactNode } from "react";

/* ── Shared easing curves ── */
export const ease = {
  spring: [0.34, 1.56, 0.64, 1],
  smooth: [0.16, 1, 0.3, 1],
  expo: [0.19, 1, 0.22, 1],
  elegant: [0.25, 0.46, 0.45, 0.94],
};

/* ── Preset variants ── */
export const variants: Record<string, Variants> = {
  slideUp: {
    hidden: { opacity: 0, y: 48 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.75, ease: ease.smooth } },
  },
  slideDown: {
    hidden: { opacity: 0, y: -32 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: ease.smooth } },
  },
  slideLeft: {
    hidden: { opacity: 0, x: -48 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.75, ease: ease.smooth } },
  },
  slideRight: {
    hidden: { opacity: 0, x: 48 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.75, ease: ease.smooth } },
  },
  scaleUp: {
    hidden: { opacity: 0, scale: 0.88 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.6, ease: ease.spring } },
  },
  fade: {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.6, ease: ease.elegant } },
  },
  cardPop: {
    hidden: { opacity: 0, y: 32, scale: 0.95 },
    visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.65, ease: ease.spring } },
  },
};

/* ── Stagger container ── */
export const staggerContainer: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1, delayChildren: 0.05 } },
};

export const staggerContainerFast: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.07, delayChildren: 0.02 } },
};

/* ── Scroll-triggered reveal wrapper ── */
interface RevealProps {
  children: ReactNode;
  className?: string;
  variant?: keyof typeof variants;
  delay?: number;
  threshold?: number;
  once?: boolean;
}

export function Reveal({
  children,
  className,
  variant = "slideUp",
  delay = 0,
  threshold = 0.12,
  once = true,
}: RevealProps) {
  const ref = useRef(null);
  const inView = useInView(ref, { once, amount: threshold });
  const v = variants[variant];

  return (
    <motion.div
      ref={ref}
      className={className}
      variants={v}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      transition={{ delay }}
    >
      {children}
    </motion.div>
  );
}

/* ── Stagger children container ── */
interface StaggerProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  fast?: boolean;
  threshold?: number;
}

export function Stagger({ children, className, delay = 0, fast = false, threshold = 0.1 }: StaggerProps) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: threshold });

  return (
    <motion.div
      ref={ref}
      className={className}
      variants={fast ? staggerContainerFast : staggerContainer}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      transition={{ delayChildren: delay }}
    >
      {children}
    </motion.div>
  );
}

/* ── Single stagger child — wrap individual items ── */
interface StaggerItemProps {
  children: ReactNode;
  className?: string;
  variant?: keyof typeof variants;
}

export function StaggerItem({ children, className, variant = "cardPop" }: StaggerItemProps) {
  return (
    <motion.div className={className} variants={variants[variant]}>
      {children}
    </motion.div>
  );
}

/* ── Counter animation ── */
interface CounterProps {
  from?: number;
  to: number;
  suffix?: string;
  className?: string;
  duration?: number;
}

export function Counter({ from = 0, to, suffix = "", className, duration = 1.8 }: CounterProps) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.5 });

  return (
    <span ref={ref} className={className} aria-label={`${to}${suffix}`}>
      <motion.span
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ duration: 0.3 }}
      >
        <motion.span
          initial={from}
          animate={inView ? to : from}
          transition={{ duration, ease: ease.expo, delay: 0.1 }}
        >
          {(v: number) => `${Math.round(v)}${suffix}`}
        </motion.span>
      </motion.span>
    </span>
  );
}

/* ── Hover card ── */
export function HoverCard({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <motion.div
      className={className}
      whileHover={{ y: -8, scale: 1.02, transition: { duration: 0.35, ease: ease.spring } }}
      whileTap={{ scale: 0.98 }}
    >
      {children}
    </motion.div>
  );
}

/* ── Magnetic button effect ── */
export function MagneticButton({ children, className }: { children: ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);

  const handleMouse = (e: React.MouseEvent) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    ref.current.style.transform = `translate(${x * 0.2}px, ${y * 0.2}px)`;
  };

  const handleLeave = () => {
    if (!ref.current) return;
    ref.current.style.transform = "translate(0,0)";
    ref.current.style.transition = "transform 0.4s cubic-bezier(0.34,1.56,0.64,1)";
  };

  return (
    <div
      ref={ref}
      className={className}
      onMouseMove={handleMouse}
      onMouseLeave={handleLeave}
      style={{ transition: "transform 0.1s ease" }}
    >
      {children}
    </div>
  );
}
