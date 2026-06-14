import Image from "next/image"
import { Reveal } from "@/components/reveal"
import { profile } from "@/lib/portfolio-data"

export function About() {
  return (
    <section id="about" aria-label="About me" className="scroll-mt-24 lg:scroll-mt-24">
      <SectionHeading>About</SectionHeading>
      <Reveal>
        <div className="mb-8 flex items-center gap-5">
          <Image
            src="/profile.png"
            alt={`Portrait of ${profile.name}`}
            width={80}
            height={80}
            className="size-20 rounded-full object-cover ring-2 ring-border"
          />
          <div>
            <p className="font-medium text-foreground">{profile.name}</p>
            <p className="text-sm text-muted-foreground">{profile.title}</p>
          </div>
        </div>
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
    </section>
  )
}

export function SectionHeading({ children }: { children: React.ReactNode }) {
  return (
    <>
      {/* Sticky mobile label */}
      <div className="sticky top-0 z-20 -mx-6 mb-4 bg-background/80 px-6 py-4 backdrop-blur lg:hidden">
        <h2 className="text-sm font-bold uppercase tracking-widest text-foreground">{children}</h2>
      </div>
      <h2 className="sr-only lg:not-sr-only lg:mb-8 lg:text-sm lg:font-bold lg:uppercase lg:tracking-widest lg:text-foreground">
        {children}
      </h2>
    </>
  )
}
