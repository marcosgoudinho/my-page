"use client"

import { useEffect, useState } from "react"
import type { GithubRepoInfo } from "@/lib/github"

/**
 * Loads the GitHub repositories exposed by /api/github.
 * Curated projects render immediately; this only enriches them, so a failure
 * here degrades silently instead of breaking the section.
 */
export function useGithubRepos() {
  const [repos, setRepos] = useState<GithubRepoInfo[]>([])

  useEffect(() => {
    let active = true

    fetch("/api/github")
      .then((res) => res.json())
      .then((data) => {
        if (active && Array.isArray(data.repos)) setRepos(data.repos)
      })
      .catch(() => {
        // Offline or rate limited: keep the curated projects as they are.
      })

    return () => {
      active = false
    }
  }, [])

  return repos
}
