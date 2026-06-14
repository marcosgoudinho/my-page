import { Mail } from "lucide-react"
import { Reveal } from "@/components/reveal"
import { profile } from "@/lib/portfolio-data"
import { buttonVariants } from "@/components/ui/button"

export function Contact() {
  return (
    <section id="contact" aria-label="Get in touch" className="scroll-mt-24">
      <Reveal>
        <div className="rounded-xl border border-border bg-card p-8 text-center">
          <h2 className="text-2xl font-bold tracking-tight text-foreground">Let&apos;s build something together</h2>
          <p className="mx-auto mt-3 max-w-md text-pretty leading-relaxed text-muted-foreground">
            I&apos;m always open to discussing new projects, opportunities, or just talking shop. Drop me a line and I&apos;ll get back to you.
          </p>
          <a href={`mailto:${profile.email}`} className={buttonVariants({ size: "lg", className: "mt-6" })}>
            <Mail className="size-4" aria-hidden="true" />
            Get in touch
          </a>
        </div>
      </Reveal>
    </section>
  )
}
