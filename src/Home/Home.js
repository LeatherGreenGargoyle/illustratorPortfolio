import React from 'react'
import Instafeed from 'instafeed.js'
import './Home.css'

const Home = () => {
  const feed = new Instafeed({
    get: '',
    userId: '',
    clientId: '',
  })
  feed.run()

  return (
    <div className="homeBackground" id="instafeed" />
  )
}

export default Home
