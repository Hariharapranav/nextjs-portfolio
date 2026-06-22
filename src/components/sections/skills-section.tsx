import BlurFade from "@/components/magicui/blur-fade";
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiPostgresql,
  SiDocker,
  SiRedis,
  SiApachekafka,
  SiTailwindcss,
  SiPython,
  SiFigma,
  SiJavascript,
  SiFastapi,
  SiGithub,
  SiFlutter,
  SiDart,
  SiCelery,
  SiNginx,
  SiRazorpay,
} from "react-icons/si";
import { FaAws, FaGitAlt } from "react-icons/fa";
import { SiGithubactions } from "react-icons/si";

const BLUR_FADE_DELAY = 0.04;

const bentoItems = [
  // Primary stack — large cells
  { name: "Python",    icon: SiPython,       color: "#3776AB", span: "sm:col-span-2 sm:row-span-2" },
  { name: "FastAPI",   icon: SiFastapi,      color: "#009688", span: "sm:col-span-1 sm:row-span-3" },
  { name: "React",     icon: SiReact,        color: "#61DAFB", span: "sm:col-span-2 sm:row-span-2" },
  { name: "Flutter",   icon: SiFlutter,      color: "#54C5F8", span: "sm:col-span-1 sm:row-span-2" },
  { name: "TypeScript",icon: SiTypescript,   color: "#3178C6", span: "sm:col-span-1 sm:row-span-2" },
  { name: "PostgreSQL",icon: SiPostgresql,   color: "#4169E1", span: "sm:col-span-1 sm:row-span-2" },

  // Backend / data
  { name: "Docker",    icon: SiDocker,       color: "#2496ED", span: "sm:col-span-1 sm:row-span-1" },
  { name: "Redis",     icon: SiRedis,        color: "#DC382D", span: "sm:col-span-1 sm:row-span-2" },
  { name: "Kafka",     icon: SiApachekafka,  color: "currentColor", span: "sm:col-span-2 sm:row-span-1" },
  { name: "Celery",    icon: SiCelery,       color: "#37814A", span: "sm:col-span-1 sm:row-span-1" },
  { name: "Dart",      icon: SiDart,         color: "#0175C2", span: "sm:col-span-1 sm:row-span-1" },

  // Cloud / DevOps
  { name: "AWS",       icon: FaAws,          color: "#FF9900", span: "sm:col-span-1 sm:row-span-2" },
  { name: "Nginx",     icon: SiNginx,        color: "#009639", span: "sm:col-span-1 sm:row-span-1" },
  { name: "GH Actions",icon: SiGithubactions,color: "#2088FF", span: "sm:col-span-1 sm:row-span-1" },
  { name: "Git",       icon: FaGitAlt,       color: "#F05032", span: "sm:col-span-1 sm:row-span-2" },
  { name: "Razorpay",  icon: SiRazorpay,     color: "#072654", span: "sm:col-span-1 sm:row-span-1" },

  // Frontend / tools
  { name: "Next.js",   icon: SiNextdotjs,    color: "currentColor", span: "sm:col-span-1 sm:row-span-2" },
  { name: "Tailwind",  icon: SiTailwindcss,  color: "#06B6D4", span: "sm:col-span-1 sm:row-span-1" },
  { name: "JavaScript",icon: SiJavascript,   color: "#F7DF1E", span: "sm:col-span-1 sm:row-span-1" },
  { name: "GitHub",    icon: SiGithub,       color: "currentColor", span: "sm:col-span-1 sm:row-span-1" },
  { name: "Figma",     icon: SiFigma,        color: "#F24E1E", span: "sm:col-span-1 sm:row-span-1" },
];

export function SkillsSection() {
  return (
    <section id="skills" className="pb-16 pt-4">
      <BlurFade delay={BLUR_FADE_DELAY * 4}>
        <div className="flex items-center justify-between mb-8">
          <span className="text-[10px] font-sans font-bold uppercase tracking-widest text-muted-foreground">
            Selected Stack &amp; Tooling
          </span>
        </div>
      </BlurFade>

      <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-8 auto-rows-[clamp(66px,11vw,96px)] gap-2">
        {bentoItems.map((item, id) => (
          <BlurFade
            key={item.name}
            delay={BLUR_FADE_DELAY * 5 + id * 0.02}
            className={`col-span-1 row-span-1 ${item.span}`}
          >
            <div
              className={`
                relative h-full w-full flex items-center justify-center rounded-2xl
                transition-all duration-500 group cursor-default
                bg-card/60 dark:bg-card/80
                hover:bg-card dark:hover:bg-card
                border border-border/50 hover:border-accent/30
                overflow-hidden shadow-sm backdrop-blur-[2px]
                hover:shadow-[0_0_24px_hsl(var(--accent)/0.12)]
              `}
            >
              <item.icon
                className="transition-all duration-500 group-hover:scale-110 drop-shadow-sm"
                style={{
                  color: item.color !== "currentColor" ? item.color : undefined,
                  fontSize: item.span.includes("row-span-3")
                    ? "40px"
                    : item.span.includes("row-span-2")
                    ? "30px"
                    : "22px",
                  opacity: 0.9,
                }}
              />

              {/* Name tooltip */}
              <div className="absolute inset-x-0 bottom-0 p-1.5 translate-y-full group-hover:translate-y-0 transition-transform duration-300 bg-background/90 backdrop-blur-md border-t border-border/40">
                <p className="text-[7px] font-sans font-bold uppercase tracking-widest text-center truncate text-foreground/70">
                  {item.name}
                </p>
              </div>

              {/* Glass highlight */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/8 to-transparent pointer-events-none" />
            </div>
          </BlurFade>
        ))}
      </div>
    </section>
  );
}
