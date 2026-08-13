// Client-safe status constants — no DB imports here; ApplicationActions and
// other client components must not pull pg into the browser bundle.
export const applicationStatuses = [
  "new",
  "in_review",
  "interview",
  "hired",
  "rejected",
] as const;

export type ApplicationStatus = (typeof applicationStatuses)[number];

export function isApplicationStatus(value: string): value is ApplicationStatus {
  return applicationStatuses.includes(value as ApplicationStatus);
}
