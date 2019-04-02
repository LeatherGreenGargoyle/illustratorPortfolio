import React from 'react'
import PropTypes from 'prop-types'
import './ProductStore.css'
import ProductModal from './ProductModal'
import { OriginalsProducts, PinProducts, PrintProducts, ProductCategories, Values } from '../Constants'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

class ProductStore extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      currFirstImgIdx: 0,
      imgsPerPage: Values.IMAGES_PER_PAGE,
      currentImageSetName: props.productCategory,
      loadedProductObjects: []
    }
    this.onLoad = this.onLoad.bind(this)
    this.nextImages = this.nextImages.bind(this)
    this.prevImages = this.prevImages.bind(this)
    this.startLoadingImages = this.startLoadingImages.bind(this)
  }
  
  static getDerivedStateFromProps(nextProps, prevState){
    if (nextProps.productCategory !== prevState.currentImageSetName) {
      return {
        currFirstImgIdx: 0,
        currentImageSetName: nextProps.productCategory,
        loadedProductObjects: []
       }
    }
   
    return null;
  }
 

  getProductObjects() {
    switch (this.props.productCategory) {
      case ProductCategories.pins:
        return PinProducts
      case ProductCategories.prints:
        return PrintProducts
      default:
        return OriginalsProducts
    }
  }
  
  onLoad(productObject, originalIndex) {
    let newLoadedObjects = this.state.loadedProductObjects
    newLoadedObjects[originalIndex] = productObject
    this.setState({
      loadedProductObjects: newLoadedObjects
    })
  }

  nextImages(numberOfImages) {
    if (this.state.currFirstImgIdx + this.state.imgsPerPage >= numberOfImages) return
    const newFirstUrlIdx = this.state.currFirstImgIdx + this.state.imgsPerPage
    this.setState({
      currFirstImgIdx: newFirstUrlIdx,
      loadedProductObjects: []
    })
  }

  prevImages() {
    if (this.state.currFirstImgIdx === 0) return

    const newFirstUrlIdx = this.state.currFirstImgIdx - this.state.imgsPerPage

    this.setState({
      currFirstImgIdx: newFirstUrlIdx,
      loadedProductObjects: []
    })
  }

  startLoadingImages(imgObjs, firstImgIdx) {
    return imgObjs
      .slice(firstImgIdx, firstImgIdx + this.state.imgsPerPage)
      .map((item, i) =>
        (<img src={item.url} onLoad={this.onLoad.bind(this, item, i)} key={i} />)
    )
  }

  render() {
    let mapKey = 0
    const firstImgIdx = this.state.currFirstImgIdx
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
            className={firstImgIdx + this.state.imgsPerPage >= productObjs.length ? 'navButtonDisabled' : 'navButtonActive'}
            icon="angle-right"
            size="1x"
            onClick={this.nextImages.bind(this, productObjs.length)}
          />
        </div>

        <div className="productsContainer">
          { this.state.loadedProductObjects.map(productObj => {
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
                isTall={this.props.productCategory == ProductCategories.originals}
              />)
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
            className={firstImgIdx + this.state.imgsPerPage >= productObjs.length ? 'navButtonDisabled' : 'navButtonActive'}
            icon="angle-right"
            size="1x"
            onClick={this.nextImages.bind(this, productObjs.length)}
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
