import type { ApplicationStatus } from "@/lib/applicationStatus";

export const statusLabels: Record<ApplicationStatus, string> = {
  new: "New",
  in_review: "In review",
  interview: "Interview",
  hired: "Hired",
  rejected: "Rejected",
};

export const statusBadgeClassNames: Record<ApplicationStatus, string> = {
  new: "bg-blue-500/15 text-blue-300",
  in_review: "bg-amber-500/15 text-amber-300",
  interview: "bg-purple-500/15 text-purple-300",
  hired: "bg-emerald-500/15 text-emerald-300",
  rejected: "bg-white/[0.06] text-gray-500",
};

export function formatDate(value: Date): string {
  return value.toISOString().slice(0, 16).replace("T", " ");
}
