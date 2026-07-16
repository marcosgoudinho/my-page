"use client"

import { useState, useCallback, useEffect } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight, X } from "lucide-react"

interface ProjectImageModalProps {
  images: string[]
  title: string
  initialIndex: number
  isOpen: boolean
  onClose: () => void
}

export function ProjectImageModal({
  images,
  title,
  initialIndex,
  isOpen,
  onClose,
}: ProjectImageModalProps) {
  const [currentIndex, setCurrentIndex] = useState(initialIndex)

  useEffect(() => {
    setCurrentIndex(initialIndex)
  }, [initialIndex, isOpen])

  const goToPrevious = useCallback(() => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1))
  }, [images.length])

  const goToNext = useCallback(() => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1))
  }, [images.length])

  const goToSlide = useCallback((index: number) => {
    setCurrentIndex(index)
  }, [])

  // Handle keyboard navigation
  useEffect(() => {
    if (!isOpen) return

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose()
      } else if (e.key === "ArrowLeft") {
        goToPrevious()
      } else if (e.key === "ArrowRight") {
        goToNext()
      }
    }

    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [isOpen, onClose, goToPrevious, goToNext])

  if (!isOpen) return null

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={`${title} gallery`}
    >
      <div
        className="relative w-full max-w-5xl max-h-[90vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 rounded-full bg-black/60 p-2 text-white transition-colors hover:bg-black/80"
          aria-label="Close gallery"
        >
          <X className="size-6" aria-hidden="true" />
        </button>

        {/* Image Container */}
        <div className="relative aspect-video w-full overflow-hidden rounded-lg bg-black flex-1">
          <Image
            src={images[currentIndex]}
            alt={`${title} screenshot ${currentIndex + 1}`}
            fill
            className="object-contain"
            priority
          />
        </div>

        {/* Navigation and Info */}
        {images.length > 1 && (
          <div className="mt-4 flex items-center justify-between">
            {/* Counter */}
            <div className="text-sm text-white/80">
              {currentIndex + 1} / {images.length}
            </div>

            {/* Controls */}
            <div className="flex gap-3">
              <button
                onClick={goToPrevious}
                className="rounded-full bg-white/10 p-2 text-white transition-colors hover:bg-white/20"
                aria-label="Previous image"
              >
                <ChevronLeft className="size-5" aria-hidden="true" />
              </button>
              <button
                onClick={goToNext}
                className="rounded-full bg-white/10 p-2 text-white transition-colors hover:bg-white/20"
                aria-label="Next image"
              >
                <ChevronRight className="size-5" aria-hidden="true" />
              </button>
            </div>

            {/* Dots */}
            <div className="flex gap-1.5">
              {images.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`h-2 rounded-full transition-all ${
                    index === currentIndex ? "w-6 bg-white" : "w-2 bg-white/50 hover:bg-white/75"
                  }`}
                  aria-label={`Go to image ${index + 1}`}
                  aria-current={index === currentIndex}
                />
              ))}
            </div>
          </div>
        )}

        {/* Help Text */}
        <p className="mt-3 text-center text-xs text-white/50">
          Press Escape to close, Arrow keys to navigate
        </p>
      </div>
    </div>
  )
}
