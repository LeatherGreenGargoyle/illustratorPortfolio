import React from 'react'
import './Home.css'
import { Spring } from 'react-spring'

const Home = () => {
  return (
    <Spring
    from={{ opacity: 0 }}
    to={{ opacity: 1 }}
    delay= '250'
    >
    {props => (
      <div className="homeBackground" style={props}>
        <img alt="" src="https://s3-us-west-1.amazonaws.com/mogpoeportfolio/8x10_Moon-minshrunksmallborder.jpg"/>
      </div>
    )}
    </Spring>
  )
}

export default Home
