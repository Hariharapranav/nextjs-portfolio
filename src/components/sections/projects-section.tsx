"use client";

import React from "react";
import BlurFade from "@/components/magicui/blur-fade";
import { DATA } from "@/data/resume";
import Image from "next/image";
import Link from "next/link";

const BLUR_FADE_DELAY = 0.04;

export function ProjectsSection() {
  return (
    <section id="projects" className="py-8 border-t border-border/40">
      {/* Section header */}
      <BlurFade delay={BLUR_FADE_DELAY * 11}>
        <div className="flex items-center justify-between mb-10">
          <span className="text-[10px] font-sans font-bold uppercase tracking-widest text-muted-foreground">
            Projects
          </span>
          <Link
            href="/projects"
            className="text-[10px] font-sans font-medium text-muted-foreground hover:text-accent transition-colors uppercase tracking-wider"
          >
            View all →
          </Link>
        </div>
      </BlurFade>

      {/* Project list */}
      <div className="flex flex-col divide-y divide-border/40">
        {DATA.projects.map((project, id) => (
          <BlurFade
            key={project.title}
            delay={BLUR_FADE_DELAY * 12 + id * 0.05}
          >
            <Link
              href={project.href || "#"}
              target="_blank"
              rel="noreferrer"
              className="group flex gap-5 py-7 hover:bg-card/30 -mx-3 px-3 rounded-xl transition-colors duration-300"
            >
              {/* Project number */}
              <span
                className="font-display font-light text-border/40 group-hover:text-accent/30 transition-colors shrink-0 leading-none select-none"
                style={{ fontSize: "clamp(32px, 6vw, 44px)", fontWeight: 300 }}
              >
                {String(id + 1).padStart(2, "0")}
              </span>

              {/* Content */}
              <div className="flex-1 min-w-0">
                {/* Date */}
                <span className="text-[10px] font-sans font-bold text-accent tracking-[0.1em] uppercase">
                  {project.dates}
                </span>

                {/* Title */}
                <h3
                  className="font-display font-light text-foreground group-hover:text-accent transition-colors mt-1.5"
                  style={{ fontSize: "20px", lineHeight: "1.25", fontWeight: 300 }}
                >
                  {project.title}
                </h3>

                {/* Description */}
                <p className="text-sm font-sans text-muted-foreground/70 mt-2 leading-relaxed line-clamp-2">
                  {project.description}
                </p>

                {/* Tech badges */}
                <div className="flex flex-wrap gap-1.5 mt-3">
                  {project.technologies.slice(0, 6).map((tech) => (
                    <span
                      key={tech}
                      className="inline-flex px-2 py-0.5 rounded-md bg-secondary/60 border border-border/50 text-[9px] font-sans font-medium text-muted-foreground uppercase tracking-wider"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 6 && (
                    <span className="inline-flex px-2 py-0.5 rounded-md bg-secondary/60 border border-border/50 text-[9px] font-sans font-medium text-muted-foreground">
                      +{project.technologies.length - 6}
                    </span>
                  )}
                </div>

                {/* Links */}
                {project.links && project.links.length > 0 && (
                  <div className="flex items-center gap-3 mt-3">
                    {project.links.map((link) => (
                      <span
                        key={link.type}
                        className="inline-flex items-center gap-1.5 text-[10px] font-sans text-muted-foreground/50 group-hover:text-accent/70 transition-colors uppercase tracking-wider"
                      >
                        {link.icon}
                        {link.type}
                      </span>
                    ))}
                  </div>
                )}
              </div>

              {/* Thumbnail (if image/video available) */}
              {(project.image || project.video) && (
                <div className="hidden sm:block shrink-0 w-24 h-16 rounded-xl overflow-hidden border border-border/40 bg-secondary/20 relative">
                  {project.video ? (
                    <video
                      src={project.video}
                      autoPlay
                      loop
                      muted
                      playsInline
                      className="w-full h-full object-cover"
                    />
                  ) : project.image ? (
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover"
                    />
                  ) : null}
                </div>
              )}
            </Link>
          </BlurFade>
        ))}
      </div>
    </section>
  );
}
