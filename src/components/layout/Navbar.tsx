"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Bookmark, Dumbbell, Menu, X } from "lucide-react";
import { useState } from "react";
import { useFitLog } from "@/src/components/providers/FitLogProvider";
import Logo from "@/src/assets/logo.png";
import Image from "next/image";

const navLinks = [
  { label: "Workout", href: "/#library", key: "workout" },
  { label: "My Plan", href: "/my-plan", key: "plan" },
];

export default function Navbar() {
  const pathname = usePathname();
  const { planIds, savedIds } = useFitLog();
  const [menuOpen, setMenuOpen] = useState(false);

  const workoutActive = pathname === "/";
  const planActive = pathname.startsWith("/my-plan");

  return (
    <header className="navbar sticky top-0 z-50 border-b border-base-300/80 bg-base-100/95 backdrop-blur-xl">
      <div className="container mx-auto grid min-h-18 max-w-7xl grid-cols-3 items-center px-4 sm:px-6 lg:px-8">

        {/* 1. LEFT — LOGO */}
        <Link
          href="/"
          className="group flex items-center gap-3"
          onClick={() => setMenuOpen(false)}
        >
          <span className="grid size-9 place-items-center rounded-lg transition-transform group-hover:rotate-6">
            <Image
              src={Logo}
              alt="Logo of FitLog"
              className="h-auto w-7"
              priority
            />
          </span>

          <span className="font-display text-2xl font-semibold tracking-[0.12em] text-white">
            FITLOG
          </span>
        </Link>


        {/* 2. CENTER — NAVIGATION */}
        <nav className="hidden items-center justify-center gap-2 md:flex">
          {navLinks.map((link) => {
            const active =
              link.key === "workout" ? workoutActive : planActive;

            return (
              <Link
                key={link.href}
                href={link.href}
                className={`rounded-full px-5 py-2 text-sm font-semibold uppercase tracking-[0.14em] transition ${active
                  ? "bg-fit-accent text-black"
                  : "text-fit-muted hover:bg-white/5 hover:text-white"
                  }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>


        {/* 3. RIGHT — PLAN / SAVED */}
        <div className="hidden items-center justify-end gap-2 md:flex">
          <Link
            href="/my-plan"
            className="badge badge-primary h-9 gap-2 rounded-full px-4 text-xs font-bold uppercase tracking-[0.12em]"
          >
            <Dumbbell className="size-4" />
            Plan <span>{planIds.length}</span>
          </Link>

          <Link
            href="/my-plan"
            className="badge badge-outline h-9 gap-2 rounded-full px-4 text-xs font-bold uppercase tracking-[0.12em]"
          >
            <Bookmark className="size-4" />
            Saved <span>{savedIds.length}</span>
          </Link>
        </div>


        {/* MOBILE MENU BUTTON */}
        <button
          type="button"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          onClick={() => setMenuOpen((open) => !open)}
          className="ml-auto grid size-10 place-items-center rounded-lg border border-fit-border text-white md:hidden"
        >
          {menuOpen ? (
            <X className="size-5" />
          ) : (
            <Menu className="size-5" />
          )}
        </button>

      </div>

      {menuOpen && (
        <div className="border-t border-fit-border bg-base-100 px-4 py-4 md:hidden">
          <nav className="flex flex-col gap-2">
            {navLinks.map((link) => {
              const active =
                link.key === "workout" ? workoutActive : planActive;

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className={`rounded-lg px-4 py-3 text-sm font-semibold uppercase tracking-[0.14em] ${active
                    ? "bg-fit-accent text-black"
                    : "text-fit-muted hover:bg-white/5 hover:text-white"
                    }`}
                >
                  {link.label}
                </Link>
              );
            })}

            <div className="mt-2 flex gap-2 border-t border-fit-border pt-4">
              <Link
                href="/my-plan"
                onClick={() => setMenuOpen(false)}
                className="badge badge-primary h-9 gap-2 rounded-full px-4 text-xs font-bold uppercase tracking-[0.12em]"
              >
                <Dumbbell className="size-4" />
                Plan <span>{planIds.length}</span>
              </Link>

              <Link
                href="/my-plan"
                onClick={() => setMenuOpen(false)}
                className="badge badge-outline h-9 gap-2 rounded-full px-4 text-xs font-bold uppercase tracking-[0.12em]"
              >
                <Bookmark className="size-4" />
                Saved <span>{savedIds.length}</span>
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
