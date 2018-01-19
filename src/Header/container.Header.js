import { connect } from 'react-redux'
import Header from './Header'

const mapStateToProps = () => ({})

const mapDispatchToProps = () => ({})

const ConnectedHeader = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Header)

export default ConnectedHeader
