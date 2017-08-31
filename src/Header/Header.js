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
    return (
      <div className="headerContainer">
        <span className="headerTitle">Jennifer Nguyen</span>
        <span>
          <span className={this.state.currentPage === 'Home' ? 'headerSelectedLink' : 'headerLink'}>
            <Link to="/" onClick={() => this.handleRouteClick('Home')}>
              Home
            </Link></span>
          <span className={this.state.currentPage === 'About' ? 'headerSelectedLink' : 'headerLink'}>
            <Link to="/about" onClick={() => this.handleRouteClick('About')}>
              About
            </Link></span>
          {/* <span style={linkStyles}><Link to="/productstore" onClick={() => this.handleRouteClick('Store')}>Store</Link></span> */}
          <span className={this.state.currentPage === 'Portfolio' ? 'headerSelectedLink' : 'headerLink'}>
            <Link to="/portfolio" onClick={() => this.handleRouteClick('Portfolio')}>
              Portfolio
            </Link>
          </span>
        </span>
      </div>
    )
  }
}

export default Header
