import BlurFade from "@/components/magicui/blur-fade";
import {
  SiSpringboot,
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
  SiSpringsecurity,
  SiMysql,
  SiFastapi,
  SiVite,
  SiPostman,
  SiGithub,
  SiLinux
} from "react-icons/si";
import { FaJava, FaAws, FaGitAlt, FaHtml5, FaCss3Alt } from "react-icons/fa";

const BLUR_FADE_DELAY = 0.04;

// Precise Bento Mapping following the "Tall & Interlocking" reference
const bentoItems = [
  { name: "Spring Boot", icon: SiSpringboot, color: "#6DB33F", span: "sm:col-span-2 sm:row-span-2" },
  { name: "Java", icon: FaJava, color: "#E02020", span: "sm:col-span-1 sm:row-span-3" }, // Extra Tall
  { name: "Kafka", icon: SiApachekafka, color: "currentColor", span: "sm:col-span-2 sm:row-span-2" },
  { name: "React", icon: SiReact, color: "#61DAFB", span: "sm:col-span-1 sm:row-span-2" }, // Tall
  { name: "TypeScript", icon: SiTypescript, color: "#3178C6", span: "sm:col-span-1 sm:row-span-2" }, // Tall
  { name: "PostgreSQL", icon: SiPostgresql, color: "#4169E1", span: "sm:col-span-1 sm:row-span-2" }, // Tall

  { name: "Docker", icon: SiDocker, color: "#2496ED", span: "sm:col-span-1 sm:row-span-1" },
  { name: "Redis", icon: SiRedis, color: "#DC382D", span: "sm:col-span-1 sm:row-span-2" }, // Tall
  { name: "FastAPI", icon: SiFastapi, color: "#05998B", span: "sm:col-span-2 sm:row-span-1" }, // Wide
  { name: "Python", icon: SiPython, color: "#3776AB", span: "sm:col-span-1 sm:row-span-1" },
  { name: "MySQL", icon: SiMysql, color: "#4479A1", span: "sm:col-span-1 sm:row-span-1" },

  { name: "AWS", icon: FaAws, color: "#FF9900", span: "sm:col-span-1 sm:row-span-2" }, // Tall
  { name: "Tailwind", icon: SiTailwindcss, color: "#06B6D4", span: "sm:col-span-1 sm:row-span-1" },
  { name: "JS", icon: SiJavascript, color: "#F7DF1E", span: "sm:col-span-1 sm:row-span-1" },
  { name: "Git", icon: FaGitAlt, color: "#F05032", span: "sm:col-span-1 sm:row-span-2" }, // Tall
  { name: "Vite", icon: SiVite, color: "#646CFF", span: "sm:col-span-1 sm:row-span-1" },
  { name: "Postman", icon: SiPostman, color: "#FF6C37", span: "sm:col-span-1 sm:row-span-1" },

  { name: "HTML5", icon: FaHtml5, color: "#E34F26", span: "sm:col-span-1 sm:row-span-1" },
  { name: "CSS3", icon: FaCss3Alt, color: "#1572B6", span: "sm:col-span-1 sm:row-span-1" },
  { name: "Security", icon: SiSpringsecurity, color: "#6DB33F", span: "sm:col-span-1 sm:row-span-1" },
  { name: "Next", icon: SiNextdotjs, color: "currentColor", span: "sm:col-span-1 sm:row-span-2" }, // Tall
  { name: "Figma", icon: SiFigma, color: "#F24E1E", span: "sm:col-span-1 sm:row-span-1" },
  { name: "Linux", icon: SiLinux, color: "#FCC624", span: "sm:col-span-1 sm:row-span-1" },
  { name: "GitHub", icon: SiGithub, color: "currentColor", span: "sm:col-span-1 sm:row-span-1" },
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

      {/* Extreme Bento Grid Layout — Responsive Column Control */}
      <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-8 auto-rows-[clamp(70px,12vw,100px)] gap-2.5">
        {bentoItems.map((item, id) => (
          <BlurFade
            key={item.name}
            delay={BLUR_FADE_DELAY * 5 + id * 0.02}
            className={`col-span-1 row-span-1 ${item.span}`}
          >
            <div
              className={`
                relative h-full w-full flex items-center justify-center rounded-[1.5rem] transition-all duration-700
                bg-white/20 dark:bg-white/[0.03] group hover:bg-white/40 dark:hover:bg-white/[0.06] 
                border border-black/[0.08] dark:border-white/[0.08]
                overflow-hidden shadow-sm backdrop-blur-[2px]
              `}
            >
              <item.icon
                className={`transition-all duration-700 group-hover:scale-110 drop-shadow-lg`}
                style={{
                  color: item.color !== "currentColor" ? item.color : undefined,
                  fontSize: item.span.includes("row-span-3") ? "42px" :
                    item.span.includes("row-span-2") ? "32px" : "24px",
                  opacity: 0.95
                }}
              />

              {/* Discrete Tooltip */}
              <div className="absolute inset-x-0 bottom-0 p-1.5 translate-y-full group-hover:translate-y-0 transition-transform bg-background/90 backdrop-blur-md border-t border-white/5">
                <p className="text-[7px] font-sans font-bold uppercase tracking-widest text-center truncate">
                  {item.name}
                </p>
              </div>

              {/* Sophisticated Glass Highlight */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent pointer-events-none opacity-30" />
            </div>
          </BlurFade>
        ))}
      </div>
    </section>
  );
}
