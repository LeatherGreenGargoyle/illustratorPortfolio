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

  static getDerivedStateFromProps(nextProps, prevState){
    const didReceiveNewImageSet = nextProps.currentImageSetName !== prevState.currentImageSetName
    const didReceiveNewImageSetYear = nextProps.currentImageSetYear !== prevState.currentImageSetYear
    
    if (didReceiveNewImageSet || didReceiveNewImageSetYear) {
        return {
          currFirstImgIdx: 0,
          currentImageSetName: nextProps.currentImageSetName,
          currentImageSetYear: nextProps.currentImageSetYear,
          loadedImageObjects: []
        }
    }

    return null
  }

  getImageObjects() {
    if (this.props.currentImageSetName === ImageSets.comics) {
      return comicLinks.filter(comic => comic.year === this.state.currentImageSetYear)
    } else if (this.props.currentImageSetName === ImageSets.illustrations) {
      return illustrationLinks.filter(illustration => illustration.year === this.state.currentImageSetYear)
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

  onLoad(imageObject, originalIndex) {
    let newLoadedImageObjects = this.state.loadedImageObjects
    newLoadedImageObjects[originalIndex] = imageObject
    this.setState({
      loadedImageObjects: newLoadedImageObjects
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

  startLoadingImages(imgObjs, firstImgIdx) {
    const imagesForCurrentPage = this.getImagesForCurrentPage(imgObjs, firstImgIdx)
    let listKey = 0
    return imagesForCurrentPage.map((item, i) => {
      listKey++
      return <img src={item.url} onLoad={this.onLoad.bind(this, item, i)} key={listKey} alt="" />
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
          { 
            this.startLoadingImages(imgObjs, firstImgIdx)
          }
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
