import { connect } from 'react-redux'
import Portfolio from './Portfolio'

const mapStateToProps = state => ({
  currentImageSetName: state.CurrentImageSet,
  currentImageSetYear: state.CurrentPortfolioYear,
})

const mapDispatchToProps = () => ({})

const ConnectedPortfolio = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Portfolio)

export default ConnectedPortfolio
