"use client";

import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

interface AnimatedSectionProps {
  children: React.ReactNode;
  className?: string;
  /** Delay in ms before animation starts after entering viewport */
  delay?: number;
  /** Animation variant */
  variant?: "slide-up" | "slide-left" | "scale" | "fade";
  /** Threshold 0-1 for intersection observer */
  threshold?: number;
}

/**
 * Scroll-triggered animation wrapper — uses IntersectionObserver.
 * Children animate in once when the section enters the viewport.
 */
export default function AnimatedSection({
  children,
  className,
  delay = 0,
  variant = "slide-up",
  threshold = 0.12,
}: AnimatedSectionProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setVisible(true), delay);
          observer.unobserve(el);
        }
      },
      { threshold }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [delay, threshold]);

  const variants = {
    "slide-up": {
      hidden: "opacity-0 translate-y-10",
      visible: "opacity-100 translate-y-0",
    },
    "slide-left": {
      hidden: "opacity-0 -translate-x-10",
      visible: "opacity-100 translate-x-0",
    },
    scale: {
      hidden: "opacity-0 scale-95",
      visible: "opacity-100 scale-100",
    },
    fade: {
      hidden: "opacity-0",
      visible: "opacity-100",
    },
  };

  return (
    <div
      ref={ref}
      className={cn(
        "transition-all duration-700 ease-smooth will-change-transform",
        visible ? variants[variant].visible : variants[variant].hidden,
        className
      )}
    >
      {children}
    </div>
  );
}
