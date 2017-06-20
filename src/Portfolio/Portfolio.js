import React from 'react'
import './Portfolio.css'

const Portfolio = ({ urls }) => {
  console.log('urls', urls)
  let mapKey = 0
  return (
    <div>
      <p>I AM THE PORTFOLIO PAGE</p>
      { urls.map(url => {
        mapKey++;
        return <img src={url} key={mapKey}/>
      }) }
    </div>
  )
}

export default Portfolio

// onMount, should retrieve image urls, then map them out as images
// make this a presentational component that passes props down to functional comp
