import ReactDOM from 'react-dom'
import React from 'react'
import Portfolio from './Portfolio'

let div
beforeEach(() => {
  div = document.createElement('div')
  ReactDOM.render(<Portfolio />, div)
})

it('retrieves image URLs upon mounting')
it('contains images after rendering')
