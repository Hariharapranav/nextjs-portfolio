import BlurFade from "@/components/magicui/blur-fade";
import { DATA } from "@/data/resume";
import Link from "next/link";

const BLUR_FADE_DELAY = 0.04;

export function ContactSection() {
  return (
    <section id="contact" className="py-6 border-t border-border/40">
      {/* Newsletter / CTA card — mirrors the "Side Notes" card in the reference */}
      <BlurFade delay={BLUR_FADE_DELAY * 16}>
        <div className="flex items-center justify-between rounded-xl border border-border/50 bg-card px-4 py-3.5 hover:border-border transition-colors">
          <div className="flex items-center gap-3">
            <div className="size-8 rounded-lg bg-orange-500 flex items-center justify-center shrink-0">
              <span className="text-white text-xs font-bold">✉</span>
            </div>
            <div>
              <p className="text-sm font-semibold text-foreground">Get in Touch</p>
              <p className="text-xs text-muted-foreground">
                Shoot me a dm{" "}
                <Link
                  href={DATA.contact.social.LinkedIn.url}
                  className="text-blue-600 dark:text-blue-400 hover:underline"
                  target="_blank"
                  rel="noreferrer"
                >
                  on LinkedIn
                </Link>{" "}
                or email at{" "}
                <Link
                  href={`mailto:${DATA.contact.email}`}
                  className="text-blue-600 dark:text-blue-400 hover:underline"
                >
                  {DATA.contact.email}
                </Link>
              </p>
            </div>
          </div>
          <span className="text-muted-foreground text-sm">›</span>
        </div>
      </BlurFade>

      {/* Footer */}
      <BlurFade delay={BLUR_FADE_DELAY * 17}>
        <div className="mt-16 text-center space-y-6">
          {/* Logo Row - Inspired by reference */}
          {/* <div className="flex flex-wrap justify-center items-center gap-x-8 gap-y-4 opacity-40 grayscale hover:grayscale-0 transition-all">
            <span className="font-bold text-lg tracking-tight">zomato</span>
            <span className="font-semibold text-lg italic">eversend</span>
            <span className="font-medium text-lg">Figma</span>
            <span className="font-bold text-lg">feedly</span>
            <span className="font-semibold text-lg">stickermule</span>
          </div> */}

          <div className="space-y-2 pt-8">
            <p className="text-[11px] text-muted-foreground/80 font-sans">
              ©{new Date().getFullYear()}, {DATA.name.toLowerCase()} ·
            </p>
            {/* <div className="flex flex-wrap justify-center gap-x-3 text-[10px] text-muted-foreground/70 font-sans uppercase tracking-widest">
              <span>links</span>
              <span>·</span>
              <span>supporters</span>
              <span>·</span>
              <span>bookshelf</span>
              <span>·</span>
              <span>tech stack</span>
              <span>·</span>
              <span>version</span>
            </div> */}
            <div className="flex items-center justify-center gap-4 text-xs text-muted-foreground/60 italic pt-4">
              <div className="h-[1px] w-12 bg-border/40" />
              <span className="flex items-center gap-2">
                <span className="text-[10px] opacity-40">❦</span>
                stay hungry, stay foolish
                <span className="text-[10px] opacity-40">❦</span>
              </span>
              <div className="h-[1px] w-12 bg-border/40" />
            </div>
          </div>
        </div>
      </BlurFade>
    </section>
  );
}
