import { NextResponse } from "next/server"
import { fetchGithubRepos } from "@/lib/github"

// Cached for an hour so the public API rate limit is never a concern.
export const revalidate = 3600

export async function GET() {
  try {
    const repos = await fetchGithubRepos()
    return NextResponse.json({ repos })
  } catch {
    return NextResponse.json({ repos: [] }, { status: 200 })
  }
}
