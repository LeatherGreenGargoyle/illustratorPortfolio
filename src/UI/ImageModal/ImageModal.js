import React from 'react'
import { Modal } from 'react-bootstrap'
import './ImageModal.css'
import { ImageSets } from '../../Constants'

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
    const {
      url, title, medium, imageSet,
    } = this.props
    const caption = (
      <p className="footer">
        {`${title}\u00A0\u00A0`}
        {' '}
/
        {`\u00A0\u00A0${medium}\u00A0\u00A0`}
`
      </p>
    )

    return (
      <span>
        <img src={url} alt="illustration" onClick={this.open} className="thumbnailImg" />

        <Modal show={this.state.showModal} onHide={this.close} animation={false}>
          <Modal.Body>
            <div className="modalImgContainer">
              <img src={url} alt="illustration" className="modalImg" />
            </div>
          </Modal.Body>

          <Modal.Footer>
            { imageSet === ImageSets.comics ? '' : caption}
          </Modal.Footer>
        </Modal>
      </span>
    )
  }
}

export default ImageModal
