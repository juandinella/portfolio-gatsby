import styled from "styled-components"

export const CanvasStyled = styled.canvas`
  display: none;
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  z-index: 1;
  width: 100%;

  &.is-visible {
    display: block;
  }
`;
