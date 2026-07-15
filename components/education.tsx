"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { X, ChevronDown, ChevronUp } from "lucide-react"
import { Reveal } from "@/components/reveal"
import { education } from "@/lib/portfolio-data"

function formatDateRange(startDate: string, endDate: string): string {
  const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
  
  const start = new Date(startDate + "T00:00:00Z")
  const end = new Date(endDate + "T00:00:00Z")

  const startMonth = monthNames[start.getUTCMonth()]
  const startYear = start.getUTCFullYear()
  
  const endMonth = monthNames[end.getUTCMonth()]
  const endYear = end.getUTCFullYear()

  return `${startMonth} ${startYear} — ${endMonth} ${endYear}`
}

const ITEMS_PER_PAGE = 4

export function Education() {
  const [selectedCertificate, setSelectedCertificate] = useState<string | null>(null)
  const [displayCount, setDisplayCount] = useState(ITEMS_PER_PAGE)

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

  const displayedEducation = education.slice(0, displayCount)
  const hasMore = education.length > displayCount

  return (
    <section id="education" aria-label="Education and certifications" className="scroll-mt-24">
      <ol className="space-y-3">
        {displayedEducation.map((item, i) => (
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

      {/* Ver Mais / Ver Menos Button */}
      {education.length > ITEMS_PER_PAGE && (
        <div className="mt-6 flex justify-center">
          <button
            onClick={() => {
              if (hasMore) {
                setDisplayCount((prev) => prev + ITEMS_PER_PAGE)
              } else {
                setDisplayCount(ITEMS_PER_PAGE)
              }
            }}
            className="inline-flex items-center gap-2 rounded-lg bg-primary/10 px-4 py-2 text-sm font-medium text-primary transition-colors hover:bg-primary/20"
          >
            {hasMore ? (
              <>
                Ver mais
                <ChevronDown className="size-4" aria-hidden="true" />
              </>
            ) : (
              <>
                Ver menos
                <ChevronUp className="size-4" aria-hidden="true" />
              </>
            )}
          </button>
        </div>
      )}

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
