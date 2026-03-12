"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Phone, Sun, Moon, Wheat } from "lucide-react";
import { useTheme } from "next-themes";
import { motion, AnimatePresence } from "framer-motion";
import { NAV_ITEMS, BUSINESS } from "@/lib/data";
import { formatWhatsAppUrl, cn } from "@/lib/utils";

export default function Navigation() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [mounted, setMounted] = useState(false);
  const pathname = usePathname();
  const { theme, setTheme } = useTheme();

  useEffect(() => { setMounted(true); }, []);
  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 24);
    fn();
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);
  useEffect(() => { setOpen(false); }, [pathname]);

  const waUrl = formatWhatsAppUrl("Hello! I'm interested in your commodities.", BUSINESS.whatsappNumber);

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className={cn(
          "fixed top-0 inset-x-0 z-50 transition-all duration-500",
          scrolled
            ? "bg-card/95 backdrop-blur-2xl border-b border-border shadow-md"
            : "bg-transparent"
        )}
      >
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <div className="flex items-center justify-between h-16 md:h-18">

            {/* Logo */}
            <Link href="/" className="flex items-center gap-3 group" aria-label="Bhavani Store">
              <motion.div
                whileHover={{ rotate: 10, scale: 1.1 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
                className={cn(
                  "w-9 h-9 rounded-xl flex items-center justify-center transition-all duration-300",
                  scrolled
                    ? "bg-gradient-hero shadow"
                    : "bg-white/12 border border-white/25 backdrop-blur-sm"
                )}
              >
                <Wheat className="h-4.5 w-4.5 text-gold" aria-hidden="true" />
              </motion.div>
              <div>
                <p className={cn(
                  "font-display font-bold text-[1.1rem] leading-none transition-colors duration-300",
                  scrolled ? "text-foreground" : "text-white"
                )}>Bhavani Store</p>
                <p className={cn(
                  "text-[10px] tracking-wider transition-colors duration-300",
                  scrolled ? "text-muted-foreground" : "text-white/50"
                )}>Since {BUSINESS.established}</p>
              </div>
            </Link>

            {/* Desktop links */}
            <div className="hidden md:flex items-center gap-1">
              {NAV_ITEMS.map((item) => {
                const active = pathname === item.href;
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={cn(
                      "relative px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200",
                      active
                        ? scrolled ? "text-earth" : "text-gold"
                        : scrolled
                          ? "text-muted-foreground hover:text-foreground hover:bg-muted/60"
                          : "text-white/75 hover:text-white hover:bg-white/10"
                    )}
                    aria-current={active ? "page" : undefined}
                  >
                    {item.label}
                    {active && (
                      <motion.span
                        layoutId="nav-indicator"
                        className={cn(
                          "absolute bottom-0.5 left-3 right-3 h-0.5 rounded-full",
                          scrolled ? "bg-earth" : "bg-gold"
                        )}
                        transition={{ type: "spring", stiffness: 380, damping: 28 }}
                      />
                    )}
                  </Link>
                );
              })}
            </div>

            {/* Right actions */}
            <div className="hidden md:flex items-center gap-3">
              {mounted && (
                <motion.button
                  whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}
                  onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                  className={cn(
                    "p-2 rounded-lg transition-colors",
                    scrolled ? "text-muted-foreground hover:text-foreground hover:bg-muted/60" : "text-white/60 hover:text-white hover:bg-white/10"
                  )}
                  aria-label="Toggle theme"
                >
                  {theme === "dark" ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
                </motion.button>
              )}
              <motion.a
                href={waUrl} target="_blank" rel="noopener noreferrer"
                whileHover={{ scale: 1.04, y: -1 }} whileTap={{ scale: 0.97 }}
                className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#20c45a] text-white text-sm font-semibold px-5 py-2 rounded-xl shadow-md hover:shadow-lg transition-shadow"
              >
                <Phone className="h-3.5 w-3.5" /> WhatsApp
              </motion.a>
            </div>

            {/* Mobile toggle */}
            <div className="md:hidden flex items-center gap-2">
              {mounted && (
                <button onClick={() => setTheme(theme === "dark" ? "light" : "dark")} className={cn("p-2 rounded-lg", scrolled ? "text-muted-foreground" : "text-white/70")}>
                  {theme === "dark" ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
                </button>
              )}
              <button
                onClick={() => setOpen(!open)}
                className={cn("p-2 rounded-lg", scrolled ? "text-foreground" : "text-white")}
                aria-label={open ? "Close menu" : "Open menu"}
                aria-expanded={open}
              >
                <AnimatePresence mode="wait" initial={false}>
                  {open
                    ? <motion.div key="x" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.2 }}><X className="h-5 w-5" /></motion.div>
                    : <motion.div key="menu" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }} transition={{ duration: 0.2 }}><Menu className="h-5 w-5" /></motion.div>
                  }
                </AnimatePresence>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile drawer */}
        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              className="md:hidden overflow-hidden border-t border-border"
            >
              <div className="bg-card/98 backdrop-blur-2xl px-5 py-4 space-y-1">
                {NAV_ITEMS.map((item, i) => (
                  <motion.div
                    key={item.href}
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: i * 0.06, ease: [0.16, 1, 0.3, 1] }}
                  >
                    <Link
                      href={item.href}
                      className={cn(
                        "block px-4 py-2.5 rounded-xl text-sm font-medium transition-colors",
                        pathname === item.href
                          ? "bg-earth/10 text-earth font-semibold"
                          : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
                      )}
                    >{item.label}</Link>
                  </motion.div>
                ))}
                <motion.div initial={{ x: -20, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ delay: NAV_ITEMS.length * 0.06 }} className="pt-1">
                  <a href={waUrl} target="_blank" rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 bg-[#25D366] text-white font-semibold text-sm px-4 py-3 rounded-xl"
                  ><Phone className="h-4 w-4" /> WhatsApp Us</a>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </>
  );
}
