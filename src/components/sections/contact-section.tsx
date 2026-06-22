import BlurFade from "@/components/magicui/blur-fade";
import { DATA } from "@/data/resume";
import Link from "next/link";

const BLUR_FADE_DELAY = 0.04;

export function ContactSection() {
  return (
    <section id="contact" className="py-6 border-t border-border/40">
      {/* CTA Card */}
      <BlurFade delay={BLUR_FADE_DELAY * 16}>
        <div className="relative rounded-2xl overflow-hidden border border-border/50 bg-card/60 backdrop-blur-sm p-6 sm:p-8">
          {/* Subtle glow inside card */}
          <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-transparent to-violet-500/5 pointer-events-none" />

          <div className="relative z-10">
            {/* Label */}
            <span className="text-[10px] font-sans font-bold uppercase tracking-widest text-muted-foreground">
              Get in Touch
            </span>

            {/* Headline */}
            <h2
              className="font-display font-light mt-3 text-foreground"
              style={{ fontSize: "clamp(26px, 6vw, 36px)", lineHeight: "1.15", fontWeight: 300 }}
            >
              Let&apos;s build something{" "}
              <span className="bg-gradient-to-r from-accent to-cyan-400 bg-clip-text text-transparent">
                great together.
              </span>
            </h2>

            <p className="mt-3 text-sm font-sans text-muted-foreground/70 max-w-sm leading-relaxed">
              Open to full-time roles, freelance projects, and collaborations. Reach out — I respond within 24 hours.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-3 mt-6">
              <Link
                href={`mailto:${DATA.contact.email}`}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-accent text-accent-foreground text-sm font-sans font-semibold hover:bg-accent/90 transition-all hover:shadow-[0_0_20px_hsl(var(--accent)/0.35)] duration-300"
              >
                ✉ {DATA.contact.email}
              </Link>
              <Link
                href={DATA.contact.social.LinkedIn.url}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl border border-border/60 bg-background/40 text-sm font-sans text-muted-foreground hover:text-foreground hover:border-border transition-all duration-300"
              >
                LinkedIn →
              </Link>
            </div>
          </div>
        </div>
      </BlurFade>

      {/* Footer */}
      <BlurFade delay={BLUR_FADE_DELAY * 17}>
        <div className="mt-14 text-center space-y-4">
          <div className="flex items-center justify-center gap-3 text-[11px] text-muted-foreground/50 italic">
            <div className="h-px w-10 bg-border/40" />
            <span className="flex items-center gap-2">
              <span className="text-[9px] opacity-50">❦</span>
              stay hungry, stay foolish
              <span className="text-[9px] opacity-50">❦</span>
            </span>
            <div className="h-px w-10 bg-border/40" />
          </div>
          <p className="text-[10px] text-muted-foreground/40 font-sans">
            © {new Date().getFullYear()} {DATA.name.toLowerCase()}
          </p>
        </div>
      </BlurFade>
    </section>
  );
}
