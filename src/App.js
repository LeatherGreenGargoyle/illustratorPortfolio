import React from 'react'
// import logo from './logo.svg'
import './App.css'
import Main from './Main/Main'
import ConnectedHeader from './Header/container.Header'

// add header after creating and testing Main

const App = () => {
  return (
    <div className="App">
      <ConnectedHeader />
      <hr className="divider" />
      <Main />
    </div>
  )
}

export default App
