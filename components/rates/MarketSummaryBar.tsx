"use client";

import { motion } from "framer-motion";
import { TrendingUp, TrendingDown, Minus, BarChart2 } from "lucide-react";
import type { Rate } from "@/types";

interface Props { rates: Rate[]; }

export default function MarketSummaryBar({ rates }: Props) {
  const up = rates.filter(r => r.trend === "up").length;
  const down = rates.filter(r => r.trend === "down").length;
  const stable = rates.filter(r => r.trend === "stable").length;

  const items = [
    { value: up,         label: "Rates Up",    Icon: TrendingUp,  color: "text-green-600 dark:text-green-400",  bg: "bg-green-50 dark:bg-green-950/30" },
    { value: down,       label: "Rates Down",  Icon: TrendingDown,color: "text-red-600 dark:text-red-400",      bg: "bg-red-50 dark:bg-red-950/30" },
    { value: stable,     label: "Stable",      Icon: Minus,       color: "text-muted-foreground",               bg: "bg-muted/40" },
    { value: rates.length, label: "Total",     Icon: BarChart2,   color: "text-earth",                          bg: "bg-orange-50 dark:bg-orange-950/30" },
  ];

  return (
    <div className="border-b border-border bg-beige/30 dark:bg-card/40">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 py-5">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {items.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.08, duration: 0.5, ease: [0.16,1,0.3,1] }}
              className="flex items-center gap-3 bg-card rounded-2xl border border-border px-4 py-3 shadow-sm"
            >
              <div className={`p-2 rounded-xl ${item.bg}`}>
                <item.Icon className={`h-4 w-4 ${item.color}`} />
              </div>
              <div>
                <div className={`text-xl font-bold font-display leading-none ${item.color}`}>{item.value}</div>
                <div className="text-[11px] text-muted-foreground mt-0.5">{item.label}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
