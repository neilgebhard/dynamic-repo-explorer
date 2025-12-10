import type { Repo } from '../types'

interface Props {
  repos: Repo[]
  onShowOwnerRepos: (owner: string) => void
}

export default function InitialRepos({ repos, onShowOwnerRepos }: Props) {
  return (
    <table>
      <thead>
        <tr>
          <th>Owner</th>
          <th>Name</th>
          <th>Stars</th>
          <th>Language</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {repos.map((repo) => (
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
        ))}
      </tbody>
    </table>
  )
}
