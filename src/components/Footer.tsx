import Link from "next/link";
import { BrandLink } from "@/components/BrandLink";
import {
  companyAddress,
  companyAddressLines,
  companyEmails,
  companyLegalName,
  mailto,
  type CompanyEmailKey,
} from "@/lib/company";
import { formatRegionName } from "@/lib/format";
import { getDictionary, getPagePath, type Locale, type PageLinkKey } from "@/lib/i18n";

type FooterProps = {
  locale: Locale;
};

export function Footer({ locale }: FooterProps) {
  const dictionary = getDictionary(locale);
  const country = formatRegionName(locale, companyAddress.addressCountry);

  return (
    <footer className="border-t border-white/[0.06]">
      <div className="mx-auto max-w-[1200px] px-6 py-16">
        <div className="flex flex-col md:flex-row justify-between gap-12">
          {/* Brand */}
          <div>
            <BrandLink
              href={getPagePath(locale, "home")}
              name={dictionary.navigation.brand}
              className="w-fit"
              imageWrapperClassName="h-10 w-10 rounded-xl"
            />
            <p className="mt-3 text-sm text-gray-500 max-w-[240px]">
              {dictionary.footer.brandDescription}
            </p>
          </div>

          {/* Links */}
          <div className="flex flex-wrap gap-x-16 gap-y-10">
            {dictionary.footer.columns.map((col) => (
              <div key={col.title}>
                <h4 className="text-xs font-medium text-gray-500 uppercase tracking-wider mb-4">
                  {col.title}
                </h4>
                <ul className="space-y-3">
                  {col.links.map((link) => (
                    <li key={link.key}>
                      <Link
                        href={getPagePath(locale, link.key as PageLinkKey)}
                        className="text-sm text-gray-400 hover:text-white transition-colors duration-300"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}

            <div>
              <h4 className="text-xs font-medium text-gray-500 uppercase tracking-wider mb-4">
                {dictionary.footer.contact.title}
              </h4>
              <ul className="space-y-3">
                {dictionary.footer.contact.emails.map((entry) => {
                  const email = companyEmails[entry.key as CompanyEmailKey];
                  return (
                    <li key={entry.key}>
                      <a
                        href={mailto(email)}
                        className="group inline-flex flex-col text-sm leading-tight"
                      >
                        <span className="text-[11px] uppercase tracking-wider text-gray-600 transition-colors duration-300 group-hover:text-gray-400">
                          {entry.label}
                        </span>
                        <span className="text-gray-400 transition-colors duration-300 group-hover:text-white">
                          {email}
                        </span>
                      </a>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-16 pt-8 border-t border-white/[0.06] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <p className="text-xs text-gray-600">
            &copy; {new Date().getFullYear()} {companyLegalName}{" "}
            {dictionary.site.copyright}
          </p>
          <address className="text-xs not-italic text-gray-600 sm:text-right">
            {companyAddressLines.join(", ")}, {country}
          </address>
        </div>
      </div>
    </footer>
  );
}
