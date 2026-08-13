export type ShareTone = "amber" | "blue" | "neutral";

type ShareHighlight = {
  label: string;
  title: string;
  description: string;
};

type ShareImageProps = {
  eyebrow: string;
  title: string;
  description: string;
  tone?: ShareTone;
  highlights?: ShareHighlight[];
  footer?: string;
};

const toneStyles: Record<
  ShareTone,
  {
    accent: string;
    glow: string;
    glowSoft: string;
    border: string;
    chipBg: string;
    chipText: string;
  }
> = {
  amber: {
    accent: "#f5b464",
    glow: "rgba(245,180,100,0.36)",
    glowSoft: "rgba(245,180,100,0.12)",
    border: "rgba(245,180,100,0.22)",
    chipBg: "rgba(245,180,100,0.08)",
    chipText: "#f9d19c",
  },
  blue: {
    accent: "#5b93ff",
    glow: "rgba(91,147,255,0.38)",
    glowSoft: "rgba(91,147,255,0.12)",
    border: "rgba(91,147,255,0.22)",
    chipBg: "rgba(91,147,255,0.08)",
    chipText: "#a9c4ff",
  },
  neutral: {
    accent: "#ffffff",
    glow: "rgba(255,255,255,0.18)",
    glowSoft: "rgba(255,255,255,0.08)",
    border: "rgba(255,255,255,0.14)",
    chipBg: "rgba(255,255,255,0.06)",
    chipText: "#f2f2f2",
  },
};

export function BrandMark({
  tone = "amber",
  size = 72,
}: {
  tone?: ShareTone;
  size?: number;
}) {
  const colors = toneStyles[tone];

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 72 72"
      fill="none"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id={`brand-bg-${tone}`} x1="0" y1="0" x2="72" y2="72">
          <stop offset="0%" stopColor="#111111" />
          <stop offset="100%" stopColor="#050505" />
        </linearGradient>
        <linearGradient
          id={`brand-stroke-${tone}`}
          x1="10"
          y1="10"
          x2="62"
          y2="62"
        >
          <stop offset="0%" stopColor={colors.accent} stopOpacity="1" />
          <stop offset="100%" stopColor="#ffffff" stopOpacity="0.2" />
        </linearGradient>
      </defs>
      <rect
        x="1"
        y="1"
        width="70"
        height="70"
        rx="20"
        fill={`url(#brand-bg-${tone})`}
        stroke={colors.border}
        strokeWidth="1.5"
      />
      <circle cx="22" cy="24" r="13" fill={colors.glowSoft} />
      <circle cx="50" cy="48" r="16" fill={colors.glowSoft} />
      <path
        d="M20 52L35.8 18H36.2L52 52"
        stroke={`url(#brand-stroke-${tone})`}
        strokeWidth="6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M27 40H45"
        stroke={colors.accent}
        strokeOpacity="0.9"
        strokeWidth="6"
        strokeLinecap="round"
      />
      <path
        d="M27 51H45"
        stroke="rgba(255,255,255,0.22)"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function ShareImage({
  eyebrow,
  title,
  description,
  tone = "amber",
  highlights = [],
  footer = "Built for what's next.",
}: ShareImageProps) {
  const colors = toneStyles[tone];

  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        position: "relative",
        backgroundColor: "#050505",
        color: "#ffffff",
        padding: "48px 56px",
        fontFamily:
          '"Inter", "SF Pro Display", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
        overflow: "hidden",
      }}
    >
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "radial-gradient(circle at 20% 18%, rgba(255,255,255,0.07) 0, transparent 28%), radial-gradient(circle at 80% 24%, rgba(255,255,255,0.04) 0, transparent 22%), linear-gradient(135deg, rgba(255,255,255,0.03) 0%, transparent 40%, rgba(255,255,255,0.02) 100%)",
        }}
      />
      <div
        style={{
          position: "absolute",
          top: "-120px",
          right: "-120px",
          width: "360px",
          height: "360px",
          borderRadius: "999px",
          background: `radial-gradient(circle, ${colors.glow} 0%, transparent 70%)`,
          filter: "blur(8px)",
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: "-130px",
          left: "-120px",
          width: "380px",
          height: "380px",
          borderRadius: "999px",
          background: `radial-gradient(circle, ${colors.glowSoft} 0%, transparent 70%)`,
          filter: "blur(12px)",
        }}
      />

      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "16px",
          position: "relative",
        }}
      >
        <BrandMark tone={tone} size={76} />
        <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
          <div
            style={{
              fontSize: "14px",
              letterSpacing: "0.22em",
              textTransform: "uppercase",
              color: "rgba(255,255,255,0.58)",
              fontWeight: 700,
            }}
          >
            Avernsys
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              padding: "8px 12px",
              borderRadius: "999px",
              background: colors.chipBg,
              color: colors.chipText,
              fontSize: "16px",
              fontWeight: 600,
              border: `1px solid ${colors.border}`,
            }}
          >
            {eyebrow}
          </div>
        </div>
      </div>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "24px",
          position: "relative",
        }}
      >
        <h1
          style={{
            fontSize: "72px",
            lineHeight: 0.96,
            letterSpacing: "-0.05em",
            fontWeight: 800,
            margin: 0,
            maxWidth: "900px",
          }}
        >
          {title}
        </h1>
        <p
          style={{
            margin: 0,
            maxWidth: "760px",
            fontSize: "28px",
            lineHeight: 1.35,
            color: "rgba(255,255,255,0.66)",
            letterSpacing: "-0.02em",
          }}
        >
          {description}
        </p>
      </div>

      {highlights.length > 0 ? (
        <div
          style={{
            display: "flex",
            gap: "16px",
            position: "relative",
          }}
        >
          {highlights.slice(0, 3).map((highlight) => (
            <div
              key={highlight.label}
              style={{
                flex: 1,
                minHeight: "150px",
                padding: "20px 22px",
                borderRadius: "24px",
                background: "rgba(255,255,255,0.03)",
                border: "1px solid rgba(255,255,255,0.08)",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
              }}
            >
              <div
                style={{
                  fontSize: "13px",
                  letterSpacing: "0.18em",
                  textTransform: "uppercase",
                  color: "rgba(255,255,255,0.5)",
                  fontWeight: 700,
                }}
              >
                {highlight.label}
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <div
                  style={{
                    fontSize: "30px",
                    lineHeight: 1.05,
                    letterSpacing: "-0.03em",
                    fontWeight: 700,
                    marginBottom: "8px",
                  }}
                >
                  {highlight.title}
                </div>
                <div
                  style={{
                    fontSize: "18px",
                    lineHeight: 1.45,
                    color: "rgba(255,255,255,0.64)",
                  }}
                >
                  {highlight.description}
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : null}

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          position: "relative",
          paddingTop: "8px",
        }}
      >
        <div
          style={{
            fontSize: "18px",
            color: "rgba(255,255,255,0.46)",
            letterSpacing: "0.04em",
          }}
        >
          {footer}
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "10px",
            fontSize: "18px",
            color: "rgba(255,255,255,0.7)",
          }}
        >
          <span
            style={{
              width: "10px",
              height: "10px",
              borderRadius: "999px",
              background: colors.accent,
              boxShadow: `0 0 18px ${colors.glow}`,
            }}
          />
          <span>Avernsys.com</span>
        </div>
      </div>
    </div>
  );
}
