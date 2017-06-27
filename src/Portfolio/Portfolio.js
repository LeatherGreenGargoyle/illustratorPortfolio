import React from 'react'
import PropTypes from 'prop-types'
// import { Grid, Row, Col } from 'react-bootstrap'
import './Portfolio.css'

class Portfolio extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      currFirstImgIdx: 0,
      imgsPerPage: 9,
    }
    this.nextImages = this.nextImages.bind(this)
    this.prevImages = this.prevImages.bind(this)
  }

  nextImages() {
    const newFirstUrlIdx = this.state.currFirstImgIdx + this.state.imgsPerPage

    this.setState({
      currFirstImgIdx: newFirstUrlIdx,
    })
    console.log('NEXT')
  }

  prevImages() {
    const newFirstUrlIdx = this.state.currFirstImgIdx - this.state.imgsPerPage

    this.setState({
      currFirstImgIdx: newFirstUrlIdx,
    })
  }

  render() {
    let mapKey = 0
    const firstImgIdx = this.state.currFirstImgIdx
    const imgStyles = {
      width: '30%',
      margin: '1.5%',
    }
    return (
      <div>
        <p>Portfolio</p>
        <button type="button" onClick={this.prevImages} disabled={firstImgIdx === 0}>
          BACK
        </button>
        <button type="button" onClick={this.nextImages} disabled={firstImgIdx + this.state.imgsPerPage >= this.props.imgObjs.length}>
          NEXT
        </button>
        <div>
          { this.props.imgObjs.slice(firstImgIdx, firstImgIdx + this.state.imgsPerPage).map(imgObj => {
            mapKey++
            return <img src={imgObj.url} key={mapKey} alt="loading" style={imgStyles} />
          }) }
        </div>
      </div>
    )
  }
}

Portfolio.defaultProps = {
  imgObjs: [],
}

Portfolio.propTypes = {
  imgObjs: PropTypes.array,
}

export default Portfolio

        {/*<Grid>
          <Row>
            { this.props.imgObjs.slice(firstImgIdx, firstImgIdx + 3).map(imgObj => {
              mapKey++
              return <Col md={4}><img src={imgObj.url} key={mapKey} alt="loading" /></Col>
            })}
          </Row>
          <Row>
            { this.props.imgObjs.slice(firstImgIdx + 3, firstImgIdx + 6).map(imgObj => {
              mapKey++
              return <Col md={4}><img src={imgObj.url} key={mapKey} alt="loading" /></Col>
            })}
          </Row>
          <Row>
            { this.props.imgObjs.slice(firstImgIdx + 6, firstImgIdx + 9).map(imgObj => {
              mapKey++
              return <Col md={4}><img src={imgObj.url} key={mapKey} alt="loading" /></Col>
            })}
          </Row>
        </Grid>*/}
