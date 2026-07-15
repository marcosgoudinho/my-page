"use client"

import { useState } from "react"
import Image from "next/image"
import { X, ChevronLeft, ChevronRight } from "lucide-react"
import { Reveal } from "@/components/reveal"

interface ActivityPhoto {
  src: string
  alt: string
  caption: string
}

interface ActivityGalleryProps {
  photos: ActivityPhoto[]
}

export function ActivityGallery({ photos }: ActivityGalleryProps) {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null)

  const handlePrev = () => {
    setSelectedIndex((prev) =>
      prev === null || prev === 0 ? photos.length - 1 : prev - 1
    )
  }

  const handleNext = () => {
    setSelectedIndex((prev) =>
      prev === null || prev === photos.length - 1 ? 0 : prev + 1
    )
  }

  return (
    <>
      {/* Gallery Grid */}
      <Reveal>
        <div className="mb-8">
          <h3 className="mb-4 text-lg font-semibold text-foreground">
            Moments & Milestones
          </h3>
          <div className="grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-3">
            {photos.map((photo, index) => (
              <button
                key={index}
                onClick={() => setSelectedIndex(index)}
                className="group relative aspect-square overflow-hidden rounded-lg border border-border transition-all hover:border-primary"
                aria-label={`View ${photo.caption}`}
              >
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-black/0 transition-all group-hover:bg-black/40" />
                {/* Caption on hover */}
                <div className="absolute inset-0 flex items-end justify-start p-3 opacity-0 transition-opacity group-hover:opacity-100">
                  <p className="text-xs font-medium text-white">{photo.caption}</p>
                </div>
              </button>
            ))}
          </div>
        </div>
      </Reveal>

      {/* Modal */}
      {selectedIndex !== null && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm"
          onClick={() => setSelectedIndex(null)}
          role="dialog"
          aria-modal="true"
        >
          <div
            className="relative max-h-[90vh] max-w-3xl w-full"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button
              onClick={() => setSelectedIndex(null)}
              className="absolute -top-12 right-0 rounded-full bg-background/50 p-2 text-muted-foreground transition-colors hover:bg-background hover:text-foreground"
              aria-label="Close gallery"
            >
              <X className="size-5" aria-hidden="true" />
            </button>

            {/* Image */}
            <div className="relative aspect-square overflow-hidden rounded-lg md:aspect-video">
              <Image
                src={photos[selectedIndex].src}
                alt={photos[selectedIndex].alt}
                fill
                className="object-cover"
                priority
              />
            </div>

            {/* Caption and navigation */}
            <div className="mt-4 flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-foreground">
                  {photos[selectedIndex].caption}
                </p>
                <p className="text-xs text-muted-foreground">
                  {selectedIndex + 1} / {photos.length}
                </p>
              </div>

              {/* Navigation buttons */}
              <div className="flex gap-2">
                <button
                  onClick={handlePrev}
                  className="rounded-lg bg-primary/10 p-2 text-primary transition-colors hover:bg-primary/20"
                  aria-label="Previous photo"
                >
                  <ChevronLeft className="size-5" aria-hidden="true" />
                </button>
                <button
                  onClick={handleNext}
                  className="rounded-lg bg-primary/10 p-2 text-primary transition-colors hover:bg-primary/20"
                  aria-label="Next photo"
                >
                  <ChevronRight className="size-5" aria-hidden="true" />
                </button>
              </div>
            </div>

            {/* Help text */}
            <p className="mt-4 text-center text-xs text-muted-foreground">
              Use arrow keys to navigate • Press Escape to close
            </p>
          </div>
        </div>
      )}
    </>
  )
}
