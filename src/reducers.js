import { combineReducers } from 'redux'

import configureStore from './store'
import portfolioUrls from './Portfolio/duck.Portfolio'

export default () => {
  const rootReducer = combineReducers({
    portfolioUrls,
  })

  return configureStore(rootReducer)
}

