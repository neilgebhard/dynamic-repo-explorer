import { useEffect, useState } from 'react'
import type { Repo } from './types'
import InitialRepos from './components/InitialRepos'
import OwnerRepos from './components/OwnerRepos'

function App() {
  const [repos, setRepos] = useState<Repo[]>([])
  const [ownerRepos, setOwnerRepos] = useState<Repo[]>([])
  const [loading, setLoading] = useState(true)
  const [filter, setFilter] = useState('')
  const [error, setError] = useState<string | null>(null)
  const [ownerError, setOwnerError] = useState('')

  useEffect(() => {
    fetch('/api/repos/initial')
      .then((res) => {
        if (!res.ok) throw new Error(`HTTP ${res.status}`)
        return res.json()
      })
      .then(setRepos)
      .catch(() => setError('Failed to load repos'))
      .finally(() => {
        setLoading(false)
      })
  }, [])

  const handleShowOwnerRepos = (owner: string) => {
    fetch(`/api/repos/${owner}`)
      .then((res) => {
        if (!res.ok) throw new Error(`HTTP ${res.status}`)
        return res.json()
      })
      .then(setOwnerRepos)
      .catch(() => setOwnerError('Failed to load owner repos'))
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
        type='text'
      />
      <div className='flex-container'>
        <InitialRepos
          repos={filteredRepos}
          onShowOwnerRepos={handleShowOwnerRepos}
        />
        <OwnerRepos repos={ownerRepos} />
      </div>
      {ownerError && <h2>{ownerError}</h2>}
    </>
  )
}

export default App
