import { combineReducers } from 'redux'
import {
  CurrentImageSet,
  CurrentProductCategory,
  CurrentPortfolioYear,
  CurrentOpenSubmenu
} from './Sidebar/duck.Sidebar'

export default combineReducers({
  CurrentImageSet,
  CurrentProductCategory,
  CurrentPortfolioYear,
  CurrentOpenSubmenu
})
