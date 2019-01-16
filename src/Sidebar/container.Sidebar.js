import { connect } from 'react-redux'
import { SidebarActions } from './duck.Sidebar'
import Sidebar from './Sidebar'

const mapStateToProps = state => ({ currentOpenSubmenu: state.CurrentOpenSubmenu })

const mapDispatchToProps = dispatch => ({
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
  }
})

const ConnectedSidebar = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Sidebar)

export default ConnectedSidebar
