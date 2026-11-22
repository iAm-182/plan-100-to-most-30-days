import { mkdirSync, writeFileSync } from "node:fs";

// Entry: 274 Unicode code points, under the 280 limit. An AI agent can
// carry out every step itself with a browser, code, APIs and $100.
const ENTRY =
  "Day 1: $12 domain + $18 API. Build a CSV profit dashboard for Amazon sellers: fees, ads, refunds \u2014 the profit Amazon hides. Sell $29 on Gumroad. Post 30s demos in r/FulfillmentByAmazon answering \u2018what\u2019s my real profit?\u2019. First 5 free. 15\u201325 paid sales = $435\u2013$725 by day 30.";

const out = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(out, { recursive: true });
writeFileSync(`${out}/entry.txt`, ENTRY, "utf8");

// Day-30 math: $30 spent on day 1, $70 kept in reserve; the first 5
// copies go free to seed testimonials, then 15-25 paid sales at $29 =
// $435-$725 gross, so the likely outcome is $405-$695 net. The edge:
// the dashboard shows the true profit Amazon's own reports hide, and
// the free copies buy the social proof a cold Gumroad listing lacks.
