import type { Locale } from "@/lib/i18n";
import { softwareEngineerRotasal } from "@/content/openings/software-engineer-rotasal";

export type OpeningStatus = "open" | "closed";

export type EmploymentType =
  | "FULL_TIME"
  | "PART_TIME"
  | "CONTRACTOR"
  | "INTERN";

export type WorkplaceType = "REMOTE" | "HYBRID" | "ONSITE";

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

export type Opening = {
  slug: string;
  status: OpeningStatus;
  postedAt: string;
  validThrough?: string;
  employmentType: EmploymentType;
  workplaceType: WorkplaceType;
  city?: string;
  countryCode: string;
  remoteEligibleRegions?: readonly string[];
  salary?: OpeningSalary;
  content: Record<Locale, OpeningLocaleContent>;
  questions: readonly OpeningQuestion[];
};

export const openings: readonly Opening[] = [softwareEngineerRotasal];

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
