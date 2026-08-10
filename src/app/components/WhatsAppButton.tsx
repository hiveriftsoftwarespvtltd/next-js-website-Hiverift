"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { MessageCircle } from "lucide-react";
import { motion } from "motion/react";

export function WhatsAppButton() {
  const [mounted, setMounted] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  // Hide WhatsApp floating button on Admin Dashboard and Login page
  if (pathname?.startsWith("/admin") || pathname === "/login") {
    return null;
  }

  const phoneNumber = "918814930229";
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=Hi%20HiveRift%2C%20I%20would%20like%20to%20know%20more%20about%20your%20services.`;

  return (
    <motion.a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      suppressHydrationWarning
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.3 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      className="fixed bottom-6 left-6 z-50 flex items-center justify-center w-14 h-14 bg-gradient-to-br from-green-400 to-green-600 text-white rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 group"
    >
      <MessageCircle size={24} strokeWidth={2} />

      {/* Tooltip */}
      <motion.div
        suppressHydrationWarning
        initial={{ opacity: 0, x: -10 }}
        whileHover={{ opacity: 1, x: 0 }}
        className="absolute left-20 whitespace-nowrap bg-gray-900 text-white px-3 py-2 rounded-lg text-sm font-semibold pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-200"
      >
        Message us on WhatsApp
        <div suppressHydrationWarning className="absolute -left-1 top-1/2 transform -translate-y-1/2 w-2 h-2 bg-gray-900 rotate-45"></div>
      </motion.div>

      {/* Pulse animation */}
      <div suppressHydrationWarning className="absolute inset-0 bg-green-500 rounded-full animate-pulse opacity-25"></div>
    </motion.a>
  );
}
