import React, { Component } from 'react'
// import logo from './logo.svg'
import './App.css'
import Main from './Main/Main'
import Header from './Header/Header'

// add header after creating and testing Main

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Main />
      </div>
    )
  }
}

export default App
