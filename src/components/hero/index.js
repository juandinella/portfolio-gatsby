import React from "react"
import styled from "styled-components"
import breakpoint from "../../assets/styles/mixins"

import TwitterIcon from "../../assets/icons/twitter.inline.svg"
import FacebookIcon from "../../assets/icons/facebook.inline.svg"
import InstagramIcon from "../../assets/icons/instagram.inline.svg"
import LinkedinIcon from "../../assets/icons/linkedin.inline.svg"
import GithubIcon from "../../assets/icons/github.inline.svg"
import ChevronDown from "../../assets/icons/chevron-down.inline.svg"

const StyledHero = styled.section`
  height: auto;
  display: flex;
  align-items: center;
  padding: 30px 0;
  position: relative;

  ${breakpoint.medium`
    height: 100vh;
    padding: 0;
  `}
`

const Heading = styled.h1`
  font-size: 52px;
  margin-bottom: 14px;
  line-height: 1;
  font-weight: 700;

  ${breakpoint.small`
    font-size: 60px;
  `}

  ${breakpoint.medium`
    font-size: 100px;
  `}
`

const HeroContent = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  align-items: center;
  padding: 30px 0;

  ${breakpoint.medium`
    height: 100%;
    padding: 0;
  `}
`

const Paragraph = styled.p`
  font-size: 16px;
  margin-bottom: 20px;
  line-height: 1.5;
  font-weight: 500;

    ${breakpoint.medium`
      font-size: 18px;
      margin-bottom: 28px;
  `}
`

const Container = styled.div`
  max-width: 100%;
  margin: 0 auto;
  padding: 0 20px;
  margin-top: -10px;
  z-index: 2;
  position: relative;
  background-color: rgba(white, 0.5);
  box-shadow: 1px 2px 3px rgba(white,.5);

    ${breakpoint.medium`
      padding: 0 30px;
      max-width: 706px;
  `}
`

const ContactBTN = styled.a `
  margin-top: 30px;
  text-decoration: none;
  border: 2px solid black;
  color: white;
  background-color: black;
  display: table;
  padding: 12px 70px;
  transition: all 0.225s ease;
  font-size: 18px;
  text-align: center;
  width: 100%;

  &:hover {
    color: black;
    background-color: white;
  }

  ${breakpoint.small`
    width: auto;
  `}
`
const SocialList = styled.ul`
  li {
    display: inline-block;
    margin-right: 25px;

    svg {
      transition: all .225s ease;
    }
  }
  .tw {
    &:hover {
      a svg {
        stroke: #00aced;
      }
    }
  }

  .fb {
    &:hover {
      a svg {
        stroke: #3B5998;
      }
    }
  }

  .ig {
    &:hover {
      a svg {
        stroke: #8a49a1;
      }
    }
  }

  .in {
    &:hover {
      a svg {
        stroke: #4875B4;
      }
    }
  }


  .gh {
    &:hover {
      a svg path{
        stroke: #333333;
      }
    }
  }
`

const ScrollDown = styled.button`
  position: absolute;
  bottom: 1%;
  left: 0;
  right: 0;
  margin: 0 auto;
  display: none;
  width: 36px;
  padding: 0;
  text-align: center;
  z-index: 1;

  ${breakpoint.medium`
    display: block;
  `}
`

export default () => (
  <StyledHero aria-label='Hero Banner'>
    <HeroContent className="hero--content">
      <Container>
        <Heading>Hi, I’m Juan</Heading>
        <Paragraph>I’m a 29-year-old Argentinian-Italian UI Developer living in Buenos Aires. I’m a really curious person, and in spite of having a university degree, I consider myself a self-taught person constantly learning and always looking for new things to improve.</Paragraph>
        <Paragraph>Besides my passion for design and coding, I love and spend a lot of time travelling and taking photos. Feel free to visit my <a href="https://unsplash.com/@juandinella" title="Juan Di Nella's unsplash page" target="_blank" rel="noopener noreferrer"> Unsplash page</a>.</Paragraph>
        <Paragraph>My main focus nowadays is emotional design, web animation, and accessibility.</Paragraph>
        <Paragraph>And don’t forget to stalk me on:</Paragraph>
        <SocialList>
          <li className='tw'><a href='https://www.twitter.com/orugacontenta'><TwitterIcon /></a></li>
          <li className='fb'><a href='https://www.facebook.com/tuvieja'><FacebookIcon /></a></li>
          <li className='ig'><a href='https://www.instagram.com/juandinella/'><InstagramIcon /></a></li>
          <li className='in'><a href='https://www.linkedin.com/in/juandinella/'><LinkedinIcon /></a></li>
          <li className='gh'><a href='https://github.com/juandinella'><GithubIcon /></a></li>
        </SocialList>
        <ContactBTN href='mailto:juan.dinella@gmail.com'>Contact me</ContactBTN>
      </Container>
      <ScrollDown>
        <span className='visuallyHidden'>Scroll down to see my work</span>
        <ChevronDown/>
      </ScrollDown>
    </HeroContent>
  </StyledHero>
)


