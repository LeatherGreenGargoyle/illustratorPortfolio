import { connect } from 'react-redux'
import portfolioActions from './duck.Portfolio'
import Portfolio from './Portfolio'

const mapStateToProps = state => ({ imgObjs: state.portfolioImgObjs })

const mapDispatchToProps = dispatch => {
  return {
    getUrlsOnMount: urlArr => {
      dispatch(portfolioActions.storePortfolioUrls(urlArr))
    },
  }
}

const ConnectedPortfolio = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Portfolio)

export default ConnectedPortfolio
