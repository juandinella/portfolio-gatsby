import React from "react"
import "../assets/styles/reset.css"
import GlobalStyle from "../assets/styles/styles"

class Layout extends React.Component {

  render = props => (
    <div>
      <GlobalStyle />
      {this.props.children}
    </div>
  )
}

export default Layout

