"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { X } from "lucide-react"
import { Reveal } from "@/components/reveal"
import { education } from "@/lib/portfolio-data"

function formatDateRange(startDate: string, endDate: string): string {
  const start = new Date(startDate)
  const end = new Date(endDate)

  const options: Intl.DateTimeFormatOptions = { month: "short", year: "numeric" }
  const startFormatted = start.toLocaleDateString("en-US", options)
  const endFormatted = end.toLocaleDateString("en-US", options)

  return `${startFormatted} — ${endFormatted}`
}

export function Education() {
  const [selectedCertificate, setSelectedCertificate] = useState<string | null>(null)

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setSelectedCertificate(null)
      }
    }

    if (selectedCertificate) {
      window.addEventListener("keydown", handleKeyDown)
      return () => window.removeEventListener("keydown", handleKeyDown)
    }
  }, [selectedCertificate])

  return (
    <section id="education" aria-label="Education and certifications" className="scroll-mt-24">
      <ol className="space-y-3">
        {education.map((item, i) => (
          <li key={item.degree}>
            <Reveal delay={i * 80}>
              <div className="grid gap-3 rounded-lg p-4 transition-colors hover:bg-card sm:grid-cols-8 sm:gap-6">
                <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground sm:col-span-2 sm:pt-1">
                  {formatDateRange(item.startDate, item.endDate)}
                </p>
                <div className="sm:col-span-6">
                  <h3 className="font-medium text-foreground">{item.degree}</h3>
                  <p className="text-sm text-primary">{item.school}</p>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.description}</p>
                  {item.certificate && (
                    <button
                      onClick={() => setSelectedCertificate(item.certificate)}
                      className="mt-3 inline-flex items-center gap-2 rounded-md bg-primary/10 px-3 py-1.5 text-xs font-medium text-primary transition-colors hover:bg-primary/20"
                      aria-label={`View ${item.degree} certificate`}
                    >
                      📜 View Certificate
                    </button>
                  )}
                </div>
              </div>
            </Reveal>
          </li>
        ))}
      </ol>

      {/* Certificate Modal */}
      {selectedCertificate && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4 backdrop-blur-sm"
          onClick={() => setSelectedCertificate(null)}
          role="dialog"
          aria-modal="true"
        >
          <div
            className="relative max-h-[90vh] max-w-2xl overflow-auto rounded-lg bg-card shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedCertificate(null)}
              className="sticky top-4 right-4 float-right z-10 rounded-full bg-background p-2 text-muted-foreground transition-colors hover:text-foreground"
              aria-label="Close certificate"
            >
              <X className="size-5" aria-hidden="true" />
            </button>

            {/* Certificate Image */}
            <div className="relative aspect-[4/3] w-full">
              <Image
                src={selectedCertificate}
                alt="Certificate"
                fill
                className="object-contain p-6"
                priority
              />
            </div>

            {/* Footer */}
            <div className="border-t border-border px-6 py-3 text-center">
              <p className="text-xs text-muted-foreground">
                Click outside to close or press Escape
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
