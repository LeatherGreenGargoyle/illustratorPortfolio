import React from 'react'
import PropTypes from 'prop-types'
import './ProductStore.css'
import ProductModal from './ProductModal'

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
    const { productObjs } = this.props

    return (
      <div>
        <button type="button" onClick={this.prevImages} disabled={firstImgIdx === 0}>
          BACK
        </button>
        <button type="button" onClick={this.nextImages} disabled={firstImgIdx + this.state.imgsPerPage >= productObjs.length}>
          NEXT
        </button>
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
