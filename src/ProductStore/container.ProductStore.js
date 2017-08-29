import { connect } from 'react-redux'
import productStoreActions from './duck.ProductStore'
import ProductStore from './ProductStore'

const mapStateToProps = state => {
  return {
    productObjs: state.productObjs,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getUrlsOnMount: urlArr => {
      dispatch(productStoreActions.storePortfolioUrls(urlArr))
    },
  }
}

const ConnectedProductStore = connect(
  mapStateToProps,
  mapDispatchToProps,
)(ProductStore)

export default ConnectedProductStore
