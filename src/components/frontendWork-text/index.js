import React from "react"
import styled from "styled-components"
import breakpoint from "../../assets/styles/mixins"

const StyledFrontendText = styled.section`
  text-align: center;
  padding: 60px 0;
  margin: 20px 0;
  min-height: auto;
  overflow: hidden;
  position: relative;

  ${breakpoint.medium`
    padding: 130px 0;
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

  &:before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    margin: 0 auto;
    width: 240px;
    height: 2px;
    background-color: black;

    ${breakpoint.medium`
      width: 360px;
    `}
  }
`
const Paragraph = styled.p`
  font-size: 16px;
  margin-bottom: 20px;
  line-height: 1.5;
  font-weight: 500;
  max-width: 640px;
  margin: 0 auto;

    ${breakpoint.medium`
      font-size: 18px;
      margin-bottom: 28px;
  `}
`

const Heading = styled.h2`
  font-size: 48px;
  margin-bottom: 10px;
  line-height: 1;
  font-weight: 700;
  padding-top: 140px;

  ${breakpoint.medium`
    font-size: 80px;
    margin-bottom: 20px;
  `}
`

export default () => (
  <StyledFrontendText aria-label='Frontend Work'>
    <Container>
      <Heading>Frontend work</Heading>
      <Paragraph>I’ve been working for more than 4 years as a frontend dev at Pixel2HTML. But, what’s Pixel2HTML? Lemme tell you. Pixel2HTML is FrontEnd Development Company that helps Freelancers, Startups & Agencies to get the best HTML/CSS and JavaScript code for their site.</Paragraph>
    </Container>
  </StyledFrontendText>
)
