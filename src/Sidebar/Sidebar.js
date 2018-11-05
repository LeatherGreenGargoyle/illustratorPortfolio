import React from 'react'
import { Link } from 'react-router-dom'
import { Row } from 'react-bootstrap'
import './Sidebar.css'
import { ImageSets } from '../Constants'
import { PageNames, routes } from '../Constants';
import { Submenu, SubmenuItem } from '../UI/Submenu/Submenu.js'

class Sidebar extends React.Component {
  constructor() {
    super()
    this.state = {
      currentPage: PageNames.home,
      linkUnderHover: '',
      showStoreSubmenu: false, // TODO: flexibility
    }

    this.handleRouteClick = this.handleRouteClick.bind(this)
    this.onMouseEnterRouteLink = this.onMouseEnterRouteLink.bind(this)
    this.handleOnMouseLeaveRouteLink = this.handleOnMouseLeaveRouteLink.bind(this)

    this.onMouseEnterStoreLink = this.onMouseEnterStoreLink.bind(this)
    this.onMouseLeaveStoreLink = this.onMouseLeaveStoreLink.bind(this)
  }

  onMouseEnterStoreLink() {
    this.setState({
      showStoreSubmenu: true
    })
  }
  onMouseLeaveStoreLink() {
    this.setState({
      showStoreSubmenu: false
    })
  }

  onMouseEnterRouteLink(linkName) {
    this.setState({
      linkUnderHover: linkName,
    })
  }
  handleOnMouseLeaveRouteLink(pageName) {
    if (pageName === PageNames.store) {
      this.onMouseLeaveStoreLink()
    }
    this.setState({
      linkUnderHover: '',
    })
  }

  handleRouteClick(newRoute) {
    this.setState({
      currentPage: newRoute,
    })
  }
  // TODO: flexibility
  handleOnMouseEnterRouteLink(pageName) {
    this.onMouseEnterRouteLink(pageName)
    if (pageName === PageNames.store) {
      this.onMouseEnterStoreLink()
    }
  }

  SidebarLink(pageName, additionalOnClick) {
    const linkRoute = pageName === PageNames.home ? routes.home : routes[pageName.toLowerCase()]

    return (
      <Row className="sidebarLink"
      onMouseEnter={() => this.handleOnMouseEnterRouteLink(pageName)}
      onMouseLeave={() => this.handleOnMouseLeaveRouteLink(pageName)}>
        <span
          className={this.state.currentPage === pageName ? 'sidebarSelectedLink' : 'sidebarLink'}
        >
          <Link
            to={linkRoute}
            onClick={() => {
              this.handleRouteClick(pageName)
              if (additionalOnClick) additionalOnClick()
            }}
          >
            {pageName}
          </Link>
        </span>
        {this.submenuFor(pageName)}
      </Row>
    )
  }

  submenuFor(pageName) {
    if (pageName != PageNames.store) return
    let storeSubmenuItems = [
      SubmenuItem('Prints', () => console.log('PRINTS')),
      SubmenuItem('Pins', () => console.log('PINS')),
      SubmenuItem('Originals', () => console.log('ORIGINALS'))
    ]
    return <span style={{ display: this.state.showStoreSubmenu ? 'inline' : 'none' }} >
      { Submenu(storeSubmenuItems) }
    </span>
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
