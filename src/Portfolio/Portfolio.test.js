import ReactDOM from 'react-dom'
import React from 'react'
import Portfolio from './Portfolio'

it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<Portfolio />, div)
})
