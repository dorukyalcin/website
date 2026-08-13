import { buildArchivedChapterSysResponse } from "@/app/_localized/archivedProductRoute";

export const dynamic = "force-static";

export function GET() {
  return buildArchivedChapterSysResponse("de");
}

export function HEAD() {
  return buildArchivedChapterSysResponse("de", { includeBody: false });
}
