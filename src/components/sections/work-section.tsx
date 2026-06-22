import BlurFade from "@/components/magicui/blur-fade";
import { DATA } from "@/data/resume";
import Link from "next/link";

const BLUR_FADE_DELAY = 0.04;

export function WorkSection() {
  return (
    <section id="work" className="py-8 border-t border-border/40">
      {/* Section header */}
      <BlurFade delay={BLUR_FADE_DELAY * 5}>
        <span className="text-[10px] font-sans font-bold uppercase tracking-widest text-muted-foreground">
          Work Experience
        </span>
      </BlurFade>

      {/* Timeline */}
      <div className="relative mt-8 pl-5">
        {/* Vertical connecting line */}
        <div className="absolute left-0 top-2 bottom-6 w-px bg-gradient-to-b from-accent/60 via-border/60 to-transparent" />

        <div className="flex flex-col gap-10">
          {DATA.work.map((work, id) => (
            <BlurFade key={work.title} delay={BLUR_FADE_DELAY * 6 + id * 0.06}>
              <div className="relative group">
                {/* Timeline dot */}
                <div
                  className={`absolute -left-[21px] top-[5px] size-2.5 rounded-full border-2 transition-colors duration-300
                    ${id === 0
                      ? "bg-accent border-accent shadow-[0_0_8px_hsl(var(--accent)/0.5)]"
                      : "bg-background border-border/60 group-hover:border-accent/50"
                    }
                  `}
                />

                {/* Card content */}
                <Link
                  href={work.href || "#"}
                  target="_blank"
                  rel="noreferrer"
                  className="block"
                >
                  {/* Date + location row */}
                  <div className="flex flex-wrap items-center gap-x-2 gap-y-1 mb-2">
                    <span className="text-[10px] font-sans font-bold text-accent tracking-[0.1em] uppercase">
                      {work.start} – {work.end ?? "Present"}
                    </span>
                    <span className="text-border/60 text-[10px]">·</span>
                    <span className="text-[10px] font-sans text-muted-foreground uppercase tracking-wider">
                      {work.location}
                    </span>
                    {work.badges?.includes("Current") && (
                      <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-[9px] font-sans font-bold uppercase tracking-widest">
                        <span className="size-1.5 rounded-full bg-emerald-400 animate-pulse" />
                        Now
                      </span>
                    )}
                  </div>

                  {/* Title */}
                  <h3
                    className="font-display font-light text-foreground group-hover:text-accent transition-colors duration-300"
                    style={{ fontSize: "22px", lineHeight: "1.2", fontWeight: 300 }}
                  >
                    {work.title}
                  </h3>

                  {/* Company */}
                  <p className="text-[11px] font-sans text-muted-foreground mt-1 uppercase tracking-wider">
                    at {work.company}
                  </p>

                  {/* Description */}
                  <p className="text-sm font-sans text-muted-foreground/70 mt-3 leading-relaxed">
                    {work.description}
                  </p>
                </Link>
              </div>
            </BlurFade>
          ))}
        </div>
      </div>
    </section>
  );
}