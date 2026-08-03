import { buildArchivedChapterSysResponse } from "@/app/_localized/archivedProductRoute";

export const dynamic = "force-static";

export function GET() {
  return buildArchivedChapterSysResponse("nl");
}

export function HEAD() {
  return buildArchivedChapterSysResponse("nl", { includeBody: false });
}
