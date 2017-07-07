import React from 'react'
// import logo from './logo.svg'
import './App.css'
import Main from './Main/Main'
import Header from './Header/Header'

// add header after creating and testing Main

const App = () => {
  const hrStyles = {
    'marginTop': '-0.5em',
    'color': 'black',
    'width': '70%',

  }
  return (
    <div className="App">
      <Header />
      <hr style={hrStyles} />
      <Main />
    </div>
  )
}

export default App
