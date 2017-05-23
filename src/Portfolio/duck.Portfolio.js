// ========================================
//            ACTIONS
// ========================================
export const types = {
  STORE_PORTFOLIO_URLS: 'STORE_IMG_URLS',
}
// ========================================
//            REDUCERS
// ========================================
const defaultProps = {
  STORE_PORTFOLIO_URLS: ['http://cumbrianrun.co.uk/wp-content/uploads/2014/02/default-placeholder-300x300.png',
    'http://cumbrianrun.co.uk/wp-content/uploads/2014/02/default-placeholder-300x300.png',
    'http://cumbrianrun.co.uk/wp-content/uploads/2014/02/default-placeholder-300x300.png'],
}

export default (state = defaultProps, action) => {
  switch (action.type) {
    case types.STORE_PORTFOLIO_URLS:
      return { ...state, portfolioUrls: action.payload }
    default:
      return state
  }
}
// ========================================
//            ACTION CREATORS
// ========================================
export const actions = {
  storePortfolioUrls: urlArr => ({ type: types.STORE_PORTFOLIO_URLS, payload: urlArr }),
}
