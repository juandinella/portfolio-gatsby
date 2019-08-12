import { css } from "styled-components"

const breakpoints = {
  xs: 20,
  small: 30,
  medium: 64,
  large: 86,
  extraLarge: 121
}

// Iterate through the breakpoints and create a media template
const breakpoint = Object.keys(breakpoints).reduce((acc, label) => {
  acc[label] = (...args) => css`
    @media (min-width: ${breakpoints[label]}em) {
      ${css(...args)}
    }
  `

  return acc
}, {})

export default breakpoint
