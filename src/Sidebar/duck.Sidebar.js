import { ImageSets, ProductCategories } from '../Constants'

// ========================================
//            ACTIONS
// ========================================
export const SidebarTypes = {
  SELECT_PORTFOLIO_IMAGESET: 'SELECT_PORTFOLIO_IMAGESET',
  SELECT_PORTFOLIO_YEAR: 'SELECT_PORTFOLIO_YEAR',
  SELECT_PRODUCT_CATEGORY: 'SELECT_PRODUCT_CATEGORY',
  SELECT_OPEN_SUBMENU: 'SELECT_OPEN_SUBMENU',
}
// ========================================
//            REDUCERS
// ========================================

const defaultImageSet = ImageSets.comics
const defaultProductCategory = ProductCategories.originals
const defaultPortfolioYear = 2018
const defaultSubmenu = null

export const CurrentImageSet = (state = defaultImageSet, action) => {
  switch (action.type) {
    case SidebarTypes.SELECT_PORTFOLIO_IMAGESET:
      return action.payload
  
    default:
      return state
  }
}

export const CurrentOpenSubmenu = (state = defaultSubmenu, action) => {
  switch (action.type) {
    case SidebarTypes.SELECT_OPEN_SUBMENU:
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

export const CurrentPortfolioYear = (state = defaultPortfolioYear, action) => {
  switch (action.type) {
    case SidebarTypes.SELECT_PORTFOLIO_YEAR:
      return action.payload

    default:
      return state
  }
}

// ========================================
//            ACTION CREATORS
// ========================================
export const SidebarActions = {
  selectOpenSubmenu: (submenuName) => ({ type: SidebarTypes.SELECT_OPEN_SUBMENU, payload: submenuName }),
  selectPortfolioImageSet: (imageSetName) => ({ type: SidebarTypes.SELECT_PORTFOLIO_IMAGESET, payload: imageSetName }),
  selectPortfolioYear: (portfolioYear) => ({ type: SidebarTypes.SELECT_PORTFOLIO_YEAR, payload: portfolioYear }),
  selectProductCategory: (productCategoryName) => ({ type: SidebarTypes.SELECT_PRODUCT_CATEGORY, payload: productCategoryName })
}
