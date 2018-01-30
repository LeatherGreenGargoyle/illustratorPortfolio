import React from 'react'
import { Link } from 'react-router-dom'
import { Row } from 'react-bootstrap'
import './Sidebar.css'

class Sidebar extends React.Component {
  constructor() {
    super()
    this.state = {
      currentPage: 'Home',
      linkUnderHover: '',
    }

    this.handleRouteClick = this.handleRouteClick.bind(this)
    this.onMouseEnter = this.onMouseEnter.bind(this)
    this.onMouseLeave = this.onMouseLeave.bind(this)
  }

  onMouseEnter(linkName) {
    this.setState({
      linkUnderHover: linkName,
    })
  }

  onMouseLeave() {
    this.setState({
      linkUnderHover: '',
    })
  }

  handleRouteClick(newRoute) {
    this.setState({
      currentPage: newRoute,
    })
  }

  render() {
    const { onSelectIllustrations, onSelectComics } = this.props
    return (
      <div className="containerSidebar">

        <Row className="sidebarLink">
          <span
            className={this.state.currentPage === 'Home' ? 'sidebarSelectedLink' : 'sidebarLink'}
          >
            <Link
              to="/"
              onClick={() => this.handleRouteClick('Home')}
              onMouseEnter={() => this.onMouseEnter('Home')}
              onMouseLeave={this.onMouseLeave}
            >
              Home
            </Link>
          </span>
        </Row>

        <Row className="sidebarLink">
          <span
            className={this.state.currentPage === 'Illustrations' ? 'sidebarSelectedLink' : 'sidebarLink'}
          >
            <Link
              to="/portfolio"
              onClick={() => {
                this.handleRouteClick('Illustrations')
                onSelectIllustrations()
              }}
              onMouseEnter={() => this.onMouseEnter('Illustrations')}
              onMouseLeave={this.onMouseLeave}
            >
              Illustrations
            </Link>
          </span>
        </Row>

        <Row className="sidebarLink">
          <span
            className={this.state.currentPage === 'Comics' ? 'sidebarSelectedLink' : 'sidebarLink'}
          >
            <Link
              to={'/portfolio'}
              onClick={() => {
                this.handleRouteClick('Comics')
                onSelectComics()
              }}
              onMouseEnter={() => this.onMouseEnter('Comics')}
              onMouseLeave={this.onMouseLeave}
            >
              Comics
            </Link>
          </span>
        </Row>

        <Row className="sidebarLink">
          <span
            className={this.state.currentPage === 'About' ? 'sidebarSelectedLink' : 'sidebarLink'}
          >
            <Link
              to="/about"
              onClick={() => this.handleRouteClick('About')}
              onMouseEnter={() => this.onMouseEnter('About')}
              onMouseLeave={this.onMouseLeave}
            >
              About
            </Link>
          </span>
        </Row>
      </div>
    )
  }
}

export default Sidebar
