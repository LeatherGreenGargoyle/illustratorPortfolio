import React from 'react'
import ReactDOM from 'react-dom'
import { MemoryRouter } from 'react-router-dom'
import Header from './Header'

it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<MemoryRouter><Header /></MemoryRouter>, div)
})

it('navigates to Home correctly')
it('navigates to About correctly')
it('navigates to Store correctly')
it('navigates to Portfolio correctly')


