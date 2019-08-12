import React from "react"
import styled from "styled-components"

const Container = styled.div`
  margin: 0 auto;
  max-width: 1600px;
  width: 100%;

  .container-fluid {
    margin: 0 auto;
    max-width: 100%;

    [class*="col-"] {
      padding: 0;
    }
  }
`

export default ({ className, children }) => (
  <Container className={className}>{children}</Container>
)
