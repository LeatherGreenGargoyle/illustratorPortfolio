import React from 'react'
import PropTypes from 'prop-types'
import './Portfolio.css'

class Portfolio extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      currFirstUrlIdx: 0,
      imgsPerPage: 9,
    }
    this.nextImages = this.nextImages.bind(this)
    this.prevImages = this.prevImages.bind(this)
  }

  nextImages() {
    const newFirstUrlIdx = this.state.currFirstUrlIdx + this.state.imgsPerPage

    this.setState({
      currFirstUrlIdx: newFirstUrlIdx,
    })
    console.log('NEXT')
  }

  prevImages() {
    const newFirstUrlIdx = this.state.currFirstUrlIdx - this.state.imgsPerPage

    this.setState({
      currFirstUrlIdx: newFirstUrlIdx,
    })
  }

  render() {
    let mapKey = 0
    return (
      <div>
        <p>Portfolio</p>
        <button type="button" onClick={this.prevImages} disabled={this.state.currFirstUrlIdx === 0}>
          BACK
        </button>
        { this.props.imgObjs.slice(this.state.currFirstUrlIdx, this.state.currFirstUrlIdx + this.state.imgsPerPage).map(imgObj => {
          mapKey++
          return <img src={imgObj.url} key={mapKey} alt="loading" />
        }) }
        <button type="button" onClick={this.nextImages} disabled={this.state.currFirstUrlIdx + this.state.imgsPerPage >= this.props.imgObjs.length}>
          NEXT
        </button>
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
