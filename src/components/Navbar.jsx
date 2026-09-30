'use client';

import { useState } from "react";
import NextLink from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { Button } from "@heroui/react";


const navLinks = [
  { label: "Browse Jobs", href: "/jobs" },
  { label: "Company", href: "/company" },
  { label: "Pricing", href: "/pricing" },
];

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const router = useRouter();

  return (
    <div className="sticky top-0 z-40 w-full px-4 pt-4">
      <nav className="mx-auto max-w-5xl rounded-2xl border border-white/5 bg-[#1c1c1f]/90 backdrop-blur-lg">
        <div className="flex h-14 items-center justify-between px-5">
          {/* Logo */}
          <NextLink href="/" className="flex items-center" aria-label="Hireloop home">
  <Image
    src="/images/logo.png"
    alt="Hireloop"
    width={120}
    height={40}
    priority
    className="h-10 w-auto object-contain"
  />
</NextLink>

          {/* Desktop links + actions */}
          <div className="hidden items-center gap-8 md:flex">
            <ul className="flex items-center gap-8">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <NextLink
                    href={link.href}
                    className="text-sm text-white/90 transition-colors hover:text-white"
                  >
                    {link.label}
                  </NextLink>
                </li>
              ))}
            </ul>

            <span className="h-5 w-px bg-white/20" aria-hidden="true" />

            <div className="flex items-center gap-6">
              <NextLink
                href="/signin"
                className="text-sm font-medium text-[#7c6cff] transition-colors hover:text-[#9a8dff]"
              >
                Sign In
              </NextLink>
              <Button
                onPress={() => router.push("/signup")}
                className="h-10 rounded-xl bg-[#6c5cff] px-6 text-sm font-medium text-white hover:bg-[#7d6fff]"
              >
                Get Started
              </Button>
            </div>
          </div>

          {/* Mobile toggle */}
          <button
            className="text-white md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
            aria-expanded={isMenuOpen}
          >
            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="border-t border-white/10 md:hidden">
            <ul className="flex flex-col gap-1 p-4">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <NextLink
                    href={link.href}
                    onClick={() => setIsMenuOpen(false)}
                    className="block rounded-lg px-2 py-2 text-sm text-white/90 hover:bg-white/5"
                  >
                    {link.label}
                  </NextLink>
                </li>
              ))}
              <li className="mt-3 flex flex-col gap-3 border-t border-white/10 pt-4">
                <NextLink
                  href="/signin"
                  onClick={() => setIsMenuOpen(false)}
                  className="px-2 text-sm font-medium text-[#7c6cff]"
                >
                  Sign In
                </NextLink>
                <Button
                  onPress={() => {
                    setIsMenuOpen(false);
                    router.push("/signup");
                  }}
                  className="h-10 w-full rounded-xl bg-[#6c5cff] text-sm font-medium text-white"
                >
                  Get Started
                </Button>
              </li>
            </ul>
          </div>
        )}
      </nav>
    </div>
  );
}