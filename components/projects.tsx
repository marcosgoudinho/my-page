"use client"

import { useState } from "react"
import { ArrowUpRight, ChevronDown, ChevronUp } from "lucide-react"
import { GithubIcon } from "@/components/brand-icons"
import { Reveal } from "@/components/reveal"
import { ProjectCarousel } from "@/components/project-carousel"
import { ProjectImageModal } from "@/components/project-image-modal"
import { getPortfolioData } from "@/lib/portfolio-data"
import { useLanguage } from "@/lib/language-context"

const ITEMS_PER_PAGE = 4

export function Projects() {
  const [selectedProject, setSelectedProject] = useState<{
    projectIndex: number
    imageIndex: number
  } | null>(null)
  const [displayCount, setDisplayCount] = useState(ITEMS_PER_PAGE)
  const { language } = useLanguage()
  const { projects, ui } = getPortfolioData(language)

  const displayedProjects = projects.slice(0, displayCount)
  const hasMore = projects.length > displayCount

  return (
    <section id="projects" aria-label="Selected projects" className="scroll-mt-24">
      <ol className="group/list space-y-3">
        {displayedProjects.map((project, i) => (
          <li key={project.title}>
            <Reveal delay={i * 80}>
              <div className="group relative grid gap-4 rounded-lg p-4 transition-all hover:bg-card hover:shadow-lg sm:grid-cols-8 sm:gap-6 lg:group-hover/list:opacity-50 lg:hover:!opacity-100">
                <div className="sm:col-span-3">
                  <ProjectCarousel
                    images={project.images}
                    title={project.title}
                    onImageClick={(imageIndex) =>
                      setSelectedProject({ projectIndex: i, imageIndex })
                    }
                  />
                </div>
                <div className="sm:col-span-5">
                  <h3 className="font-medium text-foreground">
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noreferrer noopener"
                      className="group/link inline-flex items-center"
                    >
                      {project.title}
                      <ArrowUpRight className="ml-1 size-4 transition-transform group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5 group-hover/link:text-primary" />
                    </a>
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{project.description}</p>
                  <ul className="mt-3 flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <li key={tag}>
                        <span className="inline-block rounded-full bg-accent px-3 py-1 text-xs font-medium text-accent-foreground">
                          {tag}
                        </span>
                      </li>
                    ))}
                  </ul>
                  <a
                    href={project.repo}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="mt-4 inline-flex items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-primary"
                  >
                    <GithubIcon className="size-4" aria-hidden="true" />
                    {ui.sourceCode}
                  </a>
                </div>
              </div>
            </Reveal>
          </li>
        ))}
      </ol>

      {/* Ver Mais / Ver Menos Button */}
      {projects.length > ITEMS_PER_PAGE && (
        <div className="mt-6 flex justify-center">
          <button
            onClick={() => {
              if (hasMore) {
                setDisplayCount((prev) => prev + ITEMS_PER_PAGE)
              } else {
                setDisplayCount(ITEMS_PER_PAGE)
              }
            }}
            className="inline-flex items-center gap-2 rounded-lg bg-primary/10 px-4 py-2 text-sm font-medium text-primary transition-colors hover:bg-primary/20"
          >
            {hasMore ? (
              <>
                {ui.viewMore}
                <ChevronDown className="size-4" aria-hidden="true" />
              </>
            ) : (
              <>
                {ui.viewLess}
                <ChevronUp className="size-4" aria-hidden="true" />
              </>
            )}
          </button>
        </div>
      )}

      {/* Image Modal */}
      {selectedProject && (
        <ProjectImageModal
          images={projects[selectedProject.projectIndex].images}
          title={projects[selectedProject.projectIndex].title}
          initialIndex={selectedProject.imageIndex}
          isOpen={true}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </section>
  )
}
