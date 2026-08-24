import type { Locale } from "@/lib/i18n";
import { engineeringOpenings } from "@/content/openings/engineering";
import { dataOpenings } from "@/content/openings/data";
import { gtmOpenings } from "@/content/openings/gtm";
import { internshipOpenings } from "@/content/openings/internships";

export type OpeningStatus = "open" | "closed";

export type EmploymentType =
  | "FULL_TIME"
  | "PART_TIME"
  | "CONTRACTOR"
  | "INTERN";

export type WorkplaceType = "REMOTE" | "HYBRID" | "ONSITE";

// Teams the openings are organised under on the careers page. Internships
// are grouped separately (by employment type) regardless of team.
export const openingTeams = ["engineering", "data", "product", "gtm"] as const;
export type OpeningTeam = (typeof openingTeams)[number];

export const openingGroupKeys = [...openingTeams, "internships"] as const;
export type OpeningGroupKey = (typeof openingGroupKeys)[number];

export type OpeningQuestionType = "text" | "textarea" | "select";

export type OpeningQuestion = {
  id: string;
  type: OpeningQuestionType;
  required: boolean;
  label: Record<Locale, string>;
  options?: readonly {
    value: string;
    label: Record<Locale, string>;
  }[];
};

export type OpeningLocaleContent = {
  title: string;
  summary: string;
  intro: readonly string[];
  responsibilities: readonly string[];
  requirements: readonly string[];
  niceToHave?: readonly string[];
  offer?: readonly string[];
};

export type OpeningSalary = {
  currency: string;
  min: number;
  max: number;
  unitText: "HOUR" | "MONTH" | "YEAR";
};

// "WORLDWIDE" marks a remote role open to applicants anywhere.
export type RemoteEligibility = readonly string[] | "WORLDWIDE";

export type Opening = {
  slug: string;
  status: OpeningStatus;
  postedAt: string;
  validThrough?: string;
  team: OpeningTeam;
  employmentType: EmploymentType;
  workplaceType: WorkplaceType;
  city?: string;
  region?: string;
  countryCode: string;
  remoteEligibleRegions?: RemoteEligibility;
  salary?: OpeningSalary;
  content: Record<Locale, OpeningLocaleContent>;
  questions: readonly OpeningQuestion[];
};

export const openings: readonly Opening[] = [
  ...engineeringOpenings,
  ...dataOpenings,
  ...gtmOpenings,
  ...internshipOpenings,
];

export function getOpenings(): readonly Opening[] {
  return openings;
}

export function getOpenOpenings(): readonly Opening[] {
  return openings.filter((opening) => opening.status === "open");
}

export function getOpeningBySlug(slug: string): Opening | undefined {
  return openings.find((opening) => opening.slug === slug);
}

export function getOpeningQuestion(
  opening: Opening,
  questionId: string,
): OpeningQuestion | undefined {
  return opening.questions.find((question) => question.id === questionId);
}

export function getOpeningGroupKey(opening: Opening): OpeningGroupKey {
  return opening.employmentType === "INTERN" ? "internships" : opening.team;
}

export type OpeningGroup = {
  key: OpeningGroupKey;
  openings: readonly Opening[];
};

// Open positions grouped for display, in the canonical group order; groups
// without open positions are omitted.
export function getOpenOpeningGroups(): readonly OpeningGroup[] {
  const open = getOpenOpenings();
  return openingGroupKeys
    .map((key) => ({
      key,
      openings: open.filter((opening) => getOpeningGroupKey(opening) === key),
    }))
    .filter((group) => group.openings.length > 0);
}

// Latest application deadline across open positions (ISO date), if any.
export function getLatestApplicationDeadline(): string | undefined {
  return getOpenOpenings()
    .map((opening) => opening.validThrough)
    .filter((date): date is string => Boolean(date))
    .sort()
    .at(-1);
}
