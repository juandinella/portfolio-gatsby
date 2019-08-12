import React from "react"
import styled from "styled-components"
import breakpoint from "../../../assets/styles/mixins"

import TwitterIcon from "../../../assets/icons/twitter.inline.svg"

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

export default () => (
  <StyledHero aria-label='Hero Banner'>
    <HeroContent className="hero--content">
      <Container>
        <Heading>Hi, I’m Juan</Heading>
        <Paragraph>I’m a 29-year-old Argentinian-Italian UI Developer living in Buenos Aires. I’m a really curious person, and in spite of having a university degree, I consider myself a self-taught person constantly learning and always looking for new things to improve.</Paragraph>
        <Paragraph>Besides my passion for design and coding, I love and spend a lot of time travelling and taking photos. Feel free to visit my <a href="https://unsplash.com/@juandinella" title="Juan Di Nella's unsplash page" target="_blank" rel="noopener noreferrer"> Unsplash page</a>.</Paragraph>
        <Paragraph>My main focus nowadays is emotional design, web animation, and accessibility.</Paragraph>
        <Paragraph>And don’t forget to stalk me on:</Paragraph>
        <TwitterIcon />
      </Container>
    </HeroContent>
  </StyledHero>
)


