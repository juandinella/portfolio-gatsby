import React from "react"
import { Link } from "react-scroll";
import { FooterStyled } from './style';

class Footer extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isToggleOn: true };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(state => ({
      isToggleOn: !state.isToggleOn
    }));
    const toggle = document.getElementById('magic');
    const canvas = document.getElementById('canvas');

    toggle.addEventListener('click', () => {
      canvas.classList.toggle('is-visibe')
    })

  }
  render = () => (
    <FooterStyled aria-label='Footer'>
      <Link id='magic' to='hero' smooth={true} onClick={this.handleClick}>
        <h4>Can someone turn <span>{this.state.isToggleOn ? 'on' : 'off'}</span> the lights ?</h4>
      </Link>
    </FooterStyled>
  )
}


export default Footer
