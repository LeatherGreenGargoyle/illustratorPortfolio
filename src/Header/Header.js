import React from 'react'
import { Link } from 'react-router-dom'
import './Header.css'

class Header extends React.Component {
  constructor() {
    super()
    this.state = {
      currentPage: 'Home',
    }

    this.handleRouteClick = this.handleRouteClick.bind(this)
  }

  handleRouteClick(newRoute) {
    this.setState({
      currentPage: newRoute,
    })
  }

  render() {
    const currentPageStyles = {
      'marginRight': '4em',
      'fontSize': '4em',
    }

    const linkStyles = {
      'fontSize': '1em',
      'margin': '1.3em',
    }

    const headerStyles = {
      'marginBottom': '.3em',
    }

    return (
      <div style={headerStyles}>
        <span style={currentPageStyles}>{this.state.currentPage}</span>
        <span>
          <span style={linkStyles}><Link to="/" onClick={() => this.handleRouteClick('Home')}>Home</Link></span>
          <span style={linkStyles}><Link to="/about" onClick={() => this.handleRouteClick('About')}>About</Link></span>
          <span style={linkStyles}><Link to="/productstore" onClick={() => this.handleRouteClick('Store')}>Store</Link></span>
          <span style={linkStyles}><Link to="/portfolio" onClick={() => this.handleRouteClick('Portfolio')}>Portfolio</Link></span>
        </span>
      </div>
    )
  }
}

export default Header
