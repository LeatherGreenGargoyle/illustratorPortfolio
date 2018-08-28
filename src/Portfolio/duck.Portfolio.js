import comicLinks from '../Constants'

// ========================================
//            ACTIONS
// ========================================
export const portfolioTypes = {
  STORE_PORTFOLIO_URLS: 'STORE_PORTFOLIO_URLS',
}
// ========================================
//            REDUCERS
// ========================================

export default (state = comicLinks, action) => {
  switch (action.type) {
    case portfolioTypes.STORE_PORTFOLIO_URLS:
      return action.payload
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
