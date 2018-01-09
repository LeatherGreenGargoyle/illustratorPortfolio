import { connect } from 'react-redux'
import headerActions from './duck.Header'
import Header from './Header'

const mapStateToProps = () => ({})

const mapDispatchToProps = dispatch => {
  return {
    onSelectIllustrations: () => {
      dispatch(headerActions.selectIllustrationsPortfolio())
    },
    onSelectComics: () => {
      dispatch(headerActions.selectComicsPortfolio())
    },
  }
}

const ConnectedHeader = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Header)

export default ConnectedHeader
