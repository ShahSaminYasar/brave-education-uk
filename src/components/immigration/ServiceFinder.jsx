"use client";

import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import {
  CONSULTATIONS,
  SELF_SPONSORSHIP_PATH,
  SERVICES,
  bookingHref,
  categoryHref,
  formatFee,
  getCategory,
  serviceHref,
} from "@/lib/immigration";
import { ctaPrimary, ctaSecondary } from "./styles";

const GOALS = [
  { value: "work", label: "Work in the UK" },
  { value: "study", label: "Study in the UK" },
  { value: "family", label: "Join or stay with family" },
  { value: "settle", label: "Settle or become British" },
  { value: "visit", label: "Visit the UK or travel to Europe" },
  { value: "employer", label: "Sponsor a worker (employers)" },
];

const LOCATIONS = [
  { value: "outside", label: "Outside the UK" },
  { value: "inside", label: "Already in the UK" },
];

const TIMINGS = [
  { value: "soon", label: "Within a month" },
  { value: "later", label: "In 1–3 months" },
  { value: "exploring", label: "Just exploring" },
];

const categoryResult = (slug) => {
  const category = getCategory(slug);
  return {
    title: category.title,
    detail: category.tagline,
    href: categoryHref(slug),
  };
};

const serviceResult = (id) => ({
  title: SERVICES[id].name,
  detail: SERVICES[id].forWho,
  href: serviceHref(id),
});

const getRecommendation = ({ goal, location, timing }) => {
  if (goal === "employer") return { service: null, consultation: "15min" };

  const service = {
    work: () => categoryResult("work-and-study"),
    study: () => serviceResult("student"),
    family: () => serviceResult(location === "inside" ? "leave-to-remain" : "leave-to-enter"),
    settle: () => categoryResult("settlement-and-citizenship"),
    visit: () => categoryResult("visit-and-travel"),
  }[goal]();

  return { service, consultation: timing === "exploring" ? "15min" : "30min" };
};

const OptionGroup = ({ legend, name, options, value, onChange }) => (
  <fieldset>
    <legend className="mb-3 text-sm font-semibold text-zinc-900">{legend}</legend>
    <div className="flex flex-wrap gap-2">
      {options.map((option) => (
        <label
          key={option.value}
          className="cursor-pointer rounded-full border border-zinc-300 bg-white px-4 py-2 text-sm text-slate-700 transition-colors hover:border-[#221e52] has-[:checked]:border-[#221e52] has-[:checked]:bg-[#221e52] has-[:checked]:text-white has-[:focus-visible]:ring-[3px] has-[:focus-visible]:ring-primary/50"
        >
          <input
            type="radio"
            name={name}
            value={option.value}
            checked={value === option.value}
            onChange={() => onChange(option.value)}
            className="sr-only"
          />
          {option.label}
        </label>
      ))}
    </div>
  </fieldset>
);

const ServiceFinder = () => {
  const [answers, setAnswers] = useState({ goal: null, location: null, timing: null });
  const set = (key) => (value) => setAnswers((prev) => ({ ...prev, [key]: value }));

  const needsLocation = answers.goal === "family";
  const needsTiming = answers.goal && answers.goal !== "employer";
  const complete =
    answers.goal &&
    (!needsLocation || answers.location) &&
    (!needsTiming || answers.timing);

  const recommendation = complete ? getRecommendation(answers) : null;
  const consultation =
    recommendation && CONSULTATIONS.find((c) => c.id === recommendation.consultation);

  return (
    <div className="max-w-4xl mx-auto rounded-3xl border border-zinc-200 bg-white p-6 md:p-10 shadow-xl shadow-black/5">
      <div className="space-y-7">
        <OptionGroup
          legend="1. What would you like to do?"
          name="finder-goal"
          options={GOALS}
          value={answers.goal}
          onChange={(goal) => setAnswers({ goal, location: null, timing: null })}
        />
        {needsLocation && (
          <OptionGroup
            legend="2. Where are you now?"
            name="finder-location"
            options={LOCATIONS}
            value={answers.location}
            onChange={set("location")}
          />
        )}
        {needsTiming && (
          <OptionGroup
            legend={`${needsLocation ? "3" : "2"}. When do you need to apply?`}
            name="finder-timing"
            options={TIMINGS}
            value={answers.timing}
            onChange={set("timing")}
          />
        )}
      </div>

      <div aria-live="polite">
        {recommendation && (
          <div className="mt-8 rounded-2xl bg-slate-50 border border-zinc-200 p-6">
            <p className="text-xs font-semibold uppercase tracking-wider text-primary">
              Our suggestion
            </p>

            {recommendation.service ? (
              <>
                <h3 className="mt-2 font-josefin-sans text-xl font-semibold text-zinc-900">
                  {recommendation.service.title}
                </h3>
                <p className="mt-1 text-[15px] text-slate-600">{recommendation.service.detail}</p>
              </>
            ) : (
              <>
                <h3 className="mt-2 font-josefin-sans text-xl font-semibold text-zinc-900">
                  Start with a {consultation.label}
                </h3>
                <p className="mt-1 text-[15px] text-slate-600">
                  Ask a regulated adviser about sponsor licences, self-sponsorship or assigning a
                  Certificate of Sponsorship.
                </p>
              </>
            )}

            {answers.timing === "soon" && (
              <p className="mt-3 text-sm text-slate-700">
                Home Office processing takes time, so it&apos;s worth starting now.
              </p>
            )}

            <div className="mt-5 flex flex-wrap gap-3">
              <Link
                href={bookingHref(consultation.id)}
                data-cta={`book-consultation-${consultation.id}-finder`}
                className={ctaPrimary}
              >
                {consultation.cta} ({formatFee(consultation.price)})
              </Link>
              {recommendation.service && (
                <Link href={recommendation.service.href} className={ctaSecondary}>
                  See details <ArrowRight aria-hidden="true" />
                </Link>
              )}
              {!recommendation.service && (
                <Link href={SELF_SPONSORSHIP_PATH} className={ctaSecondary}>
                  About self-sponsorship <ArrowRight aria-hidden="true" />
                </Link>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ServiceFinder;
