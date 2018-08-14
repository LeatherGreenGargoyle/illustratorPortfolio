import React from 'react'
import { Link } from 'react-router-dom'
import { Row } from 'react-bootstrap'
import './Sidebar.css'
import { ImageSets } from '../Constants'
import { PageNames, routes } from '../Constants';

class Sidebar extends React.Component {
  constructor() {
    super()
    this.state = {
      currentPage: PageNames.home,
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
    const linkRoute = pageName === PageNames.home ? routes.home : routes[pageName.toLowerCase()]

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

        {this.SidebarLink(PageNames.home, null)}

        {this.SidebarLink(PageNames.illustrations, () => onSelectPortfolioImageset(ImageSets.illustrations))}

        {this.SidebarLink(PageNames.comics, () => onSelectPortfolioImageset(ImageSets.comics))}

        {this.SidebarLink(PageNames.store, null)}

        {this.SidebarLink(PageNames.about, null)}

      </div>
    )
  }
}

export default Sidebar
