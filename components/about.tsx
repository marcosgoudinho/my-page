import { Reveal } from "@/components/reveal"
import { ActivityGallery } from "@/components/activity-gallery"
import { profile } from "@/lib/portfolio-data"

export function About() {
  return (
    <section id="about" aria-label="About me" className="scroll-mt-24">
      {/* Bio Text */}
      <Reveal>
        <div className="space-y-4 leading-relaxed text-muted-foreground">
          <p>
            {"I'm a full-stack developer who loves turning complex problems into simple, elegant products. My work lives at the intersection of thoughtful design and solid engineering — building interfaces that feel effortless and systems that scale."}
          </p>
          <p>
            I started coding in high school, tinkering with small websites for local businesses. That curiosity grew into a career spanning{" "}
            <span className="font-medium text-foreground">startups</span>,{" "}
            <span className="font-medium text-foreground">agencies</span>, and{" "}
            <span className="font-medium text-foreground">product teams</span>, where I&apos;ve shipped everything from marketing sites to real-time, data-heavy platforms.
          </p>
          <p>
            Today I focus on the modern web stack — TypeScript, React, Next.js, and Node.js — with a strong emphasis on accessibility, performance, and developer experience. When I&apos;m not coding, you&apos;ll find me hiking, reading sci-fi, or contributing to open source.
          </p>
        </div>
      </Reveal>

      {/* Activity Gallery */}
      <div className="mt-12">
        <ActivityGallery photos={profile.activityPhotos} />
      </div>
    </section>
  )
}

