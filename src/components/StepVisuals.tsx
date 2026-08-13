"use client";

import { motion } from "framer-motion";

/* ── Step 1: Dense cluster of orders popping in ── */
export function OrderDotsVisual() {
  const dots = [
    { x: 12, y: 10 }, { x: 28, y: 6 }, { x: 45, y: 12 }, { x: 62, y: 8 }, { x: 78, y: 14 }, { x: 91, y: 9 },
    { x: 8, y: 24 }, { x: 22, y: 20 }, { x: 38, y: 26 }, { x: 52, y: 18 }, { x: 68, y: 22 }, { x: 85, y: 28 },
    { x: 15, y: 38 }, { x: 32, y: 34 }, { x: 48, y: 40 }, { x: 58, y: 32 }, { x: 72, y: 36 }, { x: 88, y: 42 },
    { x: 10, y: 52 }, { x: 25, y: 48 }, { x: 42, y: 54 }, { x: 55, y: 46 }, { x: 70, y: 50 }, { x: 82, y: 56 },
    { x: 18, y: 66 }, { x: 35, y: 62 }, { x: 50, y: 68 }, { x: 65, y: 64 }, { x: 80, y: 70 }, { x: 93, y: 66 },
  ];

  return (
    <svg viewBox="0 0 100 80" className="w-full h-24 mb-4" fill="none">
      {/* Faint grid to suggest a map */}
      {[0, 1, 2, 3, 4, 5, 6].map((i) => (
        <line key={`h-${i}`} x1="0" y1={i * 13} x2="100" y2={i * 13} stroke="rgba(255,255,255,0.02)" strokeWidth="0.5" />
      ))}
      {[0, 1, 2, 3, 4, 5, 6, 7].map((i) => (
        <line key={`v-${i}`} x1={i * 14} y1="0" x2={i * 14} y2="80" stroke="rgba(255,255,255,0.02)" strokeWidth="0.5" />
      ))}

      {dots.map((dot, i) => (
        <g key={i}>
          {i % 4 === 0 && (
            <motion.circle
              cx={dot.x}
              cy={dot.y}
              r="3.5"
              fill="none"
              stroke="rgba(80,140,255,0.12)"
              strokeWidth="0.4"
              initial={{ scale: 0, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.04 + 0.3, duration: 0.3 }}
            />
          )}
          <motion.circle
            cx={dot.x}
            cy={dot.y}
            r={i % 5 === 0 ? 1.8 : 1.2}
            fill={i % 3 === 0 ? "rgba(80,140,255,0.6)" : "rgba(80,140,255,0.35)"}
            initial={{ scale: 0, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.04 + 0.2, duration: 0.25 }}
          />
        </g>
      ))}

      {[
        { x: 45, y: 12 },
        { x: 68, y: 22 },
        { x: 25, y: 48 },
      ].map((dot, i) => (
        <motion.circle
          key={`pulse-${i}`}
          cx={dot.x}
          cy={dot.y}
          r="5"
          fill="none"
          stroke="rgba(80,140,255,0.2)"
          strokeWidth="0.5"
          initial={{ scale: 0, opacity: 0 }}
          whileInView={{ scale: [0, 1.5], opacity: [0.5, 0] }}
          viewport={{ once: true }}
          transition={{ delay: 1.2 + i * 0.3, duration: 1, repeat: Infinity, repeatDelay: 2.5 }}
        />
      ))}
    </svg>
  );
}

/* ── Step 2: Scattered stops with messy → clean route ── */
export function OptimizeVisual() {
  /* 12 delivery stops scattered across a city-like area */
  const stops = [
    { x: 15, y: 15 }, { x: 42, y: 10 }, { x: 75, y: 12 }, { x: 88, y: 28 },
    { x: 70, y: 45 }, { x: 85, y: 62 }, { x: 55, y: 70 }, { x: 30, y: 65 },
    { x: 10, y: 55 }, { x: 20, y: 38 }, { x: 50, y: 40 }, { x: 62, y: 28 },
  ];

  /* Messy "before" connections — criss-crossing, inefficient */
  const messyRoutes = [
    `M15,15 L70,45`, `M42,10 L10,55`, `M75,12 L30,65`,
    `M88,28 L15,15`, `M55,70 L75,12`, `M85,62 L42,10`,
    `M30,65 L88,28`, `M20,38 L85,62`, `M62,28 L55,70`,
    `M50,40 L15,15`, `M10,55 L62,28`,
  ];

  /* Clean optimized loop */
  const optimizedRoute = "M15,15 L42,10 L75,12 L88,28 L62,28 L70,45 L85,62 L55,70 L30,65 L10,55 L20,38 L50,40 Z";

  return (
    <svg viewBox="0 0 100 80" className="w-full h-24 mb-4" fill="none">
      {/* Faint street grid */}
      {[0, 1, 2, 3, 4, 5, 6].map((i) => (
        <line key={`h-${i}`} x1="0" y1={i * 13} x2="100" y2={i * 13} stroke="rgba(255,255,255,0.02)" strokeWidth="0.5" />
      ))}
      {[0, 1, 2, 3, 4, 5, 6, 7].map((i) => (
        <line key={`v-${i}`} x1={i * 14} y1="0" x2={i * 14} y2="80" stroke="rgba(255,255,255,0.02)" strokeWidth="0.5" />
      ))}

      {/* Messy routes — draw then fade */}
      {messyRoutes.map((d, i) => (
        <motion.path
          key={`messy-${i}`}
          d={d}
          stroke="rgba(255,80,80,0.1)"
          strokeWidth="0.6"
          strokeLinecap="round"
          initial={{ pathLength: 0, opacity: 0 }}
          whileInView={{ pathLength: [0, 1, 1], opacity: [0, 0.4, 0] }}
          viewport={{ once: true }}
          transition={{
            duration: 2.6,
            delay: 0.2 + i * 0.06,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Optimized loop — draws in after chaos fades */}
      <motion.path
        d={optimizedRoute}
        stroke="rgba(80,140,255,0.08)"
        strokeWidth="6"
        strokeLinecap="round"
        strokeLinejoin="round"
        initial={{ pathLength: 0, opacity: 0 }}
        whileInView={{ pathLength: 1, opacity: 1 }}
        viewport={{ once: true }}
        transition={{
          pathLength: { delay: 2.4, duration: 1.2, ease: [0.22, 1, 0.36, 1] },
          opacity: { delay: 2.2, duration: 0.3 },
        }}
      />
      <motion.path
        d={optimizedRoute}
        stroke="rgba(80,140,255,0.4)"
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeLinejoin="round"
        initial={{ pathLength: 0, opacity: 0 }}
        whileInView={{ pathLength: 1, opacity: 1 }}
        viewport={{ once: true }}
        transition={{
          pathLength: { delay: 2.4, duration: 1.2, ease: [0.22, 1, 0.36, 1] },
          opacity: { delay: 2.2, duration: 0.3 },
        }}
      />

      {/* Stops — always visible */}
      {stops.map((s, i) => (
        <g key={`stop-${i}`}>
          <motion.circle
            cx={s.x}
            cy={s.y}
            r="2.2"
            fill="rgba(80,140,255,0.5)"
            stroke="rgba(80,140,255,0.2)"
            strokeWidth="0.5"
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 + i * 0.04, duration: 0.25 }}
          />
          {/* Tiny stop number */}
          <motion.text
            x={s.x}
            y={s.y + 1}
            textAnchor="middle"
            fill="white"
            fontSize="2.5"
            fontFamily="var(--font-sans)"
            fontWeight="700"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 0.7 }}
            viewport={{ once: true }}
            transition={{ delay: 3.4 + i * 0.04, duration: 0.3 }}
          >
            {i + 1}
          </motion.text>
        </g>
      ))}

      {/* Moving dot along optimized route */}
      <motion.circle
        r="2"
        fill="white"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: [0, 0.9, 0.9, 0] }}
        viewport={{ once: true }}
        transition={{ delay: 3.8, duration: 2, ease: "linear" }}
      >
        <animateMotion
          dur="2s"
          begin="3.8s"
          fill="freeze"
          path={optimizedRoute}
          repeatCount="1"
        />
      </motion.circle>
    </svg>
  );
}

/* ── Step 3: City grid with optimized multi-zone delivery ── */
export function DeliverVisual() {
  /* City block grid — horizontal "streets" */
  const streets = [
    { x1: 5, y1: 15, x2: 95, y2: 15 },
    { x1: 5, y1: 35, x2: 95, y2: 35 },
    { x1: 5, y1: 55, x2: 95, y2: 55 },
    { x1: 5, y1: 72, x2: 95, y2: 72 },
  ];
  /* Vertical "avenues" */
  const avenues = [
    { x1: 10, y1: 8, x2: 10, y2: 78 },
    { x1: 30, y1: 8, x2: 30, y2: 78 },
    { x1: 50, y1: 8, x2: 50, y2: 78 },
    { x1: 70, y1: 8, x2: 70, y2: 78 },
    { x1: 90, y1: 8, x2: 90, y2: 78 },
  ];

  /* Delivery stops at intersections */
  const deliveries = [
    { x: 10, y: 15 }, { x: 30, y: 15 }, { x: 70, y: 15 },
    { x: 90, y: 35 }, { x: 70, y: 35 }, { x: 50, y: 35 },
    { x: 30, y: 55 }, { x: 50, y: 55 }, { x: 90, y: 55 },
    { x: 70, y: 72 }, { x: 30, y: 72 }, { x: 10, y: 55 },
  ];

  /* Optimized delivery route following the grid */
  const deliveryRoute =
    "M10,15 L30,15 L70,15 L70,35 L90,35 L90,55 L50,55 L50,35 L30,35 L30,55 L10,55 L10,72 L30,72 L70,72";

  /* Depot / start point */
  const depot = { x: 10, y: 15 };

  return (
    <svg viewBox="0 0 100 80" className="w-full h-24 mb-4" fill="none">
      {/* City streets */}
      {streets.map((s, i) => (
        <motion.line
          key={`st-${i}`}
          x1={s.x1} y1={s.y1} x2={s.x2} y2={s.y2}
          stroke="rgba(255,255,255,0.04)"
          strokeWidth="0.8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.05, duration: 0.4 }}
        />
      ))}
      {avenues.map((a, i) => (
        <motion.line
          key={`av-${i}`}
          x1={a.x1} y1={a.y1} x2={a.x2} y2={a.y2}
          stroke="rgba(255,255,255,0.04)"
          strokeWidth="0.8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.05, duration: 0.4 }}
        />
      ))}

      {/* Route path — road surface */}
      <motion.path
        d={deliveryRoute}
        stroke="rgba(80,140,255,0.06)"
        strokeWidth="5"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
        initial={{ pathLength: 0 }}
        whileInView={{ pathLength: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.5, duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
      />
      {/* Route path — line */}
      <motion.path
        d={deliveryRoute}
        stroke="rgba(80,140,255,0.35)"
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
        initial={{ pathLength: 0 }}
        whileInView={{ pathLength: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.5, duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
      />

      {/* Delivery stops with sequence numbers */}
      {deliveries.map((d, i) => (
        <g key={`del-${i}`}>
          {/* Pin marker */}
          <motion.circle
            cx={d.x}
            cy={d.y}
            r="3"
            fill="rgba(80,140,255,0.15)"
            stroke="rgba(80,140,255,0.3)"
            strokeWidth="0.5"
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.8 + i * 0.06, duration: 0.25 }}
          />
          <motion.text
            x={d.x}
            y={d.y + 1}
            textAnchor="middle"
            fill="rgba(80,140,255,0.7)"
            fontSize="2.8"
            fontFamily="var(--font-sans)"
            fontWeight="700"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 1 + i * 0.06, duration: 0.2 }}
          >
            {i + 1}
          </motion.text>
        </g>
      ))}

      {/* Depot marker — larger, different style */}
      <motion.rect
        x={depot.x - 3.5}
        y={depot.y - 3.5}
        width="7"
        height="7"
        rx="1.5"
        fill="rgba(80,140,255,0.25)"
        stroke="rgba(80,140,255,0.5)"
        strokeWidth="0.5"
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3, duration: 0.3 }}
      />

      {/* Moving vehicle */}
      <motion.circle
        r="2.5"
        fill="white"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: [0, 0.9, 0.9, 0] }}
        viewport={{ once: true }}
        transition={{ delay: 2.2, duration: 2, ease: "linear" }}
      >
        <animateMotion
          dur="2s"
          begin="2.2s"
          fill="freeze"
          path={deliveryRoute}
          repeatCount="1"
        />
      </motion.circle>

      {/* Stats label */}
      <motion.text
        x="92"
        y="10"
        textAnchor="end"
        fill="rgba(80,140,255,0.25)"
        fontSize="3.2"
        fontFamily="var(--font-sans)"
        fontWeight="500"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 3.5, duration: 0.5 }}
      >
        12 stops · 3 zones
      </motion.text>
    </svg>
  );
}
