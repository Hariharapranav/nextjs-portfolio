"use client";

import { motion } from "framer-motion";

export function AnimatedBackground() {
  return (
    <div className="fixed inset-0 -z-10 pointer-events-none select-none overflow-hidden">
      {/* Base */}
      <div className="absolute inset-0 bg-background transition-colors duration-500" />

      {/* Orb 1 — top-left, cyan */}
      <motion.div
        className="absolute rounded-full"
        style={{
          width: 600,
          height: 600,
          top: "-15%",
          left: "-15%",
          background: "hsl(189 100% 54% / 0.11)",
          filter: "blur(130px)",
        }}
        animate={{
          x: [0, 50, -20, 0],
          y: [0, 40, 60, 0],
          scale: [1, 1.08, 0.96, 1],
        }}
        transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Orb 2 — top-right, violet */}
      <motion.div
        className="absolute rounded-full"
        style={{
          width: 500,
          height: 500,
          top: "-10%",
          right: "-20%",
          background: "hsl(270 80% 62% / 0.09)",
          filter: "blur(110px)",
        }}
        animate={{
          x: [0, -40, 20, 0],
          y: [0, 60, -20, 0],
          scale: [1, 0.95, 1.1, 1],
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut", delay: 3 }}
      />

      {/* Orb 3 — bottom-right, indigo */}
      <motion.div
        className="absolute rounded-full"
        style={{
          width: 480,
          height: 480,
          bottom: "-20%",
          right: "-10%",
          background: "hsl(235 80% 58% / 0.09)",
          filter: "blur(100px)",
        }}
        animate={{
          x: [0, -30, 25, 0],
          y: [0, -45, 20, 0],
          scale: [1, 1.06, 0.94, 1],
        }}
        transition={{ duration: 22, repeat: Infinity, ease: "easeInOut", delay: 7 }}
      />

      {/* Dot grid — full page, very subtle */}
      <div
        className="absolute inset-0 opacity-[0.12] dark:opacity-[0.07]"
        style={{
          backgroundImage:
            "radial-gradient(circle, hsl(var(--foreground) / 0.5) 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />
    </div>
  );
}
