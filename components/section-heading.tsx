import type { ReactNode } from "react"

export function SectionHeading({ children }: { children: ReactNode }) {
  return (
    <h2 className="mb-6 text-sm font-bold uppercase tracking-widest text-primary">
      {children}
    </h2>
  )
}
