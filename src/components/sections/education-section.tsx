import React from "react";
import BlurFade from "@/components/magicui/blur-fade";
import { DATA } from "@/data/resume";
import Link from "next/link";

const BLUR_FADE_DELAY = 0.04;

export function EducationSection() {
  return (
    <section id="education" className="py-8 border-t border-border/40">
      <BlurFade delay={BLUR_FADE_DELAY * 15}>
        <span className="text-[10px] font-sans font-bold uppercase tracking-widest text-muted-foreground">
          Education
        </span>
      </BlurFade>

      <div className="flex flex-col gap-8 mt-8">
        {DATA.education.map((edu, id) => (
          <BlurFade
            key={edu.school + edu.degree}
            delay={BLUR_FADE_DELAY * 16 + id * 0.08}
          >
            <Link
              href={edu.href || "#"}
              target="_blank"
              rel="noreferrer"
              className="group flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3"
            >
              <div>
                {/* Date */}
                <span className="text-[10px] font-sans font-bold text-accent tracking-[0.1em] uppercase">
                  {edu.start} – {edu.end}
                </span>

                {/* School */}
                <h3
                  className="font-display font-light text-foreground group-hover:text-accent transition-colors mt-2"
                  style={{ fontSize: "22px", lineHeight: "1.2", fontWeight: 300 }}
                >
                  {edu.school}
                </h3>

                {/* Degree */}
                <p className="text-[11px] font-sans text-muted-foreground mt-1 uppercase tracking-wider">
                  {edu.degree}
                </p>
              </div>
            </Link>
          </BlurFade>
        ))}
      </div>
    </section>
  );
}
