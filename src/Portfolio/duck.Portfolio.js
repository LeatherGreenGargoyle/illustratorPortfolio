// ========================================
//            ACTIONS
// ========================================
export const portfolioTypes = {
  STORE_PORTFOLIO_URLS: 'STORE_PORTFOLIO_URLS',
}
// ========================================
//            REDUCERS
// ========================================
const defaultProps = {
  portfolioUrls: ['http://cumbrianrun.co.uk/wp-content/uploads/2014/02/default-placeholder-300x300.png',
    'http://cumbrianrun.co.uk/wp-content/uploads/2014/02/default-placeholder-300x300.png',
    'http://cumbrianrun.co.uk/wp-content/uploads/2014/02/default-placeholder-300x300.png'],
}

export default (state = defaultProps, action) => {
  switch (action.type) {
    case portfolioTypes.STORE_PORTFOLIO_URLS:
      return { ...state, portfolioUrls: action.payload }
    default:
      return state
  }
}
// ========================================
//            ACTION CREATORS
// ========================================
export const portfolioActions = {
  storePortfolioUrls: urlArr => ({ type: portfolioTypes.STORE_PORTFOLIO_URLS, payload: urlArr }),
}
