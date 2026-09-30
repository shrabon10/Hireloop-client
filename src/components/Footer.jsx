import NextLink from "next/link";
import Image from "next/image";

const columns = [
  {
    title: "Product",
    links: [
      { label: "Job discovery", href: "/jobs" },
      { label: "Worker AI", href: "/worker-ai" },
      { label: "Companies", href: "/company" },
      { label: "Salary data", href: "/salary" },
    ],
  },
  {
    title: "Navigations",
    links: [
      { label: "Help center", href: "/help" },
      { label: "Career library", href: "/careers" },
      { label: "Contact", href: "/contact" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Brand Guideline", href: "/brand" },
      { label: "Newsroom", href: "/newsroom" },
    ],
  },
];

const socials = [
  {
    label: "Facebook",
    href: "#",
    path: "M22 12a10 10 0 1 0-11.56 9.88v-6.99H7.9V12h2.54V9.8c0-2.5 1.49-3.89 3.77-3.89 1.09 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56V12h2.78l-.44 2.89h-2.34v6.99A10 10 0 0 0 22 12z",
  },
  {
    label: "Pinterest",
    href: "#",
    active: true,
    path: "M12 2a10 10 0 0 0-3.64 19.31c-.09-.82-.17-2.08.03-2.98.19-.81 1.21-5.14 1.21-5.14s-.31-.62-.31-1.53c0-1.44.83-2.51 1.87-2.51.88 0 1.31.66 1.31 1.45 0 .88-.56 2.2-.85 3.42-.24 1.02.51 1.85 1.51 1.85 1.81 0 3.2-1.91 3.2-4.66 0-2.44-1.75-4.14-4.25-4.14-2.9 0-4.6 2.17-4.6 4.42 0 .88.34 1.81.76 2.32.08.1.09.19.07.29l-.28 1.15c-.04.18-.15.22-.34.13-1.27-.59-2.06-2.44-2.06-3.93 0-3.2 2.33-6.13 6.71-6.13 3.52 0 6.26 2.51 6.26 5.86 0 3.5-2.21 6.31-5.27 6.31-1.03 0-2-.53-2.33-1.17l-.63 2.41c-.23.88-.85 1.98-1.27 2.65A10 10 0 1 0 12 2z",
  },
  {
    label: "LinkedIn",
    href: "#",
    path: "M20.45 20.45h-3.56v-5.57c0-1.33-.03-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.94v5.67H9.34V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 1 1 0-4.13 2.06 2.06 0 0 1 0 4.13zM7.12 20.45H3.56V9h3.56v11.45z",
  },
];

export default function Footer() {
  return (
    <footer className="w-full bg-black text-white">
      {/* ---------- CTA section ---------- */}
      <section
        className="relative flex min-h-[520px] items-center justify-center bg-cover bg-top bg-no-repeat px-6 py-24"
        style={{ backgroundImage: "url('/images/cta-bg.png')" }}
      >
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-4xl font-medium leading-tight tracking-tight sm:text-5xl">
            Your next role is
            <br />
            already looking for you
          </h2>
          <p className="mt-5 text-sm text-white/80 sm:text-base">
            Build a profile in three minutes. The matches start arriving tomorrow morning.
          </p>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
  {/* Create Account */}
  <NextLink
    href="/signup"
    className="
      group relative overflow-hidden rounded-xl
      bg-white px-8 py-4
      text-base font-bold text-black
      shadow-[0_0_30px_rgba(255,255,255,0.12)]
      transition-all duration-300
      hover:-translate-y-1
      hover:shadow-[0_0_40px_rgba(255,255,255,0.25)]
    "
  >
    <span className="relative z-10 flex items-center gap-2">
      Create a free account
      
    </span>

    <span
      className="
        absolute inset-0 -translate-x-full
        bg-gradient-to-r from-transparent via-black/5 to-transparent
        transition-transform duration-700
        group-hover:translate-x-full
      "
    />
  </NextLink>

  {/* View Pricing */}
  <NextLink
    href="/pricing"
    className="
      group rounded-xl
      border border-white/20
      bg-white/[0.04]
      px-8 py-4
      text-base font-semibold text-white
      backdrop-blur-md
      transition-all duration-300
      hover:-translate-y-1
      hover:border-white/40
      hover:bg-white/10
      hover:shadow-[0_0_30px_rgba(255,255,255,0.08)]
    "
  >
    <span className="flex items-center gap-2">
      View pricing
      
    </span>
  </NextLink>
</div>
        </div>
      </section>

      {/* ---------- Footer links ---------- */}
      <div className="mx-auto max-w-6xl px-6 pb-10 pt-8">
        <div className="flex flex-col gap-12 md:flex-row md:justify-between">
          {/* Brand */}
          <div className="max-w-[240px]">
            <NextLink href="/" aria-label="Hireloop home">
              <Image
                src="/images/logo.png"
                alt="Hireloop"
                width={120}
                height={36}
                className="h-auto w-[120px]"
              />
            </NextLink>
            <p className="mt-6 text-xs leading-6 text-white/30">
              The AI-native career platform. Built for people who take their work seriously.
            </p>
          </div>

          {/* Link columns */}
          <div className="grid grid-cols-2 gap-10 sm:grid-cols-3 md:gap-16 lg:gap-24">
            {columns.map((col) => (
              <div key={col.title}>
                <h3 className="text-sm font-medium text-[#4b3fd6]">{col.title}</h3>
                <ul className="mt-6 flex flex-col gap-4">
                  {col.links.map((link) => (
                    <li key={link.label}>
                      <NextLink
                        href={link.href}
                        className="text-xs text-white/35 transition-colors hover:text-white"
                      >
                        {link.label}
                      </NextLink>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
          <div className="flex items-center gap-2">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                aria-label={s.label}
                className={`flex h-8 w-8 items-center justify-center rounded-md transition-colors ${
                  s.active
                    ? "bg-[#3b32b0] text-white"
                    : "bg-white/5 text-white/60 hover:bg-white/10 hover:text-white"
                }`}
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
                  <path d={s.path} />
                </svg>
              </a>
            ))}
          </div>

          <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs">
            <span className="text-white/30">Copyright 2024 —Programming Hero</span>
            <span className="text-white/80">
              <NextLink href="/terms" className="hover:text-white">Terms &amp; Policy</NextLink>
              {" - "}
              <NextLink href="/privacy" className="hover:text-white">Privacy Guideline</NextLink>
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}