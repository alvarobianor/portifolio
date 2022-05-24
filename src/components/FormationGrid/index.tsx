import React from 'react'
import FormationCard from '../Formationcard'
import { FormationGridContainer } from './style'

const FormationGrid: React.FC = () => (
  <FormationGridContainer>
    <FormationCard
      company="ignite"
      title="Ignite, React.js, React Native and NodeJs - Rocketseat"
      time="mar. de 2021 - 2023"
      description={`<span class="go">Ignite</span> is an <span class="empashis">acceleration program for devs</span>, focused on preparing complete professionals for the market, training technical skills and behavior intensively and practically. <span class="go">Ignite</span> is divided into non-dependent knowledge tracks where we deep into a specific technology. In summary, Ignite's goal is to develop skills that will accelerate your career through an <span class="tech">efficient learning methodology</span>, a curriculum aligned with market needs and attitudes that will help you to stand out as a professional.`}
    />
  </FormationGridContainer>
)

export default FormationGrid
