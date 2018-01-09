// ========================================
//            ACTIONS
// ========================================
export const headerTypes = {
  SELECT_PORTFOLIO_COMICS: 'SELECT_PORTFOLIO_COMICS',
  SELECT_PORTFOLIO_ILLUSTRATIONS: 'SELECT_PORTFOLIO_ILLUSTRATIONS',
}
// ========================================
//            REDUCERS
// ========================================
const defaultProps = {
  portfolioType: 'comics',
}

export default (state = defaultProps, action) => {
  const newState = {}
  switch (action.type) {
    case headerTypes.SELECT_PORTFOLIO_COMICS:
      newState.portfolioType = 'comics'
      return newState
    case headerTypes.SELECT_PORTFOLIO_ILLUSTRATIONS:
      newState.portfolioType = 'illustrations'
      return newState
    default:
      return state
  }
}
// ========================================
//            ACTION CREATORS
// ========================================
export const headerActions = {
  selectComicsPortfolio: () => ({ type: headerTypes.SELECT_PORTFOLIO_COMICS, payload: '' }),
  selectIllustrationsPortfolio: () => ({ type: headerTypes.SELECT_PORTFOLIO_ILLUSTRATIONS, payload: '' }),
}
