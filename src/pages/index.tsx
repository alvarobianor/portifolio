/* eslint-disable react/no-unescaped-entities */
/* eslint-disable consistent-return */
import Lottie from 'react-lottie'
import { useRef, useState } from 'react'
import { GoodSkillsData, MainSkillsData, OtherSkillsData } from '@/data/skills'
import { ProjectsData } from '@/data/projects'

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
          <ProfileProfession>Desenvolvedor fullstack</ProfileProfession>
        </ProfileContainer>
        <ProfileSeparator />
        <ProfileBioContainer>
          <ProfileBio>
            I'm 23 years old, I work as{` `}
            <span className="empashis">frontend </span>
            (but every now and then I'll lend a hand on the backend)
            {` `}
            at the
            {` `}
            <span className="sub">Instituto Atlântico</span>, using
            {` `}
            <span className="tech">React/Next.Js </span>
            as main tools. <br /> <br /> I'm majoring in Systems of Information
            by {` `}
            <span className="empashis">UFC - Campus Quixadá</span>, I'm also
            Scholarship at the Innovation Center (INOVE) where I develop
            projects for the university and its partners.
            <br /> <br /> I'm{` `}
            <strong className="empashis">passionate </strong>the front-end,
            especially when using {` `}
            <span className="tech">React/Next.Js </span> and the {` `}
            <span className="tech">React Native</span>, I aim to career to reach
            abroad one day and learn more and more about my area, I also program
            in {` `}
            <span className="tech">NodeJs </span> I want to learn in the future
            {` `}
            <span className="tech">Python </span>and delve deeper into the area
            of
            {` `}
            <strong className="empashis">back-end</strong>, always looking for
            more
            <span className="sub">knowledge</span>.
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
            <h1 id="skills">Main Skills</h1>
            <Skills skills={MainSkillsData} />
            <h1>Good habits</h1>
            <Skills skills={GoodSkillsData} />
            <h1>Others skills</h1>
            <Skills skills={OtherSkillsData} />
            <h1 ref={projectsRef} id="projects">
              Projects
            </h1>
            <ProjectsGrid projects={ProjectsData} />
            <h1 ref={experienceRef} id="experience">
              Experience
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
            <h1>Formation</h1>
            <FormationGrid />
            <h1 ref={objectivesRef} id="objectives">
              Goals
            </h1>
            <p>
              I aim to grow in the {` `}
              <span className="tech">IT</span>, focusing on developing myself as
              a <span className="empashis">fullstack</span> programmer focusing
              on in{` `}
              <span className="lang">Typescript</span> as it is a language in
              which I really want to {` `}
              <strong className="empashis">master</strong>, mostly when applied
              to frameworks like {` `}
              <span className="tech">React</span>,{` `}
              <span className="tech">React Native</span> and
              <span className="tech">NodeJs</span>. despite liking develop using
              the above languages, I would like to learn several others, to be
              inside several areas of the
              {` `}
              <span className="go">software development</span>
              <br />
              <br />I also have curiosities in other areas, I would very much
              like to learn more about{` `}
              <strong className="tech">Salesforce</strong>, this area of cloud
              computing wakes me up{` `}
              <span className="go">curiosity</span>, another technology that
              would like to learn would be <span className="tech">Elixir</span>
              but it is important to take it easy, one day I will conquer the
              world!
            </p>
            <h1 ref={contactRef} id="contact">
              Contacts
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
