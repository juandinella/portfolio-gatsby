import { createGlobalStyle } from 'styled-components'
import breakpoint from "./mixins"
import colors from "./colors"

const GlobalStyle = createGlobalStyle`
  body {
    font-family: -apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif;
    font-size: 21px;
    font-weight: 500;
    line-height: 1.5em;
    overflow-x: hidden;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;

    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
      font-weight: 900;
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
      text-decoration: none;

      &.rollout {
        position: relative;
        transition: all .3s;

        &::before {
          content: '';
          position: absolute;
          height: 2px;
          bottom: 0;
          left: 0;
          right: 0;
          background-color: ${ colors.cyan};
          transform-origin: bottom left;
          transform: scaleX(1);
          transition: transform 0.3s ease-in-out;
        }

        &:hover {
          color: ${ colors.cyan};

          &::before {
            transform: scaleX(0);
            transform-origin: bottom left;
          }
        }
      }
    }
  }
`

export default GlobalStyle
