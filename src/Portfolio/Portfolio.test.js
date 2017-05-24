import ReactDOM from 'react-dom'
import React from 'react'
import Portfolio from './Portfolio'
import duck, { actions } from './duck.Portfolio'

it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<Portfolio />, div)
})

describe('duck.Portfolio', () => {
  it('has a default state')
  it('should add URLs to state', () => {

    expect(duck({}, actions.storePortfolioUrls(['www.test.com']))).toEqual(
      {
        portfolioUrls: ['www.test.com'],
      },
    )
  })
})

it('contains images after rendering')
