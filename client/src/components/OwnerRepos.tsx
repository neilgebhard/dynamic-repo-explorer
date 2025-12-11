import type { Repo } from '../types'

interface Props {
  repos: Repo[]
}

export default function OwnerRepos({ repos }: Props) {
  return (
    <div>
      <h2>
        {repos.length > 0
          ? `Repos for ${repos[0].owner}`
          : 'Select an owner to load their repos'}
      </h2>
      <table>
        <thead>
          <tr>
            <th>Repository</th>
            <th>Stars</th>
            <th>Language</th>
          </tr>
        </thead>
        <tbody>
          {repos.length > 0 ? (
            repos.map((repo) => (
              <tr key={repo.id}>
                <td>{repo.name}</td>
                <td>{repo.starCount}</td>
                <td>{repo.language || ''}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td>No repos loaded</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  )
}
