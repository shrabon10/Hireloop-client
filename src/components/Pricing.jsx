'use client';

import { useState } from "react";
import NextLink from "next/link";

const YEARLY_DISCOUNT = 0.25;

function Icon({ children, className = "h-4 w-4" }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      {children}
    </svg>
  );
}

const plans = [
  {
    id: "starter",
    name: "Starter",
    monthly: 0,
    featured: false,
    tint: "text-fuchsia-300",
    icon: <path d="m3 8 4.5 4L12 5l4.5 7L21 8l-2 11H5z" />,
    features: [
      "Daily AI match brief (top 5)",
      "Verified salary bands",
      "Company insight dashboards",
      "1-click apply, unlimited",
    ],
  },
  {
    id: "growth",
    name: "Growth",
    monthly: 17,
    featured: true,
    tint: "text-[#a99cff]",
    icon: <path d="M5 20v-6M12 20V6M19 20v-9" />,
    features: [
      "Daily AI match brief (top 5)",
      "Verified salary bands",
      "Company insight dashboards",
      "1-click apply, unlimited",
    ],
  },
  {
    id: "premium",
    name: "Premium",
    monthly: 99,
    featured: false,
    tint: "text-fuchsia-300",
    icon: <path d="M13 2 4 14h7l-1 8 9-12h-7z" />,
    features: [
      "Everything in Pro",
      "Multi-profile career portfolios",
      "Shared talent rooms",
      "Recruiter view (read-only)",
    ],
  },
];

export default function Pricing() {
  const [yearly, setYearly] = useState(false);

  const priceFor = (plan) =>
    yearly
      ? Math.round(plan.monthly * (1 - YEARLY_DISCOUNT))
      : plan.monthly;

  return (
    <section id="pricing" className="w-full bg-black text-white">
      <div className="mx-auto max-w-6xl px-6 py-20 sm:py-24">

        {/* Heading */}
        <div className="text-center">
          <p className="flex items-center justify-center gap-3 font-mono text-[11px] uppercase tracking-[0.2em] text-white/60">
            <span
              className="h-1.5 w-1.5 bg-[#6c5cff]"
              aria-hidden="true"
            />

            Pricing

            <span
              className="h-1.5 w-1.5 bg-[#6c5cff]"
              aria-hidden="true"
            />
          </p>

          <h2 className="mx-auto mt-5 max-w-md text-3xl font-medium leading-tight tracking-tight sm:text-4xl">
            Pay for the leverage, not the listings
          </h2>

          {/* Billing Toggle */}
          <div
            role="group"
            aria-label="Billing period"
            className="mt-9 inline-flex items-center rounded-full border border-white/10 bg-white/[0.06] p-1"
          >
            {/* Monthly */}
            <button
              type="button"
              aria-pressed={!yearly}
              onClick={() => setYearly(false)}
              className={`rounded-full px-4 py-1.5 text-xs font-medium transition-colors ${
                !yearly
                  ? "bg-white text-black"
                  : "text-white/70 hover:text-white"
              }`}
            >
              Monthly
            </button>

            {/* Yearly */}
            <button
              type="button"
              aria-pressed={yearly}
              onClick={() => setYearly(true)}
              className={`flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-medium transition-colors ${
                yearly
                  ? "bg-white text-black"
                  : "text-white/70 hover:text-white"
              }`}
            >
              Yearly

              <span className="rounded-full bg-fuchsia-600 px-1.5 py-0.5 text-[10px] font-semibold text-white">
                25%
              </span>
            </button>
          </div>
        </div>

        {/* Plans */}
        <div className="mt-12 grid gap-5 lg:grid-cols-3 lg:items-stretch">

          {plans.map((plan) => (
            <article
              key={plan.id}
              className={`
                group
                flex flex-col
                rounded-2xl
                border
                p-6

                transition-all
                duration-300
                ease-out

                hover:-translate-y-2
                hover:scale-[1.02]
                hover:border-white/30
                hover:shadow-[0_20px_60px_-15px_rgba(108,92,255,0.40)]

                ${
                  plan.featured
                    ? `
                      border-white/20
                      bg-gradient-to-b
                      from-[#232326]
                      to-[#141416]
                      shadow-[0_20px_60px_-20px_rgba(108,92,255,0.35)]
                      lg:-my-2
                    `
                    : `
                      border-white/10
                      bg-gradient-to-b
                      from-white/[0.05]
                      to-white/[0.01]
                    `
                }
              `}
            >

              {/* Header */}
              <div className="flex items-center justify-between">

                <div className="flex items-center gap-3">

                  <span
                    className={`
                      flex
                      h-8
                      w-8
                      items-center
                      justify-center
                      rounded-lg
                      border
                      border-white/10
                      bg-black/40
                      ${plan.tint}
                    `}
                  >
                    <Icon>{plan.icon}</Icon>
                  </span>

                  <h3 className="text-base font-medium">
                    {plan.name}
                  </h3>
                </div>

                <p aria-live="polite">
                  <span className="text-3xl font-semibold tracking-tight">
                    ${priceFor(plan)}
                  </span>

                  <span className="ml-1 text-[11px] text-white/50">
                    /month
                  </span>
                </p>

              </div>

              {/* Features Title */}
              <p className="mt-8 text-[13px] font-medium text-white">
                Start building your insights hub:
              </p>

              {/* Features */}
              <ul className="mt-5 flex flex-1 flex-col gap-3.5">

                {plan.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-center gap-3 text-xs text-white/75"
                  >
                    <span
                      className="
                        flex
                        h-5
                        w-5
                        shrink-0
                        items-center
                        justify-center
                        rounded
                        bg-white/10
                        text-white/70
                      "
                    >
                      <Icon className="h-3 w-3">
                        <path d="M12 5v14M5 12h14" />
                      </Icon>
                    </span>

                    {feature}
                  </li>
                ))}

              </ul>

              {/* CTA */}
              <NextLink
                href={`/signup?plan=${plan.id}&billing=${
                  yearly ? "yearly" : "monthly"
                }`}
                className={`
                  mt-9
                  flex
                  h-11
                  items-center
                  justify-between
                  rounded-lg
                  px-4
                  text-[13px]
                  font-medium

                  focus-visible:outline
                  focus-visible:outline-2
                  focus-visible:outline-offset-2
                  focus-visible:outline-white

                  ${
                    plan.featured
                      ? "bg-white text-black"
                      : "bg-white/10 text-white"
                  }
                `}
              >
                Choose This Plan

                <Icon>
                  <path d="M5 12h14M13 6l6 6-6 6" />
                </Icon>
              </NextLink>

            </article>
          ))}

        </div>
      </div>
    </section>
  );
}