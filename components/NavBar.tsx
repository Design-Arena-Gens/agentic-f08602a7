"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import clsx from "clsx";

const links = [
  { href: "/", label: "Home" },
  { href: "/features", label: "Features" },
  { href: "/security", label: "Zero-Trust" },
  { href: "/how-it-works", label: "How It Works" },
  { href: "/contact", label: "Contact" }
];

export default function NavBar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 w-full backdrop-blur bg-white/70 border-b border-slate-200">
      <div className="container-balanced flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <div className="h-8 w-8 rounded bg-brand-600" />
          <span className="font-extrabold tracking-tight text-lg">ACCRUE FLOW</span>
        </Link>
        <nav className="hidden md:flex items-center gap-6">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className={clsx(
                "text-sm font-medium hover:text-brand-700 transition-colors",
                pathname === l.href ? "text-brand-700" : "text-slate-700"
              )}
            >
              {l.label}
            </Link>
          ))}
          <Link href="/contact" className="btn-primary">Request Access</Link>
        </nav>
        <button
          onClick={() => setOpen((v) => !v)}
          className="md:hidden inline-flex items-center justify-center rounded-md p-2 text-slate-700 hover:bg-slate-100"
          aria-label="Toggle menu"
        >
          {open ? <XMarkIcon className="h-6 w-6" /> : <Bars3Icon className="h-6 w-6" />}
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-slate-200 bg-white">
          <div className="container-balanced py-4 flex flex-col gap-2">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className={clsx(
                  "py-2 text-sm font-medium",
                  pathname === l.href ? "text-brand-700" : "text-slate-700"
                )}
              >
                {l.label}
              </Link>
            ))}
            <Link href="/contact" onClick={() => setOpen(false)} className="btn-primary mt-2">Request Access</Link>
          </div>
        </div>
      )}
    </header>
  );
}
