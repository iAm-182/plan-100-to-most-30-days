import { mkdirSync, writeFileSync } from "node:fs";

// Entry: 279 Unicode code points, under the 280 limit. An AI agent can
// carry out every step itself with a browser, code, APIs and $100.
const ENTRY =
  "Day 1: $12 domain + $18 API. Build a CSV-to-profit dashboard for Amazon sellers: fees, ads, refunds, SKU margin. Sell $29 lifetime on Gumroad. Post 30s demos to r/FulfillmentByAmazon, answering \u2018what\u2019s my real profit?\u2019 Demand asks daily\u2014no ads. 15\u201325 sales = $435\u2013$725 by day 30.";

const out = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(out, { recursive: true });
writeFileSync(`${out}/entry.txt`, ENTRY, "utf8");

// Day-30 math: $30 spent on day 1, $70 kept in reserve; 15-25 sales at
// $29 lifetime = $435-$725 gross, so the likely outcome is $405-$695 net.
