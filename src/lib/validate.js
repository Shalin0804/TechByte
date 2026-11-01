import { services } from "../data/services.js";
import { BUDGETS, TIMELINES } from "../data/site.js";

const SLUGS = services.map((s) => s.slug);
const EMAIL = /^[^\s@]{1,64}@[^\s@]{1,190}\.[^\s@]{2,}$/;
const PHONE = /^[+\d][\d\s()-]{5,24}$/;

const str = (v) => (typeof v === "string" ? v.trim() : "");

function check(rules, body) {
  const data = {};
  const errors = {};
  for (const [key, { min = 0, max, required, test, oneOf, msg }] of Object.entries(rules)) {
    const v = str(body?.[key]);
    if (!v) {
      if (required) errors[key] = msg || "This field is required.";
      data[key] = "";
      continue;
    }
    if (v.length < min || v.length > max || (test && !test.test(v)) || (oneOf && !oneOf.includes(v))) errors[key] = msg || "Please check this field.";
    data[key] = v;
  }
  return { data, errors };
}

/** Returns { data, errors, spam }. Unknown fields are dropped. */
export function validateInquiry(body) {
  const r = check(
    {
      name: { required: true, min: 2, max: 100, msg: "Please enter your name." },
      email: { required: true, max: 254, test: EMAIL, msg: "Please enter a valid email address." },
      phone: { max: 30, test: PHONE, msg: "Please enter a valid phone number." },
      company: { max: 120 },
      service: { max: 60, oneOf: [...SLUGS, "other"] },
      message: { required: true, min: 10, max: 5000, msg: "Please tell us a little more (at least 10 characters)." },
    },
    body
  );
  return { ...r, spam: !!str(body?.website) };
}

export function validateQuote(body) {
  const r = check(
    {
      name: { required: true, min: 2, max: 100, msg: "Please enter your name." },
      email: { required: true, max: 254, test: EMAIL, msg: "Please enter a valid email address." },
      phone: { max: 30, test: PHONE, msg: "Please enter a valid phone number." },
      company: { max: 120 },
      budget: { max: 60, oneOf: BUDGETS, msg: "Please choose a budget range." },
      timeline: { max: 60, oneOf: TIMELINES, msg: "Please choose a timeline." },
      details: { required: true, min: 20, max: 5000, msg: "Please describe the project (at least 20 characters)." },
    },
    body
  );
  const list = Array.isArray(body?.services) ? body.services : [];
  if (!list.length || list.length > SLUGS.length || !list.every((s) => SLUGS.includes(s))) r.errors.services = "Please choose at least one service.";
  r.data.services = [...new Set(list.filter((s) => SLUGS.includes(s)))];
  return { ...r, spam: !!str(body?.website) };
}


