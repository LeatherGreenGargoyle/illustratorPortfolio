import { connect } from 'react-redux'
import { SidebarActions } from './duck.Sidebar'
import Sidebar from './Sidebar'

const mapStateToProps = () => ({})

const mapDispatchToProps = dispatch => ({
  onSelectPortfolioImageset: (imageSetName) => {
    dispatch(SidebarActions.selectPortfolioImageSet(imageSetName))
  },
  onSelectStoreCategory: (productCategoryName) => {
    dispatch(SidebarActions.selectProductCategory(productCategoryName))
  }
  
})

const ConnectedSidebar = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Sidebar)

export default ConnectedSidebar
