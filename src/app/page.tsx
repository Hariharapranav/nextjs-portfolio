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
    <main className="flex flex-col min-h-[100dvh] space-y-10">
      <HeroSection />
      <AboutSection />
      <WorkSection />
      <EducationSection />
      <SkillsSection />
      <ProjectsSection />
      <ContactSection />
    </main>
  );
}
