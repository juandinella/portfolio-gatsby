import React from "react"
import Layout from "../layouts/"
import Hero from "../components/hero/"
import Work from "../components/work/"
import FrontendWorkText from "../components/frontendWork-text"
import FrontendItem from "../components/frontendItem"
import FrontendGrid from "../components/frontendGrid"

import SatellogicImage from "../assets/images/satellogic.jpg"
import LopezImage from "../assets/images/lopez.jpg"
import SoysoloImage from "../assets/images/soy-solo.jpg"
import NeoloImage from "../assets/images/neolo.jpg"

import p2hImage from "../assets/images/pixel.jpg"
import mercadoshopsImage from "../assets/images/mercadoshops.jpg"
import jammppImage from "../assets/images/jampp.jpg"
import icocomplyImage from "../assets/images/icocomply.jpg"
import ripvanImage from "../assets/images/ripvan.jpg"
import toiImage from "../assets/images/toi.jpg"
import searchrpmImage from "../assets/images/searchrpm.jpg"
import borrowImage from "../assets/images/borrow.jpg"

const App = () => (
  <Layout>
    <Hero />
    <Work
      title="Satellogic"
      about="Satellogic is the first vertically integrated geospatial analytics company. They drive real results with information on a planetary scale that you can trust."
      descriptions={[
        'In collaboration with the Sans Bureau team we were working on the redesign of the Satellogic website.'
      ]}
      url="https://satellogic.com/"
      alt="Satellogic's website screenshot"
      image={SatellogicImage}
    />
    <Work
      title="Lopez Hostel & Suites"
      about="Lopez Hostel & Suites is a boutique hostel in Palermo, Buenos Aires."
      descriptions={[
        'I had the pleasure to work with this great hostel making a redesign and the frontend of their new website.'
      ]}
      url="https://www.lopezhostel.com/en/index"
      alt="Lopez Hostel and Suites's website screenshot"
      image={LopezImage}
    />
    <Work
      title="Soy Solo"
      about="Soy solo is a book of honest stories about leadership to be happy in the 21st century and beyond by Leo Piccioli."
      descriptions={[
        'Leo requested me to create a landing page for his brand new book, Soy solo. He wanted a simple, clean, fast website and I designed and developed one for him.'
      ]}
      url="https://soy-solo.netlify.com/"
      alt="Soy Solo website screenshot"
      image={SoysoloImage}
    />
    <Work
      title="Neolo"
      about="Neolo is one of the most important web hosting company in Latin America with more than 80,000 websites and 14 years of experience"
      descriptions={[
        'Since Neolo is constantly growing and expanding, its website needed to be able to adapt to their necessities and be responsive to that. My role in this project was to redesign the complete experience, create a new UI and develop the frontend.',
        'For this job I tried to focus mainly on emotional design and create reusable blocks that could work for the different pages.'
      ]}
      url="https://www.neolo.com/argentina/"
      alt="Neolo's website screenshot"
      image={NeoloImage}
    />
    <FrontendWorkText />
    <FrontendGrid>
      <FrontendItem
        className="grid-item"
        url='https://pixel2html.com/'
        image={p2hImage}
        title='Pixel2HTML'
        hashtags={[
          '#HTML',
          '#CSS',
          '#JS',
          '#Animation'
        ]}
      />
      <FrontendItem
        className="grid-item"
        url='https://www.mercadoshops.com.ar/'
        image={mercadoshopsImage}
        title='Mercado Shops'
        hashtags={[
          '#HTML',
          '#CSS',
          '#JS',
          '#Animation'
        ]}
      />
      <FrontendItem
        className="grid-item"
        url='https://jampp.com/case-studies/deliveroo/'
        image={jammppImage}
        title='Jammpp'
        hashtags={[
          '#HTML',
          '#CSS',
          '#JS',
          '#Animation'
        ]}
      />
      <FrontendItem
        className="grid-item"
        url='https://t.co/cshBoRBsov?amp=1'
        image={icocomplyImage}
        title='ICO Comply'
        hashtags={[
          '#HTML',
          '#CSS',
          '#JS',
          '#Landing'
        ]}
      />
      <FrontendItem
        className="grid-item"
        url='https://www.ripvan.com/'
        image={ripvanImage}
        title='Rip Van'
        hashtags={[
          '#HTML',
          '#CSS',
          '#JS',
          '#Waffles'
        ]}
      />
      <FrontendItem
        className="grid-item"
        url='https://toi.io/'
        image={toiImage}
        title='Toi'
        hashtags={[
          '#HTML',
          '#CSS',
          '#JS',
          '#Animation'
        ]}
      />
      <FrontendItem
        className="grid-item"
        url='https://www.searchrpm.com/'
        image={searchrpmImage}
        title='SearchRPM'
        hashtags={[
          '#HTML',
          '#CSS',
          '#JS',
          '#SEO'
        ]}
      />
      <FrontendItem
        className="grid-item"
        url='https://demos.pixel2html.com/0000122/0004632/index.html'
        image={borrowImage}
        title='Borrow'
        hashtags={[
          '#HTML',
          '#CSS',
          '#JS'
        ]}
      />
    </FrontendGrid>
  </Layout>
)

export default App
