import { createGlobalStyle } from 'styled-components'
import breakpoint from "./mixins"
// import colors from "./colors"

import FuturaMediumWOFF from "../fonts/futurabt-medium-webfont.woff"
import FuturaMediumWOFF2 from "../fonts/futurabt-medium-webfont.woff2"
import FuturaBoldWOFF2 from "../fonts/futuralt-bold-webfont.woff2"

const GlobalStyle = createGlobalStyle`

  @font-face {
      font-family: "futura";
      src:
        url("${ FuturaMediumWOFF2 }") format('Woff2'),
        url("${ FuturaMediumWOFF }") format('Woff');
      font-weight: 500;
      font-display: swap;
    }

  @font-face {
    font-family: "futura";
    src:
      url("${ FuturaBoldWOFF2}") format('Woff2');
    font-weight: 700;
    font-display: swap;
  }

  *,
  *::before {
    box-sizing: border-box;
  }

  html {
    position: relative;
    font-family: "futura" -apple-system, system-ui, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif;
    -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  }


  body {
    font: inherit;
    line-height: inherit;
    margin: 0;
    position: relative;

    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
      font-weight: 700;
      font-family: "futura";
      line-height: 1em;
    }

    h1 {
      font-size: 48px;
      font-weight: 900;

      ${breakpoint.small`
        font-size: 71px;
      `}

      ${breakpoint.large`
        font-size: 106px;
      `}
    }

    h2 {
      font-size: 48px;

      ${breakpoint.small`
        font-size: 71px;
      `}
    }

    h3 {
      font-size: 32px;

      ${breakpoint.small`
        font-size: 48px;
      `}
    }

    a {
      display: inline-block;
      color: inherit;
      font-family: "futura";
    }

    p {
      font-family: "futura";
    }

    .visuallyHidden {
      border: 0;
      clip: rect(0 0 0 0);
      height: 1px;
      margin: -1px;
      overflow: hidden;
      padding: 0;
      position: absolute;
      width: 1px;
    }

    button {
      background: none;
      border: 0 none;
      cursor: pointer;

      &:focus {
        outline: 0 none;
      }
    }
  }
`

export default GlobalStyle
