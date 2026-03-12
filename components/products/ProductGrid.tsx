"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { MessageCircle, Tag, ArrowUpRight } from "lucide-react";
import { Stagger, StaggerItem, Reveal } from "@/components/ui/Motion";
import { PRODUCTS, BUSINESS } from "@/lib/data";
import { formatWhatsAppUrl, generateProductEnquiry } from "@/lib/utils";

const qualityStyle: Record<string, { badge: string; bar: string }> = {
  "Premium Grade":    { badge: "bg-amber-100 dark:bg-amber-900/30 text-amber-700 dark:text-amber-400",  bar: "from-amber-400 to-yellow-500" },
  "Export Grade":     { badge: "bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400",      bar: "from-blue-400 to-blue-600" },
  "Commercial Grade": { badge: "bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300",     bar: "from-slate-400 to-slate-500" },
  "Organic":          { badge: "bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400",  bar: "from-green-400 to-emerald-500" },
  "Industrial Grade": { badge: "bg-orange-100 dark:bg-orange-900/30 text-orange-700 dark:text-orange-400", bar: "from-orange-400 to-orange-600" },
};

export default function ProductGrid() {
  const enquire = (name: string) => {
    window.open(formatWhatsAppUrl(generateProductEnquiry(name), BUSINESS.whatsappNumber), "_blank", "noopener,noreferrer");
  };

  return (
    <section className="py-20" aria-labelledby="products-grid-heading">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <Reveal className="text-center mb-14">
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="block h-px w-10 bg-gold/60" />
            <span className="text-[11px] font-semibold tracking-[0.2em] text-gold uppercase">8 Commodities</span>
            <span className="block h-px w-10 bg-gold/60" />
          </div>
          <h2 id="products-grid-heading" className="text-display-sm font-display font-bold text-foreground mb-4">
            Our <span className="gold-text">Products</span>
          </h2>
          <p className="text-muted-foreground max-w-md mx-auto text-sm">Click any product to enquire via WhatsApp — we respond within 2 hours.</p>
        </Reveal>

        <Stagger className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {PRODUCTS.map((product, i) => {
            const q = qualityStyle[product.quality] ?? { badge: "bg-muted text-foreground", bar: "from-gold to-earth" };
            return (
              <StaggerItem key={product.slug}>
                <motion.article
                  className="group relative bg-card rounded-3xl overflow-hidden border border-border cursor-pointer flex flex-col h-full"
                  whileHover={{ y: -10, boxShadow: "var(--shadow-xl)" }}
                  transition={{ type: "spring", stiffness: 260, damping: 18 }}
                  onClick={() => enquire(product.name)}
                >
                  {/* Image */}
                  <div className="relative overflow-hidden aspect-[4/3]">
                    <motion.div
                      className="absolute inset-0"
                      whileHover={{ scale: 1.08 }}
                      transition={{ duration: 0.6, ease: [0.16,1,0.3,1] }}
                    >
                      <Image
                        src={product.image} alt={`${product.name} — ${product.quality}`}
                        fill className="object-cover"
                        loading={i < 4 ? "eager" : "lazy"}
                        sizes="(max-width:640px) 100vw,(max-width:1024px) 50vw,25vw"
                      />
                    </motion.div>
                    {/* Overlay on hover */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400" />

                    {/* Category chip */}
                    <div className="absolute top-3 left-3">
                      <span className="inline-flex items-center gap-1 bg-card/90 backdrop-blur-sm text-foreground text-[11px] font-semibold px-2.5 py-1 rounded-full shadow-sm">
                        <Tag className="h-3 w-3" />{product.category}
                      </span>
                    </div>

                    {/* Quality badge */}
                    <div className="absolute top-3 right-3">
                      <span className={`text-[11px] font-bold px-2.5 py-1 rounded-full ${q.badge}`}>{product.quality}</span>
                    </div>

                    {/* Enquire overlay */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="glass rounded-2xl px-5 py-2.5 flex items-center gap-2 text-white font-semibold text-sm">
                        <MessageCircle className="h-4 w-4" /> Enquire
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-5 flex flex-col flex-1">
                    <h3 className="font-display text-[1.05rem] font-bold text-foreground mb-2 group-hover:text-earth transition-colors duration-300 flex items-center justify-between gap-1">
                      {product.name}
                      <ArrowUpRight className="h-4 w-4 opacity-0 group-hover:opacity-60 transition-opacity -translate-y-1 group-hover:translate-y-0 flex-shrink-0" />
                    </h3>
                    <p className="text-sm text-muted-foreground clamp-3 flex-1 leading-relaxed mb-5">{product.description}</p>

                    <button
                      className="w-full flex items-center justify-center gap-2 bg-earth hover:bg-earth/90 text-primary-foreground font-semibold text-sm px-4 py-2.5 rounded-xl transition-all"
                      aria-label={`Enquire about ${product.name}`}
                      onClick={e => { e.stopPropagation(); enquire(product.name); }}
                    >
                      <MessageCircle className="h-4 w-4" /> Enquire Now
                    </button>
                  </div>

                  {/* Animated bottom bar */}
                  <motion.div
                    className={`absolute bottom-0 left-0 h-0.5 bg-gradient-to-r ${q.bar}`}
                    initial={{ width: 0 }}
                    whileInView={{ width: "100%" }}
                    transition={{ duration: 0.9, delay: i * 0.06, ease: [0.16,1,0.3,1] }}
                    viewport={{ once: true }}
                  />
                </motion.article>
              </StaggerItem>
            );
          })}
        </Stagger>
      </div>
    </section>
  );
}
