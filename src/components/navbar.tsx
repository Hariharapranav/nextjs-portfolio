import Link from "next/link";
import { DATA } from "@/data/resume";
import Image from "next/image";
import { ModeToggle } from "@/components/mode-toggle";

export default function Navbar() {
  return (
    <header className="absolute top-0 inset-x-0 z-50 transition-all duration-300">
      <div className="max-w-2xl mx-auto px-6 h-14 flex items-center justify-between">
        {/* Brand */}
        <Link href="/" className="flex items-center gap-2.5 shrink-0 group">
          <div className="size-8 rounded-full overflow-hidden border border-white/10 group-hover:border-white/30 transition-colors">
            <Image
              src={DATA.avatarUrl}
              alt={DATA.name}
              width={32}
              height={32}
              className="object-cover group-hover:scale-110 transition-transform duration-300"
            />
          </div>
          <span className="text-sm font-medium text-foreground/90 group-hover:text-foreground transition-colors font-sans">
            {DATA.name.toLowerCase()}
            <span className="text-accent text-xs ml-0.5 animate-pulse">•</span>
          </span>
        </Link>

        {/* Actions & Social */}
        <div className="flex items-center gap-4">
          <nav className="hidden sm:flex items-center gap-6 text-[11px] uppercase tracking-[0.1em] text-muted-foreground/80 font-sans font-bold">
            {DATA.navbar.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="hover:text-foreground transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-4 pl-4 border-l border-white/5">
            <ModeToggle />
            
            <div className="flex items-center gap-3.5">
              {Object.entries(DATA.contact.social)
                .filter(([_, social]) => social.navbar)
                .map(([name, social]) => (
                  <Link
                    key={name}
                    href={social.url}
                    target="_blank"
                    rel="noreferrer"
                    className="text-muted-foreground/70 hover:text-foreground transition-colors"
                    title={name}
                  >
                    <social.icon className="size-4" />
                  </Link>
                ))}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
