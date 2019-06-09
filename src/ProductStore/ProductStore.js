import React from 'react'
import PropTypes from 'prop-types'
import './ProductStore.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import ProductModal from './ProductModal'
import {
  OriginalsProducts, PinProducts, PrintProducts, ProductCategories, Values,
} from '../Constants'

class ProductStore extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      currFirstImgIdx: 0,
      imgsPerPage: Values.IMAGES_PER_PAGE,
      currentImageSetName: props.productCategory,
      loadedProductObjects: [],
    }
    this.onLoad = this.onLoad.bind(this)
    this.nextImages = this.nextImages.bind(this)
    this.prevImages = this.prevImages.bind(this)
    this.startLoadingImages = this.startLoadingImages.bind(this)
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    if (nextProps.productCategory !== prevState.currentImageSetName) {
      return {
        currFirstImgIdx: 0,
        currentImageSetName: nextProps.productCategory,
        loadedProductObjects: [],
      }
    }

    return null
  }

  onLoad(productObject, originalIndex) {
    const { loadedProductObjects } = this.state
    loadedProductObjects[originalIndex] = productObject
    this.setState({
      loadedProductObjects,
    })
  }

  getProductObjects() {
    const { productCategory } = this.props
    switch (productCategory) {
      case ProductCategories.pins:
        return PinProducts
      case ProductCategories.prints:
        return PrintProducts
      default:
        return OriginalsProducts
    }
  }

  nextImages(numberOfImages) {
    const { currFirstImgIdx, imgsPerPage } = this.state
    if (currFirstImgIdx + imgsPerPage >= numberOfImages) return
    const newFirstUrlIdx = currFirstImgIdx + imgsPerPage
    this.setState({
      currFirstImgIdx: newFirstUrlIdx,
      loadedProductObjects: [],
    })
  }

  prevImages() {
    const { currFirstImgIdx, imgsPerPage } = this.state
    if (currFirstImgIdx === 0) return

    const newFirstUrlIdx = currFirstImgIdx - imgsPerPage

    this.setState({
      currFirstImgIdx: newFirstUrlIdx,
      loadedProductObjects: [],
    })
  }

  startLoadingImages(imgObjs, firstImgIdx) {
    const { imgsPerPage } = this.state
    let mapKey = 0
    return imgObjs
      .slice(firstImgIdx, firstImgIdx + imgsPerPage)
      .map((item, i) => (<img src={item.url} onLoad={this.onLoad.bind(this, item, i)} key={mapKey++} alt="" />))
  }

  render() {
    const { currFirstImgIdx, imgsPerPage, loadedProductObjects } = this.state
    const { productCategory } = this.props
    let mapKey = 0
    const firstImgIdx = currFirstImgIdx
    const productObjs = this.getProductObjects()

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
            className={firstImgIdx + imgsPerPage >= productObjs.length ? 'navButtonDisabled' : 'navButtonActive'}
            icon="angle-right"
            size="1x"
            onClick={() => this.nextImages(productObjs.length)}
          />
        </div>

        <div className="productsContainer">
          { loadedProductObjects.map(productObj => {
            mapKey++
            return (
              <ProductModal
                url={productObj.url}
                title={productObj.title}
                description={productObj.description}
                price={productObj.price}
                type={productObj.type}
                key={mapKey}
                link={productObj.link}
                isTall={productCategory === ProductCategories.originals}
              />
            )
          }) }
        </div>

        <div className="hidden">
          {
            this.startLoadingImages(productObjs, firstImgIdx)
          }
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
            className={firstImgIdx + imgsPerPage >= productObjs.length ? 'navButtonDisabled' : 'navButtonActive'}
            icon="angle-right"
            size="1x"
            onClick={() => this.nextImages(productObjs.length)}
          />
        </div>
      </div>
    )
  }
}

ProductStore.defaultProps = {
  productObjs: [],
}

ProductStore.propTypes = {
  productObjs: PropTypes.array,
}

export default ProductStore
