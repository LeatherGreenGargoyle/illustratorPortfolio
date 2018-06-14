import React from 'react'
import { Link } from 'react-router-dom'
import { Row } from 'react-bootstrap'
import './Sidebar.css'
import { ImageSets } from '../Constants'
import { pageNames, routes } from '../Constants';

class Sidebar extends React.Component {
  constructor() {
    super()
    this.state = {
      currentPage: pageNames.home,
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

  SidebarLink(pageName, additionalOnClick) {
    const linkRoute = pageName === pageNames.home ? routes.home : routes[pageName.toLowerCase()]

    return (
      <Row className="sidebarLink">
        <span
          className={this.state.currentPage === pageName ? 'sidebarSelectedLink' : 'sidebarLink'}
        >
          <Link
            to={linkRoute}
            onClick={() => {
              this.handleRouteClick(pageName)
              if (additionalOnClick) additionalOnClick()
            }}
            onMouseEnter={() => this.onMouseEnter(pageName)}
            onMouseLeave={this.onMouseLeave}
          >
            {pageName}
          </Link>
        </span>
      </Row>
    )
  }

  render() {
    const { onSelectPortfolioImageset } = this.props
    return (
      <div className="containerSidebar">

        {this.SidebarLink(pageNames.home, null)}

        {this.SidebarLink(pageNames.illustrations, () => onSelectPortfolioImageset(ImageSets.illustrations))}

        {this.SidebarLink(pageNames.comics, () => onSelectPortfolioImageset(ImageSets.comics))}

        {this.SidebarLink(pageNames.about, null)}

      </div>
    )
  }
}

export default Sidebar
