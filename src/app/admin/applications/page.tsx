import Link from "next/link";
import { notFound } from "next/navigation";
import { headers } from "next/headers";
import { verifyAdminRequest } from "@/lib/adminAuth";
import {
  applicationStatuses,
  isApplicationStatus,
} from "@/lib/applicationStatus";
import {
  countApplicationsByOpening,
  listApplications,
  type ApplicationFilters,
} from "@/lib/applications";
import { defaultLocale } from "@/lib/i18n";
import { getOpenings } from "@/lib/openings";
import { formatDate, statusBadgeClassNames, statusLabels } from "../statusStyles";

type AdminApplicationsPageProps = {
  searchParams: Promise<{ opening?: string; status?: string }>;
};

function filterHref(opening?: string, status?: string): string {
  const params = new URLSearchParams();
  if (opening) {
    params.set("opening", opening);
  }
  if (status) {
    params.set("status", status);
  }
  const query = params.toString();
  return query ? `/admin/applications?${query}` : "/admin/applications";
}

function FilterChip({
  href,
  active,
  children,
}: {
  href: string;
  active: boolean;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      className={`rounded-full border px-3 py-1 text-[13px] transition-colors ${
        active
          ? "border-white/60 text-white"
          : "border-white/[0.1] text-gray-500 hover:text-white"
      }`}
    >
      {children}
    </Link>
  );
}

export default async function AdminApplicationsPage({
  searchParams,
}: AdminApplicationsPageProps) {
  const auth = await verifyAdminRequest(await headers());
  if (!auth.ok) {
    notFound();
  }

  const { opening: openingParam, status: statusParam } = await searchParams;
  const openings = getOpenings();

  const filters: ApplicationFilters = {};
  if (openingParam && openings.some((o) => o.slug === openingParam)) {
    filters.openingSlug = openingParam;
  }
  if (statusParam && isApplicationStatus(statusParam)) {
    filters.status = statusParam;
  }

  const [applications, countsByOpening] = await Promise.all([
    listApplications(filters),
    countApplicationsByOpening(),
  ]);

  return (
    <>
      <h1 className="text-[22px] font-medium mb-8">
        Applications
        <span className="ml-3 text-[15px] text-gray-500">
          {applications.length}
        </span>
      </h1>

      <div className="mb-4 flex flex-wrap items-center gap-2">
        <span className="text-[12px] uppercase tracking-[0.15em] text-gray-600 mr-1">
          Opening
        </span>
        <FilterChip
          href={filterHref(undefined, filters.status)}
          active={!filters.openingSlug}
        >
          All
        </FilterChip>
        {openings.map((opening) => (
          <FilterChip
            key={opening.slug}
            href={filterHref(opening.slug, filters.status)}
            active={filters.openingSlug === opening.slug}
          >
            {opening.content[defaultLocale].title}
            <span className="ml-1.5 text-gray-600">
              {countsByOpening[opening.slug] ?? 0}
            </span>
          </FilterChip>
        ))}
      </div>

      <div className="mb-10 flex flex-wrap items-center gap-2">
        <span className="text-[12px] uppercase tracking-[0.15em] text-gray-600 mr-1">
          Status
        </span>
        <FilterChip
          href={filterHref(filters.openingSlug, undefined)}
          active={!filters.status}
        >
          All
        </FilterChip>
        {applicationStatuses.map((status) => (
          <FilterChip
            key={status}
            href={filterHref(filters.openingSlug, status)}
            active={filters.status === status}
          >
            {statusLabels[status]}
          </FilterChip>
        ))}
      </div>

      {applications.length === 0 ? (
        <p className="text-gray-500 py-16 text-center">
          No applications match these filters.
        </p>
      ) : (
        <div className="overflow-x-auto">
          <table className="w-full text-left text-[14px]">
            <thead>
              <tr className="border-b border-white/[0.08] text-[12px] uppercase tracking-[0.15em] text-gray-600">
                <th className="py-3 pr-4 font-medium">Candidate</th>
                <th className="py-3 pr-4 font-medium">Opening</th>
                <th className="py-3 pr-4 font-medium">Status</th>
                <th className="py-3 pr-4 font-medium">Received</th>
              </tr>
            </thead>
            <tbody>
              {applications.map((application) => {
                const opening = openings.find(
                  (o) => o.slug === application.openingSlug,
                );
                return (
                  <tr
                    key={application.id}
                    className="border-b border-white/[0.05] hover:bg-white/[0.02]"
                  >
                    <td className="py-4 pr-4">
                      <Link
                        href={`/admin/applications/${application.id}`}
                        className="font-medium hover:underline"
                      >
                        {application.name}
                      </Link>
                      <div className="text-[13px] text-gray-500">
                        {application.email}
                      </div>
                    </td>
                    <td className="py-4 pr-4 text-gray-400">
                      {opening?.content[defaultLocale].title ??
                        application.openingSlug}
                    </td>
                    <td className="py-4 pr-4">
                      <span
                        className={`inline-block rounded-full px-2.5 py-1 text-[12px] ${statusBadgeClassNames[application.status]}`}
                      >
                        {statusLabels[application.status]}
                      </span>
                    </td>
                    <td className="py-4 pr-4 text-gray-500">
                      {formatDate(application.createdAt)}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      )}
    </>
  );
}
