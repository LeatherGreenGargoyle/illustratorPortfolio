import React from 'react'
import './ProductStore.css'

class ImageModal extends React.Component {
  constructor() {
    super()
    this.state = {
      showModal: false,
    }
    this.close = this.close.bind(this)
    this.open = this.open.bind(this)
  }

  close() {
    this.setState({ showModal: false })
  }

  open() {
    this.setState({ showModal: true })
  }

  render() {

    const { url, title, price, link, isTall } = this.props
    return (
      <div className={ isTall ? "productContainerTall" : "productContainer" }>
          <a href={ link } target="_blank" className="productLink">
            <img src={url} alt="illustration" onClick={ this.open } className="productImage"/>
          </a>
          <span className="productImageFooter">
            <span>{title}</span>
            <br />
            <span>{price}</span>
          </span>
      </div>
    )
  }
}

export default ImageModal
