import React from 'react'
import PropTypes from 'prop-types'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './Portfolio.css'
import ImageModal from '../UI/ImageModal/ImageModal'
import { comicLinks, illustrationLinks, ImageSets, Values } from '../Constants'

class Portfolio extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      currFirstImgIdx: 0,
      imgsPerPage: Values.IMAGES_PER_PAGE,
      currentImageSetName: props.currentImageSetName
    }
    this.nextImages = this.nextImages.bind(this)
    this.prevImages = this.prevImages.bind(this)
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.currentImageSetName !== this.state.currentImageSetName) {
        this.setState(() => ({
          currFirstImgIdx: 0,
          currentImageSetName: nextProps.currentImageSetName,
        }));
    }
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
    console.log(`products: ${this.state.currFirstImgIdx} firstIdx, ${this.state.imgsPerPage} img/page`)
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
    const imgObjs = this.getImageObjects()

    return (
      <div>
        <div className="navBtnContainer">
          <FontAwesomeIcon
            className={firstImgIdx === 0 ? 'navButtonDisabled' : 'navButtonActive'}
            icon="angle-left"
            size="1x"
            onClick={this.prevImages}
          />
          <span className="divider" />
          <FontAwesomeIcon
            className={firstImgIdx + this.state.imgsPerPage >= imgObjs.length ? 'navButtonDisabled' : 'navButtonActive'}
            icon="angle-right"
            size="1x"
            onClick={this.nextImages.bind(this, imgObjs.length)}
          />
        </div>

        <div>
          { console.log('B') }
          { imgObjs.slice(firstImgIdx, firstImgIdx + this.state.imgsPerPage).map(imgObj => {
            mapKey++
            return <ImageModal url={imgObj.url} title={imgObj.title} medium={imgObj.medium} year={imgObj.year} key={mapKey} />
          }) }
        </div>

        <div className="navBtnContainer">
          <FontAwesomeIcon
            className={firstImgIdx === 0 ? 'navButtonDisabled' : 'navButtonActive'}
            icon="angle-left"
            size="1x"
            onClick={this.prevImages}
          />
          <span className="divider" />
          <FontAwesomeIcon
            className={firstImgIdx + this.state.imgsPerPage >= imgObjs.length ? 'navButtonDisabled' : 'navButtonActive'}
            icon="angle-right"
            size="1x"
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
