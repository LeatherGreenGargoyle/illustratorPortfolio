import { combineReducers } from 'redux'

import configureStore from './store'
import portfolioReducer from './Portfolio/duck.Portfolio'

export default () => {
  const rootReducer = combineReducers({
    portfolioReducer,
  })

  return configureStore(rootReducer)
}

