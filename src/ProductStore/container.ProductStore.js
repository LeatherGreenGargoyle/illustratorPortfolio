import { connect } from 'react-redux'
import productStoreActions from './duck.ProductStore'
import ProductStore from './ProductStore'

const mapStateToProps = state => {}

const mapDispatchToProps = dispatch => {}

const ConnectedProductStore = connect(
  mapStateToProps,
  mapDispatchToProps,
)(ProductStore)

export default ConnectedProductStore
