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
            Full Stack Developer with nearly 2 years delivering production-grade web and mobile apps — from database schema design to cloud deployment. I build with{" "}
            <span className="text-accent underline decoration-accent/30 underline-offset-4">Python & FastAPI</span>,{" "}
            <span className="text-accent underline decoration-accent/30 underline-offset-4">React.js & Flutter</span>, and{" "}
            <span className="text-accent underline decoration-accent/30 underline-offset-4">AWS</span>{" "}
            — scalable REST APIs, event-driven pipelines, and mobile apps with payment integration. End-to-end ownership is where I thrive.
          </p>
        </BlurFade>
      </div>
    </section>
  );
}
