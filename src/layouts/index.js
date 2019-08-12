import React from "react"
import "../assets/styles/reset.css"
import GlobalStyle from "../assets/styles/styles"

class Layout extends React.Component {
  render = props => (
    <main>
      <GlobalStyle />
      {this.props.children}
    </main>
  )
}

export default Layout

