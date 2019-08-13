import styled from "styled-components"
import breakpoint from "../../assets/styles/mixins"

export const StyledHero = styled.section`
  height: auto;
  display: flex;
  align-items: center;
  padding: 30px 0;
  position: relative;

  ${breakpoint.medium`
    height: 100vh;
    padding: 0;
  `}
`;

export const Heading = styled.h1`
  font-size: 52px;
  margin-bottom: 14px;
  line-height: 1;
  font-weight: 700;

  ${breakpoint.small`
    font-size: 60px;
  `}

  ${breakpoint.medium`
    font-size: 100px;
  `}
`;

export const HeroContent = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  align-items: center;
  padding: 30px 0;

  ${breakpoint.medium`
    height: 100%;
    padding: 0;
  `}
`

export const Paragraph = styled.p`
  font-size: 16px;
  margin-bottom: 20px;
  line-height: 1.5;
  font-weight: 500;

    ${breakpoint.medium`
      font-size: 18px;
      margin-bottom: 28px;
  `}
`;

export const Container = styled.div`
  max-width: 100%;
  margin: 0 auto;
  padding: 0 20px;
  margin-top: -10px;
  z-index: 2;
  position: relative;
  background-color: rgba(white, 0.5);
  box-shadow: 1px 2px 3px rgba(white,.5);

    ${breakpoint.medium`
      padding: 0 30px;
      max-width: 706px;
  `}
`;

export const ContactBTN = styled.a`
  margin-top: 30px;
  text-decoration: none;
  border: 2px solid black;
  color: white;
  background-color: black;
  display: table;
  padding: 12px 70px;
  transition: all 0.225s ease;
  font-size: 18px;
  text-align: center;
  width: 100%;

  &:hover {
    color: black;
    background-color: white;
  }

  ${breakpoint.small`
    width: auto;
  `}
`;

export const SocialList = styled.ul`
  li {
    display: inline-block;
    margin-right: 25px;

    svg {
      transition: all .225s ease;
    }
  }
  .tw {
    &:hover {
      a svg {
        stroke: #00aced;
      }
    }
  }

  .fb {
    &:hover {
      a svg {
        stroke: #3B5998;
      }
    }
  }

  .ig {
    &:hover {
      a svg {
        stroke: #8a49a1;
      }
    }
  }

  .in {
    &:hover {
      a svg {
        stroke: #4875B4;
      }
    }
  }


  .gh {
    &:hover {
      a svg path{
        stroke: #333333;
      }
    }
  }
`;

export const ScrollDown = styled.button`
  position: absolute;
  bottom: 1%;
  left: 0;
  right: 0;
  margin: 0 auto;
  display: none;
  width: 36px;
  padding: 0;
  text-align: center;
  z-index: 1;

  ${breakpoint.medium`
    display: block;
  `}
`;
