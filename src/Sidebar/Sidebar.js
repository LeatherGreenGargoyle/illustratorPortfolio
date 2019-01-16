import React from 'react'
import { Link } from 'react-router-dom'
import './Sidebar.css'
import { ImageSets, PageNames, routes, ProductCategories, Submenus } from '../Constants';
import { Submenu, SubmenuItem } from '../UI/Submenu/Submenu.js'
import { Spring } from 'react-spring'

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

  onSidebarItemClick(pageName) {
    if (!Submenus[pageName]) { return }
    this.props.onSelectOpenSubmenu(pageName)
  }

  LinkElement(pageName, linkRoute) {
    return (
      <Link
        to={linkRoute}
        onClick={() => this.onRouteClick(pageName)}
      >
        {pageName}
      </Link>
    )
  }

  SidebarItem(pageName, additionalOnClick) {
    const linkRoute = pageName === PageNames.home ? routes.home : routes[pageName.toLowerCase()]

    return (
      <div className="sidebarLink"
        onClick={() => this.onSidebarItemClick(pageName)}>
        <div className={this.state.currentPage === pageName ? 'sidebarSelectedLink' : 'sidebarLink'}>
        { Submenus[pageName] ? `${pageName}` : this.LinkElement(pageName, linkRoute, additionalOnClick)}
        </div>
        {this.makeSubmenu(pageName)}
      </div>
    )
  }

  makeSubmenu(pageName) {
    if (!Submenus[pageName]) return
    const submenuItems = this.getSubmenuItemsFor(pageName)

    return (
      <div>
      { pageName === this.state.currentOpenSubmenu && (
          <Spring
            from={{ opacity: 0, marginTop: -20 }}
            to={{ opacity: 1, marginTop: 0 }}
            delay= '200'>
            { props => <div style={props}> {Submenu(submenuItems)} </div> }
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
