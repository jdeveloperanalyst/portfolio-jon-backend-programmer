import { Navigation } from "@/components/navigation"
import { HeroSection } from "@/components/hero-section"
import { SkillsSection } from "@/components/skills-section"
import { ExperienceSection } from "@/components/experience-section"
import { ProjectsSection } from "@/components/projects-section"
import { ContactSection } from "@/components/contact-section"
import { LearningPathSection } from "@/components/learning-path-section"
import { CertificatesSection } from "@/components/certificates-section"

export default function Portfolio() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      <section id="sobre">
        <HeroSection />
      </section>
      <section id="skills">
        <SkillsSection />
      </section>
      <section id="experiencia">
        <ExperienceSection />
      </section>
      <section id="trilha">
        <LearningPathSection />
      </section>
      <section id="projetos">
        <ProjectsSection />
      </section>
      <section id="contato">
        <ContactSection />
      </section>
    </main>
  )
}
