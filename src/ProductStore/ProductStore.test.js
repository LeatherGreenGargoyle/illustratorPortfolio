import React from 'react'
import ReactDOM from 'react-dom'
import ProductStore from './ProductStore'

it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<ProductStore />, div)
})
