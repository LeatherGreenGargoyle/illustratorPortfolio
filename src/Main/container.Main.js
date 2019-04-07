import { connect } from 'react-redux'
import Main from './Main'
import { MainActions } from './duck.Main'

const mapStateToProps = state => ({
  shouldShowMobileMenu: state.ShouldShowMobileMenu,
})

const mapDispatchToProps = dispatch => ({
  onToggleMobileMenuOpen: shouldShowMobileMenu => {
    dispatch(MainActions.toggleMobileMenuOpen(shouldShowMobileMenu))
  },
})

const ConnectedMain = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Main)

export default ConnectedMain
