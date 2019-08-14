import React from "react"
import { Link } from "react-scroll";
import { FooterStyled } from './style';

export default () => (
  <FooterStyled aria-label='Footer'>
    <Link id='magic' to='hero' smooth={true}>
      <h4>Can someone turn <span id="magic-text" data-text-swap="off">on</span> the lights ?</h4>
    </Link>
  </FooterStyled>
)
