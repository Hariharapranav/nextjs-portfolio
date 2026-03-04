import BlurFade from "@/components/magicui/blur-fade";
import { Badge } from "@/components/ui/badge";

const BLUR_FADE_DELAY = 0.04;

const skillCategories = [
    {
        name: "Backend",
        icon: "⚙️",
        skills: ["Java", "Spring Boot 3", "Spring Security", "Spring WebFlux", "FastAPI", "Python"],
    },
    {
        name: "Frontend",
        icon: "🎨",
        skills: ["React", "TypeScript", "Next.js", "TailwindCSS", "Vite"],
    },
    {
        name: "Database & Cache",
        icon: "🗄️",
        skills: ["PostgreSQL", "MySQL", "Redis"],
    },
    {
        name: "Tools & Services",
        icon: "🛠️",
        skills: ["Apache Kafka", "JWT", "MapStruct", "Resilience4j", "Docker", "AWS EC2", "Figma"],
    },
];

export function SkillsSection() {
    return (
        <section id="skills">
            <div className="space-y-8 w-full py-12">
                {/* Header */}
                <BlurFade delay={BLUR_FADE_DELAY * 9}>
                    <div className="flex flex-col items-center justify-center space-y-4 text-center">
                        <div className="space-y-2">
                            <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground">
                                Technologies I use
                            </p>
                            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                                My Skills & Stack
                            </h2>
                            <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                                A collection of technologies and tools I work with to build
                                scalable, production-ready systems.
                            </p>
                        </div>
                    </div>
                </BlurFade>

                {/* Skill Category Cards - 2x2 Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {skillCategories.map((category, catIdx) => (
                        <BlurFade
                            key={category.name}
                            delay={BLUR_FADE_DELAY * 10 + catIdx * 0.08}
                        >
                            <div className="rounded-xl border bg-card p-5 h-full transition-all duration-300 hover:shadow-md hover:-translate-y-0.5">
                                <div className="flex items-center gap-2 mb-4">
                                    <span className="text-lg">{category.icon}</span>
                                    <h3 className="font-semibold text-sm">{category.name}</h3>
                                </div>
                                <div className="flex flex-wrap gap-2">
                                    {category.skills.map((skill) => (
                                        <Badge
                                            key={skill}
                                            variant="secondary"
                                            className="text-xs px-2.5 py-1"
                                        >
                                            {skill}
                                        </Badge>
                                    ))}
                                </div>
                            </div>
                        </BlurFade>
                    ))}
                </div>
            </div>
        </section>
    );
}
