import { getSeoIntegrationConfig, getSeoNoScriptSrc, getSeoScriptDescriptors } from "@/lib/seo-integrations";

type SeoIntegrationsProps = {
  includeNoScript?: boolean;
};

export function SeoIntegrations({
  includeNoScript = true,
}: SeoIntegrationsProps) {
  const config = getSeoIntegrationConfig();
  const scripts = getSeoScriptDescriptors(config);
  const noScriptSrc = getSeoNoScriptSrc(config.gtmId);

  if (scripts.length === 0 && (!includeNoScript || !noScriptSrc)) {
    return null;
  }

  return (
    <>
      {includeNoScript && noScriptSrc && (
        <noscript>
          <iframe
            src={noScriptSrc}
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
            aria-hidden="true"
            title="Google Tag Manager"
          />
        </noscript>
      )}

      {scripts.map((script) =>
        script.src ? (
          <script key={script.id} src={script.src} async />
        ) : (
          <script
            key={script.id}
            id={script.id}
            dangerouslySetInnerHTML={{
              __html: script.inline || "",
            }}
          />
        ),
      )}
    </>
  );
}
