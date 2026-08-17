// Single source of truth for company contact facts shown across the site
// (footer, contact page, careers pages) and emitted in structured data.

// Registered legal entity (Delaware corporation).
export const companyLegalName = "Avernsys Inc.";

export const companyAddress = {
  streetAddress: "8 The Green, Ste H",
  addressLocality: "Dover",
  addressRegion: "DE",
  regionName: "Delaware",
  postalCode: "19901",
  addressCountry: "US",
} as const;

// Display lines, in the order they should be printed.
export const companyAddressLines = [
  companyAddress.streetAddress,
  `${companyAddress.addressLocality}, ${companyAddress.regionName} ${companyAddress.postalCode}`,
] as const;

export const companyEmails = {
  // Founder / general inquiries.
  general: "doruk@avernsys.com",
  careers: "careers@avernsys.com",
  sales: "sales@avernsys.com",
} as const;

export type CompanyEmailKey = keyof typeof companyEmails;

// Recruiting line, as printed on the hiring flier.
export const companyPhone = {
  display: "+1 771 249 9191",
  e164: "+17712499191",
} as const;

// Office where on-site roles are based (per the hiring flier). The legal
// address above is the registered office in Delaware.
export const companyOffice = {
  city: "Palo Alto",
  region: "CA",
  countryCode: "US",
} as const;

export function mailto(email: string): string {
  return `mailto:${email}`;
}
