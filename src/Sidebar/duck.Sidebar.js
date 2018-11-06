import { ImageSets, ProductCategories } from '../Constants'

// ========================================
//            ACTIONS
// ========================================
export const SidebarTypes = {
  SELECT_PORTFOLIO_IMAGESET: 'SELECT_PORTFOLIO_IMAGESET',
  SELECT_PRODUCT_CATEGORY: 'SELECT_PRODUCT_CATEGORY'
}
// ========================================
//            REDUCERS
// ========================================

const defaultImageSet = ImageSets.comics
const defaultProductCategory = ProductCategories.originals

export const CurrentImageSet = (state = defaultImageSet, action) => {
  switch (action.type) {
    case SidebarTypes.SELECT_PORTFOLIO_IMAGESET:
      return action.payload
  
    default:
      return state
  }
}

export const CurrentProductCategory = (state = defaultProductCategory, action) => {
  switch (action.type) {
    case SidebarTypes.SELECT_PRODUCT_CATEGORY:
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
  selectProductCategory: (productCategoryName) => ({ type: SidebarTypes.SELECT_PRODUCT_CATEGORY, payload: productCategoryName })
}
