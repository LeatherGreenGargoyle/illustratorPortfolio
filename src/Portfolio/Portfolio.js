import React, { Component } from 'react'
import { connect } from 'react-redux'
import './Portfolio.css'

import { actions } from './duck.Portfolio'

@connect(store => ({
  portfolioUrls: store.portfolioUrls
}))
class Portfolio extends Component {
  render() {
    return (
      <p>I AM THE PORTFOLIO PAGE</p>
    )
  }
}

export default Portfolio

// onMount, should retrieve image urls, then map them out as images
// make this a presentational component that passes props down to functional comp
