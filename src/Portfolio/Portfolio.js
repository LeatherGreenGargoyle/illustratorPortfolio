import React from 'react'
import PropTypes from 'prop-types'
import FontAwesome from 'react-fontawesome'
import './Portfolio.css'
import ImageModal from '../UI/ImageModal/ImageModal'

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
    if (this.state.currFirstImgIdxfirstImgIdx + this.state.imgsPerPage >= this.props.imgObjs.length) return

    const newFirstUrlIdx = this.state.currFirstImgIdx + this.state.imgsPerPage

    this.setState({
      currFirstImgIdx: newFirstUrlIdx,
    })
  }

  prevImages() {
    if (this.state.currFirstImgIdx === 0) return

    const newFirstUrlIdx = this.state.currFirstImgIdx - this.state.imgsPerPage

    this.setState({
      currFirstImgIdx: newFirstUrlIdx,
    })
  }

  render() {
    let mapKey = 0
    const firstImgIdx = this.state.currFirstImgIdx
    const { imgObjs } = this.props

    return (
      <div>
        <div>
          <FontAwesome
            className={firstImgIdx === 0 ? 'navButtonDisabled' : 'navButtonActive'}
            name="angle-left"
            size="3x"
            onClick={this.prevImages}
          />
          <span className="divider" />
          <FontAwesome
            className={firstImgIdx + this.state.imgsPerPage >= imgObjs.length ? 'navButtonDisabled' : 'navButtonActive'}
            name="angle-right"
            size="3x"
            onClick={this.nextImages}
          />
        </div>
        <div>
          { imgObjs.slice(firstImgIdx, firstImgIdx + this.state.imgsPerPage).map(imgObj => {
            mapKey++
            return <ImageModal url={imgObj.url} title={imgObj.title} medium={imgObj.medium} year={imgObj.year} key={mapKey} />
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
{/*<img src={imgObj.url} key={mapKey} alt="loading" style={imgStyles} />*/}
