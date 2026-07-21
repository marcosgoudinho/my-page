"use client"

import { useLanguage, type Language } from "@/lib/language-context"

export function LanguageSelect() {
  const { language, setLanguage } = useLanguage()

  return (
    <select
      value={language}
      onChange={(e) => setLanguage(e.target.value as Language)}
      aria-label="Select language"
      className="rounded-md border border-border bg-background px-2 py-1 text-xs font-medium text-muted-foreground transition-colors hover:text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
    >
      <option value="en">English</option>
      <option value="pt">Português (BR)</option>
    </select>
  )
}
