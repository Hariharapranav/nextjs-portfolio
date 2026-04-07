import BlurFade from "@/components/magicui/blur-fade";
import { DATA } from "@/data/resume";
import Link from "next/link";

const BLUR_FADE_DELAY = 0.04;

export function WorkSection() {
  return (
    <section id="work" className="py-6 border-t border-border/40">
      {/* Section header */}
      <BlurFade delay={BLUR_FADE_DELAY * 5}>
        <div className="flex items-center justify-between mb-5">
          <span className="text-[10px] font-sans font-bold uppercase tracking-widest text-muted-foreground">
            Work Experience
          </span>
          {/* <Link href="#" className="text-[10px] font-sans font-medium text-muted-foreground hover:text-foreground transition-colors uppercase tracking-wider">
            All Works →
          </Link> */}
        </div>
      </BlurFade>

      {/* Entries — styled like "Recent Stories" in reference */}
      <div className="flex flex-col space-y-8">
        {DATA.work.map((work, id) => (
          <BlurFade key={work.company} delay={BLUR_FADE_DELAY * 6 + id * 0.05}>
            <Link
              href={work.href || "#"}
              target="_blank"
              rel="noreferrer"
              className="group block relative"
            >
              <div className="flex flex-col">
                {/* Date + category row */}
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-[10px] font-sans font-bold text-accent tracking-[0.1em] uppercase">
                    {work.start} – {work.end ?? "Present"}
                  </span>
                  <span className="text-[10px] text-muted-foreground/60">·</span>
                  <span className="text-[10px] font-sans text-muted-foreground uppercase tracking-widest">
                    {work.location}
                  </span>
                </div>
                {/* Title — Fraunces, large */}
                <h3
                  className="font-display font-light text-foreground group-hover:text-accent transition-colors"
                  style={{ fontSize: "24px", lineHeight: "1.2", fontWeight: 300 }}
                >
                  {work.title}
                </h3>
                <p className="text-sm font-sans text-muted-foreground mt-1 uppercase tracking-wider">
                  at {work.company}
                </p>
              </div>
            </Link>
          </BlurFade>
        ))}
      </div>
    </section>
  );
}