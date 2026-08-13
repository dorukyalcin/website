"use client";

import { motion } from "framer-motion";

/* ── Speed: Large gauge filling the container ───── */
export function SpeedVisual() {
  return (
    <div className="relative aspect-square max-w-[480px] mx-auto rounded-3xl glass overflow-hidden flex items-center justify-center">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/[0.06] to-transparent" />

      <svg viewBox="0 0 300 300" className="w-[85%] h-[85%]" fill="none">
        {/* Outer ring */}
        <motion.circle
          cx="150"
          cy="150"
          r="130"
          stroke="rgba(255,255,255,0.08)"
          strokeWidth="1"
          initial={{ scale: 0, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        />

        {/* Second ring */}
        <motion.circle
          cx="150"
          cy="150"
          r="120"
          stroke="rgba(255,255,255,0.04)"
          strokeWidth="0.5"
          initial={{ scale: 0, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.25, duration: 0.6 }}
        />

        {/* 60 fine tick marks around the edge */}
        {Array.from({ length: 60 }).map((_, i) => {
          const a = ((i * 6 - 90) * Math.PI) / 180;
          const isMajor = i % 5 === 0;
          const r1 = isMajor ? 108 : 113;
          const r2 = 118;
          return (
            <line
              key={`fine-${i}`}
              x1={String(Math.round((150 + Math.cos(a) * r1) * 10) / 10)}
              y1={String(Math.round((150 + Math.sin(a) * r1) * 10) / 10)}
              x2={String(Math.round((150 + Math.cos(a) * r2) * 10) / 10)}
              y2={String(Math.round((150 + Math.sin(a) * r2) * 10) / 10)}
              stroke={isMajor ? "rgba(255,255,255,0.2)" : "rgba(255,255,255,0.06)"}
              strokeWidth={isMajor ? "2" : "0.8"}
              strokeLinecap="round"
            />
          );
        })}

        {/* Progress arc — fills quickly with glow */}
        <motion.circle
          cx="150"
          cy="150"
          r="98"
          stroke="rgba(80,140,255,0.08)"
          strokeWidth="16"
          strokeLinecap="round"
          strokeDasharray="616"
          strokeDashoffset="616"
          transform="rotate(-90 150 150)"
          initial={{ strokeDashoffset: 616 }}
          whileInView={{ strokeDashoffset: 60 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
        />
        <motion.circle
          cx="150"
          cy="150"
          r="98"
          stroke="rgba(80,140,255,0.5)"
          strokeWidth="3"
          strokeLinecap="round"
          strokeDasharray="616"
          strokeDashoffset="616"
          transform="rotate(-90 150 150)"
          initial={{ strokeDashoffset: 616 }}
          whileInView={{ strokeDashoffset: 60 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
        />

        {/* Needle */}
        <motion.line
          x1="150"
          y1="150"
          x2="150"
          y2="50"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
          initial={{ rotate: -90 }}
          whileInView={{ rotate: 200 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          style={{ transformOrigin: "150px 150px" }}
        />

        {/* Center hub */}
        <circle cx="150" cy="150" r="6" fill="rgba(80,140,255,0.8)" />
        <circle cx="150" cy="150" r="3" fill="white" />

        {/* Time readout */}
        <motion.text
          x="150"
          y="195"
          textAnchor="middle"
          fill="rgba(80,140,255,0.8)"
          fontSize="22"
          fontFamily="var(--font-sans)"
          fontWeight="600"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 1.5, duration: 0.5 }}
        >
          0.8s
        </motion.text>
        <motion.text
          x="150"
          y="212"
          textAnchor="middle"
          fill="rgba(255,255,255,0.25)"
          fontSize="10"
          fontFamily="var(--font-sans)"
          fontWeight="400"
          letterSpacing="2"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 1.7, duration: 0.5 }}
        >
          AVG RESPONSE
        </motion.text>
      </svg>
    </div>
  );
}

/* ── Optimization: Dense city with before/after routes ── */
export function OptimizationVisual() {
  /* 20 delivery stops scattered across a city grid */
  const stops = [
    { x: 30, y: 25 }, { x: 70, y: 20 }, { x: 120, y: 30 }, { x: 170, y: 22 },
    { x: 220, y: 35 }, { x: 260, y: 25 }, { x: 45, y: 70 }, { x: 95, y: 65 },
    { x: 145, y: 75 }, { x: 200, y: 68 }, { x: 250, y: 72 }, { x: 35, y: 120 },
    { x: 80, y: 115 }, { x: 135, y: 125 }, { x: 185, y: 118 }, { x: 240, y: 110 },
    { x: 55, y: 165 }, { x: 110, y: 160 }, { x: 165, y: 170 }, { x: 225, y: 158 },
  ];

  /* Messy criss-crossing "before" routes */
  const messyRoutes = [
    "M30,25 L200,68 L45,70 L240,110 L70,20",
    "M170,22 L35,120 L260,25 L55,165 L220,35",
    "M120,30 L225,158 L80,115 L250,72 L135,125",
    "M95,65 L165,170 L30,25 L185,118 L110,160",
    "M145,75 L35,120 L220,35 L55,165 L170,22",
    "M260,25 L110,160 L240,110 L45,70 L225,158",
    "M80,115 L220,35 L135,125 L70,20 L185,118",
  ];

  /* Clean optimized loop */
  const optimizedRoute =
    "M30,25 L70,20 L120,30 L170,22 L220,35 L260,25 L250,72 L240,110 L225,158 L200,68 L185,118 L165,170 L145,75 L135,125 L110,160 L95,65 L80,115 L55,165 L45,70 L35,120 Z";

  return (
    <div className="relative aspect-square max-w-[480px] mx-auto rounded-3xl glass overflow-hidden flex items-center justify-center">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/[0.06] to-transparent" />

      <svg viewBox="0 0 290 190" className="w-[90%] h-[70%]" fill="none">
        {/* Faint city grid */}
        {[0, 1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
          <line key={`h-${i}`} x1="5" y1={i * 23 + 10} x2="285" y2={i * 23 + 10} stroke="rgba(255,255,255,0.03)" strokeWidth="0.5" />
        ))}
        {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((i) => (
          <line key={`v-${i}`} x1={i * 30 + 10} y1="5" x2={i * 30 + 10} y2="185" stroke="rgba(255,255,255,0.03)" strokeWidth="0.5" />
        ))}

        {/* Messy routes — draw then fade */}
        {messyRoutes.map((d, i) => (
          <motion.path
            key={`messy-${i}`}
            d={d}
            stroke="rgba(255,70,70,0.18)"
            strokeWidth="1"
            strokeLinecap="round"
            initial={{ pathLength: 0, opacity: 0 }}
            whileInView={{ pathLength: [0, 1, 1], opacity: [0, 0.6, 0] }}
            viewport={{ once: true }}
            transition={{
              duration: 2.8,
              delay: 0.2 + i * 0.08,
              ease: "easeInOut",
            }}
          />
        ))}

        {/* Optimized route — glow layer */}
        <motion.path
          d={optimizedRoute}
          stroke="rgba(80,140,255,0.12)"
          strokeWidth="10"
          strokeLinecap="round"
          strokeLinejoin="round"
          initial={{ pathLength: 0, opacity: 0 }}
          whileInView={{ pathLength: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{
            pathLength: { delay: 2.6, duration: 1.5, ease: [0.22, 1, 0.36, 1] },
            opacity: { delay: 2.4, duration: 0.3 },
          }}
        />
        {/* Optimized route — main line */}
        <motion.path
          d={optimizedRoute}
          stroke="rgba(80,140,255,0.6)"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          initial={{ pathLength: 0, opacity: 0 }}
          whileInView={{ pathLength: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{
            pathLength: { delay: 2.6, duration: 1.5, ease: [0.22, 1, 0.36, 1] },
            opacity: { delay: 2.4, duration: 0.3 },
          }}
        />

        {/* Stops */}
        {stops.map((s, i) => (
          <g key={`stop-${i}`}>
            <motion.circle
              cx={s.x}
              cy={s.y}
              r="5"
              fill="rgba(80,140,255,0.2)"
              stroke="rgba(80,140,255,0.5)"
              strokeWidth="1"
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 + i * 0.03, duration: 0.25 }}
            />
            {/* Stop number appears after optimization */}
            <motion.text
              x={s.x}
              y={s.y + 2.5}
              textAnchor="middle"
              fill="white"
              fontSize="5.5"
              fontFamily="var(--font-sans)"
              fontWeight="700"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 0.8 }}
              viewport={{ once: true }}
              transition={{ delay: 3.8 + i * 0.03, duration: 0.3 }}
            >
              {i + 1}
            </motion.text>
          </g>
        ))}

        {/* Traveling dot */}
        <motion.circle
          r="4"
          fill="white"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: [0, 1, 1, 0] }}
          viewport={{ once: true }}
          transition={{ delay: 4.2, duration: 2.5, ease: "linear" }}
        >
          <animateMotion
            dur="2.5s"
            begin="4.2s"
            fill="freeze"
            path={optimizedRoute}
            repeatCount="1"
          />
        </motion.circle>
      </svg>
    </div>
  );
}

/* ── Integration: Rich connected network / API hub ────── */
export function IntegrationVisual() {
  /* Central hub */
  const hub = { x: 150, y: 100, label: "API" };

  /* Primary satellite systems */
  const primaries = [
    { x: 50, y: 40, label: "ERP" },
    { x: 250, y: 40, label: "WMS" },
    { x: 50, y: 160, label: "CRM" },
    { x: 250, y: 160, label: "OMS" },
  ];

  /* Secondary nodes branching off primaries */
  const secondaries = [
    { x: 20, y: 18, parent: 0 }, { x: 75, y: 15, parent: 0 },
    { x: 225, y: 15, parent: 1 }, { x: 280, y: 18, parent: 1 },
    { x: 20, y: 182, parent: 2 }, { x: 75, y: 185, parent: 2 },
    { x: 225, y: 185, parent: 3 }, { x: 280, y: 182, parent: 3 },
  ];

  /* Cross-connections between primaries */
  const crossLinks = [
    { from: { x: 50, y: 40 }, to: { x: 250, y: 40 } },
    { from: { x: 50, y: 160 }, to: { x: 250, y: 160 } },
    { from: { x: 50, y: 40 }, to: { x: 50, y: 160 } },
    { from: { x: 250, y: 40 }, to: { x: 250, y: 160 } },
  ];

  return (
    <div className="relative aspect-square max-w-[480px] mx-auto rounded-3xl glass overflow-hidden flex items-center justify-center">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/[0.06] to-transparent" />

      <svg viewBox="0 0 300 200" className="w-[90%] h-[70%]" fill="none">
        {/* Cross-connections (faint) */}
        {crossLinks.map((link, i) => (
          <motion.line
            key={`cross-${i}`}
            x1={link.from.x}
            y1={link.from.y}
            x2={link.to.x}
            y2={link.to.y}
            stroke="rgba(255,255,255,0.04)"
            strokeWidth="0.5"
            strokeDasharray="4 4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 1.2 + i * 0.1, duration: 0.5 }}
          />
        ))}

        {/* Hub → primary connections */}
        {primaries.map((p, i) => (
          <motion.line
            key={`hub-${i}`}
            x1={hub.x}
            y1={hub.y}
            x2={p.x}
            y2={p.y}
            stroke="rgba(80,140,255,0.3)"
            strokeWidth="1.5"
            initial={{ pathLength: 0, opacity: 0 }}
            whileInView={{ pathLength: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 + i * 0.1, duration: 0.6 }}
          />
        ))}

        {/* Primary → secondary connections */}
        {secondaries.map((s, i) => {
          const parent = primaries[s.parent];
          return (
            <motion.line
              key={`sec-conn-${i}`}
              x1={parent.x}
              y1={parent.y}
              x2={s.x}
              y2={s.y}
              stroke="rgba(80,140,255,0.15)"
              strokeWidth="0.8"
              initial={{ pathLength: 0, opacity: 0 }}
              whileInView={{ pathLength: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 1 + i * 0.08, duration: 0.4 }}
            />
          );
        })}

        {/* Data pulses traveling hub → primaries */}
        {primaries.map((p, i) => (
          <motion.circle
            key={`pulse-out-${i}`}
            r="3"
            fill="rgba(80,140,255,0.8)"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: [0, 1, 1, 0] }}
            viewport={{ once: true }}
            transition={{
              delay: 1.8 + i * 0.4,
              duration: 0.6,
              ease: "linear",
            }}
          >
            <animateMotion
              dur="0.6s"
              begin={`${1.8 + i * 0.4}s`}
              fill="freeze"
              path={`M${hub.x},${hub.y} L${p.x},${p.y}`}
              repeatCount="1"
            />
          </motion.circle>
        ))}

        {/* Data pulses returning primary → hub */}
        {primaries.map((p, i) => (
          <motion.circle
            key={`pulse-in-${i}`}
            r="2.5"
            fill="rgba(120,180,255,0.7)"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: [0, 1, 1, 0] }}
            viewport={{ once: true }}
            transition={{
              delay: 2.6 + i * 0.4,
              duration: 0.6,
              ease: "linear",
            }}
          >
            <animateMotion
              dur="0.6s"
              begin={`${2.6 + i * 0.4}s`}
              fill="freeze"
              path={`M${p.x},${p.y} L${hub.x},${hub.y}`}
              repeatCount="1"
            />
          </motion.circle>
        ))}

        {/* Secondary nodes */}
        {secondaries.map((s, i) => (
          <motion.circle
            key={`sec-${i}`}
            cx={s.x}
            cy={s.y}
            r="5"
            fill="rgba(255,255,255,0.04)"
            stroke="rgba(255,255,255,0.15)"
            strokeWidth="0.8"
            initial={{ scale: 0, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.8 + i * 0.06, duration: 0.3 }}
          />
        ))}

        {/* Primary nodes */}
        {primaries.map((p, i) => (
          <g key={`primary-${i}`}>
            <motion.circle
              cx={p.x}
              cy={p.y}
              r="18"
              fill="rgba(80,140,255,0.08)"
              stroke="rgba(80,140,255,0.35)"
              strokeWidth="1"
              initial={{ scale: 0, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 + i * 0.08, duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            />
            <motion.text
              x={p.x}
              y={p.y + 4}
              textAnchor="middle"
              fill="rgba(80,140,255,0.8)"
              fontSize="9"
              fontFamily="var(--font-sans)"
              fontWeight="600"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 + i * 0.08, duration: 0.3 }}
            >
              {p.label}
            </motion.text>
          </g>
        ))}

        {/* Central hub — largest, brightest */}
        <motion.circle
          cx={hub.x}
          cy={hub.y}
          r="30"
          fill="rgba(80,140,255,0.04)"
          stroke="rgba(80,140,255,0.15)"
          strokeWidth="1"
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.5 }}
        />
        <motion.circle
          cx={hub.x}
          cy={hub.y}
          r="22"
          fill="rgba(80,140,255,0.15)"
          stroke="rgba(80,140,255,0.5)"
          strokeWidth="1.5"
          initial={{ scale: 0, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        />
        <motion.text
          x={hub.x}
          y={hub.y + 5}
          textAnchor="middle"
          fill="white"
          fontSize="13"
          fontFamily="var(--font-sans)"
          fontWeight="700"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 0.9 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.4 }}
        >
          {hub.label}
        </motion.text>
      </svg>
    </div>
  );
}
