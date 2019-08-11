import { css } from "styled-components"

const breakpoints = {
  small: 768,
  medium: 1024,
  large: 1200,
  extraLarge: 1440,
  huge: 1680
}

// Iterate through the breakpoints and create a media template
const breakpoint = Object.keys(breakpoints).reduce((acc, label) => {
  acc[label] = (...args) => css`
    @media (min-width: ${breakpoints[label]}px) {
      ${css(...args)}
    }
  `

  return acc
}, {})

export default breakpoint
