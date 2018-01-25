import React from 'react'
import './About.css'
import { aboutText } from '../Constants'

const About = () => {
  return (
    <div className="containerAbout">
      <div className="textContainer">
        <p className="headerAbout">About the Artist</p>
        <p>{aboutText}</p>
      </div>
    </div>
  )
}

export default About
