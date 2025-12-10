import OwnerRepos from './OwnerRepos'
import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'

describe('OwnerRepos', () => {
  it('renders owner and repo data', () => {
    const repos = [
      {
        id: 1,
        name: 'neils-repo',
        owner: 'neil',
        starCount: 50,
        language: 'TypeScript',
      },
    ]

    render(<OwnerRepos repos={repos} />)

    expect(screen.getByText('Repos for neil')).toBeInTheDocument()
    expect(screen.getByText('neils-repo')).toBeInTheDocument()
    expect(screen.getByText('50')).toBeInTheDocument()
    expect(screen.getByText('TypeScript')).toBeInTheDocument()
  })
})
