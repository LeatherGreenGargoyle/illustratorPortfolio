import React from 'react'
import { Modal } from 'react-bootstrap'

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
    const thumbnailStyles = {
      'width': '30%',
      'margin': '1.5%',
      'cursor': 'pointer',
    }

    const footerStyles = {
      'textAlign': 'center',
    }

    const modalImgContainerStyles = {
      'width': '100%',
      'height': '100%',
    }

    const modalImgStyles = {
      'width': '100%',
      'height': 'auto',
    }

    const { url, title, medium, year } = this.props

    return (
      <span>
        <img src={url} alt="illustration" onClick={this.open} style={thumbnailStyles} />

        <Modal show={this.state.showModal} onHide={this.close}>
          <Modal.Body>
            <div style={modalImgContainerStyles}>
              <img src={url} alt="illustration" style={modalImgStyles} />
            </div>
          </Modal.Body>

          <Modal.Footer>
            <p style={footerStyles}>
              {title} | {medium} | {year}
            </p>
          </Modal.Footer>
        </Modal>
      </span>
    )
  }
}

export default ImageModal
