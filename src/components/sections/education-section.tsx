import React from "react";
import BlurFade from "@/components/magicui/blur-fade";
import { ResumeCard } from "@/components/resume-card";
import { DATA } from "@/data/resume";

const BLUR_FADE_DELAY = 0.04;

export function EducationSection() {
    return (
        <section id="education" className="w-full py-20 px-6">
            <div className="max-w-5xl mx-auto">
                <BlurFade delay={BLUR_FADE_DELAY * 30}>
                    <p className="text-xs font-bold uppercase tracking-widest text-orange-500 mb-2 text-center">
                    </p>
                    <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-center mb-12">
                        Academic Background
                    </h2>
                </BlurFade>

                <div className="flex flex-col gap-4">
                    {DATA.education.map((education, id) => (
                        <BlurFade
                            key={education.school + education.degree}
                            delay={BLUR_FADE_DELAY * 31 + id * 0.08}
                        >
                            <ResumeCard
                                href={education.href}
                                logoUrl={education.logoUrl}
                                altText={education.school}
                                title={education.school}
                                subtitle={education.degree}
                                period={`${education.start} - ${education.end}`}
                            />
                        </BlurFade>
                    ))}
                </div>
            </div>
        </section>
    );
}
