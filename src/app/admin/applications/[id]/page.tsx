import Link from "next/link";
import { headers } from "next/headers";
import { notFound } from "next/navigation";
import { verifyAdminRequest } from "@/lib/adminAuth";
import { getApplication } from "@/lib/applications";
import { defaultLocale, isLocale } from "@/lib/i18n";
import { getOpeningBySlug, getOpeningQuestion } from "@/lib/openings";
import { formatDate, statusBadgeClassNames, statusLabels } from "../../statusStyles";
import { ApplicationActions } from "./ApplicationActions";

type AdminApplicationPageProps = {
  params: Promise<{ id: string }>;
};

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div>
      <dt className="text-[12px] uppercase tracking-[0.15em] text-gray-600">
        {label}
      </dt>
      <dd className="mt-1 text-[14px] text-gray-200">{children}</dd>
    </div>
  );
}

export default async function AdminApplicationPage({
  params,
}: AdminApplicationPageProps) {
  const auth = await verifyAdminRequest(await headers());
  if (!auth.ok) {
    notFound();
  }

  const { id } = await params;
  const application = await getApplication(id).catch(() => null);
  if (!application) {
    notFound();
  }

  const opening = getOpeningBySlug(application.openingSlug);
  const openingTitle =
    opening?.content[defaultLocale].title ?? application.openingSlug;
  const answerEntries = Object.entries(application.answers);
  const candidateLocale = isLocale(application.locale)
    ? application.locale
    : defaultLocale;

  return (
    <>
      <Link
        href="/admin/applications"
        className="text-[13px] text-gray-500 hover:text-white transition-colors"
      >
        ← All applications
      </Link>

      <div className="mt-6 mb-10 flex flex-wrap items-center gap-4">
        <h1 className="text-[26px] font-medium">{application.name}</h1>
        <span
          className={`rounded-full px-3 py-1 text-[13px] ${statusBadgeClassNames[application.status]}`}
        >
          {statusLabels[application.status]}
        </span>
      </div>

      <div className="grid gap-12 lg:grid-cols-[1.2fr_1fr]">
        <div className="space-y-10">
          <dl className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            <Field label="Opening">
              {opening ? (
                <Link
                  href={`/careers/${opening.slug}`}
                  className="hover:underline"
                >
                  {openingTitle}
                </Link>
              ) : (
                openingTitle
              )}
            </Field>
            <Field label="Received">{formatDate(application.createdAt)} UTC</Field>
            <Field label="Email">
              <a href={`mailto:${application.email}`} className="hover:underline">
                {application.email}
              </a>
            </Field>
            <Field label="Phone">{application.phone ?? "—"}</Field>
            <Field label="Link">
              {application.link ? (
                <a
                  href={application.link}
                  target="_blank"
                  rel="noopener noreferrer nofollow"
                  className="hover:underline break-all"
                >
                  {application.link}
                </a>
              ) : (
                "—"
              )}
            </Field>
            <Field label="Form language">{candidateLocale.toUpperCase()}</Field>
            <Field label="Consented">{formatDate(application.consentedAt)} UTC</Field>
            <Field label="CV">
              <a
                href={`/api/admin/applications/${application.id}/cv`}
                className="inline-flex items-center gap-2 rounded-full border border-white/20 px-4 py-1.5 text-[13px] hover:border-white/50 transition-colors"
              >
                <svg
                  className="w-4 h-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3"
                  />
                </svg>
                {application.cvOriginalFilename}
                <span className="text-gray-600">
                  {Math.round(application.cvSizeBytes / 1024)} kB
                </span>
              </a>
            </Field>
          </dl>

          {answerEntries.length > 0 && (
            <div>
              <h2 className="text-[12px] uppercase tracking-[0.15em] text-gray-600 mb-4">
                Custom questions
              </h2>
              <dl className="space-y-4">
                {answerEntries.map(([questionId, answer]) => {
                  const question = opening
                    ? getOpeningQuestion(opening, questionId)
                    : undefined;
                  const option = question?.options?.find(
                    (candidate) => candidate.value === answer,
                  );
                  return (
                    <div key={questionId}>
                      <dt className="text-[13px] text-gray-500">
                        {question?.label[defaultLocale] ?? questionId}
                      </dt>
                      <dd className="mt-1 text-[14px] text-gray-200 whitespace-pre-wrap">
                        {option?.label[defaultLocale] ?? answer}
                      </dd>
                    </div>
                  );
                })}
              </dl>
            </div>
          )}

          {application.motivation && (
            <div>
              <h2 className="text-[12px] uppercase tracking-[0.15em] text-gray-600 mb-4">
                Motivation
              </h2>
              <p className="text-[14px] leading-relaxed text-gray-200 whitespace-pre-wrap">
                {application.motivation}
              </p>
            </div>
          )}
        </div>

        <div>
          <ApplicationActions
            applicationId={application.id}
            status={application.status}
            notes={application.notes}
          />
        </div>
      </div>
    </>
  );
}
