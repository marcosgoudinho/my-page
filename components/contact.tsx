"use client"

import { Mail } from "lucide-react"
import { Reveal } from "@/components/reveal"
import { getPortfolioData } from "@/lib/portfolio-data"
import { useLanguage } from "@/lib/language-context"
import { buttonVariants } from "@/components/ui/button"

export function Contact() {
  const { language } = useLanguage()
  const { profile, ui } = getPortfolioData(language)

  return (
    <section id="contact" aria-label="Get in touch" className="scroll-mt-24">
      <Reveal>
        <div className="rounded-xl border border-border bg-card p-8 text-center">
          <h2 className="text-2xl font-bold tracking-tight text-foreground">{ui.contactTitle}</h2>
          <p className="mx-auto mt-3 max-w-md text-pretty leading-relaxed text-muted-foreground">
            {ui.contactText}
          </p>
          <a href={`mailto:${profile.email}`} className={buttonVariants({ size: "lg", className: "mt-6" })}>
            <Mail className="size-4" aria-hidden="true" />
            {ui.getInTouch}
          </a>
        </div>
      </Reveal>
    </section>
  )
}
