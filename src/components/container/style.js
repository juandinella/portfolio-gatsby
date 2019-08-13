import styled from "styled-components"

export const Container = styled.div`
  margin: 0 auto;
  max-width: 1580px;
  width: 100%;
  padding: 0 30px;

  .container-fluid {
    margin: 0 auto;
    max-width: 100%;

    [class*="col-"] {
      padding: 0;
    }
  }
`;
