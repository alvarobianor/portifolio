export type skillsType =
  | 'javascript'
  | 'typescript'
  | 'reactjs'
  | 'react-native'
  | 'HTML'
  | 'CSS'
  | 'nextjs'
  | 'sass'
  | 'styled-components'
  | 'redux'
  | 'jest'
  | 'git'
  | 'eslint'
  | 'prettier'
  | 'jQuery'
  | 'mongo'
  | 'postgres'
  | 'node'
  | 'vue'
  | 'aws'
  | 'java'
  | 'docker'

export type skillType = {
  id: number
  skill: skillsType
  background?: string
}
