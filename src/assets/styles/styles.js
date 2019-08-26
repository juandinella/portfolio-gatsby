import { createGlobalStyle } from 'styled-components'
import breakpoint from "./mixins"


const GlobalStyle = createGlobalStyle`

  *,
  *::before {
    box-sizing: border-box;
  }

  html {
    position: relative;
    font-family: -apple-system, system-ui, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;

    &.wf-active {
      font-family: "futura";

      h1 {
        font-weight: 700;
        letter-spacing: 0;
        font-family: "futura"
      }

      p {
        line-height: 1.5;
        font-weight: 500;
        font-family: "futura";
      }
    }
  }


  body {
    font: inherit;
    line-height: inherit;
    margin: 0;
    position: relative;

    &.magic {

      h1 {
        color: #ce4841;
      }

      h2 {
        color: #74c0c0;
      }

      .work--img,
      .pixel-block {
        img {
          filter: none;
          -webkit-filter: grayscale(0);
        }
      }

      .hero {
        ul {
          .tw a svg {stroke: #00aced;}
          .fb a svg {stroke: #3B5998;}
          .ig a svg {stroke: #8a49a1;}
          .in a svg {stroke: #4875B4;}
          .gh a svg {stroke: #333333;}
        }
      }
    }

    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
      font-weight: 700;
      line-height: 1em;
    }

    h1 {
      font-size: 48px;
      font-weight: 800;
      letter-spacing: 4px;

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
    }

    p {
      line-height: 1.6;
      font-weight: 600;
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
