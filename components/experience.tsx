import { ArrowUpRight } from "lucide-react"
import { Reveal } from "@/components/reveal"
import { SectionHeading } from "@/components/about"
import { experiences } from "@/lib/portfolio-data"

export function Experience() {
  return (
    <section id="experience" aria-label="Work experience" className="scroll-mt-24">
      <SectionHeading>Experience</SectionHeading>
      <ol className="group/list space-y-3">
        {experiences.map((job, i) => (
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
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{job.description}</p>
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
    </section>
  )
}
