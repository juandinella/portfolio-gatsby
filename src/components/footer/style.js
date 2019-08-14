import styled from "styled-components"
import breakpoint from "../../assets/styles/mixins"

export const FooterStyled = styled.footer`
  text-align: center;
  padding: 50px 0;
  border-top: 2px solid black;

  #magic {
    cursor: pointer;
    display: inline-block;
    position: relative;
    z-index: 2;
    transition: all 0.225s ease;

    &:hover {
      color: #ce4841;
    }

    h4 {
      font-size: 18px;

      ${breakpoint.small`
        font-size: 20px;
      `}
    }
  }
`;


