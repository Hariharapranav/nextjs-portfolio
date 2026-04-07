import React from "react";
import BlurFade from "@/components/magicui/blur-fade";
import { DATA } from "@/data/resume";

const BLUR_FADE_DELAY = 0.04;

export function EducationSection() {
  return (
    <section id="education" className="py-8 border-t border-border/40">
      <BlurFade delay={BLUR_FADE_DELAY * 15}>
        <div className="flex items-center justify-between mb-8">
          <span className="text-[10px] font-sans font-bold uppercase tracking-widest text-muted-foreground">
            Education
          </span>
        </div>
      </BlurFade>

      <div className="flex flex-col space-y-8">
        {DATA.education.map((education, id) => (
          <BlurFade
            key={education.school + education.degree}
            delay={BLUR_FADE_DELAY * 16 + id * 0.08}
          >
            <div className="flex flex-col">
              {/* Date row */}
              <div className="flex items-center gap-2 mb-2">
                <span className="text-[10px] font-sans font-bold text-accent tracking-[0.1em] uppercase">
                  {education.start} – {education.end}
                </span>
              </div>
              {/* School — Fraunces */}
              <h3
                className="font-display font-light text-foreground"
                style={{ fontSize: "24px", lineHeight: "1.2", fontWeight: 300 }}
              >
                {education.school}
              </h3>
              <p className="text-sm font-sans text-muted-foreground/80 mt-1 uppercase tracking-wider">
                {education.degree}
              </p>
            </div>
          </BlurFade>
        ))}
      </div>
    </section>
  );
}
