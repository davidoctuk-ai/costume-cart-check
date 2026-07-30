import assert from "node:assert/strict";
import test from "node:test";

async function render(path = "/") {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}-${path}`);
  const { default: worker } = await import(workerUrl.href);

  return worker.fetch(
    new Request(`https://costume-cart-check.example${path}`, {
      headers: { accept: "text/html" },
    }),
    { ASSETS: { fetch: async () => new Response("Not found", { status: 404 }) } },
    { waitUntil() {}, passThroughOnException() {} },
  );
}

test("server-renders the branded homepage without starter content", async () => {
  const response = await render();
  assert.equal(response.status, 200);
  assert.match(response.headers.get("content-type") ?? "", /^text\/html\b/i);

  const html = await response.text();
  assert.match(html, /Costume Cart Check/);
  assert.match(html, /Buy the look/);
  assert.match(html, /Independent buying guides/);
  assert.match(html, /5 August 2026/);
  assert.match(html, /\/costume-cart-check\/og\.png/);
  assert.doesNotMatch(html, /(?:src|content)="\/og\.png"/);
  assert.doesNotMatch(html, /Your site is taking shape|react-loading-skeleton/);
});

test("renders guides, legal pages and a real 404", async () => {
  for (const path of [
    "/guides",
    "/costume-buying-checklist",
    "/affiliate-disclosure",
    "/privacy",
    "/terms",
  ]) {
    const response = await render(path);
    assert.equal(response.status, 200, `${path} should render`);
    assert.match(await response.text(), /Costume Cart Check/);
  }

  const missing = await render("/not-a-real-page");
  assert.equal(missing.status, 404);
});
