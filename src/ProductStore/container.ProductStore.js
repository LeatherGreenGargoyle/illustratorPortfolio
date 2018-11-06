import { connect } from 'react-redux'
import productStoreActions from './duck.ProductStore'
import ProductStore from './ProductStore'

const mapStateToProps = state => ({ productCategory: state.CurrentProductCategory, currentImageSetName: state.CurrentImageSet })

const mapDispatchToProps = () => ({})

const ConnectedProductStore = connect(
  mapStateToProps,
  mapDispatchToProps,
)(ProductStore)

export default ConnectedProductStore
