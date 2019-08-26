import React from "react"
import styled from "styled-components"
import { WorkEven, WorkOdd } from "./"

import SatellogicImage from "../../assets/images/satellogic.jpg"
import LopezImage from "../../assets/images/lopez.jpg"
import SoysoloImage from "../../assets/images/soy-solo.jpg"
import NeoloImage from "../../assets/images/neolo.jpg"

const AllWorks = styled.section `
  display: block;
`

export default () => (
  <AllWorks id='works' aria-label='All works'>
    <WorkOdd
      title="Satellogic"
      about="Satellogic is the first vertically integrated geospatial analytics company. They drive real results with information on a planetary scale that you can trust."
      descriptions={[
        'In collaboration with the Sans Bureau team we were working on the redesign of the Satellogic website.'
      ]}
      url="https://satellogic.com/"
      image={SatellogicImage}
    />
    <WorkEven
      title="Lopez Hostel & Suites"
      about="Lopez Hostel & Suites is a boutique hostel in Palermo, Buenos Aires."
      descriptions={[
        'I had the pleasure to work with this great hostel making a redesign and the frontend of their new website.'
      ]}
      url="https://www.lopezhostel.com/en/index"
      image={LopezImage}
    />
    <WorkOdd
      title="Soy Solo"
      about="Soy solo is a book of honest stories about leadership to be happy in the 21st century and beyond by Leo Piccioli."
      descriptions={[
        'Leo requested me to create a landing page for his brand new book, Soy solo. He wanted a simple, clean, fast website and I designed and developed one for him.'
      ]}
      url="https://soy-solo.netlify.com/"
      image={SoysoloImage}
    />
    <WorkEven
      title="Neolo"
      about="Neolo is one of the most important web hosting company in Latin America with more than 80,000 websites and 14 years of experience"
      descriptions={[
        'Since Neolo is constantly growing and expanding, its website needed to be able to adapt to their necessities and be responsive to that. My role in this project was to redesign the complete experience, create a new UI and develop the frontend.',
        'For this job I tried to focus mainly on emotional design and create reusable blocks that could work for the different pages.'
      ]}
      url="https://www.neolo.com/argentina/"
      image={NeoloImage}
    />
  </AllWorks>
)
