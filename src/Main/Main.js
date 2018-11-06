import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from '../Home/Home'
import About from '../About/About'
import ProductStore from '../ProductStore/container.ProductStore'
import ConnectedPortfolio from '../Portfolio/container.Portfolio'
import './Main.css'

const Main = () => {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/store" component={ProductStore} />
        <Route path="/portfolio" component={ConnectedPortfolio} />
      </Switch>
    </div>
  )
}

export default Main
