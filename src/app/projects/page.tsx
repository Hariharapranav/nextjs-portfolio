import BlurFade from "@/components/magicui/blur-fade";
import { DATA } from "@/data/resume";
import Image from "next/image";
import Link from "next/link";

const BLUR_FADE_DELAY = 0.04;

export default function ProjectsPage() {
  return (
    <main className="flex flex-col min-h-[100dvh]">
      <section className="pt-24 pb-12">
        <div className="mx-auto w-full max-w-2xl space-y-12">
          <BlurFade delay={BLUR_FADE_DELAY}>
            <div className="space-y-4">
              <h1 className="font-display text-4xl sm:text-5xl font-light text-foreground" style={{ fontWeight: 300 }}>
                Selected Projects
              </h1>
              <p className="text-muted-foreground max-w-lg leading-relaxed">
                A detailed look at the systems, tools, and experiments I&apos;ve built over the years.
              </p>
            </div>
          </BlurFade>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {DATA.projects.map((project, id) => (
              <BlurFade key={project.title} delay={BLUR_FADE_DELAY * 2 + id * 0.05}>
                <div className="group space-y-4">
                  <Link href={project.href || "#"} target="_blank" className="block relative aspect-[16/10] overflow-hidden rounded-xl bg-secondary border border-white/5 group-hover:border-white/10 transition-colors">
                    {project.video ? (
                      <video
                        src={project.video}
                        autoPlay
                        loop
                        muted
                        playsInline
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    ) : project.image ? (
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    ) : null}
                  </Link>
                  
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <h3 className="font-display text-xl font-light text-foreground" style={{ fontWeight: 300 }}>
                        {project.title}
                      </h3>
                      <span className="text-[10px] font-sans font-bold uppercase tracking-widest text-muted-foreground/40">
                        {project.dates.split(" ").pop()}
                      </span>
                    </div>
                    <p className="text-sm text-muted-foreground/80 leading-relaxed font-sans">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2 pt-1">
                      {project.technologies.slice(0, 4).map((tech) => (
                        <span key={tech} className="text-[10px] font-sans font-medium text-accent/60 uppercase tracking-wider">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </BlurFade>
            ))}
          </div>

          <BlurFade delay={BLUR_FADE_DELAY * 4}>
            <div className="pt-12 border-t border-white/5">
              <Link href="/" className="text-sm font-sans font-bold text-muted-foreground hover:text-foreground transition-colors uppercase tracking-widest">
                ← Back to Home
              </Link>
            </div>
          </BlurFade>
        </div>
      </section>
    </main>
  );
}
