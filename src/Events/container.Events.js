import { connect } from 'react-redux'
import Events from './Events'

const mapStateToProps = state => ({
  currentEventYear: state.CurrentEventYear,
})

const mapDispatchToProps = () => ({})

const ConnectedEvents = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Events)

export default ConnectedEvents
