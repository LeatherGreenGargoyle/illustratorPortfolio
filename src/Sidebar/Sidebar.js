import React from 'react'
import { Link } from 'react-router-dom'
import './Sidebar.css'
import { ImageSets, PageNames, routes, ProductCategories } from '../Constants';
import { Submenu, SubmenuItem } from '../UI/Submenu/Submenu.js'

class Sidebar extends React.Component {
  constructor() {
    super()
    this.state = {
      currentPage: PageNames.home,
      linkUnderHover: '',
      store_show_submenu: false,
      illustrations_show_submenu: false,
      comics_show_submenu: false
    }
    this.linksWithSubmenus = [PageNames.store, PageNames.illustrations, PageNames.comics]
    // this.linksWithSubmenus.forEach(linkName => {
    //   const linkPropertyName = `${linkName}_show_submenu`
    //   this.state[linkPropertyName] = false
    // })

    this.getSubmenuItemsFor = this.getSubmenuItemsFor.bind(this)
    this.onRouteClick = this.onRouteClick.bind(this)
    this.onMouseEnterRouteLink = this.onMouseEnterRouteLink.bind(this)
    this.onMouseLeaveRouteLink = this.onMouseLeaveRouteLink.bind(this)
    this.onMouseLeaveLinkWithSubmenu = this.onMouseLeaveLinkWithSubmenu.bind(this)
    this.onMouseEnterLinkWithSubmenu = this.onMouseEnterLinkWithSubmenu.bind(this)
  }

  getSubmenuItemsFor(pageName) {
    const routeName = routes[pageName.toLowerCase()]
    const { onSelectStoreCategory, onSelectImageSetYear, onSelectPortfolioImageset } = this.props

    if (pageName === PageNames.store) {
      const productCategories = Object.keys(ProductCategories)
      const getProductItemClickHandler = (category) => {
        return () => {
          this.onRouteClick(pageName)
          onSelectStoreCategory(ProductCategories[category])
        }
      }
      const productItems = productCategories.map(category => {
        return SubmenuItem(
          ProductCategories[category],
          routeName,
          getProductItemClickHandler(category))
      })

      return productItems
    } else if (pageName === PageNames.illustrations || pageName === PageNames.comics) {
      const years = pageName === PageNames.illustrations ? [2017, 2018] : [2016, 2017]
      const imageSetToSelect = pageName === PageNames.illustrations ? ImageSets.illustrations : ImageSets.comics
      const getYearItemClickHandler = (year) => {
        return () => {
          this.onRouteClick(pageName)
          onSelectImageSetYear(year)
          onSelectPortfolioImageset(imageSetToSelect)
        }
      }
      const yearItems = years.map(year => {
        return SubmenuItem(
          year,
          routeName,
          getYearItemClickHandler(year))
      })
      return yearItems
    }
  }

  onRouteClick(newRoute) {
    this.setState({
      currentPage: newRoute,
    })
  }

  onMouseEnterRouteLink(pageName) {
    this.setState({
      linkUnderHover: pageName,
    })
    if (this.linksWithSubmenus.includes(pageName)){
      this.onMouseEnterLinkWithSubmenu(pageName)
    }
  }
  onMouseEnterLinkWithSubmenu(pageName) {
    const showSubmenuPropertyName = `${pageName}_show_submenu`
    let newState = {}
    newState[showSubmenuPropertyName] = true
    this.setState(newState)
  }
  onMouseLeaveRouteLink(pageName) {
    if (this.linksWithSubmenus.includes(pageName)) {
      this.onMouseLeaveLinkWithSubmenu(pageName)
    }
    this.setState({
      linkUnderHover: '',
    })
  }
  onMouseLeaveLinkWithSubmenu(pageName){
    const showSubmenuPropertyName = `${pageName}_show_submenu`
    let newState = {}
    newState[showSubmenuPropertyName] = false
    this.setState(newState)
  }

  LinkElement(pageName, linkRoute, onClick) {
    return (
      <Link
        to={linkRoute}
        onClick={() => {
          this.onRouteClick(pageName)
          if (onClick) { onClick() }
        }}
      >
        {pageName}
      </Link>
    )
  }

  SidebarLink(pageName, additionalOnClick) {
    const linkRoute = pageName === PageNames.home ? routes.home : routes[pageName.toLowerCase()]

    return (
      <div className="sidebarLink"
      onMouseEnter={() => this.onMouseEnterRouteLink(pageName)}
      onMouseLeave={() => this.onMouseLeaveRouteLink(pageName)}>
        <div
          className={this.state.currentPage === pageName ? 'sidebarSelectedLink' : 'sidebarLink'}
        >
        { this.linksWithSubmenus.includes(pageName) ? `${pageName}` : this.LinkElement(pageName, linkRoute, additionalOnClick)}
        </div>
        {this.Submenu(pageName)}
      </div>
    )
  }

  Submenu(pageName) {
    if (!this.linksWithSubmenus.includes(pageName)) return

    const submenuItems = this.getSubmenuItemsFor(pageName)
    const statePropertyName = `${pageName}_show_submenu`
    return <div style={{ display: this.state[statePropertyName] ? 'inline' : 'none' }} >
      { Submenu(submenuItems) }
    </div>
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

        {this.SidebarLink(PageNames.events, null)}

      </div>
    )
  }
}

export default Sidebar
