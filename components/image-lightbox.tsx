"use client"

import { useState, useEffect, useCallback } from "react"
import Image from "next/image"
import { X, ChevronLeft, ChevronRight } from "lucide-react"

export interface LightboxImage {
  src: string
  alt: string
  caption?: string
}

interface ImageLightboxProps {
  images: LightboxImage[]
  initialIndex?: number
  isOpen: boolean
  onClose: () => void
  /** Shown under the image, e.g. "Click outside to close or press Escape". */
  hint?: string
}

/**
 * Shared fullscreen image viewer.
 *
 * The image keeps its natural aspect ratio - it is only bounded by the viewport
 * (max-h/max-w), never cropped into a fixed box.
 */
export function ImageLightbox({ images, initialIndex = 0, isOpen, onClose, hint }: ImageLightboxProps) {
  const [currentIndex, setCurrentIndex] = useState(initialIndex)
  const hasMultiple = images.length > 1

  useEffect(() => {
    setCurrentIndex(initialIndex)
  }, [initialIndex, isOpen])

  const goToPrevious = useCallback(() => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1))
  }, [images.length])

  const goToNext = useCallback(() => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1))
  }, [images.length])

  useEffect(() => {
    if (!isOpen) return

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose()
      if (!hasMultiple) return
      if (e.key === "ArrowLeft") goToPrevious()
      if (e.key === "ArrowRight") goToNext()
    }

    window.addEventListener("keydown", handleKeyDown)
    // Keep the page behind the overlay from scrolling.
    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = "hidden"

    return () => {
      window.removeEventListener("keydown", handleKeyDown)
      document.body.style.overflow = previousOverflow
    }
  }, [isOpen, hasMultiple, onClose, goToPrevious, goToNext])

  if (!isOpen || images.length === 0) return null

  const current = images[currentIndex]

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm sm:p-8"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={current.caption || current.alt}
    >
      <div
        className="relative flex max-h-full max-w-full flex-col items-center gap-4"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute right-2 top-2 z-10 rounded-full bg-background/80 p-2 text-muted-foreground backdrop-blur-sm transition-colors hover:bg-background hover:text-foreground"
          aria-label="Close"
        >
          <X className="size-5" aria-hidden="true" />
        </button>

        {hasMultiple && (
          <>
            <button
              onClick={goToPrevious}
              className="absolute left-2 top-1/2 z-10 -translate-y-1/2 rounded-full bg-background/80 p-2 text-muted-foreground backdrop-blur-sm transition-colors hover:bg-background hover:text-foreground"
              aria-label="Previous image"
            >
              <ChevronLeft className="size-6" aria-hidden="true" />
            </button>
            <button
              onClick={goToNext}
              className="absolute right-2 top-1/2 z-10 -translate-y-1/2 rounded-full bg-background/80 p-2 text-muted-foreground backdrop-blur-sm transition-colors hover:bg-background hover:text-foreground"
              aria-label="Next image"
            >
              <ChevronRight className="size-6" aria-hidden="true" />
            </button>
          </>
        )}

        {/*
          width/height are only an aspect hint for the initial layout; the `h-auto w-auto`
          plus max-* below let the browser fall back to the image's intrinsic size,
          so nothing is cropped.
        */}
        <Image
          src={current.src}
          alt={current.alt}
          width={1920}
          height={1440}
          className="h-auto max-h-[80vh] w-auto max-w-full rounded-lg object-contain shadow-2xl"
          priority
        />

        <div className="flex w-full flex-col items-center gap-1 text-center">
          {current.caption && (
            <p className="text-sm font-medium text-white">{current.caption}</p>
          )}
          {hasMultiple && (
            <p className="text-xs text-white/60">
              {currentIndex + 1} / {images.length}
            </p>
          )}
          {hint && <p className="text-xs text-white/60">{hint}</p>}
        </div>
      </div>
    </div>
  )
}
