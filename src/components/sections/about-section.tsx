import BlurFade from "@/components/magicui/blur-fade";
import { DATA } from "@/data/resume";
import Markdown from "react-markdown";

const BLUR_FADE_DELAY = 0.04;

export function AboutSection() {
  return (
    <section id="about" className="py-4 border-t border-border/40">
      {/* Summary removed as it's now in the Hero */}

      {/* Skills flat list */}
      <BlurFade delay={BLUR_FADE_DELAY * 4}>
        <div className="mt-5 flex flex-wrap gap-x-4 gap-y-1">
          {DATA.skills.slice(0, 8).map((skill) => (
            <span key={skill} className="text-xs text-muted-foreground/70 font-sans">
              {skill}
            </span>
          ))}
        </div>
      </BlurFade>
    </section>
  );
}
