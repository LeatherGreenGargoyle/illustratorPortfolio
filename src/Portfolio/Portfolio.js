import React from 'react'
import PropTypes from 'prop-types'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './Portfolio.css'
import ImageModal from '../UI/ImageModal/ImageModal'
import {
  comicLinks, illustrationLinks, ImageSets, Values,
} from '../Constants'

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
    this.startLoadingImages = this.startLoadingImages.bind(this)
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    const didReceiveNewImageSet = nextProps.currentImageSetName !== prevState.currentImageSetName
    const didReceiveNewImageSetYear = nextProps.currentImageSetYear !== prevState.currentImageSetYear

    if (didReceiveNewImageSet || didReceiveNewImageSetYear) {
      return {
        currFirstImgIdx: 0,
        currentImageSetName: nextProps.currentImageSetName,
        currentImageSetYear: nextProps.currentImageSetYear,
        loadedImageObjects: [],
      }
    }

    return null
  }

  onLoad(imageObject, originalIndex) {
    const { loadedImageObjects } = this.state
    loadedImageObjects[originalIndex] = imageObject
    this.setState({
      loadedImageObjects,
    })
  }

  onPageNext(numberOfImages) {
    const { currFirstImgIdx, imgsPerPage } = this.state
    if (currFirstImgIdx + imgsPerPage >= numberOfImages) return

    const newFirstUrlIdx = currFirstImgIdx + imgsPerPage
    this.setState({
      currFirstImgIdx: newFirstUrlIdx,
      loadedImageObjects: [],
    })
  }

  onPagePrev() {
    const { currFirstImgIdx, imgsPerPage } = this.state
    if (currFirstImgIdx === 0) return

    const newFirstUrlIdx = currFirstImgIdx - imgsPerPage

    this.setState({
      currFirstImgIdx: newFirstUrlIdx,
      loadedImageObjects: [],
    })
  }

  getImagesForCurrentPage(imageObjects, firstImgIdx) {
    const { imgsPerPage } = this.state
    const imagesForCurrentPage = imageObjects.slice(firstImgIdx, firstImgIdx + imgsPerPage)
    return imagesForCurrentPage
  }

  getImageModals(imageObjects) {
    const { currentImageSetName } = this.props
    let mapKey = 0
    return imageObjects.map(imageObject => {
      mapKey++
      return (
        <ImageModal
          url={imageObject.url}
          title={imageObject.title}
          medium={imageObject.medium}
          key={mapKey}
          imageSet={currentImageSetName}
        />
      )
    })
  }

  getImageObjects() {
    const { currentImageSetName } = this.props
    const { currentImageSetYear } = this.state
    if (currentImageSetName === ImageSets.comics) {
      return comicLinks.filter(comic => parseInt(comic.year, 10) === currentImageSetYear)
    }
    if (currentImageSetName === ImageSets.illustrations) {
      return illustrationLinks.filter(illustration => parseInt(illustration.year, 10) === currentImageSetYear)
    }

    return []
  }

  startLoadingImages(imgObjs, firstImgIdx) {
    const imagesForCurrentPage = this.getImagesForCurrentPage(imgObjs, firstImgIdx)
    let listKey = 0
    return imagesForCurrentPage.map((item, i) => {
      listKey++
      return <img src={item.url} onLoad={this.onLoad.bind(this, item, i)} key={listKey} alt="" />
    })
  }

  render() {
    const { currFirstImgIdx, imgsPerPage, loadedImageObjects } = this.state
    const imgObjs = this.getImageObjects()

    return (
      <div>
        <div className="navBtnContainer">
          <FontAwesomeIcon
            className={currFirstImgIdx === 0 ? 'navButtonDisabled' : 'navButtonActive'}
            icon="angle-left"
            size="1x"
            onClick={this.onPagePrev}
          />
          <span className="divider" />
          <FontAwesomeIcon
            className={currFirstImgIdx + imgsPerPage >= imgObjs.length ? 'navButtonDisabled' : 'navButtonActive'}
            icon="angle-right"
            size="1x"
            onClick={() => this.onPageNext(imgObjs.length)}
          />
        </div>

        <div className="portfolioContentContainer">
          { this.getImageModals(loadedImageObjects) }
        </div>

        <div className="hidden">
          { this.startLoadingImages(imgObjs, currFirstImgIdx) }
        </div>

        <div className="navBtnContainer">
          <FontAwesomeIcon
            className={currFirstImgIdx === 0 ? 'navButtonDisabled' : 'navButtonActive'}
            icon="angle-left"
            size="1x"
            onClick={this.onPagePrev}
          />
          <span className="divider" />
          <FontAwesomeIcon
            className={currFirstImgIdx + imgsPerPage >= imgObjs.length ? 'navButtonDisabled' : 'navButtonActive'}
            icon="angle-right"
            size="1x"
            onClick={() => this.onPageNext(imgObjs.length)}
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
