import {
  HeroSection,
  AboutSection,
  WorkSection,
  EducationSection,
  SkillsSection,
  ProjectsSection,
  ContactSection,
} from "@/components/sections";

export default function Page() {
  return (
    <main className="flex flex-col min-h-[100dvh] space-y-16">
      <HeroSection />
      <SkillsSection />
      <WorkSection />
      <EducationSection />
      <ProjectsSection />
      <ContactSection />
    </main>
  );
}
