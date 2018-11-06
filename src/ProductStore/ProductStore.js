import React from 'react'
import PropTypes from 'prop-types'
import './ProductStore.css'
import ProductModal from './ProductModal'
import { OriginalsProducts, PinProducts, PrintProducts, ProductCategories, Values } from '../Constants'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

class ProductStore extends React.Component {
  constructor(props) {
    console.log(`constructor props: ${props.keys}`)
    super(props)
    this.state = {
      currFirstImgIdx: 0,
      imgsPerPage: Values.IMAGES_PER_PAGE,
      currentProductCategory: props.productCategory
    }
    this.nextImages = this.nextImages.bind(this)
    this.prevImages = this.prevImages.bind(this)
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.productCategory !== this.state.productCategory) {
        this.setState(() => ({
          currFirstImgIdx: 0,
          currentImageSetName: nextProps.productCategory,
        }));
    }
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
  

  nextImages(numberOfImages) {
    if (this.state.currFirstImgIdx + this.state.imgsPerPage >= numberOfImages) return
    const newFirstUrlIdx = this.state.currFirstImgIdx + this.state.imgsPerPage
    console.log(`store: ${this.state.currFirstImgIdx} firstIdx, ${this.state.imgsPerPage} img/page = ${newFirstUrlIdx}`)
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
        { console.log('D') }
          { productObjs.slice(firstImgIdx, firstImgIdx + this.state.imgsPerPage).map(productObj => {
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
              />)
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
