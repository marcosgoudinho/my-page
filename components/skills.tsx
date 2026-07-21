"use client"

import { Reveal } from "@/components/reveal"
import { getPortfolioData } from "@/lib/portfolio-data"
import { useLanguage } from "@/lib/language-context"

export function Skills() {
  const { language } = useLanguage()
  const { skills } = getPortfolioData(language)

  return (
    <section id="skills" aria-label="Skills and technologies" className="scroll-mt-24">
      <div className="grid gap-4 sm:grid-cols-2">
        {skills.map((group, i) => (
          <Reveal key={group.category} delay={i * 80}>
            <div className="h-full rounded-lg border border-border bg-card p-5 transition-colors hover:border-primary/40">
              <h3 className="mb-4 text-sm font-bold uppercase tracking-widest text-primary">{group.category}</h3>
              <ul className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <li
                    key={item}
                    className="rounded-md bg-secondary px-3 py-1.5 text-sm text-secondary-foreground transition-transform hover:-translate-y-0.5 hover:text-primary"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
