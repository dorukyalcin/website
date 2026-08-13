import { getIndexNowConfig } from "@/lib/indexnow";

export function GET() {
  const { key } = getIndexNowConfig();

  if (!key) {
    return new Response("Not found", {
      status: 404,
    });
  }

  return new Response(key, {
    headers: {
      "content-type": "text/plain; charset=utf-8",
      "cache-control": "public, max-age=300, s-maxage=300",
    },
  });
}
