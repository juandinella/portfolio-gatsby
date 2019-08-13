import React from "react"
import styled from "styled-components"
import breakpoint from "../../assets/styles/mixins"

const FrontendItem = styled.div `
  border: 2px solid white;
  height: 320px;

  ${breakpoint.small`
    height: auto;
  `}

  &:hover {
    figcaption {
      opacity: 1;
      visibility: visible;
    }
  }

  figure {
    position: relative;
    margin: 0;
    height: 320px;

    ${breakpoint.small`
      height: auto;
  `}
  }
  img {
    filter: gray;
    -webkit-filter: grayscale(1);
    position: relative;
    display: block;
    min-height: 100%;
    max-width: 100%;
    object-fit: cover;

    ${breakpoint.small`
      min-width: 270px;
    `}

    ${breakpoint.medium`
      min-width: 250px;
    `}

    ${breakpoint.large`
      min-width: 340px;
    `}

    ${breakpoint.extraLarge`
      min-width: 480px;
    `}
  }

  figcaption {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: 0;
    background-color: black;
    visibility: hidden;
    transition: all 0.225s ease;
    color: $white;
    padding-top: 25px;
    padding-left: 10px;
    padding-right: 10px;
    text-align: center;

    ${breakpoint.small`
      padding-top: 50px;
    `}
  }

  h3 {
    font-weight: 700;
    font-size: 30px;
    color: white;

    ${breakpoint.large`
      font-size: 42px
    `}

    ${breakpoint.extraLarge`
      padding-top: 60px;
    `}
  }

  ul {
    text-align: left;
    margin-top: 15px;
    margin-left: 50px;

    li {
      font-size: 18px;
      line-height: 1.5;
      color: white;

      ${breakpoint.extraLarge`
        font-size: 22px;
      `}
    }
  }

  span {
    color: white;
    text-decoration: underline;
    font-size: 26px;
    position: absolute;
    bottom: 25px;
    left: 0;
    right: 0;

    ${breakpoint.small`
      bottom: 60px;
    `}

    ${breakpoint.medium`
      font-size: 32px;
    `}
  }
`

export default ({ url, image, title, hashtags }) => (
  <FrontendItem>
    <a href={url}>
      <figure>
        <img src={image} alt={title + "'s screenshot"}></img>
        <figcaption>
          <h3>{title}</h3>
          <ul>{hashtags.map((item) => <li>{item}</li>)}</ul>
          <span>View site</span>
        </figcaption>
      </figure>
    </a>
  </FrontendItem>
)
