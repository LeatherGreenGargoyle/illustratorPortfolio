import { combineReducers } from 'redux'
import portfolioImgObjs from './Portfolio/duck.Portfolio'
import selectedPortfolioType from './Header/duck.Header'

export default combineReducers({ portfolioImgObjs, selectedPortfolioType })
