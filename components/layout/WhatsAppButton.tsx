"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, X } from "lucide-react";
import { BUSINESS } from "@/lib/data";
import { formatWhatsAppUrl } from "@/lib/utils";

export default function WhatsAppButton() {
  const [show, setShow] = useState(false);
  const [pulse, setPulse] = useState(true);

  useEffect(() => {
    const t = setTimeout(() => setShow(true), 2500);
    const t2 = setTimeout(() => setPulse(false), 8000);
    return () => { clearTimeout(t); clearTimeout(t2); };
  }, []);

  const url = formatWhatsAppUrl(
    "Hello! I'm interested in your agricultural commodities. Please share more details.",
    BUSINESS.whatsappNumber
  );

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ scale: 0, opacity: 0, y: 20 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0, opacity: 0, y: 20 }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
          className="fixed bottom-6 right-6 z-50"
        >
          {/* Pulse rings */}
          {pulse && (
            <>
              <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-30" aria-hidden="true" />
              <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-20 [animation-delay:0.5s]" aria-hidden="true" />
            </>
          )}

          <motion.a
            href={url} target="_blank" rel="noopener noreferrer"
            aria-label="Chat with us on WhatsApp"
            className="relative flex items-center justify-center w-14 h-14 rounded-full bg-[#25D366] shadow-xl hover:shadow-2xl transition-shadow"
            whileHover={{ scale: 1.12 }}
            whileTap={{ scale: 0.93 }}
          >
            <MessageCircle className="h-6 w-6 text-white" aria-hidden="true" />
          </motion.a>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
