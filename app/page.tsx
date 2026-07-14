import { Navbar } from "@/components/navbar"
import { About } from "@/components/about"
import { Experience } from "@/components/experience"
import { Skills } from "@/components/skills"
import { Projects } from "@/components/projects"
import { Education } from "@/components/education"
import { Terminal } from "@/components/terminal"
import { Contact } from "@/components/contact"
import { profile } from "@/lib/portfolio-data"

export default function Page() {
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
            Designed and built by {profile.name}. Built with Next.js and Tailwind CSS, deployed on Vercel.
          </p>
        </footer>
      </main>
    </div>
  )
}
