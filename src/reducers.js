import { combineReducers } from 'redux'
import {
  CurrentImageSet,
  CurrentProductCategory,
  CurrentPortfolioYear,
  CurrentOpenSubmenu,
  CurrentSelectedSubmenuItem
} from './Sidebar/duck.Sidebar'

export default combineReducers({
  CurrentImageSet,
  CurrentProductCategory,
  CurrentPortfolioYear,
  CurrentOpenSubmenu,
  CurrentSelectedSubmenuItem
})
