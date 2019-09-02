import React, { useState } from "react"
import { Link } from "react-scroll";
import { FooterStyled } from './style';

export default function Footer(props) {
  const [toggleState, setToggleState] = useState('on');

  function toggle() {
    setToggleState(toggleState === 'on' ? 'off' : 'on');
  }

  return (
    <FooterStyled aria-label='Footer'>
      <Link id='magic' to='hero' smooth={true} onClick={toggle}>
        <h4>Can someone turn <span>{toggleState}</span> the lights ?</h4>
      </Link>
    </FooterStyled>
  )
}
