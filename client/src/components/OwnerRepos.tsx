import type { Repo } from '../types'

interface Props {
  repos: Repo[]
}

export default function OwnerRepos({ repos }: Props) {
  return (
    <>
      <h2>{repos.length > 0 && `Repos for ${repos[0].owner}`}</h2>
      <table border={1}>
        <thead>
          <tr>
            <th>Repository</th>
            <th>Stars</th>
            <th>Language</th>
          </tr>
        </thead>
        <tbody>
          {repos.map((repo) => (
            <tr key={repo.id}>
              <td>{repo.name}</td>
              <td>{repo.starCount}</td>
              <td>{repo.language || ''}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  )
}
