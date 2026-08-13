import { buildIndexNowPayload, getDefaultIndexNowUrls, getIndexNowConfig } from "../src/lib/indexnow";

async function main() {
  const urls = process.argv.slice(2);
  const payload = buildIndexNowPayload(
    urls.length > 0 ? urls : getDefaultIndexNowUrls(),
  );
  const { endpoint } = getIndexNowConfig();

  if (!payload) {
    throw new Error(
      "INDEXNOW_KEY is missing or no URLs were provided for IndexNow submission.",
    );
  }

  const response = await fetch(endpoint, {
    method: "POST",
    headers: {
      "content-type": "application/json; charset=utf-8",
    },
    body: JSON.stringify(payload),
  });

  if (!response.ok) {
    const message = await response.text();
    throw new Error(`IndexNow submission failed: ${response.status} ${message}`);
  }

  console.log(
    `Submitted ${payload.urlList.length} URL(s) to IndexNow via ${endpoint}.`,
  );
}

main().catch((error) => {
  console.error(error instanceof Error ? error.message : error);
  process.exitCode = 1;
});
