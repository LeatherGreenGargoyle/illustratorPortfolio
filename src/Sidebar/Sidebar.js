import React from 'react'
import { Link } from 'react-router-dom'
import './Sidebar.css'
import { STRING_HOME, STRING_ABOUT, STRING_PORTFOLIO, CLASS_CONTAINER, CLASS_SELECTED, ROUTE_PORTFOLIO, ROUTE_HOME, ROUTE_ABOUT, CLASS_LINK, STRING_ILLUSTRATIONS, ROUTE_ILLUSTRATIONS, STRING_COMICS } from './constants.Sidebar'

class Sidebar extends React.Component {
  constructor() {
    super()
    this.state = {
      currentPage: STRING_HOME,
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
      <div className={CLASS_CONTAINER}>

        <div
          className={this.state.currentPage === STRING_HOME ? CLASS_SELECTED : CLASS_LINK}
        >
          <Link
            to={ROUTE_HOME}
            onClick={() => this.handleRouteClick(STRING_HOME)}
            onMouseEnter={() => this.onMouseEnter(STRING_HOME)}
            onMouseLeave={this.onMouseLeave}
          >
            Home
          </Link>
        </div>

        <div
          className={this.state.currentPage === STRING_ABOUT ? CLASS_SELECTED : CLASS_LINK}
        >
          <Link
            to={ROUTE_ABOUT}
            onClick={() => this.handleRouteClick(STRING_ABOUT)}
            onMouseEnter={() => this.onMouseEnter(STRING_ABOUT)}
            onMouseLeave={this.onMouseLeave}
          >
            About
          </Link>
        </div>

        <div
          className={this.state.currentPage === STRING_ILLUSTRATIONS ? CLASS_SELECTED : CLASS_LINK}
        >
          <Link
            to={ROUTE_PORTFOLIO}
            onClick={() => {
              this.handleRouteClick(STRING_ILLUSTRATIONS)
              onSelectIllustrations()
            }}
            onMouseEnter={() => this.onMouseEnter(STRING_ILLUSTRATIONS)}
            onMouseLeave={this.onMouseLeave}
          >
            Illustrations
          </Link>
        </div>

        <div
          className={this.state.currentPage === STRING_COMICS ? CLASS_SELECTED : CLASS_LINK}
        >
          <Link
            to={ROUTE_PORTFOLIO}
            onClick={() => {
              this.handleRouteClick(STRING_COMICS)
              onSelectComics()
            }}
            onMouseEnter={() => this.onMouseEnter(STRING_COMICS)}
            onMouseLeave={this.onMouseLeave}
          >
            Comics
          </Link>
        </div>

      </div>
    )
  }
}

export default Sidebar
