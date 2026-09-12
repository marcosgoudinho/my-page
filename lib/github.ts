/**
 * Public GitHub API integration (no token, 60 req/h per IP).
 *
 * Curated projects in `portfolio-data.ts` stay the source of truth for titles,
 * translated descriptions and screenshots. GitHub only enriches them with live
 * metadata (stars, last push) and contributes extra repos tagged with the
 * `portfolio` topic.
 */

export const GITHUB_USERNAME = "marcosgoudinho"
export const FEATURED_TOPIC = "portfolio"

export interface GithubRepoInfo {
  fullName: string
  name: string
  description: string | null
  url: string
  homepage: string | null
  stars: number
  language: string | null
  topics: string[]
  pushedAt: string
}

interface GithubApiRepo {
  name: string
  full_name: string
  description: string | null
  html_url: string
  homepage: string | null
  stargazers_count: number
  language: string | null
  topics?: string[]
  fork: boolean
  archived: boolean
  private: boolean
  pushed_at: string
}

/** Normalizes any GitHub URL into a lowercase "owner/repo" key. */
export function repoKey(url: string): string | null {
  const match = url.match(/github\.com\/([^/]+)\/([^/?#]+)/i)
  if (!match) return null
  return `${match[1]}/${match[2].replace(/\.git$/i, "")}`.toLowerCase()
}

/** OpenGraph preview GitHub generates for a repo - same image shown when sharing its link. */
export function repoPreviewImage(fullName: string): string {
  return `https://opengraph.githubassets.com/1/${fullName}`
}

export async function fetchGithubRepos(): Promise<GithubRepoInfo[]> {
  const res = await fetch(
    `https://api.github.com/users/${GITHUB_USERNAME}/repos?per_page=100&sort=pushed`,
    {
      headers: {
        Accept: "application/vnd.github+json",
        "X-GitHub-Api-Version": "2022-11-28",
      },
      next: { revalidate: 3600 },
    },
  )

  if (!res.ok) {
    throw new Error(`GitHub API responded with ${res.status}`)
  }

  const repos: GithubApiRepo[] = await res.json()

  return repos
    .filter((repo) => !repo.fork && !repo.archived && !repo.private)
    .map((repo) => ({
      fullName: repo.full_name,
      name: repo.name,
      description: repo.description,
      url: repo.html_url,
      homepage: repo.homepage,
      stars: repo.stargazers_count,
      language: repo.language,
      topics: repo.topics ?? [],
      pushedAt: repo.pushed_at,
    }))
}
