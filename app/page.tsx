import { ContactSection } from "@/components/contact-section"
import { EducationSection } from "@/components/education-section"
import { SkillsSection } from "@/components/skills-section"
import { InternshipsSection } from "@/components/internships-section"
import { ProjectsSection } from "@/components/projects-section"
import { CertificationsSection } from "@/components/certifications-section"
import { HonoursSection } from "@/components/honours-section"

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-background">
      <ContactSection />
      <EducationSection />
      <SkillsSection />
      <InternshipsSection />
      <ProjectsSection />
      <CertificationsSection />
      <HonoursSection />
    </div>
  )
}
