import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from '../Home/Home'
import About from '../About/About'
import './Main.css'

class Main extends Component {
  render() {
    return (
      <main>
        <p>Im the main!</p>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          {/*<Route path="/store" component={Store} />
          <Route path="/portfolio" component={Portfolio} />*/}
        </Switch>
      </main>
    )
  }
}

export default Main
