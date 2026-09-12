"use client"

import { Award } from "lucide-react"
import { Reveal } from "@/components/reveal"
import { SectionHeading } from "@/components/section-heading"
import { getPortfolioData } from "@/lib/portfolio-data"
import { useLanguage } from "@/lib/language-context"

function formatMonth(date: string, language: string): string {
  const parsed = new Date(date + "T00:00:00Z")
  return parsed.toLocaleDateString(language === "pt" ? "pt-BR" : "en-US", {
    month: "short",
    year: "numeric",
    timeZone: "UTC",
  })
}

export function Awards() {
  const { language } = useLanguage()
  const { awards, sectionTitles } = getPortfolioData(language)

  return (
    <section id="awards" aria-label="Recognition and awards" className="scroll-mt-24">
      <SectionHeading>{sectionTitles.awards}</SectionHeading>
      <ol className="space-y-3">
        {awards.map((award, i) => (
          <li key={award.title}>
            <Reveal delay={i * 80}>
              <div className="grid gap-3 rounded-lg p-4 transition-colors hover:bg-card sm:grid-cols-8 sm:gap-6">
                <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground sm:col-span-2 sm:pt-1">
                  {formatMonth(award.date, language)}
                </p>
                <div className="sm:col-span-6">
                  <h3 className="flex items-center gap-2 font-medium text-foreground">
                    <Award className="size-4 shrink-0 text-primary" aria-hidden="true" />
                    {award.title}
                  </h3>
                  <p className="text-sm text-primary">{award.issuer}</p>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{award.description}</p>
                </div>
              </div>
            </Reveal>
          </li>
        ))}
      </ol>
    </section>
  )
}
