import styled from "styled-components"
import breakpoint from "../../assets/styles/mixins"

const Grid = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin: 0 auto;

  .grid-item {
    width: 100%;
    margin-bottom: ${props => props.gutter}px;

    &:last-child {
      margin-bottom: 0;
    }

    ${breakpoint.small`
      width: calc((100% - ${props => props.gutter}px) / 2);

      &:nth-last-child(-n + 2) {
        margin-bottom: 0;
      }
    `}

    ${breakpoint.large`
      width: calc((100% - (${props => props.gutter}px * (${props =>
      props.columns} - 1))) / ${props => props.columns});

      &:nth-last-child(-n + ${props => props.columns}) {
        margin-bottom: 0;
      }
    `}
  }
`

export default Grid
