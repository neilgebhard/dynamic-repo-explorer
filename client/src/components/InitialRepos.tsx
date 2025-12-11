import type { Repo } from '../types'

interface Props {
  repos: Repo[]
  onShowOwnerRepos: (owner: string) => void
}

export default function InitialRepos({ repos, onShowOwnerRepos }: Props) {
  return (
    <div>
      <h2>Last 20 updated repos over 1000 stars</h2>
      <table>
        <thead>
          <tr>
            <th>Owner</th>
            <th>Repo</th>
            <th>Stars</th>
            <th>Language</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {repos.length > 0 ? (
            repos.map((repo) => (
              <tr key={repo.id}>
                <td>{repo.owner}</td>
                <td>{repo.name}</td>
                <td>{repo.starCount}</td>
                <td>{repo.language}</td>
                <td>
                  <button onClick={() => onShowOwnerRepos(repo.owner)}>
                    Show All Author Repos
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td>No owner found</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  )
}
