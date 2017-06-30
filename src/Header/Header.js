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
    const headerStyles = {
      'float': 'left',
      'marginLeft': '10em',
      'fontSize': '4em',
    }

    const navLinkStyles = {
      'fontSize': '1.5em',
    }

    return (
      <div>
      <header>
        <span style={headerStyles}>{this.state.currentPage}</span>
        <span style={navLinkStyles}>
          <Link to="/" onClick={() => this.handleRouteClick('Home')}>Home</Link>
          <Link to="/about" onClick={() => this.handleRouteClick('About')}>About</Link>
          <Link to="/productstore" onClick={() => this.handleRouteClick('Store')}>Store</Link>
          <Link to="/portfolio" onClick={() => this.handleRouteClick('Portfolio')}>Portfolio</Link>
        </span>
      </header>
      </div>
    )
  }
}

export default Header
