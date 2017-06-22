import React from 'react'
import PropTypes from 'prop-types'
import './Portfolio.css'

class Portfolio extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      currFirstUrlIdx: 0,
      currLastUrlIdx: 9,
    }
  }

  render() {
    let mapKey = 0
    return (
      <div>
        <p>I AM THE PORTFOLIO PAGE</p>
        { this.props.urls.slice(this.state.currFirstUrlIdx, this.state.currLastUrlIdx).map(url => {
          mapKey++
          return <img src={url} key={mapKey} alt="loading" />
        }) }
      </div>
    )
  }
}

Portfolio.defaultProps = {
  urls: [],
}

Portfolio.propTypes = {
  urls: PropTypes.array,
}

export default Portfolio

