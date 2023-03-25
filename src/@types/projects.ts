export type projectsType =
  | 'portifolio'
  | 'dtmoney'
  | 'api-github'
  | 'places'
  | 'panel'
  | 'igNews'
  | 'dashGo'
  | 'multiverse-madness'

export type goodsType = 'eslint' | 'prettier'

export type platformsType = 'desktop' | 'web' | 'github' | 'mobile'

export type ProjectType = {
  id: number
  project: projectsType
  title?: string
  description: string
  repository?: string
  link?: string
  langs: string[]
  platforms: platformsType[]
  goods?: goodsType[]
}
