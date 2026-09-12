"use client"

import { useState } from "react"
import Image from "next/image"
import { Reveal } from "@/components/reveal"
import { ImageLightbox } from "@/components/image-lightbox"

interface ActivityPhoto {
  src: string
  alt: string
  caption: string
}

interface ActivityGalleryProps {
  photos: ActivityPhoto[]
  title: string
  hint?: string
}

export function ActivityGallery({ photos, title, hint }: ActivityGalleryProps) {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null)

  return (
    <>
      {/* Gallery Grid */}
      <Reveal>
        <div className="mb-8">
          <h3 className="mb-4 text-lg font-semibold text-foreground">{title}</h3>
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

      <ImageLightbox
        images={photos}
        initialIndex={selectedIndex ?? 0}
        isOpen={selectedIndex !== null}
        onClose={() => setSelectedIndex(null)}
        hint={hint}
      />
    </>
  )
}
