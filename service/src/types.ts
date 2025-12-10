export interface Repo {
  id: number
  name: string
  owner: { login: string }
  stargazers_count: number
  language: string | null
}
