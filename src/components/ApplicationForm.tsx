"use client";

import { useEffect, useRef, useState } from "react";
import { getDictionary, type Locale } from "@/lib/i18n";
import type { Opening } from "@/lib/openings";

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

const TURNSTILE_SITE_KEY = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY;
const TURNSTILE_SCRIPT_SRC =
  "https://challenges.cloudflare.com/turnstile/v0/api.js?onload=onTurnstileLoad&render=explicit";

const inputClassName =
  "w-full bg-transparent border-b border-white/[0.1] py-3 text-white placeholder-gray-600 focus:border-white/30 focus:outline-none transition-colors duration-300";
const labelClassName =
  "block text-xs font-medium uppercase tracking-[0.15em] text-gray-500 mb-2";

type SubmitErrorCode =
  | "generic"
  | "validation"
  | "cvType"
  | "cvSize"
  | "turnstile"
  | "rateLimited"
  | "closed";

function errorCodeFromResponse(status: number, body: unknown): SubmitErrorCode {
  const code =
    body && typeof body === "object" && "error" in body
      ? String((body as { error: unknown }).error)
      : "";
  switch (code) {
    case "validation":
      return "validation";
    case "cv_type":
      return "cvType";
    case "cv_size":
      return "cvSize";
    case "turnstile":
      return "turnstile";
    case "closed":
      return "closed";
    default:
      break;
  }
  if (status === 429) {
    return "rateLimited";
  }
  if (status === 413) {
    return "cvSize";
  }
  return "generic";
}

type ApplicationFormProps = {
  locale: Locale;
  opening: Opening;
};

export function ApplicationForm({ locale, opening }: ApplicationFormProps) {
  const dictionary = getDictionary(locale);
  const page = dictionary.pages.careers;
  const form = page.form;

  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorCode, setErrorCode] = useState<SubmitErrorCode | null>(null);
  const [cvName, setCvName] = useState<string | null>(null);
  const [turnstileToken, setTurnstileToken] = useState("");
  const turnstileRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!TURNSTILE_SITE_KEY) {
      return;
    }

    const renderWidget = () => {
      if (turnstileRef.current && window.turnstile) {
        turnstileRef.current.innerHTML = "";
        window.turnstile.render(turnstileRef.current, {
          sitekey: TURNSTILE_SITE_KEY,
          callback: setTurnstileToken,
          "expired-callback": () => setTurnstileToken(""),
          "error-callback": () => setTurnstileToken(""),
          theme: "dark",
        });
      }
    };

    if (window.turnstile) {
      renderWidget();
      return;
    }

    window.onTurnstileLoad = renderWidget;
    if (!document.querySelector(`script[src="${TURNSTILE_SCRIPT_SRC}"]`)) {
      const script = document.createElement("script");
      script.src = TURNSTILE_SCRIPT_SRC;
      script.async = true;
      document.head.appendChild(script);
    }
  }, []);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (submitting) {
      return;
    }
    setErrorCode(null);
    setSubmitting(true);

    try {
      const formData = new FormData(event.currentTarget);
      formData.set("openingSlug", opening.slug);
      formData.set("locale", locale);
      if (turnstileToken) {
        formData.set("turnstileToken", turnstileToken);
      }

      const response = await fetch("/api/applications", {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        setSubmitted(true);
        return;
      }

      const body = await response.json().catch(() => null);
      setErrorCode(errorCodeFromResponse(response.status, body));
    } catch {
      setErrorCode("generic");
    } finally {
      setSubmitting(false);
    }
  }

  if (submitted) {
    return (
      <div className="text-center py-20">
        <div className="w-16 h-16 rounded-full bg-white/[0.06] mx-auto mb-6 flex items-center justify-center">
          <svg
            className="w-8 h-8 text-white/60"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m4.5 12.75 6 6 9-13.5"
            />
          </svg>
        </div>
        <h3 className="text-headline mb-3">{page.success.title}</h3>
        <p className="text-body-large">{page.success.description}</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6" noValidate={false}>
      <div>
        <label htmlFor="name" className={labelClassName}>
          {form.nameLabel}
        </label>
        <input
          type="text"
          id="name"
          name="name"
          required
          maxLength={200}
          autoComplete="name"
          className={inputClassName}
          placeholder={form.namePlaceholder}
        />
      </div>

      <div>
        <label htmlFor="email" className={labelClassName}>
          {form.emailLabel}
        </label>
        <input
          type="email"
          id="email"
          name="email"
          required
          maxLength={320}
          autoComplete="email"
          className={inputClassName}
          placeholder={form.emailPlaceholder}
        />
      </div>

      <div>
        <label htmlFor="phone" className={labelClassName}>
          {form.phoneLabel}{" "}
          <span className="normal-case tracking-normal text-gray-600">
            · {form.optionalLabel}
          </span>
        </label>
        <input
          type="tel"
          id="phone"
          name="phone"
          maxLength={50}
          autoComplete="tel"
          className={inputClassName}
          placeholder={form.phonePlaceholder}
        />
      </div>

      <div>
        <label htmlFor="link" className={labelClassName}>
          {form.linkLabel}{" "}
          <span className="normal-case tracking-normal text-gray-600">
            · {form.optionalLabel}
          </span>
        </label>
        <input
          type="url"
          id="link"
          name="link"
          maxLength={500}
          className={inputClassName}
          placeholder={form.linkPlaceholder}
        />
      </div>

      {opening.questions.map((question) => {
        const fieldName = `question:${question.id}`;
        return (
          <div key={question.id}>
            <label htmlFor={fieldName} className={labelClassName}>
              {question.label[locale]}
              {!question.required && (
                <span className="normal-case tracking-normal text-gray-600">
                  {" "}
                  · {form.optionalLabel}
                </span>
              )}
            </label>
            {question.type === "select" ? (
              <select
                id={fieldName}
                name={fieldName}
                required={question.required}
                defaultValue=""
                className={`${inputClassName} appearance-none cursor-pointer`}
              >
                <option value="" disabled className="bg-black">
                  {form.selectPlaceholder}
                </option>
                {(question.options ?? []).map((option) => (
                  <option
                    key={option.value}
                    value={option.value}
                    className="bg-black"
                  >
                    {option.label[locale]}
                  </option>
                ))}
              </select>
            ) : question.type === "textarea" ? (
              <textarea
                id={fieldName}
                name={fieldName}
                rows={4}
                required={question.required}
                maxLength={2000}
                className={`${inputClassName} resize-none`}
              />
            ) : (
              <input
                type="text"
                id={fieldName}
                name={fieldName}
                required={question.required}
                maxLength={500}
                className={inputClassName}
              />
            )}
          </div>
        );
      })}

      <div>
        <label htmlFor="motivation" className={labelClassName}>
          {form.motivationLabel}{" "}
          <span className="normal-case tracking-normal text-gray-600">
            · {form.optionalLabel}
          </span>
        </label>
        <textarea
          id="motivation"
          name="motivation"
          rows={5}
          maxLength={5000}
          className={`${inputClassName} resize-none`}
          placeholder={form.motivationPlaceholder}
        />
      </div>

      <div>
        <label htmlFor="cv" className={labelClassName}>
          {form.cvLabel}{" "}
          <span className="normal-case tracking-normal text-gray-600">
            · {form.cvHelp}
          </span>
        </label>
        <label
          htmlFor="cv"
          className="flex items-center gap-4 border-b border-white/[0.1] py-3 cursor-pointer transition-colors duration-300 hover:border-white/30"
        >
          <span className="shrink-0 rounded-full border border-white/20 px-4 py-1.5 text-[13px] text-white transition-colors duration-300 hover:border-white/40">
            {form.cvButton}
          </span>
          <span className="text-[14px] text-gray-500 truncate">
            {cvName ?? form.cvNoFile}
          </span>
        </label>
        <input
          type="file"
          id="cv"
          name="cv"
          required
          accept="application/pdf,.pdf"
          className="sr-only"
          onChange={(event) =>
            setCvName(event.currentTarget.files?.[0]?.name ?? null)
          }
        />
      </div>

      <label className="flex items-start gap-3 pt-2 cursor-pointer">
        <input
          type="checkbox"
          name="consent"
          required
          className="mt-1 h-4 w-4 shrink-0 cursor-pointer accent-white"
        />
        <span className="text-[13px] leading-relaxed text-gray-500">
          {form.consentLabel}
        </span>
      </label>

      {TURNSTILE_SITE_KEY && (
        <div ref={turnstileRef} className="min-h-[65px]" />
      )}

      {errorCode && (
        <p className="text-[14px] text-red-400" role="alert">
          {page.errors[errorCode]}
        </p>
      )}

      <button
        type="submit"
        disabled={submitting}
        className="w-full bg-white text-black rounded-full py-4 text-[14px] font-medium hover:bg-gray-200 transition-all duration-300 hover:scale-[1.01] mt-4 disabled:opacity-60 disabled:hover:scale-100"
      >
        {submitting ? form.submittingLabel : form.submitLabel}
      </button>
    </form>
  );
}
