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
        <CompanyCardTime>ago. de 2020 - out. de 2020</CompanyCardTime>
        <CompanyCardLocation>Quixadá - CE</CompanyCardLocation>
      </CompanyCardContent>
    </CompanyCardContainer>
    <CompanyCardContainer>
      <CompanyCardImage>
        <img src="/companies/FFIT.png" alt="ffit" width="90%" height="90%" />
      </CompanyCardImage>
      <CompanyCardContent>
        <CompanyCardTitle>FFIT – Inovação e Tecnologia</CompanyCardTitle>
        <CompanyCardTime>out. de 2020 - ago. de 2021</CompanyCardTime>
        <CompanyCardLocation>Remoto</CompanyCardLocation>
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
        <CompanyCardTime>ago. de 2021 - no momento</CompanyCardTime>
        <CompanyCardLocation>Remoto</CompanyCardLocation>
      </CompanyCardContent>
    </CompanyCardContainer>
  </>
)

export default CompanyCard
