"use client";

import React, { useState } from "react";
import BlurFade from "@/components/magicui/blur-fade";
import { ProjectCard } from "@/components/project-card";
import { DATA } from "@/data/resume";
import { ChevronDown, ChevronUp } from "lucide-react";

const BLUR_FADE_DELAY = 0.04;
const INITIAL_COUNT = 4;

export function ProjectsSection() {
    const [showAll, setShowAll] = useState(false);

    const visibleProjects = showAll
        ? DATA.projects
        : DATA.projects.slice(0, INITIAL_COUNT);

    const hasMore = DATA.projects.length > INITIAL_COUNT;

    return (
        <section id="projects">
            <div className="space-y-12 w-full py-12">
                <BlurFade delay={BLUR_FADE_DELAY * 11}>
                    <div className="flex flex-col items-center justify-center space-y-4 text-center">
                        <div className="space-y-2">
                            <div className="inline-block rounded-lg bg-foreground text-background px-3 py-1 text-sm">
                                My Projects
                            </div>
                            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                                Check out my latest work
                            </h2>
                            <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                                I&apos;ve worked on a variety of projects, from simple websites
                                to complex web applications. Here are a few of my favorites.
                            </p>
                        </div>
                    </div>
                </BlurFade>

                <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 max-w-[800px] mx-auto">
                    {visibleProjects.map((project, id) => (
                        <BlurFade
                            key={project.title}
                            delay={BLUR_FADE_DELAY * 12 + id * 0.05}
                        >
                            <ProjectCard
                                href={project.href}
                                title={project.title}
                                description={project.description}
                                dates={project.dates}
                                tags={project.technologies}
                                image={project.image}
                                video={project.video}
                                links={project.links}
                            />
                        </BlurFade>
                    ))}
                </div>

                {hasMore && (
                    <BlurFade delay={BLUR_FADE_DELAY * 13}>
                        <div className="flex justify-center">
                            <button
                                onClick={() => setShowAll((prev) => !prev)}
                                className="group flex items-center gap-2 rounded-full border border-input bg-background px-5 py-2 text-sm font-medium text-muted-foreground shadow-sm transition-all duration-300 hover:border-foreground hover:text-foreground hover:shadow-md"
                            >
                                {showAll ? (
                                    <>
                                        Show less
                                        <ChevronUp className="size-4 transition-transform duration-300 group-hover:-translate-y-0.5" />
                                    </>
                                ) : (
                                    <>
                                        Show {DATA.projects.length - INITIAL_COUNT} more projects
                                        <ChevronDown className="size-4 transition-transform duration-300 group-hover:translate-y-0.5" />
                                    </>
                                )}
                            </button>
                        </div>
                    </BlurFade>
                )}
            </div>
        </section>
    );
}
