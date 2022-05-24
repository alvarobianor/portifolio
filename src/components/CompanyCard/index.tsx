import React from 'react'
import {
  CompanyCardContainer,
  CompanyCardContent,
  CompanyCardImage,
  CompanyCardLocation,
  CompanyCardTime,
  CompanyCardTitle
} from './style'

const CompanyCard: React.FC = () => (
  <>
    <CompanyCardContainer>
      <CompanyCardImage>
        <img src="/companies/osf.jpeg" alt="osf" width="90%" height="90%" />
      </CompanyCardImage>
      <CompanyCardContent>
        <CompanyCardTitle>OSF Global Digital</CompanyCardTitle>
        <CompanyCardTime>August, 2020 - October, 2020</CompanyCardTime>
        <CompanyCardLocation>Quixadá - CE</CompanyCardLocation>
      </CompanyCardContent>
    </CompanyCardContainer>
    <CompanyCardContainer>
      <CompanyCardImage>
        <img src="/companies/FFIT.png" alt="ffit" width="90%" height="90%" />
      </CompanyCardImage>
      <CompanyCardContent>
        <CompanyCardTitle>FFIT – Inovação e Tecnologia</CompanyCardTitle>
        <CompanyCardTime>October, 2020 - August, 2021</CompanyCardTime>
        <CompanyCardLocation>Remotely</CompanyCardLocation>
      </CompanyCardContent>
    </CompanyCardContainer>
    <CompanyCardContainer>
      <CompanyCardImage>
        <img
          src="/companies/atlântico.png"
          alt="atlantico"
          width="90%"
          height="90%"
        />
      </CompanyCardImage>
      <CompanyCardContent>
        <CompanyCardTitle>Instituto Atlântico</CompanyCardTitle>
        <CompanyCardTime>August, 2021 - Currently</CompanyCardTime>
        <CompanyCardLocation>Remotely</CompanyCardLocation>
      </CompanyCardContent>
    </CompanyCardContainer>
  </>
)

export default CompanyCard
