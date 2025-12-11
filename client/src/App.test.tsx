import { render, screen } from '@testing-library/react'
import { describe, it, expect, vi, beforeEach } from 'vitest'
import App from './App'

describe('App', () => {
  beforeEach(() => {
    global.fetch = vi.fn(() =>
      Promise.resolve({
        ok: true,
        json: () =>
          Promise.resolve([
            {
              id: 1,
              name: 'neils-repo',
              owner: 'neil',
              starCount: 50,
              language: 'TypeScript',
            },
          ]),
      } as Response)
    ) as typeof fetch
  })

  it('renders repo data after fetch completes', async () => {
    render(<App />)

    expect(await screen.findByText('neils-repo')).toBeInTheDocument()
    expect(screen.getByText('neil')).toBeInTheDocument()
    expect(screen.getByText('50')).toBeInTheDocument()
    expect(screen.getByText('TypeScript')).toBeInTheDocument()
  })
})
