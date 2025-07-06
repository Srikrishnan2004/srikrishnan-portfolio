import { Card, CardContent } from "@/components/ui/card"
import { Mail, Phone, Linkedin, Github } from "lucide-react"

export function ContactSection() {
  return (
    <section id="contact" className="py-16 px-4 bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800 animate-fade-in" aria-labelledby="contact-heading">
      <div className="max-w-4xl mx-auto text-center">
        <h1 id="contact-heading" className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-4 animate-fade-in-up">
          Srikrishnan Velayutham
        </h1>
        <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8 animate-fade-in-up" style={{ animationDelay: '200ms' }}>
          Computer Science Engineering Student
        </p>

        <Card className="max-w-2xl mx-auto animate-fade-in-up" style={{ animationDelay: '400ms' }}>
          <CardContent className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <ContactLink 
                icon={Mail} 
                href="mailto:srikrishnan2210608@ssn.edu.in"
                text="srikrishnan2210608@ssn.edu.in"
                delay={600}
                aria-label="Email Srikrishnan Velayutham"
              />
              <ContactLink 
                icon={Phone} 
                text="+91 63692 81847"
                delay={700}
                aria-label="Phone number"
              />
              <ContactLink 
                icon={Linkedin} 
                href="https://www.linkedin.com/in/srikrishnan-velayutham-9727b0342"
                text="LinkedIn Profile"
                delay={800}
                aria-label="Visit Srikrishnan's LinkedIn profile"
              />
              <ContactLink 
                icon={Github} 
                href="https://github.com/Srikrishnan2004"
                text="GitHub Profile"
                delay={900}
                aria-label="Visit Srikrishnan's GitHub profile"
              />
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
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
  const content = (
    <div className="flex items-center gap-3 group">
      <Icon className="h-5 w-5 text-blue-600 animate-float" aria-hidden="true" />
      <span className="text-sm group-hover:text-blue-600 transition-all duration-300 group-hover:scale-105">
        {text}
      </span>
    </div>
  )

  if (href) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="animate-fade-in-up hover:scale-105 transition-transform duration-300"
        style={{ animationDelay: `${delay}ms`, animationFillMode: 'both' }}
        aria-label={ariaLabel}
      >
        {content}
      </a>
    )
  }

  return (
    <div 
      className="animate-fade-in-up"
      style={{ animationDelay: `${delay}ms`, animationFillMode: 'both' }}
      aria-label={ariaLabel}
    >
      {content}
    </div>
  )
}
