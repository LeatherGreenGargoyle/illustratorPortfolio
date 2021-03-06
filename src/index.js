import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
// import Test from './test'
import Router from './Router'
import './index.css'

import buildStore from './store'

const store = buildStore()

ReactDOM.render(<Provider store={store}><Router /></Provider>, document.getElementById('root'))
