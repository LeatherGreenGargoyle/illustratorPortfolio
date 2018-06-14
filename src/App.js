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
        <Header />
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
