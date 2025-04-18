"use client";

import { useEffect } from "react";
import { motion } from "framer-motion";

export default function Preloader({ onComplete }) {
  useEffect(() => {
    const timeout = setTimeout(() => {
      onComplete();
    }, 3000); // 3 seconds

    return () => clearTimeout(timeout);
  }, [onComplete]);

  return (
    <motion.div
      className="fixed top-0 left-0 w-full h-full bg-[#0a192f] flex items-center justify-center z-50"
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5, delay: 2.5 }}
    >
      {/* Spinner */}
      <div className="w-20 h-20 border-4 border-white border-t-transparent rounded-full animate-spin"></div>
    </motion.div>
  );
}
