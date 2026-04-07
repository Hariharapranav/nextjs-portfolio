import BlurFade from "@/components/magicui/blur-fade";
import { DATA } from "@/data/resume";

const BLUR_FADE_DELAY = 0.04;

export function HeroSection() {
  return (
    <section id="hero" className="pt-20 pb-4">
      <div className="mx-auto w-full max-w-2xl space-y-6">
        {/* Hero heading — Fraunces 300, 56px / 64.4px line-height */}
        <BlurFade delay={BLUR_FADE_DELAY * 2}>
          <h1
            className="font-display font-light text-foreground mb-4"
            style={{
              fontSize: "clamp(32px, 8vw, 56px)",
              lineHeight: "1.1",
              fontWeight: 300,
              fontStyle: "normal",
            }}
          >
            {`Hi, I'm ${DATA.name}.`}
          </h1>
        </BlurFade>

        {/* Tight Summary — Small */}
        <BlurFade delay={BLUR_FADE_DELAY * 3}>
          <p className="text-sm sm:text-base text-foreground font-sans leading-relaxed max-w-xl font-normal">
            Java Full Stack Developer with a CS degree from{" "}
            <span className="font-medium text-foreground hover:underline decoration-border underline-offset-4 text-xs tracking-wide">
              Bannari Amman Institute of Technology (&apos;23)
            </span>
            . I build end-to-end systems with <span className="text-accent underline decoration-accent/30 underline-offset-4">Spring Boot 3</span> and <span className="text-accent underline decoration-accent/30 underline-offset-4">React/Next.js</span> — from workflow engines and Kafka pipelines to real-time dashboards. Clean code, secure by default, built to scale.
          </p>
        </BlurFade>
      </div>
    </section>
  );
}
