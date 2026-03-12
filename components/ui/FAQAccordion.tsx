"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import type { FAQ } from "@/types";

interface FAQAccordionProps {
  faqs: FAQ[];
  /** If provided, filters to only show FAQs of this category */
  category?: string;
}

/**
 * Accessible accordion FAQ component with smooth animations
 */
export default function FAQAccordion({ faqs, category }: FAQAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const filtered = category
    ? faqs.filter((faq) => faq.category === category)
    : faqs;

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  if (filtered.length === 0) return null;

  return (
    <div className="space-y-3" role="list">
      {filtered.map((faq, index) => {
        const isOpen = openIndex === index;
        const itemId = `faq-item-${index}`;
        const answerId = `faq-answer-${index}`;

        return (
          <div
            key={index}
            role="listitem"
            className={cn(
              "bg-card border border-border rounded-lg overflow-hidden transition-shadow",
              isOpen ? "shadow-warm" : "shadow-soft hover:shadow-warm"
            )}
          >
            <button
              id={itemId}
              onClick={() => toggle(index)}
              aria-expanded={isOpen}
              aria-controls={answerId}
              className="w-full flex items-center justify-between gap-4 px-5 py-4 text-left focus:outline-none focus:ring-2 focus:ring-ring focus:ring-inset transition-colors hover:bg-accent/30"
            >
              <span className="font-medium text-foreground text-sm sm:text-base">
                {faq.question}
              </span>
              <ChevronDown
                className={cn(
                  "h-5 w-5 text-muted-foreground flex-shrink-0 transition-transform duration-200",
                  isOpen && "rotate-180"
                )}
                aria-hidden="true"
              />
            </button>

            <div
              id={answerId}
              role="region"
              aria-labelledby={itemId}
              className={cn(
                "overflow-hidden transition-all duration-300",
                isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
              )}
            >
              <div className="px-5 pb-5 pt-1">
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
