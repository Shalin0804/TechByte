import assert from "node:assert/strict";
import { validateInquiry, validateQuote } from "./validate.js";

const ok = validateInquiry({ name: "Asha", email: "asha@example.com", message: "We need a booking system.", service: "web-application-development", extra: "x" });
assert.deepEqual(ok.errors, {});
assert.equal(ok.data.extra, undefined);
assert.equal(ok.spam, false);

const bad = validateInquiry({ name: "A", email: "nope", message: "short", service: "mobile-apps", phone: "abc" });
assert.deepEqual(Object.keys(bad.errors).sort(), ["email", "message", "name", "phone", "service"]);
assert.equal(validateInquiry({ name: { $gt: "" }, email: [] }).errors.name, "Please enter your name.");
assert.equal(validateInquiry({ website: "spam" }).spam, true);

const q = validateQuote({ name: "Ravi", email: "r@x.in", budget: "Not sure yet", timeline: "Flexible", details: "An online store for handmade goods.", services: ["website-development"] });
assert.deepEqual(q.errors, {});
assert.ok(validateQuote({ ...q.data, services: ["hacking"] }).errors.services);
assert.ok(validateQuote({ ...q.data, services: [] }).errors.services);
assert.ok(validateQuote({ ...q.data, budget: "1 crore" }).errors.budget);
assert.deepEqual(validateQuote({ ...q.data, budget: "", timeline: "" }).errors, {}); // both optional
console.log("validate: all checks passed");
