"use client";
import { motion } from "framer-motion";

export default function FadeScroll() {
  return (
    <div className="space-y-40 p-10">
      {Array.from({ length: 5 }).map((_, i) => (
        <motion.div
          key={i}
          className="h-60 bg-blue-500 text-white flex items-center justify-center text-2xl rounded-2xl"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: i * 0.2 }}
          viewport={{ once: true }}
        >
          Animated Box {i + 1}
        </motion.div>
      ))}
    </div>
  );
}

