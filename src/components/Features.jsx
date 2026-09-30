function Icon({ children, className = "h-5 w-5" }) {
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

const features = [
  {
    title: "Smart Search",
    desc: "Find your ideal job with advanced filters.",
    icon: (
      <>
        <circle cx="11" cy="11" r="7" />
        <path d="m21 21-4.3-4.3" />
      </>
    ),
  },
  {
    title: "Salary Insights",
    desc: "Get real salary data to negotiate confidently.",
    icon: (
      <>
        <path d="M3 3v18h18" />
        <path d="m7 15 4-4 3 3 5-6" />
      </>
    ),
  },
  {
    title: "Top Companies",
    desc: "Apply to vetted companies that are hiring.",
    icon: <path d="M6 20V10M12 20V4M18 20v-7" />,
  },
  {
    title: "Saved Jobs",
    desc: "Manage apps & favorites on your dashboard.",
    icon: <path d="M6 3h12v18l-6-4-6 4z" />,
  },
  {
    title: "One-Click Apply",
    desc: "Simplify your job applications for an easier process!",
    tint: "text-fuchsia-300",
    icon: (
      <path d="m12 3 1.8 4.7 4.7 1.8-4.7 1.8L12 16l-1.8-4.7L5.5 9.5l4.7-1.8zM19 15l.7 1.8 1.8.7-1.8.7L19 20l-.7-1.8-1.8-.7 1.8-.7z" />
    ),
  },
  {
    title: "Resume Builder",
    desc: "Create professional resumes with modern templates.",
    icon: (
      <>
        <path d="M7 3h7l4 4v14H7z" />
        <path d="M14 3v4h4M10 12h5M10 16h5" />
      </>
    ),
  },
  {
    title: "Skill-Based Matching",
    desc: "Discover jobs that match your skills and experience.",
    icon: <path d="m12 3 7.8 4.5v9L12 21l-7.8-4.5v-9z" />,
  },
  {
    title: "Career Growth Resources",
    desc: "Boost your career with quick interview tips.",
    icon: (
      <>
        <path d="m3 17 6-6 4 4 8-8" />
        <path d="M15 7h6v6" />
      </>
    ),
  },
];

export default function Features() {
  return (
    <section id="features" className="w-full bg-black text-white">
      <div className="mx-auto max-w-6xl px-6 py-20 sm:py-24">
        {/* Heading */}
        <div className="text-center">
          <p className="flex items-center justify-center gap-3 font-mono text-[11px] uppercase tracking-[0.2em] text-white/60">
            <span className="h-1.5 w-1.5 bg-[#6c5cff]" aria-hidden="true" />
            Features job
            <span className="h-1.5 w-1.5 bg-[#6c5cff]" aria-hidden="true" />
          </p>
          <h2 className="mx-auto mt-5 max-w-md text-3xl font-medium leading-tight tracking-tight sm:text-4xl">
            Everything you need to succeed
          </h2>
        </div>

        {/* Grid */}
        <ul className="mt-14 grid gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((f) => (
            <li key={f.title} className="flex items-start gap-3">
              <span
                className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-white/10 bg-gradient-to-b from-white/[0.07] to-black/40 ${
                  f.tint ?? "text-white/80"
                }`}
              >
                <Icon>{f.icon}</Icon>
              </span>
              <div>
                <h3 className="text-[13px] font-medium text-white">{f.title}</h3>
                <p className="mt-1 max-w-[190px] text-xs leading-5 text-white/50">{f.desc}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}