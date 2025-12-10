import InitialRepos from './InitialRepos'
import { render, screen } from '@testing-library/react'
import { describe, it, expect, vi } from 'vitest'

describe('InitialRepos', () => {
  it('renders repo data', () => {
    const repos = [
      {
        id: 1,
        name: 'neils-repo',
        owner: 'neil',
        starCount: 50,
        language: 'TypeScript',
      },
    ]

    render(<InitialRepos repos={repos} onShowOwnerRepos={vi.fn()} />)

    expect(screen.getByText('neils-repo')).toBeInTheDocument()
    expect(screen.getByText('neil')).toBeInTheDocument()
    expect(screen.getByText('50')).toBeInTheDocument()
  })
})
