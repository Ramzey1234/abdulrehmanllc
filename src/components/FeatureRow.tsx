"use client";

import { motion } from "framer-motion";

export function RitualSection() {
  return (
    <section className="relative w-full h-[60vh] overflow-hidden py-40">
      {/* Background image */}
      <div
        className="
    absolute inset-0
    bg-center bg-no-repeat
    brightness-[0.65]
  "
        style={{
          backgroundImage: "url('/assets/images/bg.jpg')",
          backgroundSize: "cover",
        }}
      />

      {/* Soft warm tint */}
      <div className="absolute inset-0 bg-[#f5e7e2]/35 backdrop-blur-[2px]" />

      {/* Ambient floating light blob */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: [0.25, 0.4, 0.25] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="
          absolute -bottom-32 -right-20
          w-[500px] h-[500px]
          bg-[#ffe5dd]
          blur-[120px]
          rounded-full
          opacity-30
        "
      />

      {/* Left vignette shading */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#00000015] to-transparent" />

      <div className="container-page relative z-20 h-full flex flex-col justify-center max-w-4xl">
        {/* MAIN QUOTE */}
        <motion.h2
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="
            text-5xl md:text-7xl
            text-[#332b29]
            leading-[1.15]
            font-[allura]
            tracking-tight
            drop-shadow-[0_2px_16px_rgba(255,255,255,0.35)]
          "
        >
          Beauty is not decoration,
          <br />
          it is a quiet kind of confidence.
        </motion.h2>

        {/* SUPPORTING LINE */}
        <motion.p
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 1.2, ease: "easeOut", delay: 0.2 }}
          className="
            mt-8 text-lg md:text-xl
            text-[#4b403e]
            leading-relaxed
            font-light
            max-w-2xl
            backdrop-blur-[1px]
          "
        >
          Everything we craft begins with intention. A soft moment, a slowing of
          the world, a return to your own presence. Not louder, not brighter,
          simply you, refined in quiet ways.
        </motion.p>

        {/* SIGNATURE LINE ANIMATION */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.1, ease: "easeInOut", delay: 0.45 }}
          className="
            mt-12 h-[2px] w-52 
            bg-[#7a4b47]/80
            origin-left
          "
        />

        {/* SIGNATURE */}
        <motion.p
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.55 }}
          className="
            mt-4 text-3xl 
            text-[#7a4b47]/90
            font-[playfair-display]
            tracking-wide
          "
        >
          — The Atelier
        </motion.p>
      </div>
    </section>
  );
}
