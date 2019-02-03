import './App.css'
import ConnectedSidebar from './Sidebar/container.Sidebar'
import Main from './Main/Main'
import React from 'react'
import { Row, Col } from 'react-bootstrap'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Container } from 'semantic-ui-react';
import { faAngleLeft, faAngleRight, faBars } from '@fortawesome/free-solid-svg-icons'
import { Spring } from 'react-spring'
library.add(fab, faAngleLeft, faAngleRight, faBars)

class App extends React.Component {

  constructor() {
    super()
    this.state = {
      showMobileMenu : false,
    }

    this.onMobileMenuClick = this.onMobileMenuClick.bind(this)
  }

  onMobileMenuClick() {
    this.setState({
      showMobileMenu : !this.state['showMobileMenu']
    })
  }

  render() {
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
          <span className="sidebarSmallIcon">
            <FontAwesomeIcon icon="bars" size="1x" onClick={this.onMobileMenuClick}/>
          </span>
        </Row>
        <Row style={{ display : this.state['showMobileMenu'] ? 'block' : 'none' }}>
          { this.state['showMobileMenu'] &&
              (<Spring
                from={{ opacity: 0, marginTop: -20 }}
                to={{ opacity: 1, marginTop: 0 }}
                delay= '200'>
                { props => <div style={props}> <ConnectedSidebar /> </div> }
              </Spring>)
          }
        </Row>
        <Row>
          <Col lg={3} md={4} sm={12} xs={12} className="fullSidebar">
            <ConnectedSidebar />
          </Col>
  
          <Col lg={9} md={8} sm={12} xs={12} className="sidebarDivider containerMain">
            <Main />
          </Col>
        </Row>
        <Row className="mobileMain">
          <Main />
        </Row>
      </Container>
    )
  }
}

export default App
