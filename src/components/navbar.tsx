"use client";

import Link from "next/link";
import { DATA } from "@/data/resume";
import Image from "next/image";
import { ModeToggle } from "@/components/mode-toggle";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 inset-x-0 z-50 transition-all duration-500",
        scrolled
          ? "bg-background/80 backdrop-blur-xl border-b border-border/60 shadow-[0_1px_24px_hsl(var(--background)/0.6)]"
          : "bg-transparent"
      )}
    >
      <div className="max-w-2xl mx-auto px-6 h-14 flex items-center justify-between">
        {/* Brand */}
        <Link href="/" className="flex items-center gap-2.5 shrink-0 group">
          <div className="size-7 rounded-full overflow-hidden ring-1 ring-border/40 group-hover:ring-accent/50 transition-all duration-300">
            <Image
              src={DATA.avatarUrl}
              alt={DATA.name}
              width={28}
              height={28}
              className="object-cover group-hover:scale-110 transition-transform duration-500"
            />
          </div>
          <span className="text-sm font-medium text-foreground/80 group-hover:text-foreground transition-colors font-sans tracking-tight">
            {DATA.name.split(" ")[0].toLowerCase()}
            <span className="text-accent text-[10px] ml-0.5 animate-pulse">•</span>
          </span>
        </Link>

        {/* Nav + Socials */}
        <div className="flex items-center gap-4">
          <nav className="hidden sm:flex items-center gap-5 text-[10px] uppercase tracking-[0.12em] text-muted-foreground font-sans font-semibold">
            {DATA.navbar.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="hover:text-foreground transition-colors relative after:absolute after:-bottom-0.5 after:left-0 after:h-px after:w-0 after:bg-accent after:transition-all hover:after:w-full"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-3.5 pl-4 border-l border-border/40">
            <ModeToggle />
            <div className="flex items-center gap-3">
              {Object.entries(DATA.contact.social)
                .filter(([_, social]) => social.navbar)
                .map(([name, social]) => (
                  <Link
                    key={name}
                    href={social.url}
                    target="_blank"
                    rel="noreferrer"
                    className="text-muted-foreground/60 hover:text-accent transition-colors duration-200"
                    title={name}
                  >
                    <social.icon className="size-[15px]" />
                  </Link>
                ))}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
