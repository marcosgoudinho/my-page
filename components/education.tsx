import { Reveal } from "@/components/reveal"
import { education } from "@/lib/portfolio-data"

export function Education() {
  return (
    <section id="education" aria-label="Education and certifications" className="scroll-mt-24">
      <ol className="space-y-3">
        {education.map((item, i) => (
          <li key={item.degree}>
            <Reveal delay={i * 80}>
              <div className="grid gap-3 rounded-lg p-4 transition-colors hover:bg-card sm:grid-cols-8 sm:gap-6">
                <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground sm:col-span-2 sm:pt-1">
                  {item.period}
                </p>
                <div className="sm:col-span-6">
                  <h3 className="font-medium text-foreground">{item.degree}</h3>
                  <p className="text-sm text-primary">{item.school}</p>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.description}</p>
                </div>
              </div>
            </Reveal>
          </li>
        ))}
      </ol>
    </section>
  )
}
