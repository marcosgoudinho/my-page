import { Spotlight } from "@/components/spotlight"
import { Sidebar } from "@/components/sidebar"
import { About } from "@/components/about"
import { Experience } from "@/components/experience"
import { Skills } from "@/components/skills"
import { Projects } from "@/components/projects"
import { Education } from "@/components/education"
import { Contact } from "@/components/contact"
import { profile } from "@/lib/portfolio-data"

export default function Page() {
  return (
    <div className="relative min-h-screen">
      <Spotlight />
      <div className="mx-auto max-w-6xl px-6 py-12 md:px-12 lg:flex lg:gap-12 lg:px-16 lg:py-0">
        <Sidebar />
        <main id="content" className="pt-16 lg:w-1/2 lg:py-24">
          <div className="space-y-20 lg:space-y-28">
            <About />
            <Experience />
            <Skills />
            <Projects />
            <Education />
            <Contact />
          </div>
          <footer className="mt-20 pb-12 text-sm leading-relaxed text-muted-foreground">
            <p>
              Designed and built by {profile.name}. Built with Next.js and Tailwind CSS, deployed on Vercel.
            </p>
          </footer>
        </main>
      </div>
    </div>
  )
}
