import React from 'react'
import './Home.css'
import { Spring } from 'react-spring'
import { Row } from 'react-bootstrap'

const Home = () => {
  return (
    <Spring
    from={{ opacity: 0 }}
    to={{ opacity: 1 }}
    delay= '250'
    >
    {props => (
      <Row className="homeBackground" style={props}>
        <img className="homeBackgroundImage" alt="" src="https://s3-us-west-1.amazonaws.com/mogpoeportfolio/8x10_Moon-minshrunksmallborder.jpg"/>
      </Row>
    )}
    </Spring>
  )
}

export default Home
