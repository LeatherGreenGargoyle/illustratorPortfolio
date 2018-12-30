import React from 'react'
import { Link } from 'react-router-dom'
import './Sidebar.css'
import { ImageSets, PageNames, routes, ProductCategories } from '../Constants';
import { Submenu, SubmenuItem } from '../UI/Submenu/Submenu.js'
import { Transition } from 'react-spring'

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
    this.onMouseEnterItem = this.onMouseEnterItem.bind(this)
    this.onMouseLeaveItem = this.onMouseLeaveItem.bind(this)
    this.onMouseLeaveItemWithSubmenu = this.onMouseLeaveItemWithSubmenu.bind(this)
    this.onMouseEnterItemWithSubmenu = this.onMouseEnterItemWithSubmenu.bind(this)
    this.onSidebarItemClick = this.onSidebarItemClick.bind(this)
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

  onMouseEnterItem(pageName) {
    this.setState({
      linkUnderHover: pageName,
    })
    if (this.linksWithSubmenus.includes(pageName)){
      this.onMouseEnterItemWithSubmenu(pageName)
    }
  }
  onMouseEnterItemWithSubmenu(pageName) {
    const showSubmenuPropertyName = `${pageName}_show_submenu`
    let newState = {}
    newState[showSubmenuPropertyName] = true
    this.setState(newState)
  }
  onMouseLeaveItem(pageName) {
    if (this.linksWithSubmenus.includes(pageName)) {
      this.onMouseLeaveItemWithSubmenu(pageName)
    }
    this.setState({
      linkUnderHover: '',
    })
  }
  onMouseLeaveItemWithSubmenu(pageName){
    const showSubmenuPropertyName = `${pageName}_show_submenu`
    let newState = {}
    newState[showSubmenuPropertyName] = false
    this.setState(newState)
  }

  onSidebarItemClick(pageName) {
    const isMobileBrowser = /Mobi|Tablet|Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)
    if (isMobileBrowser) { this.onMouseEnterItem(pageName) }
  }

  LinkElement(pageName, linkRoute) {
    return (
      <Link
        to={linkRoute}
        onClick={() => {
          this.onRouteClick(pageName)
        }}
      >
        {pageName}
      </Link>
    )
  }

  SidebarItem(pageName, additionalOnClick) {
    const linkRoute = pageName === PageNames.home ? routes.home : routes[pageName.toLowerCase()]

    return (
      <div className="sidebarLink"
      onMouseEnter={() => this.onMouseEnterItem(pageName)}
      onMouseLeave={() => this.onMouseLeaveItem(pageName)}
      onClick={() => this.onSidebarItemClick(pageName)}>
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
    return (
      <Transition
      items={this.state[statePropertyName]}
      from={{ display: 'none' }}
      enter={{ display: 'inline', background: '#28d79f' }}
      leave={{ display: 'none', background: '#c23369' }}>
        { shouldShowSubmenu =>
          shouldShowSubmenu && (props => <div style={props} > { Submenu(submenuItems) } </div>)
        }
      </Transition>
    )
  }

  render() {
    const { onSelectPortfolioImageset } = this.props
    return (
      <div className="containerSidebar">

        {this.SidebarItem(PageNames.home, null)}

        {this.SidebarItem(PageNames.illustrations, () => onSelectPortfolioImageset(ImageSets.illustrations))}

        {this.SidebarItem(PageNames.comics, () => onSelectPortfolioImageset(ImageSets.comics))}

        {this.SidebarItem(PageNames.store, null)}

        {this.SidebarItem(PageNames.about, null)}

        {this.SidebarItem(PageNames.events, null)}

      </div>
    )
  }
}

export default Sidebar
