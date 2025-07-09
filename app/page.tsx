"use client"
import { HeroSection } from "@/components/hero-section"
import { ContactSection } from "@/components/contact-section"
import { EducationSection } from "@/components/education-section"
import { SkillsSection } from "@/components/skills-section"
import { InternshipsSection } from "@/components/internships-section"
import { ProjectsSection } from "@/components/projects-section"
import { CertificationsSection } from "@/components/certifications-section"
import { HonoursSection } from "@/components/honours-section"
import { motion } from "framer-motion"

export default function Portfolio() {
  const pageVariants = {
    initial: { opacity: 0 },
    animate: { opacity: 1 }
  }

  const containerVariants = {
    initial: { opacity: 0 },
    animate: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  }

  return (
    <>
      <motion.main 
        className="min-h-screen bg-background scroll-smooth" 
        role="main"
        variants={pageVariants}
        initial="initial"
        animate="animate"
        transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
      >
        <motion.div 
          variants={containerVariants}
          initial="initial"
          animate="animate"
        >
          <HeroSection />
          <EducationSection />
          <SkillsSection />
          <InternshipsSection />
          <ProjectsSection />
          <CertificationsSection />
          <HonoursSection />
          <ContactSection />
        </motion.div>
      </motion.main>
    </>
  )
}
