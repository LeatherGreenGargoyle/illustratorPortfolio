import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from '../Home/Home'
import About from '../About/About'
import ProductStore from '../ProductStore/ProductStore'
import ConnectedPortfolio from '../Portfolio/container.Portfolio'
import './Main.css'

const Main = () => {
  return (
    <div>
      <p>Im the main!</p>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/productstore" component={ProductStore} />
        <Route path="/portfolio" component={ConnectedPortfolio} />
      </Switch>
    </div>
  )
}

export default Main
