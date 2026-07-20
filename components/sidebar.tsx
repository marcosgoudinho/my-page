"use client"

import { useEffect, useState } from "react"
import { MapPin } from "lucide-react"
import { GithubIcon, LinkedinIcon, WhatsappIcon } from "@/components/brand-icons"
import { profile, navItems } from "@/lib/portfolio-data"
import { cn } from "@/lib/utils"

export function Sidebar() {
  const [active, setActive] = useState<string>("about")

  useEffect(() => {
    const sections = navItems.map((n) => document.getElementById(n.id)).filter(Boolean) as HTMLElement[]

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id)
        })
      },
      { rootMargin: "-40% 0px -55% 0px", threshold: 0 },
    )

    sections.forEach((s) => observer.observe(s))
    return () => observer.disconnect()
  }, [])

  const handleNav = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault()
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" })
  }

  const socials = [
    { icon: GithubIcon, href: profile.socials.github, label: "GitHub" },
    { icon: LinkedinIcon, href: profile.socials.linkedin, label: "LinkedIn" },
    { icon: WhatsappIcon, href: profile.socials.whatsapp, label: "WhatsApp" },
  ]

  return (
    <header className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-1/2 lg:flex-col lg:justify-between lg:py-24">
      <div>
        <h1 className="text-balance text-4xl font-bold tracking-tight text-primary-foreground sm:text-5xl">
          <span className="text-foreground">{profile.name}</span>
        </h1>
        <h2 className="mt-3 text-lg font-medium tracking-tight text-foreground">{profile.title}</h2>
        <p className="mt-4 max-w-xs text-pretty leading-relaxed text-muted-foreground">{profile.tagline}</p>

        <div className="mt-4 flex items-center gap-2 text-sm text-muted-foreground">
          <MapPin className="size-4" aria-hidden="true" />
          <span>{profile.location}</span>
        </div>

        {/* Navigation */}
        <nav className="mt-16 hidden lg:block" aria-label="In-page navigation">
          <ul className="flex flex-col gap-4">
            {navItems.map((item) => {
              const isActive = active === item.id
              return (
                <li key={item.id}>
                  <a
                    href={`#${item.id}`}
                    onClick={(e) => handleNav(e, item.id)}
                    className="group flex items-center gap-4 py-1"
                  >
                    <span
                      className={cn(
                        "h-px bg-muted-foreground/40 transition-all duration-300 group-hover:w-16 group-hover:bg-foreground",
                        isActive ? "w-16 bg-primary" : "w-8",
                      )}
                    />
                    <span
                      className={cn(
                        "text-xs font-semibold uppercase tracking-widest transition-colors duration-300 group-hover:text-foreground",
                        isActive ? "text-primary" : "text-muted-foreground",
                      )}
                    >
                      {item.label}
                    </span>
                  </a>
                </li>
              )
            })}
          </ul>
        </nav>
      </div>

      {/* Socials */}
      <ul className="mt-8 flex items-center gap-5" aria-label="Social media">
        {socials.map((s) => (
          <li key={s.label}>
            <a
              href={s.href}
              target="_blank"
              rel="noreferrer noopener"
              className="text-muted-foreground transition-colors hover:text-primary"
            >
              <s.icon className="size-6" aria-hidden="true" />
              <span className="sr-only">{s.label}</span>
            </a>
          </li>
        ))}
      </ul>
    </header>
  )
}
