import { ImageSets } from '../Constants'

// ========================================
//            ACTIONS
// ========================================
export const SidebarTypes = {
  SELECT_PORTFOLIO_IMAGESET: 'SELECT_PORTFOLIO_IMAGESET',
}
// ========================================
//            REDUCERS
// ========================================

const defaultImageSet = ImageSets.comics

export const CurrentImageSet = (state = defaultImageSet, action) => {
  switch (action.type) {
    case SidebarTypes.SELECT_PORTFOLIO_IMAGESET:
      return action.payload
  
    default:
      return state
  }
}

// ========================================
//            ACTION CREATORS
// ========================================
export const SidebarActions = {
  selectPortfolioImageSet: (imageSetName) => ({ type: SidebarTypes.SELECT_PORTFOLIO_IMAGESET, payload: imageSetName }),
}
