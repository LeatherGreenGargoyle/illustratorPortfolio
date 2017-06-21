import React from 'react'
import PropTypes from 'prop-types'
import './Portfolio.css'

const Portfolio = ({ urls }) => {
  console.log('urls', urls)
  let mapKey = 0
  return (
    <div>
      <p>I AM THE PORTFOLIO PAGE</p>
      { urls.map(url => {
        mapKey++
        return <img src={url} key={mapKey} alt="loading" />
      }) }
    </div>
  )
}

Portfolio.defaultProps = {
  urls: [],
}

Portfolio.propTypes = {
  urls: PropTypes.array,
}

export default Portfolio

