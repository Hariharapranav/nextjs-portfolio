import BlurFade from "@/components/magicui/blur-fade";
import { DATA } from "@/data/resume";
import Link from "next/link";

const BLUR_FADE_DELAY = 0.04;

export function HeroSection() {
  return (
    <section id="hero" className="pt-20 pb-6">
      <div className="mx-auto w-full max-w-2xl space-y-7">

        {/* Availability badge */}
        <BlurFade delay={BLUR_FADE_DELAY}>
          <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full border border-border/60 bg-card/40 backdrop-blur-sm text-[11px] font-sans text-muted-foreground">
            <span className="relative flex size-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-70" />
              <span className="relative inline-flex size-2 rounded-full bg-emerald-500" />
            </span>
            Available for full-time roles &amp; contracts
          </div>
        </BlurFade>

        {/* Name heading */}
        <BlurFade delay={BLUR_FADE_DELAY * 2}>
          <h1
            className="font-display font-light leading-[1.05]"
            style={{ fontSize: "clamp(36px, 9vw, 58px)" }}
          >
            <span className="text-foreground/70">Hi, I&apos;m </span>
            <span className="bg-gradient-to-r from-foreground via-accent to-cyan-400 bg-clip-text text-transparent">
              Hariharapranav
            </span>
            <span className="text-foreground/30">.</span>
          </h1>
        </BlurFade>

        {/* Description */}
        <BlurFade delay={BLUR_FADE_DELAY * 3}>
          <p className="text-[15px] text-muted-foreground font-sans leading-relaxed max-w-md">
            Full Stack Developer building with{" "}
            <span className="text-foreground/90 font-medium">Python &amp; FastAPI</span>,{" "}
            <span className="text-foreground/90 font-medium">React.js &amp; Flutter</span>, and{" "}
            <span className="text-foreground/90 font-medium">AWS</span>{" "}
            — from schema design to cloud deployment.
          </p>
        </BlurFade>

        {/* Location + experience row */}
        <BlurFade delay={BLUR_FADE_DELAY * 4}>
          <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-[11px] text-muted-foreground font-sans">
            <Link
              href={DATA.locationLink}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-1.5 hover:text-foreground transition-colors"
            >
              <span className="text-accent text-[13px]">⊙</span>
              {DATA.location}
            </Link>
            <span className="text-border/80">·</span>
            <span>~2 yrs production experience</span>
            <span className="text-border/80">·</span>
            <Link
              href={`mailto:${DATA.contact.email}`}
              className="hover:text-accent transition-colors"
            >
              {DATA.contact.email}
            </Link>
          </div>
        </BlurFade>
      </div>
    </section>
  );
}
