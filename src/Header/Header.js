import React from 'react'
import { Link } from 'react-router-dom'
import { Grid, Row, Col } from 'react-bootstrap'
import './Header.css'

class Header extends React.Component {
  constructor() {
    super()
    this.state = {
      currentPage: 'Home',
      showPortfolioSubmenu: false,
    }

    this.handleRouteClick = this.handleRouteClick.bind(this)
    this.onMouseEnter = this.onMouseEnter.bind(this)
    this.onMouseLeave = this.onMouseLeave.bind(this)
  }


  onMouseEnter() {
    this.setState({
      showPortfolioSubmenu: true,
    })
  }

  onMouseLeave() {
    this.setState({
      showPortfolioSubmenu: false,
    })
  }

  handleRouteClick(newRoute) {
    this.setState({
      currentPage: newRoute,
    })
  }

  render() {
    const { onSelectIllustrations, onSelectComics } = this.props
    return (
      <div className="headerContainer">
        <Grid>
          <Row>

            <Col xs={12} md={6} className="headerTitle">
              Jennifer Nguyen
            </Col>

            <Col xs={4} md={2} >
              <span className={this.state.currentPage === 'Home' ? 'headerSelectedLink' : 'headerLink'}>
                <Link to="/" onClick={() => this.handleRouteClick('Home')}>
                  Home
                </Link>
              </span>
            </Col>

            <Col xs={4} md={2}>
              <span className={this.state.currentPage === 'About' ? 'headerSelectedLink' : 'headerLink'}>
                <Link to="/about" onClick={() => this.handleRouteClick('About')}>
                  About
                </Link>
              </span>
            </Col>

            <Col xs={4} md={2}>
              <div
                className={this.state.currentPage === 'Portfolio' ? 'headerSelectedLink' : 'headerLink'}
                onMouseEnter={this.onMouseEnter}
                onMouseLeave={this.onMouseLeave}
              >
                <Link to="/portfolio" onClick={() => this.handleRouteClick('Portfolio')}>
                  Portfolio
                </Link>
              </div>

              <div
                className="dropdownMenu"
                style={{ display: this.state.showPortfolioSubmenu ? 'inline' : 'none' }}
                onMouseEnter={this.onMouseEnter}
                onMouseLeave={this.onMouseLeave}
              >
                <div className="dropdownItem">
                  <Link
                    to="/portfolio"
                    onClick={() => {
                      console.log('clicked illustrations')
                      this.handleRouteClick('Portfolio')
                      onSelectIllustrations()
                    }}
                  >
                    Illustrations
                  </Link>
                </div>

                <div className="dropdownItem">
                  <Link
                    to="/portfolio"
                    onClick={() => {
                      console.log('clicked comics')
                      this.handleRouteClick('Portfolio')
                      onSelectComics()
                    }}
                  >
                    Comics
                  </Link>
                </div>
              </div>
            </Col>
          </Row>
        </Grid>
      </div>
    )
  }
}

export default Header
