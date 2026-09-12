"use client"

import { useState, useMemo } from "react"
import { ArrowUpRight, ChevronDown, ChevronUp, Star } from "lucide-react"
import { GithubIcon } from "@/components/brand-icons"
import { Reveal } from "@/components/reveal"
import { SectionHeading } from "@/components/section-heading"
import { ProjectCarousel } from "@/components/project-carousel"
import { ProjectImageModal } from "@/components/project-image-modal"
import { getPortfolioData } from "@/lib/portfolio-data"
import { useLanguage } from "@/lib/language-context"
import { useGithubRepos } from "@/hooks/use-github-repos"
import { FEATURED_TOPIC, GITHUB_USERNAME, repoKey, repoPreviewImage } from "@/lib/github"

const ITEMS_PER_PAGE = 4

interface DisplayProject {
  title: string
  description: string
  images: string[]
  tags: string[]
  url: string
  repo: string
  stars: number
}

export function Projects() {
  const [selectedProject, setSelectedProject] = useState<{
    projectIndex: number
    imageIndex: number
  } | null>(null)
  const [displayCount, setDisplayCount] = useState(ITEMS_PER_PAGE)
  const { language } = useLanguage()
  const { projects, ui, sectionTitles } = getPortfolioData(language)
  const repos = useGithubRepos()

  /**
   * Only repositories tagged with the "portfolio" topic on GitHub are listed.
   * When a listed repo also exists in portfolio-data.ts, that entry wins for the
   * copy and screenshots, since it is translated and hand-written.
   */
  const allProjects = useMemo<DisplayProject[]>(() => {
    const curatedByKey = new Map(projects.map((project) => [repoKey(project.repo), project]))

    return repos
      .filter((repo) => repo.topics.includes(FEATURED_TOPIC))
      .map((repo) => {
        const curated = curatedByKey.get(repoKey(repo.url))

        if (curated) {
          return {
            title: curated.title,
            description: curated.description,
            images: [...curated.images],
            tags: [...curated.tags],
            url: curated.url,
            repo: curated.repo,
            stars: repo.stars,
          }
        }

        return {
          title: repo.name,
          description: repo.description ?? "",
          images: [repoPreviewImage(repo.fullName)],
          tags: [repo.language, ...repo.topics.filter((topic) => topic !== FEATURED_TOPIC)]
            .filter((tag): tag is string => Boolean(tag))
            .slice(0, 6),
          url: repo.homepage || repo.url,
          repo: repo.url,
          stars: repo.stars,
        }
      })
  }, [projects, repos])

  const displayedProjects = allProjects.slice(0, displayCount)
  const hasMore = allProjects.length > displayCount

  return (
    <section id="projects" aria-label="Selected projects" className="scroll-mt-24">
      <SectionHeading>{sectionTitles.projects}</SectionHeading>

      {allProjects.length === 0 ? (
        <p className="text-sm leading-relaxed text-muted-foreground">{ui.noPortfolioRepos}</p>
      ) : (
      <ol className="group/list space-y-3">
        {displayedProjects.map((project, i) => (
          <li key={project.repo || project.title}>
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
                  <div className="mt-4 flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                    <a
                      href={project.repo}
                      target="_blank"
                      rel="noreferrer noopener"
                      className="inline-flex items-center gap-1.5 transition-colors hover:text-primary"
                    >
                      <GithubIcon className="size-4" aria-hidden="true" />
                      {ui.sourceCode}
                    </a>
                    {project.stars > 0 && (
                      <span className="inline-flex items-center gap-1.5" title={ui.stars}>
                        <Star className="size-4" aria-hidden="true" />
                        {project.stars}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </Reveal>
          </li>
        ))}
      </ol>
      )}

      {/* Ver Mais / Ver Menos Button */}
      {allProjects.length > ITEMS_PER_PAGE && (
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

      <div className="mt-6 flex justify-center">
        <a
          href={`https://github.com/${GITHUB_USERNAME}?tab=repositories`}
          target="_blank"
          rel="noreferrer noopener"
          className="group inline-flex items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-primary"
        >
          <GithubIcon className="size-4" aria-hidden="true" />
          {ui.allRepositories}
          <ArrowUpRight className="size-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
        </a>
      </div>

      {/* Image Modal */}
      {selectedProject && (
        <ProjectImageModal
          images={allProjects[selectedProject.projectIndex].images}
          title={allProjects[selectedProject.projectIndex].title}
          initialIndex={selectedProject.imageIndex}
          isOpen={true}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </section>
  )
}
