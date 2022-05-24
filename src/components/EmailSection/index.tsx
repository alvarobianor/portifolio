import React from 'react'
import emailjs from 'emailjs-com'
import { toast } from 'react-toastify'
import {
  EmailSectionContainer,
  EmailSectionInputs,
  EmailSectionMessage
} from './style'

const EmailSection: React.FC = () => {
  const onSubmit = (e: any) => {
    e.preventDefault()

    emailjs
      .sendForm(
        `service_swd43wf`,
        `template_qs5wo7t`,
        e.target,
        `user_4KEBbEoULrbW3PFxaOdNA`
      )
      .then(
        () => {
          toast.info(`Email successfully sent!`)
          e.target.reset()
        },
        () => {
          toast.error(`Oops, something went wrong, try again later`)
        }
      )
  }

  return (
    <EmailSectionContainer>
      <form id="contact-form" onSubmit={onSubmit}>
        <div>
          <EmailSectionInputs>
            <input required type="text" name="subject" placeholder="Subject" />
            <input required type="text" name="user_name" placeholder="Name" />
            <input
              required
              type="email"
              name="user_email"
              placeholder="Email"
            />
          </EmailSectionInputs>
          <EmailSectionMessage>
            <textarea required name="message" placeholder="Message" />
          </EmailSectionMessage>
        </div>
        <input className="submitButton" type="submit" value="Send" />
      </form>
    </EmailSectionContainer>
  )
}

export default EmailSection
