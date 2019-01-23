import React from 'react'
import { Row, Col } from 'react-bootstrap'
import './App.css'
import Main from './Main/Main'
import ConnectedSidebar from './Sidebar/container.Sidebar'
import Header from './Header/Header'

import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faAngleLeft, faAngleRight, faBars } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Container } from 'semantic-ui-react';
library.add(fab, faAngleLeft, faAngleRight, faBars)

const App = () => {
  return (
    <Container className="App">
      <Row className="header no-gutter">
        <Col lg={9} md={8} sm={8} xs={6} className="titleContainer">
            Jennifer Nguyen
        </Col>
        <Col lg={3} md={4} sm={4} xs={6}  className="iconContainer">
          <span className="socialIcon">
            <a href="https://www.instagram.com/jennifernguyenillustration/"
              target="_blank"
              rel="noopener noreferrer">
              <FontAwesomeIcon icon={['fab', 'instagram']} />
            </a>
          </span>
          <span className="socialIcon fontSizePlus">
            <a href="http://jennifernguyenillustration.tumblr.com/"
              target="_blank"
              rel="noopener noreferrer">
              <FontAwesomeIcon icon={['fab', 'tumblr']} />
            </a>
          </span>
          <span className="socialIcon lastIcon fontSizePlus">
            <a href="https://www.facebook.com/jennifernguyenillustration/"
              target="_blank"
              rel="noopener noreferrer">
              <FontAwesomeIcon icon={['fab', 'facebook-f']} />
            </a>
          </span>
        </Col>
        <div className="divider" />
      </Row>
      <Row className="sidebarSmall">
        <span className="sidebarSmallLabel"> Menu </span>
        <span className="sidebarSmallIcon"> <FontAwesomeIcon icon="bars" size="1x" /></span>
      </Row>
      <Row>
        <Col lg={3} md={4} sm={12} xs={12} className="fullSidebar">
          <ConnectedSidebar />
        </Col>

        <Col lg={9} md={8} sm={12} xs={12} className="sidebarDivider containerMain">
          <Main />
        </Col>
      </Row>
    </Container>
  )
}

export default App
