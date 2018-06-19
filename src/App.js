import React from 'react'
import { Row, Col } from 'react-bootstrap'
import './App.css'
import Main from './Main/Main'
import ConnectedSidebar from './Sidebar/container.Sidebar'
import Header from './Header/Header'

const App = () => {
  return (
    <div className="App">
      <Row className="header no-gutter">
        <Col md={10}>
          <Header />
        </Col>
        <Col md={2} className="iconContainer">
          <span className="socialIcon">
            <a href="https://www.instagram.com/mogpoe/"
              target="_blank"
              rel="noopener noreferrer">
              <i className="fab fa-instagram"></i>
            </a>
          </span>
          <span className="socialIcon">
            <a href="http://jennifernguyenillustration.tumblr.com/"
              target="_blank"
              rel="noopener noreferrer">
              <i class="fab fa-tumblr"></i>
            </a>
          </span>
          <span className="socialIcon lastIcon">
            <a href="https://www.facebook.com/jennifernguyenillustration/"
              target="_blank"
              rel="noopener noreferrer">
              <i class="fab fa-facebook-f"></i>
            </a>
          </span>
        </Col>
        <div className="divider" />
      </Row>
      <Row>
        <Col md={2}>
          <ConnectedSidebar />
        </Col>

        <Col md={10} className="sidebarDivider containerMain">
          <Main />
        </Col>
      </Row>
    </div>
  )
}

export default App
