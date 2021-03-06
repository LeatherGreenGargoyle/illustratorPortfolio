import React from 'react'
import { Switch, Route } from 'react-router-dom'
import { Row, Col } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Spring } from 'react-spring'
import About from '../About/About'
import ConnectedPortfolio from '../Portfolio/container.Portfolio'
import Events from '../Events/container.Events'
import Home from '../Home/Home'
import ProductStore from '../ProductStore/container.ProductStore'
import ConnectedSidebar from '../Sidebar/container.Sidebar'


import './Main.css'

class Main extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      shouldShowMobileMenu: props.shouldShowMobileMenu,
    }
  }

  // FIXME
  static getDerivedStateFromProps(nextProps, prevState) {
    if (nextProps.shouldShowMobileMenu === !prevState.shouldShowMobileMenu) {
      return { shouldShowMobileMenu: nextProps.shouldShowMobileMenu }
    }

    return null
  }

  render() {
    const { onToggleMobileMenuOpen } = this.props
    const { shouldShowMobileMenu } = this.state
    const toggleMobileMenu = () => onToggleMobileMenuOpen(!shouldShowMobileMenu)

    return (
      <div className="App">
        <Row className="header no-gutter">
          <Col lg={9} md={8} sm={8} xs={6} className="titleContainer">
              Jennifer Nguyen
          </Col>
          <Col lg={3} md={4} sm={4} xs={6} className="iconContainer">
            <span className="socialIcon">
              <a
                href="https://www.instagram.com/jennifernguyenillustration/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={['fab', 'instagram']} />
              </a>
            </span>
            <span className="socialIcon fontSizePlus">
              <a
                href="http://jennifernguyenillustration.tumblr.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={['fab', 'tumblr']} />
              </a>
            </span>
            <span className="socialIcon lastIcon fontSizePlus">
              <a
                href="https://www.facebook.com/jennifernguyenillustration/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={['fab', 'facebook-f']} />
              </a>
            </span>
          </Col>
          <div className="divider" />
        </Row>
        <Row className="sidebarSmall">
          <span
            role="button"
            className="sidebarSmallLabel"
            onClick={toggleMobileMenu}
            onKeyUp={toggleMobileMenu}
            tabIndex={0}
          >
            <FontAwesomeIcon className="iconMobileSidebar" icon="bars" size="1x" />
            <span>Menu</span>
          </span>
        </Row>
        <Row style={{ display: shouldShowMobileMenu ? 'block' : 'none' }}>
          { shouldShowMobileMenu
              && (
                <Spring
                  from={{ opacity: 0, marginTop: -20 }}
                  to={{ opacity: 1, marginTop: 0 }}
                  delay="200"
                >
                  { props => (
                    <div
                      style={props}
                    >
                      <ConnectedSidebar />
                    </div>
                  )
                  }
                </Spring>
              )
          }
        </Row>
        <Row>
          <Col lg={3} md={4} sm={12} xs={12} className="fullSidebar">
            <ConnectedSidebar />
          </Col>

          <Col lg={9} md={8} sm={12} xs={12} className="sidebarDivider containerMain">
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/about" component={About} />
              <Route path="/store" component={ProductStore} />
              <Route path="/illustrations" component={ConnectedPortfolio} />
              <Route path="/comics" component={ConnectedPortfolio} />
              <Route path="/events" component={Events} />
            </Switch>
          </Col>
        </Row>
        <Row className="mobileMain">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/store" component={ProductStore} />
            <Route path="/illustrations" component={ConnectedPortfolio} />
            <Route path="/comics" component={ConnectedPortfolio} />
            <Route path="/events" component={Events} />
          </Switch>
        </Row>
        <Row className="iconContainerMobile">
          <span className="socialIconMobile textAlignRight">
            <a
              href="https://www.instagram.com/jennifernguyenillustration/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={['fab', 'instagram']} />
            </a>
          </span>
          <span className="fontSizePlus socialIconMobile textAlignCenter">
            <a
              href="http://jennifernguyenillustration.tumblr.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={['fab', 'tumblr']} />
            </a>
          </span>
          <span className="fontSizePlus socialIconMobile">
            <a
              href="https://www.facebook.com/jennifernguyenillustration/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={['fab', 'facebook-f']} />
            </a>
          </span>
        </Row>
      </div>
    )
  }
}

export default Main
