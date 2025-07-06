"use client"
import { Card, CardContent } from "@/components/ui/card"
import { Mail, Phone, Linkedin, Github } from "lucide-react"
import { motion } from "framer-motion"
import { BrizerSection, BrizerCard, BrizerBackground } from "@/components/ui/brizer-effect"

export function ContactSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0
    }
  }

  return (
    <BrizerSection 
      id="contact" 
      className="py-16 px-4 bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800" 
      aria-labelledby="contact-heading"
    >
      <BrizerBackground>
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <BrizerCard className="max-w-2xl mx-auto" delay={0.4}>
            <Card>
              <CardContent className="p-6">
                <motion.div 
                  className="grid grid-cols-1 md:grid-cols-2 gap-4"
                  variants={containerVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                >
                  <ContactLink 
                    icon={Mail} 
                    href="mailto:srikrishnan2210608@ssn.edu.in"
                    text="srikrishnan2210608@ssn.edu.in"
                    delay={0.6}
                    aria-label="Email Srikrishnan Velayutham"
                  />
                  <ContactLink 
                    icon={Phone} 
                    text="+91 63692 81847"
                    delay={0.7}
                    aria-label="Phone number"
                  />
                  <ContactLink 
                    icon={Linkedin} 
                    href="https://www.linkedin.com/in/srikrishnan-velayutham-9727b0342"
                    text="LinkedIn Profile"
                    delay={0.8}
                    aria-label="Visit Srikrishnan's LinkedIn profile"
                  />
                  <ContactLink 
                    icon={Github} 
                    href="https://github.com/Srikrishnan2004"
                    text="GitHub Profile"
                    delay={0.9}
                    aria-label="Visit Srikrishnan's GitHub profile"
                  />
                </motion.div>
              </CardContent>
            </Card>
          </BrizerCard>
          {/* Contact Us Form */}
          <div className="max-w-2xl mx-auto mt-12">
            <BrizerCard delay={0.6} className="">
              <Card>
                <CardContent className="p-8">
                  <h2 className="text-2xl font-bold mb-4 text-blue-700 dark:text-blue-300 text-center">Contact Us</h2>
                  <form className="space-y-5" autoComplete="off" onSubmit={e => e.preventDefault()}>
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-1">Name</label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        className="w-full rounded-md border border-blue-200 dark:border-blue-800 bg-white dark:bg-gray-900 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400 dark:focus:ring-blue-700 text-gray-900 dark:text-gray-100 shadow-sm"
                        placeholder="Your Name"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-1">Email</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        className="w-full rounded-md border border-blue-200 dark:border-blue-800 bg-white dark:bg-gray-900 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400 dark:focus:ring-blue-700 text-gray-900 dark:text-gray-100 shadow-sm"
                        placeholder="you@email.com"
                      />
                    </div>
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-1">Message</label>
                      <textarea
                        id="message"
                        name="message"
                        rows={4}
                        required
                        className="w-full rounded-md border border-blue-200 dark:border-blue-800 bg-white dark:bg-gray-900 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400 dark:focus:ring-blue-700 text-gray-900 dark:text-gray-100 shadow-sm"
                        placeholder="How can we help you?"
                      />
                    </div>
                    <button
                      type="submit"
                      className="w-full py-2 px-4 rounded-md bg-gradient-to-r from-blue-600 to-blue-800 hover:from-blue-700 hover:to-blue-900 text-white font-semibold shadow transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-400 dark:focus:ring-blue-700"
                    >
                      Send Message
                    </button>
                  </form>
                </CardContent>
              </Card>
            </BrizerCard>
          </div>
        </div>
      </BrizerBackground>
    </BrizerSection>
  )
}

interface ContactLinkProps {
  icon: any
  href?: string
  text: string
  delay: number
  'aria-label'?: string
}

function ContactLink({ icon: Icon, href, text, delay, 'aria-label': ariaLabel }: ContactLinkProps) {
  const linkVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0
    }
  }

  const content = (
    <motion.div 
      className="flex items-center gap-3 group"
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.2 }}
    >
      <motion.div
        animate={{ rotate: [0, 10, -10, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      >
        <Icon className="h-5 w-5 text-blue-600" aria-hidden="true" />
      </motion.div>
      <span className="text-sm group-hover:text-blue-600 transition-all duration-300 group-hover:scale-105">
        {text}
      </span>
    </motion.div>
  )

  if (href) {
    return (
      <motion.a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="block"
        variants={linkVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        whileHover={{ scale: 1.02 }}
        transition={{ duration: 0.3 }}
        aria-label={ariaLabel}
      >
        {content}
      </motion.a>
    )
  }

  return (
    <motion.div 
      variants={linkVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      aria-label={ariaLabel}
    >
      {content}
    </motion.div>
  )
}
