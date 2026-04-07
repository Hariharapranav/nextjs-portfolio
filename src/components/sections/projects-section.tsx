"use client";

import React, { useState } from "react";
import BlurFade from "@/components/magicui/blur-fade";
import { DATA } from "@/data/resume";
import Image from "next/image";
import Link from "next/link";

const BLUR_FADE_DELAY = 0.04;
const INITIAL_COUNT = 2;

export function ProjectsSection() {
  const [showAll, setShowAll] = useState(false);

  const visibleProjects = showAll
    ? DATA.projects
    : DATA.projects.slice(0, INITIAL_COUNT);

  const hasMore = DATA.projects.length > INITIAL_COUNT;

  return (
    <section id="projects" className="py-8 border-t border-border/40">
      {/* Section header */}
      <BlurFade delay={BLUR_FADE_DELAY * 11}>
        <div className="flex items-center justify-between mb-8">
          <span className="text-[10px] font-sans font-bold uppercase tracking-widest text-muted-foreground">
            Current Projects
          </span>
          <Link
            href="/projects"
            className="text-[10px] font-sans font-medium text-muted-foreground hover:text-foreground transition-colors uppercase tracking-wider"
          >
            All Works →
          </Link>
        </div>
      </BlurFade>

      {/* Project cards — 2-column grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-12">
        {visibleProjects.map((project, id) => (
          <BlurFade
            key={project.title}
            delay={BLUR_FADE_DELAY * 12 + id * 0.05}
          >
            <Link
              href={project.href || "#"}
              target="_blank"
              rel="noreferrer"
              className="group block"
            >
              {/* Thumbnail */}
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-border/50 bg-secondary/30 mb-5 shadow-sm transition-shadow hover:shadow-md">
                <span className="absolute top-3 right-3 z-10 bg-black/80 dark:bg-white/80 backdrop-blur-md text-white dark:text-black text-[9px] font-sans font-bold px-2 py-0.5 rounded-full uppercase tracking-wider">
                  {id === 0 ? "Featured" : "New"}
                </span>
                
                {project.video ? (
                  <video
                    src={project.video}
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                ) : project.image ? (
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center">
                    <span className="text-3xl">🚀</span>
                  </div>
                )}
              </div>

              {/* Title — Elegant & Large */}
              <h3
                className="font-display font-light text-foreground group-hover:text-accent transition-colors mb-2"
                style={{ fontSize: "22px", lineHeight: "1.2", fontWeight: 300 }}
              >
                {project.title}
              </h3>
              <p className="text-sm font-sans text-muted-foreground/80 leading-relaxed line-clamp-2">
                {project.description}
              </p>
            </Link>
          </BlurFade>
        ))}
      </div>

      {/* {hasMore && (
        <BlurFade delay={BLUR_FADE_DELAY * 13}>
          <button
            onClick={() => setShowAll((prev) => !prev)}
            className="mt-4 text-xs font-sans text-muted-foreground hover:text-foreground transition-colors"
          >
            {showAll
              ? "← Show less"
              : `+ Show ${DATA.projects.length - INITIAL_COUNT} more projects`}
          </button>
        </BlurFade>
      )} */}
    </section>
  );
}
