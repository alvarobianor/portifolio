import { ProjectType } from '@/@types/projects'

export const ProjectsData: ProjectType[] = [
  {
    id: 0,
    project: `api-github`,
    title: `Github Explorer`,
    description: `Explore repositórios do Github nessa plataforma moderna e bonita`,
    repository: `https://github.com/alvarobianor/github-api-front`,
    langs: [
      `React.js`,
      `Javascript`,
      `Typescript`,
      `Styled-components`,
      `Github API`
    ],
    platforms: [`web`, `github`],
    goods: [`eslint`, `prettier`]
  },
  {
    id: 1,
    project: `portifolio`,
    title: `Portifolio`,
    description: `Meu portifolio, com intuito de apresentar e falar um pouco mais sobre mim. Projeto inspirado no projeto do Anderson Santos github: @AndersonSantos0`,
    repository: `https://github.com/alvarobianor/portifolio`,
    langs: [
      `React.js`,
      `Javascript`,
      `Typescript`,
      `Next.js`,
      `Styled-components`
    ],
    platforms: [`web`, `github`],
    goods: [`eslint`, `prettier`]
  },
  {
    id: 2,
    project: `places`,
    title: `Explorador de mundo`,
    description: `Marque seus próximos destinos dde viagens pelo mundo!`,
    repository: `https://github.com/alvarobianor/deploy-frontend-challenge`,
    link: `https://alvaro-places-2.herokuapp.com/`,
    langs: [`React.js`, `Javascript`, `Typescript`, `Styled-components`],
    platforms: [`web`, `github`]
  },
  {
    id: 3,
    project: `dtmoney`,
    title: `dt-money`,
    description: `Projeto de controle financeiro desenvolvido no bootcamp Ignite da Rocketseat`,
    repository: `https://github.com/alvarobianor/dt-money`,

    langs: [
      `React.js`,
      `Javascript`,
      `Typescript`,
      `Context-API`,
      `Sass`,
      `Styled-components`
    ],
    platforms: [`web`, `github`]
  }
]