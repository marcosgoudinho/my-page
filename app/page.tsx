"use client"

import { useEffect } from "react"
import { Navbar } from "@/components/navbar"
import { About } from "@/components/about"
import { Experience } from "@/components/experience"
import { Skills } from "@/components/skills"
import { Projects } from "@/components/projects"
import { Education } from "@/components/education"
import { Terminal } from "@/components/terminal"
import { Contact } from "@/components/contact"
import { getPortfolioData } from "@/lib/portfolio-data"
import { useLanguage } from "@/lib/language-context"

export default function Page() {
  const { language } = useLanguage()
  const { profile, ui } = getPortfolioData(language)

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="min-h-screen">
      <Navbar />
      <main id="content" className="mx-auto max-w-4xl px-6 py-12 md:px-12 lg:px-16">
        <div className="space-y-20 lg:space-y-28">
          <About />
          <Experience />
          <Skills />
          <Projects />
          <Education />
          <Terminal />
          <Contact />
        </div>
        <footer className="mt-20 pb-12 text-sm leading-relaxed text-muted-foreground">
          <p>
            {ui.designedBy(profile.name)}
          </p>
        </footer>
      </main>
    </div>
  )
}
