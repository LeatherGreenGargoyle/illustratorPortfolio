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
      currentImageSetName: props.currentImageSetName,
      currentImageSetYear: props.currentImageSetYear,
      loadedImageObjects: [],
    }
    this.getImagesForCurrentPage = this.getImagesForCurrentPage.bind(this)
    this.getImageModals = this.getImageModals.bind(this)
    this.onPageNext = this.onPageNext.bind(this)
    this.onPagePrev = this.onPagePrev.bind(this)
  }

  componentWillReceiveProps(nextProps) {
    console.log(`about to receive props: ${nextProps.currentImageSetYear}`)
    const didReceiveNewImageSet = nextProps.currentImageSetName !== this.state.currentImageSetName
    const didReceiveNewImageSetYear = nextProps.currentImageSetYear !== this.state.currentImageSetYear
    
    if (didReceiveNewImageSet || didReceiveNewImageSetYear) {
        this.setState(() => ({
          currFirstImgIdx: 0,
          currentImageSetName: nextProps.currentImageSetName,
          currentImageSetYear: nextProps.currentImageSetYear,
          loadedImageObjects: []
        }));
    }
}

  getImageObjects() {
    if (this.props.currentImageSetName === ImageSets.comics) {
      return comicLinks.filter(comic => comic.year == this.state.currentImageSetYear)
    } else if (this.props.currentImageSetName === ImageSets.illustrations) {
      return illustrationLinks.filter(illustration => illustration.year == this.state.currentImageSetYear)
    }
  }

  getImagesForCurrentPage(imageObjects, firstImgIdx) {
    let imagesForCurrentPage = imageObjects.slice(firstImgIdx, firstImgIdx + this.state.imgsPerPage)
    return imagesForCurrentPage
  }

  getImageModals(imageObjects) {
    let mapKey = 0
    return imageObjects.map(imageObject => {
      mapKey++
      return (
        <ImageModal
              url={imageObject.url}
              title={imageObject.title}
              medium={imageObject.medium}
              key={mapKey}
              imageSet={this.props.currentImageSetName}/>
      )
    })
  }

  onLoad(imageObject) {
    this.setState(({ loadedImageObjects }) => {
      return { loadedImageObjects: loadedImageObjects.concat(imageObject) }
    })
  }

  onPageNext(numberOfImages) {
    if (this.state.currFirstImgIdx + this.state.imgsPerPage >= numberOfImages) return

    const newFirstUrlIdx = this.state.currFirstImgIdx + this.state.imgsPerPage
    this.setState({
      currFirstImgIdx: newFirstUrlIdx,
      loadedImageObjects: []
    })
  }

  onPagePrev() {
    if (this.state.currFirstImgIdx === 0) return

    const newFirstUrlIdx = this.state.currFirstImgIdx - this.state.imgsPerPage

    this.setState({
      currFirstImgIdx: newFirstUrlIdx,
      loadedImageObjects: []
    })
  }

  render() {
    const firstImgIdx = this.state.currFirstImgIdx
    const imgObjs = this.getImageObjects()

    return (
      <div>
        <div className="navBtnContainer">
          <FontAwesomeIcon
            className={firstImgIdx === 0 ? 'navButtonDisabled' : 'navButtonActive'}
            icon="angle-left"
            size="1x"
            onClick={this.onPagePrev}
          />
          <span className="divider" />
          <FontAwesomeIcon
            className={firstImgIdx + this.state.imgsPerPage >= imgObjs.length ? 'navButtonDisabled' : 'navButtonActive'}
            icon="angle-right"
            size="1x"
            onClick={this.onPageNext.bind(this, imgObjs.length)}
          />
        </div>

        <div className="portfolioContentContainer">
          { this.getImageModals(this.state.loadedImageObjects) }
        </div>

        <div className="hidden">
          {this.getImagesForCurrentPage(imgObjs, firstImgIdx).map((item, i) =>
            <img src={item.url} onLoad={this.onLoad.bind(this, item)} key={i} />
          )}
        </div>

        <div className="navBtnContainer">
          <FontAwesomeIcon
            className={firstImgIdx === 0 ? 'navButtonDisabled' : 'navButtonActive'}
            icon="angle-left"
            size="1x"
            onClick={this.onPagePrev}
          />
          <span className="divider" />
          <FontAwesomeIcon
            className={firstImgIdx + this.state.imgsPerPage >= imgObjs.length ? 'navButtonDisabled' : 'navButtonActive'}
            icon="angle-right"
            size="1x"
            onClick={this.onPageNext.bind(this, imgObjs.length)}
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
