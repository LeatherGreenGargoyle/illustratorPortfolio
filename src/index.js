import { BrowserRouter } from 'react-router-dom'
import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import App from './App'
import './index.css'

import createStore from './reducers'

const store = createStore()
ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>,
  </Provider>,
  document.getElementById('root'),
)
