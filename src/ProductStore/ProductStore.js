import React from 'react'
import PropTypes from 'prop-types'
import './ProductStore.css'
import ProductModal from './ProductModal'
import {productLinks} from '../Constants'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

class ProductStore extends React.Component {
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
    const productObjs = productLinks

    return (
      <div>
        <div className="navBtnContainer">
          <FontAwesomeIcon
            className={firstImgIdx === 0 ? 'navButtonDisabled' : 'navButtonActive'}
            icon="angle-left"
            size="3x"
            onClick={this.prevImages}
          />
          <span className="divider" />
          <FontAwesomeIcon
            className={firstImgIdx + this.state.imgsPerPage >= productObjs.length ? 'navButtonDisabled' : 'navButtonActive'}
            icon="angle-right"
            size="3x"
            onClick={this.nextImages.bind(this, productObjs.length)}
          />
        </div>

        <div>
          { productObjs.slice(firstImgIdx, firstImgIdx + this.state.imgsPerPage).map(productObj => {
            mapKey++
            return (
              <ProductModal
                url={productObj.url}
                title={productObj.title}
                description={productObj.description}
                price={productObj.price}
                key={mapKey}
              />)
          }) }
        </div>

        <div className="navBtnContainer">
          <FontAwesomeIcon
            className={firstImgIdx === 0 ? 'navButtonDisabled' : 'navButtonActive'}
            icon="angle-left"
            size="3x"
            onClick={this.prevImages}
          />
          <span className="divider" />
          <FontAwesomeIcon
            className={firstImgIdx + this.state.imgsPerPage >= productObjs.length ? 'navButtonDisabled' : 'navButtonActive'}
            icon="angle-right"
            size="3x"
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
