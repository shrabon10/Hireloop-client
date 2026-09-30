'use client';

import { useState } from "react";
import Image from "next/image";
import NextLink from "next/link";
import { useRouter } from "next/navigation";

/* ------------------------------------------------------------------ */
/* Sample data — replace with real API data later                      */
/* ------------------------------------------------------------------ */
const popular = ["Product Designer", "AI Engineering", "Dev-ops Engineer"];

const matches = [
  {
    title: "Senior Product Designer",
    meta: "Northwind · Remote",
    salary: "$110k – $140k",
    match: 96,
    initial: "N",
    tone: "bg-sky-500",
    featured: true,
    position: "right-0 top-[8%]",
    delay: 350,
  },
  {
    title: "Machine Learning Engineer",
    meta: "Lumen Labs · Hybrid",
    salary: "$130k – $165k",
    match: 91,
    initial: "L",
    tone: "bg-orange-500",
    featured: false,
    position: "left-0 bottom-[10%]",
    delay: 520,
  },
];

const stats = [
  { value: "50K", label: "Active jobs" },
  { value: "12K", label: "Hiring companies" },
  { value: "2M", label: "Job seekers" },
  { value: "97%", label: "Satisfaction rate" },
];

/* ------------------------------------------------------------------ */
/* Icons                                                               */
/* ------------------------------------------------------------------ */
function SearchIcon({ className = "h-4 w-4" }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <circle cx="11" cy="11" r="7" />
      <path d="m21 21-4.3-4.3" />
    </svg>
  );
}

function PinIcon({ className = "h-4 w-4" }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <path d="M12 21s7-6.2 7-11.5A7 7 0 0 0 5 9.5C5 14.8 12 21 12 21z" />
      <circle cx="12" cy="9.5" r="2.5" />
    </svg>
  );
}

/* ------------------------------------------------------------------ */
/* Floating job card (sits on top of the globe)                        */
/* ------------------------------------------------------------------ */
function MatchCard({ job }) {
  return (
    <article
      style={{ animationDelay: `${job.delay}ms` }}
      className={[
        "hl-rise absolute hidden w-[64%] max-w-[280px] rounded-2xl border p-3.5 backdrop-blur-md sm:block",
        job.position,
        job.featured
          ? "border-[#6c5cff]/50 bg-[#14112b]/80 shadow-[0_10px_50px_-10px_rgba(108,92,255,0.55)]"
          : "border-white/10 bg-[#0d0d10]/80",
      ].join(" ")}
    >
      <div className="flex items-center gap-3">
        <span
          className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-lg text-sm font-semibold text-white ${job.tone}`}
          aria-hidden="true"
        >
          {job.initial}
        </span>
        <div className="min-w-0 flex-1">
          <h3 className="truncate text-[13px] font-medium text-white">{job.title}</h3>
          <p className="mt-0.5 truncate text-xs text-white/50">{job.meta}</p>
        </div>
      </div>

      <div className="mt-3 flex items-center justify-between text-xs">
        <span className="text-white/75">{job.salary}</span>
        <span
          className={`rounded-full px-2 py-0.5 font-medium ${
            job.featured ? "bg-[#6c5cff] text-white" : "bg-white/10 text-white/80"
          }`}
        >
          {job.match}% match
        </span>
      </div>
    </article>
  );
}

/* ------------------------------------------------------------------ */
/* Hero                                                                */
/* ------------------------------------------------------------------ */
export default function Hero() {
  const router = useRouter();
  const [query, setQuery] = useState("");
  const [location, setLocation] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    const params = new URLSearchParams();
    if (query.trim()) params.set("q", query.trim());
    if (location.trim()) params.set("location", location.trim());
    router.push(`/jobs?${params.toString()}`);
  };

  return (
    // Pulled up by the navbar height (72px) so the glow shows behind it
    <section className="relative isolate -mt-[72px] w-full overflow-hidden bg-black pt-[72px] text-white">
      {/* Corner glows — plain CSS, so no image edges can ever show */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          backgroundImage:
            "radial-gradient(55% 45% at 0% 0%, rgba(76,61,255,0.28), transparent 70%), radial-gradient(55% 45% at 100% 0%, rgba(76,61,255,0.28), transparent 70%)",
        }}
      />

      {/* ---------------- Main content ---------------- */}
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 pb-12 pt-14 sm:pt-20 lg:grid-cols-2 lg:gap-8">
        {/* Left: message + search */}
        <div className="max-w-xl">
          <p className="inline-flex items-center gap-2.5 rounded-full border border-white/10 bg-white/[0.04] py-1.5 pl-3 pr-4 text-xs text-white/75">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-400/70 motion-safe:animate-ping" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
            </span>
            <span>
              <span className="font-semibold text-white">50,000+</span> new jobs this month
            </span>
          </p>

          <h1 className="mt-6 text-[2.75rem] font-semibold leading-[1.05] tracking-tight sm:text-6xl">
            Find your dream job today
          </h1>

          <p className="mt-5 text-base leading-7 text-white/60">
            HireLoop connects top talent with world-class companies. Browse thousands of
            curated opportunities and land your next role — faster.
          </p>

          {/* Search */}
          <form
            role="search"
            onSubmit={handleSearch}
            className="mt-9 flex flex-col gap-2 rounded-2xl border border-white/10 bg-white/[0.05] p-2 backdrop-blur transition-colors focus-within:border-[#6c5cff]/70 focus-within:bg-white/[0.07] sm:flex-row sm:items-center"
          >
            <label className="flex h-11 flex-1 items-center gap-2.5 px-3">
              <SearchIcon className="h-4 w-4 shrink-0 text-white/50" />
              <span className="sr-only">Job title, skill or company</span>
              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Job title, skill or company"
                className="w-full bg-transparent text-sm text-white placeholder:text-white/40 focus:outline-none"
              />
            </label>

            <span className="hidden h-6 w-px bg-white/10 sm:block" aria-hidden="true" />

            <label className="flex h-11 flex-1 items-center gap-2.5 px-3">
              <PinIcon className="h-4 w-4 shrink-0 text-white/50" />
              <span className="sr-only">Location or remote</span>
              <input
                type="text"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                placeholder="Location or remote"
                className="w-full bg-transparent text-sm text-white placeholder:text-white/40 focus:outline-none"
              />
            </label>

            <button
              type="submit"
              className="h-11 rounded-xl bg-[#6c5cff] px-6 text-sm font-medium text-white transition-colors hover:bg-[#7d6fff] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              Search jobs
            </button>
          </form>

          {/* Popular searches */}
          <div className="mt-5 flex flex-wrap items-center gap-2 text-xs">
            <span className="mr-1 text-white/45">Popular searches</span>
            {popular.map((item) => (
              <NextLink
                key={item}
                href={`/jobs?q=${encodeURIComponent(item)}`}
                className="rounded-full border border-white/10 px-3 py-1.5 text-white/80 transition-colors hover:border-white/25 hover:bg-white/[0.06] hover:text-white"
              >
                {item}
              </NextLink>
            ))}
          </div>
        </div>

        {/* Right: globe with two floating matches */}
        <div className="relative mx-auto aspect-square w-full max-w-[520px]">
          {/* Outer wrapper fades every edge of the image to transparent */}
          <div
            aria-hidden="true"
            className="absolute inset-0"
            style={{
              WebkitMaskImage: "radial-gradient(closest-side, #000 68%, transparent 100%)",
              maskImage: "radial-gradient(closest-side, #000 68%, transparent 100%)",
            }}
          >
            <Image
              src="/images/globe.png"
              alt=""
              fill
              priority
              sizes="(min-width: 1024px) 520px, 90vw"
              // scale-125 = globe size knob. Try scale-100 … scale-150
              className="scale-125 object-contain mix-blend-screen"
            />
          </div>

          {matches.map((job) => (
            <MatchCard key={job.title} job={job} />
          ))}
        </div>
      </div>

      {/* ---------------- Stats strip ---------------- */}
      <div className="mx-auto max-w-6xl px-6 pb-16 pt-4 sm:pt-8">
        <p className="mb-6 max-w-xl text-lg font-light leading-snug text-white/65 sm:text-xl">
          Assisting over <span className="font-medium text-white">15,000 job seekers</span> find
          their dream positions.
        </p>

        <dl className="grid grid-cols-2 overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] lg:grid-cols-4">
          {stats.map((s) => (
            <div
              key={s.label}
              className="border-white/10 px-6 py-6 sm:py-7 [&:nth-child(even)]:border-l [&:nth-child(n+3)]:border-t lg:[&:nth-child(n+3)]:border-t-0 lg:[&:nth-child(odd)]:border-l lg:first:border-l-0"
            >
              <dd className="text-4xl font-semibold tracking-tight sm:text-5xl">{s.value}</dd>
              <dt className="mt-2 text-sm text-white/55">{s.label}</dt>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}