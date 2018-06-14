import React from 'react'
import PropTypes from 'prop-types'
import FontAwesome from 'react-fontawesome'
import './Portfolio.css'
import ImageModal from '../UI/ImageModal/ImageModal'
import {comicLinks, illustrationLinks, ImageSets} from '../Constants'

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

  getImageObjects() {
    if (this.props.currentImageSetName === ImageSets.comics) {
      return comicLinks
    } else if (this.props.currentImageSetName === ImageSets.illustrations) {
      return illustrationLinks
    }
  }

  nextImages(numberOfImages) {
    if (this.state.currFirstImgIdx + this.state.imgsPerPage >= numberOfImages) return

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
    const { currentImageSetName } = this.props
    const imgObjs = this.getImageObjects()

    return (
      <div>
        <p>{currentImageSetName}</p>
        <div className="navBtnContainer">
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
            onClick={this.nextImages.bind(this, imgObjs.length)}
          />
        </div>

        <div>
          { imgObjs.slice(firstImgIdx, firstImgIdx + this.state.imgsPerPage).map(imgObj => {
            mapKey++
            return <ImageModal url={imgObj.url} title={imgObj.title} medium={imgObj.medium} year={imgObj.year} key={mapKey} />
          }) }
        </div>

        <div className="navBtnContainer">
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
            onClick={this.nextImages.bind(this, imgObjs.length)}
          />
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
