import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY =
  "Day 1: $12 domain + $18 API. Build a CSV-to-profit dashboard for Amazon sellers\u2014fees, ads, refunds, SKU margin. Sell $29 lifetime on Gumroad. Daily post 30s demos in r/FulfillmentByAmazon and FB groups, answering 'what's my real profit?' posts. 15\u201325 sales = $435\u2013$725 by day 30.";

const out = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(out, { recursive: true });
writeFileSync(`${out}/entry.txt`, ENTRY, "utf8");
