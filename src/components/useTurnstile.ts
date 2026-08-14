"use client";

import { useEffect, useRef, useState } from "react";

declare global {
  interface Window {
    turnstile?: {
      render: (
        element: HTMLElement,
        options: {
          sitekey: string;
          callback: (token: string) => void;
          "expired-callback": () => void;
          "error-callback": () => void;
          theme: "dark" | "light" | "auto";
        },
      ) => string;
    };
    onTurnstileLoad?: () => void;
  }
}

const SITE_KEY = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY;
const SCRIPT_SRC =
  "https://challenges.cloudflare.com/turnstile/v0/api.js?onload=onTurnstileLoad&render=explicit";

// Renders a Turnstile widget into the returned ref. When no site key is
// configured (local dev), `enabled` is false and no script is loaded.
export function useTurnstile() {
  const [token, setToken] = useState("");
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!SITE_KEY) {
      return;
    }

    const renderWidget = () => {
      if (containerRef.current && window.turnstile) {
        containerRef.current.innerHTML = "";
        window.turnstile.render(containerRef.current, {
          sitekey: SITE_KEY,
          callback: setToken,
          "expired-callback": () => setToken(""),
          "error-callback": () => setToken(""),
          theme: "dark",
        });
      }
    };

    if (window.turnstile) {
      renderWidget();
      return;
    }

    window.onTurnstileLoad = renderWidget;
    if (!document.querySelector(`script[src="${SCRIPT_SRC}"]`)) {
      const script = document.createElement("script");
      script.src = SCRIPT_SRC;
      script.async = true;
      document.head.appendChild(script);
    }
  }, []);

  return { token, containerRef, enabled: Boolean(SITE_KEY) };
}
