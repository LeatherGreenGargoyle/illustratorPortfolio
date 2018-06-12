import { comicLinks, illustrationLinks } from '../Constants'

// ========================================
//            ACTIONS
// ========================================
export const sidebarTypes = {
  SELECT_PORTFOLIO_COMICS: 'SELECT_PORTFOLIO_COMICS',
  SELECT_PORTFOLIO_ILLUSTRATIONS: 'SELECT_PORTFOLIO_ILLUSTRATIONS',
}
// ========================================
//            REDUCERS
// ========================================
const defaultProps = comicLinks

export default (state = defaultProps, action) => {
  switch (action.type) {
    case sidebarTypes.SELECT_PORTFOLIO_COMICS:
      return comicLinks
    case sidebarTypes.SELECT_PORTFOLIO_ILLUSTRATIONS:
      return illustrationLinks
    default:
      return state
  }
}
// ========================================
//            ACTION CREATORS
// ========================================
export const sidebarActions = {
  selectComicsPortfolio: () => ({ type: sidebarTypes.SELECT_PORTFOLIO_COMICS }),
  selectIllustrationsPortfolio: () => ({ type: sidebarTypes.SELECT_PORTFOLIO_ILLUSTRATIONS }),
}
