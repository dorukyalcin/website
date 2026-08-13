"use client";

import { motion } from "framer-motion";

/* ── Delivery points on an abstract grid ────── */
const points = [
  { x: 120, y: 80, delay: 0.8 },
  { x: 320, y: 160, delay: 1.0 },
  { x: 200, y: 280, delay: 1.2 },
  { x: 480, y: 100, delay: 1.4 },
  { x: 400, y: 300, delay: 1.6 },
  { x: 560, y: 220, delay: 1.8 },
  { x: 100, y: 380, delay: 2.0 },
  { x: 340, y: 420, delay: 2.2 },
  { x: 520, y: 400, delay: 2.4 },
];

/* Optimized route path connecting points in order */
const routePath =
  "M120,80 C180,100 280,140 320,160 C280,200 220,250 200,280 C160,340 110,360 100,380 C160,400 280,420 340,420 C400,420 480,410 520,400 C540,360 550,280 560,220 C540,170 500,120 480,100 C440,140 420,240 400,300";

export function RouteHeroAnimation() {
  return (
    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
      <svg
        viewBox="0 0 680 500"
        className="w-full h-full max-w-[680px] max-h-[500px] opacity-[0.35]"
        fill="none"
      >
        {/* Subtle grid lines */}
        {[0, 1, 2, 3, 4, 5, 6].map((i) => (
          <motion.line
            key={`h-${i}`}
            x1="0"
            y1={i * 80}
            x2="680"
            y2={i * 80}
            stroke="white"
            strokeOpacity="0.03"
            strokeWidth="1"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 + i * 0.05, duration: 0.8 }}
          />
        ))}
        {[0, 1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
          <motion.line
            key={`v-${i}`}
            x1={i * 80}
            y1="0"
            x2={i * 80}
            y2="500"
            stroke="white"
            strokeOpacity="0.03"
            strokeWidth="1"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 + i * 0.05, duration: 0.8 }}
          />
        ))}

        {/* Route path — draws itself */}
        <motion.path
          d={routePath}
          stroke="rgba(80,140,255,0.3)"
          strokeWidth="2"
          strokeLinecap="round"
          fill="none"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{
            pathLength: { delay: 2.8, duration: 2.5, ease: [0.22, 1, 0.36, 1] },
            opacity: { delay: 2.6, duration: 0.4 },
          }}
        />

        {/* Route path glow */}
        <motion.path
          d={routePath}
          stroke="rgba(80,140,255,0.08)"
          strokeWidth="8"
          strokeLinecap="round"
          fill="none"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{
            pathLength: { delay: 2.8, duration: 2.5, ease: [0.22, 1, 0.36, 1] },
            opacity: { delay: 2.6, duration: 0.4 },
          }}
        />

        {/* Delivery points */}
        {points.map((point, i) => (
          <g key={i}>
            {/* Pulse ring */}
            <motion.circle
              cx={point.x}
              cy={point.y}
              r="12"
              fill="none"
              stroke="rgba(80,140,255,0.15)"
              strokeWidth="1"
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: [0, 1.5, 1.5], opacity: [0, 0.4, 0] }}
              transition={{
                delay: point.delay + 2,
                duration: 2,
                repeat: Infinity,
                repeatDelay: 3,
                ease: "easeOut",
              }}
            />
            {/* Outer ring */}
            <motion.circle
              cx={point.x}
              cy={point.y}
              r="8"
              fill="none"
              stroke="rgba(80,140,255,0.2)"
              strokeWidth="1"
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{
                delay: point.delay,
                duration: 0.5,
                ease: [0.22, 1, 0.36, 1],
              }}
            />
            {/* Inner dot */}
            <motion.circle
              cx={point.x}
              cy={point.y}
              r="3"
              fill="rgba(80,140,255,0.6)"
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{
                delay: point.delay,
                duration: 0.4,
                ease: [0.22, 1, 0.36, 1],
              }}
            />
          </g>
        ))}

        {/* Moving dot along the route */}
        <motion.circle
          r="4"
          fill="white"
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 1, 1, 0] }}
          transition={{ delay: 3, duration: 2.5, ease: "linear" }}
        >
          <animateMotion
            dur="2.5s"
            begin="3s"
            fill="freeze"
            path={routePath}
            repeatCount="1"
          />
        </motion.circle>
      </svg>
    </div>
  );
}
