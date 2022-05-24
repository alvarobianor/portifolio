import React from 'react'
import {
  ContactGridContainer,
  ContactItemContainer,
  ContactItemIcon,
  ContactItemTitle
} from './style'

interface ContactItemProps {
  contact: string
  title?: string
  link: string
}

export const ContactItem: React.FC<ContactItemProps> = ({
  contact,
  title,
  link
}) => {
  const onContactPress = () => {
    window.open(link, `_ blank`)
  }

  return (
    <ContactItemContainer onClick={onContactPress}>
      <ContactItemIcon>
        <img src={`/contacts/${contact}.svg`} alt={contact} />
      </ContactItemIcon>
      <ContactItemTitle>{title || contact}</ContactItemTitle>
    </ContactItemContainer>
  )
}

const ContactGrid: React.FC = () => (
  <ContactGridContainer>
    <ContactItem
      title="LinkedIn"
      contact="linkedin"
      link="https://www.linkedin.com/in/alvim-bianor/"
    />
    <ContactItem
      title="GitHub"
      contact="github"
      link="https://github.com/alvarobianor"
    />
    <ContactItem
      title="Rocketseat"
      contact="rocketseat"
      link="https://app.rocketseat.com.br/me/alvaro-bianor-sousa-medeiros-1573777722"
    />
  </ContactGridContainer>
)

export default ContactGrid
