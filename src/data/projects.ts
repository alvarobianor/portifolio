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
  },
  {
    id: 4,
    project: `panel`,
    title: `Álvaro Bianor Panel`,
    description: `Projeto de um painel dinâmico de imagens desenvolvido para mostrar alguns conhecimentos de CSS.`,
    repository: `https://github.com/alvarobianor/d01`,
    link: `https://d01.vercel.app/`,
    langs: [`Html`, `Javascript`, `Css`],
    platforms: [`web`, `github`]
  },
  {
    id: 5,
    project: `igNews`,
    title: `IgNews`,
    description: `Projeto desenvolvido no Ignite da rocketseat, um blog com serviço de assinatura e login social.`,
    repository: `https://github.com/alvarobianor/igNews`,
    langs: [
      `Typescript`,
      `Next.Js`,
      `React`,
      `CMS`,
      `NextAuth`,
      `Stripe`,
      `Fauna`,
      `Prismic`,
      `CSS Module`,
      `Styled-components`
    ],
    platforms: [`web`, `github`]
  },

  {
    id: 6,
    project: `dashGo`,
    title: `dashGo`,
    description: `Projeto desenvolvido no Ignite da rocketseat, um dashboard totalmente responsivo de uma plataforma de vídeos.`,
    repository: `https://github.com/alvarobianor/dashGo`,
    link: `https://dash-go-alvarobianor.vercel.app/`,
    langs: [
      `Typescript`,
      `Next.Js`,
      `React`,
      `ChakraUI`,
      `Apexcharts`,
      `React-hook-form`,
      `Yup`
    ],
    platforms: [`web`, `github`]
  }
]
