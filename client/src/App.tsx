import { useEffect, useState } from 'react'
import type { Repo } from './types'
import InitialRepos from './components/InitialRepos'
import OwnerRepos from './components/OwnerRepos'

function App() {
  const [repos, setRepos] = useState<Repo[]>([])
  const [ownerRepos, setOwnerRepos] = useState<Repo[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [filter, setFilter] = useState('')

  useEffect(() => {
    fetch('/api/repos/initial')
      .then((res) => res.json())
      .then(setRepos)
      .catch(() => setError('Failed to load repos'))
      .finally(() => {
        setLoading(false)
      })
  }, [])

  const handleShowOwnerRepos = (owner: string) => {
    fetch(`/api/repos/${owner}`)
      .then((res) => res.json())
      .then(setOwnerRepos)
      .catch(() => alert('Failed to load owner repos'))
  }

  if (loading) return <h2>Loading...</h2>
  if (error) return <h2>{error}</h2>

  const filteredRepos = repos.filter((repo) =>
    repo.owner.toLowerCase().includes(filter.toLowerCase())
  )

  return (
    <>
      <h1>Dynamic Repo Explorer</h1>
      <label htmlFor='filter'>Filter by owner</label>
      <input
        id='filter'
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
      />
      <InitialRepos
        repos={filteredRepos}
        onShowOwnerRepos={handleShowOwnerRepos}
      />
      {ownerRepos.length > 0 && <OwnerRepos repos={ownerRepos} />}
    </>
  )
}

export default App
