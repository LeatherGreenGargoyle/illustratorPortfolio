import { comicLinks, illustrationLinks } from '../Constants'

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
const defaultProps = comicLinks

export default (state = defaultProps, action) => {
  console.log(action.type)
  switch (action.type) {
    case headerTypes.SELECT_PORTFOLIO_COMICS:
      return comicLinks
    case headerTypes.SELECT_PORTFOLIO_ILLUSTRATIONS:
      return illustrationLinks
    default:
      return state
  }
}
// ========================================
//            ACTION CREATORS
// ========================================
export const headerActions = {
  selectComicsPortfolio: () => ({ type: headerTypes.SELECT_PORTFOLIO_COMICS }),
  selectIllustrationsPortfolio: () => ({ type: headerTypes.SELECT_PORTFOLIO_ILLUSTRATIONS }),
}
