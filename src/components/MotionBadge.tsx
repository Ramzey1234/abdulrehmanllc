"use client";
import { motion } from "framer-motion";

export function MotionBadge({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 6 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="badge border-neutral-300 bg-neutral-50"
    >
      {children}
    </motion.div>
  );
}
