"use client";

import { motion } from "framer-motion";
import { TrendingUp, TrendingDown, Minus, MessageCircle, RefreshCw } from "lucide-react";
import { Reveal } from "@/components/ui/Motion";
import { RATES, BUSINESS } from "@/lib/data";
import { getTrendColorClass, formatWhatsAppUrl } from "@/lib/utils";
import type { Rate } from "@/types";

function TrendBadge({ trend }: { trend: Rate["trend"] }) {
  const color = getTrendColorClass(trend);
  return (
    <div className={`flex items-center gap-1.5 font-medium text-xs ${color}`}>
      {trend === "up"     && <TrendingUp   className="h-3.5 w-3.5" />}
      {trend === "down"   && <TrendingDown className="h-3.5 w-3.5" />}
      {trend === "stable" && <Minus        className="h-3.5 w-3.5" />}
      <span className="capitalize">{trend}</span>
    </div>
  );
}

export default function RatesTable() {
  const waUrl = formatWhatsAppUrl("Hello! I would like daily rate updates for agricultural commodities.", BUSINESS.whatsappNumber);

  return (
    <Reveal>
      <div className="bg-card rounded-3xl border border-border shadow-lg overflow-hidden">
        {/* Header */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 px-6 py-5 border-b border-border">
          <div>
            <h3 className="font-display font-bold text-foreground text-lg">Daily Commodity Rates</h3>
            <p className="text-xs text-muted-foreground mt-0.5">Indicative — contact for confirmed pricing</p>
          </div>
          <div className="flex items-center gap-3">
            <span className="flex items-center gap-1.5 text-xs border border-border px-3 py-1.5 rounded-xl text-muted-foreground bg-muted/20">
              <RefreshCw className="h-3 w-3" />Updated: Morning
            </span>
            <motion.a href={waUrl} target="_blank" rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.96 }}
              className="flex items-center gap-1.5 bg-[#25D366] hover:bg-[#20c45a] text-white text-xs font-semibold px-3.5 py-1.5 rounded-xl transition-colors"
            ><MessageCircle className="h-3.5 w-3.5" />Live Updates</motion.a>
          </div>
        </div>

        {/* Table */}
        <div className="overflow-x-auto scrollbar-gold">
          <table className="w-full" aria-label="Agricultural commodity rates">
            <thead>
              <tr className="bg-muted/30 text-[11px] uppercase tracking-wider">
                {["Commodity","Variety","Quality","Unit","Current Rate","Yesterday","Trend"].map((h, i) => (
                  <th key={i} scope="col" className={`px-5 py-3 font-semibold text-muted-foreground text-left ${i >= 2 ? "hidden md:table-cell" : ""} ${i >= 3 ? "hidden lg:table-cell" : ""} ${i === 5 ? "hidden xl:table-cell" : ""}`}>
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {RATES.map((rate, i) => (
                <motion.tr
                  key={i}
                  initial={{ opacity: 0, x: -12 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.04, duration: 0.4, ease: [0.16,1,0.3,1] }}
                  viewport={{ once: true }}
                  className="border-t border-border/50 hover:bg-muted/20 transition-colors group"
                >
                  <td className="px-5 py-4 font-semibold text-sm text-foreground group-hover:text-earth transition-colors whitespace-nowrap">{rate.commodity}</td>
                  <td className="px-5 py-4 text-sm text-muted-foreground whitespace-nowrap">{rate.variety}</td>
                  <td className="px-5 py-4 hidden md:table-cell"><span className="text-xs bg-secondary text-secondary-foreground px-2.5 py-1 rounded-full font-medium">{rate.quality}</span></td>
                  <td className="px-5 py-4 text-sm text-muted-foreground whitespace-nowrap hidden lg:table-cell">{rate.unit}</td>
                  <td className="px-5 py-4 font-bold text-sm text-foreground whitespace-nowrap">{rate.currentRate}</td>
                  <td className="px-5 py-4 text-sm text-muted-foreground whitespace-nowrap hidden xl:table-cell">{rate.yesterdayRate}</td>
                  <td className="px-5 py-4"><TrendBadge trend={rate.trend} /></td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </Reveal>
  );
}
