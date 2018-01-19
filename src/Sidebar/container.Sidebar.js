import { connect } from 'react-redux'
import { sidebarActions } from './duck.Sidebar'
import Sidebar from './Sidebar'

const mapStateToProps = () => ({})

const mapDispatchToProps = dispatch => ({
  onSelectIllustrations: () => {
    dispatch(sidebarActions.selectIllustrationsPortfolio())
  },
  onSelectComics: () => {
    dispatch(sidebarActions.selectComicsPortfolio())
  },
})

const ConnectedSidebar = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Sidebar)

export default ConnectedSidebar
