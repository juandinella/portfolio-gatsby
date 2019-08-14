import React from "react"
import { Helmet } from "react-helmet"
import Layout from "../layouts/"
import Hero from "../components/hero/"
import AllWorks from "../components/work/allWorks"
import FrontendWorkText from "../components/frontendWork-text"
import FrontendItem from "../components/frontendItem"
import FrontendGrid from "../components/frontendGrid"
import Footer from "../components/footer"

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
    <Helmet>
      <meta charSet="utf-8" />
      <title>Juan Di Nella - Web designer and frontend developer</title>
      <meta name="description" content="I’m a 29-year-old Argentinian-Italian UI Developer living in Buenos Aires. I’m a really curious person, and in spite of having a university degree, I consider myself a self-taught person constantly learning and always looking for new things to improve."></meta>
      <meta property="og:title" content="Juan Di Nella web designer and frontend developer"></meta>
      <meta property="og:description" content="I’m a 29-year-old Argentinian-Italian UI Developer living in Buenos Aires. I’m a really curious person, and in spite of having a university degree, I consider myself a self-taught person constantly learning and always looking for new things to improve."></meta>
      <meta property="og:type" content="website"></meta>
      <meta property="og:url" content="https://www.juandinella.com"></meta>
      <meta property="og:site_name" content="Juan Di Nella"></meta>
      <meta property="og:image" content="https://www.juandinella.com/assets/images/web.jpg"></meta>
    </Helmet>
    <Hero />
    <AllWorks/ >
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
    <Footer />
  </Layout>
)

export default App
