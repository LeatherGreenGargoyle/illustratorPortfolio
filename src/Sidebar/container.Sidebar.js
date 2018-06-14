import { connect } from 'react-redux'
import { SidebarActions } from './duck.Sidebar'
import Sidebar from './Sidebar'

const mapStateToProps = () => ({})

const mapDispatchToProps = dispatch => ({
  onSelectPortfolioImageset: (imageSetName) => {
    dispatch(SidebarActions.selectPortfolioImageSet(imageSetName))
  },
})

const ConnectedSidebar = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Sidebar)

export default ConnectedSidebar
