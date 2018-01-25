import React from 'react'
import { Grid, Row, Col } from 'react-bootstrap'
import './App.css'
import Main from './Main/Main'
import ConnectedSidebar from './Sidebar/container.Sidebar'
import ConnectedHeader from './Header/container.Header'

const App = () => {
  return (
    <div className="App">
      <Row className="header">
        <ConnectedHeader />
        <div className="divider"></div>
      </Row>
      <Grid className="no-gutter">
        <Row>
          <Col md={2}>
            <ConnectedSidebar />
          </Col>

          <Col md={10} className="sidebarDivider containerMain">
            <Main />
          </Col>
        </Row>
      </Grid>
    </div>
  )
}

export default App
