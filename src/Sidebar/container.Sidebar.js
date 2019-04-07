import { connect } from 'react-redux'
import { SidebarActions } from './duck.Sidebar'
import { MainActions } from '../Main/duck.Main'
import Sidebar from './Sidebar'

const mapStateToProps = state => ({
  currentOpenSubmenu: state.CurrentOpenSubmenu,
  currentSelectedSubmenuItem: state.CurrentSelectedSubmenuItem
})

const mapDispatchToProps = dispatch => ({
  onSelectEventYear: (year) => {
    dispatch(SidebarActions.selectEventYear(year))
  },
  onSelectImageSetYear: (year) => {
    dispatch(SidebarActions.selectPortfolioYear(year))
  },
  onSelectPortfolioImageset: (imageSetName) => {
    dispatch(SidebarActions.selectPortfolioImageSet(imageSetName))
  },
  onSelectStoreCategory: (productCategoryName) => {
    dispatch(SidebarActions.selectProductCategory(productCategoryName))
  },
  onSelectOpenSubmenu: (pageName) => {
    dispatch(SidebarActions.selectOpenSubmenu(pageName))
  },
  onSelectSubmenuItem: (submenuItemName) => {
    dispatch(SidebarActions.selectSubmenuItem(submenuItemName))
  },
  onToggleMobileMenuOpen: (shouldShowMobileMenu) => {
    dispatch(MainActions.toggleMobileMenuOpen(shouldShowMobileMenu))
  },
})

const ConnectedSidebar = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Sidebar)

export default ConnectedSidebar
