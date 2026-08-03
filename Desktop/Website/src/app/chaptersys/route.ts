import { buildArchivedChapterSysResponse } from "@/app/_localized/archivedProductRoute";

export const dynamic = "force-static";

export function GET() {
  return buildArchivedChapterSysResponse("en");
}

export function HEAD() {
  return buildArchivedChapterSysResponse("en", { includeBody: false });
}
