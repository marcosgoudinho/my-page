"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { GithubIcon, LinkedinIcon, TwitterIcon } from "@/components/brand-icons"
import { profile, navItems } from "@/lib/portfolio-data"

export function Navbar() {
  const [activeSection, setActiveSection] = useState("about")

  useEffect(() => {
    const handleScroll = () => {
      const sections = [...navItems.map((item) => item.id), "terminal"]
      
      for (const sectionId of sections) {
        const element = document.getElementById(sectionId)
        if (element) {
          const rect = element.getBoundingClientRect()
          if (rect.top <= 100) {
            setActiveSection(sectionId)
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const socials = [
    { icon: GithubIcon, href: profile.socials.github, label: "GitHub" },
    { icon: LinkedinIcon, href: profile.socials.linkedin, label: "LinkedIn" },
    { icon: TwitterIcon, href: profile.socials.twitter, label: "Twitter" },
  ]

  return (
    <nav className="sticky top-0 z-50 border-b border-border/50 bg-background/80 backdrop-blur-sm">
      <div className="mx-auto max-w-4xl px-6 py-4 md:px-12 lg:px-16">
        <div className="flex items-center justify-between">
          {/* Left: Name and Title */}
          <div className="flex items-center gap-4">
            <Image
              src="/profile.png"
              alt={profile.name}
              width={40}
              height={40}
              className="rounded-full object-cover"
            />
            <div className="hidden sm:block">
              <h1 className="text-sm font-semibold text-foreground">{profile.name}</h1>
              <p className="text-xs text-muted-foreground">{profile.title}</p>
            </div>
          </div>

          {/* Center: Navigation Items */}
          <div className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <Link
                key={item.id}
                href={`#${item.id}`}
                className={`px-3 py-1 text-sm font-medium rounded-md transition-colors ${
                  activeSection === item.id
                    ? "bg-primary/20 text-primary"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="#terminal"
              className={`px-3 py-1 text-sm font-medium rounded-md transition-colors ${
                activeSection === "terminal"
                  ? "bg-primary/20 text-primary"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              Terminal
            </Link>
          </div>

          {/* Right: Social Links */}
          <div className="flex items-center gap-4">
            {socials.map((social) => {
              const Icon = social.icon
              return (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="text-muted-foreground transition-colors hover:text-primary"
                >
                  <Icon className="size-5" aria-hidden="true" />
                </a>
              )
            })}
          </div>
        </div>
      </div>
    </nav>
  )
}
