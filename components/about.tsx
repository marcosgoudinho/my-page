"use client"

import { Reveal } from "@/components/reveal"
import { SectionHeading } from "@/components/section-heading"
import { ActivityGallery } from "@/components/activity-gallery"
import { getPortfolioData } from "@/lib/portfolio-data"
import { useLanguage } from "@/lib/language-context"

export function About() {
  const { language } = useLanguage()
  const { profile, about, sectionTitles, ui } = getPortfolioData(language)

  return (
    <section id="about" aria-label="About me" className="scroll-mt-24">
      <SectionHeading>{sectionTitles.about}</SectionHeading>
      {/* Bio Text */}
      <Reveal>
        <div className="space-y-4 leading-relaxed text-muted-foreground">
          {about.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </Reveal>

      {/* Activity Gallery */}
      <div className="mt-12">
        <ActivityGallery
          photos={profile.activityPhotos}
          title={ui.momentsTitle}
          hint={ui.galleryHint}
        />
      </div>
    </section>
  )
}

