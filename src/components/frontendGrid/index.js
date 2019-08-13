import styled from "styled-components"
import breakpoint from "../../assets/styles/mixins"

const FrontendGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(328px, 1fr));
  grid-column-gap: 0;
  grid-row-gap: 0;

   ${breakpoint.medium`
      grid-template-columns: 1fr 1fr 1fr 1fr;
  `}
`

export default FrontendGrid
