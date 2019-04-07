import React from 'react'
import './About.css'
import { Spring } from 'react-spring'
import { aboutText } from '../Constants'

const About = () => {
  return (
    <Spring
      from={{ opacity: 0, marginLeft: -10 }}
      to={{ opacity: 1, marginLeft: 0 }}
      delay="250"
    >
      {props => (
        <div className="containerAbout" style={props}>
          <div className="textContainer">
            <p className="headerAbout">About the Artist</p>
            <p>{aboutText}</p>
          </div>
        </div>
      )}
    </Spring>
  )
}

export default About
