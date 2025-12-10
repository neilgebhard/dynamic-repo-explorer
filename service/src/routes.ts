import { Router, Request, Response } from 'express'
import { Repo } from './types'

const router = Router()

const GITHUB_HEADERS = {
  Accept: 'application/vnd.github.v3+json',
  'User-Agent': 'Dynamic-Repo-Explorer',
  Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
}

router.get('/initial', async (req: Request, res: Response) => {
  try {
    const response = await fetch(
      'https://api.github.com/search/repositories?q=is:public+archived:false&sort=updated&order=desc&per_page=20',
      {
        headers: GITHUB_HEADERS,
      }
    )

    if (!response.ok) {
      throw new Error(`GitHub API error: ${response.status}`)
    }

    const data = await response.json()

    const json = data.items.map((repo: Repo) => ({
      id: repo.id,
      name: repo.name,
      owner: repo.owner.login,
      starCount: repo.stargazers_count,
      language: repo.language,
    }))

    res.json(json)
  } catch (error) {
    console.error('Error fetching initial repos:', error)

    res.status(500).json({
      error: 'Failed to fetch repositories',
    })
  }
})

router.get('/:owner', async (req: Request, res: Response) => {
  const { owner } = req.params

  try {
    const response = await fetch(
      `https://api.github.com/users/${owner}/repos`,
      {
        headers: GITHUB_HEADERS,
      }
    )

    if (!response.ok) {
      if (response.status === 404) {
        return res.status(404).json({
          error: 'User not found',
          message: `No GitHub user found with login: ${owner}`,
        })
      }
      throw new Error(`GitHub API error: ${response.status}`)
    }

    const data = await response.json()

    const json = data.map((repo: Repo) => ({
      id: repo.id,
      name: repo.name,
      owner: repo.owner.login,
      starCount: repo.stargazers_count,
      language: repo.language,
    }))

    res.json(json)
  } catch (error) {
    console.error(`Error fetching repos for ${owner}:`, error)

    res.status(500).json({
      error: 'Failed to fetch user repositories',
    })
  }
})

export default router
