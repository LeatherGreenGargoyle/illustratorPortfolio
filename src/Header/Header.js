import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Header extends Component {
  render() {
    return (
      <header>
        <nav>
          <ul>
            <li Link to="/">Home</li>
            <li Link to="/about">About</li>
            {/*<li Link to="/store">Store</li>
            <li Link to="/portfolio">Portfolio</li>*/}
          </ul>
        </nav>
      </header>
    )
  }
}
