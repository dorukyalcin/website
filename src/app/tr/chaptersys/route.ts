import { buildArchivedChapterSysResponse } from "@/app/_localized/archivedProductRoute";

export const dynamic = "force-static";

export function GET() {
  return buildArchivedChapterSysResponse("tr");
}

export function HEAD() {
  return buildArchivedChapterSysResponse("tr", { includeBody: false });
}
