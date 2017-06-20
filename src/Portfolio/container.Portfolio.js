import { connect } from 'react-redux'
import portfolioActions from './duck.Portfolio'
import Portfolio from './Portfolio'

const mapStateToProps = state => {
  return {
    urls: state.portfolioReducer.portfolioUrls,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getUrlsOnMount: urlArr => {
      // later, this method will call server and retrieve the desired Urls
      dispatch(portfolioActions.storePortfolioUrls(urlArr))
    },
  }
}

const ConnectedPortfolio = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Portfolio)

export default ConnectedPortfolio
// so ConnectedPortfolio is now the thing we should be routing to
