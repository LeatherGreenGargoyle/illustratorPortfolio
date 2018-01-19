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
      <Grid>
        <Row>
          <Col xs={0} md={2}>
            <ConnectedSidebar />
          </Col>

          <Col xs={10} md={10} className="sidebar">
            <Main />
          </Col>
        </Row>
      </Grid>
    </div>
  )
}

export default App
