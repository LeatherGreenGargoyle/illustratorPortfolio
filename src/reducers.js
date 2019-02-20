import { combineReducers } from 'redux'
import {
  CurrentImageSet,
  CurrentProductCategory,
  CurrentPortfolioYear,
  CurrentOpenSubmenu,
  CurrentSelectedSubmenuItem
} from './Sidebar/duck.Sidebar'

import {
  ShouldShowMobileMenu
} from './Main/duck.Main'

export default combineReducers({
  CurrentImageSet,
  CurrentProductCategory,
  CurrentPortfolioYear,
  CurrentOpenSubmenu,
  CurrentSelectedSubmenuItem,
  ShouldShowMobileMenu
})
