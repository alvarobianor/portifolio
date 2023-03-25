import { ProjectType } from '@/@types/projects'

export const ProjectsData: ProjectType[] = [
  {
    id: 0,
    project: `api-github`,
    title: `Github Explorer`,
    description: `Explore Github repositories on this beautiful, modern platform`,
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
    description: `My portfolio, in order to present and talk a little more about myself. Project inspired by Anderson Santos project github: @AndersonSantos0`,
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
    title: `World Explorer`,
    description: `Book your next travel destinations around the world!`,
    repository: `https://github.com/alvarobianor/deploy-frontend-challenge`,
    link: `https://alvaro-places-2.herokuapp.com/`,
    langs: [`React.js`, `Javascript`, `Typescript`, `Styled-components`],
    platforms: [`web`, `github`]
  },
  {
    id: 3,
    project: `dtmoney`,
    title: `dt-money`,
    description: `Financial control project developed at Rocketseat Ignite bootcamp`,
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
    description: `Project of a dynamic panel of images developed to show some knowledge of CSS.`,
    repository: `https://github.com/alvarobianor/d01`,
    link: `https://d01.vercel.app/`,
    langs: [`Html`, `Javascript`, `Css`],
    platforms: [`web`, `github`]
  },
  {
    id: 5,
    project: `igNews`,
    title: `IgNews`,
    description: `Project developed on Ignite by rocketseat, a blog with subscription service and social login.`,
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
    description: `Project developed on Ignite by rocketseat, a fully responsive dashboard for a video platform.`,
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
  },

  {
    id: 7,
    project: `multiverse-madness`,
    title: `Metaverse Madness`,
    description: `Project developed to learn about tailwind and framer motion, by: jsmastery`,
    repository: `https://github.com/alvarobianor/multiversus-clone`,
    link: `https://multiversus-clone.vercel.app/`,
    langs: [`Javascript`, `Next.Js`, `React`, `Tailwind`, `FramerMotion`],
    platforms: [`web`, `github`]
  }
]
