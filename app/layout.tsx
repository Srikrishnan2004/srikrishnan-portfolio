import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Srikrishnan Velayutham - Full Stack Developer & Computer Science Student',
  description: 'Portfolio of Srikrishnan Velayutham, a Computer Science Engineering student and Full Stack Developer. Specializing in React, Node.js, Flutter, and modern web technologies. View projects, skills, and experience.',
  keywords: [
    'Srikrishnan Velayutham',
    'Full Stack Developer',
    'Computer Science Student',
    'React Developer',
    'Node.js Developer',
    'Flutter Developer',
    'Web Development',
    'Mobile App Development',
    'Software Engineer',
    'Portfolio',
    'SSN College of Engineering',
    'Chennai',
    'India'
  ],
  authors: [{ name: 'Srikrishnan Velayutham' }],
  creator: 'Srikrishnan Velayutham',
  publisher: 'Srikrishnan Velayutham',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://srikrishnanv.netlify.app'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://srikrishnanv.netlify.app',
    title: 'Srikrishnan Velayutham - Full Stack Developer & Computer Science Student',
    description: 'Portfolio of Srikrishnan Velayutham, a Computer Science Engineering student and Full Stack Developer. Specializing in React, Node.js, Flutter, and modern web technologies.',
    siteName: 'Srikrishnan Velayutham Portfolio',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Srikrishnan Velayutham - Full Stack Developer Portfolio',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Srikrishnan Velayutham - Full Stack Developer & Computer Science Student',
    description: 'Portfolio of Srikrishnan Velayutham, a Computer Science Engineering student and Full Stack Developer. Specializing in React, Node.js, Flutter, and modern web technologies.',
    images: ['/og-image.png'],
    creator: '@srikrishnanv',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
    yandex: 'your-yandex-verification-code',
    yahoo: 'your-yahoo-verification-code',
  },
  category: 'technology',
  classification: 'Portfolio Website',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content="#3b82f6" />
        <meta name="msapplication-TileColor" content="#3b82f6" />
        
        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              "name": "Srikrishnan Velayutham",
              "jobTitle": "Full Stack Developer & Computer Science Student",
              "url": "https://srikrishnanv.com",
              "sameAs": [
                "https://www.linkedin.com/in/srikrishnan-velayutham-9727b0342",
                "https://github.com/Srikrishnan2004"
              ],
              "worksFor": {
                "@type": "Organization",
                "name": "SSN College of Engineering"
              },
              "alumniOf": {
                "@type": "Organization",
                "name": "SSN College of Engineering"
              },
              "knowsAbout": [
                "React.js",
                "Node.js",
                "Flutter",
                "TypeScript",
                "Python",
                "Java",
                "Web Development",
                "Mobile App Development",
                "Full Stack Development"
              ],
              "description": "Computer Science Engineering student and Full Stack Developer specializing in modern web and mobile technologies.",
              "image": "https://srikrishnanv.com/og-image.png"
            })
          }}
        />
        
        {/* Organization Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Srikrishnan Velayutham Portfolio",
              "url": "https://srikrishnanv.com",
              "logo": "https://srikrishnanv.com/logo.png",
              "sameAs": [
                "https://www.linkedin.com/in/srikrishnan-velayutham-9727b0342",
                "https://github.com/Srikrishnan2004"
              ]
            })
          }}
        />
        
        {/* Website Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              "name": "Srikrishnan Velayutham Portfolio",
              "url": "https://srikrishnanv.netlify.app",
              "description": "Portfolio website of Srikrishnan Velayutham, a Full Stack Developer and Computer Science student.",
              "author": {
                "@type": "Person",
                "name": "Srikrishnan Velayutham"
              },
              "publisher": {
                "@type": "Person",
                "name": "Srikrishnan Velayutham"
              }
            })
          }}
        />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
