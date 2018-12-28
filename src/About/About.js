import React from 'react'
import './About.css'
import { aboutText } from '../Constants'
import { Spring } from 'react-spring'

const About = () => {
  return (
    <Spring
      from={{ opacity: 0, marginLeft: -10 }}
      to={{ opacity: 1, marginLeft: 0 }}
      delay= '250'
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
