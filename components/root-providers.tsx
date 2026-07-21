'use client'

import { DeveloperMode } from '@/components/developer-mode'
import { LanguageProvider } from '@/lib/language-context'

export function RootProviders({ children }: { children: React.ReactNode }) {
  return (
    <LanguageProvider>
      <DeveloperMode />
      {children}
    </LanguageProvider>
  )
}
