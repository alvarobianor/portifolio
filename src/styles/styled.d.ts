import 'styled-components'

declare module 'styled-components' {
  export interface DefaultTheme {
    title: string
    colors: {
      primary: string
      secondary: string
      background: string
      subBackground: string
      formationBackground: string
      text: string
      subText: string
      description: string
      emphasisText: string
      techText: string
      langText: string
      goText: string
    }
  }
}
