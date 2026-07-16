"use client"

import { useState, useCallback } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"

interface ProjectCarouselProps {
  images: string[]
  title: string
  onImageClick?: (index: number) => void
}

export function ProjectCarousel({ images, title, onImageClick }: ProjectCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0)

  const goToPrevious = useCallback(() => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1))
  }, [images.length])

  const goToNext = useCallback(() => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1))
  }, [images.length])

  const goToSlide = useCallback((index: number) => {
    setCurrentIndex(index)
  }, [])

  if (!images || images.length === 0) {
    return (
      <div className="aspect-video w-full rounded-md border border-border bg-muted flex items-center justify-center">
        <p className="text-xs text-muted-foreground">No images available</p>
      </div>
    )
  }

  return (
    <div className="relative group">
      {/* Image Container */}
      <button
        onClick={() => onImageClick?.(currentIndex)}
        className="relative aspect-video w-full overflow-hidden rounded-md border border-border bg-muted cursor-pointer hover:opacity-90 transition-opacity"
        aria-label={`Expand ${title} image`}
      >
        <Image
          src={images[currentIndex]}
          alt={`${title} screenshot ${currentIndex + 1}`}
          fill
          className="object-cover transition-opacity duration-300"
          priority={currentIndex === 0}
        />
      </button>

      {/* Navigation Buttons */}
      {images.length > 1 && (
        <>
          <button
            onClick={goToPrevious}
            className="absolute left-2 top-1/2 -translate-y-1/2 rounded-full bg-black/40 p-2 text-white transition-colors hover:bg-black/60 focus:outline-none focus:ring-2 focus:ring-primary"
            aria-label={`Previous image for ${title}`}
          >
            <ChevronLeft className="size-5" aria-hidden="true" />
          </button>

          <button
            onClick={goToNext}
            className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full bg-black/40 p-2 text-white transition-colors hover:bg-black/60 focus:outline-none focus:ring-2 focus:ring-primary"
            aria-label={`Next image for ${title}`}
          >
            <ChevronRight className="size-5" aria-hidden="true" />
          </button>

          {/* Dot Indicators */}
          <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`h-2 rounded-full transition-all ${
                  index === currentIndex
                    ? "w-6 bg-white"
                    : "w-2 bg-white/50 hover:bg-white/75"
                }`}
                aria-label={`Go to image ${index + 1}`}
                aria-current={index === currentIndex}
              />
            ))}
          </div>

          {/* Image Counter */}
          <div className="absolute top-3 right-3 rounded-full bg-black/40 px-2.5 py-1 text-xs text-white">
            {currentIndex + 1} / {images.length}
          </div>
        </>
      )}
    </div>
  )
}
