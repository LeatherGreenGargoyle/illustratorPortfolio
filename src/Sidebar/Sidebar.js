import React from 'react'
import { Link } from 'react-router-dom'
import './Sidebar.css'
import { ImageSets, PageNames, routes, ProductCategories, Submenus } from '../Constants';
import { Submenu, SubmenuItem } from '../UI/Submenu/Submenu.js'
import { Spring } from 'react-spring'
import { getSubmenuItemTag } from '../Utils'

class Sidebar extends React.Component {
  constructor(props) {
    super()
    this.state = {
      currentPage: PageNames.home,
      currentOpenSubmenu: props.currentOpenSubmenu
    }

    this.getSubmenuItemsFor = this.getSubmenuItemsFor.bind(this)
    this.onRouteClick = this.onRouteClick.bind(this)
    this.onSidebarItemClick = this.onSidebarItemClick.bind(this)
  }

  componentWillReceiveProps(nextProps) {
    this.setState({ currentOpenSubmenu : nextProps.currentOpenSubmenu })
  }

  getSubmenuItemsFor(pageName) {
    const routeName = routes[pageName.toLowerCase()]
    const {
      onSelectStoreCategory,
      onSelectImageSetYear,
      onSelectPortfolioImageset,
      onSelectSubmenuItem
    } = this.props

    if (pageName === PageNames.store) {
      const productCategories = Object.keys(ProductCategories)
      const getProductItemClickHandler = (category) => {
        return () => {
          this.onRouteClick(pageName)
          onSelectStoreCategory(ProductCategories[category])
          onSelectSubmenuItem(getSubmenuItemTag(pageName, category))
        }
      }
      const productItems = productCategories.map(category => {
        return SubmenuItem(
          ProductCategories[category],
          routeName,
          getProductItemClickHandler(category),
          getSubmenuItemTag(pageName, category))
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
          onSelectSubmenuItem(getSubmenuItemTag(pageName, year))
        }
      }
      const yearItems = years.map(year => {
        return SubmenuItem(
          year,
          routeName,
          getYearItemClickHandler(year),
          getSubmenuItemTag(pageName, year))
      })
      return yearItems
    }
  }

  onRouteClick(newRoute) {
    this.setState({
      currentPage: newRoute,
    })
  }

  onSidebarItemClick(pageName) {
    if (!Submenus[pageName]) { return }
    if (this.state.currentOpenSubmenu === pageName) {
      this.props.onSelectOpenSubmenu("")
    } else {
      this.props.onSelectOpenSubmenu(pageName)
    }
  }

  LinkElement(pageName, linkRoute) {
    const onLinkClick = () => {
      this.onRouteClick(pageName)
      if (!Submenus[pageName]) {
        this.props.onSelectSubmenuItem("")
        this.props.onSelectOpenSubmenu("")
      }
    }
    return (
      <Link
        to={linkRoute}
        onClick={() => onLinkClick()}
        className={this.state.currentPage === pageName ? 'sidebarSelectedLink' : 'sidebarLink'}
      >
        {pageName}
      </Link>
    )
  }

  SidebarItem(pageName, additionalOnClick) {
    const linkRoute = pageName === PageNames.home ? routes.home : routes[pageName.toLowerCase()]
    const sidebarItemWithSubmenu = (
      <span
        onClick={() => this.onSidebarItemClick(pageName)}
        className={this.state.currentPage === pageName ? 'sidebarSelectedLink' : 'sidebarLink'}
      >
        {pageName}
     </span>
    )

    return (
      <div className="sidebarLink">
        <div>
        {
          Submenus[pageName] ?
            sidebarItemWithSubmenu :
            this.LinkElement(pageName, linkRoute, additionalOnClick)
        }
        </div>
        {this.makeSubmenu(pageName)}
      </div>
    )
  }

  makeSubmenu(pageName) {
    if (!Submenus[pageName]) return
    const { currentSelectedSubmenuItem } = this.props
    const submenuItems = this.getSubmenuItemsFor(pageName)
    const submenuProps = { 
      links : submenuItems,
      currentSelectedSubmenuItem: currentSelectedSubmenuItem,
     }

    return (
      <div>
        { pageName === this.state.currentOpenSubmenu && (
            <Spring
              from={{ opacity: 0, marginTop: -20 }}
              to={{ opacity: 1, marginTop: 0 }}
              delay= '200'>
              { props => <div style={props}> <Submenu {...submenuProps}/> </div> }
            </Spring>
          )
        }
      </div>
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
