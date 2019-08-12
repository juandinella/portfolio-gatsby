import React from "react"
import styled from "styled-components"
import breakpoint from "../../assets/styles/mixins"
import Container from "../container"
import Grid from "../grid"
import ArrowRight from "../../assets/icons/arrow-right.inline.svg"

const WorkItem = styled.section`
  padding: 60px 0;
  margin: 20px 0;
  min-height: auto;
  overflow: hidden;
  position: relative;

  ${breakpoint.medium`
    min-height: 1200px;
    padding: 130px 0;
  `}

  &:nth-child(even) {
    .grid-item {
      display: flex;
      position: static;
      padding: 0;
      right: 0;
    }
  }

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
  &:nth-child(odd) {
    .grid-item {
      display: flex;
      position: static;
      padding: 0;
      left: 0;

      &:first-of-type {
        > div {
          float: right;
          margin-left: auto;
        }
      }

      &:last-of-type {
        order: -1;

        > div {
          width: 80rem;
          height: 59.375rem;
        }

        img {
          position: absolute;
          right: 0;
        }
      }
    }
  }
`

const Heading = styled.h2`
  font-size: 48px;
  font-weight: 700;
  margin-bottom: 10;
  line-height: 1;

  ${breakpoint.medium`
    font-size: 80px;
    margin-bottom: 20px;
  `}
`

const About = styled.p`
  font-size: 16px;
  line-height: 1.66;
  position: relative;
  padding-bottom: 20px;

  &:after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 50px;
    height: 2px;
    background-color: black;
  }

  ${breakpoint.medium`
    font-size: 18px;
  `}

  em {
    font-style: italic;
  }

  a {
    margin-top: 0;
    display: inline-block;
    text-decoration: underline;
  }
`

const Description = styled.p`
  font-size: 16px;
  line-height: 1.66;
  padding-top: 20px;

  ${breakpoint.medium`
    font-size: 18px;
  `}

  em {
    font-style: italic;
  }

  a {
    margin-top: 0;
    display: inline-block;
    text-decoration: underline;
  }
`

const WorkText = styled.div`
  max-width: 100%;
  margin-bottom: 30px;
  background-color: rgba(white, 0.5);
  box-shadow: 1px 2px 3px rgba(white, 0.5);
  position: relative;
  z-index: 1;

  ${breakpoint.medium`
     max-width: 460px;
      margin-bottom: 0;
  `}

  a {
    margin-top: 40px;
    display: flex;
    align-items: center;
    font-size: 18px;
    text-decoration: none;

    svg {
      vertical-align: middle;
      margin-left: 12px;
      position: relative;
      transition: all 0.225s ease;
      left: 0;
    }

    &:hover {
      svg {
        left: 8px;
      }
    }

    span {
      border-bottom: 1px solid black;
    }
  }
`

const Image = styled.div`
  box-shadow: 0 0 50px 0 rgba(0, 0, 0, 0.3);
  position: relative;
  z-index: 1;

  &:hover {
    img {
      filter: none;
      -webkit-filter: grayscale(0);
    }
  }

  img {
    max-width: 100%;
    filter: gray;
    -webkit-filter: grayscale(1);
    -webkit-transition: all 0.2s ease-in-out;
    vertical-align: text-bottom;

    ${breakpoint.medium`
      max-width: 1280px;
      width: 1280px;
    `}
  }
`

export default ({ title, about, description, url, image }) => (
  <WorkItem>
    <Container>
      <Grid columns="2" gutter="1">
        <div className="grid-item">
          <WorkText>
            <Heading>{title}</Heading>
            <About>{about}</About>
            <Description>{description}</Description>
            <a href={url}>
              <span>Visit the website</span>
              <ArrowRight />
            </a>
          </WorkText>
        </div>
        <div className="grid-item">
          <Image>
            <img src={image} />
          </Image>
        </div>
      </Grid>
    </Container>
  </WorkItem>
)
