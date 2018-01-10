import { connect } from 'react-redux'
import Portfolio from './Portfolio'

const mapStateToProps = state => ({ imgObjs: state.portfolioImgLinks })

const mapDispatchToProps = () => ({})

const ConnectedPortfolio = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Portfolio)

export default ConnectedPortfolio
