import React from 'react'
import { Modal } from 'react-bootstrap'

class ImageModal extends React.Component {
  constructor(props) {
    super(props)
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
    const imgStyles = {
      width: '30%',
      margin: '1.5%',
    }
    return (
      <span>
        <img src={this.props.url} alt="illustration" onClick={this.open} style={imgStyles}/>
        <Modal show={this.state.showModal} onHide={this.close}>
          <Modal.Body>
            <img src={this.props.url} alt="illustration" />
          </Modal.Body>
        </Modal>
      </span>
    )
  }
}

export default ImageModal
