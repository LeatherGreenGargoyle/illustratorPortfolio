import { ImageSets, ProductCategories } from '../Constants'

// ========================================
//            ACTIONS
// ========================================
export const SidebarTypes = {
  SELECT_EVENT_YEAR: 'SELECT_EVENT_YEAR',
  SELECT_OPEN_SUBMENU: 'SELECT_OPEN_SUBMENU',
  SELECT_PORTFOLIO_IMAGESET: 'SELECT_PORTFOLIO_IMAGESET',
  SELECT_PORTFOLIO_YEAR: 'SELECT_PORTFOLIO_YEAR',
  SELECT_PRODUCT_CATEGORY: 'SELECT_PRODUCT_CATEGORY',
  SELECT_SUBMENU_ITEM: 'SELECT_SUBMENU_ITEM',
}
// ========================================
//            REDUCERS
// ========================================

const defaultImageSet = ImageSets.comics
const defaultProductCategory = ProductCategories.originals
const defaultPortfolioYear = 2018
const defaultSubmenu = null
const defaultSubmenuItem = ''
const defaultEventYear = 2018

export const CurrentEventYear = (state = defaultEventYear, action) => {
  switch (action.type) {
    case SidebarTypes.SELECT_EVENT_YEAR:
      return action.payload

    default: return state
  }
}

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

export const CurrentPortfolioYear = (state = defaultPortfolioYear, action) => {
  switch (action.type) {
    case SidebarTypes.SELECT_PORTFOLIO_YEAR:
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

export const CurrentSelectedSubmenuItem = (state = defaultSubmenuItem, action) => {
  switch (action.type) {
    case SidebarTypes.SELECT_SUBMENU_ITEM:
      return action.payload

    default:
      return state
  }
}

// ========================================
//            ACTION CREATORS
// ========================================
export const SidebarActions = {
  selectEventYear: eventYear => ({ type: SidebarTypes.SELECT_EVENT_YEAR, payload: eventYear }),
  selectOpenSubmenu: submenuName => ({ type: SidebarTypes.SELECT_OPEN_SUBMENU, payload: submenuName }),
  selectPortfolioImageSet: imageSetName => ({ type: SidebarTypes.SELECT_PORTFOLIO_IMAGESET, payload: imageSetName }),
  selectPortfolioYear: portfolioYear => ({ type: SidebarTypes.SELECT_PORTFOLIO_YEAR, payload: portfolioYear }),
  selectProductCategory: productCategoryName => ({ type: SidebarTypes.SELECT_PRODUCT_CATEGORY, payload: productCategoryName }),
  selectSubmenuItem: submenuItemName => ({ type: SidebarTypes.SELECT_SUBMENU_ITEM, payload: submenuItemName }),
}
