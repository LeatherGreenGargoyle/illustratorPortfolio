import React from 'react'
import { Modal } from 'react-bootstrap'
import './ImageModal.css'

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
    const { url, title, medium, year } = this.props

    return (
      <span>
        <img src={url} alt="illustration" onClick={this.open} className="thumbnailImg" />

        <Modal show={this.state.showModal} onHide={this.close}>
          <Modal.Body>
            <div className="modalImgContainer">
              <img src={url} alt="illustration" className="modalImg" />
            </div>
          </Modal.Body>

          <Modal.Footer>
            <p className="footer">
              {`${title}\u00A0\u00A0`} / {`\u00A0\u00A0${medium}\u00A0\u00A0`} / {`\u00A0\u00A0${year}`}
            </p>
          </Modal.Footer>
        </Modal>
      </span>
    )
  }
}

export default ImageModal
