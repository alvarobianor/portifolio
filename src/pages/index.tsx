/* eslint-disable consistent-return */
import { GoodSkillsData, MainSkillsData, OtherSkillsData } from '@/data/skills'
import { ProjectsData } from '@/data/projects'

import { useRef, useState } from 'react'
import Lottie from 'react-lottie'

import {
  ContentSection,
  Content,
  ContentContainer,
  ProfileAside,
  ProfileBio,
  ProfileBioContainer,
  ProfileContainer,
  ProfileName,
  ProfileProfession,
  ProfileSeparator,
  Screen
} from '@/styles/Home'

import Menu from '@/components/menu'
import User from '@/components/user'
import Skills from '@/components/skills'
import ProjectsGrid from '@/components/ProjectsGrid'
import CompanyCard from '@/components/CompanyCard'
import FormationGrid from '@/components/FormationGrid'
import ContactGrid from '@/components/ContactGrid'
import EmailSection from '@/components/EmailSection'

import DownAnim from '@/assets/animations/down.json'

type sections = 'skills' | 'projects' | 'experience' | 'objectives' | 'contact'

const Home: React.FC = () => {
  const projectsRef = useRef<HTMLHeadingElement>(null)
  const experienceRef = useRef<HTMLHeadingElement>(null)
  const objectivesRef = useRef<HTMLHeadingElement>(null)
  const contactRef = useRef<HTMLHeadingElement>(null)

  const [activeSection, setActiveSection] = useState<sections>(`skills`)

  const getActualSection = (scrollPosition: number): void => {
    if (
      !contactRef.current ||
      !objectivesRef.current ||
      !experienceRef.current ||
      !projectsRef.current
    )
      return

    if (scrollPosition >= contactRef.current?.offsetTop - 200)
      return setActiveSection(`contact`)
    if (scrollPosition >= objectivesRef.current?.offsetTop - 200)
      return setActiveSection(`objectives`)
    if (scrollPosition >= experienceRef.current?.offsetTop - 200)
      return setActiveSection(`experience`)
    if (scrollPosition >= projectsRef.current?.offsetTop - 200)
      return setActiveSection(`projects`)
    if (scrollPosition <= projectsRef.current?.offsetTop - 200)
      return setActiveSection(`skills`)
  }

  return (
    <Screen className="screen">
      <ProfileAside>
        <ProfileContainer>
          <User />
          <ProfileName>Álvaro Bianor</ProfileName>
          <ProfileProfession>
            Desenvolvedor Front-end e Mobile
          </ProfileProfession>
        </ProfileContainer>
        <ProfileSeparator />
        <ProfileBioContainer>
          <ProfileBio>
            Tenho 23 anos, trabalho como{` `}
            <span className="empashis">front-end </span>
            (mas vez ou outra vou dar uma mão no back-end)
            {` `}
            na
            {` `}
            <span className="sub">FFIT – Inovação e Tecnologia</span>,
            utilizando
            {` `}
            <span className="tech">React/Next.Js </span> e{` `}
            <span className="tech">React Native </span>
            como ferramentas principais. <br /> <br /> Sou graduando de Sistemas
            de Informação pela{` `}
            <span className="empashis">UFC - Campus Quixadá</span>, também sou
            bolsista do núcleo de Inovações (INOVE) onde desenvolvo projetos
            para a universidade e seus parceiros.
            <br /> <br /> Sou{` `}
            <strong className="empashis">apaixonado </strong>pelo front-end,
            principalmente quando utilizado o{` `}
            <span className="tech">React/Next.Js </span> e o{` `}
            <span className="tech"> React Native</span>, tenho o objetivo de
            crescer, aprender ainda mais, adiquirir mais conhecimento da área de
            {` `}
            <strong className="empashis">back-end</strong>, embora já programe
            usando Node, quero conhecer mais e poder de fato ser um fullstack e
            a melhor forma é correr atrás de
            <span className="sub"> conhecimento</span>.
          </ProfileBio>
        </ProfileBioContainer>
        <a href="#content" className="downArrow">
          <Lottie
            options={{
              animationData: DownAnim
            }}
            height="3rem"
          />
        </a>
      </ProfileAside>
      <ContentSection id="content">
        <Menu active={activeSection} />
        <Content onScroll={e => getActualSection(e.currentTarget.scrollTop)}>
          <ContentContainer>
            <h1 id="skills">Habilidades principais</h1>
            <Skills skills={MainSkillsData} />
            <h1>Boas práticas</h1>
            <Skills skills={GoodSkillsData} />
            <h1>Outras</h1>
            <Skills skills={OtherSkillsData} />
            <h1 ref={projectsRef} id="projects">
              Projetos
            </h1>
            <ProjectsGrid projects={ProjectsData} />
            <h1 ref={experienceRef} id="experience">
              Experiência
            </h1>
            <div
              style={{
                display: `grid`,
                gridTemplateColumns: `repeat(auto-fill, minmax(22rem, 1fr))`,
                gridGap: `1rem 2rem`
              }}
            >
              <CompanyCard />
            </div>
            <h1>Formação</h1>
            <FormationGrid />
            <h1 ref={objectivesRef} id="objectives">
              Objetivos
            </h1>
            <p>
              Tenho o objetivo de crescer na área de{` `}
              <span className="tech">TI</span>, focando em me desenvolver como
              um programador <span className="empashis">fullstack</span> focando
              em
              <span className="lang">Typescript</span>, pois é uma linguagem na
              qual tenho muita vontade de{` `}
              <strong className="empashis">dominar</strong>, principalmente
              quando aplicada a frameworks como o{` `}
              <span className="tech">React</span>,{` `}
              <span className="tech">React Native</span> e
              <span className="tech"> NodeJs</span>. Apesar de gostar de
              desenvolver utilizando as linguagens acima, gostaria de aprender
              várias outras, estar por dentro de várias áreas do
              {` `}
              <span className="go">desenvolvimento de softaware</span>
              <br />
              <br />
              Também tenho curiosidades em outras áreas, gostaria muito de
              aprender mais sobre{` `}
              <strong className="tech">Salesforce</strong>, essa área de
              computação em nuvem me desperta{` `}
              <span className="go">curiosidade</span>, outra tecnologia que
              gostaria de aprender seria <span className="tech">Elixir </span>
              mas é importante ir com calma, um dia conquistarei o mundo!
            </p>
            <h1 ref={contactRef} id="contact">
              Contatos
            </h1>
            <ContactGrid />
            <h1>Email</h1>
            <EmailSection />
          </ContentContainer>
        </Content>
      </ContentSection>
    </Screen>
  )
}

export default Home
