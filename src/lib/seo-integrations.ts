type IntegrationConfig = {
  gtmId?: string;
  ga4Id?: string;
  clarityProjectId?: string;
};

type ScriptDescriptor = {
  id: string;
  src?: string;
  inline?: string;
};

function normalizeEnvValue(value: string | undefined): string | undefined {
  if (!value) {
    return undefined;
  }

  const trimmed = value.trim();
  return trimmed.length > 0 ? trimmed : undefined;
}

export function getSeoIntegrationConfig(
  env: NodeJS.ProcessEnv = process.env,
): IntegrationConfig {
  return {
    gtmId: normalizeEnvValue(env.NEXT_PUBLIC_GTM_ID),
    ga4Id: normalizeEnvValue(env.NEXT_PUBLIC_GA4_ID),
    clarityProjectId: normalizeEnvValue(env.NEXT_PUBLIC_CLARITY_PROJECT_ID),
  };
}

export function getSeoScriptDescriptors(
  config: IntegrationConfig,
): ScriptDescriptor[] {
  const descriptors: ScriptDescriptor[] = [];

  if (config.gtmId) {
    descriptors.push({
      id: "seo-gtm",
      inline: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','${config.gtmId}');`,
    });
  }

  if (config.ga4Id) {
    descriptors.push({
      id: "seo-ga4-src",
      src: `https://www.googletagmanager.com/gtag/js?id=${config.ga4Id}`,
    });
    descriptors.push({
      id: "seo-ga4-init",
      inline: `window.dataLayer = window.dataLayer || [];function gtag(){window.dataLayer.push(arguments);}gtag('js', new Date());gtag('config', '${config.ga4Id}', { send_page_view: true });`,
    });
  }

  if (config.clarityProjectId) {
    descriptors.push({
      id: "seo-clarity",
      inline: `(function(c,l,a,r,i,t,y){c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);})(window,document,"clarity","script","${config.clarityProjectId}");`,
    });
  }

  return descriptors;
}

export function getSeoNoScriptSrc(gtmId?: string): string | undefined {
  return gtmId
    ? `https://www.googletagmanager.com/ns.html?id=${gtmId}`
    : undefined;
}
