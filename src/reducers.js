import { combineReducers } from 'redux'
import {
  CurrentEventYear,
  CurrentImageSet,
  CurrentProductCategory,
  CurrentPortfolioYear,
  CurrentOpenSubmenu,
  CurrentSelectedSubmenuItem,
} from './Sidebar/duck.Sidebar'

import {
  ShouldShowMobileMenu,
} from './Main/duck.Main'

export default combineReducers({
  CurrentEventYear,
  CurrentImageSet,
  CurrentProductCategory,
  CurrentPortfolioYear,
  CurrentOpenSubmenu,
  CurrentSelectedSubmenuItem,
  ShouldShowMobileMenu,
})
