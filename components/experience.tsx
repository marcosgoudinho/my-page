"use client"

import { useState } from "react"
import { ArrowUpRight, ChevronDown, ChevronUp } from "lucide-react"
import { Reveal } from "@/components/reveal"
import { SectionHeading } from "@/components/section-heading"
import { getPortfolioData } from "@/lib/portfolio-data"
import { useLanguage } from "@/lib/language-context"

const ITEMS_PER_PAGE = 4

export function Experience() {
  const [displayCount, setDisplayCount] = useState(ITEMS_PER_PAGE)
  const { language } = useLanguage()
  const { experiences, ui, sectionTitles } = getPortfolioData(language)

  const displayedExperiences = experiences.slice(0, displayCount)
  const hasMore = experiences.length > displayCount

  return (
    <section id="experience" aria-label="Work experience" className="scroll-mt-24">
      <SectionHeading>{sectionTitles.experience}</SectionHeading>
      <ol className="group/list space-y-3">
        {displayedExperiences.map((job, i) => (
          <li key={job.role}>
            <Reveal delay={i * 80}>
              <a
                href={job.url}
                target="_blank"
                rel="noreferrer noopener"
                className="group relative grid gap-3 rounded-lg p-4 transition-all hover:bg-card hover:shadow-lg sm:grid-cols-8 sm:gap-6 lg:group-hover/list:opacity-50 lg:hover:!opacity-100"
              >
                <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground sm:col-span-2 sm:pt-1">
                  {job.period}
                </p>
                <div className="sm:col-span-6">
                  <h3 className="flex items-center font-medium text-foreground">
                    {job.role} · {job.company}
                    <ArrowUpRight className="ml-1 size-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-primary" />
                  </h3>
                  <ul className="mt-2 list-disc space-y-1.5 pl-5 text-sm leading-relaxed text-muted-foreground marker:text-primary">
                    {job.description.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                  <ul className="mt-3 flex flex-wrap gap-2">
                    {job.stack.map((tech) => (
                      <li key={tech}>
                        <span className="inline-block rounded-full bg-accent px-3 py-1 text-xs font-medium text-accent-foreground">
                          {tech}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </a>
            </Reveal>
          </li>
        ))}
      </ol>

      {/* Ver Mais / Ver Menos Button */}
      {experiences.length > ITEMS_PER_PAGE && (
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
    </section>
  )
}
